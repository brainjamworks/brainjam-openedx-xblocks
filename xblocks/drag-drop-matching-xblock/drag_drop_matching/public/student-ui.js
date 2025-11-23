var tv = Object.defineProperty;
var rv = (e, t, r) => t in e ? tv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fs = (e, t, r) => rv(e, typeof t != "symbol" ? t + "" : t, r);
function en(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Df = { exports: {} }, mo = {}, _f = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn = Symbol.for("react.element"), nv = Symbol.for("react.portal"), iv = Symbol.for("react.fragment"), ov = Symbol.for("react.strict_mode"), av = Symbol.for("react.profiler"), uv = Symbol.for("react.provider"), lv = Symbol.for("react.context"), sv = Symbol.for("react.forward_ref"), cv = Symbol.for("react.suspense"), fv = Symbol.for("react.memo"), dv = Symbol.for("react.lazy"), ds = Symbol.iterator;
function hv(e) {
  return e === null || typeof e != "object" ? null : (e = ds && e[ds] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Pf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, If = Object.assign, kf = {};
function tn(e, t, r) {
  this.props = e, this.context = t, this.refs = kf, this.updater = r || Pf;
}
tn.prototype.isReactComponent = {};
tn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
tn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nf() {
}
Nf.prototype = tn.prototype;
function Ku(e, t, r) {
  this.props = e, this.context = t, this.refs = kf, this.updater = r || Pf;
}
var qu = Ku.prototype = new Nf();
qu.constructor = Ku;
If(qu, tn.prototype);
qu.isPureReactComponent = !0;
var hs = Array.isArray, bf = Object.prototype.hasOwnProperty, Ju = { current: null }, Rf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(e, t, r) {
  var n, i = {}, o = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) bf.call(t, n) && !Rf.hasOwnProperty(n) && (i[n] = t[n]);
  var u = arguments.length - 2;
  if (u === 1) i.children = r;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in u = e.defaultProps, u) i[n] === void 0 && (i[n] = u[n]);
  return { $$typeof: Yn, type: e, key: o, ref: a, props: i, _owner: Ju.current };
}
function pv(e, t) {
  return { $$typeof: Yn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function el(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yn;
}
function vv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var ps = /\/+/g;
function Zo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vv("" + e.key) : t.toString(36);
}
function Di(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (o) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Yn:
        case nv:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = n === "" ? "." + Zo(a, 0) : n, hs(i) ? (r = "", e != null && (r = e.replace(ps, "$&/") + "/"), Di(i, t, r, "", function(s) {
    return s;
  })) : i != null && (el(i) && (i = pv(i, r + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(ps, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", hs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = n + Zo(o, u);
    a += Di(o, t, r, l, i);
  }
  else if (l = hv(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = n + Zo(o, u++), a += Di(o, t, r, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ri(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return Di(e, n, "", "", function(o) {
    return t.call(r, o, i++);
  }), n;
}
function mv(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null }, _i = { transition: null }, gv = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: _i, ReactCurrentOwner: Ju };
function Mf() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: ri, forEach: function(e, t, r) {
  ri(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ri(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ri(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!el(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = tn;
$.Fragment = iv;
$.Profiler = av;
$.PureComponent = Ku;
$.StrictMode = ov;
$.Suspense = cv;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
$.act = Mf;
$.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = If({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = Ju.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) bf.call(t, l) && !Rf.hasOwnProperty(l) && (n[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++) u[s] = arguments[s + 2];
    n.children = u;
  }
  return { $$typeof: Yn, type: e.type, key: i, ref: o, props: n, _owner: a };
};
$.createContext = function(e) {
  return e = { $$typeof: lv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: uv, _context: e }, e.Consumer = e;
};
$.createElement = Lf;
$.createFactory = function(e) {
  var t = Lf.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: sv, render: e };
};
$.isValidElement = el;
$.lazy = function(e) {
  return { $$typeof: dv, _payload: { _status: -1, _result: e }, _init: mv };
};
$.memo = function(e, t) {
  return { $$typeof: fv, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
$.unstable_act = Mf;
$.useCallback = function(e, t) {
  return Oe.current.useCallback(e, t);
};
$.useContext = function(e) {
  return Oe.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return Oe.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return Oe.current.useEffect(e, t);
};
$.useId = function() {
  return Oe.current.useId();
};
$.useImperativeHandle = function(e, t, r) {
  return Oe.current.useImperativeHandle(e, t, r);
};
$.useInsertionEffect = function(e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return Oe.current.useMemo(e, t);
};
$.useReducer = function(e, t, r) {
  return Oe.current.useReducer(e, t, r);
};
$.useRef = function(e) {
  return Oe.current.useRef(e);
};
$.useState = function(e) {
  return Oe.current.useState(e);
};
$.useSyncExternalStore = function(e, t, r) {
  return Oe.current.useSyncExternalStore(e, t, r);
};
$.useTransition = function() {
  return Oe.current.useTransition();
};
$.version = "18.3.1";
_f.exports = $;
var T = _f.exports;
const b = /* @__PURE__ */ en(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv = T, Sv = Symbol.for("react.element"), Ev = Symbol.for("react.fragment"), wv = Object.prototype.hasOwnProperty, Tv = yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, r) {
  var n, i = {}, o = null, a = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t) wv.call(t, n) && !xv.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Sv, type: e, key: o, ref: a, props: i, _owner: Tv.current };
}
mo.Fragment = Ev;
mo.jsx = Af;
mo.jsxs = Af;
Df.exports = mo;
var N = Df.exports, Hf = { exports: {} }, He = {}, Ff = { exports: {} }, Bf = {};
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
  function t(P, A) {
    var O = P.length;
    P.push(A);
    e: for (; 0 < O; ) {
      var F = O - 1 >>> 1, L = P[F];
      if (0 < i(L, A)) P[F] = A, P[O] = L, O = F;
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function n(P) {
    if (P.length === 0) return null;
    var A = P[0], O = P.pop();
    if (O !== A) {
      P[0] = O;
      e: for (var F = 0, L = P.length, $e = L >>> 1; F < $e; ) {
        var Je = 2 * (F + 1) - 1, Tr = P[Je], ut = Je + 1, Jt = P[ut];
        if (0 > i(Tr, O)) ut < L && 0 > i(Jt, Tr) ? (P[F] = Jt, P[ut] = O, F = ut) : (P[F] = Tr, P[Je] = O, F = Je);
        else if (ut < L && 0 > i(Jt, O)) P[F] = Jt, P[ut] = O, F = ut;
        else break e;
      }
    }
    return A;
  }
  function i(P, A) {
    var O = P.sortIndex - A.sortIndex;
    return O !== 0 ? O : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, u = a.now();
    e.unstable_now = function() {
      return a.now() - u;
    };
  }
  var l = [], s = [], c = 1, d = null, h = 3, m = !1, S = !1, g = !1, D = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var A = r(s); A !== null; ) {
      if (A.callback === null) n(s);
      else if (A.startTime <= P) n(s), A.sortIndex = A.expirationTime, t(l, A);
      else break;
      A = r(s);
    }
  }
  function y(P) {
    if (g = !1, v(P), !S) if (r(l) !== null) S = !0, gt(w);
    else {
      var A = r(s);
      A !== null && qt(y, A.startTime - P);
    }
  }
  function w(P, A) {
    S = !1, g && (g = !1, p(_), _ = -1), m = !0;
    var O = h;
    try {
      for (v(A), d = r(l); d !== null && (!(d.expirationTime > A) || P && !ae()); ) {
        var F = d.callback;
        if (typeof F == "function") {
          d.callback = null, h = d.priorityLevel;
          var L = F(d.expirationTime <= A);
          A = e.unstable_now(), typeof L == "function" ? d.callback = L : d === r(l) && n(l), v(A);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var $e = !0;
      else {
        var Je = r(s);
        Je !== null && qt(y, Je.startTime - A), $e = !1;
      }
      return $e;
    } finally {
      d = null, h = O, m = !1;
    }
  }
  var C = !1, x = null, _ = -1, G = 5, R = -1;
  function ae() {
    return !(e.unstable_now() - R < G);
  }
  function vt() {
    if (x !== null) {
      var P = e.unstable_now();
      R = P;
      var A = !0;
      try {
        A = x(!0, P);
      } finally {
        A ? mt() : (C = !1, x = null);
      }
    } else C = !1;
  }
  var mt;
  if (typeof f == "function") mt = function() {
    f(vt);
  };
  else if (typeof MessageChannel < "u") {
    var wr = new MessageChannel(), an = wr.port2;
    wr.port1.onmessage = vt, mt = function() {
      an.postMessage(null);
    };
  } else mt = function() {
    D(vt, 0);
  };
  function gt(P) {
    x = P, C || (C = !0, mt());
  }
  function qt(P, A) {
    _ = D(function() {
      P(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    S || m || (S = !0, gt(w));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(P) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = h;
    }
    var O = h;
    h = A;
    try {
      return P();
    } finally {
      h = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, A) {
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
    var O = h;
    h = P;
    try {
      return A();
    } finally {
      h = O;
    }
  }, e.unstable_scheduleCallback = function(P, A, O) {
    var F = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? F + O : F) : O = F, P) {
      case 1:
        var L = -1;
        break;
      case 2:
        L = 250;
        break;
      case 5:
        L = 1073741823;
        break;
      case 4:
        L = 1e4;
        break;
      default:
        L = 5e3;
    }
    return L = O + L, P = { id: c++, callback: A, priorityLevel: P, startTime: O, expirationTime: L, sortIndex: -1 }, O > F ? (P.sortIndex = O, t(s, P), r(l) === null && P === r(s) && (g ? (p(_), _ = -1) : g = !0, qt(y, O - F))) : (P.sortIndex = L, t(l, P), S || m || (S = !0, gt(w))), P;
  }, e.unstable_shouldYield = ae, e.unstable_wrapCallback = function(P) {
    var A = h;
    return function() {
      var O = h;
      h = A;
      try {
        return P.apply(this, arguments);
      } finally {
        h = O;
      }
    };
  };
})(Bf);
Ff.exports = Bf;
var Cv = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ov = T, Me = Cv;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $f = /* @__PURE__ */ new Set(), bn = {};
function gr(e, t) {
  Vr(e, t), Vr(e + "Capture", t);
}
function Vr(e, t) {
  for (bn[e] = t, e = 0; e < t.length; e++) $f.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Aa = Object.prototype.hasOwnProperty, Dv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, vs = {}, ms = {};
function _v(e) {
  return Aa.call(ms, e) ? !0 : Aa.call(vs, e) ? !1 : Dv.test(e) ? ms[e] = !0 : (vs[e] = !0, !1);
}
function Pv(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Iv(e, t, r, n) {
  if (t === null || typeof t > "u" || Pv(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null) switch (r.type) {
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
function De(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tl = /[\-:]([a-z])/g;
function rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    tl,
    rl
  );
  de[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(tl, rl);
  de[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(tl, rl);
  de[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nl(e, t, r, n) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Iv(t, r, i, n) && (r = null), n || i === null ? _v(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var _t = Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ni = Symbol.for("react.element"), _r = Symbol.for("react.portal"), Pr = Symbol.for("react.fragment"), il = Symbol.for("react.strict_mode"), Ha = Symbol.for("react.profiler"), Uf = Symbol.for("react.provider"), jf = Symbol.for("react.context"), ol = Symbol.for("react.forward_ref"), Fa = Symbol.for("react.suspense"), Ba = Symbol.for("react.suspense_list"), al = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), zf = Symbol.for("react.offscreen"), gs = Symbol.iterator;
function un(e) {
  return e === null || typeof e != "object" ? null : (e = gs && e[gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ee = Object.assign, Ko;
function gn(e) {
  if (Ko === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Ko = t && t[1] || "";
  }
  return `
` + Ko + e;
}
var qo = !1;
function Jo(e, t) {
  if (!e || qo) return "";
  qo = !0;
  var r = Error.prepareStackTrace;
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
        var n = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        n = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (var i = s.stack.split(`
`), o = n.stack.split(`
`), a = i.length - 1, u = o.length - 1; 1 <= a && 0 <= u && i[a] !== o[u]; ) u--;
      for (; 1 <= a && 0 <= u; a--, u--) if (i[a] !== o[u]) {
        if (a !== 1 || u !== 1)
          do
            if (a--, u--, 0 > u || i[a] !== o[u]) {
              var l = `
` + i[a].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= a && 0 <= u);
        break;
      }
    }
  } finally {
    qo = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function kv(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn("Lazy");
    case 13:
      return gn("Suspense");
    case 19:
      return gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Jo(e.type, !1), e;
    case 11:
      return e = Jo(e.type.render, !1), e;
    case 1:
      return e = Jo(e.type, !0), e;
    default:
      return "";
  }
}
function $a(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pr:
      return "Fragment";
    case _r:
      return "Portal";
    case Ha:
      return "Profiler";
    case il:
      return "StrictMode";
    case Fa:
      return "Suspense";
    case Ba:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case jf:
      return (e.displayName || "Context") + ".Consumer";
    case Uf:
      return (e._context.displayName || "Context") + ".Provider";
    case ol:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case al:
      return t = e.displayName || null, t !== null ? t : $a(e.type) || "Memo";
    case kt:
      t = e._payload, e = e._init;
      try {
        return $a(e(t));
      } catch {
      }
  }
  return null;
}
function Nv(e) {
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
      return $a(t);
    case 8:
      return t === il ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function Gf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function bv(e) {
  var t = Gf(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, o = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      n = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(a) {
      n = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ii(e) {
  e._valueTracker || (e._valueTracker = bv(e));
}
function Vf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = Gf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Gi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ua(e, t) {
  var r = t.checked;
  return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function ys(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Vt(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wf(e, t) {
  t = t.checked, t != null && nl(e, "checked", t, !1);
}
function ja(e, t) {
  Wf(e, t);
  var r = Vt(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? za(e, t.type, r) : t.hasOwnProperty("defaultValue") && za(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ss(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function za(e, t, r) {
  (t !== "number" || Gi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var yn = Array.isArray;
function Br(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Vt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Es(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(E(92));
      if (yn(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Vt(r) };
}
function Xf(e, t) {
  var r = Vt(t.value), n = Vt(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function ws(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var oi, Yf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (oi = oi || document.createElement("div"), oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = oi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
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
}, Rv = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function(e) {
  Rv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xn[t] = xn[e];
  });
});
function Zf(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || xn.hasOwnProperty(e) && xn[e] ? ("" + t).trim() : t + "px";
}
function Kf(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = Zf(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var Lv = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wa(e, t) {
  if (t) {
    if (Lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Xa(e, t) {
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
var Qa = null;
function ul(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ya = null, $r = null, Ur = null;
function Ts(e) {
  if (e = qn(e)) {
    if (typeof Ya != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = wo(t), Ya(e.stateNode, e.type, t));
  }
}
function qf(e) {
  $r ? Ur ? Ur.push(e) : Ur = [e] : $r = e;
}
function Jf() {
  if ($r) {
    var e = $r, t = Ur;
    if (Ur = $r = null, Ts(e), t) for (e = 0; e < t.length; e++) Ts(t[e]);
  }
}
function ed(e, t) {
  return e(t);
}
function td() {
}
var ea = !1;
function rd(e, t, r) {
  if (ea) return e(t, r);
  ea = !0;
  try {
    return ed(e, t, r);
  } finally {
    ea = !1, ($r !== null || Ur !== null) && (td(), Jf());
  }
}
function Ln(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = wo(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var Za = !1;
if (xt) try {
  var ln = {};
  Object.defineProperty(ln, "passive", { get: function() {
    Za = !0;
  } }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
} catch {
  Za = !1;
}
function Mv(e, t, r, n, i, o, a, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (c) {
    this.onError(c);
  }
}
var Cn = !1, Vi = null, Wi = !1, Ka = null, Av = { onError: function(e) {
  Cn = !0, Vi = e;
} };
function Hv(e, t, r, n, i, o, a, u, l) {
  Cn = !1, Vi = null, Mv.apply(Av, arguments);
}
function Fv(e, t, r, n, i, o, a, u, l) {
  if (Hv.apply(this, arguments), Cn) {
    if (Cn) {
      var s = Vi;
      Cn = !1, Vi = null;
    } else throw Error(E(198));
    Wi || (Wi = !0, Ka = s);
  }
}
function yr(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xs(e) {
  if (yr(e) !== e) throw Error(E(188));
}
function Bv(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yr(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return xs(i), e;
        if (o === n) return xs(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) r = i, n = o;
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === r) {
          a = !0, r = i, n = o;
          break;
        }
        if (u === n) {
          a = !0, n = i, r = o;
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = o.child; u; ) {
          if (u === r) {
            a = !0, r = o, n = i;
            break;
          }
          if (u === n) {
            a = !0, n = o, r = i;
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function id(e) {
  return e = Bv(e), e !== null ? od(e) : null;
}
function od(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = od(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ad = Me.unstable_scheduleCallback, Cs = Me.unstable_cancelCallback, $v = Me.unstable_shouldYield, Uv = Me.unstable_requestPaint, re = Me.unstable_now, jv = Me.unstable_getCurrentPriorityLevel, ll = Me.unstable_ImmediatePriority, ud = Me.unstable_UserBlockingPriority, Xi = Me.unstable_NormalPriority, zv = Me.unstable_LowPriority, ld = Me.unstable_IdlePriority, go = null, dt = null;
function Gv(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var it = Math.clz32 ? Math.clz32 : Xv, Vv = Math.log, Wv = Math.LN2;
function Xv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vv(e) / Wv | 0) | 0;
}
var ai = 64, ui = 4194304;
function Sn(e) {
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
function Qi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, o = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var u = a & ~i;
    u !== 0 ? n = Sn(u) : (o &= a, o !== 0 && (n = Sn(o)));
  } else a = r & ~i, a !== 0 ? n = Sn(a) : o !== 0 && (n = Sn(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - it(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function Qv(e, t) {
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
function Yv(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - it(o), u = 1 << a, l = i[a];
    l === -1 ? (!(u & r) || u & n) && (i[a] = Qv(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function qa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sd() {
  var e = ai;
  return ai <<= 1, !(ai & 4194240) && (ai = 64), e;
}
function ta(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Zn(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - it(t), e[t] = r;
}
function Zv(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - it(r), o = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~o;
  }
}
function sl(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - it(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var V = 0;
function cd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fd, cl, dd, hd, pd, Ja = !1, li = [], Ht = null, Ft = null, Bt = null, Mn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), Rt = [], Kv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Os(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function sn(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [i] }, t !== null && (t = qn(t), t !== null && cl(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function qv(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Ht = sn(Ht, e, t, r, n, i), !0;
    case "dragenter":
      return Ft = sn(Ft, e, t, r, n, i), !0;
    case "mouseover":
      return Bt = sn(Bt, e, t, r, n, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mn.set(o, sn(Mn.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, An.set(o, sn(An.get(o) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function vd(e) {
  var t = or(e.target);
  if (t !== null) {
    var r = yr(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = nd(r), t !== null) {
          e.blockedOn = t, pd(e.priority, function() {
            dd(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Qa = n, r.target.dispatchEvent(n), Qa = null;
    } else return t = qn(r), t !== null && cl(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Ds(e, t, r) {
  Pi(e) && r.delete(t);
}
function Jv() {
  Ja = !1, Ht !== null && Pi(Ht) && (Ht = null), Ft !== null && Pi(Ft) && (Ft = null), Bt !== null && Pi(Bt) && (Bt = null), Mn.forEach(Ds), An.forEach(Ds);
}
function cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ja || (Ja = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Jv)));
}
function Hn(e) {
  function t(i) {
    return cn(i, e);
  }
  if (0 < li.length) {
    cn(li[0], e);
    for (var r = 1; r < li.length; r++) {
      var n = li[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Ht !== null && cn(Ht, e), Ft !== null && cn(Ft, e), Bt !== null && cn(Bt, e), Mn.forEach(t), An.forEach(t), r = 0; r < Rt.length; r++) n = Rt[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Rt.length && (r = Rt[0], r.blockedOn === null); ) vd(r), r.blockedOn === null && Rt.shift();
}
var jr = _t.ReactCurrentBatchConfig, Yi = !0;
function em(e, t, r, n) {
  var i = V, o = jr.transition;
  jr.transition = null;
  try {
    V = 1, fl(e, t, r, n);
  } finally {
    V = i, jr.transition = o;
  }
}
function tm(e, t, r, n) {
  var i = V, o = jr.transition;
  jr.transition = null;
  try {
    V = 4, fl(e, t, r, n);
  } finally {
    V = i, jr.transition = o;
  }
}
function fl(e, t, r, n) {
  if (Yi) {
    var i = eu(e, t, r, n);
    if (i === null) fa(e, t, n, Zi, r), Os(e, n);
    else if (qv(i, e, t, r, n)) n.stopPropagation();
    else if (Os(e, n), t & 4 && -1 < Kv.indexOf(e)) {
      for (; i !== null; ) {
        var o = qn(i);
        if (o !== null && fd(o), o = eu(e, t, r, n), o === null && fa(e, t, n, Zi, r), o === i) break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else fa(e, t, n, null, r);
  }
}
var Zi = null;
function eu(e, t, r, n) {
  if (Zi = null, e = ul(n), e = or(e), e !== null) if (t = yr(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = nd(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zi = e, null;
}
function md(e) {
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
      switch (jv()) {
        case ll:
          return 1;
        case ud:
          return 4;
        case Xi:
        case zv:
          return 16;
        case ld:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, dl = null, Ii = null;
function gd() {
  if (Ii) return Ii;
  var e, t = dl, r = t.length, n, i = "value" in Mt ? Mt.value : Mt.textContent, o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++) ;
  return Ii = i.slice(e, 1 < n ? 1 - n : void 0);
}
function ki(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function si() {
  return !0;
}
function _s() {
  return !1;
}
function Fe(e) {
  function t(r, n, i, o, a) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (r = e[u], this[u] = r ? r(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? si : _s, this.isPropagationStopped = _s, this;
  }
  return ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = si);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = si);
  }, persist: function() {
  }, isPersistent: si }), t;
}
var rn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hl = Fe(rn), Kn = ee({}, rn, { view: 0, detail: 0 }), rm = Fe(Kn), ra, na, fn, yo = ee({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fn && (fn && e.type === "mousemove" ? (ra = e.screenX - fn.screenX, na = e.screenY - fn.screenY) : na = ra = 0, fn = e), ra);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : na;
} }), Ps = Fe(yo), nm = ee({}, yo, { dataTransfer: 0 }), im = Fe(nm), om = ee({}, Kn, { relatedTarget: 0 }), ia = Fe(om), am = ee({}, rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), um = Fe(am), lm = ee({}, rn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sm = Fe(lm), cm = ee({}, rn, { data: 0 }), Is = Fe(cm), fm = {
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
}, dm = {
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
}, hm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hm[e]) ? !!t[e] : !1;
}
function pl() {
  return pm;
}
var vm = ee({}, Kn, { key: function(e) {
  if (e.key) {
    var t = fm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ki(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
  return e.type === "keypress" ? ki(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mm = Fe(vm), gm = ee({}, yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ks = Fe(gm), ym = ee({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), Sm = Fe(ym), Em = ee({}, rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wm = Fe(Em), Tm = ee({}, yo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xm = Fe(Tm), Cm = [9, 13, 27, 32], vl = xt && "CompositionEvent" in window, On = null;
xt && "documentMode" in document && (On = document.documentMode);
var Om = xt && "TextEvent" in window && !On, yd = xt && (!vl || On && 8 < On && 11 >= On), Ns = " ", bs = !1;
function Sd(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
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
function Ed(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ir = !1;
function Dm(e, t) {
  switch (e) {
    case "compositionend":
      return Ed(t);
    case "keypress":
      return t.which !== 32 ? null : (bs = !0, Ns);
    case "textInput":
      return e = t.data, e === Ns && bs ? null : e;
    default:
      return null;
  }
}
function _m(e, t) {
  if (Ir) return e === "compositionend" || !vl && Sd(e, t) ? (e = gd(), Ii = dl = Mt = null, Ir = !1, e) : null;
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
      return yd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pm[e.type] : t === "textarea";
}
function wd(e, t, r, n) {
  qf(n), t = Ki(t, "onChange"), 0 < t.length && (r = new hl("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Dn = null, Fn = null;
function Im(e) {
  bd(e, 0);
}
function So(e) {
  var t = br(e);
  if (Vf(t)) return e;
}
function km(e, t) {
  if (e === "change") return t;
}
var Td = !1;
if (xt) {
  var oa;
  if (xt) {
    var aa = "oninput" in document;
    if (!aa) {
      var Ls = document.createElement("div");
      Ls.setAttribute("oninput", "return;"), aa = typeof Ls.oninput == "function";
    }
    oa = aa;
  } else oa = !1;
  Td = oa && (!document.documentMode || 9 < document.documentMode);
}
function Ms() {
  Dn && (Dn.detachEvent("onpropertychange", xd), Fn = Dn = null);
}
function xd(e) {
  if (e.propertyName === "value" && So(Fn)) {
    var t = [];
    wd(t, Fn, e, ul(e)), rd(Im, t);
  }
}
function Nm(e, t, r) {
  e === "focusin" ? (Ms(), Dn = t, Fn = r, Dn.attachEvent("onpropertychange", xd)) : e === "focusout" && Ms();
}
function bm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return So(Fn);
}
function Rm(e, t) {
  if (e === "click") return So(t);
}
function Lm(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function Mm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : Mm;
function Bn(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Aa.call(t, i) || !at(e[i], t[i])) return !1;
  }
  return !0;
}
function As(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hs(e, t) {
  var r = As(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = As(r);
  }
}
function Cd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Od() {
  for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Gi(e.document);
  }
  return t;
}
function ml(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Am(e) {
  var t = Od(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Cd(r.ownerDocument.documentElement, r)) {
    if (n !== null && ml(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, o = Math.min(n.start, i);
        n = n.end === void 0 ? o : Math.min(n.end, i), !e.extend && o > n && (i = n, n = o, o = i), i = Hs(r, o);
        var a = Hs(
          r,
          n
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hm = xt && "documentMode" in document && 11 >= document.documentMode, kr = null, tu = null, _n = null, ru = !1;
function Fs(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ru || kr == null || kr !== Gi(n) || (n = kr, "selectionStart" in n && ml(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), _n && Bn(_n, n) || (_n = n, n = Ki(tu, "onSelect"), 0 < n.length && (t = new hl("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = kr)));
}
function ci(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Nr = { animationend: ci("Animation", "AnimationEnd"), animationiteration: ci("Animation", "AnimationIteration"), animationstart: ci("Animation", "AnimationStart"), transitionend: ci("Transition", "TransitionEnd") }, ua = {}, Dd = {};
xt && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation), "TransitionEvent" in window || delete Nr.transitionend.transition);
function Eo(e) {
  if (ua[e]) return ua[e];
  if (!Nr[e]) return e;
  var t = Nr[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in Dd) return ua[e] = t[r];
  return e;
}
var _d = Eo("animationend"), Pd = Eo("animationiteration"), Id = Eo("animationstart"), kd = Eo("transitionend"), Nd = /* @__PURE__ */ new Map(), Bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xt(e, t) {
  Nd.set(e, t), gr(t, [e]);
}
for (var la = 0; la < Bs.length; la++) {
  var sa = Bs[la], Fm = sa.toLowerCase(), Bm = sa[0].toUpperCase() + sa.slice(1);
  Xt(Fm, "on" + Bm);
}
Xt(_d, "onAnimationEnd");
Xt(Pd, "onAnimationIteration");
Xt(Id, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(kd, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $m = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function $s(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, Fv(n, t, void 0, e), e.currentTarget = null;
}
function bd(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t) for (var a = n.length - 1; 0 <= a; a--) {
        var u = n[a], l = u.instance, s = u.currentTarget;
        if (u = u.listener, l !== o && i.isPropagationStopped()) break e;
        $s(i, u, s), o = l;
      }
      else for (a = 0; a < n.length; a++) {
        if (u = n[a], l = u.instance, s = u.currentTarget, u = u.listener, l !== o && i.isPropagationStopped()) break e;
        $s(i, u, s), o = l;
      }
    }
  }
  if (Wi) throw e = Ka, Wi = !1, Ka = null, e;
}
function Q(e, t) {
  var r = t[uu];
  r === void 0 && (r = t[uu] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Rd(t, e, 2, !1), r.add(n));
}
function ca(e, t, r) {
  var n = 0;
  t && (n |= 4), Rd(r, e, n, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[fi]) {
    e[fi] = !0, $f.forEach(function(r) {
      r !== "selectionchange" && ($m.has(r) || ca(r, !1, e), ca(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || (t[fi] = !0, ca("selectionchange", !1, t));
  }
}
function Rd(e, t, r, n) {
  switch (md(t)) {
    case 1:
      var i = em;
      break;
    case 4:
      i = tm;
      break;
    default:
      i = fl;
  }
  r = i.bind(null, t, r, e), i = void 0, !Za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function fa(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var a = n.tag;
    if (a === 3 || a === 4) {
      var u = n.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (a === 4) for (a = n.return; a !== null; ) {
        var l = a.tag;
        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        a = a.return;
      }
      for (; u !== null; ) {
        if (a = or(u), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          n = o = a;
          continue e;
        }
        u = u.parentNode;
      }
    }
    n = n.return;
  }
  rd(function() {
    var s = o, c = ul(r), d = [];
    e: {
      var h = Nd.get(e);
      if (h !== void 0) {
        var m = hl, S = e;
        switch (e) {
          case "keypress":
            if (ki(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = mm;
            break;
          case "focusin":
            S = "focus", m = ia;
            break;
          case "focusout":
            S = "blur", m = ia;
            break;
          case "beforeblur":
          case "afterblur":
            m = ia;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Sm;
            break;
          case _d:
          case Pd:
          case Id:
            m = um;
            break;
          case kd:
            m = wm;
            break;
          case "scroll":
            m = rm;
            break;
          case "wheel":
            m = xm;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = sm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = ks;
        }
        var g = (t & 4) !== 0, D = !g && e === "scroll", p = g ? h !== null ? h + "Capture" : null : h;
        g = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var y = v.stateNode;
          if (v.tag === 5 && y !== null && (v = y, p !== null && (y = Ln(f, p), y != null && g.push(Un(f, y, v)))), D) break;
          f = f.return;
        }
        0 < g.length && (h = new m(h, S, null, r, c), d.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", h && r !== Qa && (S = r.relatedTarget || r.fromElement) && (or(S) || S[Ct])) break e;
        if ((m || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (S = r.relatedTarget || r.toElement, m = s, S = S ? or(S) : null, S !== null && (D = yr(S), S !== D || S.tag !== 5 && S.tag !== 6) && (S = null)) : (m = null, S = s), m !== S)) {
          if (g = Ps, y = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = ks, y = "onPointerLeave", p = "onPointerEnter", f = "pointer"), D = m == null ? h : br(m), v = S == null ? h : br(S), h = new g(y, f + "leave", m, r, c), h.target = D, h.relatedTarget = v, y = null, or(c) === s && (g = new g(p, f + "enter", S, r, c), g.target = v, g.relatedTarget = D, y = g), D = y, m && S) t: {
            for (g = m, p = S, f = 0, v = g; v; v = xr(v)) f++;
            for (v = 0, y = p; y; y = xr(y)) v++;
            for (; 0 < f - v; ) g = xr(g), f--;
            for (; 0 < v - f; ) p = xr(p), v--;
            for (; f--; ) {
              if (g === p || p !== null && g === p.alternate) break t;
              g = xr(g), p = xr(p);
            }
            g = null;
          }
          else g = null;
          m !== null && Us(d, h, m, g, !1), S !== null && D !== null && Us(d, D, S, g, !0);
        }
      }
      e: {
        if (h = s ? br(s) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var w = km;
        else if (Rs(h)) if (Td) w = Lm;
        else {
          w = bm;
          var C = Nm;
        }
        else (m = h.nodeName) && m.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = Rm);
        if (w && (w = w(e, s))) {
          wd(d, w, r, c);
          break e;
        }
        C && C(e, h, s), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && za(h, "number", h.value);
      }
      switch (C = s ? br(s) : window, e) {
        case "focusin":
          (Rs(C) || C.contentEditable === "true") && (kr = C, tu = s, _n = null);
          break;
        case "focusout":
          _n = tu = kr = null;
          break;
        case "mousedown":
          ru = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ru = !1, Fs(d, r, c);
          break;
        case "selectionchange":
          if (Hm) break;
        case "keydown":
        case "keyup":
          Fs(d, r, c);
      }
      var x;
      if (vl) e: {
        switch (e) {
          case "compositionstart":
            var _ = "onCompositionStart";
            break e;
          case "compositionend":
            _ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            _ = "onCompositionUpdate";
            break e;
        }
        _ = void 0;
      }
      else Ir ? Sd(e, r) && (_ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      _ && (yd && r.locale !== "ko" && (Ir || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Ir && (x = gd()) : (Mt = c, dl = "value" in Mt ? Mt.value : Mt.textContent, Ir = !0)), C = Ki(s, _), 0 < C.length && (_ = new Is(_, e, null, r, c), d.push({ event: _, listeners: C }), x ? _.data = x : (x = Ed(r), x !== null && (_.data = x)))), (x = Om ? Dm(e, r) : _m(e, r)) && (s = Ki(s, "onBeforeInput"), 0 < s.length && (c = new Is("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: s }), c.data = x));
    }
    bd(d, t);
  });
}
function Un(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ki(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Ln(e, r), o != null && n.unshift(Un(e, o, i)), o = Ln(e, t), o != null && n.push(Un(e, o, i))), e = e.return;
  }
  return n;
}
function xr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Us(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var u = r, l = u.alternate, s = u.stateNode;
    if (l !== null && l === n) break;
    u.tag === 5 && s !== null && (u = s, i ? (l = Ln(r, o), l != null && a.unshift(Un(r, l, u))) : i || (l = Ln(r, o), l != null && a.push(Un(r, l, u)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Um = /\r\n?/g, jm = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e).replace(Um, `
`).replace(jm, "");
}
function di(e, t, r) {
  if (t = js(t), js(e) !== t && r) throw Error(E(425));
}
function qi() {
}
var nu = null, iu = null;
function ou(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var au = typeof setTimeout == "function" ? setTimeout : void 0, zm = typeof clearTimeout == "function" ? clearTimeout : void 0, zs = typeof Promise == "function" ? Promise : void 0, Gm = typeof queueMicrotask == "function" ? queueMicrotask : typeof zs < "u" ? function(e) {
  return zs.resolve(null).then(e).catch(Vm);
} : au;
function Vm(e) {
  setTimeout(function() {
    throw e;
  });
}
function da(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), Hn(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Hn(t);
}
function $t(e) {
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
function Gs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var nn = Math.random().toString(36).slice(2), ft = "__reactFiber$" + nn, jn = "__reactProps$" + nn, Ct = "__reactContainer$" + nn, uu = "__reactEvents$" + nn, Wm = "__reactListeners$" + nn, Xm = "__reactHandles$" + nn;
function or(e) {
  var t = e[ft];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Ct] || r[ft]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Gs(e); e !== null; ) {
        if (r = e[ft]) return r;
        e = Gs(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function qn(e) {
  return e = e[ft] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function wo(e) {
  return e[jn] || null;
}
var lu = [], Rr = -1;
function Qt(e) {
  return { current: e };
}
function Z(e) {
  0 > Rr || (e.current = lu[Rr], lu[Rr] = null, Rr--);
}
function X(e, t) {
  Rr++, lu[Rr] = e.current, e.current = t;
}
var Wt = {}, ge = Qt(Wt), Ie = Qt(!1), cr = Wt;
function Wr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Wt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in r) i[o] = t[o];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function Ji() {
  Z(Ie), Z(ge);
}
function Vs(e, t, r) {
  if (ge.current !== Wt) throw Error(E(168));
  X(ge, t), X(Ie, r);
}
function Ld(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(E(108, Nv(e) || "Unknown", i));
  return ee({}, r, n);
}
function eo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, cr = ge.current, X(ge, e), X(Ie, Ie.current), !0;
}
function Ws(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r ? (e = Ld(e, t, cr), n.__reactInternalMemoizedMergedChildContext = e, Z(Ie), Z(ge), X(ge, e)) : Z(Ie), X(Ie, r);
}
var St = null, To = !1, ha = !1;
function Md(e) {
  St === null ? St = [e] : St.push(e);
}
function Qm(e) {
  To = !0, Md(e);
}
function Yt() {
  if (!ha && St !== null) {
    ha = !0;
    var e = 0, t = V;
    try {
      var r = St;
      for (V = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      St = null, To = !1;
    } catch (i) {
      throw St !== null && (St = St.slice(e + 1)), ad(ll, Yt), i;
    } finally {
      V = t, ha = !1;
    }
  }
  return null;
}
var Lr = [], Mr = 0, to = null, ro = 0, ze = [], Ge = 0, fr = null, Et = 1, wt = "";
function tr(e, t) {
  Lr[Mr++] = ro, Lr[Mr++] = to, to = e, ro = t;
}
function Ad(e, t, r) {
  ze[Ge++] = Et, ze[Ge++] = wt, ze[Ge++] = fr, fr = e;
  var n = Et;
  e = wt;
  var i = 32 - it(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - it(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, Et = 1 << 32 - it(t) + i | r << i | n, wt = o + e;
  } else Et = 1 << o | r << i | n, wt = e;
}
function gl(e) {
  e.return !== null && (tr(e, 1), Ad(e, 1, 0));
}
function yl(e) {
  for (; e === to; ) to = Lr[--Mr], Lr[Mr] = null, ro = Lr[--Mr], Lr[Mr] = null;
  for (; e === fr; ) fr = ze[--Ge], ze[Ge] = null, wt = ze[--Ge], ze[Ge] = null, Et = ze[--Ge], ze[Ge] = null;
}
var Le = null, Re = null, K = !1, nt = null;
function Hd(e, t) {
  var r = We(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Xs(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Re = $t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = fr !== null ? { id: Et, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = We(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Le = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function su(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cu(e) {
  if (K) {
    var t = Re;
    if (t) {
      var r = t;
      if (!Xs(e, t)) {
        if (su(e)) throw Error(E(418));
        t = $t(r.nextSibling);
        var n = Le;
        t && Xs(e, t) ? Hd(n, r) : (e.flags = e.flags & -4097 | 2, K = !1, Le = e);
      }
    } else {
      if (su(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, K = !1, Le = e;
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function hi(e) {
  if (e !== Le) return !1;
  if (!K) return Qs(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ou(e.type, e.memoizedProps)), t && (t = Re)) {
    if (su(e)) throw Fd(), Error(E(418));
    for (; t; ) Hd(e, t), t = $t(t.nextSibling);
  }
  if (Qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Re = $t(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Le ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Fd() {
  for (var e = Re; e; ) e = $t(e.nextSibling);
}
function Xr() {
  Re = Le = null, K = !1;
}
function Sl(e) {
  nt === null ? nt = [e] : nt.push(e);
}
var Ym = _t.ReactCurrentBatchConfig;
function dn(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var i = n, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var u = i.refs;
        a === null ? delete u[o] : u[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function pi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ys(e) {
  var t = e._init;
  return t(e._payload);
}
function Bd(e) {
  function t(p, f) {
    if (e) {
      var v = p.deletions;
      v === null ? (p.deletions = [f], p.flags |= 16) : v.push(f);
    }
  }
  function r(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function n(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function i(p, f) {
    return p = Gt(p, f), p.index = 0, p.sibling = null, p;
  }
  function o(p, f, v) {
    return p.index = v, e ? (v = p.alternate, v !== null ? (v = v.index, v < f ? (p.flags |= 2, f) : v) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, v, y) {
    return f === null || f.tag !== 6 ? (f = Ea(v, p.mode, y), f.return = p, f) : (f = i(f, v), f.return = p, f);
  }
  function l(p, f, v, y) {
    var w = v.type;
    return w === Pr ? c(p, f, v.props.children, y, v.key) : f !== null && (f.elementType === w || typeof w == "object" && w !== null && w.$$typeof === kt && Ys(w) === f.type) ? (y = i(f, v.props), y.ref = dn(p, f, v), y.return = p, y) : (y = Hi(v.type, v.key, v.props, null, p.mode, y), y.ref = dn(p, f, v), y.return = p, y);
  }
  function s(p, f, v, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = wa(v, p.mode, y), f.return = p, f) : (f = i(f, v.children || []), f.return = p, f);
  }
  function c(p, f, v, y, w) {
    return f === null || f.tag !== 7 ? (f = sr(v, p.mode, y, w), f.return = p, f) : (f = i(f, v), f.return = p, f);
  }
  function d(p, f, v) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ea("" + f, p.mode, v), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ni:
          return v = Hi(f.type, f.key, f.props, null, p.mode, v), v.ref = dn(p, null, f), v.return = p, v;
        case _r:
          return f = wa(f, p.mode, v), f.return = p, f;
        case kt:
          var y = f._init;
          return d(p, y(f._payload), v);
      }
      if (yn(f) || un(f)) return f = sr(f, p.mode, v, null), f.return = p, f;
      pi(p, f);
    }
    return null;
  }
  function h(p, f, v, y) {
    var w = f !== null ? f.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return w !== null ? null : u(p, f, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ni:
          return v.key === w ? l(p, f, v, y) : null;
        case _r:
          return v.key === w ? s(p, f, v, y) : null;
        case kt:
          return w = v._init, h(
            p,
            f,
            w(v._payload),
            y
          );
      }
      if (yn(v) || un(v)) return w !== null ? null : c(p, f, v, y, null);
      pi(p, v);
    }
    return null;
  }
  function m(p, f, v, y, w) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return p = p.get(v) || null, u(f, p, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ni:
          return p = p.get(y.key === null ? v : y.key) || null, l(f, p, y, w);
        case _r:
          return p = p.get(y.key === null ? v : y.key) || null, s(f, p, y, w);
        case kt:
          var C = y._init;
          return m(p, f, v, C(y._payload), w);
      }
      if (yn(y) || un(y)) return p = p.get(v) || null, c(f, p, y, w, null);
      pi(f, y);
    }
    return null;
  }
  function S(p, f, v, y) {
    for (var w = null, C = null, x = f, _ = f = 0, G = null; x !== null && _ < v.length; _++) {
      x.index > _ ? (G = x, x = null) : G = x.sibling;
      var R = h(p, x, v[_], y);
      if (R === null) {
        x === null && (x = G);
        break;
      }
      e && x && R.alternate === null && t(p, x), f = o(R, f, _), C === null ? w = R : C.sibling = R, C = R, x = G;
    }
    if (_ === v.length) return r(p, x), K && tr(p, _), w;
    if (x === null) {
      for (; _ < v.length; _++) x = d(p, v[_], y), x !== null && (f = o(x, f, _), C === null ? w = x : C.sibling = x, C = x);
      return K && tr(p, _), w;
    }
    for (x = n(p, x); _ < v.length; _++) G = m(x, p, _, v[_], y), G !== null && (e && G.alternate !== null && x.delete(G.key === null ? _ : G.key), f = o(G, f, _), C === null ? w = G : C.sibling = G, C = G);
    return e && x.forEach(function(ae) {
      return t(p, ae);
    }), K && tr(p, _), w;
  }
  function g(p, f, v, y) {
    var w = un(v);
    if (typeof w != "function") throw Error(E(150));
    if (v = w.call(v), v == null) throw Error(E(151));
    for (var C = w = null, x = f, _ = f = 0, G = null, R = v.next(); x !== null && !R.done; _++, R = v.next()) {
      x.index > _ ? (G = x, x = null) : G = x.sibling;
      var ae = h(p, x, R.value, y);
      if (ae === null) {
        x === null && (x = G);
        break;
      }
      e && x && ae.alternate === null && t(p, x), f = o(ae, f, _), C === null ? w = ae : C.sibling = ae, C = ae, x = G;
    }
    if (R.done) return r(
      p,
      x
    ), K && tr(p, _), w;
    if (x === null) {
      for (; !R.done; _++, R = v.next()) R = d(p, R.value, y), R !== null && (f = o(R, f, _), C === null ? w = R : C.sibling = R, C = R);
      return K && tr(p, _), w;
    }
    for (x = n(p, x); !R.done; _++, R = v.next()) R = m(x, p, _, R.value, y), R !== null && (e && R.alternate !== null && x.delete(R.key === null ? _ : R.key), f = o(R, f, _), C === null ? w = R : C.sibling = R, C = R);
    return e && x.forEach(function(vt) {
      return t(p, vt);
    }), K && tr(p, _), w;
  }
  function D(p, f, v, y) {
    if (typeof v == "object" && v !== null && v.type === Pr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ni:
          e: {
            for (var w = v.key, C = f; C !== null; ) {
              if (C.key === w) {
                if (w = v.type, w === Pr) {
                  if (C.tag === 7) {
                    r(p, C.sibling), f = i(C, v.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === kt && Ys(w) === C.type) {
                  r(p, C.sibling), f = i(C, v.props), f.ref = dn(p, C, v), f.return = p, p = f;
                  break e;
                }
                r(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            v.type === Pr ? (f = sr(v.props.children, p.mode, y, v.key), f.return = p, p = f) : (y = Hi(v.type, v.key, v.props, null, p.mode, y), y.ref = dn(p, f, v), y.return = p, p = y);
          }
          return a(p);
        case _r:
          e: {
            for (C = v.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                r(p, f.sibling), f = i(f, v.children || []), f.return = p, p = f;
                break e;
              } else {
                r(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = wa(v, p.mode, y), f.return = p, p = f;
          }
          return a(p);
        case kt:
          return C = v._init, D(p, f, C(v._payload), y);
      }
      if (yn(v)) return S(p, f, v, y);
      if (un(v)) return g(p, f, v, y);
      pi(p, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, f !== null && f.tag === 6 ? (r(p, f.sibling), f = i(f, v), f.return = p, p = f) : (r(p, f), f = Ea(v, p.mode, y), f.return = p, p = f), a(p)) : r(p, f);
  }
  return D;
}
var Qr = Bd(!0), $d = Bd(!1), no = Qt(null), io = null, Ar = null, El = null;
function wl() {
  El = Ar = io = null;
}
function Tl(e) {
  var t = no.current;
  Z(no), e._currentValue = t;
}
function fu(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function zr(e, t) {
  io = e, El = Ar = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (El !== e) if (e = { context: e, memoizedValue: t, next: null }, Ar === null) {
    if (io === null) throw Error(E(308));
    Ar = e, io.dependencies = { lanes: 0, firstContext: e };
  } else Ar = Ar.next = e;
  return t;
}
var ar = null;
function xl(e) {
  ar === null ? ar = [e] : ar.push(e);
}
function Ud(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, xl(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Ot(e, n);
}
function Ot(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Nt = !1;
function Cl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, z & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Ot(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, xl(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Ot(e, r);
}
function Ni(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
function Zs(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, o = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        o === null ? i = o = a : o = o.next = a, r = r.next;
      } while (r !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function oo(e, t, r, n) {
  var i = e.updateQueue;
  Nt = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var l = u, s = l.next;
    l.next = null, a === null ? o = s : a.next = s, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== a && (u === null ? c.firstBaseUpdate = s : u.next = s, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var d = i.baseState;
    a = 0, c = s = l = null, u = o;
    do {
      var h = u.lane, m = u.eventTime;
      if ((n & h) === h) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (h = t, m = r, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                d = S.call(m, d, h);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, h = typeof S == "function" ? S.call(m, d, h) : S, h == null) break e;
              d = ee({}, d, h);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [u] : h.push(u));
      } else m = { eventTime: m, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (s = c = m, l = d) : c = c.next = m, a |= h;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    hr |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Ks(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(E(191, i));
      i.call(n);
    }
  }
}
var Jn = {}, ht = Qt(Jn), zn = Qt(Jn), Gn = Qt(Jn);
function ur(e) {
  if (e === Jn) throw Error(E(174));
  return e;
}
function Ol(e, t) {
  switch (X(Gn, t), X(zn, e), X(ht, Jn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Va(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Va(t, e);
  }
  Z(ht), X(ht, t);
}
function Yr() {
  Z(ht), Z(zn), Z(Gn);
}
function zd(e) {
  ur(Gn.current);
  var t = ur(ht.current), r = Va(t, e.type);
  t !== r && (X(zn, e), X(ht, r));
}
function Dl(e) {
  zn.current === e && (Z(ht), Z(zn));
}
var q = Qt(0);
function ao(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
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
var pa = [];
function _l() {
  for (var e = 0; e < pa.length; e++) pa[e]._workInProgressVersionPrimary = null;
  pa.length = 0;
}
var bi = _t.ReactCurrentDispatcher, va = _t.ReactCurrentBatchConfig, dr = 0, J = null, ie = null, ue = null, uo = !1, Pn = !1, Vn = 0, Zm = 0;
function he() {
  throw Error(E(321));
}
function Pl(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!at(e[r], t[r])) return !1;
  return !0;
}
function Il(e, t, r, n, i, o) {
  if (dr = o, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bi.current = e === null || e.memoizedState === null ? eg : tg, e = r(n, i), Pn) {
    o = 0;
    do {
      if (Pn = !1, Vn = 0, 25 <= o) throw Error(E(301));
      o += 1, ue = ie = null, t.updateQueue = null, bi.current = rg, e = r(n, i);
    } while (Pn);
  }
  if (bi.current = lo, t = ie !== null && ie.next !== null, dr = 0, ue = ie = J = null, uo = !1, t) throw Error(E(300));
  return e;
}
function kl() {
  var e = Vn !== 0;
  return Vn = 0, e;
}
function ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? J.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Ye() {
  if (ie === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ue === null ? J.memoizedState : ue.next;
  if (t !== null) ue = t, ie = e;
  else {
    if (e === null) throw Error(E(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ue === null ? J.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ma(e) {
  var t = Ye(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = ie, i = n.baseQueue, o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    n.baseQueue = i = o, r.pending = null;
  }
  if (i !== null) {
    o = i.next, n = n.baseState;
    var u = a = null, l = null, s = o;
    do {
      var c = s.lane;
      if ((dr & c) === c) l !== null && (l = l.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), n = s.hasEagerState ? s.eagerState : e(n, s.action);
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        l === null ? (u = l = d, a = n) : l = l.next = d, J.lanes |= c, hr |= c;
      }
      s = s.next;
    } while (s !== null && s !== o);
    l === null ? a = n : l.next = u, at(n, t.memoizedState) || (Pe = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, J.lanes |= o, hr |= o, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ga(e) {
  var t = Ye(), r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    at(o, t.memoizedState) || (Pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), r.lastRenderedState = o;
  }
  return [o, n];
}
function Gd() {
}
function Vd(e, t) {
  var r = J, n = Ye(), i = t(), o = !at(n.memoizedState, i);
  if (o && (n.memoizedState = i, Pe = !0), n = n.queue, Nl(Qd.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
    if (r.flags |= 2048, Xn(9, Xd.bind(null, r, n, i, t), void 0, null), le === null) throw Error(E(349));
    dr & 30 || Wd(r, t, i);
  }
  return i;
}
function Wd(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function Xd(e, t, r, n) {
  t.value = r, t.getSnapshot = n, Yd(t) && Zd(e);
}
function Qd(e, t, r) {
  return r(function() {
    Yd(t) && Zd(e);
  });
}
function Yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !at(e, r);
  } catch {
    return !0;
  }
}
function Zd(e) {
  var t = Ot(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function qs(e) {
  var t = ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jm.bind(null, J, e), [t.memoizedState, e];
}
function Xn(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function Kd() {
  return Ye().memoizedState;
}
function Ri(e, t, r, n) {
  var i = ct();
  J.flags |= e, i.memoizedState = Xn(1 | t, r, void 0, n === void 0 ? null : n);
}
function xo(e, t, r, n) {
  var i = Ye();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (ie !== null) {
    var a = ie.memoizedState;
    if (o = a.destroy, n !== null && Pl(n, a.deps)) {
      i.memoizedState = Xn(t, r, o, n);
      return;
    }
  }
  J.flags |= e, i.memoizedState = Xn(1 | t, r, o, n);
}
function Js(e, t) {
  return Ri(8390656, 8, e, t);
}
function Nl(e, t) {
  return xo(2048, 8, e, t);
}
function qd(e, t) {
  return xo(4, 2, e, t);
}
function Jd(e, t) {
  return xo(4, 4, e, t);
}
function eh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function th(e, t, r) {
  return r = r != null ? r.concat([e]) : null, xo(4, 4, eh.bind(null, t, e), r);
}
function bl() {
}
function rh(e, t) {
  var r = Ye();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Pl(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function nh(e, t) {
  var r = Ye();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Pl(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function ih(e, t, r) {
  return dr & 21 ? (at(r, t) || (r = sd(), J.lanes |= r, hr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = r);
}
function Km(e, t) {
  var r = V;
  V = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = va.transition;
  va.transition = {};
  try {
    e(!1), t();
  } finally {
    V = r, va.transition = n;
  }
}
function oh() {
  return Ye().memoizedState;
}
function qm(e, t, r) {
  var n = zt(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, ah(e)) uh(t, r);
  else if (r = Ud(e, t, r, n), r !== null) {
    var i = Ce();
    ot(r, e, n, i), lh(r, t, n);
  }
}
function Jm(e, t, r) {
  var n = zt(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (ah(e)) uh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var a = t.lastRenderedState, u = o(a, r);
      if (i.hasEagerState = !0, i.eagerState = u, at(u, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, xl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = Ud(e, t, i, n), r !== null && (i = Ce(), ot(r, e, n, i), lh(r, t, n));
  }
}
function ah(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J;
}
function uh(e, t) {
  Pn = uo = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function lh(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, sl(e, r);
  }
}
var lo = { readContext: Qe, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, eg = { readContext: Qe, useCallback: function(e, t) {
  return ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Js, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ri(
    4194308,
    4,
    eh.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Ri(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ri(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = ct();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = ct();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = qm.bind(null, J, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: qs, useDebugValue: bl, useDeferredValue: function(e) {
  return ct().memoizedState = e;
}, useTransition: function() {
  var e = qs(!1), t = e[0];
  return e = Km.bind(null, e[1]), ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = J, i = ct();
  if (K) {
    if (r === void 0) throw Error(E(407));
    r = r();
  } else {
    if (r = t(), le === null) throw Error(E(349));
    dr & 30 || Wd(n, t, r);
  }
  i.memoizedState = r;
  var o = { value: r, getSnapshot: t };
  return i.queue = o, Js(Qd.bind(
    null,
    n,
    o,
    e
  ), [e]), n.flags |= 2048, Xn(9, Xd.bind(null, n, o, r, t), void 0, null), r;
}, useId: function() {
  var e = ct(), t = le.identifierPrefix;
  if (K) {
    var r = wt, n = Et;
    r = (n & ~(1 << 32 - it(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Vn++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = Zm++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, tg = {
  readContext: Qe,
  useCallback: rh,
  useContext: Qe,
  useEffect: Nl,
  useImperativeHandle: th,
  useInsertionEffect: qd,
  useLayoutEffect: Jd,
  useMemo: nh,
  useReducer: ma,
  useRef: Kd,
  useState: function() {
    return ma(Wn);
  },
  useDebugValue: bl,
  useDeferredValue: function(e) {
    var t = Ye();
    return ih(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ma(Wn)[0], t = Ye().memoizedState;
    return [e, t];
  },
  useMutableSource: Gd,
  useSyncExternalStore: Vd,
  useId: oh,
  unstable_isNewReconciler: !1
}, rg = { readContext: Qe, useCallback: rh, useContext: Qe, useEffect: Nl, useImperativeHandle: th, useInsertionEffect: qd, useLayoutEffect: Jd, useMemo: nh, useReducer: ga, useRef: Kd, useState: function() {
  return ga(Wn);
}, useDebugValue: bl, useDeferredValue: function(e) {
  var t = Ye();
  return ie === null ? t.memoizedState = e : ih(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = ga(Wn)[0], t = Ye().memoizedState;
  return [e, t];
}, useMutableSource: Gd, useSyncExternalStore: Vd, useId: oh, unstable_isNewReconciler: !1 };
function tt(e, t) {
  if (e && e.defaultProps) {
    t = ee({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function du(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : ee({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Co = { isMounted: function(e) {
  return (e = e._reactInternals) ? yr(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = Ce(), i = zt(e), o = Tt(n, i);
  o.payload = t, r != null && (o.callback = r), t = Ut(e, o, i), t !== null && (ot(t, e, i, n), Ni(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = Ce(), i = zt(e), o = Tt(n, i);
  o.tag = 1, o.payload = t, r != null && (o.callback = r), t = Ut(e, o, i), t !== null && (ot(t, e, i, n), Ni(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = Ce(), n = zt(e), i = Tt(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Ut(e, i, n), t !== null && (ot(t, e, n, r), Ni(t, e, n));
} };
function ec(e, t, r, n, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Bn(r, n) || !Bn(i, o) : !0;
}
function sh(e, t, r) {
  var n = !1, i = Wt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Qe(o) : (i = ke(t) ? cr : ge.current, n = t.contextTypes, o = (n = n != null) ? Wr(e, i) : Wt), t = new t(r, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Co, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function tc(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function hu(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, Cl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Qe(o) : (o = ke(t) ? cr : ge.current, i.context = Wr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (du(e, t, o, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Co.enqueueReplaceState(i, i.state, null), oo(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t) {
  try {
    var r = "", n = t;
    do
      r += kv(n), n = n.return;
    while (n);
    var i = r;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ya(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function pu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var ng = typeof WeakMap == "function" ? WeakMap : Map;
function ch(e, t, r) {
  r = Tt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    co || (co = !0, Cu = n), pu(e, t);
  }, r;
}
function fh(e, t, r) {
  r = Tt(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      pu(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
    pu(e, t), typeof n != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function rc(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ng();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = gg.bind(null, e, t, r), t.then(e, e));
}
function nc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ic(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Ut(r, t, 1))), r.lanes |= 1), e);
}
var ig = _t.ReactCurrentOwner, Pe = !1;
function Ee(e, t, r, n) {
  t.child = e === null ? $d(t, null, r, n) : Qr(t, e.child, r, n);
}
function oc(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return zr(t, i), n = Il(e, t, r, n, o, i), r = kl(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (K && r && gl(t), t.flags |= 1, Ee(e, t, n, i), t.child);
}
function ac(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !$l(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = o, dh(e, t, o, n, i)) : (e = Hi(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Bn, r(a, n) && e.ref === t.ref) return Dt(e, t, i);
  }
  return t.flags |= 1, e = Gt(o, n), e.ref = t.ref, e.return = t, t.child = e;
}
function dh(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Bn(o, n) && e.ref === t.ref) if (Pe = !1, t.pendingProps = n = o, (e.lanes & i) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, Dt(e, t, i);
  }
  return vu(e, t, r, n, i);
}
function hh(e, t, r) {
  var n = t.pendingProps, i = n.children, o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Fr, be), be |= r;
  else {
    if (!(r & 1073741824)) return e = o !== null ? o.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Fr, be), be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : r, X(Fr, be), be |= n;
  }
  else o !== null ? (n = o.baseLanes | r, t.memoizedState = null) : n = r, X(Fr, be), be |= n;
  return Ee(e, t, i, r), t.child;
}
function ph(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function vu(e, t, r, n, i) {
  var o = ke(r) ? cr : ge.current;
  return o = Wr(t, o), zr(t, i), r = Il(e, t, r, n, o, i), n = kl(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Dt(e, t, i)) : (K && n && gl(t), t.flags |= 1, Ee(e, t, r, i), t.child);
}
function uc(e, t, r, n, i) {
  if (ke(r)) {
    var o = !0;
    eo(t);
  } else o = !1;
  if (zr(t, i), t.stateNode === null) Li(e, t), sh(t, r, n), hu(t, r, n, i), n = !0;
  else if (e === null) {
    var a = t.stateNode, u = t.memoizedProps;
    a.props = u;
    var l = a.context, s = r.contextType;
    typeof s == "object" && s !== null ? s = Qe(s) : (s = ke(r) ? cr : ge.current, s = Wr(t, s));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== n || l !== s) && tc(t, a, n, s), Nt = !1;
    var h = t.memoizedState;
    a.state = h, oo(t, n, a, i), l = t.memoizedState, u !== n || h !== l || Ie.current || Nt ? (typeof c == "function" && (du(t, r, c, n), l = t.memoizedState), (u = Nt || ec(t, r, u, n, h, l, s)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = s, n = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, jd(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : tt(t.type, u), a.props = s, d = t.pendingProps, h = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Qe(l) : (l = ke(r) ? cr : ge.current, l = Wr(t, l));
    var m = r.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== d || h !== l) && tc(t, a, n, l), Nt = !1, h = t.memoizedState, a.state = h, oo(t, n, a, i);
    var S = t.memoizedState;
    u !== d || h !== S || Ie.current || Nt ? (typeof m == "function" && (du(t, r, m, n), S = t.memoizedState), (s = Nt || ec(t, r, s, n, h, S, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, S, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, S, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = S), a.props = n, a.state = S, a.context = l, n = s) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return mu(e, t, r, n, o, i);
}
function mu(e, t, r, n, i, o) {
  ph(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && Ws(t, r, !1), Dt(e, t, o);
  n = t.stateNode, ig.current = t;
  var u = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Qr(t, e.child, null, o), t.child = Qr(t, null, u, o)) : Ee(e, t, u, o), t.memoizedState = n.state, i && Ws(t, r, !0), t.child;
}
function vh(e) {
  var t = e.stateNode;
  t.pendingContext ? Vs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vs(e, t.context, !1), Ol(e, t.containerInfo);
}
function lc(e, t, r, n, i) {
  return Xr(), Sl(i), t.flags |= 256, Ee(e, t, r, n), t.child;
}
var gu = { dehydrated: null, treeContext: null, retryLane: 0 };
function yu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mh(e, t, r) {
  var n = t.pendingProps, i = q.current, o = !1, a = (t.flags & 128) !== 0, u;
  if ((u = a) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(q, i & 1), e === null)
    return cu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = _o(a, n, 0, null), e = sr(e, n, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = yu(r), t.memoizedState = gu, e) : Rl(t, a));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return og(e, t, a, n, u, i, r);
  if (o) {
    o = n.fallback, a = t.mode, i = e.child, u = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Gt(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Gt(u, o) : (o = sr(o, a, r, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, a = e.child.memoizedState, a = a === null ? yu(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~r, t.memoizedState = gu, n;
  }
  return o = e.child, e = o.sibling, n = Gt(o, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Rl(e, t) {
  return t = _o({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vi(e, t, r, n) {
  return n !== null && Sl(n), Qr(t, e.child, null, r), e = Rl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function og(e, t, r, n, i, o, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = ya(Error(E(422))), vi(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, i = t.mode, n = _o({ mode: "visible", children: n.children }, i, 0, null), o = sr(o, i, a, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, t.mode & 1 && Qr(t, e.child, null, a), t.child.memoizedState = yu(a), t.memoizedState = gu, o);
  if (!(t.mode & 1)) return vi(e, t, a, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var u = n.dgst;
    return n = u, o = Error(E(419)), n = ya(o, n, void 0), vi(e, t, a, n);
  }
  if (u = (a & e.childLanes) !== 0, Pe || u) {
    if (n = le, n !== null) {
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
      i = i & (n.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Ot(e, i), ot(n, e, i, -1));
    }
    return Bl(), n = ya(Error(E(421))), vi(e, t, a, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = $t(i.nextSibling), Le = t, K = !0, nt = null, e !== null && (ze[Ge++] = Et, ze[Ge++] = wt, ze[Ge++] = fr, Et = e.id, wt = e.overflow, fr = t), t = Rl(t, n.children), t.flags |= 4096, t);
}
function sc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), fu(e.return, t, r);
}
function Sa(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = i);
}
function gh(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, o = n.tail;
  if (Ee(e, t, n.children, r), n = q.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sc(e, r, t);
      else if (e.tag === 19) sc(e, r, t);
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
    n &= 1;
  }
  if (X(q, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && ao(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Sa(t, !1, i, r, o);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ao(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      Sa(t, !0, r, null, o);
      break;
    case "together":
      Sa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Li(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), hr |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, r = Gt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Gt(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function ag(e, t, r) {
  switch (t.tag) {
    case 3:
      vh(t), Xr();
      break;
    case 5:
      zd(t);
      break;
    case 1:
      ke(t.type) && eo(t);
      break;
    case 4:
      Ol(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      X(no, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (X(q, q.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? mh(e, t, r) : (X(q, q.current & 1), e = Dt(e, t, r), e !== null ? e.sibling : null);
      X(q, q.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return gh(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(q, q.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hh(e, t, r);
  }
  return Dt(e, t, r);
}
var yh, Su, Sh, Eh;
yh = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Su = function() {
};
Sh = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, ur(ht.current);
    var o = null;
    switch (r) {
      case "input":
        i = Ua(e, i), n = Ua(e, n), o = [];
        break;
      case "select":
        i = ee({}, i, { value: void 0 }), n = ee({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Ga(e, i), n = Ga(e, n), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = qi);
    }
    Wa(r, n);
    var a;
    r = null;
    for (s in i) if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (a in u) u.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (bn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in n) {
      var l = n[s];
      if (u = i != null ? i[s] : void 0, n.hasOwnProperty(s) && l !== u && (l != null || u != null)) if (s === "style") if (u) {
        for (a in u) !u.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
        for (a in l) l.hasOwnProperty(a) && u[a] !== l[a] && (r || (r = {}), r[a] = l[a]);
      } else r || (o || (o = []), o.push(
        s,
        r
      )), r = l;
      else s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(s, l)) : s === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(s, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (bn.hasOwnProperty(s) ? (l != null && s === "onScroll" && Q("scroll", e), o || u === l || (o = [])) : (o = o || []).push(s, l));
    }
    r && (o = o || []).push("style", r);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Eh = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function hn(e, t) {
  if (!K) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function ug(e, t, r) {
  var n = t.pendingProps;
  switch (yl(t), t.tag) {
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
      return ke(t.type) && Ji(), pe(t), null;
    case 3:
      return n = t.stateNode, Yr(), Z(Ie), Z(ge), _l(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nt !== null && (_u(nt), nt = null))), Su(e, t), pe(t), null;
    case 5:
      Dl(t);
      var i = ur(Gn.current);
      if (r = t.type, e !== null && t.stateNode != null) Sh(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return pe(t), null;
        }
        if (e = ur(ht.current), hi(t)) {
          n = t.stateNode, r = t.type;
          var o = t.memoizedProps;
          switch (n[ft] = t, n[jn] = o, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Q("cancel", n), Q("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < En.length; i++) Q(En[i], n);
              break;
            case "source":
              Q("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Q(
                "error",
                n
              ), Q("load", n);
              break;
            case "details":
              Q("toggle", n);
              break;
            case "input":
              ys(n, o), Q("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, Q("invalid", n);
              break;
            case "textarea":
              Es(n, o), Q("invalid", n);
          }
          Wa(r, o), i = null;
          for (var a in o) if (o.hasOwnProperty(a)) {
            var u = o[a];
            a === "children" ? typeof u == "string" ? n.textContent !== u && (o.suppressHydrationWarning !== !0 && di(n.textContent, u, e), i = ["children", u]) : typeof u == "number" && n.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && di(
              n.textContent,
              u,
              e
            ), i = ["children", "" + u]) : bn.hasOwnProperty(a) && u != null && a === "onScroll" && Q("scroll", n);
          }
          switch (r) {
            case "input":
              ii(n), Ss(n, o, !0);
              break;
            case "textarea":
              ii(n), ws(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = qi);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qf(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[ft] = t, e[jn] = n, yh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Xa(r, n), r) {
              case "dialog":
                Q("cancel", e), Q("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < En.length; i++) Q(En[i], e);
                i = n;
                break;
              case "source":
                Q("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  e
                ), Q("load", e), i = n;
                break;
              case "details":
                Q("toggle", e), i = n;
                break;
              case "input":
                ys(e, n), i = Ua(e, n), Q("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = ee({}, n, { value: void 0 }), Q("invalid", e);
                break;
              case "textarea":
                Es(e, n), i = Ga(e, n), Q("invalid", e);
                break;
              default:
                i = n;
            }
            Wa(r, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Kf(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Yf(e, l)) : o === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Rn(e, l) : typeof l == "number" && Rn(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (bn.hasOwnProperty(o) ? l != null && o === "onScroll" && Q("scroll", e) : l != null && nl(e, o, l, a));
            }
            switch (r) {
              case "input":
                ii(e), Ss(e, n, !1);
                break;
              case "textarea":
                ii(e), ws(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Vt(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, o = n.value, o != null ? Br(e, !!n.multiple, o, !1) : n.defaultValue != null && Br(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = qi);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Eh(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (r = ur(Gn.current), ur(ht.current), hi(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[ft] = t, (o = n.nodeValue !== r) && (e = Le, e !== null)) switch (e.tag) {
            case 3:
              di(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && di(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[ft] = t, t.stateNode = n;
      }
      return pe(t), null;
    case 13:
      if (Z(q), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) Fd(), Xr(), t.flags |= 98560, o = !1;
        else if (o = hi(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[ft] = t;
          } else Xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          pe(t), o = !1;
        } else nt !== null && (_u(nt), nt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? oe === 0 && (oe = 3) : Bl())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
    case 4:
      return Yr(), Su(e, t), e === null && $n(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Tl(t.type._context), pe(t), null;
    case 17:
      return ke(t.type) && Ji(), pe(t), null;
    case 19:
      if (Z(q), o = t.memoizedState, o === null) return pe(t), null;
      if (n = (t.flags & 128) !== 0, a = o.rendering, a === null) if (n) hn(o, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = ao(e), a !== null) {
            for (t.flags |= 128, hn(o, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) o = r, e = n, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return X(q, q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && re() > Kr && (t.flags |= 128, n = !0, hn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = ao(a), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), hn(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !K) return pe(t), null;
        } else 2 * re() - o.renderingStartTime > Kr && r !== 1073741824 && (t.flags |= 128, n = !0, hn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (r = o.last, r !== null ? r.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = re(), t.sibling = null, r = q.current, X(q, n ? r & 1 | 2 : r & 1), t) : (pe(t), null);
    case 22:
    case 23:
      return Fl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? be & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function lg(e, t) {
  switch (yl(t), t.tag) {
    case 1:
      return ke(t.type) && Ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Yr(), Z(Ie), Z(ge), _l(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Dl(t), null;
    case 13:
      if (Z(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Xr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(q), null;
    case 4:
      return Yr(), null;
    case 10:
      return Tl(t.type._context), null;
    case 22:
    case 23:
      return Fl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mi = !1, me = !1, sg = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function Hr(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    te(e, t, n);
  }
  else r.current = null;
}
function Eu(e, t, r) {
  try {
    r();
  } catch (n) {
    te(e, t, n);
  }
}
var cc = !1;
function cg(e, t) {
  if (nu = Yi, e = Od(), ml(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, o.nodeType;
        } catch {
          r = null;
          break e;
        }
        var a = 0, u = -1, l = -1, s = 0, c = 0, d = e, h = null;
        t: for (; ; ) {
          for (var m; d !== r || i !== 0 && d.nodeType !== 3 || (u = a + i), d !== o || n !== 0 && d.nodeType !== 3 || (l = a + n), d.nodeType === 3 && (a += d.nodeValue.length), (m = d.firstChild) !== null; )
            h = d, d = m;
          for (; ; ) {
            if (d === e) break t;
            if (h === r && ++s === i && (u = a), h === o && ++c === n && (l = a), (m = d.nextSibling) !== null) break;
            d = h, h = d.parentNode;
          }
          d = m;
        }
        r = u === -1 || l === -1 ? null : { start: u, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (iu = { focusedElem: e, selectionRange: r }, Yi = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var g = S.memoizedProps, D = S.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : tt(t.type, g), D);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (y) {
      te(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return S = cc, cc = !1, S;
}
function In(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Eu(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Oo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function wu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function wh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, wh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ft], delete t[jn], delete t[uu], delete t[Wm], delete t[Xm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Th(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Th(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Tu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = qi));
  else if (n !== 4 && (e = e.child, e !== null)) for (Tu(e, t, r), e = e.sibling; e !== null; ) Tu(e, t, r), e = e.sibling;
}
function xu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (xu(e, t, r), e = e.sibling; e !== null; ) xu(e, t, r), e = e.sibling;
}
var ce = null, rt = !1;
function It(e, t, r) {
  for (r = r.child; r !== null; ) xh(e, t, r), r = r.sibling;
}
function xh(e, t, r) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(go, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      me || Hr(r, t);
    case 6:
      var n = ce, i = rt;
      ce = null, It(e, t, r), ce = n, rt = i, ce !== null && (rt ? (e = ce, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ce.removeChild(r.stateNode));
      break;
    case 18:
      ce !== null && (rt ? (e = ce, r = r.stateNode, e.nodeType === 8 ? da(e.parentNode, r) : e.nodeType === 1 && da(e, r), Hn(e)) : da(ce, r.stateNode));
      break;
    case 4:
      n = ce, i = rt, ce = r.stateNode.containerInfo, rt = !0, It(e, t, r), ce = n, rt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Eu(r, t, a), i = i.next;
        } while (i !== n);
      }
      It(e, t, r);
      break;
    case 1:
      if (!me && (Hr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (u) {
        te(r, t, u);
      }
      It(e, t, r);
      break;
    case 21:
      It(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (me = (n = me) || r.memoizedState !== null, It(e, t, r), me = n) : It(e, t, r);
      break;
    default:
      It(e, t, r);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new sg()), t.forEach(function(n) {
      var i = Sg.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function et(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var o = e, a = t, u = a;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ce = u.stateNode, rt = !1;
            break e;
          case 3:
            ce = u.stateNode.containerInfo, rt = !0;
            break e;
          case 4:
            ce = u.stateNode.containerInfo, rt = !0;
            break e;
        }
        u = u.return;
      }
      if (ce === null) throw Error(E(160));
      xh(o, a, i), ce = null, rt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (s) {
      te(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ch(t, e), t = t.sibling;
}
function Ch(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (et(t, e), lt(e), n & 4) {
        try {
          In(3, e, e.return), Oo(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          In(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      et(t, e), lt(e), n & 512 && r !== null && Hr(r, r.return);
      break;
    case 5:
      if (et(t, e), lt(e), n & 512 && r !== null && Hr(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Rn(i, "");
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = r !== null ? r.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Wf(i, o), Xa(u, a);
          var s = Xa(u, o);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], d = l[a + 1];
            c === "style" ? Kf(i, d) : c === "dangerouslySetInnerHTML" ? Yf(i, d) : c === "children" ? Rn(i, d) : nl(i, c, d, s);
          }
          switch (u) {
            case "input":
              ja(i, o);
              break;
            case "textarea":
              Xf(i, o);
              break;
            case "select":
              var h = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var m = o.value;
              m != null ? Br(i, !!o.multiple, m, !1) : h !== !!o.multiple && (o.defaultValue != null ? Br(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Br(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[jn] = o;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 6:
      if (et(t, e), lt(e), n & 4) {
        if (e.stateNode === null) throw Error(E(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (et(t, e), lt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Hn(t.containerInfo);
      } catch (g) {
        te(e, e.return, g);
      }
      break;
    case 4:
      et(t, e), lt(e);
      break;
    case 13:
      et(t, e), lt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Al = re())), n & 4 && dc(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (me = (s = me) || c, et(t, e), me = s) : et(t, e), lt(e), n & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (I = e, c = e.child; c !== null; ) {
          for (d = I = c; I !== null; ) {
            switch (h = I, m = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                In(4, h, h.return);
                break;
              case 1:
                Hr(h, h.return);
                var S = h.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  n = h, r = h.return;
                  try {
                    t = n, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (g) {
                    te(n, r, g);
                  }
                }
                break;
              case 5:
                Hr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  pc(d);
                  continue;
                }
            }
            m !== null ? (m.return = h, I = m) : pc(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Zf("display", a));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = s ? "" : d.memoizedProps;
            } catch (g) {
              te(e, e.return, g);
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
      et(t, e), lt(e), n & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      et(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Th(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Rn(i, ""), n.flags &= -33);
          var o = fc(e);
          xu(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, u = fc(e);
          Tu(e, u, a);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      te(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fg(e, t, r) {
  I = e, Oh(e);
}
function Oh(e, t, r) {
  for (var n = (e.mode & 1) !== 0; I !== null; ) {
    var i = I, o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || mi;
      if (!a) {
        var u = i.alternate, l = u !== null && u.memoizedState !== null || me;
        u = mi;
        var s = me;
        if (mi = a, (me = l) && !s) for (I = i; I !== null; ) a = I, l = a.child, a.tag === 22 && a.memoizedState !== null ? vc(i) : l !== null ? (l.return = a, I = l) : vc(i);
        for (; o !== null; ) I = o, Oh(o), o = o.sibling;
        I = i, mi = u, me = s;
      }
      hc(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, I = o) : hc(e);
  }
}
function hc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            me || Oo(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !me) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : tt(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ks(t, o, n);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              Ks(t, a, r);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (r === null && t.flags & 4) {
              r = u;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
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
                  var d = c.dehydrated;
                  d !== null && Hn(d);
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
        me || t.flags & 512 && wu(t);
      } catch (h) {
        te(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, I = r;
      break;
    }
    I = t.return;
  }
}
function pc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, I = r;
      break;
    }
    I = t.return;
  }
}
function vc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Oo(4, t);
          } catch (l) {
            te(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              te(t, i, l);
            }
          }
          var o = t.return;
          try {
            wu(t);
          } catch (l) {
            te(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            wu(t);
          } catch (l) {
            te(t, a, l);
          }
      }
    } catch (l) {
      te(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, I = u;
      break;
    }
    I = t.return;
  }
}
var dg = Math.ceil, so = _t.ReactCurrentDispatcher, Ll = _t.ReactCurrentOwner, Xe = _t.ReactCurrentBatchConfig, z = 0, le = null, ne = null, fe = 0, be = 0, Fr = Qt(0), oe = 0, Qn = null, hr = 0, Do = 0, Ml = 0, kn = null, _e = null, Al = 0, Kr = 1 / 0, yt = null, co = !1, Cu = null, jt = null, gi = !1, At = null, fo = 0, Nn = 0, Ou = null, Mi = -1, Ai = 0;
function Ce() {
  return z & 6 ? re() : Mi !== -1 ? Mi : Mi = re();
}
function zt(e) {
  return e.mode & 1 ? z & 2 && fe !== 0 ? fe & -fe : Ym.transition !== null ? (Ai === 0 && (Ai = sd()), Ai) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : md(e.type)), e) : 1;
}
function ot(e, t, r, n) {
  if (50 < Nn) throw Nn = 0, Ou = null, Error(E(185));
  Zn(e, r, n), (!(z & 2) || e !== le) && (e === le && (!(z & 2) && (Do |= r), oe === 4 && Lt(e, fe)), Ne(e, n), r === 1 && z === 0 && !(t.mode & 1) && (Kr = re() + 500, To && Yt()));
}
function Ne(e, t) {
  var r = e.callbackNode;
  Yv(e, t);
  var n = Qi(e, e === le ? fe : 0);
  if (n === 0) r !== null && Cs(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Cs(r), t === 1) e.tag === 0 ? Qm(mc.bind(null, e)) : Md(mc.bind(null, e)), Gm(function() {
      !(z & 6) && Yt();
    }), r = null;
    else {
      switch (cd(n)) {
        case 1:
          r = ll;
          break;
        case 4:
          r = ud;
          break;
        case 16:
          r = Xi;
          break;
        case 536870912:
          r = ld;
          break;
        default:
          r = Xi;
      }
      r = Rh(r, Dh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Dh(e, t) {
  if (Mi = -1, Ai = 0, z & 6) throw Error(E(327));
  var r = e.callbackNode;
  if (Gr() && e.callbackNode !== r) return null;
  var n = Qi(e, e === le ? fe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ho(e, n);
  else {
    t = n;
    var i = z;
    z |= 2;
    var o = Ph();
    (le !== e || fe !== t) && (yt = null, Kr = re() + 500, lr(e, t));
    do
      try {
        vg();
        break;
      } catch (u) {
        _h(e, u);
      }
    while (!0);
    wl(), so.current = o, z = i, ne !== null ? t = 0 : (le = null, fe = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = qa(e), i !== 0 && (n = i, t = Du(e, i))), t === 1) throw r = Qn, lr(e, 0), Lt(e, n), Ne(e, re()), r;
    if (t === 6) Lt(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !hg(i) && (t = ho(e, n), t === 2 && (o = qa(e), o !== 0 && (n = o, t = Du(e, o))), t === 1)) throw r = Qn, lr(e, 0), Lt(e, n), Ne(e, re()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          rr(e, _e, yt);
          break;
        case 3:
          if (Lt(e, n), (n & 130023424) === n && (t = Al + 500 - re(), 10 < t)) {
            if (Qi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              Ce(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = au(rr.bind(null, e, _e, yt), t);
            break;
          }
          rr(e, _e, yt);
          break;
        case 4:
          if (Lt(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - it(n);
            o = 1 << a, a = t[a], a > i && (i = a), n &= ~o;
          }
          if (n = i, n = re() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * dg(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = au(rr.bind(null, e, _e, yt), n);
            break;
          }
          rr(e, _e, yt);
          break;
        case 5:
          rr(e, _e, yt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ne(e, re()), e.callbackNode === r ? Dh.bind(null, e) : null;
}
function Du(e, t) {
  var r = kn;
  return e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256), e = ho(e, t), e !== 2 && (t = _e, _e = r, t !== null && _u(t)), e;
}
function _u(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function hg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], o = i.getSnapshot;
        i = i.value;
        try {
          if (!at(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
function Lt(e, t) {
  for (t &= ~Ml, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - it(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function mc(e) {
  if (z & 6) throw Error(E(327));
  Gr();
  var t = Qi(e, 0);
  if (!(t & 1)) return Ne(e, re()), null;
  var r = ho(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = qa(e);
    n !== 0 && (t = n, r = Du(e, n));
  }
  if (r === 1) throw r = Qn, lr(e, 0), Lt(e, t), Ne(e, re()), r;
  if (r === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rr(e, _e, yt), Ne(e, re()), null;
}
function Hl(e, t) {
  var r = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    z = r, z === 0 && (Kr = re() + 500, To && Yt());
  }
}
function pr(e) {
  At !== null && At.tag === 0 && !(z & 6) && Gr();
  var t = z;
  z |= 1;
  var r = Xe.transition, n = V;
  try {
    if (Xe.transition = null, V = 1, e) return e();
  } finally {
    V = n, Xe.transition = r, z = t, !(z & 6) && Yt();
  }
}
function Fl() {
  be = Fr.current, Z(Fr);
}
function lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, zm(r)), ne !== null) for (r = ne.return; r !== null; ) {
    var n = r;
    switch (yl(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Ji();
        break;
      case 3:
        Yr(), Z(Ie), Z(ge), _l();
        break;
      case 5:
        Dl(n);
        break;
      case 4:
        Yr();
        break;
      case 13:
        Z(q);
        break;
      case 19:
        Z(q);
        break;
      case 10:
        Tl(n.type._context);
        break;
      case 22:
      case 23:
        Fl();
    }
    r = r.return;
  }
  if (le = e, ne = e = Gt(e.current, null), fe = be = t, oe = 0, Qn = null, Ml = Do = hr = 0, _e = kn = null, ar !== null) {
    for (t = 0; t < ar.length; t++) if (r = ar[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, o = r.pending;
      if (o !== null) {
        var a = o.next;
        o.next = i, n.next = a;
      }
      r.pending = n;
    }
    ar = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var r = ne;
    try {
      if (wl(), bi.current = lo, uo) {
        for (var n = J.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        uo = !1;
      }
      if (dr = 0, ue = ie = J = null, Pn = !1, Vn = 0, Ll.current = null, r === null || r.return === null) {
        oe = 1, Qn = t, ne = null;
        break;
      }
      e: {
        var o = e, a = r.return, u = r, l = t;
        if (t = fe, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var s = l, c = u, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = nc(a);
          if (m !== null) {
            m.flags &= -257, ic(m, a, u, o, t), m.mode & 1 && rc(o, s, t), t = m, l = s;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rc(o, s, t), Bl();
              break e;
            }
            l = Error(E(426));
          }
        } else if (K && u.mode & 1) {
          var D = nc(a);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), ic(D, a, u, o, t), Sl(Zr(l, u));
            break e;
          }
        }
        o = l = Zr(l, u), oe !== 4 && (oe = 2), kn === null ? kn = [o] : kn.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = ch(o, l, t);
              Zs(o, p);
              break e;
            case 1:
              u = l;
              var f = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (jt === null || !jt.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = fh(o, u, t);
                Zs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kh(r);
    } catch (w) {
      t = w, ne === r && r !== null && (ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Ph() {
  var e = so.current;
  return so.current = lo, e === null ? lo : e;
}
function Bl() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), le === null || !(hr & 268435455) && !(Do & 268435455) || Lt(le, fe);
}
function ho(e, t) {
  var r = z;
  z |= 2;
  var n = Ph();
  (le !== e || fe !== t) && (yt = null, lr(e, t));
  do
    try {
      pg();
      break;
    } catch (i) {
      _h(e, i);
    }
  while (!0);
  if (wl(), z = r, so.current = n, ne !== null) throw Error(E(261));
  return le = null, fe = 0, oe;
}
function pg() {
  for (; ne !== null; ) Ih(ne);
}
function vg() {
  for (; ne !== null && !$v(); ) Ih(ne);
}
function Ih(e) {
  var t = bh(e.alternate, e, be);
  e.memoizedProps = e.pendingProps, t === null ? kh(e) : ne = t, Ll.current = null;
}
function kh(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = lg(r, t), r !== null) {
        r.flags &= 32767, ne = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, ne = null;
        return;
      }
    } else if (r = ug(r, t, be), r !== null) {
      ne = r;
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
function rr(e, t, r) {
  var n = V, i = Xe.transition;
  try {
    Xe.transition = null, V = 1, mg(e, t, r, n);
  } finally {
    Xe.transition = i, V = n;
  }
  return null;
}
function mg(e, t, r, n) {
  do
    Gr();
  while (At !== null);
  if (z & 6) throw Error(E(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = r.lanes | r.childLanes;
  if (Zv(e, o), e === le && (ne = le = null, fe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || gi || (gi = !0, Rh(Xi, function() {
    return Gr(), null;
  })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
    o = Xe.transition, Xe.transition = null;
    var a = V;
    V = 1;
    var u = z;
    z |= 4, Ll.current = null, cg(e, r), Ch(r, e), Am(iu), Yi = !!nu, iu = nu = null, e.current = r, fg(r), Uv(), z = u, V = a, Xe.transition = o;
  } else e.current = r;
  if (gi && (gi = !1, At = e, fo = i), o = e.pendingLanes, o === 0 && (jt = null), Gv(r.stateNode), Ne(e, re()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (co) throw co = !1, e = Cu, Cu = null, e;
  return fo & 1 && e.tag !== 0 && Gr(), o = e.pendingLanes, o & 1 ? e === Ou ? Nn++ : (Nn = 0, Ou = e) : Nn = 0, Yt(), null;
}
function Gr() {
  if (At !== null) {
    var e = cd(fo), t = Xe.transition, r = V;
    try {
      if (Xe.transition = null, V = 16 > e ? 16 : e, At === null) var n = !1;
      else {
        if (e = At, At = null, fo = 0, z & 6) throw Error(E(331));
        var i = z;
        for (z |= 4, I = e.current; I !== null; ) {
          var o = I, a = o.child;
          if (I.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (I = s; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, I = d;
                  else for (; I !== null; ) {
                    c = I;
                    var h = c.sibling, m = c.return;
                    if (wh(c), c === s) {
                      I = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = m, I = h;
                      break;
                    }
                    I = m;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var D = g.sibling;
                    g.sibling = null, g = D;
                  } while (g !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) a.return = o, I = a;
          else e: for (; I !== null; ) {
            if (o = I, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                In(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, I = p;
              break e;
            }
            I = o.return;
          }
        }
        var f = e.current;
        for (I = f; I !== null; ) {
          a = I;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) v.return = a, I = v;
          else e: for (a = f; I !== null; ) {
            if (u = I, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Oo(9, u);
              }
            } catch (w) {
              te(u, u.return, w);
            }
            if (u === a) {
              I = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, I = y;
              break e;
            }
            I = u.return;
          }
        }
        if (z = i, Yt(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(go, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      V = r, Xe.transition = t;
    }
  }
  return !1;
}
function gc(e, t, r) {
  t = Zr(r, t), t = ch(e, t, 1), e = Ut(e, t, 1), t = Ce(), e !== null && (Zn(e, 1, t), Ne(e, t));
}
function te(e, t, r) {
  if (e.tag === 3) gc(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gc(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (jt === null || !jt.has(n))) {
        e = Zr(r, e), e = fh(t, e, 1), t = Ut(t, e, 1), e = Ce(), t !== null && (Zn(t, 1, e), Ne(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function gg(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & r, le === e && (fe & r) === r && (oe === 4 || oe === 3 && (fe & 130023424) === fe && 500 > re() - Al ? lr(e, 0) : Ml |= r), Ne(e, t);
}
function Nh(e, t) {
  t === 0 && (e.mode & 1 ? (t = ui, ui <<= 1, !(ui & 130023424) && (ui = 4194304)) : t = 1);
  var r = Ce();
  e = Ot(e, t), e !== null && (Zn(e, t, r), Ne(e, r));
}
function yg(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Nh(e, r);
}
function Sg(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), Nh(e, r);
}
var bh;
bh = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Pe = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return Pe = !1, ag(e, t, r);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, K && t.flags & 1048576 && Ad(t, ro, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Li(e, t), e = t.pendingProps;
      var i = Wr(t, ge.current);
      zr(t, r), i = Il(null, t, n, e, i, r);
      var o = kl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(n) ? (o = !0, eo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = Co, t.stateNode = i, i._reactInternals = t, hu(t, n, e, r), t = mu(null, t, n, !0, o, r)) : (t.tag = 0, K && o && gl(t), Ee(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Li(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = wg(n), e = tt(n, e), i) {
          case 0:
            t = vu(null, t, n, e, r);
            break e;
          case 1:
            t = uc(null, t, n, e, r);
            break e;
          case 11:
            t = oc(null, t, n, e, r);
            break e;
          case 14:
            t = ac(null, t, n, tt(n.type, e), r);
            break e;
        }
        throw Error(E(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : tt(n, i), vu(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : tt(n, i), uc(e, t, n, i, r);
    case 3:
      e: {
        if (vh(t), e === null) throw Error(E(387));
        n = t.pendingProps, o = t.memoizedState, i = o.element, jd(e, t), oo(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Zr(Error(E(423)), t), t = lc(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = Zr(Error(E(424)), t), t = lc(e, t, n, r, i);
          break e;
        } else for (Re = $t(t.stateNode.containerInfo.firstChild), Le = t, K = !0, nt = null, r = $d(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Xr(), n === i) {
            t = Dt(e, t, r);
            break e;
          }
          Ee(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return zd(t), e === null && cu(t), n = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, ou(n, i) ? a = null : o !== null && ou(n, o) && (t.flags |= 32), ph(e, t), Ee(e, t, a, r), t.child;
    case 6:
      return e === null && cu(t), null;
    case 13:
      return mh(e, t, r);
    case 4:
      return Ol(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Qr(t, null, n, r) : Ee(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : tt(n, i), oc(e, t, n, i, r);
    case 7:
      return Ee(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, X(no, n._currentValue), n._currentValue = a, o !== null) if (at(o.value, a)) {
          if (o.children === i.children && !Ie.current) {
            t = Dt(e, t, r);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            a = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === n) {
                if (o.tag === 1) {
                  l = Tt(-1, r & -r), l.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), s.pending = l;
                  }
                }
                o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), fu(
                  o.return,
                  r,
                  t
                ), u.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (a = o.return, a === null) throw Error(E(341));
            a.lanes |= r, u = a.alternate, u !== null && (u.lanes |= r), fu(a, r, t), a = o.sibling;
          } else a = o.child;
          if (a !== null) a.return = o;
          else for (a = o; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (o = a.sibling, o !== null) {
              o.return = a.return, a = o;
              break;
            }
            a = a.return;
          }
          o = a;
        }
        Ee(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, zr(t, r), i = Qe(i), n = n(i), t.flags |= 1, Ee(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = tt(n, t.pendingProps), i = tt(n.type, i), ac(e, t, n, i, r);
    case 15:
      return dh(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : tt(n, i), Li(e, t), t.tag = 1, ke(n) ? (e = !0, eo(t)) : e = !1, zr(t, r), sh(t, n, i), hu(t, n, i, r), mu(null, t, n, !0, e, r);
    case 19:
      return gh(e, t, r);
    case 22:
      return hh(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Rh(e, t) {
  return ad(e, t);
}
function Eg(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, r, n) {
  return new Eg(e, t, r, n);
}
function $l(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wg(e) {
  if (typeof e == "function") return $l(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ol) return 11;
    if (e === al) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var r = e.alternate;
  return r === null ? (r = We(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Hi(e, t, r, n, i, o) {
  var a = 2;
  if (n = e, typeof e == "function") $l(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case Pr:
      return sr(r.children, i, o, t);
    case il:
      a = 8, i |= 8;
      break;
    case Ha:
      return e = We(12, r, t, i | 2), e.elementType = Ha, e.lanes = o, e;
    case Fa:
      return e = We(13, r, t, i), e.elementType = Fa, e.lanes = o, e;
    case Ba:
      return e = We(19, r, t, i), e.elementType = Ba, e.lanes = o, e;
    case zf:
      return _o(r, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Uf:
          a = 10;
          break e;
        case jf:
          a = 9;
          break e;
        case ol:
          a = 11;
          break e;
        case al:
          a = 14;
          break e;
        case kt:
          a = 16, n = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = We(a, r, t, i), t.elementType = e, t.type = n, t.lanes = o, t;
}
function sr(e, t, r, n) {
  return e = We(7, e, n, t), e.lanes = r, e;
}
function _o(e, t, r, n) {
  return e = We(22, e, n, t), e.elementType = zf, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Ea(e, t, r) {
  return e = We(6, e, null, t), e.lanes = r, e;
}
function wa(e, t, r) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Tg(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ta(0), this.expirationTimes = ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ta(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ul(e, t, r, n, i, o, a, u, l) {
  return e = new Tg(e, t, r, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(o), e;
}
function xg(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _r, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Lh(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ke(r)) return Ld(e, r, t);
  }
  return t;
}
function Mh(e, t, r, n, i, o, a, u, l) {
  return e = Ul(r, n, !0, e, i, o, a, u, l), e.context = Lh(null), r = e.current, n = Ce(), i = zt(r), o = Tt(n, i), o.callback = t ?? null, Ut(r, o, i), e.current.lanes = i, Zn(e, i, n), Ne(e, n), e;
}
function Po(e, t, r, n) {
  var i = t.current, o = Ce(), a = zt(i);
  return r = Lh(r), t.context === null ? t.context = r : t.pendingContext = r, t = Tt(o, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Ut(i, t, a), e !== null && (ot(e, i, a, o), Ni(e, i, a)), a;
}
function po(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function jl(e, t) {
  yc(e, t), (e = e.alternate) && yc(e, t);
}
function Cg() {
  return null;
}
var Ah = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function zl(e) {
  this._internalRoot = e;
}
Io.prototype.render = zl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Po(e, t, null, null);
};
Io.prototype.unmount = zl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pr(function() {
      Po(null, e, null, null);
    }), t[Ct] = null;
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = hd();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Rt.length && t !== 0 && t < Rt[r].priority; r++) ;
    Rt.splice(r, 0, e), r === 0 && vd(e);
  }
};
function Gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ko(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Sc() {
}
function Og(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var s = po(a);
        o.call(s);
      };
    }
    var a = Mh(t, n, e, 0, null, !1, !1, "", Sc);
    return e._reactRootContainer = a, e[Ct] = a.current, $n(e.nodeType === 8 ? e.parentNode : e), pr(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var u = n;
    n = function() {
      var s = po(l);
      u.call(s);
    };
  }
  var l = Ul(e, 0, !1, null, null, !1, !1, "", Sc);
  return e._reactRootContainer = l, e[Ct] = l.current, $n(e.nodeType === 8 ? e.parentNode : e), pr(function() {
    Po(t, l, r, n);
  }), l;
}
function No(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var l = po(a);
        u.call(l);
      };
    }
    Po(t, a, e, i);
  } else a = Og(r, t, e, i, n);
  return po(a);
}
fd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Sn(t.pendingLanes);
        r !== 0 && (sl(t, r | 1), Ne(t, re()), !(z & 6) && (Kr = re() + 500, Yt()));
      }
      break;
    case 13:
      pr(function() {
        var n = Ot(e, 1);
        if (n !== null) {
          var i = Ce();
          ot(n, e, 1, i);
        }
      }), jl(e, 1);
  }
};
cl = function(e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var r = Ce();
      ot(t, e, 134217728, r);
    }
    jl(e, 134217728);
  }
};
dd = function(e) {
  if (e.tag === 13) {
    var t = zt(e), r = Ot(e, t);
    if (r !== null) {
      var n = Ce();
      ot(r, e, t, n);
    }
    jl(e, t);
  }
};
hd = function() {
  return V;
};
pd = function(e, t) {
  var r = V;
  try {
    return V = e, t();
  } finally {
    V = r;
  }
};
Ya = function(e, t, r) {
  switch (t) {
    case "input":
      if (ja(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = wo(n);
            if (!i) throw Error(E(90));
            Vf(n), ja(n, i);
          }
        }
      }
      break;
    case "textarea":
      Xf(e, r);
      break;
    case "select":
      t = r.value, t != null && Br(e, !!r.multiple, t, !1);
  }
};
ed = Hl;
td = pr;
var Dg = { usingClientEntryPoint: !1, Events: [qn, br, wo, qf, Jf, Hl] }, pn = { findFiberByHostInstance: or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _g = { bundleType: pn.bundleType, version: pn.version, rendererPackageName: pn.rendererPackageName, rendererConfig: pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = id(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pn.findFiberByHostInstance || Cg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yi.isDisabled && yi.supportsFiber) try {
    go = yi.inject(_g), dt = yi;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
He.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gl(t)) throw Error(E(200));
  return xg(e, t, null, r);
};
He.createRoot = function(e, t) {
  if (!Gl(e)) throw Error(E(299));
  var r = !1, n = "", i = Ah;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ul(e, 1, !1, null, null, r, !1, n, i), e[Ct] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new zl(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = id(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return pr(e);
};
He.hydrate = function(e, t, r) {
  if (!ko(t)) throw Error(E(200));
  return No(null, e, t, !0, r);
};
He.hydrateRoot = function(e, t, r) {
  if (!Gl(e)) throw Error(E(405));
  var n = r != null && r.hydratedSources || null, i = !1, o = "", a = Ah;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Mh(t, null, e, 1, r ?? null, i, !1, o, a), e[Ct] = t.current, $n(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Io(t);
};
He.render = function(e, t, r) {
  if (!ko(t)) throw Error(E(200));
  return No(null, e, t, !1, r);
};
He.unmountComponentAtNode = function(e) {
  if (!ko(e)) throw Error(E(40));
  return e._reactRootContainer ? (pr(function() {
    No(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = Hl;
He.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!ko(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return No(e, t, r, !1, n);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Hh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hh);
    } catch (e) {
      console.error(e);
    }
}
Hh(), Hf.exports = He;
var Fh = Hf.exports;
const Si = /* @__PURE__ */ en(Fh);
var Bh, Ec = Fh;
Bh = Ec.createRoot, Ec.hydrateRoot;
var Pu = function(e, t) {
  return Pu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Pu(e, t);
};
function Ke(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, k.apply(this, arguments);
};
function qr(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function xe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function we(e, t) {
  var r = t && t.cache ? t.cache : Rg, n = t && t.serializer ? t.serializer : bg, i = t && t.strategy ? t.strategy : kg;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Pg(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Ig(e, t, r, n) {
  var i = Pg(n) ? n : r(n), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, n), t.set(i, o)), o;
}
function $h(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, n), t.set(i, o)), o;
}
function Uh(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function kg(e, t) {
  var r = e.length === 1 ? Ig : $h;
  return Uh(e, this, r, t.cache.create(), t.serializer);
}
function Ng(e, t) {
  return Uh(e, this, $h, t.cache.create(), t.serializer);
}
var bg = function() {
  return JSON.stringify(arguments);
};
function Vl() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Vl.prototype.get = function(e) {
  return this.cache[e];
};
Vl.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Rg = {
  create: function() {
    return new Vl();
  }
}, Te = {
  variadic: Ng
};
function jh(e, t, r) {
  if (r === void 0 && (r = Error), !e)
    throw new r(t);
}
we(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.NumberFormat).bind.apply(e, xe([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, xe([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.PluralRules).bind.apply(e, xe([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.Locale).bind.apply(e, xe([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
we(function() {
  for (var e, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new ((e = Intl.ListFormat).bind.apply(e, xe([void 0], t, !1)))();
}, {
  strategy: Te.variadic
});
var U;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(U || (U = {}));
var Y;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Y || (Y = {}));
var Jr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Jr || (Jr = {}));
function wc(e) {
  return e.type === Y.literal;
}
function Lg(e) {
  return e.type === Y.argument;
}
function zh(e) {
  return e.type === Y.number;
}
function Gh(e) {
  return e.type === Y.date;
}
function Vh(e) {
  return e.type === Y.time;
}
function Wh(e) {
  return e.type === Y.select;
}
function Xh(e) {
  return e.type === Y.plural;
}
function Mg(e) {
  return e.type === Y.pound;
}
function Qh(e) {
  return e.type === Y.tag;
}
function Yh(e) {
  return !!(e && typeof e == "object" && e.type === Jr.number);
}
function Iu(e) {
  return !!(e && typeof e == "object" && e.type === Jr.dateTime);
}
var Zh = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ag = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Hg(e) {
  var t = {};
  return e.replace(Ag, function(r) {
    var n = r.length;
    switch (r[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
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
var Fg = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Bg(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Fg).filter(function(h) {
    return h.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = o.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = a[0], l = a.slice(1), s = 0, c = l; s < c.length; s++) {
      var d = c[s];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: u, options: l });
  }
  return r;
}
function $g(e) {
  return e.replace(/^(.*?)-/, "");
}
var Tc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Kh = /^(@+)?(\+|#+)?[rs]?$/g, Ug = /(\*)(0+)|(#+)(0+)|(0+)/g, qh = /^(0+)$/;
function xc(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Kh, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Jh(e) {
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
function jg(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !qh.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Cc(e) {
  var t = {}, r = Jh(e);
  return r || t;
}
function zg(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
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
        t.style = "unit", t.unit = $g(i.options[0]);
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
        t = k(k(k({}, t), { notation: "scientific" }), i.options.reduce(function(l, s) {
          return k(k({}, l), Cc(s));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(l, s) {
          return k(k({}, l), Cc(s));
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
        i.options[0].replace(Ug, function(l, s, c, d, h, m) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && h)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (qh.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Tc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Tc, function(l, s, c, d, h, m) {
        return c === "*" ? t.minimumFractionDigits = s.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : h && m ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + m.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = k(k({}, t), xc(o)));
      continue;
    }
    if (Kh.test(i.stem)) {
      t = k(k({}, t), xc(i.stem));
      continue;
    }
    var a = Jh(i.stem);
    a && (t = k(k({}, t), a));
    var u = jg(i.stem);
    u && (t = k(k({}, t), u));
  }
  return t;
}
var Ei = {
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
function Gg(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        o++, n++;
      var a = 1 + (o & 1), u = o < 2 ? 1 : 3 + (o >> 1), l = "a", s = Vg(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        r += l;
      for (; a-- > 0; )
        r = s + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function Vg(e) {
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
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = Ei[n || ""] || Ei[r || ""] || Ei["".concat(r, "-001")] || Ei["001"];
  return i[0];
}
var Ta, Wg = new RegExp("^".concat(Zh.source, "*")), Xg = new RegExp("".concat(Zh.source, "*$"));
function j(e, t) {
  return { start: e, end: t };
}
var Qg = !!String.prototype.startsWith && "_a".startsWith("a", 1), Yg = !!String.fromCodePoint, Zg = !!Object.fromEntries, Kg = !!String.prototype.codePointAt, qg = !!String.prototype.trimStart, Jg = !!String.prototype.trimEnd, ey = !!Number.isSafeInteger, ty = ey ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ku = !0;
try {
  var ry = tp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ku = ((Ta = ry.exec("a")) === null || Ta === void 0 ? void 0 : Ta[0]) === "a";
} catch {
  ku = !1;
}
var Oc = Qg ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), Nu = Yg ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, o = 0, a; i > o; ) {
      if (a = t[o++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      n += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return n;
  }
), Dc = (
  // native
  Zg ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var o = i[n], a = o[0], u = o[1];
        r[a] = u;
      }
      return r;
    }
  )
), ep = Kg ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), o;
      return i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), ny = qg ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Wg, "");
  }
), iy = Jg ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Xg, "");
  }
);
function tp(e, t) {
  return new RegExp(e, t);
}
var bu;
if (ku) {
  var _c = tp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bu = function(t, r) {
    var n;
    _c.lastIndex = r;
    var i = _c.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  bu = function(t, r) {
    for (var n = []; ; ) {
      var i = ep(t, r);
      if (i === void 0 || rp(i) || ly(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Nu.apply(void 0, n);
  };
var oy = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var a = this.parseArgument(t, n);
          if (a.err)
            return a;
          i.push(a.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (r === "plural" || r === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: Y.pound,
              location: j(u, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(U.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && Ru(this.peek() || 0)) {
            var a = this.parseTag(t, r);
            if (a.err)
              return a;
            i.push(a.val);
          } else {
            var a = this.parseLiteral(t, r);
            if (a.err)
              return a;
            i.push(a.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Y.literal,
            value: "<".concat(i, "/>"),
            location: j(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, r, !0);
        if (o.err)
          return o;
        var a = o.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ru(this.char()))
            return this.error(U.INVALID_TAG, j(u, this.clonePosition()));
          var l = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(U.UNMATCHED_CLOSING_TAG, j(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Y.tag,
              value: i,
              children: a,
              location: j(n, this.clonePosition())
            },
            err: null
          } : this.error(U.INVALID_TAG, j(u, this.clonePosition())));
        } else
          return this.error(U.UNCLOSED_TAG, j(n, this.clonePosition()));
      } else
        return this.error(U.INVALID_TAG, j(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && uy(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(r);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseUnquoted(t, r);
        if (a) {
          i += a;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = j(n, this.clonePosition());
      return {
        val: { type: Y.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !ay(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return Nu.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), Nu(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(U.EMPTY_ARGUMENT, j(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(U.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Y.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: j(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(U.MALFORMED_ARGUMENT, j(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = bu(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var o = this.clonePosition(), a = j(t, o);
      return { value: n, location: a };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var o, a = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(U.EXPECT_ARGUMENT_TYPE, j(a, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var h = iy(d.val);
            if (h.length === 0)
              return this.error(U.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
            var m = j(c, this.clonePosition());
            s = { style: h, styleLocation: m };
          }
          var S = this.tryParseArgumentClose(i);
          if (S.err)
            return S;
          var g = j(i, this.clonePosition());
          if (s && Oc(s == null ? void 0 : s.style, "::", 0)) {
            var D = ny(s.style.slice(2));
            if (u === "number") {
              var d = this.parseNumberSkeletonFromString(D, s.styleLocation);
              return d.err ? d : {
                val: { type: Y.number, value: n, location: g, style: d.val },
                err: null
              };
            } else {
              if (D.length === 0)
                return this.error(U.EXPECT_DATE_TIME_SKELETON, g);
              var p = D;
              this.locale && (p = Gg(D, this.locale));
              var h = {
                type: Jr.dateTime,
                pattern: p,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Hg(p) : {}
              }, f = u === "date" ? Y.date : Y.time;
              return {
                val: { type: f, value: n, location: g, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? Y.number : u === "date" ? Y.date : Y.time,
              value: n,
              location: g,
              style: (o = s == null ? void 0 : s.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(U.EXPECT_SELECT_ARGUMENT_OPTIONS, j(v, k({}, v)));
          this.bumpSpace();
          var y = this.parseIdentifierIfPossible(), w = 0;
          if (u !== "select" && y.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), y = this.parseIdentifierIfPossible(), w = d.val;
          }
          var C = this.tryParsePluralOrSelectOptions(t, u, r, y);
          if (C.err)
            return C;
          var S = this.tryParseArgumentClose(i);
          if (S.err)
            return S;
          var x = j(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: Y.select,
              value: n,
              options: Dc(C.val),
              location: x
            },
            err: null
          } : {
            val: {
              type: Y.plural,
              value: n,
              options: Dc(C.val),
              offset: w,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: x
            },
            err: null
          };
        }
        default:
          return this.error(U.INVALID_ARGUMENT_TYPE, j(a, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(U.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(i, this.clonePosition()));
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
                val: this.message.slice(r.offset, this.offset()),
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
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = Bg(t);
      } catch {
        return this.error(U.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: Jr.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? zg(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var o, a = !1, u = [], l = /* @__PURE__ */ new Set(), s = i.value, c = i.location; ; ) {
        if (s.length === 0) {
          var d = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_SELECTOR, U.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            c = j(d, this.clonePosition()), s = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(s))
          return this.error(r === "select" ? U.DUPLICATE_SELECT_ARGUMENT_SELECTOR : U.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (a = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : U.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
        var S = this.parseMessage(t + 1, r, n);
        if (S.err)
          return S;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          s,
          {
            value: S.val,
            location: j(m, this.clonePosition())
          }
        ]), l.add(s), this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = o.value, c = o.location;
      }
      return u.length === 0 ? this.error(r === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR : U.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(U.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var o = !1, a = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          o = !0, a = a * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = j(i, this.clonePosition());
      return o ? (a *= n, ty(a) ? { val: a, err: null } : this.error(r, l)) : this.error(t, l);
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
      var r = ep(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Oc(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && rp(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function Ru(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ay(e) {
  return Ru(e) || e === 47;
}
function uy(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function rp(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ly(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lu(e) {
  e.forEach(function(t) {
    if (delete t.location, Wh(t) || Xh(t))
      for (var r in t.options)
        delete t.options[r].location, Lu(t.options[r].value);
    else zh(t) && Yh(t.style) || (Gh(t) || Vh(t)) && Iu(t.style) ? delete t.style.location : Qh(t) && Lu(t.children);
  });
}
function sy(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new oy(e, t).parse();
  if (r.err) {
    var n = SyntaxError(U[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || Lu(r.val), r.val;
}
var pt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(pt || (pt = {}));
var Zt = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i) {
      var o = e.call(this, r) || this;
      return o.code = n, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Pc = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i, o) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), pt.INVALID_VALUE, o) || this;
    }
    return t;
  }(Zt)
), cy = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), pt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Zt)
), fy = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), pt.MISSING_VALUE, n) || this;
    }
    return t;
  }(Zt)
), ye;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ye || (ye = {}));
function dy(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== ye.literal || r.type !== ye.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function np(e) {
  return typeof e == "function";
}
function Fi(e, t, r, n, i, o, a) {
  if (e.length === 1 && wc(e[0]))
    return [
      {
        type: ye.literal,
        value: e[0].value
      }
    ];
  for (var u = [], l = 0, s = e; l < s.length; l++) {
    var c = s[l];
    if (wc(c)) {
      u.push({
        type: ye.literal,
        value: c.value
      });
      continue;
    }
    if (Mg(c)) {
      typeof o == "number" && u.push({
        type: ye.literal,
        value: r.getNumberFormat(t).format(o)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new fy(d, a);
    var h = i[d];
    if (Lg(c)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), u.push({
        type: typeof h == "string" ? ye.literal : ye.object,
        value: h
      });
      continue;
    }
    if (Gh(c)) {
      var m = typeof c.style == "string" ? n.date[c.style] : Iu(c.style) ? c.style.parsedOptions : void 0;
      u.push({
        type: ye.literal,
        value: r.getDateTimeFormat(t, m).format(h)
      });
      continue;
    }
    if (Vh(c)) {
      var m = typeof c.style == "string" ? n.time[c.style] : Iu(c.style) ? c.style.parsedOptions : n.time.medium;
      u.push({
        type: ye.literal,
        value: r.getDateTimeFormat(t, m).format(h)
      });
      continue;
    }
    if (zh(c)) {
      var m = typeof c.style == "string" ? n.number[c.style] : Yh(c.style) ? c.style.parsedOptions : void 0;
      m && m.scale && (h = h * (m.scale || 1)), u.push({
        type: ye.literal,
        value: r.getNumberFormat(t, m).format(h)
      });
      continue;
    }
    if (Qh(c)) {
      var S = c.children, g = c.value, D = i[g];
      if (!np(D))
        throw new cy(g, "function", a);
      var p = Fi(S, t, r, n, i, o), f = D(p.map(function(w) {
        return w.value;
      }));
      Array.isArray(f) || (f = [f]), u.push.apply(u, f.map(function(w) {
        return {
          type: typeof w == "string" ? ye.literal : ye.object,
          value: w
        };
      }));
    }
    if (Wh(c)) {
      var v = c.options[h] || c.options.other;
      if (!v)
        throw new Pc(c.value, h, Object.keys(c.options), a);
      u.push.apply(u, Fi(v.value, t, r, n, i));
      continue;
    }
    if (Xh(c)) {
      var v = c.options["=".concat(h)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Zt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, pt.MISSING_INTL_API, a);
        var y = r.getPluralRules(t, { type: c.pluralType }).select(h - (c.offset || 0));
        v = c.options[y] || c.options.other;
      }
      if (!v)
        throw new Pc(c.value, h, Object.keys(c.options), a);
      u.push.apply(u, Fi(v.value, t, r, n, i, h - (c.offset || 0)));
      continue;
    }
  }
  return dy(u);
}
function hy(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = k(k({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function py(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = hy(e[n], t[n]), r;
  }, k({}, e)) : e;
}
function xa(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function vy(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: we(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, xe([void 0], r, !1)))();
    }, {
      cache: xa(e.number),
      strategy: Te.variadic
    }),
    getDateTimeFormat: we(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, xe([void 0], r, !1)))();
    }, {
      cache: xa(e.dateTime),
      strategy: Te.variadic
    }),
    getPluralRules: we(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, xe([void 0], r, !1)))();
    }, {
      cache: xa(e.pluralRules),
      strategy: Te.variadic
    })
  };
}
var ip = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      r === void 0 && (r = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var s = o.formatToParts(l);
        if (s.length === 1)
          return s[0].value;
        var c = s.reduce(function(d, h) {
          return !d.length || h.type !== ye.literal || typeof d[d.length - 1] != "string" ? d.push(h.value) : d[d.length - 1] += h.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Fi(o.ast, o.locales, o.formatters, o.formats, l, void 0, o.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = o.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = i || {};
        a.formatters;
        var u = qr(a, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = py(e.formats, n), this.formatters = i && i.formatters || vy(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = sy, e.formats = {
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
), vr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(vr || (vr = {}));
var ei = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i) {
      var o = this, a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, `
`).concat(a ? `
`.concat(a.message, `
`).concat(a.stack) : "")) || this, o.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), my = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n) {
      return e.call(this, vr.UNSUPPORTED_FORMATTER, r, n) || this;
    }
    return t;
  }(ei)
), gy = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n) {
      return e.call(this, vr.INVALID_CONFIG, r, n) || this;
    }
    return t;
  }(ei)
), Ic = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n) {
      return e.call(this, vr.MISSING_DATA, r, n) || this;
    }
    return t;
  }(ei)
), qe = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i) {
      var o = e.call(this, vr.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(n, `
`), i) || this;
      return o.locale = n, o;
    }
    return t;
  }(ei)
), Ca = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n, i, o) {
      var a = e.call(this, "".concat(r, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), n, o) || this;
      return a.descriptor = i, a.locale = n, a;
    }
    return t;
  }(qe)
), yy = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t(r, n) {
      var i = e.call(this, vr.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(n, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(o) {
        var a;
        return (a = o.value) !== null && a !== void 0 ? a : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = r, i;
    }
    return t;
  }(ei)
);
function Sr(e, t, r) {
  return r === void 0 && (r = {}), t.reduce(function(n, i) {
    return i in e ? n[i] = e[i] : i in r && (n[i] = r[i]), n;
  }, {});
}
var Sy = function(e) {
}, Ey = function(e) {
}, op = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Sy,
  onWarn: Ey
};
function ap() {
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
function er(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function wy(e) {
  e === void 0 && (e = ap());
  var t = Intl.RelativeTimeFormat, r = Intl.ListFormat, n = Intl.DisplayNames, i = we(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, xe([void 0], l, !1)))();
  }, {
    cache: er(e.dateTime),
    strategy: Te.variadic
  }), o = we(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, xe([void 0], l, !1)))();
  }, {
    cache: er(e.number),
    strategy: Te.variadic
  }), a = we(function() {
    for (var u, l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, xe([void 0], l, !1)))();
  }, {
    cache: er(e.pluralRules),
    strategy: Te.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: we(function(u, l, s, c) {
      return new ip(u, l, s, k({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: a
      } }, c || {}));
    }, {
      cache: er(e.message),
      strategy: Te.variadic
    }),
    getRelativeTimeFormat: we(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (t.bind.apply(t, xe([void 0], u, !1)))();
    }, {
      cache: er(e.relativeTime),
      strategy: Te.variadic
    }),
    getPluralRules: a,
    getListFormat: we(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (r.bind.apply(r, xe([void 0], u, !1)))();
    }, {
      cache: er(e.list),
      strategy: Te.variadic
    }),
    getDisplayNames: we(function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return new (n.bind.apply(n, xe([void 0], u, !1)))();
    }, {
      cache: er(e.displayNames),
      strategy: Te.variadic
    })
  };
}
function Wl(e, t, r, n) {
  var i = e && e[t], o;
  if (i && (o = i[r]), o)
    return o;
  n(new my("No ".concat(t, " format named: ").concat(r)));
}
function wi(e, t) {
  return Object.keys(e).reduce(function(r, n) {
    return r[n] = k({ timeZone: t }, e[n]), r;
  }, {});
}
function kc(e, t) {
  var r = Object.keys(k(k({}, e), t));
  return r.reduce(function(n, i) {
    return n[i] = k(k({}, e[i] || {}), t[i] || {}), n;
  }, {});
}
function Nc(e, t) {
  if (!t)
    return e;
  var r = ip.formats;
  return k(k(k({}, r), e), { date: kc(wi(r.date, t), wi(e.date || {}, t)), time: kc(wi(r.time, t), wi(e.time || {}, t)) });
}
var Mu = function(e, t, r, n, i) {
  var o = e.locale, a = e.formats, u = e.messages, l = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, h = e.timeZone, m = e.defaultRichTextElements;
  r === void 0 && (r = { id: "" });
  var S = r.id, g = r.defaultMessage;
  jh(!!S, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var D = String(S), p = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, D) && u[D]
  );
  if (Array.isArray(p) && p.length === 1 && p[0].type === Y.literal)
    return p[0].value;
  if (!n && p && typeof p == "string" && !m)
    return p.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (n = k(k({}, m), n || {}), a = Nc(a, h), s = Nc(s, h), !p) {
    if (c === !1 && p === "")
      return p;
    if ((!g || o && o.toLowerCase() !== l.toLowerCase()) && d(new yy(r, o)), g)
      try {
        var f = t.getMessageFormat(g, l, s, i);
        return f.format(n);
      } catch (v) {
        return d(new Ca('Error formatting default message for: "'.concat(D, '", rendering default message verbatim'), o, r, v)), typeof g == "string" ? g : D;
      }
    return D;
  }
  try {
    var f = t.getMessageFormat(p, o, a, k({ formatters: t }, i || {}));
    return f.format(n);
  } catch (v) {
    d(new Ca('Error formatting message: "'.concat(D, '", using ').concat(g ? "default message" : "id", " as fallback."), o, r, v));
  }
  if (g)
    try {
      var f = t.getMessageFormat(g, l, s, i);
      return f.format(n);
    } catch (v) {
      d(new Ca('Error formatting the default message for: "'.concat(D, '", rendering message verbatim'), o, r, v));
    }
  return typeof p == "string" ? p : typeof g == "string" ? g : D;
}, up = [
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
function bo(e, t, r, n) {
  var i = e.locale, o = e.formats, a = e.onError, u = e.timeZone;
  n === void 0 && (n = {});
  var l = n.format, s = k(k({}, u && { timeZone: u }), l && Wl(o, t, l, a)), c = Sr(n, up, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = k(k({}, c), { hour: "numeric", minute: "numeric" })), r(i, c);
}
function Ty(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "date", t, a).format(u);
  } catch (l) {
    e.onError(new qe("Error formatting date.", e.locale, l));
  }
  return String(u);
}
function xy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "time", t, a).format(u);
  } catch (l) {
    e.onError(new qe("Error formatting time.", e.locale, l));
  }
  return String(u);
}
function Cy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = r[2], u = a === void 0 ? {} : a, l = e.timeZone, s = e.locale, c = e.onError, d = Sr(u, up, l ? { timeZone: l } : {});
  try {
    return t(s, d).formatRange(i, o);
  } catch (h) {
    c(new qe("Error formatting date time range.", e.locale, h));
  }
  return String(i);
}
function Oy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "date", t, a).formatToParts(u);
  } catch (l) {
    e.onError(new qe("Error formatting date.", e.locale, l));
  }
  return [];
}
function Dy(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = r[0], o = r[1], a = o === void 0 ? {} : o, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return bo(e, "time", t, a).formatToParts(u);
  } catch (l) {
    e.onError(new qe("Error formatting time.", e.locale, l));
  }
  return [];
}
var _y = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Py(e, t, r, n) {
  var i = e.locale, o = e.onError, a = Intl.DisplayNames;
  a || o(new Zt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, pt.MISSING_INTL_API));
  var u = Sr(n, _y);
  try {
    return t(i, u).of(r);
  } catch (l) {
    o(new qe("Error formatting display name.", i, l));
  }
}
var Iy = [
  "type",
  "style"
], bc = Date.now();
function ky(e) {
  return "".concat(bc, "_").concat(e, "_").concat(bc);
}
function Ny(e, t, r, n) {
  n === void 0 && (n = {});
  var i = lp(e, t, r, n).reduce(function(o, a) {
    var u = a.value;
    return typeof u != "string" ? o.push(u) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += u : o.push(u), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function lp(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {});
  var a = Intl.ListFormat;
  a || o(new Zt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, pt.MISSING_INTL_API));
  var u = Sr(n, Iy);
  try {
    var l = {}, s = r.map(function(c, d) {
      if (typeof c == "object") {
        var h = ky(d);
        return l[h] = c, h;
      }
      return String(c);
    });
    return t(i, u).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : k(k({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    o(new qe("Error formatting list.", i, c));
  }
  return r;
}
var by = ["type"];
function Ry(e, t, r, n) {
  var i = e.locale, o = e.onError;
  n === void 0 && (n = {}), Intl.PluralRules || o(new Zt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, pt.MISSING_INTL_API));
  var a = Sr(n, by);
  try {
    return t(i, a).select(r);
  } catch (u) {
    o(new qe("Error formatting plural.", i, u));
  }
  return "other";
}
var Ly = ["numeric", "style"];
function My(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, u = !!a && Wl(i, "relative", a, o) || {}, l = Sr(r, Ly, u);
  return t(n, l);
}
function Ay(e, t, r, n, i) {
  i === void 0 && (i = {}), n || (n = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new Zt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, pt.MISSING_INTL_API));
  try {
    return My(e, t, i).format(r, n);
  } catch (a) {
    e.onError(new qe("Error formatting relative time.", e.locale, a));
  }
  return String(r);
}
var Hy = [
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
function sp(e, t, r) {
  var n = e.locale, i = e.formats, o = e.onError;
  r === void 0 && (r = {});
  var a = r.format, u = a && Wl(i, "number", a, o) || {}, l = Sr(r, Hy, u);
  return t(n, l);
}
function Fy(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return sp(e, t, n).format(r);
  } catch (i) {
    e.onError(new qe("Error formatting number.", e.locale, i));
  }
  return String(r);
}
function By(e, t, r, n) {
  n === void 0 && (n = {});
  try {
    return sp(e, t, n).formatToParts(r);
  } catch (i) {
    e.onError(new qe("Error formatting number.", e.locale, i));
  }
  return [];
}
function $y(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Uy(e) {
  e.onWarn && e.defaultRichTextElements && $y(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function jy(e, t) {
  var r = wy(t), n = k(k({}, op), e), i = n.locale, o = n.defaultLocale, a = n.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new Ic('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new Ic('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new gy('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"), Uy(n), k(k({}, n), {
    formatters: r,
    formatNumber: Fy.bind(null, n, r.getNumberFormat),
    formatNumberToParts: By.bind(null, n, r.getNumberFormat),
    formatRelativeTime: Ay.bind(null, n, r.getRelativeTimeFormat),
    formatDate: Ty.bind(null, n, r.getDateTimeFormat),
    formatDateToParts: Oy.bind(null, n, r.getDateTimeFormat),
    formatTime: xy.bind(null, n, r.getDateTimeFormat),
    formatDateTimeRange: Cy.bind(null, n, r.getDateTimeFormat),
    formatTimeToParts: Dy.bind(null, n, r.getDateTimeFormat),
    formatPlural: Ry.bind(null, n, r.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Mu.bind(null, n, r),
    // @ts-expect-error TODO: will get to this later
    $t: Mu.bind(null, n, r),
    formatList: Ny.bind(null, n, r.getListFormat),
    formatListToParts: lp.bind(null, n, r.getListFormat),
    formatDisplayName: Py.bind(null, n, r.getDisplayNames)
  });
}
function cp(e) {
  jh(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var fp = k(k({}, op), { textComponent: T.Fragment });
function zy(e) {
  return function(t) {
    return e(T.Children.toArray(t));
  };
}
function Au(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var r = Object.keys(e), n = Object.keys(t), i = r.length;
  if (n.length !== i)
    return !1;
  for (var o = 0; o < i; o++) {
    var a = r[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
var dp = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se = typeof Symbol == "function" && Symbol.for, Xl = se ? Symbol.for("react.element") : 60103, Ql = se ? Symbol.for("react.portal") : 60106, Ro = se ? Symbol.for("react.fragment") : 60107, Lo = se ? Symbol.for("react.strict_mode") : 60108, Mo = se ? Symbol.for("react.profiler") : 60114, Ao = se ? Symbol.for("react.provider") : 60109, Ho = se ? Symbol.for("react.context") : 60110, Yl = se ? Symbol.for("react.async_mode") : 60111, Fo = se ? Symbol.for("react.concurrent_mode") : 60111, Bo = se ? Symbol.for("react.forward_ref") : 60112, $o = se ? Symbol.for("react.suspense") : 60113, Gy = se ? Symbol.for("react.suspense_list") : 60120, Uo = se ? Symbol.for("react.memo") : 60115, jo = se ? Symbol.for("react.lazy") : 60116, Vy = se ? Symbol.for("react.block") : 60121, Wy = se ? Symbol.for("react.fundamental") : 60117, Xy = se ? Symbol.for("react.responder") : 60118, Qy = se ? Symbol.for("react.scope") : 60119;
function Be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xl:
        switch (e = e.type, e) {
          case Yl:
          case Fo:
          case Ro:
          case Mo:
          case Lo:
          case $o:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ho:
              case Bo:
              case jo:
              case Uo:
              case Ao:
                return e;
              default:
                return t;
            }
        }
      case Ql:
        return t;
    }
  }
}
function hp(e) {
  return Be(e) === Fo;
}
W.AsyncMode = Yl;
W.ConcurrentMode = Fo;
W.ContextConsumer = Ho;
W.ContextProvider = Ao;
W.Element = Xl;
W.ForwardRef = Bo;
W.Fragment = Ro;
W.Lazy = jo;
W.Memo = Uo;
W.Portal = Ql;
W.Profiler = Mo;
W.StrictMode = Lo;
W.Suspense = $o;
W.isAsyncMode = function(e) {
  return hp(e) || Be(e) === Yl;
};
W.isConcurrentMode = hp;
W.isContextConsumer = function(e) {
  return Be(e) === Ho;
};
W.isContextProvider = function(e) {
  return Be(e) === Ao;
};
W.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xl;
};
W.isForwardRef = function(e) {
  return Be(e) === Bo;
};
W.isFragment = function(e) {
  return Be(e) === Ro;
};
W.isLazy = function(e) {
  return Be(e) === jo;
};
W.isMemo = function(e) {
  return Be(e) === Uo;
};
W.isPortal = function(e) {
  return Be(e) === Ql;
};
W.isProfiler = function(e) {
  return Be(e) === Mo;
};
W.isStrictMode = function(e) {
  return Be(e) === Lo;
};
W.isSuspense = function(e) {
  return Be(e) === $o;
};
W.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ro || e === Fo || e === Mo || e === Lo || e === $o || e === Gy || typeof e == "object" && e !== null && (e.$$typeof === jo || e.$$typeof === Uo || e.$$typeof === Ao || e.$$typeof === Ho || e.$$typeof === Bo || e.$$typeof === Wy || e.$$typeof === Xy || e.$$typeof === Qy || e.$$typeof === Vy);
};
W.typeOf = Be;
dp.exports = W;
var Yy = dp.exports, pp = Yy, Zy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ky = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vp = {};
vp[pp.ForwardRef] = Zy;
vp[pp.Memo] = Ky;
var Zl = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = T.createContext(null)) : T.createContext(null);
Zl.Consumer;
var qy = Zl.Provider, Jy = qy, e0 = Zl;
function Kl() {
  var e = T.useContext(e0);
  return cp(e), e;
}
var Hu;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Hu || (Hu = {}));
var Fu;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Fu || (Fu = {}));
function mp(e) {
  var t = function(r) {
    var n = Kl(), i = r.value, o = r.children, a = qr(r, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? n.formatDateToParts(u, a) : n.formatTimeToParts(u, a);
    return o(l);
  };
  return t.displayName = Fu[e], t;
}
function ti(e) {
  var t = function(r) {
    var n = Kl(), i = r.value, o = r.children, a = qr(
      r,
      ["value", "children"]
    ), u = n[e](i, a);
    if (typeof o == "function")
      return o(u);
    var l = n.textComponent || T.Fragment;
    return T.createElement(l, null, u);
  };
  return t.displayName = Hu[e], t;
}
function gp(e) {
  return e && Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return t[r] = np(n) ? zy(n) : n, t;
  }, {});
}
var Rc = function(e, t, r, n) {
  for (var i = [], o = 4; o < arguments.length; o++)
    i[o - 4] = arguments[o];
  var a = gp(n), u = Mu.apply(void 0, xe([
    e,
    t,
    r,
    a
  ], i, !1));
  return Array.isArray(u) ? T.Children.toArray(u) : u;
}, Lc = function(e, t) {
  var r = e.defaultRichTextElements, n = qr(e, ["defaultRichTextElements"]), i = gp(r), o = jy(k(k(k({}, fp), n), { defaultRichTextElements: i }), t), a = {
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
    formatMessage: Rc.bind(
      null,
      a,
      // @ts-expect-error fix this
      o.formatters
    ),
    // @ts-expect-error fix this
    $t: Rc.bind(null, a, o.formatters)
  });
};
function Oa(e) {
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
var t0 = (
  /** @class */
  function(e) {
    Ke(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.cache = ap(), r.state = {
        cache: r.cache,
        intl: Lc(Oa(r.props), r.cache),
        prevConfig: Oa(r.props)
      }, r;
    }
    return t.getDerivedStateFromProps = function(r, n) {
      var i = n.prevConfig, o = n.cache, a = Oa(r);
      return Au(i, a) ? null : {
        intl: Lc(a, o),
        prevConfig: a
      };
    }, t.prototype.render = function() {
      return cp(this.state.intl), T.createElement(Jy, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = fp, t;
  }(T.PureComponent)
);
function r0(e, t) {
  var r = e.values, n = qr(e, ["values"]), i = t.values, o = qr(t, ["values"]);
  return Au(i, r) && Au(n, o);
}
function yp(e) {
  var t = Kl(), r = t.formatMessage, n = t.textComponent, i = n === void 0 ? T.Fragment : n, o = e.id, a = e.description, u = e.defaultMessage, l = e.values, s = e.children, c = e.tagName, d = c === void 0 ? i : c, h = e.ignoreTag, m = { id: o, description: a, defaultMessage: u }, S = r(m, l, {
    ignoreTag: h
  });
  return typeof s == "function" ? s(Array.isArray(S) ? S : [S]) : d ? T.createElement(d, null, T.Children.toArray(S)) : T.createElement(T.Fragment, null, S);
}
yp.displayName = "FormattedMessage";
var Sp = T.memo(yp, r0);
Sp.displayName = "MemoizedFormattedMessage";
ti("formatDate");
ti("formatTime");
ti("formatNumber");
ti("formatList");
ti("formatDisplayName");
mp("formatDate");
mp("formatTime");
var Ep = T.createContext({
  dragDropManager: void 0
}), Ve;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(Ve || (Ve = {}));
function H(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      o = new Error(t.replace(/%s/g, function() {
        return n[a++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var ql = "dnd-core/INIT_COORDS", zo = "dnd-core/BEGIN_DRAG", Jl = "dnd-core/PUBLISH_DRAG_SOURCE", Go = "dnd-core/HOVER", Vo = "dnd-core/DROP", Wo = "dnd-core/END_DRAG";
function Mc(e, t) {
  return {
    type: ql,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Bi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bi = function(r) {
    return typeof r;
  } : Bi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bi(e);
}
function n0(e, t, r) {
  return t.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, e);
}
function i0(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function wp(e) {
  return Bi(e) === "object";
}
function o0(e, t) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function a0(e, t) {
  return e.filter(function(r) {
    return t.indexOf(r) > -1;
  });
}
var u0 = {
  type: ql,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function l0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, u = n.getSourceClientOffset, l = e.getMonitor(), s = e.getRegistry();
    e.dispatch(Mc(a)), s0(r, l, s);
    var c = d0(r, l);
    if (c === null) {
      e.dispatch(u0);
      return;
    }
    var d = null;
    if (a) {
      if (!u)
        throw new Error("getSourceClientOffset must be defined");
      c0(u), d = u(c);
    }
    e.dispatch(Mc(a, d));
    var h = s.getSource(c), m = h.beginDrag(l, c);
    if (m != null) {
      f0(m), s.pinSource(c);
      var S = s.getSourceType(c);
      return {
        type: zo,
        payload: {
          itemType: S,
          item: m,
          sourceId: c,
          clientOffset: a || null,
          sourceClientOffset: d || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function s0(e, t, r) {
  H(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    H(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function c0(e) {
  H(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function f0(e) {
  H(wp(e), "Item must be an object.");
}
function d0(e, t) {
  for (var r = null, n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      r = e[n];
      break;
    }
  return r;
}
function h0(e) {
  return function() {
    var r = e.getMonitor();
    if (r.isDragging())
      return {
        type: Jl
      };
  };
}
function Bu(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(r) {
    return r === t;
  }) : e === t;
}
function p0(e) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    v0(r);
    var o = r.slice(0), a = e.getMonitor(), u = e.getRegistry();
    m0(o, a, u);
    var l = a.getItemType();
    return g0(o, u, l), y0(o, a, u), {
      type: Go,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function v0(e) {
  H(Array.isArray(e), "Expected targetIds to be an array.");
}
function m0(e, t, r) {
  H(t.isDragging(), "Cannot call hover while not dragging."), H(!t.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    H(e.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    H(o, "Expected targetIds to be registered.");
  }
}
function g0(e, t, r) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], o = t.getTargetType(i);
    Bu(o, r) || e.splice(n, 1);
  }
}
function y0(e, t, r) {
  e.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(t, n);
  });
}
function Ac(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ac(Object(r), !0).forEach(function(n) {
      S0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ac(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E0(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), i = e.getRegistry();
    w0(n);
    var o = C0(n);
    o.forEach(function(a, u) {
      var l = T0(a, u, i, n), s = {
        type: Vo,
        payload: {
          dropResult: Hc(Hc({}, r), l)
        }
      };
      e.dispatch(s);
    });
  };
}
function w0(e) {
  H(e.isDragging(), "Cannot call drop while not dragging."), H(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function T0(e, t, r, n) {
  var i = r.getTarget(e), o = i ? i.drop(n, e) : void 0;
  return x0(o), typeof o > "u" && (o = t === 0 ? {} : n.getDropResult()), o;
}
function x0(e) {
  H(typeof e > "u" || wp(e), "Drop result must either be an object or undefined.");
}
function C0(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function O0(e) {
  return function() {
    var r = e.getMonitor(), n = e.getRegistry();
    D0(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: Wo
    };
  };
}
function D0(e) {
  H(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function _0(e) {
  return {
    beginDrag: l0(e),
    publishDragSource: h0(e),
    hover: p0(e),
    drop: E0(e),
    endDrag: O0(e)
  };
}
function P0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function I0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function k0(e, t, r) {
  return t && I0(e.prototype, t), e;
}
function vn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var N0 = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = this;
    P0(this, e), vn(this, "store", void 0), vn(this, "monitor", void 0), vn(this, "backend", void 0), vn(this, "isSetUp", !1), vn(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = t, this.monitor = r, t.subscribe(this.handleRefCountChange);
  }
  return k0(e, [{
    key: "receiveBackend",
    value: function(r) {
      this.backend = r;
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function() {
      var r = this, n = this.store.dispatch;
      function i(a) {
        return function() {
          for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
            l[s] = arguments[s];
          var c = a.apply(r, l);
          typeof c < "u" && n(c);
        };
      }
      var o = _0(this);
      return Object.keys(o).reduce(function(a, u) {
        var l = o[u];
        return a[u] = i(l), a;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), e;
}();
function Ue(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Fc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Bc = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, $c = {
  INIT: "@@redux/INIT" + Bc(),
  REPLACE: "@@redux/REPLACE" + Bc()
};
function b0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Tp(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(Ue(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(Ue(1));
    return r(Tp)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Ue(2));
  var i = e, o = t, a = [], u = a, l = !1;
  function s() {
    u === a && (u = a.slice());
  }
  function c() {
    if (l)
      throw new Error(Ue(3));
    return o;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Ue(4));
    if (l)
      throw new Error(Ue(5));
    var D = !0;
    return s(), u.push(g), function() {
      if (D) {
        if (l)
          throw new Error(Ue(6));
        D = !1, s();
        var f = u.indexOf(g);
        u.splice(f, 1), a = null;
      }
    };
  }
  function h(g) {
    if (!b0(g))
      throw new Error(Ue(7));
    if (typeof g.type > "u")
      throw new Error(Ue(8));
    if (l)
      throw new Error(Ue(9));
    try {
      l = !0, o = i(o, g);
    } finally {
      l = !1;
    }
    for (var D = a = u, p = 0; p < D.length; p++) {
      var f = D[p];
      f();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function")
      throw new Error(Ue(10));
    i = g, h({
      type: $c.REPLACE
    });
  }
  function S() {
    var g, D = d;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(f) {
        if (typeof f != "object" || f === null)
          throw new Error(Ue(11));
        function v() {
          f.next && f.next(c());
        }
        v();
        var y = D(v);
        return {
          unsubscribe: y
        };
      }
    }, g[Fc] = function() {
      return this;
    }, g;
  }
  return h({
    type: $c.INIT
  }), n = {
    dispatch: h,
    subscribe: d,
    getState: c,
    replaceReducer: m
  }, n[Fc] = S, n;
}
var R0 = function(t, r) {
  return t === r;
};
function L0(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function M0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R0;
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!r(e[n], t[n]))
      return !1;
  return !0;
}
function Uc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uc(Object(r), !0).forEach(function(n) {
      A0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var zc = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function H0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zc, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case ql:
    case zo:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case Go:
      return L0(e.clientOffset, r.clientOffset) ? e : jc(jc({}, e), {}, {
        clientOffset: r.clientOffset
      });
    case Wo:
    case Vo:
      return zc;
    default:
      return e;
  }
}
var es = "dnd-core/ADD_SOURCE", ts = "dnd-core/ADD_TARGET", rs = "dnd-core/REMOVE_SOURCE", Xo = "dnd-core/REMOVE_TARGET";
function F0(e) {
  return {
    type: es,
    payload: {
      sourceId: e
    }
  };
}
function B0(e) {
  return {
    type: ts,
    payload: {
      targetId: e
    }
  };
}
function $0(e) {
  return {
    type: rs,
    payload: {
      sourceId: e
    }
  };
}
function U0(e) {
  return {
    type: Xo,
    payload: {
      targetId: e
    }
  };
}
function Gc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gc(Object(r), !0).forEach(function(n) {
      j0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var z0 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function G0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z0, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case zo:
      return je(je({}, e), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Jl:
      return je(je({}, e), {}, {
        isSourcePublic: !0
      });
    case Go:
      return je(je({}, e), {}, {
        targetIds: r.targetIds
      });
    case Xo:
      return e.targetIds.indexOf(r.targetId) === -1 ? e : je(je({}, e), {}, {
        targetIds: i0(e.targetIds, r.targetId)
      });
    case Vo:
      return je(je({}, e), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Wo:
      return je(je({}, e), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function V0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case es:
    case ts:
      return e + 1;
    case rs:
    case Xo:
      return e - 1;
    default:
      return e;
  }
}
var vo = [], ns = [];
vo.__IS_NONE__ = !0;
ns.__IS_ALL__ = !0;
function W0(e, t) {
  if (e === vo)
    return !1;
  if (e === ns || typeof t > "u")
    return !0;
  var r = a0(t, e);
  return r.length > 0;
}
function X0() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Go:
      break;
    case es:
    case ts:
    case Xo:
    case rs:
      return vo;
    case zo:
    case Jl:
    case Wo:
    case Vo:
    default:
      return ns;
  }
  var t = e.payload, r = t.targetIds, n = r === void 0 ? [] : r, i = t.prevTargetIds, o = i === void 0 ? [] : i, a = o0(n, o), u = a.length > 0 || !M0(n, o);
  if (!u)
    return vo;
  var l = o[o.length - 1], s = n[n.length - 1];
  return l !== s && (l && a.push(l), s && a.push(s)), a;
}
function Q0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function Vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vc(Object(r), !0).forEach(function(n) {
      Y0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: X0(e.dirtyHandlerIds, {
      type: t.type,
      payload: Wc(Wc({}, t.payload), {}, {
        prevTargetIds: n0(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: H0(e.dragOffset, t),
    refCount: V0(e.refCount, t),
    dragOperation: G0(e.dragOperation, t),
    stateId: Q0(e.stateId)
  };
}
function K0(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function xp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function q0(e) {
  var t = e.clientOffset, r = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !t || !r || !n ? null : xp(K0(t, n), r);
}
function J0(e) {
  var t = e.clientOffset, r = e.initialClientOffset;
  return !t || !r ? null : xp(t, r);
}
function eS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function rS(e, t, r) {
  return t && tS(e.prototype, t), e;
}
function Xc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var nS = /* @__PURE__ */ function() {
  function e(t, r) {
    eS(this, e), Xc(this, "store", void 0), Xc(this, "registry", void 0), this.store = t, this.registry = r;
  }
  return rS(e, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      H(typeof r == "function", "listener must be a function."), H(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId, u = function() {
        var s = n.store.getState(), c = s.stateId;
        try {
          var d = c === a || c === a + 1 && !W0(s.dirtyHandlerIds, o);
          d || r();
        } finally {
          a = c;
        }
      };
      return this.store.subscribe(u);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      H(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var u = n.store.getState().dragOffset;
        u !== i && (i = u, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return H(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (H(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return Bu(i, o) && n.canDrop(this, r);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r, !0);
      if (H(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var i = this.registry.getSourceType(r), o = this.getItemType();
      return i !== o ? !1 : n.isDragging(this, r);
    }
  }, {
    key: "isOverTarget",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!r)
        return !1;
      var i = n.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(r), a = this.getItemType();
      if (a && !Bu(o, a))
        return !1;
      var u = this.getTargetIds();
      if (!u.length)
        return !1;
      var l = u.indexOf(r);
      return i ? l === u.length - 1 : l > -1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return q0(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return J0(this.store.getState().dragOffset);
    }
  }]), e;
}(), iS = 0;
function oS() {
  return iS++;
}
function $i(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $i = function(r) {
    return typeof r;
  } : $i = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $i(e);
}
function aS(e) {
  H(typeof e.canDrag == "function", "Expected canDrag to be a function."), H(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), H(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function uS(e) {
  H(typeof e.canDrop == "function", "Expected canDrop to be a function."), H(typeof e.hover == "function", "Expected hover to be a function."), H(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function $u(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(r) {
      return $u(r, !1);
    });
    return;
  }
  H(typeof e == "string" || $i(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Qc = typeof global < "u" ? global : self, Cp = Qc.MutationObserver || Qc.WebKitMutationObserver;
function Op(e) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), e();
    }
  };
}
function lS(e) {
  let t = 1;
  const r = new Cp(e), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const sS = typeof Cp == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  lS
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Op
);
class cS {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const r = this.index;
        if (this.index++, t[r].call(), this.index > this.capacity) {
          for (let n = 0, i = t.length - this.index; n < i; n++)
            t[n] = t[n + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = sS(this.flush), this.requestErrorThrow = Op(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class fS {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, r) {
    this.onError = t, this.release = r, this.task = null;
  }
}
class dS {
  create(t) {
    const r = this.freeTasks, n = r.length ? r.pop() : new fS(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Dp = new cS(), hS = new dS(Dp.registerPendingError);
function pS(e) {
  Dp.enqueueTask(hS.create(e));
}
function vS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function gS(e, t, r) {
  return t && mS(e.prototype, t), e;
}
function Cr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yS(e, t) {
  return TS(e) || wS(e, t) || ES(e, t) || SS();
}
function SS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ES(e, t) {
  if (e) {
    if (typeof e == "string") return Yc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yc(e, t);
  }
}
function Yc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function wS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function TS(e) {
  if (Array.isArray(e)) return e;
}
function xS(e) {
  var t = oS().toString();
  switch (e) {
    case Ve.SOURCE:
      return "S".concat(t);
    case Ve.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Zc(e) {
  switch (e[0]) {
    case "S":
      return Ve.SOURCE;
    case "T":
      return Ve.TARGET;
    default:
      H(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function Kc(e, t) {
  var r = e.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = yS(i.value, 2), u = a[1];
    if (u === t)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var CS = /* @__PURE__ */ function() {
  function e(t) {
    vS(this, e), Cr(this, "types", /* @__PURE__ */ new Map()), Cr(this, "dragSources", /* @__PURE__ */ new Map()), Cr(this, "dropTargets", /* @__PURE__ */ new Map()), Cr(this, "pinnedSourceId", null), Cr(this, "pinnedSource", null), Cr(this, "store", void 0), this.store = t;
  }
  return gS(e, [{
    key: "addSource",
    value: function(r, n) {
      $u(r), aS(n);
      var i = this.addHandler(Ve.SOURCE, r, n);
      return this.store.dispatch(F0(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      $u(r, !0), uS(n);
      var i = this.addHandler(Ve.TARGET, r, n);
      return this.store.dispatch(B0(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return Kc(this.dragSources, r) || Kc(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      H(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return H(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return H(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return H(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = Zc(r);
      return n === Ve.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = Zc(r);
      return n === Ve.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      H(this.getSource(r), "Expected an existing source."), this.store.dispatch($0(r)), pS(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      H(this.getTarget(r), "Expected an existing target."), this.store.dispatch(U0(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      H(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      H(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = xS(r);
      return this.types.set(o, n), r === Ve.SOURCE ? this.dragSources.set(o, i) : r === Ve.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), e;
}();
function OS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = DS(n), o = new nS(i, new CS(i)), a = new N0(i, o), u = e(a, t, r);
  return a.receiveBackend(u), a;
}
function DS(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Tp(Z0, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var _S = ["children"];
function PS(e, t) {
  return bS(e) || NS(e, t) || kS(e, t) || IS();
}
function IS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kS(e, t) {
  if (e) {
    if (typeof e == "string") return qc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qc(e, t);
  }
}
function qc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function NS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function bS(e) {
  if (Array.isArray(e)) return e;
}
function RS(e, t) {
  if (e == null) return {};
  var r = LS(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LS(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Jc = 0, Ui = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), MS = T.memo(function(t) {
  var r = t.children, n = RS(t, _S), i = AS(n), o = PS(i, 2), a = o[0], u = o[1];
  return T.useEffect(function() {
    if (u) {
      var l = _p();
      return ++Jc, function() {
        --Jc === 0 && (l[Ui] = null);
      };
    }
  }, []), N.jsx(Ep.Provider, Object.assign({
    value: a
  }, {
    children: r
  }), void 0);
});
function AS(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var r = HS(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [r, n];
}
function HS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _p(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = t;
  return i[Ui] || (i[Ui] = {
    dragDropManager: OS(e, t, r, n)
  }), i[Ui];
}
function _p() {
  return typeof global < "u" ? global : window;
}
function FS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $S(e, t, r) {
  return t && BS(e.prototype, t), e;
}
function ef(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Da = !1, _a = !1, US = /* @__PURE__ */ function() {
  function e(t) {
    FS(this, e), ef(this, "internalMonitor", void 0), ef(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return $S(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.sourceId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      H(!Da, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Da = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Da = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      H(!_a, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return _a = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        _a = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      return this.internalMonitor.isDraggingSource(r);
    }
  }, {
    key: "isOverTarget",
    value: function(r, n) {
      return this.internalMonitor.isOverTarget(r, n);
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      return this.internalMonitor.subscribeToOffsetChange(r);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      return this.internalMonitor.canDragSource(r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      return this.internalMonitor.canDropOnTarget(r);
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function jS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function GS(e, t, r) {
  return t && zS(e.prototype, t), e;
}
function tf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Pa = !1, VS = /* @__PURE__ */ function() {
  function e(t) {
    jS(this, e), tf(this, "internalMonitor", void 0), tf(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return GS(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.targetId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      H(!Pa, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return Pa = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        Pa = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(r) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, r) : !1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function WS(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function XS(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!T.isValidElement(t)) {
      var n = t;
      return e(n, r), n;
    }
    var i = t;
    WS(i);
    var o = r ? function(a) {
      return e(a, r);
    } : e;
    return QS(i, o);
  };
}
function Pp(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    if (r.endsWith("Ref"))
      t[r] = e[r];
    else {
      var i = XS(n);
      t[r] = function() {
        return i;
      };
    }
  }), t;
}
function rf(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function QS(e, t) {
  var r = e.ref;
  return H(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? T.cloneElement(e, {
    ref: function(i) {
      rf(r, i), rf(t, i);
    }
  }) : T.cloneElement(e, {
    ref: t
  });
}
function ji(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(r) {
    return typeof r;
  } : ji = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ji(e);
}
function Uu(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && ji(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function ju(e, t, r, n) {
  var i = void 0;
  if (i !== void 0)
    return !!i;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var o = Object.keys(e), a = Object.keys(t);
  if (o.length !== a.length)
    return !1;
  for (var u = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
    var s = o[l];
    if (!u(s))
      return !1;
    var c = e[s], d = t[s];
    if (i = void 0, i === !1 || i === void 0 && c !== d)
      return !1;
  }
  return !0;
}
function YS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function KS(e, t, r) {
  return t && ZS(e.prototype, t), e;
}
function ve(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var qS = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    YS(this, e), ve(this, "hooks", Pp({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, Uu(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, Uu(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), ve(this, "handlerId", null), ve(this, "dragSourceRef", null), ve(this, "dragSourceNode", void 0), ve(this, "dragSourceOptionsInternal", null), ve(this, "dragSourceUnsubscribe", void 0), ve(this, "dragPreviewRef", null), ve(this, "dragPreviewNode", void 0), ve(this, "dragPreviewOptionsInternal", null), ve(this, "dragPreviewUnsubscribe", void 0), ve(this, "lastConnectedHandlerId", null), ve(this, "lastConnectedDragSource", null), ve(this, "lastConnectedDragSourceOptions", null), ve(this, "lastConnectedDragPreview", null), ve(this, "lastConnectedDragPreviewOptions", null), ve(this, "backend", void 0), this.backend = t;
  }
  return KS(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.handlerId !== r && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "connectTarget",
    get: function() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function() {
      return this.dragSourceOptionsInternal;
    },
    set: function(r) {
      this.dragSourceOptionsInternal = r;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(r) {
      this.dragPreviewOptionsInternal = r;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var r = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragSource = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = r, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, r, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var r = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragPreview = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function() {
      return !ju(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !ju(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
  }, {
    key: "disconnectDragPreview",
    value: function() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
  }, {
    key: "dragSource",
    get: function() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
  }]), e;
}();
function JS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function tE(e, t, r) {
  return t && eE(e.prototype, t), e;
}
function st(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var rE = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    JS(this, e), st(this, "hooks", Pp({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, Uu(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), st(this, "handlerId", null), st(this, "dropTargetRef", null), st(this, "dropTargetNode", void 0), st(this, "dropTargetOptionsInternal", null), st(this, "unsubscribeDropTarget", void 0), st(this, "lastConnectedHandlerId", null), st(this, "lastConnectedDropTarget", null), st(this, "lastConnectedDropTargetOptions", null), st(this, "backend", void 0), this.backend = t;
  }
  return tE(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var r = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      r && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(r) {
      r !== this.handlerId && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(r) {
      this.dropTargetOptionsInternal = r;
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function() {
      return !ju(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
  }, {
    key: "dropTarget",
    get: function() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
  }]), e;
}();
function nE(e, t, r) {
  var n = r.getRegistry(), i = n.addTarget(e, t);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function iE(e, t, r) {
  var n = r.getRegistry(), i = n.addSource(e, t);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var mr = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function zi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zi = function(r) {
    return typeof r;
  } : zi = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zi(e);
}
function oE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uE(e, t, r) {
  return t && aE(e.prototype, t), e;
}
function Ia(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var lE = /* @__PURE__ */ function() {
  function e(t, r, n) {
    oE(this, e), Ia(this, "spec", void 0), Ia(this, "monitor", void 0), Ia(this, "connector", void 0), this.spec = t, this.monitor = r, this.connector = n;
  }
  return uE(e, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return zi(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var r = this.spec, n = this.monitor;
      return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      var i = this.spec, o = this.monitor, a = i.isDragging;
      return a ? a(o) : n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var r = this.spec, n = this.monitor, i = this.connector, o = r.end;
      o && o(n.getItem(), n), i.reconnect();
    }
  }]), e;
}();
function sE(e, t, r) {
  var n = T.useMemo(function() {
    return new lE(e, t, r);
  }, [t, r]);
  return T.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function on() {
  var e = T.useContext(Ep), t = e.dragDropManager;
  return H(t != null, "Expected drag drop context"), t;
}
function cE(e) {
  return T.useMemo(function() {
    var t = e.type;
    return H(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function fE(e, t) {
  return vE(e) || pE(e, t) || hE(e, t) || dE();
}
function dE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hE(e, t) {
  if (e) {
    if (typeof e == "string") return nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nf(e, t);
  }
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function pE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function vE(e) {
  if (Array.isArray(e)) return e;
}
function mE(e, t, r) {
  var n = on(), i = sE(e, t, r), o = cE(e);
  mr(function() {
    if (o != null) {
      var u = iE(o, i, n), l = fE(u, 2), s = l[0], c = l[1];
      return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
    }
  }, [n, t, r, i, o]);
}
function gE(e) {
  return wE(e) || EE(e) || SE(e) || yE();
}
function yE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SE(e, t) {
  if (e) {
    if (typeof e == "string") return zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zu(e, t);
  }
}
function EE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wE(e) {
  if (Array.isArray(e)) return zu(e);
}
function zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ip(e, t) {
  var r = gE(t || []);
  return t == null && typeof e != "function" && r.push(e), T.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, r);
}
function TE() {
  var e = on();
  return T.useMemo(function() {
    return new US(e);
  }, [e]);
}
function xE(e, t) {
  var r = on(), n = T.useMemo(function() {
    return new qS(r.getBackend());
  }, [r]);
  return mr(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), mr(function() {
    return n.dragPreviewOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, t]), n;
}
var CE = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, i, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length) return !1;
      for (i = n; i-- !== 0; )
        if (!e(t[i], r[i])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length) return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
    for (i = n; i-- !== 0; ) {
      var a = o[i];
      if (!e(t[a], r[a])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const OE = /* @__PURE__ */ en(CE);
function DE(e, t) {
  return kE(e) || IE(e, t) || PE(e, t) || _E();
}
function _E() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PE(e, t) {
  if (e) {
    if (typeof e == "string") return of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return of(e, t);
  }
}
function of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function IE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function kE(e) {
  if (Array.isArray(e)) return e;
}
function NE(e, t, r) {
  var n = T.useState(function() {
    return t(e);
  }), i = DE(n, 2), o = i[0], a = i[1], u = T.useCallback(function() {
    var l = t(e);
    OE(o, l) || (a(l), r && r());
  }, [o, e, r]);
  return mr(u), [o, u];
}
function bE(e, t) {
  return AE(e) || ME(e, t) || LE(e, t) || RE();
}
function RE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LE(e, t) {
  if (e) {
    if (typeof e == "string") return af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return af(e, t);
  }
}
function af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ME(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function AE(e) {
  if (Array.isArray(e)) return e;
}
function HE(e, t, r) {
  var n = NE(e, t, r), i = bE(n, 2), o = i[0], a = i[1];
  return mr(function() {
    var l = e.getHandlerId();
    if (l != null)
      return e.subscribeToStateChange(a, {
        handlerIds: [l]
      });
  }, [e, a]), o;
}
function kp(e, t, r) {
  return HE(t, e || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function FE(e) {
  return T.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function BE(e) {
  return T.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function $E(e, t) {
  var r = Ip(e, t);
  H(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = TE(), i = xE(r.options, r.previewOptions);
  return mE(r, n, i), [kp(r.collect, n, i), FE(i), BE(i)];
}
function UE(e) {
  var t = e.accept;
  return T.useMemo(function() {
    return H(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function jE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function GE(e, t, r) {
  return t && zE(e.prototype, t), e;
}
function uf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var VE = /* @__PURE__ */ function() {
  function e(t, r) {
    jE(this, e), uf(this, "spec", void 0), uf(this, "monitor", void 0), this.spec = t, this.monitor = r;
  }
  return GE(e, [{
    key: "canDrop",
    value: function() {
      var r = this.spec, n = this.monitor;
      return r.canDrop ? r.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var r = this.spec, n = this.monitor;
      r.hover && r.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var r = this.spec, n = this.monitor;
      if (r.drop)
        return r.drop(n.getItem(), n);
    }
  }]), e;
}();
function WE(e, t) {
  var r = T.useMemo(function() {
    return new VE(e, t);
  }, [t]);
  return T.useEffect(function() {
    r.spec = e;
  }, [e]), r;
}
function XE(e, t) {
  return KE(e) || ZE(e, t) || YE(e, t) || QE();
}
function QE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YE(e, t) {
  if (e) {
    if (typeof e == "string") return lf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lf(e, t);
  }
}
function lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ZE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (l) {
      o = !0, u = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function KE(e) {
  if (Array.isArray(e)) return e;
}
function qE(e, t, r) {
  var n = on(), i = WE(e, t), o = UE(e);
  mr(function() {
    var u = nE(o, i, n), l = XE(u, 2), s = l[0], c = l[1];
    return t.receiveHandlerId(s), r.receiveHandlerId(s), c;
  }, [n, t, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function JE() {
  var e = on();
  return T.useMemo(function() {
    return new VS(e);
  }, [e]);
}
function ew(e) {
  var t = on(), r = T.useMemo(function() {
    return new rE(t.getBackend());
  }, [t]);
  return mr(function() {
    return r.dropTargetOptions = e || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [e]), r;
}
function tw(e) {
  return T.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function rw(e, t) {
  var r = Ip(e, t), n = JE(), i = ew(r.options);
  return qE(r, n, i), [kp(r.collect, n, i), tw(i)];
}
function Np(e) {
  var t = null, r = function() {
    return t == null && (t = e()), t;
  };
  return r;
}
function nw(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function iw(e, t) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function ow(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uw(e, t, r) {
  return t && aw(e.prototype, t), e;
}
function sf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var lw = /* @__PURE__ */ function() {
  function e(t) {
    ow(this, e), sf(this, "entered", []), sf(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return uw(e, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(u) {
        return n.isNodeInDocument(u) && (!u.contains || u.contains(r));
      };
      return this.entered = iw(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = nw(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), sw = Np(function() {
  return /firefox/i.test(navigator.userAgent);
}), bp = Np(function() {
  return !!window.safari;
});
function cw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function dw(e, t, r) {
  return t && fw(e.prototype, t), e;
}
function mn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var cf = /* @__PURE__ */ function() {
  function e(t, r) {
    cw(this, e), mn(this, "xs", void 0), mn(this, "ys", void 0), mn(this, "c1s", void 0), mn(this, "c2s", void 0), mn(this, "c3s", void 0);
    for (var n = t.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(_, G) {
      return t[_] < t[G] ? -1 : 1;
    });
    for (var a = [], u = [], l, s, c = 0; c < n - 1; c++)
      l = t[c + 1] - t[c], s = r[c + 1] - r[c], a.push(l), u.push(s / l);
    for (var d = [u[0]], h = 0; h < a.length - 1; h++) {
      var m = u[h], S = u[h + 1];
      if (m * S <= 0)
        d.push(0);
      else {
        l = a[h];
        var g = a[h + 1], D = l + g;
        d.push(3 * D / ((D + g) / m + (D + l) / S));
      }
    }
    d.push(u[u.length - 1]);
    for (var p = [], f = [], v, y = 0; y < d.length - 1; y++) {
      v = u[y];
      var w = d[y], C = 1 / a[y], x = w + d[y + 1] - v - v;
      p.push((v - w - x) * C), f.push(x * C * C);
    }
    this.xs = t, this.ys = r, this.c1s = d, this.c2s = p, this.c3s = f;
  }
  return dw(e, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, a = this.c2s, u = this.c3s, l = n.length - 1;
      if (r === n[l])
        return i[l];
      for (var s = 0, c = u.length - 1, d; s <= c; ) {
        d = Math.floor(0.5 * (s + c));
        var h = n[d];
        if (h < r)
          s = d + 1;
        else if (h > r)
          c = d - 1;
        else
          return i[d];
      }
      l = Math.max(0, c);
      var m = r - n[l], S = m * m;
      return i[l] + o[l] * m + a[l] * S + u[l] * m * S;
    }
  }]), e;
}(), hw = 1;
function Rp(e) {
  var t = e.nodeType === hw ? e : e.parentElement;
  if (!t)
    return null;
  var r = t.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function Ti(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function pw(e) {
  var t;
  return e.nodeName === "IMG" && (sw() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function vw(e, t, r, n) {
  var i = e ? t.width : r, o = e ? t.height : n;
  return bp() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function mw(e, t, r, n, i) {
  var o = pw(t), a = o ? e : t, u = Rp(a), l = {
    x: r.x - u.x,
    y: r.y - u.y
  }, s = e.offsetWidth, c = e.offsetHeight, d = n.anchorX, h = n.anchorY, m = vw(o, t, s, c), S = m.dragPreviewWidth, g = m.dragPreviewHeight, D = function() {
    var x = new cf([0, 0.5, 1], [
      // Dock to the top
      l.y,
      // Align at the center
      l.y / c * g,
      // Dock to the bottom
      l.y + g - c
    ]), _ = x.interpolate(h);
    return bp() && o && (_ += (window.devicePixelRatio - 1) * g), _;
  }, p = function() {
    var x = new cf([0, 0.5, 1], [
      // Dock to the left
      l.x,
      // Align at the center
      l.x / s * S,
      // Dock to the right
      l.x + S - s
    ]);
    return x.interpolate(d);
  }, f = i.offsetX, v = i.offsetY, y = f === 0 || f, w = v === 0 || v;
  return {
    x: y ? f : p(),
    y: w ? v : D()
  };
}
var Lp = "__NATIVE_FILE__", Mp = "__NATIVE_URL__", Ap = "__NATIVE_TEXT__", Hp = "__NATIVE_HTML__";
const ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Lp,
  HTML: Hp,
  TEXT: Ap,
  URL: Mp
}, Symbol.toStringTag, { value: "Module" }));
function ka(e, t, r) {
  var n = t.reduce(function(i, o) {
    return i || e.getData(o);
  }, "");
  return n ?? r;
}
var Or;
function xi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Gu = (Or = {}, xi(Or, Lp, {
  exposeProperties: {
    files: function(t) {
      return Array.prototype.slice.call(t.files);
    },
    items: function(t) {
      return t.items;
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Files"]
}), xi(Or, Hp, {
  exposeProperties: {
    html: function(t, r) {
      return ka(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), xi(Or, Mp, {
  exposeProperties: {
    urls: function(t, r) {
      return ka(t, r, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), xi(Or, Ap, {
  exposeProperties: {
    text: function(t, r) {
      return ka(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Or);
function gw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Sw(e, t, r) {
  return t && yw(e.prototype, t), e;
}
function df(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ew = /* @__PURE__ */ function() {
  function e(t) {
    gw(this, e), df(this, "item", void 0), df(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Sw(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var r = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(r.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(r) {
      var n = this;
      if (r) {
        var i = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          i[o] = {
            value: n.config.exposeProperties[o](r, n.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, i);
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      return !0;
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      return n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function ww(e, t) {
  var r = new Ew(Gu[e]);
  return r.loadDataTransfer(t), r;
}
function Na(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Gu).filter(function(r) {
    var n = Gu[r].matchesTypes;
    return n.some(function(i) {
      return t.indexOf(i) > -1;
    });
  })[0] || null;
}
function Tw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Cw(e, t, r) {
  return t && xw(e.prototype, t), e;
}
function ba(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ow = /* @__PURE__ */ function() {
  function e(t, r) {
    Tw(this, e), ba(this, "ownerDocument", null), ba(this, "globalContext", void 0), ba(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = r;
  }
  return Cw(e, [{
    key: "window",
    get: function() {
      if (this.globalContext)
        return this.globalContext;
      if (typeof window < "u")
        return window;
    }
  }, {
    key: "document",
    get: function() {
      var r;
      return (r = this.globalContext) !== null && r !== void 0 && r.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var r;
      return ((r = this.optionsArgs) === null || r === void 0 ? void 0 : r.rootElement) || this.window;
    }
  }]), e;
}();
function hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(r), !0).forEach(function(n) {
      B(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _w(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Pw(e, t, r) {
  return t && _w(e.prototype, t), e;
}
function B(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Iw = /* @__PURE__ */ function() {
  function e(t, r, n) {
    var i = this;
    Dw(this, e), B(this, "options", void 0), B(this, "actions", void 0), B(this, "monitor", void 0), B(this, "registry", void 0), B(this, "enterLeaveCounter", void 0), B(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), B(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), B(this, "sourceNodes", /* @__PURE__ */ new Map()), B(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), B(this, "dragStartSourceIds", null), B(this, "dropTargetIds", []), B(this, "dragEnterTargetIds", []), B(this, "currentNativeSource", null), B(this, "currentNativeHandle", null), B(this, "currentDragSourceNode", null), B(this, "altKeyPressed", !1), B(this, "mouseMoveTimeoutTimer", null), B(this, "asyncEndDragFrameId", null), B(this, "dragOverTargetIds", null), B(this, "lastClientOffset", null), B(this, "hoverRafId", null), B(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && Rp(a) || null;
    }), B(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), B(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), B(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), B(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var a = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var u = Ti(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(a || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: u
        });
        var l = o.dataTransfer, s = Na(l);
        if (i.monitor.isDragging()) {
          if (l && typeof l.setDragImage == "function") {
            var c = i.monitor.getSourceId(), d = i.sourceNodes.get(c), h = i.sourcePreviewNodes.get(c) || d;
            if (h) {
              var m = i.getCurrentSourcePreviewNodeOptions(), S = m.anchorX, g = m.anchorY, D = m.offsetX, p = m.offsetY, f = {
                anchorX: S,
                anchorY: g
              }, v = {
                offsetX: D,
                offsetY: p
              }, y = mw(d, h, u, f, v);
              l.setDragImage(h, y.x, y.y);
            }
          }
          try {
            l == null || l.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var w = i.getCurrentSourcePreviewNodeOptions(), C = w.captureDraggingState;
          C ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (s)
          i.beginDragNativeItem(s);
        else {
          if (l && !l.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), B(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var a = i.enterLeaveCounter.enter(o.target);
      if (!(!a || i.monitor.isDragging())) {
        var u = o.dataTransfer, l = Na(u);
        l && i.beginDragNativeItem(l, u);
      }
    }), B(this, "handleTopDragEnter", function(o) {
      var a = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, a.length > 0 && i.actions.hover(a, {
          clientOffset: Ti(o)
        });
        var u = a.some(function(l) {
          return i.monitor.canDropOnTarget(l);
        });
        u && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), B(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), B(this, "handleTopDragOver", function(o) {
      var a = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = Ti(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(a || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var u = (a || []).some(function(l) {
        return i.monitor.canDropOnTarget(l);
      });
      u ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), B(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var a = i.enterLeaveCounter.leave(o.target);
      a && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), B(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = i.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
      } else Na(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), B(this, "handleTopDrop", function(o) {
      var a = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(a, {
        clientOffset: Ti(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), B(this, "handleSelectStart", function(o) {
      var a = o.target;
      typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop()));
    }), this.options = new Ow(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new lw(this.isNodeInDocument);
  }
  return Pw(e, [{
    key: "profile",
    value: function() {
      var r, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((r = this.dragStartSourceIds) === null || r === void 0 ? void 0 : r.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0) {
        if (r.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        r.__isReactDndBackendSetUp = !0, this.addEventListeners(r);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0 && (r.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(r, n, i) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(r, i), this.sourcePreviewNodes.set(r, n), function() {
        o.sourcePreviewNodes.delete(r), o.sourcePreviewNodeOptions.delete(r);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(r, n, i) {
      var o = this;
      this.sourceNodes.set(r, n), this.sourceNodeOptions.set(r, i);
      var a = function(s) {
        return o.handleDragStart(s, r);
      }, u = function(s) {
        return o.handleSelectStart(s);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", a), n.addEventListener("selectstart", u), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", a), n.removeEventListener("selectstart", u), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(s) {
        return i.handleDragEnter(s, r);
      }, a = function(s) {
        return i.handleDragOver(s, r);
      }, u = function(s) {
        return i.handleDrop(s, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", a), n.addEventListener("drop", u), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", a), n.removeEventListener("drop", u);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(r) {
      r.addEventListener && (r.addEventListener("dragstart", this.handleTopDragStart), r.addEventListener("dragstart", this.handleTopDragStartCapture, !0), r.addEventListener("dragend", this.handleTopDragEndCapture, !0), r.addEventListener("dragenter", this.handleTopDragEnter), r.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.addEventListener("dragover", this.handleTopDragOver), r.addEventListener("dragover", this.handleTopDragOverCapture, !0), r.addEventListener("drop", this.handleTopDrop), r.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(r) {
      r.removeEventListener && (r.removeEventListener("dragstart", this.handleTopDragStart), r.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), r.removeEventListener("dragend", this.handleTopDragEndCapture, !0), r.removeEventListener("dragenter", this.handleTopDragEnter), r.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.removeEventListener("dragover", this.handleTopDragOver), r.removeEventListener("dragover", this.handleTopDragOverCapture, !0), r.removeEventListener("drop", this.handleTopDrop), r.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(r);
      return pf({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(r);
      return pf({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(ff).some(function(n) {
        return ff[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = ww(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(r) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
      var i = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = n.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, i);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var r;
          (r = this.window) === null || r === void 0 || r.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(r, n) {
      r.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(r, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(r, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(r, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), kw = function(t, r, n) {
  return new Iw(t, r, n);
}, Fp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var u = arguments[a];
        u && (o = i(o, n(u)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var u in o)
        t.call(o, u) && o[u] && (a = i(a, u));
      return a;
    }
    function i(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Fp);
var Nw = Fp.exports;
const Ze = /* @__PURE__ */ en(Nw);
function Ae() {
  return Ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ae.apply(null, arguments);
}
function Kt(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function vf(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function bw(e) {
  var t = Rw(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Rw(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Lw(e, t, r) {
  var n = T.useRef(e !== void 0), i = T.useState(t), o = i[0], a = i[1], u = e !== void 0, l = n.current;
  return n.current = u, !u && l && o !== t && a(t), [u ? e : o, T.useCallback(function(s) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), h = 1; h < c; h++)
      d[h - 1] = arguments[h];
    r && r.apply(void 0, [s].concat(d)), a(s);
  }, [r])];
}
function Mw(e, t) {
  return Object.keys(t).reduce(function(r, n) {
    var i, o = r, a = o[vf(n)], u = o[n], l = Kt(o, [vf(n), n].map(bw)), s = t[n], c = Lw(u, a, e[s]), d = c[0], h = c[1];
    return Ae({}, l, (i = {}, i[n] = d, i[s] = h, i));
  }, e);
}
function Vu(e, t) {
  return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Vu(e, t);
}
function Aw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vu(e, t);
}
var is = /* @__PURE__ */ b.createContext({});
is.Consumer;
is.Provider;
function os(e, t) {
  var r = T.useContext(is);
  return e || r[t] || t;
}
function Hw(e) {
  return e && e.ownerDocument || document;
}
function Fw(e) {
  var t = Hw(e);
  return t && t.defaultView || window;
}
function Bw(e, t) {
  return Fw(e).getComputedStyle(e, t);
}
var $w = /([A-Z])/g;
function Uw(e) {
  return e.replace($w, "-$1").toLowerCase();
}
var jw = /^ms-/;
function Ci(e) {
  return Uw(e).replace(jw, "-ms-");
}
var zw = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Gw(e) {
  return !!(e && zw.test(e));
}
function Bp(e, t) {
  var r = "", n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ci(t)) || Bw(e).getPropertyValue(Ci(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(Ci(i)) : Gw(i) ? n += i + "(" + o + ") " : r += Ci(i) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e.style.cssText += ";" + r;
}
var $p = { exports: {} }, Vw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ww = Vw, Xw = Ww;
function Up() {
}
function jp() {
}
jp.resetWarningCache = Up;
var Qw = function() {
  function e(n, i, o, a, u, l) {
    if (l !== Xw) {
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
  var r = {
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
    checkPropTypes: jp,
    resetWarningCache: Up
  };
  return r.PropTypes = r, r;
};
$p.exports = Qw();
var Yw = $p.exports;
const M = /* @__PURE__ */ en(Yw), mf = {
  disabled: !1
}, zp = b.createContext(null);
var Zw = function(t) {
  return t.scrollTop;
}, wn = "unmounted", nr = "exited", bt = "entering", ir = "entered", Wu = "exiting", Pt = /* @__PURE__ */ function(e) {
  Aw(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = i, u = a && !a.isMounting ? n.enter : n.appear, l;
    return o.appearStatus = null, n.in ? u ? (l = nr, o.appearStatus = bt) : l = ir : n.unmountOnExit || n.mountOnEnter ? l = wn : l = nr, o.state = {
      status: l
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === wn ? {
      status: nr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== bt && a !== ir && (o = bt) : (a === bt || a === ir) && (o = Wu);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, a, u;
    return o = a = u = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, u = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: u
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Si.findDOMNode(this);
          a && Zw(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === nr && this.setState({
      status: wn
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, u = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [u] : [Si.findDOMNode(this), u], s = l[0], c = l[1], d = this.getTimeouts(), h = u ? d.appear : d.enter;
    if (!i && !a || mf.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: bt
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(h, function() {
        o.safeSetState({
          status: ir
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Si.findDOMNode(this);
    if (!o || mf.disabled) {
      this.safeSetState({
        status: nr
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Wu
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: nr
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(u) {
      a && (a = !1, o.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Si.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!a || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], s = l[0], c = l[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === wn)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Kt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ b.createElement(zp.Provider, {
        value: null
      }, typeof a == "function" ? a(i, u) : b.cloneElement(b.Children.only(a), u))
    );
  }, t;
}(b.Component);
Pt.contextType = zp;
Pt.propTypes = {};
function Dr() {
}
Pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Dr,
  onEntering: Dr,
  onEntered: Dr,
  onExit: Dr,
  onExiting: Dr,
  onExited: Dr
};
Pt.UNMOUNTED = wn;
Pt.EXITED = nr;
Pt.ENTERING = bt;
Pt.ENTERED = ir;
Pt.EXITING = Wu;
const Kw = !!(typeof window < "u" && window.document && window.document.createElement);
var Xu = !1, Qu = !1;
try {
  var Ra = {
    get passive() {
      return Xu = !0;
    },
    get once() {
      return Qu = Xu = !0;
    }
  };
  Kw && (window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, !0));
} catch {
}
function qw(e, t, r, n) {
  if (n && typeof n != "boolean" && !Qu) {
    var i = n.once, o = n.capture, a = r;
    !Qu && i && (a = r.__once || function u(l) {
      this.removeEventListener(t, u, o), r.call(this, l);
    }, r.__once = a), e.addEventListener(t, a, Xu ? n : o);
  }
  e.addEventListener(t, r, n);
}
function Jw(e, t, r, n) {
  var i = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, i), r.__once && e.removeEventListener(t, r.__once, i);
}
function Gp(e, t, r, n) {
  return qw(e, t, r, n), function() {
    Jw(e, t, r, n);
  };
}
function e1(e, t, r, n) {
  if (n === void 0 && (n = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, r, n), e.dispatchEvent(i);
  }
}
function t1(e) {
  var t = Bp(e, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function r1(e, t, r) {
  r === void 0 && (r = 5);
  var n = !1, i = setTimeout(function() {
    n || e1(e, "transitionend", !0);
  }, t + r), o = Gp(e, "transitionend", function() {
    n = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function n1(e, t, r, n) {
  r == null && (r = t1(e) || 0);
  var i = r1(e, r, n), o = Gp(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function gf(e, t) {
  var r = Bp(e, t) || "", n = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * n;
}
function i1(e, t) {
  var r = gf(e, "transitionDuration"), n = gf(e, "transitionDelay"), i = n1(e, function(o) {
    o.target === e && (i(), t(o));
  }, r + n);
}
function o1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.filter(function(n) {
    return n != null;
  }).reduce(function(n, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return n === null ? i : function() {
      for (var a = arguments.length, u = new Array(a), l = 0; l < a; l++)
        u[l] = arguments[l];
      n.apply(this, u), i.apply(this, u);
    };
  }, null);
}
function a1(e) {
  e.offsetHeight;
}
function u1(e) {
  const t = T.useRef(e);
  return T.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function l1(e) {
  const t = u1(e);
  return T.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
var s1 = ["className", "children"], Oi, c1 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, f1 = (Oi = {}, Oi[bt] = "show", Oi[ir] = "show", Oi), Qo = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.className, n = e.children, i = Kt(e, s1), o = T.useCallback(function(a) {
    a1(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ b.createElement(Pt, Ae({
    ref: t,
    addEndListener: i1
  }, i, {
    onEnter: o
  }), function(a, u) {
    return /* @__PURE__ */ b.cloneElement(n, Ae({}, u, {
      className: Ze("fade", r, n.props.className, f1[a])
    }));
  });
});
Qo.defaultProps = c1;
Qo.displayName = "Fade";
var d1 = ["label", "onClick", "className"], h1 = {
  label: M.string.isRequired,
  onClick: M.func
}, p1 = {
  label: "Close"
}, Yo = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.label, n = e.onClick, i = e.className, o = Kt(e, d1);
  return /* @__PURE__ */ b.createElement("button", Ae({
    ref: t,
    type: "button",
    className: Ze("close", i),
    onClick: n
  }, o), /* @__PURE__ */ b.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ b.createElement("span", {
    className: "sr-only"
  }, r));
});
Yo.displayName = "CloseButton";
Yo.propTypes = h1;
Yo.defaultProps = p1;
const Vp = function(e) {
  return /* @__PURE__ */ b.forwardRef(function(t, r) {
    return /* @__PURE__ */ b.createElement("div", Ae({}, t, {
      ref: r,
      className: Ze(t.className, e)
    }));
  });
};
var v1 = /-(.)/g;
function m1(e) {
  return e.replace(v1, function(t, r) {
    return r.toUpperCase();
  });
}
var g1 = ["className", "bsPrefix", "as"], y1 = function(t) {
  return t[0].toUpperCase() + m1(t).slice(1);
};
function Wp(e, t) {
  var r = t === void 0 ? {} : t, n = r.displayName, i = n === void 0 ? y1(e) : n, o = r.Component, a = r.defaultProps, u = /* @__PURE__ */ b.forwardRef(function(l, s) {
    var c = l.className, d = l.bsPrefix, h = l.as, m = h === void 0 ? o || "div" : h, S = Kt(l, g1), g = os(d, e);
    return /* @__PURE__ */ b.createElement(m, Ae({
      ref: s,
      className: Ze(c, g)
    }, S));
  });
  return u.defaultProps = a, u.displayName = i, u;
}
var S1 = ["as", "disabled", "onKeyDown"];
function yf(e) {
  return !e || e.trim() === "#";
}
var as = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.as, n = r === void 0 ? "a" : r, i = e.disabled, o = e.onKeyDown, a = Kt(e, S1), u = function(c) {
    var d = a.href, h = a.onClick;
    if ((i || yf(d)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    h && h(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), u(c));
  };
  return yf(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ b.createElement(n, Ae({
    ref: t
  }, a, {
    onClick: u,
    onKeyDown: o1(l, o)
  }));
});
as.displayName = "SafeAnchor";
var E1 = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Xp = Vp("h4");
Xp.displayName = "DivStyledAsH4";
var w1 = Wp("alert-heading", {
  Component: Xp
}), T1 = Wp("alert-link", {
  Component: as
}), x1 = {
  show: !0,
  transition: Qo,
  closeLabel: "Close alert"
}, Er = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = Mw(e, {
    show: "onClose"
  }), n = r.bsPrefix, i = r.show, o = r.closeLabel, a = r.className, u = r.children, l = r.variant, s = r.onClose, c = r.dismissible, d = r.transition, h = Kt(r, E1), m = os(n, "alert"), S = l1(function(p) {
    s && s(!1, p);
  }), g = d === !0 ? Qo : d, D = /* @__PURE__ */ b.createElement("div", Ae({
    role: "alert"
  }, g ? void 0 : h, {
    ref: t,
    className: Ze(a, m, l && m + "-" + l, c && m + "-dismissible")
  }), c && /* @__PURE__ */ b.createElement(Yo, {
    onClick: S,
    label: o
  }), u);
  return g ? /* @__PURE__ */ b.createElement(g, Ae({
    unmountOnExit: !0
  }, h, {
    ref: void 0,
    in: i
  }), D) : i ? D : null;
});
Er.displayName = "Alert";
Er.defaultProps = x1;
Er.Link = T1;
Er.Heading = w1;
var C1 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], O1 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, us = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.bsPrefix, n = e.variant, i = e.size, o = e.active, a = e.className, u = e.block, l = e.type, s = e.as, c = Kt(e, C1), d = os(r, "btn"), h = Ze(a, d, o && "active", n && d + "-" + n, u && d + "-block", i && d + "-" + i);
  if (c.href)
    return /* @__PURE__ */ b.createElement(as, Ae({}, c, {
      as: s,
      ref: t,
      className: Ze(h, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : s || (c.type = "button");
  var m = s || "button";
  return /* @__PURE__ */ b.createElement(m, Ae({}, c, {
    className: h
  }));
});
us.displayName = "Button";
us.defaultProps = O1;
var ls = {};
ls.match = N1;
ls.parse = Qp;
var D1 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, _1 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, P1 = /^(?:(min|max)-)?(.+)/, I1 = /(em|rem|px|cm|mm|in|pt|pc)?$/, k1 = /(dpi|dpcm|dppx)?$/;
function N1(e, t) {
  return Qp(e).some(function(r) {
    var n = r.inverse, i = r.type === "all" || t.type === r.type;
    if (i && n || !(i || n))
      return !1;
    var o = r.expressions.every(function(a) {
      var u = a.feature, l = a.modifier, s = a.value, c = t[u];
      if (!c)
        return !1;
      switch (u) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === s.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          s = wf(s), c = wf(c);
          break;
        case "resolution":
          s = Ef(s), c = Ef(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = Sf(s), c = Sf(c);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          s = parseInt(s, 10) || 1, c = parseInt(c, 10) || 0;
          break;
      }
      switch (l) {
        case "min":
          return c >= s;
        case "max":
          return c <= s;
        default:
          return c === s;
      }
    });
    return o && !n || !o && n;
  });
}
function Qp(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var r = t.match(D1), n = r[1], i = r[2], o = r[3] || "", a = {};
    return a.inverse = !!n && n.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], a.expressions = o.map(function(u) {
      var l = u.match(_1), s = l[1].toLowerCase().match(P1);
      return {
        modifier: s[1],
        feature: s[2],
        value: l[2]
      };
    }), a;
  });
}
function Sf(e) {
  var t = Number(e), r;
  return t || (r = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = r[1] / r[2]), t;
}
function Ef(e) {
  var t = parseFloat(e), r = String(e).match(k1)[1];
  switch (r) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function wf(e) {
  var t = parseFloat(e), r = String(e).match(I1)[1];
  switch (r) {
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
var b1 = ls.match, Tf = typeof window < "u" ? window.matchMedia : null;
function R1(e, t, r) {
  var n = this, i;
  Tf && !r && (i = Tf.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(u)) : (this.matches = b1(e, t), this.media = e), this.addListener = o, this.removeListener = a, this.dispose = l;
  function o(s) {
    i && i.addListener(s);
  }
  function a(s) {
    i && i.removeListener(s);
  }
  function u(s) {
    n.matches = s.matches, n.media = s.media;
  }
  function l() {
    i && i.removeListener(u);
  }
}
function L1(e, t, r) {
  return new R1(e, t, r);
}
var M1 = L1;
const A1 = /* @__PURE__ */ en(M1);
var H1 = /[A-Z]/g, F1 = /^ms-/, La = {};
function B1(e) {
  return "-" + e.toLowerCase();
}
function Yp(e) {
  if (La.hasOwnProperty(e))
    return La[e];
  var t = e.replace(H1, B1);
  return La[e] = F1.test(t) ? "-" + t : t;
}
function $1(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const r = Object.keys(e), n = Object.keys(t), i = r.length;
  if (n.length !== i)
    return !1;
  for (let o = 0; o < i; o++) {
    const a = r[o];
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
      return !1;
  }
  return !0;
}
const Se = M.oneOfType([M.string, M.number]), Zp = {
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
}, U1 = {
  orientation: M.oneOf(["portrait", "landscape"]),
  scan: M.oneOf(["progressive", "interlace"]),
  aspectRatio: M.string,
  deviceAspectRatio: M.string,
  height: Se,
  deviceHeight: Se,
  width: Se,
  deviceWidth: Se,
  color: M.bool,
  colorIndex: M.bool,
  monochrome: M.bool,
  resolution: Se,
  type: Object.keys(Zp)
}, { type: yT, ...j1 } = U1, z1 = {
  minAspectRatio: M.string,
  maxAspectRatio: M.string,
  minDeviceAspectRatio: M.string,
  maxDeviceAspectRatio: M.string,
  minHeight: Se,
  maxHeight: Se,
  minDeviceHeight: Se,
  maxDeviceHeight: Se,
  minWidth: Se,
  maxWidth: Se,
  minDeviceWidth: Se,
  maxDeviceWidth: Se,
  minColor: M.number,
  maxColor: M.number,
  minColorIndex: M.number,
  maxColorIndex: M.number,
  minMonochrome: M.number,
  maxMonochrome: M.number,
  minResolution: Se,
  maxResolution: Se,
  ...j1
}, G1 = { ...Zp, ...z1 };
var V1 = {
  all: G1
};
const W1 = (e) => `not ${e}`, X1 = (e, t) => {
  const r = Yp(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? r : t === !1 ? W1(r) : `(${r}: ${t})`;
}, Q1 = (e) => e.join(" and "), Y1 = (e) => {
  const t = [];
  return Object.keys(V1.all).forEach((r) => {
    const n = e[r];
    n != null && t.push(X1(r, n));
  }), Q1(t);
}, Z1 = T.createContext(void 0), K1 = (e) => e.query || Y1(e), xf = (e) => e ? Object.keys(e).reduce((r, n) => (r[Yp(n)] = e[n], r), {}) : void 0, Kp = () => {
  const e = T.useRef(!1);
  return T.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, q1 = (e) => {
  const t = T.useContext(Z1), r = () => xf(e) || xf(t), [n, i] = T.useState(r);
  return T.useEffect(() => {
    const o = r();
    $1(n, o) || i(o);
  }, [e, t]), n;
}, J1 = (e) => {
  const t = () => K1(e), [r, n] = T.useState(t);
  return T.useEffect(() => {
    const i = t();
    r !== i && n(i);
  }, [e]), r;
}, eT = (e, t) => {
  const r = () => A1(e, t || {}, !!t), [n, i] = T.useState(r), o = Kp();
  return T.useEffect(() => {
    if (o) {
      const a = r();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), n;
}, tT = (e) => {
  const [t, r] = T.useState(e.matches);
  return T.useEffect(() => {
    const n = (i) => {
      r(i.matches);
    };
    return e.addListener(n), r(e.matches), () => {
      e.removeListener(n);
    };
  }, [e]), t;
}, rT = (e, t, r) => {
  const n = q1(t), i = J1(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = eT(i, n), a = tT(o);
  return Kp(), T.useEffect(() => {
  }, [a]), T.useEffect(() => () => {
    o && o.dispose();
  }, []), a;
};
let Cf = 0;
const nT = (e = "id") => (Cf += 1, `${e}${Cf}`);
let Tn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function iT(e, t, r) {
  class n extends b.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, a) {
      if (r[a] === void 0)
        return o[a] = this.props[a], o;
      const {
        deprType: u,
        newName: l,
        expect: s,
        transform: c,
        message: d
      } = r[a];
      switch (u) {
        case Tn.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${l}'.`), o[l] = this.props[a];
          break;
        case Tn.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${d}'`);
          break;
        case Tn.FORMAT:
          s(this.props[a]) ? o[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${d}`), o[a] = c(this.props[a], this.props));
          break;
        case Tn.MOVED_AND_FORMAT: {
          const h = this.props[a];
          let m = `${t}: The prop '${a}' has been moved to '${l}'`;
          s && !s(h) && (m += " and expects a new format"), m += d ? `. ${d}` : "", this.warn(m), o[l] = c ? c(h, this.props) : h;
          break;
        }
        default:
          o[a] = this.props[a];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...a
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ b.createElement(e, {
        ...a
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    fs(n, "displayName", `withDeprecatedProps(${t})`), n
  );
}
function ss({
  src: e,
  id: t,
  className: r,
  hidden: n,
  screenReaderText: i,
  svgAttrs: o,
  size: a,
  ...u
}) {
  if (e) {
    const l = o["aria-label"] || o["aria-labelledby"], s = {
      ...o
    };
    return l || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ b.createElement("span", {
      className: Ze("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, r),
      id: t,
      ...u
    }, /* @__PURE__ */ b.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ b.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("span", {
    id: t || nT("Icon"),
    className: r,
    "aria-hidden": n
  }), i && /* @__PURE__ */ b.createElement("span", {
    className: "sr-only"
  }, i));
}
ss.propTypes = {
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
ss.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Yu = iT(ss, "Icon", {
  className: {
    deprType: Tn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), oT = "576px", aT = {
  sm: oT
}, {
  sm: uT
} = aT, lT = {
  extraSmall: {
    maxWidth: parseFloat(uT) || 575.98
  }
}, sT = /* @__PURE__ */ b.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: r,
  size: n,
  ...i
}, o) => /* @__PURE__ */ b.createElement(us, {
  size: n,
  ...i,
  className: Ze(i.className),
  ref: o
}, r && /* @__PURE__ */ b.createElement(Yu, {
  className: "btn-icon-before",
  size: n,
  src: r
}), e, t && /* @__PURE__ */ b.createElement(Yu, {
  className: "btn-icon-after",
  size: n,
  src: t
})));
function Zu({
  as: e = "div",
  isStacked: t = !1,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ b.createElement(e, {
    ...n,
    className: Ze(n.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, r);
}
function cT() {
  return /* @__PURE__ */ b.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Zu.Spacer = cT;
const cs = /* @__PURE__ */ T.forwardRef(({
  children: e,
  icon: t,
  actions: r,
  dismissible: n = !1,
  onClose: i = () => {
  },
  closeLabel: o,
  stacked: a = !1,
  show: u = !0,
  ...l
}, s) => {
  const [c, d] = T.useState(a), h = rT({
    maxWidth: lT.extraSmall.maxWidth
  }), m = "sm";
  T.useEffect(() => {
    d(h ? !0 : a);
  }, [h, a]);
  const S = T.useCallback((g) => {
    const D = {
      size: m,
      key: g.props.children
    };
    return /* @__PURE__ */ T.cloneElement(g, D);
  }, []);
  return /* @__PURE__ */ b.createElement(Er, {
    ...l,
    className: Ze("alert-content", l.className),
    show: u,
    ref: s
  }, t && /* @__PURE__ */ b.createElement(Yu, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ b.createElement("div", {
    className: Ze({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ b.createElement("div", {
    className: "alert-message-content"
  }, e), (n || r && r.length > 0) && /* @__PURE__ */ b.createElement(Zu, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ b.createElement(Zu.Spacer, null), n && /* @__PURE__ */ b.createElement(sT, {
    size: m,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ b.createElement(Sp, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), r && r.map(S))));
}), qp = Vp("h4");
qp.displayName = "DivStyledAsH4";
function fT({
  as: e = qp,
  bsPrefix: t = "alert-heading",
  ...r
}) {
  return /* @__PURE__ */ b.createElement(Er.Heading, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
function dT({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...r
}) {
  return /* @__PURE__ */ b.createElement(Er.Link, {
    as: e,
    bsPrefix: t,
    ...r
  });
}
cs.Heading = fT;
cs.Link = dT;
function hT() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const i = t[n].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const r = document.querySelector('meta[name="csrf-token"]');
  return r ? r.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function Ma(e, t, r = {}) {
  const n = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": hT()
        // ARCHITECTURAL: CSRF protection
      },
      body: JSON.stringify(r)
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
const Jp = "TERM", pT = ({
  id: e,
  term: t,
  isMatched: r,
  isCorrect: n,
  disabled: i
}) => {
  const [{ isDragging: o }, a] = $E(() => ({
    type: Jp,
    item: { id: e, term: t },
    canDrag: !i,
    collect: (l) => ({
      isDragging: l.isDragging()
    })
  }), [e, t, i]), u = () => {
    const l = ["draggable-term"];
    return o && l.push("dragging"), r && (l.push("matched"), n !== void 0 && l.push(n ? "correct" : "incorrect")), i && l.push("disabled"), l.join(" ");
  };
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: a,
      className: u(),
      "data-id": e,
      "data-type": "term",
      style: {
        opacity: o ? 0.5 : 1,
        cursor: i ? "not-allowed" : "grab"
      },
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "term-content", children: t }),
        r && /* @__PURE__ */ N.jsx("div", { className: "match-indicator", children: n ? "✓" : "✗" })
      ]
    }
  );
}, vT = ({
  id: e,
  description: t,
  matchedTerm: r,
  isCorrect: n,
  onDrop: i,
  disabled: o
}) => {
  const [{ isOver: a, canDrop: u }, l] = rw(() => ({
    accept: Jp,
    drop: (c) => {
      o || i(c.id, e);
    },
    canDrop: () => !o,
    collect: (c) => ({
      isOver: c.isOver(),
      canDrop: c.canDrop()
    })
  }), [e, i, o]), s = () => {
    const c = ["droppable-description"];
    return a && u && c.push("hover"), r && (c.push("has-match"), n !== void 0 && c.push(n ? "correct" : "incorrect")), o && c.push("disabled"), c.join(" ");
  };
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: l,
      className: s(),
      "data-id": e,
      "data-type": "description",
      style: {
        backgroundColor: a && u ? "#e3f2fd" : void 0
      },
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "description-content", children: t }),
        r && /* @__PURE__ */ N.jsxs("div", { className: "matched-term", children: [
          /* @__PURE__ */ N.jsx("span", { className: "term-label", children: r }),
          n !== void 0 && /* @__PURE__ */ N.jsx("span", { className: "match-indicator", children: n ? "✓" : "✗" })
        ] }),
        !r && /* @__PURE__ */ N.jsx("div", { className: "drop-hint", children: "Drop term here" })
      ]
    }
  );
}, Of = ({
  termId: e,
  descriptionId: t,
  isCorrect: r,
  isAnswerOverlay: n = !1,
  containerRef: i
}) => {
  const [o, a] = T.useState(null), u = () => {
    if (!i.current) return;
    const w = i.current.querySelector(`[data-id="${e}"][data-type="term"]`), C = i.current.querySelector(`[data-id="${t}"][data-type="description"]`), x = i.current.querySelector(".connectors-svg");
    if (!w || !C || !x) return;
    const _ = w.getBoundingClientRect(), G = C.getBoundingClientRect(), R = x.getBoundingClientRect(), ae = 5, vt = _.right - R.left + ae, mt = _.top - R.top + _.height / 2, wr = G.left - R.left - ae, an = G.top - R.top + G.height / 2;
    a({ startX: vt, startY: mt, endX: wr, endY: an });
  };
  if (T.useEffect(() => (u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u)), [e, t, i]), !o) return null;
  const { startX: l, startY: s, endX: c, endY: d } = o, h = l + (c - l) * 0.3, m = s, S = l + (c - l) * 0.7, D = `M ${l} ${s} C ${h} ${m}, ${S} ${d}, ${c} ${d}`, p = r ? "#178253" : "#c32d3a", f = n ? "5,5" : "none", v = n ? 2 : 3, y = n ? 0.6 : 0.8;
  return /* @__PURE__ */ N.jsxs("g", { className: "connector-line", children: [
    /* @__PURE__ */ N.jsx(
      "path",
      {
        d: D,
        stroke: p,
        strokeWidth: v,
        strokeDasharray: f,
        fill: "none",
        strokeLinecap: "round",
        opacity: y
      }
    ),
    /* @__PURE__ */ N.jsx(
      "circle",
      {
        cx: l,
        cy: s,
        r: "5",
        fill: p,
        opacity: y
      }
    ),
    /* @__PURE__ */ N.jsx(
      "circle",
      {
        cx: c,
        cy: d,
        r: "5",
        fill: p,
        opacity: y
      }
    )
  ] });
}, mT = ({
  runtime: e,
  questionText: t,
  terms: r,
  descriptions: n,
  studentMatches: i,
  currentScore: o,
  maxScore: a,
  attemptsRemaining: u,
  feedbackMode: l,
  lastSubmissionResult: s,
  isGraded: c
}) => {
  const [d, h] = T.useState(i), [m, S] = T.useState(o), [g, D] = T.useState(!1), [p, f] = T.useState(null), [v, y] = T.useState(!1), [w, C] = T.useState(null), [x, _] = T.useState(!1), [G, R] = T.useState(null), ae = T.useRef(null), vt = T.useCallback(async (O, F) => {
    if (l === "on_submit") {
      h((L) => ({
        ...L,
        [O]: {
          correct: !1,
          // Won't know until submission
          descriptionId: F
        }
      }));
      return;
    }
    D(!0), f(null);
    try {
      const L = await Ma(e, "submit_match", {
        pairId: O,
        descriptionId: F
      });
      L.success ? (h(($e) => ({
        ...$e,
        [O]: {
          correct: L.correct,
          descriptionId: F
        }
      })), S(L.score)) : f(L.error || "Failed to submit match");
    } catch (L) {
      console.error("Match submission error:", L), f("An error occurred. Please try again.");
    } finally {
      D(!1);
    }
  }, [e, l]), mt = T.useCallback(async () => {
    D(!0), f(null);
    try {
      const O = Object.entries(d).reduce((L, [$e, Je]) => (L[$e] = { descriptionId: Je.descriptionId }, L), {}), F = await Ma(e, "submit_all_matches", {
        matches: O
      });
      F.success ? (h(F.results), S(F.score), y(!0), C(F)) : f(F.error || "Failed to submit matches");
    } catch (O) {
      console.error("Batch submission error:", O), f("An error occurred. Please try again.");
    } finally {
      D(!1);
    }
  }, [e, d]), wr = T.useCallback(() => {
    h({}), y(!1), C(null), _(!1), R(null), f(null);
  }, []), an = T.useCallback(async () => {
    if (x) {
      _(!1), R(null);
      return;
    }
    try {
      const O = await Ma(
        e,
        "get_correct_answers",
        {}
      );
      O.success && (R(O.correctMatches), _(!0));
    } catch (O) {
      console.error("Error fetching correct answers:", O), f("Failed to load correct answers");
    }
  }, [e, x]), gt = r.length, qt = Object.values(d).filter((O) => O.correct).length, P = gt > 0 ? qt / gt * 100 : 0, A = qt === gt && gt > 0;
  return /* @__PURE__ */ N.jsx(MS, { backend: kw, children: /* @__PURE__ */ N.jsxs("div", { className: "drag-drop-matching-student-view", ref: ae, children: [
    /* @__PURE__ */ N.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ N.jsx("h3", { className: "problem-title", children: "Drag and Drop Matching" }),
      /* @__PURE__ */ N.jsxs("div", { className: "problem-points", children: [
        a.toFixed(a % 1 === 0 ? 0 : 1),
        "/",
        a.toFixed(a % 1 === 0 ? 0 : 1),
        " point",
        a !== 1 ? "s" : "",
        " (",
        c ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "problem-question", dangerouslySetInnerHTML: { __html: t } }),
    (p || u === 0) && /* @__PURE__ */ N.jsx(cs, { variant: "danger", className: "mb-3", children: p || (u === 0 ? "Maximum attempts exceeded" : null) }),
    l === "immediate" && /* @__PURE__ */ N.jsxs("div", { className: `score-display ${A ? "score-correct" : "score-incorrect"}`, children: [
      /* @__PURE__ */ N.jsx("strong", { children: "Current Score:" }),
      " ",
      m.toFixed(2),
      " / ",
      a.toFixed(2),
      "(",
      P.toFixed(0),
      "% - ",
      qt,
      " of ",
      gt,
      " correct)"
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "matching-container", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "terms-column", children: [
        /* @__PURE__ */ N.jsx("h4", { className: "column-header", children: "Terms" }),
        /* @__PURE__ */ N.jsx("div", { className: "items-list", children: r.map((O) => {
          var L;
          const F = l === "immediate" || v;
          return /* @__PURE__ */ N.jsx(
            pT,
            {
              id: O.id,
              term: O.term,
              isMatched: !!d[O.id],
              isCorrect: F ? (L = d[O.id]) == null ? void 0 : L.correct : void 0,
              disabled: g || l === "on_submit" && v
            },
            O.id
          );
        }) })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "connectors-column", children: /* @__PURE__ */ N.jsxs("svg", { className: "connectors-svg", width: "100%", height: "100%", children: [
        Object.entries(d).map(([O, F]) => {
          const L = l === "immediate" || v;
          return /* @__PURE__ */ N.jsx(
            Of,
            {
              termId: O,
              descriptionId: F.descriptionId,
              isCorrect: L ? F.correct : void 0,
              containerRef: ae
            },
            O
          );
        }),
        x && G && Object.entries(G).map(([O, F]) => {
          const L = d[O];
          return L && L.correct && L.descriptionId === F ? null : /* @__PURE__ */ N.jsx(
            Of,
            {
              termId: O,
              descriptionId: F,
              isCorrect: !0,
              isAnswerOverlay: !0,
              containerRef: ae
            },
            `answer-${O}`
          );
        })
      ] }) }),
      /* @__PURE__ */ N.jsxs("div", { className: "descriptions-column", children: [
        /* @__PURE__ */ N.jsx("h4", { className: "column-header", children: "Descriptions" }),
        /* @__PURE__ */ N.jsx("div", { className: "items-list", children: n.map((O, F) => {
          var Tr, ut;
          const L = (Tr = Object.entries(d).find(
            ([Jt, ev]) => ev.descriptionId === O.id
          )) == null ? void 0 : Tr[0], $e = L ? r.find((Jt) => Jt.id === L) : void 0, Je = l === "immediate" || v;
          return /* @__PURE__ */ N.jsx(
            vT,
            {
              id: O.id,
              description: O.description,
              matchedTerm: $e == null ? void 0 : $e.term,
              isCorrect: Je && L ? (ut = d[L]) == null ? void 0 : ut.correct : void 0,
              onDrop: vt,
              disabled: g || l === "on_submit" && v
            },
            O.id
          );
        }) })
      ] })
    ] }),
    l === "on_submit" && /* @__PURE__ */ N.jsxs("div", { className: "action", children: [
      v && /* @__PURE__ */ N.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ N.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            className: "reset problem-action-btn btn-link btn-small",
            onClick: wr,
            disabled: g,
            "aria-label": "Reset problem",
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ N.jsx("span", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            className: "show problem-action-btn btn-link btn-small",
            onClick: an,
            disabled: g,
            "aria-label": x ? "Hide correct answers" : "Show correct answers",
            children: x ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            className: "submit btn-brand",
            onClick: mt,
            disabled: g || Object.keys(d).length === 0 || v || u === 0,
            "aria-label": "Submit answer",
            children: g ? "Submitting..." : "Submit"
          }
        ),
        v && w && /* @__PURE__ */ N.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ N.jsxs("div", { className: `notification notification-${w.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: "notification-icon", children: w.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ N.jsx("div", { className: "notification-content", children: /* @__PURE__ */ N.jsxs("p", { children: [
              w.allCorrect ? "Correct" : "Incorrect",
              "(",
              w.score.toFixed(2),
              "/",
              w.maxScore.toFixed(2),
              " point",
              w.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          w.explanation && /* @__PURE__ */ N.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ N.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ N.jsx("div", { className: "notification-content", children: /* @__PURE__ */ N.jsx("div", { dangerouslySetInnerHTML: { __html: w.explanation } }) })
          ] }),
          x && /* @__PURE__ */ N.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ N.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ N.jsx("div", { className: "notification-content", children: /* @__PURE__ */ N.jsx("p", { children: "Correct answers are displayed with green connectors" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}, ST = (e, t) => {
  Bh(e).render(
    /* @__PURE__ */ N.jsxs(T.StrictMode, { children: [
      /* @__PURE__ */ N.jsx(t0, { locale: "en", children: /* @__PURE__ */ N.jsx(
        mT,
        {
          runtime: t.runtime,
          questionText: t.questionText,
          terms: t.terms,
          descriptions: t.descriptions,
          studentMatches: t.studentMatches,
          currentScore: t.currentScore,
          maxScore: t.maxScore,
          attemptsRemaining: t.attemptsRemaining,
          feedbackMode: t.feedbackMode,
          lastSubmissionResult: t.lastSubmissionResult
        }
      ) }),
      "    "
    ] })
  );
};
export {
  ST as renderBlock
};
//# sourceMappingURL=student-ui.js.map
