var PE = Object.defineProperty;
var OE = (e, t, n) => t in e ? PE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ji = (e, t, n) => OE(e, typeof t != "symbol" ? t + "" : t, n);
function ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vv = { exports: {} }, qs = {}, gv = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya = Symbol.for("react.element"), FE = Symbol.for("react.portal"), RE = Symbol.for("react.fragment"), DE = Symbol.for("react.strict_mode"), ME = Symbol.for("react.profiler"), LE = Symbol.for("react.provider"), jE = Symbol.for("react.context"), BE = Symbol.for("react.forward_ref"), zE = Symbol.for("react.suspense"), HE = Symbol.for("react.memo"), VE = Symbol.for("react.lazy"), Af = Symbol.iterator;
function $E(e) {
  return e === null || typeof e != "object" ? null : (e = Af && e[Af] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, yv = Object.assign, Ev = {};
function Bi(e, t, n) {
  this.props = e, this.context = t, this.refs = Ev, this.updater = n || xv;
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wv() {
}
wv.prototype = Bi.prototype;
function tp(e, t, n) {
  this.props = e, this.context = t, this.refs = Ev, this.updater = n || xv;
}
var np = tp.prototype = new wv();
np.constructor = tp;
yv(np, Bi.prototype);
np.isPureReactComponent = !0;
var Tf = Array.isArray, bv = Object.prototype.hasOwnProperty, rp = { current: null }, kv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cv(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) bv.call(t, r) && !kv.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: Ya, type: e, key: a, ref: o, props: i, _owner: rp.current };
}
function UE(e, t) {
  return { $$typeof: Ya, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ip(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ya;
}
function GE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Nf = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? GE("" + e.key) : t.toString(36);
}
function Ho(e, t, n, r, i) {
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
        case Ya:
        case FE:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Ml(o, 0) : r, Tf(i) ? (n = "", e != null && (n = e.replace(Nf, "$&/") + "/"), Ho(i, t, n, "", function(u) {
    return u;
  })) : i != null && (ip(i) && (i = UE(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Nf, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Tf(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Ml(a, s);
    o += Ho(a, t, n, l, i);
  }
  else if (l = $E(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Ml(a, s++), o += Ho(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function fo(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ho(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function WE(e) {
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
var ct = { current: null }, Vo = { transition: null }, qE = { ReactCurrentDispatcher: ct, ReactCurrentBatchConfig: Vo, ReactCurrentOwner: rp };
function Sv() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: fo, forEach: function(e, t, n) {
  fo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ip(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = Bi;
ie.Fragment = RE;
ie.Profiler = ME;
ie.PureComponent = tp;
ie.StrictMode = DE;
ie.Suspense = zE;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qE;
ie.act = Sv;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = yv({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = rp.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) bv.call(t, l) && !kv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ya, type: e.type, key: i, ref: a, props: r, _owner: o };
};
ie.createContext = function(e) {
  return e = { $$typeof: jE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: LE, _context: e }, e.Consumer = e;
};
ie.createElement = Cv;
ie.createFactory = function(e) {
  var t = Cv.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: BE, render: e };
};
ie.isValidElement = ip;
ie.lazy = function(e) {
  return { $$typeof: VE, _payload: { _status: -1, _result: e }, _init: WE };
};
ie.memo = function(e, t) {
  return { $$typeof: HE, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Vo.transition;
  Vo.transition = {};
  try {
    e();
  } finally {
    Vo.transition = t;
  }
};
ie.unstable_act = Sv;
ie.useCallback = function(e, t) {
  return ct.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return ct.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return ct.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return ct.current.useEffect(e, t);
};
ie.useId = function() {
  return ct.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return ct.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return ct.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return ct.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return ct.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return ct.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return ct.current.useRef(e);
};
ie.useState = function(e) {
  return ct.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return ct.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return ct.current.useTransition();
};
ie.version = "18.3.1";
gv.exports = ie;
var v = gv.exports;
const m = /* @__PURE__ */ ji(v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XE = v, QE = Symbol.for("react.element"), KE = Symbol.for("react.fragment"), ZE = Object.prototype.hasOwnProperty, YE = XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, JE = { key: !0, ref: !0, __self: !0, __source: !0 };
function _v(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ZE.call(t, r) && !JE.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: QE, type: e, key: a, ref: o, props: i, _owner: YE.current };
}
qs.Fragment = KE;
qs.jsx = _v;
qs.jsxs = _v;
vv.exports = qs;
var b = vv.exports, Av = { exports: {} }, Nt = {}, Tv = { exports: {} }, Nv = {};
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
  function t(P, F) {
    var z = P.length;
    P.push(F);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, V = P[W];
      if (0 < i(V, F)) P[W] = F, P[z] = V, z = W;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var F = P[0], z = P.pop();
    if (z !== F) {
      P[0] = z;
      e: for (var W = 0, V = P.length, Ne = V >>> 1; W < Ne; ) {
        var pe = 2 * (W + 1) - 1, ne = P[pe], J = pe + 1, Ee = P[J];
        if (0 > i(ne, z)) J < V && 0 > i(Ee, ne) ? (P[W] = Ee, P[J] = z, W = J) : (P[W] = ne, P[pe] = z, W = pe);
        else if (J < V && 0 > i(Ee, z)) P[W] = Ee, P[J] = z, W = J;
        else break e;
      }
    }
    return F;
  }
  function i(P, F) {
    var z = P.sortIndex - F.sortIndex;
    return z !== 0 ? z : P.id - F.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, h = !1, w = !1, y = !1, k = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(P) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= P) r(u), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(u);
    }
  }
  function C(P) {
    if (y = !1, E(P), !w) if (n(l) !== null) w = !0, Z(S);
    else {
      var F = n(u);
      F !== null && Y(C, F.startTime - P);
    }
  }
  function S(P, F) {
    w = !1, y && (y = !1, g(A), A = -1), h = !0;
    var z = f;
    try {
      for (E(F), d = n(l); d !== null && (!(d.expirationTime > F) || P && !M()); ) {
        var W = d.callback;
        if (typeof W == "function") {
          d.callback = null, f = d.priorityLevel;
          var V = W(d.expirationTime <= F);
          F = e.unstable_now(), typeof V == "function" ? d.callback = V : d === n(l) && r(l), E(F);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ne = !0;
      else {
        var pe = n(u);
        pe !== null && Y(C, pe.startTime - F), Ne = !1;
      }
      return Ne;
    } finally {
      d = null, f = z, h = !1;
    }
  }
  var _ = !1, T = null, A = -1, I = 5, N = -1;
  function M() {
    return !(e.unstable_now() - N < I);
  }
  function L() {
    if (T !== null) {
      var P = e.unstable_now();
      N = P;
      var F = !0;
      try {
        F = T(!0, P);
      } finally {
        F ? R() : (_ = !1, T = null);
      }
    } else _ = !1;
  }
  var R;
  if (typeof x == "function") R = function() {
    x(L);
  };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(), Q = q.port2;
    q.port1.onmessage = L, R = function() {
      Q.postMessage(null);
    };
  } else R = function() {
    k(L, 0);
  };
  function Z(P) {
    T = P, _ || (_ = !0, R());
  }
  function Y(P, F) {
    A = k(function() {
      P(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || h || (w = !0, Z(S));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = f;
    }
    var z = f;
    f = F;
    try {
      return P();
    } finally {
      f = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, F) {
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
    var z = f;
    f = P;
    try {
      return F();
    } finally {
      f = z;
    }
  }, e.unstable_scheduleCallback = function(P, F, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, P) {
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
    return V = z + V, P = { id: c++, callback: F, priorityLevel: P, startTime: z, expirationTime: V, sortIndex: -1 }, z > W ? (P.sortIndex = z, t(u, P), n(l) === null && P === n(u) && (y ? (g(A), A = -1) : y = !0, Y(C, z - W))) : (P.sortIndex = V, t(l, P), w || h || (w = !0, Z(S))), P;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(P) {
    var F = f;
    return function() {
      var z = f;
      f = F;
      try {
        return P.apply(this, arguments);
      } finally {
        f = z;
      }
    };
  };
})(Nv);
Tv.exports = Nv;
var ew = Tv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tw = v, At = ew;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Iv = /* @__PURE__ */ new Set(), _a = {};
function Dr(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (_a[e] = t, e = 0; e < t.length; e++) Iv.add(t[e]);
}
var Pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ou = Object.prototype.hasOwnProperty, nw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, If = {}, Pf = {};
function rw(e) {
  return Ou.call(Pf, e) ? !0 : Ou.call(If, e) ? !1 : nw.test(e) ? Pf[e] = !0 : (If[e] = !0, !1);
}
function iw(e, t, n, r) {
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
function aw(e, t, n, r) {
  if (t === null || typeof t > "u" || iw(e, t, n, r)) return !0;
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
function pt(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Qe[e] = new pt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Qe[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Qe[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Qe[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Qe[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Qe[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Qe[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Qe[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Qe[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ap = /[\-:]([a-z])/g;
function op(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ap,
    op
  );
  Qe[t] = new pt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ap, op);
  Qe[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ap, op);
  Qe[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Qe[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new pt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Qe[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sp(e, t, n, r) {
  var i = Qe.hasOwnProperty(t) ? Qe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (aw(t, n, i, r) && (n = null), r || i === null ? rw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ln = tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mo = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), Zr = Symbol.for("react.fragment"), lp = Symbol.for("react.strict_mode"), Fu = Symbol.for("react.profiler"), Pv = Symbol.for("react.provider"), Ov = Symbol.for("react.context"), up = Symbol.for("react.forward_ref"), Ru = Symbol.for("react.suspense"), Du = Symbol.for("react.suspense_list"), cp = Symbol.for("react.memo"), Bn = Symbol.for("react.lazy"), Fv = Symbol.for("react.offscreen"), Of = Symbol.iterator;
function ea(e) {
  return e === null || typeof e != "object" ? null : (e = Of && e[Of] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Te = Object.assign, Ll;
function ca(e) {
  if (Ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || "";
  }
  return `
` + Ll + e;
}
var jl = !1;
function Bl(e, t) {
  if (!e || jl) return "";
  jl = !0;
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
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ca(e) : "";
}
function ow(e) {
  switch (e.tag) {
    case 5:
      return ca(e.type);
    case 16:
      return ca("Lazy");
    case 13:
      return ca("Suspense");
    case 19:
      return ca("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bl(e.type, !1), e;
    case 11:
      return e = Bl(e.type.render, !1), e;
    case 1:
      return e = Bl(e.type, !0), e;
    default:
      return "";
  }
}
function Mu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case Kr:
      return "Portal";
    case Fu:
      return "Profiler";
    case lp:
      return "StrictMode";
    case Ru:
      return "Suspense";
    case Du:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ov:
      return (e.displayName || "Context") + ".Consumer";
    case Pv:
      return (e._context.displayName || "Context") + ".Provider";
    case up:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case cp:
      return t = e.displayName || null, t !== null ? t : Mu(e.type) || "Memo";
    case Bn:
      t = e._payload, e = e._init;
      try {
        return Mu(e(t));
      } catch {
      }
  }
  return null;
}
function sw(e) {
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
      return Mu(t);
    case 8:
      return t === lp ? "StrictMode" : "Mode";
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
function nr(e) {
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
function Rv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lw(e) {
  var t = Rv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ho(e) {
  e._valueTracker || (e._valueTracker = lw(e));
}
function Dv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Rv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function as(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lu(e, t) {
  var n = t.checked;
  return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ff(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = nr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Mv(e, t) {
  t = t.checked, t != null && sp(e, "checked", t, !1);
}
function ju(e, t) {
  Mv(e, t);
  var n = nr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bu(e, t.type, nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bu(e, t, n) {
  (t !== "number" || as(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pa = Array.isArray;
function di(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Df(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (pa(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: nr(n) };
}
function Lv(e, t) {
  var n = nr(t.value), r = nr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Mf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? jv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vo, Bv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vo = vo || document.createElement("div"), vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Aa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ha = {
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
}, uw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ha).forEach(function(e) {
  uw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ha[t] = ha[e];
  });
});
function zv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ha.hasOwnProperty(e) && ha[e] ? ("" + t).trim() : t + "px";
}
function Hv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = zv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var cw = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vu(e, t) {
  if (t) {
    if (cw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function $u(e, t) {
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
var Uu = null;
function pp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Gu = null, fi = null, mi = null;
function Lf(e) {
  if (e = to(e)) {
    if (typeof Gu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = Ys(t), Gu(e.stateNode, e.type, t));
  }
}
function Vv(e) {
  fi ? mi ? mi.push(e) : mi = [e] : fi = e;
}
function $v() {
  if (fi) {
    var e = fi, t = mi;
    if (mi = fi = null, Lf(e), t) for (e = 0; e < t.length; e++) Lf(t[e]);
  }
}
function Uv(e, t) {
  return e(t);
}
function Gv() {
}
var zl = !1;
function Wv(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return Uv(e, t, n);
  } finally {
    zl = !1, (fi !== null || mi !== null) && (Gv(), $v());
  }
}
function Ta(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ys(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Wu = !1;
if (Pn) try {
  var ta = {};
  Object.defineProperty(ta, "passive", { get: function() {
    Wu = !0;
  } }), window.addEventListener("test", ta, ta), window.removeEventListener("test", ta, ta);
} catch {
  Wu = !1;
}
function pw(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var va = !1, os = null, ss = !1, qu = null, dw = { onError: function(e) {
  va = !0, os = e;
} };
function fw(e, t, n, r, i, a, o, s, l) {
  va = !1, os = null, pw.apply(dw, arguments);
}
function mw(e, t, n, r, i, a, o, s, l) {
  if (fw.apply(this, arguments), va) {
    if (va) {
      var u = os;
      va = !1, os = null;
    } else throw Error(O(198));
    ss || (ss = !0, qu = u);
  }
}
function Mr(e) {
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
function qv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function jf(e) {
  if (Mr(e) !== e) throw Error(O(188));
}
function hw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mr(e), t === null) throw Error(O(188));
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
        if (a === n) return jf(i), e;
        if (a === r) return jf(i), t;
        a = a.sibling;
      }
      throw Error(O(188));
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
        if (!o) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Xv(e) {
  return e = hw(e), e !== null ? Qv(e) : null;
}
function Qv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kv = At.unstable_scheduleCallback, Bf = At.unstable_cancelCallback, vw = At.unstable_shouldYield, gw = At.unstable_requestPaint, Pe = At.unstable_now, xw = At.unstable_getCurrentPriorityLevel, dp = At.unstable_ImmediatePriority, Zv = At.unstable_UserBlockingPriority, ls = At.unstable_NormalPriority, yw = At.unstable_LowPriority, Yv = At.unstable_IdlePriority, Xs = null, hn = null;
function Ew(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function") try {
    hn.onCommitFiberRoot(Xs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Zt = Math.clz32 ? Math.clz32 : kw, ww = Math.log, bw = Math.LN2;
function kw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ww(e) / bw | 0) | 0;
}
var go = 64, xo = 4194304;
function da(e) {
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
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? r = da(s) : (a &= o, a !== 0 && (r = da(a)));
  } else o = n & ~i, o !== 0 ? r = da(o) : a !== 0 && (r = da(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Zt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Cw(e, t) {
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
function Sw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Zt(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = Cw(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Xu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jv() {
  var e = go;
  return go <<= 1, !(go & 4194240) && (go = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ja(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Zt(t), e[t] = n;
}
function _w(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Zt(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function fp(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Zt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var fe = 0;
function eg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var tg, mp, ng, rg, ig, Qu = !1, yo = [], qn = null, Xn = null, Qn = null, Na = /* @__PURE__ */ new Map(), Ia = /* @__PURE__ */ new Map(), Vn = [], Aw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      Qn = null;
      break;
    case "pointerover":
    case "pointerout":
      Na.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ia.delete(t.pointerId);
  }
}
function na(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = to(t), t !== null && mp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Tw(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return qn = na(qn, e, t, n, r, i), !0;
    case "dragenter":
      return Xn = na(Xn, e, t, n, r, i), !0;
    case "mouseover":
      return Qn = na(Qn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return Na.set(a, na(Na.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, Ia.set(a, na(Ia.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ag(e) {
  var t = vr(e.target);
  if (t !== null) {
    var n = Mr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = qv(n), t !== null) {
          e.blockedOn = t, ig(e.priority, function() {
            ng(n);
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
function $o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ku(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Uu = r, n.target.dispatchEvent(r), Uu = null;
    } else return t = to(n), t !== null && mp(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Hf(e, t, n) {
  $o(e) && n.delete(t);
}
function Nw() {
  Qu = !1, qn !== null && $o(qn) && (qn = null), Xn !== null && $o(Xn) && (Xn = null), Qn !== null && $o(Qn) && (Qn = null), Na.forEach(Hf), Ia.forEach(Hf);
}
function ra(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qu || (Qu = !0, At.unstable_scheduleCallback(At.unstable_NormalPriority, Nw)));
}
function Pa(e) {
  function t(i) {
    return ra(i, e);
  }
  if (0 < yo.length) {
    ra(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qn !== null && ra(qn, e), Xn !== null && ra(Xn, e), Qn !== null && ra(Qn, e), Na.forEach(t), Ia.forEach(t), n = 0; n < Vn.length; n++) r = Vn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vn.length && (n = Vn[0], n.blockedOn === null); ) ag(n), n.blockedOn === null && Vn.shift();
}
var hi = Ln.ReactCurrentBatchConfig, cs = !0;
function Iw(e, t, n, r) {
  var i = fe, a = hi.transition;
  hi.transition = null;
  try {
    fe = 1, hp(e, t, n, r);
  } finally {
    fe = i, hi.transition = a;
  }
}
function Pw(e, t, n, r) {
  var i = fe, a = hi.transition;
  hi.transition = null;
  try {
    fe = 4, hp(e, t, n, r);
  } finally {
    fe = i, hi.transition = a;
  }
}
function hp(e, t, n, r) {
  if (cs) {
    var i = Ku(e, t, n, r);
    if (i === null) Zl(e, t, r, ps, n), zf(e, r);
    else if (Tw(i, e, t, n, r)) r.stopPropagation();
    else if (zf(e, r), t & 4 && -1 < Aw.indexOf(e)) {
      for (; i !== null; ) {
        var a = to(i);
        if (a !== null && tg(a), a = Ku(e, t, n, r), a === null && Zl(e, t, r, ps, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var ps = null;
function Ku(e, t, n, r) {
  if (ps = null, e = pp(r), e = vr(e), e !== null) if (t = Mr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ps = e, null;
}
function og(e) {
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
      switch (xw()) {
        case dp:
          return 1;
        case Zv:
          return 4;
        case ls:
        case yw:
          return 16;
        case Yv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gn = null, vp = null, Uo = null;
function sg() {
  if (Uo) return Uo;
  var e, t = vp, n = t.length, r, i = "value" in Gn ? Gn.value : Gn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return Uo = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Go(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Eo() {
  return !0;
}
function Vf() {
  return !1;
}
function It(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Eo : Vf, this.isPropagationStopped = Vf, this;
  }
  return Te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eo);
  }, persist: function() {
  }, isPersistent: Eo }), t;
}
var zi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gp = It(zi), eo = Te({}, zi, { view: 0, detail: 0 }), Ow = It(eo), Vl, $l, ia, Qs = Te({}, eo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ia && (ia && e.type === "mousemove" ? (Vl = e.screenX - ia.screenX, $l = e.screenY - ia.screenY) : $l = Vl = 0, ia = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $l;
} }), $f = It(Qs), Fw = Te({}, Qs, { dataTransfer: 0 }), Rw = It(Fw), Dw = Te({}, eo, { relatedTarget: 0 }), Ul = It(Dw), Mw = Te({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lw = It(Mw), jw = Te({}, zi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Bw = It(jw), zw = Te({}, zi, { data: 0 }), Uf = It(zw), Hw = {
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
}, Vw = {
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
}, $w = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Uw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $w[e]) ? !!t[e] : !1;
}
function xp() {
  return Uw;
}
var Gw = Te({}, eo, { key: function(e) {
  if (e.key) {
    var t = Hw[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vw[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xp, charCode: function(e) {
  return e.type === "keypress" ? Go(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ww = It(Gw), qw = Te({}, Qs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gf = It(qw), Xw = Te({}, eo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xp }), Qw = It(Xw), Kw = Te({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zw = It(Kw), Yw = Te({}, Qs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Jw = It(Yw), eb = [9, 13, 27, 32], yp = Pn && "CompositionEvent" in window, ga = null;
Pn && "documentMode" in document && (ga = document.documentMode);
var tb = Pn && "TextEvent" in window && !ga, lg = Pn && (!yp || ga && 8 < ga && 11 >= ga), Wf = " ", qf = !1;
function ug(e, t) {
  switch (e) {
    case "keyup":
      return eb.indexOf(t.keyCode) !== -1;
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
function cg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function nb(e, t) {
  switch (e) {
    case "compositionend":
      return cg(t);
    case "keypress":
      return t.which !== 32 ? null : (qf = !0, Wf);
    case "textInput":
      return e = t.data, e === Wf && qf ? null : e;
    default:
      return null;
  }
}
function rb(e, t) {
  if (Yr) return e === "compositionend" || !yp && ug(e, t) ? (e = sg(), Uo = vp = Gn = null, Yr = !1, e) : null;
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
      return lg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ib = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ib[e.type] : t === "textarea";
}
function pg(e, t, n, r) {
  Vv(r), t = ds(t, "onChange"), 0 < t.length && (n = new gp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var xa = null, Oa = null;
function ab(e) {
  bg(e, 0);
}
function Ks(e) {
  var t = ti(e);
  if (Dv(t)) return e;
}
function ob(e, t) {
  if (e === "change") return t;
}
var dg = !1;
if (Pn) {
  var Gl;
  if (Pn) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Qf = document.createElement("div");
      Qf.setAttribute("oninput", "return;"), Wl = typeof Qf.oninput == "function";
    }
    Gl = Wl;
  } else Gl = !1;
  dg = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Kf() {
  xa && (xa.detachEvent("onpropertychange", fg), Oa = xa = null);
}
function fg(e) {
  if (e.propertyName === "value" && Ks(Oa)) {
    var t = [];
    pg(t, Oa, e, pp(e)), Wv(ab, t);
  }
}
function sb(e, t, n) {
  e === "focusin" ? (Kf(), xa = t, Oa = n, xa.attachEvent("onpropertychange", fg)) : e === "focusout" && Kf();
}
function lb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ks(Oa);
}
function ub(e, t) {
  if (e === "click") return Ks(t);
}
function cb(e, t) {
  if (e === "input" || e === "change") return Ks(t);
}
function pb(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Jt = typeof Object.is == "function" ? Object.is : pb;
function Fa(e, t) {
  if (Jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ou.call(t, i) || !Jt(e[i], t[i])) return !1;
  }
  return !0;
}
function Zf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yf(e, t) {
  var n = Zf(e);
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
    n = Zf(n);
  }
}
function mg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function hg() {
  for (var e = window, t = as(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = as(e.document);
  }
  return t;
}
function Ep(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function db(e) {
  var t = hg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && mg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ep(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Yf(n, a);
        var o = Yf(
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
var fb = Pn && "documentMode" in document && 11 >= document.documentMode, Jr = null, Zu = null, ya = null, Yu = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yu || Jr == null || Jr !== as(r) || (r = Jr, "selectionStart" in r && Ep(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ya && Fa(ya, r) || (ya = r, r = ds(Zu, "onSelect"), 0 < r.length && (t = new gp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jr)));
}
function wo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ei = { animationend: wo("Animation", "AnimationEnd"), animationiteration: wo("Animation", "AnimationIteration"), animationstart: wo("Animation", "AnimationStart"), transitionend: wo("Transition", "TransitionEnd") }, ql = {}, vg = {};
Pn && (vg = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
function Zs(e) {
  if (ql[e]) return ql[e];
  if (!ei[e]) return e;
  var t = ei[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in vg) return ql[e] = t[n];
  return e;
}
var gg = Zs("animationend"), xg = Zs("animationiteration"), yg = Zs("animationstart"), Eg = Zs("transitionend"), wg = /* @__PURE__ */ new Map(), em = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function or(e, t) {
  wg.set(e, t), Dr(t, [e]);
}
for (var Xl = 0; Xl < em.length; Xl++) {
  var Ql = em[Xl], mb = Ql.toLowerCase(), hb = Ql[0].toUpperCase() + Ql.slice(1);
  or(mb, "on" + hb);
}
or(gg, "onAnimationEnd");
or(xg, "onAnimationIteration");
or(yg, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(Eg, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
Dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vb = new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));
function tm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mw(r, t, void 0, e), e.currentTarget = null;
}
function bg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        tm(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        tm(i, s, u), a = l;
      }
    }
  }
  if (ss) throw e = qu, ss = !1, qu = null, e;
}
function ge(e, t) {
  var n = t[rc];
  n === void 0 && (n = t[rc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (kg(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), kg(n, e, r, t);
}
var bo = "_reactListening" + Math.random().toString(36).slice(2);
function Ra(e) {
  if (!e[bo]) {
    e[bo] = !0, Iv.forEach(function(n) {
      n !== "selectionchange" && (vb.has(n) || Kl(n, !1, e), Kl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bo] || (t[bo] = !0, Kl("selectionchange", !1, t));
  }
}
function kg(e, t, n, r) {
  switch (og(t)) {
    case 1:
      var i = Iw;
      break;
    case 4:
      i = Pw;
      break;
    default:
      i = hp;
  }
  n = i.bind(null, t, n, e), i = void 0, !Wu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, i) {
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
        if (o = vr(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Wv(function() {
    var u = a, c = pp(n), d = [];
    e: {
      var f = wg.get(e);
      if (f !== void 0) {
        var h = gp, w = e;
        switch (e) {
          case "keypress":
            if (Go(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Ww;
            break;
          case "focusin":
            w = "focus", h = Ul;
            break;
          case "focusout":
            w = "blur", h = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ul;
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
            h = $f;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Rw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Qw;
            break;
          case gg:
          case xg:
          case yg:
            h = Lw;
            break;
          case Eg:
            h = Zw;
            break;
          case "scroll":
            h = Ow;
            break;
          case "wheel":
            h = Jw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Bw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Gf;
        }
        var y = (t & 4) !== 0, k = !y && e === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var x = u, E; x !== null; ) {
          E = x;
          var C = E.stateNode;
          if (E.tag === 5 && C !== null && (E = C, g !== null && (C = Ta(x, g), C != null && y.push(Da(x, C, E)))), k) break;
          x = x.return;
        }
        0 < y.length && (f = new h(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Uu && (w = n.relatedTarget || n.fromElement) && (vr(w) || w[On])) break e;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (w = n.relatedTarget || n.toElement, h = u, w = w ? vr(w) : null, w !== null && (k = Mr(w), w !== k || w.tag !== 5 && w.tag !== 6) && (w = null)) : (h = null, w = u), h !== w)) {
          if (y = $f, C = "onMouseLeave", g = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (y = Gf, C = "onPointerLeave", g = "onPointerEnter", x = "pointer"), k = h == null ? f : ti(h), E = w == null ? f : ti(w), f = new y(C, x + "leave", h, n, c), f.target = k, f.relatedTarget = E, C = null, vr(c) === u && (y = new y(g, x + "enter", w, n, c), y.target = E, y.relatedTarget = k, C = y), k = C, h && w) t: {
            for (y = h, g = w, x = 0, E = y; E; E = $r(E)) x++;
            for (E = 0, C = g; C; C = $r(C)) E++;
            for (; 0 < x - E; ) y = $r(y), x--;
            for (; 0 < E - x; ) g = $r(g), E--;
            for (; x--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = $r(y), g = $r(g);
            }
            y = null;
          }
          else y = null;
          h !== null && nm(d, f, h, y, !1), w !== null && k !== null && nm(d, k, w, y, !0);
        }
      }
      e: {
        if (f = u ? ti(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var S = ob;
        else if (Xf(f)) if (dg) S = cb;
        else {
          S = lb;
          var _ = sb;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = ub);
        if (S && (S = S(e, u))) {
          pg(d, S, n, c);
          break e;
        }
        _ && _(e, f, u), e === "focusout" && (_ = f._wrapperState) && _.controlled && f.type === "number" && Bu(f, "number", f.value);
      }
      switch (_ = u ? ti(u) : window, e) {
        case "focusin":
          (Xf(_) || _.contentEditable === "true") && (Jr = _, Zu = u, ya = null);
          break;
        case "focusout":
          ya = Zu = Jr = null;
          break;
        case "mousedown":
          Yu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Yu = !1, Jf(d, n, c);
          break;
        case "selectionchange":
          if (fb) break;
        case "keydown":
        case "keyup":
          Jf(d, n, c);
      }
      var T;
      if (yp) e: {
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
      else Yr ? ug(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (lg && n.locale !== "ko" && (Yr || A !== "onCompositionStart" ? A === "onCompositionEnd" && Yr && (T = sg()) : (Gn = c, vp = "value" in Gn ? Gn.value : Gn.textContent, Yr = !0)), _ = ds(u, A), 0 < _.length && (A = new Uf(A, e, null, n, c), d.push({ event: A, listeners: _ }), T ? A.data = T : (T = cg(n), T !== null && (A.data = T)))), (T = tb ? nb(e, n) : rb(e, n)) && (u = ds(u, "onBeforeInput"), 0 < u.length && (c = new Uf("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    bg(d, t);
  });
}
function Da(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ds(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = Ta(e, n), a != null && r.unshift(Da(e, a, i)), a = Ta(e, t), a != null && r.push(Da(e, a, i))), e = e.return;
  }
  return r;
}
function $r(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nm(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = Ta(n, a), l != null && o.unshift(Da(n, l, s))) : i || (l = Ta(n, a), l != null && o.push(Da(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gb = /\r\n?/g, xb = /\u0000|\uFFFD/g;
function rm(e) {
  return (typeof e == "string" ? e : "" + e).replace(gb, `
`).replace(xb, "");
}
function ko(e, t, n) {
  if (t = rm(t), rm(e) !== t && n) throw Error(O(425));
}
function fs() {
}
var Ju = null, ec = null;
function tc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var nc = typeof setTimeout == "function" ? setTimeout : void 0, yb = typeof clearTimeout == "function" ? clearTimeout : void 0, im = typeof Promise == "function" ? Promise : void 0, Eb = typeof queueMicrotask == "function" ? queueMicrotask : typeof im < "u" ? function(e) {
  return im.resolve(null).then(e).catch(wb);
} : nc;
function wb(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Pa(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Pa(t);
}
function Kn(e) {
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
function am(e) {
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
var Hi = Math.random().toString(36).slice(2), fn = "__reactFiber$" + Hi, Ma = "__reactProps$" + Hi, On = "__reactContainer$" + Hi, rc = "__reactEvents$" + Hi, bb = "__reactListeners$" + Hi, kb = "__reactHandles$" + Hi;
function vr(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[On] || n[fn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = am(e); e !== null; ) {
        if (n = e[fn]) return n;
        e = am(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function to(e) {
  return e = e[fn] || e[On], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Ys(e) {
  return e[Ma] || null;
}
var ic = [], ni = -1;
function sr(e) {
  return { current: e };
}
function ye(e) {
  0 > ni || (e.current = ic[ni], ic[ni] = null, ni--);
}
function he(e, t) {
  ni++, ic[ni] = e.current, e.current = t;
}
var rr = {}, rt = sr(rr), gt = sr(!1), Ar = rr;
function ki(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function xt(e) {
  return e = e.childContextTypes, e != null;
}
function ms() {
  ye(gt), ye(rt);
}
function om(e, t, n) {
  if (rt.current !== rr) throw Error(O(168));
  he(rt, t), he(gt, n);
}
function Cg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, sw(e) || "Unknown", i));
  return Te({}, n, r);
}
function hs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rr, Ar = rt.current, he(rt, e), he(gt, gt.current), !0;
}
function sm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = Cg(e, t, Ar), r.__reactInternalMemoizedMergedChildContext = e, ye(gt), ye(rt), he(rt, e)) : ye(gt), he(gt, n);
}
var Cn = null, Js = !1, Jl = !1;
function Sg(e) {
  Cn === null ? Cn = [e] : Cn.push(e);
}
function Cb(e) {
  Js = !0, Sg(e);
}
function lr() {
  if (!Jl && Cn !== null) {
    Jl = !0;
    var e = 0, t = fe;
    try {
      var n = Cn;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cn = null, Js = !1;
    } catch (i) {
      throw Cn !== null && (Cn = Cn.slice(e + 1)), Kv(dp, lr), i;
    } finally {
      fe = t, Jl = !1;
    }
  }
  return null;
}
var ri = [], ii = 0, vs = null, gs = 0, Dt = [], Mt = 0, Tr = null, An = 1, Tn = "";
function fr(e, t) {
  ri[ii++] = gs, ri[ii++] = vs, vs = e, gs = t;
}
function _g(e, t, n) {
  Dt[Mt++] = An, Dt[Mt++] = Tn, Dt[Mt++] = Tr, Tr = e;
  var r = An;
  e = Tn;
  var i = 32 - Zt(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Zt(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, An = 1 << 32 - Zt(t) + i | n << i | r, Tn = a + e;
  } else An = 1 << a | n << i | r, Tn = e;
}
function wp(e) {
  e.return !== null && (fr(e, 1), _g(e, 1, 0));
}
function bp(e) {
  for (; e === vs; ) vs = ri[--ii], ri[ii] = null, gs = ri[--ii], ri[ii] = null;
  for (; e === Tr; ) Tr = Dt[--Mt], Dt[Mt] = null, Tn = Dt[--Mt], Dt[Mt] = null, An = Dt[--Mt], Dt[Mt] = null;
}
var _t = null, St = null, be = !1, Kt = null;
function Ag(e, t) {
  var n = Lt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function lm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, St = Kn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, St = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tr !== null ? { id: An, overflow: Tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, St = null, !0) : !1;
    default:
      return !1;
  }
}
function ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oc(e) {
  if (be) {
    var t = St;
    if (t) {
      var n = t;
      if (!lm(e, t)) {
        if (ac(e)) throw Error(O(418));
        t = Kn(n.nextSibling);
        var r = _t;
        t && lm(e, t) ? Ag(r, n) : (e.flags = e.flags & -4097 | 2, be = !1, _t = e);
      }
    } else {
      if (ac(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, be = !1, _t = e;
    }
  }
}
function um(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  _t = e;
}
function Co(e) {
  if (e !== _t) return !1;
  if (!be) return um(e), be = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !tc(e.type, e.memoizedProps)), t && (t = St)) {
    if (ac(e)) throw Tg(), Error(O(418));
    for (; t; ) Ag(e, t), t = Kn(t.nextSibling);
  }
  if (um(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = Kn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else St = _t ? Kn(e.stateNode.nextSibling) : null;
  return !0;
}
function Tg() {
  for (var e = St; e; ) e = Kn(e.nextSibling);
}
function Ci() {
  St = _t = null, be = !1;
}
function kp(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
var Sb = Ln.ReactCurrentBatchConfig;
function aa(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function So(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function cm(e) {
  var t = e._init;
  return t(e._payload);
}
function Ng(e) {
  function t(g, x) {
    if (e) {
      var E = g.deletions;
      E === null ? (g.deletions = [x], g.flags |= 16) : E.push(x);
    }
  }
  function n(g, x) {
    if (!e) return null;
    for (; x !== null; ) t(g, x), x = x.sibling;
    return null;
  }
  function r(g, x) {
    for (g = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? g.set(x.key, x) : g.set(x.index, x), x = x.sibling;
    return g;
  }
  function i(g, x) {
    return g = er(g, x), g.index = 0, g.sibling = null, g;
  }
  function a(g, x, E) {
    return g.index = E, e ? (E = g.alternate, E !== null ? (E = E.index, E < x ? (g.flags |= 2, x) : E) : (g.flags |= 2, x)) : (g.flags |= 1048576, x);
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, x, E, C) {
    return x === null || x.tag !== 6 ? (x = ou(E, g.mode, C), x.return = g, x) : (x = i(x, E), x.return = g, x);
  }
  function l(g, x, E, C) {
    var S = E.type;
    return S === Zr ? c(g, x, E.props.children, C, E.key) : x !== null && (x.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Bn && cm(S) === x.type) ? (C = i(x, E.props), C.ref = aa(g, x, E), C.return = g, C) : (C = Yo(E.type, E.key, E.props, null, g.mode, C), C.ref = aa(g, x, E), C.return = g, C);
  }
  function u(g, x, E, C) {
    return x === null || x.tag !== 4 || x.stateNode.containerInfo !== E.containerInfo || x.stateNode.implementation !== E.implementation ? (x = su(E, g.mode, C), x.return = g, x) : (x = i(x, E.children || []), x.return = g, x);
  }
  function c(g, x, E, C, S) {
    return x === null || x.tag !== 7 ? (x = kr(E, g.mode, C, S), x.return = g, x) : (x = i(x, E), x.return = g, x);
  }
  function d(g, x, E) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return x = ou("" + x, g.mode, E), x.return = g, x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case mo:
          return E = Yo(x.type, x.key, x.props, null, g.mode, E), E.ref = aa(g, null, x), E.return = g, E;
        case Kr:
          return x = su(x, g.mode, E), x.return = g, x;
        case Bn:
          var C = x._init;
          return d(g, C(x._payload), E);
      }
      if (pa(x) || ea(x)) return x = kr(x, g.mode, E, null), x.return = g, x;
      So(g, x);
    }
    return null;
  }
  function f(g, x, E, C) {
    var S = x !== null ? x.key : null;
    if (typeof E == "string" && E !== "" || typeof E == "number") return S !== null ? null : s(g, x, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case mo:
          return E.key === S ? l(g, x, E, C) : null;
        case Kr:
          return E.key === S ? u(g, x, E, C) : null;
        case Bn:
          return S = E._init, f(
            g,
            x,
            S(E._payload),
            C
          );
      }
      if (pa(E) || ea(E)) return S !== null ? null : c(g, x, E, C, null);
      So(g, E);
    }
    return null;
  }
  function h(g, x, E, C, S) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return g = g.get(E) || null, s(x, g, "" + C, S);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case mo:
          return g = g.get(C.key === null ? E : C.key) || null, l(x, g, C, S);
        case Kr:
          return g = g.get(C.key === null ? E : C.key) || null, u(x, g, C, S);
        case Bn:
          var _ = C._init;
          return h(g, x, E, _(C._payload), S);
      }
      if (pa(C) || ea(C)) return g = g.get(E) || null, c(x, g, C, S, null);
      So(x, C);
    }
    return null;
  }
  function w(g, x, E, C) {
    for (var S = null, _ = null, T = x, A = x = 0, I = null; T !== null && A < E.length; A++) {
      T.index > A ? (I = T, T = null) : I = T.sibling;
      var N = f(g, T, E[A], C);
      if (N === null) {
        T === null && (T = I);
        break;
      }
      e && T && N.alternate === null && t(g, T), x = a(N, x, A), _ === null ? S = N : _.sibling = N, _ = N, T = I;
    }
    if (A === E.length) return n(g, T), be && fr(g, A), S;
    if (T === null) {
      for (; A < E.length; A++) T = d(g, E[A], C), T !== null && (x = a(T, x, A), _ === null ? S = T : _.sibling = T, _ = T);
      return be && fr(g, A), S;
    }
    for (T = r(g, T); A < E.length; A++) I = h(T, g, A, E[A], C), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? A : I.key), x = a(I, x, A), _ === null ? S = I : _.sibling = I, _ = I);
    return e && T.forEach(function(M) {
      return t(g, M);
    }), be && fr(g, A), S;
  }
  function y(g, x, E, C) {
    var S = ea(E);
    if (typeof S != "function") throw Error(O(150));
    if (E = S.call(E), E == null) throw Error(O(151));
    for (var _ = S = null, T = x, A = x = 0, I = null, N = E.next(); T !== null && !N.done; A++, N = E.next()) {
      T.index > A ? (I = T, T = null) : I = T.sibling;
      var M = f(g, T, N.value, C);
      if (M === null) {
        T === null && (T = I);
        break;
      }
      e && T && M.alternate === null && t(g, T), x = a(M, x, A), _ === null ? S = M : _.sibling = M, _ = M, T = I;
    }
    if (N.done) return n(
      g,
      T
    ), be && fr(g, A), S;
    if (T === null) {
      for (; !N.done; A++, N = E.next()) N = d(g, N.value, C), N !== null && (x = a(N, x, A), _ === null ? S = N : _.sibling = N, _ = N);
      return be && fr(g, A), S;
    }
    for (T = r(g, T); !N.done; A++, N = E.next()) N = h(T, g, A, N.value, C), N !== null && (e && N.alternate !== null && T.delete(N.key === null ? A : N.key), x = a(N, x, A), _ === null ? S = N : _.sibling = N, _ = N);
    return e && T.forEach(function(L) {
      return t(g, L);
    }), be && fr(g, A), S;
  }
  function k(g, x, E, C) {
    if (typeof E == "object" && E !== null && E.type === Zr && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case mo:
          e: {
            for (var S = E.key, _ = x; _ !== null; ) {
              if (_.key === S) {
                if (S = E.type, S === Zr) {
                  if (_.tag === 7) {
                    n(g, _.sibling), x = i(_, E.props.children), x.return = g, g = x;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Bn && cm(S) === _.type) {
                  n(g, _.sibling), x = i(_, E.props), x.ref = aa(g, _, E), x.return = g, g = x;
                  break e;
                }
                n(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            E.type === Zr ? (x = kr(E.props.children, g.mode, C, E.key), x.return = g, g = x) : (C = Yo(E.type, E.key, E.props, null, g.mode, C), C.ref = aa(g, x, E), C.return = g, g = C);
          }
          return o(g);
        case Kr:
          e: {
            for (_ = E.key; x !== null; ) {
              if (x.key === _) if (x.tag === 4 && x.stateNode.containerInfo === E.containerInfo && x.stateNode.implementation === E.implementation) {
                n(g, x.sibling), x = i(x, E.children || []), x.return = g, g = x;
                break e;
              } else {
                n(g, x);
                break;
              }
              else t(g, x);
              x = x.sibling;
            }
            x = su(E, g.mode, C), x.return = g, g = x;
          }
          return o(g);
        case Bn:
          return _ = E._init, k(g, x, _(E._payload), C);
      }
      if (pa(E)) return w(g, x, E, C);
      if (ea(E)) return y(g, x, E, C);
      So(g, E);
    }
    return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, x !== null && x.tag === 6 ? (n(g, x.sibling), x = i(x, E), x.return = g, g = x) : (n(g, x), x = ou(E, g.mode, C), x.return = g, g = x), o(g)) : n(g, x);
  }
  return k;
}
var Si = Ng(!0), Ig = Ng(!1), xs = sr(null), ys = null, ai = null, Cp = null;
function Sp() {
  Cp = ai = ys = null;
}
function _p(e) {
  var t = xs.current;
  ye(xs), e._currentValue = t;
}
function sc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function vi(e, t) {
  ys = e, Cp = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null);
}
function Bt(e) {
  var t = e._currentValue;
  if (Cp !== e) if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
    if (ys === null) throw Error(O(308));
    ai = e, ys.dependencies = { lanes: 0, firstContext: e };
  } else ai = ai.next = e;
  return t;
}
var gr = null;
function Ap(e) {
  gr === null ? gr = [e] : gr.push(e);
}
function Pg(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Ap(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Fn(e, r);
}
function Fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zn = !1;
function Tp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Og(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, le & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Fn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Ap(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Fn(e, n);
}
function Wo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fp(e, n);
  }
}
function pm(e, t) {
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
function Es(e, t, n, r) {
  var i = e.updateQueue;
  zn = !1;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (a !== null) {
    var d = i.baseState;
    o = 0, c = u = l = null, s = a;
    do {
      var f = s.lane, h = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var w = e, y = s;
          switch (f = t, h = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                d = w.call(h, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, f = typeof w == "function" ? w.call(h, d, f) : w, f == null) break e;
              d = Te({}, d, f);
              break e;
            case 2:
              zn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
      } else h = { eventTime: h, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = h, l = d) : c = c.next = h, o |= f;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    Ir |= o, e.lanes = o, e.memoizedState = d;
  }
}
function dm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(O(191, i));
      i.call(r);
    }
  }
}
var no = {}, vn = sr(no), La = sr(no), ja = sr(no);
function xr(e) {
  if (e === no) throw Error(O(174));
  return e;
}
function Np(e, t) {
  switch (he(ja, t), he(La, e), he(vn, no), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hu(t, e);
  }
  ye(vn), he(vn, t);
}
function _i() {
  ye(vn), ye(La), ye(ja);
}
function Fg(e) {
  xr(ja.current);
  var t = xr(vn.current), n = Hu(t, e.type);
  t !== n && (he(La, e), he(vn, n));
}
function Ip(e) {
  La.current === e && (ye(vn), ye(La));
}
var _e = sr(0);
function ws(e) {
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
var eu = [];
function Pp() {
  for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null;
  eu.length = 0;
}
var qo = Ln.ReactCurrentDispatcher, tu = Ln.ReactCurrentBatchConfig, Nr = 0, Ae = null, Me = null, He = null, bs = !1, Ea = !1, Ba = 0, _b = 0;
function Ye() {
  throw Error(O(321));
}
function Op(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Jt(e[n], t[n])) return !1;
  return !0;
}
function Fp(e, t, n, r, i, a) {
  if (Nr = a, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qo.current = e === null || e.memoizedState === null ? Ib : Pb, e = n(r, i), Ea) {
    a = 0;
    do {
      if (Ea = !1, Ba = 0, 25 <= a) throw Error(O(301));
      a += 1, He = Me = null, t.updateQueue = null, qo.current = Ob, e = n(r, i);
    } while (Ea);
  }
  if (qo.current = ks, t = Me !== null && Me.next !== null, Nr = 0, He = Me = Ae = null, bs = !1, t) throw Error(O(300));
  return e;
}
function Rp() {
  var e = Ba !== 0;
  return Ba = 0, e;
}
function pn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? Ae.memoizedState = He = e : He = He.next = e, He;
}
function zt() {
  if (Me === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = He === null ? Ae.memoizedState : He.next;
  if (t !== null) He = t, Me = e;
  else {
    if (e === null) throw Error(O(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, He === null ? Ae.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function za(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nu(e) {
  var t = zt(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Me, i = r.baseQueue, a = n.pending;
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
      if ((Nr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, o = r) : l = l.next = d, Ae.lanes |= c, Ir |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = r : l.next = s, Jt(r, t.memoizedState) || (vt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, Ae.lanes |= a, Ir |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ru(e) {
  var t = zt(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    Jt(a, t.memoizedState) || (vt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Rg() {
}
function Dg(e, t) {
  var n = Ae, r = zt(), i = t(), a = !Jt(r.memoizedState, i);
  if (a && (r.memoizedState = i, vt = !0), r = r.queue, Dp(jg.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || He !== null && He.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ha(9, Lg.bind(null, n, r, i, t), void 0, null), $e === null) throw Error(O(349));
    Nr & 30 || Mg(n, t, i);
  }
  return i;
}
function Mg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Lg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Bg(t) && zg(e);
}
function jg(e, t, n) {
  return n(function() {
    Bg(t) && zg(e);
  });
}
function Bg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jt(e, n);
  } catch {
    return !0;
  }
}
function zg(e) {
  var t = Fn(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function fm(e) {
  var t = pn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: za, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nb.bind(null, Ae, e), [t.memoizedState, e];
}
function Ha(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hg() {
  return zt().memoizedState;
}
function Xo(e, t, n, r) {
  var i = pn();
  Ae.flags |= e, i.memoizedState = Ha(1 | t, n, void 0, r === void 0 ? null : r);
}
function el(e, t, n, r) {
  var i = zt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Me !== null) {
    var o = Me.memoizedState;
    if (a = o.destroy, r !== null && Op(r, o.deps)) {
      i.memoizedState = Ha(t, n, a, r);
      return;
    }
  }
  Ae.flags |= e, i.memoizedState = Ha(1 | t, n, a, r);
}
function mm(e, t) {
  return Xo(8390656, 8, e, t);
}
function Dp(e, t) {
  return el(2048, 8, e, t);
}
function Vg(e, t) {
  return el(4, 2, e, t);
}
function $g(e, t) {
  return el(4, 4, e, t);
}
function Ug(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Gg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, el(4, 4, Ug.bind(null, t, e), n);
}
function Mp() {
}
function Wg(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Op(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qg(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Op(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xg(e, t, n) {
  return Nr & 21 ? (Jt(n, t) || (n = Jv(), Ae.lanes |= n, Ir |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = n);
}
function Ab(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = tu.transition;
  tu.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, tu.transition = r;
  }
}
function Qg() {
  return zt().memoizedState;
}
function Tb(e, t, n) {
  var r = Jn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kg(e)) Zg(t, n);
  else if (n = Pg(e, t, n, r), n !== null) {
    var i = ut();
    Yt(n, e, r, i), Yg(n, t, r);
  }
}
function Nb(e, t, n) {
  var r = Jn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kg(e)) Zg(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = !0, i.eagerState = s, Jt(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Ap(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Pg(e, t, i, r), n !== null && (i = ut(), Yt(n, e, r, i), Yg(n, t, r));
  }
}
function Kg(e) {
  var t = e.alternate;
  return e === Ae || t !== null && t === Ae;
}
function Zg(e, t) {
  Ea = bs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Yg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fp(e, n);
  }
}
var ks = { readContext: Bt, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Ib = { readContext: Bt, useCallback: function(e, t) {
  return pn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Bt, useEffect: mm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xo(
    4194308,
    4,
    Ug.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Tb.bind(null, Ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pn();
  return e = { current: e }, t.memoizedState = e;
}, useState: fm, useDebugValue: Mp, useDeferredValue: function(e) {
  return pn().memoizedState = e;
}, useTransition: function() {
  var e = fm(!1), t = e[0];
  return e = Ab.bind(null, e[1]), pn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ae, i = pn();
  if (be) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else {
    if (n = t(), $e === null) throw Error(O(349));
    Nr & 30 || Mg(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, mm(jg.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Ha(9, Lg.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = pn(), t = $e.identifierPrefix;
  if (be) {
    var n = Tn, r = An;
    n = (r & ~(1 << 32 - Zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ba++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = _b++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Pb = {
  readContext: Bt,
  useCallback: Wg,
  useContext: Bt,
  useEffect: Dp,
  useImperativeHandle: Gg,
  useInsertionEffect: Vg,
  useLayoutEffect: $g,
  useMemo: qg,
  useReducer: nu,
  useRef: Hg,
  useState: function() {
    return nu(za);
  },
  useDebugValue: Mp,
  useDeferredValue: function(e) {
    var t = zt();
    return Xg(t, Me.memoizedState, e);
  },
  useTransition: function() {
    var e = nu(za)[0], t = zt().memoizedState;
    return [e, t];
  },
  useMutableSource: Rg,
  useSyncExternalStore: Dg,
  useId: Qg,
  unstable_isNewReconciler: !1
}, Ob = { readContext: Bt, useCallback: Wg, useContext: Bt, useEffect: Dp, useImperativeHandle: Gg, useInsertionEffect: Vg, useLayoutEffect: $g, useMemo: qg, useReducer: ru, useRef: Hg, useState: function() {
  return ru(za);
}, useDebugValue: Mp, useDeferredValue: function(e) {
  var t = zt();
  return Me === null ? t.memoizedState = e : Xg(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = ru(za)[0], t = zt().memoizedState;
  return [e, t];
}, useMutableSource: Rg, useSyncExternalStore: Dg, useId: Qg, unstable_isNewReconciler: !1 };
function qt(e, t) {
  if (e && e.defaultProps) {
    t = Te({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ut(), i = Jn(e), a = Nn(r, i);
  a.payload = t, n != null && (a.callback = n), t = Zn(e, a, i), t !== null && (Yt(t, e, i, r), Wo(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ut(), i = Jn(e), a = Nn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Zn(e, a, i), t !== null && (Yt(t, e, i, r), Wo(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ut(), r = Jn(e), i = Nn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Zn(e, i, r), t !== null && (Yt(t, e, r, n), Wo(t, e, r));
} };
function hm(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fa(n, r) || !Fa(i, a) : !0;
}
function Jg(e, t, n) {
  var r = !1, i = rr, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Bt(a) : (i = xt(t) ? Ar : rt.current, r = t.contextTypes, a = (r = r != null) ? ki(e, i) : rr), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function vm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && tl.enqueueReplaceState(t, t.state, null);
}
function uc(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Tp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Bt(a) : (a = xt(t) ? Ar : rt.current, i.context = ki(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (lc(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && tl.enqueueReplaceState(i, i.state, null), Es(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ai(e, t) {
  try {
    var n = "", r = t;
    do
      n += ow(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function iu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Fb = typeof WeakMap == "function" ? WeakMap : Map;
function ex(e, t, n) {
  n = Nn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ss || (Ss = !0, Ec = r), cc(e, t);
  }, n;
}
function tx(e, t, n) {
  n = Nn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      cc(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    cc(e, t), typeof r != "function" && (Yn === null ? Yn = /* @__PURE__ */ new Set([this]) : Yn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function gm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fb();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = qb.bind(null, e, t, n), t.then(e, e));
}
function xm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ym(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nn(-1, 1), t.tag = 2, Zn(n, t, 1))), n.lanes |= 1), e);
}
var Rb = Ln.ReactCurrentOwner, vt = !1;
function ot(e, t, n, r) {
  t.child = e === null ? Ig(t, null, n, r) : Si(t, e.child, n, r);
}
function Em(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return vi(t, i), r = Fp(e, t, n, r, a, i), n = Rp(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (be && n && wp(t), t.flags |= 1, ot(e, t, r, i), t.child);
}
function wm(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Up(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, nx(e, t, a, r, i)) : (e = Yo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fa, n(o, r) && e.ref === t.ref) return Rn(e, t, i);
  }
  return t.flags |= 1, e = er(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function nx(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Fa(a, r) && e.ref === t.ref) if (vt = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (vt = !0);
    else return t.lanes = e.lanes, Rn(e, t, i);
  }
  return pc(e, t, n, r, i);
}
function rx(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(si, kt), kt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(si, kt), kt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(si, kt), kt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(si, kt), kt |= r;
  return ot(e, t, i, n), t.child;
}
function ix(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function pc(e, t, n, r, i) {
  var a = xt(n) ? Ar : rt.current;
  return a = ki(t, a), vi(t, i), n = Fp(e, t, n, r, a, i), r = Rp(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (be && r && wp(t), t.flags |= 1, ot(e, t, n, i), t.child);
}
function bm(e, t, n, r, i) {
  if (xt(n)) {
    var a = !0;
    hs(t);
  } else a = !1;
  if (vi(t, i), t.stateNode === null) Qo(e, t), Jg(t, n, r), uc(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Bt(u) : (u = xt(n) ? Ar : rt.current, u = ki(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && vm(t, o, r, u), zn = !1;
    var f = t.memoizedState;
    o.state = f, Es(t, r, o, i), l = t.memoizedState, s !== r || f !== l || gt.current || zn ? (typeof c == "function" && (lc(t, n, c, r), l = t.memoizedState), (s = zn || hm(t, n, s, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Og(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : qt(t.type, s), o.props = u, d = t.pendingProps, f = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Bt(l) : (l = xt(n) ? Ar : rt.current, l = ki(t, l));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== l) && vm(t, o, r, l), zn = !1, f = t.memoizedState, o.state = f, Es(t, r, o, i);
    var w = t.memoizedState;
    s !== d || f !== w || gt.current || zn ? (typeof h == "function" && (lc(t, n, h, r), w = t.memoizedState), (u = zn || hm(t, n, u, r, f, w, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return dc(e, t, n, r, a, i);
}
function dc(e, t, n, r, i, a) {
  ix(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && sm(t, n, !1), Rn(e, t, a);
  r = t.stateNode, Rb.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Si(t, e.child, null, a), t.child = Si(t, null, s, a)) : ot(e, t, s, a), t.memoizedState = r.state, i && sm(t, n, !0), t.child;
}
function ax(e) {
  var t = e.stateNode;
  t.pendingContext ? om(e, t.pendingContext, t.pendingContext !== t.context) : t.context && om(e, t.context, !1), Np(e, t.containerInfo);
}
function km(e, t, n, r, i) {
  return Ci(), kp(i), t.flags |= 256, ot(e, t, n, r), t.child;
}
var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
function mc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ox(e, t, n) {
  var r = t.pendingProps, i = _e.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), he(_e, i & 1), e === null)
    return oc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = il(o, r, 0, null), e = kr(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = mc(n), t.memoizedState = fc, e) : Lp(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Db(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = er(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = er(s, a) : (a = kr(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? mc(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = fc, r;
  }
  return a = e.child, e = a.sibling, r = er(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lp(e, t) {
  return t = il({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _o(e, t, n, r) {
  return r !== null && kp(r), Si(t, e.child, null, n), e = Lp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Db(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = iu(Error(O(422))), _o(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = il({ mode: "visible", children: r.children }, i, 0, null), a = kr(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Si(t, e.child, null, o), t.child.memoizedState = mc(o), t.memoizedState = fc, a);
  if (!(t.mode & 1)) return _o(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error(O(419)), r = iu(a, r, void 0), _o(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, vt || s) {
    if (r = $e, r !== null) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, Fn(e, i), Yt(r, e, i, -1));
    }
    return $p(), r = iu(Error(O(421))), _o(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xb.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, St = Kn(i.nextSibling), _t = t, be = !0, Kt = null, e !== null && (Dt[Mt++] = An, Dt[Mt++] = Tn, Dt[Mt++] = Tr, An = e.id, Tn = e.overflow, Tr = t), t = Lp(t, r.children), t.flags |= 4096, t);
}
function Cm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sc(e.return, t, n);
}
function au(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function sx(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (ot(e, t, r.children, n), r = _e.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cm(e, n, t);
      else if (e.tag === 19) Cm(e, n, t);
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
  if (he(_e, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ws(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), au(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ws(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      au(t, !0, n, null, a);
      break;
    case "together":
      au(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ir |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = er(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = er(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Mb(e, t, n) {
  switch (t.tag) {
    case 3:
      ax(t), Ci();
      break;
    case 5:
      Fg(t);
      break;
    case 1:
      xt(t.type) && hs(t);
      break;
    case 4:
      Np(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      he(xs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(_e, _e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ox(e, t, n) : (he(_e, _e.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
      he(_e, _e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return sx(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), he(_e, _e.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rx(e, t, n);
  }
  return Rn(e, t, n);
}
var lx, hc, ux, cx;
lx = function(e, t) {
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
hc = function() {
};
ux = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, xr(vn.current);
    var a = null;
    switch (n) {
      case "input":
        i = Lu(e, i), r = Lu(e, r), a = [];
        break;
      case "select":
        i = Te({}, i, { value: void 0 }), r = Te({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = zu(e, i), r = zu(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fs);
    }
    Vu(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_a.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (_a.hasOwnProperty(u) ? (l != null && u === "onScroll" && ge("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cx = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function oa(e, t) {
  if (!be) switch (e.tailMode) {
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
function Je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Lb(e, t, n) {
  var r = t.pendingProps;
  switch (bp(t), t.tag) {
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
      return Je(t), null;
    case 1:
      return xt(t.type) && ms(), Je(t), null;
    case 3:
      return r = t.stateNode, _i(), ye(gt), ye(rt), Pp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Co(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kt !== null && (kc(Kt), Kt = null))), hc(e, t), Je(t), null;
    case 5:
      Ip(t);
      var i = xr(ja.current);
      if (n = t.type, e !== null && t.stateNode != null) ux(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Je(t), null;
        }
        if (e = xr(vn.current), Co(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[fn] = t, r[Ma] = a, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < fa.length; i++) ge(fa[i], r);
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
              Ff(r, a), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ge("invalid", r);
              break;
            case "textarea":
              Df(r, a), ge("invalid", r);
          }
          Vu(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && ko(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && ko(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : _a.hasOwnProperty(o) && s != null && o === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              ho(r), Rf(r, a, !0);
              break;
            case "textarea":
              ho(r), Mf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = fs);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[fn] = t, e[Ma] = r, lx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = $u(n, r), n) {
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
                for (i = 0; i < fa.length; i++) ge(fa[i], e);
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
                Ff(e, r), i = Lu(e, r), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Te({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                Df(e, r), i = zu(e, r), ge("invalid", e);
                break;
              default:
                i = r;
            }
            Vu(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? Hv(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Bv(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Aa(e, l) : typeof l == "number" && Aa(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (_a.hasOwnProperty(a) ? l != null && a === "onScroll" && ge("scroll", e) : l != null && sp(e, a, l, o));
            }
            switch (n) {
              case "input":
                ho(e), Rf(e, r, !1);
                break;
              case "textarea":
                ho(e), Mf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? di(e, !!r.multiple, a, !1) : r.defaultValue != null && di(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = fs);
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
      return Je(t), null;
    case 6:
      if (e && t.stateNode != null) cx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = xr(ja.current), xr(vn.current), Co(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[fn] = t, (a = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
            case 3:
              ko(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ko(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[fn] = t, t.stateNode = r;
      }
      return Je(t), null;
    case 13:
      if (ye(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (be && St !== null && t.mode & 1 && !(t.flags & 128)) Tg(), Ci(), t.flags |= 98560, a = !1;
        else if (a = Co(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(O(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(O(317));
            a[fn] = t;
          } else Ci(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Je(t), a = !1;
        } else Kt !== null && (kc(Kt), Kt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? Le === 0 && (Le = 3) : $p())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
    case 4:
      return _i(), hc(e, t), e === null && Ra(t.stateNode.containerInfo), Je(t), null;
    case 10:
      return _p(t.type._context), Je(t), null;
    case 17:
      return xt(t.type) && ms(), Je(t), null;
    case 19:
      if (ye(_e), a = t.memoizedState, a === null) return Je(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) oa(a, !1);
      else {
        if (Le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ws(e), o !== null) {
            for (t.flags |= 128, oa(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(_e, _e.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Pe() > Ti && (t.flags |= 128, r = !0, oa(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ws(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), oa(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !be) return Je(t), null;
        } else 2 * Pe() - a.renderingStartTime > Ti && n !== 1073741824 && (t.flags |= 128, r = !0, oa(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Pe(), t.sibling = null, n = _e.current, he(_e, r ? n & 1 | 2 : n & 1), t) : (Je(t), null);
    case 22:
    case 23:
      return Vp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? kt & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function jb(e, t) {
  switch (bp(t), t.tag) {
    case 1:
      return xt(t.type) && ms(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _i(), ye(gt), ye(rt), Pp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ip(t), null;
    case 13:
      if (ye(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        Ci();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(_e), null;
    case 4:
      return _i(), null;
    case 10:
      return _p(t.type._context), null;
    case 22:
    case 23:
      return Vp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ao = !1, et = !1, Bb = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function oi(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ie(e, t, r);
  }
  else n.current = null;
}
function vc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var Sm = !1;
function zb(e, t) {
  if (Ju = cs, e = hg(), Ep(e)) {
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
        var o = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (s = o + i), d !== a || r !== 0 && d.nodeType !== 3 || (l = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (h = d.firstChild) !== null; )
            f = d, d = h;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === i && (s = o), f === a && ++c === r && (l = o), (h = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = h;
        }
        n = s === -1 || l === -1 ? null : { start: s, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ec = { focusedElem: e, selectionRange: n }, cs = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, k = w.memoizedState, g = t.stateNode, x = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : qt(t.type, y), k);
            g.__reactInternalSnapshotBeforeUpdate = x;
          }
          break;
        case 3:
          var E = t.stateNode.containerInfo;
          E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(O(163));
      }
    } catch (C) {
      Ie(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return w = Sm, Sm = !1, w;
}
function wa(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && vc(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function nl(e, t) {
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
function gc(e) {
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
function px(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, px(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fn], delete t[Ma], delete t[rc], delete t[bb], delete t[kb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function dx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _m(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || dx(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fs));
  else if (r !== 4 && (e = e.child, e !== null)) for (xc(e, t, n), e = e.sibling; e !== null; ) xc(e, t, n), e = e.sibling;
}
function yc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (yc(e, t, n), e = e.sibling; e !== null; ) yc(e, t, n), e = e.sibling;
}
var We = null, Xt = !1;
function jn(e, t, n) {
  for (n = n.child; n !== null; ) fx(e, t, n), n = n.sibling;
}
function fx(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function") try {
    hn.onCommitFiberUnmount(Xs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      et || oi(n, t);
    case 6:
      var r = We, i = Xt;
      We = null, jn(e, t, n), We = r, Xt = i, We !== null && (Xt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null && (Xt ? (e = We, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Pa(e)) : Yl(We, n.stateNode));
      break;
    case 4:
      r = We, i = Xt, We = n.stateNode.containerInfo, Xt = !0, jn(e, t, n), We = r, Xt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!et && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && vc(n, t, o), i = i.next;
        } while (i !== r);
      }
      jn(e, t, n);
      break;
    case 1:
      if (!et && (oi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Ie(n, t, s);
      }
      jn(e, t, n);
      break;
    case 21:
      jn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (et = (r = et) || n.memoizedState !== null, jn(e, t, n), et = r) : jn(e, t, n);
      break;
    default:
      jn(e, t, n);
  }
}
function Am(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bb()), t.forEach(function(r) {
      var i = Qb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Wt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            We = s.stateNode, Xt = !1;
            break e;
          case 3:
            We = s.stateNode.containerInfo, Xt = !0;
            break e;
          case 4:
            We = s.stateNode.containerInfo, Xt = !0;
            break e;
        }
        s = s.return;
      }
      if (We === null) throw Error(O(160));
      fx(a, o, i), We = null, Xt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Ie(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mx(t, e), t = t.sibling;
}
function mx(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Wt(t, e), un(e), r & 4) {
        try {
          wa(3, e, e.return), nl(3, e);
        } catch (y) {
          Ie(e, e.return, y);
        }
        try {
          wa(5, e, e.return);
        } catch (y) {
          Ie(e, e.return, y);
        }
      }
      break;
    case 1:
      Wt(t, e), un(e), r & 512 && n !== null && oi(n, n.return);
      break;
    case 5:
      if (Wt(t, e), un(e), r & 512 && n !== null && oi(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Aa(i, "");
        } catch (y) {
          Ie(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && Mv(i, a), $u(s, o);
          var u = $u(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], d = l[o + 1];
            c === "style" ? Hv(i, d) : c === "dangerouslySetInnerHTML" ? Bv(i, d) : c === "children" ? Aa(i, d) : sp(i, c, d, u);
          }
          switch (s) {
            case "input":
              ju(i, a);
              break;
            case "textarea":
              Lv(i, a);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var h = a.value;
              h != null ? di(i, !!a.multiple, h, !1) : f !== !!a.multiple && (a.defaultValue != null ? di(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : di(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[Ma] = a;
        } catch (y) {
          Ie(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Wt(t, e), un(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (y) {
          Ie(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Wt(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Pa(t.containerInfo);
      } catch (y) {
        Ie(e, e.return, y);
      }
      break;
    case 4:
      Wt(t, e), un(e);
      break;
    case 13:
      Wt(t, e), un(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (zp = Pe())), r & 4 && Am(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (et = (u = et) || c, Wt(t, e), et = u) : Wt(t, e), un(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for ($ = e, c = e.child; c !== null; ) {
          for (d = $ = c; $ !== null; ) {
            switch (f = $, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                wa(4, f, f.return);
                break;
              case 1:
                oi(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    Ie(r, n, y);
                  }
                }
                break;
              case 5:
                oi(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Nm(d);
                  continue;
                }
            }
            h !== null ? (h.return = f, $ = h) : Nm(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = zv("display", o));
              } catch (y) {
                Ie(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (y) {
              Ie(e, e.return, y);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Wt(t, e), un(e), r & 4 && Am(e);
      break;
    case 21:
      break;
    default:
      Wt(
        t,
        e
      ), un(e);
  }
}
function un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Aa(i, ""), r.flags &= -33);
          var a = _m(e);
          yc(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = _m(e);
          xc(e, s, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      Ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hb(e, t, n) {
  $ = e, hx(e);
}
function hx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ao;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || et;
        s = Ao;
        var u = et;
        if (Ao = o, (et = l) && !u) for ($ = i; $ !== null; ) o = $, l = o.child, o.tag === 22 && o.memoizedState !== null ? Im(i) : l !== null ? (l.return = o, $ = l) : Im(i);
        for (; a !== null; ) $ = a, hx(a), a = a.sibling;
        $ = i, Ao = s, et = u;
      }
      Tm(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, $ = a) : Tm(e);
  }
}
function Tm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            et || nl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !et) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : qt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && dm(t, a, r);
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
              dm(t, o, n);
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
                  var d = c.dehydrated;
                  d !== null && Pa(d);
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
            throw Error(O(163));
        }
        et || t.flags & 512 && gc(t);
      } catch (f) {
        Ie(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Nm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Im(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            nl(4, t);
          } catch (l) {
            Ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ie(t, i, l);
            }
          }
          var a = t.return;
          try {
            gc(t);
          } catch (l) {
            Ie(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            gc(t);
          } catch (l) {
            Ie(t, o, l);
          }
      }
    } catch (l) {
      Ie(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, $ = s;
      break;
    }
    $ = t.return;
  }
}
var Vb = Math.ceil, Cs = Ln.ReactCurrentDispatcher, jp = Ln.ReactCurrentOwner, jt = Ln.ReactCurrentBatchConfig, le = 0, $e = null, Oe = null, Xe = 0, kt = 0, si = sr(0), Le = 0, Va = null, Ir = 0, rl = 0, Bp = 0, ba = null, mt = null, zp = 0, Ti = 1 / 0, kn = null, Ss = !1, Ec = null, Yn = null, To = !1, Wn = null, _s = 0, ka = 0, wc = null, Ko = -1, Zo = 0;
function ut() {
  return le & 6 ? Pe() : Ko !== -1 ? Ko : Ko = Pe();
}
function Jn(e) {
  return e.mode & 1 ? le & 2 && Xe !== 0 ? Xe & -Xe : Sb.transition !== null ? (Zo === 0 && (Zo = Jv()), Zo) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : og(e.type)), e) : 1;
}
function Yt(e, t, n, r) {
  if (50 < ka) throw ka = 0, wc = null, Error(O(185));
  Ja(e, n, r), (!(le & 2) || e !== $e) && (e === $e && (!(le & 2) && (rl |= n), Le === 4 && $n(e, Xe)), yt(e, r), n === 1 && le === 0 && !(t.mode & 1) && (Ti = Pe() + 500, Js && lr()));
}
function yt(e, t) {
  var n = e.callbackNode;
  Sw(e, t);
  var r = us(e, e === $e ? Xe : 0);
  if (r === 0) n !== null && Bf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bf(n), t === 1) e.tag === 0 ? Cb(Pm.bind(null, e)) : Sg(Pm.bind(null, e)), Eb(function() {
      !(le & 6) && lr();
    }), n = null;
    else {
      switch (eg(r)) {
        case 1:
          n = dp;
          break;
        case 4:
          n = Zv;
          break;
        case 16:
          n = ls;
          break;
        case 536870912:
          n = Yv;
          break;
        default:
          n = ls;
      }
      n = kx(n, vx.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vx(e, t) {
  if (Ko = -1, Zo = 0, le & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (gi() && e.callbackNode !== n) return null;
  var r = us(e, e === $e ? Xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = As(e, r);
  else {
    t = r;
    var i = le;
    le |= 2;
    var a = xx();
    ($e !== e || Xe !== t) && (kn = null, Ti = Pe() + 500, br(e, t));
    do
      try {
        Gb();
        break;
      } catch (s) {
        gx(e, s);
      }
    while (!0);
    Sp(), Cs.current = a, le = i, Oe !== null ? t = 0 : ($e = null, Xe = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (i = Xu(e), i !== 0 && (r = i, t = bc(e, i))), t === 1) throw n = Va, br(e, 0), $n(e, r), yt(e, Pe()), n;
    if (t === 6) $n(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !$b(i) && (t = As(e, r), t === 2 && (a = Xu(e), a !== 0 && (r = a, t = bc(e, a))), t === 1)) throw n = Va, br(e, 0), $n(e, r), yt(e, Pe()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          mr(e, mt, kn);
          break;
        case 3:
          if ($n(e, r), (r & 130023424) === r && (t = zp + 500 - Pe(), 10 < t)) {
            if (us(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ut(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = nc(mr.bind(null, e, mt, kn), t);
            break;
          }
          mr(e, mt, kn);
          break;
        case 4:
          if ($n(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Zt(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = nc(mr.bind(null, e, mt, kn), r);
            break;
          }
          mr(e, mt, kn);
          break;
        case 5:
          mr(e, mt, kn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return yt(e, Pe()), e.callbackNode === n ? vx.bind(null, e) : null;
}
function bc(e, t) {
  var n = ba;
  return e.current.memoizedState.isDehydrated && (br(e, t).flags |= 256), e = As(e, t), e !== 2 && (t = mt, mt = n, t !== null && kc(t)), e;
}
function kc(e) {
  mt === null ? mt = e : mt.push.apply(mt, e);
}
function $b(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Jt(a(), i)) return !1;
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
function $n(e, t) {
  for (t &= ~Bp, t &= ~rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Zt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Pm(e) {
  if (le & 6) throw Error(O(327));
  gi();
  var t = us(e, 0);
  if (!(t & 1)) return yt(e, Pe()), null;
  var n = As(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xu(e);
    r !== 0 && (t = r, n = bc(e, r));
  }
  if (n === 1) throw n = Va, br(e, 0), $n(e, t), yt(e, Pe()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mr(e, mt, kn), yt(e, Pe()), null;
}
function Hp(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    le = n, le === 0 && (Ti = Pe() + 500, Js && lr());
  }
}
function Pr(e) {
  Wn !== null && Wn.tag === 0 && !(le & 6) && gi();
  var t = le;
  le |= 1;
  var n = jt.transition, r = fe;
  try {
    if (jt.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, jt.transition = n, le = t, !(le & 6) && lr();
  }
}
function Vp() {
  kt = si.current, ye(si);
}
function br(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yb(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
    var r = n;
    switch (bp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ms();
        break;
      case 3:
        _i(), ye(gt), ye(rt), Pp();
        break;
      case 5:
        Ip(r);
        break;
      case 4:
        _i();
        break;
      case 13:
        ye(_e);
        break;
      case 19:
        ye(_e);
        break;
      case 10:
        _p(r.type._context);
        break;
      case 22:
      case 23:
        Vp();
    }
    n = n.return;
  }
  if ($e = e, Oe = e = er(e.current, null), Xe = kt = t, Le = 0, Va = null, Bp = rl = Ir = 0, mt = ba = null, gr !== null) {
    for (t = 0; t < gr.length; t++) if (n = gr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, r.next = o;
      }
      n.pending = r;
    }
    gr = null;
  }
  return e;
}
function gx(e, t) {
  do {
    var n = Oe;
    try {
      if (Sp(), qo.current = ks, bs) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        bs = !1;
      }
      if (Nr = 0, He = Me = Ae = null, Ea = !1, Ba = 0, jp.current = null, n === null || n.return === null) {
        Le = 1, Va = t, Oe = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = Xe, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = xm(o);
          if (h !== null) {
            h.flags &= -257, ym(h, o, s, a, t), h.mode & 1 && gm(a, u, t), t = h, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              gm(a, u, t), $p();
              break e;
            }
            l = Error(O(426));
          }
        } else if (be && s.mode & 1) {
          var k = xm(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), ym(k, o, s, a, t), kp(Ai(l, s));
            break e;
          }
        }
        a = l = Ai(l, s), Le !== 4 && (Le = 2), ba === null ? ba = [a] : ba.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var g = ex(a, l, t);
              pm(a, g);
              break e;
            case 1:
              s = l;
              var x = a.type, E = a.stateNode;
              if (!(a.flags & 128) && (typeof x.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (Yn === null || !Yn.has(E)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var C = tx(a, s, t);
                pm(a, C);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Ex(n);
    } catch (S) {
      t = S, Oe === n && n !== null && (Oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xx() {
  var e = Cs.current;
  return Cs.current = ks, e === null ? ks : e;
}
function $p() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), $e === null || !(Ir & 268435455) && !(rl & 268435455) || $n($e, Xe);
}
function As(e, t) {
  var n = le;
  le |= 2;
  var r = xx();
  ($e !== e || Xe !== t) && (kn = null, br(e, t));
  do
    try {
      Ub();
      break;
    } catch (i) {
      gx(e, i);
    }
  while (!0);
  if (Sp(), le = n, Cs.current = r, Oe !== null) throw Error(O(261));
  return $e = null, Xe = 0, Le;
}
function Ub() {
  for (; Oe !== null; ) yx(Oe);
}
function Gb() {
  for (; Oe !== null && !vw(); ) yx(Oe);
}
function yx(e) {
  var t = bx(e.alternate, e, kt);
  e.memoizedProps = e.pendingProps, t === null ? Ex(e) : Oe = t, jp.current = null;
}
function Ex(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = jb(n, t), n !== null) {
        n.flags &= 32767, Oe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Le = 6, Oe = null;
        return;
      }
    } else if (n = Lb(n, t, kt), n !== null) {
      Oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function mr(e, t, n) {
  var r = fe, i = jt.transition;
  try {
    jt.transition = null, fe = 1, Wb(e, t, n, r);
  } finally {
    jt.transition = i, fe = r;
  }
  return null;
}
function Wb(e, t, n, r) {
  do
    gi();
  while (Wn !== null);
  if (le & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (_w(e, a), e === $e && (Oe = $e = null, Xe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || To || (To = !0, kx(ls, function() {
    return gi(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = jt.transition, jt.transition = null;
    var o = fe;
    fe = 1;
    var s = le;
    le |= 4, jp.current = null, zb(e, n), mx(n, e), db(ec), cs = !!Ju, ec = Ju = null, e.current = n, Hb(n), gw(), le = s, fe = o, jt.transition = a;
  } else e.current = n;
  if (To && (To = !1, Wn = e, _s = i), a = e.pendingLanes, a === 0 && (Yn = null), Ew(n.stateNode), yt(e, Pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ss) throw Ss = !1, e = Ec, Ec = null, e;
  return _s & 1 && e.tag !== 0 && gi(), a = e.pendingLanes, a & 1 ? e === wc ? ka++ : (ka = 0, wc = e) : ka = 0, lr(), null;
}
function gi() {
  if (Wn !== null) {
    var e = eg(_s), t = jt.transition, n = fe;
    try {
      if (jt.transition = null, fe = 16 > e ? 16 : e, Wn === null) var r = !1;
      else {
        if (e = Wn, Wn = null, _s = 0, le & 6) throw Error(O(331));
        var i = le;
        for (le |= 4, $ = e.current; $ !== null; ) {
          var a = $, o = a.child;
          if ($.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, $ = d;
                  else for (; $ !== null; ) {
                    c = $;
                    var f = c.sibling, h = c.return;
                    if (px(c), c === u) {
                      $ = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, $ = f;
                      break;
                    }
                    $ = h;
                  }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var k = y.sibling;
                    y.sibling = null, y = k;
                  } while (y !== null);
                }
              }
              $ = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, $ = o;
          else e: for (; $ !== null; ) {
            if (a = $, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                wa(9, a, a.return);
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, $ = g;
              break e;
            }
            $ = a.return;
          }
        }
        var x = e.current;
        for ($ = x; $ !== null; ) {
          o = $;
          var E = o.child;
          if (o.subtreeFlags & 2064 && E !== null) E.return = o, $ = E;
          else e: for (o = x; $ !== null; ) {
            if (s = $, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  nl(9, s);
              }
            } catch (S) {
              Ie(s, s.return, S);
            }
            if (s === o) {
              $ = null;
              break e;
            }
            var C = s.sibling;
            if (C !== null) {
              C.return = s.return, $ = C;
              break e;
            }
            $ = s.return;
          }
        }
        if (le = i, lr(), hn && typeof hn.onPostCommitFiberRoot == "function") try {
          hn.onPostCommitFiberRoot(Xs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, jt.transition = t;
    }
  }
  return !1;
}
function Om(e, t, n) {
  t = Ai(n, t), t = ex(e, t, 1), e = Zn(e, t, 1), t = ut(), e !== null && (Ja(e, 1, t), yt(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) Om(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Om(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
        e = Ai(n, e), e = tx(t, e, 1), t = Zn(t, e, 1), e = ut(), t !== null && (Ja(t, 1, e), yt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function qb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Xe & n) === n && (Le === 4 || Le === 3 && (Xe & 130023424) === Xe && 500 > Pe() - zp ? br(e, 0) : Bp |= n), yt(e, t);
}
function wx(e, t) {
  t === 0 && (e.mode & 1 ? (t = xo, xo <<= 1, !(xo & 130023424) && (xo = 4194304)) : t = 1);
  var n = ut();
  e = Fn(e, t), e !== null && (Ja(e, t, n), yt(e, n));
}
function Xb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), wx(e, n);
}
function Qb(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), wx(e, n);
}
var bx;
bx = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || gt.current) vt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return vt = !1, Mb(e, t, n);
    vt = !!(e.flags & 131072);
  }
  else vt = !1, be && t.flags & 1048576 && _g(t, gs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qo(e, t), e = t.pendingProps;
      var i = ki(t, rt.current);
      vi(t, n), i = Fp(null, t, r, e, i, n);
      var a = Rp();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (a = !0, hs(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Tp(t), i.updater = tl, t.stateNode = i, i._reactInternals = t, uc(t, r, e, n), t = dc(null, t, r, !0, a, n)) : (t.tag = 0, be && a && wp(t), ot(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zb(r), e = qt(r, e), i) {
          case 0:
            t = pc(null, t, r, e, n);
            break e;
          case 1:
            t = bm(null, t, r, e, n);
            break e;
          case 11:
            t = Em(null, t, r, e, n);
            break e;
          case 14:
            t = wm(null, t, r, qt(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qt(r, i), pc(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qt(r, i), bm(e, t, r, i, n);
    case 3:
      e: {
        if (ax(t), e === null) throw Error(O(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, Og(e, t), Es(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = Ai(Error(O(423)), t), t = km(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Ai(Error(O(424)), t), t = km(e, t, r, n, i);
          break e;
        } else for (St = Kn(t.stateNode.containerInfo.firstChild), _t = t, be = !0, Kt = null, n = Ig(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ci(), r === i) {
            t = Rn(e, t, n);
            break e;
          }
          ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fg(t), e === null && oc(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, tc(r, i) ? o = null : a !== null && tc(r, a) && (t.flags |= 32), ix(e, t), ot(e, t, o, n), t.child;
    case 6:
      return e === null && oc(t), null;
    case 13:
      return ox(e, t, n);
    case 4:
      return Np(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Si(t, null, r, n) : ot(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qt(r, i), Em(e, t, r, i, n);
    case 7:
      return ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, he(xs, r._currentValue), r._currentValue = o, a !== null) if (Jt(a.value, o)) {
          if (a.children === i.children && !gt.current) {
            t = Rn(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === r) {
                if (a.tag === 1) {
                  l = Nn(-1, n & -n), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), sc(
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
            if (o = a.return, o === null) throw Error(O(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), sc(o, n, t), o = a.sibling;
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
        ot(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, vi(t, n), i = Bt(i), r = r(i), t.flags |= 1, ot(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = qt(r, t.pendingProps), i = qt(r.type, i), wm(e, t, r, i, n);
    case 15:
      return nx(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qt(r, i), Qo(e, t), t.tag = 1, xt(r) ? (e = !0, hs(t)) : e = !1, vi(t, n), Jg(t, r, i), uc(t, r, i, n), dc(null, t, r, !0, e, n);
    case 19:
      return sx(e, t, n);
    case 22:
      return rx(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function kx(e, t) {
  return Kv(e, t);
}
function Kb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Lt(e, t, n, r) {
  return new Kb(e, t, n, r);
}
function Up(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Zb(e) {
  if (typeof e == "function") return Up(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === up) return 11;
    if (e === cp) return 14;
  }
  return 2;
}
function er(e, t) {
  var n = e.alternate;
  return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yo(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") Up(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Zr:
      return kr(n.children, i, a, t);
    case lp:
      o = 8, i |= 8;
      break;
    case Fu:
      return e = Lt(12, n, t, i | 2), e.elementType = Fu, e.lanes = a, e;
    case Ru:
      return e = Lt(13, n, t, i), e.elementType = Ru, e.lanes = a, e;
    case Du:
      return e = Lt(19, n, t, i), e.elementType = Du, e.lanes = a, e;
    case Fv:
      return il(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pv:
          o = 10;
          break e;
        case Ov:
          o = 9;
          break e;
        case up:
          o = 11;
          break e;
        case cp:
          o = 14;
          break e;
        case Bn:
          o = 16, r = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = Lt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function kr(e, t, n, r) {
  return e = Lt(7, e, r, t), e.lanes = n, e;
}
function il(e, t, n, r) {
  return e = Lt(22, e, r, t), e.elementType = Fv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ou(e, t, n) {
  return e = Lt(6, e, null, t), e.lanes = n, e;
}
function su(e, t, n) {
  return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Yb(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Gp(e, t, n, r, i, a, o, s, l) {
  return e = new Yb(e, t, n, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Lt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tp(a), e;
}
function Jb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cx(e) {
  if (!e) return rr;
  e = e._reactInternals;
  e: {
    if (Mr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return Cg(e, n, t);
  }
  return t;
}
function Sx(e, t, n, r, i, a, o, s, l) {
  return e = Gp(n, r, !0, e, i, a, o, s, l), e.context = Cx(null), n = e.current, r = ut(), i = Jn(n), a = Nn(r, i), a.callback = t ?? null, Zn(n, a, i), e.current.lanes = i, Ja(e, i, r), yt(e, r), e;
}
function al(e, t, n, r) {
  var i = t.current, a = ut(), o = Jn(i);
  return n = Cx(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zn(i, t, o), e !== null && (Yt(e, i, o, a), Wo(e, i, o)), o;
}
function Ts(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wp(e, t) {
  Fm(e, t), (e = e.alternate) && Fm(e, t);
}
function ek() {
  return null;
}
var _x = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qp(e) {
  this._internalRoot = e;
}
ol.prototype.render = qp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  al(e, t, null, null);
};
ol.prototype.unmount = qp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pr(function() {
      al(null, e, null, null);
    }), t[On] = null;
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++) ;
    Vn.splice(n, 0, e), n === 0 && ag(e);
  }
};
function Xp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Rm() {
}
function tk(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Ts(o);
        a.call(u);
      };
    }
    var o = Sx(t, r, e, 0, null, !1, !1, "", Rm);
    return e._reactRootContainer = o, e[On] = o.current, Ra(e.nodeType === 8 ? e.parentNode : e), Pr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Ts(l);
      s.call(u);
    };
  }
  var l = Gp(e, 0, !1, null, null, !1, !1, "", Rm);
  return e._reactRootContainer = l, e[On] = l.current, Ra(e.nodeType === 8 ? e.parentNode : e), Pr(function() {
    al(t, l, n, r);
  }), l;
}
function ll(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = Ts(o);
        s.call(l);
      };
    }
    al(t, o, e, i);
  } else o = tk(n, t, e, i, r);
  return Ts(o);
}
tg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = da(t.pendingLanes);
        n !== 0 && (fp(t, n | 1), yt(t, Pe()), !(le & 6) && (Ti = Pe() + 500, lr()));
      }
      break;
    case 13:
      Pr(function() {
        var r = Fn(e, 1);
        if (r !== null) {
          var i = ut();
          Yt(r, e, 1, i);
        }
      }), Wp(e, 1);
  }
};
mp = function(e) {
  if (e.tag === 13) {
    var t = Fn(e, 134217728);
    if (t !== null) {
      var n = ut();
      Yt(t, e, 134217728, n);
    }
    Wp(e, 134217728);
  }
};
ng = function(e) {
  if (e.tag === 13) {
    var t = Jn(e), n = Fn(e, t);
    if (n !== null) {
      var r = ut();
      Yt(n, e, t, r);
    }
    Wp(e, t);
  }
};
rg = function() {
  return fe;
};
ig = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
Gu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ju(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ys(r);
            if (!i) throw Error(O(90));
            Dv(r), ju(r, i);
          }
        }
      }
      break;
    case "textarea":
      Lv(e, n);
      break;
    case "select":
      t = n.value, t != null && di(e, !!n.multiple, t, !1);
  }
};
Uv = Hp;
Gv = Pr;
var nk = { usingClientEntryPoint: !1, Events: [to, ti, Ys, Vv, $v, Hp] }, sa = { findFiberByHostInstance: vr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rk = { bundleType: sa.bundleType, version: sa.version, rendererPackageName: sa.rendererPackageName, rendererConfig: sa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Xv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sa.findFiberByHostInstance || ek, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!No.isDisabled && No.supportsFiber) try {
    Xs = No.inject(rk), hn = No;
  } catch {
  }
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nk;
Nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xp(t)) throw Error(O(200));
  return Jb(e, t, null, n);
};
Nt.createRoot = function(e, t) {
  if (!Xp(e)) throw Error(O(299));
  var n = !1, r = "", i = _x;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Gp(e, 1, !1, null, null, n, !1, r, i), e[On] = t.current, Ra(e.nodeType === 8 ? e.parentNode : e), new qp(t);
};
Nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Xv(t), e = e === null ? null : e.stateNode, e;
};
Nt.flushSync = function(e) {
  return Pr(e);
};
Nt.hydrate = function(e, t, n) {
  if (!sl(t)) throw Error(O(200));
  return ll(null, e, t, !0, n);
};
Nt.hydrateRoot = function(e, t, n) {
  if (!Xp(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", o = _x;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Sx(t, null, e, 1, n ?? null, i, !1, a, o), e[On] = t.current, Ra(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ol(t);
};
Nt.render = function(e, t, n) {
  if (!sl(t)) throw Error(O(200));
  return ll(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function(e) {
  if (!sl(e)) throw Error(O(40));
  return e._reactRootContainer ? (Pr(function() {
    ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[On] = null;
    });
  }), !0) : !1;
};
Nt.unstable_batchedUpdates = Hp;
Nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!sl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ll(e, t, n, !1, r);
};
Nt.version = "18.3.1-next-f1338f8080-20240426";
function Ax() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ax);
    } catch (e) {
      console.error(e);
    }
}
Ax(), Av.exports = Nt;
var Tx = Av.exports;
const yr = /* @__PURE__ */ ji(Tx);
var Nx, Dm = Tx;
Nx = Dm.createRoot, Dm.hydrateRoot;
var Cc = function(e, t) {
  return Cc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Cc(e, t);
};
function $t(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Cc(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var H = function() {
  return H = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, H.apply(this, arguments);
};
function yn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Pt(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (d) {
        o(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        o(d);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Vi(e, t) {
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
function Mm(e, t) {
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
function ik() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function Ve(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function st(e, t) {
  var n = t && t.cache ? t.cache : ck, r = t && t.serializer ? t.serializer : uk, i = t && t.strategy ? t.strategy : sk;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function ak(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function ok(e, t, n, r) {
  var i = ak(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Ix(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Px(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function sk(e, t) {
  var n = e.length === 1 ? ok : Ix;
  return Px(e, this, n, t.cache.create(), t.serializer);
}
function lk(e, t) {
  return Px(e, this, Ix, t.cache.create(), t.serializer);
}
var uk = function() {
  return JSON.stringify(arguments);
};
function Qp() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Qp.prototype.get = function(e) {
  return this.cache[e];
};
Qp.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ck = {
  create: function() {
    return new Qp();
  }
}, lt = {
  variadic: lk
};
function Ox(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
st(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ve([void 0], t, !1)))();
}, {
  strategy: lt.variadic
});
st(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ve([void 0], t, !1)))();
}, {
  strategy: lt.variadic
});
st(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ve([void 0], t, !1)))();
}, {
  strategy: lt.variadic
});
st(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ve([void 0], t, !1)))();
}, {
  strategy: lt.variadic
});
st(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ve([void 0], t, !1)))();
}, {
  strategy: lt.variadic
});
var ae;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ae || (ae = {}));
var xe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(xe || (xe = {}));
var Ni;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Ni || (Ni = {}));
function Lm(e) {
  return e.type === xe.literal;
}
function pk(e) {
  return e.type === xe.argument;
}
function Fx(e) {
  return e.type === xe.number;
}
function Rx(e) {
  return e.type === xe.date;
}
function Dx(e) {
  return e.type === xe.time;
}
function Mx(e) {
  return e.type === xe.select;
}
function Lx(e) {
  return e.type === xe.plural;
}
function dk(e) {
  return e.type === xe.pound;
}
function jx(e) {
  return e.type === xe.tag;
}
function Bx(e) {
  return !!(e && typeof e == "object" && e.type === Ni.number);
}
function Sc(e) {
  return !!(e && typeof e == "object" && e.type === Ni.dateTime);
}
var zx = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, fk = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function mk(e) {
  var t = {};
  return e.replace(fk, function(n) {
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
var hk = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function vk(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(hk).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = o[0], l = o.slice(1), u = 0, c = l; u < c.length; u++) {
      var d = c[u];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: s, options: l });
  }
  return n;
}
function gk(e) {
  return e.replace(/^(.*?)-/, "");
}
var jm = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Hx = /^(@+)?(\+|#+)?[rs]?$/g, xk = /(\*)(0+)|(#+)(0+)|(0+)/g, Vx = /^(0+)$/;
function Bm(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Hx, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function $x(e) {
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
function yk(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Vx.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function zm(e) {
  var t = {}, n = $x(e);
  return n || t;
}
function Ek(e) {
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
        t.style = "unit", t.unit = gk(i.options[0]);
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
        t = H(H(H({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return H(H({}, l), zm(u));
        }, {}));
        continue;
      case "engineering":
        t = H(H(H({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return H(H({}, l), zm(u));
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
        i.options[0].replace(xk, function(l, u, c, d, f, h) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && f)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Vx.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (jm.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(jm, function(l, u, c, d, f, h) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : f && h ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = H(H({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = H(H({}, t), Bm(a)));
      continue;
    }
    if (Hx.test(i.stem)) {
      t = H(H({}, t), Bm(i.stem));
      continue;
    }
    var o = $x(i.stem);
    o && (t = H(H({}, t), o));
    var s = yk(i.stem);
    s && (t = H(H({}, t), s));
  }
  return t;
}
var Io = {
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
function wk(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = bk(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function bk(e) {
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
  var i = Io[r || ""] || Io[n || ""] || Io["".concat(n, "-001")] || Io["001"];
  return i[0];
}
var lu, kk = new RegExp("^".concat(zx.source, "*")), Ck = new RegExp("".concat(zx.source, "*$"));
function oe(e, t) {
  return { start: e, end: t };
}
var Sk = !!String.prototype.startsWith && "_a".startsWith("a", 1), _k = !!String.fromCodePoint, Ak = !!Object.fromEntries, Tk = !!String.prototype.codePointAt, Nk = !!String.prototype.trimStart, Ik = !!String.prototype.trimEnd, Pk = !!Number.isSafeInteger, Ok = Pk ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, _c = !0;
try {
  var Fk = Gx("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  _c = ((lu = Fk.exec("a")) === null || lu === void 0 ? void 0 : lu[0]) === "a";
} catch {
  _c = !1;
}
var Hm = Sk ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ac = _k ? String.fromCodePoint : (
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
), Vm = (
  // native
  Ak ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), Ux = Tk ? (
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
), Rk = Nk ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(kk, "");
  }
), Dk = Ik ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ck, "");
  }
);
function Gx(e, t) {
  return new RegExp(e, t);
}
var Tc;
if (_c) {
  var $m = Gx("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Tc = function(t, n) {
    var r;
    $m.lastIndex = n;
    var i = $m.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Tc = function(t, n) {
    for (var r = []; ; ) {
      var i = Ux(t, n);
      if (i === void 0 || Wx(i) || Bk(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ac.apply(void 0, r);
  };
var Mk = (
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
              location: oe(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ae.UNMATCHED_CLOSING_TAG, oe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Nc(this.peek() || 0)) {
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
            location: oe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Nc(this.char()))
            return this.error(ae.INVALID_TAG, oe(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(ae.UNMATCHED_CLOSING_TAG, oe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: xe.tag,
              value: i,
              children: o,
              location: oe(r, this.clonePosition())
            },
            err: null
          } : this.error(ae.INVALID_TAG, oe(s, this.clonePosition())));
        } else
          return this.error(ae.UNCLOSED_TAG, oe(r, this.clonePosition()));
      } else
        return this.error(ae.INVALID_TAG, oe(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && jk(this.char()); )
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
      var l = oe(r, this.clonePosition());
      return {
        val: { type: xe.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Lk(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ac.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ac(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ae.EXPECT_ARGUMENT_CLOSING_BRACE, oe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ae.EMPTY_ARGUMENT, oe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ae.MALFORMED_ARGUMENT, oe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ae.EXPECT_ARGUMENT_CLOSING_BRACE, oe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: xe.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: oe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ae.EXPECT_ARGUMENT_CLOSING_BRACE, oe(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(ae.MALFORMED_ARGUMENT, oe(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Tc(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = oe(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(ae.EXPECT_ARGUMENT_TYPE, oe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var f = Dk(d.val);
            if (f.length === 0)
              return this.error(ae.EXPECT_ARGUMENT_STYLE, oe(this.clonePosition(), this.clonePosition()));
            var h = oe(c, this.clonePosition());
            u = { style: f, styleLocation: h };
          }
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var y = oe(i, this.clonePosition());
          if (u && Hm(u == null ? void 0 : u.style, "::", 0)) {
            var k = Rk(u.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(k, u.styleLocation);
              return d.err ? d : {
                val: { type: xe.number, value: r, location: y, style: d.val },
                err: null
              };
            } else {
              if (k.length === 0)
                return this.error(ae.EXPECT_DATE_TIME_SKELETON, y);
              var g = k;
              this.locale && (g = wk(k, this.locale));
              var f = {
                type: Ni.dateTime,
                pattern: g,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? mk(g) : {}
              }, x = s === "date" ? xe.date : xe.time;
              return {
                val: { type: x, value: r, location: y, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? xe.number : s === "date" ? xe.date : xe.time,
              value: r,
              location: y,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var E = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ae.EXPECT_SELECT_ARGUMENT_OPTIONS, oe(E, H({}, E)));
          this.bumpSpace();
          var C = this.parseIdentifierIfPossible(), S = 0;
          if (s !== "select" && C.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, oe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ae.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), C = this.parseIdentifierIfPossible(), S = d.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, s, n, C);
          if (_.err)
            return _;
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var T = oe(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: xe.select,
              value: r,
              options: Vm(_.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: xe.plural,
              value: r,
              options: Vm(_.val),
              offset: S,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(ae.INVALID_ARGUMENT_TYPE, oe(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(ae.EXPECT_ARGUMENT_CLOSING_BRACE, oe(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ae.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, oe(i, this.clonePosition()));
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
        r = vk(t);
      } catch {
        return this.error(ae.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ni.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ek(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ae.EXPECT_PLURAL_ARGUMENT_SELECTOR, ae.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = oe(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? ae.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ae.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ae.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ae.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, oe(this.clonePosition(), this.clonePosition()));
        var w = this.parseMessage(t + 1, n, r);
        if (w.err)
          return w;
        var y = this.tryParseArgumentClose(h);
        if (y.err)
          return y;
        s.push([
          u,
          {
            value: w.val,
            location: oe(h, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? ae.EXPECT_SELECT_ARGUMENT_SELECTOR : ae.EXPECT_PLURAL_ARGUMENT_SELECTOR, oe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ae.MISSING_OTHER_CLAUSE, oe(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var l = oe(i, this.clonePosition());
      return a ? (o *= r, Ok(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Ux(this.message, t);
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
      if (Hm(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Wx(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Nc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Lk(e) {
  return Nc(e) || e === 47;
}
function jk(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Wx(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Bk(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ic(e) {
  e.forEach(function(t) {
    if (delete t.location, Mx(t) || Lx(t))
      for (var n in t.options)
        delete t.options[n].location, Ic(t.options[n].value);
    else Fx(t) && Bx(t.style) || (Rx(t) || Dx(t)) && Sc(t.style) ? delete t.style.location : jx(t) && Ic(t.children);
  });
}
function zk(e, t) {
  t === void 0 && (t = {}), t = H({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Mk(e, t).parse();
  if (n.err) {
    var r = SyntaxError(ae[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Ic(n.val), n.val;
}
var En;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(En || (En = {}));
var ur = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Um = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), En.INVALID_VALUE, a) || this;
    }
    return t;
  }(ur)
), Hk = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), En.INVALID_VALUE, i) || this;
    }
    return t;
  }(ur)
), Vk = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), En.MISSING_VALUE, r) || this;
    }
    return t;
  }(ur)
), it;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(it || (it = {}));
function $k(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== it.literal || n.type !== it.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function qx(e) {
  return typeof e == "function";
}
function Jo(e, t, n, r, i, a, o) {
  if (e.length === 1 && Lm(e[0]))
    return [
      {
        type: it.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (Lm(c)) {
      s.push({
        type: it.literal,
        value: c.value
      });
      continue;
    }
    if (dk(c)) {
      typeof a == "number" && s.push({
        type: it.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new Vk(d, o);
    var f = i[d];
    if (pk(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
        type: typeof f == "string" ? it.literal : it.object,
        value: f
      });
      continue;
    }
    if (Rx(c)) {
      var h = typeof c.style == "string" ? r.date[c.style] : Sc(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: it.literal,
        value: n.getDateTimeFormat(t, h).format(f)
      });
      continue;
    }
    if (Dx(c)) {
      var h = typeof c.style == "string" ? r.time[c.style] : Sc(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: it.literal,
        value: n.getDateTimeFormat(t, h).format(f)
      });
      continue;
    }
    if (Fx(c)) {
      var h = typeof c.style == "string" ? r.number[c.style] : Bx(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (f = f * (h.scale || 1)), s.push({
        type: it.literal,
        value: n.getNumberFormat(t, h).format(f)
      });
      continue;
    }
    if (jx(c)) {
      var w = c.children, y = c.value, k = i[y];
      if (!qx(k))
        throw new Hk(y, "function", o);
      var g = Jo(w, t, n, r, i, a), x = k(g.map(function(S) {
        return S.value;
      }));
      Array.isArray(x) || (x = [x]), s.push.apply(s, x.map(function(S) {
        return {
          type: typeof S == "string" ? it.literal : it.object,
          value: S
        };
      }));
    }
    if (Mx(c)) {
      var E = c.options[f] || c.options.other;
      if (!E)
        throw new Um(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Jo(E.value, t, n, r, i));
      continue;
    }
    if (Lx(c)) {
      var E = c.options["=".concat(f)];
      if (!E) {
        if (!Intl.PluralRules)
          throw new ur(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, En.MISSING_INTL_API, o);
        var C = n.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        E = c.options[C] || c.options.other;
      }
      if (!E)
        throw new Um(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Jo(E.value, t, n, r, i, f - (c.offset || 0)));
      continue;
    }
  }
  return $k(s);
}
function Uk(e, t) {
  return t ? H(H(H({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = H(H({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Gk(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Uk(e[r], t[r]), n;
  }, H({}, e)) : e;
}
function uu(e) {
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
function Wk(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: st(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ve([void 0], n, !1)))();
    }, {
      cache: uu(e.number),
      strategy: lt.variadic
    }),
    getDateTimeFormat: st(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ve([void 0], n, !1)))();
    }, {
      cache: uu(e.dateTime),
      strategy: lt.variadic
    }),
    getPluralRules: st(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ve([void 0], n, !1)))();
    }, {
      cache: uu(e.pluralRules),
      strategy: lt.variadic
    })
  };
}
var Xx = (
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
        var c = u.reduce(function(d, f) {
          return !d.length || f.type !== it.literal || typeof d[d.length - 1] != "string" ? d.push(f.value) : d[d.length - 1] += f.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Jo(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var s = yn(o, ["formatters"]);
        this.ast = e.__parse(t, H(H({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Gk(e.formats, r), this.formatters = i && i.formatters || Wk(this.formatterCache);
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
    }, e.__parse = zk, e.formats = {
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
), Or;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Or || (Or = {}));
var ro = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i) {
      var a = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), qk = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r) {
      return e.call(this, Or.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(ro)
), Xk = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r) {
      return e.call(this, Or.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(ro)
), Gm = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r) {
      return e.call(this, Or.MISSING_DATA, n, r) || this;
    }
    return t;
  }(ro)
), Ut = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i) {
      var a = e.call(this, Or.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(ro)
), cu = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(Ut)
), Qk = (
  /** @class */
  function(e) {
    $t(t, e);
    function t(n, r) {
      var i = e.call(this, Or.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(ro)
);
function Lr(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var Kk = function(e) {
}, Zk = function(e) {
}, Qx = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Kk,
  onWarn: Zk
};
function Kx() {
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
function dr(e) {
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
function Yk(e) {
  e === void 0 && (e = Kx());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = st(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, Ve([void 0], l, !1)))();
  }, {
    cache: dr(e.dateTime),
    strategy: lt.variadic
  }), a = st(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, Ve([void 0], l, !1)))();
  }, {
    cache: dr(e.number),
    strategy: lt.variadic
  }), o = st(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, Ve([void 0], l, !1)))();
  }, {
    cache: dr(e.pluralRules),
    strategy: lt.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: st(function(s, l, u, c) {
      return new Xx(s, l, u, H({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: dr(e.message),
      strategy: lt.variadic
    }),
    getRelativeTimeFormat: st(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, Ve([void 0], s, !1)))();
    }, {
      cache: dr(e.relativeTime),
      strategy: lt.variadic
    }),
    getPluralRules: o,
    getListFormat: st(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, Ve([void 0], s, !1)))();
    }, {
      cache: dr(e.list),
      strategy: lt.variadic
    }),
    getDisplayNames: st(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, Ve([void 0], s, !1)))();
    }, {
      cache: dr(e.displayNames),
      strategy: lt.variadic
    })
  };
}
function Kp(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new qk("No ".concat(t, " format named: ").concat(n)));
}
function Po(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = H({ timeZone: t }, e[r]), n;
  }, {});
}
function Wm(e, t) {
  var n = Object.keys(H(H({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = H(H({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function qm(e, t) {
  if (!t)
    return e;
  var n = Xx.formats;
  return H(H(H({}, n), e), { date: Wm(Po(n.date, t), Po(e.date || {}, t)), time: Wm(Po(n.time, t), Po(e.time || {}, t)) });
}
var Pc = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, h = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var w = n.id, y = n.defaultMessage;
  Ox(!!w, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var k = String(w), g = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, k) && s[k]
  );
  if (Array.isArray(g) && g.length === 1 && g[0].type === xe.literal)
    return g[0].value;
  if (!r && g && typeof g == "string" && !h)
    return g.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = H(H({}, h), r || {}), o = qm(o, f), u = qm(u, f), !g) {
    if (c === !1 && g === "")
      return g;
    if ((!y || a && a.toLowerCase() !== l.toLowerCase()) && d(new Qk(n, a)), y)
      try {
        var x = t.getMessageFormat(y, l, u, i);
        return x.format(r);
      } catch (E) {
        return d(new cu('Error formatting default message for: "'.concat(k, '", rendering default message verbatim'), a, n, E)), typeof y == "string" ? y : k;
      }
    return k;
  }
  try {
    var x = t.getMessageFormat(g, a, o, H({ formatters: t }, i || {}));
    return x.format(r);
  } catch (E) {
    d(new cu('Error formatting message: "'.concat(k, '", using ').concat(y ? "default message" : "id", " as fallback."), a, n, E));
  }
  if (y)
    try {
      var x = t.getMessageFormat(y, l, u, i);
      return x.format(r);
    } catch (E) {
      d(new cu('Error formatting the default message for: "'.concat(k, '", rendering message verbatim'), a, n, E));
    }
  return typeof g == "string" ? g : typeof y == "string" ? y : k;
}, Zx = [
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
function ul(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = H(H({}, s && { timeZone: s }), l && Kp(a, t, l, o)), c = Lr(r, Zx, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = H(H({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function Jk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ul(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Ut("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function e1(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ul(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Ut("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function t1(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, d = Lr(s, Zx, l ? { timeZone: l } : {});
  try {
    return t(u, d).formatRange(i, a);
  } catch (f) {
    c(new Ut("Error formatting date time range.", e.locale, f));
  }
  return String(i);
}
function n1(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ul(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Ut("Error formatting date.", e.locale, l));
  }
  return [];
}
function r1(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ul(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Ut("Error formatting time.", e.locale, l));
  }
  return [];
}
var i1 = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function a1(e, t, n, r) {
  var i = e.locale, a = e.onError, o = Intl.DisplayNames;
  o || a(new ur(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, En.MISSING_INTL_API));
  var s = Lr(r, i1);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new Ut("Error formatting display name.", i, l));
  }
}
var o1 = [
  "type",
  "style"
], Xm = Date.now();
function s1(e) {
  return "".concat(Xm, "_").concat(e, "_").concat(Xm);
}
function l1(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Yx(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Yx(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new ur(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, En.MISSING_INTL_API));
  var s = Lr(r, o1);
  try {
    var l = {}, u = n.map(function(c, d) {
      if (typeof c == "object") {
        var f = s1(d);
        return l[f] = c, f;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : H(H({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new Ut("Error formatting list.", i, c));
  }
  return n;
}
var u1 = ["type"];
function c1(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new ur(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, En.MISSING_INTL_API));
  var o = Lr(r, u1);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new Ut("Error formatting plural.", i, s));
  }
  return "other";
}
var p1 = ["numeric", "style"];
function d1(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && Kp(i, "relative", o, a) || {}, l = Lr(n, p1, s);
  return t(r, l);
}
function f1(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new ur(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, En.MISSING_INTL_API));
  try {
    return d1(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new Ut("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var m1 = [
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
function Jx(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && Kp(i, "number", o, a) || {}, l = Lr(n, m1, s);
  return t(r, l);
}
function h1(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Jx(e, t, r).format(n);
  } catch (i) {
    e.onError(new Ut("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function v1(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Jx(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Ut("Error formatting number.", e.locale, i));
  }
  return [];
}
function g1(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function x1(e) {
  e.onWarn && e.defaultRichTextElements && g1(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function y1(e, t) {
  var n = Yk(t), r = H(H({}, Qx), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Gm('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Gm('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new Xk('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), x1(r), H(H({}, r), {
    formatters: n,
    formatNumber: h1.bind(null, r, n.getNumberFormat),
    formatNumberToParts: v1.bind(null, r, n.getNumberFormat),
    formatRelativeTime: f1.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Jk.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: n1.bind(null, r, n.getDateTimeFormat),
    formatTime: e1.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: t1.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: r1.bind(null, r, n.getDateTimeFormat),
    formatPlural: c1.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Pc.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Pc.bind(null, r, n),
    formatList: l1.bind(null, r, n.getListFormat),
    formatListToParts: Yx.bind(null, r, n.getListFormat),
    formatDisplayName: a1.bind(null, r, n.getDisplayNames)
  });
}
function e0(e) {
  Ox(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var t0 = H(H({}, Qx), { textComponent: v.Fragment });
function E1(e) {
  return function(t) {
    return e(v.Children.toArray(t));
  };
}
function Oc(e, t) {
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
var n0 = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue = typeof Symbol == "function" && Symbol.for, Zp = Ue ? Symbol.for("react.element") : 60103, Yp = Ue ? Symbol.for("react.portal") : 60106, cl = Ue ? Symbol.for("react.fragment") : 60107, pl = Ue ? Symbol.for("react.strict_mode") : 60108, dl = Ue ? Symbol.for("react.profiler") : 60114, fl = Ue ? Symbol.for("react.provider") : 60109, ml = Ue ? Symbol.for("react.context") : 60110, Jp = Ue ? Symbol.for("react.async_mode") : 60111, hl = Ue ? Symbol.for("react.concurrent_mode") : 60111, vl = Ue ? Symbol.for("react.forward_ref") : 60112, gl = Ue ? Symbol.for("react.suspense") : 60113, w1 = Ue ? Symbol.for("react.suspense_list") : 60120, xl = Ue ? Symbol.for("react.memo") : 60115, yl = Ue ? Symbol.for("react.lazy") : 60116, b1 = Ue ? Symbol.for("react.block") : 60121, k1 = Ue ? Symbol.for("react.fundamental") : 60117, C1 = Ue ? Symbol.for("react.responder") : 60118, S1 = Ue ? Symbol.for("react.scope") : 60119;
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zp:
        switch (e = e.type, e) {
          case Jp:
          case hl:
          case cl:
          case dl:
          case pl:
          case gl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ml:
              case vl:
              case yl:
              case xl:
              case fl:
                return e;
              default:
                return t;
            }
        }
      case Yp:
        return t;
    }
  }
}
function r0(e) {
  return Ot(e) === hl;
}
me.AsyncMode = Jp;
me.ConcurrentMode = hl;
me.ContextConsumer = ml;
me.ContextProvider = fl;
me.Element = Zp;
me.ForwardRef = vl;
me.Fragment = cl;
me.Lazy = yl;
me.Memo = xl;
me.Portal = Yp;
me.Profiler = dl;
me.StrictMode = pl;
me.Suspense = gl;
me.isAsyncMode = function(e) {
  return r0(e) || Ot(e) === Jp;
};
me.isConcurrentMode = r0;
me.isContextConsumer = function(e) {
  return Ot(e) === ml;
};
me.isContextProvider = function(e) {
  return Ot(e) === fl;
};
me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zp;
};
me.isForwardRef = function(e) {
  return Ot(e) === vl;
};
me.isFragment = function(e) {
  return Ot(e) === cl;
};
me.isLazy = function(e) {
  return Ot(e) === yl;
};
me.isMemo = function(e) {
  return Ot(e) === xl;
};
me.isPortal = function(e) {
  return Ot(e) === Yp;
};
me.isProfiler = function(e) {
  return Ot(e) === dl;
};
me.isStrictMode = function(e) {
  return Ot(e) === pl;
};
me.isSuspense = function(e) {
  return Ot(e) === gl;
};
me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === cl || e === hl || e === dl || e === pl || e === gl || e === w1 || typeof e == "object" && e !== null && (e.$$typeof === yl || e.$$typeof === xl || e.$$typeof === fl || e.$$typeof === ml || e.$$typeof === vl || e.$$typeof === k1 || e.$$typeof === C1 || e.$$typeof === S1 || e.$$typeof === b1);
};
me.typeOf = Ot;
n0.exports = me;
var _1 = n0.exports, i0 = _1, A1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, T1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, a0 = {};
a0[i0.ForwardRef] = A1;
a0[i0.Memo] = T1;
var ed = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = v.createContext(null)) : v.createContext(null);
ed.Consumer;
var N1 = ed.Provider, I1 = N1, P1 = ed;
function jr() {
  var e = v.useContext(P1);
  return e0(e), e;
}
var Fc;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Fc || (Fc = {}));
var Rc;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Rc || (Rc = {}));
function o0(e) {
  var t = function(n) {
    var r = jr(), i = n.value, a = n.children, o = yn(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = Rc[e], t;
}
function io(e) {
  var t = function(n) {
    var r = jr(), i = n.value, a = n.children, o = yn(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || v.Fragment;
    return v.createElement(l, null, s);
  };
  return t.displayName = Fc[e], t;
}
function s0(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = qx(r) ? E1(r) : r, t;
  }, {});
}
var Qm = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = s0(r), s = Pc.apply(void 0, Ve([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? v.Children.toArray(s) : s;
}, Km = function(e, t) {
  var n = e.defaultRichTextElements, r = yn(e, ["defaultRichTextElements"]), i = s0(n), a = y1(H(H(H({}, t0), r), { defaultRichTextElements: i }), t), o = {
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
  return H(H({}, a), {
    formatMessage: Qm.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Qm.bind(null, o, a.formatters)
  });
};
function pu(e) {
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
var O1 = (
  /** @class */
  function(e) {
    $t(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Kx(), n.state = {
        cache: n.cache,
        intl: Km(pu(n.props), n.cache),
        prevConfig: pu(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = pu(n);
      return Oc(i, o) ? null : {
        intl: Km(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return e0(this.state.intl), v.createElement(I1, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = t0, t;
  }(v.PureComponent)
);
function F1(e, t) {
  var n = e.values, r = yn(e, ["values"]), i = t.values, a = yn(t, ["values"]);
  return Oc(i, n) && Oc(r, a);
}
function l0(e) {
  var t = jr(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? v.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, d = c === void 0 ? i : c, f = e.ignoreTag, h = { id: a, description: o, defaultMessage: s }, w = n(h, l, {
    ignoreTag: f
  });
  return typeof u == "function" ? u(Array.isArray(w) ? w : [w]) : d ? v.createElement(d, null, v.Children.toArray(w)) : v.createElement(v.Fragment, null, w);
}
l0.displayName = "FormattedMessage";
var $a = v.memo(l0, F1);
$a.displayName = "MemoizedFormattedMessage";
io("formatDate");
io("formatTime");
io("formatNumber");
io("formatList");
io("formatDisplayName");
o0("formatDate");
o0("formatTime");
var u0 = { exports: {} };
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
})(u0);
var R1 = u0.exports;
const D = /* @__PURE__ */ ji(R1);
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, U.apply(null, arguments);
}
function se(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Zm(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function D1(e) {
  var t = M1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function M1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function c0(e, t, n) {
  var r = v.useRef(e !== void 0), i = v.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, v.useCallback(function(u) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      d[f - 1] = arguments[f];
    n && n.apply(void 0, [u].concat(d)), o(u);
  }, [n])];
}
function L1(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[Zm(r)], s = a[r], l = se(a, [Zm(r), r].map(D1)), u = t[r], c = c0(s, o, e[u]), d = c[0], f = c[1];
    return U({}, l, (i = {}, i[r] = d, i[u] = f, i));
  }, e);
}
function Dc(e, t) {
  return Dc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Dc(e, t);
}
function ao(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dc(e, t);
}
var td = /* @__PURE__ */ m.createContext({});
td.Consumer;
td.Provider;
function Re(e, t) {
  var n = v.useContext(td);
  return e || n[t] || t;
}
function nd(e) {
  return e && e.ownerDocument || document;
}
function j1(e) {
  var t = nd(e);
  return t && t.defaultView || window;
}
function B1(e, t) {
  return j1(e).getComputedStyle(e, t);
}
var z1 = /([A-Z])/g;
function H1(e) {
  return e.replace(z1, "-$1").toLowerCase();
}
var V1 = /^ms-/;
function Oo(e) {
  return H1(e).replace(V1, "-ms-");
}
var $1 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function U1(e) {
  return !!(e && $1.test(e));
}
function Ns(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Oo(t)) || B1(e).getPropertyValue(Oo(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(Oo(i)) : U1(i) ? r += i + "(" + a + ") " : n += Oo(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var p0 = { exports: {} }, G1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", W1 = G1, q1 = W1;
function d0() {
}
function f0() {
}
f0.resetWarningCache = d0;
var X1 = function() {
  function e(r, i, a, o, s, l) {
    if (l !== q1) {
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
    checkPropTypes: f0,
    resetWarningCache: d0
  };
  return n.PropTypes = n, n;
};
p0.exports = X1();
var Q1 = p0.exports;
const p = /* @__PURE__ */ ji(Q1), Ym = {
  disabled: !1
}, Is = m.createContext(null);
var m0 = function(t) {
  return t.scrollTop;
}, ma = "unmounted", Hn = "exited", Sn = "entering", Un = "entered", Ps = "exiting", nn = /* @__PURE__ */ function(e) {
  ao(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = Hn, a.appearStatus = Sn) : l = Un : r.unmountOnExit || r.mountOnEnter ? l = ma : l = Hn, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === ma ? {
      status: Hn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Sn && o !== Un && (a = Sn) : (o === Sn || o === Un) && (a = Ps);
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
      if (this.cancelNextCallback(), a === Sn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : yr.findDOMNode(this);
          o && m0(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Hn && this.setState({
      status: ma
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [yr.findDOMNode(this), s], u = l[0], c = l[1], d = this.getTimeouts(), f = s ? d.appear : d.enter;
    if (!i && !o || Ym.disabled) {
      this.safeSetState({
        status: Un
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Sn
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(f, function() {
        a.safeSetState({
          status: Un
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : yr.findDOMNode(this);
    if (!a || Ym.disabled) {
      this.safeSetState({
        status: Hn
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Ps
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: Hn
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
    var o = this.props.nodeRef ? this.props.nodeRef.current : yr.findDOMNode(this), s = i == null && !this.props.addEndListener;
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
    if (i === ma)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = se(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ m.createElement(Is.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : m.cloneElement(m.Children.only(o), s))
    );
  }, t;
}(m.Component);
nn.contextType = Is;
nn.propTypes = {};
function Ur() {
}
nn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ur,
  onEntering: Ur,
  onEntered: Ur,
  onExit: Ur,
  onExiting: Ur,
  onExited: Ur
};
nn.UNMOUNTED = ma;
nn.EXITED = Hn;
nn.ENTERING = Sn;
nn.ENTERED = Un;
nn.EXITING = Ps;
const K1 = !!(typeof window < "u" && window.document && window.document.createElement);
var Mc = !1, Lc = !1;
try {
  var du = {
    get passive() {
      return Mc = !0;
    },
    get once() {
      return Lc = Mc = !0;
    }
  };
  K1 && (window.addEventListener("test", du, du), window.removeEventListener("test", du, !0));
} catch {
}
function Z1(e, t, n, r) {
  if (r && typeof r != "boolean" && !Lc) {
    var i = r.once, a = r.capture, o = n;
    !Lc && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, Mc ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Y1(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function li(e, t, n, r) {
  return Z1(e, t, n, r), function() {
    Y1(e, t, n, r);
  };
}
function J1(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function eC(e) {
  var t = Ns(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function tC(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || J1(e, "transitionend", !0);
  }, t + n), a = li(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function nC(e, t, n, r) {
  n == null && (n = eC(e) || 0);
  var i = tC(e, n, r), a = li(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Jm(e, t) {
  var n = Ns(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function h0(e, t) {
  var n = Jm(e, "transitionDuration"), r = Jm(e, "transitionDelay"), i = nC(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function Qr() {
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
function v0(e) {
  e.offsetHeight;
}
var rC = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], Gr, iC = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function g0(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], i = iC[e];
  return r + // @ts-ignore
  parseInt(Ns(t, i[0]), 10) + // @ts-ignore
  parseInt(Ns(t, i[1]), 10);
}
var aC = (Gr = {}, Gr[Hn] = "collapse", Gr[Ps] = "collapsing", Gr[Sn] = "collapsing", Gr[Un] = "collapse show", Gr), oC = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: g0
}, x0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, i = e.onEntered, a = e.onExit, o = e.onExiting, s = e.className, l = e.children, u = e.dimension, c = u === void 0 ? "height" : u, d = e.getDimensionValue, f = d === void 0 ? g0 : d, h = se(e, rC), w = typeof c == "function" ? c() : c, y = v.useMemo(function() {
    return Qr(function(C) {
      C.style[w] = "0";
    }, n);
  }, [w, n]), k = v.useMemo(function() {
    return Qr(function(C) {
      var S = "scroll" + w[0].toUpperCase() + w.slice(1);
      C.style[w] = C[S] + "px";
    }, r);
  }, [w, r]), g = v.useMemo(function() {
    return Qr(function(C) {
      C.style[w] = null;
    }, i);
  }, [w, i]), x = v.useMemo(function() {
    return Qr(function(C) {
      C.style[w] = f(w, C) + "px", v0(C);
    }, a);
  }, [a, f, w]), E = v.useMemo(function() {
    return Qr(function(C) {
      C.style[w] = null;
    }, o);
  }, [w, o]);
  return /* @__PURE__ */ m.createElement(
    nn,
    U({
      ref: t,
      addEndListener: h0
    }, h, {
      "aria-expanded": h.role ? h.in : null,
      onEnter: y,
      onEntering: k,
      onEntered: g,
      onExit: x,
      onExiting: E
    }),
    function(C, S) {
      return /* @__PURE__ */ m.cloneElement(l, U({}, S, {
        className: D(s, l.props.className, aC[C], w === "width" && "width")
      }));
    }
  );
});
x0.defaultProps = oC;
function sC(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function jc(e) {
  const t = sC(e);
  return v.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var lC = ["className", "children"], Fo, uC = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, cC = (Fo = {}, Fo[Sn] = "show", Fo[Un] = "show", Fo), $i = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = se(e, lC), a = v.useCallback(function(o) {
    v0(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ m.createElement(nn, U({
    ref: t,
    addEndListener: h0
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ m.cloneElement(r, U({}, s, {
      className: D("fade", n, r.props.className, cC[o])
    }));
  });
});
$i.defaultProps = uC;
$i.displayName = "Fade";
var pC = ["label", "onClick", "className"], dC = {
  label: p.string.isRequired,
  onClick: p.func
}, fC = {
  label: "Close"
}, El = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = se(e, pC);
  return /* @__PURE__ */ m.createElement("button", U({
    ref: t,
    type: "button",
    className: D("close", i),
    onClick: r
  }, a), /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, n));
});
El.displayName = "CloseButton";
El.propTypes = dC;
El.defaultProps = fC;
const y0 = function(e) {
  return /* @__PURE__ */ m.forwardRef(function(t, n) {
    return /* @__PURE__ */ m.createElement("div", U({}, t, {
      ref: n,
      className: D(t.className, e)
    }));
  });
};
var mC = /-(.)/g;
function hC(e) {
  return e.replace(mC, function(t, n) {
    return n.toUpperCase();
  });
}
var vC = ["className", "bsPrefix", "as"], gC = function(t) {
  return t[0].toUpperCase() + hC(t).slice(1);
};
function rd(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? gC(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ m.forwardRef(function(l, u) {
    var c = l.className, d = l.bsPrefix, f = l.as, h = f === void 0 ? a || "div" : f, w = se(l, vC), y = Re(d, e);
    return /* @__PURE__ */ m.createElement(h, U({
      ref: u,
      className: D(c, y)
    }, w));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var xC = ["as", "disabled", "onKeyDown"];
function eh(e) {
  return !e || e.trim() === "#";
}
var id = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = se(e, xC), s = function(c) {
    var d = o.href, f = o.onClick;
    if ((i || eh(d)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    f && f(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return eh(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ m.createElement(r, U({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: Qr(l, a)
  }));
});
id.displayName = "SafeAnchor";
var yC = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], E0 = y0("h4");
E0.displayName = "DivStyledAsH4";
var EC = rd("alert-heading", {
  Component: E0
}), wC = rd("alert-link", {
  Component: id
}), bC = {
  show: !0,
  transition: $i,
  closeLabel: "Close alert"
}, Br = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = L1(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, d = n.transition, f = se(n, yC), h = Re(r, "alert"), w = jc(function(g) {
    u && u(!1, g);
  }), y = d === !0 ? $i : d, k = /* @__PURE__ */ m.createElement("div", U({
    role: "alert"
  }, y ? void 0 : f, {
    ref: t,
    className: D(o, h, l && h + "-" + l, c && h + "-dismissible")
  }), c && /* @__PURE__ */ m.createElement(El, {
    onClick: w,
    label: a
  }), s);
  return y ? /* @__PURE__ */ m.createElement(y, U({
    unmountOnExit: !0
  }, f, {
    ref: void 0,
    in: i
  }), k) : i ? k : null;
});
Br.displayName = "Alert";
Br.defaultProps = bC;
Br.Link = wC;
Br.Heading = EC;
var kC = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], CC = {
  variant: "primary",
  active: !1,
  disabled: !1
}, ad = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = se(e, kC), d = Re(n, "btn"), f = D(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
  if (c.href)
    return /* @__PURE__ */ m.createElement(id, U({}, c, {
      as: u,
      ref: t,
      className: D(f, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var h = u || "button";
  return /* @__PURE__ */ m.createElement(h, U({}, c, {
    className: f
  }));
});
ad.displayName = "Button";
ad.defaultProps = CC;
function w0() {
  const e = v.useRef(!0), t = v.useRef(() => e.current);
  return v.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function SC(e) {
  const t = v.useRef(e);
  return t.current = e, t;
}
function _C(e) {
  const t = SC(e);
  v.useEffect(() => () => t.current(), []);
}
const Bc = 2 ** 31 - 1;
function b0(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Bc ? setTimeout(t, r) : setTimeout(() => b0(e, t, n), Bc);
}
function AC() {
  const e = w0(), t = v.useRef();
  return _C(() => clearTimeout(t.current)), v.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Bc ? t.current = setTimeout(i, a) : b0(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function TC(e, t) {
  var n = 0;
  return m.Children.map(e, function(r) {
    return /* @__PURE__ */ m.isValidElement(r) ? t(r, n++) : r;
  });
}
var NC = ["bsPrefix", "className", "as"], IC = ["xl", "lg", "md", "sm", "xs"], k0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = se(e, NC), s = Re(n, "col"), l = [], u = [];
    return IC.forEach(function(c) {
      var d = o[c];
      delete o[c];
      var f, h, w;
      if (typeof d == "object" && d != null) {
        var y = d.span;
        f = y === void 0 ? !0 : y, h = d.offset, w = d.order;
      } else
        f = d;
      var k = c !== "xs" ? "-" + c : "";
      f && l.push(f === !0 ? "" + s + k : "" + s + k + "-" + f), w != null && u.push("order" + k + "-" + w), h != null && u.push("offset" + k + "-" + h);
    }), l.length || l.push(s), /* @__PURE__ */ m.createElement(a, U({}, o, {
      ref: t,
      className: D.apply(void 0, [r].concat(l, u))
    }));
  }
);
k0.displayName = "Col";
function th() {
  return v.useState(null);
}
function PC(e) {
  const t = w0();
  return [e[0], v.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Et = "top", Ht = "bottom", Vt = "right", wt = "left", od = "auto", oo = [Et, Ht, Vt, wt], Ii = "start", Ua = "end", OC = "clippingParents", C0 = "viewport", la = "popper", FC = "reference", nh = /* @__PURE__ */ oo.reduce(function(e, t) {
  return e.concat([t + "-" + Ii, t + "-" + Ua]);
}, []), sd = /* @__PURE__ */ [].concat(oo, [od]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ii, t + "-" + Ua]);
}, []), RC = "beforeRead", DC = "read", MC = "afterRead", LC = "beforeMain", jC = "main", BC = "afterMain", zC = "beforeWrite", HC = "write", VC = "afterWrite", $C = [RC, DC, MC, LC, jC, BC, zC, HC, VC];
function gn(e) {
  return e.split("-")[0];
}
function Tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fr(e) {
  var t = Tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function xn(e) {
  var t = Tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ld(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Cr = Math.max, Os = Math.min, Pi = Math.round;
function zc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function S0() {
  return !/^((?!chrome|android).)*safari/i.test(zc());
}
function Oi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && xn(e) && (i = e.offsetWidth > 0 && Pi(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Pi(r.height) / e.offsetHeight || 1);
  var o = Fr(e) ? Tt(e) : window, s = o.visualViewport, l = !S0() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, d = r.width / i, f = r.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function ud(e) {
  var t = Oi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function _0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ld(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ir(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Dn(e) {
  return Tt(e).getComputedStyle(e);
}
function UC(e) {
  return ["table", "td", "th"].indexOf(ir(e)) >= 0;
}
function cr(e) {
  return ((Fr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function wl(e) {
  return ir(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ld(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    cr(e)
  );
}
function rh(e) {
  return !xn(e) || // https://github.com/popperjs/popper-core/issues/837
  Dn(e).position === "fixed" ? null : e.offsetParent;
}
function GC(e) {
  var t = /firefox/i.test(zc()), n = /Trident/i.test(zc());
  if (n && xn(e)) {
    var r = Dn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = wl(e);
  for (ld(i) && (i = i.host); xn(i) && ["html", "body"].indexOf(ir(i)) < 0; ) {
    var a = Dn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function so(e) {
  for (var t = Tt(e), n = rh(e); n && UC(n) && Dn(n).position === "static"; )
    n = rh(n);
  return n && (ir(n) === "html" || ir(n) === "body" && Dn(n).position === "static") ? t : n || GC(e) || t;
}
function cd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ca(e, t, n) {
  return Cr(e, Os(t, n));
}
function WC(e, t, n) {
  var r = Ca(e, t, n);
  return r > n ? n : r;
}
function A0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function T0(e) {
  return Object.assign({}, A0(), e);
}
function N0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var qC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, T0(typeof t != "number" ? t : N0(t, oo));
};
function XC(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = gn(n.placement), l = cd(s), u = [wt, Vt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var d = qC(i.padding, n), f = ud(a), h = l === "y" ? Et : wt, w = l === "y" ? Ht : Vt, y = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], k = o[l] - n.rects.reference[l], g = so(a), x = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, E = y / 2 - k / 2, C = d[h], S = x - f[c] - d[w], _ = x / 2 - f[c] / 2 + E, T = Ca(C, _, S), A = l;
    n.modifiersData[r] = (t = {}, t[A] = T, t.centerOffset = T - _, t);
  }
}
function QC(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || _0(t.elements.popper, i) && (t.elements.arrow = i));
}
const KC = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: XC,
  effect: QC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Fi(e) {
  return e.split("-")[1];
}
var ZC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function YC(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Pi(n * i) / i || 0,
    y: Pi(r * i) / i || 0
  };
}
function ih(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = o.x, h = f === void 0 ? 0 : f, w = o.y, y = w === void 0 ? 0 : w, k = typeof c == "function" ? c({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  h = k.x, y = k.y;
  var g = o.hasOwnProperty("x"), x = o.hasOwnProperty("y"), E = wt, C = Et, S = window;
  if (u) {
    var _ = so(n), T = "clientHeight", A = "clientWidth";
    if (_ === Tt(n) && (_ = cr(n), Dn(_).position !== "static" && s === "absolute" && (T = "scrollHeight", A = "scrollWidth")), _ = _, i === Et || (i === wt || i === Vt) && a === Ua) {
      C = Ht;
      var I = d && _ === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[T]
      );
      y -= I - r.height, y *= l ? 1 : -1;
    }
    if (i === wt || (i === Et || i === Ht) && a === Ua) {
      E = Vt;
      var N = d && _ === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[A]
      );
      h -= N - r.width, h *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, u && ZC), L = c === !0 ? YC({
    x: h,
    y
  }, Tt(n)) : {
    x: h,
    y
  };
  if (h = L.x, y = L.y, l) {
    var R;
    return Object.assign({}, M, (R = {}, R[C] = x ? "0" : "", R[E] = g ? "0" : "", R.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", R));
  }
  return Object.assign({}, M, (t = {}, t[C] = x ? y + "px" : "", t[E] = g ? h + "px" : "", t.transform = "", t));
}
function JC(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: gn(t.placement),
    variation: Fi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ih(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ih(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eS = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: JC,
  data: {}
};
var Ro = {
  passive: !0
};
function tS(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = Tt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ro);
  }), s && l.addEventListener("resize", n.update, Ro), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ro);
    }), s && l.removeEventListener("resize", n.update, Ro);
  };
}
const nS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tS,
  data: {}
};
var rS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function es(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return rS[t];
  });
}
var iS = {
  start: "end",
  end: "start"
};
function ah(e) {
  return e.replace(/start|end/g, function(t) {
    return iS[t];
  });
}
function pd(e) {
  var t = Tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function dd(e) {
  return Oi(cr(e)).left + pd(e).scrollLeft;
}
function aS(e, t) {
  var n = Tt(e), r = cr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = S0();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + dd(e),
    y: l
  };
}
function oS(e) {
  var t, n = cr(e), r = pd(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Cr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Cr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + dd(e), l = -r.scrollTop;
  return Dn(i || n).direction === "rtl" && (s += Cr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function fd(e) {
  var t = Dn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function I0(e) {
  return ["html", "body", "#document"].indexOf(ir(e)) >= 0 ? e.ownerDocument.body : xn(e) && fd(e) ? e : I0(wl(e));
}
function Sa(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = I0(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Tt(r), o = i ? [a].concat(a.visualViewport || [], fd(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Sa(wl(o)))
  );
}
function Hc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function sS(e, t) {
  var n = Oi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function oh(e, t, n) {
  return t === C0 ? Hc(aS(e, n)) : Fr(t) ? sS(t, n) : Hc(oS(cr(e)));
}
function lS(e) {
  var t = Sa(wl(e)), n = ["absolute", "fixed"].indexOf(Dn(e).position) >= 0, r = n && xn(e) ? so(e) : e;
  return Fr(r) ? t.filter(function(i) {
    return Fr(i) && _0(i, r) && ir(i) !== "body";
  }) : [];
}
function uS(e, t, n, r) {
  var i = t === "clippingParents" ? lS(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = oh(e, u, r);
    return l.top = Cr(c.top, l.top), l.right = Os(c.right, l.right), l.bottom = Os(c.bottom, l.bottom), l.left = Cr(c.left, l.left), l;
  }, oh(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function P0(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? gn(r) : null, a = r ? Fi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case Et:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Ht:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Vt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case wt:
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
  var u = i ? cd(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ii:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ua:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ga(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? OC : s, u = n.rootBoundary, c = u === void 0 ? C0 : u, d = n.elementContext, f = d === void 0 ? la : d, h = n.altBoundary, w = h === void 0 ? !1 : h, y = n.padding, k = y === void 0 ? 0 : y, g = T0(typeof k != "number" ? k : N0(k, oo)), x = f === la ? FC : la, E = e.rects.popper, C = e.elements[w ? x : f], S = uS(Fr(C) ? C : C.contextElement || cr(e.elements.popper), l, c, o), _ = Oi(e.elements.reference), T = P0({
    reference: _,
    element: E,
    placement: i
  }), A = Hc(Object.assign({}, E, T)), I = f === la ? A : _, N = {
    top: S.top - I.top + g.top,
    bottom: I.bottom - S.bottom + g.bottom,
    left: S.left - I.left + g.left,
    right: I.right - S.right + g.right
  }, M = e.modifiersData.offset;
  if (f === la && M) {
    var L = M[i];
    Object.keys(N).forEach(function(R) {
      var q = [Vt, Ht].indexOf(R) >= 0 ? 1 : -1, Q = [Et, Ht].indexOf(R) >= 0 ? "y" : "x";
      N[R] += L[Q] * q;
    });
  }
  return N;
}
function cS(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? sd : l, c = Fi(r), d = c ? s ? nh : nh.filter(function(w) {
    return Fi(w) === c;
  }) : oo, f = d.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  f.length === 0 && (f = d);
  var h = f.reduce(function(w, y) {
    return w[y] = Ga(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[gn(y)], w;
  }, {});
  return Object.keys(h).sort(function(w, y) {
    return h[w] - h[y];
  });
}
function pS(e) {
  if (gn(e) === od)
    return [];
  var t = es(e);
  return [ah(e), t, ah(t)];
}
function dS(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, h = n.flipVariations, w = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, k = t.options.placement, g = gn(k), x = g === k, E = l || (x || !w ? [es(k)] : pS(k)), C = [k].concat(E).reduce(function(pe, ne) {
      return pe.concat(gn(ne) === od ? cS(t, {
        placement: ne,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: y
      }) : ne);
    }, []), S = t.rects.reference, _ = t.rects.popper, T = /* @__PURE__ */ new Map(), A = !0, I = C[0], N = 0; N < C.length; N++) {
      var M = C[N], L = gn(M), R = Fi(M) === Ii, q = [Et, Ht].indexOf(L) >= 0, Q = q ? "width" : "height", Z = Ga(t, {
        placement: M,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), Y = q ? R ? Vt : wt : R ? Ht : Et;
      S[Q] > _[Q] && (Y = es(Y));
      var P = es(Y), F = [];
      if (a && F.push(Z[L] <= 0), s && F.push(Z[Y] <= 0, Z[P] <= 0), F.every(function(pe) {
        return pe;
      })) {
        I = M, A = !1;
        break;
      }
      T.set(M, F);
    }
    if (A)
      for (var z = w ? 3 : 1, W = function(ne) {
        var J = C.find(function(Ee) {
          var De = T.get(Ee);
          if (De)
            return De.slice(0, ne).every(function(dt) {
              return dt;
            });
        });
        if (J)
          return I = J, "break";
      }, V = z; V > 0; V--) {
        var Ne = W(V);
        if (Ne === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const fS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: dS,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function sh(e, t, n) {
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
function lh(e) {
  return [Et, Vt, Ht, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function mS(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Ga(t, {
    elementContext: "reference"
  }), s = Ga(t, {
    altBoundary: !0
  }), l = sh(o, r), u = sh(s, i, a), c = lh(l), d = lh(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const hS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mS
};
function vS(e, t, n) {
  var r = gn(e), i = [wt, Et].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [wt, Vt].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function gS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = sd.reduce(function(c, d) {
    return c[d] = vS(d, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const xS = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gS
};
function yS(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = P0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ES = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yS,
  data: {}
};
function wS(e) {
  return e === "x" ? "y" : "x";
}
function bS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, h = f === void 0 ? !0 : f, w = n.tetherOffset, y = w === void 0 ? 0 : w, k = Ga(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), g = gn(t.placement), x = Fi(t.placement), E = !x, C = cd(g), S = wS(C), _ = t.modifiersData.popperOffsets, T = t.rects.reference, A = t.rects.popper, I = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, N = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (_) {
    if (a) {
      var R, q = C === "y" ? Et : wt, Q = C === "y" ? Ht : Vt, Z = C === "y" ? "height" : "width", Y = _[C], P = Y + k[q], F = Y - k[Q], z = h ? -A[Z] / 2 : 0, W = x === Ii ? T[Z] : A[Z], V = x === Ii ? -A[Z] : -T[Z], Ne = t.elements.arrow, pe = h && Ne ? ud(Ne) : {
        width: 0,
        height: 0
      }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : A0(), J = ne[q], Ee = ne[Q], De = Ca(0, T[Z], pe[Z]), dt = E ? T[Z] / 2 - z - De - J - N.mainAxis : W - De - J - N.mainAxis, bt = E ? -T[Z] / 2 + z + De + Ee + N.mainAxis : V + De + Ee + N.mainAxis, Ke = t.elements.arrow && so(t.elements.arrow), Ze = Ke ? C === "y" ? Ke.clientTop || 0 : Ke.clientLeft || 0 : 0, Ft = (R = M == null ? void 0 : M[C]) != null ? R : 0, an = Y + dt - Ft - Ze, on = Y + bt - Ft, ke = Ca(h ? Os(P, an) : P, Y, h ? Cr(F, on) : F);
      _[C] = ke, L[C] = ke - Y;
    }
    if (s) {
      var re, ue = C === "x" ? Et : wt, de = C === "x" ? Ht : Vt, ce = _[S], Rt = S === "y" ? "height" : "width", bn = ce + k[ue], sn = ce - k[de], j = [Et, wt].indexOf(g) !== -1, X = (re = M == null ? void 0 : M[S]) != null ? re : 0, ve = j ? bn : ce - T[Rt] - A[Rt] - X + N.altAxis, we = j ? ce + T[Rt] + A[Rt] - X - N.altAxis : sn, Be = h && j ? WC(ve, ce, we) : Ca(h ? ve : bn, ce, h ? we : sn);
      _[S] = Be, L[S] = Be - ce;
    }
    t.modifiersData[r] = L;
  }
}
const kS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bS,
  requiresIfExists: ["offset"]
};
function CS(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function SS(e) {
  return e === Tt(e) || !xn(e) ? pd(e) : CS(e);
}
function _S(e) {
  var t = e.getBoundingClientRect(), n = Pi(t.width) / e.offsetWidth || 1, r = Pi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function AS(e, t, n) {
  n === void 0 && (n = !1);
  var r = xn(t), i = xn(t) && _S(t), a = cr(t), o = Oi(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ir(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  fd(a)) && (s = SS(t)), xn(t) ? (l = Oi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = dd(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function TS(e) {
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
function NS(e) {
  var t = TS(e);
  return $C.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function IS(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function PS(e) {
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
var uh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ch() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function OS(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? uh : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, uh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, h = {
      state: c,
      setOptions: function(g) {
        var x = typeof g == "function" ? g(c.options) : g;
        y(), c.options = Object.assign({}, a, c.options, x), c.scrollParents = {
          reference: Fr(s) ? Sa(s) : s.contextElement ? Sa(s.contextElement) : [],
          popper: Sa(l)
        };
        var E = NS(PS([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = E.filter(function(C) {
          return C.enabled;
        }), w(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var g = c.elements, x = g.reference, E = g.popper;
          if (ch(x, E)) {
            c.rects = {
              reference: AS(x, so(E), c.options.strategy === "fixed"),
              popper: ud(E)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(N) {
              return c.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var S = c.orderedModifiers[C], _ = S.fn, T = S.options, A = T === void 0 ? {} : T, I = S.name;
              typeof _ == "function" && (c = _({
                state: c,
                options: A,
                name: I,
                instance: h
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: IS(function() {
        return new Promise(function(k) {
          h.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!ch(s, l))
      return h;
    h.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function w() {
      c.orderedModifiers.forEach(function(k) {
        var g = k.name, x = k.options, E = x === void 0 ? {} : x, C = k.effect;
        if (typeof C == "function") {
          var S = C({
            state: c,
            name: g,
            instance: h,
            options: E
          }), _ = function() {
          };
          d.push(S || _);
        }
      });
    }
    function y() {
      d.forEach(function(k) {
        return k();
      }), d = [];
    }
    return h;
  };
}
var FS = OS({
  defaultModifiers: [hS, ES, eS, nS, xS, fS, kS, KC]
}), ph = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, RS = {
  name: "applyStyles",
  enabled: !1
}, DS = {
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
}, MS = [];
function LS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, d = c === void 0 ? MS : c, f = se(r, ["enabled", "placement", "strategy", "modifiers"]), h = v.useRef(), w = v.useCallback(function() {
    var C;
    (C = h.current) == null || C.update();
  }, []), y = v.useCallback(function() {
    var C;
    (C = h.current) == null || C.forceUpdate();
  }, []), k = PC(v.useState({
    placement: s,
    update: w,
    forceUpdate: y,
    attributes: {},
    styles: {
      popper: ph(u),
      arrow: {}
    }
  })), g = k[0], x = k[1], E = v.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(S) {
        var _ = S.state, T = {}, A = {};
        Object.keys(_.elements).forEach(function(I) {
          T[I] = _.styles[I], A[I] = _.attributes[I];
        }), x({
          state: _,
          styles: T,
          attributes: A,
          update: w,
          forceUpdate: y,
          placement: _.placement
        });
      }
    };
  }, [w, y, x]);
  return v.useEffect(function() {
    !h.current || !a || h.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(d, [E, RS])
    });
  }, [u, s, E, a]), v.useEffect(function() {
    if (!(!a || e == null || t == null))
      return h.current = FS(e, t, U({}, f, {
        placement: s,
        strategy: u,
        modifiers: [].concat(d, [DS, E])
      })), function() {
        h.current != null && (h.current.destroy(), h.current = void 0, x(function(C) {
          return U({}, C, {
            attributes: {},
            styles: {
              popper: ph(u)
            }
          });
        }));
      };
  }, [a, e, t]), g;
}
function O0(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var jS = function() {
}, BS = jS;
const zS = /* @__PURE__ */ ji(BS);
function Fs(e) {
  return e && "setState" in e ? yr.findDOMNode(e) : e ?? null;
}
const HS = function(e) {
  return nd(Fs(e));
};
var VS = 27, dh = function() {
};
function $S(e) {
  return e.button === 0;
}
function US(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var fh = function(t) {
  return t && ("current" in t ? t.current : t);
};
function GS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = v.useRef(!1), l = t || dh, u = v.useCallback(function(f) {
    var h, w = fh(e);
    zS(!!w, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !w || US(f) || !$S(f) || !!O0(w, (h = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? h : f.target);
  }, [e]), c = jc(function(f) {
    s.current || l(f);
  }), d = jc(function(f) {
    f.keyCode === VS && l(f);
  });
  v.useEffect(function() {
    if (!(i || e == null)) {
      var f = window.event, h = HS(fh(e)), w = li(h, o, u, !0), y = li(h, o, function(x) {
        if (x === f) {
          f = void 0;
          return;
        }
        c(x);
      }), k = li(h, "keyup", function(x) {
        if (x === f) {
          f = void 0;
          return;
        }
        d(x);
      }), g = [];
      return "ontouchstart" in h.documentElement && (g = [].slice.call(h.body.children).map(function(x) {
        return li(x, "mousemove", dh);
      })), function() {
        w(), y(), k(), g.forEach(function(x) {
          return x();
        });
      };
    }
  }, [e, i, o, u, c, d]);
}
function WS(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function qS(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function XS(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, d = e.containerPadding, f = e.arrowElement, h = e.popperConfig, w = h === void 0 ? {} : h, y = WS(w.modifiers);
  return U({}, w, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : w.strategy,
    modifiers: qS(U({}, y, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: U({}, y.preventOverflow, {
        options: d ? U({
          padding: d
        }, (t = y.preventOverflow) == null ? void 0 : t.options) : (n = y.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: U({
          offset: u
        }, (r = y.offset) == null ? void 0 : r.options)
      },
      arrow: U({}, y.arrow, {
        enabled: !!f,
        options: U({}, (i = y.arrow) == null ? void 0 : i.options, {
          element: f
        })
      }),
      flip: U({
        enabled: !!l
      }, y.flip)
    }))
  });
}
const mh = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function QS(e, t) {
  const n = mh(e), r = mh(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function KS(e, t) {
  return v.useMemo(() => QS(e, t), [e, t]);
}
function ts(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function fu(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function ZS() {
  var e = v.useRef(null), t = v.useRef(null), n = v.useRef(null), r = Re(void 0, "popover"), i = Re(void 0, "dropdown-menu"), a = v.useCallback(function(u) {
    !u || !(ts(u, r) || ts(u, i)) || (t.current = fu(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = v.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var d = c.placement;
          if (!t.current) return [0, 0];
          var f = t.current, h = f.top, w = f.left, y = f.bottom, k = f.right;
          switch (d.split("-")[0]) {
            case "top":
              return [0, y];
            case "left":
              return [0, k];
            case "bottom":
              return [0, h];
            case "right":
              return [0, w];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = v.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, d = c.top, f = c.right, h = d || f;
          return {
            top: h,
            left: h,
            right: h,
            bottom: h
          };
        }
      }
    };
  }, [n]), l = v.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var d = c.state;
        if (!(!e.current || !d.elements.arrow || !ts(e.current, r))) {
          if (d.modifiersData["arrow#persistent"]) {
            var f = fu(d.elements.arrow), h = f.top, w = f.right, y = h || w;
            d.modifiersData["arrow#persistent"].padding = {
              top: y,
              left: y,
              right: y,
              bottom: y
            };
          } else
            n.current = fu(d.elements.arrow);
          return d.elements.arrow.style.margin = "0", function() {
            d.elements.arrow && (d.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
var hh = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", d = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + d + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var f = arguments.length, h = Array(f > 5 ? f - 5 : 0), w = 5; w < f; w++)
        h[w - 5] = arguments[w];
      return r.apply(void 0, [a, o, s, l, u].concat(h));
    };
  }
  e.exports = t.default;
})(hh, hh.exports);
var vh = { exports: {} }, Vc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, d) {
      var f = u || "<<anonymous>>", h = d || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + h + "` was not specified " + ("in `" + f + "`.")) : null;
      for (var w = arguments.length, y = Array(w > 6 ? w - 6 : 0), k = 6; k < w; k++)
        y[k - 6] = arguments[k];
      return r.apply(void 0, [s, l, f, c, h].concat(y));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Vc, Vc.exports);
var YS = Vc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = YS, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, d = Array(c), f = 0; f < c; f++)
        d[f] = arguments[f];
      var h = null;
      return s.forEach(function(w) {
        if (h == null) {
          var y = w.apply(void 0, d);
          y != null && (h = y);
        }
      }), h;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(vh, vh.exports);
var JS = ["as", "className", "type", "tooltip"], e_ = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: p.string,
  /** Display feedback as a tooltip. */
  tooltip: p.bool,
  as: p.elementType
}, lo = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = se(e, JS);
    return /* @__PURE__ */ m.createElement(r, U({}, u, {
      ref: t,
      className: D(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
lo.displayName = "Feedback";
lo.propTypes = e_;
var en = /* @__PURE__ */ m.createContext({
  controlId: void 0
}), t_ = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], md = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, d = c === void 0 ? !1 : c, f = e.isStatic, h = e.as, w = h === void 0 ? "input" : h, y = se(e, t_), k = v.useContext(en), g = k.controlId, x = k.custom, E = x ? [i, "custom-control-input"] : [r, "form-check-input"], C = E[0], S = E[1];
  return r = Re(C, S), /* @__PURE__ */ m.createElement(w, U({}, y, {
    ref: t,
    type: s,
    id: n || g,
    className: D(a, r, u && "is-valid", d && "is-invalid", f && "position-static")
  }));
});
md.displayName = "FormCheckInput";
var n_ = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], hd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = se(e, n_), s = v.useContext(en), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], d = c[0], f = c[1];
  return n = Re(d, f), /* @__PURE__ */ m.createElement("label", U({}, o, {
    ref: t,
    htmlFor: a || l,
    className: D(i, n)
  }));
});
hd.displayName = "FormCheckLabel";
var r_ = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], zr = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, f = d === void 0 ? !1 : d, h = e.feedbackTooltip, w = h === void 0 ? !1 : h, y = e.feedback, k = e.className, g = e.style, x = e.title, E = x === void 0 ? "" : x, C = e.type, S = C === void 0 ? "checkbox" : C, _ = e.label, T = e.children, A = e.custom, I = e.as, N = I === void 0 ? "input" : I, M = se(e, r_), L = S === "switch" ? !0 : A, R = L ? [i, "custom-control"] : [r, "form-check"], q = R[0], Q = R[1];
  r = Re(q, Q);
  var Z = v.useContext(en), Y = Z.controlId, P = v.useMemo(function() {
    return {
      controlId: n || Y,
      custom: L
    };
  }, [Y, L, n]), F = L || _ != null && _ !== !1 && !T, z = /* @__PURE__ */ m.createElement(md, U({}, M, {
    type: S === "switch" ? "checkbox" : S,
    ref: t,
    isValid: c,
    isInvalid: f,
    isStatic: !F,
    disabled: l,
    as: N
  }));
  return /* @__PURE__ */ m.createElement(en.Provider, {
    value: P
  }, /* @__PURE__ */ m.createElement("div", {
    style: g,
    className: D(k, r, L && "custom-" + S, o && r + "-inline")
  }, T || /* @__PURE__ */ m.createElement(m.Fragment, null, z, F && /* @__PURE__ */ m.createElement(hd, {
    title: E
  }, _), (c || f) && /* @__PURE__ */ m.createElement(lo, {
    type: c ? "valid" : "invalid",
    tooltip: w
  }, y))));
});
zr.displayName = "FormCheck";
zr.Input = md;
zr.Label = hd;
var i_ = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], vd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, d = se(e, i_), f = v.useContext(en), h = f.controlId, w = f.custom, y = "file", k = w ? [i, "custom-file-input"] : [r, "form-control-file"], g = k[0], x = k[1];
  return r = Re(g, x), /* @__PURE__ */ m.createElement(c, U({}, d, {
    ref: t,
    id: n || h,
    type: y,
    lang: l,
    className: D(a, r, o && "is-valid", s && "is-invalid")
  }));
});
vd.displayName = "FormFileInput";
var a_ = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Rs = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = se(e, a_), s = v.useContext(en), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], d = c[0], f = c[1];
  return n = Re(d, f), /* @__PURE__ */ m.createElement("label", U({}, o, {
    ref: t,
    htmlFor: a || l,
    className: D(i, n),
    "data-browse": o["data-browse"]
  }));
});
Rs.displayName = "FormFileLabel";
var o_ = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], bl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, d = e.feedbackTooltip, f = d === void 0 ? !1 : d, h = e.feedback, w = e.className, y = e.style, k = e.label, g = e.children, x = e.custom, E = e.lang, C = e["data-browse"], S = e.as, _ = S === void 0 ? "div" : S, T = e.inputAs, A = T === void 0 ? "input" : T, I = se(e, o_), N = x ? [i, "custom"] : [r, "form-file"], M = N[0], L = N[1];
  r = Re(M, L);
  var R = "file", q = v.useContext(en), Q = q.controlId, Z = v.useMemo(function() {
    return {
      controlId: n || Q,
      custom: x
    };
  }, [Q, x, n]), Y = k != null && k !== !1 && !g, P = /* @__PURE__ */ m.createElement(vd, U({}, I, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: A,
    lang: E
  }));
  return /* @__PURE__ */ m.createElement(en.Provider, {
    value: Z
  }, /* @__PURE__ */ m.createElement(_, {
    style: y,
    className: D(w, r, x && "custom-" + R)
  }, g || /* @__PURE__ */ m.createElement(m.Fragment, null, x ? /* @__PURE__ */ m.createElement(m.Fragment, null, P, Y && /* @__PURE__ */ m.createElement(Rs, {
    "data-browse": C
  }, k)) : /* @__PURE__ */ m.createElement(m.Fragment, null, Y && /* @__PURE__ */ m.createElement(Rs, null, k), P), (l || c) && /* @__PURE__ */ m.createElement(lo, {
    type: l ? "valid" : "invalid",
    tooltip: f
  }, h))));
});
bl.displayName = "FormFile";
bl.Input = vd;
bl.Label = Rs;
var s_ = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], F0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, f = d === void 0 ? !1 : d, h = e.plaintext, w = e.readOnly, y = e.custom, k = e.as, g = k === void 0 ? "input" : k, x = se(e, s_), E = v.useContext(en), C = E.controlId, S = y ? [r, "custom"] : [n, "form-control"], _ = S[0], T = S[1];
  n = Re(_, T);
  var A;
  if (h) {
    var I;
    A = (I = {}, I[n + "-plaintext"] = !0, I);
  } else if (i === "file") {
    var N;
    A = (N = {}, N[n + "-file"] = !0, N);
  } else if (i === "range") {
    var M;
    A = (M = {}, M[n + "-range"] = !0, M);
  } else if (g === "select" && y) {
    var L;
    A = (L = {}, L[n + "-select"] = !0, L[n + "-select-" + a] = a, L);
  } else {
    var R;
    A = (R = {}, R[n] = !0, R[n + "-" + a] = a, R);
  }
  return /* @__PURE__ */ m.createElement(g, U({}, x, {
    type: i,
    size: o,
    ref: t,
    readOnly: w,
    id: s || C,
    className: D(l, A, c && "is-valid", f && "is-invalid")
  }));
});
F0.displayName = "FormControl";
const R0 = Object.assign(F0, {
  Feedback: lo
});
var l_ = ["bsPrefix", "className", "children", "controlId", "as"], D0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = se(e, l_);
  n = Re(n, "form-group");
  var u = v.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ m.createElement(en.Provider, {
    value: u
  }, /* @__PURE__ */ m.createElement(s, U({}, l, {
    ref: t,
    className: D(r, n)
  }), i));
});
D0.displayName = "FormGroup";
var u_ = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], c_ = {
  column: !1,
  srOnly: !1
}, gd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = se(e, u_), c = v.useContext(en), d = c.controlId;
  i = Re(i, "form-label");
  var f = "col-form-label";
  typeof a == "string" && (f = f + " " + f + "-" + a);
  var h = D(s, i, o && "sr-only", a && f);
  return l = l || d, a ? /* @__PURE__ */ m.createElement(k0, U({
    ref: t,
    as: "label",
    className: h,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ m.createElement(r, U({
      ref: t,
      className: h,
      htmlFor: l
    }, u))
  );
});
gd.displayName = "FormLabel";
gd.defaultProps = c_;
var p_ = ["bsPrefix", "className", "as", "muted"], M0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = se(e, p_);
    return n = Re(n, "form-text"), /* @__PURE__ */ m.createElement(a, U({}, s, {
      ref: t,
      className: D(r, n, o && "text-muted")
    }));
  }
);
M0.displayName = "FormText";
var kl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  return /* @__PURE__ */ m.createElement(zr, U({}, e, {
    ref: t,
    type: "switch"
  }));
});
kl.displayName = "Switch";
kl.Input = zr.Input;
kl.Label = zr.Label;
var d_ = ["bsPrefix", "inline", "className", "validated", "as"], f_ = rd("form-row"), m_ = {
  inline: !1
}, rn = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = se(e, d_);
  return n = Re(n, "form"), /* @__PURE__ */ m.createElement(s, U({}, l, {
    ref: t,
    className: D(i, a && "was-validated", r && n + "-inline")
  }));
});
rn.displayName = "Form";
rn.defaultProps = m_;
rn.Row = f_;
rn.Group = D0;
rn.Control = R0;
rn.Check = zr;
rn.File = bl;
rn.Switch = kl;
rn.Label = gd;
rn.Text = M0;
function h_(e, t) {
  e.classList ? e.classList.add(t) : ts(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function gh(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function v_(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = gh(e.className, t) : e.setAttribute("class", gh(e.className && e.className.baseVal || "", t));
}
var mu = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? nd().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function xh(e, t) {
  var n = v.useState(function() {
    return mu(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = mu(e);
    a && i(a);
  }
  return v.useEffect(function() {
  }, [t, r]), v.useEffect(function() {
    var o = mu(e);
    o !== r && i(o);
  }, [e, r]), r;
}
var xd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = th(), d = c[0], f = c[1], h = th(), w = h[0], y = h[1], k = KS(f, t), g = xh(e.container), x = xh(e.target), E = v.useState(!e.show), C = E[0], S = E[1], _ = LS(x, d, XS({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: w,
    popperConfig: l
  })), T = _.styles, A = _.attributes, I = se(_, ["styles", "attributes"]);
  e.show ? C && S(!1) : !e.transition && !C && S(!0);
  var N = function() {
    S(!0), e.onExited && e.onExited.apply(e, arguments);
  }, M = e.show || u && !C;
  if (GS(d, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !M)
    return null;
  var L = e.children(U({}, I, {
    show: !!e.show,
    props: U({}, A.popper, {
      style: T.popper,
      ref: k
    }),
    arrowProps: U({}, A.arrow, {
      style: T.arrow,
      ref: y
    })
  }));
  if (u) {
    var R = e.onExit, q = e.onExiting, Q = e.onEnter, Z = e.onEntering, Y = e.onEntered;
    L = /* @__PURE__ */ m.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: R,
      onExiting: q,
      onExited: N,
      onEnter: Q,
      onEntering: Z,
      onEntered: Y
    }, L);
  }
  return g ? /* @__PURE__ */ yr.createPortal(L, g) : null;
});
xd.displayName = "Overlay";
xd.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: p.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: p.oneOf(sd),
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
var g_ = ["children", "transition", "popperConfig"], x_ = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], y_ = {
  transition: $i,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function E_(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Fs(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Fs(i));
  });
}
function L0(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = se(e, g_), o = v.useRef({}), s = ZS(), l = s[0], u = s[1], c = n === !0 ? $i : n || null;
  return /* @__PURE__ */ m.createElement(xd, U({}, a, {
    ref: l,
    popperConfig: U({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(d) {
    var f, h = d.props, w = d.arrowProps, y = d.show, k = d.update;
    d.forceUpdate;
    var g = d.placement, x = d.state, E = se(d, x_);
    E_(h, w);
    var C = Object.assign(o.current, {
      state: x,
      scheduleUpdate: k,
      placement: g,
      outOfBoundaries: (x == null || (f = x.modifiersData.hide) == null ? void 0 : f.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(U({}, E, h, {
      placement: g,
      show: y
    }, !n && y && {
      className: "show"
    }, {
      popper: C,
      arrowProps: w
    })) : /* @__PURE__ */ m.cloneElement(t, U({}, E, h, {
      placement: g,
      arrowProps: w,
      popper: C,
      className: D(t.props.className, !n && y && "show"),
      style: U({}, t.props.style, h.style)
    }));
  });
}
L0.defaultProps = y_;
var w_ = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], b_ = /* @__PURE__ */ function(e) {
  ao(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(m.Component);
function k_(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function yh(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !O0(i, a) && e.apply(void 0, t);
}
var C_ = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function j0(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, d = e.placement, f = e.flip, h = f === void 0 ? d && d.indexOf("auto") !== -1 : f, w = se(e, w_), y = v.useRef(null), k = AC(), g = v.useRef(""), x = c0(o, l, u), E = x[0], C = x[1], S = k_(c), _ = typeof r != "function" ? m.Children.only(r).props : {}, T = _.onFocus, A = _.onBlur, I = _.onClick, N = v.useCallback(function() {
    return Fs(y.current);
  }, []), M = v.useCallback(function() {
    if (k.clear(), g.current = "show", !S.show) {
      C(!0);
      return;
    }
    k.set(function() {
      g.current === "show" && C(!0);
    }, S.show);
  }, [S.show, C, k]), L = v.useCallback(function() {
    if (k.clear(), g.current = "hide", !S.hide) {
      C(!1);
      return;
    }
    k.set(function() {
      g.current === "hide" && C(!1);
    }, S.hide);
  }, [S.hide, C, k]), R = v.useCallback(function() {
    M();
    for (var z = arguments.length, W = new Array(z), V = 0; V < z; V++)
      W[V] = arguments[V];
    T == null || T.apply(void 0, W);
  }, [M, T]), q = v.useCallback(function() {
    L();
    for (var z = arguments.length, W = new Array(z), V = 0; V < z; V++)
      W[V] = arguments[V];
    A == null || A.apply(void 0, W);
  }, [L, A]), Q = v.useCallback(function() {
    C(!E), I && I.apply(void 0, arguments);
  }, [I, C, E]), Z = v.useCallback(function() {
    for (var z = arguments.length, W = new Array(z), V = 0; V < z; V++)
      W[V] = arguments[V];
    yh(M, W, "fromElement");
  }, [M]), Y = v.useCallback(function() {
    for (var z = arguments.length, W = new Array(z), V = 0; V < z; V++)
      W[V] = arguments[V];
    yh(L, W, "toElement");
  }, [L]), P = t == null ? [] : [].concat(t), F = {};
  return P.indexOf("click") !== -1 && (F.onClick = Q), P.indexOf("focus") !== -1 && (F.onFocus = R, F.onBlur = q), P.indexOf("hover") !== -1 && (F.onMouseOver = Z, F.onMouseOut = Y), /* @__PURE__ */ m.createElement(m.Fragment, null, typeof r == "function" ? r(U({}, F, {
    ref: y
  })) : /* @__PURE__ */ m.createElement(b_, {
    ref: y
  }, /* @__PURE__ */ v.cloneElement(r, F)), /* @__PURE__ */ m.createElement(L0, U({}, w, {
    show: E,
    onHide: L,
    flip: h,
    placement: d,
    popperConfig: a,
    target: N
  }), n));
}
j0.defaultProps = C_;
var S_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], __ = ["isChild"], A_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], Eh = 1e3, T_ = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function N_(e, t, n) {
  var r = (e - t) / (n - t) * 100;
  return Math.round(r * Eh) / Eh;
}
function wh(e, t) {
  var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, c = e.className, d = e.style, f = e.variant, h = e.bsPrefix, w = se(e, S_);
  return /* @__PURE__ */ m.createElement("div", U({
    ref: t
  }, w, {
    role: "progressbar",
    className: D(c, h + "-bar", (n = {}, n["bg-" + f] = f, n[h + "-bar-animated"] = u, n[h + "-bar-striped"] = u || l, n)),
    style: U({
      width: N_(i, r, a) + "%"
    }, d),
    "aria-valuenow": i,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), s ? /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, o) : o);
}
var xi = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.isChild, r = se(e, __);
  if (r.bsPrefix = Re(r.bsPrefix, "progress"), n)
    return wh(r, t);
  var i = r.min, a = r.now, o = r.max, s = r.label, l = r.srOnly, u = r.striped, c = r.animated, d = r.bsPrefix, f = r.variant, h = r.className, w = r.children, y = se(r, A_);
  return /* @__PURE__ */ m.createElement("div", U({
    ref: t
  }, y, {
    className: D(h, d)
  }), w ? TC(w, function(k) {
    return /* @__PURE__ */ v.cloneElement(k, {
      isChild: !0
    });
  }) : wh({
    min: i,
    now: a,
    max: o,
    label: s,
    srOnly: l,
    striped: u,
    animated: c,
    bsPrefix: d,
    variant: f
  }, t));
});
xi.displayName = "ProgressBar";
xi.defaultProps = T_;
var I_ = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], B0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = se(e, I_);
  n = Re(n, "spinner");
  var d = n + "-" + i;
  return /* @__PURE__ */ m.createElement(l, U({
    ref: t
  }, c, {
    className: D(u, d, a && d + "-" + a, r && "text-" + r)
  }), o);
});
B0.displayName = "Spinner";
var P_ = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], O_ = {
  placement: "right"
}, Cl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = se(e, P_);
  n = Re(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ m.createElement("div", U({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: D(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ m.createElement("div", U({
    className: "arrow"
  }, s)), /* @__PURE__ */ m.createElement("div", {
    className: n + "-inner"
  }, o));
});
Cl.defaultProps = O_;
Cl.displayName = "Tooltip";
var yd = {};
yd.match = j_;
yd.parse = z0;
var F_ = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, R_ = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, D_ = /^(?:(min|max)-)?(.+)/, M_ = /(em|rem|px|cm|mm|in|pt|pc)?$/, L_ = /(dpi|dpcm|dppx)?$/;
function j_(e, t) {
  return z0(e).some(function(n) {
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
          u = Ch(u), c = Ch(c);
          break;
        case "resolution":
          u = kh(u), c = kh(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = bh(u), c = bh(c);
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
function z0(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(F_), r = n[1], i = n[2], a = n[3] || "", o = {};
    return o.inverse = !!r && r.toLowerCase() === "not", o.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], o.expressions = a.map(function(s) {
      var l = s.match(R_), u = l[1].toLowerCase().match(D_);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), o;
  });
}
function bh(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function kh(e) {
  var t = parseFloat(e), n = String(e).match(L_)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function Ch(e) {
  var t = parseFloat(e), n = String(e).match(M_)[1];
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
var B_ = yd.match, Sh = typeof window < "u" ? window.matchMedia : null;
function z_(e, t, n) {
  var r = this, i;
  Sh && !n && (i = Sh.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(s)) : (this.matches = B_(e, t), this.media = e), this.addListener = a, this.removeListener = o, this.dispose = l;
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
function H_(e, t, n) {
  return new z_(e, t, n);
}
var V_ = H_;
const $_ = /* @__PURE__ */ ji(V_);
var U_ = /[A-Z]/g, G_ = /^ms-/, hu = {};
function W_(e) {
  return "-" + e.toLowerCase();
}
function H0(e) {
  if (hu.hasOwnProperty(e))
    return hu[e];
  var t = e.replace(U_, W_);
  return hu[e] = G_.test(t) ? "-" + t : t;
}
function q_(e, t) {
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
const at = p.oneOfType([p.string, p.number]), V0 = {
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
}, X_ = {
  orientation: p.oneOf(["portrait", "landscape"]),
  scan: p.oneOf(["progressive", "interlace"]),
  aspectRatio: p.string,
  deviceAspectRatio: p.string,
  height: at,
  deviceHeight: at,
  width: at,
  deviceWidth: at,
  color: p.bool,
  colorIndex: p.bool,
  monochrome: p.bool,
  resolution: at,
  type: Object.keys(V0)
}, { type: mP, ...Q_ } = X_, K_ = {
  minAspectRatio: p.string,
  maxAspectRatio: p.string,
  minDeviceAspectRatio: p.string,
  maxDeviceAspectRatio: p.string,
  minHeight: at,
  maxHeight: at,
  minDeviceHeight: at,
  maxDeviceHeight: at,
  minWidth: at,
  maxWidth: at,
  minDeviceWidth: at,
  maxDeviceWidth: at,
  minColor: p.number,
  maxColor: p.number,
  minColorIndex: p.number,
  maxColorIndex: p.number,
  minMonochrome: p.number,
  maxMonochrome: p.number,
  minResolution: at,
  maxResolution: at,
  ...Q_
}, Z_ = { ...V0, ...K_ };
var Y_ = {
  all: Z_
};
const J_ = (e) => `not ${e}`, e2 = (e, t) => {
  const n = H0(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? J_(n) : `(${n}: ${t})`;
}, t2 = (e) => e.join(" and "), n2 = (e) => {
  const t = [];
  return Object.keys(Y_.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(e2(n, r));
  }), t2(t);
}, r2 = v.createContext(void 0), i2 = (e) => e.query || n2(e), _h = (e) => e ? Object.keys(e).reduce((n, r) => (n[H0(r)] = e[r], n), {}) : void 0, $0 = () => {
  const e = v.useRef(!1);
  return v.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, a2 = (e) => {
  const t = v.useContext(r2), n = () => _h(e) || _h(t), [r, i] = v.useState(n);
  return v.useEffect(() => {
    const a = n();
    q_(r, a) || i(a);
  }, [e, t]), r;
}, o2 = (e) => {
  const t = () => i2(e), [n, r] = v.useState(t);
  return v.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, s2 = (e, t) => {
  const n = () => $_(e, t || {}, !!t), [r, i] = v.useState(n), a = $0();
  return v.useEffect(() => {
    if (a) {
      const o = n();
      return i(o), () => {
        o && o.dispose();
      };
    }
  }, [e, t]), r;
}, l2 = (e) => {
  const [t, n] = v.useState(e.matches);
  return v.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, U0 = (e, t, n) => {
  const r = a2(t), i = o2(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = s2(i, r), o = l2(a);
  return $0(), v.useEffect(() => {
  }, [o]), v.useEffect(() => () => {
    a && a.dispose();
  }, []), o;
};
let Ah = 0;
const Ed = (e = "id") => (Ah += 1, `${e}${Ah}`);
let ui = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function G0(e, t, n) {
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
        message: d
      } = n[o];
      switch (s) {
        case ui.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${l}'.`), a[l] = this.props[o];
          break;
        case ui.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${d}'`);
          break;
        case ui.FORMAT:
          u(this.props[o]) ? a[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${d}`), a[o] = c(this.props[o], this.props));
          break;
        case ui.MOVED_AND_FORMAT: {
          const f = this.props[o];
          let h = `${t}: The prop '${o}' has been moved to '${l}'`;
          u && !u(f) && (h += " and expects a new format"), h += d ? `. ${d}` : "", this.warn(h), a[l] = c ? c(f, this.props) : f;
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
    Ji(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function wd({
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
      className: D("pgn__icon", {
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
    id: t || Ed("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, i));
}
wd.propTypes = {
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
wd.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const je = G0(wd, "Icon", {
  className: {
    deprType: ui.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), u2 = "576px", c2 = {
  sm: u2
}, {
  sm: p2
} = c2, d2 = {
  extraSmall: {
    maxWidth: parseFloat(p2) || 575.98
  }
}, qe = /* @__PURE__ */ m.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ m.createElement(ad, {
  size: r,
  ...i,
  className: D(i.className),
  ref: a
}, n && /* @__PURE__ */ m.createElement(je, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ m.createElement(je, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function Ds({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: D(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function f2() {
  return /* @__PURE__ */ m.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Ds.Spacer = f2;
const In = /* @__PURE__ */ v.forwardRef(({
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
  const [c, d] = v.useState(o), f = U0({
    maxWidth: d2.extraSmall.maxWidth
  }), h = "sm";
  v.useEffect(() => {
    d(f ? !0 : o);
  }, [f, o]);
  const w = v.useCallback((y) => {
    const k = {
      size: h,
      key: y.props.children
    };
    return /* @__PURE__ */ v.cloneElement(y, k);
  }, []);
  return /* @__PURE__ */ m.createElement(Br, {
    ...l,
    className: D("alert-content", l.className),
    show: s,
    ref: u
  }, t && /* @__PURE__ */ m.createElement(je, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ m.createElement("div", {
    className: D({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ m.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ m.createElement(Ds, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ m.createElement(Ds.Spacer, null), r && /* @__PURE__ */ m.createElement(qe, {
    size: h,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ m.createElement($a, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(w))));
}), W0 = y0("h4");
W0.displayName = "DivStyledAsH4";
function m2({
  as: e = W0,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Br.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function h2({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Br.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
In.Heading = m2;
In.Link = h2;
var ns = "right-scroll-bar-position", rs = "width-before-scroll-bar", v2 = "with-scroll-bars-hidden", g2 = "--removed-body-scroll-bar-size";
function vu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function x2(e, t) {
  var n = v.useState(function() {
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
var y2 = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Th = /* @__PURE__ */ new WeakMap();
function q0(e, t) {
  var n = x2(null, function(r) {
    return e.forEach(function(i) {
      return vu(i, r);
    });
  });
  return y2(function() {
    var r = Th.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), o = n.current;
      i.forEach(function(s) {
        a.has(s) || vu(s, null);
      }), a.forEach(function(s) {
        i.has(s) || vu(s, o);
      });
    }
    Th.set(n, e);
  }, [e]), n;
}
function X0(e) {
  return e;
}
function Q0(e, t) {
  t === void 0 && (t = X0);
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
function bd(e, t) {
  return t === void 0 && (t = X0), Q0(e, t);
}
function kd(e) {
  e === void 0 && (e = {});
  var t = Q0(null);
  return t.options = H({ async: !0, ssr: !1 }, e), t;
}
var K0 = function(e) {
  var t = e.sideCar, n = yn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, H({}, n));
};
K0.isSideCarExport = !0;
function Cd(e, t) {
  return e.useMedium(t), K0;
}
var Z0 = kd(), gu = function() {
}, Sd = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: gu,
    onWheelCapture: gu,
    onTouchMoveCapture: gu
  }), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, h = e.noRelative, w = e.noIsolation, y = e.inert, k = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, E = e.gapMode, C = yn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = f, _ = q0([n, t]), T = H(H({}, C), i);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(S, { sideCar: Z0, removeScrollBar: u, shards: d, noRelative: h, noIsolation: w, inert: y, setCallbacks: a, allowPinchZoom: !!k, lockRef: n, gapMode: E }),
    o ? v.cloneElement(v.Children.only(s), H(H({}, T), { ref: _ })) : v.createElement(x, H({}, T, { className: l, ref: _ }), s)
  );
});
Sd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Sd.classNames = {
  fullWidth: rs,
  zeroRight: ns
};
var $c = "data-focus-lock", Y0 = "data-focus-lock-disabled", E2 = "data-no-focus-lock", w2 = "data-autofocus-inside", b2 = "data-no-autofocus", xu = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, J0 = bd({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), ey = bd(), k2 = bd(), ty = kd({
  async: !0,
  ssr: typeof document < "u"
}), C2 = /* @__PURE__ */ v.createContext(void 0), S2 = [], ny = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i = v.useState(), a = i[0], o = i[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = v.useState({}), d = c[1], f = t.children, h = t.disabled, w = h === void 0 ? !1 : h, y = t.noFocusGuards, k = y === void 0 ? !1 : y, g = t.persistentFocus, x = g === void 0 ? !1 : g, E = t.crossFrame, C = E === void 0 ? !0 : E, S = t.autoFocus, _ = S === void 0 ? !0 : S;
  t.allowTextSelection;
  var T = t.group, A = t.className, I = t.whiteList, N = t.hasPositiveIndices, M = t.shards, L = M === void 0 ? S2 : M, R = t.as, q = R === void 0 ? "div" : R, Q = t.lockProps, Z = Q === void 0 ? {} : Q, Y = t.sideCar, P = t.returnFocus, F = P === void 0 ? !1 : P, z = t.focusOptions, W = t.onActivation, V = t.onDeactivation, Ne = v.useState({}), pe = Ne[0], ne = v.useCallback(function(ke) {
    var re = ke.captureFocusRestore;
    if (!u.current) {
      var ue, de = (ue = document) == null ? void 0 : ue.activeElement;
      u.current = de, de !== document.body && (u.current = re(de));
    }
    s.current && W && W(s.current), l.current = !0, d();
  }, [W]), J = v.useCallback(function() {
    l.current = !1, V && V(s.current), d();
  }, [V]), Ee = v.useCallback(function(ke) {
    var re = u.current;
    if (re) {
      var ue = (typeof re == "function" ? re() : re) || document.body, de = typeof F == "function" ? F(ue) : F;
      if (de) {
        var ce = typeof de == "object" ? de : void 0;
        u.current = null, ke ? Promise.resolve().then(function() {
          return ue.focus(ce);
        }) : ue.focus(ce);
      }
    }
  }, [F]), De = v.useCallback(function(ke) {
    l.current && J0.useMedium(ke);
  }, []), dt = ey.useMedium, bt = v.useCallback(function(ke) {
    s.current !== ke && (s.current = ke, o(ke));
  }, []), Ke = U((r = {}, r[Y0] = w && "disabled", r[$c] = T, r), Z), Ze = k !== !0, Ft = Ze && k !== "tail", an = q0([n, bt]), on = v.useMemo(function() {
    return {
      observed: s,
      shards: L,
      enabled: !w,
      active: l.current
    };
  }, [w, l.current, L, a]);
  return /* @__PURE__ */ m.createElement(v.Fragment, null, Ze && [
    /* @__PURE__ */ m.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: w ? -1 : 0,
      style: xu
    }),
    N ? /* @__PURE__ */ m.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: w ? -1 : 1,
      style: xu
    }) : null
  ], !w && /* @__PURE__ */ m.createElement(Y, {
    id: pe,
    sideCar: ty,
    observed: a,
    disabled: w,
    persistentFocus: x,
    crossFrame: C,
    autoFocus: _,
    whiteList: I,
    shards: L,
    onActivation: ne,
    onDeactivation: J,
    returnFocus: Ee,
    focusOptions: z,
    noFocusGuards: k
  }), /* @__PURE__ */ m.createElement(q, U({
    ref: an
  }, Ke, {
    className: A,
    onBlur: dt,
    onFocus: De
  }), /* @__PURE__ */ m.createElement(C2.Provider, {
    value: on
  }, f)), Ft && /* @__PURE__ */ m.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: w ? -1 : 0,
    style: xu
  }));
});
ny.propTypes = {};
function _d(e) {
  setTimeout(e, 1);
}
var _2 = function(t) {
  return t && "current" in t ? t.current : t;
}, ry = kd(), iy = "data-focus-on-hidden", A2 = { preventScroll: !0 }, T2 = v.forwardRef(function(e, t) {
  var n = v.useState(!1), r = n[0], i = n[1], a = e.children, o = e.autoFocus, s = e.shards, l = e.crossFrame, u = e.enabled, c = u === void 0 ? !0 : u, d = e.scrollLock, f = d === void 0 ? !0 : d, h = e.focusLock, w = h === void 0 ? !0 : h, y = e.returnFocus, k = y === void 0 ? !0 : y, g = e.inert, x = e.allowPinchZoom, E = e.sideCar, C = e.className, S = e.shouldIgnore, _ = e.preventScrollOnFocus, T = e.style, A = e.as, I = e.gapMode, N = yn(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), M = E, L = r.onActivation, R = r.onDeactivation, q = yn(r, ["onActivation", "onDeactivation"]), Q = H(H({}, q), {
    as: A,
    style: T,
    sideCar: E,
    shards: s,
    allowPinchZoom: x,
    gapMode: I,
    inert: g,
    enabled: c && f
  });
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(ny, { ref: t, sideCar: E, disabled: !(r && c && w), returnFocus: k, autoFocus: o, shards: s, crossFrame: l, onActivation: L, onDeactivation: R, className: C, whiteList: S, lockProps: Q, focusOptions: _ ? A2 : void 0, as: Sd }, a),
    c && v.createElement(M, H({}, N, { sideCar: ry, setLockProps: i, shards: s }))
  );
});
function Wa(e) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e);
}
function N2(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I2(e) {
  var t = N2(e, "string");
  return Wa(t) == "symbol" ? t : t + "";
}
function P2(e, t, n) {
  return (t = I2(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function O2(e, t) {
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
      ao(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return o;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var h = a.indexOf(this);
        a.splice(h, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ m.createElement(i, this.props);
      }, c;
    }(v.PureComponent);
    return P2(l, "displayName", "SideEffect(" + n(i) + ")"), l;
  };
}
var wn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Rr = function(e) {
  return Array.isArray(e) ? e : [e];
}, ay = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, F2 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, oy = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, sy = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, R2 = function(e) {
  return e.hasAttribute("inert");
}, D2 = function(e, t) {
  return !e || sy(e) || !F2(e) && !R2(e) && t(oy(e));
}, ly = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = D2(t, ly.bind(void 0, e));
  return e.set(t, r), r;
}, M2 = function(e, t) {
  return e && !sy(e) ? B2(e) ? t(oy(e)) : !1 : !0;
}, uy = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = M2(t, uy.bind(void 0, e));
  return e.set(t, r), r;
}, cy = function(e) {
  return e.dataset;
}, L2 = function(e) {
  return e.tagName === "BUTTON";
}, py = function(e) {
  return e.tagName === "INPUT";
}, dy = function(e) {
  return py(e) && e.type === "radio";
}, j2 = function(e) {
  return !((py(e) || L2(e)) && (e.type === "hidden" || e.disabled));
}, B2 = function(e) {
  var t = e.getAttribute(b2);
  return ![!0, "true", ""].includes(t);
}, Ad = function(e) {
  var t;
  return !!(e && (!((t = cy(e)) === null || t === void 0) && t.focusGuard));
}, Uc = function(e) {
  return !Ad(e);
}, z2 = function(e) {
  return !!e;
}, H2 = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, V2 = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Td = function(e, t, n) {
  return wn(e).map(function(r, i) {
    var a = V2(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(H2);
}, $2 = [
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
], Nd = $2.join(","), U2 = "".concat(Nd, ", [data-focus-guard]"), fy = function(e, t) {
  return wn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? U2 : Nd) ? [r] : [], fy(r));
  }, []);
}, G2 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Ri([e.contentDocument.body], t) : [e];
}, Ri = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = fy(r, t), o = (i = []).concat.apply(i, a.map(function(s) {
      return G2(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      o,
      // add if node is tabbable itself
      r.parentNode ? wn(r.parentNode.querySelectorAll(Nd)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, W2 = function(e) {
  var t = e.querySelectorAll("[".concat(w2, "]"));
  return wn(t).map(function(n) {
    return Ri([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Id = function(e, t) {
  return wn(e).filter(function(n) {
    return ly(t, n);
  }).filter(function(n) {
    return j2(n);
  });
}, Nh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), wn(e).filter(function(n) {
    return uy(t, n);
  });
}, Pd = function(e, t, n) {
  return Td(Id(Ri(e, n), t), !0, n);
}, qa = function(e, t) {
  return Td(Id(Ri(e), t), !1);
}, q2 = function(e, t) {
  return Id(W2(e), t);
}, Sr = function(e, t) {
  return e.shadowRoot ? Sr(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : wn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? Sr(i, t) : !1;
    }
    return Sr(n, t);
  });
}, X2 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(o, s) {
    return !t.has(s);
  });
}, my = function(e) {
  return e.parentNode ? my(e.parentNode) : e;
}, Od = function(e) {
  var t = Rr(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute($c);
    return n.push.apply(n, i ? X2(wn(my(r).querySelectorAll("[".concat($c, '="').concat(i, '"]:not([').concat(Y0, '="disabled"])')))) : [r]), n;
  }, []);
}, Q2 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Xa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Xa(t.shadowRoot) : t instanceof HTMLIFrameElement && Q2(function() {
      return t.contentWindow.document;
    }) ? Xa(t.contentWindow.document) : t;
  }
}, K2 = function(e, t) {
  return e === t;
}, Z2 = function(e, t) {
  return !!wn(e.querySelectorAll("iframe")).some(function(n) {
    return K2(n, t);
  });
}, hy = function(e, t) {
  return t === void 0 && (t = Xa(ay(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Od(e).some(function(n) {
    return Sr(n, t) || Z2(n, t);
  });
}, Y2 = function(e) {
  e === void 0 && (e = document);
  var t = Xa(e);
  return t ? wn(e.querySelectorAll("[".concat(E2, "]"))).some(function(n) {
    return Sr(n, t);
  }) : !1;
}, J2 = function(e, t) {
  return t.filter(dy).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Fd = function(e, t) {
  return dy(e) && e.name ? J2(e, t) : e;
}, eA = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Fd(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Ih = function(e) {
  return e[0] && e.length > 1 ? Fd(e[0], e) : e[0];
}, Ph = function(e, t) {
  return e.indexOf(Fd(t, e));
}, Gc = "NEW_FOCUS", tA = function(e, t, n, r, i) {
  var a = e.length, o = e[0], s = e[a - 1], l = Ad(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var u = r !== void 0 ? n.indexOf(r) : -1, c = i ? n.indexOf(i) : u, d = i ? e.indexOf(i) : -1;
    if (u === -1)
      return d !== -1 ? d : Gc;
    if (d === -1)
      return Gc;
    var f = u - c, h = n.indexOf(o), w = n.indexOf(s), y = eA(n), k = r !== void 0 ? y.indexOf(r) : -1, g = i ? y.indexOf(i) : k, x = y.filter(function(A) {
      return A.tabIndex >= 0;
    }), E = r !== void 0 ? x.indexOf(r) : -1, C = i ? x.indexOf(i) : E, S = E >= 0 && C >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      C - E
    ) : (
      // or else measure in focusable space
      g - k
    );
    if (!f && d >= 0 || t.length === 0)
      return d;
    var _ = Ph(e, t[0]), T = Ph(e, t[t.length - 1]);
    if (u <= h && l && Math.abs(f) > 1)
      return T;
    if (u >= w && l && Math.abs(f) > 1)
      return _;
    if (f && Math.abs(S) > 1)
      return d;
    if (u <= h)
      return T;
    if (u > w)
      return _;
    if (f)
      return Math.abs(f) > 1 ? d : (a + d + f) % a;
  }
}, nA = function(e) {
  return function(t) {
    var n, r = (n = cy(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Oh = function(e, t, n) {
  var r = e.map(function(a) {
    var o = a.node;
    return o;
  }), i = Nh(r.filter(nA(n)));
  return i && i.length ? Ih(i) : Ih(Nh(t));
}, Wc = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Wc(e.parentNode.host || e.parentNode, t), t;
}, yu = function(e, t) {
  for (var n = Wc(e), r = Wc(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, vy = function(e, t, n) {
  var r = Rr(e), i = Rr(t), a = r[0], o = !1;
  return i.filter(Boolean).forEach(function(s) {
    o = yu(o || s, s) || o, n.filter(Boolean).forEach(function(l) {
      var u = yu(a, l);
      u && (!o || Sr(u, o) ? o = u : o = yu(u, o));
    });
  }), o;
}, Fh = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(q2(r, t));
  }, []);
}, rA = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(z2);
}, iA = function(e, t) {
  var n = Xa(Rr(e).length > 0 ? document : ay(e).ownerDocument), r = Od(e).filter(Uc), i = vy(n || e, e, r), a = /* @__PURE__ */ new Map(), o = qa(r, a), s = o.filter(function(w) {
    var y = w.node;
    return Uc(y);
  });
  if (s[0]) {
    var l = qa([i], a).map(function(w) {
      var y = w.node;
      return y;
    }), u = rA(l, s), c = u.map(function(w) {
      var y = w.node;
      return y;
    }), d = u.filter(function(w) {
      var y = w.tabIndex;
      return y >= 0;
    }).map(function(w) {
      var y = w.node;
      return y;
    }), f = tA(c, d, l, n, t);
    if (f === Gc) {
      var h = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        Oh(o, d, Fh(r, a)) || Oh(o, c, Fh(r, a))
      );
      if (h)
        return { node: h };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : u[f];
  }
}, aA = function(e) {
  var t = Od(e).filter(Uc), n = vy(e, e, t), r = Td(Ri([n], !0), !0, !0), i = Ri(t, !1);
  return r.map(function(a) {
    var o = a.node, s = a.index;
    return {
      node: o,
      index: s,
      lockItem: i.indexOf(o) >= 0,
      guard: Ad(o)
    };
  });
}, Rd = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Eu = 0, wu = !1, gy = function(e, t, n) {
  n === void 0 && (n = {});
  var r = iA(e, t);
  if (!wu && r) {
    if (Eu > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), wu = !0, setTimeout(function() {
        wu = !1;
      }, 1);
      return;
    }
    Eu++, Rd(r.node, n.focusOptions), Eu--;
  }
};
function ua(e) {
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
var oA = function(e) {
  if (!e)
    return null;
  for (var t = [], n = e; n && n !== document.body; )
    t.push({
      current: ua(n),
      parent: ua(n.parentElement),
      left: ua(n.previousElementSibling),
      right: ua(n.nextElementSibling)
    }), n = n.parentElement;
  return {
    element: ua(e),
    stack: t,
    ownerDocument: e.ownerDocument
  };
}, sA = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var o = e.stack, s = e.ownerDocument, l = /* @__PURE__ */ new Map(), u = 0, c = o; u < c.length; u++) {
      var d = c[u], f = (t = d.parent) === null || t === void 0 ? void 0 : t.call(d);
      if (f && s.contains(f)) {
        for (var h = (n = d.left) === null || n === void 0 ? void 0 : n.call(d), w = d.current(), y = f.contains(w) ? w : void 0, k = (r = d.right) === null || r === void 0 ? void 0 : r.call(d), g = Pd([f], l), x = (
          // that is element itself
          (a = (i = y ?? // or something in it's place
          (h == null ? void 0 : h.nextElementSibling)) !== null && i !== void 0 ? i : (
            // or somebody to the right, still close enough
            k
          )) !== null && a !== void 0 ? a : (
            // or somebody to the left, something?
            h
          )
        ); x; ) {
          for (var E = 0, C = g; E < C.length; E++) {
            var S = C[E];
            if (x != null && x.contains(S.node))
              return S.node;
          }
          x = x.nextElementSibling;
        }
        if (g.length)
          return g[0].node;
      }
    }
}, xy = function(e) {
  var t = oA(e);
  return function() {
    return sA(t);
  };
}, lA = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = Rr(t);
  if (r.every(function(o) {
    return !Sr(o, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? Pd(r, /* @__PURE__ */ new Map()) : qa(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(o) {
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
}, uA = function(e, t) {
  var n = t ? Pd(Rr(e), /* @__PURE__ */ new Map()) : qa(Rr(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, cA = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, yy = function(e, t, n) {
  t === void 0 && (t = {});
  var r = cA(t), i = lA(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && Rd(a.node, r.focusOptions);
  }
}, pA = function(e, t) {
  t === void 0 && (t = {}), yy(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, dA = function(e, t) {
  t === void 0 && (t = {}), yy(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Ey = function(e, t, n) {
  var r, i = uA(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && Rd(a.node, t.focusOptions);
}, fA = function(e, t) {
  t === void 0 && (t = {}), Ey(e, t, "first");
}, mA = function(e, t) {
  t === void 0 && (t = {}), Ey(e, t, "last");
}, wy = function() {
  return document && document.activeElement === document.body;
}, hA = function() {
  return wy() || Y2();
}, yi = null, ft = null, Rh = function() {
  return null;
}, Ei = null, Qa = !1, Dd = !1, vA = function() {
  return !0;
}, gA = function(t) {
  return (yi.whiteList || vA)(t);
}, xA = function(t, n) {
  Ei = {
    observerNode: t,
    portaledElement: n
  };
}, yA = function(t) {
  return Ei && Ei.portaledElement === t;
};
function Dh(e, t, n, r) {
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
var EA = function(t) {
  return t ? !!Qa : Qa === "meanwhile";
}, wA = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, bA = function(t, n) {
  return n.some(function(r) {
    return wA(t, r, r);
  });
}, by = function(t) {
  return qa(t, /* @__PURE__ */ new Map());
}, kA = function(t) {
  return !by([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, Ms = function() {
  var t = !1;
  if (yi) {
    var n = yi, r = n.observed, i = n.persistentFocus, a = n.autoFocus, o = n.shards, s = n.crossFrame, l = n.focusOptions, u = n.noFocusGuards, c = r || Ei && Ei.portaledElement;
    if (wy() && ft && ft !== document.body && (!document.body.contains(ft) || kA(ft))) {
      var d = Rh();
      d && d.focus();
    }
    var f = document && document.activeElement;
    if (c) {
      var h = [c].concat(o.map(_2).filter(Boolean)), w = function() {
        if (!EA(s) || !u || !ft || Dd)
          return !1;
        var E = by(h), C = E.findIndex(function(S) {
          var _ = S.node;
          return _ === ft;
        });
        return C === 0 || C === E.length - 1;
      };
      if ((!f || gA(f)) && (i || w() || !hA() || !ft && a) && (c && !(hy(h) || f && bA(f, h) || yA(f)) && (document && !ft && f && !a ? (f.blur && f.blur(), document.body.focus()) : (t = gy(h, ft, {
        focusOptions: l
      }), Ei = {})), ft = document && document.activeElement, ft !== document.body && (Rh = xy(ft)), Qa = !1), document && f !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var y = document && document.activeElement, k = aA(h), g = k.map(function(x) {
          var E = x.node;
          return E;
        }).indexOf(y);
        g > -1 && (k.filter(function(x) {
          var E = x.guard, C = x.node;
          return E && C.dataset.focusAutoGuard;
        }).forEach(function(x) {
          var E = x.node;
          return E.removeAttribute("tabIndex");
        }), Dh(g, k.length, 1, k), Dh(g, -1, -1, k));
      }
    }
  }
  return t;
}, ky = function(t) {
  Ms() && t && (t.stopPropagation(), t.preventDefault());
}, Md = function() {
  return _d(Ms);
}, CA = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || xA(r, n);
}, SA = function() {
  return null;
}, Cy = function() {
  Dd = !0;
}, Sy = function() {
  Dd = !1, Qa = "just", _d(function() {
    Qa = "meanwhile";
  });
}, _A = function() {
  document.addEventListener("focusin", ky), document.addEventListener("focusout", Md), window.addEventListener("focus", Cy), window.addEventListener("blur", Sy);
}, AA = function() {
  document.removeEventListener("focusin", ky), document.removeEventListener("focusout", Md), window.removeEventListener("focus", Cy), window.removeEventListener("blur", Sy);
};
function TA(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var _y = {
  moveFocusInside: gy,
  focusInside: hy,
  focusNextElement: pA,
  focusPrevElement: dA,
  focusFirstElement: fA,
  focusLastElement: mA,
  captureFocusRestore: xy
};
function NA(e) {
  var t = e.slice(-1)[0];
  t && !yi && _A();
  var n = yi, r = n && t && t.id === n.id;
  yi = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (ft = null, (!r || n.observed !== t.observed) && t.onActivation(_y), Ms(), _d(Ms)) : (AA(), ft = null);
}
J0.assignSyncMedium(CA);
ey.assignMedium(Md);
k2.assignMedium(function(e) {
  return e(_y);
});
const IA = O2(TA, NA)(SA);
Cd(ty, IA);
var PA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function OA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = PA();
  return t && e.setAttribute("nonce", t), e;
}
function FA(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function RA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var DA = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = OA()) && (FA(t, n), RA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, MA = function() {
  var e = DA();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ld = function() {
  var e = MA(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, LA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bu = function(e) {
  return parseInt(e || "", 10) || 0;
}, jA = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bu(n), bu(r), bu(i)];
}, BA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return LA;
  var t = jA(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, zA = Ld(), wi = "data-scroll-locked", HA = function(e, t, n, r) {
  var i = e.left, a = e.top, o = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(v2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(wi, `] {
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
  
  .`).concat(ns, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(rs, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ns, " .").concat(ns, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(rs, " .").concat(rs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(wi, `] {
    `).concat(g2, ": ").concat(s, `px;
  }
`);
}, Mh = function() {
  var e = parseInt(document.body.getAttribute(wi) || "0", 10);
  return isFinite(e) ? e : 0;
}, VA = function() {
  v.useEffect(function() {
    return document.body.setAttribute(wi, (Mh() + 1).toString()), function() {
      var e = Mh() - 1;
      e <= 0 ? document.body.removeAttribute(wi) : document.body.setAttribute(wi, e.toString());
    };
  }, []);
}, $A = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  VA();
  var a = v.useMemo(function() {
    return BA(i);
  }, [i]);
  return v.createElement(zA, { styles: HA(a, !t, i, n ? "" : "!important") });
}, qc = !1;
if (typeof window < "u")
  try {
    var Do = Object.defineProperty({}, "passive", {
      get: function() {
        return qc = !0, !0;
      }
    });
    window.addEventListener("test", Do, Do), window.removeEventListener("test", Do, Do);
  } catch {
    qc = !1;
  }
var Wr = qc ? { passive: !1 } : !1, UA = function(e) {
  return e.tagName === "TEXTAREA";
}, Ay = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !UA(e) && n[t] === "visible")
  );
}, GA = function(e) {
  return Ay(e, "overflowY");
}, WA = function(e) {
  return Ay(e, "overflowX");
}, Lh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Ty(e, r);
    if (i) {
      var a = Ny(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, qA = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, XA = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ty = function(e, t) {
  return e === "v" ? GA(t) : WA(t);
}, Ny = function(e, t) {
  return e === "v" ? qA(t) : XA(t);
}, QA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, KA = function(e, t, n, r, i) {
  var a = QA(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, l = t.contains(s), u = !1, c = o > 0, d = 0, f = 0;
  do {
    if (!s)
      break;
    var h = Ny(e, s), w = h[0], y = h[1], k = h[2], g = y - k - a * w;
    (w || g) && Ty(e, s) && (d += g, f += w);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, Mo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, jh = function(e) {
  return [e.deltaX, e.deltaY];
}, Bh = function(e) {
  return e && "current" in e ? e.current : e;
}, ZA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, YA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, JA = 0, qr = [];
function eT(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), i = v.useState(JA++)[0], a = v.useState(Ld)[0], o = v.useRef(e);
  v.useEffect(function() {
    o.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = Ve([e.lockRef.current], (e.shards || []).map(Bh), !0).filter(Boolean);
      return y.forEach(function(k) {
        return k.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(k) {
          return k.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(y, k) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !o.current.allowPinchZoom;
    var g = Mo(y), x = n.current, E = "deltaX" in y ? y.deltaX : x[0] - g[0], C = "deltaY" in y ? y.deltaY : x[1] - g[1], S, _ = y.target, T = Math.abs(E) > Math.abs(C) ? "h" : "v";
    if ("touches" in y && T === "h" && _.type === "range")
      return !1;
    var A = Lh(T, _);
    if (!A)
      return !0;
    if (A ? S = T : (S = T === "v" ? "h" : "v", A = Lh(T, _)), !A)
      return !1;
    if (!r.current && "changedTouches" in y && (E || C) && (r.current = S), !S)
      return !0;
    var I = r.current || S;
    return KA(I, k, y, I === "h" ? E : C);
  }, []), l = v.useCallback(function(y) {
    var k = y;
    if (!(!qr.length || qr[qr.length - 1] !== a)) {
      var g = "deltaY" in k ? jh(k) : Mo(k), x = t.current.filter(function(S) {
        return S.name === k.type && (S.target === k.target || k.target === S.shadowParent) && ZA(S.delta, g);
      })[0];
      if (x && x.should) {
        k.cancelable && k.preventDefault();
        return;
      }
      if (!x) {
        var E = (o.current.shards || []).map(Bh).filter(Boolean).filter(function(S) {
          return S.contains(k.target);
        }), C = E.length > 0 ? s(k, E[0]) : !o.current.noIsolation;
        C && k.cancelable && k.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(y, k, g, x) {
    var E = { name: y, delta: k, target: g, should: x, shadowParent: tT(g) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== E;
      });
    }, 1);
  }, []), c = v.useCallback(function(y) {
    n.current = Mo(y), r.current = void 0;
  }, []), d = v.useCallback(function(y) {
    u(y.type, jh(y), y.target, s(y, e.lockRef.current));
  }, []), f = v.useCallback(function(y) {
    u(y.type, Mo(y), y.target, s(y, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return qr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Wr), document.addEventListener("touchmove", l, Wr), document.addEventListener("touchstart", c, Wr), function() {
      qr = qr.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", l, Wr), document.removeEventListener("touchmove", l, Wr), document.removeEventListener("touchstart", c, Wr);
    };
  }, []);
  var h = e.removeScrollBar, w = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    w ? v.createElement(a, { styles: YA(i) }) : null,
    h ? v.createElement($A, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function tT(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Cd(Z0, eT);
var nT = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xr = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), jo = {}, ku = 0, Iy = function(e) {
  return e && (e.host || Iy(e.parentNode));
}, rT = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Iy(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, iT = function(e, t, n, r) {
  var i = rT(t, Array.isArray(e) ? e : [e]);
  jo[n] || (jo[n] = /* @__PURE__ */ new WeakMap());
  var a = jo[n], o = [], s = /* @__PURE__ */ new Set(), l = new Set(i), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  i.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else
        try {
          var h = f.getAttribute(r), w = h !== null && h !== "false", y = (Xr.get(f) || 0) + 1, k = (a.get(f) || 0) + 1;
          Xr.set(f, y), a.set(f, k), o.push(f), y === 1 && w && Lo.set(f, !0), k === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return c(t), s.clear(), ku++, function() {
    o.forEach(function(d) {
      var f = Xr.get(d) - 1, h = a.get(d) - 1;
      Xr.set(d, f), a.set(d, h), f || (Lo.has(d) || d.removeAttribute(r), Lo.delete(d)), h || d.removeAttribute(n);
    }), ku--, ku || (Xr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), jo = {});
  };
}, aT = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || nT(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), iT(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, oT = Ld(), sT = `
 [` + iy + `] {
   pointer-events: none !important;
 }
`, lT = function() {
  return v.createElement(oT, { styles: sT });
}, zh = function(e) {
  return "current" in e ? e.current : e;
};
function uT(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, l = v.useState(void 0), u = l[0], c = l[1], d = v.useRef(null), f = v.useRef(0);
  return v.useEffect(function() {
    var h = function(g) {
      g.defaultPrevented || (g.code === "Escape" || g.key === "Escape" || g.keyCode === 27) && n && n(g);
    }, w = function(g) {
      g.defaultPrevented || g.target === d.current || g instanceof MouseEvent && g.button !== 0 || i && i.map(zh).some(function(x) {
        return x && x.contains(g.target) || x === g.target;
      }) || r && r(g);
    }, y = function(g) {
      w(g), f.current = g.touches.length;
    }, k = function(g) {
      f.current = g.touches.length;
    };
    if (u)
      return u.ownerDocument.addEventListener("keydown", h), u.ownerDocument.addEventListener("mousedown", w), u.ownerDocument.addEventListener("touchstart", y), u.ownerDocument.addEventListener("touchend", k), function() {
        u.ownerDocument.removeEventListener("keydown", h), u.ownerDocument.removeEventListener("mousedown", w), u.ownerDocument.removeEventListener("touchstart", y), u.ownerDocument.removeEventListener("touchend", k);
      };
  }, [u, r, n]), v.useEffect(function() {
    if (u)
      return a && a(u), function() {
        o && o();
      };
  }, [!!u]), v.useEffect(function() {
    var h = function() {
      return null;
    }, w = !1, y = function(g) {
      s || (h = aT(ik([g], (i || []).map(zh)), g.ownerDocument.body, iy)), c(function() {
        return g;
      });
    }, k = function() {
      h(), w || c(null);
    };
    return t({
      onMouseDown: function(g) {
        d.current = g.target;
      },
      onTouchStart: function(g) {
        d.current = g.target;
      },
      onActivation: y,
      onDeactivation: k
    }), function() {
      w = !0, t(!1);
    };
  }, []), v.createElement(lT, null);
}
const cT = Cd(ry, uT);
var pT = function(e) {
  return v.createElement(cT, H({}, e));
}, dT = v.forwardRef(function(e, t) {
  return v.createElement(T2, H({}, e, { ref: t, sideCar: pT }));
});
class fT extends m.Component {
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
    return this.rootElement ? /* @__PURE__ */ yr.createPortal(this.props.children, this.rootElement) : null;
  }
}
const Py = /* @__PURE__ */ m.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function mT({
  onClose: e,
  isOpen: t,
  isBlocking: n = !1,
  children: r = null
}) {
  const i = v.useMemo(() => ({
    onClose: e,
    isOpen: t,
    isBlocking: n
  }), [e, t, n]);
  return /* @__PURE__ */ m.createElement(Py.Provider, {
    value: i
  }, r);
}
function hT({
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
function vT({
  children: e = null
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function gT({
  children: e,
  onClose: t,
  isOpen: n,
  isBlocking: r = !1,
  zIndex: i
}) {
  if (v.useEffect(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
    document.body.classList.remove("pgn__hidden-scroll-padding-right");
  }), [n]), !n)
    return null;
  const a = r ? void 0 : t;
  return /* @__PURE__ */ m.createElement(mT, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ m.createElement(fT, null, /* @__PURE__ */ m.createElement(dT, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: D("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ m.createElement(vT, null, /* @__PURE__ */ m.createElement(hT, {
    onClick: a
  }), e))));
}
const Sl = /* @__PURE__ */ m.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = v.useContext(Py), a = e, o = {
    ...n,
    className: D("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ m.createElement(a, o, t);
});
Sl.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the content of the button */
  children: p.node,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: p.func
};
Sl.defaultProps = {
  as: qe,
  onClick: void 0,
  className: void 0,
  children: null
};
const jd = /* @__PURE__ */ m.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(e, {
  ...n,
  ref: r,
  className: D("pgn__modal-header", n.className)
}, t));
jd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
jd.defaultProps = {
  as: "div",
  className: ""
};
function Bd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: D("pgn__modal-title", n.className)
  }, t);
}
Bd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Bd.defaultProps = {
  as: "h2",
  className: void 0
};
function zd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: D("pgn__modal-footer", n.className)
  }, t);
}
zd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
zd.defaultProps = {
  as: "div",
  className: void 0
};
const Hh = (e = !0) => {
  const t = v.useRef(null), [n, r] = v.useState(e);
  return v.useEffect(() => {
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
function Hd({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = Hh(), [a, o] = Hh(), s = D("pgn__modal-body", n.className, {
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
Hd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Hd.defaultProps = {
  as: "div",
  className: void 0
};
function Vd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: D("pgn__modal-hero-content", n.className)
  }, t);
}
Vd.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
Vd.defaultProps = {
  as: "div",
  className: void 0
};
function $d({
  as: e,
  backgroundSrc: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: D("pgn__modal-hero-bg", r.className),
    style: {
      backgroundImage: t ? `url(${t})` : void 0,
      ...r.style
    }
  }, n);
}
$d.propTypes = {
  as: p.elementType,
  backgroundSrc: p.string,
  children: p.node,
  className: p.string,
  style: p.shape({})
};
$d.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function uo({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: D("pgn__modal-hero", n.className)
  }, t);
}
uo.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
uo.defaultProps = {
  as: "div",
  className: void 0
};
uo.Content = Vd;
uo.Background = $d;
const Oy = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], xT = ["hover", "click", "focus"];
function Ud(e) {
  return /* @__PURE__ */ m.createElement(j0, {
    ...e
  }, e.children);
}
const Vh = p.oneOf(xT);
p.node.isRequired, p.oneOfType([p.elementType, p.func]), p.func, p.func, p.func, p.func, p.func, p.func, p.func, p.oneOf(Oy), p.shape({}), p.bool, p.oneOf(["click", "mousedown"]), p.bool, p.oneOfType([p.elementType, p.func]), p.oneOfType([p.object, p.bool]);
Ud.propTypes = {
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
  placement: p.oneOf(Oy),
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
  trigger: p.oneOfType([Vh, p.arrayOf(Vh)])
};
Ud.defaultProps = {
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
const yT = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ls = /* @__PURE__ */ m.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(Cl, {
  ...n,
  className: D({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
Ls.propTypes = {
  ...Cl.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: p.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: p.oneOf(yT),
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
Ls.defaultProps = {
  ...Ls.defaultProps,
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
const Ui = /* @__PURE__ */ m.forwardRef(({
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
  iconAs: u = je,
  isActive: c = !1,
  children: d,
  // unused, just here because we don't want it to be part of 'attrs'
  ...f
}, h) => {
  const w = n ? "inverse-" : "", y = c ? `${l}-` : "", k = u;
  return /* @__PURE__ */ m.createElement("button", {
    "aria-label": t,
    className: D("btn-icon", `btn-icon-${w}${l}`, `btn-icon-${s}`, {
      [`btn-icon-${w}${y}active`]: c
    }, e),
    onClick: o,
    type: "button",
    ref: h,
    ...f
  }, /* @__PURE__ */ m.createElement("span", {
    className: "btn-icon__icon-container"
  }, k && /* @__PURE__ */ m.createElement(k, {
    className: D("btn-icon__icon", a),
    icon: r,
    src: i
  })));
});
function ET({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ m.createElement(Ud, {
    placement: e,
    overlay: /* @__PURE__ */ m.createElement(Ls, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ m.createElement(Ui, {
    ...n
  }));
}
Ui.IconButtonWithTooltip = ET;
const $h = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), wT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), bT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), kT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), Gd = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), Fy = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M6 21h12V7H6v14ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z",
  fill: "currentColor"
})), Ry = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54Z",
  fill: "currentColor"
})), CT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
  fill: "currentColor"
})), Dy = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z",
  fill: "currentColor"
})), My = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z",
  fill: "currentColor"
})), ST = (e) => /* @__PURE__ */ v.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
  fill: "currentColor"
})), _T = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
  fill: "currentColor"
})), Ly = (e) => /* @__PURE__ */ v.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), jy = (e) => /* @__PURE__ */ v.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), AT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), TT = (e) => /* @__PURE__ */ v.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ v.createElement("path", {
  xmlns: "http://www.w3.org/2000/svg",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  fill: "currentColor"
})), NT = {
  closeButtonText: {
    id: "pgn.Modal.closeButon",
    defaultMessage: "Close",
    description: "Accessible name for the close button in the modal dialog"
  }
};
function ht({
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
  isBlocking: d = !1,
  zIndex: f,
  isOverflowVisible: h
}) {
  const w = jr(), y = s || w.formatMessage(NT.closeButtonText), k = U0({
    query: "(max-width: 767.98px)"
  }), g = c && k;
  return /* @__PURE__ */ m.createElement(gT, {
    isOpen: n,
    onClose: r,
    isBlocking: d,
    zIndex: f
  }, /* @__PURE__ */ m.createElement("div", {
    role: "dialog",
    "aria-label": t,
    className: D("pgn__modal", {
      [`pgn__modal-${g ? "fullscreen" : i}`]: i,
      [`pgn__modal-${a}`]: a,
      "pgn__modal-scroll-fullscreen": l,
      "pgn__modal-visible-overflow": h
    }, u)
  }, o && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ m.createElement(Sl, {
    as: Ui,
    iconAs: je,
    invertColors: a === "dark",
    src: Gd,
    alt: y
  })), e));
}
ht.Header = jd;
ht.Title = Bd;
ht.Footer = zd;
ht.CloseButton = Sl;
ht.Body = Hd;
ht.Hero = uo;
const Uh = /* @__PURE__ */ m.forwardRef(({
  className: e,
  variant: t = "success",
  children: n,
  arrowPlacement: r = "bottom",
  ...i
}, a) => /* @__PURE__ */ m.createElement("span", {
  className: D(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
  ref: a,
  ...i
}, n));
function tr(e) {
  return typeof e == "string" || e instanceof String;
}
function Gh(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function By(e, t) {
  return Array.isArray(t) ? By(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
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
function IT(e) {
  switch (e) {
    case G.LEFT:
      return G.FORCE_LEFT;
    case G.RIGHT:
      return G.FORCE_RIGHT;
    default:
      return e;
  }
}
function Cu(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function js(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!js(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!js(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class PT {
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
function K(e, t) {
  return new K.InputMask(e, t);
}
function zy(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? K.MaskedRegExp : tr(e) ? K.MaskedPattern : e === Date ? K.MaskedDate : e === Number ? K.MaskedNumber : Array.isArray(e) || e === Array ? K.MaskedDynamic : K.Masked && e.prototype instanceof K.Masked ? e : K.Masked && e instanceof K.Masked ? e.constructor : e instanceof Function ? K.MaskedFunction : (console.warn("Mask not found for mask", e), K.Masked);
}
function Ka(e) {
  if (!e) throw new Error("Options in not defined");
  if (K.Masked) {
    if (e.prototype instanceof K.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof K.Masked ? {
      mask: e
    } : Gh(e) && e.mask instanceof K.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...By(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Gh(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Mn(e) {
  if (K.Masked && e instanceof K.Masked) return e;
  const t = Ka(e), n = zy(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
K.createMask = Mn;
class Wd {
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
K.MaskElement = Wd;
const Wh = 90, OT = 89;
class _l extends Wd {
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
    if (this._handlers.redo && (t.keyCode === Wh && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === OT && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Wh && (t.metaKey || t.ctrlKey))
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
K.HTMLMaskElement = _l;
class FT extends _l {
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
K.HTMLMaskElement = _l;
class Hy extends _l {
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
K.HTMLContenteditableMaskElement = Hy;
class Al {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Al.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
Al.MAX_LENGTH = 100;
class RT {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof Wd ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Hy(t) : new FT(t), this.masked = Mn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Al(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof K.Masked) && this.masked.constructor === zy(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof K.Masked ? t : Mn({
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
    const n = new PT({
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
K.InputMask = RT;
class te {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new te()];
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
K.ChangeDetails = te;
class mn {
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
class tt {
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
      ...tt.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new mn(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return tr(t) && (t = new mn(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new te({
      inserted: t,
      rawInserted: t
    })) : new te();
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
      s || (a = new te(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new te();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new te();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!tr(t)) throw new Error("value should be string");
    const i = tr(r) ? new mn(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new te();
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
    return n === void 0 && (n = {}), te.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), te.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    l && (i = IT(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const d = new te();
    if (i !== G.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? G.NONE : i), d.tailShift = c - t), d.aggregate(this.remove(c)), l && i !== G.NONE && u === this.rawInputValue)
      if (i === G.FORCE_LEFT) {
        let f;
        for (; u === this.rawInputValue && (f = this.displayValue.length); )
          d.aggregate(new te({
            tailShift: -1
          })).aggregate(this.remove(f - 1));
      } else i === G.FORCE_RIGHT && s.unshift();
    return d.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !js(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || tt.EMPTY_VALUES.includes(t) && tt.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new te();
  }
}
tt.DEFAULTS = {
  skipInvalid: !0
};
tt.EMPTY_VALUES = [void 0, null, ""];
K.Masked = tt;
class Er {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = tr(t) ? new mn(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof mn)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof Er) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof K.MaskedPattern))
      return new mn(this.toString()).appendTo(t);
    const n = new te();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof Er || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof Er && t._blocks[o]), s) {
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
      const a = "chunks" in i ? new Er() : new mn();
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
class DT {
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
class Vy {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new te();
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
    if (n === void 0 && (n = {}), this.isFilled) return new te();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new te({
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
    const t = new te();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new mn("");
  }
  appendTail(t) {
    return tr(t) && (t = new mn(String(t))), t.appendTo(this);
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
class Bs {
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
    this.masked = Mn(l), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new te();
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
    if (n === void 0 && (n = {}), this.isFilled) return new te();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new te(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new te() : (this.isFilled = !0, new te({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new te();
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
    return new te();
  }
}
Bs.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class MT extends tt {
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
K.MaskedRegExp = MT;
class nt extends tt {
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
      ...nt.DEFAULTS,
      ...t,
      definitions: Object.assign({}, Bs.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        const u = n.slice(a), c = Object.keys(this.blocks).filter((f) => u.indexOf(f) === 0);
        c.sort((f, h) => h.length - f.length);
        const d = c[0];
        if (d) {
          const {
            expose: f,
            repeat: h,
            ...w
          } = Ka(this.blocks[d]), y = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...w,
            repeat: h,
            parent: this
          }, k = h != null ? new K.RepeatBlock(
            y
            /* TODO */
          ) : Mn(y);
          k && (this._blocks.push(k), f && (this.exposeBlock = k), this._maskedBlocks[d] || (this._maskedBlocks[d] = []), this._maskedBlocks[d].push(this._blocks.length - 1)), a += d.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === nt.STOP_CHAR) {
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
      if (o === nt.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new Bs({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ka(t[o]),
        parent: this
      }) : new Vy({
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
    const n = new te();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new te();
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
    const r = new Er();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof Er && (l.blockIndex = a), r.extend(l);
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
    const n = new te();
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
    const r = new DT(this, t);
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
    const n = new te();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
nt.DEFAULTS = {
  ...tt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
nt.STOP_CHAR = "`";
nt.ESCAPE_CHAR = "\\";
nt.InputDefinition = Bs;
nt.FixedDefinition = Vy;
K.MaskedPattern = nt;
class is extends nt {
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
    const n = new te();
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
K.MaskedRange = is;
const LT = "d{.}`m{.}`Y";
class _n extends nt {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: tr(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(_n.extractPatternOptions({
      ..._n.DEFAULTS,
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
      ..._n.DEFAULTS,
      ...t
    }, o = Object.assign({}, _n.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: tr(n) ? n : r,
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
    return super.optionsIsChanged(_n.extractPatternOptions(t));
  }
}
_n.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: is,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: is,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: is,
    from: 1900,
    to: 9999
  }
});
_n.DEFAULTS = {
  ...nt.DEFAULTS,
  mask: Date,
  pattern: LT,
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
K.MaskedDate = _n;
class Tl extends tt {
  constructor(t) {
    super({
      ...Tl.DEFAULTS,
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
      } = Ka(n), a = Mn({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new te(), c = l == null ? void 0 : l.state;
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
    const n = new te();
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
    const r = new te();
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
      return js(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Tl.DEFAULTS = {
  ...tt.DEFAULTS,
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
K.MaskedDynamic = Tl;
class Nl extends nt {
  constructor(t) {
    super({
      ...Nl.DEFAULTS,
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
    return new te({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new mn("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new te();
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
Nl.DEFAULTS = {
  ...nt.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
K.MaskedEnum = Nl;
class jT extends tt {
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
K.MaskedFunction = jT;
var $y;
class Ct extends tt {
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
      ...Ct.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Cu(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Cu).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Cu(this.thousandsSeparator), "g");
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
      let f;
      this.min != null && this.min < 0 && this.number < this.min && (f = this.min), this.max != null && this.max > 0 && this.number > this.max && (f = this.max), f != null && (this.autofix ? (this._value = this.format(f, this).replace(Ct.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new te({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new te()), this._value = this._insertThousandsSeparators(this._value);
    const c = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, d = this._separatorsCountFromSlice(c);
    return u.tailShift += (d - i) * this.thousandsSeparator.length, u;
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
    return new te({
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === Ct.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, Ct.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(Ct.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || Ct.EMPTY_VALUES.includes(t) && Ct.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
$y = Ct;
Ct.UNMASKED_RADIX = ".";
Ct.EMPTY_VALUES = [...tt.EMPTY_VALUES, 0];
Ct.DEFAULTS = {
  ...tt.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [$y.UNMASKED_RADIX],
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
K.MaskedNumber = Ct;
const Xc = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Uy(e, t, n) {
  t === void 0 && (t = Xc.MASKED), n === void 0 && (n = Xc.MASKED);
  const r = Mn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function BT(e, t, n, r) {
  return Uy(t, n, r)(e);
}
K.PIPE_TYPE = Xc;
K.createPipe = Uy;
K.pipe = BT;
class zT extends nt {
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
    } = Ka(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = Mn(this._blockOpts);
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
      return this._blocks.push(Mn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new te();
    for (
      let l = (i = (a = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : a.index) != null ? i : Math.max(this._blocks.length - 1, 0), u, c;
      // try to get a block or
      // try to allocate a new block if not allocated already
      u = (o = this._blocks[l]) != null ? o : c = !c && this._allocateBlock(l);
      ++l
    ) {
      var i, a, o, s;
      const d = u._appendChar(t, {
        ...n,
        _beforeTailState: (s = n._beforeTailState) == null || (s = s._blocks) == null ? void 0 : s[l]
      });
      if (d.skip && c) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (r.aggregate(d), d.consumed) break;
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
K.RepeatBlock = zT;
try {
  globalThis.IMask = K;
} catch {
}
const Gy = {
  // common
  mask: p.oneOfType([p.array, p.func, p.string, p.instanceOf(RegExp), p.oneOf([Date, Number, K.Masked]), p.instanceOf(K.Masked)]),
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
}, Wy = Object.keys(Gy).filter((e) => e !== "value"), HT = ["value", "unmask", "onAccept", "onComplete", "inputRef"], VT = Wy.filter((e) => HT.indexOf(e) < 0);
function $T(e) {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = K(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => VT.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return Wy.forEach((s) => {
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
  return n.displayName = "IMask(" + r + ")", n.propTypes = Gy, m.forwardRef((i, a) => m.createElement(n, {
    ...i,
    ref: a
  }));
}
const UT = $T((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return m.createElement("input", {
    ...n,
    ref: t
  });
}), GT = (e, t) => m.createElement(UT, {
  ...e,
  ref: t
}), WT = m.forwardRef(GT), qT = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), _r = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, XT = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = v.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(!!o.target.value)];
}, qh = (e, t) => {
  const [n, r] = v.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = Ed(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = v.useState(l);
    return v.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, Su = (e) => e, QT = () => {
}, qy = /* @__PURE__ */ m.createContext({
  getControlProps: Su,
  useSetIsControlGroupEffect: QT,
  getLabelProps: Su,
  getDescriptorProps: Su,
  hasFormGroupProvider: !1
}), Gt = () => m.useContext(qy);
function KT(e) {
  const [t, n] = v.useState(e);
  return [t, (i) => {
    v.useEffect(() => n(i), [i]);
  }];
}
function Il({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = v.useMemo(() => t || Ed("form-field"), [t]), [o, s] = qh(a), [l, u] = qh(a), [c, d] = KT(!1), y = {
    getControlProps: v.useCallback((k) => {
      const g = c ? l : void 0;
      return qT({
        ...k,
        "aria-describedby": D(k["aria-describedby"], o) || void 0,
        "aria-labelledby": D(k["aria-labelledby"], g) || void 0,
        id: a
      });
    }, [c, o, l, a]),
    getLabelProps: (k) => {
      const g = u(k == null ? void 0 : k.id);
      return c ? {
        ...k,
        id: g
      } : {
        ...k,
        htmlFor: a
      };
    },
    getDescriptorProps: (k) => {
      const g = s(k == null ? void 0 : k.id);
      return {
        ...k,
        id: g
      };
    },
    useSetIsControlGroupEffect: d,
    isControlGroup: c,
    controlId: a,
    isInvalid: n,
    isValid: r,
    size: i,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ m.createElement(qy.Provider, {
    value: y
  }, e);
}
const Di = {
  SMALL: "sm",
  LARGE: "lg"
}, Qt = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, ZT = {
  [Qt.DEFAULT]: null,
  [Qt.VALID]: bT,
  [Qt.INVALID]: Gd,
  [Qt.WARNING]: TT,
  [Qt.CRITERIA_EMPTY]: AT,
  [Qt.CRITERIA_VALID]: kT,
  [Qt.CRITERIA_INVALID]: wT
}, YT = ({
  isInvalid: e,
  isValid: t
}) => t ? Qt.VALID : e ? Qt.INVALID : Qt.DEFAULT;
function qd({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = ZT[e];
  return n ? /* @__PURE__ */ m.createElement(je, {
    src: n
  }) : null;
}
qd.propTypes = {
  type: p.oneOf(Object.values(Qt)),
  customIcon: p.node
};
qd.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function Pl({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...a
}) {
  const o = D(a.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ m.createElement("div", {
    ...a,
    className: o
  }, i && /* @__PURE__ */ m.createElement(qd, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ m.createElement("div", null, e));
}
const JT = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Pl.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies text type, this affects styling. */
  type: p.oneOf(JT),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show text with muted styling. */
  muted: p.bool
};
Pl.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function ar({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = Gt(), a = n(t), o = D("pgn__form-control-description", t.className), s = t.type || YT({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ m.createElement(Pl, {
    ...a,
    className: o,
    type: s
  }, e);
}
const eN = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
ar.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies feedback type, this affects styling. */
  type: p.oneOf(eN),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: p.bool
};
ar.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function Xy({
  children: e
}) {
  const {
    controlId: t
  } = Gt();
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ m.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
Xy.propTypes = {
  children: p.node.isRequired
};
function zs({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
zs.propTypes = {
  children: p.node.isRequired,
  location: p.oneOf(["leading", "trailing"])
};
zs.defaultProps = {
  location: "leading"
};
function Xd({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const o = Gt(), s = a.size || o.size;
  return /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": s === Di.LARGE,
      "pgn__form-control-decorator-group-sm": s === Di.SMALL
    }, i),
    ...a
  }, e, t && /* @__PURE__ */ m.createElement(zs, {
    location: "leading"
  }, t), n && /* @__PURE__ */ m.createElement(zs, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ m.createElement(Xy, null, r));
}
Xd.propTypes = {
  children: p.node.isRequired,
  leadingElement: p.node,
  trailingElement: p.node,
  floatingLabel: p.node,
  className: p.string,
  size: p.oneOf([Di.SMALL, Di.LARGE])
};
Xd.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Gi = /* @__PURE__ */ m.forwardRef(({
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
    isInvalid: d,
    isValid: f,
    getControlProps: h,
    ...w
  } = Gt(), y = m.useRef(), k = c || y, g = u.size || w.size, [x, E] = XT({
    defaultValue: u.defaultValue,
    value: u.value
  }), C = v.useCallback(() => {
    e === "textarea" && o && (!k.current.initialHeight && !k.current.offsets && (k.current.initialHeight = k.current.offsetHeight, k.current.offsets = k.current.offsetHeight - k.current.clientHeight), k.current.style.height = `${k.current.initialHeight}px`, k.current.style.height = `${k.current.scrollHeight + k.current.offsets}px`);
  }, [e, o, k]);
  v.useEffect(() => {
    C();
  }, [C]);
  const S = h({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: _r(E, u.onBlur)
  }), _ = (T) => {
    C(), s && s(T);
  };
  return /* @__PURE__ */ m.createElement(Xd, {
    size: g,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ m.createElement(R0, {
    as: l ? WT : e,
    ref: k,
    size: g,
    isInvalid: d,
    isValid: f,
    className: D(n, {
      "has-value": x
    }),
    onChange: _,
    mask: l,
    ...S
  }));
}), tN = ["sm", "lg"];
Gi.Feedback = ar;
Gi.Description = ar;
Gi.propTypes = {
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
  size: p.oneOf(tN),
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
Gi.defaultProps = {
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
function Qd({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = Gt(), o = D("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === Di.LARGE,
    "pgn__form-label-sm": r === Di.SMALL
  }, n.className), s = a({
    ...n,
    className: o
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ m.createElement(l, s, e);
}
function nN({
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
    className: D("pgn__form-group", o.className)
  }, /* @__PURE__ */ m.createElement(Il, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const rN = (e) => e, Qy = /* @__PURE__ */ m.createContext({
  getRadioControlProps: rN,
  hasRadioSetProvider: !1
}), iN = () => v.useContext(Qy);
function Kd({
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
      onBlur: c.onBlur ? _r(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? _r(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? _r(i, c.onChange) : i,
      checked: s ? a === c.value : void 0,
      defaultChecked: s ? void 0 : o === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(Qy.Provider, {
    value: u
  }, e);
}
Kd.propTypes = {
  children: p.node.isRequired,
  name: p.string.isRequired,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.string,
  defaultValue: p.string
};
Kd.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Zd = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = Gt(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = iN();
  let a = n({
    ...e,
    className: D("pgn__form-radio-input", e.className)
  });
  return i && (a = r(a)), /* @__PURE__ */ m.createElement("input", {
    ...a,
    type: "radio",
    ref: t
  });
});
Zd.propTypes = {
  className: p.string
};
Zd.defaultProps = {
  className: void 0
};
const Yd = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: o,
  ...s
}, l) => /* @__PURE__ */ m.createElement(Il, {
  controlId: s.id,
  isInvalid: a,
  isValid: o
}, /* @__PURE__ */ m.createElement("div", {
  className: D("pgn__form-radio", t, {
    "pgn__form-control-valid": o,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": s.disabled
  })
}, /* @__PURE__ */ m.createElement(Zd, {
  ref: l,
  className: n,
  ...s
}), /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(Qd, {
  className: r
}, e), i && /* @__PURE__ */ m.createElement(ar, {
  hasIcon: !1
}, i)))));
Yd.propTypes = {
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
Yd.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function Ol({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(e, {
    className: D(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
Ol.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** A class name to append to the base element. */
  className: p.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: p.bool,
  /** Specifies contents of the component. */
  children: p.node
};
Ol.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function Jd({
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
  } = Gt();
  c(!0);
  const d = u(l);
  return /* @__PURE__ */ m.createElement(Kd, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(Ol, {
    role: "radiogroup",
    isInline: i,
    ...d
  }, e));
}
Jd.propTypes = {
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
Jd.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let Bo;
const aN = new Uint8Array(16);
function oN() {
  if (!Bo && (Bo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Bo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Bo(aN);
}
const Ge = [];
for (let e = 0; e < 256; ++e)
  Ge.push((e + 256).toString(16).slice(1));
function sN(e, t = 0) {
  return Ge[e[t + 0]] + Ge[e[t + 1]] + Ge[e[t + 2]] + Ge[e[t + 3]] + "-" + Ge[e[t + 4]] + Ge[e[t + 5]] + "-" + Ge[e[t + 6]] + Ge[e[t + 7]] + "-" + Ge[e[t + 8]] + Ge[e[t + 9]] + "-" + Ge[e[t + 10]] + Ge[e[t + 11]] + Ge[e[t + 12]] + Ge[e[t + 13]] + Ge[e[t + 14]] + Ge[e[t + 15]];
}
const lN = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Xh = {
  randomUUID: lN
};
function uN(e, t, n) {
  if (Xh.randomUUID && !e)
    return Xh.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || oN)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, sN(r);
}
const cN = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), pN = (e, t) => t.every((n) => e[n] !== void 0), _u = (e, t) => cN(
  e,
  (n) => Array.isArray(t) ? pN(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), Ky = /* @__PURE__ */ m.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: D("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ m.createElement(B0, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, t));
});
function dN({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function fN({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function mN({
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
  i === "Enter" && a && dN({
    event: e,
    currentIndex: s,
    activeElement: a
  }), fN({
    event: e,
    currentIndex: s,
    availableElements: o
  });
}
function hN(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = v.useRef();
  return v.useEffect(() => {
    const i = (a) => {
      mN({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const Qh = {
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
}, ef = /* @__PURE__ */ v.forwardRef(({
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
  customErrorMessageText: d,
  onChange: f,
  helpMessage: h,
  ...w
}, y) => {
  const k = jr(), g = v.useRef(), x = hN({
    selectors: t,
    ignoredKeys: n
  }), [E, C] = v.useState(!1), [S, _] = v.useState(!1), [T, A] = v.useState(!1), [I, N] = v.useState(!1), [M, L] = v.useState((i == null ? void 0 : i.userProvidedText) || ""), [R, q] = v.useState([]), [Q, Z] = v.useState(null), [Y, P] = v.useState(!0), [F, z] = v.useState(""), W = (re) => {
    Z(re);
  }, V = () => {
    q([]), C(!1), Z(null);
  }, Ne = (re, ue) => {
    const de = re.currentTarget.getAttribute("data-value"), ce = re.currentTarget.id;
    A(!0), N(!0), L(de), f && (!i || i && de !== i.selectionValue) && f({
      userProvidedText: de,
      selectionValue: de,
      selectionId: ce
    }), V(), ue && ue(re);
  };
  function pe(re = "") {
    let ue = m.Children.map(e, (de) => {
      const {
        children: ce,
        onClick: Rt,
        ...bn
      } = de.props, sn = de.props.id ?? uN();
      return /* @__PURE__ */ m.cloneElement(de, {
        ...bn,
        children: ce,
        "data-value": ce,
        onClick: (j) => Ne(j, Rt),
        id: sn,
        onFocus: () => W(sn)
      });
    });
    return re.length > 0 && (ue = ue.filter((de) => de.props.children.toLowerCase().includes(re.toLowerCase()))), ue;
  }
  const ne = () => {
    q(pe(M)), P(!0), z(""), C(!0);
  }, J = () => {
    E ? V() : ne();
  }, Ee = /* @__PURE__ */ m.createElement(Ui, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: E ? jy : Ly,
    iconAs: je,
    size: "sm",
    variant: "secondary",
    alt: E ? k.formatMessage(Qh.iconButtonClosed) : k.formatMessage(Qh.iconButtonOpened),
    onClick: J
  }), De = () => {
    _(!0);
  }, dt = () => {
    if (c) {
      P(!1), z(d);
      return;
    }
    if (o && !T) {
      P(!1), z(s);
      return;
    }
    if (T && l && !I) {
      P(!1), z(u);
      return;
    }
    P(!0), z("");
  };
  v.useImperativeHandle(y, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: dt
  }));
  const bt = () => {
    _(!1), V(), dt();
  }, Ke = (re) => {
    if (S) {
      if (re.key === "Escape") {
        re.preventDefault(), g && g.current.focus(), V();
        return;
      }
      re.key === "Tab" && bt();
    }
  }, Ze = (re) => {
    x.current && !x.current.contains(re.target) && S && bt();
  };
  v.useEffect(() => (document.addEventListener("keydown", Ke), document.addEventListener("click", Ze, !0), () => {
    document.removeEventListener("click", Ze, !0), document.removeEventListener("keydown", Ke);
  })), v.useEffect(() => {
    L(i ? i.userProvidedText ?? "" : ""), A(!!i && !!i.userProvidedText), N(!!i && !!i.selectionValue);
  }, [i]);
  const Ft = () => {
    ne();
  }, an = (re) => {
    const ue = re.target.value;
    if (!ue.length) {
      L(""), A(!1), N(!1), q([]), V(), f && f({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    A(!0);
    const de = pe(ue);
    q(de);
    const ce = de.find((Rt) => Rt.props.children.toLowerCase() === ue.toLowerCase());
    if (!ce) {
      N(!1), L(ue), f && f({
        userProvidedText: ue,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    N(!0), L(ce.props.children), f && f({
      userProvidedText: ce.props.children,
      selectionValue: ce.props.children,
      selectionId: ce.props.id
    });
  }, {
    getControlProps: on
  } = Gt(), ke = on(w);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: x,
    onFocus: De
  }, /* @__PURE__ */ m.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${R.length} options found`), /* @__PURE__ */ m.createElement(Il, {
    controlId: ke.id,
    isInvalid: !Y
  }, /* @__PURE__ */ m.createElement(Gi, {
    ref: g,
    "aria-expanded": (R.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: M,
    "aria-invalid": F,
    "aria-activedescendant": Q,
    onChange: an,
    onClick: Ft,
    trailingElement: Ee,
    "data-testid": "autosuggest-textbox-input",
    ...ke
  }), h && Y && /* @__PURE__ */ m.createElement(ar, {
    type: "default"
  }, h), !Y && /* @__PURE__ */ m.createElement(ar, {
    type: "invalid",
    "feedback-for": ke.name
  }, F)), /* @__PURE__ */ m.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ m.createElement(Ky, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : R.length > 0 && R));
});
ef.defaultProps = {
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
ef.propTypes = {
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
  valueRequiredErrorMessageText: _u(p.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: p.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: _u(p.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: p.bool,
  /** Informs user of other errors. */
  customErrorMessageText: _u(p.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: p.string,
  /** Selected list item is read-only. */
  readOnly: p.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: p.node,
  /** Specifies the screen reader text */
  screenReaderText: p.string
};
function vN({
  as: e = "button",
  children: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected: n = !1,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const o = D(a.className, "pgn__menu-item");
  return /* @__PURE__ */ v.createElement(e, {
    ...a,
    className: o
  }, /* @__PURE__ */ m.createElement(m.Fragment, null, i && /* @__PURE__ */ m.createElement(je, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ m.createElement(je, {
    className: "btn-icon-after",
    src: r
  })));
}
function tf({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(vN, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: D(t, "dropdown-item"),
    ...r
  }, e);
}
tf.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
tf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: p.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: p.func
};
const gN = (e) => e, Zy = /* @__PURE__ */ m.createContext({
  getCheckboxControlProps: gN,
  hasCheckboxSetProvider: !1
}), Yy = () => v.useContext(Zy);
function nf({
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
      onBlur: c.onBlur ? _r(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? _r(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? _r(i, c.onChange) : i,
      checked: s ? a.includes(c.value) : void 0,
      defaultChecked: s ? void 0 : o && o.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(Zy.Provider, {
    value: u
  }, e);
}
nf.propTypes = {
  children: p.node.isRequired,
  name: p.string,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.arrayOf(p.string),
  defaultValue: p.arrayOf(p.string)
};
nf.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const rf = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Yy(), a = m.useRef(), o = n || a, {
    getControlProps: s
  } = Gt();
  let l = s({
    ...t,
    className: D("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), m.useEffect(() => {
    o.current && (o.current.indeterminate = e);
  }, [o, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...l,
    ref: o
  });
});
rf.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
rf.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Fl = /* @__PURE__ */ m.forwardRef(({
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
    hasCheckboxSetProvider: d
  } = Yy(), {
    hasFormGroupProvider: f,
    useSetIsControlGroupEffect: h,
    getControlProps: w
  } = Gt();
  h(!0);
  const k = f && !d ? {
    ...w({}),
    role: "group"
  } : {}, g = /* @__PURE__ */ m.createElement(s, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ m.createElement(Il, {
    controlId: u.id,
    isInvalid: a,
    isValid: o
  }, /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__form-checkbox", t, {
      "pgn__form-control-valid": o,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...k
  }, g, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(Qd, {
    className: r
  }, e), i && /* @__PURE__ */ m.createElement(ar, {
    hasIcon: !1
  }, i))));
});
Fl.propTypes = {
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
Fl.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: rf,
  floatLabelLeft: !1,
  disabled: !1
};
const af = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = m.useRef(), i = n || r, {
    getControlProps: a
  } = Gt(), o = a({
    ...t,
    className: D("pgn__form-switch-input", t.className)
  });
  return m.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...o,
    ref: i
  });
});
af.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
af.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const of = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ m.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ m.createElement(Fl, {
  className: D("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: af,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ m.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
of.propTypes = {
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
of.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function Rl({
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
  } = Gt();
  c(!0);
  const d = u(l);
  return /* @__PURE__ */ m.createElement(nf, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(Ol, {
    role: "group",
    isInline: i,
    ...d
  }, e));
}
Rl.propTypes = {
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
Rl.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const B = rn;
B.Control = Gi;
B.Radio = Yd;
B.RadioSet = Jd;
B.Autosuggest = ef;
B.AutosuggestOption = tf;
B.Checkbox = Fl;
B.CheckboxSet = Rl;
B.Switch = of;
B.SwitchSet = Rl;
B.Label = Qd;
B.Group = nN;
B.Text = Pl;
function xN() {
  const [e, t] = v.useState({
    width: void 0,
    height: void 0
  });
  return v.useLayoutEffect(() => {
    function n() {
      t({
        width: global.innerWidth,
        height: global.innerHeight
      });
    }
    return global.addEventListener("resize", n), n(), () => global.removeEventListener("resize", n);
  }, []), e;
}
const Jy = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement("div", {
  className: D("pgn__card-body", e),
  ref: r,
  ...n
}, t)), Kh = "card", Au = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], yN = ["white", "muted"], sf = /* @__PURE__ */ m.forwardRef(({
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
  const c = D(t, e ? `${e}-${Kh}` : Kh, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ m.createElement(s, {
    ref: u,
    ...l,
    className: c
  }, a ? /* @__PURE__ */ m.createElement(Jy, null, o) : o);
});
sf.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: p.string,
  /** Background color of the card. */
  bgColor: p.oneOf(Au),
  /** Text color of the card. */
  textColor: p.oneOf([...Au, ...yN]),
  /** Border color of the card. */
  borderColor: p.oneOf(Au),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: p.bool,
  /** Set a custom element for this component. */
  as: p.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: p.string,
  /** The content to render inside the card. */
  children: p.node
};
const Hr = /* @__PURE__ */ v.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function EN({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ m.createElement(Hr.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const wN = m.createContext({}), eE = !0;
function bN({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = eE, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof s == "number" && (c["--animation-duration"] = `${s}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), a && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Mi({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const d = m.useContext(wN), f = { ...s };
  for (const [E, C] of Object.entries(s))
    typeof C > "u" && delete f[E];
  const h = {
    ...d,
    ...f,
    circle: a
  }, w = {
    ...o,
    ...bN(h)
  };
  let y = "react-loading-skeleton";
  n && (y += ` ${n}`);
  const k = (l = h.inline) !== null && l !== void 0 ? l : !1, g = [], x = Math.ceil(e);
  for (let E = 0; E < x; E++) {
    let C = w;
    if (x > e && E === x - 1) {
      const _ = (u = C.width) !== null && u !== void 0 ? u : "100%", T = e % 1, A = typeof _ == "number" ? _ * T : `calc(${_} * ${T})`;
      C = { ...C, width: A };
    }
    const S = m.createElement("span", { className: y, style: C, key: E }, "‌");
    k ? g.push(S) : g.push(m.createElement(
      m.Fragment,
      { key: E },
      S,
      m.createElement("br", null)
    ));
  }
  return m.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = h.enableAnimation) !== null && c !== void 0 ? c : eE }, t ? g.map((E, C) => m.createElement(t, { key: C }, E)) : g);
}
const kN = 20, lf = /* @__PURE__ */ m.forwardRef(({
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
  } = v.useContext(Hr), u = v.useCallback((c) => {
    if (/* @__PURE__ */ m.isValidElement(c)) {
      const {
        children: d
      } = c.props, f = {
        size: n,
        children: Array.isArray(d) ? d.map(u) : u(d)
      };
      return /* @__PURE__ */ m.cloneElement(c, f);
    }
    return c;
  }, [n]);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-header", t)
  }, /* @__PURE__ */ m.createElement(Mi, {
    containerClassName: "pgn__card-header-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-header", t),
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
lf.propTypes = {
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
lf.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: kN,
  skeletonWidth: null
};
const CN = /* @__PURE__ */ v.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ m.createElement("div", {
  className: D("pgn__card-divider", e),
  ref: n,
  ...t
})), SN = 100, uf = /* @__PURE__ */ m.forwardRef(({
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
  } = v.useContext(Hr);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ m.createElement(Mi, {
    containerClassName: "pgn__card-section-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: s
  }, n && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
uf.propTypes = {
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
uf.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: SN,
  skeletonWidth: void 0
};
const _N = 18, cf = /* @__PURE__ */ m.forwardRef(({
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
  } = v.useContext(Hr), c = o || l, d = `pgn__card-footer ${c}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${c}${n ? "-stacked" : ""}`;
  return u ? /* @__PURE__ */ m.createElement("div", {
    className: D(t, d)
  }, /* @__PURE__ */ m.createElement(Mi, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: a
  })) : /* @__PURE__ */ m.createElement("div", {
    className: D(t, d),
    ref: s
  }, r && /* @__PURE__ */ m.createElement("div", {
    className: f
  }, r), e);
});
cf.propTypes = {
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
cf.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: _N,
  skeletonWidth: void 0
};
const tE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", AN = 140, TN = 41, pf = /* @__PURE__ */ m.forwardRef(({
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
  className: d,
  imageLoadingType: f,
  skeletonDuringImageLoad: h
}, w) => {
  const {
    orientation: y,
    isLoading: k
  } = v.useContext(Hr), [g, x] = v.useState(!1), [E, C] = v.useState(!1), S = `pgn__card-wrapper-image-cap ${y}`, _ = () => /* @__PURE__ */ m.createElement(Mi, {
    containerClassName: "pgn__card-image-cap-loader",
    height: y === "horizontal" ? "100%" : o,
    width: s
  }), T = () => /* @__PURE__ */ m.createElement(Mi, {
    containerClassName: "pgn__card-logo-cap",
    height: u,
    width: c
  });
  if (k)
    return /* @__PURE__ */ m.createElement("div", {
      className: D(S, d),
      "data-testid": "image-loader-wrapper"
    }, _(), l && T());
  const A = (I, N, M) => {
    const {
      currentTarget: L
    } = I;
    if (!N || L.src.endsWith(N)) {
      M === "imageCap" ? L.src = tE : C(!1);
      return;
    }
    L.src = N;
  };
  return /* @__PURE__ */ m.createElement("div", {
    className: D(d, S),
    ref: w
  }, !!e && /* @__PURE__ */ m.createElement(m.Fragment, null, h && !g && _(), /* @__PURE__ */ m.createElement("img", {
    className: D("pgn__card-image-cap", {
      show: g
    }),
    src: e,
    onError: (I) => A(I, t, "imageCap"),
    onLoad: () => x(!0),
    alt: n,
    loading: f
  })), !!r && /* @__PURE__ */ m.createElement(m.Fragment, null, h && !E && T(), /* @__PURE__ */ m.createElement("img", {
    className: D("pgn__card-logo-cap", {
      show: E
    }),
    src: r,
    onError: (I) => A(I, i, "logoCap"),
    onLoad: () => C(!0),
    alt: a,
    loading: f
  })));
});
pf.propTypes = {
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
  imageLoadingType: p.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: p.bool
};
pf.defaultProps = {
  src: void 0,
  fallbackSrc: tE,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: AN,
  logoSkeleton: !1,
  logoSkeletonHeight: TN,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
const df = /* @__PURE__ */ m.forwardRef(({
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
  } = v.useContext(Hr);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: s
  }, /* @__PURE__ */ m.createElement(Mi, null)) : /* @__PURE__ */ m.createElement("div", {
    className: D("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: s,
    ...o
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ m.createElement(je, {
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
df.propTypes = {
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
df.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const NN = ["light", "dark", "muted"], ff = /* @__PURE__ */ m.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: a,
  ...o
}, s) => {
  const l = i ? "muted" : a;
  return /* @__PURE__ */ m.createElement(EN, {
    orientation: e,
    isLoading: t,
    variant: l
  }, /* @__PURE__ */ m.createElement(sf, {
    ...o,
    className: D(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${l}`]: l
    }),
    ref: s,
    tabIndex: r ? 0 : -1
  }));
});
ff.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies which orientation to use. */
  orientation: p.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: p.bool,
  /** Specifies loading state. */
  isLoading: p.bool,
  /** Specifies `Card` style variant. */
  variant: p.oneOf(NN),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: p.bool
};
ff.defaultProps = {
  ...sf.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const tn = G0(ff, "Card", {
  muted: {
    deprType: ui.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
tn.Status = df;
tn.Header = lf;
tn.Divider = CN;
tn.Section = uf;
tn.Footer = cf;
tn.ImageCap = pf;
tn.Context = Hr;
tn.Body = Jy;
const co = /* @__PURE__ */ m.createContext();
class mf extends m.Component {
  constructor(n) {
    super(n);
    Ji(this, "open", () => {
      this.setState({
        isOpen: !0
      }), this.props.onOpen && this.props.onOpen(), this.props.onToggle && this.props.onToggle(!0);
    });
    Ji(this, "close", () => {
      this.setState({
        isOpen: !1
      }), this.props.onClose && this.props.onClose(), this.props.onToggle && this.props.onToggle(!1);
    });
    Ji(this, "toggle", () => {
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
      ...a
    } = this.props;
    return delete a.defaultOpen, delete a.onToggle, delete a.onOpen, delete a.onClose, /* @__PURE__ */ m.createElement("div", {
      ...a,
      className: D("pgn_collapsible", r, {
        "is-open": this.state.isOpen
      })
    }, /* @__PURE__ */ m.createElement(co.Provider, {
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
mf.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies classname to append to the base element. */
  className: p.string,
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: p.bool,
  /** Specifies whether `Collapsible` is open. */
  open: p.bool,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: p.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: p.func,
  /** Callback fired when `Collapsible` closes. */
  onClose: p.func,
  /** Unmount the component (remove it from the DOM) when it is collapsed. */
  unmountOnExit: p.bool
};
mf.defaultProps = {
  children: void 0,
  className: void 0,
  defaultOpen: !1,
  open: void 0,
  onToggle: void 0,
  onOpen: void 0,
  onClose: void 0,
  unmountOnExit: !0
};
var IN = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return h_(t, r);
  });
}, Tu = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return v_(t, r);
  });
}, hf = /* @__PURE__ */ function(e) {
  ao(t, e);
  function t() {
    for (var r, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r = e.call.apply(e, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(s, l) {
      var u = r.resolveArguments(s, l), c = u[0], d = u[1];
      r.removeClasses(c, "exit"), r.addClass(c, d ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(s, l);
    }, r.onEntering = function(s, l) {
      var u = r.resolveArguments(s, l), c = u[0], d = u[1], f = d ? "appear" : "enter";
      r.addClass(c, f, "active"), r.props.onEntering && r.props.onEntering(s, l);
    }, r.onEntered = function(s, l) {
      var u = r.resolveArguments(s, l), c = u[0], d = u[1], f = d ? "appear" : "enter";
      r.removeClasses(c, f), r.addClass(c, f, "done"), r.props.onEntered && r.props.onEntered(s, l);
    }, r.onExit = function(s) {
      var l = r.resolveArguments(s), u = l[0];
      r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(s);
    }, r.onExiting = function(s) {
      var l = r.resolveArguments(s), u = l[0];
      r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(s);
    }, r.onExited = function(s) {
      var l = r.resolveArguments(s), u = l[0];
      r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(s);
    }, r.resolveArguments = function(s, l) {
      return r.props.nodeRef ? [r.props.nodeRef.current, s] : [s, l];
    }, r.getClassNames = function(s) {
      var l = r.props.classNames, u = typeof l == "string", c = u && l ? l + "-" : "", d = u ? "" + c + s : l[s], f = u ? d + "-active" : l[s + "Active"], h = u ? d + "-done" : l[s + "Done"];
      return {
        baseClassName: d,
        activeClassName: f,
        doneClassName: h
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(i, a, o) {
    var s = this.getClassNames(a)[o + "ClassName"], l = this.getClassNames("enter"), u = l.doneClassName;
    a === "appear" && o === "done" && u && (s += " " + u), o === "active" && i && m0(i), s && (this.appliedClasses[a][o] = s, IN(i, s));
  }, n.removeClasses = function(i, a) {
    var o = this.appliedClasses[a], s = o.base, l = o.active, u = o.done;
    this.appliedClasses[a] = {}, s && Tu(i, s), l && Tu(i, l), u && Tu(i, u);
  }, n.render = function() {
    var i = this.props;
    i.classNames;
    var a = se(i, ["classNames"]);
    return /* @__PURE__ */ m.createElement(nn, U({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(m.Component);
hf.defaultProps = {
  classNames: ""
};
hf.propTypes = {};
function PN(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vf(e, t) {
  var n = function(a) {
    return t && v.isValidElement(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && v.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function ON(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var o, s = {};
  for (var l in t) {
    if (r[l])
      for (o = 0; o < r[l].length; o++) {
        var u = r[l][o];
        s[r[l][o]] = n(u);
      }
    s[l] = n(l);
  }
  for (o = 0; o < i.length; o++)
    s[i[o]] = n(i[o]);
  return s;
}
function wr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function FN(e, t) {
  return vf(e.children, function(n) {
    return v.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: wr(n, "appear", e),
      enter: wr(n, "enter", e),
      exit: wr(n, "exit", e)
    });
  });
}
function RN(e, t, n) {
  var r = vf(e.children), i = ON(t, r);
  return Object.keys(i).forEach(function(a) {
    var o = i[a];
    if (v.isValidElement(o)) {
      var s = a in t, l = a in r, u = t[a], c = v.isValidElement(u) && !u.props.in;
      l && (!s || c) ? i[a] = v.cloneElement(o, {
        onExited: n.bind(null, o),
        in: !0,
        exit: wr(o, "exit", e),
        enter: wr(o, "enter", e)
      }) : !l && s && !c ? i[a] = v.cloneElement(o, {
        in: !1
      }) : l && s && v.isValidElement(u) && (i[a] = v.cloneElement(o, {
        onExited: n.bind(null, o),
        in: u.props.in,
        exit: wr(o, "exit", e),
        enter: wr(o, "enter", e)
      }));
    }
  }), i;
}
var DN = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, MN = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gf = /* @__PURE__ */ function(e) {
  ao(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = a.handleExited.bind(PN(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: o,
      firstRender: !0
    }, a;
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
  }, t.getDerivedStateFromProps = function(i, a) {
    var o = a.children, s = a.handleExited, l = a.firstRender;
    return {
      children: l ? FN(i, s) : RN(i, o, s),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var o = vf(this.props.children);
    i.key in o || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(s) {
      var l = U({}, s.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, o = i.childFactory, s = se(i, ["component", "childFactory"]), l = this.state.contextValue, u = DN(this.state.children).map(o);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ m.createElement(Is.Provider, {
      value: l
    }, u) : /* @__PURE__ */ m.createElement(Is.Provider, {
      value: l
    }, /* @__PURE__ */ m.createElement(a, s, u));
  }, t;
}(m.Component);
gf.propTypes = {};
gf.defaultProps = MN;
class xf extends m.Component {
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
    return /* @__PURE__ */ m.createElement(hf, {
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
    }, (i) => /* @__PURE__ */ m.createElement("div", {
      style: {
        ...n,
        ...r[i],
        ...this.props.transitionStyles[i]
      }
    }, t));
  }
  render() {
    return /* @__PURE__ */ m.createElement(gf, {
      className: D("pgn-transition-replace-group", "position-relative", {
        "overflow-hidden": this.state.height !== null
      }, this.props.className),
      style: {
        height: this.state.height
      }
    }, m.Children.map(this.props.children, this.renderChildTransition, this));
  }
}
xf.propTypes = {
  /** Specifies an additional class for the base element */
  children: p.element,
  /** Duration of the element appearance transition. */
  enterDuration: p.number,
  /** Duration of the element dismiss transition. */
  exitDuration: p.number,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter: p.func,
  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering: p.func,
  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered: p.func,
  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit: p.func,
  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting: p.func,
  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited: p.func,
  /** An object that specifies transition styles. */
  transitionStyles: p.shape({
    entering: p.shape({}),
    entered: p.shape({}),
    exiting: p.shape({}),
    exited: p.shape({})
  }),
  /** Specifies class name to append to the `Transition`. */
  transitionClassNames: p.string
};
xf.defaultProps = {
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
function yf({
  children: e,
  transitionWrapper: t,
  tag: n,
  ...r
}) {
  const {
    isOpen: i,
    unmountOnExit: a
  } = v.useContext(co), o = /* @__PURE__ */ m.createElement(n, {
    key: "body",
    ...r
  }, e), s = i ? o : /* @__PURE__ */ m.createElement("div", {
    key: "empty"
  });
  return t ? /* @__PURE__ */ m.cloneElement(t, {}, s) : a ? /* @__PURE__ */ m.createElement(xf, null, s) : /* @__PURE__ */ m.createElement(x0, {
    in: i
  }, o);
}
yf.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies content's base element. */
  tag: p.string,
  /** Specifies transition element. */
  transitionWrapper: p.element
};
yf.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function Ef({
  tag: e,
  children: t,
  openOnly: n,
  closeOnly: r,
  onClick: i,
  onKeyDown: a,
  ...o
}) {
  const {
    isOpen: s,
    open: l,
    close: u,
    toggle: c
  } = v.useContext(co), d = v.useCallback((w) => {
    n ? l(w) : r ? u(w) : c(w);
  }, [n, l, r, u, c]), f = v.useCallback((w) => {
    i && i(w), d(w);
  }, [i, d]), h = v.useCallback((w) => {
    a && a(w), w.key === "Enter" && d(w);
  }, [a, d]);
  return /* @__PURE__ */ m.createElement(e, {
    ...o,
    onClick: f,
    onKeyDown: h,
    role: "button",
    tabIndex: 0,
    "aria-expanded": s
  }, t);
}
Ef.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies base element. */
  tag: p.oneOfType([p.string, p.elementType]),
  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: p.bool,
  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: p.bool,
  /** Callback fired when element gets clicked. */
  onClick: p.func,
  /** Callback fired when a key is pressed. */
  onKeyDown: p.func
};
Ef.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function wf({
  children: e,
  whenOpen: t,
  whenClosed: n
}) {
  const {
    isOpen: r
  } = v.useContext(co);
  return r && t || !r && n ? /* @__PURE__ */ m.createElement(m.Fragment, null, e) : null;
}
wf.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: p.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: p.bool
};
wf.defaultProps = {
  children: void 0,
  whenOpen: !1,
  whenClosed: !1
};
const LN = {
  basic: {
    iconWhenClosed: /* @__PURE__ */ m.createElement(je, {
      src: My
    }),
    iconWhenOpen: /* @__PURE__ */ m.createElement(je, {
      src: Dy
    })
  }
  // card and card-lg use the defaults specified in defaultProps
}, Fe = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    children: n,
    className: r,
    title: i,
    styling: a,
    iconWhenClosed: o,
    iconWhenOpen: s,
    ...l
  } = e, u = {
    iconWhenClosed: o,
    iconWhenOpen: s,
    ...LN[a]
  }, c = /* @__PURE__ */ m.isValidElement(i) ? i : /* @__PURE__ */ m.createElement("span", null, i);
  return /* @__PURE__ */ m.createElement(Fe.Advanced, {
    ...l,
    className: D(r, `collapsible-${a}`),
    ref: t
  }, /* @__PURE__ */ m.createElement(Fe.Trigger, {
    className: "collapsible-trigger"
  }, c, /* @__PURE__ */ m.createElement("span", {
    className: "collapsible-icon"
  }, /* @__PURE__ */ m.createElement(Fe.Visible, {
    whenClosed: !0
  }, u.iconWhenClosed), /* @__PURE__ */ m.createElement(Fe.Visible, {
    whenOpen: !0
  }, u.iconWhenOpen))), /* @__PURE__ */ m.createElement(Fe.Body, {
    className: "collapsible-body"
  }, n));
});
Fe.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen: p.bool,
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed: p.element,
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen: p.element,
  /** Callback fired when `Collapsible` closes. */
  onClose: p.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: p.func,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: p.func,
  /** Specifies whether `Collapsible` is open. */
  open: p.bool,
  /** Specifies style variant. */
  styling: p.oneOf(["basic", "card", "card-lg"]),
  /** Specifies title. */
  title: p.node.isRequired,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: p.bool
};
Fe.defaultProps = {
  className: void 0,
  defaultOpen: !1,
  iconWhenClosed: /* @__PURE__ */ m.createElement(je, {
    src: My
  }),
  iconWhenOpen: /* @__PURE__ */ m.createElement(je, {
    src: Dy
  }),
  onClose: void 0,
  onOpen: void 0,
  onToggle: void 0,
  open: void 0,
  styling: "card",
  unmountOnExit: !0
};
Fe.Advanced = mf;
Fe.Body = yf;
Fe.Trigger = Ef;
Fe.Visible = wf;
Fe.Context = co;
const jN = "Close";
function bf({
  children: e,
  footerNode: t,
  beforeBodyNode: n,
  afterBodyNode: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(ht, {
    ...i
  }, /* @__PURE__ */ m.createElement(ht.Header, null, /* @__PURE__ */ m.createElement(ht.Title, null, i.title)), n, /* @__PURE__ */ m.createElement(ht.Body, null, e), r, t && /* @__PURE__ */ m.createElement(ht.Footer, null, t));
}
bf.propTypes = {
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
bf.defaultProps = {
  isOpen: !1,
  hasCloseButton: !0,
  size: "md",
  variant: "default",
  closeLabel: jN,
  className: void 0,
  isFullscreenScroll: !1,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
const Zh = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
  if (!e.current || !e.current.style)
    return !1;
  const { children: i } = e.current;
  let a = 0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o].getBoundingClientRect();
    i[o].className.includes(r) ? a += s.width / 2 : a += n ? 0 : s.width;
  }
  return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, Yh = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, Jh = "pgn__annotation", ev = 50, nE = "warning", rE = "dark", Hs = ["dark", "warning", "success", "error"];
function iE(e) {
  return /* @__PURE__ */ m.createElement(xi, {
    ...e
  });
}
function kf({
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
  const u = m.useRef(), c = m.useRef(), d = (r || 0) - (e || 0), f = e < ev, h = r < ev, w = Hs.includes(n) ? n : nE, y = Hs.includes(a) ? a : rE, k = window.getComputedStyle(document.body).getPropertyValue("direction"), g = v.useCallback(() => {
    Zh(u, k, f, Jh), Zh(c, k, h, Jh);
  }, [k, f, h]);
  v.useEffect(() => {
    g();
    const E = new ResizeObserver(() => {
      g();
    }), C = u.current;
    return E.observe(C), () => C && E.unobserve(C);
  }, [g]);
  const x = (E) => /* @__PURE__ */ m.createElement("span", {
    className: "pgn__progress-hint",
    "data-testid": "progress-hint"
  }, E);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!t && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: Yh(e, k),
    ref: u
  }, !f && x(o), /* @__PURE__ */ m.createElement(Uh, {
    variant: w
  }, t), f && x(o)), /* @__PURE__ */ m.createElement(xi, null, /* @__PURE__ */ m.createElement(xi, {
    ...l,
    now: e,
    className: D(`pgn__progress-bar--${w}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  }), !!r && /* @__PURE__ */ m.createElement(xi, {
    now: d,
    className: `pgn__progress-bar--${y}`,
    srOnly: !0
  })), !!r && !!i && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: Yh(r, k),
    ref: c
  }, !h && x(s), /* @__PURE__ */ m.createElement(Uh, {
    arrowPlacement: "top",
    variant: y
  }, i), h && x(s)));
}
kf.propTypes = {
  /** Current value of progress. */
  now: p.number,
  /** Show label that represents visual percentage. */
  label: p.node,
  /** The `ProgressBar` style variant to use. */
  variant: p.oneOf(Hs),
  /** Specifies an additional `className` to add to the base element. */
  className: p.string,
  /** Threshold current value. */
  threshold: p.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: p.node,
  /** Variant for threshold value. */
  thresholdVariant: p.oneOf(Hs),
  /** Text near the progress annotation. */
  progressHint: p.node,
  /** Text near the threshold annotation. */
  thresholdHint: p.node
};
kf.defaultProps = {
  now: void 0,
  label: void 0,
  variant: nE,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: rE,
  progressHint: void 0,
  thresholdHint: void 0
};
iE.Annotated = kf;
const BN = /* @__PURE__ */ new Map([
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
function Li(e, t, n) {
  const r = zN(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && tv(r, "path", a), tv(r, "relativePath", a), r;
}
function zN(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = BN.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function tv(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const HN = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function VN(e) {
  return Pt(this, void 0, void 0, function* () {
    return Vs(e) && $N(e.dataTransfer) ? qN(e.dataTransfer, e.type) : UN(e) ? GN(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? WN(e) : [];
  });
}
function $N(e) {
  return Vs(e);
}
function UN(e) {
  return Vs(e) && Vs(e.target);
}
function Vs(e) {
  return typeof e == "object" && e !== null;
}
function GN(e) {
  return Qc(e.target.files).map((t) => Li(t));
}
function WN(e) {
  return Pt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Li(n));
  });
}
function qN(e, t) {
  return Pt(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Qc(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(XN));
      return nv(aE(r));
    }
    return nv(Qc(e.files).map((n) => Li(n)));
  });
}
function nv(e) {
  return e.filter((t) => HN.indexOf(t.name) === -1);
}
function Qc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function XN(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return rv(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? oE(t) : rv(e, t);
}
function aE(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? aE(n) : [n]
  ], []);
}
function rv(e, t) {
  return Pt(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Li(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Li(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function QN(e) {
  return Pt(this, void 0, void 0, function* () {
    return e.isDirectory ? oE(e) : KN(e);
  });
}
function oE(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => Pt(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(QN));
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
function KN(e) {
  return Pt(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Li(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var Nu = function(e, t) {
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
function iv(e) {
  return JN(e) || YN(e) || lE(e) || ZN();
}
function ZN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function JN(e) {
  if (Array.isArray(e)) return Kc(e);
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
function ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(n), !0).forEach(function(r) {
      sE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : av(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Za(e, t) {
  return nI(e) || tI(e, t) || lE(e, t) || eI();
}
function eI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lE(e, t) {
  if (e) {
    if (typeof e == "string") return Kc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kc(e, t);
  }
}
function Kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function tI(e, t) {
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
function nI(e) {
  if (Array.isArray(e)) return e;
}
var rI = typeof Nu == "function" ? Nu : Nu.default, uE = "file-invalid-type", cE = "file-too-large", pE = "file-too-small", iI = "too-many-files", Iu = {
  FileInvalidType: uE,
  FileTooLarge: cE,
  FileTooSmall: pE
}, aI = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: uE,
    message: "File type must be ".concat(r)
  };
}, sv = function(t) {
  return {
    code: cE,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, lv = function(t) {
  return {
    code: pE,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, oI = {
  code: iI,
  message: "Too many files"
};
function dE(e, t) {
  var n = e.type === "application/x-moz-file" || rI(e, t);
  return [n, n ? null : aI(t)];
}
function fE(e, t, n) {
  if (hr(e.size))
    if (hr(t) && hr(n)) {
      if (e.size > n) return [!1, sv(n)];
      if (e.size < t) return [!1, lv(t)];
    } else {
      if (hr(t) && e.size < t) return [!1, lv(t)];
      if (hr(n) && e.size > n) return [!1, sv(n)];
    }
  return [!0, null];
}
function hr(e) {
  return e != null;
}
function sI(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = dE(l, n), c = Za(u, 1), d = c[0], f = fE(l, r, i), h = Za(f, 1), w = h[0], y = s ? s(l) : null;
    return d && w && !y;
  });
}
function $s(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function zo(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function uv(e) {
  e.preventDefault();
}
function lI(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function uI(e) {
  return e.indexOf("Edge/") !== -1;
}
function cI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return lI(e) || uI(e);
}
function cn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    return t.some(function(s) {
      return !$s(r) && s && s.apply(void 0, [r].concat(a)), $s(r);
    });
  };
}
function pI() {
  return "showOpenFilePicker" in window;
}
function dI(e) {
  if (hr(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Za(n, 2), i = r[0], a = r[1], o = !0;
      return mE(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(hE)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Za(r, 2), a = i[0], o = i[1];
      return ov(ov({}, n), {}, sE({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function fI(e) {
  if (hr(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Za(n, 2), i = r[0], a = r[1];
      return [].concat(iv(t), [i], iv(a));
    }, []).filter(function(t) {
      return mE(t) || hE(t);
    }).join(",");
}
function mI(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function hI(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function mE(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function hE(e) {
  return /^.*\.[\w]+$/.test(e);
}
var vI = ["children"], gI = ["open"], xI = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], yI = ["refKey", "onChange", "onClick"];
function EI(e) {
  return kI(e) || bI(e) || vE(e) || wI();
}
function wI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kI(e) {
  if (Array.isArray(e)) return Zc(e);
}
function Pu(e, t) {
  return _I(e) || SI(e, t) || vE(e, t) || CI();
}
function CI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vE(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zc(e, t);
  }
}
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function SI(e, t) {
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
function _I(e) {
  if (Array.isArray(e)) return e;
}
function cv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cv(Object(n), !0).forEach(function(r) {
      Yc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Us(e, t) {
  if (e == null) return {};
  var n = AI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function AI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Cf = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.children, r = Us(e, vI), i = xE(r), a = i.open, o = Us(i, gI);
  return v.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ m.createElement(v.Fragment, null, n(Se(Se({}, o), {}, {
    open: a
  })));
});
Cf.displayName = "Dropzone";
var gE = {
  disabled: !1,
  getFilesFromEvent: VN,
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
Cf.defaultProps = gE;
Cf.propTypes = {
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
var Jc = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function xE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Se(Se({}, gE), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, d = t.onDragOver, f = t.onDrop, h = t.onDropAccepted, w = t.onDropRejected, y = t.onFileDialogCancel, k = t.onFileDialogOpen, g = t.useFsAccessApi, x = t.autoFocus, E = t.preventDropOnDocument, C = t.noClick, S = t.noKeyboard, _ = t.noDrag, T = t.noDragEventsBubbling, A = t.onError, I = t.validator, N = v.useMemo(function() {
    return fI(n);
  }, [n]), M = v.useMemo(function() {
    return dI(n);
  }, [n]), L = v.useMemo(function() {
    return typeof k == "function" ? k : pv;
  }, [k]), R = v.useMemo(function() {
    return typeof y == "function" ? y : pv;
  }, [y]), q = v.useRef(null), Q = v.useRef(null), Z = v.useReducer(TI, Jc), Y = Pu(Z, 2), P = Y[0], F = Y[1], z = P.isFocused, W = P.isFileDialogActive, V = v.useRef(typeof window < "u" && window.isSecureContext && g && pI()), Ne = function() {
    !V.current && W && setTimeout(function() {
      if (Q.current) {
        var X = Q.current.files;
        X.length || (F({
          type: "closeDialog"
        }), R());
      }
    }, 300);
  };
  v.useEffect(function() {
    return window.addEventListener("focus", Ne, !1), function() {
      window.removeEventListener("focus", Ne, !1);
    };
  }, [Q, W, R, V]);
  var pe = v.useRef([]), ne = function(X) {
    q.current && q.current.contains(X.target) || (X.preventDefault(), pe.current = []);
  };
  v.useEffect(function() {
    return E && (document.addEventListener("dragover", uv, !1), document.addEventListener("drop", ne, !1)), function() {
      E && (document.removeEventListener("dragover", uv), document.removeEventListener("drop", ne));
    };
  }, [q, E]), v.useEffect(function() {
    return !r && x && q.current && q.current.focus(), function() {
    };
  }, [q, x, r]);
  var J = v.useCallback(function(j) {
    A ? A(j) : console.error(j);
  }, [A]), Ee = v.useCallback(function(j) {
    j.preventDefault(), j.persist(), ce(j), pe.current = [].concat(EI(pe.current), [j.target]), zo(j) && Promise.resolve(i(j)).then(function(X) {
      if (!($s(j) && !T)) {
        var ve = X.length, we = ve > 0 && sI({
          files: X,
          accept: N,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: I
        }), Be = ve > 0 && !we;
        F({
          isDragAccept: we,
          isDragReject: Be,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(j);
      }
    }).catch(function(X) {
      return J(X);
    });
  }, [i, u, J, T, N, o, a, s, l, I]), De = v.useCallback(function(j) {
    j.preventDefault(), j.persist(), ce(j);
    var X = zo(j);
    if (X && j.dataTransfer)
      try {
        j.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return X && d && d(j), !1;
  }, [d, T]), dt = v.useCallback(function(j) {
    j.preventDefault(), j.persist(), ce(j);
    var X = pe.current.filter(function(we) {
      return q.current && q.current.contains(we);
    }), ve = X.indexOf(j.target);
    ve !== -1 && X.splice(ve, 1), pe.current = X, !(X.length > 0) && (F({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), zo(j) && c && c(j));
  }, [q, c, T]), bt = v.useCallback(function(j, X) {
    var ve = [], we = [];
    j.forEach(function(Be) {
      var pr = dE(Be, N), ln = Pu(pr, 2), Wi = ln[0], qi = ln[1], Xi = fE(Be, o, a), Vr = Pu(Xi, 2), Qi = Vr[0], Ki = Vr[1], Zi = I ? I(Be) : null;
      if (Wi && Qi && !Zi)
        ve.push(Be);
      else {
        var Yi = [qi, Ki];
        Zi && (Yi = Yi.concat(Zi)), we.push({
          file: Be,
          errors: Yi.filter(function(Dl) {
            return Dl;
          })
        });
      }
    }), (!s && ve.length > 1 || s && l >= 1 && ve.length > l) && (ve.forEach(function(Be) {
      we.push({
        file: Be,
        errors: [oI]
      });
    }), ve.splice(0)), F({
      acceptedFiles: ve,
      fileRejections: we,
      isDragReject: we.length > 0,
      type: "setFiles"
    }), f && f(ve, we, X), we.length > 0 && w && w(we, X), ve.length > 0 && h && h(ve, X);
  }, [F, s, N, o, a, l, f, h, w, I]), Ke = v.useCallback(function(j) {
    j.preventDefault(), j.persist(), ce(j), pe.current = [], zo(j) && Promise.resolve(i(j)).then(function(X) {
      $s(j) && !T || bt(X, j);
    }).catch(function(X) {
      return J(X);
    }), F({
      type: "reset"
    });
  }, [i, bt, J, T]), Ze = v.useCallback(function() {
    if (V.current) {
      F({
        type: "openDialog"
      }), L();
      var j = {
        multiple: s,
        types: M
      };
      window.showOpenFilePicker(j).then(function(X) {
        return i(X);
      }).then(function(X) {
        bt(X, null), F({
          type: "closeDialog"
        });
      }).catch(function(X) {
        mI(X) ? (R(X), F({
          type: "closeDialog"
        })) : hI(X) ? (V.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : J(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : J(X);
      });
      return;
    }
    Q.current && (F({
      type: "openDialog"
    }), L(), Q.current.value = null, Q.current.click());
  }, [F, L, R, g, bt, J, M, s]), Ft = v.useCallback(function(j) {
    !q.current || !q.current.isEqualNode(j.target) || (j.key === " " || j.key === "Enter" || j.keyCode === 32 || j.keyCode === 13) && (j.preventDefault(), Ze());
  }, [q, Ze]), an = v.useCallback(function() {
    F({
      type: "focus"
    });
  }, []), on = v.useCallback(function() {
    F({
      type: "blur"
    });
  }, []), ke = v.useCallback(function() {
    C || (cI() ? setTimeout(Ze, 0) : Ze());
  }, [C, Ze]), re = function(X) {
    return r ? null : X;
  }, ue = function(X) {
    return S ? null : re(X);
  }, de = function(X) {
    return _ ? null : re(X);
  }, ce = function(X) {
    T && X.stopPropagation();
  }, Rt = v.useMemo(function() {
    return function() {
      var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = j.refKey, ve = X === void 0 ? "ref" : X, we = j.role, Be = j.onKeyDown, pr = j.onFocus, ln = j.onBlur, Wi = j.onClick, qi = j.onDragEnter, Xi = j.onDragOver, Vr = j.onDragLeave, Qi = j.onDrop, Ki = Us(j, xI);
      return Se(Se(Yc({
        onKeyDown: ue(cn(Be, Ft)),
        onFocus: ue(cn(pr, an)),
        onBlur: ue(cn(ln, on)),
        onClick: re(cn(Wi, ke)),
        onDragEnter: de(cn(qi, Ee)),
        onDragOver: de(cn(Xi, De)),
        onDragLeave: de(cn(Vr, dt)),
        onDrop: de(cn(Qi, Ke)),
        role: typeof we == "string" && we !== "" ? we : "presentation"
      }, ve, q), !r && !S ? {
        tabIndex: 0
      } : {}), Ki);
    };
  }, [q, Ft, an, on, ke, Ee, De, dt, Ke, S, _, r]), bn = v.useCallback(function(j) {
    j.stopPropagation();
  }, []), sn = v.useMemo(function() {
    return function() {
      var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, X = j.refKey, ve = X === void 0 ? "ref" : X, we = j.onChange, Be = j.onClick, pr = Us(j, yI), ln = Yc({
        accept: N,
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
        onChange: re(cn(we, Ke)),
        onClick: re(cn(Be, bn)),
        tabIndex: -1
      }, ve, Q);
      return Se(Se({}, ln), pr);
    };
  }, [Q, n, s, Ke, r]);
  return Se(Se({}, P), {}, {
    isFocused: z && !r,
    getRootProps: Rt,
    getInputProps: sn,
    rootRef: q,
    inputRef: Q,
    open: re(Ze)
  });
}
function TI(e, t) {
  switch (t.type) {
    case "focus":
      return Se(Se({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Se(Se({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Se(Se({}, Jc), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Se(Se({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Se(Se({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Se(Se({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Se({}, Jc);
    default:
      return e;
  }
}
function pv() {
}
var NI = /* @__PURE__ */ new Map([
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
function po(e, t) {
  var n = II(e);
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
function II(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), i = NI.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var PI = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function OI(e) {
  return Pt(this, void 0, void 0, function() {
    return Vi(this, function(t) {
      return Gs(e) && FI(e.dataTransfer) ? [2, LI(e.dataTransfer, e.type)] : RI(e) ? [2, DI(e)] : Array.isArray(e) && e.every(function(n) {
        return "getFile" in n && typeof n.getFile == "function";
      }) ? [2, MI(e)] : [2, []];
    });
  });
}
function FI(e) {
  return Gs(e);
}
function RI(e) {
  return Gs(e) && Gs(e.target);
}
function Gs(e) {
  return typeof e == "object" && e !== null;
}
function DI(e) {
  return ep(e.target.files).map(function(t) {
    return po(t);
  });
}
function MI(e) {
  return Pt(this, void 0, void 0, function() {
    var t;
    return Vi(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, Promise.all(e.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return t = n.sent(), [2, t.map(function(r) {
            return po(r);
          })];
      }
    });
  });
}
function LI(e, t) {
  return Pt(this, void 0, void 0, function() {
    var n, r;
    return Vi(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (n = ep(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(jI))]) : [3, 2];
        case 1:
          return r = i.sent(), [2, dv(yE(r))];
        case 2:
          return [2, dv(ep(e.files).map(function(a) {
            return po(a);
          }))];
      }
    });
  });
}
function dv(e) {
  return e.filter(function(t) {
    return PI.indexOf(t.name) === -1;
  });
}
function ep(e) {
  if (e === null)
    return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function jI(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return fv(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? EE(t) : fv(e);
}
function yE(e) {
  return e.reduce(function(t, n) {
    return Ve(Ve([], Mm(t), !1), Mm(Array.isArray(n) ? yE(n) : [n]), !1);
  }, []);
}
function fv(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var n = po(t);
  return Promise.resolve(n);
}
function BI(e) {
  return Pt(this, void 0, void 0, function() {
    return Vi(this, function(t) {
      return [2, e.isDirectory ? EE(e) : zI(e)];
    });
  });
}
function EE(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var i = [];
    function a() {
      var o = this;
      t.readEntries(function(s) {
        return Pt(o, void 0, void 0, function() {
          var l, u, c;
          return Vi(this, function(d) {
            switch (d.label) {
              case 0:
                if (s.length) return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return l = d.sent(), n(l), [3, 4];
              case 3:
                return u = d.sent(), r(u), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                c = Promise.all(s.map(BI)), i.push(c), a(), d.label = 6;
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
function zI(e) {
  return Pt(this, void 0, void 0, function() {
    return Vi(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(i) {
          var a = po(i, e.fullPath);
          n(a);
        }, function(i) {
          r(i);
        });
      })];
    });
  });
}
function wE({
  message: e
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, e);
}
wE.propTypes = {
  message: p.oneOfType([p.string, p.element]).isRequired
};
function bE({
  errorMsgs: e,
  ...t
}) {
  return /* @__PURE__ */ m.createElement(In, {
    variant: "danger",
    icon: _T,
    className: "pgn__dropzone-generic-alert",
    ...t
  }, e.map((n) => /* @__PURE__ */ m.createElement("span", {
    key: n
  }, n)));
}
bE.propTypes = {
  errorMsgs: p.arrayOf(p.string).isRequired
};
function kE({
  percent: e,
  variant: t,
  name: n,
  onCancel: r
}) {
  return t === "spinner" ? /* @__PURE__ */ m.createElement(Ky, {
    animation: "border",
    "aria-live": "polite",
    screenReaderText: `Uploading ${n}, ${e}% done.`,
    "data-testid": "upload-spinner"
  }) : /* @__PURE__ */ m.createElement("div", {
    className: "w-50"
  }, /* @__PURE__ */ m.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ m.createElement($a, {
    id: "pgn.Dropzone.UploadProgress.uploadLabel",
    defaultMessage: "Uploading {filename}.",
    description: "A text that is shown near a progress bar during file upload in Dropzone component.",
    values: {
      filename: n
    }
  })), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100"
  }, /* @__PURE__ */ m.createElement(iE, {
    now: e,
    label: `${e}%`,
    variant: "success",
    className: "flex-grow-1",
    "data-testid": "upload-progress-bar"
  }), /* @__PURE__ */ m.createElement(qe, {
    variant: "tertiary",
    className: "ml-3",
    onClick: r
  }, /* @__PURE__ */ m.createElement($a, {
    id: "pgn.Dropzone.UploadProgress.cancelLabel",
    defaultMessage: "Cancel",
    description: "Label of a cancel button that is shown during file upload in Dropzone component."
  }))));
}
kE.propTypes = {
  variant: p.oneOf(["spinner", "bar"]).isRequired,
  percent: p.number.isRequired,
  name: p.string.isRequired,
  onCancel: p.func.isRequired
};
const HI = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, CE = (e) => Object.entries(e).reduce((t, n) => {
  const [r, i] = n;
  let a;
  return i.length > 0 ? a = `${i.join(", ").replaceAll(".", "").toUpperCase()}, ` : r.endsWith("/*") ? a = `${r.slice(0, -2)}, ` : a = `${r.split("/").pop().toUpperCase()}, `, t + a;
}, "").slice(0, -2), ci = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, dn = {
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
function Ws({
  accept: e,
  minSize: t,
  maxSize: n
}) {
  const r = jr(), i = () => {
    let a, o;
    if (e) {
      const s = CE(e), l = s.lastIndexOf(",");
      a = r.formatMessage(dn.fileTypeRestriction, {
        count: l === -1 ? 1 : 2,
        firstPart: l === -1 ? s : s.slice(0, l),
        secondPart: l !== -1 && s.slice(l + 1)
      });
    }
    return t && n && Number.isFinite(n) ? o = r.formatMessage(dn.fileSizeBetween, {
      sizeMin: ci(t),
      sizeMax: ci(n)
    }) : n && Number.isFinite(n) ? o = r.formatMessage(dn.fileSizeMax, {
      sizeMax: ci(n)
    }) : t && (o = r.formatMessage(dn.fileSizeMin, {
      sizeMin: ci(t)
    })), a && o ? `${a} (${o})` : a || o;
  };
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone__upload-icon-wrapper"
  }, /* @__PURE__ */ m.createElement(je, {
    src: ST,
    className: "pgn__dropzone__upload-icon"
  })), /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement($a, {
    id: "pgn.Dropzone.DefaultContent.label",
    description: "A text that appears as a label for input of Dropzone component.",
    defaultMessage: "Drag and drop your file here or click to upload."
  })), [e, t, n].some((a) => a) && /* @__PURE__ */ m.createElement("p", {
    className: "pgn__dropzone__upload-restriction-message"
  }, i()));
}
Ws.propTypes = {
  accept: p.objectOf(p.arrayOf(p.string)),
  maxSize: p.number,
  minSize: p.number
};
Ws.defaultProps = {
  accept: void 0,
  maxSize: void 0,
  minSize: void 0
};
function Sf({
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
  ...d
}) {
  const [f, h] = v.useState(!1), [w, y] = v.useState([]), [k, g] = v.useState(0), [x, E] = v.useState(void 0), [C, S] = v.useState(void 0), _ = jr(), {
    uploadError: T,
    invalidSizeLess: A,
    invalidSizeMore: I,
    invalidType: N,
    multipleDragged: M
  } = a, L = async (ne) => {
    w && y([]);
    const J = await OI(ne);
    J && J.length > 1 && h(!0);
  }, R = () => {
    f && h(!1);
  }, q = (ne) => {
    f ? h(!1) : y(ne[0].errors.map((J) => {
      switch (J.code) {
        case Iu.FileTooLarge:
          return I || _.formatMessage(dn.invalidSizeMore, {
            size: ci(r)
          });
        case Iu.FileTooSmall:
          return A || _.formatMessage(dn.invalidSizeLess, {
            size: ci(n)
          });
        case Iu.FileInvalidType:
          return N || _.formatMessage(dn.invalidType, {
            count: HI(t) ? 2 : 1,
            typeString: CE(t)
          });
        default:
          return _.formatMessage(dn.unexpectedValidationError);
      }
    }));
  }, Q = (ne) => {
    const J = Math.round(ne.loaded * 100 / ne.total);
    g(J), u(J, ne);
  }, Z = (ne) => {
    ne.code !== "ERR_CANCELED" && (g(0), y([T || _.formatMessage(dn.uploadError)]));
  }, Y = (ne) => {
    const J = new AbortController();
    S(J);
    const Ee = {
      onUploadProgress: Q,
      signal: J.signal
    };
    l({
      fileData: ne,
      requestConfig: Ee,
      handleError: Z
    });
  }, P = async (ne) => {
    const J = ne[0];
    if (i) {
      const De = await i(J);
      if (De) {
        y([De]);
        return;
      }
    }
    w && y([]);
    const Ee = new FormData();
    Ee.append("file", J), E(J.name), Y(Ee);
  }, F = () => {
    C.abort(), g(0), c();
  }, {
    getRootProps: z,
    getInputProps: W,
    isDragActive: V,
    isDragReject: Ne
  } = xE({
    multiple: !1,
    maxFiles: 1,
    maxSize: r,
    minSize: n,
    onDragLeave: R,
    onDragEnter: L,
    onDropRejected: q,
    onDropAccepted: P,
    accept: t,
    disabled: k && k !== 100
  }), pe = () => f ? /* @__PURE__ */ m.createElement(wE, {
    message: M || _.formatMessage(dn.multipleDragged)
  }) : w.length > 0 ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(bE, {
    errorMsgs: w
  }), s || /* @__PURE__ */ m.createElement(Ws, {
    minSize: n,
    maxSize: r,
    accept: t
  })) : k && k !== 100 ? /* @__PURE__ */ m.createElement(kE, {
    variant: o,
    percent: k,
    name: x,
    onCancel: F
  }) : s || /* @__PURE__ */ m.createElement(Ws, {
    minSize: n,
    maxSize: r,
    accept: t
  });
  return /* @__PURE__ */ m.createElement("div", {
    "data-testid": "dropzone-container",
    ...z({
      className: D("pgn__dropzone", e, {
        "pgn__dropzone-validation-error": f || w.length > 0 || Ne,
        "pgn__dropzone-active": V && !Ne
      })
    }),
    ...d
  }, /* @__PURE__ */ m.createElement("input", {
    ...W()
  }), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, pe()));
}
Sf.defaultProps = {
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
Sf.propTypes = {
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
const SE = 1e3, VI = 0.01, _E = (e) => {
  const t = document.createElement(e.tagName);
  return t.setAttribute(
    "style",
    `line-height: ${SE}px; display: inline-block; word-break: break-word;`
  ), t;
}, pi = (e, t = !1, n = "", r = []) => {
  const a = `${t ? " " : ""}${n}`;
  if (!r.length)
    return [document.createTextNode(`${e.trim()}${a}`)];
  const o = [];
  return r.forEach((s, l) => {
    let u = e.slice(s.start, s.end);
    if (!u.length)
      return;
    if (l === r.length - 1 && n && (u = u.trimEnd()), !s.type) {
      o.push(document.createTextNode(u));
      return;
    }
    const c = document.createElement(s.type);
    Array.isArray(s.children) ? pi(u, !1, "", s.children).forEach((d) => {
      c.appendChild(d);
    }) : c.appendChild(document.createTextNode(u)), Object.keys(s.props || {}).forEach((d) => {
      d !== "children" && c.setAttribute(d, s.props[d]);
    }), o.push(c);
  }), a && o.push(document.createTextNode(a)), o;
}, AE = (e, t) => {
  const n = Math.floor(e.length * t);
  return e.slice(0, n);
};
function TE(e, t = []) {
  let n = "";
  return e.forEach((r) => {
    var u;
    const i = typeof r == "string", a = typeof ((u = r == null ? void 0 : r.props) == null ? void 0 : u.children) == "string", o = i || a ? null : [], s = n.length;
    i ? n += r : a ? n += r.props.children : n += TE(
      r.props.children.constructor === Object ? [r.props.children] : r.props.children,
      o
    );
    const l = n.length;
    t.push({
      type: i ? null : r.type,
      props: r == null ? void 0 : r.props,
      start: s,
      end: l,
      children: o
    });
  }), n;
}
const $I = (e, t, { lines: n, whiteSpace: r, ellipsis: i }) => {
  const a = SE * Number(n), o = _E(t), s = [], l = typeof e == "string" ? e : TE(e, s);
  let u = l, c = 1;
  t.append(o);
  const d = pi(l, !1, "", s);
  for (let h = 0; h < d.length; h++)
    o.appendChild(d[h]);
  let f = o.scrollHeight;
  if (a >= f)
    return o.parentNode.removeChild(o), [pi(u, !1, "", s), l];
  for (; f > a; ) {
    c -= VI, u = AE(l, c);
    const h = pi(u, r, i, s);
    o.innerHTML = "";
    for (let w = 0; w < h.length; w++)
      o.appendChild(h[w]);
    f = o.scrollHeight;
  }
  return o.parentNode.removeChild(o), [pi(u, r, i, s), l];
};
var UI = {
  cropText: AE,
  truncateLines: $I,
  constructChildren: pi,
  createCopyElement: _E
};
const GI = 1, WI = "...", qI = "div";
function _f({
  children: e,
  lines: t,
  ellipsis: n,
  elementType: r,
  className: i,
  whiteSpace: a,
  onTruncate: o
}) {
  const s = v.useRef(), {
    width: l
  } = xN();
  return v.useLayoutEffect(() => {
    if (s.current) {
      const [u, c] = UI.truncateLines(e, s.current, {
        ellipsis: n,
        whiteSpace: a,
        lines: t
      });
      s.current.setAttribute("title", c), s.current.setAttribute("aria-label", c), s.current.innerHTML = "", u.forEach((d) => {
        s.current.appendChild(d);
      }), o && o(u);
    }
  }, [e, n, t, o, a, l]), /* @__PURE__ */ m.createElement(r, {
    ref: s,
    className: i
  });
}
_f.propTypes = {
  /** The expected text to which the ellipsis would be applied. */
  children: p.string.isRequired,
  /** The number of lines the text to be truncated to. */
  lines: p.oneOfType([p.string, p.number]),
  /** Text content for the ellipsis - will appear after the truncated lines. */
  ellipsis: p.oneOfType([p.string, p.number, p.node]),
  /** Adds the whitespace from before the ellipsis. */
  whiteSpace: p.bool,
  /** Custom html element for truncated text. */
  elementType: p.string,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Callback fired when a text truncating */
  onTruncate: p.func
};
_f.defaultProps = {
  lines: GI,
  ellipsis: WI,
  whiteSpace: !1,
  elementType: qI,
  className: void 0,
  onTruncate: void 0
};
function NE() {
  return v.useEffect(() => {
    console.log("Please use Truncate.Deprecated until a replacement is created");
  }, []), null;
}
NE.Deprecated = _f;
function XI() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function mv(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": XI()
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
const QI = ({
  questionText: e,
  explanation: t,
  onQuestionTextChange: n,
  onExplanationChange: r
}) => /* @__PURE__ */ b.jsxs("div", { className: "content-tab", children: [
  /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
    /* @__PURE__ */ b.jsx(B.Label, { children: "Question Text" }),
    /* @__PURE__ */ b.jsx(
      B.Control,
      {
        as: "textarea",
        rows: 4,
        value: e,
        onChange: (i) => n(i.target.value),
        placeholder: "Enter the question or instructions for students"
      }
    ),
    /* @__PURE__ */ b.jsx(B.Text, { children: "The main question or instructions displayed to students" })
  ] }),
  /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
    /* @__PURE__ */ b.jsx(B.Label, { children: "Explanation (Optional)" }),
    /* @__PURE__ */ b.jsx(
      B.Control,
      {
        as: "textarea",
        rows: 4,
        value: t,
        onChange: (i) => r(i.target.value),
        placeholder: "Enter explanation text shown after completion"
      }
    ),
    /* @__PURE__ */ b.jsx(B.Text, { children: "Additional explanation or learning objectives shown to students after they complete the problem" })
  ] })
] }), KI = ({
  imageUrl: e,
  uploading: t,
  onImageUpload: n,
  onOpenAssetPicker: r
}) => /* @__PURE__ */ b.jsxs("div", { children: [
  e ? /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ b.jsx(B.Label, { children: "Current Image" }),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        style: {
          border: "2px solid #dee2e6",
          borderRadius: "4px",
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          textAlign: "center"
        },
        children: /* @__PURE__ */ b.jsx(
          "img",
          {
            src: e,
            alt: "Annotation background image",
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
    /* @__PURE__ */ b.jsx("small", { className: "text-muted d-block mt-2", children: e })
  ] }) : /* @__PURE__ */ b.jsxs(In, { variant: "warning", className: "mb-4", children: [
    /* @__PURE__ */ b.jsx("strong", { children: "No image selected." }),
    " Please upload or select an image to continue."
  ] }),
  /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-4", children: [
    /* @__PURE__ */ b.jsx(B.Label, { children: "Upload New Image" }),
    /* @__PURE__ */ b.jsx(
      Sf,
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
    /* @__PURE__ */ b.jsx(B.Text, { className: "text-muted", children: "Maximum file size: 5MB. Supported formats: JPG, PNG, GIF, WebP" })
  ] }),
  /* @__PURE__ */ b.jsxs("div", { children: [
    /* @__PURE__ */ b.jsx(B.Label, { children: "Or Choose Existing Image" }),
    /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsx(
      qe,
      {
        variant: "outline-primary",
        onClick: r,
        disabled: t,
        children: "Choose from Course Images"
      }
    ) }),
    /* @__PURE__ */ b.jsx(B.Text, { className: "text-muted mt-2", children: "Browse images already uploaded to this course" })
  ] })
] }), ZI = 5, YI = ({
  imageUrl: e,
  zone: t,
  onChange: n
}) => {
  const r = v.useRef(null), i = v.useRef(null), [a, o] = v.useState({ width: 0, height: 0 }), [s, l] = v.useState({ width: 0, height: 0 }), [u, c] = v.useState(1), [d, f] = v.useState({ x: 0, y: 0 }), [h, w] = v.useState(null), [y, k] = v.useState("quick-point"), g = () => {
    if (i.current) {
      const N = i.current.offsetWidth, M = i.current.offsetHeight, L = i.current.naturalWidth, R = i.current.naturalHeight;
      o({
        width: N,
        height: M
      }), l({
        width: L,
        height: R
      }), c(N / L), f({ x: 0, y: 0 });
    }
  }, x = (N, M, L) => u === 0 ? { x: 0, y: 0, r: 0 } : {
    x: N / u,
    y: M / u,
    r: L / u
  }, E = (N, M, L) => ({
    x: N * u,
    y: M * u,
    r: L * u
  }), C = (N) => {
    if (!i.current) return { x: 0, y: 0 };
    const M = i.current.getBoundingClientRect();
    return {
      x: N.clientX - M.left,
      y: N.clientY - M.top
    };
  }, S = (N) => {
    const M = C(N);
    if (y === "quick-point") {
      const L = ZI / 100 * s.width, R = x(M.x, M.y, 0);
      n([R.x, R.y, L]);
    } else
      w({
        isDrawing: !0,
        centerX: M.x,
        centerY: M.y,
        radius: 0
      });
  }, _ = (N) => {
    if (!(h != null && h.isDrawing)) return;
    const M = C(N), L = M.x - h.centerX, R = M.y - h.centerY, q = Math.sqrt(L * L + R * R);
    w({
      ...h,
      radius: q
    });
  }, T = () => {
    if (!(h != null && h.isDrawing)) return;
    if (h.radius < 10) {
      w(null);
      return;
    }
    const N = x(h.centerX, h.centerY, h.radius);
    n([N.x, N.y, N.r]), w(null);
  }, A = a.width > 0 && t.radius > 0 ? E(t.x, t.y, t.radius) : null, I = "#0075b4";
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs("div", { style: {
      marginBottom: "12px",
      padding: "12px",
      backgroundColor: "#f8f9fa",
      border: "1px solid #dee2e6",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ b.jsx("div", { style: { marginBottom: "8px", fontWeight: 600, fontSize: "0.875rem" }, children: "Zone Drawing Mode" }),
      /* @__PURE__ */ b.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ b.jsxs("label", { style: {
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "0.875rem"
        }, children: [
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "radio",
              name: "drawing-mode",
              value: "quick-point",
              checked: y === "quick-point",
              onChange: () => k("quick-point"),
              style: { marginRight: "6px" }
            }
          ),
          /* @__PURE__ */ b.jsxs("span", { children: [
            /* @__PURE__ */ b.jsx("strong", { children: "Quick Point" }),
            " - Click to place zone (5% radius)"
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("label", { style: {
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "0.875rem"
        }, children: [
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "radio",
              name: "drawing-mode",
              value: "draw-custom",
              checked: y === "draw-custom",
              onChange: () => k("draw-custom"),
              style: { marginRight: "6px" }
            }
          ),
          /* @__PURE__ */ b.jsxs("span", { children: [
            /* @__PURE__ */ b.jsx("strong", { children: "Draw Custom" }),
            " - Click & drag to set size"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ b.jsxs(
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
          userSelect: "none"
        },
        onMouseDown: S,
        onMouseMove: _,
        onMouseUp: T,
        onMouseLeave: T,
        children: [
          /* @__PURE__ */ b.jsx(
            "img",
            {
              ref: i,
              src: e,
              alt: "Drop zone image",
              style: {
                display: "block",
                width: "100%",
                height: "auto"
              },
              onLoad: g,
              draggable: !1
            }
          ),
          a.width > 0 && /* @__PURE__ */ b.jsxs(
            "svg",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: `${a.width}px`,
                height: `${a.height}px`,
                pointerEvents: "none"
              },
              viewBox: `0 0 ${a.width} ${a.height}`,
              children: [
                A && /* @__PURE__ */ b.jsx(
                  "circle",
                  {
                    cx: A.x,
                    cy: A.y,
                    r: A.r,
                    fill: I,
                    fillOpacity: 0.25,
                    stroke: I,
                    strokeWidth: 3
                  }
                ),
                (h == null ? void 0 : h.isDrawing) && h.radius > 0 && /* @__PURE__ */ b.jsx(
                  "circle",
                  {
                    cx: h.centerX,
                    cy: h.centerY,
                    r: h.radius,
                    fill: "#0075b4",
                    fillOpacity: 0.25,
                    stroke: "#0075b4",
                    strokeWidth: 3,
                    strokeDasharray: "5,5"
                  }
                ),
                A && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
                  /* @__PURE__ */ b.jsx(
                    "line",
                    {
                      x1: A.x - 10,
                      y1: A.y,
                      x2: A.x + 10,
                      y2: A.y,
                      stroke: I,
                      strokeWidth: 2
                    }
                  ),
                  /* @__PURE__ */ b.jsx(
                    "line",
                    {
                      x1: A.x,
                      y1: A.y - 10,
                      x2: A.x,
                      y2: A.y + 10,
                      stroke: I,
                      strokeWidth: 2
                    }
                  )
                ] })
              ]
            }
          ),
          !h && (!A || A.r === 0) && /* @__PURE__ */ b.jsx(
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
              children: y === "quick-point" ? "Click to place zone" : "Click and drag to create a drop zone"
            }
          )
        ]
      }
    )
  ] });
}, JI = ({
  mainContent: e,
  sidebar: t
}) => /* @__PURE__ */ b.jsxs("div", { className: "editProblemView d-flex flex-row flex-nowrap justify-content-end", children: [
  /* @__PURE__ */ b.jsx("span", { className: "flex-grow-1 mb-5", children: e }),
  /* @__PURE__ */ b.jsx("span", { className: "editProblemView-settingsColumn", children: t })
] }), eP = ({
  title: e,
  subtitle: t,
  onTitleChange: n
}) => {
  const [r, i] = v.useState(!1), [a, o] = v.useState(e), s = () => {
    i(!0), o(e);
  }, l = () => {
    n && a.trim() && n(a.trim()), i(!1);
  }, u = () => {
    o(e), i(!1);
  }, c = (d) => {
    d.key === "Enter" ? l() : d.key === "Escape" && u();
  };
  return r ? /* @__PURE__ */ b.jsx("div", { className: "d-flex flex-row align-items-center mt-1", children: /* @__PURE__ */ b.jsx(
    "input",
    {
      type: "text",
      className: "form-control",
      value: a,
      onChange: (d) => o(d.target.value),
      onKeyDown: c,
      onBlur: l,
      autoFocus: !0
    }
  ) }) : /* @__PURE__ */ b.jsxs("div", { className: "d-flex flex-row align-items-center mt-1", children: [
    /* @__PURE__ */ b.jsx(NE.Deprecated, { children: e }),
    t && /* @__PURE__ */ b.jsx("span", { className: "ml-2 text-gray-500", children: t }),
    n && /* @__PURE__ */ b.jsx(
      Ui,
      {
        src: CT,
        iconAs: je,
        alt: "Edit title",
        onClick: s,
        size: "sm",
        className: "mx-2"
      }
    )
  ] });
}, tP = ({
  title: e,
  subtitle: t,
  onClose: n,
  onTitleChange: r
}) => /* @__PURE__ */ b.jsx(ht.Header, { className: "shadow-sm zindex-10", children: /* @__PURE__ */ b.jsxs("div", { className: "d-flex flex-row justify-content-between", children: [
  /* @__PURE__ */ b.jsx("h2", { className: "h3 col pl-0", children: /* @__PURE__ */ b.jsx(
    eP,
    {
      title: e,
      subtitle: t,
      onTitleChange: r
    }
  ) }),
  /* @__PURE__ */ b.jsx(
    Ui,
    {
      src: Gd,
      iconAs: je,
      onClick: n,
      alt: "Close"
    }
  )
] }) }), nP = ({
  viewMode: e,
  onSave: t,
  onCancel: n,
  saveDisabled: r = !1,
  onSavePair: i,
  onBackToList: a,
  savePairDisabled: o = !1,
  editingType: s
}) => /* @__PURE__ */ b.jsx(ht.Footer, { className: "shadow-sm", children: /* @__PURE__ */ b.jsx(Ds, { children: e === "list" ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
  /* @__PURE__ */ b.jsx(qe, { variant: "tertiary", onClick: n, children: "Cancel" }),
  /* @__PURE__ */ b.jsx(qe, { onClick: t, disabled: r, children: "Save Changes" })
] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
  /* @__PURE__ */ b.jsx(qe, { variant: "tertiary", onClick: a, children: "Back to List" }),
  /* @__PURE__ */ b.jsx(qe, { onClick: i, disabled: o, children: s === "label" ? "Save Label" : s === "zone" ? "Save Zone" : "Save" })
] }) }) }), hv = ({
  children: e,
  none: t = !1,
  isCardCollapsibleOpen: n,
  summary: r
}) => n || r ? /* @__PURE__ */ b.jsxs(tn.Section, { className: "pt-0", children: [
  /* @__PURE__ */ b.jsx(Fe.Advanced, { open: !n, children: /* @__PURE__ */ b.jsx(Fe.Body, { className: "collapsible-body", children: /* @__PURE__ */ b.jsx("span", { className: `small ${t ? "text-gray-500" : "text-primary-500"}`, children: r }) }) }),
  /* @__PURE__ */ b.jsx(Fe.Advanced, { open: n, children: /* @__PURE__ */ b.jsx(Fe.Body, { className: "collapsible-body text-primary-500 x-small", children: e }) })
] }) : null, rP = (e) => {
  const [t, n] = v.useState(
    e || !1
  );
  return {
    isCardCollapsibleOpen: t,
    toggleCardCollapse: () => {
      n(e ? !0 : !t);
    }
  };
}, IE = ({
  title: e,
  className: t = "",
  extraSections: n = [],
  children: r,
  summary: i,
  hasExpandableTextArea: a = !1,
  none: o
}) => {
  const { isCardCollapsibleOpen: s, toggleCardCollapse: l } = rP(a);
  return /* @__PURE__ */ b.jsxs(tn, { className: `${t} settingsOption border border-light-700 shadow-none`, children: [
    /* @__PURE__ */ b.jsx(tn.Section, { className: "settingsCardTitleSection", children: /* @__PURE__ */ b.jsx(
      Fe.Advanced,
      {
        open: s,
        onToggle: l,
        children: /* @__PURE__ */ b.jsxs(Fe.Trigger, { className: "collapsible-trigger d-flex", children: [
          /* @__PURE__ */ b.jsx("span", { className: "flex-grow-1 text-primary-500 x-small", children: e }),
          /* @__PURE__ */ b.jsx(Fe.Visible, { whenClosed: !0, children: /* @__PURE__ */ b.jsx(je, { src: Ly }) }),
          /* @__PURE__ */ b.jsx(Fe.Visible, { whenOpen: !0, children: /* @__PURE__ */ b.jsx(je, { src: jy }) })
        ] })
      }
    ) }, `settingsOption-${e}-header`),
    /* @__PURE__ */ b.jsx(
      hv,
      {
        none: o,
        isCardCollapsibleOpen: s,
        summary: i,
        children: r
      },
      `settingsOption-${e}-children`
    ),
    n.map((u, c) => /* @__PURE__ */ b.jsxs(m.Fragment, { children: [
      s && /* @__PURE__ */ b.jsx("hr", {}),
      /* @__PURE__ */ b.jsx(
        hv,
        {
          isCardCollapsibleOpen: s,
          summary: "",
          children: u.children
        }
      )
    ] }, `settingsOption-${e}-${c}`))
  ] });
}, iP = ({
  label: e,
  onEdit: t,
  onDelete: n
}) => {
  const r = {
    normal: "Badge",
    dot: "Dot Marker",
    cross: "Cross Marker"
  }[e.type] || e.type;
  return /* @__PURE__ */ b.jsxs("div", { className: "label-item border rounded p-3 mb-2 d-flex justify-content-between align-items-center", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "label-item-info flex-grow-1", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "d-flex align-items-center mb-1", children: [
        /* @__PURE__ */ b.jsxs("strong", { className: "mr-2", children: [
          '"',
          e.label,
          '"'
        ] }),
        /* @__PURE__ */ b.jsx("span", { className: "badge badge-secondary", children: r })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "text-muted small", children: [
        /* @__PURE__ */ b.jsxs("span", { className: "mr-3", children: [
          "ID: ",
          e.id
        ] }),
        /* @__PURE__ */ b.jsxs("span", { className: "mr-3", children: [
          "Size: ",
          e.width,
          "×",
          e.height,
          "px"
        ] }),
        /* @__PURE__ */ b.jsxs("span", { children: [
          "Position: (",
          e.startX,
          ", ",
          e.startY,
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "label-item-actions d-flex gap-2", children: [
      /* @__PURE__ */ b.jsx(
        qe,
        {
          variant: "link",
          size: "sm",
          onClick: () => t(e.id),
          iconBefore: Ry,
          children: "Edit"
        }
      ),
      /* @__PURE__ */ b.jsx(
        qe,
        {
          variant: "outline-danger",
          size: "sm",
          onClick: () => n(e.id),
          iconBefore: Fy,
          children: "Delete"
        }
      )
    ] })
  ] });
}, aP = ({
  zone: e,
  onEdit: t,
  onDelete: n
}) => /* @__PURE__ */ b.jsxs("div", { className: "zone-item border rounded p-3 mb-2 d-flex justify-content-between align-items-center", children: [
  /* @__PURE__ */ b.jsxs("div", { className: "zone-item-info flex-grow-1", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "d-flex align-items-center mb-1", children: [
      /* @__PURE__ */ b.jsxs("strong", { className: "mr-2", children: [
        '"',
        e.description,
        '"'
      ] }),
      /* @__PURE__ */ b.jsxs("span", { className: "badge badge-primary", children: [
        "Correct Answer: ",
        e.correctAnswer
      ] })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "text-muted small", children: [
      /* @__PURE__ */ b.jsxs("span", { className: "mr-3", children: [
        "ID: ",
        e.id
      ] }),
      /* @__PURE__ */ b.jsxs("span", { className: "mr-3", children: [
        "Position: (",
        e.x,
        ", ",
        e.y,
        ")"
      ] }),
      /* @__PURE__ */ b.jsxs("span", { children: [
        "Radius: ",
        e.radius,
        "px"
      ] })
    ] })
  ] }),
  /* @__PURE__ */ b.jsxs("div", { className: "zone-item-actions d-flex gap-2", children: [
    /* @__PURE__ */ b.jsx(
      qe,
      {
        variant: "link",
        size: "sm",
        onClick: () => t(e.id),
        iconBefore: Ry,
        children: "Edit"
      }
    ),
    /* @__PURE__ */ b.jsx(
      qe,
      {
        variant: "outline-danger",
        size: "sm",
        onClick: () => n(e.id),
        iconBefore: Fy,
        children: "Delete"
      }
    )
  ] })
] }), oP = ({
  questionText: e,
  explanation: t,
  onQuestionTextChange: n,
  onExplanationChange: r,
  runtime: i,
  courseId: a,
  backgroundImageUrl: o,
  backgroundImageWidth: s,
  backgroundImageHeight: l,
  onBackgroundImageUrlChange: u,
  onBackgroundImageWidthChange: c,
  onBackgroundImageHeightChange: d,
  onOpenAssetPicker: f,
  labels: h,
  onAddLabel: w,
  onEditLabel: y,
  onDeleteLabel: k,
  zones: g,
  onAddZone: x,
  onEditZone: E,
  onDeleteZone: C
}) => {
  const [S, _] = v.useState(!1), T = async (A) => {
    var M;
    const I = ((M = A.asset) == null ? void 0 : M.url) || A.url;
    u(I);
    const N = new Image();
    N.onload = () => {
      c(N.naturalWidth), d(N.naturalHeight);
    }, N.src = I;
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "main-content-area", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ b.jsx("div", { className: "h4 mb-3", children: "Problem Content" }),
      /* @__PURE__ */ b.jsx(
        QI,
        {
          questionText: e,
          explanation: t,
          onQuestionTextChange: n,
          onExplanationChange: r
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ b.jsx("div", { className: "h4 mb-3", children: "Background Image" }),
      /* @__PURE__ */ b.jsx(
        KI,
        {
          imageUrl: o,
          uploading: S,
          onImageUpload: T,
          onOpenAssetPicker: f
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
        /* @__PURE__ */ b.jsx("div", { className: "h4", children: "Labels" }),
        /* @__PURE__ */ b.jsx(
          qe,
          {
            variant: "primary",
            onClick: w,
            iconBefore: $h,
            children: "Add Label"
          }
        )
      ] }),
      h.length === 0 ? /* @__PURE__ */ b.jsxs("div", { className: "text-muted text-center p-4 border rounded", children: [
        /* @__PURE__ */ b.jsx("p", { children: "No labels defined yet." }),
        /* @__PURE__ */ b.jsx("p", { className: "small", children: "Labels are the draggable items that students place on the image." }),
        /* @__PURE__ */ b.jsx(qe, { variant: "outline-primary", onClick: w, children: "Create Your First Label" })
      ] }) : /* @__PURE__ */ b.jsx("div", { className: "labels-list", children: h.map((A) => /* @__PURE__ */ b.jsx(
        iP,
        {
          label: A,
          onEdit: y,
          onDelete: k
        },
        A.id
      )) })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
        /* @__PURE__ */ b.jsx("div", { className: "h4", children: "Drop Zones" }),
        /* @__PURE__ */ b.jsx(
          qe,
          {
            variant: "primary",
            onClick: x,
            iconBefore: $h,
            disabled: h.length === 0,
            children: "Add Drop Zone"
          }
        )
      ] }),
      h.length === 0 ? /* @__PURE__ */ b.jsxs("div", { className: "text-muted text-center p-4 border rounded bg-light", children: [
        /* @__PURE__ */ b.jsx("p", { children: "Please create labels before adding drop zones." }),
        /* @__PURE__ */ b.jsx("p", { className: "small", children: "Drop zones define the correct placement areas for labels." })
      ] }) : g.length === 0 ? /* @__PURE__ */ b.jsxs("div", { className: "text-muted text-center p-4 border rounded", children: [
        /* @__PURE__ */ b.jsx("p", { children: "No drop zones defined yet." }),
        /* @__PURE__ */ b.jsx("p", { className: "small", children: "Drop zones are the correct placement areas on the image." }),
        /* @__PURE__ */ b.jsx(qe, { variant: "outline-primary", onClick: x, children: "Create Your First Drop Zone" })
      ] }) : /* @__PURE__ */ b.jsx("div", { className: "zones-list", children: g.map((A) => /* @__PURE__ */ b.jsx(
        aP,
        {
          zone: A,
          onEdit: E,
          onDelete: C
        },
        A.id
      )) })
    ] })
  ] });
}, sP = ({
  weight: e,
  maxAttempts: t,
  unlimited: n,
  onWeightChange: r,
  onMaxAttemptsChange: i,
  onUnlimitedChange: a
}) => {
  const o = `${e} point${e === 1 ? "" : "s"} · ${n ? "Unlimited attempts" : `${t} attempt${t === 1 ? "" : "s"}`}`;
  return /* @__PURE__ */ b.jsxs(
    IE,
    {
      title: "Scoring",
      summary: o,
      className: "scoringCard",
      children: [
        /* @__PURE__ */ b.jsx("div", { className: "mb-4", children: "Specify point weight and the number of answer attempts" }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(
            B.Control,
            {
              type: "number",
              min: 0,
              step: 0.1,
              value: e,
              onChange: (s) => r(Number(s.target.value)),
              floatingLabel: "Points"
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "If a value is not set, the problem is worth one point" })
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(
            B.Control,
            {
              type: "number",
              min: 0,
              value: n ? "" : t,
              onChange: (s) => i(Number(s.target.value)),
              floatingLabel: "Attempts",
              disabled: n
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "If a default value is not set in advanced settings, unlimited attempts are allowed" }),
          /* @__PURE__ */ b.jsx(
            B.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: n,
              onChange: (s) => a(s.target.checked),
              children: /* @__PURE__ */ b.jsx("div", { className: "x-small", children: "Unlimited attempts" })
            }
          )
        ] })
      ]
    }
  );
}, lP = ({
  showFeedbackMode: e,
  gradingMode: t,
  snapEnabled: n,
  showCorrectOnSubmit: r,
  onShowFeedbackModeChange: i,
  onGradingModeChange: a,
  onSnapEnabledChange: o,
  onShowCorrectOnSubmitChange: s
}) => {
  const c = `${e === "immediate" ? "Immediate feedback" : "Feedback on submit"} · ${t === "exact" ? "Exact grading" : "Partial credit"}`;
  return /* @__PURE__ */ b.jsxs(
    IE,
    {
      title: "Annotation Behavior",
      summary: c,
      className: "behaviorCard",
      children: [
        /* @__PURE__ */ b.jsx("div", { className: "mb-4", children: "Configure how students interact with the annotation exercise" }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(B.Label, { children: "Feedback Mode" }),
          /* @__PURE__ */ b.jsxs(
            B.Control,
            {
              as: "select",
              value: e,
              onChange: (d) => i(d.target.value),
              children: [
                /* @__PURE__ */ b.jsx("option", { value: "on_submit", children: "On Submit - Show feedback after submission" }),
                /* @__PURE__ */ b.jsx("option", { value: "immediate", children: "Immediate - Show feedback as labels are placed" })
              ]
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Choose when students receive feedback on their label placements" })
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(B.Label, { children: "Grading Mode" }),
          /* @__PURE__ */ b.jsxs(
            B.Control,
            {
              as: "select",
              value: t,
              onChange: (d) => a(d.target.value),
              children: [
                /* @__PURE__ */ b.jsx("option", { value: "exact", children: "Exact - All labels must be correct" }),
                /* @__PURE__ */ b.jsx("option", { value: "partial", children: "Partial Credit - Points for each correct label" })
              ]
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Exact mode requires all labels correct for full credit. Partial awards points per label." })
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(
            B.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: n,
              onChange: (d) => o(d.target.checked),
              children: /* @__PURE__ */ b.jsx("div", { className: "x-small", children: "Enable snap-to-zone behavior" })
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "When enabled, labels automatically snap to the center of drop zones when dragged nearby" })
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { children: [
          /* @__PURE__ */ b.jsx(
            B.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: r,
              onChange: (d) => s(d.target.checked),
              children: /* @__PURE__ */ b.jsx("div", { className: "x-small", children: 'Show "Show Answer" button after submission' })
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Allows students to view correct label placements after submitting their answers" })
        ] })
      ]
    }
  );
}, uP = ({
  weight: e,
  maxAttempts: t,
  onWeightChange: n,
  onMaxAttemptsChange: r,
  showFeedbackMode: i,
  gradingMode: a,
  snapEnabled: o,
  showCorrectOnSubmit: s,
  onShowFeedbackModeChange: l,
  onGradingModeChange: u,
  onSnapEnabledChange: c,
  onShowCorrectOnSubmitChange: d
}) => {
  const [f, h] = v.useState(t === 0), w = (k) => {
    h(k), r(k ? 0 : 1);
  }, y = (k) => {
    r(k), h(k === 0);
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "settingsWidget ml-4", children: [
    /* @__PURE__ */ b.jsx("div", { className: "my-3", children: /* @__PURE__ */ b.jsx(
      sP,
      {
        weight: e,
        maxAttempts: t,
        unlimited: f,
        onWeightChange: n,
        onMaxAttemptsChange: y,
        onUnlimitedChange: w
      }
    ) }),
    /* @__PURE__ */ b.jsx("div", { className: "mt-3", children: /* @__PURE__ */ b.jsx(
      lP,
      {
        showFeedbackMode: i,
        gradingMode: a,
        snapEnabled: o,
        showCorrectOnSubmit: s,
        onShowFeedbackModeChange: l,
        onGradingModeChange: u,
        onSnapEnabledChange: c,
        onShowCorrectOnSubmitChange: d
      }
    ) })
  ] });
}, cP = ({
  labelId: e,
  labels: t,
  onSave: n,
  saveRef: r
}) => {
  const i = e ? t.find((_) => _.id === e) : null, a = () => {
    if (i) return i.id;
    const _ = t.map((A) => {
      const I = A.id.match(/^label_(\d+)$/);
      return I ? parseInt(I[1], 10) : 0;
    }).filter((A) => A > 0);
    return `label_${(_.length > 0 ? Math.max(..._) : 0) + 1}`;
  }, [o] = v.useState(a()), [s, l] = v.useState((i == null ? void 0 : i.label) || ""), [u, c] = v.useState((i == null ? void 0 : i.type) || "normal"), [d, f] = v.useState((i == null ? void 0 : i.width) || 60), [h, w] = v.useState((i == null ? void 0 : i.height) || 40), [y, k] = v.useState((i == null ? void 0 : i.startX) || 0), [g, x] = v.useState((i == null ? void 0 : i.startY) || 0), [E, C] = v.useState(null), S = () => {
    if (C(null), !s.trim()) {
      C("Label text is required");
      return;
    }
    if (d < 10 || d > 200) {
      C("Width must be between 10 and 200 pixels");
      return;
    }
    if (h < 10 || h > 200) {
      C("Height must be between 10 and 200 pixels");
      return;
    }
    n({
      id: o,
      label: s,
      type: u,
      width: d,
      height: h,
      startX: y,
      startY: g
    });
  };
  return v.useEffect(() => (r.current = S, () => {
    r.current = null;
  }), [o, s, u, d, h, y, g, t]), /* @__PURE__ */ b.jsxs("div", { className: "edit-label-view p-4", children: [
    /* @__PURE__ */ b.jsx("h3", { className: "mb-4", children: e ? "Edit Label" : "Add New Label" }),
    E && /* @__PURE__ */ b.jsx(In, { variant: "danger", dismissible: !0, onClose: () => C(null), children: E }),
    /* @__PURE__ */ b.jsxs(B, { children: [
      /* @__PURE__ */ b.jsxs("div", { className: "mb-3 text-muted small", children: [
        "ID: ",
        /* @__PURE__ */ b.jsx("strong", { children: o }),
        " (auto-generated)"
      ] }),
      /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
        /* @__PURE__ */ b.jsx(
          B.Control,
          {
            type: "text",
            value: s,
            onChange: (_) => l(_.target.value),
            floatingLabel: "Label Text"
          }
        ),
        /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: 'Text displayed on the label (e.g., "A", "Heart", "Liver")' })
      ] }),
      /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
        /* @__PURE__ */ b.jsx(B.Label, { children: "Label Type" }),
        /* @__PURE__ */ b.jsxs(
          B.Control,
          {
            as: "select",
            value: u,
            onChange: (_) => c(_.target.value),
            children: [
              /* @__PURE__ */ b.jsx("option", { value: "normal", children: "Normal (Badge with text)" }),
              /* @__PURE__ */ b.jsx("option", { value: "dot", children: "Dot Marker (Small circle)" }),
              /* @__PURE__ */ b.jsx("option", { value: "cross", children: "Cross Marker (X symbol)" })
            ]
          }
        ),
        /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Visual style of the label" })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ b.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ b.jsx(B.Group, { className: "mb-3", children: /* @__PURE__ */ b.jsx(
          B.Control,
          {
            type: "number",
            min: 10,
            max: 200,
            value: d,
            onChange: (_) => f(Number(_.target.value)),
            floatingLabel: "Width (px)"
          }
        ) }) }),
        /* @__PURE__ */ b.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ b.jsx(B.Group, { className: "mb-3", children: /* @__PURE__ */ b.jsx(
          B.Control,
          {
            type: "number",
            min: 10,
            max: 200,
            value: h,
            onChange: (_) => w(Number(_.target.value)),
            floatingLabel: "Height (px)"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
        /* @__PURE__ */ b.jsx(B.Label, { children: "Initial Position (Label Bank)" }),
        /* @__PURE__ */ b.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ b.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ b.jsx(
            B.Control,
            {
              type: "number",
              min: 0,
              value: y,
              onChange: (_) => k(Number(_.target.value)),
              floatingLabel: "X Position"
            }
          ) }),
          /* @__PURE__ */ b.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ b.jsx(
            B.Control,
            {
              type: "number",
              min: 0,
              value: g,
              onChange: (_) => x(Number(_.target.value)),
              floatingLabel: "Y Position"
            }
          ) })
        ] }),
        /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Where the label appears before being dragged (in the label bank)" })
      ] })
    ] })
  ] });
}, pP = ({
  zoneId: e,
  zones: t,
  labels: n,
  backgroundImageUrl: r,
  backgroundImageWidth: i,
  backgroundImageHeight: a,
  onSave: o,
  saveRef: s
}) => {
  var L;
  const l = e ? t.find((R) => R.id === e) : null, u = () => {
    if (l) return l.id;
    const R = t.map((Q) => {
      const Z = Q.id.match(/^zone_(\d+)$/);
      return Z ? parseInt(Z[1], 10) : 0;
    }).filter((Q) => Q > 0);
    return `zone_${(R.length > 0 ? Math.max(...R) : 0) + 1}`;
  }, [c] = v.useState(u()), [d, f] = v.useState((l == null ? void 0 : l.x) || 100), [h, w] = v.useState((l == null ? void 0 : l.y) || 100), [y, k] = v.useState((l == null ? void 0 : l.radius) || 30), [g, x] = v.useState((l == null ? void 0 : l.correctAnswer) || ((L = n[0]) == null ? void 0 : L.id) || ""), [E, C] = v.useState((l == null ? void 0 : l.description) || ""), [S, _] = v.useState((l == null ? void 0 : l.visible) ?? !0), [T, A] = v.useState(null), I = () => {
    if (A(null), !g) {
      A("Please select a correct answer label");
      return;
    }
    if (!E.trim()) {
      A("Zone description is required");
      return;
    }
    if (!l && d === 100 && h === 100) {
      A("Please position the zone on the image using the canvas");
      return;
    }
    if (y < 10 || y > 200) {
      A("Radius must be between 10 and 200 pixels");
      return;
    }
    o({
      id: c,
      x: d,
      y: h,
      radius: y,
      correctAnswer: g,
      description: E,
      visible: S
    });
  }, N = (R) => {
    const [q, Q, Z] = R;
    f(q), w(Q), k(Z);
  };
  if (v.useEffect(() => (s.current = I, () => {
    s.current = null;
  }), [c, d, h, y, g, E, S, t]), !r)
    return /* @__PURE__ */ b.jsx(In, { variant: "warning", className: "m-4", children: "Please configure a background image first before creating drop zones." });
  if (n.length === 0)
    return /* @__PURE__ */ b.jsx(In, { variant: "warning", className: "m-4", children: "Please create labels first before creating drop zones." });
  const M = {
    id: c,
    x: d,
    y: h,
    radius: y,
    correctAnswer: g,
    description: E,
    visible: !0
    // Always show in editor
  };
  return /* @__PURE__ */ b.jsx("div", { className: "edit-zone-view", children: /* @__PURE__ */ b.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "col-md-8", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "mb-3", children: e ? "Edit Drop Zone" : "Add New Drop Zone" }),
      /* @__PURE__ */ b.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ b.jsx("strong", { children: "Position the zone on the image:" }),
        /* @__PURE__ */ b.jsx("p", { className: "text-muted small", children: "Click and drag to position the zone. Drag the edge to resize." })
      ] }),
      /* @__PURE__ */ b.jsx(
        YI,
        {
          imageUrl: r,
          zone: M,
          onChange: N
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "col-md-4", children: [
      /* @__PURE__ */ b.jsx("h4", { className: "mb-3", children: "Zone Properties" }),
      T && /* @__PURE__ */ b.jsx(In, { variant: "danger", dismissible: !0, onClose: () => A(null), children: T }),
      /* @__PURE__ */ b.jsxs(B, { children: [
        /* @__PURE__ */ b.jsxs("div", { className: "mb-3 text-muted small", children: [
          "ID: ",
          /* @__PURE__ */ b.jsx("strong", { children: c }),
          " (auto-generated)"
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
          /* @__PURE__ */ b.jsx(B.Label, { children: "Correct Answer" }),
          /* @__PURE__ */ b.jsx(
            B.Control,
            {
              as: "select",
              value: g,
              onChange: (R) => x(R.target.value),
              children: n.map((R) => /* @__PURE__ */ b.jsxs("option", { value: R.id, children: [
                R.id,
                " - ",
                R.label
              ] }, R.id))
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Which label should be placed in this zone" })
        ] }),
        /* @__PURE__ */ b.jsxs(B.Group, { className: "mb-3", children: [
          /* @__PURE__ */ b.jsx(
            B.Control,
            {
              type: "text",
              value: E,
              onChange: (R) => C(R.target.value),
              floatingLabel: "Description"
            }
          ),
          /* @__PURE__ */ b.jsx(B.Control.Feedback, { children: "Human-readable description (required)" })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "border rounded p-3 mb-3 bg-light", children: [
          /* @__PURE__ */ b.jsx("small", { className: "text-muted d-block mb-2", children: "Position (set via canvas):" }),
          /* @__PURE__ */ b.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ b.jsxs("div", { className: "col-6", children: [
              /* @__PURE__ */ b.jsx("strong", { children: "X:" }),
              " ",
              Math.round(d),
              "px"
            ] }),
            /* @__PURE__ */ b.jsxs("div", { className: "col-6", children: [
              /* @__PURE__ */ b.jsx("strong", { children: "Y:" }),
              " ",
              Math.round(h),
              "px"
            ] })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ b.jsx("strong", { children: "Radius:" }),
            " ",
            Math.round(y),
            "px"
          ] })
        ] }),
        /* @__PURE__ */ b.jsx(B.Group, { children: /* @__PURE__ */ b.jsx(
          B.Checkbox,
          {
            checked: S,
            onChange: (R) => _(R.target.checked),
            children: "Show zone outline in studio (for debugging)"
          }
        ) })
      ] })
    ] })
  ] }) });
}, dP = ({
  runtime: e,
  url: t,
  displayName: n,
  questionText: r,
  backgroundImageUrl: i,
  backgroundImageWidth: a,
  backgroundImageHeight: o,
  labels: s,
  dropZones: l,
  weight: u,
  maxAttempts: c,
  showFeedbackMode: d,
  gradingMode: f,
  snapEnabled: h,
  showCorrectOnSubmit: w,
  courseId: y
}) => {
  const [k, g] = v.useState("list"), [x, E] = v.useState(null), [C, S] = v.useState(null), _ = v.useRef(null), [T, A] = v.useState(n), [I, N] = v.useState(r), [M, L] = v.useState(""), [R, q] = v.useState(i), [Q, Z] = v.useState(a), [Y, P] = v.useState(o), [F, z] = v.useState(s), [W, V] = v.useState(l), [Ne, pe] = v.useState(u), [ne, J] = v.useState(c), [Ee, De] = v.useState(d), [dt, bt] = v.useState(f), [Ke, Ze] = v.useState(h), [Ft, an] = v.useState(w), [on, ke] = v.useState(!1), [re, ue] = v.useState(null), [de, ce] = v.useState(!1), [Rt, bn] = v.useState(!1), [sn, j] = v.useState([]);
  v.useEffect(() => {
    const ee = [
      "/static/studio/liverpool-dental-legacy/css/studio-main-v1.css",
      "/static/studio/liverpool-dental-legacy/css/course-unit-mfe-iframe-bundle.css"
    ];
    document.querySelectorAll('link[rel="stylesheet"]').forEach((Ce) => {
      ee.some((ze) => Ce.href.includes(ze)) && (Ce.disabled = !0);
    });
  }, []);
  const X = () => {
    if (!T.trim())
      return { valid: !1, error: "Display name is required" };
    if (R.trim()) {
      if (Q < 100 || Q > 2e3)
        return { valid: !1, error: "Background image width must be between 100 and 2000 pixels" };
      if (Y < 100 || Y > 2e3)
        return { valid: !1, error: "Background image height must be between 100 and 2000 pixels" };
    }
    if (W.length > 0 && F.length === 0)
      return { valid: !1, error: "Drop zones require at least one label to be defined" };
    for (const ee of W)
      if (!F.some((ze) => ze.id === ee.correctAnswer))
        return { valid: !1, error: `Zone "${ee.id}" references non-existent label "${ee.correctAnswer}"` };
    return { valid: !0 };
  }, ve = async () => {
    ke(!0), ue(null);
    try {
      const ee = X();
      if (!ee.valid) {
        ue({ type: "error", text: ee.error }), ke(!1);
        return;
      }
      e.notify && e.notify("save", { state: "start" });
      const ze = await mv(e, "save_data", {
        display_name: T,
        question_text: I,
        explanation: M,
        background_image_url: R,
        background_image_width: Q,
        background_image_height: Y,
        draggable_labels: F,
        drop_zones: W,
        weight: Ne,
        max_attempts: ne,
        show_feedback_mode: Ee,
        grading_mode: dt,
        snap_enabled: Ke,
        show_correct_on_submit: Ft
      });
      ze.success ? (ue({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (ue({ type: "error", text: ze.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (ee) {
      console.error("Save error:", ee), ue({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      ke(!1);
    }
  }, we = () => {
    e.notify && e.notify("cancel", {});
  }, Be = async () => {
    ce(!0), bn(!0);
    try {
      const ee = await mv(e, "list_course_assets", {});
      ee.success && ee.assets && j(ee.assets);
    } catch (ee) {
      console.error("Asset list error:", ee);
    } finally {
      bn(!1);
    }
  }, pr = (ee) => {
    q(ee.url), ce(!1);
    const Ce = new Image();
    Ce.onload = () => {
      Z(Ce.naturalWidth), P(Ce.naturalHeight);
    }, Ce.src = ee.url;
  }, ln = () => {
    g("list"), E(null), S(null), _.current = null;
  }, Wi = () => {
    E(null), g("edit-label");
  }, qi = (ee) => {
    E(ee), g("edit-label");
  }, Xi = (ee) => {
    z((Ce) => Ce.filter((ze) => ze.id !== ee)), V((Ce) => Ce.filter((ze) => ze.correctAnswer !== ee));
  }, Vr = () => {
    S(null), g("edit-zone");
  }, Qi = (ee) => {
    S(ee), g("edit-zone");
  }, Ki = (ee) => {
    V((Ce) => Ce.filter((ze) => ze.id !== ee));
  }, Zi = () => {
    _.current && _.current();
  }, Yi = (ee) => {
    z(x ? (Ce) => Ce.map((ze) => ze.id === x ? ee : ze) : (Ce) => [...Ce, ee]), ln();
  }, Dl = (ee) => {
    V(C ? (Ce) => Ce.map((ze) => ze.id === C ? ee : ze) : (Ce) => [...Ce, ee]), ln();
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "modal-container-fullscreen", children: [
    /* @__PURE__ */ b.jsx(
      tP,
      {
        title: T,
        onClose: we,
        onTitleChange: A
      }
    ),
    /* @__PURE__ */ b.jsxs(ht.Body, { className: "pb-0", children: [
      re && /* @__PURE__ */ b.jsx(
        In,
        {
          variant: re.type === "success" ? "success" : "danger",
          dismissible: !0,
          onClose: () => ue(null),
          children: re.text
        }
      ),
      k === "list" ? /* @__PURE__ */ b.jsx(
        JI,
        {
          mainContent: /* @__PURE__ */ b.jsx(
            oP,
            {
              questionText: I,
              explanation: M,
              onQuestionTextChange: N,
              onExplanationChange: L,
              runtime: e,
              courseId: y,
              backgroundImageUrl: R,
              backgroundImageWidth: Q,
              backgroundImageHeight: Y,
              onBackgroundImageUrlChange: q,
              onBackgroundImageWidthChange: Z,
              onBackgroundImageHeightChange: P,
              onOpenAssetPicker: Be,
              labels: F,
              onAddLabel: Wi,
              onEditLabel: qi,
              onDeleteLabel: Xi,
              zones: W,
              onAddZone: Vr,
              onEditZone: Qi,
              onDeleteZone: Ki
            }
          ),
          sidebar: /* @__PURE__ */ b.jsx(
            uP,
            {
              weight: Ne,
              maxAttempts: ne,
              onWeightChange: pe,
              onMaxAttemptsChange: J,
              showFeedbackMode: Ee,
              gradingMode: dt,
              snapEnabled: Ke,
              showCorrectOnSubmit: Ft,
              onShowFeedbackModeChange: De,
              onGradingModeChange: bt,
              onSnapEnabledChange: Ze,
              onShowCorrectOnSubmitChange: an
            }
          )
        }
      ) : k === "edit-label" ? /* @__PURE__ */ b.jsx(
        cP,
        {
          labelId: x,
          labels: F,
          onSave: Yi,
          saveRef: _
        }
      ) : /* @__PURE__ */ b.jsx(
        pP,
        {
          zoneId: C,
          zones: W,
          labels: F,
          backgroundImageUrl: R,
          backgroundImageWidth: Q,
          backgroundImageHeight: Y,
          onSave: Dl,
          saveRef: _
        }
      )
    ] }),
    /* @__PURE__ */ b.jsx(
      nP,
      {
        viewMode: k === "list" ? "list" : "edit",
        editingType: k === "edit-label" ? "label" : k === "edit-zone" ? "zone" : void 0,
        onSave: ve,
        onCancel: we,
        saveDisabled: on || k === "list" && (F.length === 0 || W.length === 0),
        onSavePair: Zi,
        onBackToList: ln,
        savePairDisabled: !1
      }
    ),
    /* @__PURE__ */ b.jsx(
      bf,
      {
        title: "Choose Course Image",
        isOpen: de,
        onClose: () => ce(!1),
        size: "lg",
        isOverflowVisible: !1,
        footerNode: /* @__PURE__ */ b.jsx(qe, { variant: "tertiary", onClick: () => ce(!1), children: "Close" }),
        children: Rt ? /* @__PURE__ */ b.jsx("p", { children: "Loading images..." }) : sn.length === 0 ? /* @__PURE__ */ b.jsx("p", { children: "No images found in course. Upload an image first." }) : /* @__PURE__ */ b.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }, children: sn.map((ee) => /* @__PURE__ */ b.jsxs(
          "div",
          {
            onClick: () => pr(ee),
            style: {
              cursor: "pointer",
              border: R === ee.url ? "2px solid #0075b4" : "1px solid #ccc",
              borderRadius: "4px",
              padding: "0.5rem",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ b.jsx(
                "img",
                {
                  src: ee.url,
                  alt: ee.display_name,
                  style: {
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "0.5rem"
                  }
                }
              ),
              /* @__PURE__ */ b.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: ee.display_name })
            ]
          },
          ee.url
        )) })
      }
    )
  ] });
}, vP = (e, t, n) => {
  e.element = t, Nx(t).render(
    /* @__PURE__ */ b.jsx(v.StrictMode, { children: /* @__PURE__ */ b.jsx(O1, { locale: "en", children: /* @__PURE__ */ b.jsx(
      dP,
      {
        runtime: e,
        url: n.url,
        displayName: n.displayName,
        questionText: n.questionText,
        backgroundImageUrl: n.backgroundImageUrl,
        backgroundImageWidth: n.backgroundImageWidth,
        backgroundImageHeight: n.backgroundImageHeight,
        labels: n.labels,
        dropZones: n.dropZones,
        weight: n.weight,
        maxAttempts: n.maxAttempts,
        showFeedbackMode: n.showFeedbackMode,
        gradingMode: n.gradingMode,
        snapEnabled: n.snapEnabled,
        snapRadius: n.snapRadius,
        showCorrectOnSubmit: n.showCorrectOnSubmit,
        courseId: n.courseId
      }
    ) }) })
  );
};
export {
  vP as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
