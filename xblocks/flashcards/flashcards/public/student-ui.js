var Fd = Object.defineProperty;
var Ud = (e, t, n) => t in e ? Fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ia = (e, t, n) => Ud(e, typeof t != "symbol" ? t + "" : t, n);
function Wo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ms = { exports: {} }, Ol = {}, Bs = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr = Symbol.for("react.element"), zd = Symbol.for("react.portal"), jd = Symbol.for("react.fragment"), $d = Symbol.for("react.strict_mode"), Gd = Symbol.for("react.profiler"), Vd = Symbol.for("react.provider"), Wd = Symbol.for("react.context"), Qd = Symbol.for("react.forward_ref"), Xd = Symbol.for("react.suspense"), bd = Symbol.for("react.memo"), Zd = Symbol.for("react.lazy"), oa = Symbol.iterator;
function Yd(e) {
  return e === null || typeof e != "object" ? null : (e = oa && e[oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ds = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Fs = Object.assign, Us = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = Us, this.updater = n || Ds;
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zs() {
}
zs.prototype = Ln.prototype;
function Qo(e, t, n) {
  this.props = e, this.context = t, this.refs = Us, this.updater = n || Ds;
}
var Xo = Qo.prototype = new zs();
Xo.constructor = Qo;
Fs(Xo, Ln.prototype);
Xo.isPureReactComponent = !0;
var ua = Array.isArray, js = Object.prototype.hasOwnProperty, bo = { current: null }, $s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gs(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) js.call(t, r) && !$s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: xr, type: e, key: i, ref: o, props: l, _owner: bo.current };
}
function Kd(e, t) {
  return { $$typeof: xr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function Jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var aa = /\/+/g;
function ci(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jd("" + e.key) : t.toString(36);
}
function Yr(e, t, n, r, l) {
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
        case xr:
        case zd:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + ci(o, 0) : r, ua(l) ? (n = "", e != null && (n = e.replace(aa, "$&/") + "/"), Yr(l, t, n, "", function(s) {
    return s;
  })) : l != null && (Zo(l) && (l = Kd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(aa, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ua(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + ci(i, u);
    o += Yr(i, t, n, a, l);
  }
  else if (a = Yd(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + ci(i, u++), o += Yr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Lr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Yr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function qd(e) {
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
var we = { current: null }, Kr = { transition: null }, eh = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: Kr, ReactCurrentOwner: bo };
function Vs() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: Lr, forEach: function(e, t, n) {
  Lr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Lr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Lr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = Ln;
O.Fragment = jd;
O.Profiler = Gd;
O.PureComponent = Qo;
O.StrictMode = $d;
O.Suspense = Xd;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh;
O.act = Vs;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Fs({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = bo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) js.call(t, a) && !$s.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: xr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function(e) {
  return e = { $$typeof: Wd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vd, _context: e }, e.Consumer = e;
};
O.createElement = Gs;
O.createFactory = function(e) {
  var t = Gs.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Qd, render: e };
};
O.isValidElement = Zo;
O.lazy = function(e) {
  return { $$typeof: Zd, _payload: { _status: -1, _result: e }, _init: qd };
};
O.memo = function(e, t) {
  return { $$typeof: bd, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
O.unstable_act = Vs;
O.useCallback = function(e, t) {
  return we.current.useCallback(e, t);
};
O.useContext = function(e) {
  return we.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return we.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return we.current.useEffect(e, t);
};
O.useId = function() {
  return we.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return we.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return we.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return we.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return we.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return we.current.useRef(e);
};
O.useState = function(e) {
  return we.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return we.current.useTransition();
};
O.version = "18.3.1";
Bs.exports = O;
var D = Bs.exports;
const x = /* @__PURE__ */ Wo(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var th = D, nh = Symbol.for("react.element"), rh = Symbol.for("react.fragment"), lh = Object.prototype.hasOwnProperty, ih = th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ws(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) lh.call(t, r) && !oh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: nh, type: e, key: i, ref: o, props: l, _owner: ih.current };
}
Ol.Fragment = rh;
Ol.jsx = Ws;
Ol.jsxs = Ws;
Ms.exports = Ol;
var Q = Ms.exports, Qs = { exports: {} }, Re = {}, Xs = { exports: {} }, bs = {};
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
  function t(k, L) {
    var R = k.length;
    k.push(L);
    e: for (; 0 < R; ) {
      var J = R - 1 >>> 1, le = k[J];
      if (0 < l(le, L)) k[J] = L, k[R] = le, R = J;
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var L = k[0], R = k.pop();
    if (R !== L) {
      k[0] = R;
      e: for (var J = 0, le = k.length, Ar = le >>> 1; J < Ar; ) {
        var Mt = 2 * (J + 1) - 1, fi = k[Mt], Bt = Mt + 1, Ir = k[Bt];
        if (0 > l(fi, R)) Bt < le && 0 > l(Ir, fi) ? (k[J] = Ir, k[Bt] = R, J = Bt) : (k[J] = fi, k[Mt] = R, J = Mt);
        else if (Bt < le && 0 > l(Ir, R)) k[J] = Ir, k[Bt] = R, J = Bt;
        else break e;
      }
    }
    return L;
  }
  function l(k, L) {
    var R = k.sortIndex - L.sortIndex;
    return R !== 0 ? R : k.id - L.id;
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
  var a = [], s = [], f = 1, m = null, h = 3, v = !1, E = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(k) {
    for (var L = n(s); L !== null; ) {
      if (L.callback === null) r(s);
      else if (L.startTime <= k) r(s), L.sortIndex = L.expirationTime, t(a, L);
      else break;
      L = n(s);
    }
  }
  function g(k) {
    if (y = !1, p(k), !E) if (n(a) !== null) E = !0, ai(w);
    else {
      var L = n(s);
      L !== null && si(g, L.startTime - k);
    }
  }
  function w(k, L) {
    E = !1, y && (y = !1, d(I), I = -1), v = !0;
    var R = h;
    try {
      for (p(L), m = n(a); m !== null && (!(m.expirationTime > L) || k && !Ge()); ) {
        var J = m.callback;
        if (typeof J == "function") {
          m.callback = null, h = m.priorityLevel;
          var le = J(m.expirationTime <= L);
          L = e.unstable_now(), typeof le == "function" ? m.callback = le : m === n(a) && r(a), p(L);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Ar = !0;
      else {
        var Mt = n(s);
        Mt !== null && si(g, Mt.startTime - L), Ar = !1;
      }
      return Ar;
    } finally {
      m = null, h = R, v = !1;
    }
  }
  var T = !1, C = null, I = -1, $ = 5, H = -1;
  function Ge() {
    return !(e.unstable_now() - H < $);
  }
  function Hn() {
    if (C !== null) {
      var k = e.unstable_now();
      H = k;
      var L = !0;
      try {
        L = C(!0, k);
      } finally {
        L ? Mn() : (T = !1, C = null);
      }
    } else T = !1;
  }
  var Mn;
  if (typeof c == "function") Mn = function() {
    c(Hn);
  };
  else if (typeof MessageChannel < "u") {
    var la = new MessageChannel(), Dd = la.port2;
    la.port1.onmessage = Hn, Mn = function() {
      Dd.postMessage(null);
    };
  } else Mn = function() {
    P(Hn, 0);
  };
  function ai(k) {
    C = k, T || (T = !0, Mn());
  }
  function si(k, L) {
    I = P(function() {
      k(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) {
    k.callback = null;
  }, e.unstable_continueExecution = function() {
    E || v || (E = !0, ai(w));
  }, e.unstable_forceFrameRate = function(k) {
    0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < k ? Math.floor(1e3 / k) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(k) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = h;
    }
    var R = h;
    h = L;
    try {
      return k();
    } finally {
      h = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(k, L) {
    switch (k) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        k = 3;
    }
    var R = h;
    h = k;
    try {
      return L();
    } finally {
      h = R;
    }
  }, e.unstable_scheduleCallback = function(k, L, R) {
    var J = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? J + R : J) : R = J, k) {
      case 1:
        var le = -1;
        break;
      case 2:
        le = 250;
        break;
      case 5:
        le = 1073741823;
        break;
      case 4:
        le = 1e4;
        break;
      default:
        le = 5e3;
    }
    return le = R + le, k = { id: f++, callback: L, priorityLevel: k, startTime: R, expirationTime: le, sortIndex: -1 }, R > J ? (k.sortIndex = R, t(s, k), n(a) === null && k === n(s) && (y ? (d(I), I = -1) : y = !0, si(g, R - J))) : (k.sortIndex = le, t(a, k), E || v || (E = !0, ai(w))), k;
  }, e.unstable_shouldYield = Ge, e.unstable_wrapCallback = function(k) {
    var L = h;
    return function() {
      var R = h;
      h = L;
      try {
        return k.apply(this, arguments);
      } finally {
        h = R;
      }
    };
  };
})(bs);
Xs.exports = bs;
var uh = Xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah = D, Le = uh;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zs = /* @__PURE__ */ new Set(), rr = {};
function Kt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) Zs.add(t[e]);
}
var st = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $i = Object.prototype.hasOwnProperty, sh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sa = {}, fa = {};
function fh(e) {
  return $i.call(fa, e) ? !0 : $i.call(sa, e) ? !1 : sh.test(e) ? fa[e] = !0 : (sa[e] = !0, !1);
}
function ch(e, t, n, r) {
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
function dh(e, t, n, r) {
  if (t === null || typeof t > "u" || ch(e, t, n, r)) return !0;
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
function xe(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Ko(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yo,
    Ko
  );
  fe[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yo, Ko);
  fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yo, Ko);
  fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dh(t, n, l, r) && (n = null), r || l === null ? fh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rr = Symbol.for("react.element"), nn = Symbol.for("react.portal"), rn = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), Gi = Symbol.for("react.profiler"), Ys = Symbol.for("react.provider"), Ks = Symbol.for("react.context"), eu = Symbol.for("react.forward_ref"), Vi = Symbol.for("react.suspense"), Wi = Symbol.for("react.suspense_list"), tu = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Js = Symbol.for("react.offscreen"), ca = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object" ? null : (e = ca && e[ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, di;
function Vn(e) {
  if (di === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    di = t && t[1] || "";
  }
  return `
` + di + e;
}
var hi = !1;
function pi(e, t) {
  if (!e || hi) return "";
  hi = !0;
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
    hi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
}
function hh(e) {
  switch (e.tag) {
    case 5:
      return Vn(e.type);
    case 16:
      return Vn("Lazy");
    case 13:
      return Vn("Suspense");
    case 19:
      return Vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = pi(e.type, !1), e;
    case 11:
      return e = pi(e.type.render, !1), e;
    case 1:
      return e = pi(e.type, !0), e;
    default:
      return "";
  }
}
function Qi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Gi:
      return "Profiler";
    case qo:
      return "StrictMode";
    case Vi:
      return "Suspense";
    case Wi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ks:
      return (e.displayName || "Context") + ".Consumer";
    case Ys:
      return (e._context.displayName || "Context") + ".Provider";
    case eu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case tu:
      return t = e.displayName || null, t !== null ? t : Qi(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return Qi(e(t));
      } catch {
      }
  }
  return null;
}
function ph(e) {
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
      return Qi(t);
    case 8:
      return t === qo ? "StrictMode" : "Mode";
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
function At(e) {
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
function qs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mh(e) {
  var t = qs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = mh(e));
}
function ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = qs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function sl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xi(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function da(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = At(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function tf(e, t) {
  t = t.checked, t != null && Jo(e, "checked", t, !1);
}
function bi(e, t) {
  tf(e, t);
  var n = At(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zi(e, t.type, At(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Zi(e, t, n) {
  (t !== "number" || sl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Wn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: At(n) };
}
function nf(e, t) {
  var n = At(t.value), r = At(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? rf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hr, lf = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Hr = Hr || document.createElement("div"), Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bn = {
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
}, vh = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function(e) {
  vh.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), bn[t] = bn[e];
  });
});
function of(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bn.hasOwnProperty(e) && bn[e] ? ("" + t).trim() : t + "px";
}
function uf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = of(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var gh = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ji(e, t) {
  if (t) {
    if (gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function qi(e, t) {
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
var eo = null;
function nu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var to = null, gn = null, yn = null;
function va(e) {
  if (e = Cr(e)) {
    if (typeof to != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Fl(t), to(e.stateNode, e.type, t));
  }
}
function af(e) {
  gn ? yn ? yn.push(e) : yn = [e] : gn = e;
}
function sf() {
  if (gn) {
    var e = gn, t = yn;
    if (yn = gn = null, va(e), t) for (e = 0; e < t.length; e++) va(t[e]);
  }
}
function ff(e, t) {
  return e(t);
}
function cf() {
}
var mi = !1;
function df(e, t, n) {
  if (mi) return e(t, n);
  mi = !0;
  try {
    return ff(e, t, n);
  } finally {
    mi = !1, (gn !== null || yn !== null) && (cf(), sf());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
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
var no = !1;
if (st) try {
  var Dn = {};
  Object.defineProperty(Dn, "passive", { get: function() {
    no = !0;
  } }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
} catch {
  no = !1;
}
function yh(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Zn = !1, fl = null, cl = !1, ro = null, Eh = { onError: function(e) {
  Zn = !0, fl = e;
} };
function Sh(e, t, n, r, l, i, o, u, a) {
  Zn = !1, fl = null, yh.apply(Eh, arguments);
}
function wh(e, t, n, r, l, i, o, u, a) {
  if (Sh.apply(this, arguments), Zn) {
    if (Zn) {
      var s = fl;
      Zn = !1, fl = null;
    } else throw Error(S(198));
    cl || (cl = !0, ro = s);
  }
}
function Jt(e) {
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
function hf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ga(e) {
  if (Jt(e) !== e) throw Error(S(188));
}
function xh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Jt(e), t === null) throw Error(S(188));
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
        if (i === n) return ga(l), e;
        if (i === r) return ga(l), t;
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
function pf(e) {
  return e = xh(e), e !== null ? mf(e) : null;
}
function mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vf = Le.unstable_scheduleCallback, ya = Le.unstable_cancelCallback, _h = Le.unstable_shouldYield, Th = Le.unstable_requestPaint, q = Le.unstable_now, Ch = Le.unstable_getCurrentPriorityLevel, ru = Le.unstable_ImmediatePriority, gf = Le.unstable_UserBlockingPriority, dl = Le.unstable_NormalPriority, Nh = Le.unstable_LowPriority, yf = Le.unstable_IdlePriority, Hl = null, et = null;
function kh(e) {
  if (et && typeof et.onCommitFiberRoot == "function") try {
    et.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var be = Math.clz32 ? Math.clz32 : Ih, Ph = Math.log, Ah = Math.LN2;
function Ih(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ph(e) / Ah | 0) | 0;
}
var Mr = 64, Br = 4194304;
function Qn(e) {
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
function hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Qn(u) : (i &= o, i !== 0 && (r = Qn(i)));
  } else o = n & ~l, o !== 0 ? r = Qn(o) : i !== 0 && (r = Qn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - be(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Lh(e, t) {
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
function Rh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - be(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = Lh(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function lo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ef() {
  var e = Mr;
  return Mr <<= 1, !(Mr & 4194240) && (Mr = 64), e;
}
function vi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _r(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n;
}
function Oh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - be(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function lu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var U = 0;
function Sf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var wf, iu, xf, _f, Tf, io = !1, Dr = [], wt = null, xt = null, _t = null, or = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), gt = [], Hh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ea(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      xt = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ur.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Cr(t), t !== null && iu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Mh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return wt = Fn(wt, e, t, n, r, l), !0;
    case "dragenter":
      return xt = Fn(xt, e, t, n, r, l), !0;
    case "mouseover":
      return _t = Fn(_t, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return or.set(i, Fn(or.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, ur.set(i, Fn(ur.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Cf(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = hf(n), t !== null) {
          e.blockedOn = t, Tf(e.priority, function() {
            xf(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      eo = r, n.target.dispatchEvent(r), eo = null;
    } else return t = Cr(n), t !== null && iu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sa(e, t, n) {
  Jr(e) && n.delete(t);
}
function Bh() {
  io = !1, wt !== null && Jr(wt) && (wt = null), xt !== null && Jr(xt) && (xt = null), _t !== null && Jr(_t) && (_t = null), or.forEach(Sa), ur.forEach(Sa);
}
function Un(e, t) {
  e.blockedOn === t && (e.blockedOn = null, io || (io = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Bh)));
}
function ar(e) {
  function t(l) {
    return Un(l, e);
  }
  if (0 < Dr.length) {
    Un(Dr[0], e);
    for (var n = 1; n < Dr.length; n++) {
      var r = Dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (wt !== null && Un(wt, e), xt !== null && Un(xt, e), _t !== null && Un(_t, e), or.forEach(t), ur.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) Cf(n), n.blockedOn === null && gt.shift();
}
var En = ht.ReactCurrentBatchConfig, pl = !0;
function Dh(e, t, n, r) {
  var l = U, i = En.transition;
  En.transition = null;
  try {
    U = 1, ou(e, t, n, r);
  } finally {
    U = l, En.transition = i;
  }
}
function Fh(e, t, n, r) {
  var l = U, i = En.transition;
  En.transition = null;
  try {
    U = 4, ou(e, t, n, r);
  } finally {
    U = l, En.transition = i;
  }
}
function ou(e, t, n, r) {
  if (pl) {
    var l = oo(e, t, n, r);
    if (l === null) Ni(e, t, r, ml, n), Ea(e, r);
    else if (Mh(l, e, t, n, r)) r.stopPropagation();
    else if (Ea(e, r), t & 4 && -1 < Hh.indexOf(e)) {
      for (; l !== null; ) {
        var i = Cr(l);
        if (i !== null && wf(i), i = oo(e, t, n, r), i === null && Ni(e, t, r, ml, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ni(e, t, r, null, n);
  }
}
var ml = null;
function oo(e, t, n, r) {
  if (ml = null, e = nu(r), e = zt(e), e !== null) if (t = Jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = hf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ml = e, null;
}
function Nf(e) {
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
      switch (Ch()) {
        case ru:
          return 1;
        case gf:
          return 4;
        case dl:
        case Nh:
          return 16;
        case yf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null, uu = null, qr = null;
function kf() {
  if (qr) return qr;
  var e, t = uu, n = t.length, r, l = "value" in Et ? Et.value : Et.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function el(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Fr() {
  return !0;
}
function wa() {
  return !1;
}
function Oe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fr : wa, this.isPropagationStopped = wa, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fr);
  }, persist: function() {
  }, isPersistent: Fr }), t;
}
var Rn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, au = Oe(Rn), Tr = Y({}, Rn, { view: 0, detail: 0 }), Uh = Oe(Tr), gi, yi, zn, Ml = Y({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: su, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (gi = e.screenX - zn.screenX, yi = e.screenY - zn.screenY) : yi = gi = 0, zn = e), gi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yi;
} }), xa = Oe(Ml), zh = Y({}, Ml, { dataTransfer: 0 }), jh = Oe(zh), $h = Y({}, Tr, { relatedTarget: 0 }), Ei = Oe($h), Gh = Y({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vh = Oe(Gh), Wh = Y({}, Rn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qh = Oe(Wh), Xh = Y({}, Rn, { data: 0 }), _a = Oe(Xh), bh = {
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
}, Zh = {
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
}, Yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Kh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yh[e]) ? !!t[e] : !1;
}
function su() {
  return Kh;
}
var Jh = Y({}, Tr, { key: function(e) {
  if (e.key) {
    var t = bh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: su, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qh = Oe(Jh), ep = Y({}, Ml, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ta = Oe(ep), tp = Y({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: su }), np = Oe(tp), rp = Y({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lp = Oe(rp), ip = Y({}, Ml, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), op = Oe(ip), up = [9, 13, 27, 32], fu = st && "CompositionEvent" in window, Yn = null;
st && "documentMode" in document && (Yn = document.documentMode);
var ap = st && "TextEvent" in window && !Yn, Pf = st && (!fu || Yn && 8 < Yn && 11 >= Yn), Ca = " ", Na = !1;
function Af(e, t) {
  switch (e) {
    case "keyup":
      return up.indexOf(t.keyCode) !== -1;
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
function If(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function sp(e, t) {
  switch (e) {
    case "compositionend":
      return If(t);
    case "keypress":
      return t.which !== 32 ? null : (Na = !0, Ca);
    case "textInput":
      return e = t.data, e === Ca && Na ? null : e;
    default:
      return null;
  }
}
function fp(e, t) {
  if (ln) return e === "compositionend" || !fu && Af(e, t) ? (e = kf(), qr = uu = Et = null, ln = !1, e) : null;
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
      return Pf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cp[e.type] : t === "textarea";
}
function Lf(e, t, n, r) {
  af(r), t = vl(t, "onChange"), 0 < t.length && (n = new au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Kn = null, sr = null;
function dp(e) {
  $f(e, 0);
}
function Bl(e) {
  var t = an(e);
  if (ef(t)) return e;
}
function hp(e, t) {
  if (e === "change") return t;
}
var Rf = !1;
if (st) {
  var Si;
  if (st) {
    var wi = "oninput" in document;
    if (!wi) {
      var Pa = document.createElement("div");
      Pa.setAttribute("oninput", "return;"), wi = typeof Pa.oninput == "function";
    }
    Si = wi;
  } else Si = !1;
  Rf = Si && (!document.documentMode || 9 < document.documentMode);
}
function Aa() {
  Kn && (Kn.detachEvent("onpropertychange", Of), sr = Kn = null);
}
function Of(e) {
  if (e.propertyName === "value" && Bl(sr)) {
    var t = [];
    Lf(t, sr, e, nu(e)), df(dp, t);
  }
}
function pp(e, t, n) {
  e === "focusin" ? (Aa(), Kn = t, sr = n, Kn.attachEvent("onpropertychange", Of)) : e === "focusout" && Aa();
}
function mp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bl(sr);
}
function vp(e, t) {
  if (e === "click") return Bl(t);
}
function gp(e, t) {
  if (e === "input" || e === "change") return Bl(t);
}
function yp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : yp;
function fr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!$i.call(t, l) || !Ye(e[l], t[l])) return !1;
  }
  return !0;
}
function Ia(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Ia(e);
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
    n = Ia(n);
  }
}
function Hf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mf() {
  for (var e = window, t = sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sl(e.document);
  }
  return t;
}
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ep(e) {
  var t = Mf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hf(n.ownerDocument.documentElement, n)) {
    if (r !== null && cu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = La(n, i);
        var o = La(
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
var Sp = st && "documentMode" in document && 11 >= document.documentMode, on = null, uo = null, Jn = null, ao = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ao || on == null || on !== sl(r) || (r = on, "selectionStart" in r && cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jn && fr(Jn, r) || (Jn = r, r = vl(uo, "onSelect"), 0 < r.length && (t = new au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = on)));
}
function Ur(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var un = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, xi = {}, Bf = {};
st && (Bf = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
function Dl(e) {
  if (xi[e]) return xi[e];
  if (!un[e]) return e;
  var t = un[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bf) return xi[e] = t[n];
  return e;
}
var Df = Dl("animationend"), Ff = Dl("animationiteration"), Uf = Dl("animationstart"), zf = Dl("transitionend"), jf = /* @__PURE__ */ new Map(), Oa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lt(e, t) {
  jf.set(e, t), Kt(t, [e]);
}
for (var _i = 0; _i < Oa.length; _i++) {
  var Ti = Oa[_i], wp = Ti.toLowerCase(), xp = Ti[0].toUpperCase() + Ti.slice(1);
  Lt(wp, "on" + xp);
}
Lt(Df, "onAnimationEnd");
Lt(Ff, "onAnimationIteration");
Lt(Uf, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(zf, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _p = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wh(r, t, void 0, e), e.currentTarget = null;
}
function $f(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Ha(l, u, s), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Ha(l, u, s), i = a;
      }
    }
  }
  if (cl) throw e = ro, cl = !1, ro = null, e;
}
function G(e, t) {
  var n = t[po];
  n === void 0 && (n = t[po] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gf(t, e, 2, !1), n.add(r));
}
function Ci(e, t, n) {
  var r = 0;
  t && (r |= 4), Gf(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
  if (!e[zr]) {
    e[zr] = !0, Zs.forEach(function(n) {
      n !== "selectionchange" && (_p.has(n) || Ci(n, !1, e), Ci(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || (t[zr] = !0, Ci("selectionchange", !1, t));
  }
}
function Gf(e, t, n, r) {
  switch (Nf(t)) {
    case 1:
      var l = Dh;
      break;
    case 4:
      l = Fh;
      break;
    default:
      l = ou;
  }
  n = l.bind(null, t, n, e), l = void 0, !no || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ni(e, t, n, r, l) {
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
        if (o = zt(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  df(function() {
    var s = i, f = nu(n), m = [];
    e: {
      var h = jf.get(e);
      if (h !== void 0) {
        var v = au, E = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = qh;
            break;
          case "focusin":
            E = "focus", v = Ei;
            break;
          case "focusout":
            E = "blur", v = Ei;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ei;
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
            v = xa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = np;
            break;
          case Df:
          case Ff:
          case Uf:
            v = Vh;
            break;
          case zf:
            v = lp;
            break;
          case "scroll":
            v = Uh;
            break;
          case "wheel":
            v = op;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ta;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", d = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var c = s, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, d !== null && (g = ir(c, d), g != null && y.push(dr(c, g, p)))), P) break;
          c = c.return;
        }
        0 < y.length && (h = new v(h, E, null, n, f), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== eo && (E = n.relatedTarget || n.fromElement) && (zt(E) || E[ft])) break e;
        if ((v || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (E = n.relatedTarget || n.toElement, v = s, E = E ? zt(E) : null, E !== null && (P = Jt(E), E !== P || E.tag !== 5 && E.tag !== 6) && (E = null)) : (v = null, E = s), v !== E)) {
          if (y = xa, g = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ta, g = "onPointerLeave", d = "onPointerEnter", c = "pointer"), P = v == null ? h : an(v), p = E == null ? h : an(E), h = new y(g, c + "leave", v, n, f), h.target = P, h.relatedTarget = p, g = null, zt(f) === s && (y = new y(d, c + "enter", E, n, f), y.target = p, y.relatedTarget = P, g = y), P = g, v && E) t: {
            for (y = v, d = E, c = 0, p = y; p; p = tn(p)) c++;
            for (p = 0, g = d; g; g = tn(g)) p++;
            for (; 0 < c - p; ) y = tn(y), c--;
            for (; 0 < p - c; ) d = tn(d), p--;
            for (; c--; ) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = tn(y), d = tn(d);
            }
            y = null;
          }
          else y = null;
          v !== null && Ma(m, h, v, y, !1), E !== null && P !== null && Ma(m, P, E, y, !0);
        }
      }
      e: {
        if (h = s ? an(s) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var w = hp;
        else if (ka(h)) if (Rf) w = gp;
        else {
          w = mp;
          var T = pp;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = vp);
        if (w && (w = w(e, s))) {
          Lf(m, w, n, f);
          break e;
        }
        T && T(e, h, s), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Zi(h, "number", h.value);
      }
      switch (T = s ? an(s) : window, e) {
        case "focusin":
          (ka(T) || T.contentEditable === "true") && (on = T, uo = s, Jn = null);
          break;
        case "focusout":
          Jn = uo = on = null;
          break;
        case "mousedown":
          ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ao = !1, Ra(m, n, f);
          break;
        case "selectionchange":
          if (Sp) break;
        case "keydown":
        case "keyup":
          Ra(m, n, f);
      }
      var C;
      if (fu) e: {
        switch (e) {
          case "compositionstart":
            var I = "onCompositionStart";
            break e;
          case "compositionend":
            I = "onCompositionEnd";
            break e;
          case "compositionupdate":
            I = "onCompositionUpdate";
            break e;
        }
        I = void 0;
      }
      else ln ? Af(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Pf && n.locale !== "ko" && (ln || I !== "onCompositionStart" ? I === "onCompositionEnd" && ln && (C = kf()) : (Et = f, uu = "value" in Et ? Et.value : Et.textContent, ln = !0)), T = vl(s, I), 0 < T.length && (I = new _a(I, e, null, n, f), m.push({ event: I, listeners: T }), C ? I.data = C : (C = If(n), C !== null && (I.data = C)))), (C = ap ? sp(e, n) : fp(e, n)) && (s = vl(s, "onBeforeInput"), 0 < s.length && (f = new _a("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: s }), f.data = C));
    }
    $f(m, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = ir(e, n), i != null && r.unshift(dr(e, i, l)), i = ir(e, t), i != null && r.push(dr(e, i, l))), e = e.return;
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ma(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, l ? (a = ir(n, i), a != null && o.unshift(dr(n, a, u))) : l || (a = ir(n, i), a != null && o.push(dr(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Tp = /\r\n?/g, Cp = /\u0000|\uFFFD/g;
function Ba(e) {
  return (typeof e == "string" ? e : "" + e).replace(Tp, `
`).replace(Cp, "");
}
function jr(e, t, n) {
  if (t = Ba(t), Ba(e) !== t && n) throw Error(S(425));
}
function gl() {
}
var so = null, fo = null;
function co(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ho = typeof setTimeout == "function" ? setTimeout : void 0, Np = typeof clearTimeout == "function" ? clearTimeout : void 0, Da = typeof Promise == "function" ? Promise : void 0, kp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Da < "u" ? function(e) {
  return Da.resolve(null).then(e).catch(Pp);
} : ho;
function Pp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ki(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), ar(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  ar(t);
}
function Tt(e) {
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
function Fa(e) {
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
var On = Math.random().toString(36).slice(2), qe = "__reactFiber$" + On, hr = "__reactProps$" + On, ft = "__reactContainer$" + On, po = "__reactEvents$" + On, Ap = "__reactListeners$" + On, Ip = "__reactHandles$" + On;
function zt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ft] || n[qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fa(e); e !== null; ) {
        if (n = e[qe]) return n;
        e = Fa(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Cr(e) {
  return e = e[qe] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Fl(e) {
  return e[hr] || null;
}
var mo = [], sn = -1;
function Rt(e) {
  return { current: e };
}
function W(e) {
  0 > sn || (e.current = mo[sn], mo[sn] = null, sn--);
}
function j(e, t) {
  sn++, mo[sn] = e.current, e.current = t;
}
var It = {}, pe = Rt(It), Ce = Rt(!1), Wt = It;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function yl() {
  W(Ce), W(pe);
}
function Ua(e, t, n) {
  if (pe.current !== It) throw Error(S(168));
  j(pe, t), j(Ce, n);
}
function Vf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, ph(e) || "Unknown", l));
  return Y({}, n, r);
}
function El(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Wt = pe.current, j(pe, e), j(Ce, Ce.current), !0;
}
function za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Vf(e, t, Wt), r.__reactInternalMemoizedMergedChildContext = e, W(Ce), W(pe), j(pe, e)) : W(Ce), j(Ce, n);
}
var it = null, Ul = !1, Pi = !1;
function Wf(e) {
  it === null ? it = [e] : it.push(e);
}
function Lp(e) {
  Ul = !0, Wf(e);
}
function Ot() {
  if (!Pi && it !== null) {
    Pi = !0;
    var e = 0, t = U;
    try {
      var n = it;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      it = null, Ul = !1;
    } catch (l) {
      throw it !== null && (it = it.slice(e + 1)), vf(ru, Ot), l;
    } finally {
      U = t, Pi = !1;
    }
  }
  return null;
}
var fn = [], cn = 0, Sl = null, wl = 0, Me = [], Be = 0, Qt = null, ot = 1, ut = "";
function Ft(e, t) {
  fn[cn++] = wl, fn[cn++] = Sl, Sl = e, wl = t;
}
function Qf(e, t, n) {
  Me[Be++] = ot, Me[Be++] = ut, Me[Be++] = Qt, Qt = e;
  var r = ot;
  e = ut;
  var l = 32 - be(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - be(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, ot = 1 << 32 - be(t) + l | n << l | r, ut = i + e;
  } else ot = 1 << i | n << l | r, ut = e;
}
function du(e) {
  e.return !== null && (Ft(e, 1), Qf(e, 1, 0));
}
function hu(e) {
  for (; e === Sl; ) Sl = fn[--cn], fn[cn] = null, wl = fn[--cn], fn[cn] = null;
  for (; e === Qt; ) Qt = Me[--Be], Me[Be] = null, ut = Me[--Be], Me[Be] = null, ot = Me[--Be], Me[Be] = null;
}
var Ie = null, Ae = null, X = !1, Xe = null;
function Xf(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ja(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Ae = Tt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Qt !== null ? { id: ot, overflow: ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function vo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function go(e) {
  if (X) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!ja(e, t)) {
        if (vo(e)) throw Error(S(418));
        t = Tt(n.nextSibling);
        var r = Ie;
        t && ja(e, t) ? Xf(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Ie = e);
      }
    } else {
      if (vo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, X = !1, Ie = e;
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function $r(e) {
  if (e !== Ie) return !1;
  if (!X) return $a(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !co(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (vo(e)) throw bf(), Error(S(418));
    for (; t; ) Xf(e, t), t = Tt(t.nextSibling);
  }
  if ($a(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ie ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function bf() {
  for (var e = Ae; e; ) e = Tt(e.nextSibling);
}
function Tn() {
  Ae = Ie = null, X = !1;
}
function pu(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var Rp = ht.ReactCurrentBatchConfig;
function jn(e, t, n) {
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
function Gr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ga(e) {
  var t = e._init;
  return t(e._payload);
}
function Zf(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
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
  function l(d, c) {
    return d = Pt(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, p, g) {
    return c === null || c.tag !== 6 ? (c = Mi(p, d.mode, g), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function a(d, c, p, g) {
    var w = p.type;
    return w === rn ? f(d, c, p.props.children, g, p.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === mt && Ga(w) === c.type) ? (g = l(c, p.props), g.ref = jn(d, c, p), g.return = d, g) : (g = ul(p.type, p.key, p.props, null, d.mode, g), g.ref = jn(d, c, p), g.return = d, g);
  }
  function s(d, c, p, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Bi(p, d.mode, g), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
  }
  function f(d, c, p, g, w) {
    return c === null || c.tag !== 7 ? (c = Vt(p, d.mode, g, w), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function m(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Mi("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Rr:
          return p = ul(c.type, c.key, c.props, null, d.mode, p), p.ref = jn(d, null, c), p.return = d, p;
        case nn:
          return c = Bi(c, d.mode, p), c.return = d, c;
        case mt:
          var g = c._init;
          return m(d, g(c._payload), p);
      }
      if (Wn(c) || Bn(c)) return c = Vt(c, d.mode, p, null), c.return = d, c;
      Gr(d, c);
    }
    return null;
  }
  function h(d, c, p, g) {
    var w = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return w !== null ? null : u(d, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rr:
          return p.key === w ? a(d, c, p, g) : null;
        case nn:
          return p.key === w ? s(d, c, p, g) : null;
        case mt:
          return w = p._init, h(
            d,
            c,
            w(p._payload),
            g
          );
      }
      if (Wn(p) || Bn(p)) return w !== null ? null : f(d, c, p, g, null);
      Gr(d, p);
    }
    return null;
  }
  function v(d, c, p, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(p) || null, u(c, d, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Rr:
          return d = d.get(g.key === null ? p : g.key) || null, a(c, d, g, w);
        case nn:
          return d = d.get(g.key === null ? p : g.key) || null, s(c, d, g, w);
        case mt:
          var T = g._init;
          return v(d, c, p, T(g._payload), w);
      }
      if (Wn(g) || Bn(g)) return d = d.get(p) || null, f(c, d, g, w, null);
      Gr(c, g);
    }
    return null;
  }
  function E(d, c, p, g) {
    for (var w = null, T = null, C = c, I = c = 0, $ = null; C !== null && I < p.length; I++) {
      C.index > I ? ($ = C, C = null) : $ = C.sibling;
      var H = h(d, C, p[I], g);
      if (H === null) {
        C === null && (C = $);
        break;
      }
      e && C && H.alternate === null && t(d, C), c = i(H, c, I), T === null ? w = H : T.sibling = H, T = H, C = $;
    }
    if (I === p.length) return n(d, C), X && Ft(d, I), w;
    if (C === null) {
      for (; I < p.length; I++) C = m(d, p[I], g), C !== null && (c = i(C, c, I), T === null ? w = C : T.sibling = C, T = C);
      return X && Ft(d, I), w;
    }
    for (C = r(d, C); I < p.length; I++) $ = v(C, d, I, p[I], g), $ !== null && (e && $.alternate !== null && C.delete($.key === null ? I : $.key), c = i($, c, I), T === null ? w = $ : T.sibling = $, T = $);
    return e && C.forEach(function(Ge) {
      return t(d, Ge);
    }), X && Ft(d, I), w;
  }
  function y(d, c, p, g) {
    var w = Bn(p);
    if (typeof w != "function") throw Error(S(150));
    if (p = w.call(p), p == null) throw Error(S(151));
    for (var T = w = null, C = c, I = c = 0, $ = null, H = p.next(); C !== null && !H.done; I++, H = p.next()) {
      C.index > I ? ($ = C, C = null) : $ = C.sibling;
      var Ge = h(d, C, H.value, g);
      if (Ge === null) {
        C === null && (C = $);
        break;
      }
      e && C && Ge.alternate === null && t(d, C), c = i(Ge, c, I), T === null ? w = Ge : T.sibling = Ge, T = Ge, C = $;
    }
    if (H.done) return n(
      d,
      C
    ), X && Ft(d, I), w;
    if (C === null) {
      for (; !H.done; I++, H = p.next()) H = m(d, H.value, g), H !== null && (c = i(H, c, I), T === null ? w = H : T.sibling = H, T = H);
      return X && Ft(d, I), w;
    }
    for (C = r(d, C); !H.done; I++, H = p.next()) H = v(C, d, I, H.value, g), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? I : H.key), c = i(H, c, I), T === null ? w = H : T.sibling = H, T = H);
    return e && C.forEach(function(Hn) {
      return t(d, Hn);
    }), X && Ft(d, I), w;
  }
  function P(d, c, p, g) {
    if (typeof p == "object" && p !== null && p.type === rn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rr:
          e: {
            for (var w = p.key, T = c; T !== null; ) {
              if (T.key === w) {
                if (w = p.type, w === rn) {
                  if (T.tag === 7) {
                    n(d, T.sibling), c = l(T, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (T.elementType === w || typeof w == "object" && w !== null && w.$$typeof === mt && Ga(w) === T.type) {
                  n(d, T.sibling), c = l(T, p.props), c.ref = jn(d, T, p), c.return = d, d = c;
                  break e;
                }
                n(d, T);
                break;
              } else t(d, T);
              T = T.sibling;
            }
            p.type === rn ? (c = Vt(p.props.children, d.mode, g, p.key), c.return = d, d = c) : (g = ul(p.type, p.key, p.props, null, d.mode, g), g.ref = jn(d, c, p), g.return = d, d = g);
          }
          return o(d);
        case nn:
          e: {
            for (T = p.key; c !== null; ) {
              if (c.key === T) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Bi(p, d.mode, g), c.return = d, d = c;
          }
          return o(d);
        case mt:
          return T = p._init, P(d, c, T(p._payload), g);
      }
      if (Wn(p)) return E(d, c, p, g);
      if (Bn(p)) return y(d, c, p, g);
      Gr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = Mi(p, d.mode, g), c.return = d, d = c), o(d)) : n(d, c);
  }
  return P;
}
var Cn = Zf(!0), Yf = Zf(!1), xl = Rt(null), _l = null, dn = null, mu = null;
function vu() {
  mu = dn = _l = null;
}
function gu(e) {
  var t = xl.current;
  W(xl), e._currentValue = t;
}
function yo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Sn(e, t) {
  _l = e, mu = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function Ue(e) {
  var t = e._currentValue;
  if (mu !== e) if (e = { context: e, memoizedValue: t, next: null }, dn === null) {
    if (_l === null) throw Error(S(308));
    dn = e, _l.dependencies = { lanes: 0, firstContext: e };
  } else dn = dn.next = e;
  return t;
}
var jt = null;
function yu(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function Kf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Eu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Jf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, yu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ct(e, n);
}
function tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lu(e, n);
  }
}
function Va(e, t) {
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
function Tl(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, o === null ? i = s : o.next = s, o = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== o && (u === null ? f.firstBaseUpdate = s : u.next = s, f.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, f = s = a = null, u = i;
    do {
      var h = u.lane, v = u.eventTime;
      if ((r & h) === h) {
        f !== null && (f = f.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var E = e, y = u;
          switch (h = t, v = n, y.tag) {
            case 1:
              if (E = y.payload, typeof E == "function") {
                m = E.call(v, m, h);
                break e;
              }
              m = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = y.payload, h = typeof E == "function" ? E.call(v, m, h) : E, h == null) break e;
              m = Y({}, m, h);
              break e;
            case 2:
              vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else v = { eventTime: v, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (s = f = v, a = m) : f = f.next = v, o |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = m), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    bt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Wa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var Nr = {}, tt = Rt(Nr), pr = Rt(Nr), mr = Rt(Nr);
function $t(e) {
  if (e === Nr) throw Error(S(174));
  return e;
}
function Su(e, t) {
  switch (j(mr, t), j(pr, e), j(tt, Nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ki(t, e);
  }
  W(tt), j(tt, t);
}
function Nn() {
  W(tt), W(pr), W(mr);
}
function qf(e) {
  $t(mr.current);
  var t = $t(tt.current), n = Ki(t, e.type);
  t !== n && (j(pr, e), j(tt, n));
}
function wu(e) {
  pr.current === e && (W(tt), W(pr));
}
var b = Rt(0);
function Cl(e) {
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
var Ai = [];
function xu() {
  for (var e = 0; e < Ai.length; e++) Ai[e]._workInProgressVersionPrimary = null;
  Ai.length = 0;
}
var nl = ht.ReactCurrentDispatcher, Ii = ht.ReactCurrentBatchConfig, Xt = 0, Z = null, ne = null, ie = null, Nl = !1, qn = !1, vr = 0, Op = 0;
function ce() {
  throw Error(S(321));
}
function _u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, i) {
  if (Xt = i, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? Dp : Fp, e = n(r, l), qn) {
    i = 0;
    do {
      if (qn = !1, vr = 0, 25 <= i) throw Error(S(301));
      i += 1, ie = ne = null, t.updateQueue = null, nl.current = Up, e = n(r, l);
    } while (qn);
  }
  if (nl.current = kl, t = ne !== null && ne.next !== null, Xt = 0, ie = ne = Z = null, Nl = !1, t) throw Error(S(300));
  return e;
}
function Cu() {
  var e = vr !== 0;
  return vr = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? Z.memoizedState = ie = e : ie = ie.next = e, ie;
}
function ze() {
  if (ne === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ie === null ? Z.memoizedState : ie.next;
  if (t !== null) ie = t, ne = e;
  else {
    if (e === null) throw Error(S(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, ie === null ? Z.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Li(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ne, l = r.baseQueue, i = n.pending;
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
      var f = s.lane;
      if ((Xt & f) === f) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = m, o = r) : a = a.next = m, Z.lanes |= f, bt |= f;
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? o = r : a.next = u, Ye(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Z.lanes |= i, bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ri(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Ye(i, t.memoizedState) || (Te = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ec() {
}
function tc(e, t) {
  var n = Z, r = ze(), l = t(), i = !Ye(r.memoizedState, l);
  if (i && (r.memoizedState = l, Te = !0), r = r.queue, Nu(lc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, yr(9, rc.bind(null, n, r, l, t), void 0, null), oe === null) throw Error(S(349));
    Xt & 30 || nc(n, t, l);
  }
  return l;
}
function nc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ic(t) && oc(e);
}
function lc(e, t, n) {
  return n(function() {
    ic(t) && oc(e);
  });
}
function ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = ct(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Qa(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bp.bind(null, Z, e), [t.memoizedState, e];
}
function yr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function uc() {
  return ze().memoizedState;
}
function rl(e, t, n, r) {
  var l = Je();
  Z.flags |= e, l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r);
}
function zl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ne !== null) {
    var o = ne.memoizedState;
    if (i = o.destroy, r !== null && _u(r, o.deps)) {
      l.memoizedState = yr(t, n, i, r);
      return;
    }
  }
  Z.flags |= e, l.memoizedState = yr(1 | t, n, i, r);
}
function Xa(e, t) {
  return rl(8390656, 8, e, t);
}
function Nu(e, t) {
  return zl(2048, 8, e, t);
}
function ac(e, t) {
  return zl(4, 2, e, t);
}
function sc(e, t) {
  return zl(4, 4, e, t);
}
function fc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function cc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zl(4, 4, fc.bind(null, t, e), n);
}
function ku() {
}
function dc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function hc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function pc(e, t, n) {
  return Xt & 21 ? (Ye(n, t) || (n = Ef(), Z.lanes |= n, bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function Hp(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ii.transition;
  Ii.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, Ii.transition = r;
  }
}
function mc() {
  return ze().memoizedState;
}
function Mp(e, t, n) {
  var r = kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vc(e)) gc(t, n);
  else if (n = Kf(e, t, n, r), n !== null) {
    var l = Se();
    Ze(n, e, r, l), yc(n, t, r);
  }
}
function Bp(e, t, n) {
  var r = kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vc(e)) gc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ye(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, yu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Kf(e, t, l, r), n !== null && (l = Se(), Ze(n, e, r, l), yc(n, t, r));
  }
}
function vc(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function gc(e, t) {
  qn = Nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lu(e, n);
  }
}
var kl = { readContext: Ue, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, Dp = { readContext: Ue, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ue, useEffect: Xa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rl(
    4194308,
    4,
    fc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Mp.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qa, useDebugValue: ku, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = Qa(!1), t = e[0];
  return e = Hp.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, l = Je();
  if (X) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(S(349));
    Xt & 30 || nc(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Xa(lc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, yr(9, rc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = oe.identifierPrefix;
  if (X) {
    var n = ut, r = ot;
    n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Op++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Fp = {
  readContext: Ue,
  useCallback: dc,
  useContext: Ue,
  useEffect: Nu,
  useImperativeHandle: cc,
  useInsertionEffect: ac,
  useLayoutEffect: sc,
  useMemo: hc,
  useReducer: Li,
  useRef: uc,
  useState: function() {
    return Li(gr);
  },
  useDebugValue: ku,
  useDeferredValue: function(e) {
    var t = ze();
    return pc(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = Li(gr)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: ec,
  useSyncExternalStore: tc,
  useId: mc,
  unstable_isNewReconciler: !1
}, Up = { readContext: Ue, useCallback: dc, useContext: Ue, useEffect: Nu, useImperativeHandle: cc, useInsertionEffect: ac, useLayoutEffect: sc, useMemo: hc, useReducer: Ri, useRef: uc, useState: function() {
  return Ri(gr);
}, useDebugValue: ku, useDeferredValue: function(e) {
  var t = ze();
  return ne === null ? t.memoizedState = e : pc(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = Ri(gr)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: ec, useSyncExternalStore: tc, useId: mc, unstable_isNewReconciler: !1 };
function We(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Eo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = kt(e), i = at(r, l);
  i.payload = t, n != null && (i.callback = n), t = Ct(e, i, l), t !== null && (Ze(t, e, l, r), tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = kt(e), i = at(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ct(e, i, l), t !== null && (Ze(t, e, l, r), tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = kt(e), l = at(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ct(e, l, r), t !== null && (Ze(t, e, r, n), tl(t, e, r));
} };
function ba(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !fr(n, r) || !fr(l, i) : !0;
}
function Ec(e, t, n) {
  var r = !1, l = It, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ue(i) : (l = Ne(t) ? Wt : pe.current, r = t.contextTypes, i = (r = r != null) ? _n(e, l) : It), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Za(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jl.enqueueReplaceState(t, t.state, null);
}
function So(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Eu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ue(i) : (i = Ne(t) ? Wt : pe.current, l.context = _n(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Eo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && jl.enqueueReplaceState(l, l.state, null), Tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t) {
  try {
    var n = "", r = t;
    do
      n += hh(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Oi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zp = typeof WeakMap == "function" ? WeakMap : Map;
function Sc(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Al || (Al = !0, Lo = r), wo(e, t);
  }, n;
}
function wc(e, t, n) {
  n = at(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      wo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    wo(e, t), typeof r != "function" && (Nt === null ? Nt = /* @__PURE__ */ new Set([this]) : Nt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ya(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = em.bind(null, e, t, n), t.then(e, e));
}
function Ka(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ja(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Ct(n, t, 1))), n.lanes |= 1), e);
}
var jp = ht.ReactCurrentOwner, Te = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Yf(t, null, n, r) : Cn(t, e.child, n, r);
}
function qa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Sn(t, l), r = Tu(e, t, n, r, i, l), n = Cu(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (X && n && du(t), t.flags |= 1, ve(e, t, r, l), t.child);
}
function es(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Mu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, xc(e, t, i, r, l)) : (e = ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fr, n(o, r) && e.ref === t.ref) return dt(e, t, l);
  }
  return t.flags |= 1, e = Pt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function xc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fr(i, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, dt(e, t, l);
  }
  return xo(e, t, n, r, l);
}
function _c(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(pn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(pn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, j(pn, Pe), Pe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, j(pn, Pe), Pe |= r;
  return ve(e, t, l, n), t.child;
}
function Tc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function xo(e, t, n, r, l) {
  var i = Ne(n) ? Wt : pe.current;
  return i = _n(t, i), Sn(t, l), n = Tu(e, t, n, r, i, l), r = Cu(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (X && r && du(t), t.flags |= 1, ve(e, t, n, l), t.child);
}
function ts(e, t, n, r, l) {
  if (Ne(n)) {
    var i = !0;
    El(t);
  } else i = !1;
  if (Sn(t, l), t.stateNode === null) ll(e, t), Ec(t, n, r), So(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Ue(s) : (s = Ne(n) ? Wt : pe.current, s = _n(t, s));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && Za(t, o, r, s), vt = !1;
    var h = t.memoizedState;
    o.state = h, Tl(t, r, o, l), a = t.memoizedState, u !== r || h !== a || Ce.current || vt ? (typeof f == "function" && (Eo(t, n, f, r), a = t.memoizedState), (u = vt || ba(t, n, u, r, h, a, s)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Jf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : We(t.type, u), o.props = s, m = t.pendingProps, h = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ue(a) : (a = Ne(n) ? Wt : pe.current, a = _n(t, a));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || h !== a) && Za(t, o, r, a), vt = !1, h = t.memoizedState, o.state = h, Tl(t, r, o, l);
    var E = t.memoizedState;
    u !== m || h !== E || Ce.current || vt ? (typeof v == "function" && (Eo(t, n, v, r), E = t.memoizedState), (s = vt || ba(t, n, s, r, h, E, a) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, E, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, E, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), o.props = r, o.state = E, o.context = a, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return _o(e, t, n, r, i, l);
}
function _o(e, t, n, r, l, i) {
  Tc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && za(t, n, !1), dt(e, t, i);
  r = t.stateNode, jp.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Cn(t, e.child, null, i), t.child = Cn(t, null, u, i)) : ve(e, t, u, i), t.memoizedState = r.state, l && za(t, n, !0), t.child;
}
function Cc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ua(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ua(e, t.context, !1), Su(e, t.containerInfo);
}
function ns(e, t, n, r, l) {
  return Tn(), pu(l), t.flags |= 256, ve(e, t, n, r), t.child;
}
var To = { dehydrated: null, treeContext: null, retryLane: 0 };
function Co(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nc(e, t, n) {
  var r = t.pendingProps, l = b.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(b, l & 1), e === null)
    return go(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Vl(o, r, 0, null), e = Vt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Co(n), t.memoizedState = To, e) : Pu(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return $p(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Pt(u, i) : (i = Vt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Co(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = To, r;
  }
  return i = e.child, e = i.sibling, r = Pt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pu(e, t) {
  return t = Vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Vr(e, t, n, r) {
  return r !== null && pu(r), Cn(t, e.child, null, n), e = Pu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function $p(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Oi(Error(S(422))), Vr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Vl({ mode: "visible", children: r.children }, l, 0, null), i = Vt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Cn(t, e.child, null, o), t.child.memoizedState = Co(o), t.memoizedState = To, i);
  if (!(t.mode & 1)) return Vr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(S(419)), r = Oi(i, r, void 0), Vr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Te || u) {
    if (r = oe, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ct(e, l), Ze(r, e, l, -1));
    }
    return Hu(), r = Oi(Error(S(421))), Vr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ae = Tt(l.nextSibling), Ie = t, X = !0, Xe = null, e !== null && (Me[Be++] = ot, Me[Be++] = ut, Me[Be++] = Qt, ot = e.id, ut = e.overflow, Qt = t), t = Pu(t, r.children), t.flags |= 4096, t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yo(e.return, t, n);
}
function Hi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function kc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ve(e, t, r.children, n), r = b.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
      else if (e.tag === 19) rs(e, n, t);
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
  if (j(b, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Cl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Cl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Hi(t, !0, n, null, i);
      break;
    case "together":
      Hi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Gp(e, t, n) {
  switch (t.tag) {
    case 3:
      Cc(t), Tn();
      break;
    case 5:
      qf(t);
      break;
    case 1:
      Ne(t.type) && El(t);
      break;
    case 4:
      Su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(xl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(b, b.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nc(e, t, n) : (j(b, b.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      j(b, b.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return kc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(b, b.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _c(e, t, n);
  }
  return dt(e, t, n);
}
var Pc, No, Ac, Ic;
Pc = function(e, t) {
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
No = function() {
};
Ac = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, $t(tt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Xi(e, l), r = Xi(e, r), i = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Yi(e, l), r = Yi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
    }
    Ji(n, r);
    var o;
    n = null;
    for (s in l) if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null) if (s === "style") {
      var u = l[s];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (rr.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = l != null ? l[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (rr.hasOwnProperty(s) ? (a != null && s === "onScroll" && G("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
  if (!X) switch (e.tailMode) {
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
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Vp(e, t, n) {
  var r = t.pendingProps;
  switch (hu(t), t.tag) {
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
      return de(t), null;
    case 1:
      return Ne(t.type) && yl(), de(t), null;
    case 3:
      return r = t.stateNode, Nn(), W(Ce), W(pe), xu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (Ho(Xe), Xe = null))), No(e, t), de(t), null;
    case 5:
      wu(t);
      var l = $t(mr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return de(t), null;
        }
        if (e = $t(tt.current), $r(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[qe] = t, r[hr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Xn.length; l++) G(Xn[l], r);
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
              da(r, i), G("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, G("invalid", r);
              break;
            case "textarea":
              pa(r, i), G("invalid", r);
          }
          Ji(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && jr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : rr.hasOwnProperty(o) && u != null && o === "onScroll" && G("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), ha(r, i, !0);
              break;
            case "textarea":
              Or(r), ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = gl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[qe] = t, e[hr] = r, Pc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = qi(n, r), n) {
              case "dialog":
                G("cancel", e), G("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xn.length; l++) G(Xn[l], e);
                l = r;
                break;
              case "source":
                G("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                G(
                  "error",
                  e
                ), G("load", e), l = r;
                break;
              case "details":
                G("toggle", e), l = r;
                break;
              case "input":
                da(e, r), l = Xi(e, r), G("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), G("invalid", e);
                break;
              case "textarea":
                pa(e, r), l = Yi(e, r), G("invalid", e);
                break;
              default:
                l = r;
            }
            Ji(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? uf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && lf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && lr(e, a) : typeof a == "number" && lr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (rr.hasOwnProperty(i) ? a != null && i === "onScroll" && G("scroll", e) : a != null && Jo(e, i, a, o));
            }
            switch (n) {
              case "input":
                Or(e), ha(e, r, !1);
                break;
              case "textarea":
                Or(e), ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? vn(e, !!r.multiple, i, !1) : r.defaultValue != null && vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = gl);
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
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = $t(mr.current), $t(tt.current), $r(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qe] = t, (i = r.nodeValue !== n) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (W(b), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && Ae !== null && t.mode & 1 && !(t.flags & 128)) bf(), Tn(), t.flags |= 98560, i = !1;
        else if (i = $r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(S(317));
            i[qe] = t;
          } else Tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), i = !1;
        } else Xe !== null && (Ho(Xe), Xe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || b.current & 1 ? re === 0 && (re = 3) : Hu())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Nn(), No(e, t), e === null && cr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return gu(t.type._context), de(t), null;
    case 17:
      return Ne(t.type) && yl(), de(t), null;
    case 19:
      if (W(b), i = t.memoizedState, i === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) $n(i, !1);
      else {
        if (re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Cl(e), o !== null) {
            for (t.flags |= 128, $n(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(b, b.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && q() > Pn && (t.flags |= 128, r = !0, $n(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Cl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !X) return de(t), null;
        } else 2 * q() - i.renderingStartTime > Pn && n !== 1073741824 && (t.flags |= 128, r = !0, $n(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = q(), t.sibling = null, n = b.current, j(b, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ou(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Wp(e, t) {
  switch (hu(t), t.tag) {
    case 1:
      return Ne(t.type) && yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Nn(), W(Ce), W(pe), xu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wu(t), null;
    case 13:
      if (W(b), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Tn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(b), null;
    case 4:
      return Nn(), null;
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
var Wr = !1, he = !1, Qp = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    K(e, t, r);
  }
  else n.current = null;
}
function ko(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var ls = !1;
function Xp(e, t) {
  if (so = pl, e = Mf(), cu(e)) {
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
        var o = 0, u = -1, a = -1, s = 0, f = 0, m = e, h = null;
        t: for (; ; ) {
          for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (a = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (v = m.firstChild) !== null; )
            h = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++s === l && (u = o), h === i && ++f === r && (a = o), (v = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = v;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fo = { focusedElem: e, selectionRange: n }, pl = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var y = E.memoizedProps, P = E.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : We(t.type, y), P);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(S(163));
      }
    } catch (g) {
      K(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return E = ls, ls = !1, E;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && ko(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function $l(e, t) {
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
function Po(e) {
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
function Lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qe], delete t[hr], delete t[po], delete t[Ap], delete t[Ip])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function is(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, t, n), e = e.sibling; e !== null; ) Ao(e, t, n), e = e.sibling;
}
function Io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), e = e.sibling;
}
var ae = null, Qe = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) Oc(e, t, n), n = n.sibling;
}
function Oc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function") try {
    et.onCommitFiberUnmount(Hl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || hn(n, t);
    case 6:
      var r = ae, l = Qe;
      ae = null, pt(e, t, n), ae = r, Qe = l, ae !== null && (Qe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Qe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), ar(e)) : ki(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Qe, ae = n.stateNode.containerInfo, Qe = !0, pt(e, t, n), ae = r, Qe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && ko(n, t, o), l = l.next;
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (!he && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        K(n, t, u);
      }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, pt(e, t, n), he = r) : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function os(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qp()), t.forEach(function(r) {
      var l = nm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ae = u.stateNode, Qe = !1;
            break e;
          case 3:
            ae = u.stateNode.containerInfo, Qe = !0;
            break e;
          case 4:
            ae = u.stateNode.containerInfo, Qe = !0;
            break e;
        }
        u = u.return;
      }
      if (ae === null) throw Error(S(160));
      Oc(i, o, l), ae = null, Qe = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (s) {
      K(l, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hc(t, e), t = t.sibling;
}
function Hc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ve(t, e), Ke(e), r & 4) {
        try {
          er(3, e, e.return), $l(3, e);
        } catch (y) {
          K(e, e.return, y);
        }
        try {
          er(5, e, e.return);
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 1:
      Ve(t, e), Ke(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Ve(t, e), Ke(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          lr(l, "");
        } catch (y) {
          K(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && tf(l, i), qi(u, o);
          var s = qi(u, i);
          for (o = 0; o < a.length; o += 2) {
            var f = a[o], m = a[o + 1];
            f === "style" ? uf(l, m) : f === "dangerouslySetInnerHTML" ? lf(l, m) : f === "children" ? lr(l, m) : Jo(l, f, m, s);
          }
          switch (u) {
            case "input":
              bi(l, i);
              break;
            case "textarea":
              nf(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? vn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? vn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : vn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[hr] = i;
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ve(t, e), Ke(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ve(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ar(t.containerInfo);
      } catch (y) {
        K(e, e.return, y);
      }
      break;
    case 4:
      Ve(t, e), Ke(e);
      break;
    case 13:
      Ve(t, e), Ke(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Lu = q())), r & 4 && os(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (s = he) || f, Ve(t, e), he = s) : Ve(t, e), Ke(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1) for (N = e, f = e.child; f !== null; ) {
          for (m = N = f; N !== null; ) {
            switch (h = N, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                er(4, h, h.return);
                break;
              case 1:
                hn(h, h.return);
                var E = h.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (y) {
                    K(r, n, y);
                  }
                }
                break;
              case 5:
                hn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  as(m);
                  continue;
                }
            }
            v !== null ? (v.return = h, N = v) : as(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                l = m.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = of("display", o));
              } catch (y) {
                K(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = s ? "" : m.memoizedProps;
            } catch (y) {
              K(e, e.return, y);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), m = m.return;
          }
          f === m && (f = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ve(t, e), Ke(e), r & 4 && os(e);
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
          if (Rc(n)) {
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
          r.flags & 32 && (lr(l, ""), r.flags &= -33);
          var i = is(e);
          Io(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = is(e);
          Ao(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bp(e, t, n) {
  N = e, Mc(e);
}
function Mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Wr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || he;
        u = Wr;
        var s = he;
        if (Wr = o, (he = a) && !s) for (N = l; N !== null; ) o = N, a = o.child, o.tag === 22 && o.memoizedState !== null ? ss(l) : a !== null ? (a.return = o, N = a) : ss(l);
        for (; i !== null; ) N = i, Mc(i), i = i.sibling;
        N = l, Wr = u, he = s;
      }
      us(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, N = i) : us(e);
  }
}
function us(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || $l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wa(t, i, r);
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
              Wa(t, o, n);
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
                  var m = f.dehydrated;
                  m !== null && ar(m);
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
        he || t.flags & 512 && Po(t);
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function as(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function ss(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $l(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, l, a);
            }
          }
          var i = t.return;
          try {
            Po(t);
          } catch (a) {
            K(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Po(t);
          } catch (a) {
            K(t, o, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var Zp = Math.ceil, Pl = ht.ReactCurrentDispatcher, Au = ht.ReactCurrentOwner, Fe = ht.ReactCurrentBatchConfig, F = 0, oe = null, ee = null, se = 0, Pe = 0, pn = Rt(0), re = 0, Er = null, bt = 0, Gl = 0, Iu = 0, tr = null, _e = null, Lu = 0, Pn = 1 / 0, lt = null, Al = !1, Lo = null, Nt = null, Qr = !1, St = null, Il = 0, nr = 0, Ro = null, il = -1, ol = 0;
function Se() {
  return F & 6 ? q() : il !== -1 ? il : il = q();
}
function kt(e) {
  return e.mode & 1 ? F & 2 && se !== 0 ? se & -se : Rp.transition !== null ? (ol === 0 && (ol = Ef()), ol) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Nf(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < nr) throw nr = 0, Ro = null, Error(S(185));
  _r(e, n, r), (!(F & 2) || e !== oe) && (e === oe && (!(F & 2) && (Gl |= n), re === 4 && yt(e, se)), ke(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Pn = q() + 500, Ul && Ot()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Rh(e, t);
  var r = hl(e, e === oe ? se : 0);
  if (r === 0) n !== null && ya(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ya(n), t === 1) e.tag === 0 ? Lp(fs.bind(null, e)) : Wf(fs.bind(null, e)), kp(function() {
      !(F & 6) && Ot();
    }), n = null;
    else {
      switch (Sf(r)) {
        case 1:
          n = ru;
          break;
        case 4:
          n = gf;
          break;
        case 16:
          n = dl;
          break;
        case 536870912:
          n = yf;
          break;
        default:
          n = dl;
      }
      n = Gc(n, Bc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bc(e, t) {
  if (il = -1, ol = 0, F & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = hl(e, e === oe ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = Fc();
    (oe !== e || se !== t) && (lt = null, Pn = q() + 500, Gt(e, t));
    do
      try {
        Jp();
        break;
      } catch (u) {
        Dc(e, u);
      }
    while (!0);
    vu(), Pl.current = i, F = l, ee !== null ? t = 0 : (oe = null, se = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (l = lo(e), l !== 0 && (r = l, t = Oo(e, l))), t === 1) throw n = Er, Gt(e, 0), yt(e, r), ke(e, q()), n;
    if (t === 6) yt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Yp(l) && (t = Ll(e, r), t === 2 && (i = lo(e), i !== 0 && (r = i, t = Oo(e, i))), t === 1)) throw n = Er, Gt(e, 0), yt(e, r), ke(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ut(e, _e, lt);
          break;
        case 3:
          if (yt(e, r), (r & 130023424) === r && (t = Lu + 500 - q(), 10 < t)) {
            if (hl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ho(Ut.bind(null, e, _e, lt), t);
            break;
          }
          Ut(e, _e, lt);
          break;
        case 4:
          if (yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - be(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ho(Ut.bind(null, e, _e, lt), r);
            break;
          }
          Ut(e, _e, lt);
          break;
        case 5:
          Ut(e, _e, lt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ke(e, q()), e.callbackNode === n ? Bc.bind(null, e) : null;
}
function Oo(e, t) {
  var n = tr;
  return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = Ll(e, t), e !== 2 && (t = _e, _e = n, t !== null && Ho(t)), e;
}
function Ho(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Yp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ye(i(), l)) return !1;
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
function yt(e, t) {
  for (t &= ~Iu, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - be(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fs(e) {
  if (F & 6) throw Error(S(327));
  wn();
  var t = hl(e, 0);
  if (!(t & 1)) return ke(e, q()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lo(e);
    r !== 0 && (t = r, n = Oo(e, r));
  }
  if (n === 1) throw n = Er, Gt(e, 0), yt(e, t), ke(e, q()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ut(e, _e, lt), ke(e, q()), null;
}
function Ru(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Pn = q() + 500, Ul && Ot());
  }
}
function Zt(e) {
  St !== null && St.tag === 0 && !(F & 6) && wn();
  var t = F;
  F |= 1;
  var n = Fe.transition, r = U;
  try {
    if (Fe.transition = null, U = 1, e) return e();
  } finally {
    U = r, Fe.transition = n, F = t, !(F & 6) && Ot();
  }
}
function Ou() {
  Pe = pn.current, W(pn);
}
function Gt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Np(n)), ee !== null) for (n = ee.return; n !== null; ) {
    var r = n;
    switch (hu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && yl();
        break;
      case 3:
        Nn(), W(Ce), W(pe), xu();
        break;
      case 5:
        wu(r);
        break;
      case 4:
        Nn();
        break;
      case 13:
        W(b);
        break;
      case 19:
        W(b);
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
  if (oe = e, ee = e = Pt(e.current, null), se = Pe = t, re = 0, Er = null, Iu = Gl = bt = 0, _e = tr = null, jt !== null) {
    for (t = 0; t < jt.length; t++) if (n = jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    jt = null;
  }
  return e;
}
function Dc(e, t) {
  do {
    var n = ee;
    try {
      if (vu(), nl.current = kl, Nl) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Nl = !1;
      }
      if (Xt = 0, ie = ne = Z = null, qn = !1, vr = 0, Au.current = null, n === null || n.return === null) {
        re = 1, Er = t, ee = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = se, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, f = u, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = f.alternate;
            h ? (f.updateQueue = h.updateQueue, f.memoizedState = h.memoizedState, f.lanes = h.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = Ka(o);
          if (v !== null) {
            v.flags &= -257, Ja(v, o, u, i, t), v.mode & 1 && Ya(i, s, t), t = v, a = s;
            var E = t.updateQueue;
            if (E === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), t.updateQueue = y;
            } else E.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ya(i, s, t), Hu();
              break e;
            }
            a = Error(S(426));
          }
        } else if (X && u.mode & 1) {
          var P = Ka(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Ja(P, o, u, i, t), pu(kn(a, u));
            break e;
          }
        }
        i = a = kn(a, u), re !== 4 && (re = 2), tr === null ? tr = [i] : tr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Sc(i, a, t);
              Va(i, d);
              break e;
            case 1:
              u = a;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Nt === null || !Nt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = wc(i, u, t);
                Va(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zc(n);
    } catch (w) {
      t = w, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fc() {
  var e = Pl.current;
  return Pl.current = kl, e === null ? kl : e;
}
function Hu() {
  (re === 0 || re === 3 || re === 2) && (re = 4), oe === null || !(bt & 268435455) && !(Gl & 268435455) || yt(oe, se);
}
function Ll(e, t) {
  var n = F;
  F |= 2;
  var r = Fc();
  (oe !== e || se !== t) && (lt = null, Gt(e, t));
  do
    try {
      Kp();
      break;
    } catch (l) {
      Dc(e, l);
    }
  while (!0);
  if (vu(), F = n, Pl.current = r, ee !== null) throw Error(S(261));
  return oe = null, se = 0, re;
}
function Kp() {
  for (; ee !== null; ) Uc(ee);
}
function Jp() {
  for (; ee !== null && !_h(); ) Uc(ee);
}
function Uc(e) {
  var t = $c(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? zc(e) : ee = t, Au.current = null;
}
function zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Wp(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, ee = null;
        return;
      }
    } else if (n = Vp(n, t, Pe), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Ut(e, t, n) {
  var r = U, l = Fe.transition;
  try {
    Fe.transition = null, U = 1, qp(e, t, n, r);
  } finally {
    Fe.transition = l, U = r;
  }
  return null;
}
function qp(e, t, n, r) {
  do
    wn();
  while (St !== null);
  if (F & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Oh(e, i), e === oe && (ee = oe = null, se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qr || (Qr = !0, Gc(dl, function() {
    return wn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Fe.transition, Fe.transition = null;
    var o = U;
    U = 1;
    var u = F;
    F |= 4, Au.current = null, Xp(e, n), Hc(n, e), Ep(fo), pl = !!so, fo = so = null, e.current = n, bp(n), Th(), F = u, U = o, Fe.transition = i;
  } else e.current = n;
  if (Qr && (Qr = !1, St = e, Il = l), i = e.pendingLanes, i === 0 && (Nt = null), kh(n.stateNode), ke(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Al) throw Al = !1, e = Lo, Lo = null, e;
  return Il & 1 && e.tag !== 0 && wn(), i = e.pendingLanes, i & 1 ? e === Ro ? nr++ : (nr = 0, Ro = e) : nr = 0, Ot(), null;
}
function wn() {
  if (St !== null) {
    var e = Sf(Il), t = Fe.transition, n = U;
    try {
      if (Fe.transition = null, U = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, Il = 0, F & 6) throw Error(S(331));
        var l = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var i = N, o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (N = s; N !== null; ) {
                  var f = N;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, N = m;
                  else for (; N !== null; ) {
                    f = N;
                    var h = f.sibling, v = f.return;
                    if (Lc(f), f === s) {
                      N = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, N = h;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var y = E.child;
                if (y !== null) {
                  E.child = null;
                  do {
                    var P = y.sibling;
                    y.sibling = null, y = P;
                  } while (y !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, N = o;
          else e: for (; N !== null; ) {
            if (i = N, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                er(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, N = d;
              break e;
            }
            N = i.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          o = N;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, N = p;
          else e: for (o = c; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  $l(9, u);
              }
            } catch (w) {
              K(u, u.return, w);
            }
            if (u === o) {
              N = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, N = g;
              break e;
            }
            N = u.return;
          }
        }
        if (F = l, Ot(), et && typeof et.onPostCommitFiberRoot == "function") try {
          et.onPostCommitFiberRoot(Hl, e);
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
function cs(e, t, n) {
  t = kn(n, t), t = Sc(e, t, 1), e = Ct(e, t, 1), t = Se(), e !== null && (_r(e, 1, t), ke(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) cs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      cs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
        e = kn(n, e), e = wc(t, e, 1), t = Ct(t, e, 1), e = Se(), t !== null && (_r(t, 1, e), ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function em(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (se & n) === n && (re === 4 || re === 3 && (se & 130023424) === se && 500 > q() - Lu ? Gt(e, 0) : Iu |= n), ke(e, t);
}
function jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Br, Br <<= 1, !(Br & 130023424) && (Br = 4194304)) : t = 1);
  var n = Se();
  e = ct(e, t), e !== null && (_r(e, t, n), ke(e, n));
}
function tm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), jc(e, n);
}
function nm(e, t) {
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
  r !== null && r.delete(t), jc(e, n);
}
var $c;
$c = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ce.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, Gp(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, X && t.flags & 1048576 && Qf(t, wl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ll(e, t), e = t.pendingProps;
      var l = _n(t, pe.current);
      Sn(t, n), l = Tu(null, t, r, e, l, n);
      var i = Cu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (i = !0, El(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Eu(t), l.updater = jl, t.stateNode = l, l._reactInternals = t, So(t, r, e, n), t = _o(null, t, r, !0, i, n)) : (t.tag = 0, X && i && du(t), ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = lm(r), e = We(r, e), l) {
          case 0:
            t = xo(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = qa(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, We(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), xo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), ts(e, t, r, l, n);
    case 3:
      e: {
        if (Cc(t), e === null) throw Error(S(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Jf(e, t), Tl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = kn(Error(S(423)), t), t = ns(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = kn(Error(S(424)), t), t = ns(e, t, r, n, l);
          break e;
        } else for (Ae = Tt(t.stateNode.containerInfo.firstChild), Ie = t, X = !0, Xe = null, n = Yf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Tn(), r === l) {
            t = dt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return qf(t), e === null && go(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, co(r, l) ? o = null : i !== null && co(r, i) && (t.flags |= 32), Tc(e, t), ve(e, t, o, n), t.child;
    case 6:
      return e === null && go(t), null;
    case 13:
      return Nc(e, t, n);
    case 4:
      return Su(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), qa(e, t, r, l, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, j(xl, r._currentValue), r._currentValue = o, i !== null) if (Ye(i.value, o)) {
          if (i.children === l.children && !Ce.current) {
            t = dt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = at(-1, n & -n), a.tag = 2;
                  var s = i.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var f = s.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), s.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), yo(
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
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), yo(o, n, t), o = i.sibling;
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
        ve(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Sn(t, n), l = Ue(l), r = r(l), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = We(r, t.pendingProps), l = We(r.type, l), es(e, t, r, l, n);
    case 15:
      return xc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : We(r, l), ll(e, t), t.tag = 1, Ne(r) ? (e = !0, El(t)) : e = !1, Sn(t, n), Ec(t, r, l), So(t, r, l, n), _o(null, t, r, !0, e, n);
    case 19:
      return kc(e, t, n);
    case 22:
      return _c(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Gc(e, t) {
  return vf(e, t);
}
function rm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new rm(e, t, n, r);
}
function Mu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function lm(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === eu) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ul(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Mu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case rn:
      return Vt(n.children, l, i, t);
    case qo:
      o = 8, l |= 8;
      break;
    case Gi:
      return e = De(12, n, t, l | 2), e.elementType = Gi, e.lanes = i, e;
    case Vi:
      return e = De(13, n, t, l), e.elementType = Vi, e.lanes = i, e;
    case Wi:
      return e = De(19, n, t, l), e.elementType = Wi, e.lanes = i, e;
    case Js:
      return Vl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ys:
          o = 10;
          break e;
        case Ks:
          o = 9;
          break e;
        case eu:
          o = 11;
          break e;
        case tu:
          o = 14;
          break e;
        case mt:
          o = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = De(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Vt(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Vl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Js, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mi(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function Bi(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function im(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vi(0), this.expirationTimes = vi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Bu(e, t, n, r, l, i, o, u, a) {
  return e = new im(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Eu(i), e;
}
function om(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Vc(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
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
    if (Ne(n)) return Vf(e, n, t);
  }
  return t;
}
function Wc(e, t, n, r, l, i, o, u, a) {
  return e = Bu(n, r, !0, e, l, i, o, u, a), e.context = Vc(null), n = e.current, r = Se(), l = kt(n), i = at(r, l), i.callback = t ?? null, Ct(n, i, l), e.current.lanes = l, _r(e, l, r), ke(e, r), e;
}
function Wl(e, t, n, r) {
  var l = t.current, i = Se(), o = kt(l);
  return n = Vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ct(l, t, o), e !== null && (Ze(e, l, o, i), tl(e, l, o)), o;
}
function Rl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ds(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Du(e, t) {
  ds(e, t), (e = e.alternate) && ds(e, t);
}
function um() {
  return null;
}
var Qc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fu(e) {
  this._internalRoot = e;
}
Ql.prototype.render = Fu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Wl(e, t, null, null);
};
Ql.prototype.unmount = Fu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function() {
      Wl(null, e, null, null);
    }), t[ft] = null;
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _f();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
    gt.splice(n, 0, e), n === 0 && Cf(e);
  }
};
function Uu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hs() {
}
function am(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = Rl(o);
        i.call(s);
      };
    }
    var o = Wc(t, r, e, 0, null, !1, !1, "", hs);
    return e._reactRootContainer = o, e[ft] = o.current, cr(e.nodeType === 8 ? e.parentNode : e), Zt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = Rl(a);
      u.call(s);
    };
  }
  var a = Bu(e, 0, !1, null, null, !1, !1, "", hs);
  return e._reactRootContainer = a, e[ft] = a.current, cr(e.nodeType === 8 ? e.parentNode : e), Zt(function() {
    Wl(t, a, n, r);
  }), a;
}
function bl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = Rl(o);
        u.call(a);
      };
    }
    Wl(t, o, e, l);
  } else o = am(n, t, e, l, r);
  return Rl(o);
}
wf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 && (lu(t, n | 1), ke(t, q()), !(F & 6) && (Pn = q() + 500, Ot()));
      }
      break;
    case 13:
      Zt(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var l = Se();
          Ze(r, e, 1, l);
        }
      }), Du(e, 1);
  }
};
iu = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = Se();
      Ze(t, e, 134217728, n);
    }
    Du(e, 134217728);
  }
};
xf = function(e) {
  if (e.tag === 13) {
    var t = kt(e), n = ct(e, t);
    if (n !== null) {
      var r = Se();
      Ze(n, e, t, r);
    }
    Du(e, t);
  }
};
_f = function() {
  return U;
};
Tf = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
to = function(e, t, n) {
  switch (t) {
    case "input":
      if (bi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Fl(r);
            if (!l) throw Error(S(90));
            ef(r), bi(r, l);
          }
        }
      }
      break;
    case "textarea":
      nf(e, n);
      break;
    case "select":
      t = n.value, t != null && vn(e, !!n.multiple, t, !1);
  }
};
ff = Ru;
cf = Zt;
var sm = { usingClientEntryPoint: !1, Events: [Cr, an, Fl, af, sf, Ru] }, Gn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fm = { bundleType: Gn.bundleType, version: Gn.version, rendererPackageName: Gn.rendererPackageName, rendererConfig: Gn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Gn.findFiberByHostInstance || um, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber) try {
    Hl = Xr.inject(fm), et = Xr;
  } catch {
  }
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm;
Re.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(S(200));
  return om(e, t, null, n);
};
Re.createRoot = function(e, t) {
  if (!Uu(e)) throw Error(S(299));
  var n = !1, r = "", l = Qc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Bu(e, 1, !1, null, null, n, !1, r, l), e[ft] = t.current, cr(e.nodeType === 8 ? e.parentNode : e), new Fu(t);
};
Re.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = pf(t), e = e === null ? null : e.stateNode, e;
};
Re.flushSync = function(e) {
  return Zt(e);
};
Re.hydrate = function(e, t, n) {
  if (!Xl(t)) throw Error(S(200));
  return bl(null, e, t, !0, n);
};
Re.hydrateRoot = function(e, t, n) {
  if (!Uu(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Qc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, l, !1, i, o), e[ft] = t.current, cr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ql(t);
};
Re.render = function(e, t, n) {
  if (!Xl(t)) throw Error(S(200));
  return bl(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function(e) {
  if (!Xl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Zt(function() {
    bl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ft] = null;
    });
  }), !0) : !1;
};
Re.unstable_batchedUpdates = Ru;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Xl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return bl(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function Xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (e) {
      console.error(e);
    }
}
Xc(), Qs.exports = Re;
var cm = Qs.exports, bc, ps = cm;
bc = ps.createRoot, ps.hydrateRoot;
var Mo = function(e, t) {
  return Mo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
  }, Mo(e, t);
};
function je(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Mo(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var A = function() {
  return A = Object.assign || function(t) {
    for (var n, r = 1, l = arguments.length; r < l; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, A.apply(this, arguments);
};
function Zl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
  return n;
}
function Ee(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, l = t.length, i; r < l; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ge(e, t) {
  var n = t && t.cache ? t.cache : gm, r = t && t.serializer ? t.serializer : vm, l = t && t.strategy ? t.strategy : pm;
  return l(e, {
    cache: n,
    serializer: r
  });
}
function dm(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function hm(e, t, n, r) {
  var l = dm(r) ? r : n(r), i = t.get(l);
  return typeof i > "u" && (i = e.call(this, r), t.set(l, i)), i;
}
function Zc(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), l = n(r), i = t.get(l);
  return typeof i > "u" && (i = e.apply(this, r), t.set(l, i)), i;
}
function Yc(e, t, n, r, l) {
  return n.bind(t, e, r, l);
}
function pm(e, t) {
  var n = e.length === 1 ? hm : Zc;
  return Yc(e, this, n, t.cache.create(), t.serializer);
}
function mm(e, t) {
  return Yc(e, this, Zc, t.cache.create(), t.serializer);
}
var vm = function() {
  return JSON.stringify(arguments);
};
function zu() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
zu.prototype.get = function(e) {
  return this.cache[e];
};
zu.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var gm = {
  create: function() {
    return new zu();
  }
}, ye = {
  variadic: mm
};
function Kc(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
ge(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ee([void 0], t, !1)))();
}, {
  strategy: ye.variadic
});
ge(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ee([void 0], t, !1)))();
}, {
  strategy: ye.variadic
});
ge(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ee([void 0], t, !1)))();
}, {
  strategy: ye.variadic
});
ge(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ee([void 0], t, !1)))();
}, {
  strategy: ye.variadic
});
ge(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ee([void 0], t, !1)))();
}, {
  strategy: ye.variadic
});
var M;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M || (M = {}));
var V;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(V || (V = {}));
var An;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(An || (An = {}));
function ms(e) {
  return e.type === V.literal;
}
function ym(e) {
  return e.type === V.argument;
}
function Jc(e) {
  return e.type === V.number;
}
function qc(e) {
  return e.type === V.date;
}
function ed(e) {
  return e.type === V.time;
}
function td(e) {
  return e.type === V.select;
}
function nd(e) {
  return e.type === V.plural;
}
function Em(e) {
  return e.type === V.pound;
}
function rd(e) {
  return e.type === V.tag;
}
function ld(e) {
  return !!(e && typeof e == "object" && e.type === An.number);
}
function Bo(e) {
  return !!(e && typeof e == "object" && e.type === An.dateTime);
}
var id = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sm = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function wm(e) {
  var t = {};
  return e.replace(Sm, function(n) {
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
var xm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function _m(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(xm).filter(function(h) {
    return h.length > 0;
  }), n = [], r = 0, l = t; r < l.length; r++) {
    var i = l[r], o = i.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], a = o.slice(1), s = 0, f = a; s < f.length; s++) {
      var m = f[s];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: a });
  }
  return n;
}
function Tm(e) {
  return e.replace(/^(.*?)-/, "");
}
var vs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, od = /^(@+)?(\+|#+)?[rs]?$/g, Cm = /(\*)(0+)|(#+)(0+)|(0+)/g, ud = /^(0+)$/;
function gs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(od, function(n, r, l) {
    return typeof l != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : l === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof l == "string" ? l.length : 0)), "";
  }), t;
}
function ad(e) {
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
function Nm(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ud.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ys(e) {
  var t = {}, n = ad(e);
  return n || t;
}
function km(e) {
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
        t.style = "unit", t.unit = Tm(l.options[0]);
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
        t = A(A(A({}, t), { notation: "scientific" }), l.options.reduce(function(a, s) {
          return A(A({}, a), ys(s));
        }, {}));
        continue;
      case "engineering":
        t = A(A(A({}, t), { notation: "engineering" }), l.options.reduce(function(a, s) {
          return A(A({}, a), ys(s));
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
        l.options[0].replace(Cm, function(a, s, f, m, h, v) {
          if (s)
            t.minimumIntegerDigits = f.length;
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
    if (ud.test(l.stem)) {
      t.minimumIntegerDigits = l.stem.length;
      continue;
    }
    if (vs.test(l.stem)) {
      if (l.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      l.stem.replace(vs, function(a, s, f, m, h, v) {
        return f === "*" ? t.minimumFractionDigits = s.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : h && v ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + v.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var i = l.options[0];
      i === "w" ? t = A(A({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = A(A({}, t), gs(i)));
      continue;
    }
    if (od.test(l.stem)) {
      t = A(A({}, t), gs(l.stem));
      continue;
    }
    var o = ad(l.stem);
    o && (t = A(A({}, t), o));
    var u = Nm(l.stem);
    u && (t = A(A({}, t), u));
  }
  return t;
}
var br = {
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
function Pm(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var l = e.charAt(r);
    if (l === "j") {
      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === l; )
        i++, r++;
      var o = 1 + (i & 1), u = i < 2 ? 1 : 3 + (i >> 1), a = "a", s = Am(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = s + n;
    } else l === "J" ? n += "H" : n += l;
  }
  return n;
}
function Am(e) {
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
  var l = br[r || ""] || br[n || ""] || br["".concat(n, "-001")] || br["001"];
  return l[0];
}
var Di, Im = new RegExp("^".concat(id.source, "*")), Lm = new RegExp("".concat(id.source, "*$"));
function B(e, t) {
  return { start: e, end: t };
}
var Rm = !!String.prototype.startsWith && "_a".startsWith("a", 1), Om = !!String.fromCodePoint, Hm = !!Object.fromEntries, Mm = !!String.prototype.codePointAt, Bm = !!String.prototype.trimStart, Dm = !!String.prototype.trimEnd, Fm = !!Number.isSafeInteger, Um = Fm ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Do = !0;
try {
  var zm = fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Do = ((Di = zm.exec("a")) === null || Di === void 0 ? void 0 : Di[0]) === "a";
} catch {
  Do = !1;
}
var Es = Rm ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Fo = Om ? String.fromCodePoint : (
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
), Ss = (
  // native
  Hm ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, l = t; r < l.length; r++) {
        var i = l[r], o = i[0], u = i[1];
        n[o] = u;
      }
      return n;
    }
  )
), sd = Mm ? (
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
), jm = Bm ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Im, "");
  }
), $m = Dm ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Lm, "");
  }
);
function fd(e, t) {
  return new RegExp(e, t);
}
var Uo;
if (Do) {
  var ws = fd("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Uo = function(t, n) {
    var r;
    ws.lastIndex = n;
    var l = ws.exec(t);
    return (r = l[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Uo = function(t, n) {
    for (var r = []; ; ) {
      var l = sd(t, n);
      if (l === void 0 || cd(l) || Qm(l))
        break;
      r.push(l), n += l >= 65536 ? 2 : 1;
    }
    return Fo.apply(void 0, r);
  };
var Gm = (
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
              type: V.pound,
              location: B(u, this.clonePosition())
            });
          } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(M.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
          } else if (i === 60 && !this.ignoreTag && zo(this.peek() || 0)) {
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
            type: V.literal,
            value: "<".concat(l, "/>"),
            location: B(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var i = this.parseMessage(t + 1, n, !0);
        if (i.err)
          return i;
        var o = i.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !zo(this.char()))
            return this.error(M.INVALID_TAG, B(u, this.clonePosition()));
          var a = this.clonePosition(), s = this.parseTagName();
          return l !== s ? this.error(M.UNMATCHED_CLOSING_TAG, B(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: V.tag,
              value: l,
              children: o,
              location: B(r, this.clonePosition())
            },
            err: null
          } : this.error(M.INVALID_TAG, B(u, this.clonePosition())));
        } else
          return this.error(M.UNCLOSED_TAG, B(r, this.clonePosition()));
      } else
        return this.error(M.INVALID_TAG, B(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Wm(this.char()); )
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
      var a = B(r, this.clonePosition());
      return {
        val: { type: V.literal, value: l, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Vm(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Fo.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Fo(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(M.EMPTY_ARGUMENT, B(r, this.clonePosition()));
      var l = this.parseIdentifierIfPossible().value;
      if (!l)
        return this.error(M.MALFORMED_ARGUMENT, B(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: V.argument,
              // value does not include the opening and closing braces.
              value: l,
              location: B(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, B(r, this.clonePosition())) : this.parseArgumentOptions(t, n, l, r);
        default:
          return this.error(M.MALFORMED_ARGUMENT, B(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Uo(this.message, n), l = n + r.length;
      this.bumpTo(l);
      var i = this.clonePosition(), o = B(t, i);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, l) {
      var i, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (u) {
        case "":
          return this.error(M.EXPECT_ARGUMENT_TYPE, B(o, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var h = $m(m.val);
            if (h.length === 0)
              return this.error(M.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
            var v = B(f, this.clonePosition());
            s = { style: h, styleLocation: v };
          }
          var E = this.tryParseArgumentClose(l);
          if (E.err)
            return E;
          var y = B(l, this.clonePosition());
          if (s && Es(s == null ? void 0 : s.style, "::", 0)) {
            var P = jm(s.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(P, s.styleLocation);
              return m.err ? m : {
                val: { type: V.number, value: r, location: y, style: m.val },
                err: null
              };
            } else {
              if (P.length === 0)
                return this.error(M.EXPECT_DATE_TIME_SKELETON, y);
              var d = P;
              this.locale && (d = Pm(P, this.locale));
              var h = {
                type: An.dateTime,
                pattern: d,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? wm(d) : {}
              }, c = u === "date" ? V.date : V.time;
              return {
                val: { type: c, value: r, location: y, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? V.number : u === "date" ? V.date : V.time,
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
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, B(p, A({}, p)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), w = 0;
          if (u !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), w = m.val;
          }
          var T = this.tryParsePluralOrSelectOptions(t, u, n, g);
          if (T.err)
            return T;
          var E = this.tryParseArgumentClose(l);
          if (E.err)
            return E;
          var C = B(l, this.clonePosition());
          return u === "select" ? {
            val: {
              type: V.select,
              value: r,
              options: Ss(T.val),
              location: C
            },
            err: null
          } : {
            val: {
              type: V.plural,
              value: r,
              options: Ss(T.val),
              offset: w,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: C
            },
            err: null
          };
        }
        default:
          return this.error(M.INVALID_ARGUMENT_TYPE, B(o, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, B(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var l = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(l, this.clonePosition()));
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
        r = _m(t);
      } catch {
        return this.error(M.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: An.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? km(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, l) {
      for (var i, o = !1, u = [], a = /* @__PURE__ */ new Set(), s = l.value, f = l.location; ; ) {
        if (s.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            f = B(m, this.clonePosition()), s = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (a.has(s))
          return this.error(n === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        s === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
        var E = this.parseMessage(t + 1, n, r);
        if (E.err)
          return E;
        var y = this.tryParseArgumentClose(v);
        if (y.err)
          return y;
        u.push([
          s,
          {
            value: E.val,
            location: B(v, this.clonePosition())
          }
        ]), a.add(s), this.bumpSpace(), i = this.parseIdentifierIfPossible(), s = i.value, f = i.location;
      }
      return u.length === 0 ? this.error(n === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(M.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var a = B(l, this.clonePosition());
      return i ? (o *= r, Um(o) ? { val: o, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = sd(this.message, t);
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
      if (Es(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && cd(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function zo(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Vm(e) {
  return zo(e) || e === 47;
}
function Wm(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function cd(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Qm(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function jo(e) {
  e.forEach(function(t) {
    if (delete t.location, td(t) || nd(t))
      for (var n in t.options)
        delete t.options[n].location, jo(t.options[n].value);
    else Jc(t) && ld(t.style) || (qc(t) || ed(t)) && Bo(t.style) ? delete t.style.location : rd(t) && jo(t.children);
  });
}
function Xm(e, t) {
  t === void 0 && (t = {}), t = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Gm(e, t).parse();
  if (n.err) {
    var r = SyntaxError(M[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || jo(n.val), n.val;
}
var nt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(nt || (nt = {}));
var Ht = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l) {
      var i = e.call(this, n) || this;
      return i.code = r, i.originalMessage = l, i;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), xs = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l, i) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(l).join('", "'), '"'), nt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Ht)
), bm = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), nt.INVALID_VALUE, l) || this;
    }
    return t;
  }(Ht)
), Zm = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), nt.MISSING_VALUE, r) || this;
    }
    return t;
  }(Ht)
), me;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(me || (me = {}));
function Ym(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== me.literal || n.type !== me.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function dd(e) {
  return typeof e == "function";
}
function al(e, t, n, r, l, i, o) {
  if (e.length === 1 && ms(e[0]))
    return [
      {
        type: me.literal,
        value: e[0].value
      }
    ];
  for (var u = [], a = 0, s = e; a < s.length; a++) {
    var f = s[a];
    if (ms(f)) {
      u.push({
        type: me.literal,
        value: f.value
      });
      continue;
    }
    if (Em(f)) {
      typeof i == "number" && u.push({
        type: me.literal,
        value: n.getNumberFormat(t).format(i)
      });
      continue;
    }
    var m = f.value;
    if (!(l && m in l))
      throw new Zm(m, o);
    var h = l[m];
    if (ym(f)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), u.push({
        type: typeof h == "string" ? me.literal : me.object,
        value: h
      });
      continue;
    }
    if (qc(f)) {
      var v = typeof f.style == "string" ? r.date[f.style] : Bo(f.style) ? f.style.parsedOptions : void 0;
      u.push({
        type: me.literal,
        value: n.getDateTimeFormat(t, v).format(h)
      });
      continue;
    }
    if (ed(f)) {
      var v = typeof f.style == "string" ? r.time[f.style] : Bo(f.style) ? f.style.parsedOptions : r.time.medium;
      u.push({
        type: me.literal,
        value: n.getDateTimeFormat(t, v).format(h)
      });
      continue;
    }
    if (Jc(f)) {
      var v = typeof f.style == "string" ? r.number[f.style] : ld(f.style) ? f.style.parsedOptions : void 0;
      v && v.scale && (h = h * (v.scale || 1)), u.push({
        type: me.literal,
        value: n.getNumberFormat(t, v).format(h)
      });
      continue;
    }
    if (rd(f)) {
      var E = f.children, y = f.value, P = l[y];
      if (!dd(P))
        throw new bm(y, "function", o);
      var d = al(E, t, n, r, l, i), c = P(d.map(function(w) {
        return w.value;
      }));
      Array.isArray(c) || (c = [c]), u.push.apply(u, c.map(function(w) {
        return {
          type: typeof w == "string" ? me.literal : me.object,
          value: w
        };
      }));
    }
    if (td(f)) {
      var p = f.options[h] || f.options.other;
      if (!p)
        throw new xs(f.value, h, Object.keys(f.options), o);
      u.push.apply(u, al(p.value, t, n, r, l));
      continue;
    }
    if (nd(f)) {
      var p = f.options["=".concat(h)];
      if (!p) {
        if (!Intl.PluralRules)
          throw new Ht(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nt.MISSING_INTL_API, o);
        var g = n.getPluralRules(t, { type: f.pluralType }).select(h - (f.offset || 0));
        p = f.options[g] || f.options.other;
      }
      if (!p)
        throw new xs(f.value, h, Object.keys(f.options), o);
      u.push.apply(u, al(p.value, t, n, r, l, h - (f.offset || 0)));
      continue;
    }
  }
  return Ym(u);
}
function Km(e, t) {
  return t ? A(A(A({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = A(A({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Jm(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Km(e[r], t[r]), n;
  }, A({}, e)) : e;
}
function Fi(e) {
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
function qm(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: ge(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ee([void 0], n, !1)))();
    }, {
      cache: Fi(e.number),
      strategy: ye.variadic
    }),
    getDateTimeFormat: ge(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ee([void 0], n, !1)))();
    }, {
      cache: Fi(e.dateTime),
      strategy: ye.variadic
    }),
    getPluralRules: ge(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ee([void 0], n, !1)))();
    }, {
      cache: Fi(e.pluralRules),
      strategy: ye.variadic
    })
  };
}
var hd = (
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
        var f = s.reduce(function(m, h) {
          return !m.length || h.type !== me.literal || typeof m[m.length - 1] != "string" ? m.push(h.value) : m[m.length - 1] += h.value, m;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(a) {
        return al(i.ast, i.locales, i.formatters, i.formats, a, void 0, i.message);
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
        var u = Zl(o, ["formatters"]);
        this.ast = e.__parse(t, A(A({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Jm(e.formats, r), this.formatters = l && l.formatters || qm(this.formatterCache);
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
    }, e.__parse = Xm, e.formats = {
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
), Yt;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Yt || (Yt = {}));
var kr = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l) {
      var i = this, o = l ? l instanceof Error ? l : new Error(String(l)) : void 0;
      return i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, i.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, t), i;
    }
    return t;
  }(Error)
), e0 = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r) {
      return e.call(this, Yt.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(kr)
), t0 = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r) {
      return e.call(this, Yt.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(kr)
), _s = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r) {
      return e.call(this, Yt.MISSING_DATA, n, r) || this;
    }
    return t;
  }(kr)
), $e = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l) {
      var i = e.call(this, Yt.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), l) || this;
      return i.locale = r, i;
    }
    return t;
  }(kr)
), Ui = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r, l, i) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(l == null ? void 0 : l.id, `
Default Message: `).concat(l == null ? void 0 : l.defaultMessage, `
Description: `).concat(l == null ? void 0 : l.description, `
`), r, i) || this;
      return o.descriptor = l, o.locale = r, o;
    }
    return t;
  }($e)
), n0 = (
  /** @class */
  function(e) {
    je(t, e);
    function t(n, r) {
      var l = e.call(this, Yt.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(i) {
        var o;
        return (o = i.value) !== null && o !== void 0 ? o : JSON.stringify(i);
      }).join(), ")") : "id", " as fallback.")) || this;
      return l.descriptor = n, l;
    }
    return t;
  }(kr)
);
function qt(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, l) {
    return l in e ? r[l] = e[l] : l in n && (r[l] = n[l]), r;
  }, {});
}
var r0 = function(e) {
}, l0 = function(e) {
}, pd = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: r0,
  onWarn: l0
};
function md() {
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
function Dt(e) {
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
function i0(e) {
  e === void 0 && (e = md());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, l = ge(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, Ee([void 0], a, !1)))();
  }, {
    cache: Dt(e.dateTime),
    strategy: ye.variadic
  }), i = ge(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.NumberFormat).bind.apply(u, Ee([void 0], a, !1)))();
  }, {
    cache: Dt(e.number),
    strategy: ye.variadic
  }), o = ge(function() {
    for (var u, a = [], s = 0; s < arguments.length; s++)
      a[s] = arguments[s];
    return new ((u = Intl.PluralRules).bind.apply(u, Ee([void 0], a, !1)))();
  }, {
    cache: Dt(e.pluralRules),
    strategy: ye.variadic
  });
  return {
    getDateTimeFormat: l,
    getNumberFormat: i,
    getMessageFormat: ge(function(u, a, s, f) {
      return new hd(u, a, s, A({ formatters: {
        getNumberFormat: i,
        getDateTimeFormat: l,
        getPluralRules: o
      } }, f || {}));
    }, {
      cache: Dt(e.message),
      strategy: ye.variadic
    }),
    getRelativeTimeFormat: ge(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (t.bind.apply(t, Ee([void 0], u, !1)))();
    }, {
      cache: Dt(e.relativeTime),
      strategy: ye.variadic
    }),
    getPluralRules: o,
    getListFormat: ge(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (n.bind.apply(n, Ee([void 0], u, !1)))();
    }, {
      cache: Dt(e.list),
      strategy: ye.variadic
    }),
    getDisplayNames: ge(function() {
      for (var u = [], a = 0; a < arguments.length; a++)
        u[a] = arguments[a];
      return new (r.bind.apply(r, Ee([void 0], u, !1)))();
    }, {
      cache: Dt(e.displayNames),
      strategy: ye.variadic
    })
  };
}
function ju(e, t, n, r) {
  var l = e && e[t], i;
  if (l && (i = l[n]), i)
    return i;
  r(new e0("No ".concat(t, " format named: ").concat(n)));
}
function Zr(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = A({ timeZone: t }, e[r]), n;
  }, {});
}
function Ts(e, t) {
  var n = Object.keys(A(A({}, e), t));
  return n.reduce(function(r, l) {
    return r[l] = A(A({}, e[l] || {}), t[l] || {}), r;
  }, {});
}
function Cs(e, t) {
  if (!t)
    return e;
  var n = hd.formats;
  return A(A(A({}, n), e), { date: Ts(Zr(n.date, t), Zr(e.date || {}, t)), time: Ts(Zr(n.time, t), Zr(e.time || {}, t)) });
}
var $o = function(e, t, n, r, l) {
  var i = e.locale, o = e.formats, u = e.messages, a = e.defaultLocale, s = e.defaultFormats, f = e.fallbackOnEmptyString, m = e.onError, h = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var E = n.id, y = n.defaultMessage;
  Kc(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var P = String(E), d = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, P) && u[P]
  );
  if (Array.isArray(d) && d.length === 1 && d[0].type === V.literal)
    return d[0].value;
  if (!r && d && typeof d == "string" && !v)
    return d.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = A(A({}, v), r || {}), o = Cs(o, h), s = Cs(s, h), !d) {
    if (f === !1 && d === "")
      return d;
    if ((!y || i && i.toLowerCase() !== a.toLowerCase()) && m(new n0(n, i)), y)
      try {
        var c = t.getMessageFormat(y, a, s, l);
        return c.format(r);
      } catch (p) {
        return m(new Ui('Error formatting default message for: "'.concat(P, '", rendering default message verbatim'), i, n, p)), typeof y == "string" ? y : P;
      }
    return P;
  }
  try {
    var c = t.getMessageFormat(d, i, o, A({ formatters: t }, l || {}));
    return c.format(r);
  } catch (p) {
    m(new Ui('Error formatting message: "'.concat(P, '", using ').concat(y ? "default message" : "id", " as fallback."), i, n, p));
  }
  if (y)
    try {
      var c = t.getMessageFormat(y, a, s, l);
      return c.format(r);
    } catch (p) {
      m(new Ui('Error formatting the default message for: "'.concat(P, '", rendering message verbatim'), i, n, p));
    }
  return typeof d == "string" ? d : typeof y == "string" ? y : P;
}, vd = [
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
function Yl(e, t, n, r) {
  var l = e.locale, i = e.formats, o = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var a = r.format, s = A(A({}, u && { timeZone: u }), a && ju(i, t, a, o)), f = qt(r, vd, s);
  return t === "time" && !f.hour && !f.minute && !f.second && !f.timeStyle && !f.dateStyle && (f = A(A({}, f), { hour: "numeric", minute: "numeric" })), n(l, f);
}
function o0(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return Yl(e, "date", t, o).format(u);
  } catch (a) {
    e.onError(new $e("Error formatting date.", e.locale, a));
  }
  return String(u);
}
function u0(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return Yl(e, "time", t, o).format(u);
  } catch (a) {
    e.onError(new $e("Error formatting time.", e.locale, a));
  }
  return String(u);
}
function a0(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = n[2], u = o === void 0 ? {} : o, a = e.timeZone, s = e.locale, f = e.onError, m = qt(u, vd, a ? { timeZone: a } : {});
  try {
    return t(s, m).formatRange(l, i);
  } catch (h) {
    f(new $e("Error formatting date time range.", e.locale, h));
  }
  return String(l);
}
function s0(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return Yl(e, "date", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new $e("Error formatting date.", e.locale, a));
  }
  return [];
}
function f0(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var l = n[0], i = n[1], o = i === void 0 ? {} : i, u = typeof l == "string" ? new Date(l || 0) : l;
  try {
    return Yl(e, "time", t, o).formatToParts(u);
  } catch (a) {
    e.onError(new $e("Error formatting time.", e.locale, a));
  }
  return [];
}
var c0 = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function d0(e, t, n, r) {
  var l = e.locale, i = e.onError, o = Intl.DisplayNames;
  o || i(new Ht(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, nt.MISSING_INTL_API));
  var u = qt(r, c0);
  try {
    return t(l, u).of(n);
  } catch (a) {
    i(new $e("Error formatting display name.", l, a));
  }
}
var h0 = [
  "type",
  "style"
], Ns = Date.now();
function p0(e) {
  return "".concat(Ns, "_").concat(e, "_").concat(Ns);
}
function m0(e, t, n, r) {
  r === void 0 && (r = {});
  var l = gd(e, t, n, r).reduce(function(i, o) {
    var u = o.value;
    return typeof u != "string" ? i.push(u) : typeof i[i.length - 1] == "string" ? i[i.length - 1] += u : i.push(u), i;
  }, []);
  return l.length === 1 ? l[0] : l.length === 0 ? "" : l;
}
function gd(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || i(new Ht(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, nt.MISSING_INTL_API));
  var u = qt(r, h0);
  try {
    var a = {}, s = n.map(function(f, m) {
      if (typeof f == "object") {
        var h = p0(m);
        return a[h] = f, h;
      }
      return String(f);
    });
    return t(l, u).formatToParts(s).map(function(f) {
      return f.type === "literal" ? f : A(A({}, f), { value: a[f.value] || f.value });
    });
  } catch (f) {
    i(new $e("Error formatting list.", l, f));
  }
  return n;
}
var v0 = ["type"];
function g0(e, t, n, r) {
  var l = e.locale, i = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || i(new Ht(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nt.MISSING_INTL_API));
  var o = qt(r, v0);
  try {
    return t(l, o).select(n);
  } catch (u) {
    i(new $e("Error formatting plural.", l, u));
  }
  return "other";
}
var y0 = ["numeric", "style"];
function E0(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = !!o && ju(l, "relative", o, i) || {}, a = qt(n, y0, u);
  return t(r, a);
}
function S0(e, t, n, r, l) {
  l === void 0 && (l = {}), r || (r = "second");
  var i = Intl.RelativeTimeFormat;
  i || e.onError(new Ht(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, nt.MISSING_INTL_API));
  try {
    return E0(e, t, l).format(n, r);
  } catch (o) {
    e.onError(new $e("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var w0 = [
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
function yd(e, t, n) {
  var r = e.locale, l = e.formats, i = e.onError;
  n === void 0 && (n = {});
  var o = n.format, u = o && ju(l, "number", o, i) || {}, a = qt(n, w0, u);
  return t(r, a);
}
function x0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return yd(e, t, r).format(n);
  } catch (l) {
    e.onError(new $e("Error formatting number.", e.locale, l));
  }
  return String(n);
}
function _0(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return yd(e, t, r).formatToParts(n);
  } catch (l) {
    e.onError(new $e("Error formatting number.", e.locale, l));
  }
  return [];
}
function T0(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function C0(e) {
  e.onWarn && e.defaultRichTextElements && T0(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function N0(e, t) {
  var n = i0(t), r = A(A({}, pd), e), l = r.locale, i = r.defaultLocale, o = r.onError;
  return l ? !Intl.NumberFormat.supportedLocalesOf(l).length && o ? o(new _s('Missing locale data for locale: "'.concat(l, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(l).length && o && o(new _s('Missing locale data for locale: "'.concat(l, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new t0('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), C0(r), A(A({}, r), {
    formatters: n,
    formatNumber: x0.bind(null, r, n.getNumberFormat),
    formatNumberToParts: _0.bind(null, r, n.getNumberFormat),
    formatRelativeTime: S0.bind(null, r, n.getRelativeTimeFormat),
    formatDate: o0.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: s0.bind(null, r, n.getDateTimeFormat),
    formatTime: u0.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: a0.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: f0.bind(null, r, n.getDateTimeFormat),
    formatPlural: g0.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: $o.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: $o.bind(null, r, n),
    formatList: m0.bind(null, r, n.getListFormat),
    formatListToParts: gd.bind(null, r, n.getListFormat),
    formatDisplayName: d0.bind(null, r, n.getDisplayNames)
  });
}
function Ed(e) {
  Kc(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Sd = A(A({}, pd), { textComponent: D.Fragment });
function k0(e) {
  return function(t) {
    return e(D.Children.toArray(t));
  };
}
function P0(e, t) {
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
var wd = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, $u = ue ? Symbol.for("react.element") : 60103, Gu = ue ? Symbol.for("react.portal") : 60106, Kl = ue ? Symbol.for("react.fragment") : 60107, Jl = ue ? Symbol.for("react.strict_mode") : 60108, ql = ue ? Symbol.for("react.profiler") : 60114, ei = ue ? Symbol.for("react.provider") : 60109, ti = ue ? Symbol.for("react.context") : 60110, Vu = ue ? Symbol.for("react.async_mode") : 60111, ni = ue ? Symbol.for("react.concurrent_mode") : 60111, ri = ue ? Symbol.for("react.forward_ref") : 60112, li = ue ? Symbol.for("react.suspense") : 60113, A0 = ue ? Symbol.for("react.suspense_list") : 60120, ii = ue ? Symbol.for("react.memo") : 60115, oi = ue ? Symbol.for("react.lazy") : 60116, I0 = ue ? Symbol.for("react.block") : 60121, L0 = ue ? Symbol.for("react.fundamental") : 60117, R0 = ue ? Symbol.for("react.responder") : 60118, O0 = ue ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $u:
        switch (e = e.type, e) {
          case Vu:
          case ni:
          case Kl:
          case ql:
          case Jl:
          case li:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ti:
              case ri:
              case oi:
              case ii:
              case ei:
                return e;
              default:
                return t;
            }
        }
      case Gu:
        return t;
    }
  }
}
function xd(e) {
  return He(e) === ni;
}
z.AsyncMode = Vu;
z.ConcurrentMode = ni;
z.ContextConsumer = ti;
z.ContextProvider = ei;
z.Element = $u;
z.ForwardRef = ri;
z.Fragment = Kl;
z.Lazy = oi;
z.Memo = ii;
z.Portal = Gu;
z.Profiler = ql;
z.StrictMode = Jl;
z.Suspense = li;
z.isAsyncMode = function(e) {
  return xd(e) || He(e) === Vu;
};
z.isConcurrentMode = xd;
z.isContextConsumer = function(e) {
  return He(e) === ti;
};
z.isContextProvider = function(e) {
  return He(e) === ei;
};
z.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $u;
};
z.isForwardRef = function(e) {
  return He(e) === ri;
};
z.isFragment = function(e) {
  return He(e) === Kl;
};
z.isLazy = function(e) {
  return He(e) === oi;
};
z.isMemo = function(e) {
  return He(e) === ii;
};
z.isPortal = function(e) {
  return He(e) === Gu;
};
z.isProfiler = function(e) {
  return He(e) === ql;
};
z.isStrictMode = function(e) {
  return He(e) === Jl;
};
z.isSuspense = function(e) {
  return He(e) === li;
};
z.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Kl || e === ni || e === ql || e === Jl || e === li || e === A0 || typeof e == "object" && e !== null && (e.$$typeof === oi || e.$$typeof === ii || e.$$typeof === ei || e.$$typeof === ti || e.$$typeof === ri || e.$$typeof === L0 || e.$$typeof === R0 || e.$$typeof === O0 || e.$$typeof === I0);
};
z.typeOf = He;
wd.exports = z;
var H0 = wd.exports, _d = H0, M0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, B0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Td = {};
Td[_d.ForwardRef] = M0;
Td[_d.Memo] = B0;
var Wu = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = D.createContext(null)) : D.createContext(null);
Wu.Consumer;
var D0 = Wu.Provider, F0 = D0, U0 = Wu;
function Cd() {
  var e = D.useContext(U0);
  return Ed(e), e;
}
var Go;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Go || (Go = {}));
var Vo;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Vo || (Vo = {}));
function Nd(e) {
  var t = function(n) {
    var r = Cd(), l = n.value, i = n.children, o = Zl(n, ["value", "children"]), u = typeof l == "string" ? new Date(l || 0) : l, a = e === "formatDate" ? r.formatDateToParts(u, o) : r.formatTimeToParts(u, o);
    return i(a);
  };
  return t.displayName = Vo[e], t;
}
function Pr(e) {
  var t = function(n) {
    var r = Cd(), l = n.value, i = n.children, o = Zl(
      n,
      ["value", "children"]
    ), u = r[e](l, o);
    if (typeof i == "function")
      return i(u);
    var a = r.textComponent || D.Fragment;
    return D.createElement(a, null, u);
  };
  return t.displayName = Go[e], t;
}
function kd(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = dd(r) ? k0(r) : r, t;
  }, {});
}
var ks = function(e, t, n, r) {
  for (var l = [], i = 4; i < arguments.length; i++)
    l[i - 4] = arguments[i];
  var o = kd(r), u = $o.apply(void 0, Ee([
    e,
    t,
    n,
    o
  ], l, !1));
  return Array.isArray(u) ? D.Children.toArray(u) : u;
}, Ps = function(e, t) {
  var n = e.defaultRichTextElements, r = Zl(e, ["defaultRichTextElements"]), l = kd(n), i = N0(A(A(A({}, Sd), r), { defaultRichTextElements: l }), t), o = {
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
  return A(A({}, i), {
    formatMessage: ks.bind(
      null,
      o,
      // @ts-expect-error fix this
      i.formatters
    ),
    // @ts-expect-error fix this
    $t: ks.bind(null, o, i.formatters)
  });
};
function zi(e) {
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
var z0 = (
  /** @class */
  function(e) {
    je(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = md(), n.state = {
        cache: n.cache,
        intl: Ps(zi(n.props), n.cache),
        prevConfig: zi(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var l = r.prevConfig, i = r.cache, o = zi(n);
      return P0(l, o) ? null : {
        intl: Ps(o, i),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return Ed(this.state.intl), D.createElement(F0, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Sd, t;
  }(D.PureComponent)
);
Pr("formatDate");
Pr("formatTime");
Pr("formatNumber");
Pr("formatList");
Pr("formatDisplayName");
Nd("formatDate");
Nd("formatTime");
var Pd = { exports: {} }, j0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", $0 = j0, G0 = $0;
function Ad() {
}
function Id() {
}
Id.resetWarningCache = Ad;
var V0 = function() {
  function e(r, l, i, o, u, a) {
    if (a !== G0) {
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
    checkPropTypes: Id,
    resetWarningCache: Ad
  };
  return n.PropTypes = n, n;
};
Pd.exports = V0();
var W0 = Pd.exports;
const _ = /* @__PURE__ */ Wo(W0);
var Ld = { exports: {} };
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
})(Ld);
var Q0 = Ld.exports;
const te = /* @__PURE__ */ Wo(Q0), ui = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ x.createElement("div", {
  className: te("pgn__card-body", e),
  ref: r,
  ...n
}, t));
ui.propTypes = {
  /** Specifies the content of the component. */
  children: _.node,
  /** The class to append to the base element. */
  className: _.string
};
ui.defaultProps = {
  children: void 0,
  className: void 0
};
const As = "card", ji = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], X0 = ["white", "muted"], Qu = /* @__PURE__ */ x.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: l,
  hasBody: i = !1,
  children: o,
  as: u = "div",
  ...a
}, s) => {
  const f = te(t, e ? `${e}-${As}` : As, n && `bg-${n}`, r && `text-${r}`, l && `border-${l}`);
  return /* @__PURE__ */ x.createElement(u, {
    ref: s,
    ...a,
    className: f
  }, i ? /* @__PURE__ */ x.createElement(ui, null, o) : o);
});
Qu.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: _.string,
  /** Background color of the card. */
  bgColor: _.oneOf(ji),
  /** Text color of the card. */
  textColor: _.oneOf([...ji, ...X0]),
  /** Border color of the card. */
  borderColor: _.oneOf(ji),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: _.bool,
  /** Set a custom element for this component. */
  as: _.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: _.string,
  /** The content to render inside the card. */
  children: _.node
};
const en = /* @__PURE__ */ D.createContext({});
function Xu({
  orientation: e,
  children: t,
  isLoading: n,
  variant: r
}) {
  return /* @__PURE__ */ x.createElement(en.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
Xu.propTypes = {
  /** Specifies which orientation to use. */
  orientation: _.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: _.bool,
  /** Specifies content of the component. */
  children: _.node,
  /** Specifies `Card` style variant */
  variant: _.oneOf(["light", "dark", "muted"])
};
Xu.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const b0 = x.createContext({}), Rd = !0;
function Z0({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: l, circle: i, direction: o, duration: u, enableAnimation: a = Rd, customHighlightBackground: s }) {
  const f = {};
  return o === "rtl" && (f["--animation-direction"] = "reverse"), typeof u == "number" && (f["--animation-duration"] = `${u}s`), a || (f["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (f.width = n), (typeof r == "string" || typeof r == "number") && (f.height = r), (typeof l == "string" || typeof l == "number") && (f.borderRadius = l), i && (f.borderRadius = "50%"), typeof e < "u" && (f["--base-color"] = e), typeof t < "u" && (f["--highlight-color"] = t), typeof s == "string" && (f["--custom-highlight-background"] = s), f;
}
function In({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: l, circle: i = !1, style: o, ...u }) {
  var a, s, f;
  const m = x.useContext(b0), h = { ...u };
  for (const [p, g] of Object.entries(u))
    typeof g > "u" && delete h[p];
  const v = {
    ...m,
    ...h,
    circle: i
  }, E = {
    ...o,
    ...Z0(v)
  };
  let y = "react-loading-skeleton";
  n && (y += ` ${n}`);
  const P = (a = v.inline) !== null && a !== void 0 ? a : !1, d = [], c = Math.ceil(e);
  for (let p = 0; p < c; p++) {
    let g = E;
    if (c > e && p === c - 1) {
      const T = (s = g.width) !== null && s !== void 0 ? s : "100%", C = e % 1, I = typeof T == "number" ? T * C : `calc(${T} * ${C})`;
      g = { ...g, width: I };
    }
    const w = x.createElement("span", { className: y, style: g, key: p }, "‌");
    P ? d.push(w) : d.push(x.createElement(
      x.Fragment,
      { key: p },
      w,
      x.createElement("br", null)
    ));
  }
  return x.createElement("span", { className: r, "data-testid": l, "aria-live": "polite", "aria-busy": (f = v.enableAnimation) !== null && f !== void 0 ? f : Rd }, t ? d.map((p, g) => x.createElement(t, { key: g }, p)) : d);
}
const Y0 = 20, bu = /* @__PURE__ */ x.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: l,
  skeletonHeight: i,
  skeletonWidth: o
}, u) => {
  const {
    isLoading: a
  } = D.useContext(en), s = D.useCallback((f) => {
    if (/* @__PURE__ */ x.isValidElement(f)) {
      const {
        children: m
      } = f.props, h = {
        size: n,
        children: Array.isArray(m) ? m.map(s) : s(m)
      };
      return /* @__PURE__ */ x.cloneElement(f, h);
    }
    return f;
  }, [n]);
  return a ? /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-header", t)
  }, /* @__PURE__ */ x.createElement(In, {
    containerClassName: "pgn__card-header-loader",
    height: i,
    width: o
  })) : /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-header", t),
    ref: u
  }, /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-header-content"
  }, l && /* @__PURE__ */ x.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, l), r && /* @__PURE__ */ x.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? s(e) : e));
});
bu.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: _.node,
  /** The class name for the CardHeader component */
  className: _.string,
  /** The title for the CardHeader component */
  title: _.node,
  /** The size of the CardHeader component */
  size: _.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: _.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: _.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: _.number
};
bu.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: Y0,
  skeletonWidth: null
};
const Zu = /* @__PURE__ */ x.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ x.createElement("div", {
  className: te("pgn__card-divider", e),
  ref: n,
  ...t
}));
Zu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: _.string
};
Zu.defaultProps = {
  className: void 0
};
const K0 = 100, Yu = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: l,
  skeletonHeight: i,
  skeletonWidth: o
}, u) => {
  const {
    isLoading: a
  } = D.useContext(en);
  return a ? /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-section", e, {
      "is-muted": l
    })
  }, /* @__PURE__ */ x.createElement(In, {
    containerClassName: "pgn__card-section-loader",
    height: i,
    width: o
  })) : /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-section", e, {
      "is-muted": l
    }),
    ref: u
  }, n && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
Yu.propTypes = {
  /** Specifies class name to append to the base element. */
  className: _.string,
  /** Specifies contents of the component. */
  children: _.node,
  /** Specifies title of the `Section`. */
  title: _.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: _.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: _.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: _.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: _.number
};
Yu.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: K0,
  skeletonWidth: void 0
};
const J0 = 18, Ku = /* @__PURE__ */ x.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: l,
  skeletonWidth: i,
  orientation: o
}, u) => {
  const {
    orientation: a,
    isLoading: s
  } = D.useContext(en), f = o || a, m = `pgn__card-footer ${f}${n ? "-stacked" : ""}`, h = `pgn__card-footer-text ${f}${n ? "-stacked" : ""}`;
  return s ? /* @__PURE__ */ x.createElement("div", {
    className: te(t, m)
  }, /* @__PURE__ */ x.createElement(In, {
    containerClassName: "pgn__card-footer-loader",
    height: l,
    width: i
  })) : /* @__PURE__ */ x.createElement("div", {
    className: te(t, m),
    ref: u
  }, r && /* @__PURE__ */ x.createElement("div", {
    className: h
  }, r), e);
});
Ku.propTypes = {
  /** Specifies contents of the component. */
  children: _.node,
  /** Specifies class name to append to the base element. */
  className: _.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: _.node,
  /** Specifies whether to use stacked variant. */
  isStacked: _.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: _.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: _.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: _.number
};
Ku.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: J0,
  skeletonWidth: void 0
};
const Od = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", q0 = 140, ev = 41, Ju = /* @__PURE__ */ x.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: l,
  logoAlt: i,
  skeletonHeight: o,
  skeletonWidth: u,
  logoSkeleton: a,
  logoSkeletonHeight: s,
  logoSkeletonWidth: f,
  className: m,
  imageLoadingType: h
}, v) => {
  const {
    orientation: E,
    isLoading: y
  } = D.useContext(en), [P, d] = D.useState(!1), [c, p] = D.useState(!1), g = `pgn__card-wrapper-image-cap ${E}`;
  if (y)
    return /* @__PURE__ */ x.createElement("div", {
      className: te(g, m),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ x.createElement(In, {
      containerClassName: "pgn__card-image-cap-loader",
      height: E === "horizontal" ? "100%" : o,
      width: u
    }), a && /* @__PURE__ */ x.createElement(In, {
      containerClassName: "pgn__card-logo-cap",
      height: s,
      width: f
    }));
  const w = (T, C, I) => {
    const {
      currentTarget: $
    } = T;
    if (!C || $.src.endsWith(C)) {
      I === "imageCap" ? $.src = Od : p(!1);
      return;
    }
    $.src = C;
  };
  return /* @__PURE__ */ x.createElement("div", {
    className: te(m, g),
    ref: v
  }, !!e && /* @__PURE__ */ x.createElement("img", {
    className: te("pgn__card-image-cap", {
      show: P
    }),
    src: e,
    onError: (T) => w(T, t, "imageCap"),
    onLoad: () => d(!0),
    alt: n,
    loading: h
  }), !!r && /* @__PURE__ */ x.createElement("img", {
    className: te("pgn__card-logo-cap", {
      show: c
    }),
    src: r,
    onError: (T) => w(T, l, "logoCap"),
    onLoad: () => p(!0),
    alt: i,
    loading: h
  }));
});
Ju.propTypes = {
  /** Specifies class name to append to the base element. */
  className: _.string,
  /** Specifies image src. */
  src: _.string,
  /** Specifies fallback image src. */
  fallbackSrc: _.string,
  /** Specifies image alt text. */
  srcAlt: _.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: _.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: _.string,
  /** Specifies logo image alt text. */
  logoAlt: _.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: _.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: _.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: _.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: _.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: _.number,
  /** Specifies loading type for images */
  imageLoadingType: _.oneOf(["eager", "lazy"])
};
Ju.defaultProps = {
  src: void 0,
  fallbackSrc: Od,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: q0,
  logoSkeleton: !1,
  logoSkeletonHeight: ev,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
let Is = 0;
const tv = (e = "id") => (Is += 1, `${e}${Is}`);
let mn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Hd(e, t, n) {
  class r extends x.Component {
    constructor(i) {
      super(i), this.transformProps = this.transformProps.bind(this);
    }
    warn(i) {
    }
    transformProps(i, o) {
      if (n[o] === void 0)
        return i[o] = this.props[o], i;
      const {
        deprType: u,
        newName: a,
        expect: s,
        transform: f,
        message: m
      } = n[o];
      switch (u) {
        case mn.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${a}'.`), i[a] = this.props[o];
          break;
        case mn.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${m}'`);
          break;
        case mn.FORMAT:
          s(this.props[o]) ? i[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${m}`), i[o] = f(this.props[o], this.props));
          break;
        case mn.MOVED_AND_FORMAT: {
          const h = this.props[o];
          let v = `${t}: The prop '${o}' has been moved to '${a}'`;
          s && !s(h) && (v += " and expects a new format"), v += m ? `. ${m}` : "", this.warn(v), i[a] = f ? f(h, this.props) : h;
          break;
        }
        default:
          i[o] = this.props[o];
          break;
      }
      return i;
    }
    render() {
      const {
        children: i,
        ...o
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ x.createElement(e, {
        ...o
      }, this.props.children || i);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    ia(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function qu({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: l,
  svgAttrs: i,
  size: o,
  ...u
}) {
  if (e) {
    const a = i["aria-label"] || i["aria-labelledby"], s = {
      ...i
    };
    return a || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ x.createElement("span", {
      className: te("pgn__icon", {
        [`pgn__icon__${o}`]: !!o
      }, n),
      id: t,
      ...u
    }, /* @__PURE__ */ x.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), l && /* @__PURE__ */ x.createElement("span", {
      className: "sr-only"
    }, l));
  }
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("span", {
    id: t || tv("Icon"),
    className: n,
    "aria-hidden": r
  }), l && /* @__PURE__ */ x.createElement("span", {
    className: "sr-only"
  }, l));
}
qu.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: _.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: _.shape({
    "aria-label": _.string,
    "aria-labelledby": _.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: _.string,
  /** The size of the icon. */
  size: _.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: _.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: _.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: _.oneOfType([_.string, _.element])
};
qu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Sr = Hd(qu, "Icon", {
  className: {
    deprType: mn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), ea = /* @__PURE__ */ x.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: l,
  actions: i,
  ...o
}, u) => {
  const {
    isLoading: a
  } = D.useContext(en);
  return a ? /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: u
  }, /* @__PURE__ */ x.createElement(In, null)) : /* @__PURE__ */ x.createElement("div", {
    className: te("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: u,
    ...o
  }, /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ x.createElement(Sr, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__message-content"
  }, l && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__heading"
  }, l), t)), !!i && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__card-status__actions"
  }, i));
});
ea.propTypes = {
  /** Specifies the content of the component. */
  children: _.node.isRequired,
  /** The class to append to the base element. */
  className: _.string,
  /** Icon that will be shown in the top-left corner. */
  icon: _.func,
  /** Specifies variant to use. */
  variant: _.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: _.oneOfType([_.element, _.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: _.node
};
ea.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wr.apply(null, arguments);
}
function Md(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var ta = /* @__PURE__ */ x.createContext({});
ta.Consumer;
ta.Provider;
function nv(e, t) {
  var n = D.useContext(ta);
  return e || n[t] || t;
}
const rv = (e) => /* @__PURE__ */ D.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ D.createElement("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
  fill: "currentColor"
})), lv = (e) => /* @__PURE__ */ D.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ D.createElement("path", {
  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
  fill: "currentColor"
})), Ls = (e) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ D.createElement("path", {
  d: "M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z",
  fill: "currentColor"
})), iv = ["light", "dark", "muted"], na = /* @__PURE__ */ x.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: l,
  variant: i,
  ...o
}, u) => {
  const a = l ? "muted" : i;
  return /* @__PURE__ */ x.createElement(Xu, {
    orientation: e,
    isLoading: t,
    variant: a
  }, /* @__PURE__ */ x.createElement(Qu, {
    ...o,
    className: te(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${a}`]: a
    }),
    ref: u,
    tabIndex: r ? 0 : -1
  }));
});
na.propTypes = {
  /** Specifies class name to append to the base element. */
  className: _.string,
  /** Specifies which orientation to use. */
  orientation: _.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: _.bool,
  /** Specifies loading state. */
  isLoading: _.bool,
  /** Specifies `Card` style variant. */
  variant: _.oneOf(iv),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: _.bool
};
na.defaultProps = {
  ...Qu.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const rt = Hd(na, "Card", {
  muted: {
    deprType: mn.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
rt.Status = ea;
rt.Header = bu;
rt.Divider = Zu;
rt.Section = Yu;
rt.Footer = Ku;
rt.ImageCap = Ju;
rt.Context = en;
rt.Body = ui;
function ov() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, l) {
    if (typeof l != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? l : function() {
      for (var o = arguments.length, u = new Array(o), a = 0; a < o; a++)
        u[a] = arguments[a];
      r.apply(this, u), l.apply(this, u);
    };
  }, null);
}
var uv = ["as", "disabled", "onKeyDown"];
function Rs(e) {
  return !e || e.trim() === "#";
}
var Bd = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, l = e.disabled, i = e.onKeyDown, o = Md(e, uv), u = function(f) {
    var m = o.href, h = o.onClick;
    if ((l || Rs(m)) && f.preventDefault(), l) {
      f.stopPropagation();
      return;
    }
    h && h(f);
  }, a = function(f) {
    f.key === " " && (f.preventDefault(), u(f));
  };
  return Rs(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), l && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ x.createElement(r, wr({
    ref: t
  }, o, {
    onClick: u,
    onKeyDown: ov(a, i)
  }));
});
Bd.displayName = "SafeAnchor";
var av = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], sv = {
  variant: "primary",
  active: !1,
  disabled: !1
}, ra = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, l = e.size, i = e.active, o = e.className, u = e.block, a = e.type, s = e.as, f = Md(e, av), m = nv(n, "btn"), h = te(o, m, i && "active", r && m + "-" + r, u && m + "-block", l && m + "-" + l);
  if (f.href)
    return /* @__PURE__ */ x.createElement(Bd, wr({}, f, {
      as: s,
      ref: t,
      className: te(h, f.disabled && "disabled")
    }));
  t && (f.ref = t), a ? f.type = a : s || (f.type = "button");
  var v = s || "button";
  return /* @__PURE__ */ x.createElement(v, wr({}, f, {
    className: h
  }));
});
ra.displayName = "Button";
ra.defaultProps = sv;
const Os = /* @__PURE__ */ x.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...l
}, i) => /* @__PURE__ */ x.createElement(ra, {
  size: r,
  ...l,
  className: te(l.className),
  ref: i
}, n && /* @__PURE__ */ x.createElement(Sr, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ x.createElement(Sr, {
  className: "btn-icon-after",
  size: r,
  src: t
}))), Hs = ({ children: e, className: t }) => /* @__PURE__ */ Q.jsx("div", { className: `flashcard-face ${t || ""}`, children: /* @__PURE__ */ Q.jsx(rt, { className: "flashcard-card", children: /* @__PURE__ */ Q.jsx(rt.Section, { children: e }) }) }), fv = ({
  displayName: e,
  cards: t
}) => {
  const [n, r] = D.useState(!1), [l, i] = D.useState(0), [o, u] = D.useState(!1), [a, s] = D.useState(null), f = t[l] || t[0], m = t.length > 1, h = () => {
    r(!n);
  }, v = () => {
    if (o) return;
    const P = () => {
      s("right"), u(!0), setTimeout(() => {
        i((d) => d === 0 ? t.length - 1 : d - 1);
      }, 150), setTimeout(() => {
        u(!1), s(null);
      }, 300);
    };
    n ? (r(!1), setTimeout(P, 600)) : P();
  }, E = () => {
    if (o) return;
    const P = () => {
      s("left"), u(!0), setTimeout(() => {
        i((d) => d === t.length - 1 ? 0 : d + 1);
      }, 150), setTimeout(() => {
        u(!1), s(null);
      }, 300);
    };
    n ? (r(!1), setTimeout(P, 600)) : P();
  }, y = (P) => {
    P.key === "Enter" || P.key === " " ? (P.preventDefault(), h()) : P.key === "ArrowLeft" ? (P.preventDefault(), m && v()) : P.key === "ArrowRight" && (P.preventDefault(), m && E());
  };
  return /* @__PURE__ */ Q.jsxs("div", { className: "flashcards-student-view", children: [
    /* @__PURE__ */ Q.jsx(
      "div",
      {
        className: `flashcard-container ${n ? "flipped" : ""} ${o ? `sliding-${a}` : ""}`,
        onClick: h,
        onKeyDown: y,
        role: "button",
        tabIndex: 0,
        "aria-label": n ? "Flip to front of card" : "Flip to back of card",
        children: /* @__PURE__ */ Q.jsxs("div", { className: "flashcard-inner", children: [
          /* @__PURE__ */ Q.jsxs(Hs, { className: "flashcard-front", children: [
            /* @__PURE__ */ Q.jsxs("div", { className: "flashcard-content", children: [
              /* @__PURE__ */ Q.jsx("h2", { className: "flashcard-title", children: f.front_title }),
              f.front_subtitle && /* @__PURE__ */ Q.jsx("p", { className: "flashcard-subtitle", children: f.front_subtitle })
            ] }),
            /* @__PURE__ */ Q.jsx("div", { className: "flashcard-flip-icon", children: /* @__PURE__ */ Q.jsx(Sr, { src: Ls }) })
          ] }),
          /* @__PURE__ */ Q.jsxs(Hs, { className: "flashcard-back", children: [
            /* @__PURE__ */ Q.jsx("div", { className: "flashcard-content", children: /* @__PURE__ */ Q.jsx(
              "div",
              {
                className: "flashcard-back-text",
                dangerouslySetInnerHTML: { __html: f.back_text }
              }
            ) }),
            /* @__PURE__ */ Q.jsx("div", { className: "flashcard-flip-icon", children: /* @__PURE__ */ Q.jsx(Sr, { src: Ls }) })
          ] })
        ] })
      }
    ),
    m && /* @__PURE__ */ Q.jsxs("div", { className: "flashcard-navigation", children: [
      /* @__PURE__ */ Q.jsx(
        Os,
        {
          variant: "tertiary",
          iconBefore: rv,
          onClick: (P) => {
            P.stopPropagation(), v();
          },
          "aria-label": "Previous card"
        }
      ),
      /* @__PURE__ */ Q.jsxs("div", { className: "flashcard-counter", children: [
        l + 1,
        " / ",
        t.length
      ] }),
      /* @__PURE__ */ Q.jsx(
        Os,
        {
          variant: "tertiary",
          iconAfter: lv,
          onClick: (P) => {
            P.stopPropagation(), E();
          },
          "aria-label": "Next card"
        }
      )
    ] })
  ] });
}, dv = (e, t) => {
  bc(e).render(
    /* @__PURE__ */ Q.jsxs(D.StrictMode, { children: [
      /* @__PURE__ */ Q.jsx(z0, { locale: "en", children: /* @__PURE__ */ Q.jsx(
        fv,
        {
          displayName: t.displayName,
          cards: t.cards
        }
      ) }),
      "    "
    ] })
  );
};
export {
  dv as renderBlock
};
//# sourceMappingURL=student-ui.js.map
