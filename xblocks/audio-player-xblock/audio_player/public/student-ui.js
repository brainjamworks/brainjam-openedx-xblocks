function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ys = { exports: {} }, Ll = {}, gs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), Ed = Symbol.for("react.portal"), Sd = Symbol.for("react.fragment"), wd = Symbol.for("react.strict_mode"), xd = Symbol.for("react.profiler"), Td = Symbol.for("react.provider"), _d = Symbol.for("react.context"), Pd = Symbol.for("react.forward_ref"), kd = Symbol.for("react.suspense"), Cd = Symbol.for("react.memo"), Nd = Symbol.for("react.lazy"), Qu = Symbol.iterator;
function Od(e) {
  return e === null || typeof e != "object" ? null : (e = Qu && e[Qu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Es = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ss = Object.assign, ws = {};
function Cn(e, t, n) {
  this.props = e, this.context = t, this.refs = ws, this.updater = n || Es;
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xs() {
}
xs.prototype = Cn.prototype;
function $o(e, t, n) {
  this.props = e, this.context = t, this.refs = ws, this.updater = n || Es;
}
var Wo = $o.prototype = new xs();
Wo.constructor = $o;
Ss(Wo, Cn.prototype);
Wo.isPureReactComponent = !0;
var Xu = Array.isArray, Ts = Object.prototype.hasOwnProperty, Qo = { current: null }, _s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ts.call(t, r) && !_s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: gr, type: e, key: i, ref: o, props: l, _owner: Qo.current };
}
function Id(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function Ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bu = /\/+/g;
function ai(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ld("" + e.key) : t.toString(36);
}
function Qr(e, t, n, r, l) {
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
        case gr:
        case Ed:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + ai(o, 0) : r, Xu(l) ? (n = "", e != null && (n = e.replace(bu, "$&/") + "/"), Qr(l, t, n, "", function(s) {
    return s;
  })) : l != null && (Xo(l) && (l = Id(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(bu, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Xu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + ai(i, u);
    o += Qr(i, t, n, a, l);
  }
  else if (a = Od(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + ai(i, u++), o += Qr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Cr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Qr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Rd(e) {
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
var ge = { current: null }, Xr = { transition: null }, Md = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: Xr, ReactCurrentOwner: Qo };
function ks() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: Cr, forEach: function(e, t, n) {
  Cr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Cr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Cr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = Cn;
L.Fragment = Sd;
L.Profiler = xd;
L.PureComponent = $o;
L.StrictMode = wd;
L.Suspense = kd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
L.act = ks;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ss({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Qo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) Ts.call(t, a) && !_s.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: _d, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Td, _context: e }, e.Consumer = e;
};
L.createElement = Ps;
L.createFactory = function(e) {
  var t = Ps.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Pd, render: e };
};
L.isValidElement = Xo;
L.lazy = function(e) {
  return { $$typeof: Nd, _payload: { _status: -1, _result: e }, _init: Rd };
};
L.memo = function(e, t) {
  return { $$typeof: Cd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Xr.transition;
  Xr.transition = {};
  try {
    e();
  } finally {
    Xr.transition = t;
  }
};
L.unstable_act = ks;
L.useCallback = function(e, t) {
  return ge.current.useCallback(e, t);
};
L.useContext = function(e) {
  return ge.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ge.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return ge.current.useEffect(e, t);
};
L.useId = function() {
  return ge.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return ge.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return ge.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return ge.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return ge.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return ge.current.useRef(e);
};
L.useState = function(e) {
  return ge.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return ge.current.useTransition();
};
L.version = "18.3.1";
gs.exports = L;
var fe = gs.exports;
const tt = /* @__PURE__ */ Vo(fe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = fe, Hd = Symbol.for("react.element"), Dd = Symbol.for("react.fragment"), Fd = Object.prototype.hasOwnProperty, Bd = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Fd.call(t, r) && !Ud.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Hd, type: e, key: i, ref: o, props: l, _owner: Bd.current };
}
Ll.Fragment = Dd;
Ll.jsx = Cs;
Ll.jsxs = Cs;
ys.exports = Ll;
var ee = ys.exports, Ns = { exports: {} }, Ie = {}, Os = { exports: {} }, Is = {};
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
  function t(T, O) {
    var I = T.length;
    T.push(O);
    e: for (; 0 < I; ) {
      var b = I - 1 >>> 1, q = T[b];
      if (0 < l(q, O)) T[b] = O, T[I] = q, I = b;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], I = T.pop();
    if (I !== O) {
      T[0] = I;
      e: for (var b = 0, q = T.length, Pr = q >>> 1; b < Pr; ) {
        var Mt = 2 * (b + 1) - 1, ui = T[Mt], At = Mt + 1, kr = T[At];
        if (0 > l(ui, I)) At < q && 0 > l(kr, ui) ? (T[b] = kr, T[At] = I, b = At) : (T[b] = ui, T[Mt] = I, b = Mt);
        else if (At < q && 0 > l(kr, I)) T[b] = kr, T[At] = I, b = At;
        else break e;
      }
    }
    return O;
  }
  function l(T, O) {
    var I = T.sortIndex - O.sortIndex;
    return I !== 0 ? I : T.id - O.id;
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
  var a = [], s = [], c = 1, m = null, h = 3, v = !1, S = !1, g = !1, N = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var O = n(s); O !== null; ) {
      if (O.callback === null) r(s);
      else if (O.startTime <= T) r(s), O.sortIndex = O.expirationTime, t(a, O);
      else break;
      O = n(s);
    }
  }
  function y(T) {
    if (g = !1, p(T), !S) if (n(a) !== null) S = !0, ii(w);
    else {
      var O = n(s);
      O !== null && oi(y, O.startTime - T);
    }
  }
  function w(T, O) {
    S = !1, g && (g = !1, d(C), C = -1), v = !0;
    var I = h;
    try {
      for (p(O), m = n(a); m !== null && (!(m.expirationTime > O) || T && !je()); ) {
        var b = m.callback;
        if (typeof b == "function") {
          m.callback = null, h = m.priorityLevel;
          var q = b(m.expirationTime <= O);
          O = e.unstable_now(), typeof q == "function" ? m.callback = q : m === n(a) && r(a), p(O);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Pr = !0;
      else {
        var Mt = n(s);
        Mt !== null && oi(y, Mt.startTime - O), Pr = !1;
      }
      return Pr;
    } finally {
      m = null, h = I, v = !1;
    }
  }
  var _ = !1, k = null, C = -1, X = 5, R = -1;
  function je() {
    return !(e.unstable_now() - R < X);
  }
  function In() {
    if (k !== null) {
      var T = e.unstable_now();
      R = T;
      var O = !0;
      try {
        O = k(!0, T);
      } finally {
        O ? Ln() : (_ = !1, k = null);
      }
    } else _ = !1;
  }
  var Ln;
  if (typeof f == "function") Ln = function() {
    f(In);
  };
  else if (typeof MessageChannel < "u") {
    var Wu = new MessageChannel(), gd = Wu.port2;
    Wu.port1.onmessage = In, Ln = function() {
      gd.postMessage(null);
    };
  } else Ln = function() {
    N(In, 0);
  };
  function ii(T) {
    k = T, _ || (_ = !0, Ln());
  }
  function oi(T, O) {
    C = N(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, ii(w));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = h;
    }
    var I = h;
    h = O;
    try {
      return T();
    } finally {
      h = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
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
    var I = h;
    h = T;
    try {
      return O();
    } finally {
      h = I;
    }
  }, e.unstable_scheduleCallback = function(T, O, I) {
    var b = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? b + I : b) : I = b, T) {
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
    return q = I + q, T = { id: c++, callback: O, priorityLevel: T, startTime: I, expirationTime: q, sortIndex: -1 }, I > b ? (T.sortIndex = I, t(s, T), n(a) === null && T === n(s) && (g ? (d(C), C = -1) : g = !0, oi(y, I - b))) : (T.sortIndex = q, t(a, T), S || v || (S = !0, ii(w))), T;
  }, e.unstable_shouldYield = je, e.unstable_wrapCallback = function(T) {
    var O = h;
    return function() {
      var I = h;
      h = O;
      try {
        return T.apply(this, arguments);
      } finally {
        h = I;
      }
    };
  };
})(Is);
Os.exports = Is;
var zd = Os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd = fe, Oe = zd;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ls = /* @__PURE__ */ new Set(), er = {};
function Zt(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for (er[e] = t, e = 0; e < t.length; e++) Ls.add(t[e]);
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bi = Object.prototype.hasOwnProperty, Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zu = {}, Yu = {};
function Vd(e) {
  return Bi.call(Yu, e) ? !0 : Bi.call(Zu, e) ? !1 : Gd.test(e) ? Yu[e] = !0 : (Zu[e] = !0, !1);
}
function $d(e, t, n, r) {
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
function Wd(e, t, n, r) {
  if (t === null || typeof t > "u" || $d(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  oe[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  oe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  oe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  oe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  oe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  oe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  oe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  oe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  oe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function Zo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bo,
    Zo
  );
  oe[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bo, Zo);
  oe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bo, Zo);
  oe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wd(t, n, l, r) && (n = null), r || l === null ? Vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ct = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nr = Symbol.for("react.element"), qt = Symbol.for("react.portal"), en = Symbol.for("react.fragment"), Ko = Symbol.for("react.strict_mode"), Ui = Symbol.for("react.profiler"), Rs = Symbol.for("react.provider"), Ms = Symbol.for("react.context"), Jo = Symbol.for("react.forward_ref"), zi = Symbol.for("react.suspense"), ji = Symbol.for("react.suspense_list"), qo = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), As = Symbol.for("react.offscreen"), Ku = Symbol.iterator;
function Rn(e) {
  return e === null || typeof e != "object" ? null : (e = Ku && e[Ku] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, si;
function zn(e) {
  if (si === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    si = t && t[1] || "";
  }
  return `
` + si + e;
}
var fi = !1;
function ci(e, t) {
  if (!e || fi) return "";
  fi = !0;
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
    fi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Qd(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ci(e.type, !1), e;
    case 11:
      return e = ci(e.type.render, !1), e;
    case 1:
      return e = ci(e.type, !0), e;
    default:
      return "";
  }
}
function Gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case en:
      return "Fragment";
    case qt:
      return "Portal";
    case Ui:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case zi:
      return "Suspense";
    case ji:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ms:
      return (e.displayName || "Context") + ".Consumer";
    case Rs:
      return (e._context.displayName || "Context") + ".Provider";
    case Jo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case qo:
      return t = e.displayName || null, t !== null ? t : Gi(e.type) || "Memo";
    case pt:
      t = e._payload, e = e._init;
      try {
        return Gi(e(t));
      } catch {
      }
  }
  return null;
}
function Xd(e) {
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
      return Gi(t);
    case 8:
      return t === Ko ? "StrictMode" : "Mode";
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
function Ct(e) {
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
function Hs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function bd(e) {
  var t = Hs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Or(e) {
  e._valueTracker || (e._valueTracker = bd(e));
}
function Ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Hs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function il(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vi(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ju(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ct(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Fs(e, t) {
  t = t.checked, t != null && Yo(e, "checked", t, !1);
}
function $i(e, t) {
  Fs(e, t);
  var n = Ct(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Wi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wi(e, t.type, Ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Wi(e, t, n) {
  (t !== "number" || il(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function Bs(e, t) {
  var n = Ct(t.value), r = Ct(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Us(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Us(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ir, zs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wn = {
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
}, Zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function(e) {
  Zd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Wn[t] = Wn[e];
  });
});
function js(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px";
}
function Gs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = js(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Yd = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function bi(e, t) {
  if (t) {
    if (Yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Zi(e, t) {
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
var Yi = null;
function eu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ki = null, pn = null, hn = null;
function na(e) {
  if (e = wr(e)) {
    if (typeof Ki != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Dl(t), Ki(e.stateNode, e.type, t));
  }
}
function Vs(e) {
  pn ? hn ? hn.push(e) : hn = [e] : pn = e;
}
function $s() {
  if (pn) {
    var e = pn, t = hn;
    if (hn = pn = null, na(e), t) for (e = 0; e < t.length; e++) na(t[e]);
  }
}
function Ws(e, t) {
  return e(t);
}
function Qs() {
}
var di = !1;
function Xs(e, t, n) {
  if (di) return e(t, n);
  di = !0;
  try {
    return Ws(e, t, n);
  } finally {
    di = !1, (pn !== null || hn !== null) && (Qs(), $s());
  }
}
function nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
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
var Ji = !1;
if (ut) try {
  var Mn = {};
  Object.defineProperty(Mn, "passive", { get: function() {
    Ji = !0;
  } }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
} catch {
  Ji = !1;
}
function Kd(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Qn = !1, ol = null, ul = !1, qi = null, Jd = { onError: function(e) {
  Qn = !0, ol = e;
} };
function qd(e, t, n, r, l, i, o, u, a) {
  Qn = !1, ol = null, Kd.apply(Jd, arguments);
}
function ep(e, t, n, r, l, i, o, u, a) {
  if (qd.apply(this, arguments), Qn) {
    if (Qn) {
      var s = ol;
      Qn = !1, ol = null;
    } else throw Error(E(198));
    ul || (ul = !0, qi = s);
  }
}
function Yt(e) {
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
function bs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ra(e) {
  if (Yt(e) !== e) throw Error(E(188));
}
function tp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yt(e), t === null) throw Error(E(188));
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
        if (i === n) return ra(l), e;
        if (i === r) return ra(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
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
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Zs(e) {
  return e = tp(e), e !== null ? Ys(e) : null;
}
function Ys(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ys(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ks = Oe.unstable_scheduleCallback, la = Oe.unstable_cancelCallback, np = Oe.unstable_shouldYield, rp = Oe.unstable_requestPaint, Z = Oe.unstable_now, lp = Oe.unstable_getCurrentPriorityLevel, tu = Oe.unstable_ImmediatePriority, Js = Oe.unstable_UserBlockingPriority, al = Oe.unstable_NormalPriority, ip = Oe.unstable_LowPriority, qs = Oe.unstable_IdlePriority, Rl = null, Je = null;
function op(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : sp, up = Math.log, ap = Math.LN2;
function sp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (up(e) / ap | 0) | 0;
}
var Lr = 64, Rr = 4194304;
function Gn(e) {
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
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Gn(u) : (i &= o, i !== 0 && (r = Gn(i)));
  } else o = n & ~l, o !== 0 ? r = Gn(o) : i !== 0 && (r = Gn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function fp(e, t) {
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
function cp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Qe(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = fp(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function eo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ef() {
  var e = Lr;
  return Lr <<= 1, !(Lr & 4194240) && (Lr = 64), e;
}
function pi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function dp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function nu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function tf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var nf, ru, rf, lf, of, to = !1, Mr = [], Et = null, St = null, wt = null, rr = /* @__PURE__ */ new Map(), lr = /* @__PURE__ */ new Map(), mt = [], pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ia(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function An(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = wr(t), t !== null && ru(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Et = An(Et, e, t, n, r, l), !0;
    case "dragenter":
      return St = An(St, e, t, n, r, l), !0;
    case "mouseover":
      return wt = An(wt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return rr.set(i, An(rr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, lr.set(i, An(lr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function uf(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = bs(n), t !== null) {
          e.blockedOn = t, of(e.priority, function() {
            rf(n);
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
function br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = no(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Yi = r, n.target.dispatchEvent(r), Yi = null;
    } else return t = wr(n), t !== null && ru(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function oa(e, t, n) {
  br(e) && n.delete(t);
}
function mp() {
  to = !1, Et !== null && br(Et) && (Et = null), St !== null && br(St) && (St = null), wt !== null && br(wt) && (wt = null), rr.forEach(oa), lr.forEach(oa);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, to || (to = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, mp)));
}
function ir(e) {
  function t(l) {
    return Hn(l, e);
  }
  if (0 < Mr.length) {
    Hn(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Et !== null && Hn(Et, e), St !== null && Hn(St, e), wt !== null && Hn(wt, e), rr.forEach(t), lr.forEach(t), n = 0; n < mt.length; n++) r = mt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mt.length && (n = mt[0], n.blockedOn === null); ) uf(n), n.blockedOn === null && mt.shift();
}
var mn = ct.ReactCurrentBatchConfig, fl = !0;
function vp(e, t, n, r) {
  var l = D, i = mn.transition;
  mn.transition = null;
  try {
    D = 1, lu(e, t, n, r);
  } finally {
    D = l, mn.transition = i;
  }
}
function yp(e, t, n, r) {
  var l = D, i = mn.transition;
  mn.transition = null;
  try {
    D = 4, lu(e, t, n, r);
  } finally {
    D = l, mn.transition = i;
  }
}
function lu(e, t, n, r) {
  if (fl) {
    var l = no(e, t, n, r);
    if (l === null) Ti(e, t, r, cl, n), ia(e, r);
    else if (hp(l, e, t, n, r)) r.stopPropagation();
    else if (ia(e, r), t & 4 && -1 < pp.indexOf(e)) {
      for (; l !== null; ) {
        var i = wr(l);
        if (i !== null && nf(i), i = no(e, t, n, r), i === null && Ti(e, t, r, cl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ti(e, t, r, null, n);
  }
}
var cl = null;
function no(e, t, n, r) {
  if (cl = null, e = eu(r), e = Bt(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = bs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return cl = e, null;
}
function af(e) {
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
      switch (lp()) {
        case tu:
          return 1;
        case Js:
          return 4;
        case al:
        case ip:
          return 16;
        case qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, iu = null, Zr = null;
function sf() {
  if (Zr) return Zr;
  var e, t = iu, n = t.length, r, l = "value" in yt ? yt.value : yt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Yr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ar() {
  return !0;
}
function ua() {
  return !1;
}
function Le(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ar : ua, this.isPropagationStopped = ua, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ar);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ar);
  }, persist: function() {
  }, isPersistent: Ar }), t;
}
var Nn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ou = Le(Nn), Sr = W({}, Nn, { view: 0, detail: 0 }), gp = Le(Sr), hi, mi, Dn, Ml = W({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (hi = e.screenX - Dn.screenX, mi = e.screenY - Dn.screenY) : mi = hi = 0, Dn = e), hi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : mi;
} }), aa = Le(Ml), Ep = W({}, Ml, { dataTransfer: 0 }), Sp = Le(Ep), wp = W({}, Sr, { relatedTarget: 0 }), vi = Le(wp), xp = W({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tp = Le(xp), _p = W({}, Nn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pp = Le(_p), kp = W({}, Nn, { data: 0 }), sa = Le(kp), Cp = {
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
}, Np = {
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
}, Op = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ip(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Op[e]) ? !!t[e] : !1;
}
function uu() {
  return Ip;
}
var Lp = W({}, Sr, { key: function(e) {
  if (e.key) {
    var t = Cp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Yr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Np[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uu, charCode: function(e) {
  return e.type === "keypress" ? Yr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Yr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rp = Le(Lp), Mp = W({}, Ml, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fa = Le(Mp), Ap = W({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uu }), Hp = Le(Ap), Dp = W({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = Le(Dp), Bp = W({}, Ml, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Up = Le(Bp), zp = [9, 13, 27, 32], au = ut && "CompositionEvent" in window, Xn = null;
ut && "documentMode" in document && (Xn = document.documentMode);
var jp = ut && "TextEvent" in window && !Xn, ff = ut && (!au || Xn && 8 < Xn && 11 >= Xn), ca = " ", da = !1;
function cf(e, t) {
  switch (e) {
    case "keyup":
      return zp.indexOf(t.keyCode) !== -1;
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
function df(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var tn = !1;
function Gp(e, t) {
  switch (e) {
    case "compositionend":
      return df(t);
    case "keypress":
      return t.which !== 32 ? null : (da = !0, ca);
    case "textInput":
      return e = t.data, e === ca && da ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (tn) return e === "compositionend" || !au && cf(e, t) ? (e = sf(), Zr = iu = yt = null, tn = !1, e) : null;
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
      return ff && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $p = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$p[e.type] : t === "textarea";
}
function pf(e, t, n, r) {
  Vs(r), t = dl(t, "onChange"), 0 < t.length && (n = new ou("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bn = null, or = null;
function Wp(e) {
  _f(e, 0);
}
function Al(e) {
  var t = ln(e);
  if (Ds(t)) return e;
}
function Qp(e, t) {
  if (e === "change") return t;
}
var hf = !1;
if (ut) {
  var yi;
  if (ut) {
    var gi = "oninput" in document;
    if (!gi) {
      var ha = document.createElement("div");
      ha.setAttribute("oninput", "return;"), gi = typeof ha.oninput == "function";
    }
    yi = gi;
  } else yi = !1;
  hf = yi && (!document.documentMode || 9 < document.documentMode);
}
function ma() {
  bn && (bn.detachEvent("onpropertychange", mf), or = bn = null);
}
function mf(e) {
  if (e.propertyName === "value" && Al(or)) {
    var t = [];
    pf(t, or, e, eu(e)), Xs(Wp, t);
  }
}
function Xp(e, t, n) {
  e === "focusin" ? (ma(), bn = t, or = n, bn.attachEvent("onpropertychange", mf)) : e === "focusout" && ma();
}
function bp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Al(or);
}
function Zp(e, t) {
  if (e === "click") return Al(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function Kp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var be = typeof Object.is == "function" ? Object.is : Kp;
function ur(e, t) {
  if (be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Bi.call(t, l) || !be(e[l], t[l])) return !1;
  }
  return !0;
}
function va(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ya(e, t) {
  var n = va(e);
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
    n = va(n);
  }
}
function vf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yf() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jp(e) {
  var t = yf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vf(n.ownerDocument.documentElement, n)) {
    if (r !== null && su(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ya(n, i);
        var o = ya(
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
var qp = ut && "documentMode" in document && 11 >= document.documentMode, nn = null, ro = null, Zn = null, lo = !1;
function ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lo || nn == null || nn !== il(r) || (r = nn, "selectionStart" in r && su(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zn && ur(Zn, r) || (Zn = r, r = dl(ro, "onSelect"), 0 < r.length && (t = new ou("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = nn)));
}
function Hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var rn = { animationend: Hr("Animation", "AnimationEnd"), animationiteration: Hr("Animation", "AnimationIteration"), animationstart: Hr("Animation", "AnimationStart"), transitionend: Hr("Transition", "TransitionEnd") }, Ei = {}, gf = {};
ut && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete rn.animationend.animation, delete rn.animationiteration.animation, delete rn.animationstart.animation), "TransitionEvent" in window || delete rn.transitionend.transition);
function Hl(e) {
  if (Ei[e]) return Ei[e];
  if (!rn[e]) return e;
  var t = rn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in gf) return Ei[e] = t[n];
  return e;
}
var Ef = Hl("animationend"), Sf = Hl("animationiteration"), wf = Hl("animationstart"), xf = Hl("transitionend"), Tf = /* @__PURE__ */ new Map(), Ea = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ot(e, t) {
  Tf.set(e, t), Zt(t, [e]);
}
for (var Si = 0; Si < Ea.length; Si++) {
  var wi = Ea[Si], eh = wi.toLowerCase(), th = wi[0].toUpperCase() + wi.slice(1);
  Ot(eh, "on" + th);
}
Ot(Ef, "onAnimationEnd");
Ot(Sf, "onAnimationIteration");
Ot(wf, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(xf, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function Sa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ep(r, t, void 0, e), e.currentTarget = null;
}
function _f(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Sa(l, u, s), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Sa(l, u, s), i = a;
      }
    }
  }
  if (ul) throw e = qi, ul = !1, qi = null, e;
}
function U(e, t) {
  var n = t[so];
  n === void 0 && (n = t[so] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Pf(t, e, 2, !1), n.add(r));
}
function xi(e, t, n) {
  var r = 0;
  t && (r |= 4), Pf(n, e, r, t);
}
var Dr = "_reactListening" + Math.random().toString(36).slice(2);
function ar(e) {
  if (!e[Dr]) {
    e[Dr] = !0, Ls.forEach(function(n) {
      n !== "selectionchange" && (nh.has(n) || xi(n, !1, e), xi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Dr] || (t[Dr] = !0, xi("selectionchange", !1, t));
  }
}
function Pf(e, t, n, r) {
  switch (af(t)) {
    case 1:
      var l = vp;
      break;
    case 4:
      l = yp;
      break;
    default:
      l = lu;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ti(e, t, n, r, l) {
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
        if (o = Bt(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Xs(function() {
    var s = i, c = eu(n), m = [];
    e: {
      var h = Tf.get(e);
      if (h !== void 0) {
        var v = ou, S = e;
        switch (e) {
          case "keypress":
            if (Yr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Rp;
            break;
          case "focusin":
            S = "focus", v = vi;
            break;
          case "focusout":
            S = "blur", v = vi;
            break;
          case "beforeblur":
          case "afterblur":
            v = vi;
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
            v = aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hp;
            break;
          case Ef:
          case Sf:
          case wf:
            v = Tp;
            break;
          case xf:
            v = Fp;
            break;
          case "scroll":
            v = gp;
            break;
          case "wheel":
            v = Up;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Pp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = fa;
        }
        var g = (t & 4) !== 0, N = !g && e === "scroll", d = g ? h !== null ? h + "Capture" : null : h;
        g = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, d !== null && (y = nr(f, d), y != null && g.push(sr(f, y, p)))), N) break;
          f = f.return;
        }
        0 < g.length && (h = new v(h, S, null, n, c), m.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== Yi && (S = n.relatedTarget || n.fromElement) && (Bt(S) || S[at])) break e;
        if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = s, S = S ? Bt(S) : null, S !== null && (N = Yt(S), S !== N || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = s), v !== S)) {
          if (g = aa, y = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = fa, y = "onPointerLeave", d = "onPointerEnter", f = "pointer"), N = v == null ? h : ln(v), p = S == null ? h : ln(S), h = new g(y, f + "leave", v, n, c), h.target = N, h.relatedTarget = p, y = null, Bt(c) === s && (g = new g(d, f + "enter", S, n, c), g.target = p, g.relatedTarget = N, y = g), N = y, v && S) t: {
            for (g = v, d = S, f = 0, p = g; p; p = Jt(p)) f++;
            for (p = 0, y = d; y; y = Jt(y)) p++;
            for (; 0 < f - p; ) g = Jt(g), f--;
            for (; 0 < p - f; ) d = Jt(d), p--;
            for (; f--; ) {
              if (g === d || d !== null && g === d.alternate) break t;
              g = Jt(g), d = Jt(d);
            }
            g = null;
          }
          else g = null;
          v !== null && wa(m, h, v, g, !1), S !== null && N !== null && wa(m, N, S, g, !0);
        }
      }
      e: {
        if (h = s ? ln(s) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var w = Qp;
        else if (pa(h)) if (hf) w = Yp;
        else {
          w = bp;
          var _ = Xp;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = Zp);
        if (w && (w = w(e, s))) {
          pf(m, w, n, c);
          break e;
        }
        _ && _(e, h, s), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && Wi(h, "number", h.value);
      }
      switch (_ = s ? ln(s) : window, e) {
        case "focusin":
          (pa(_) || _.contentEditable === "true") && (nn = _, ro = s, Zn = null);
          break;
        case "focusout":
          Zn = ro = nn = null;
          break;
        case "mousedown":
          lo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          lo = !1, ga(m, n, c);
          break;
        case "selectionchange":
          if (qp) break;
        case "keydown":
        case "keyup":
          ga(m, n, c);
      }
      var k;
      if (au) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else tn ? cf(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (ff && n.locale !== "ko" && (tn || C !== "onCompositionStart" ? C === "onCompositionEnd" && tn && (k = sf()) : (yt = c, iu = "value" in yt ? yt.value : yt.textContent, tn = !0)), _ = dl(s, C), 0 < _.length && (C = new sa(C, e, null, n, c), m.push({ event: C, listeners: _ }), k ? C.data = k : (k = df(n), k !== null && (C.data = k)))), (k = jp ? Gp(e, n) : Vp(e, n)) && (s = dl(s, "onBeforeInput"), 0 < s.length && (c = new sa("onBeforeInput", "beforeinput", null, n, c), m.push({ event: c, listeners: s }), c.data = k));
    }
    _f(m, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = nr(e, n), i != null && r.unshift(sr(e, i, l)), i = nr(e, t), i != null && r.push(sr(e, i, l))), e = e.return;
  }
  return r;
}
function Jt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, l ? (a = nr(n, i), a != null && o.unshift(sr(n, a, u))) : l || (a = nr(n, i), a != null && o.push(sr(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var rh = /\r\n?/g, lh = /\u0000|\uFFFD/g;
function xa(e) {
  return (typeof e == "string" ? e : "" + e).replace(rh, `
`).replace(lh, "");
}
function Fr(e, t, n) {
  if (t = xa(t), xa(e) !== t && n) throw Error(E(425));
}
function pl() {
}
var io = null, oo = null;
function uo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ao = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Ta = typeof Promise == "function" ? Promise : void 0, oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ta < "u" ? function(e) {
  return Ta.resolve(null).then(e).catch(uh);
} : ao;
function uh(e) {
  setTimeout(function() {
    throw e;
  });
}
function _i(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), ir(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  ir(t);
}
function xt(e) {
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
function _a(e) {
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
var On = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + On, fr = "__reactProps$" + On, at = "__reactContainer$" + On, so = "__reactEvents$" + On, ah = "__reactListeners$" + On, sh = "__reactHandles$" + On;
function Bt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[at] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = _a(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = _a(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function wr(e) {
  return e = e[Ke] || e[at], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Dl(e) {
  return e[fr] || null;
}
var fo = [], on = -1;
function It(e) {
  return { current: e };
}
function j(e) {
  0 > on || (e.current = fo[on], fo[on] = null, on--);
}
function B(e, t) {
  on++, fo[on] = e.current, e.current = t;
}
var Nt = {}, ce = It(Nt), xe = It(!1), Vt = Nt;
function En(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function hl() {
  j(xe), j(ce);
}
function Pa(e, t, n) {
  if (ce.current !== Nt) throw Error(E(168));
  B(ce, t), B(xe, n);
}
function kf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Xd(e) || "Unknown", l));
  return W({}, n, r);
}
function ml(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, Vt = ce.current, B(ce, e), B(xe, xe.current), !0;
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = kf(e, t, Vt), r.__reactInternalMemoizedMergedChildContext = e, j(xe), j(ce), B(ce, e)) : j(xe), B(xe, n);
}
var rt = null, Fl = !1, Pi = !1;
function Cf(e) {
  rt === null ? rt = [e] : rt.push(e);
}
function fh(e) {
  Fl = !0, Cf(e);
}
function Lt() {
  if (!Pi && rt !== null) {
    Pi = !0;
    var e = 0, t = D;
    try {
      var n = rt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      rt = null, Fl = !1;
    } catch (l) {
      throw rt !== null && (rt = rt.slice(e + 1)), Ks(tu, Lt), l;
    } finally {
      D = t, Pi = !1;
    }
  }
  return null;
}
var un = [], an = 0, vl = null, yl = 0, Me = [], Ae = 0, $t = null, lt = 1, it = "";
function Dt(e, t) {
  un[an++] = yl, un[an++] = vl, vl = e, yl = t;
}
function Nf(e, t, n) {
  Me[Ae++] = lt, Me[Ae++] = it, Me[Ae++] = $t, $t = e;
  var r = lt;
  e = it;
  var l = 32 - Qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Qe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, lt = 1 << 32 - Qe(t) + l | n << l | r, it = i + e;
  } else lt = 1 << i | n << l | r, it = e;
}
function fu(e) {
  e.return !== null && (Dt(e, 1), Nf(e, 1, 0));
}
function cu(e) {
  for (; e === vl; ) vl = un[--an], un[an] = null, yl = un[--an], un[an] = null;
  for (; e === $t; ) $t = Me[--Ae], Me[Ae] = null, it = Me[--Ae], Me[Ae] = null, lt = Me[--Ae], Me[Ae] = null;
}
var Ne = null, Ce = null, G = !1, We = null;
function Of(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ca(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ne = e, Ce = xt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ne = e, Ce = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $t !== null ? { id: lt, overflow: it } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ne = e, Ce = null, !0) : !1;
    default:
      return !1;
  }
}
function co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function po(e) {
  if (G) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Ca(e, t)) {
        if (co(e)) throw Error(E(418));
        t = xt(n.nextSibling);
        var r = Ne;
        t && Ca(e, t) ? Of(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ne = e);
      }
    } else {
      if (co(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ne = e;
    }
  }
}
function Na(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function Br(e) {
  if (e !== Ne) return !1;
  if (!G) return Na(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !uo(e.type, e.memoizedProps)), t && (t = Ce)) {
    if (co(e)) throw If(), Error(E(418));
    for (; t; ) Of(e, t), t = xt(t.nextSibling);
  }
  if (Na(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = xt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ne ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function If() {
  for (var e = Ce; e; ) e = xt(e.nextSibling);
}
function Sn() {
  Ce = Ne = null, G = !1;
}
function du(e) {
  We === null ? We = [e] : We.push(e);
}
var ch = ct.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Ur(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Oa(e) {
  var t = e._init;
  return t(e._payload);
}
function Lf(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function l(d, f) {
    return d = kt(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, p, y) {
    return f === null || f.tag !== 6 ? (f = Ri(p, d.mode, y), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function a(d, f, p, y) {
    var w = p.type;
    return w === en ? c(d, f, p.props.children, y, p.key) : f !== null && (f.elementType === w || typeof w == "object" && w !== null && w.$$typeof === pt && Oa(w) === f.type) ? (y = l(f, p.props), y.ref = Fn(d, f, p), y.return = d, y) : (y = rl(p.type, p.key, p.props, null, d.mode, y), y.ref = Fn(d, f, p), y.return = d, y);
  }
  function s(d, f, p, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Mi(p, d.mode, y), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function c(d, f, p, y, w) {
    return f === null || f.tag !== 7 ? (f = Gt(p, d.mode, y, w), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function m(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ri("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Nr:
          return p = rl(f.type, f.key, f.props, null, d.mode, p), p.ref = Fn(d, null, f), p.return = d, p;
        case qt:
          return f = Mi(f, d.mode, p), f.return = d, f;
        case pt:
          var y = f._init;
          return m(d, y(f._payload), p);
      }
      if (jn(f) || Rn(f)) return f = Gt(f, d.mode, p, null), f.return = d, f;
      Ur(d, f);
    }
    return null;
  }
  function h(d, f, p, y) {
    var w = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return w !== null ? null : u(d, f, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Nr:
          return p.key === w ? a(d, f, p, y) : null;
        case qt:
          return p.key === w ? s(d, f, p, y) : null;
        case pt:
          return w = p._init, h(
            d,
            f,
            w(p._payload),
            y
          );
      }
      if (jn(p) || Rn(p)) return w !== null ? null : c(d, f, p, y, null);
      Ur(d, p);
    }
    return null;
  }
  function v(d, f, p, y, w) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(p) || null, u(f, d, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Nr:
          return d = d.get(y.key === null ? p : y.key) || null, a(f, d, y, w);
        case qt:
          return d = d.get(y.key === null ? p : y.key) || null, s(f, d, y, w);
        case pt:
          var _ = y._init;
          return v(d, f, p, _(y._payload), w);
      }
      if (jn(y) || Rn(y)) return d = d.get(p) || null, c(f, d, y, w, null);
      Ur(f, y);
    }
    return null;
  }
  function S(d, f, p, y) {
    for (var w = null, _ = null, k = f, C = f = 0, X = null; k !== null && C < p.length; C++) {
      k.index > C ? (X = k, k = null) : X = k.sibling;
      var R = h(d, k, p[C], y);
      if (R === null) {
        k === null && (k = X);
        break;
      }
      e && k && R.alternate === null && t(d, k), f = i(R, f, C), _ === null ? w = R : _.sibling = R, _ = R, k = X;
    }
    if (C === p.length) return n(d, k), G && Dt(d, C), w;
    if (k === null) {
      for (; C < p.length; C++) k = m(d, p[C], y), k !== null && (f = i(k, f, C), _ === null ? w = k : _.sibling = k, _ = k);
      return G && Dt(d, C), w;
    }
    for (k = r(d, k); C < p.length; C++) X = v(k, d, C, p[C], y), X !== null && (e && X.alternate !== null && k.delete(X.key === null ? C : X.key), f = i(X, f, C), _ === null ? w = X : _.sibling = X, _ = X);
    return e && k.forEach(function(je) {
      return t(d, je);
    }), G && Dt(d, C), w;
  }
  function g(d, f, p, y) {
    var w = Rn(p);
    if (typeof w != "function") throw Error(E(150));
    if (p = w.call(p), p == null) throw Error(E(151));
    for (var _ = w = null, k = f, C = f = 0, X = null, R = p.next(); k !== null && !R.done; C++, R = p.next()) {
      k.index > C ? (X = k, k = null) : X = k.sibling;
      var je = h(d, k, R.value, y);
      if (je === null) {
        k === null && (k = X);
        break;
      }
      e && k && je.alternate === null && t(d, k), f = i(je, f, C), _ === null ? w = je : _.sibling = je, _ = je, k = X;
    }
    if (R.done) return n(
      d,
      k
    ), G && Dt(d, C), w;
    if (k === null) {
      for (; !R.done; C++, R = p.next()) R = m(d, R.value, y), R !== null && (f = i(R, f, C), _ === null ? w = R : _.sibling = R, _ = R);
      return G && Dt(d, C), w;
    }
    for (k = r(d, k); !R.done; C++, R = p.next()) R = v(k, d, C, R.value, y), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? C : R.key), f = i(R, f, C), _ === null ? w = R : _.sibling = R, _ = R);
    return e && k.forEach(function(In) {
      return t(d, In);
    }), G && Dt(d, C), w;
  }
  function N(d, f, p, y) {
    if (typeof p == "object" && p !== null && p.type === en && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Nr:
          e: {
            for (var w = p.key, _ = f; _ !== null; ) {
              if (_.key === w) {
                if (w = p.type, w === en) {
                  if (_.tag === 7) {
                    n(d, _.sibling), f = l(_, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (_.elementType === w || typeof w == "object" && w !== null && w.$$typeof === pt && Oa(w) === _.type) {
                  n(d, _.sibling), f = l(_, p.props), f.ref = Fn(d, _, p), f.return = d, d = f;
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            p.type === en ? (f = Gt(p.props.children, d.mode, y, p.key), f.return = d, d = f) : (y = rl(p.type, p.key, p.props, null, d.mode, y), y.ref = Fn(d, f, p), y.return = d, d = y);
          }
          return o(d);
        case qt:
          e: {
            for (_ = p.key; f !== null; ) {
              if (f.key === _) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Mi(p, d.mode, y), f.return = d, d = f;
          }
          return o(d);
        case pt:
          return _ = p._init, N(d, f, _(p._payload), y);
      }
      if (jn(p)) return S(d, f, p, y);
      if (Rn(p)) return g(d, f, p, y);
      Ur(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = Ri(p, d.mode, y), f.return = d, d = f), o(d)) : n(d, f);
  }
  return N;
}
var wn = Lf(!0), Rf = Lf(!1), gl = It(null), El = null, sn = null, pu = null;
function hu() {
  pu = sn = El = null;
}
function mu(e) {
  var t = gl.current;
  j(gl), e._currentValue = t;
}
function ho(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function vn(e, t) {
  El = e, pu = sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (pu !== e) if (e = { context: e, memoizedValue: t, next: null }, sn === null) {
    if (El === null) throw Error(E(308));
    sn = e, El.dependencies = { lanes: 0, firstContext: e };
  } else sn = sn.next = e;
  return t;
}
var Ut = null;
function vu(e) {
  Ut === null ? Ut = [e] : Ut.push(e);
}
function Mf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, vu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, st(e, r);
}
function st(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ht = !1;
function yu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Af(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, st(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, vu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, st(e, n);
}
function Kr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nu(e, n);
  }
}
function Ia(e, t) {
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
function Sl(e, t, n, r) {
  var l = e.updateQueue;
  ht = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, o === null ? i = s : o.next = s, o = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== o && (u === null ? c.firstBaseUpdate = s : u.next = s, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, c = s = a = null, u = i;
    do {
      var h = u.lane, v = u.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (h = t, v = n, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                m = S.call(v, m, h);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, h = typeof S == "function" ? S.call(v, m, h) : S, h == null) break e;
              m = W({}, m, h);
              break e;
            case 2:
              ht = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else v = { eventTime: v, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (s = c = v, a = m) : c = c.next = v, o |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = m), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Qt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function La(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
      l.call(r);
    }
  }
}
var xr = {}, qe = It(xr), cr = It(xr), dr = It(xr);
function zt(e) {
  if (e === xr) throw Error(E(174));
  return e;
}
function gu(e, t) {
  switch (B(dr, t), B(cr, e), B(qe, xr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xi(t, e);
  }
  j(qe), B(qe, t);
}
function xn() {
  j(qe), j(cr), j(dr);
}
function Hf(e) {
  zt(dr.current);
  var t = zt(qe.current), n = Xi(t, e.type);
  t !== n && (B(cr, e), B(qe, n));
}
function Eu(e) {
  cr.current === e && (j(qe), j(cr));
}
var V = It(0);
function wl(e) {
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
var ki = [];
function Su() {
  for (var e = 0; e < ki.length; e++) ki[e]._workInProgressVersionPrimary = null;
  ki.length = 0;
}
var Jr = ct.ReactCurrentDispatcher, Ci = ct.ReactCurrentBatchConfig, Wt = 0, $ = null, K = null, te = null, xl = !1, Yn = !1, pr = 0, dh = 0;
function ue() {
  throw Error(E(321));
}
function wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!be(e[n], t[n])) return !1;
  return !0;
}
function xu(e, t, n, r, l, i) {
  if (Wt = i, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jr.current = e === null || e.memoizedState === null ? vh : yh, e = n(r, l), Yn) {
    i = 0;
    do {
      if (Yn = !1, pr = 0, 25 <= i) throw Error(E(301));
      i += 1, te = K = null, t.updateQueue = null, Jr.current = gh, e = n(r, l);
    } while (Yn);
  }
  if (Jr.current = Tl, t = K !== null && K.next !== null, Wt = 0, te = K = $ = null, xl = !1, t) throw Error(E(300));
  return e;
}
function Tu() {
  var e = pr !== 0;
  return pr = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return te === null ? $.memoizedState = te = e : te = te.next = e, te;
}
function Be() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = te === null ? $.memoizedState : te.next;
  if (t !== null) te = t, K = e;
  else {
    if (e === null) throw Error(E(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, te === null ? $.memoizedState = te = e : te = te.next = e;
  }
  return te;
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ni(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, i = n.pending;
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
      var c = s.lane;
      if ((Wt & c) === c) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = m, o = r) : a = a.next = m, $.lanes |= c, Qt |= c;
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? o = r : a.next = u, be(r, t.memoizedState) || (we = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, $.lanes |= i, Qt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oi(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    be(i, t.memoizedState) || (we = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Df() {
}
function Ff(e, t) {
  var n = $, r = Be(), l = t(), i = !be(r.memoizedState, l);
  if (i && (r.memoizedState = l, we = !0), r = r.queue, _u(zf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || te !== null && te.memoizedState.tag & 1) {
    if (n.flags |= 2048, mr(9, Uf.bind(null, n, r, l, t), void 0, null), ne === null) throw Error(E(349));
    Wt & 30 || Bf(n, t, l);
  }
  return l;
}
function Bf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Uf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, jf(t) && Gf(e);
}
function zf(e, t, n) {
  return n(function() {
    jf(t) && Gf(e);
  });
}
function jf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function Gf(e) {
  var t = st(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Ra(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = mh.bind(null, $, e), [t.memoizedState, e];
}
function mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Vf() {
  return Be().memoizedState;
}
function qr(e, t, n, r) {
  var l = Ye();
  $.flags |= e, l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Bl(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (i = o.destroy, r !== null && wu(r, o.deps)) {
      l.memoizedState = mr(t, n, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = mr(1 | t, n, i, r);
}
function Ma(e, t) {
  return qr(8390656, 8, e, t);
}
function _u(e, t) {
  return Bl(2048, 8, e, t);
}
function $f(e, t) {
  return Bl(4, 2, e, t);
}
function Wf(e, t) {
  return Bl(4, 4, e, t);
}
function Qf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Xf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bl(4, 4, Qf.bind(null, t, e), n);
}
function Pu() {
}
function bf(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Zf(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Yf(e, t, n) {
  return Wt & 21 ? (be(n, t) || (n = ef(), $.lanes |= n, Qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = n);
}
function ph(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ci.transition;
  Ci.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, Ci.transition = r;
  }
}
function Kf() {
  return Be().memoizedState;
}
function hh(e, t, n) {
  var r = Pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jf(e)) qf(t, n);
  else if (n = Mf(e, t, n, r), n !== null) {
    var l = ye();
    Xe(n, e, r, l), ec(n, t, r);
  }
}
function mh(e, t, n) {
  var r = Pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jf(e)) qf(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, be(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, vu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Mf(e, t, l, r), n !== null && (l = ye(), Xe(n, e, r, l), ec(n, t, r));
  }
}
function Jf(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function qf(e, t) {
  Yn = xl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nu(e, n);
  }
}
var Tl = { readContext: Fe, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, vh = { readContext: Fe, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: Ma, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qr(
    4194308,
    4,
    Qf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return qr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return qr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hh.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ra, useDebugValue: Pu, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = Ra(!1), t = e[0];
  return e = ph.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = Ye();
  if (G) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), ne === null) throw Error(E(349));
    Wt & 30 || Bf(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ma(zf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, mr(9, Uf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = ne.identifierPrefix;
  if (G) {
    var n = it, r = lt;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = dh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yh = {
  readContext: Fe,
  useCallback: bf,
  useContext: Fe,
  useEffect: _u,
  useImperativeHandle: Xf,
  useInsertionEffect: $f,
  useLayoutEffect: Wf,
  useMemo: Zf,
  useReducer: Ni,
  useRef: Vf,
  useState: function() {
    return Ni(hr);
  },
  useDebugValue: Pu,
  useDeferredValue: function(e) {
    var t = Be();
    return Yf(t, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Ni(hr)[0], t = Be().memoizedState;
    return [e, t];
  },
  useMutableSource: Df,
  useSyncExternalStore: Ff,
  useId: Kf,
  unstable_isNewReconciler: !1
}, gh = { readContext: Fe, useCallback: bf, useContext: Fe, useEffect: _u, useImperativeHandle: Xf, useInsertionEffect: $f, useLayoutEffect: Wf, useMemo: Zf, useReducer: Oi, useRef: Vf, useState: function() {
  return Oi(hr);
}, useDebugValue: Pu, useDeferredValue: function(e) {
  var t = Be();
  return K === null ? t.memoizedState = e : Yf(t, K.memoizedState, e);
}, useTransition: function() {
  var e = Oi(hr)[0], t = Be().memoizedState;
  return [e, t];
}, useMutableSource: Df, useSyncExternalStore: Ff, useId: Kf, unstable_isNewReconciler: !1 };
function Ve(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = Pt(e), i = ot(r, l);
  i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Xe(t, e, l, r), Kr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = Pt(e), i = ot(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Xe(t, e, l, r), Kr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = Pt(e), l = ot(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Tt(e, l, r), t !== null && (Xe(t, e, r, n), Kr(t, e, r));
} };
function Aa(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ur(n, r) || !ur(l, i) : !0;
}
function tc(e, t, n) {
  var r = !1, l = Nt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Fe(i) : (l = Te(t) ? Vt : ce.current, r = t.contextTypes, i = (r = r != null) ? En(e, l) : Nt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ha(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function vo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, yu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Fe(i) : (i = Te(t) ? Vt : ce.current, l.context = En(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (mo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ul.enqueueReplaceState(l, l.state, null), Sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Qd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Eh = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  n = ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pl || (Pl = !0, Co = r), yo(e, t);
  }, n;
}
function rc(e, t, n) {
  n = ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      yo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    yo(e, t), typeof r != "function" && (_t === null ? _t = /* @__PURE__ */ new Set([this]) : _t.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Da(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Eh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Mh.bind(null, e, t, n), t.then(e, e));
}
function Fa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ba(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ot(-1, 1), t.tag = 2, Tt(n, t, 1))), n.lanes |= 1), e);
}
var Sh = ct.ReactCurrentOwner, we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Rf(t, null, n, r) : wn(t, e.child, n, r);
}
function Ua(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return vn(t, l), r = xu(e, t, n, r, i, l), n = Tu(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ft(e, t, l)) : (G && n && fu(t), t.flags |= 1, pe(e, t, r, l), t.child);
}
function za(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Mu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, lc(e, t, i, r, l)) : (e = rl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ur, n(o, r) && e.ref === t.ref) return ft(e, t, l);
  }
  return t.flags |= 1, e = kt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ur(i, r) && e.ref === t.ref) if (we = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (we = !0);
    else return t.lanes = e.lanes, ft(e, t, l);
  }
  return go(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(cn, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, B(cn, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, B(cn, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, B(cn, ke), ke |= r;
  return pe(e, t, l, n), t.child;
}
function oc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function go(e, t, n, r, l) {
  var i = Te(n) ? Vt : ce.current;
  return i = En(t, i), vn(t, l), n = xu(e, t, n, r, i, l), r = Tu(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ft(e, t, l)) : (G && r && fu(t), t.flags |= 1, pe(e, t, n, l), t.child);
}
function ja(e, t, n, r, l) {
  if (Te(n)) {
    var i = !0;
    ml(t);
  } else i = !1;
  if (vn(t, l), t.stateNode === null) el(e, t), tc(t, n, r), vo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Fe(s) : (s = Te(n) ? Vt : ce.current, s = En(t, s));
    var c = n.getDerivedStateFromProps, m = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && Ha(t, o, r, s), ht = !1;
    var h = t.memoizedState;
    o.state = h, Sl(t, r, o, l), a = t.memoizedState, u !== r || h !== a || xe.current || ht ? (typeof c == "function" && (mo(t, n, c, r), a = t.memoizedState), (u = ht || Aa(t, n, u, r, h, a, s)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Af(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Ve(t.type, u), o.props = s, m = t.pendingProps, h = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Fe(a) : (a = Te(n) ? Vt : ce.current, a = En(t, a));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || h !== a) && Ha(t, o, r, a), ht = !1, h = t.memoizedState, o.state = h, Sl(t, r, o, l);
    var S = t.memoizedState;
    u !== m || h !== S || xe.current || ht ? (typeof v == "function" && (mo(t, n, v, r), S = t.memoizedState), (s = ht || Aa(t, n, s, r, h, S, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = a, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Eo(e, t, n, r, i, l);
}
function Eo(e, t, n, r, l, i) {
  oc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ka(t, n, !1), ft(e, t, i);
  r = t.stateNode, Sh.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = wn(t, e.child, null, i), t.child = wn(t, null, u, i)) : pe(e, t, u, i), t.memoizedState = r.state, l && ka(t, n, !0), t.child;
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext ? Pa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pa(e, t.context, !1), gu(e, t.containerInfo);
}
function Ga(e, t, n, r, l) {
  return Sn(), du(l), t.flags |= 256, pe(e, t, n, r), t.child;
}
var So = { dehydrated: null, treeContext: null, retryLane: 0 };
function wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps, l = V.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(V, l & 1), e === null)
    return po(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Gl(o, r, 0, null), e = Gt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = wo(n), t.memoizedState = So, e) : ku(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return wh(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = kt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = kt(u, i) : (i = Gt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? wo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = So, r;
  }
  return i = e.child, e = i.sibling, r = kt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ku(e, t) {
  return t = Gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function zr(e, t, n, r) {
  return r !== null && du(r), wn(t, e.child, null, n), e = ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ii(Error(E(422))), zr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Gl({ mode: "visible", children: r.children }, l, 0, null), i = Gt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && wn(t, e.child, null, o), t.child.memoizedState = wo(o), t.memoizedState = So, i);
  if (!(t.mode & 1)) return zr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(E(419)), r = Ii(i, r, void 0), zr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, we || u) {
    if (r = ne, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, st(e, l), Xe(r, e, l, -1));
    }
    return Ru(), r = Ii(Error(E(421))), zr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ah.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ce = xt(l.nextSibling), Ne = t, G = !0, We = null, e !== null && (Me[Ae++] = lt, Me[Ae++] = it, Me[Ae++] = $t, lt = e.id, it = e.overflow, $t = t), t = ku(t, r.children), t.flags |= 4096, t);
}
function Va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ho(e.return, t, n);
}
function Li(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (pe(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Va(e, n, t);
      else if (e.tag === 19) Va(e, n, t);
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
  if (B(V, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && wl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Li(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && wl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Li(t, !0, n, null, i);
      break;
    case "together":
      Li(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function el(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function xh(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), Sn();
      break;
    case 5:
      Hf(t);
      break;
    case 1:
      Te(t.type) && ml(t);
      break;
    case 4:
      gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      B(gl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (B(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ac(e, t, n) : (B(V, V.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
      B(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return sc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ic(e, t, n);
  }
  return ft(e, t, n);
}
var fc, xo, cc, dc;
fc = function(e, t) {
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
xo = function() {
};
cc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, zt(qe.current);
    var i = null;
    switch (n) {
      case "input":
        l = Vi(e, l), r = Vi(e, r), i = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Qi(e, l), r = Qi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pl);
    }
    bi(n, r);
    var o;
    n = null;
    for (s in l) if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null) if (s === "style") {
      var u = l[s];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (er.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = l != null ? l[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (er.hasOwnProperty(s) ? (a != null && s === "onScroll" && U("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
dc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
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
function Th(e, t, n) {
  var r = t.pendingProps;
  switch (cu(t), t.tag) {
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
      return Te(t.type) && hl(), ae(t), null;
    case 3:
      return r = t.stateNode, xn(), j(xe), j(ce), Su(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, We !== null && (Io(We), We = null))), xo(e, t), ae(t), null;
    case 5:
      Eu(t);
      var l = zt(dr.current);
      if (n = t.type, e !== null && t.stateNode != null) cc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ae(t), null;
        }
        if (e = zt(qe.current), Br(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ke] = t, r[fr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Vn.length; l++) U(Vn[l], r);
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
              Ju(r, i), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, U("invalid", r);
              break;
            case "textarea":
              ea(r, i), U("invalid", r);
          }
          bi(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Fr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Fr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : er.hasOwnProperty(o) && u != null && o === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), qu(r, i, !0);
              break;
            case "textarea":
              Or(r), ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Us(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ke] = t, e[fr] = r, fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Zi(n, r), n) {
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
                for (l = 0; l < Vn.length; l++) U(Vn[l], e);
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
                Ju(e, r), l = Vi(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                ea(e, r), l = Qi(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            bi(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? Gs(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && zs(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && tr(e, a) : typeof a == "number" && tr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (er.hasOwnProperty(i) ? a != null && i === "onScroll" && U("scroll", e) : a != null && Yo(e, i, a, o));
            }
            switch (n) {
              case "input":
                Or(e), qu(e, r, !1);
                break;
              case "textarea":
                Or(e), ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? dn(e, !!r.multiple, i, !1) : r.defaultValue != null && dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = pl);
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
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = zt(dr.current), zt(qe.current), Br(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (i = r.nodeValue !== n) && (e = Ne, e !== null)) switch (e.tag) {
            case 3:
              Fr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Fr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return ae(t), null;
    case 13:
      if (j(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Ce !== null && t.mode & 1 && !(t.flags & 128)) If(), Sn(), t.flags |= 98560, i = !1;
        else if (i = Br(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[Ke] = t;
          } else Sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ae(t), i = !1;
        } else We !== null && (Io(We), We = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? J === 0 && (J = 3) : Ru())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
    case 4:
      return xn(), xo(e, t), e === null && ar(t.stateNode.containerInfo), ae(t), null;
    case 10:
      return mu(t.type._context), ae(t), null;
    case 17:
      return Te(t.type) && hl(), ae(t), null;
    case 19:
      if (j(V), i = t.memoizedState, i === null) return ae(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Bn(i, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = wl(e), o !== null) {
            for (t.flags |= 128, Bn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return B(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Z() > _n && (t.flags |= 128, r = !0, Bn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = wl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Bn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !G) return ae(t), null;
        } else 2 * Z() - i.renderingStartTime > _n && n !== 1073741824 && (t.flags |= 128, r = !0, Bn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Z(), t.sibling = null, n = V.current, B(V, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
    case 22:
    case 23:
      return Lu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function _h(e, t) {
  switch (cu(t), t.tag) {
    case 1:
      return Te(t.type) && hl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return xn(), j(xe), j(ce), Su(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Eu(t), null;
    case 13:
      if (j(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Sn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return j(V), null;
    case 4:
      return xn(), null;
    case 10:
      return mu(t.type._context), null;
    case 22:
    case 23:
      return Lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1, se = !1, Ph = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function To(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var $a = !1;
function kh(e, t) {
  if (io = fl, e = yf(), su(e)) {
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
        var o = 0, u = -1, a = -1, s = 0, c = 0, m = e, h = null;
        t: for (; ; ) {
          for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (a = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (v = m.firstChild) !== null; )
            h = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++s === l && (u = o), h === i && ++c === r && (a = o), (v = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = v;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oo = { focusedElem: e, selectionRange: n }, fl = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var g = S.memoizedProps, N = S.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ve(t.type, g), N);
            d.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
      Q(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return S = $a, $a = !1, S;
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && To(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
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
function _o(e) {
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
function pc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[fr], delete t[so], delete t[ah], delete t[sh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wa(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Po(e, t, n), e = e.sibling; e !== null; ) Po(e, t, n), e = e.sibling;
}
function ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), e = e.sibling;
}
var le = null, $e = !1;
function dt(e, t, n) {
  for (n = n.child; n !== null; ) mc(e, t, n), n = n.sibling;
}
function mc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      se || fn(n, t);
    case 6:
      var r = le, l = $e;
      le = null, dt(e, t, n), le = r, $e = l, le !== null && ($e ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && ($e ? (e = le, n = n.stateNode, e.nodeType === 8 ? _i(e.parentNode, n) : e.nodeType === 1 && _i(e, n), ir(e)) : _i(le, n.stateNode));
      break;
    case 4:
      r = le, l = $e, le = n.stateNode.containerInfo, $e = !0, dt(e, t, n), le = r, $e = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && To(n, t, o), l = l.next;
        } while (l !== r);
      }
      dt(e, t, n);
      break;
    case 1:
      if (!se && (fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      dt(e, t, n);
      break;
    case 21:
      dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (se = (r = se) || n.memoizedState !== null, dt(e, t, n), se = r) : dt(e, t, n);
      break;
    default:
      dt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ph()), t.forEach(function(r) {
      var l = Hh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            le = u.stateNode, $e = !1;
            break e;
          case 3:
            le = u.stateNode.containerInfo, $e = !0;
            break e;
          case 4:
            le = u.stateNode.containerInfo, $e = !0;
            break e;
        }
        u = u.return;
      }
      if (le === null) throw Error(E(160));
      mc(i, o, l), le = null, $e = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (s) {
      Q(l, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vc(t, e), t = t.sibling;
}
function vc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ge(t, e), Ze(e), r & 4) {
        try {
          Kn(3, e, e.return), zl(3, e);
        } catch (g) {
          Q(e, e.return, g);
        }
        try {
          Kn(5, e, e.return);
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 1:
      Ge(t, e), Ze(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if (Ge(t, e), Ze(e), r & 512 && n !== null && fn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          tr(l, "");
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Fs(l, i), Zi(u, o);
          var s = Zi(u, i);
          for (o = 0; o < a.length; o += 2) {
            var c = a[o], m = a[o + 1];
            c === "style" ? Gs(l, m) : c === "dangerouslySetInnerHTML" ? zs(l, m) : c === "children" ? tr(l, m) : Yo(l, c, m, s);
          }
          switch (u) {
            case "input":
              $i(l, i);
              break;
            case "textarea":
              Bs(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? dn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? dn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : dn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[fr] = i;
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Ge(t, e), Ze(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ge(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ir(t.containerInfo);
      } catch (g) {
        Q(e, e.return, g);
      }
      break;
    case 4:
      Ge(t, e), Ze(e);
      break;
    case 13:
      Ge(t, e), Ze(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ou = Z())), r & 4 && Qa(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (se = (s = se) || c, Ge(t, e), se = s) : Ge(t, e), Ze(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1) for (x = e, c = e.child; c !== null; ) {
          for (m = x = c; x !== null; ) {
            switch (h = x, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kn(4, h, h.return);
                break;
              case 1:
                fn(h, h.return);
                var S = h.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (g) {
                    Q(r, n, g);
                  }
                }
                break;
              case 5:
                fn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  ba(m);
                  continue;
                }
            }
            v !== null ? (v.return = h, x = v) : ba(m);
          }
          c = c.sibling;
        }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                l = m.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = js("display", o));
              } catch (g) {
                Q(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (c === null) try {
              m.stateNode.nodeValue = s ? "" : m.memoizedProps;
            } catch (g) {
              Q(e, e.return, g);
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
      Ge(t, e), Ze(e), r & 4 && Qa(e);
      break;
    case 21:
      break;
    default:
      Ge(
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
          if (hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tr(l, ""), r.flags &= -33);
          var i = Wa(e);
          ko(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Wa(e);
          Po(e, u, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ch(e, t, n) {
  x = e, yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || se;
        u = jr;
        var s = se;
        if (jr = o, (se = a) && !s) for (x = l; x !== null; ) o = x, a = o.child, o.tag === 22 && o.memoizedState !== null ? Za(l) : a !== null ? (a.return = o, x = a) : Za(l);
        for (; i !== null; ) x = i, yc(i), i = i.sibling;
        x = l, jr = u, se = s;
      }
      Xa(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : Xa(e);
  }
}
function Xa(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            se || zl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !se) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && La(t, i, r);
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
              La(t, o, n);
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
                var c = s.memoizedState;
                if (c !== null) {
                  var m = c.dehydrated;
                  m !== null && ir(m);
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
        se || t.flags & 512 && _o(t);
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function ba(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Za(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
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
            _o(t);
          } catch (a) {
            Q(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            _o(t);
          } catch (a) {
            Q(t, o, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var Nh = Math.ceil, _l = ct.ReactCurrentDispatcher, Cu = ct.ReactCurrentOwner, De = ct.ReactCurrentBatchConfig, H = 0, ne = null, Y = null, ie = 0, ke = 0, cn = It(0), J = 0, vr = null, Qt = 0, jl = 0, Nu = 0, Jn = null, Se = null, Ou = 0, _n = 1 / 0, nt = null, Pl = !1, Co = null, _t = null, Gr = !1, gt = null, kl = 0, qn = 0, No = null, tl = -1, nl = 0;
function ye() {
  return H & 6 ? Z() : tl !== -1 ? tl : tl = Z();
}
function Pt(e) {
  return e.mode & 1 ? H & 2 && ie !== 0 ? ie & -ie : ch.transition !== null ? (nl === 0 && (nl = ef()), nl) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : af(e.type)), e) : 1;
}
function Xe(e, t, n, r) {
  if (50 < qn) throw qn = 0, No = null, Error(E(185));
  Er(e, n, r), (!(H & 2) || e !== ne) && (e === ne && (!(H & 2) && (jl |= n), J === 4 && vt(e, ie)), _e(e, r), n === 1 && H === 0 && !(t.mode & 1) && (_n = Z() + 500, Fl && Lt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  cp(e, t);
  var r = sl(e, e === ne ? ie : 0);
  if (r === 0) n !== null && la(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && la(n), t === 1) e.tag === 0 ? fh(Ya.bind(null, e)) : Cf(Ya.bind(null, e)), oh(function() {
      !(H & 6) && Lt();
    }), n = null;
    else {
      switch (tf(r)) {
        case 1:
          n = tu;
          break;
        case 4:
          n = Js;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = qs;
          break;
        default:
          n = al;
      }
      n = Pc(n, gc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function gc(e, t) {
  if (tl = -1, nl = 0, H & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = sl(e, e === ne ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var i = Sc();
    (ne !== e || ie !== t) && (nt = null, _n = Z() + 500, jt(e, t));
    do
      try {
        Lh();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (!0);
    hu(), _l.current = i, H = l, Y !== null ? t = 0 : (ne = null, ie = 0, t = J);
  }
  if (t !== 0) {
    if (t === 2 && (l = eo(e), l !== 0 && (r = l, t = Oo(e, l))), t === 1) throw n = vr, jt(e, 0), vt(e, r), _e(e, Z()), n;
    if (t === 6) vt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Oh(l) && (t = Cl(e, r), t === 2 && (i = eo(e), i !== 0 && (r = i, t = Oo(e, i))), t === 1)) throw n = vr, jt(e, 0), vt(e, r), _e(e, Z()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Ft(e, Se, nt);
          break;
        case 3:
          if (vt(e, r), (r & 130023424) === r && (t = Ou + 500 - Z(), 10 < t)) {
            if (sl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ao(Ft.bind(null, e, Se, nt), t);
            break;
          }
          Ft(e, Se, nt);
          break;
        case 4:
          if (vt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ao(Ft.bind(null, e, Se, nt), r);
            break;
          }
          Ft(e, Se, nt);
          break;
        case 5:
          Ft(e, Se, nt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return _e(e, Z()), e.callbackNode === n ? gc.bind(null, e) : null;
}
function Oo(e, t) {
  var n = Jn;
  return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = Se, Se = n, t !== null && Io(t)), e;
}
function Io(e) {
  Se === null ? Se = e : Se.push.apply(Se, e);
}
function Oh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!be(i(), l)) return !1;
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
function vt(e, t) {
  for (t &= ~Nu, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ya(e) {
  if (H & 6) throw Error(E(327));
  yn();
  var t = sl(e, 0);
  if (!(t & 1)) return _e(e, Z()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = eo(e);
    r !== 0 && (t = r, n = Oo(e, r));
  }
  if (n === 1) throw n = vr, jt(e, 0), vt(e, t), _e(e, Z()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, Se, nt), _e(e, Z()), null;
}
function Iu(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (_n = Z() + 500, Fl && Lt());
  }
}
function Xt(e) {
  gt !== null && gt.tag === 0 && !(H & 6) && yn();
  var t = H;
  H |= 1;
  var n = De.transition, r = D;
  try {
    if (De.transition = null, D = 1, e) return e();
  } finally {
    D = r, De.transition = n, H = t, !(H & 6) && Lt();
  }
}
function Lu() {
  ke = cn.current, j(cn);
}
function jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ih(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && hl();
        break;
      case 3:
        xn(), j(xe), j(ce), Su();
        break;
      case 5:
        Eu(r);
        break;
      case 4:
        xn();
        break;
      case 13:
        j(V);
        break;
      case 19:
        j(V);
        break;
      case 10:
        mu(r.type._context);
        break;
      case 22:
      case 23:
        Lu();
    }
    n = n.return;
  }
  if (ne = e, Y = e = kt(e.current, null), ie = ke = t, J = 0, vr = null, Nu = jl = Qt = 0, Se = Jn = null, Ut !== null) {
    for (t = 0; t < Ut.length; t++) if (n = Ut[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Ut = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = Y;
    try {
      if (hu(), Jr.current = Tl, xl) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        xl = !1;
      }
      if (Wt = 0, te = K = $ = null, Yn = !1, pr = 0, Cu.current = null, n === null || n.return === null) {
        J = 1, vr = t, Y = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = ie, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, c = u, m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = Fa(o);
          if (v !== null) {
            v.flags &= -257, Ba(v, o, u, i, t), v.mode & 1 && Da(i, s, t), t = v, a = s;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(a), t.updateQueue = g;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Da(i, s, t), Ru();
              break e;
            }
            a = Error(E(426));
          }
        } else if (G && u.mode & 1) {
          var N = Fa(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Ba(N, o, u, i, t), du(Tn(a, u));
            break e;
          }
        }
        i = a = Tn(a, u), J !== 4 && (J = 2), Jn === null ? Jn = [i] : Jn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = nc(i, a, t);
              Ia(i, d);
              break e;
            case 1:
              u = a;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (_t === null || !_t.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = rc(i, u, t);
                Ia(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      xc(n);
    } catch (w) {
      t = w, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = _l.current;
  return _l.current = Tl, e === null ? Tl : e;
}
function Ru() {
  (J === 0 || J === 3 || J === 2) && (J = 4), ne === null || !(Qt & 268435455) && !(jl & 268435455) || vt(ne, ie);
}
function Cl(e, t) {
  var n = H;
  H |= 2;
  var r = Sc();
  (ne !== e || ie !== t) && (nt = null, jt(e, t));
  do
    try {
      Ih();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (!0);
  if (hu(), H = n, _l.current = r, Y !== null) throw Error(E(261));
  return ne = null, ie = 0, J;
}
function Ih() {
  for (; Y !== null; ) wc(Y);
}
function Lh() {
  for (; Y !== null && !np(); ) wc(Y);
}
function wc(e) {
  var t = _c(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? xc(e) : Y = t, Cu.current = null;
}
function xc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _h(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, Y = null;
        return;
      }
    } else if (n = Th(n, t, ke), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ft(e, t, n) {
  var r = D, l = De.transition;
  try {
    De.transition = null, D = 1, Rh(e, t, n, r);
  } finally {
    De.transition = l, D = r;
  }
  return null;
}
function Rh(e, t, n, r) {
  do
    yn();
  while (gt !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (dp(e, i), e === ne && (Y = ne = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gr || (Gr = !0, Pc(al, function() {
    return yn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = De.transition, De.transition = null;
    var o = D;
    D = 1;
    var u = H;
    H |= 4, Cu.current = null, kh(e, n), vc(n, e), Jp(oo), fl = !!io, oo = io = null, e.current = n, Ch(n), rp(), H = u, D = o, De.transition = i;
  } else e.current = n;
  if (Gr && (Gr = !1, gt = e, kl = l), i = e.pendingLanes, i === 0 && (_t = null), op(n.stateNode), _e(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw Pl = !1, e = Co, Co = null, e;
  return kl & 1 && e.tag !== 0 && yn(), i = e.pendingLanes, i & 1 ? e === No ? qn++ : (qn = 0, No = e) : qn = 0, Lt(), null;
}
function yn() {
  if (gt !== null) {
    var e = tf(kl), t = De.transition, n = D;
    try {
      if (De.transition = null, D = 16 > e ? 16 : e, gt === null) var r = !1;
      else {
        if (e = gt, gt = null, kl = 0, H & 6) throw Error(E(331));
        var l = H;
        for (H |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (x = s; x !== null; ) {
                  var c = x;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, c, i);
                  }
                  var m = c.child;
                  if (m !== null) m.return = c, x = m;
                  else for (; x !== null; ) {
                    c = x;
                    var h = c.sibling, v = c.return;
                    if (pc(c), c === s) {
                      x = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, x = h;
                      break;
                    }
                    x = v;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var N = g.sibling;
                    g.sibling = null, g = N;
                  } while (g !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, x = o;
          else e: for (; x !== null; ) {
            if (i = x, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Kn(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, x = d;
              break e;
            }
            x = i.return;
          }
        }
        var f = e.current;
        for (x = f; x !== null; ) {
          o = x;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, x = p;
          else e: for (o = f; x !== null; ) {
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  zl(9, u);
              }
            } catch (w) {
              Q(u, u.return, w);
            }
            if (u === o) {
              x = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, x = y;
              break e;
            }
            x = u.return;
          }
        }
        if (H = l, Lt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(Rl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      D = n, De.transition = t;
    }
  }
  return !1;
}
function Ka(e, t, n) {
  t = Tn(n, t), t = nc(e, t, 1), e = Tt(e, t, 1), t = ye(), e !== null && (Er(e, 1, t), _e(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Ka(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ka(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
        e = Tn(n, e), e = rc(t, e, 1), t = Tt(t, e, 1), e = ye(), t !== null && (Er(t, 1, e), _e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Mh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (ie & n) === n && (J === 4 || J === 3 && (ie & 130023424) === ie && 500 > Z() - Ou ? jt(e, 0) : Nu |= n), _e(e, t);
}
function Tc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Rr, Rr <<= 1, !(Rr & 130023424) && (Rr = 4194304)) : t = 1);
  var n = ye();
  e = st(e, t), e !== null && (Er(e, t, n), _e(e, n));
}
function Ah(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Tc(e, n);
}
function Hh(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), Tc(e, n);
}
var _c;
_c = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || xe.current) we = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return we = !1, xh(e, t, n);
    we = !!(e.flags & 131072);
  }
  else we = !1, G && t.flags & 1048576 && Nf(t, yl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      el(e, t), e = t.pendingProps;
      var l = En(t, ce.current);
      vn(t, n), l = xu(null, t, r, e, l, n);
      var i = Tu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (i = !0, ml(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yu(t), l.updater = Ul, t.stateNode = l, l._reactInternals = t, vo(t, r, e, n), t = Eo(null, t, r, !0, i, n)) : (t.tag = 0, G && i && fu(t), pe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (el(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Fh(r), e = Ve(r, e), l) {
          case 0:
            t = go(null, t, r, e, n);
            break e;
          case 1:
            t = ja(null, t, r, e, n);
            break e;
          case 11:
            t = Ua(null, t, r, e, n);
            break e;
          case 14:
            t = za(null, t, r, Ve(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), go(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), ja(e, t, r, l, n);
    case 3:
      e: {
        if (uc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Af(e, t), Sl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Tn(Error(E(423)), t), t = Ga(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Tn(Error(E(424)), t), t = Ga(e, t, r, n, l);
          break e;
        } else for (Ce = xt(t.stateNode.containerInfo.firstChild), Ne = t, G = !0, We = null, n = Rf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Sn(), r === l) {
            t = ft(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hf(t), e === null && po(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, uo(r, l) ? o = null : i !== null && uo(r, i) && (t.flags |= 32), oc(e, t), pe(e, t, o, n), t.child;
    case 6:
      return e === null && po(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return gu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wn(t, null, r, n) : pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Ua(e, t, r, l, n);
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, B(gl, r._currentValue), r._currentValue = o, i !== null) if (be(i.value, o)) {
          if (i.children === l.children && !xe.current) {
            t = ft(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = ot(-1, n & -n), a.tag = 2;
                  var s = i.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var c = s.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), s.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ho(
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
            if (o = i.return, o === null) throw Error(E(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), ho(o, n, t), o = i.sibling;
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
        pe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, vn(t, n), l = Fe(l), r = r(l), t.flags |= 1, pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ve(r, t.pendingProps), l = Ve(r.type, l), za(e, t, r, l, n);
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), el(e, t), t.tag = 1, Te(r) ? (e = !0, ml(t)) : e = !1, vn(t, n), tc(t, r, l), vo(t, r, l, n), Eo(null, t, r, !0, e, n);
    case 19:
      return sc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Pc(e, t) {
  return Ks(e, t);
}
function Dh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new Dh(e, t, n, r);
}
function Mu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fh(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jo) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function rl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Mu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case en:
      return Gt(n.children, l, i, t);
    case Ko:
      o = 8, l |= 8;
      break;
    case Ui:
      return e = He(12, n, t, l | 2), e.elementType = Ui, e.lanes = i, e;
    case zi:
      return e = He(13, n, t, l), e.elementType = zi, e.lanes = i, e;
    case ji:
      return e = He(19, n, t, l), e.elementType = ji, e.lanes = i, e;
    case As:
      return Gl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Rs:
          o = 10;
          break e;
        case Ms:
          o = 9;
          break e;
        case Jo:
          o = 11;
          break e;
        case qo:
          o = 14;
          break e;
        case pt:
          o = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = He(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Gt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function Gl(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = As, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ri(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function Mi(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pi(0), this.expirationTimes = pi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Au(e, t, n, r, l, i, o, u, a) {
  return e = new Bh(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = He(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yu(i), e;
}
function Uh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: qt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kc(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
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
    if (Te(n)) return kf(e, n, t);
  }
  return t;
}
function Cc(e, t, n, r, l, i, o, u, a) {
  return e = Au(n, r, !0, e, l, i, o, u, a), e.context = kc(null), n = e.current, r = ye(), l = Pt(n), i = ot(r, l), i.callback = t ?? null, Tt(n, i, l), e.current.lanes = l, Er(e, l, r), _e(e, r), e;
}
function Vl(e, t, n, r) {
  var l = t.current, i = ye(), o = Pt(l);
  return n = kc(n), t.context === null ? t.context = n : t.pendingContext = n, t = ot(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tt(l, t, o), e !== null && (Xe(e, l, o, i), Kr(e, l, o)), o;
}
function Nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ja(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  Ja(e, t), (e = e.alternate) && Ja(e, t);
}
function zh() {
  return null;
}
var Nc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Du(e) {
  this._internalRoot = e;
}
$l.prototype.render = Du.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Vl(e, t, null, null);
};
$l.prototype.unmount = Du.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function() {
      Vl(null, e, null, null);
    }), t[at] = null;
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++) ;
    mt.splice(n, 0, e), n === 0 && uf(e);
  }
};
function Fu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function qa() {
}
function jh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = Nl(o);
        i.call(s);
      };
    }
    var o = Cc(t, r, e, 0, null, !1, !1, "", qa);
    return e._reactRootContainer = o, e[at] = o.current, ar(e.nodeType === 8 ? e.parentNode : e), Xt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = Nl(a);
      u.call(s);
    };
  }
  var a = Au(e, 0, !1, null, null, !1, !1, "", qa);
  return e._reactRootContainer = a, e[at] = a.current, ar(e.nodeType === 8 ? e.parentNode : e), Xt(function() {
    Vl(t, a, n, r);
  }), a;
}
function Ql(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = Nl(o);
        u.call(a);
      };
    }
    Vl(t, o, e, l);
  } else o = jh(n, t, e, l, r);
  return Nl(o);
}
nf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 && (nu(t, n | 1), _e(t, Z()), !(H & 6) && (_n = Z() + 500, Lt()));
      }
      break;
    case 13:
      Xt(function() {
        var r = st(e, 1);
        if (r !== null) {
          var l = ye();
          Xe(r, e, 1, l);
        }
      }), Hu(e, 1);
  }
};
ru = function(e) {
  if (e.tag === 13) {
    var t = st(e, 134217728);
    if (t !== null) {
      var n = ye();
      Xe(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
rf = function(e) {
  if (e.tag === 13) {
    var t = Pt(e), n = st(e, t);
    if (n !== null) {
      var r = ye();
      Xe(n, e, t, r);
    }
    Hu(e, t);
  }
};
lf = function() {
  return D;
};
of = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Ki = function(e, t, n) {
  switch (t) {
    case "input":
      if ($i(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(E(90));
            Ds(r), $i(r, l);
          }
        }
      }
      break;
    case "textarea":
      Bs(e, n);
      break;
    case "select":
      t = n.value, t != null && dn(e, !!n.multiple, t, !1);
  }
};
Ws = Iu;
Qs = Xt;
var Gh = { usingClientEntryPoint: !1, Events: [wr, ln, Dl, Vs, $s, Iu] }, Un = { findFiberByHostInstance: Bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vh = { bundleType: Un.bundleType, version: Un.version, rendererPackageName: Un.rendererPackageName, rendererConfig: Un.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Un.findFiberByHostInstance || zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vr.isDisabled && Vr.supportsFiber) try {
    Rl = Vr.inject(Vh), Je = Vr;
  } catch {
  }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gh;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fu(t)) throw Error(E(200));
  return Uh(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!Fu(e)) throw Error(E(299));
  var n = !1, r = "", l = Nc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Au(e, 1, !1, null, null, n, !1, r, l), e[at] = t.current, ar(e.nodeType === 8 ? e.parentNode : e), new Du(t);
};
Ie.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Zs(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return Xt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!Wl(t)) throw Error(E(200));
  return Ql(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!Fu(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Nc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Cc(t, null, e, 1, n ?? null, l, !1, i, o), e[at] = t.current, ar(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new $l(t);
};
Ie.render = function(e, t, n) {
  if (!Wl(t)) throw Error(E(200));
  return Ql(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!Wl(e)) throw Error(E(40));
  return e._reactRootContainer ? (Xt(function() {
    Ql(null, null, e, !1, function() {
      e._reactRootContainer = null, e[at] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Iu;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ql(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function Oc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc);
    } catch (e) {
      console.error(e);
    }
}
Oc(), Ns.exports = Ie;
var $h = Ns.exports, Ic, es = $h;
Ic = es.createRoot, es.hydrateRoot;
var Lo = function(e, t) {
  return Lo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
  }, Lo(e, t);
};
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Lo(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, l = arguments.length; r < l; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, P.apply(this, arguments);
};
function Xl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
  return n;
}
function ve(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, l = t.length, i; r < l; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function he(e, t) {
  var n = t && t.cache ? t.cache : Yh, r = t && t.serializer ? t.serializer : Zh, l = t && t.strategy ? t.strategy : Xh;
  return l(e, {
    cache: n,
    serializer: r
  });
}
function Wh(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Qh(e, t, n, r) {
  var l = Wh(r) ? r : n(r), i = t.get(l);
  return typeof i > "u" && (i = e.call(this, r), t.set(l, i)), i;
}
function Lc(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), l = n(r), i = t.get(l);
  return typeof i > "u" && (i = e.apply(this, r), t.set(l, i)), i;
}
function Rc(e, t, n, r, l) {
  return n.bind(t, e, r, l);
}
function Xh(e, t) {
  var n = e.length === 1 ? Qh : Lc;
  return Rc(e, this, n, t.cache.create(), t.serializer);
}
function bh(e, t) {
  return Rc(e, this, Lc, t.cache.create(), t.serializer);
}
var Zh = function() {
  return JSON.stringify(arguments);
};
function Bu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Bu.prototype.get = function(e) {
  return this.cache[e];
};
Bu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Yh = {
  create: function() {
    return new Bu();
  }
}, me = {
  variadic: bh
};
function Mc(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, ve([void 0], t, !1)))();
}, {
  strategy: me.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, ve([void 0], t, !1)))();
}, {
  strategy: me.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, ve([void 0], t, !1)))();
}, {
  strategy: me.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, ve([void 0], t, !1)))();
}, {
  strategy: me.variadic
});
he(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, ve([void 0], t, !1)))();
}, {
  strategy: me.variadic
});
var M;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M || (M = {}));
var z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(z || (z = {}));
var Pn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Pn || (Pn = {}));
function ts(e) {
  return e.type === z.literal;
}
function Kh(e) {
  return e.type === z.argument;
}
function Ac(e) {
  return e.type === z.number;
}
function Hc(e) {
  return e.type === z.date;
}
function Dc(e) {
  return e.type === z.time;
}
function Fc(e) {
  return e.type === z.select;
}
function Bc(e) {
  return e.type === z.plural;
}
function Jh(e) {
  return e.type === z.pound;
}
function Uc(e) {
  return e.type === z.tag;
}
function zc(e) {
  return !!(e && typeof e == "object" && e.type === Pn.number);
}
function Ro(e) {
  return !!(e && typeof e == "object" && e.type === Pn.dateTime);
}
var jc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, qh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function em(e) {
  var t = {};
  return e.replace(qh, function(n) {
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
var tm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function nm(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(tm).filter(function(h) {
    return h.length > 0;
  }), n = [], r = 0, l = t; r < l.length; r++) {
    var i = l[r], o = i.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], a = o.slice(1), s = 0, c = a; s < c.length; s++) {
      var m = c[s];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: a });
  }
  return n;
}
function rm(e) {
  return e.replace(/^(.*?)-/, "");
}
var ns = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Gc = /^(@+)?(\+|#+)?[rs]?$/g, lm = /(\*)(0+)|(#+)(0+)|(0+)/g, Vc = /^(0+)$/;
function rs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Gc, function(n, r, l) {
    return typeof l != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : l === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof l == "string" ? l.length : 0)), "";
  }), t;
}
function $c(e) {
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
function im(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Vc.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ls(e) {
  var t = {}, n = $c(e);
  return n || t;
}
function om(e) {
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
        t.style = "unit", t.unit = rm(l.options[0]);
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
        t = P(P(P({}, t), { notation: "scientific" }), l.options.reduce(function(a, s) {
          return P(P({}, a), ls(s));
        }, {}));
        continue;
      case "engineering":
        t = P(P(P({}, t), { notation: "engineering" }), l.options.reduce(function(a, s) {
          return P(P({}, a), ls(s));
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
        l.options[0].replace(lm, function(a, s, c, m, h, v) {
          if (s)
            t.minimumIntegerDigits = c.length;
          else {
            if (m && h)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Vc.test(l.stem)) {
      t.minimumIntegerDigits = l.stem.length;
      continue;
    }
    if (ns.test(l.stem)) {
      if (l.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      l.stem.replace(ns, function(a, s, c, m, h, v) {
        return c === "*" ? t.minimumFractionDigits = s.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : h && v ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + v.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var i = l.options[0];
      i === "w" ? t = P(P({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = P(P({}, t), rs(i)));
      continue;
    }
    if (Gc.test(l.stem)) {
      t = P(P({}, t), rs(l.stem));
      continue;
    }
    var o = $c(l.stem);
    o && (t = P(P({}, t), o));
    var u = im(l.stem);
    u && (t = P(P({}, t), u));
  }
  return t;
}
var $r = {
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
function um(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var l = e.charAt(r);
    if (l === "j") {
      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === l; )
        i++, r++;
      var o = 1 + (i & 1), u = i < 2 ? 1 : 3 + (i >> 1), a = "a", s = am(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = s + n;
    } else l === "J" ? n += "H" : n += l;
  }
  return n;
}
function am(e) {
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
  var l = $r[r || ""] || $r[n || ""] || $r["".concat(n, "-001")] || $r["001"];
  return l[0];
}
var Ai, sm = new RegExp("^".concat(jc.source, "*")), fm = new RegExp("".concat(jc.source, "*$"));
function A(e, t) {
  return { start: e, end: t };
}
var cm = !!String.prototype.startsWith && "_a".startsWith("a", 1), dm = !!String.fromCodePoint, pm = !!Object.fromEntries, hm = !!String.prototype.codePointAt, mm = !!String.prototype.trimStart, vm = !!String.prototype.trimEnd, ym = !!Number.isSafeInteger, gm = ym ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Mo = !0;
try {
  var Em = Qc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Mo = ((Ai = Em.exec("a")) === null || Ai === void 0 ? void 0 : Ai[0]) === "a";
} catch {
  Mo = !1;
}
var is = cm ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ao = dm ? String.fromCodePoint : (
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
), os = (
  // native
  pm ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, l = t; r < l.length; r++) {
        var i = l[r], o = i[0], u = i[1];
        n[o] = u;
      }
      return n;
    }
  )
), Wc = hm ? (
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
), Sm = mm ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(sm, "");
  }
), wm = vm ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(fm, "");
  }
);
function Qc(e, t) {
  return new RegExp(e, t);
}
var Ho;
if (Mo) {
  var us = Qc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ho = function(t, n) {
    var r;
    us.lastIndex = n;
    var l = us.exec(t);
    return (r = l[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ho = function(t, n) {
    for (var r = []; ; ) {
      var l = Wc(t, n);
      if (l === void 0 || Xc(l) || Pm(l))
        break;
      r.push(l), n += l >= 65536 ? 2 : 1;
    }
    return Ao.apply(void 0, r);
  };
var xm = (
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
              location: A(u, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(M.UNMATCHED_CLOSING_TAG, A(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && Do(this.peek() || 0)) {
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
            location: A(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(t + 1, n, !0);
        if (i.err)
          return i;
        var o = i.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Do(this.char()))
            return this.error(M.INVALID_TAG, A(u, this.clonePosition()));
          var a = this.clonePosition(), s = this.parseTagName();
          return l !== s ? this.error(M.UNMATCHED_CLOSING_TAG, A(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: z.tag,
              value: l,
              children: o,
              location: A(r, this.clonePosition())
            },
            err: null
          } : this.error(M.INVALID_TAG, A(u, this.clonePosition())));
        } else
          return this.error(M.UNCLOSED_TAG, A(r, this.clonePosition()));
      } else
        return this.error(M.INVALID_TAG, A(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && _m(this.char()); )
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
      var a = A(r, this.clonePosition());
      return {
        val: { type: z.literal, value: l, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Tm(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ao.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ao(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(M.EMPTY_ARGUMENT, A(r, this.clonePosition()));
      var l = this.parseIdentifierIfPossible().value;
      if (!l)
        return this.error(M.MALFORMED_ARGUMENT, A(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: z.argument,
              // value does not include the opening and closing braces.
              value: l,
              location: A(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(r, this.clonePosition())) : this.parseArgumentOptions(t, n, l, r);
        default:
          return this.error(M.MALFORMED_ARGUMENT, A(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Ho(this.message, n), l = n + r.length;
      this.bumpTo(l);
      var i = this.clonePosition(), o = A(t, i);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, l) {
      var i, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (u) {
        case "":
          return this.error(M.EXPECT_ARGUMENT_TYPE, A(o, a));
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
            var h = wm(m.val);
            if (h.length === 0)
              return this.error(M.EXPECT_ARGUMENT_STYLE, A(this.clonePosition(), this.clonePosition()));
            var v = A(c, this.clonePosition());
            s = { style: h, styleLocation: v };
          }
          var S = this.tryParseArgumentClose(l);
          if (S.err)
            return S;
          var g = A(l, this.clonePosition());
          if (s && is(s == null ? void 0 : s.style, "::", 0)) {
            var N = Sm(s.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(N, s.styleLocation);
              return m.err ? m : {
                val: { type: z.number, value: r, location: g, style: m.val },
                err: null
              };
            } else {
              if (N.length === 0)
                return this.error(M.EXPECT_DATE_TIME_SKELETON, g);
              var d = N;
              this.locale && (d = um(N, this.locale));
              var h = {
                type: Pn.dateTime,
                pattern: d,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? em(d) : {}
              }, f = u === "date" ? z.date : z.time;
              return {
                val: { type: f, value: r, location: g, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? z.number : u === "date" ? z.date : z.time,
              value: r,
              location: g,
              style: (i = s == null ? void 0 : s.style) !== null && i !== void 0 ? i : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, A(p, P({}, p)));
          this.bumpSpace();
          var y = this.parseIdentifierIfPossible(), w = 0;
          if (u !== "select" && y.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), y = this.parseIdentifierIfPossible(), w = m.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, u, n, y);
          if (_.err)
            return _;
          var S = this.tryParseArgumentClose(l);
          if (S.err)
            return S;
          var k = A(l, this.clonePosition());
          return u === "select" ? {
            val: {
              type: z.select,
              value: r,
              options: os(_.val),
              location: k
            },
            err: null
          } : {
            val: {
              type: z.plural,
              value: r,
              options: os(_.val),
              offset: w,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: k
            },
            err: null
          };
        }
        default:
          return this.error(M.INVALID_ARGUMENT_TYPE, A(o, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, A(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var l = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, A(l, this.clonePosition()));
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
        r = nm(t);
      } catch {
        return this.error(M.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Pn.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? om(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, l) {
      for (var i, o = !1, u = [], a = /* @__PURE__ */ new Set(), s = l.value, c = l.location; ; ) {
        if (s.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            c = A(m, this.clonePosition()), s = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (a.has(s))
          return this.error(n === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        s === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, A(this.clonePosition(), this.clonePosition()));
        var S = this.parseMessage(t + 1, n, r);
        if (S.err)
          return S;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        u.push([
          s,
          {
            value: S.val,
            location: A(v, this.clonePosition())
          }
        ]), a.add(s), this.bumpSpace(), i = this.parseIdentifierIfPossible(), s = i.value, c = i.location;
      }
      return u.length === 0 ? this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, A(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(M.MISSING_OTHER_CLAUSE, A(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var a = A(l, this.clonePosition());
      return i ? (o *= r, gm(o) ? { val: o, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = Wc(this.message, t);
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
      if (is(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Xc(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Do(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Tm(e) {
  return Do(e) || e === 47;
}
function _m(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Xc(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Pm(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Fo(e) {
  e.forEach(function(t) {
    if (delete t.location, Fc(t) || Bc(t))
      for (var n in t.options)
        delete t.options[n].location, Fo(t.options[n].value);
    else Ac(t) && zc(t.style) || (Hc(t) || Dc(t)) && Ro(t.style) ? delete t.style.location : Uc(t) && Fo(t.children);
  });
}
function km(e, t) {
  t === void 0 && (t = {}), t = P({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new xm(e, t).parse();
  if (n.err) {
    var r = SyntaxError(M[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Fo(n.val), n.val;
}
var et;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(et || (et = {}));
var Rt = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l) {
      var i = e.call(this, n) || this;
      return i.code = r, i.originalMessage = l, i;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), as = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l, i) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(l).join('", "'), '"'), et.INVALID_VALUE, i) || this;
    }
    return t;
  }(Rt)
), Cm = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), et.INVALID_VALUE, l) || this;
    }
    return t;
  }(Rt)
), Nm = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), et.MISSING_VALUE, r) || this;
    }
    return t;
  }(Rt)
), de;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(de || (de = {}));
function Om(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== de.literal || n.type !== de.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function bc(e) {
  return typeof e == "function";
}
function ll(e, t, n, r, l, i, o) {
  if (e.length === 1 && ts(e[0]))
    return [
      {
        type: de.literal,
        value: e[0].value
      }
    ];
  for (var u = [], a = 0, s = e; a < s.length; a++) {
    var c = s[a];
    if (ts(c)) {
      u.push({
        type: de.literal,
        value: c.value
      });
      continue;
    }
    if (Jh(c)) {
      typeof i == "number" && u.push({
        type: de.literal,
        value: n.getNumberFormat(t).format(i)
      });
      continue;
    }
    var m = c.value;
    if (!(l && m in l))
      throw new Nm(m, o);
    var h = l[m];
    if (Kh(c)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), u.push({
        type: typeof h == "string" ? de.literal : de.object,
        value: h
      });
      continue;
    }
    if (Hc(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : Ro(c.style) ? c.style.parsedOptions : void 0;
      u.push({
        type: de.literal,
        value: n.getDateTimeFormat(t, v).format(h)
      });
      continue;
    }
    if (Dc(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : Ro(c.style) ? c.style.parsedOptions : r.time.medium;
      u.push({
        type: de.literal,
        value: n.getDateTimeFormat(t, v).format(h)
      });
      continue;
    }
    if (Ac(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : zc(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (h = h * (v.scale || 1)), u.push({
        type: de.literal,
        value: n.getNumberFormat(t, v).format(h)
      });
      continue;
    }
    if (Uc(c)) {
      var S = c.children, g = c.value, N = l[g];
      if (!bc(N))
        throw new Cm(g, "function", o);
      var d = ll(S, t, n, r, l, i), f = N(d.map(function(w) {
        return w.value;
      }));
      Array.isArray(f) || (f = [f]), u.push.apply(u, f.map(function(w) {
        return {
          type: typeof w == "string" ? de.literal : de.object,
          value: w
        };
      }));
    }
    if (Fc(c)) {
      var p = c.options[h] || c.options.other;
      if (!p)
        throw new as(c.value, h, Object.keys(c.options), o);
      u.push.apply(u, ll(p.value, t, n, r, l));
      continue;
    }
    if (Bc(c)) {
      var p = c.options["=".concat(h)];
      if (!p) {
        if (!Intl.PluralRules)
          throw new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, et.MISSING_INTL_API, o);
        var y = n.getPluralRules(t, { type: c.pluralType }).select(h - (c.offset || 0));
        p = c.options[y] || c.options.other;
      }
      if (!p)
        throw new as(c.value, h, Object.keys(c.options), o);
      u.push.apply(u, ll(p.value, t, n, r, l, h - (c.offset || 0)));
      continue;
    }
  }
  return Om(u);
}
function Im(e, t) {
  return t ? P(P(P({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = P(P({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Lm(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Im(e[r], t[r]), n;
  }, P({}, e)) : e;
}
function Hi(e) {
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
function Rm(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, ve([void 0], n, !1)))();
    }, {
      cache: Hi(e.number),
      strategy: me.variadic
    }),
    getDateTimeFormat: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, ve([void 0], n, !1)))();
    }, {
      cache: Hi(e.dateTime),
      strategy: me.variadic
    }),
    getPluralRules: he(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, ve([void 0], n, !1)))();
    }, {
      cache: Hi(e.pluralRules),
      strategy: me.variadic
    })
  };
}
var Zc = (
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
        var c = s.reduce(function(m, h) {
          return !m.length || h.type !== de.literal || typeof m[m.length - 1] != "string" ? m.push(h.value) : m[m.length - 1] += h.value, m;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(a) {
        return ll(i.ast, i.locales, i.formatters, i.formats, a, void 0, i.message);
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
        var u = Xl(o, ["formatters"]);
        this.ast = e.__parse(t, P(P({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Lm(e.formats, r), this.formatters = l && l.formatters || Rm(this.formatterCache);
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
    }, e.__parse = km, e.formats = {
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
), bt;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(bt || (bt = {}));
var Tr = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l) {
      var i = this, o = l ? l instanceof Error ? l : new Error(String(l)) : void 0;
      return i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, i.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, t), i;
    }
    return t;
  }(Error)
), Mm = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r) {
      return e.call(this, bt.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Tr)
), Am = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r) {
      return e.call(this, bt.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Tr)
), ss = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r) {
      return e.call(this, bt.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Tr)
), ze = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l) {
      var i = e.call(this, bt.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), l) || this;
      return i.locale = r, i;
    }
    return t;
  }(Tr)
), Di = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r, l, i) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(l == null ? void 0 : l.id, `
Default Message: `).concat(l == null ? void 0 : l.defaultMessage, `
Description: `).concat(l == null ? void 0 : l.description, `
`), r, i) || this;
      return o.descriptor = l, o.locale = r, o;
    }
    return t;
  }(ze)
), Hm = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(n, r) {
      var l = e.call(this, bt.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(i) {
        var o;
        return (o = i.value) !== null && o !== void 0 ? o : JSON.stringify(i);
      }).join(), ")") : "id", " as fallback.")) || this;
      return l.descriptor = n, l;
    }
    return t;
  }(Tr)
);
function Kt(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, l) {
    return l in e ? r[l] = e[l] : l in n && (r[l] = n[l]), r;
  }, {});
}
var Dm = function(e) {
}, Fm = function(e) {
}, Yc = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Dm,
  onWarn: Fm
};
function Kc() {
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
function Ht(e) {
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
function Bm(e) {
  e === void 0 && (e = Kc());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, l = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, ve([void 0], a, !1)))();
  }, {
    cache: Ht(e.dateTime),
    strategy: me.variadic
  }), i = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, ve([void 0], a, !1)))();
  }, {
    cache: Ht(e.number),
    strategy: me.variadic
  }), o = he(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, ve([void 0], a, !1)))();
  }, {
    cache: Ht(e.pluralRules),
    strategy: me.variadic
  });
  return {
    getDateTimeFormat: l,
    getNumberFormat: i,
    getMessageFormat: he(function(u, a, s, c) {
      return new Zc(u, a, s, P({ formatters: {
        getNumberFormat: i,
        getDateTimeFormat: l,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: Ht(e.message),
      strategy: me.variadic
    }),
    getRelativeTimeFormat: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (t.bind.apply(t, ve([void 0], u, !1)))();
    }, {
      cache: Ht(e.relativeTime),
      strategy: me.variadic
    }),
    getPluralRules: o,
    getListFormat: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (n.bind.apply(n, ve([void 0], u, !1)))();
    }, {
      cache: Ht(e.list),
      strategy: me.variadic
    }),
    getDisplayNames: he(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (r.bind.apply(r, ve([void 0], u, !1)))();
    }, {
      cache: Ht(e.displayNames),
      strategy: me.variadic
    })
  };
}
function Uu(e, t, n, r) {
  var l = e && e[t], i;
  if (l && (i = l[n]), i)
    return i;
  r(new Mm("No ".concat(t, " format named: ").concat(n)));
}
function Wr(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = P({ timeZone: t }, e[r]), n;
  }, {});
}
function fs(e, t) {
  var n = Object.keys(P(P({}, e), t));
  return n.reduce(function(r, l) {
    return r[l] = P(P({}, e[l] || {}), t[l] || {}), r;
  }, {});
}
function cs(e, t) {
  if (!t)
    return e;
  var n = Zc.formats;
  return P(P(P({}, n), e), { date: fs(Wr(n.date, t), Wr(e.date || {}, t)), time: fs(Wr(n.time, t), Wr(e.time || {}, t)) });
}
var Bo = function(e, t, n, r, l) {
  var i = e.locale, o = e.formats, u = e.messages, a = e.defaultLocale, s = e.defaultFormats, c = e.fallbackOnEmptyString, m = e.onError, h = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var S = n.id, g = n.defaultMessage;
  Mc(!!S, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var N = String(S), d = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, N) && u[N]
  );
  if (Array.isArray(d) && d.length === 1 && d[0].type === z.literal)
    return d[0].value;
  if (!r && d && typeof d == "string" && !v)
    return d.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = P(P({}, v), r || {}), o = cs(o, h), s = cs(s, h), !d) {
    if (c === !1 && d === "")
      return d;
    if ((!g || i && i.toLowerCase() !== a.toLowerCase()) && m(new Hm(n, i)), g)
      try {
        var f = t.getMessageFormat(g, a, s, l);
        return f.format(r);
      } catch (p) {
        return m(new Di('Error formatting default message for: "'.concat(N, '", rendering default message verbatim'), i, n, p)), typeof g == "string" ? g : N;
      }
    return N;
  }
  try {
    var f = t.getMessageFormat(d, i, o, P({ formatters: t }, l || {}));
    return f.format(r);
  } catch (p) {
    m(new Di('Error formatting message: "'.concat(N, '", using ').concat(g ? "default message" : "id", " as fallback."), i, n, p));
  }
  if (g)
    try {
      var f = t.getMessageFormat(g, a, s, l);
      return f.format(r);
    } catch (p) {
      m(new Di('Error formatting the default message for: "'.concat(N, '", rendering message verbatim'), i, n, p));
    }
  return typeof d == "string" ? d : typeof g == "string" ? g : N;
}, Jc = [
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
function bl(e, t, n, r) {
  var l = e.locale, i = e.formats, o = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var a = r.format, s = P(P({}, u && { timeZone: u }), a && Uu(i, t, a, o)), c = Kt(r, Jc, s);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = P(P({}, c), { hour: "numeric", minute: "numeric" })), n(l, c);
}
function Um(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return bl(e, "date", t, o).format(u);
  } catch (a) {
    e.onError(new ze("Error formatting date.", e.locale, a));
  }
  return String(u);
}
function zm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return bl(e, "time", t, o).format(u);
  } catch (a) {
    e.onError(new ze("Error formatting time.", e.locale, a));
  }
  return String(u);
}
function jm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = n[2], u = o === void 0 ? {} : o, a = e.timeZone, s = e.locale, c = e.onError, m = Kt(u, Jc, a ? { timeZone: a } : {});
  try {
    return t(s, m).formatRange(l, i);
  } catch (h) {
    c(new ze("Error formatting date time range.", e.locale, h));
  }
  return String(l);
}
function Gm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return bl(e, "date", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new ze("Error formatting date.", e.locale, a));
  }
  return [];
}
function Vm(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return bl(e, "time", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new ze("Error formatting time.", e.locale, a));
  }
  return [];
}
var $m = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function Wm(e, t, n, r) {
  var l = e.locale, i = e.onError, o = Intl.DisplayNames;
  o || i(new Rt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, et.MISSING_INTL_API));
  var u = Kt(r, $m);
  try {
    return t(l, u).of(n);
  } catch (a) {
    i(new ze("Error formatting display name.", l, a));
  }
}
var Qm = [
  "type",
  "style"
], ds = Date.now();
function Xm(e) {
  return "".concat(ds, "_").concat(e, "_").concat(ds);
}
function bm(e, t, n, r) {
  r === void 0 && (r = {});
  var l = qc(e, t, n, r).reduce(function(i, o) {
    var u = o.value;
    return typeof u != "string" ? i.push(u) : typeof i[i.length - 1] == "string" ? i[i.length - 1] += u : i.push(u), i;
  }, []);
  return l.length === 1 ? l[0] : l.length === 0 ? "" : l;
}
function qc(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || i(new Rt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, et.MISSING_INTL_API));
  var u = Kt(r, Qm);
  try {
    var a = {}, s = n.map(function(c, m) {
      if (typeof c == "object") {
        var h = Xm(m);
        return a[h] = c, h;
      }
      return String(c);
    });
    return t(l, u).formatToParts(s).map(function(c) {
      return c.type === "literal" ? c : P(P({}, c), { value: a[c.value] || c.value });
    });
  } catch (c) {
    i(new ze("Error formatting list.", l, c));
  }
  return n;
}
var Zm = ["type"];
function Ym(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || i(new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, et.MISSING_INTL_API));
  var o = Kt(r, Zm);
  try {
    return t(l, o).select(n);
  } catch (u) {
    i(new ze("Error formatting plural.", l, u));
  }
  return "other";
}
var Km = ["numeric", "style"];
function Jm(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = !!o && Uu(l, "relative", o, i) || {}, a = Kt(n, Km, u);
  return t(r, a);
}
function qm(e, t, n, r, l) {
  l === void 0 && (l = {}), r || (r = "second");
  var i = Intl.RelativeTimeFormat;
  i || e.onError(new Rt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, et.MISSING_INTL_API));
  try {
    return Jm(e, t, l).format(n, r);
  } catch (o) {
    e.onError(new ze("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var e0 = [
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
function ed(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = o && Uu(l, "number", o, i) || {}, a = Kt(n, e0, u);
  return t(r, a);
}
function t0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return ed(e, t, r).format(n);
  } catch (l) {
    e.onError(new ze("Error formatting number.", e.locale, l));
  }
  return String(n);
}
function n0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return ed(e, t, r).formatToParts(n);
  } catch (l) {
    e.onError(new ze("Error formatting number.", e.locale, l));
  }
  return [];
}
function r0(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function l0(e) {
  e.onWarn && e.defaultRichTextElements && r0(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function i0(e, t) {
  var n = Bm(t), r = P(P({}, Yc), e), l = r.locale, i = r.defaultLocale, o = r.onError;
  return l ? !Intl.NumberFormat.supportedLocalesOf(l).length && o ? o(new ss('Missing locale data for locale: "'.concat(l, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(l).length && o && o(new ss('Missing locale data for locale: "'.concat(l, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new Am('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), l0(r), P(P({}, r), {
    formatters: n,
    formatNumber: t0.bind(null, r, n.getNumberFormat),
    formatNumberToParts: n0.bind(null, r, n.getNumberFormat),
    formatRelativeTime: qm.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Um.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Gm.bind(null, r, n.getDateTimeFormat),
    formatTime: zm.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: jm.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: Vm.bind(null, r, n.getDateTimeFormat),
    formatPlural: Ym.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Bo.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Bo.bind(null, r, n),
    formatList: bm.bind(null, r, n.getListFormat),
    formatListToParts: qc.bind(null, r, n.getListFormat),
    formatDisplayName: Wm.bind(null, r, n.getDisplayNames)
  });
}
function td(e) {
  Mc(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var nd = P(P({}, Yc), { textComponent: fe.Fragment });
function o0(e) {
  return function(t) {
    return e(fe.Children.toArray(t));
  };
}
function u0(e, t) {
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
var rd = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re = typeof Symbol == "function" && Symbol.for, zu = re ? Symbol.for("react.element") : 60103, ju = re ? Symbol.for("react.portal") : 60106, Zl = re ? Symbol.for("react.fragment") : 60107, Yl = re ? Symbol.for("react.strict_mode") : 60108, Kl = re ? Symbol.for("react.profiler") : 60114, Jl = re ? Symbol.for("react.provider") : 60109, ql = re ? Symbol.for("react.context") : 60110, Gu = re ? Symbol.for("react.async_mode") : 60111, ei = re ? Symbol.for("react.concurrent_mode") : 60111, ti = re ? Symbol.for("react.forward_ref") : 60112, ni = re ? Symbol.for("react.suspense") : 60113, a0 = re ? Symbol.for("react.suspense_list") : 60120, ri = re ? Symbol.for("react.memo") : 60115, li = re ? Symbol.for("react.lazy") : 60116, s0 = re ? Symbol.for("react.block") : 60121, f0 = re ? Symbol.for("react.fundamental") : 60117, c0 = re ? Symbol.for("react.responder") : 60118, d0 = re ? Symbol.for("react.scope") : 60119;
function Re(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zu:
        switch (e = e.type, e) {
          case Gu:
          case ei:
          case Zl:
          case Kl:
          case Yl:
          case ni:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ql:
              case ti:
              case li:
              case ri:
              case Jl:
                return e;
              default:
                return t;
            }
        }
      case ju:
        return t;
    }
  }
}
function ld(e) {
  return Re(e) === ei;
}
F.AsyncMode = Gu;
F.ConcurrentMode = ei;
F.ContextConsumer = ql;
F.ContextProvider = Jl;
F.Element = zu;
F.ForwardRef = ti;
F.Fragment = Zl;
F.Lazy = li;
F.Memo = ri;
F.Portal = ju;
F.Profiler = Kl;
F.StrictMode = Yl;
F.Suspense = ni;
F.isAsyncMode = function(e) {
  return ld(e) || Re(e) === Gu;
};
F.isConcurrentMode = ld;
F.isContextConsumer = function(e) {
  return Re(e) === ql;
};
F.isContextProvider = function(e) {
  return Re(e) === Jl;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zu;
};
F.isForwardRef = function(e) {
  return Re(e) === ti;
};
F.isFragment = function(e) {
  return Re(e) === Zl;
};
F.isLazy = function(e) {
  return Re(e) === li;
};
F.isMemo = function(e) {
  return Re(e) === ri;
};
F.isPortal = function(e) {
  return Re(e) === ju;
};
F.isProfiler = function(e) {
  return Re(e) === Kl;
};
F.isStrictMode = function(e) {
  return Re(e) === Yl;
};
F.isSuspense = function(e) {
  return Re(e) === ni;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Zl || e === ei || e === Kl || e === Yl || e === ni || e === a0 || typeof e == "object" && e !== null && (e.$$typeof === li || e.$$typeof === ri || e.$$typeof === Jl || e.$$typeof === ql || e.$$typeof === ti || e.$$typeof === f0 || e.$$typeof === c0 || e.$$typeof === d0 || e.$$typeof === s0);
};
F.typeOf = Re;
rd.exports = F;
var p0 = rd.exports, id = p0, h0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, m0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, od = {};
od[id.ForwardRef] = h0;
od[id.Memo] = m0;
var Vu = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = fe.createContext(null)) : fe.createContext(null);
Vu.Consumer;
var v0 = Vu.Provider, y0 = v0, g0 = Vu;
function ud() {
  var e = fe.useContext(g0);
  return td(e), e;
}
var Uo;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Uo || (Uo = {}));
var zo;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(zo || (zo = {}));
function ad(e) {
  var t = function(n) {
    var r = ud(), l = n.value, i = n.children, o = Xl(n, ["value", "children"]), u = typeof l == "string" ? new Date(l || 0) : l, a = e === "formatDate" ? r.formatDateToParts(u, o) : r.formatTimeToParts(u, o);
    return i(a);
  };
  return t.displayName = zo[e], t;
}
function _r(e) {
  var t = function(n) {
    var r = ud(), l = n.value, i = n.children, o = Xl(
      n,
      ["value", "children"]
    ), u = r[e](l, o);
    if (typeof i == "function")
      return i(u);
    var a = r.textComponent || fe.Fragment;
    return fe.createElement(a, null, u);
  };
  return t.displayName = Uo[e], t;
}
function sd(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = bc(r) ? o0(r) : r, t;
  }, {});
}
var ps = function(e, t, n, r) {
  for (var l = [], i = 4; i < arguments.length; i++)
    l[i - 4] = arguments[i];
  var o = sd(r), u = Bo.apply(void 0, ve([
    e,
    t,
    n,
    o
  ], l, !1));
  return Array.isArray(u) ? fe.Children.toArray(u) : u;
}, hs = function(e, t) {
  var n = e.defaultRichTextElements, r = Xl(e, ["defaultRichTextElements"]), l = sd(n), i = i0(P(P(P({}, nd), r), { defaultRichTextElements: l }), t), o = {
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
  return P(P({}, i), {
    formatMessage: ps.bind(
      null,
      o,
      // @ts-expect-error fix this
      i.formatters
    ),
    // @ts-expect-error fix this
    $t: ps.bind(null, o, i.formatters)
  });
};
function Fi(e) {
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
var E0 = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Kc(), n.state = {
        cache: n.cache,
        intl: hs(Fi(n.props), n.cache),
        prevConfig: Fi(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var l = r.prevConfig, i = r.cache, o = Fi(n);
      return u0(l, o) ? null : {
        intl: hs(o, i),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return td(this.state.intl), fe.createElement(y0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = nd, t;
  }(fe.PureComponent)
);
_r("formatDate");
_r("formatTime");
_r("formatNumber");
_r("formatList");
_r("formatDisplayName");
ad("formatDate");
ad("formatTime");
var fd = { exports: {} }, S0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", w0 = S0, x0 = w0;
function cd() {
}
function dd() {
}
dd.resetWarningCache = cd;
var T0 = function() {
  function e(r, l, i, o, u, a) {
    if (a !== x0) {
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
    checkPropTypes: dd,
    resetWarningCache: cd
  };
  return n.PropTypes = n, n;
};
fd.exports = T0();
var _0 = fd.exports;
const Pe = /* @__PURE__ */ Vo(_0);
var pd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var u = arguments[o];
        u && (i = l(i, r(u)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var u in i)
        t.call(i, u) && i[u] && (o = l(o, u));
      return o;
    }
    function l(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(pd);
var P0 = pd.exports;
const k0 = /* @__PURE__ */ Vo(P0);
let ms = 0;
const C0 = (e = "id") => (ms += 1, `${e}${ms}`);
var N0 = ["children"];
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function O0(e, t) {
  if (e == null) return {};
  var n = I0(e, t), r, l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      r = i[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function I0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), l, i;
  for (i = 0; i < r.length; i++)
    l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function L0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, vd(r.key), r);
  }
}
function M0(e, t, n) {
  return t && R0(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function A0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jo(e, t);
}
function jo(e, t) {
  return jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, l) {
    return r.__proto__ = l, r;
  }, jo(e, t);
}
function H0(e) {
  var t = md();
  return function() {
    var r = Ol(e), l;
    if (t) {
      var i = Ol(this).constructor;
      l = Reflect.construct(r, arguments, i);
    } else
      l = r.apply(this, arguments);
    return D0(this, l);
  };
}
function D0(e, t) {
  if (t && (kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hd(e);
}
function hd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function md() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (md = function() {
    return !!e;
  })();
}
function Ol(e) {
  return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ol(e);
}
function F0(e, t, n) {
  return t = vd(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vd(e) {
  var t = B0(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function B0(e, t) {
  if (kn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $n = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function U0(e, t, n) {
  var r = /* @__PURE__ */ function(l) {
    A0(o, l);
    var i = H0(o);
    function o(u) {
      var a;
      return L0(this, o), a = i.call(this, u), a.transformProps = a.transformProps.bind(hd(a)), a;
    }
    return M0(o, [{
      key: "warn",
      value: function(a) {
      }
    }, {
      key: "transformProps",
      value: function(a, s) {
        if (n[s] === void 0)
          return a[s] = this.props[s], a;
        var c = n[s], m = c.deprType, h = c.newName, v = c.expect, S = c.transform, g = c.message;
        switch (m) {
          case $n.MOVED:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been moved to '").concat(h, "'.")), a[h] = this.props[s];
            break;
          case $n.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been removed. '").concat(g, "'"));
            break;
          case $n.FORMAT:
            v(this.props[s]) ? a[s] = this.props[s] : (this.warn("".concat(t, ": The prop '").concat(s, "' expects a new format. ").concat(g)), a[s] = S(this.props[s], this.props));
            break;
          case $n.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(s, "' has been moved to '").concat(h, "' and expects a new format. ").concat(g)), a[h] = S(this.props[s], this.props);
            break;
          default:
            a[s] = this.props[s];
            break;
        }
        return a;
      }
    }, {
      key: "render",
      value: function() {
        var a = Object.keys(this.props).reduce(this.transformProps, {}), s = a.children, c = O0(a, N0);
        return /* @__PURE__ */ tt.createElement(e, c, this.props.children || s);
      }
    }]), o;
  }(tt.Component);
  return F0(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
var z0 = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function Il() {
  return Il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Il.apply(this, arguments);
}
function vs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vs(Object(n), !0).forEach(function(r) {
      yd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yd(e, t, n) {
  return t = G0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function G0(e) {
  var t = V0(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function V0(e, t) {
  if (yr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (yr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $0(e, t) {
  if (e == null) return {};
  var n = W0(e, t), r, l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      r = i[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function W0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), l, i;
  for (i = 0; i < r.length; i++)
    l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function $u(e) {
  var t = e.src, n = e.id, r = e.className, l = e.hidden, i = e.screenReaderText, o = e.svgAttrs, u = e.size, a = $0(e, z0);
  if (t) {
    var s = o["aria-label"] || o["aria-labelledby"], c = j0({}, o);
    return s || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ tt.createElement("span", Il({
      className: k0("pgn__icon", yd({}, "pgn__icon__".concat(u), !!u), r),
      id: n
    }, a), /* @__PURE__ */ tt.createElement(t, Il({
      role: "img",
      focusable: !1
    }, c)), i && /* @__PURE__ */ tt.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ tt.createElement(tt.Fragment, null, /* @__PURE__ */ tt.createElement("span", {
    id: n || C0("Icon"),
    className: r,
    "aria-hidden": l
  }), i && /* @__PURE__ */ tt.createElement("span", {
    className: "sr-only"
  }, i));
}
$u.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: Pe.oneOfType([Pe.element, Pe.elementType]),
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: Pe.shape({
    "aria-label": Pe.string,
    "aria-labelledby": Pe.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: Pe.string,
  /** The size of the icon. */
  size: Pe.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: Pe.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: Pe.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: Pe.oneOfType([Pe.string, Pe.element])
};
$u.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Q0 = U0($u, "Icon", {
  className: {
    deprType: $n.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Go.apply(this, arguments);
}
var X0 = function(t) {
  return /* @__PURE__ */ fe.createElement("svg", Go({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ fe.createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7ZM5 18v2h14v-2H5Z",
    fill: "currentColor"
  }));
};
const b0 = ({
  displayName: e,
  title: t,
  description: n,
  audioUrl: r,
  showControls: l,
  autoplay: i,
  showDownload: o
}) => r ? /* @__PURE__ */ ee.jsxs("div", { className: "audio-player-student-view", children: [
  t && /* @__PURE__ */ ee.jsx("h6", { className: "audio-player-title", children: t }),
  n && /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: "audio-player-description",
      dangerouslySetInnerHTML: { __html: n }
    }
  ),
  /* @__PURE__ */ ee.jsxs("div", { className: "audio-player-container", children: [
    /* @__PURE__ */ ee.jsxs(
      "audio",
      {
        controls: l,
        autoPlay: i,
        className: "audio-player",
        "aria-label": t || e,
        children: [
          /* @__PURE__ */ ee.jsx("source", { src: r, type: "audio/mpeg" }),
          /* @__PURE__ */ ee.jsxs("p", { children: [
            "Your browser does not support the audio element.",
            o && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
              " ",
              /* @__PURE__ */ ee.jsx("a", { href: r, download: !0, children: "Download the audio file" }),
              "."
            ] })
          ] })
        ]
      }
    ),
    o && /* @__PURE__ */ ee.jsxs(
      "a",
      {
        href: r,
        download: !0,
        className: "audio-player-download-link",
        "aria-label": "Download audio file",
        children: [
          /* @__PURE__ */ ee.jsx(Q0, { src: X0, className: "download-icon" }),
          "Download Audio"
        ]
      }
    )
  ] })
] }) : /* @__PURE__ */ ee.jsx("div", { className: "audio-player-student-view", children: /* @__PURE__ */ ee.jsx("div", { className: "audio-player-error", children: /* @__PURE__ */ ee.jsx("p", { children: "No audio file has been configured. Please configure this component in Studio." }) }) }), Z0 = (e, t) => {
  if (!e) {
    console.error("No element provided to renderBlock");
    return;
  }
  Ic(e).render(
    /* @__PURE__ */ ee.jsx(fe.StrictMode, { children: /* @__PURE__ */ ee.jsx(E0, { locale: "en", children: /* @__PURE__ */ ee.jsx(
      b0,
      {
        displayName: t.displayName,
        title: t.title,
        description: t.description,
        audioUrl: t.audioUrl,
        showControls: t.showControls,
        autoplay: t.autoplay,
        showDownload: t.showDownload
      }
    ) }) })
  );
};
export {
  Z0 as renderBlock
};
//# sourceMappingURL=student-ui.js.map
