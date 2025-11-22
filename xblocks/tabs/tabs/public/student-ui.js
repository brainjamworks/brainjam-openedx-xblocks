var ls = { exports: {} }, _l = {}, is = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr = Symbol.for("react.element"), bc = Symbol.for("react.portal"), qc = Symbol.for("react.fragment"), ed = Symbol.for("react.strict_mode"), td = Symbol.for("react.profiler"), nd = Symbol.for("react.provider"), rd = Symbol.for("react.context"), ld = Symbol.for("react.forward_ref"), id = Symbol.for("react.suspense"), od = Symbol.for("react.memo"), ud = Symbol.for("react.lazy"), Au = Symbol.iterator;
function ad(e) {
  return e === null || typeof e != "object" ? null : (e = Au && e[Au] || e["@@iterator"], typeof e == "function" ? e : null);
}
var os = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, us = Object.assign, as = {};
function _n(e, t, n) {
  this.props = e, this.context = t, this.refs = as, this.updater = n || os;
}
_n.prototype.isReactComponent = {};
_n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ss() {
}
ss.prototype = _n.prototype;
function Ho(e, t, n) {
  this.props = e, this.context = t, this.refs = as, this.updater = n || os;
}
var Ao = Ho.prototype = new ss();
Ao.constructor = Ho;
us(Ao, _n.prototype);
Ao.isPureReactComponent = !0;
var Du = Array.isArray, fs = Object.prototype.hasOwnProperty, Do = { current: null }, cs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ds(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) fs.call(t, r) && !cs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: hr, type: e, key: i, ref: o, props: l, _owner: Do.current };
}
function sd(e, t) {
  return { $$typeof: hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Fo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Fu = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fd("" + e.key) : t.toString(36);
}
function jr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case hr:
        case bc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + ti(o, 0) : r, Du(l) ? (n = "", e != null && (n = e.replace(Fu, "$&/") + "/"), jr(l, t, n, "", function(s) {
    return s;
  })) : l != null && (Fo(l) && (l = sd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Fu, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Du(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + ti(i, u);
    o += jr(i, t, n, a, l);
  }
  else if (a = ad(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + ti(i, u++), o += jr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return jr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function cd(e) {
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
var ge = { current: null }, Gr = { transition: null }, dd = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: Gr, ReactCurrentOwner: Do };
function hs() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: wr, forEach: function(e, t, n) {
  wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Fo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = _n;
R.Fragment = qc;
R.Profiler = td;
R.PureComponent = Ho;
R.StrictMode = ed;
R.Suspense = id;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
R.act = hs;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = us({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Do.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) fs.call(t, a) && !cs.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: hr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function(e) {
  return e = { $$typeof: rd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nd, _context: e }, e.Consumer = e;
};
R.createElement = ds;
R.createFactory = function(e) {
  var t = ds.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: ld, render: e };
};
R.isValidElement = Fo;
R.lazy = function(e) {
  return { $$typeof: ud, _payload: { _status: -1, _result: e }, _init: cd };
};
R.memo = function(e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = Gr.transition;
  Gr.transition = {};
  try {
    e();
  } finally {
    Gr.transition = t;
  }
};
R.unstable_act = hs;
R.useCallback = function(e, t) {
  return ge.current.useCallback(e, t);
};
R.useContext = function(e) {
  return ge.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return ge.current.useDeferredValue(e);
};
R.useEffect = function(e, t) {
  return ge.current.useEffect(e, t);
};
R.useId = function() {
  return ge.current.useId();
};
R.useImperativeHandle = function(e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function(e, t) {
  return ge.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function(e, t) {
  return ge.current.useLayoutEffect(e, t);
};
R.useMemo = function(e, t) {
  return ge.current.useMemo(e, t);
};
R.useReducer = function(e, t, n) {
  return ge.current.useReducer(e, t, n);
};
R.useRef = function(e) {
  return ge.current.useRef(e);
};
R.useState = function(e) {
  return ge.current.useState(e);
};
R.useSyncExternalStore = function(e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function() {
  return ge.current.useTransition();
};
R.version = "18.3.1";
is.exports = R;
var le = is.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd = le, pd = Symbol.for("react.element"), md = Symbol.for("react.fragment"), vd = Object.prototype.hasOwnProperty, gd = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ps(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) vd.call(t, r) && !yd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: pd, type: e, key: i, ref: o, props: l, _owner: gd.current };
}
_l.Fragment = md;
_l.jsx = ps;
_l.jsxs = ps;
ls.exports = _l;
var je = ls.exports, ms = { exports: {} }, Pe = {}, vs = { exports: {} }, gs = {};
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
  function t(T, I) {
    var L = T.length;
    T.push(I);
    e: for (; 0 < L; ) {
      var Z = L - 1 >>> 1, q = T[Z];
      if (0 < l(q, I)) T[Z] = I, T[L] = q, L = Z;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0], L = T.pop();
    if (L !== I) {
      T[0] = L;
      e: for (var Z = 0, q = T.length, Sr = q >>> 1; Z < Sr; ) {
        var Rt = 2 * (Z + 1) - 1, ei = T[Rt], Ot = Rt + 1, xr = T[Ot];
        if (0 > l(ei, L)) Ot < q && 0 > l(xr, ei) ? (T[Z] = xr, T[Ot] = L, Z = Ot) : (T[Z] = ei, T[Rt] = L, Z = Rt);
        else if (Ot < q && 0 > l(xr, L)) T[Z] = xr, T[Ot] = L, Z = Ot;
        else break e;
      }
    }
    return I;
  }
  function l(T, I) {
    var L = T.sortIndex - I.sortIndex;
    return L !== 0 ? L : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var a = [], s = [], d = 1, m = null, p = 3, v = !1, g = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= T) r(s), I.sortIndex = I.expirationTime, t(a, I);
      else break;
      I = n(s);
    }
  }
  function E(T) {
    if (y = !1, h(T), !g) if (n(a) !== null) g = !0, bl(x);
    else {
      var I = n(s);
      I !== null && ql(E, I.startTime - T);
    }
  }
  function x(T, I) {
    g = !1, y && (y = !1, c(N), N = -1), v = !0;
    var L = p;
    try {
      for (h(I), m = n(a); m !== null && (!(m.expirationTime > I) || T && !Ue()); ) {
        var Z = m.callback;
        if (typeof Z == "function") {
          m.callback = null, p = m.priorityLevel;
          var q = Z(m.expirationTime <= I);
          I = e.unstable_now(), typeof q == "function" ? m.callback = q : m === n(a) && r(a), h(I);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Sr = !0;
      else {
        var Rt = n(s);
        Rt !== null && ql(E, Rt.startTime - I), Sr = !1;
      }
      return Sr;
    } finally {
      m = null, p = L, v = !1;
    }
  }
  var _ = !1, C = null, N = -1, X = 5, O = -1;
  function Ue() {
    return !(e.unstable_now() - O < X);
  }
  function Nn() {
    if (C !== null) {
      var T = e.unstable_now();
      O = T;
      var I = !0;
      try {
        I = C(!0, T);
      } finally {
        I ? Pn() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var Pn;
  if (typeof f == "function") Pn = function() {
    f(Nn);
  };
  else if (typeof MessageChannel < "u") {
    var Hu = new MessageChannel(), Jc = Hu.port2;
    Hu.port1.onmessage = Nn, Pn = function() {
      Jc.postMessage(null);
    };
  } else Pn = function() {
    P(Nn, 0);
  };
  function bl(T) {
    C = T, _ || (_ = !0, Pn());
  }
  function ql(T, I) {
    N = P(function() {
      T(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, bl(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = p;
    }
    var L = p;
    p = I;
    try {
      return T();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, I) {
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
    var L = p;
    p = T;
    try {
      return I();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(T, I, L) {
    var Z = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Z + L : Z) : L = Z, T) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = L + q, T = { id: d++, callback: I, priorityLevel: T, startTime: L, expirationTime: q, sortIndex: -1 }, L > Z ? (T.sortIndex = L, t(s, T), n(a) === null && T === n(s) && (y ? (c(N), N = -1) : y = !0, ql(E, L - Z))) : (T.sortIndex = q, t(a, T), g || v || (g = !0, bl(x))), T;
  }, e.unstable_shouldYield = Ue, e.unstable_wrapCallback = function(T) {
    var I = p;
    return function() {
      var L = p;
      p = I;
      try {
        return T.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(gs);
vs.exports = gs;
var Ed = vs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd = le, Ne = Ed;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ys = /* @__PURE__ */ new Set(), Kn = {};
function Xt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) ys.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ri = Object.prototype.hasOwnProperty, xd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Bu = {}, Uu = {};
function wd(e) {
  return Ri.call(Uu, e) ? !0 : Ri.call(Bu, e) ? !1 : xd.test(e) ? Uu[e] = !0 : (Bu[e] = !0, !1);
}
function Td(e, t, n, r) {
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
function _d(e, t, n, r) {
  if (t === null || typeof t > "u" || Td(e, t, n, r)) return !0;
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
function ye(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  oe[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  oe[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  oe[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  oe[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  oe[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  oe[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  oe[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  oe[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  oe[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bo = /[\-:]([a-z])/g;
function Uo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Bo,
    Uo
  );
  oe[t] = new ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Bo, Uo);
  oe[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Bo, Uo);
  oe[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zo(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_d(t, n, l, r) && (n = null), r || l === null ? wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var st = Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Tr = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), jo = Symbol.for("react.strict_mode"), Oi = Symbol.for("react.profiler"), Es = Symbol.for("react.provider"), Ss = Symbol.for("react.context"), Go = Symbol.for("react.forward_ref"), Mi = Symbol.for("react.suspense"), Hi = Symbol.for("react.suspense_list"), $o = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), xs = Symbol.for("react.offscreen"), zu = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object" ? null : (e = zu && e[zu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, ni;
function Fn(e) {
  if (ni === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ni = t && t[1] || "";
  }
  return `
` + ni + e;
}
var ri = !1;
function li(e, t) {
  if (!e || ri) return "";
  ri = !0;
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
      for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    ri = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function kd(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = li(e.type, !1), e;
    case 11:
      return e = li(e.type.render, !1), e;
    case 1:
      return e = li(e.type, !0), e;
    default:
      return "";
  }
}
function Ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Oi:
      return "Profiler";
    case jo:
      return "StrictMode";
    case Mi:
      return "Suspense";
    case Hi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ss:
      return (e.displayName || "Context") + ".Consumer";
    case Es:
      return (e._context.displayName || "Context") + ".Provider";
    case Go:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case $o:
      return t = e.displayName || null, t !== null ? t : Ai(e.type) || "Memo";
    case ct:
      t = e._payload, e = e._init;
      try {
        return Ai(e(t));
      } catch {
      }
  }
  return null;
}
function Cd(e) {
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
      return Ai(t);
    case 8:
      return t === jo ? "StrictMode" : "Mode";
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
function kt(e) {
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
function ws(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Nd(e) {
  var t = ws(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = Nd(e));
}
function Ts(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ws(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function el(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ju(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _s(e, t) {
  t = t.checked, t != null && zo(e, "checked", t, !1);
}
function Fi(e, t) {
  _s(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bi(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Gu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bi(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bn = Array.isArray;
function fn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $u(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Bn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function ks(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kr, Ns = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jn = {
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
}, Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function(e) {
  Pd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e];
  });
});
function Ps(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px";
}
function Is(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ps(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Id = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ji(e, t) {
  if (t) {
    if (Id[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Gi(e, t) {
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
var $i = null;
function Vo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Vi = null, cn = null, dn = null;
function Wu(e) {
  if (e = vr(e)) {
    if (typeof Vi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Il(t), Vi(e.stateNode, e.type, t));
  }
}
function Ls(e) {
  cn ? dn ? dn.push(e) : dn = [e] : cn = e;
}
function Rs() {
  if (cn) {
    var e = cn, t = dn;
    if (dn = cn = null, Wu(e), t) for (e = 0; e < t.length; e++) Wu(t[e]);
  }
}
function Os(e, t) {
  return e(t);
}
function Ms() {
}
var ii = !1;
function Hs(e, t, n) {
  if (ii) return e(t, n);
  ii = !0;
  try {
    return Os(e, t, n);
  } finally {
    ii = !1, (cn !== null || dn !== null) && (Ms(), Rs());
  }
}
function bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Il(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Wi = !1;
if (it) try {
  var Ln = {};
  Object.defineProperty(Ln, "passive", { get: function() {
    Wi = !0;
  } }), window.addEventListener("test", Ln, Ln), window.removeEventListener("test", Ln, Ln);
} catch {
  Wi = !1;
}
function Ld(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Gn = !1, tl = null, nl = !1, Qi = null, Rd = { onError: function(e) {
  Gn = !0, tl = e;
} };
function Od(e, t, n, r, l, i, o, u, a) {
  Gn = !1, tl = null, Ld.apply(Rd, arguments);
}
function Md(e, t, n, r, l, i, o, u, a) {
  if (Od.apply(this, arguments), Gn) {
    if (Gn) {
      var s = tl;
      Gn = !1, tl = null;
    } else throw Error(S(198));
    nl || (nl = !0, Qi = s);
  }
}
function Zt(e) {
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
function As(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Qu(e) {
  if (Zt(e) !== e) throw Error(S(188));
}
function Hd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zt(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Qu(l), e;
        if (i === r) return Qu(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
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
      if (!o) {
        for (u = i.child; u; ) {
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
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ds(e) {
  return e = Hd(e), e !== null ? Fs(e) : null;
}
function Fs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bs = Ne.unstable_scheduleCallback, Xu = Ne.unstable_cancelCallback, Ad = Ne.unstable_shouldYield, Dd = Ne.unstable_requestPaint, Y = Ne.unstable_now, Fd = Ne.unstable_getCurrentPriorityLevel, Wo = Ne.unstable_ImmediatePriority, Us = Ne.unstable_UserBlockingPriority, rl = Ne.unstable_NormalPriority, Bd = Ne.unstable_LowPriority, zs = Ne.unstable_IdlePriority, kl = null, Je = null;
function Ud(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : Gd, zd = Math.log, jd = Math.LN2;
function Gd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zd(e) / jd | 0) | 0;
}
var Cr = 64, Nr = 4194304;
function Un(e) {
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
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Un(u) : (i &= o, i !== 0 && (r = Un(i)));
  } else o = n & ~l, o !== 0 ? r = Un(o) : i !== 0 && (r = Un(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function $d(e, t) {
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
function Vd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - We(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = $d(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Xi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function js() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function Wd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Qo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function Gs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $s, Xo, Vs, Ws, Qs, Zi = !1, Pr = [], gt = null, yt = null, Et = null, qn = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map(), ht = [], Qd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = vr(t), t !== null && Xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Xd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return gt = Rn(gt, e, t, n, r, l), !0;
    case "dragenter":
      return yt = Rn(yt, e, t, n, r, l), !0;
    case "mouseover":
      return Et = Rn(Et, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return qn.set(i, Rn(qn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, er.set(i, Rn(er.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Xs(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = As(n), t !== null) {
          e.blockedOn = t, Qs(e.priority, function() {
            Vs(n);
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
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $i = r, n.target.dispatchEvent(r), $i = null;
    } else return t = vr(n), t !== null && Xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Yu(e, t, n) {
  $r(e) && n.delete(t);
}
function Zd() {
  Zi = !1, gt !== null && $r(gt) && (gt = null), yt !== null && $r(yt) && (yt = null), Et !== null && $r(Et) && (Et = null), qn.forEach(Yu), er.forEach(Yu);
}
function On(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zi || (Zi = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Zd)));
}
function tr(e) {
  function t(l) {
    return On(l, e);
  }
  if (0 < Pr.length) {
    On(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (gt !== null && On(gt, e), yt !== null && On(yt, e), Et !== null && On(Et, e), qn.forEach(t), er.forEach(t), n = 0; n < ht.length; n++) r = ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && (n = ht[0], n.blockedOn === null); ) Xs(n), n.blockedOn === null && ht.shift();
}
var hn = st.ReactCurrentBatchConfig, il = !0;
function Yd(e, t, n, r) {
  var l = D, i = hn.transition;
  hn.transition = null;
  try {
    D = 1, Zo(e, t, n, r);
  } finally {
    D = l, hn.transition = i;
  }
}
function Kd(e, t, n, r) {
  var l = D, i = hn.transition;
  hn.transition = null;
  try {
    D = 4, Zo(e, t, n, r);
  } finally {
    D = l, hn.transition = i;
  }
}
function Zo(e, t, n, r) {
  if (il) {
    var l = Yi(e, t, n, r);
    if (l === null) vi(e, t, r, ol, n), Zu(e, r);
    else if (Xd(l, e, t, n, r)) r.stopPropagation();
    else if (Zu(e, r), t & 4 && -1 < Qd.indexOf(e)) {
      for (; l !== null; ) {
        var i = vr(l);
        if (i !== null && $s(i), i = Yi(e, t, n, r), i === null && vi(e, t, r, ol, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else vi(e, t, r, null, n);
  }
}
var ol = null;
function Yi(e, t, n, r) {
  if (ol = null, e = Vo(r), e = Dt(e), e !== null) if (t = Zt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = As(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ol = e, null;
}
function Zs(e) {
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
      switch (Fd()) {
        case Wo:
          return 1;
        case Us:
          return 4;
        case rl:
        case Bd:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null, Yo = null, Vr = null;
function Ys() {
  if (Vr) return Vr;
  var e, t = Yo, n = t.length, r, l = "value" in mt ? mt.value : mt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Vr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Wr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ir() {
  return !0;
}
function Ku() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ir : Ku, this.isPropagationStopped = Ku, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
  }, persist: function() {
  }, isPersistent: Ir }), t;
}
var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ko = Ie(kn), mr = W({}, kn, { view: 0, detail: 0 }), Jd = Ie(mr), ui, ai, Mn, Cl = W({}, mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Mn && (Mn && e.type === "mousemove" ? (ui = e.screenX - Mn.screenX, ai = e.screenY - Mn.screenY) : ai = ui = 0, Mn = e), ui);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ai;
} }), Ju = Ie(Cl), bd = W({}, Cl, { dataTransfer: 0 }), qd = Ie(bd), eh = W({}, mr, { relatedTarget: 0 }), si = Ie(eh), th = W({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nh = Ie(th), rh = W({}, kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), lh = Ie(rh), ih = W({}, kn, { data: 0 }), bu = Ie(ih), oh = {
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
}, uh = {
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
}, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function sh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ah[e]) ? !!t[e] : !1;
}
function Jo() {
  return sh;
}
var fh = W({}, mr, { key: function(e) {
  if (e.key) {
    var t = oh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Wr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jo, charCode: function(e) {
  return e.type === "keypress" ? Wr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ch = Ie(fh), dh = W({}, Cl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qu = Ie(dh), hh = W({}, mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jo }), ph = Ie(hh), mh = W({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = Ie(mh), gh = W({}, Cl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yh = Ie(gh), Eh = [9, 13, 27, 32], bo = it && "CompositionEvent" in window, $n = null;
it && "documentMode" in document && ($n = document.documentMode);
var Sh = it && "TextEvent" in window && !$n, Ks = it && (!bo || $n && 8 < $n && 11 >= $n), ea = " ", ta = !1;
function Js(e, t) {
  switch (e) {
    case "keyup":
      return Eh.indexOf(t.keyCode) !== -1;
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
function bs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var qt = !1;
function xh(e, t) {
  switch (e) {
    case "compositionend":
      return bs(t);
    case "keypress":
      return t.which !== 32 ? null : (ta = !0, ea);
    case "textInput":
      return e = t.data, e === ea && ta ? null : e;
    default:
      return null;
  }
}
function wh(e, t) {
  if (qt) return e === "compositionend" || !bo && Js(e, t) ? (e = Ys(), Vr = Yo = mt = null, qt = !1, e) : null;
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
      return Ks && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Th = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Th[e.type] : t === "textarea";
}
function qs(e, t, n, r) {
  Ls(r), t = ul(t, "onChange"), 0 < t.length && (n = new Ko("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vn = null, nr = null;
function _h(e) {
  cf(e, 0);
}
function Nl(e) {
  var t = nn(e);
  if (Ts(t)) return e;
}
function kh(e, t) {
  if (e === "change") return t;
}
var ef = !1;
if (it) {
  var fi;
  if (it) {
    var ci = "oninput" in document;
    if (!ci) {
      var ra = document.createElement("div");
      ra.setAttribute("oninput", "return;"), ci = typeof ra.oninput == "function";
    }
    fi = ci;
  } else fi = !1;
  ef = fi && (!document.documentMode || 9 < document.documentMode);
}
function la() {
  Vn && (Vn.detachEvent("onpropertychange", tf), nr = Vn = null);
}
function tf(e) {
  if (e.propertyName === "value" && Nl(nr)) {
    var t = [];
    qs(t, nr, e, Vo(e)), Hs(_h, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (la(), Vn = t, nr = n, Vn.attachEvent("onpropertychange", tf)) : e === "focusout" && la();
}
function Nh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Nl(nr);
}
function Ph(e, t) {
  if (e === "click") return Nl(t);
}
function Ih(e, t) {
  if (e === "input" || e === "change") return Nl(t);
}
function Lh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xe = typeof Object.is == "function" ? Object.is : Lh;
function rr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ri.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function ia(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function oa(e, t) {
  var n = ia(e);
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
    n = ia(n);
  }
}
function nf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rf() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function qo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Rh(e) {
  var t = rf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nf(n.ownerDocument.documentElement, n)) {
    if (r !== null && qo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = oa(n, i);
        var o = oa(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Oh = it && "documentMode" in document && 11 >= document.documentMode, en = null, Ki = null, Wn = null, Ji = !1;
function ua(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ji || en == null || en !== el(r) || (r = en, "selectionStart" in r && qo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && rr(Wn, r) || (Wn = r, r = ul(Ki, "onSelect"), 0 < r.length && (t = new Ko("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = en)));
}
function Lr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var tn = { animationend: Lr("Animation", "AnimationEnd"), animationiteration: Lr("Animation", "AnimationIteration"), animationstart: Lr("Animation", "AnimationStart"), transitionend: Lr("Transition", "TransitionEnd") }, di = {}, lf = {};
it && (lf = document.createElement("div").style, "AnimationEvent" in window || (delete tn.animationend.animation, delete tn.animationiteration.animation, delete tn.animationstart.animation), "TransitionEvent" in window || delete tn.transitionend.transition);
function Pl(e) {
  if (di[e]) return di[e];
  if (!tn[e]) return e;
  var t = tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in lf) return di[e] = t[n];
  return e;
}
var of = Pl("animationend"), uf = Pl("animationiteration"), af = Pl("animationstart"), sf = Pl("transitionend"), ff = /* @__PURE__ */ new Map(), aa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nt(e, t) {
  ff.set(e, t), Xt(t, [e]);
}
for (var hi = 0; hi < aa.length; hi++) {
  var pi = aa[hi], Mh = pi.toLowerCase(), Hh = pi[0].toUpperCase() + pi.slice(1);
  Nt(Mh, "on" + Hh);
}
Nt(of, "onAnimationEnd");
Nt(uf, "onAnimationIteration");
Nt(af, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(sf, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ah = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function sa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Md(r, t, void 0, e), e.currentTarget = null;
}
function cf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        sa(l, u, s), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        sa(l, u, s), i = a;
      }
    }
  }
  if (nl) throw e = Qi, nl = !1, Qi = null, e;
}
function U(e, t) {
  var n = t[no];
  n === void 0 && (n = t[no] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function mi(e, t, n) {
  var r = 0;
  t && (r |= 4), df(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Rr]) {
    e[Rr] = !0, ys.forEach(function(n) {
      n !== "selectionchange" && (Ah.has(n) || mi(n, !1, e), mi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || (t[Rr] = !0, mi("selectionchange", !1, t));
  }
}
function df(e, t, n, r) {
  switch (Zs(t)) {
    case 1:
      var l = Yd;
      break;
    case 4:
      l = Kd;
      break;
    default:
      l = Zo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function vi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = Dt(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Hs(function() {
    var s = i, d = Vo(n), m = [];
    e: {
      var p = ff.get(e);
      if (p !== void 0) {
        var v = Ko, g = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = ch;
            break;
          case "focusin":
            g = "focus", v = si;
            break;
          case "focusout":
            g = "blur", v = si;
            break;
          case "beforeblur":
          case "afterblur":
            v = si;
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
            v = Ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ph;
            break;
          case of:
          case uf:
          case af:
            v = nh;
            break;
          case sf:
            v = vh;
            break;
          case "scroll":
            v = Jd;
            break;
          case "wheel":
            v = yh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = lh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = qu;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", c = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (h.tag === 5 && E !== null && (h = E, c !== null && (E = bn(f, c), E != null && y.push(ir(f, E, h)))), P) break;
          f = f.return;
        }
        0 < y.length && (p = new v(p, g, null, n, d), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== $i && (g = n.relatedTarget || n.fromElement) && (Dt(g) || g[ot])) break e;
        if ((v || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = s, g = g ? Dt(g) : null, g !== null && (P = Zt(g), g !== P || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = s), v !== g)) {
          if (y = Ju, E = "onMouseLeave", c = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (y = qu, E = "onPointerLeave", c = "onPointerEnter", f = "pointer"), P = v == null ? p : nn(v), h = g == null ? p : nn(g), p = new y(E, f + "leave", v, n, d), p.target = P, p.relatedTarget = h, E = null, Dt(d) === s && (y = new y(c, f + "enter", g, n, d), y.target = h, y.relatedTarget = P, E = y), P = E, v && g) t: {
            for (y = v, c = g, f = 0, h = y; h; h = Kt(h)) f++;
            for (h = 0, E = c; E; E = Kt(E)) h++;
            for (; 0 < f - h; ) y = Kt(y), f--;
            for (; 0 < h - f; ) c = Kt(c), h--;
            for (; f--; ) {
              if (y === c || c !== null && y === c.alternate) break t;
              y = Kt(y), c = Kt(c);
            }
            y = null;
          }
          else y = null;
          v !== null && fa(m, p, v, y, !1), g !== null && P !== null && fa(m, P, g, y, !0);
        }
      }
      e: {
        if (p = s ? nn(s) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var x = kh;
        else if (na(p)) if (ef) x = Ih;
        else {
          x = Nh;
          var _ = Ch;
        }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = Ph);
        if (x && (x = x(e, s))) {
          qs(m, x, n, d);
          break e;
        }
        _ && _(e, p, s), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && Bi(p, "number", p.value);
      }
      switch (_ = s ? nn(s) : window, e) {
        case "focusin":
          (na(_) || _.contentEditable === "true") && (en = _, Ki = s, Wn = null);
          break;
        case "focusout":
          Wn = Ki = en = null;
          break;
        case "mousedown":
          Ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ji = !1, ua(m, n, d);
          break;
        case "selectionchange":
          if (Oh) break;
        case "keydown":
        case "keyup":
          ua(m, n, d);
      }
      var C;
      if (bo) e: {
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
      else qt ? Js(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Ks && n.locale !== "ko" && (qt || N !== "onCompositionStart" ? N === "onCompositionEnd" && qt && (C = Ys()) : (mt = d, Yo = "value" in mt ? mt.value : mt.textContent, qt = !0)), _ = ul(s, N), 0 < _.length && (N = new bu(N, e, null, n, d), m.push({ event: N, listeners: _ }), C ? N.data = C : (C = bs(n), C !== null && (N.data = C)))), (C = Sh ? xh(e, n) : wh(e, n)) && (s = ul(s, "onBeforeInput"), 0 < s.length && (d = new bu("onBeforeInput", "beforeinput", null, n, d), m.push({ event: d, listeners: s }), d.data = C));
    }
    cf(m, t);
  });
}
function ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = bn(e, n), i != null && r.unshift(ir(e, i, l)), i = bn(e, t), i != null && r.push(ir(e, i, l))), e = e.return;
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, l ? (a = bn(n, i), a != null && o.unshift(ir(n, a, u))) : l || (a = bn(n, i), a != null && o.push(ir(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dh = /\r\n?/g, Fh = /\u0000|\uFFFD/g;
function ca(e) {
  return (typeof e == "string" ? e : "" + e).replace(Dh, `
`).replace(Fh, "");
}
function Or(e, t, n) {
  if (t = ca(t), ca(e) !== t && n) throw Error(S(425));
}
function al() {
}
var bi = null, qi = null;
function eo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var to = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, da = typeof Promise == "function" ? Promise : void 0, Uh = typeof queueMicrotask == "function" ? queueMicrotask : typeof da < "u" ? function(e) {
  return da.resolve(null).then(e).catch(zh);
} : to;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function gi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), tr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  tr(t);
}
function St(e) {
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
function ha(e) {
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
var Cn = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + Cn, or = "__reactProps$" + Cn, ot = "__reactContainer$" + Cn, no = "__reactEvents$" + Cn, jh = "__reactListeners$" + Cn, Gh = "__reactHandles$" + Cn;
function Dt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ot] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ha(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = ha(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function vr(e) {
  return e = e[Ke] || e[ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Il(e) {
  return e[or] || null;
}
var ro = [], rn = -1;
function Pt(e) {
  return { current: e };
}
function j(e) {
  0 > rn || (e.current = ro[rn], ro[rn] = null, rn--);
}
function B(e, t) {
  rn++, ro[rn] = e.current, e.current = t;
}
var Ct = {}, fe = Pt(Ct), xe = Pt(!1), jt = Ct;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function sl() {
  j(xe), j(fe);
}
function pa(e, t, n) {
  if (fe.current !== Ct) throw Error(S(168));
  B(fe, t), B(xe, n);
}
function hf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Cd(e) || "Unknown", l));
  return W({}, n, r);
}
function fl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ct, jt = fe.current, B(fe, e), B(xe, xe.current), !0;
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = hf(e, t, jt), r.__reactInternalMemoizedMergedChildContext = e, j(xe), j(fe), B(fe, e)) : j(xe), B(xe, n);
}
var tt = null, Ll = !1, yi = !1;
function pf(e) {
  tt === null ? tt = [e] : tt.push(e);
}
function $h(e) {
  Ll = !0, pf(e);
}
function It() {
  if (!yi && tt !== null) {
    yi = !0;
    var e = 0, t = D;
    try {
      var n = tt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      tt = null, Ll = !1;
    } catch (l) {
      throw tt !== null && (tt = tt.slice(e + 1)), Bs(Wo, It), l;
    } finally {
      D = t, yi = !1;
    }
  }
  return null;
}
var ln = [], on = 0, cl = null, dl = 0, Re = [], Oe = 0, Gt = null, nt = 1, rt = "";
function Ht(e, t) {
  ln[on++] = dl, ln[on++] = cl, cl = e, dl = t;
}
function mf(e, t, n) {
  Re[Oe++] = nt, Re[Oe++] = rt, Re[Oe++] = Gt, Gt = e;
  var r = nt;
  e = rt;
  var l = 32 - We(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - We(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, nt = 1 << 32 - We(t) + l | n << l | r, rt = i + e;
  } else nt = 1 << i | n << l | r, rt = e;
}
function eu(e) {
  e.return !== null && (Ht(e, 1), mf(e, 1, 0));
}
function tu(e) {
  for (; e === cl; ) cl = ln[--on], ln[on] = null, dl = ln[--on], ln[on] = null;
  for (; e === Gt; ) Gt = Re[--Oe], Re[Oe] = null, rt = Re[--Oe], Re[Oe] = null, nt = Re[--Oe], Re[Oe] = null;
}
var Ce = null, ke = null, G = !1, Ve = null;
function vf(e, t) {
  var n = Me(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, ke = St(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Gt !== null ? { id: nt, overflow: rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Me(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, ke = null, !0) : !1;
    default:
      return !1;
  }
}
function lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function io(e) {
  if (G) {
    var t = ke;
    if (t) {
      var n = t;
      if (!va(e, t)) {
        if (lo(e)) throw Error(S(418));
        t = St(n.nextSibling);
        var r = Ce;
        t && va(e, t) ? vf(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ce = e);
      }
    } else {
      if (lo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ce = e;
    }
  }
}
function ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function Mr(e) {
  if (e !== Ce) return !1;
  if (!G) return ga(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !eo(e.type, e.memoizedProps)), t && (t = ke)) {
    if (lo(e)) throw gf(), Error(S(418));
    for (; t; ) vf(e, t), t = St(t.nextSibling);
  }
  if (ga(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = St(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ce ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function gf() {
  for (var e = ke; e; ) e = St(e.nextSibling);
}
function yn() {
  ke = Ce = null, G = !1;
}
function nu(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var Vh = st.ReactCurrentBatchConfig;
function Hn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Hr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ya(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
  function t(c, f) {
    if (e) {
      var h = c.deletions;
      h === null ? (c.deletions = [f], c.flags |= 16) : h.push(f);
    }
  }
  function n(c, f) {
    if (!e) return null;
    for (; f !== null; ) t(c, f), f = f.sibling;
    return null;
  }
  function r(c, f) {
    for (c = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
    return c;
  }
  function l(c, f) {
    return c = _t(c, f), c.index = 0, c.sibling = null, c;
  }
  function i(c, f, h) {
    return c.index = h, e ? (h = c.alternate, h !== null ? (h = h.index, h < f ? (c.flags |= 2, f) : h) : (c.flags |= 2, f)) : (c.flags |= 1048576, f);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, f, h, E) {
    return f === null || f.tag !== 6 ? (f = ki(h, c.mode, E), f.return = c, f) : (f = l(f, h), f.return = c, f);
  }
  function a(c, f, h, E) {
    var x = h.type;
    return x === bt ? d(c, f, h.props.children, E, h.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ct && ya(x) === f.type) ? (E = l(f, h.props), E.ref = Hn(c, f, h), E.return = c, E) : (E = br(h.type, h.key, h.props, null, c.mode, E), E.ref = Hn(c, f, h), E.return = c, E);
  }
  function s(c, f, h, E) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Ci(h, c.mode, E), f.return = c, f) : (f = l(f, h.children || []), f.return = c, f);
  }
  function d(c, f, h, E, x) {
    return f === null || f.tag !== 7 ? (f = zt(h, c.mode, E, x), f.return = c, f) : (f = l(f, h), f.return = c, f);
  }
  function m(c, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ki("" + f, c.mode, h), f.return = c, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Tr:
          return h = br(f.type, f.key, f.props, null, c.mode, h), h.ref = Hn(c, null, f), h.return = c, h;
        case Jt:
          return f = Ci(f, c.mode, h), f.return = c, f;
        case ct:
          var E = f._init;
          return m(c, E(f._payload), h);
      }
      if (Bn(f) || In(f)) return f = zt(f, c.mode, h, null), f.return = c, f;
      Hr(c, f);
    }
    return null;
  }
  function p(c, f, h, E) {
    var x = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : u(c, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Tr:
          return h.key === x ? a(c, f, h, E) : null;
        case Jt:
          return h.key === x ? s(c, f, h, E) : null;
        case ct:
          return x = h._init, p(
            c,
            f,
            x(h._payload),
            E
          );
      }
      if (Bn(h) || In(h)) return x !== null ? null : d(c, f, h, E, null);
      Hr(c, h);
    }
    return null;
  }
  function v(c, f, h, E, x) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(h) || null, u(f, c, "" + E, x);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Tr:
          return c = c.get(E.key === null ? h : E.key) || null, a(f, c, E, x);
        case Jt:
          return c = c.get(E.key === null ? h : E.key) || null, s(f, c, E, x);
        case ct:
          var _ = E._init;
          return v(c, f, h, _(E._payload), x);
      }
      if (Bn(E) || In(E)) return c = c.get(h) || null, d(f, c, E, x, null);
      Hr(f, E);
    }
    return null;
  }
  function g(c, f, h, E) {
    for (var x = null, _ = null, C = f, N = f = 0, X = null; C !== null && N < h.length; N++) {
      C.index > N ? (X = C, C = null) : X = C.sibling;
      var O = p(c, C, h[N], E);
      if (O === null) {
        C === null && (C = X);
        break;
      }
      e && C && O.alternate === null && t(c, C), f = i(O, f, N), _ === null ? x = O : _.sibling = O, _ = O, C = X;
    }
    if (N === h.length) return n(c, C), G && Ht(c, N), x;
    if (C === null) {
      for (; N < h.length; N++) C = m(c, h[N], E), C !== null && (f = i(C, f, N), _ === null ? x = C : _.sibling = C, _ = C);
      return G && Ht(c, N), x;
    }
    for (C = r(c, C); N < h.length; N++) X = v(C, c, N, h[N], E), X !== null && (e && X.alternate !== null && C.delete(X.key === null ? N : X.key), f = i(X, f, N), _ === null ? x = X : _.sibling = X, _ = X);
    return e && C.forEach(function(Ue) {
      return t(c, Ue);
    }), G && Ht(c, N), x;
  }
  function y(c, f, h, E) {
    var x = In(h);
    if (typeof x != "function") throw Error(S(150));
    if (h = x.call(h), h == null) throw Error(S(151));
    for (var _ = x = null, C = f, N = f = 0, X = null, O = h.next(); C !== null && !O.done; N++, O = h.next()) {
      C.index > N ? (X = C, C = null) : X = C.sibling;
      var Ue = p(c, C, O.value, E);
      if (Ue === null) {
        C === null && (C = X);
        break;
      }
      e && C && Ue.alternate === null && t(c, C), f = i(Ue, f, N), _ === null ? x = Ue : _.sibling = Ue, _ = Ue, C = X;
    }
    if (O.done) return n(
      c,
      C
    ), G && Ht(c, N), x;
    if (C === null) {
      for (; !O.done; N++, O = h.next()) O = m(c, O.value, E), O !== null && (f = i(O, f, N), _ === null ? x = O : _.sibling = O, _ = O);
      return G && Ht(c, N), x;
    }
    for (C = r(c, C); !O.done; N++, O = h.next()) O = v(C, c, N, O.value, E), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? N : O.key), f = i(O, f, N), _ === null ? x = O : _.sibling = O, _ = O);
    return e && C.forEach(function(Nn) {
      return t(c, Nn);
    }), G && Ht(c, N), x;
  }
  function P(c, f, h, E) {
    if (typeof h == "object" && h !== null && h.type === bt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Tr:
          e: {
            for (var x = h.key, _ = f; _ !== null; ) {
              if (_.key === x) {
                if (x = h.type, x === bt) {
                  if (_.tag === 7) {
                    n(c, _.sibling), f = l(_, h.props.children), f.return = c, c = f;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ct && ya(x) === _.type) {
                  n(c, _.sibling), f = l(_, h.props), f.ref = Hn(c, _, h), f.return = c, c = f;
                  break e;
                }
                n(c, _);
                break;
              } else t(c, _);
              _ = _.sibling;
            }
            h.type === bt ? (f = zt(h.props.children, c.mode, E, h.key), f.return = c, c = f) : (E = br(h.type, h.key, h.props, null, c.mode, E), E.ref = Hn(c, f, h), E.return = c, c = E);
          }
          return o(c);
        case Jt:
          e: {
            for (_ = h.key; f !== null; ) {
              if (f.key === _) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(c, f.sibling), f = l(f, h.children || []), f.return = c, c = f;
                break e;
              } else {
                n(c, f);
                break;
              }
              else t(c, f);
              f = f.sibling;
            }
            f = Ci(h, c.mode, E), f.return = c, c = f;
          }
          return o(c);
        case ct:
          return _ = h._init, P(c, f, _(h._payload), E);
      }
      if (Bn(h)) return g(c, f, h, E);
      if (In(h)) return y(c, f, h, E);
      Hr(c, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(c, f.sibling), f = l(f, h), f.return = c, c = f) : (n(c, f), f = ki(h, c.mode, E), f.return = c, c = f), o(c)) : n(c, f);
  }
  return P;
}
var En = yf(!0), Ef = yf(!1), hl = Pt(null), pl = null, un = null, ru = null;
function lu() {
  ru = un = pl = null;
}
function iu(e) {
  var t = hl.current;
  j(hl), e._currentValue = t;
}
function oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function pn(e, t) {
  pl = e, ru = un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Ae(e) {
  var t = e._currentValue;
  if (ru !== e) if (e = { context: e, memoizedValue: t, next: null }, un === null) {
    if (pl === null) throw Error(S(308));
    un = e, pl.dependencies = { lanes: 0, firstContext: e };
  } else un = un.next = e;
  return t;
}
var Ft = null;
function ou(e) {
  Ft === null ? Ft = [e] : Ft.push(e);
}
function Sf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ou(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ut(e, r);
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function uu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function xf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ut(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ou(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ut(e, n);
}
function Qr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qo(e, n);
  }
}
function Ea(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ml(e, t, n, r) {
  var l = e.updateQueue;
  dt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, o === null ? i = s : o.next = s, o = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== o && (u === null ? d.firstBaseUpdate = s : u.next = s, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, d = s = a = null, u = i;
    do {
      var p = u.lane, v = u.eventTime;
      if ((r & p) === p) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, y = u;
          switch (p = t, v = n, y.tag) {
            case 1:
              if (g = y.payload, typeof g == "function") {
                m = g.call(v, m, p);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, p = typeof g == "function" ? g.call(v, m, p) : g, p == null) break e;
              m = W({}, m, p);
              break e;
            case 2:
              dt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, d === null ? (s = d = v, a = m) : d = d.next = v, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = m), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Vt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Sa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var gr = {}, be = Pt(gr), ur = Pt(gr), ar = Pt(gr);
function Bt(e) {
  if (e === gr) throw Error(S(174));
  return e;
}
function au(e, t) {
  switch (B(ar, t), B(ur, e), B(be, gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zi(t, e);
  }
  j(be), B(be, t);
}
function Sn() {
  j(be), j(ur), j(ar);
}
function wf(e) {
  Bt(ar.current);
  var t = Bt(be.current), n = zi(t, e.type);
  t !== n && (B(ur, e), B(be, n));
}
function su(e) {
  ur.current === e && (j(be), j(ur));
}
var $ = Pt(0);
function vl(e) {
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
var Ei = [];
function fu() {
  for (var e = 0; e < Ei.length; e++) Ei[e]._workInProgressVersionPrimary = null;
  Ei.length = 0;
}
var Xr = st.ReactCurrentDispatcher, Si = st.ReactCurrentBatchConfig, $t = 0, V = null, J = null, ee = null, gl = !1, Qn = !1, sr = 0, Wh = 0;
function ue() {
  throw Error(S(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function du(e, t, n, r, l, i) {
  if ($t = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xr.current = e === null || e.memoizedState === null ? Yh : Kh, e = n(r, l), Qn) {
    i = 0;
    do {
      if (Qn = !1, sr = 0, 25 <= i) throw Error(S(301));
      i += 1, ee = J = null, t.updateQueue = null, Xr.current = Jh, e = n(r, l);
    } while (Qn);
  }
  if (Xr.current = yl, t = J !== null && J.next !== null, $t = 0, ee = J = V = null, gl = !1, t) throw Error(S(300));
  return e;
}
function hu() {
  var e = sr !== 0;
  return sr = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ee === null ? V.memoizedState = ee = e : ee = ee.next = e, ee;
}
function De() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) ee = t, J = e;
  else {
    if (e === null) throw Error(S(310));
    J = e, e = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, ee === null ? V.memoizedState = ee = e : ee = ee.next = e;
  }
  return ee;
}
function fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xi(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = J, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, a = null, s = i;
    do {
      var d = s.lane;
      if (($t & d) === d) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = m, o = r) : a = a.next = m, V.lanes |= d, Vt |= d;
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? o = r : a.next = u, Xe(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Vt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wi(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Xe(i, t.memoizedState) || (Se = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Tf() {
}
function _f(e, t) {
  var n = V, r = De(), l = t(), i = !Xe(r.memoizedState, l);
  if (i && (r.memoizedState = l, Se = !0), r = r.queue, pu(Nf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ee !== null && ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, Cf.bind(null, n, r, l, t), void 0, null), te === null) throw Error(S(349));
    $t & 30 || kf(n, t, l);
  }
  return l;
}
function kf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pf(t) && If(e);
}
function Nf(e, t, n) {
  return n(function() {
    Pf(t) && If(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function If(e) {
  var t = ut(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function xa(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Zh.bind(null, V, e), [t.memoizedState, e];
}
function cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Lf() {
  return De().memoizedState;
}
function Zr(e, t, n, r) {
  var l = Ye();
  V.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Rl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (i = o.destroy, r !== null && cu(r, o.deps)) {
      l.memoizedState = cr(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = cr(1 | t, n, i, r);
}
function wa(e, t) {
  return Zr(8390656, 8, e, t);
}
function pu(e, t) {
  return Rl(2048, 8, e, t);
}
function Rf(e, t) {
  return Rl(4, 2, e, t);
}
function Of(e, t) {
  return Rl(4, 4, e, t);
}
function Mf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Hf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rl(4, 4, Mf.bind(null, t, e), n);
}
function mu() {
}
function Af(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Df(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ff(e, t, n) {
  return $t & 21 ? (Xe(n, t) || (n = js(), V.lanes |= n, Vt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Qh(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Si.transition;
  Si.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, Si.transition = r;
  }
}
function Bf() {
  return De().memoizedState;
}
function Xh(e, t, n) {
  var r = Tt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Uf(e)) zf(t, n);
  else if (n = Sf(e, t, n, r), n !== null) {
    var l = ve();
    Qe(n, e, r, l), jf(n, t, r);
  }
}
function Zh(e, t, n) {
  var r = Tt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uf(e)) zf(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Xe(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, ou(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Sf(e, t, l, r), n !== null && (l = ve(), Qe(n, e, r, l), jf(n, t, r));
  }
}
function Uf(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function zf(e, t) {
  Qn = gl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function jf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Qo(e, n);
  }
}
var yl = { readContext: Ae, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, Yh = { readContext: Ae, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ae, useEffect: wa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zr(
    4194308,
    4,
    Mf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Zr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Zr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Xh.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: xa, useDebugValue: mu, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = xa(!1), t = e[0];
  return e = Qh.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Ye();
  if (G) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), te === null) throw Error(S(349));
    $t & 30 || kf(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, wa(Nf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, cr(9, Cf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = te.identifierPrefix;
  if (G) {
    var n = rt, r = nt;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Wh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Kh = {
  readContext: Ae,
  useCallback: Af,
  useContext: Ae,
  useEffect: pu,
  useImperativeHandle: Hf,
  useInsertionEffect: Rf,
  useLayoutEffect: Of,
  useMemo: Df,
  useReducer: xi,
  useRef: Lf,
  useState: function() {
    return xi(fr);
  },
  useDebugValue: mu,
  useDeferredValue: function(e) {
    var t = De();
    return Ff(t, J.memoizedState, e);
  },
  useTransition: function() {
    var e = xi(fr)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: Tf,
  useSyncExternalStore: _f,
  useId: Bf,
  unstable_isNewReconciler: !1
}, Jh = { readContext: Ae, useCallback: Af, useContext: Ae, useEffect: pu, useImperativeHandle: Hf, useInsertionEffect: Rf, useLayoutEffect: Of, useMemo: Df, useReducer: wi, useRef: Lf, useState: function() {
  return wi(fr);
}, useDebugValue: mu, useDeferredValue: function(e) {
  var t = De();
  return J === null ? t.memoizedState = e : Ff(t, J.memoizedState, e);
}, useTransition: function() {
  var e = wi(fr)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: Tf, useSyncExternalStore: _f, useId: Bf, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function uo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = Tt(e), i = lt(r, l);
  i.payload = t, n != null && (i.callback = n), t = xt(e, i, l), t !== null && (Qe(t, e, l, r), Qr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = Tt(e), i = lt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = xt(e, i, l), t !== null && (Qe(t, e, l, r), Qr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Tt(e), l = lt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = xt(e, l, r), t !== null && (Qe(t, e, r, n), Qr(t, e, r));
} };
function Ta(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !rr(n, r) || !rr(l, i) : !0;
}
function Gf(e, t, n) {
  var r = !1, l = Ct, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ae(i) : (l = we(t) ? jt : fe.current, r = t.contextTypes, i = (r = r != null) ? gn(e, l) : Ct), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ol, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function _a(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function ao(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, uu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ae(i) : (i = we(t) ? jt : fe.current, l.context = gn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (uo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ol.enqueueReplaceState(l, l.state, null), ml(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t) {
  try {
    var n = "", r = t;
    do
      n += kd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function so(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var bh = typeof WeakMap == "function" ? WeakMap : Map;
function $f(e, t, n) {
  n = lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Sl || (Sl = !0, So = r), so(e, t);
  }, n;
}
function Vf(e, t, n) {
  n = lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      so(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    so(e, t), typeof r != "function" && (wt === null ? wt = /* @__PURE__ */ new Set([this]) : wt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ka(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = dp.bind(null, e, t, n), t.then(e, e));
}
function Ca(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Na(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, xt(n, t, 1))), n.lanes |= 1), e);
}
var qh = st.ReactCurrentOwner, Se = !1;
function de(e, t, n, r) {
  t.child = e === null ? Ef(t, null, n, r) : En(t, e.child, n, r);
}
function Pa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return pn(t, l), r = du(e, t, n, r, i, l), n = hu(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, at(e, t, l)) : (G && n && eu(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function Ia(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Tu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wf(e, t, i, r, l)) : (e = br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : rr, n(o, r) && e.ref === t.ref) return at(e, t, l);
  }
  return t.flags |= 1, e = _t(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rr(i, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, at(e, t, l);
  }
  return fo(e, t, n, r, l);
}
function Qf(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(sn, _e), _e |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, B(sn, _e), _e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, B(sn, _e), _e |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, B(sn, _e), _e |= r;
  return de(e, t, l, n), t.child;
}
function Xf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function fo(e, t, n, r, l) {
  var i = we(n) ? jt : fe.current;
  return i = gn(t, i), pn(t, l), n = du(e, t, n, r, i, l), r = hu(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, at(e, t, l)) : (G && r && eu(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function La(e, t, n, r, l) {
  if (we(n)) {
    var i = !0;
    fl(t);
  } else i = !1;
  if (pn(t, l), t.stateNode === null) Yr(e, t), Gf(t, n, r), ao(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Ae(s) : (s = we(n) ? jt : fe.current, s = gn(t, s));
    var d = n.getDerivedStateFromProps, m = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && _a(t, o, r, s), dt = !1;
    var p = t.memoizedState;
    o.state = p, ml(t, r, o, l), a = t.memoizedState, u !== r || p !== a || xe.current || dt ? (typeof d == "function" && (uo(t, n, d, r), a = t.memoizedState), (u = dt || Ta(t, n, u, r, p, a, s)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, xf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Ge(t.type, u), o.props = s, m = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ae(a) : (a = we(n) ? jt : fe.current, a = gn(t, a));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== a) && _a(t, o, r, a), dt = !1, p = t.memoizedState, o.state = p, ml(t, r, o, l);
    var g = t.memoizedState;
    u !== m || p !== g || xe.current || dt ? (typeof v == "function" && (uo(t, n, v, r), g = t.memoizedState), (s = dt || Ta(t, n, s, r, p, g, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = a, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return co(e, t, n, r, i, l);
}
function co(e, t, n, r, l, i) {
  Xf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ma(t, n, !1), at(e, t, i);
  r = t.stateNode, qh.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = En(t, e.child, null, i), t.child = En(t, null, u, i)) : de(e, t, u, i), t.memoizedState = r.state, l && ma(t, n, !0), t.child;
}
function Zf(e) {
  var t = e.stateNode;
  t.pendingContext ? pa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pa(e, t.context, !1), au(e, t.containerInfo);
}
function Ra(e, t, n, r, l) {
  return yn(), nu(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function po(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yf(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B($, l & 1), e === null)
    return io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Al(o, r, 0, null), e = zt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = po(n), t.memoizedState = ho, e) : vu(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return ep(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = _t(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = _t(u, i) : (i = zt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? po(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ho, r;
  }
  return i = e.child, e = i.sibling, r = _t(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function vu(e, t) {
  return t = Al({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ar(e, t, n, r) {
  return r !== null && nu(r), En(t, e.child, null, n), e = vu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ep(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ti(Error(S(422))), Ar(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Al({ mode: "visible", children: r.children }, l, 0, null), i = zt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && En(t, e.child, null, o), t.child.memoizedState = po(o), t.memoizedState = ho, i);
  if (!(t.mode & 1)) return Ar(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(S(419)), r = Ti(i, r, void 0), Ar(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Se || u) {
    if (r = te, r !== null) {
      switch (o & -o) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ut(e, l), Qe(r, e, l, -1));
    }
    return wu(), r = Ti(Error(S(421))), Ar(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ke = St(l.nextSibling), Ce = t, G = !0, Ve = null, e !== null && (Re[Oe++] = nt, Re[Oe++] = rt, Re[Oe++] = Gt, nt = e.id, rt = e.overflow, Gt = t), t = vu(t, r.children), t.flags |= 4096, t);
}
function Oa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), oo(e.return, t, n);
}
function _i(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Kf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (de(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Oa(e, n, t);
      else if (e.tag === 19) Oa(e, n, t);
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
  if (B($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && vl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _i(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && vl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      _i(t, !0, n, null, i);
      break;
    case "together":
      _i(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function at(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Vt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      Zf(t), yn();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      we(t.type) && fl(t);
      break;
    case 4:
      au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      B(hl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (B($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yf(e, t, n) : (B($, $.current & 1), e = at(e, t, n), e !== null ? e.sibling : null);
      B($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Kf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qf(e, t, n);
  }
  return at(e, t, n);
}
var Jf, mo, bf, qf;
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
mo = function() {
};
bf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Bt(be.current);
    var i = null;
    switch (n) {
      case "input":
        l = Di(e, l), r = Di(e, r), i = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Ui(e, l), r = Ui(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = al);
    }
    ji(n, r);
    var o;
    n = null;
    for (s in l) if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null) if (s === "style") {
      var u = l[s];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Kn.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = l != null ? l[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Kn.hasOwnProperty(s) ? (a != null && s === "onScroll" && U("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
qf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!G) switch (e.tailMode) {
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
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function np(e, t, n) {
  var r = t.pendingProps;
  switch (tu(t), t.tag) {
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
      return ae(t), null;
    case 1:
      return we(t.type) && sl(), ae(t), null;
    case 3:
      return r = t.stateNode, Sn(), j(xe), j(fe), fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (To(Ve), Ve = null))), mo(e, t), ae(t), null;
    case 5:
      su(t);
      var l = Bt(ar.current);
      if (n = t.type, e !== null && t.stateNode != null) bf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ae(t), null;
        }
        if (e = Bt(be.current), Mr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ke] = t, r[or] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zn.length; l++) U(zn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              ju(r, i), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, U("invalid", r);
              break;
            case "textarea":
              $u(r, i), U("invalid", r);
          }
          ji(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Or(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Or(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Kn.hasOwnProperty(o) && u != null && o === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), Gu(r, i, !0);
              break;
            case "textarea":
              _r(r), Vu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = al);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ke] = t, e[or] = r, Jf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Gi(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++) U(zn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                ju(e, r), l = Di(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                $u(e, r), l = Ui(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            ji(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? Is(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ns(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Jn(e, a) : typeof a == "number" && Jn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? a != null && i === "onScroll" && U("scroll", e) : a != null && zo(e, i, a, o));
            }
            switch (n) {
              case "input":
                _r(e), Gu(e, r, !1);
                break;
              case "textarea":
                _r(e), Vu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? fn(e, !!r.multiple, i, !1) : r.defaultValue != null && fn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = al);
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
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) qf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Bt(ar.current), Bt(be.current), Mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (i = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
            case 3:
              Or(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Or(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return ae(t), null;
    case 13:
      if (j($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && ke !== null && t.mode & 1 && !(t.flags & 128)) gf(), yn(), t.flags |= 98560, i = !1;
        else if (i = Mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(S(317));
            i[Ke] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ae(t), i = !1;
        } else Ve !== null && (To(Ve), Ve = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? b === 0 && (b = 3) : wu())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
    case 4:
      return Sn(), mo(e, t), e === null && lr(t.stateNode.containerInfo), ae(t), null;
    case 10:
      return iu(t.type._context), ae(t), null;
    case 17:
      return we(t.type) && sl(), ae(t), null;
    case 19:
      if (j($), i = t.memoizedState, i === null) return ae(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) An(i, !1);
      else {
        if (b !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = vl(e), o !== null) {
            for (t.flags |= 128, An(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return B($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Y() > wn && (t.flags |= 128, r = !0, An(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = vl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), An(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !G) return ae(t), null;
        } else 2 * Y() - i.renderingStartTime > wn && n !== 1073741824 && (t.flags |= 128, r = !0, An(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Y(), t.sibling = null, n = $.current, B($, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
    case 22:
    case 23:
      return xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function rp(e, t) {
  switch (tu(t), t.tag) {
    case 1:
      return we(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Sn(), j(xe), j(fe), fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return su(t), null;
    case 13:
      if (j($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return j($), null;
    case 4:
      return Sn(), null;
    case 10:
      return iu(t.type._context), null;
    case 22:
    case 23:
      return xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1, se = !1, lp = typeof WeakSet == "function" ? WeakSet : Set, w = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function vo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Ma = !1;
function ip(e, t) {
  if (bi = il, e = rf(), qo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, u = -1, a = -1, s = 0, d = 0, m = e, p = null;
        t: for (; ; ) {
          for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (a = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (v = m.firstChild) !== null; )
            p = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++s === l && (u = o), p === i && ++d === r && (a = o), (v = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = v;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qi = { focusedElem: e, selectionRange: n }, il = !1, w = t; w !== null; ) if (t = w, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, w = e;
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
            var y = g.memoizedProps, P = g.memoizedState, c = t.stateNode, f = c.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ge(t.type, y), P);
            c.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(S(163));
      }
    } catch (E) {
      Q(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, w = e;
      break;
    }
    w = t.return;
  }
  return g = Ma, Ma = !1, g;
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && vo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ml(e, t) {
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
function go(e) {
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
function ec(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ec(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[or], delete t[no], delete t[jh], delete t[Gh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ha(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || tc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = al));
  else if (r !== 4 && (e = e.child, e !== null)) for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), e = e.sibling;
}
function Eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Eo(e, t, n), e = e.sibling; e !== null; ) Eo(e, t, n), e = e.sibling;
}
var re = null, $e = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) nc(e, t, n), n = n.sibling;
}
function nc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(kl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      se || an(n, t);
    case 6:
      var r = re, l = $e;
      re = null, ft(e, t, n), re = r, $e = l, re !== null && ($e ? (e = re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null && ($e ? (e = re, n = n.stateNode, e.nodeType === 8 ? gi(e.parentNode, n) : e.nodeType === 1 && gi(e, n), tr(e)) : gi(re, n.stateNode));
      break;
    case 4:
      r = re, l = $e, re = n.stateNode.containerInfo, $e = !0, ft(e, t, n), re = r, $e = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && vo(n, t, o), l = l.next;
        } while (l !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (!se && (an(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (se = (r = se) || n.memoizedState !== null, ft(e, t, n), se = r) : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function Aa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()), t.forEach(function(r) {
      var l = pp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            re = u.stateNode, $e = !1;
            break e;
          case 3:
            re = u.stateNode.containerInfo, $e = !0;
            break e;
          case 4:
            re = u.stateNode.containerInfo, $e = !0;
            break e;
        }
        u = u.return;
      }
      if (re === null) throw Error(S(160));
      nc(i, o, l), re = null, $e = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (s) {
      Q(l, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rc(t, e), t = t.sibling;
}
function rc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Ze(e), r & 4) {
        try {
          Xn(3, e, e.return), Ml(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          Xn(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      ze(t, e), Ze(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (ze(t, e), Ze(e), r & 512 && n !== null && an(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && _s(l, i), Gi(u, o);
          var s = Gi(u, i);
          for (o = 0; o < a.length; o += 2) {
            var d = a[o], m = a[o + 1];
            d === "style" ? Is(l, m) : d === "dangerouslySetInnerHTML" ? Ns(l, m) : d === "children" ? Jn(l, m) : zo(l, d, m, s);
          }
          switch (u) {
            case "input":
              Fi(l, i);
              break;
            case "textarea":
              ks(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? fn(l, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? fn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : fn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[or] = i;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 6:
      if (ze(t, e), Ze(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (ze(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        tr(t.containerInfo);
      } catch (y) {
        Q(e, e.return, y);
      }
      break;
    case 4:
      ze(t, e), Ze(e);
      break;
    case 13:
      ze(t, e), Ze(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Eu = Y())), r & 4 && Aa(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (se = (s = se) || d, ze(t, e), se = s) : ze(t, e), Ze(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !d && e.mode & 1) for (w = e, d = e.child; d !== null; ) {
          for (m = w = d; w !== null; ) {
            switch (p = w, v = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Xn(4, p, p.return);
                break;
              case 1:
                an(p, p.return);
                var g = p.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (y) {
                    Q(r, n, y);
                  }
                }
                break;
              case 5:
                an(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Fa(m);
                  continue;
                }
            }
            v !== null ? (v.return = p, w = v) : Fa(m);
          }
          d = d.sibling;
        }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                l = m.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Ps("display", o));
              } catch (y) {
                Q(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (d === null) try {
              m.stateNode.nodeValue = s ? "" : m.memoizedProps;
            } catch (y) {
              Q(e, e.return, y);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), m = m.return;
          }
          d === m && (d = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), Ze(e), r & 4 && Aa(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), r.flags &= -33);
          var i = Ha(e);
          Eo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Ha(e);
          yo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  w = e, lc(e);
}
function lc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; w !== null; ) {
    var l = w, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || se;
        u = Dr;
        var s = se;
        if (Dr = o, (se = a) && !s) for (w = l; w !== null; ) o = w, a = o.child, o.tag === 22 && o.memoizedState !== null ? Ba(l) : a !== null ? (a.return = o, w = a) : Ba(l);
        for (; i !== null; ) w = i, lc(i), i = i.sibling;
        w = l, Dr = u, se = s;
      }
      Da(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, w = i) : Da(e);
  }
}
function Da(e) {
  for (; w !== null; ) {
    var t = w;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            se || Ml(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !se) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Sa(t, i, r);
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
              Sa(t, o, n);
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
                var d = s.memoizedState;
                if (d !== null) {
                  var m = d.dehydrated;
                  m !== null && tr(m);
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
            throw Error(S(163));
        }
        se || t.flags & 512 && go(t);
      } catch (p) {
        Q(t, t.return, p);
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
function Fa(e) {
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
function Ba(e) {
  for (; w !== null; ) {
    var t = w;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, l, a);
            }
          }
          var i = t.return;
          try {
            go(t);
          } catch (a) {
            Q(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            go(t);
          } catch (a) {
            Q(t, o, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
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
var up = Math.ceil, El = st.ReactCurrentDispatcher, gu = st.ReactCurrentOwner, He = st.ReactCurrentBatchConfig, A = 0, te = null, K = null, ie = 0, _e = 0, sn = Pt(0), b = 0, dr = null, Vt = 0, Hl = 0, yu = 0, Zn = null, Ee = null, Eu = 0, wn = 1 / 0, et = null, Sl = !1, So = null, wt = null, Fr = !1, vt = null, xl = 0, Yn = 0, xo = null, Kr = -1, Jr = 0;
function ve() {
  return A & 6 ? Y() : Kr !== -1 ? Kr : Kr = Y();
}
function Tt(e) {
  return e.mode & 1 ? A & 2 && ie !== 0 ? ie & -ie : Vh.transition !== null ? (Jr === 0 && (Jr = js()), Jr) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zs(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < Yn) throw Yn = 0, xo = null, Error(S(185));
  pr(e, n, r), (!(A & 2) || e !== te) && (e === te && (!(A & 2) && (Hl |= n), b === 4 && pt(e, ie)), Te(e, r), n === 1 && A === 0 && !(t.mode & 1) && (wn = Y() + 500, Ll && It()));
}
function Te(e, t) {
  var n = e.callbackNode;
  Vd(e, t);
  var r = ll(e, e === te ? ie : 0);
  if (r === 0) n !== null && Xu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xu(n), t === 1) e.tag === 0 ? $h(Ua.bind(null, e)) : pf(Ua.bind(null, e)), Uh(function() {
      !(A & 6) && It();
    }), n = null;
    else {
      switch (Gs(r)) {
        case 1:
          n = Wo;
          break;
        case 4:
          n = Us;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = rl;
      }
      n = dc(n, ic.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ic(e, t) {
  if (Kr = -1, Jr = 0, A & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (mn() && e.callbackNode !== n) return null;
  var r = ll(e, e === te ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var i = uc();
    (te !== e || ie !== t) && (et = null, wn = Y() + 500, Ut(e, t));
    do
      try {
        fp();
        break;
      } catch (u) {
        oc(e, u);
      }
    while (!0);
    lu(), El.current = i, A = l, K !== null ? t = 0 : (te = null, ie = 0, t = b);
  }
  if (t !== 0) {
    if (t === 2 && (l = Xi(e), l !== 0 && (r = l, t = wo(e, l))), t === 1) throw n = dr, Ut(e, 0), pt(e, r), Te(e, Y()), n;
    if (t === 6) pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ap(l) && (t = wl(e, r), t === 2 && (i = Xi(e), i !== 0 && (r = i, t = wo(e, i))), t === 1)) throw n = dr, Ut(e, 0), pt(e, r), Te(e, Y()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          At(e, Ee, et);
          break;
        case 3:
          if (pt(e, r), (r & 130023424) === r && (t = Eu + 500 - Y(), 10 < t)) {
            if (ll(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = to(At.bind(null, e, Ee, et), t);
            break;
          }
          At(e, Ee, et);
          break;
        case 4:
          if (pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - We(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * up(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = to(At.bind(null, e, Ee, et), r);
            break;
          }
          At(e, Ee, et);
          break;
        case 5:
          At(e, Ee, et);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Te(e, Y()), e.callbackNode === n ? ic.bind(null, e) : null;
}
function wo(e, t) {
  var n = Zn;
  return e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256), e = wl(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && To(t)), e;
}
function To(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Xe(i(), l)) return !1;
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
function pt(e, t) {
  for (t &= ~yu, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ua(e) {
  if (A & 6) throw Error(S(327));
  mn();
  var t = ll(e, 0);
  if (!(t & 1)) return Te(e, Y()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && (t = r, n = wo(e, r));
  }
  if (n === 1) throw n = dr, Ut(e, 0), pt(e, t), Te(e, Y()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, At(e, Ee, et), Te(e, Y()), null;
}
function Su(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (wn = Y() + 500, Ll && It());
  }
}
function Wt(e) {
  vt !== null && vt.tag === 0 && !(A & 6) && mn();
  var t = A;
  A |= 1;
  var n = He.transition, r = D;
  try {
    if (He.transition = null, D = 1, e) return e();
  } finally {
    D = r, He.transition = n, A = t, !(A & 6) && It();
  }
}
function xu() {
  _e = sn.current, j(sn);
}
function Ut(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bh(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (tu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && sl();
        break;
      case 3:
        Sn(), j(xe), j(fe), fu();
        break;
      case 5:
        su(r);
        break;
      case 4:
        Sn();
        break;
      case 13:
        j($);
        break;
      case 19:
        j($);
        break;
      case 10:
        iu(r.type._context);
        break;
      case 22:
      case 23:
        xu();
    }
    n = n.return;
  }
  if (te = e, K = e = _t(e.current, null), ie = _e = t, b = 0, dr = null, yu = Hl = Vt = 0, Ee = Zn = null, Ft !== null) {
    for (t = 0; t < Ft.length; t++) if (n = Ft[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Ft = null;
  }
  return e;
}
function oc(e, t) {
  do {
    var n = K;
    try {
      if (lu(), Xr.current = yl, gl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        gl = !1;
      }
      if ($t = 0, ee = J = V = null, Qn = !1, sr = 0, gu.current = null, n === null || n.return === null) {
        b = 1, dr = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = ie, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, d = u, m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = d.alternate;
            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = Ca(o);
          if (v !== null) {
            v.flags &= -257, Na(v, o, u, i, t), v.mode & 1 && ka(i, s, t), t = v, a = s;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), t.updateQueue = y;
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ka(i, s, t), wu();
              break e;
            }
            a = Error(S(426));
          }
        } else if (G && u.mode & 1) {
          var P = Ca(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Na(P, o, u, i, t), nu(xn(a, u));
            break e;
          }
        }
        i = a = xn(a, u), b !== 4 && (b = 2), Zn === null ? Zn = [i] : Zn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = $f(i, a, t);
              Ea(i, c);
              break e;
            case 1:
              u = a;
              var f = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (wt === null || !wt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = Vf(i, u, t);
                Ea(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sc(n);
    } catch (x) {
      t = x, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uc() {
  var e = El.current;
  return El.current = yl, e === null ? yl : e;
}
function wu() {
  (b === 0 || b === 3 || b === 2) && (b = 4), te === null || !(Vt & 268435455) && !(Hl & 268435455) || pt(te, ie);
}
function wl(e, t) {
  var n = A;
  A |= 2;
  var r = uc();
  (te !== e || ie !== t) && (et = null, Ut(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      oc(e, l);
    }
  while (!0);
  if (lu(), A = n, El.current = r, K !== null) throw Error(S(261));
  return te = null, ie = 0, b;
}
function sp() {
  for (; K !== null; ) ac(K);
}
function fp() {
  for (; K !== null && !Ad(); ) ac(K);
}
function ac(e) {
  var t = cc(e.alternate, e, _e);
  e.memoizedProps = e.pendingProps, t === null ? sc(e) : K = t, gu.current = null;
}
function sc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rp(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        b = 6, K = null;
        return;
      }
    } else if (n = np(n, t, _e), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function At(e, t, n) {
  var r = D, l = He.transition;
  try {
    He.transition = null, D = 1, cp(e, t, n, r);
  } finally {
    He.transition = l, D = r;
  }
  return null;
}
function cp(e, t, n, r) {
  do
    mn();
  while (vt !== null);
  if (A & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Wd(e, i), e === te && (K = te = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0, dc(rl, function() {
    return mn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = He.transition, He.transition = null;
    var o = D;
    D = 1;
    var u = A;
    A |= 4, gu.current = null, ip(e, n), rc(n, e), Rh(qi), il = !!bi, qi = bi = null, e.current = n, op(n), Dd(), A = u, D = o, He.transition = i;
  } else e.current = n;
  if (Fr && (Fr = !1, vt = e, xl = l), i = e.pendingLanes, i === 0 && (wt = null), Ud(n.stateNode), Te(e, Y()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sl) throw Sl = !1, e = So, So = null, e;
  return xl & 1 && e.tag !== 0 && mn(), i = e.pendingLanes, i & 1 ? e === xo ? Yn++ : (Yn = 0, xo = e) : Yn = 0, It(), null;
}
function mn() {
  if (vt !== null) {
    var e = Gs(xl), t = He.transition, n = D;
    try {
      if (He.transition = null, D = 16 > e ? 16 : e, vt === null) var r = !1;
      else {
        if (e = vt, vt = null, xl = 0, A & 6) throw Error(S(331));
        var l = A;
        for (A |= 4, w = e.current; w !== null; ) {
          var i = w, o = i.child;
          if (w.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (w = s; w !== null; ) {
                  var d = w;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) m.return = d, w = m;
                  else for (; w !== null; ) {
                    d = w;
                    var p = d.sibling, v = d.return;
                    if (ec(d), d === s) {
                      w = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = v, w = p;
                      break;
                    }
                    w = v;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var P = y.sibling;
                    y.sibling = null, y = P;
                  } while (y !== null);
                }
              }
              w = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, w = o;
          else e: for (; w !== null; ) {
            if (i = w, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Xn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, w = c;
              break e;
            }
            w = i.return;
          }
        }
        var f = e.current;
        for (w = f; w !== null; ) {
          o = w;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, w = h;
          else e: for (o = f; w !== null; ) {
            if (u = w, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ml(9, u);
              }
            } catch (x) {
              Q(u, u.return, x);
            }
            if (u === o) {
              w = null;
              break e;
            }
            var E = u.sibling;
            if (E !== null) {
              E.return = u.return, w = E;
              break e;
            }
            w = u.return;
          }
        }
        if (A = l, It(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(kl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      D = n, He.transition = t;
    }
  }
  return !1;
}
function za(e, t, n) {
  t = xn(n, t), t = $f(e, t, 1), e = xt(e, t, 1), t = ve(), e !== null && (pr(e, 1, t), Te(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) za(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      za(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wt === null || !wt.has(r))) {
        e = xn(n, e), e = Vf(t, e, 1), t = xt(t, e, 1), e = ve(), t !== null && (pr(t, 1, e), Te(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, te === e && (ie & n) === n && (b === 4 || b === 3 && (ie & 130023424) === ie && 500 > Y() - Eu ? Ut(e, 0) : yu |= n), Te(e, t);
}
function fc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = ve();
  e = ut(e, t), e !== null && (pr(e, t, n), Te(e, n));
}
function hp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fc(e, n);
}
function pp(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), fc(e, n);
}
var cc;
cc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || xe.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, tp(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, G && t.flags & 1048576 && mf(t, dl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Yr(e, t), e = t.pendingProps;
      var l = gn(t, fe.current);
      pn(t, n), l = du(null, t, r, e, l, n);
      var i = hu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (i = !0, fl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, uu(t), l.updater = Ol, t.stateNode = l, l._reactInternals = t, ao(t, r, e, n), t = co(null, t, r, !0, i, n)) : (t.tag = 0, G && i && eu(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Yr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vp(r), e = Ge(r, e), l) {
          case 0:
            t = fo(null, t, r, e, n);
            break e;
          case 1:
            t = La(null, t, r, e, n);
            break e;
          case 11:
            t = Pa(null, t, r, e, n);
            break e;
          case 14:
            t = Ia(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), fo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), La(e, t, r, l, n);
    case 3:
      e: {
        if (Zf(t), e === null) throw Error(S(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, xf(e, t), ml(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = xn(Error(S(423)), t), t = Ra(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = xn(Error(S(424)), t), t = Ra(e, t, r, n, l);
          break e;
        } else for (ke = St(t.stateNode.containerInfo.firstChild), Ce = t, G = !0, Ve = null, n = Ef(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = at(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wf(t), e === null && io(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, eo(r, l) ? o = null : i !== null && eo(r, i) && (t.flags |= 32), Xf(e, t), de(e, t, o, n), t.child;
    case 6:
      return e === null && io(t), null;
    case 13:
      return Yf(e, t, n);
    case 4:
      return au(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Pa(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, B(hl, r._currentValue), r._currentValue = o, i !== null) if (Xe(i.value, o)) {
          if (i.children === l.children && !xe.current) {
            t = at(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = lt(-1, n & -n), a.tag = 2;
                  var s = i.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var d = s.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), s.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), oo(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(S(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), oo(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, pn(t, n), l = Ae(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), Ia(e, t, r, l, n);
    case 15:
      return Wf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Yr(e, t), t.tag = 1, we(r) ? (e = !0, fl(t)) : e = !1, pn(t, n), Gf(t, r, l), ao(t, r, l, n), co(null, t, r, !0, e, n);
    case 19:
      return Kf(e, t, n);
    case 22:
      return Qf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function dc(e, t) {
  return Bs(e, t);
}
function mp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Me(e, t, n, r) {
  return new mp(e, t, n, r);
}
function Tu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return Tu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Go) return 11;
    if (e === $o) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function br(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Tu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case bt:
      return zt(n.children, l, i, t);
    case jo:
      o = 8, l |= 8;
      break;
    case Oi:
      return e = Me(12, n, t, l | 2), e.elementType = Oi, e.lanes = i, e;
    case Mi:
      return e = Me(13, n, t, l), e.elementType = Mi, e.lanes = i, e;
    case Hi:
      return e = Me(19, n, t, l), e.elementType = Hi, e.lanes = i, e;
    case xs:
      return Al(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Es:
          o = 10;
          break e;
        case Ss:
          o = 9;
          break e;
        case Go:
          o = 11;
          break e;
        case $o:
          o = 14;
          break e;
        case ct:
          o = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Me(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function zt(e, t, n, r) {
  return e = Me(7, e, r, t), e.lanes = n, e;
}
function Al(e, t, n, r) {
  return e = Me(22, e, r, t), e.elementType = xs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ki(e, t, n) {
  return e = Me(6, e, null, t), e.lanes = n, e;
}
function Ci(e, t, n) {
  return t = Me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oi(0), this.expirationTimes = oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function _u(e, t, n, r, l, i, o, u, a) {
  return e = new gp(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Me(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, uu(i), e;
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hc(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Zt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return hf(e, n, t);
  }
  return t;
}
function pc(e, t, n, r, l, i, o, u, a) {
  return e = _u(n, r, !0, e, l, i, o, u, a), e.context = hc(null), n = e.current, r = ve(), l = Tt(n), i = lt(r, l), i.callback = t ?? null, xt(n, i, l), e.current.lanes = l, pr(e, l, r), Te(e, r), e;
}
function Dl(e, t, n, r) {
  var l = t.current, i = ve(), o = Tt(l);
  return n = hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xt(l, t, o), e !== null && (Qe(e, l, o, i), Qr(e, l, o)), o;
}
function Tl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ja(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  ja(e, t), (e = e.alternate) && ja(e, t);
}
function Ep() {
  return null;
}
var mc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Cu(e) {
  this._internalRoot = e;
}
Fl.prototype.render = Cu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Dl(e, t, null, null);
};
Fl.prototype.unmount = Cu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function() {
      Dl(null, e, null, null);
    }), t[ot] = null;
  }
};
function Fl(e) {
  this._internalRoot = e;
}
Fl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ws();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++) ;
    ht.splice(n, 0, e), n === 0 && Xs(e);
  }
};
function Nu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ga() {
}
function Sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = Tl(o);
        i.call(s);
      };
    }
    var o = pc(t, r, e, 0, null, !1, !1, "", Ga);
    return e._reactRootContainer = o, e[ot] = o.current, lr(e.nodeType === 8 ? e.parentNode : e), Wt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = Tl(a);
      u.call(s);
    };
  }
  var a = _u(e, 0, !1, null, null, !1, !1, "", Ga);
  return e._reactRootContainer = a, e[ot] = a.current, lr(e.nodeType === 8 ? e.parentNode : e), Wt(function() {
    Dl(t, a, n, r);
  }), a;
}
function Ul(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = Tl(o);
        u.call(a);
      };
    }
    Dl(t, o, e, l);
  } else o = Sp(n, t, e, l, r);
  return Tl(o);
}
$s = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Un(t.pendingLanes);
        n !== 0 && (Qo(t, n | 1), Te(t, Y()), !(A & 6) && (wn = Y() + 500, It()));
      }
      break;
    case 13:
      Wt(function() {
        var r = ut(e, 1);
        if (r !== null) {
          var l = ve();
          Qe(r, e, 1, l);
        }
      }), ku(e, 1);
  }
};
Xo = function(e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = ve();
      Qe(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
Vs = function(e) {
  if (e.tag === 13) {
    var t = Tt(e), n = ut(e, t);
    if (n !== null) {
      var r = ve();
      Qe(n, e, t, r);
    }
    ku(e, t);
  }
};
Ws = function() {
  return D;
};
Qs = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Vi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Fi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Il(r);
            if (!l) throw Error(S(90));
            Ts(r), Fi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ks(e, n);
      break;
    case "select":
      t = n.value, t != null && fn(e, !!n.multiple, t, !1);
  }
};
Os = Su;
Ms = Wt;
var xp = { usingClientEntryPoint: !1, Events: [vr, nn, Il, Ls, Rs, Su] }, Dn = { findFiberByHostInstance: Dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wp = { bundleType: Dn.bundleType, version: Dn.version, rendererPackageName: Dn.rendererPackageName, rendererConfig: Dn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: st.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ds(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Dn.findFiberByHostInstance || Ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber) try {
    kl = Br.inject(wp), Je = Br;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nu(t)) throw Error(S(200));
  return yp(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!Nu(e)) throw Error(S(299));
  var n = !1, r = "", l = mc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _u(e, 1, !1, null, null, n, !1, r, l), e[ot] = t.current, lr(e.nodeType === 8 ? e.parentNode : e), new Cu(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Ds(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Wt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!Bl(t)) throw Error(S(200));
  return Ul(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!Nu(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = mc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = pc(t, null, e, 1, n ?? null, l, !1, i, o), e[ot] = t.current, lr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Fl(t);
};
Pe.render = function(e, t, n) {
  if (!Bl(t)) throw Error(S(200));
  return Ul(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!Bl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Wt(function() {
    Ul(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ot] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = Su;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Bl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ul(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function vc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc);
    } catch (e) {
      console.error(e);
    }
}
vc(), ms.exports = Pe;
var Tp = ms.exports, gc, $a = Tp;
gc = $a.createRoot, $a.hydrateRoot;
var _o = function(e, t) {
  return _o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
  }, _o(e, t);
};
function Fe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  _o(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var n, r = 1, l = arguments.length; r < l; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, k.apply(this, arguments);
};
function zl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
  return n;
}
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, l = t.length, i; r < l; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function he(e, t) {
  var n = t && t.cache ? t.cache : Ip, r = t && t.serializer ? t.serializer : Pp, l = t && t.strategy ? t.strategy : Cp;
  return l(e, {
    cache: n,
    serializer: r
  });
}
function _p(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function kp(e, t, n, r) {
  var l = _p(r) ? r : n(r), i = t.get(l);
  return typeof i > "u" && (i = e.call(this, r), t.set(l, i)), i;
}
function yc(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), l = n(r), i = t.get(l);
  return typeof i > "u" && (i = e.apply(this, r), t.set(l, i)), i;
}
function Ec(e, t, n, r, l) {
  return n.bind(t, e, r, l);
}
function Cp(e, t) {
  var n = e.length === 1 ? kp : yc;
  return Ec(e, this, n, t.cache.create(), t.serializer);
}
function Np(e, t) {
  return Ec(e, this, yc, t.cache.create(), t.serializer);
}
var Pp = function() {
  return JSON.stringify(arguments);
};
function Pu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Pu.prototype.get = function(e) {
  return this.cache[e];
};
Pu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Ip = {
  create: function() {
    return new Pu();
  }
}, pe = {
  variadic: Np
};
function Sc(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, me([void 0], t, !1)))();
}, {
  strategy: pe.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, me([void 0], t, !1)))();
}, {
  strategy: pe.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, me([void 0], t, !1)))();
}, {
  strategy: pe.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, me([void 0], t, !1)))();
}, {
  strategy: pe.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, me([void 0], t, !1)))();
}, {
  strategy: pe.variadic
});
var M;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M || (M = {}));
var z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(z || (z = {}));
var Tn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Tn || (Tn = {}));
function Va(e) {
  return e.type === z.literal;
}
function Lp(e) {
  return e.type === z.argument;
}
function xc(e) {
  return e.type === z.number;
}
function wc(e) {
  return e.type === z.date;
}
function Tc(e) {
  return e.type === z.time;
}
function _c(e) {
  return e.type === z.select;
}
function kc(e) {
  return e.type === z.plural;
}
function Rp(e) {
  return e.type === z.pound;
}
function Cc(e) {
  return e.type === z.tag;
}
function Nc(e) {
  return !!(e && typeof e == "object" && e.type === Tn.number);
}
function ko(e) {
  return !!(e && typeof e == "object" && e.type === Tn.dateTime);
}
var Pc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Op = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Mp(e) {
  var t = {};
  return e.replace(Op, function(n) {
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
var Hp = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ap(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Hp).filter(function(p) {
    return p.length > 0;
  }), n = [], r = 0, l = t; r < l.length; r++) {
    var i = l[r], o = i.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], a = o.slice(1), s = 0, d = a; s < d.length; s++) {
      var m = d[s];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: a });
  }
  return n;
}
function Dp(e) {
  return e.replace(/^(.*?)-/, "");
}
var Wa = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ic = /^(@+)?(\+|#+)?[rs]?$/g, Fp = /(\*)(0+)|(#+)(0+)|(0+)/g, Lc = /^(0+)$/;
function Qa(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ic, function(n, r, l) {
    return typeof l != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : l === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof l == "string" ? l.length : 0)), "";
  }), t;
}
function Rc(e) {
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
function Bp(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Lc.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Xa(e) {
  var t = {}, n = Rc(e);
  return n || t;
}
function Up(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var l = r[n];
    switch (l.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = l.options[0];
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
        t.style = "unit", t.unit = Dp(l.options[0]);
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
        t = k(k(k({}, t), { notation: "scientific" }), l.options.reduce(function(a, s) {
          return k(k({}, a), Xa(s));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), l.options.reduce(function(a, s) {
          return k(k({}, a), Xa(s));
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
        t.scale = parseFloat(l.options[0]);
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
        if (l.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        l.options[0].replace(Fp, function(a, s, d, m, p, v) {
          if (s)
            t.minimumIntegerDigits = d.length;
          else {
            if (m && p)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Lc.test(l.stem)) {
      t.minimumIntegerDigits = l.stem.length;
      continue;
    }
    if (Wa.test(l.stem)) {
      if (l.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      l.stem.replace(Wa, function(a, s, d, m, p, v) {
        return d === "*" ? t.minimumFractionDigits = s.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : p && v ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + v.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var i = l.options[0];
      i === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = k(k({}, t), Qa(i)));
      continue;
    }
    if (Ic.test(l.stem)) {
      t = k(k({}, t), Qa(l.stem));
      continue;
    }
    var o = Rc(l.stem);
    o && (t = k(k({}, t), o));
    var u = Bp(l.stem);
    u && (t = k(k({}, t), u));
  }
  return t;
}
var Ur = {
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
function zp(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var l = e.charAt(r);
    if (l === "j") {
      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === l; )
        i++, r++;
      var o = 1 + (i & 1), u = i < 2 ? 1 : 3 + (i >> 1), a = "a", s = jp(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = s + n;
    } else l === "J" ? n += "H" : n += l;
  }
  return n;
}
function jp(e) {
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
  var l = Ur[r || ""] || Ur[n || ""] || Ur["".concat(n, "-001")] || Ur["001"];
  return l[0];
}
var Ni, Gp = new RegExp("^".concat(Pc.source, "*")), $p = new RegExp("".concat(Pc.source, "*$"));
function H(e, t) {
  return { start: e, end: t };
}
var Vp = !!String.prototype.startsWith && "_a".startsWith("a", 1), Wp = !!String.fromCodePoint, Qp = !!Object.fromEntries, Xp = !!String.prototype.codePointAt, Zp = !!String.prototype.trimStart, Yp = !!String.prototype.trimEnd, Kp = !!Number.isSafeInteger, Jp = Kp ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Co = !0;
try {
  var bp = Mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Co = ((Ni = bp.exec("a")) === null || Ni === void 0 ? void 0 : Ni[0]) === "a";
} catch {
  Co = !1;
}
var Za = Vp ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), No = Wp ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", l = t.length, i = 0, o; l > i; ) {
      if (o = t[i++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Ya = (
  // native
  Qp ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, l = t; r < l.length; r++) {
        var i = l[r], o = i[0], u = i[1];
        n[o] = u;
      }
      return n;
    }
  )
), Oc = Xp ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var l = t.charCodeAt(n), i;
      return l < 55296 || l > 56319 || n + 1 === r || (i = t.charCodeAt(n + 1)) < 56320 || i > 57343 ? l : (l - 55296 << 10) + (i - 56320) + 65536;
    }
  }
), qp = Zp ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Gp, "");
  }
), em = Yp ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace($p, "");
  }
);
function Mc(e, t) {
  return new RegExp(e, t);
}
var Po;
if (Co) {
  var Ka = Mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Po = function(t, n) {
    var r;
    Ka.lastIndex = n;
    var l = Ka.exec(t);
    return (r = l[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Po = function(t, n) {
    for (var r = []; ; ) {
      var l = Oc(t, n);
      if (l === void 0 || Hc(l) || lm(l))
        break;
      r.push(l), n += l >= 65536 ? 2 : 1;
    }
    return No.apply(void 0, r);
  };
var tm = (
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
      for (var l = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          l.push(o.val);
        } else {
          if (i === 125 && t > 0)
            break;
          if (i === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), l.push({
              type: z.pound,
              location: H(u, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(M.UNMATCHED_CLOSING_TAG, H(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && Io(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            l.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            l.push(o.val);
          }
        }
      }
      return { val: l, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var l = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: z.literal,
            value: "<".concat(l, "/>"),
            location: H(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(t + 1, n, !0);
        if (i.err)
          return i;
        var o = i.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Io(this.char()))
            return this.error(M.INVALID_TAG, H(u, this.clonePosition()));
          var a = this.clonePosition(), s = this.parseTagName();
          return l !== s ? this.error(M.UNMATCHED_CLOSING_TAG, H(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: z.tag,
              value: l,
              children: o,
              location: H(r, this.clonePosition())
            },
            err: null
          } : this.error(M.INVALID_TAG, H(u, this.clonePosition())));
        } else
          return this.error(M.UNCLOSED_TAG, H(r, this.clonePosition()));
      } else
        return this.error(M.INVALID_TAG, H(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && rm(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), l = ""; ; ) {
        var i = this.tryParseQuote(n);
        if (i) {
          l += i;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          l += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          l += u;
          continue;
        }
        break;
      }
      var a = H(r, this.clonePosition());
      return {
        val: { type: z.literal, value: l, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !nm(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return No.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), No(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, H(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(M.EMPTY_ARGUMENT, H(r, this.clonePosition()));
      var l = this.parseIdentifierIfPossible().value;
      if (!l)
        return this.error(M.MALFORMED_ARGUMENT, H(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, H(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: z.argument,
              // value does not include the opening and closing braces.
              value: l,
              location: H(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, H(r, this.clonePosition())) : this.parseArgumentOptions(t, n, l, r);
        default:
          return this.error(M.MALFORMED_ARGUMENT, H(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Po(this.message, n), l = n + r.length;
      this.bumpTo(l);
      var i = this.clonePosition(), o = H(t, i);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, l) {
      var i, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (u) {
        case "":
          return this.error(M.EXPECT_ARGUMENT_TYPE, H(o, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var p = em(m.val);
            if (p.length === 0)
              return this.error(M.EXPECT_ARGUMENT_STYLE, H(this.clonePosition(), this.clonePosition()));
            var v = H(d, this.clonePosition());
            s = { style: p, styleLocation: v };
          }
          var g = this.tryParseArgumentClose(l);
          if (g.err)
            return g;
          var y = H(l, this.clonePosition());
          if (s && Za(s == null ? void 0 : s.style, "::", 0)) {
            var P = qp(s.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(P, s.styleLocation);
              return m.err ? m : {
                val: { type: z.number, value: r, location: y, style: m.val },
                err: null
              };
            } else {
              if (P.length === 0)
                return this.error(M.EXPECT_DATE_TIME_SKELETON, y);
              var c = P;
              this.locale && (c = zp(P, this.locale));
              var p = {
                type: Tn.dateTime,
                pattern: c,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Mp(c) : {}
              }, f = u === "date" ? z.date : z.time;
              return {
                val: { type: f, value: r, location: y, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? z.number : u === "date" ? z.date : z.time,
              value: r,
              location: y,
              style: (i = s == null ? void 0 : s.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var h = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, H(h, k({}, h)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), x = 0;
          if (u !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), x = m.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, u, n, E);
          if (_.err)
            return _;
          var g = this.tryParseArgumentClose(l);
          if (g.err)
            return g;
          var C = H(l, this.clonePosition());
          return u === "select" ? {
            val: {
              type: z.select,
              value: r,
              options: Ya(_.val),
              location: C
            },
            err: null
          } : {
            val: {
              type: z.plural,
              value: r,
              options: Ya(_.val),
              offset: x,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: C
            },
            err: null
          };
        }
        default:
          return this.error(M.INVALID_ARGUMENT_TYPE, H(o, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, H(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var l = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, H(l, this.clonePosition()));
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
        r = Ap(t);
      } catch {
        return this.error(M.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Tn.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Up(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, l) {
      for (var i, o = !1, u = [], a = /* @__PURE__ */ new Set(), s = l.value, d = l.location; ; ) {
        if (s.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var p = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            d = H(m, this.clonePosition()), s = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (a.has(s))
          return this.error(n === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        s === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, H(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(t + 1, n, r);
        if (g.err)
          return g;
        var y = this.tryParseArgumentClose(v);
        if (y.err)
          return y;
        u.push([
          s,
          {
            value: g.val,
            location: H(v, this.clonePosition())
          }
        ]), a.add(s), this.bumpSpace(), i = this.parseIdentifierIfPossible(), s = i.value, d = i.location;
      }
      return u.length === 0 ? this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, H(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(M.MISSING_OTHER_CLAUSE, H(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, l = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var i = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          i = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var a = H(l, this.clonePosition());
      return i ? (o *= r, Jp(o) ? { val: o, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = Oc(this.message, t);
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
      if (Za(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Hc(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Io(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function nm(e) {
  return Io(e) || e === 47;
}
function rm(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Hc(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function lm(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lo(e) {
  e.forEach(function(t) {
    if (delete t.location, _c(t) || kc(t))
      for (var n in t.options)
        delete t.options[n].location, Lo(t.options[n].value);
    else xc(t) && Nc(t.style) || (wc(t) || Tc(t)) && ko(t.style) ? delete t.style.location : Cc(t) && Lo(t.children);
  });
}
function im(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new tm(e, t).parse();
  if (n.err) {
    var r = SyntaxError(M[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Lo(n.val), n.val;
}
var qe;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(qe || (qe = {}));
var Lt = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l) {
      var i = e.call(this, n) || this;
      return i.code = r, i.originalMessage = l, i;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Ja = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l, i) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(l).join('", "'), '"'), qe.INVALID_VALUE, i) || this;
    }
    return t;
  }(Lt)
), om = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), qe.INVALID_VALUE, l) || this;
    }
    return t;
  }(Lt)
), um = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), qe.MISSING_VALUE, r) || this;
    }
    return t;
  }(Lt)
), ce;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ce || (ce = {}));
function am(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ce.literal || n.type !== ce.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Ac(e) {
  return typeof e == "function";
}
function qr(e, t, n, r, l, i, o) {
  if (e.length === 1 && Va(e[0]))
    return [
      {
        type: ce.literal,
        value: e[0].value
      }
    ];
  for (var u = [], a = 0, s = e; a < s.length; a++) {
    var d = s[a];
    if (Va(d)) {
      u.push({
        type: ce.literal,
        value: d.value
      });
      continue;
    }
    if (Rp(d)) {
      typeof i == "number" && u.push({
        type: ce.literal,
        value: n.getNumberFormat(t).format(i)
      });
      continue;
    }
    var m = d.value;
    if (!(l && m in l))
      throw new um(m, o);
    var p = l[m];
    if (Lp(d)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), u.push({
        type: typeof p == "string" ? ce.literal : ce.object,
        value: p
      });
      continue;
    }
    if (wc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : ko(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: ce.literal,
        value: n.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (Tc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : ko(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: ce.literal,
        value: n.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (xc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Nc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (p = p * (v.scale || 1)), u.push({
        type: ce.literal,
        value: n.getNumberFormat(t, v).format(p)
      });
      continue;
    }
    if (Cc(d)) {
      var g = d.children, y = d.value, P = l[y];
      if (!Ac(P))
        throw new om(y, "function", o);
      var c = qr(g, t, n, r, l, i), f = P(c.map(function(x) {
        return x.value;
      }));
      Array.isArray(f) || (f = [f]), u.push.apply(u, f.map(function(x) {
        return {
          type: typeof x == "string" ? ce.literal : ce.object,
          value: x
        };
      }));
    }
    if (_c(d)) {
      var h = d.options[p] || d.options.other;
      if (!h)
        throw new Ja(d.value, p, Object.keys(d.options), o);
      u.push.apply(u, qr(h.value, t, n, r, l));
      continue;
    }
    if (kc(d)) {
      var h = d.options["=".concat(p)];
      if (!h) {
        if (!Intl.PluralRules)
          throw new Lt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, qe.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: d.pluralType }).select(p - (d.offset || 0));
        h = d.options[E] || d.options.other;
      }
      if (!h)
        throw new Ja(d.value, p, Object.keys(d.options), o);
      u.push.apply(u, qr(h.value, t, n, r, l, p - (d.offset || 0)));
      continue;
    }
  }
  return am(u);
}
function sm(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = k(k({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function fm(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = sm(e[r], t[r]), n;
  }, k({}, e)) : e;
}
function Pi(e) {
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
function cm(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, me([void 0], n, !1)))();
    }, {
      cache: Pi(e.number),
      strategy: pe.variadic
    }),
    getDateTimeFormat: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, me([void 0], n, !1)))();
    }, {
      cache: Pi(e.dateTime),
      strategy: pe.variadic
    }),
    getPluralRules: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, me([void 0], n, !1)))();
    }, {
      cache: Pi(e.pluralRules),
      strategy: pe.variadic
    })
  };
}
var Dc = (
  /** @class */
  function() {
    function e(t, n, r, l) {
      n === void 0 && (n = e.defaultLocale);
      var i = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(a) {
        var s = i.formatToParts(a);
        if (s.length === 1)
          return s[0].value;
        var d = s.reduce(function(m, p) {
          return !m.length || p.type !== ce.literal || typeof m[m.length - 1] != "string" ? m.push(p.value) : m[m.length - 1] += p.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(a) {
        return qr(i.ast, i.locales, i.formatters, i.formats, a, void 0, i.message);
      }, this.resolvedOptions = function() {
        var a;
        return {
          locale: ((a = i.resolvedLocale) === null || a === void 0 ? void 0 : a.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
        };
      }, this.getAst = function() {
        return i.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = l || {};
        o.formatters;
        var u = zl(o, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = fm(e.formats, r), this.formatters = l && l.formatters || cm(this.formatterCache);
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
    }, e.__parse = im, e.formats = {
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
), Qt;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Qt || (Qt = {}));
var yr = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l) {
      var i = this, o = l ? l instanceof Error ? l : new Error(String(l)) : void 0;
      return i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, i.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, t), i;
    }
    return t;
  }(Error)
), dm = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r) {
      return e.call(this, Qt.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(yr)
), hm = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r) {
      return e.call(this, Qt.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(yr)
), ba = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r) {
      return e.call(this, Qt.MISSING_DATA, n, r) || this;
    }
    return t;
  }(yr)
), Be = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l) {
      var i = e.call(this, Qt.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), l) || this;
      return i.locale = r, i;
    }
    return t;
  }(yr)
), Ii = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r, l, i) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(l == null ? void 0 : l.id, `
Default Message: `).concat(l == null ? void 0 : l.defaultMessage, `
Description: `).concat(l == null ? void 0 : l.description, `
`), r, i) || this;
      return o.descriptor = l, o.locale = r, o;
    }
    return t;
  }(Be)
), pm = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t(n, r) {
      var l = e.call(this, Qt.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(i) {
        var o;
        return (o = i.value) !== null && o !== void 0 ? o : JSON.stringify(i);
      }).join(), ")") : "id", " as fallback.")) || this;
      return l.descriptor = n, l;
    }
    return t;
  }(yr)
);
function Yt(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, l) {
    return l in e ? r[l] = e[l] : l in n && (r[l] = n[l]), r;
  }, {});
}
var mm = function(e) {
}, vm = function(e) {
}, Fc = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: mm,
  onWarn: vm
};
function Bc() {
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
function Mt(e) {
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
function gm(e) {
  e === void 0 && (e = Bc());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, l = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, me([void 0], a, !1)))();
  }, {
    cache: Mt(e.dateTime),
    strategy: pe.variadic
  }), i = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, me([void 0], a, !1)))();
  }, {
    cache: Mt(e.number),
    strategy: pe.variadic
  }), o = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, me([void 0], a, !1)))();
  }, {
    cache: Mt(e.pluralRules),
    strategy: pe.variadic
  });
  return {
    getDateTimeFormat: l,
    getNumberFormat: i,
    getMessageFormat: he(function(u, a, s, d) {
      return new Dc(u, a, s, k({ formatters: {
        getNumberFormat: i,
        getDateTimeFormat: l,
        getPluralRules: o
      } }, d || {}));
    }, {
      cache: Mt(e.message),
      strategy: pe.variadic
    }),
    getRelativeTimeFormat: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (t.bind.apply(t, me([void 0], u, !1)))();
    }, {
      cache: Mt(e.relativeTime),
      strategy: pe.variadic
    }),
    getPluralRules: o,
    getListFormat: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (n.bind.apply(n, me([void 0], u, !1)))();
    }, {
      cache: Mt(e.list),
      strategy: pe.variadic
    }),
    getDisplayNames: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (r.bind.apply(r, me([void 0], u, !1)))();
    }, {
      cache: Mt(e.displayNames),
      strategy: pe.variadic
    })
  };
}
function Iu(e, t, n, r) {
  var l = e && e[t], i;
  if (l && (i = l[n]), i)
    return i;
  r(new dm("No ".concat(t, " format named: ").concat(n)));
}
function zr(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = k({ timeZone: t }, e[r]), n;
  }, {});
}
function qa(e, t) {
  var n = Object.keys(k(k({}, e), t));
  return n.reduce(function(r, l) {
    return r[l] = k(k({}, e[l] || {}), t[l] || {}), r;
  }, {});
}
function es(e, t) {
  if (!t)
    return e;
  var n = Dc.formats;
  return k(k(k({}, n), e), { date: qa(zr(n.date, t), zr(e.date || {}, t)), time: qa(zr(n.time, t), zr(e.time || {}, t)) });
}
var Ro = function(e, t, n, r, l) {
  var i = e.locale, o = e.formats, u = e.messages, a = e.defaultLocale, s = e.defaultFormats, d = e.fallbackOnEmptyString, m = e.onError, p = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var g = n.id, y = n.defaultMessage;
  Sc(!!g, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var P = String(g), c = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, P) && u[P]
  );
  if (Array.isArray(c) && c.length === 1 && c[0].type === z.literal)
    return c[0].value;
  if (!r && c && typeof c == "string" && !v)
    return c.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = k(k({}, v), r || {}), o = es(o, p), s = es(s, p), !c) {
    if (d === !1 && c === "")
      return c;
    if ((!y || i && i.toLowerCase() !== a.toLowerCase()) && m(new pm(n, i)), y)
      try {
        var f = t.getMessageFormat(y, a, s, l);
        return f.format(r);
      } catch (h) {
        return m(new Ii('Error formatting default message for: "'.concat(P, '", rendering default message verbatim'), i, n, h)), typeof y == "string" ? y : P;
      }
    return P;
  }
  try {
    var f = t.getMessageFormat(c, i, o, k({ formatters: t }, l || {}));
    return f.format(r);
  } catch (h) {
    m(new Ii('Error formatting message: "'.concat(P, '", using ').concat(y ? "default message" : "id", " as fallback."), i, n, h));
  }
  if (y)
    try {
      var f = t.getMessageFormat(y, a, s, l);
      return f.format(r);
    } catch (h) {
      m(new Ii('Error formatting the default message for: "'.concat(P, '", rendering message verbatim'), i, n, h));
    }
  return typeof c == "string" ? c : typeof y == "string" ? y : P;
}, Uc = [
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
function jl(e, t, n, r) {
  var l = e.locale, i = e.formats, o = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var a = r.format, s = k(k({}, u && { timeZone: u }), a && Iu(i, t, a, o)), d = Yt(r, Uc, s);
  return t === "time" && !d.hour && !d.minute && !d.second && !d.timeStyle && !d.dateStyle && (d = k(k({}, d), { hour: "numeric", minute: "numeric" })), n(l, d);
}
function ym(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return jl(e, "date", t, o).format(u);
  } catch (a) {
    e.onError(new Be("Error formatting date.", e.locale, a));
  }
  return String(u);
}
function Em(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return jl(e, "time", t, o).format(u);
  } catch (a) {
    e.onError(new Be("Error formatting time.", e.locale, a));
  }
  return String(u);
}
function Sm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = n[2], u = o === void 0 ? {} : o, a = e.timeZone, s = e.locale, d = e.onError, m = Yt(u, Uc, a ? { timeZone: a } : {});
  try {
    return t(s, m).formatRange(l, i);
  } catch (p) {
    d(new Be("Error formatting date time range.", e.locale, p));
  }
  return String(l);
}
function xm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return jl(e, "date", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new Be("Error formatting date.", e.locale, a));
  }
  return [];
}
function wm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return jl(e, "time", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new Be("Error formatting time.", e.locale, a));
  }
  return [];
}
var Tm = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function _m(e, t, n, r) {
  var l = e.locale, i = e.onError, o = Intl.DisplayNames;
  o || i(new Lt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, qe.MISSING_INTL_API));
  var u = Yt(r, Tm);
  try {
    return t(l, u).of(n);
  } catch (a) {
    i(new Be("Error formatting display name.", l, a));
  }
}
var km = [
  "type",
  "style"
], ts = Date.now();
function Cm(e) {
  return "".concat(ts, "_").concat(e, "_").concat(ts);
}
function Nm(e, t, n, r) {
  r === void 0 && (r = {});
  var l = zc(e, t, n, r).reduce(function(i, o) {
    var u = o.value;
    return typeof u != "string" ? i.push(u) : typeof i[i.length - 1] == "string" ? i[i.length - 1] += u : i.push(u), i;
  }, []);
  return l.length === 1 ? l[0] : l.length === 0 ? "" : l;
}
function zc(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || i(new Lt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, qe.MISSING_INTL_API));
  var u = Yt(r, km);
  try {
    var a = {}, s = n.map(function(d, m) {
      if (typeof d == "object") {
        var p = Cm(m);
        return a[p] = d, p;
      }
      return String(d);
    });
    return t(l, u).formatToParts(s).map(function(d) {
      return d.type === "literal" ? d : k(k({}, d), { value: a[d.value] || d.value });
    });
  } catch (d) {
    i(new Be("Error formatting list.", l, d));
  }
  return n;
}
var Pm = ["type"];
function Im(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || i(new Lt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, qe.MISSING_INTL_API));
  var o = Yt(r, Pm);
  try {
    return t(l, o).select(n);
  } catch (u) {
    i(new Be("Error formatting plural.", l, u));
  }
  return "other";
}
var Lm = ["numeric", "style"];
function Rm(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = !!o && Iu(l, "relative", o, i) || {}, a = Yt(n, Lm, u);
  return t(r, a);
}
function Om(e, t, n, r, l) {
  l === void 0 && (l = {}), r || (r = "second");
  var i = Intl.RelativeTimeFormat;
  i || e.onError(new Lt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, qe.MISSING_INTL_API));
  try {
    return Rm(e, t, l).format(n, r);
  } catch (o) {
    e.onError(new Be("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Mm = [
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
function jc(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = o && Iu(l, "number", o, i) || {}, a = Yt(n, Mm, u);
  return t(r, a);
}
function Hm(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return jc(e, t, r).format(n);
  } catch (l) {
    e.onError(new Be("Error formatting number.", e.locale, l));
  }
  return String(n);
}
function Am(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return jc(e, t, r).formatToParts(n);
  } catch (l) {
    e.onError(new Be("Error formatting number.", e.locale, l));
  }
  return [];
}
function Dm(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Fm(e) {
  e.onWarn && e.defaultRichTextElements && Dm(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Bm(e, t) {
  var n = gm(t), r = k(k({}, Fc), e), l = r.locale, i = r.defaultLocale, o = r.onError;
  return l ? !Intl.NumberFormat.supportedLocalesOf(l).length && o ? o(new ba('Missing locale data for locale: "'.concat(l, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(l).length && o && o(new ba('Missing locale data for locale: "'.concat(l, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new hm('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Fm(r), k(k({}, r), {
    formatters: n,
    formatNumber: Hm.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Am.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Om.bind(null, r, n.getRelativeTimeFormat),
    formatDate: ym.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: xm.bind(null, r, n.getDateTimeFormat),
    formatTime: Em.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: Sm.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: wm.bind(null, r, n.getDateTimeFormat),
    formatPlural: Im.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Ro.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Ro.bind(null, r, n),
    formatList: Nm.bind(null, r, n.getListFormat),
    formatListToParts: zc.bind(null, r, n.getListFormat),
    formatDisplayName: _m.bind(null, r, n.getDisplayNames)
  });
}
function Gc(e) {
  Sc(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var $c = k(k({}, Fc), { textComponent: le.Fragment });
function Um(e) {
  return function(t) {
    return e(le.Children.toArray(t));
  };
}
function zm(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), l = n.length;
  if (r.length !== l)
    return !1;
  for (var i = 0; i < l; i++) {
    var o = n[i];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
var Vc = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne = typeof Symbol == "function" && Symbol.for, Lu = ne ? Symbol.for("react.element") : 60103, Ru = ne ? Symbol.for("react.portal") : 60106, Gl = ne ? Symbol.for("react.fragment") : 60107, $l = ne ? Symbol.for("react.strict_mode") : 60108, Vl = ne ? Symbol.for("react.profiler") : 60114, Wl = ne ? Symbol.for("react.provider") : 60109, Ql = ne ? Symbol.for("react.context") : 60110, Ou = ne ? Symbol.for("react.async_mode") : 60111, Xl = ne ? Symbol.for("react.concurrent_mode") : 60111, Zl = ne ? Symbol.for("react.forward_ref") : 60112, Yl = ne ? Symbol.for("react.suspense") : 60113, jm = ne ? Symbol.for("react.suspense_list") : 60120, Kl = ne ? Symbol.for("react.memo") : 60115, Jl = ne ? Symbol.for("react.lazy") : 60116, Gm = ne ? Symbol.for("react.block") : 60121, $m = ne ? Symbol.for("react.fundamental") : 60117, Vm = ne ? Symbol.for("react.responder") : 60118, Wm = ne ? Symbol.for("react.scope") : 60119;
function Le(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Lu:
        switch (e = e.type, e) {
          case Ou:
          case Xl:
          case Gl:
          case Vl:
          case $l:
          case Yl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ql:
              case Zl:
              case Jl:
              case Kl:
              case Wl:
                return e;
              default:
                return t;
            }
        }
      case Ru:
        return t;
    }
  }
}
function Wc(e) {
  return Le(e) === Xl;
}
F.AsyncMode = Ou;
F.ConcurrentMode = Xl;
F.ContextConsumer = Ql;
F.ContextProvider = Wl;
F.Element = Lu;
F.ForwardRef = Zl;
F.Fragment = Gl;
F.Lazy = Jl;
F.Memo = Kl;
F.Portal = Ru;
F.Profiler = Vl;
F.StrictMode = $l;
F.Suspense = Yl;
F.isAsyncMode = function(e) {
  return Wc(e) || Le(e) === Ou;
};
F.isConcurrentMode = Wc;
F.isContextConsumer = function(e) {
  return Le(e) === Ql;
};
F.isContextProvider = function(e) {
  return Le(e) === Wl;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lu;
};
F.isForwardRef = function(e) {
  return Le(e) === Zl;
};
F.isFragment = function(e) {
  return Le(e) === Gl;
};
F.isLazy = function(e) {
  return Le(e) === Jl;
};
F.isMemo = function(e) {
  return Le(e) === Kl;
};
F.isPortal = function(e) {
  return Le(e) === Ru;
};
F.isProfiler = function(e) {
  return Le(e) === Vl;
};
F.isStrictMode = function(e) {
  return Le(e) === $l;
};
F.isSuspense = function(e) {
  return Le(e) === Yl;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Gl || e === Xl || e === Vl || e === $l || e === Yl || e === jm || typeof e == "object" && e !== null && (e.$$typeof === Jl || e.$$typeof === Kl || e.$$typeof === Wl || e.$$typeof === Ql || e.$$typeof === Zl || e.$$typeof === $m || e.$$typeof === Vm || e.$$typeof === Wm || e.$$typeof === Gm);
};
F.typeOf = Le;
Vc.exports = F;
var Qm = Vc.exports, Qc = Qm, Xm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xc = {};
Xc[Qc.ForwardRef] = Xm;
Xc[Qc.Memo] = Zm;
var Mu = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = le.createContext(null)) : le.createContext(null);
Mu.Consumer;
var Ym = Mu.Provider, Km = Ym, Jm = Mu;
function Zc() {
  var e = le.useContext(Jm);
  return Gc(e), e;
}
var Oo;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Oo || (Oo = {}));
var Mo;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Mo || (Mo = {}));
function Yc(e) {
  var t = function(n) {
    var r = Zc(), l = n.value, i = n.children, o = zl(n, ["value", "children"]), u = typeof l == "string" ? new Date(l || 0) : l, a = e === "formatDate" ? r.formatDateToParts(u, o) : r.formatTimeToParts(u, o);
    return i(a);
  };
  return t.displayName = Mo[e], t;
}
function Er(e) {
  var t = function(n) {
    var r = Zc(), l = n.value, i = n.children, o = zl(
      n,
      ["value", "children"]
    ), u = r[e](l, o);
    if (typeof i == "function")
      return i(u);
    var a = r.textComponent || le.Fragment;
    return le.createElement(a, null, u);
  };
  return t.displayName = Oo[e], t;
}
function Kc(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Ac(r) ? Um(r) : r, t;
  }, {});
}
var ns = function(e, t, n, r) {
  for (var l = [], i = 4; i < arguments.length; i++)
    l[i - 4] = arguments[i];
  var o = Kc(r), u = Ro.apply(void 0, me([
    e,
    t,
    n,
    o
  ], l, !1));
  return Array.isArray(u) ? le.Children.toArray(u) : u;
}, rs = function(e, t) {
  var n = e.defaultRichTextElements, r = zl(e, ["defaultRichTextElements"]), l = Kc(n), i = Bm(k(k(k({}, $c), r), { defaultRichTextElements: l }), t), o = {
    locale: i.locale,
    timeZone: i.timeZone,
    fallbackOnEmptyString: i.fallbackOnEmptyString,
    formats: i.formats,
    defaultLocale: i.defaultLocale,
    defaultFormats: i.defaultFormats,
    messages: i.messages,
    onError: i.onError,
    defaultRichTextElements: l
  };
  return k(k({}, i), {
    formatMessage: ns.bind(
      null,
      o,
      // @ts-expect-error fix this
      i.formatters
    ),
    // @ts-expect-error fix this
    $t: ns.bind(null, o, i.formatters)
  });
};
function Li(e) {
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
var bm = (
  /** @class */
  function(e) {
    Fe(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Bc(), n.state = {
        cache: n.cache,
        intl: rs(Li(n.props), n.cache),
        prevConfig: Li(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var l = r.prevConfig, i = r.cache, o = Li(n);
      return zm(l, o) ? null : {
        intl: rs(o, i),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return Gc(this.state.intl), le.createElement(Km, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = $c, t;
  }(le.PureComponent)
);
Er("formatDate");
Er("formatTime");
Er("formatNumber");
Er("formatList");
Er("formatDisplayName");
Yc("formatDate");
Yc("formatTime");
function qm() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const l = t[r].trim();
    if (l.startsWith(e + "="))
      return l.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function e0(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const l = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": qm()
        // ARCHITECTURAL: CSRF protection
      },
      body: JSON.stringify(n)
    });
    if (!l.ok)
      throw new Error(`HTTP ${l.status}: ${l.statusText}`);
    return await l.json();
  } catch (l) {
    return console.error(`XBlock handler error (${t}):`, l), {
      success: !1,
      error: l instanceof Error ? l.message : "Unknown error occurred"
    };
  }
}
const t0 = ({
  displayName: e,
  title: t,
  tabs: n,
  currentTabIndex: r,
  runtime: l
}) => {
  const [i, o] = le.useState(r || 0), [u, a] = le.useState(!1), s = le.useRef([]);
  le.useEffect(() => {
    i >= n.length && o(0);
  }, [i, n.length]);
  const d = async (v) => {
    v === i || u || (a(!0), setTimeout(() => {
      o(v), e0(l, "set_current_tab", {
        tab_index: v
      }).catch((g) => {
        console.error("Failed to save tab state:", g);
      }), setTimeout(() => {
        a(!1);
      }, 50);
    }, 150));
  }, m = (v, g) => {
    var P, c, f, h;
    let y = g;
    switch (v.key) {
      case "ArrowLeft":
        v.preventDefault(), y = g > 0 ? g - 1 : n.length - 1, (P = s.current[y]) == null || P.focus();
        break;
      case "ArrowRight":
        v.preventDefault(), y = g < n.length - 1 ? g + 1 : 0, (c = s.current[y]) == null || c.focus();
        break;
      case "Home":
        v.preventDefault(), y = 0, (f = s.current[y]) == null || f.focus();
        break;
      case "End":
        v.preventDefault(), y = n.length - 1, (h = s.current[y]) == null || h.focus();
        break;
      case "Enter":
      case " ":
        v.preventDefault(), d(g);
        break;
    }
  }, p = n[i] || n[0];
  return /* @__PURE__ */ je.jsxs("div", { className: "tabs-student-view", children: [
    t && /* @__PURE__ */ je.jsx("h3", { className: "tabs-main-title", children: t }),
    /* @__PURE__ */ je.jsxs("div", { className: "tabs-wrapper", children: [
      /* @__PURE__ */ je.jsx(
        "div",
        {
          className: "tabs-tab-bar",
          role: "tablist",
          "aria-label": e,
          children: n.map((v, g) => /* @__PURE__ */ je.jsx(
            "button",
            {
              ref: (y) => s.current[g] = y,
              role: "tab",
              "aria-selected": g === i,
              "aria-controls": `tab-panel-${g}`,
              id: `tab-${g}`,
              tabIndex: g === i ? 0 : -1,
              className: `tabs-tab-button ${g === i ? "active" : ""}`,
              onClick: () => d(g),
              onKeyDown: (y) => m(y, g),
              children: /* @__PURE__ */ je.jsx("h4", { className: "tabs-tab-label", children: v.label })
            },
            g
          ))
        }
      ),
      /* @__PURE__ */ je.jsx(
        "div",
        {
          role: "tabpanel",
          id: `tab-panel-${i}`,
          "aria-labelledby": `tab-${i}`,
          className: `tabs-content-area ${u ? "" : "fade-in"}`,
          children: /* @__PURE__ */ je.jsx(
            "div",
            {
              className: "tabs-content-html",
              dangerouslySetInnerHTML: { __html: p.content }
            }
          )
        }
      )
    ] })
  ] });
}, n0 = (e, t, n) => {
  gc(e).render(
    /* @__PURE__ */ je.jsxs(le.StrictMode, { children: [
      /* @__PURE__ */ je.jsx(bm, { locale: "en", children: /* @__PURE__ */ je.jsx(
        t0,
        {
          displayName: t.displayName,
          title: t.title,
          tabs: t.tabs,
          currentTabIndex: t.currentTabIndex,
          runtime: n
        }
      ) }),
      "    "
    ] })
  );
};
export {
  n0 as renderBlock
};
//# sourceMappingURL=student-ui.js.map
