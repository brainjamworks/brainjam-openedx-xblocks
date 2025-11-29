var Yp = Object.defineProperty;
var qp = (e, t, n) => t in e ? Yp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ha = (e, t, n) => qp(e, typeof t != "symbol" ? t + "" : t, n);
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hc = { exports: {} }, io = {}, Vc = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Zp = Symbol.for("react.portal"), Jp = Symbol.for("react.fragment"), eh = Symbol.for("react.strict_mode"), th = Symbol.for("react.profiler"), nh = Symbol.for("react.provider"), rh = Symbol.for("react.context"), ih = Symbol.for("react.forward_ref"), oh = Symbol.for("react.suspense"), lh = Symbol.for("react.memo"), uh = Symbol.for("react.lazy"), Va = Symbol.iterator;
function ah(e) {
  return e === null || typeof e != "object" ? null : (e = Va && e[Va] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Bc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Wc = Object.assign, Qc = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Qc, this.updater = n || Bc;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kc() {
}
Kc.prototype = Hn.prototype;
function _u(e, t, n) {
  this.props = e, this.context = t, this.refs = Qc, this.updater = n || Bc;
}
var Pu = _u.prototype = new Kc();
Pu.constructor = _u;
Wc(Pu, Hn.prototype);
Pu.isPureReactComponent = !0;
var Ba = Array.isArray, Xc = Object.prototype.hasOwnProperty, Iu = { current: null }, Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Xc.call(t, r) && !Gc.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Ar, type: e, key: o, ref: l, props: i, _owner: Iu.current };
}
function sh(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function ch(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wa = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ch("" + e.key) : t.toString(36);
}
function hi(e, t, n, r, i) {
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
        case Ar:
        case Zp:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Fo(l, 0) : r, Ba(i) ? (n = "", e != null && (n = e.replace(Wa, "$&/") + "/"), hi(i, t, n, "", function(s) {
    return s;
  })) : i != null && (Nu(i) && (i = sh(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Wa, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Ba(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Fo(o, u);
    l += hi(o, t, n, a, i);
  }
  else if (a = ah(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Fo(o, u++), l += hi(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return hi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function fh(e) {
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
var Ee = { current: null }, vi = { transition: null }, dh = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: vi, ReactCurrentOwner: Iu };
function qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Nu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Hn;
z.Fragment = Jp;
z.Profiler = th;
z.PureComponent = _u;
z.StrictMode = eh;
z.Suspense = oh;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh;
z.act = qc;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Wc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Iu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) Xc.call(t, a) && !Gc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Ar, type: e.type, key: i, ref: o, props: r, _owner: l };
};
z.createContext = function(e) {
  return e = { $$typeof: rh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nh, _context: e }, e.Consumer = e;
};
z.createElement = Yc;
z.createFactory = function(e) {
  var t = Yc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: ih, render: e };
};
z.isValidElement = Nu;
z.lazy = function(e) {
  return { $$typeof: uh, _payload: { _status: -1, _result: e }, _init: fh };
};
z.memo = function(e, t) {
  return { $$typeof: lh, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = vi.transition;
  vi.transition = {};
  try {
    e();
  } finally {
    vi.transition = t;
  }
};
z.unstable_act = qc;
z.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
z.useContext = function(e) {
  return Ee.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
z.useId = function() {
  return Ee.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return Ee.current.useRef(e);
};
z.useState = function(e) {
  return Ee.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return Ee.current.useTransition();
};
z.version = "18.3.1";
Vc.exports = z;
var E = Vc.exports;
const P = /* @__PURE__ */ Un(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph = E, hh = Symbol.for("react.element"), vh = Symbol.for("react.fragment"), gh = Object.prototype.hasOwnProperty, mh = ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) gh.call(t, r) && !yh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: hh, type: e, key: o, ref: l, props: i, _owner: mh.current };
}
io.Fragment = vh;
io.jsx = Zc;
io.jsxs = Zc;
Hc.exports = io;
var _ = Hc.exports, Jc = { exports: {} }, Le = {}, ef = { exports: {} }, tf = {};
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
  function t(D, R) {
    var j = D.length;
    D.push(R);
    e: for (; 0 < j; ) {
      var X = j - 1 >>> 1, J = D[X];
      if (0 < i(J, R)) D[X] = R, D[j] = J, j = X;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var R = D[0], j = D.pop();
    if (j !== R) {
      D[0] = j;
      e: for (var X = 0, J = D.length, cn = J >>> 1; X < cn; ) {
        var ut = 2 * (X + 1) - 1, Xn = D[ut], at = ut + 1, fn = D[at];
        if (0 > i(Xn, j)) at < J && 0 > i(fn, Xn) ? (D[X] = fn, D[at] = j, X = at) : (D[X] = Xn, D[ut] = j, X = ut);
        else if (at < J && 0 > i(fn, j)) D[X] = fn, D[at] = j, X = at;
        else break e;
      }
    }
    return R;
  }
  function i(D, R) {
    var j = D.sortIndex - R.sortIndex;
    return j !== 0 ? j : D.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var a = [], s = [], f = 1, p = null, v = 3, g = !1, m = !1, y = !1, I = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var R = n(s); R !== null; ) {
      if (R.callback === null) r(s);
      else if (R.startTime <= D) r(s), R.sortIndex = R.expirationTime, t(a, R);
      else break;
      R = n(s);
    }
  }
  function S(D) {
    if (y = !1, h(D), !m) if (n(a) !== null) m = !0, Kn(C);
    else {
      var R = n(s);
      R !== null && Et(S, R.startTime - D);
    }
  }
  function C(D, R) {
    m = !1, y && (y = !1, d(O), O = -1), g = !0;
    var j = v;
    try {
      for (h(R), p = n(a); p !== null && (!(p.expirationTime > R) || D && !me()); ) {
        var X = p.callback;
        if (typeof X == "function") {
          p.callback = null, v = p.priorityLevel;
          var J = X(p.expirationTime <= R);
          R = e.unstable_now(), typeof J == "function" ? p.callback = J : p === n(a) && r(a), h(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var cn = !0;
      else {
        var ut = n(s);
        ut !== null && Et(S, ut.startTime - R), cn = !1;
      }
      return cn;
    } finally {
      p = null, v = j, g = !1;
    }
  }
  var k = !1, T = null, O = -1, H = 5, L = -1;
  function me() {
    return !(e.unstable_now() - L < H);
  }
  function Bt() {
    if (T !== null) {
      var D = e.unstable_now();
      L = D;
      var R = !0;
      try {
        R = T(!0, D);
      } finally {
        R ? lt() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var lt;
  if (typeof c == "function") lt = function() {
    c(Bt);
  };
  else if (typeof MessageChannel < "u") {
    var Qn = new MessageChannel(), _e = Qn.port2;
    Qn.port1.onmessage = Bt, lt = function() {
      _e.postMessage(null);
    };
  } else lt = function() {
    I(Bt, 0);
  };
  function Kn(D) {
    T = D, k || (k = !0, lt());
  }
  function Et(D, R) {
    O = I(function() {
      D(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    m || g || (m = !0, Kn(C));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(D) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = v;
    }
    var j = v;
    v = R;
    try {
      return D();
    } finally {
      v = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, R) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var j = v;
    v = D;
    try {
      return R();
    } finally {
      v = j;
    }
  }, e.unstable_scheduleCallback = function(D, R, j) {
    var X = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? X + j : X) : j = X, D) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = j + J, D = { id: f++, callback: R, priorityLevel: D, startTime: j, expirationTime: J, sortIndex: -1 }, j > X ? (D.sortIndex = j, t(s, D), n(a) === null && D === n(s) && (y ? (d(O), O = -1) : y = !0, Et(S, j - X))) : (D.sortIndex = J, t(a, D), m || g || (m = !0, Kn(C))), D;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(D) {
    var R = v;
    return function() {
      var j = v;
      v = R;
      try {
        return D.apply(this, arguments);
      } finally {
        v = j;
      }
    };
  };
})(tf);
ef.exports = tf;
var Sh = ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh = E, Re = Sh;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nf = /* @__PURE__ */ new Set(), wr = {};
function un(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) nf.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cl = Object.prototype.hasOwnProperty, Eh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qa = {}, Ka = {};
function Ch(e) {
  return Cl.call(Ka, e) ? !0 : Cl.call(Qa, e) ? !1 : Eh.test(e) ? Ka[e] = !0 : (Qa[e] = !0, !1);
}
function kh(e, t, n, r) {
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
function Th(e, t, n, r) {
  if (t === null || typeof t > "u" || kh(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new Ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ru = /[\-:]([a-z])/g;
function Mu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ru,
    Mu
  );
  fe[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ru, Mu);
  fe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ru, Mu);
  fe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lu(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Th(t, n, i, r) && (n = null), r || i === null ? Ch(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kr = Symbol.for("react.element"), gn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), $u = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), rf = Symbol.for("react.provider"), of = Symbol.for("react.context"), ju = Symbol.for("react.forward_ref"), Tl = Symbol.for("react.suspense"), Ol = Symbol.for("react.suspense_list"), Au = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), lf = Symbol.for("react.offscreen"), Xa = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object" ? null : (e = Xa && e[Xa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Uo;
function or(e) {
  if (Uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Uo = t && t[1] || "";
  }
  return `
` + Uo + e;
}
var Ho = !1;
function Vo(e, t) {
  if (!e || Ho) return "";
  Ho = !0;
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
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== o[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || i[l] !== o[u]) {
              var a = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Ho = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? or(e) : "";
}
function Oh(e) {
  switch (e.tag) {
    case 5:
      return or(e.type);
    case 16:
      return or("Lazy");
    case 13:
      return or("Suspense");
    case 19:
      return or("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, !1), e;
    case 11:
      return e = Vo(e.type.render, !1), e;
    case 1:
      return e = Vo(e.type, !0), e;
    default:
      return "";
  }
}
function Dl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case gn:
      return "Portal";
    case kl:
      return "Profiler";
    case $u:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case Ol:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case of:
      return (e.displayName || "Context") + ".Consumer";
    case rf:
      return (e._context.displayName || "Context") + ".Provider";
    case ju:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Au:
      return t = e.displayName || null, t !== null ? t : Dl(e.type) || "Memo";
    case kt:
      t = e._payload, e = e._init;
      try {
        return Dl(e(t));
      } catch {
      }
  }
  return null;
}
function Dh(e) {
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
      return Dl(t);
    case 8:
      return t === $u ? "StrictMode" : "Mode";
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
function zt(e) {
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
function uf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xh(e) {
  var t = uf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Xr(e) {
  e._valueTracker || (e._valueTracker = xh(e));
}
function af(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = uf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ni(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xl(e, t) {
  var n = t.checked;
  return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ga(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = zt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sf(e, t) {
  t = t.checked, t != null && Lu(e, "checked", t, !1);
}
function _l(e, t) {
  sf(e, t);
  var n = zt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pl(e, t.type, zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ya(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Pl(e, t, n) {
  (t !== "number" || Ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function _n(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Il(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: zt(n) };
}
function cf(e, t) {
  var n = zt(t.value), r = zt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ff(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, df = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var fr = {
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
}, _h = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  _h.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function hf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = pf(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Ph = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Rl(e, t) {
  if (t) {
    if (Ph[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Ml(e, t) {
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
var Ll = null;
function zu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $l = null, Pn = null, In = null;
function Ja(e) {
  if (e = Fr(e)) {
    if (typeof $l != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = so(t), $l(e.stateNode, e.type, t));
  }
}
function vf(e) {
  Pn ? In ? In.push(e) : In = [e] : Pn = e;
}
function gf() {
  if (Pn) {
    var e = Pn, t = In;
    if (In = Pn = null, Ja(e), t) for (e = 0; e < t.length; e++) Ja(t[e]);
  }
}
function mf(e, t) {
  return e(t);
}
function yf() {
}
var Bo = !1;
function Sf(e, t, n) {
  if (Bo) return e(t, n);
  Bo = !0;
  try {
    return mf(e, t, n);
  } finally {
    Bo = !1, (Pn !== null || In !== null) && (yf(), gf());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = so(n);
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var jl = !1;
if (vt) try {
  var Yn = {};
  Object.defineProperty(Yn, "passive", { get: function() {
    jl = !0;
  } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
} catch {
  jl = !1;
}
function Ih(e, t, n, r, i, o, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var dr = !1, Ri = null, Mi = !1, Al = null, Nh = { onError: function(e) {
  dr = !0, Ri = e;
} };
function Rh(e, t, n, r, i, o, l, u, a) {
  dr = !1, Ri = null, Ih.apply(Nh, arguments);
}
function Mh(e, t, n, r, i, o, l, u, a) {
  if (Rh.apply(this, arguments), dr) {
    if (dr) {
      var s = Ri;
      dr = !1, Ri = null;
    } else throw Error(w(198));
    Mi || (Mi = !0, Al = s);
  }
}
function an(e) {
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
function wf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function es(e) {
  if (an(e) !== e) throw Error(w(188));
}
function Lh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null) throw Error(w(188));
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
        if (o === n) return es(i), e;
        if (o === r) return es(i), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = !1, u = i.child; u; ) {
        if (u === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (u === r) {
          l = !0, r = i, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (u === r) {
            l = !0, r = o, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Ef(e) {
  return e = Lh(e), e !== null ? Cf(e) : null;
}
function Cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kf = Re.unstable_scheduleCallback, ts = Re.unstable_cancelCallback, $h = Re.unstable_shouldYield, jh = Re.unstable_requestPaint, ne = Re.unstable_now, Ah = Re.unstable_getCurrentPriorityLevel, bu = Re.unstable_ImmediatePriority, Tf = Re.unstable_UserBlockingPriority, Li = Re.unstable_NormalPriority, zh = Re.unstable_LowPriority, Of = Re.unstable_IdlePriority, oo = null, it = null;
function bh(e) {
  if (it && typeof it.onCommitFiberRoot == "function") try {
    it.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var qe = Math.clz32 ? Math.clz32 : Hh, Fh = Math.log, Uh = Math.LN2;
function Hh(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Fh(e) / Uh | 0) | 0;
}
var Yr = 64, qr = 4194304;
function ur(e) {
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
function $i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = ur(u) : (o &= l, o !== 0 && (r = ur(o)));
  } else l = n & ~i, l !== 0 ? r = ur(l) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - qe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Vh(e, t) {
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
function Bh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - qe(o), u = 1 << l, a = i[l];
    a === -1 ? (!(u & n) || u & r) && (i[l] = Vh(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function zl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Df() {
  var e = Yr;
  return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
}
function Wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
}
function Wh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Fu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var F = 0;
function xf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _f, Uu, Pf, If, Nf, bl = !1, Zr = [], It = null, Nt = null, Rt = null, kr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Dt = [], Qh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ns(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tr.delete(t.pointerId);
  }
}
function qn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Fr(t), t !== null && Uu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Kh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return It = qn(It, e, t, n, r, i), !0;
    case "dragenter":
      return Nt = qn(Nt, e, t, n, r, i), !0;
    case "mouseover":
      return Rt = qn(Rt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return kr.set(o, qn(kr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Tr.set(o, qn(Tr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Rf(e) {
  var t = Gt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wf(n), t !== null) {
          e.blockedOn = t, Nf(e.priority, function() {
            Pf(n);
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
function gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ll = r, n.target.dispatchEvent(r), Ll = null;
    } else return t = Fr(n), t !== null && Uu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rs(e, t, n) {
  gi(e) && n.delete(t);
}
function Xh() {
  bl = !1, It !== null && gi(It) && (It = null), Nt !== null && gi(Nt) && (Nt = null), Rt !== null && gi(Rt) && (Rt = null), kr.forEach(rs), Tr.forEach(rs);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Xh)));
}
function Or(e) {
  function t(i) {
    return Zn(i, e);
  }
  if (0 < Zr.length) {
    Zn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (It !== null && Zn(It, e), Nt !== null && Zn(Nt, e), Rt !== null && Zn(Rt, e), kr.forEach(t), Tr.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); ) Rf(n), n.blockedOn === null && Dt.shift();
}
var Nn = St.ReactCurrentBatchConfig, ji = !0;
function Gh(e, t, n, r) {
  var i = F, o = Nn.transition;
  Nn.transition = null;
  try {
    F = 1, Hu(e, t, n, r);
  } finally {
    F = i, Nn.transition = o;
  }
}
function Yh(e, t, n, r) {
  var i = F, o = Nn.transition;
  Nn.transition = null;
  try {
    F = 4, Hu(e, t, n, r);
  } finally {
    F = i, Nn.transition = o;
  }
}
function Hu(e, t, n, r) {
  if (ji) {
    var i = Fl(e, t, n, r);
    if (i === null) tl(e, t, r, Ai, n), ns(e, r);
    else if (Kh(i, e, t, n, r)) r.stopPropagation();
    else if (ns(e, r), t & 4 && -1 < Qh.indexOf(e)) {
      for (; i !== null; ) {
        var o = Fr(i);
        if (o !== null && _f(o), o = Fl(e, t, n, r), o === null && tl(e, t, r, Ai, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else tl(e, t, r, null, n);
  }
}
var Ai = null;
function Fl(e, t, n, r) {
  if (Ai = null, e = zu(r), e = Gt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = wf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ai = e, null;
}
function Mf(e) {
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
      switch (Ah()) {
        case bu:
          return 1;
        case Tf:
          return 4;
        case Li:
        case zh:
          return 16;
        case Of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, Vu = null, mi = null;
function Lf() {
  if (mi) return mi;
  var e, t = Vu, n = t.length, r, i = "value" in _t ? _t.value : _t.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return mi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function yi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jr() {
  return !0;
}
function is() {
  return !1;
}
function $e(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Jr : is, this.isPropagationStopped = is, this;
  }
  return q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
  }, persist: function() {
  }, isPersistent: Jr }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bu = $e(Vn), br = q({}, Vn, { view: 0, detail: 0 }), qh = $e(br), Qo, Ko, Jn, lo = q({}, br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Qo = e.screenX - Jn.screenX, Ko = e.screenY - Jn.screenY) : Ko = Qo = 0, Jn = e), Qo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ko;
} }), os = $e(lo), Zh = q({}, lo, { dataTransfer: 0 }), Jh = $e(Zh), ev = q({}, br, { relatedTarget: 0 }), Xo = $e(ev), tv = q({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nv = $e(tv), rv = q({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), iv = $e(rv), ov = q({}, Vn, { data: 0 }), ls = $e(ov), lv = {
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
}, uv = {
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
}, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function sv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = av[e]) ? !!t[e] : !1;
}
function Wu() {
  return sv;
}
var cv = q({}, br, { key: function(e) {
  if (e.key) {
    var t = lv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wu, charCode: function(e) {
  return e.type === "keypress" ? yi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), fv = $e(cv), dv = q({}, lo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), us = $e(dv), pv = q({}, br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wu }), hv = $e(pv), vv = q({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gv = $e(vv), mv = q({}, lo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yv = $e(mv), Sv = [9, 13, 27, 32], Qu = vt && "CompositionEvent" in window, pr = null;
vt && "documentMode" in document && (pr = document.documentMode);
var wv = vt && "TextEvent" in window && !pr, $f = vt && (!Qu || pr && 8 < pr && 11 >= pr), as = " ", ss = !1;
function jf(e, t) {
  switch (e) {
    case "keyup":
      return Sv.indexOf(t.keyCode) !== -1;
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
function Af(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Ev(e, t) {
  switch (e) {
    case "compositionend":
      return Af(t);
    case "keypress":
      return t.which !== 32 ? null : (ss = !0, as);
    case "textInput":
      return e = t.data, e === as && ss ? null : e;
    default:
      return null;
  }
}
function Cv(e, t) {
  if (yn) return e === "compositionend" || !Qu && jf(e, t) ? (e = Lf(), mi = Vu = _t = null, yn = !1, e) : null;
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
      return $f && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kv[e.type] : t === "textarea";
}
function zf(e, t, n, r) {
  vf(r), t = zi(t, "onChange"), 0 < t.length && (n = new Bu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, Dr = null;
function Tv(e) {
  Gf(e, 0);
}
function uo(e) {
  var t = En(e);
  if (af(t)) return e;
}
function Ov(e, t) {
  if (e === "change") return t;
}
var bf = !1;
if (vt) {
  var Go;
  if (vt) {
    var Yo = "oninput" in document;
    if (!Yo) {
      var fs = document.createElement("div");
      fs.setAttribute("oninput", "return;"), Yo = typeof fs.oninput == "function";
    }
    Go = Yo;
  } else Go = !1;
  bf = Go && (!document.documentMode || 9 < document.documentMode);
}
function ds() {
  hr && (hr.detachEvent("onpropertychange", Ff), Dr = hr = null);
}
function Ff(e) {
  if (e.propertyName === "value" && uo(Dr)) {
    var t = [];
    zf(t, Dr, e, zu(e)), Sf(Tv, t);
  }
}
function Dv(e, t, n) {
  e === "focusin" ? (ds(), hr = t, Dr = n, hr.attachEvent("onpropertychange", Ff)) : e === "focusout" && ds();
}
function xv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return uo(Dr);
}
function _v(e, t) {
  if (e === "click") return uo(t);
}
function Pv(e, t) {
  if (e === "input" || e === "change") return uo(t);
}
function Iv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Iv;
function xr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Cl.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function ps(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hs(e, t) {
  var n = ps(e);
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
    n = ps(n);
  }
}
function Uf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hf() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Nv(e) {
  var t = Hf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Uf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ku(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = hs(n, o);
        var l = hs(
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
var Rv = vt && "documentMode" in document && 11 >= document.documentMode, Sn = null, Ul = null, vr = null, Hl = !1;
function vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hl || Sn == null || Sn !== Ni(r) || (r = Sn, "selectionStart" in r && Ku(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), vr && xr(vr, r) || (vr = r, r = zi(Ul, "onSelect"), 0 < r.length && (t = new Bu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
}
function ei(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: ei("Animation", "AnimationEnd"), animationiteration: ei("Animation", "AnimationIteration"), animationstart: ei("Animation", "AnimationStart"), transitionend: ei("Transition", "TransitionEnd") }, qo = {}, Vf = {};
vt && (Vf = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function ao(e) {
  if (qo[e]) return qo[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vf) return qo[e] = t[n];
  return e;
}
var Bf = ao("animationend"), Wf = ao("animationiteration"), Qf = ao("animationstart"), Kf = ao("transitionend"), Xf = /* @__PURE__ */ new Map(), gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  Xf.set(e, t), un(t, [e]);
}
for (var Zo = 0; Zo < gs.length; Zo++) {
  var Jo = gs[Zo], Mv = Jo.toLowerCase(), Lv = Jo[0].toUpperCase() + Jo.slice(1);
  Ft(Mv, "on" + Lv);
}
Ft(Bf, "onAnimationEnd");
Ft(Wf, "onAnimationIteration");
Ft(Qf, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Kf, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $v = new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));
function ms(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Mh(r, t, void 0, e), e.currentTarget = null;
}
function Gf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], a = u.instance, s = u.currentTarget;
        if (u = u.listener, a !== o && i.isPropagationStopped()) break e;
        ms(i, u, s), o = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && i.isPropagationStopped()) break e;
        ms(i, u, s), o = a;
      }
    }
  }
  if (Mi) throw e = Al, Mi = !1, Al = null, e;
}
function B(e, t) {
  var n = t[Kl];
  n === void 0 && (n = t[Kl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Yf(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
  var r = 0;
  t && (r |= 4), Yf(n, e, r, t);
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[ti]) {
    e[ti] = !0, nf.forEach(function(n) {
      n !== "selectionchange" && ($v.has(n) || el(n, !1, e), el(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ti] || (t[ti] = !0, el("selectionchange", !1, t));
  }
}
function Yf(e, t, n, r) {
  switch (Mf(t)) {
    case 1:
      var i = Gh;
      break;
    case 4:
      i = Yh;
      break;
    default:
      i = Hu;
  }
  n = i.bind(null, t, n, e), i = void 0, !jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function tl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = Gt(u), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = o = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Sf(function() {
    var s = o, f = zu(n), p = [];
    e: {
      var v = Xf.get(e);
      if (v !== void 0) {
        var g = Bu, m = e;
        switch (e) {
          case "keypress":
            if (yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = fv;
            break;
          case "focusin":
            m = "focus", g = Xo;
            break;
          case "focusout":
            m = "blur", g = Xo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Xo;
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
            g = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = hv;
            break;
          case Bf:
          case Wf:
          case Qf:
            g = nv;
            break;
          case Kf:
            g = gv;
            break;
          case "scroll":
            g = qh;
            break;
          case "wheel":
            g = yv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = us;
        }
        var y = (t & 4) !== 0, I = !y && e === "scroll", d = y ? v !== null ? v + "Capture" : null : v;
        y = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var S = h.stateNode;
          if (h.tag === 5 && S !== null && (h = S, d !== null && (S = Cr(c, d), S != null && y.push(Pr(c, S, h)))), I) break;
          c = c.return;
        }
        0 < y.length && (v = new g(v, m, null, n, f), p.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", v && n !== Ll && (m = n.relatedTarget || n.fromElement) && (Gt(m) || m[gt])) break e;
        if ((g || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (m = n.relatedTarget || n.toElement, g = s, m = m ? Gt(m) : null, m !== null && (I = an(m), m !== I || m.tag !== 5 && m.tag !== 6) && (m = null)) : (g = null, m = s), g !== m)) {
          if (y = os, S = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = us, S = "onPointerLeave", d = "onPointerEnter", c = "pointer"), I = g == null ? v : En(g), h = m == null ? v : En(m), v = new y(S, c + "leave", g, n, f), v.target = I, v.relatedTarget = h, S = null, Gt(f) === s && (y = new y(d, c + "enter", m, n, f), y.target = h, y.relatedTarget = I, S = y), I = S, g && m) t: {
            for (y = g, d = m, c = 0, h = y; h; h = dn(h)) c++;
            for (h = 0, S = d; S; S = dn(S)) h++;
            for (; 0 < c - h; ) y = dn(y), c--;
            for (; 0 < h - c; ) d = dn(d), h--;
            for (; c--; ) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = dn(y), d = dn(d);
            }
            y = null;
          }
          else y = null;
          g !== null && ys(p, v, g, y, !1), m !== null && I !== null && ys(p, I, m, y, !0);
        }
      }
      e: {
        if (v = s ? En(s) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file") var C = Ov;
        else if (cs(v)) if (bf) C = Pv;
        else {
          C = xv;
          var k = Dv;
        }
        else (g = v.nodeName) && g.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (C = _v);
        if (C && (C = C(e, s))) {
          zf(p, C, n, f);
          break e;
        }
        k && k(e, v, s), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Pl(v, "number", v.value);
      }
      switch (k = s ? En(s) : window, e) {
        case "focusin":
          (cs(k) || k.contentEditable === "true") && (Sn = k, Ul = s, vr = null);
          break;
        case "focusout":
          vr = Ul = Sn = null;
          break;
        case "mousedown":
          Hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hl = !1, vs(p, n, f);
          break;
        case "selectionchange":
          if (Rv) break;
        case "keydown":
        case "keyup":
          vs(p, n, f);
      }
      var T;
      if (Qu) e: {
        switch (e) {
          case "compositionstart":
            var O = "onCompositionStart";
            break e;
          case "compositionend":
            O = "onCompositionEnd";
            break e;
          case "compositionupdate":
            O = "onCompositionUpdate";
            break e;
        }
        O = void 0;
      }
      else yn ? jf(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O && ($f && n.locale !== "ko" && (yn || O !== "onCompositionStart" ? O === "onCompositionEnd" && yn && (T = Lf()) : (_t = f, Vu = "value" in _t ? _t.value : _t.textContent, yn = !0)), k = zi(s, O), 0 < k.length && (O = new ls(O, e, null, n, f), p.push({ event: O, listeners: k }), T ? O.data = T : (T = Af(n), T !== null && (O.data = T)))), (T = wv ? Ev(e, n) : Cv(e, n)) && (s = zi(s, "onBeforeInput"), 0 < s.length && (f = new ls("onBeforeInput", "beforeinput", null, n, f), p.push({ event: f, listeners: s }), f.data = T));
    }
    Gf(p, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Cr(e, n), o != null && r.unshift(Pr(e, o, i)), o = Cr(e, t), o != null && r.push(Pr(e, o, i))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ys(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && s !== null && (u = s, i ? (a = Cr(n, o), a != null && l.unshift(Pr(n, a, u))) : i || (a = Cr(n, o), a != null && l.push(Pr(n, a, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var jv = /\r\n?/g, Av = /\u0000|\uFFFD/g;
function Ss(e) {
  return (typeof e == "string" ? e : "" + e).replace(jv, `
`).replace(Av, "");
}
function ni(e, t, n) {
  if (t = Ss(t), Ss(e) !== t && n) throw Error(w(425));
}
function bi() {
}
var Vl = null, Bl = null;
function Wl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ql = typeof setTimeout == "function" ? setTimeout : void 0, zv = typeof clearTimeout == "function" ? clearTimeout : void 0, ws = typeof Promise == "function" ? Promise : void 0, bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ws < "u" ? function(e) {
  return ws.resolve(null).then(e).catch(Fv);
} : Ql;
function Fv(e) {
  setTimeout(function() {
    throw e;
  });
}
function nl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Or(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Or(t);
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
function Es(e) {
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
var Bn = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Bn, Ir = "__reactProps$" + Bn, gt = "__reactContainer$" + Bn, Kl = "__reactEvents$" + Bn, Uv = "__reactListeners$" + Bn, Hv = "__reactHandles$" + Bn;
function Gt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[gt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Es(e); e !== null; ) {
        if (n = e[rt]) return n;
        e = Es(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Fr(e) {
  return e = e[rt] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function so(e) {
  return e[Ir] || null;
}
var Xl = [], Cn = -1;
function Ut(e) {
  return { current: e };
}
function W(e) {
  0 > Cn || (e.current = Xl[Cn], Xl[Cn] = null, Cn--);
}
function V(e, t) {
  Cn++, Xl[Cn] = e.current, e.current = t;
}
var bt = {}, ge = Ut(bt), Oe = Ut(!1), en = bt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function Fi() {
  W(Oe), W(ge);
}
function Cs(e, t, n) {
  if (ge.current !== bt) throw Error(w(168));
  V(ge, t), V(Oe, n);
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(w(108, Dh(e) || "Unknown", i));
  return q({}, n, r);
}
function Ui(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt, en = ge.current, V(ge, e), V(Oe, Oe.current), !0;
}
function ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = qf(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, W(Oe), W(ge), V(ge, e)) : W(Oe), V(Oe, n);
}
var ft = null, co = !1, rl = !1;
function Zf(e) {
  ft === null ? ft = [e] : ft.push(e);
}
function Vv(e) {
  co = !0, Zf(e);
}
function Ht() {
  if (!rl && ft !== null) {
    rl = !0;
    var e = 0, t = F;
    try {
      var n = ft;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ft = null, co = !1;
    } catch (i) {
      throw ft !== null && (ft = ft.slice(e + 1)), kf(bu, Ht), i;
    } finally {
      F = t, rl = !1;
    }
  }
  return null;
}
var kn = [], Tn = 0, Hi = null, Vi = 0, be = [], Fe = 0, tn = null, dt = 1, pt = "";
function Wt(e, t) {
  kn[Tn++] = Vi, kn[Tn++] = Hi, Hi = e, Vi = t;
}
function Jf(e, t, n) {
  be[Fe++] = dt, be[Fe++] = pt, be[Fe++] = tn, tn = e;
  var r = dt;
  e = pt;
  var i = 32 - qe(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - qe(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, dt = 1 << 32 - qe(t) + i | n << i | r, pt = o + e;
  } else dt = 1 << o | n << i | r, pt = e;
}
function Xu(e) {
  e.return !== null && (Wt(e, 1), Jf(e, 1, 0));
}
function Gu(e) {
  for (; e === Hi; ) Hi = kn[--Tn], kn[Tn] = null, Vi = kn[--Tn], kn[Tn] = null;
  for (; e === tn; ) tn = be[--Fe], be[Fe] = null, pt = be[--Fe], be[Fe] = null, dt = be[--Fe], be[Fe] = null;
}
var Ne = null, Ie = null, K = !1, Ye = null;
function ed(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ne = e, Ie = Mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ne = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: dt, overflow: pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ne = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function Gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (K) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ts(e, t)) {
        if (Gl(e)) throw Error(w(418));
        t = Mt(n.nextSibling);
        var r = Ne;
        t && Ts(e, t) ? ed(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ne = e);
      }
    } else {
      if (Gl(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, K = !1, Ne = e;
    }
  }
}
function Os(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function ri(e) {
  if (e !== Ne) return !1;
  if (!K) return Os(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (Gl(e)) throw td(), Error(w(418));
    for (; t; ) ed(e, t), t = Mt(t.nextSibling);
  }
  if (Os(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Ne ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function td() {
  for (var e = Ie; e; ) e = Mt(e.nextSibling);
}
function jn() {
  Ie = Ne = null, K = !1;
}
function Yu(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Bv = St.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function ii(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ds(e) {
  var t = e._init;
  return t(e._payload);
}
function nd(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [c], d.flags |= 16) : h.push(c);
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
    return d = At(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < c ? (d.flags |= 2, c) : h) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, h, S) {
    return c === null || c.tag !== 6 ? (c = cl(h, d.mode, S), c.return = d, c) : (c = i(c, h), c.return = d, c);
  }
  function a(d, c, h, S) {
    var C = h.type;
    return C === mn ? f(d, c, h.props.children, S, h.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kt && Ds(C) === c.type) ? (S = i(c, h.props), S.ref = er(d, c, h), S.return = d, S) : (S = Oi(h.type, h.key, h.props, null, d.mode, S), S.ref = er(d, c, h), S.return = d, S);
  }
  function s(d, c, h, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = fl(h, d.mode, S), c.return = d, c) : (c = i(c, h.children || []), c.return = d, c);
  }
  function f(d, c, h, S, C) {
    return c === null || c.tag !== 7 ? (c = Jt(h, d.mode, S, C), c.return = d, c) : (c = i(c, h), c.return = d, c);
  }
  function p(d, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = cl("" + c, d.mode, h), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Kr:
          return h = Oi(c.type, c.key, c.props, null, d.mode, h), h.ref = er(d, null, c), h.return = d, h;
        case gn:
          return c = fl(c, d.mode, h), c.return = d, c;
        case kt:
          var S = c._init;
          return p(d, S(c._payload), h);
      }
      if (lr(c) || Gn(c)) return c = Jt(c, d.mode, h, null), c.return = d, c;
      ii(d, c);
    }
    return null;
  }
  function v(d, c, h, S) {
    var C = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : u(d, c, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Kr:
          return h.key === C ? a(d, c, h, S) : null;
        case gn:
          return h.key === C ? s(d, c, h, S) : null;
        case kt:
          return C = h._init, v(
            d,
            c,
            C(h._payload),
            S
          );
      }
      if (lr(h) || Gn(h)) return C !== null ? null : f(d, c, h, S, null);
      ii(d, h);
    }
    return null;
  }
  function g(d, c, h, S, C) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return d = d.get(h) || null, u(c, d, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Kr:
          return d = d.get(S.key === null ? h : S.key) || null, a(c, d, S, C);
        case gn:
          return d = d.get(S.key === null ? h : S.key) || null, s(c, d, S, C);
        case kt:
          var k = S._init;
          return g(d, c, h, k(S._payload), C);
      }
      if (lr(S) || Gn(S)) return d = d.get(h) || null, f(c, d, S, C, null);
      ii(c, S);
    }
    return null;
  }
  function m(d, c, h, S) {
    for (var C = null, k = null, T = c, O = c = 0, H = null; T !== null && O < h.length; O++) {
      T.index > O ? (H = T, T = null) : H = T.sibling;
      var L = v(d, T, h[O], S);
      if (L === null) {
        T === null && (T = H);
        break;
      }
      e && T && L.alternate === null && t(d, T), c = o(L, c, O), k === null ? C = L : k.sibling = L, k = L, T = H;
    }
    if (O === h.length) return n(d, T), K && Wt(d, O), C;
    if (T === null) {
      for (; O < h.length; O++) T = p(d, h[O], S), T !== null && (c = o(T, c, O), k === null ? C = T : k.sibling = T, k = T);
      return K && Wt(d, O), C;
    }
    for (T = r(d, T); O < h.length; O++) H = g(T, d, O, h[O], S), H !== null && (e && H.alternate !== null && T.delete(H.key === null ? O : H.key), c = o(H, c, O), k === null ? C = H : k.sibling = H, k = H);
    return e && T.forEach(function(me) {
      return t(d, me);
    }), K && Wt(d, O), C;
  }
  function y(d, c, h, S) {
    var C = Gn(h);
    if (typeof C != "function") throw Error(w(150));
    if (h = C.call(h), h == null) throw Error(w(151));
    for (var k = C = null, T = c, O = c = 0, H = null, L = h.next(); T !== null && !L.done; O++, L = h.next()) {
      T.index > O ? (H = T, T = null) : H = T.sibling;
      var me = v(d, T, L.value, S);
      if (me === null) {
        T === null && (T = H);
        break;
      }
      e && T && me.alternate === null && t(d, T), c = o(me, c, O), k === null ? C = me : k.sibling = me, k = me, T = H;
    }
    if (L.done) return n(
      d,
      T
    ), K && Wt(d, O), C;
    if (T === null) {
      for (; !L.done; O++, L = h.next()) L = p(d, L.value, S), L !== null && (c = o(L, c, O), k === null ? C = L : k.sibling = L, k = L);
      return K && Wt(d, O), C;
    }
    for (T = r(d, T); !L.done; O++, L = h.next()) L = g(T, d, O, L.value, S), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? O : L.key), c = o(L, c, O), k === null ? C = L : k.sibling = L, k = L);
    return e && T.forEach(function(Bt) {
      return t(d, Bt);
    }), K && Wt(d, O), C;
  }
  function I(d, c, h, S) {
    if (typeof h == "object" && h !== null && h.type === mn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Kr:
          e: {
            for (var C = h.key, k = c; k !== null; ) {
              if (k.key === C) {
                if (C = h.type, C === mn) {
                  if (k.tag === 7) {
                    n(d, k.sibling), c = i(k, h.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kt && Ds(C) === k.type) {
                  n(d, k.sibling), c = i(k, h.props), c.ref = er(d, k, h), c.return = d, d = c;
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            h.type === mn ? (c = Jt(h.props.children, d.mode, S, h.key), c.return = d, d = c) : (S = Oi(h.type, h.key, h.props, null, d.mode, S), S.ref = er(d, c, h), S.return = d, d = S);
          }
          return l(d);
        case gn:
          e: {
            for (k = h.key; c !== null; ) {
              if (c.key === k) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(d, c.sibling), c = i(c, h.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = fl(h, d.mode, S), c.return = d, d = c;
          }
          return l(d);
        case kt:
          return k = h._init, I(d, c, k(h._payload), S);
      }
      if (lr(h)) return m(d, c, h, S);
      if (Gn(h)) return y(d, c, h, S);
      ii(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, h), c.return = d, d = c) : (n(d, c), c = cl(h, d.mode, S), c.return = d, d = c), l(d)) : n(d, c);
  }
  return I;
}
var An = nd(!0), rd = nd(!1), Bi = Ut(null), Wi = null, On = null, qu = null;
function Zu() {
  qu = On = Wi = null;
}
function Ju(e) {
  var t = Bi.current;
  W(Bi), e._currentValue = t;
}
function ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Rn(e, t) {
  Wi = e, qu = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (qu !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (Wi === null) throw Error(w(308));
    On = e, Wi.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var Yt = null;
function ea(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function id(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ea(t)) : (n.next = i.next, i.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function ta(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function od(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ht(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, b & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, mt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ea(r)) : (t.next = i.next, i.next = t), r.interleaved = t, mt(e, n);
}
function Si(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fu(e, n);
  }
}
function xs(e, t) {
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
function Qi(e, t, n, r) {
  var i = e.updateQueue;
  Tt = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, l === null ? o = s : l.next = s, l = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== l && (u === null ? f.firstBaseUpdate = s : u.next = s, f.lastBaseUpdate = a));
  }
  if (o !== null) {
    var p = i.baseState;
    l = 0, f = s = a = null, u = o;
    do {
      var v = u.lane, g = u.eventTime;
      if ((r & v) === v) {
        f !== null && (f = f.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var m = e, y = u;
          switch (v = t, g = n, y.tag) {
            case 1:
              if (m = y.payload, typeof m == "function") {
                p = m.call(g, p, v);
                break e;
              }
              p = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = y.payload, v = typeof m == "function" ? m.call(g, p, v) : m, v == null) break e;
              p = q({}, p, v);
              break e;
            case 2:
              Tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [u] : v.push(u));
      } else g = { eventTime: g, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (s = f = g, a = p) : f = f.next = g, l |= v;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = p), i.baseState = a, i.firstBaseUpdate = s, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    rn |= l, e.lanes = l, e.memoizedState = p;
  }
}
function _s(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(w(191, i));
      i.call(r);
    }
  }
}
var Ur = {}, ot = Ut(Ur), Nr = Ut(Ur), Rr = Ut(Ur);
function qt(e) {
  if (e === Ur) throw Error(w(174));
  return e;
}
function na(e, t) {
  switch (V(Rr, t), V(Nr, e), V(ot, Ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Nl(t, e);
  }
  W(ot), V(ot, t);
}
function zn() {
  W(ot), W(Nr), W(Rr);
}
function ld(e) {
  qt(Rr.current);
  var t = qt(ot.current), n = Nl(t, e.type);
  t !== n && (V(Nr, e), V(ot, n));
}
function ra(e) {
  Nr.current === e && (W(ot), W(Nr));
}
var G = Ut(0);
function Ki(e) {
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
var il = [];
function ia() {
  for (var e = 0; e < il.length; e++) il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var wi = St.ReactCurrentDispatcher, ol = St.ReactCurrentBatchConfig, nn = 0, Y = null, ie = null, le = null, Xi = !1, gr = !1, Mr = 0, Wv = 0;
function de() {
  throw Error(w(321));
}
function oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function la(e, t, n, r, i, o) {
  if (nn = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wi.current = e === null || e.memoizedState === null ? Gv : Yv, e = n(r, i), gr) {
    o = 0;
    do {
      if (gr = !1, Mr = 0, 25 <= o) throw Error(w(301));
      o += 1, le = ie = null, t.updateQueue = null, wi.current = qv, e = n(r, i);
    } while (gr);
  }
  if (wi.current = Gi, t = ie !== null && ie.next !== null, nn = 0, le = ie = Y = null, Xi = !1, t) throw Error(w(300));
  return e;
}
function ua() {
  var e = Mr !== 0;
  return Mr = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? Y.memoizedState = le = e : le = le.next = e, le;
}
function We() {
  if (ie === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) le = t, ie = e;
  else {
    if (e === null) throw Error(w(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, le === null ? Y.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ll(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = ie, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = l = null, a = null, s = o;
    do {
      var f = s.lane;
      if ((nn & f) === f) a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var p = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = p, l = r) : a = a.next = p, Y.lanes |= f, rn |= f;
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? l = r : a.next = u, Je(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Y.lanes |= o, rn |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ul(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    Je(o, t.memoizedState) || (Te = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ud() {
}
function ad(e, t) {
  var n = Y, r = We(), i = t(), o = !Je(r.memoizedState, i);
  if (o && (r.memoizedState = i, Te = !0), r = r.queue, aa(fd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, $r(9, cd.bind(null, n, r, i, t), void 0, null), ue === null) throw Error(w(349));
    nn & 30 || sd(n, t, i);
  }
  return i;
}
function sd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, dd(t) && pd(e);
}
function fd(e, t, n) {
  return n(function() {
    dd(t) && pd(e);
  });
}
function dd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function pd(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Ps(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xv.bind(null, Y, e), [t.memoizedState, e];
}
function $r(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hd() {
  return We().memoizedState;
}
function Ei(e, t, n, r) {
  var i = nt();
  Y.flags |= e, i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r);
}
function fo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (o = l.destroy, r !== null && oa(r, l.deps)) {
      i.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, i.memoizedState = $r(1 | t, n, o, r);
}
function Is(e, t) {
  return Ei(8390656, 8, e, t);
}
function aa(e, t) {
  return fo(2048, 8, e, t);
}
function vd(e, t) {
  return fo(4, 2, e, t);
}
function gd(e, t) {
  return fo(4, 4, e, t);
}
function md(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function yd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fo(4, 4, md.bind(null, t, e), n);
}
function sa() {
}
function Sd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function wd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ed(e, t, n) {
  return nn & 21 ? (Je(n, t) || (n = Df(), Y.lanes |= n, rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function Qv(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ol.transition;
  ol.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, ol.transition = r;
  }
}
function Cd() {
  return We().memoizedState;
}
function Kv(e, t, n) {
  var r = jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, kd(e)) Td(t, n);
  else if (n = id(e, t, n, r), n !== null) {
    var i = we();
    Ze(n, e, r, i), Od(n, t, r);
  }
}
function Xv(e, t, n) {
  var r = jt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kd(e)) Td(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, u = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = u, Je(u, l)) {
        var a = t.interleaved;
        a === null ? (i.next = i, ea(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = id(e, t, i, r), n !== null && (i = we(), Ze(n, e, r, i), Od(n, t, r));
  }
}
function kd(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Td(e, t) {
  gr = Xi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fu(e, n);
  }
}
var Gi = { readContext: Be, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Gv = { readContext: Be, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: Is, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ei(
    4194308,
    4,
    md.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ei(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ei(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Kv.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ps, useDebugValue: sa, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = Ps(!1), t = e[0];
  return e = Qv.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, i = nt();
  if (K) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), ue === null) throw Error(w(349));
    nn & 30 || sd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Is(fd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, $r(9, cd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = ue.identifierPrefix;
  if (K) {
    var n = pt, r = dt;
    n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Wv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Yv = {
  readContext: Be,
  useCallback: Sd,
  useContext: Be,
  useEffect: aa,
  useImperativeHandle: yd,
  useInsertionEffect: vd,
  useLayoutEffect: gd,
  useMemo: wd,
  useReducer: ll,
  useRef: hd,
  useState: function() {
    return ll(Lr);
  },
  useDebugValue: sa,
  useDeferredValue: function(e) {
    var t = We();
    return Ed(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ll(Lr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: ud,
  useSyncExternalStore: ad,
  useId: Cd,
  unstable_isNewReconciler: !1
}, qv = { readContext: Be, useCallback: Sd, useContext: Be, useEffect: aa, useImperativeHandle: yd, useInsertionEffect: vd, useLayoutEffect: gd, useMemo: wd, useReducer: ul, useRef: hd, useState: function() {
  return ul(Lr);
}, useDebugValue: sa, useDeferredValue: function(e) {
  var t = We();
  return ie === null ? t.memoizedState = e : Ed(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = ul(Lr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: ud, useSyncExternalStore: ad, useId: Cd, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = q({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var po = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = jt(e), o = ht(r, i);
  o.payload = t, n != null && (o.callback = n), t = Lt(e, o, i), t !== null && (Ze(t, e, i, r), Si(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = jt(e), o = ht(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Lt(e, o, i), t !== null && (Ze(t, e, i, r), Si(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = jt(e), i = ht(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Lt(e, i, r), t !== null && (Ze(t, e, r, n), Si(t, e, r));
} };
function Ns(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !xr(n, r) || !xr(i, o) : !0;
}
function Dd(e, t, n) {
  var r = !1, i = bt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Be(o) : (i = De(t) ? en : ge.current, r = t.contextTypes, o = (r = r != null) ? $n(e, i) : bt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Rs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && po.enqueueReplaceState(t, t.state, null);
}
function Jl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, ta(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Be(o) : (o = De(t) ? en : ge.current, i.context = $n(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && po.enqueueReplaceState(i, i.state, null), Qi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Oh(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zv = typeof WeakMap == "function" ? WeakMap : Map;
function xd(e, t, n) {
  n = ht(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qi || (qi = !0, cu = r), eu(e, t);
  }, n;
}
function _d(e, t, n) {
  n = ht(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      eu(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    eu(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ms(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zv();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = dg.bind(null, e, t, n), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $s(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ht(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var Jv = St.ReactCurrentOwner, Te = !1;
function Se(e, t, n, r) {
  t.child = e === null ? rd(t, null, n, r) : An(t, e.child, n, r);
}
function js(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Rn(t, i), r = la(e, t, n, r, o, i), n = ua(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yt(e, t, i)) : (K && n && Xu(t), t.flags |= 1, Se(e, t, r, i), t.child);
}
function As(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ma(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pd(e, t, o, r, i)) : (e = Oi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xr, n(l, r) && e.ref === t.ref) return yt(e, t, i);
  }
  return t.flags |= 1, e = At(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xr(o, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, yt(e, t, i);
  }
  return tu(e, t, n, r, i);
}
function Id(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(xn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(xn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, V(xn, Pe), Pe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(xn, Pe), Pe |= r;
  return Se(e, t, i, n), t.child;
}
function Nd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function tu(e, t, n, r, i) {
  var o = De(n) ? en : ge.current;
  return o = $n(t, o), Rn(t, i), n = la(e, t, n, r, o, i), r = ua(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yt(e, t, i)) : (K && r && Xu(t), t.flags |= 1, Se(e, t, n, i), t.child);
}
function zs(e, t, n, r, i) {
  if (De(n)) {
    var o = !0;
    Ui(t);
  } else o = !1;
  if (Rn(t, i), t.stateNode === null) Ci(e, t), Dd(t, n, r), Jl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var a = l.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Be(s) : (s = De(n) ? en : ge.current, s = $n(t, s));
    var f = n.getDerivedStateFromProps, p = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || a !== s) && Rs(t, l, r, s), Tt = !1;
    var v = t.memoizedState;
    l.state = v, Qi(t, r, l, i), a = t.memoizedState, u !== r || v !== a || Oe.current || Tt ? (typeof f == "function" && (Zl(t, n, f, r), a = t.memoizedState), (u = Tt || Ns(t, n, u, r, v, a, s)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = s, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, od(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Xe(t.type, u), l.props = s, p = t.pendingProps, v = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = De(n) ? en : ge.current, a = $n(t, a));
    var g = n.getDerivedStateFromProps;
    (f = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== p || v !== a) && Rs(t, l, r, a), Tt = !1, v = t.memoizedState, l.state = v, Qi(t, r, l, i);
    var m = t.memoizedState;
    u !== p || v !== m || Oe.current || Tt ? (typeof g == "function" && (Zl(t, n, g, r), m = t.memoizedState), (s = Tt || Ns(t, n, s, r, v, m, a) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = a, r = s) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return nu(e, t, n, r, o, i);
}
function nu(e, t, n, r, i, o) {
  Nd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ks(t, n, !1), yt(e, t, o);
  r = t.stateNode, Jv.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = An(t, e.child, null, o), t.child = An(t, null, u, o)) : Se(e, t, u, o), t.memoizedState = r.state, i && ks(t, n, !0), t.child;
}
function Rd(e) {
  var t = e.stateNode;
  t.pendingContext ? Cs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cs(e, t.context, !1), na(e, t.containerInfo);
}
function bs(e, t, n, r, i) {
  return jn(), Yu(i), t.flags |= 256, Se(e, t, n, r), t.child;
}
var ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Md(e, t, n) {
  var r = t.pendingProps, i = G.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), V(G, i & 1), e === null)
    return Yl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = go(l, r, 0, null), e = Jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = iu(n), t.memoizedState = ru, e) : ca(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return eg(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = At(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = At(u, o) : (o = Jt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? iu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = ru, r;
  }
  return o = e.child, e = o.sibling, r = At(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ca(e, t) {
  return t = go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function oi(e, t, n, r) {
  return r !== null && Yu(r), An(t, e.child, null, n), e = ca(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function eg(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = al(Error(w(422))), oi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = go({ mode: "visible", children: r.children }, i, 0, null), o = Jt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && An(t, e.child, null, l), t.child.memoizedState = iu(l), t.memoizedState = ru, o);
  if (!(t.mode & 1)) return oi(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(w(419)), r = al(o, r, void 0), oi(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Te || u) {
    if (r = ue, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, mt(e, i), Ze(r, e, i, -1));
    }
    return ga(), r = al(Error(w(421))), oi(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ie = Mt(i.nextSibling), Ne = t, K = !0, Ye = null, e !== null && (be[Fe++] = dt, be[Fe++] = pt, be[Fe++] = tn, dt = e.id, pt = e.overflow, tn = t), t = ca(t, r.children), t.flags |= 4096, t);
}
function Fs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ql(e.return, t, n);
}
function sl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Ld(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
      else if (e.tag === 19) Fs(e, n, t);
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
  if (V(G, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Ki(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), sl(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Ki(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      sl(t, !0, n, null, o);
      break;
    case "together":
      sl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ci(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = At(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function tg(e, t, n) {
  switch (t.tag) {
    case 3:
      Rd(t), jn();
      break;
    case 5:
      ld(t);
      break;
    case 1:
      De(t.type) && Ui(t);
      break;
    case 4:
      na(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      V(Bi, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Md(e, t, n) : (V(G, G.current & 1), e = yt(e, t, n), e !== null ? e.sibling : null);
      V(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ld(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(G, G.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Id(e, t, n);
  }
  return yt(e, t, n);
}
var $d, ou, jd, Ad;
$d = function(e, t) {
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
ou = function() {
};
jd = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, qt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        i = xl(e, i), r = xl(e, r), o = [];
        break;
      case "select":
        i = q({}, i, { value: void 0 }), r = q({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Il(e, i), r = Il(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi);
    }
    Rl(n, r);
    var l;
    n = null;
    for (s in i) if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null) if (s === "style") {
      var u = i[s];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (wr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = i != null ? i[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null)) if (s === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && u[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (o || (o = []), o.push(
        s,
        n
      )), n = a;
      else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (wr.hasOwnProperty(s) ? (a != null && s === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ad = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!K) switch (e.tailMode) {
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
function ng(e, t, n) {
  var r = t.pendingProps;
  switch (Gu(t), t.tag) {
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
      return De(t.type) && Fi(), pe(t), null;
    case 3:
      return r = t.stateNode, zn(), W(Oe), W(ge), ia(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (pu(Ye), Ye = null))), ou(e, t), pe(t), null;
    case 5:
      ra(t);
      var i = qt(Rr.current);
      if (n = t.type, e !== null && t.stateNode != null) jd(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return pe(t), null;
        }
        if (e = qt(ot.current), ri(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[Ir] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ar.length; i++) B(ar[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ga(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              qa(r, o), B("invalid", r);
          }
          Rl(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var u = o[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ni(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ni(
              r.textContent,
              u,
              e
            ), i = ["children", "" + u]) : wr.hasOwnProperty(l) && u != null && l === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              Xr(r), Ya(r, o, !0);
              break;
            case "textarea":
              Xr(r), Za(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = bi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ff(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[rt] = t, e[Ir] = r, $d(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ml(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ar.length; i++) B(ar[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                Ga(e, r), i = xl(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                qa(e, r), i = Il(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Rl(n, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? hf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && df(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Er(e, a) : typeof a == "number" && Er(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (wr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Lu(e, o, a, l));
            }
            switch (n) {
              case "input":
                Xr(e), Ya(e, r, !1);
                break;
              case "textarea":
                Xr(e), Za(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? _n(e, !!r.multiple, o, !1) : r.defaultValue != null && _n(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = bi);
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
      if (e && t.stateNode != null) Ad(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = qt(Rr.current), qt(ot.current), ri(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Ne, e !== null)) switch (e.tag) {
            case 3:
              ni(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ni(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return pe(t), null;
    case 13:
      if (W(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Ie !== null && t.mode & 1 && !(t.flags & 128)) td(), jn(), t.flags |= 98560, o = !1;
        else if (o = ri(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(w(317));
            o[rt] = t;
          } else jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          pe(t), o = !1;
        } else Ye !== null && (pu(Ye), Ye = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? oe === 0 && (oe = 3) : ga())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
    case 4:
      return zn(), ou(e, t), e === null && _r(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Ju(t.type._context), pe(t), null;
    case 17:
      return De(t.type) && Fi(), pe(t), null;
    case 19:
      if (W(G), o = t.memoizedState, o === null) return pe(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) tr(o, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ki(e), l !== null) {
            for (t.flags |= 128, tr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(G, G.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ne() > Fn && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ki(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !K) return pe(t), null;
        } else 2 * ne() - o.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ne(), t.sibling = null, n = G.current, V(G, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
    case 22:
    case 23:
      return va(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function rg(e, t) {
  switch (Gu(t), t.tag) {
    case 1:
      return De(t.type) && Fi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zn(), W(Oe), W(ge), ia(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ra(t), null;
    case 13:
      if (W(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        jn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(G), null;
    case 4:
      return zn(), null;
    case 10:
      return Ju(t.type._context), null;
    case 22:
    case 23:
      return va(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var li = !1, ve = !1, ig = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Z(e, t, r);
  }
  else n.current = null;
}
function lu(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Us = !1;
function og(e, t) {
  if (Vl = ji, e = Hf(), Ku(e)) {
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
        var l = 0, u = -1, a = -1, s = 0, f = 0, p = e, v = null;
        t: for (; ; ) {
          for (var g; p !== n || i !== 0 && p.nodeType !== 3 || (u = l + i), p !== o || r !== 0 && p.nodeType !== 3 || (a = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (g = p.firstChild) !== null; )
            v = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++s === i && (u = l), v === o && ++f === r && (a = l), (g = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = g;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bl = { focusedElem: e, selectionRange: n }, ji = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var m = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (m !== null) {
            var y = m.memoizedProps, I = m.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), I);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(w(163));
      }
    } catch (S) {
      Z(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return m = Us, Us = !1, m;
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && lu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ho(e, t) {
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
function uu(e) {
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
function zd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, zd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Ir], delete t[Kl], delete t[Uv], delete t[Hv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bi));
  else if (r !== 4 && (e = e.child, e !== null)) for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), e = e.sibling;
}
function su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (su(e, t, n), e = e.sibling; e !== null; ) su(e, t, n), e = e.sibling;
}
var se = null, Ge = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Fd(e, t, n), n = n.sibling;
}
function Fd(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function") try {
    it.onCommitFiberUnmount(oo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ve || Dn(n, t);
    case 6:
      var r = se, i = Ge;
      se = null, Ct(e, t, n), se = r, Ge = i, se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? nl(e.parentNode, n) : e.nodeType === 1 && nl(e, n), Or(e)) : nl(se, n.stateNode));
      break;
    case 4:
      r = se, i = Ge, se = n.stateNode.containerInfo, Ge = !0, Ct(e, t, n), se = r, Ge = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && lu(n, t, l), i = i.next;
        } while (i !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!ve && (Dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Z(n, t, u);
      }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, Ct(e, t, n), ve = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function Vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ig()), t.forEach(function(r) {
      var i = hg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            se = u.stateNode, Ge = !1;
            break e;
          case 3:
            se = u.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            se = u.stateNode.containerInfo, Ge = !0;
            break e;
        }
        u = u.return;
      }
      if (se === null) throw Error(w(160));
      Fd(o, l, i), se = null, Ge = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (s) {
      Z(i, t, s);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ud(t, e), t = t.sibling;
}
function Ud(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), et(e), r & 4) {
        try {
          mr(3, e, e.return), ho(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          mr(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      Ke(t, e), et(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), et(e), r & 512 && n !== null && Dn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Er(i, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && sf(i, o), Ml(u, l);
          var s = Ml(u, o);
          for (l = 0; l < a.length; l += 2) {
            var f = a[l], p = a[l + 1];
            f === "style" ? hf(i, p) : f === "dangerouslySetInnerHTML" ? df(i, p) : f === "children" ? Er(i, p) : Lu(i, f, p, s);
          }
          switch (u) {
            case "input":
              _l(i, o);
              break;
            case "textarea":
              cf(i, o);
              break;
            case "select":
              var v = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? _n(i, !!o.multiple, g, !1) : v !== !!o.multiple && (o.defaultValue != null ? _n(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : _n(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Ir] = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ke(t, e), et(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Or(t.containerInfo);
      } catch (y) {
        Z(e, e.return, y);
      }
      break;
    case 4:
      Ke(t, e), et(e);
      break;
    case 13:
      Ke(t, e), et(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (pa = ne())), r & 4 && Vs(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (s = ve) || f, Ke(t, e), ve = s) : Ke(t, e), et(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1) for (x = e, f = e.child; f !== null; ) {
          for (p = x = f; x !== null; ) {
            switch (v = x, g = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mr(4, v, v.return);
                break;
              case 1:
                Dn(v, v.return);
                var m = v.stateNode;
                if (typeof m.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                  } catch (y) {
                    Z(r, n, y);
                  }
                }
                break;
              case 5:
                Dn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ws(p);
                  continue;
                }
            }
            g !== null ? (g.return = v, x = g) : Ws(p);
          }
          f = f.sibling;
        }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                i = p.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, a = p.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = pf("display", l));
              } catch (y) {
                Z(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (f === null) try {
              p.stateNode.nodeValue = s ? "" : p.memoizedProps;
            } catch (y) {
              Z(e, e.return, y);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), p = p.return;
          }
          f === p && (f = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ke(t, e), et(e), r & 4 && Vs(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Er(i, ""), r.flags &= -33);
          var o = Hs(e);
          su(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Hs(e);
          au(e, u, l);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lg(e, t, n) {
  x = e, Hd(e);
}
function Hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var i = x, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || li;
      if (!l) {
        var u = i.alternate, a = u !== null && u.memoizedState !== null || ve;
        u = li;
        var s = ve;
        if (li = l, (ve = a) && !s) for (x = i; x !== null; ) l = x, a = l.child, l.tag === 22 && l.memoizedState !== null ? Qs(i) : a !== null ? (a.return = l, x = a) : Qs(i);
        for (; o !== null; ) x = o, Hd(o), o = o.sibling;
        x = i, li = u, ve = s;
      }
      Bs(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, x = o) : Bs(e);
  }
}
function Bs(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ve || ho(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ve) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && _s(t, o, r);
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
              _s(t, l, n);
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
                  var p = f.dehydrated;
                  p !== null && Or(p);
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
            throw Error(w(163));
        }
        ve || t.flags & 512 && uu(t);
      } catch (v) {
        Z(t, t.return, v);
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
function Ws(e) {
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
function Qs(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ho(4, t);
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
          var o = t.return;
          try {
            uu(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            uu(t);
          } catch (a) {
            Z(t, l, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
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
var ug = Math.ceil, Yi = St.ReactCurrentDispatcher, fa = St.ReactCurrentOwner, Ve = St.ReactCurrentBatchConfig, b = 0, ue = null, re = null, ce = 0, Pe = 0, xn = Ut(0), oe = 0, jr = null, rn = 0, vo = 0, da = 0, yr = null, ke = null, pa = 0, Fn = 1 / 0, ct = null, qi = !1, cu = null, $t = null, ui = !1, Pt = null, Zi = 0, Sr = 0, fu = null, ki = -1, Ti = 0;
function we() {
  return b & 6 ? ne() : ki !== -1 ? ki : ki = ne();
}
function jt(e) {
  return e.mode & 1 ? b & 2 && ce !== 0 ? ce & -ce : Bv.transition !== null ? (Ti === 0 && (Ti = Df()), Ti) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mf(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < Sr) throw Sr = 0, fu = null, Error(w(185));
  zr(e, n, r), (!(b & 2) || e !== ue) && (e === ue && (!(b & 2) && (vo |= n), oe === 4 && xt(e, ce)), xe(e, r), n === 1 && b === 0 && !(t.mode & 1) && (Fn = ne() + 500, co && Ht()));
}
function xe(e, t) {
  var n = e.callbackNode;
  Bh(e, t);
  var r = $i(e, e === ue ? ce : 0);
  if (r === 0) n !== null && ts(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ts(n), t === 1) e.tag === 0 ? Vv(Ks.bind(null, e)) : Zf(Ks.bind(null, e)), bv(function() {
      !(b & 6) && Ht();
    }), n = null;
    else {
      switch (xf(r)) {
        case 1:
          n = bu;
          break;
        case 4:
          n = Tf;
          break;
        case 16:
          n = Li;
          break;
        case 536870912:
          n = Of;
          break;
        default:
          n = Li;
      }
      n = Yd(n, Vd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vd(e, t) {
  if (ki = -1, Ti = 0, b & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (Mn() && e.callbackNode !== n) return null;
  var r = $i(e, e === ue ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ji(e, r);
  else {
    t = r;
    var i = b;
    b |= 2;
    var o = Wd();
    (ue !== e || ce !== t) && (ct = null, Fn = ne() + 500, Zt(e, t));
    do
      try {
        cg();
        break;
      } catch (u) {
        Bd(e, u);
      }
    while (!0);
    Zu(), Yi.current = o, b = i, re !== null ? t = 0 : (ue = null, ce = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = zl(e), i !== 0 && (r = i, t = du(e, i))), t === 1) throw n = jr, Zt(e, 0), xt(e, r), xe(e, ne()), n;
    if (t === 6) xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !ag(i) && (t = Ji(e, r), t === 2 && (o = zl(e), o !== 0 && (r = o, t = du(e, o))), t === 1)) throw n = jr, Zt(e, 0), xt(e, r), xe(e, ne()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Qt(e, ke, ct);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = pa + 500 - ne(), 10 < t)) {
            if ($i(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Ql(Qt.bind(null, e, ke, ct), t);
            break;
          }
          Qt(e, ke, ct);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - qe(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ug(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ql(Qt.bind(null, e, ke, ct), r);
            break;
          }
          Qt(e, ke, ct);
          break;
        case 5:
          Qt(e, ke, ct);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return xe(e, ne()), e.callbackNode === n ? Vd.bind(null, e) : null;
}
function du(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Ji(e, t), e !== 2 && (t = ke, ke = n, t !== null && pu(t)), e;
}
function pu(e) {
  ke === null ? ke = e : ke.push.apply(ke, e);
}
function ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Je(o(), i)) return !1;
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
  for (t &= ~da, t &= ~vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ks(e) {
  if (b & 6) throw Error(w(327));
  Mn();
  var t = $i(e, 0);
  if (!(t & 1)) return xe(e, ne()), null;
  var n = Ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zl(e);
    r !== 0 && (t = r, n = du(e, r));
  }
  if (n === 1) throw n = jr, Zt(e, 0), xt(e, t), xe(e, ne()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qt(e, ke, ct), xe(e, ne()), null;
}
function ha(e, t) {
  var n = b;
  b |= 1;
  try {
    return e(t);
  } finally {
    b = n, b === 0 && (Fn = ne() + 500, co && Ht());
  }
}
function on(e) {
  Pt !== null && Pt.tag === 0 && !(b & 6) && Mn();
  var t = b;
  b |= 1;
  var n = Ve.transition, r = F;
  try {
    if (Ve.transition = null, F = 1, e) return e();
  } finally {
    F = r, Ve.transition = n, b = t, !(b & 6) && Ht();
  }
}
function va() {
  Pe = xn.current, W(xn);
}
function Zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zv(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (Gu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fi();
        break;
      case 3:
        zn(), W(Oe), W(ge), ia();
        break;
      case 5:
        ra(r);
        break;
      case 4:
        zn();
        break;
      case 13:
        W(G);
        break;
      case 19:
        W(G);
        break;
      case 10:
        Ju(r.type._context);
        break;
      case 22:
      case 23:
        va();
    }
    n = n.return;
  }
  if (ue = e, re = e = At(e.current, null), ce = Pe = t, oe = 0, jr = null, da = vo = rn = 0, ke = yr = null, Yt !== null) {
    for (t = 0; t < Yt.length; t++) if (n = Yt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    Yt = null;
  }
  return e;
}
function Bd(e, t) {
  do {
    var n = re;
    try {
      if (Zu(), wi.current = Gi, Xi) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Xi = !1;
      }
      if (nn = 0, le = ie = Y = null, gr = !1, Mr = 0, fa.current = null, n === null || n.return === null) {
        oe = 1, jr = t, re = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, a = t;
        if (t = ce, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, f = u, p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = f.alternate;
            v ? (f.updateQueue = v.updateQueue, f.memoizedState = v.memoizedState, f.lanes = v.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var g = Ls(l);
          if (g !== null) {
            g.flags &= -257, $s(g, l, u, o, t), g.mode & 1 && Ms(o, s, t), t = g, a = s;
            var m = t.updateQueue;
            if (m === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), t.updateQueue = y;
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ms(o, s, t), ga();
              break e;
            }
            a = Error(w(426));
          }
        } else if (K && u.mode & 1) {
          var I = Ls(l);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), $s(I, l, u, o, t), Yu(bn(a, u));
            break e;
          }
        }
        o = a = bn(a, u), oe !== 4 && (oe = 2), yr === null ? yr = [o] : yr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = xd(o, a, t);
              xs(o, d);
              break e;
            case 1:
              u = a;
              var c = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && ($t === null || !$t.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = _d(o, u, t);
                xs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Kd(n);
    } catch (C) {
      t = C, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wd() {
  var e = Yi.current;
  return Yi.current = Gi, e === null ? Gi : e;
}
function ga() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ue === null || !(rn & 268435455) && !(vo & 268435455) || xt(ue, ce);
}
function Ji(e, t) {
  var n = b;
  b |= 2;
  var r = Wd();
  (ue !== e || ce !== t) && (ct = null, Zt(e, t));
  do
    try {
      sg();
      break;
    } catch (i) {
      Bd(e, i);
    }
  while (!0);
  if (Zu(), b = n, Yi.current = r, re !== null) throw Error(w(261));
  return ue = null, ce = 0, oe;
}
function sg() {
  for (; re !== null; ) Qd(re);
}
function cg() {
  for (; re !== null && !$h(); ) Qd(re);
}
function Qd(e) {
  var t = Gd(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? Kd(e) : re = t, fa.current = null;
}
function Kd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rg(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, re = null;
        return;
      }
    } else if (n = ng(n, t, Pe), n !== null) {
      re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Qt(e, t, n) {
  var r = F, i = Ve.transition;
  try {
    Ve.transition = null, F = 1, fg(e, t, n, r);
  } finally {
    Ve.transition = i, F = r;
  }
  return null;
}
function fg(e, t, n, r) {
  do
    Mn();
  while (Pt !== null);
  if (b & 6) throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Wh(e, o), e === ue && (re = ue = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ui || (ui = !0, Yd(Li, function() {
    return Mn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ve.transition, Ve.transition = null;
    var l = F;
    F = 1;
    var u = b;
    b |= 4, fa.current = null, og(e, n), Ud(n, e), Nv(Bl), ji = !!Vl, Bl = Vl = null, e.current = n, lg(n), jh(), b = u, F = l, Ve.transition = o;
  } else e.current = n;
  if (ui && (ui = !1, Pt = e, Zi = i), o = e.pendingLanes, o === 0 && ($t = null), bh(n.stateNode), xe(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (qi) throw qi = !1, e = cu, cu = null, e;
  return Zi & 1 && e.tag !== 0 && Mn(), o = e.pendingLanes, o & 1 ? e === fu ? Sr++ : (Sr = 0, fu = e) : Sr = 0, Ht(), null;
}
function Mn() {
  if (Pt !== null) {
    var e = xf(Zi), t = Ve.transition, n = F;
    try {
      if (Ve.transition = null, F = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Zi = 0, b & 6) throw Error(w(331));
        var i = b;
        for (b |= 4, x = e.current; x !== null; ) {
          var o = x, l = o.child;
          if (x.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (x = s; x !== null; ) {
                  var f = x;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) p.return = f, x = p;
                  else for (; x !== null; ) {
                    f = x;
                    var v = f.sibling, g = f.return;
                    if (zd(f), f === s) {
                      x = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = g, x = v;
                      break;
                    }
                    x = g;
                  }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var I = y.sibling;
                    y.sibling = null, y = I;
                  } while (y !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, x = l;
          else e: for (; x !== null; ) {
            if (o = x, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                mr(9, o, o.return);
            }
            var d = o.sibling;
            if (d !== null) {
              d.return = o.return, x = d;
              break e;
            }
            x = o.return;
          }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          l = x;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, x = h;
          else e: for (l = c; x !== null; ) {
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ho(9, u);
              }
            } catch (C) {
              Z(u, u.return, C);
            }
            if (u === l) {
              x = null;
              break e;
            }
            var S = u.sibling;
            if (S !== null) {
              S.return = u.return, x = S;
              break e;
            }
            x = u.return;
          }
        }
        if (b = i, Ht(), it && typeof it.onPostCommitFiberRoot == "function") try {
          it.onPostCommitFiberRoot(oo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = n, Ve.transition = t;
    }
  }
  return !1;
}
function Xs(e, t, n) {
  t = bn(n, t), t = xd(e, t, 1), e = Lt(e, t, 1), t = we(), e !== null && (zr(e, 1, t), xe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Xs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
        e = bn(n, e), e = _d(t, e, 1), t = Lt(t, e, 1), e = we(), t !== null && (zr(t, 1, e), xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (ce & n) === n && (oe === 4 || oe === 3 && (ce & 130023424) === ce && 500 > ne() - pa ? Zt(e, 0) : da |= n), xe(e, t);
}
function Xd(e, t) {
  t === 0 && (e.mode & 1 ? (t = qr, qr <<= 1, !(qr & 130023424) && (qr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (zr(e, t, n), xe(e, n));
}
function pg(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Xd(e, n);
}
function hg(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), Xd(e, n);
}
var Gd;
Gd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Oe.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, tg(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, K && t.flags & 1048576 && Jf(t, Vi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ci(e, t), e = t.pendingProps;
      var i = $n(t, ge.current);
      Rn(t, n), i = la(null, t, r, e, i, n);
      var o = ua();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, Ui(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ta(t), i.updater = po, t.stateNode = i, i._reactInternals = t, Jl(t, r, e, n), t = nu(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Xu(t), Se(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ci(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = gg(r), e = Xe(r, e), i) {
          case 0:
            t = tu(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = js(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), tu(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), zs(e, t, r, i, n);
    case 3:
      e: {
        if (Rd(t), e === null) throw Error(w(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, od(e, t), Qi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = bn(Error(w(423)), t), t = bs(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = bn(Error(w(424)), t), t = bs(e, t, r, n, i);
          break e;
        } else for (Ie = Mt(t.stateNode.containerInfo.firstChild), Ne = t, K = !0, Ye = null, n = rd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (jn(), r === i) {
            t = yt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ld(t), e === null && Yl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Wl(r, i) ? l = null : o !== null && Wl(r, o) && (t.flags |= 32), Nd(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return Md(e, t, n);
    case 4:
      return na(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), js(e, t, r, i, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, V(Bi, r._currentValue), r._currentValue = l, o !== null) if (Je(o.value, l)) {
          if (o.children === i.children && !Oe.current) {
            t = yt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            l = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = ht(-1, n & -n), a.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var f = s.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), s.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ql(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(w(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ql(l, n, t), l = o.sibling;
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
        Se(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Rn(t, n), i = Be(i), r = r(i), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), As(e, t, r, i, n);
    case 15:
      return Pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Ci(e, t), t.tag = 1, De(r) ? (e = !0, Ui(t)) : e = !1, Rn(t, n), Dd(t, r, i), Jl(t, r, i, n), nu(null, t, r, !0, e, n);
    case 19:
      return Ld(e, t, n);
    case 22:
      return Id(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Yd(e, t) {
  return kf(e, t);
}
function vg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new vg(e, t, n, r);
}
function ma(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gg(e) {
  if (typeof e == "function") return ma(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ju) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Oi(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") ma(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case mn:
      return Jt(n.children, i, o, t);
    case $u:
      l = 8, i |= 8;
      break;
    case kl:
      return e = He(12, n, t, i | 2), e.elementType = kl, e.lanes = o, e;
    case Tl:
      return e = He(13, n, t, i), e.elementType = Tl, e.lanes = o, e;
    case Ol:
      return e = He(19, n, t, i), e.elementType = Ol, e.lanes = o, e;
    case lf:
      return go(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case rf:
          l = 10;
          break e;
        case of:
          l = 9;
          break e;
        case ju:
          l = 11;
          break e;
        case Au:
          l = 14;
          break e;
        case kt:
          l = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = He(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Jt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function go(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = lf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function cl(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function fl(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mg(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wo(0), this.expirationTimes = Wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ya(e, t, n, r, i, o, l, u, a) {
  return e = new mg(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = He(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ta(o), e;
}
function yg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qd(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return qf(e, n, t);
  }
  return t;
}
function Zd(e, t, n, r, i, o, l, u, a) {
  return e = ya(n, r, !0, e, i, o, l, u, a), e.context = qd(null), n = e.current, r = we(), i = jt(n), o = ht(r, i), o.callback = t ?? null, Lt(n, o, i), e.current.lanes = i, zr(e, i, r), xe(e, r), e;
}
function mo(e, t, n, r) {
  var i = t.current, o = we(), l = jt(i);
  return n = qd(n), t.context === null ? t.context = n : t.pendingContext = n, t = ht(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(i, t, l), e !== null && (Ze(e, i, l, o), Si(e, i, l)), l;
}
function eo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sa(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Sg() {
  return null;
}
var Jd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wa(e) {
  this._internalRoot = e;
}
yo.prototype.render = wa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  mo(e, t, null, null);
};
yo.prototype.unmount = wa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      mo(null, e, null, null);
    }), t[gt] = null;
  }
};
function yo(e) {
  this._internalRoot = e;
}
yo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = If();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++) ;
    Dt.splice(n, 0, e), n === 0 && Rf(e);
  }
};
function Ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function So(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ys() {
}
function wg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = eo(l);
        o.call(s);
      };
    }
    var l = Zd(t, r, e, 0, null, !1, !1, "", Ys);
    return e._reactRootContainer = l, e[gt] = l.current, _r(e.nodeType === 8 ? e.parentNode : e), on(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = eo(a);
      u.call(s);
    };
  }
  var a = ya(e, 0, !1, null, null, !1, !1, "", Ys);
  return e._reactRootContainer = a, e[gt] = a.current, _r(e.nodeType === 8 ? e.parentNode : e), on(function() {
    mo(t, a, n, r);
  }), a;
}
function wo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var a = eo(l);
        u.call(a);
      };
    }
    mo(t, l, e, i);
  } else l = wg(n, t, e, i, r);
  return eo(l);
}
_f = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (Fu(t, n | 1), xe(t, ne()), !(b & 6) && (Fn = ne() + 500, Ht()));
      }
      break;
    case 13:
      on(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var i = we();
          Ze(r, e, 1, i);
        }
      }), Sa(e, 1);
  }
};
Uu = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    Sa(e, 134217728);
  }
};
Pf = function(e) {
  if (e.tag === 13) {
    var t = jt(e), n = mt(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    Sa(e, t);
  }
};
If = function() {
  return F;
};
Nf = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
$l = function(e, t, n) {
  switch (t) {
    case "input":
      if (_l(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = so(r);
            if (!i) throw Error(w(90));
            af(r), _l(r, i);
          }
        }
      }
      break;
    case "textarea":
      cf(e, n);
      break;
    case "select":
      t = n.value, t != null && _n(e, !!n.multiple, t, !1);
  }
};
mf = ha;
yf = on;
var Eg = { usingClientEntryPoint: !1, Events: [Fr, En, so, vf, gf, ha] }, nr = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cg = { bundleType: nr.bundleType, version: nr.version, rendererPackageName: nr.rendererPackageName, rendererConfig: nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ef(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: nr.findFiberByHostInstance || Sg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber) try {
    oo = ai.inject(Cg), it = ai;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eg;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ea(t)) throw Error(w(200));
  return yg(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!Ea(e)) throw Error(w(299));
  var n = !1, r = "", i = Jd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ya(e, 1, !1, null, null, n, !1, r, i), e[gt] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new wa(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Ef(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return on(e);
};
Le.hydrate = function(e, t, n) {
  if (!So(t)) throw Error(w(200));
  return wo(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!Ea(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Jd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Zd(t, null, e, 1, n ?? null, i, !1, o, l), e[gt] = t.current, _r(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new yo(t);
};
Le.render = function(e, t, n) {
  if (!So(t)) throw Error(w(200));
  return wo(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!So(e)) throw Error(w(40));
  return e._reactRootContainer ? (on(function() {
    wo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[gt] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = ha;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!So(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return wo(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function ep() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep);
    } catch (e) {
      console.error(e);
    }
}
ep(), Jc.exports = Le;
var tp = Jc.exports;
const si = /* @__PURE__ */ Un(tp);
var np, qs = tp;
np = qs.createRoot, qs.hydrateRoot;
var rp = E.createContext({
  dragDropManager: void 0
}), Ue;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(Ue || (Ue = {}));
function M(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var l = 0;
      o = new Error(t.replace(/%s/g, function() {
        return r[l++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var Ca = "dnd-core/INIT_COORDS", Eo = "dnd-core/BEGIN_DRAG", ka = "dnd-core/PUBLISH_DRAG_SOURCE", Co = "dnd-core/HOVER", ko = "dnd-core/DROP", To = "dnd-core/END_DRAG";
function Zs(e, t) {
  return {
    type: Ca,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Di(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Di = function(n) {
    return typeof n;
  } : Di = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Di(e);
}
function kg(e, t, n) {
  return t.split(".").reduce(function(r, i) {
    return r && r[i] ? r[i] : n || null;
  }, e);
}
function Tg(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ip(e) {
  return Di(e) === "object";
}
function Og(e, t) {
  var n = /* @__PURE__ */ new Map(), r = function(l) {
    n.set(l, n.has(l) ? n.get(l) + 1 : 1);
  };
  e.forEach(r), t.forEach(r);
  var i = [];
  return n.forEach(function(o, l) {
    o === 1 && i.push(l);
  }), i;
}
function Dg(e, t) {
  return e.filter(function(n) {
    return t.indexOf(n) > -1;
  });
}
var xg = {
  type: Ca,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function _g(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = r.publishSource, o = i === void 0 ? !0 : i, l = r.clientOffset, u = r.getSourceClientOffset, a = e.getMonitor(), s = e.getRegistry();
    e.dispatch(Zs(l)), Pg(n, a, s);
    var f = Rg(n, a);
    if (f === null) {
      e.dispatch(xg);
      return;
    }
    var p = null;
    if (l) {
      if (!u)
        throw new Error("getSourceClientOffset must be defined");
      Ig(u), p = u(f);
    }
    e.dispatch(Zs(l, p));
    var v = s.getSource(f), g = v.beginDrag(a, f);
    if (g != null) {
      Ng(g), s.pinSource(f);
      var m = s.getSourceType(f);
      return {
        type: Eo,
        payload: {
          itemType: m,
          item: g,
          sourceId: f,
          clientOffset: l || null,
          sourceClientOffset: p || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function Pg(e, t, n) {
  M(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
    M(n.getSource(r), "Expected sourceIds to be registered.");
  });
}
function Ig(e) {
  M(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ng(e) {
  M(ip(e), "Item must be an object.");
}
function Rg(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function Mg(e) {
  return function() {
    var n = e.getMonitor();
    if (n.isDragging())
      return {
        type: ka
      };
  };
}
function hu(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e === t;
}
function Lg(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.clientOffset;
    $g(n);
    var o = n.slice(0), l = e.getMonitor(), u = e.getRegistry();
    jg(o, l, u);
    var a = l.getItemType();
    return Ag(o, u, a), zg(o, l, u), {
      type: Co,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function $g(e) {
  M(Array.isArray(e), "Expected targetIds to be an array.");
}
function jg(e, t, n) {
  M(t.isDragging(), "Cannot call hover while not dragging."), M(!t.didDrop(), "Cannot call hover after drop.");
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    M(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array.");
    var o = n.getTarget(i);
    M(o, "Expected targetIds to be registered.");
  }
}
function Ag(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--) {
    var i = e[r], o = t.getTargetType(i);
    hu(o, n) || e.splice(r, 1);
  }
}
function zg(e, t, n) {
  e.forEach(function(r) {
    var i = n.getTarget(r);
    i.hover(t, r);
  });
}
function Js(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Js(Object(n), !0).forEach(function(r) {
      bg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Js(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fg(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.getMonitor(), i = e.getRegistry();
    Ug(r);
    var o = Bg(r);
    o.forEach(function(l, u) {
      var a = Hg(l, u, i, r), s = {
        type: ko,
        payload: {
          dropResult: ec(ec({}, n), a)
        }
      };
      e.dispatch(s);
    });
  };
}
function Ug(e) {
  M(e.isDragging(), "Cannot call drop while not dragging."), M(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Hg(e, t, n, r) {
  var i = n.getTarget(e), o = i ? i.drop(r, e) : void 0;
  return Vg(o), typeof o > "u" && (o = t === 0 ? {} : r.getDropResult()), o;
}
function Vg(e) {
  M(typeof e > "u" || ip(e), "Drop result must either be an object or undefined.");
}
function Bg(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Wg(e) {
  return function() {
    var n = e.getMonitor(), r = e.getRegistry();
    Qg(n);
    var i = n.getSourceId();
    if (i != null) {
      var o = r.getSource(i, !0);
      o.endDrag(n, i), r.unpinSource();
    }
    return {
      type: To
    };
  };
}
function Qg(e) {
  M(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Kg(e) {
  return {
    beginDrag: _g(e),
    publishDragSource: Mg(e),
    hover: Lg(e),
    drop: Fg(e),
    endDrag: Wg(e)
  };
}
function Xg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yg(e, t, n) {
  return t && Gg(e.prototype, t), e;
}
function rr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qg = /* @__PURE__ */ function() {
  function e(t, n) {
    var r = this;
    Xg(this, e), rr(this, "store", void 0), rr(this, "monitor", void 0), rr(this, "backend", void 0), rr(this, "isSetUp", !1), rr(this, "handleRefCountChange", function() {
      var i = r.store.getState().refCount > 0;
      r.backend && (i && !r.isSetUp ? (r.backend.setup(), r.isSetUp = !0) : !i && r.isSetUp && (r.backend.teardown(), r.isSetUp = !1));
    }), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
  return Yg(e, [{
    key: "receiveBackend",
    value: function(n) {
      this.backend = n;
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
      var n = this, r = this.store.dispatch;
      function i(l) {
        return function() {
          for (var u = arguments.length, a = new Array(u), s = 0; s < u; s++)
            a[s] = arguments[s];
          var f = l.apply(n, a);
          typeof f < "u" && r(f);
        };
      }
      var o = Kg(this);
      return Object.keys(o).reduce(function(l, u) {
        var a = o[u];
        return l[u] = i(a), l;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(n) {
      this.store.dispatch(n);
    }
  }]), e;
}();
function Ae(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var tc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), nc = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, rc = {
  INIT: "@@redux/INIT" + nc(),
  REPLACE: "@@redux/REPLACE" + nc()
};
function Zg(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function op(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Ae(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Ae(1));
    return n(op)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Ae(2));
  var i = e, o = t, l = [], u = l, a = !1;
  function s() {
    u === l && (u = l.slice());
  }
  function f() {
    if (a)
      throw new Error(Ae(3));
    return o;
  }
  function p(y) {
    if (typeof y != "function")
      throw new Error(Ae(4));
    if (a)
      throw new Error(Ae(5));
    var I = !0;
    return s(), u.push(y), function() {
      if (I) {
        if (a)
          throw new Error(Ae(6));
        I = !1, s();
        var c = u.indexOf(y);
        u.splice(c, 1), l = null;
      }
    };
  }
  function v(y) {
    if (!Zg(y))
      throw new Error(Ae(7));
    if (typeof y.type > "u")
      throw new Error(Ae(8));
    if (a)
      throw new Error(Ae(9));
    try {
      a = !0, o = i(o, y);
    } finally {
      a = !1;
    }
    for (var I = l = u, d = 0; d < I.length; d++) {
      var c = I[d];
      c();
    }
    return y;
  }
  function g(y) {
    if (typeof y != "function")
      throw new Error(Ae(10));
    i = y, v({
      type: rc.REPLACE
    });
  }
  function m() {
    var y, I = p;
    return y = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(c) {
        if (typeof c != "object" || c === null)
          throw new Error(Ae(11));
        function h() {
          c.next && c.next(f());
        }
        h();
        var S = I(h);
        return {
          unsubscribe: S
        };
      }
    }, y[tc] = function() {
      return this;
    }, y;
  }
  return v({
    type: rc.INIT
  }), r = {
    dispatch: v,
    subscribe: p,
    getState: f,
    replaceReducer: g
  }, r[tc] = m, r;
}
var Jg = function(t, n) {
  return t === n;
};
function em(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function tm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jg;
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; ++r)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function ic(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ic(Object(n), !0).forEach(function(r) {
      nm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ic(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lc = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function rm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lc, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Ca:
    case Eo:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Co:
      return em(e.clientOffset, n.clientOffset) ? e : oc(oc({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case To:
    case ko:
      return lc;
    default:
      return e;
  }
}
var Ta = "dnd-core/ADD_SOURCE", Oa = "dnd-core/ADD_TARGET", Da = "dnd-core/REMOVE_SOURCE", Oo = "dnd-core/REMOVE_TARGET";
function im(e) {
  return {
    type: Ta,
    payload: {
      sourceId: e
    }
  };
}
function om(e) {
  return {
    type: Oa,
    payload: {
      targetId: e
    }
  };
}
function lm(e) {
  return {
    type: Da,
    payload: {
      sourceId: e
    }
  };
}
function um(e) {
  return {
    type: Oo,
    payload: {
      targetId: e
    }
  };
}
function uc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uc(Object(n), !0).forEach(function(r) {
      am(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function am(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sm = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function cm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sm, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Eo:
      return ze(ze({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ka:
      return ze(ze({}, e), {}, {
        isSourcePublic: !0
      });
    case Co:
      return ze(ze({}, e), {}, {
        targetIds: n.targetIds
      });
    case Oo:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : ze(ze({}, e), {}, {
        targetIds: Tg(e.targetIds, n.targetId)
      });
    case ko:
      return ze(ze({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case To:
      return ze(ze({}, e), {}, {
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
function fm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ta:
    case Oa:
      return e + 1;
    case Da:
    case Oo:
      return e - 1;
    default:
      return e;
  }
}
var to = [], xa = [];
to.__IS_NONE__ = !0;
xa.__IS_ALL__ = !0;
function dm(e, t) {
  if (e === to)
    return !1;
  if (e === xa || typeof t > "u")
    return !0;
  var n = Dg(t, e);
  return n.length > 0;
}
function pm() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Co:
      break;
    case Ta:
    case Oa:
    case Oo:
    case Da:
      return to;
    case Eo:
    case ka:
    case To:
    case ko:
    default:
      return xa;
  }
  var t = e.payload, n = t.targetIds, r = n === void 0 ? [] : n, i = t.prevTargetIds, o = i === void 0 ? [] : i, l = Og(r, o), u = l.length > 0 || !tm(r, o);
  if (!u)
    return to;
  var a = o[o.length - 1], s = r[r.length - 1];
  return a !== s && (a && l.push(a), s && l.push(s)), l;
}
function hm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function ac(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ac(Object(n), !0).forEach(function(r) {
      vm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ac(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: pm(e.dirtyHandlerIds, {
      type: t.type,
      payload: sc(sc({}, t.payload), {}, {
        prevTargetIds: kg(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: rm(e.dragOffset, t),
    refCount: fm(e.refCount, t),
    dragOperation: cm(e.dragOperation, t),
    stateId: hm(e.stateId)
  };
}
function mm(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function lp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ym(e) {
  var t = e.clientOffset, n = e.initialClientOffset, r = e.initialSourceClientOffset;
  return !t || !n || !r ? null : lp(mm(t, r), n);
}
function Sm(e) {
  var t = e.clientOffset, n = e.initialClientOffset;
  return !t || !n ? null : lp(t, n);
}
function wm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Em(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cm(e, t, n) {
  return t && Em(e.prototype, t), e;
}
function cc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var km = /* @__PURE__ */ function() {
  function e(t, n) {
    wm(this, e), cc(this, "store", void 0), cc(this, "registry", void 0), this.store = t, this.registry = n;
  }
  return Cm(e, [{
    key: "subscribeToStateChange",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      M(typeof n == "function", "listener must be a function."), M(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var l = this.store.getState().stateId, u = function() {
        var s = r.store.getState(), f = s.stateId;
        try {
          var p = f === l || f === l + 1 && !dm(s.dirtyHandlerIds, o);
          p || n();
        } finally {
          l = f;
        }
      };
      return this.store.subscribe(u);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var r = this;
      M(typeof n == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var u = r.store.getState().dragOffset;
        u !== i && (i = u, n());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      if (!n)
        return !1;
      var r = this.registry.getSource(n);
      return M(r, "Expected to find a valid source. sourceId=".concat(n)), this.isDragging() ? !1 : r.canDrag(this, n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      if (!n)
        return !1;
      var r = this.registry.getTarget(n);
      if (M(r, "Expected to find a valid target. targetId=".concat(n)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(n), o = this.getItemType();
      return hu(i, o) && r.canDrop(this, n);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      if (!n)
        return !1;
      var r = this.registry.getSource(n, !0);
      if (M(r, "Expected to find a valid source. sourceId=".concat(n)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var i = this.registry.getSourceType(n), o = this.getItemType();
      return i !== o ? !1 : r.isDragging(this, n);
    }
  }, {
    key: "isOverTarget",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!n)
        return !1;
      var i = r.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(n), l = this.getItemType();
      if (l && !hu(o, l))
        return !1;
      var u = this.getTargetIds();
      if (!u.length)
        return !1;
      var a = u.indexOf(n);
      return i ? a === u.length - 1 : a > -1;
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
      return ym(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Sm(this.store.getState().dragOffset);
    }
  }]), e;
}(), Tm = 0;
function Om() {
  return Tm++;
}
function xi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xi = function(n) {
    return typeof n;
  } : xi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xi(e);
}
function Dm(e) {
  M(typeof e.canDrag == "function", "Expected canDrag to be a function."), M(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), M(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function xm(e) {
  M(typeof e.canDrop == "function", "Expected canDrop to be a function."), M(typeof e.hover == "function", "Expected hover to be a function."), M(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function vu(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return vu(n, !1);
    });
    return;
  }
  M(typeof e == "string" || xi(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const fc = typeof global < "u" ? global : self, up = fc.MutationObserver || fc.WebKitMutationObserver;
function ap(e) {
  return function() {
    const n = setTimeout(i, 0), r = setInterval(i, 50);
    function i() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function _m(e) {
  let t = 1;
  const n = new up(e), r = document.createTextNode("");
  return n.observe(r, {
    characterData: !0
  }), function() {
    t = -t, r.data = t;
  };
}
const Pm = typeof up == "function" ? (
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
  _m
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
  ap
);
class Im {
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
    const { queue: n, requestFlush: r } = this;
    n.length || (r(), this.flushing = !0), n[n.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const n = this.index;
        if (this.index++, t[n].call(), this.index > this.capacity) {
          for (let r = 0, i = t.length - this.index; r < i; r++)
            t[r] = t[r + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = Pm(this.flush), this.requestErrorThrow = ap(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Nm {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, n) {
    this.onError = t, this.release = n, this.task = null;
  }
}
class Rm {
  create(t) {
    const n = this.freeTasks, r = n.length ? n.pop() : new Nm(
      this.onError,
      (i) => n[n.length] = i
    );
    return r.task = t, r;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const sp = new Im(), Mm = new Rm(sp.registerPendingError);
function Lm(e) {
  sp.enqueueTask(Mm.create(e));
}
function $m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Am(e, t, n) {
  return t && jm(e.prototype, t), e;
}
function pn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zm(e, t) {
  return Hm(e) || Um(e, t) || Fm(e, t) || bm();
}
function bm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fm(e, t) {
  if (e) {
    if (typeof e == "string") return dc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc(e, t);
  }
}
function dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Um(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function Hm(e) {
  if (Array.isArray(e)) return e;
}
function Vm(e) {
  var t = Om().toString();
  switch (e) {
    case Ue.SOURCE:
      return "S".concat(t);
    case Ue.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function pc(e) {
  switch (e[0]) {
    case "S":
      return Ue.SOURCE;
    case "T":
      return Ue.TARGET;
    default:
      M(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function hc(e, t) {
  var n = e.entries(), r = !1;
  do {
    var i = n.next(), o = i.done, l = zm(i.value, 2), u = l[1];
    if (u === t)
      return !0;
    r = !!o;
  } while (!r);
  return !1;
}
var Bm = /* @__PURE__ */ function() {
  function e(t) {
    $m(this, e), pn(this, "types", /* @__PURE__ */ new Map()), pn(this, "dragSources", /* @__PURE__ */ new Map()), pn(this, "dropTargets", /* @__PURE__ */ new Map()), pn(this, "pinnedSourceId", null), pn(this, "pinnedSource", null), pn(this, "store", void 0), this.store = t;
  }
  return Am(e, [{
    key: "addSource",
    value: function(n, r) {
      vu(n), Dm(r);
      var i = this.addHandler(Ue.SOURCE, n, r);
      return this.store.dispatch(im(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(n, r) {
      vu(n, !0), xm(r);
      var i = this.addHandler(Ue.TARGET, n, r);
      return this.store.dispatch(om(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(n) {
      return hc(this.dragSources, n) || hc(this.dropTargets, n);
    }
  }, {
    key: "getSource",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      M(this.isSourceId(n), "Expected a valid source ID.");
      var i = r && n === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(n);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(n) {
      return M(this.isTargetId(n), "Expected a valid target ID."), this.dropTargets.get(n);
    }
  }, {
    key: "getSourceType",
    value: function(n) {
      return M(this.isSourceId(n), "Expected a valid source ID."), this.types.get(n);
    }
  }, {
    key: "getTargetType",
    value: function(n) {
      return M(this.isTargetId(n), "Expected a valid target ID."), this.types.get(n);
    }
  }, {
    key: "isSourceId",
    value: function(n) {
      var r = pc(n);
      return r === Ue.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var r = pc(n);
      return r === Ue.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var r = this;
      M(this.getSource(n), "Expected an existing source."), this.store.dispatch(lm(n)), Lm(function() {
        r.dragSources.delete(n), r.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      M(this.getTarget(n), "Expected an existing target."), this.store.dispatch(um(n)), this.dropTargets.delete(n), this.types.delete(n);
    }
  }, {
    key: "pinSource",
    value: function(n) {
      var r = this.getSource(n);
      M(r, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = r;
    }
  }, {
    key: "unpinSource",
    value: function() {
      M(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(n, r, i) {
      var o = Vm(n);
      return this.types.set(o, r), n === Ue.SOURCE ? this.dragSources.set(o, i) : n === Ue.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), e;
}();
function Wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = Qm(r), o = new km(i, new Bm(i)), l = new qg(i, o), u = e(l, t, n);
  return l.receiveBackend(u), l;
}
function Qm(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return op(gm, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Km = ["children"];
function Xm(e, t) {
  return Zm(e) || qm(e, t) || Ym(e, t) || Gm();
}
function Gm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ym(e, t) {
  if (e) {
    if (typeof e == "string") return vc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vc(e, t);
  }
}
function vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function qm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function Zm(e) {
  if (Array.isArray(e)) return e;
}
function Jm(e, t) {
  if (e == null) return {};
  var n = ey(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ey(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var gc = 0, _i = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), ty = E.memo(function(t) {
  var n = t.children, r = Jm(t, Km), i = ny(r), o = Xm(i, 2), l = o[0], u = o[1];
  return E.useEffect(function() {
    if (u) {
      var a = cp();
      return ++gc, function() {
        --gc === 0 && (a[_i] = null);
      };
    }
  }, []), _.jsx(rp.Provider, Object.assign({
    value: l
  }, {
    children: n
  }), void 0);
});
function ny(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var n = ry(e.backend, e.context, e.options, e.debugMode), r = !e.context;
  return [n, r];
}
function ry(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cp(), n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = t;
  return i[_i] || (i[_i] = {
    dragDropManager: Wm(e, t, n, r)
  }), i[_i];
}
function cp() {
  return typeof global < "u" ? global : window;
}
function iy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ly(e, t, n) {
  return t && oy(e.prototype, t), e;
}
function mc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dl = !1, pl = !1, uy = /* @__PURE__ */ function() {
  function e(t) {
    iy(this, e), mc(this, "internalMonitor", void 0), mc(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return ly(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.sourceId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      M(!dl, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return dl = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        dl = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      M(!pl, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return pl = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        pl = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, r) {
      return this.internalMonitor.subscribeToStateChange(n, r);
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      return this.internalMonitor.isDraggingSource(n);
    }
  }, {
    key: "isOverTarget",
    value: function(n, r) {
      return this.internalMonitor.isOverTarget(n, r);
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
    value: function(n) {
      return this.internalMonitor.subscribeToOffsetChange(n);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      return this.internalMonitor.canDragSource(n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      return this.internalMonitor.canDropOnTarget(n);
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
function ay(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cy(e, t, n) {
  return t && sy(e.prototype, t), e;
}
function yc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hl = !1, fy = /* @__PURE__ */ function() {
  function e(t) {
    ay(this, e), yc(this, "internalMonitor", void 0), yc(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return cy(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.targetId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, r) {
      return this.internalMonitor.subscribeToStateChange(n, r);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      M(!hl, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return hl = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        hl = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(n) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, n) : !1;
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
function dy(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function py(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!E.isValidElement(t)) {
      var r = t;
      return e(r, n), r;
    }
    var i = t;
    dy(i);
    var o = n ? function(l) {
      return e(l, n);
    } : e;
    return hy(i, o);
  };
}
function fp(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      var i = py(r);
      t[n] = function() {
        return i;
      };
    }
  }), t;
}
function Sc(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function hy(e, t) {
  var n = e.ref;
  return M(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? E.cloneElement(e, {
    ref: function(i) {
      Sc(n, i), Sc(t, i);
    }
  }) : E.cloneElement(e, {
    ref: t
  });
}
function Pi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pi = function(n) {
    return typeof n;
  } : Pi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pi(e);
}
function gu(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && Pi(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function mu(e, t, n, r) {
  var i = void 0;
  if (i !== void 0)
    return !!i;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var o = Object.keys(e), l = Object.keys(t);
  if (o.length !== l.length)
    return !1;
  for (var u = Object.prototype.hasOwnProperty.bind(t), a = 0; a < o.length; a++) {
    var s = o[a];
    if (!u(s))
      return !1;
    var f = e[s], p = t[s];
    if (i = void 0, i === !1 || i === void 0 && f !== p)
      return !1;
  }
  return !0;
}
function vy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function my(e, t, n) {
  return t && gy(e.prototype, t), e;
}
function he(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yy = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    vy(this, e), he(this, "hooks", fp({
      dragSource: function(i, o) {
        n.clearDragSource(), n.dragSourceOptions = o || null, gu(i) ? n.dragSourceRef = i : n.dragSourceNode = i, n.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        n.clearDragPreview(), n.dragPreviewOptions = o || null, gu(i) ? n.dragPreviewRef = i : n.dragPreviewNode = i, n.reconnectDragPreview();
      }
    })), he(this, "handlerId", null), he(this, "dragSourceRef", null), he(this, "dragSourceNode", void 0), he(this, "dragSourceOptionsInternal", null), he(this, "dragSourceUnsubscribe", void 0), he(this, "dragPreviewRef", null), he(this, "dragPreviewNode", void 0), he(this, "dragPreviewOptionsInternal", null), he(this, "dragPreviewUnsubscribe", void 0), he(this, "lastConnectedHandlerId", null), he(this, "lastConnectedDragSource", null), he(this, "lastConnectedDragSourceOptions", null), he(this, "lastConnectedDragPreview", null), he(this, "lastConnectedDragPreviewOptions", null), he(this, "backend", void 0), this.backend = t;
  }
  return my(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.handlerId !== n && (this.handlerId = n, this.reconnect());
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
    set: function(n) {
      this.dragSourceOptionsInternal = n;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(n) {
      this.dragPreviewOptionsInternal = n;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var n = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (r && this.disconnectDragSource(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragSource = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = n, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, n, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var n = this.dragPreview, r = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (r && this.disconnectDragPreview(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragPreview = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
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
      return !mu(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !mu(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function Sy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ey(e, t, n) {
  return t && wy(e.prototype, t), e;
}
function tt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cy = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    Sy(this, e), tt(this, "hooks", fp({
      dropTarget: function(i, o) {
        n.clearDropTarget(), n.dropTargetOptions = o, gu(i) ? n.dropTargetRef = i : n.dropTargetNode = i, n.reconnect();
      }
    })), tt(this, "handlerId", null), tt(this, "dropTargetRef", null), tt(this, "dropTargetNode", void 0), tt(this, "dropTargetOptionsInternal", null), tt(this, "unsubscribeDropTarget", void 0), tt(this, "lastConnectedHandlerId", null), tt(this, "lastConnectedDropTarget", null), tt(this, "lastConnectedDropTargetOptions", null), tt(this, "backend", void 0), this.backend = t;
  }
  return Ey(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var n = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      n && this.disconnectDropTarget();
      var r = this.dropTarget;
      if (this.handlerId) {
        if (!r) {
          this.lastConnectedDropTarget = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(n) {
      n !== this.handlerId && (this.handlerId = n, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(n) {
      this.dropTargetOptionsInternal = n;
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
      return !mu(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function ky(e, t, n) {
  var r = n.getRegistry(), i = r.addTarget(e, t);
  return [i, function() {
    return r.removeTarget(i);
  }];
}
function Ty(e, t, n) {
  var r = n.getRegistry(), i = r.addSource(e, t);
  return [i, function() {
    return r.removeSource(i);
  }];
}
var dp = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, _a = ae ? Symbol.for("react.element") : 60103, Pa = ae ? Symbol.for("react.portal") : 60106, Do = ae ? Symbol.for("react.fragment") : 60107, xo = ae ? Symbol.for("react.strict_mode") : 60108, _o = ae ? Symbol.for("react.profiler") : 60114, Po = ae ? Symbol.for("react.provider") : 60109, Io = ae ? Symbol.for("react.context") : 60110, Ia = ae ? Symbol.for("react.async_mode") : 60111, No = ae ? Symbol.for("react.concurrent_mode") : 60111, Ro = ae ? Symbol.for("react.forward_ref") : 60112, Mo = ae ? Symbol.for("react.suspense") : 60113, Oy = ae ? Symbol.for("react.suspense_list") : 60120, Lo = ae ? Symbol.for("react.memo") : 60115, $o = ae ? Symbol.for("react.lazy") : 60116, Dy = ae ? Symbol.for("react.block") : 60121, xy = ae ? Symbol.for("react.fundamental") : 60117, _y = ae ? Symbol.for("react.responder") : 60118, Py = ae ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _a:
        switch (e = e.type, e) {
          case Ia:
          case No:
          case Do:
          case _o:
          case xo:
          case Mo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Io:
              case Ro:
              case $o:
              case Lo:
              case Po:
                return e;
              default:
                return t;
            }
        }
      case Pa:
        return t;
    }
  }
}
function pp(e) {
  return je(e) === No;
}
U.AsyncMode = Ia;
U.ConcurrentMode = No;
U.ContextConsumer = Io;
U.ContextProvider = Po;
U.Element = _a;
U.ForwardRef = Ro;
U.Fragment = Do;
U.Lazy = $o;
U.Memo = Lo;
U.Portal = Pa;
U.Profiler = _o;
U.StrictMode = xo;
U.Suspense = Mo;
U.isAsyncMode = function(e) {
  return pp(e) || je(e) === Ia;
};
U.isConcurrentMode = pp;
U.isContextConsumer = function(e) {
  return je(e) === Io;
};
U.isContextProvider = function(e) {
  return je(e) === Po;
};
U.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _a;
};
U.isForwardRef = function(e) {
  return je(e) === Ro;
};
U.isFragment = function(e) {
  return je(e) === Do;
};
U.isLazy = function(e) {
  return je(e) === $o;
};
U.isMemo = function(e) {
  return je(e) === Lo;
};
U.isPortal = function(e) {
  return je(e) === Pa;
};
U.isProfiler = function(e) {
  return je(e) === _o;
};
U.isStrictMode = function(e) {
  return je(e) === xo;
};
U.isSuspense = function(e) {
  return je(e) === Mo;
};
U.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Do || e === No || e === _o || e === xo || e === Mo || e === Oy || typeof e == "object" && e !== null && (e.$$typeof === $o || e.$$typeof === Lo || e.$$typeof === Po || e.$$typeof === Io || e.$$typeof === Ro || e.$$typeof === xy || e.$$typeof === _y || e.$$typeof === Py || e.$$typeof === Dy);
};
U.typeOf = je;
dp.exports = U;
var Iy = dp.exports, hp = Iy, Ny = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ry = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vp = {};
vp[hp.ForwardRef] = Ny;
vp[hp.Memo] = Ry;
var ln = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function Ii(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ii = function(n) {
    return typeof n;
  } : Ii = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ii(e);
}
function My(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ly(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $y(e, t, n) {
  return t && Ly(e.prototype, t), e;
}
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jy = /* @__PURE__ */ function() {
  function e(t, n, r) {
    My(this, e), vl(this, "spec", void 0), vl(this, "monitor", void 0), vl(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = r;
  }
  return $y(e, [{
    key: "beginDrag",
    value: function() {
      var n, r = this.spec, i = this.monitor, o = null;
      return Ii(r.item) === "object" ? o = r.item : typeof r.item == "function" ? o = r.item(i) : o = {}, (n = o) !== null && n !== void 0 ? n : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var n = this.spec, r = this.monitor;
      return typeof n.canDrag == "boolean" ? n.canDrag : typeof n.canDrag == "function" ? n.canDrag(r) : !0;
    }
  }, {
    key: "isDragging",
    value: function(n, r) {
      var i = this.spec, o = this.monitor, l = i.isDragging;
      return l ? l(o) : r === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var n = this.spec, r = this.monitor, i = this.connector, o = n.end;
      o && o(r.getItem(), r), i.reconnect();
    }
  }]), e;
}();
function Ay(e, t, n) {
  var r = E.useMemo(function() {
    return new jy(e, t, n);
  }, [t, n]);
  return E.useEffect(function() {
    r.spec = e;
  }, [e]), r;
}
function Wn() {
  var e = E.useContext(rp), t = e.dragDropManager;
  return M(t != null, "Expected drag drop context"), t;
}
function zy(e) {
  return E.useMemo(function() {
    var t = e.type;
    return M(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function by(e, t) {
  return Vy(e) || Hy(e, t) || Uy(e, t) || Fy();
}
function Fy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uy(e, t) {
  if (e) {
    if (typeof e == "string") return wc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wc(e, t);
  }
}
function wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Hy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function Vy(e) {
  if (Array.isArray(e)) return e;
}
function By(e, t, n) {
  var r = Wn(), i = Ay(e, t, n), o = zy(e);
  ln(function() {
    if (o != null) {
      var u = Ty(o, i, r), a = by(u, 2), s = a[0], f = a[1];
      return t.receiveHandlerId(s), n.receiveHandlerId(s), f;
    }
  }, [r, t, n, i, o]);
}
function Wy(e) {
  return Gy(e) || Xy(e) || Ky(e) || Qy();
}
function Qy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ky(e, t) {
  if (e) {
    if (typeof e == "string") return yu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yu(e, t);
  }
}
function Xy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gy(e) {
  if (Array.isArray(e)) return yu(e);
}
function yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function gp(e, t) {
  var n = Wy(t || []);
  return t == null && typeof e != "function" && n.push(e), E.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, n);
}
function Yy() {
  var e = Wn();
  return E.useMemo(function() {
    return new uy(e);
  }, [e]);
}
function qy(e, t) {
  var n = Wn(), r = E.useMemo(function() {
    return new yy(n.getBackend());
  }, [n]);
  return ln(function() {
    return r.dragSourceOptions = e || null, r.reconnect(), function() {
      return r.disconnectDragSource();
    };
  }, [r, e]), ln(function() {
    return r.dragPreviewOptions = t || null, r.reconnect(), function() {
      return r.disconnectDragPreview();
    };
  }, [r, t]), r;
}
var Zy = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, i, o;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (i = r; i-- !== 0; )
        if (!e(t[i], n[i])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var l = o[i];
      if (!e(t[l], n[l])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Jy = /* @__PURE__ */ Un(Zy);
function e0(e, t) {
  return i0(e) || r0(e, t) || n0(e, t) || t0();
}
function t0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e, t) {
  if (e) {
    if (typeof e == "string") return Ec(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ec(e, t);
  }
}
function Ec(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function r0(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function i0(e) {
  if (Array.isArray(e)) return e;
}
function o0(e, t, n) {
  var r = E.useState(function() {
    return t(e);
  }), i = e0(r, 2), o = i[0], l = i[1], u = E.useCallback(function() {
    var a = t(e);
    Jy(o, a) || (l(a), n && n());
  }, [o, e, n]);
  return ln(u), [o, u];
}
function l0(e, t) {
  return c0(e) || s0(e, t) || a0(e, t) || u0();
}
function u0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a0(e, t) {
  if (e) {
    if (typeof e == "string") return Cc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Cc(e, t);
  }
}
function Cc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function s0(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function c0(e) {
  if (Array.isArray(e)) return e;
}
function f0(e, t, n) {
  var r = o0(e, t, n), i = l0(r, 2), o = i[0], l = i[1];
  return ln(function() {
    var a = e.getHandlerId();
    if (a != null)
      return e.subscribeToStateChange(l, {
        handlerIds: [a]
      });
  }, [e, l]), o;
}
function mp(e, t, n) {
  return f0(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function d0(e) {
  return E.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function p0(e) {
  return E.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function h0(e, t) {
  var n = gp(e, t);
  M(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var r = Yy(), i = qy(n.options, n.previewOptions);
  return By(n, r, i), [mp(n.collect, r, i), d0(i), p0(i)];
}
function v0(e) {
  var t = e.accept;
  return E.useMemo(function() {
    return M(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function g0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function y0(e, t, n) {
  return t && m0(e.prototype, t), e;
}
function kc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var S0 = /* @__PURE__ */ function() {
  function e(t, n) {
    g0(this, e), kc(this, "spec", void 0), kc(this, "monitor", void 0), this.spec = t, this.monitor = n;
  }
  return y0(e, [{
    key: "canDrop",
    value: function() {
      var n = this.spec, r = this.monitor;
      return n.canDrop ? n.canDrop(r.getItem(), r) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var n = this.spec, r = this.monitor;
      n.hover && n.hover(r.getItem(), r);
    }
  }, {
    key: "drop",
    value: function() {
      var n = this.spec, r = this.monitor;
      if (n.drop)
        return n.drop(r.getItem(), r);
    }
  }]), e;
}();
function w0(e, t) {
  var n = E.useMemo(function() {
    return new S0(e, t);
  }, [t]);
  return E.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function E0(e, t) {
  return O0(e) || T0(e, t) || k0(e, t) || C0();
}
function C0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k0(e, t) {
  if (e) {
    if (typeof e == "string") return Tc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tc(e, t);
  }
}
function Tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function T0(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, o = !1, l, u;
    try {
      for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0)
        ;
    } catch (a) {
      o = !0, u = a;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function O0(e) {
  if (Array.isArray(e)) return e;
}
function D0(e, t, n) {
  var r = Wn(), i = w0(e, t), o = v0(e);
  ln(function() {
    var u = ky(o, i, r), a = E0(u, 2), s = a[0], f = a[1];
    return t.receiveHandlerId(s), n.receiveHandlerId(s), f;
  }, [r, t, i, n, o.map(function(l) {
    return l.toString();
  }).join("|")]);
}
function x0() {
  var e = Wn();
  return E.useMemo(function() {
    return new fy(e);
  }, [e]);
}
function _0(e) {
  var t = Wn(), n = E.useMemo(function() {
    return new Cy(t.getBackend());
  }, [t]);
  return ln(function() {
    return n.dropTargetOptions = e || null, n.reconnect(), function() {
      return n.disconnectDropTarget();
    };
  }, [e]), n;
}
function P0(e) {
  return E.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function I0(e, t) {
  var n = gp(e, t), r = x0(), i = _0(n.options);
  return D0(n, r, i), [mp(n.collect, r, i), P0(i)];
}
function yp(e) {
  var t = null, n = function() {
    return t == null && (t = e()), t;
  };
  return n;
}
function N0(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function R0(e, t) {
  var n = /* @__PURE__ */ new Set(), r = function(l) {
    return n.add(l);
  };
  e.forEach(r), t.forEach(r);
  var i = [];
  return n.forEach(function(o) {
    return i.push(o);
  }), i;
}
function M0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $0(e, t, n) {
  return t && L0(e.prototype, t), e;
}
function Oc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var j0 = /* @__PURE__ */ function() {
  function e(t) {
    M0(this, e), Oc(this, "entered", []), Oc(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return $0(e, [{
    key: "enter",
    value: function(n) {
      var r = this, i = this.entered.length, o = function(u) {
        return r.isNodeInDocument(u) && (!u.contains || u.contains(n));
      };
      return this.entered = R0(this.entered.filter(o), [n]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(n) {
      var r = this.entered.length;
      return this.entered = N0(this.entered.filter(this.isNodeInDocument), n), r > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), A0 = yp(function() {
  return /firefox/i.test(navigator.userAgent);
}), Sp = yp(function() {
  return !!window.safari;
});
function z0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function F0(e, t, n) {
  return t && b0(e.prototype, t), e;
}
function ir(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dc = /* @__PURE__ */ function() {
  function e(t, n) {
    z0(this, e), ir(this, "xs", void 0), ir(this, "ys", void 0), ir(this, "c1s", void 0), ir(this, "c2s", void 0), ir(this, "c3s", void 0);
    for (var r = t.length, i = [], o = 0; o < r; o++)
      i.push(o);
    i.sort(function(O, H) {
      return t[O] < t[H] ? -1 : 1;
    });
    for (var l = [], u = [], a, s, f = 0; f < r - 1; f++)
      a = t[f + 1] - t[f], s = n[f + 1] - n[f], l.push(a), u.push(s / a);
    for (var p = [u[0]], v = 0; v < l.length - 1; v++) {
      var g = u[v], m = u[v + 1];
      if (g * m <= 0)
        p.push(0);
      else {
        a = l[v];
        var y = l[v + 1], I = a + y;
        p.push(3 * I / ((I + y) / g + (I + a) / m));
      }
    }
    p.push(u[u.length - 1]);
    for (var d = [], c = [], h, S = 0; S < p.length - 1; S++) {
      h = u[S];
      var C = p[S], k = 1 / l[S], T = C + p[S + 1] - h - h;
      d.push((h - C - T) * k), c.push(T * k * k);
    }
    this.xs = t, this.ys = n, this.c1s = p, this.c2s = d, this.c3s = c;
  }
  return F0(e, [{
    key: "interpolate",
    value: function(n) {
      var r = this.xs, i = this.ys, o = this.c1s, l = this.c2s, u = this.c3s, a = r.length - 1;
      if (n === r[a])
        return i[a];
      for (var s = 0, f = u.length - 1, p; s <= f; ) {
        p = Math.floor(0.5 * (s + f));
        var v = r[p];
        if (v < n)
          s = p + 1;
        else if (v > n)
          f = p - 1;
        else
          return i[p];
      }
      a = Math.max(0, f);
      var g = n - r[a], m = g * g;
      return i[a] + o[a] * g + l[a] * m + u[a] * g * m;
    }
  }]), e;
}(), U0 = 1;
function wp(e) {
  var t = e.nodeType === U0 ? e : e.parentElement;
  if (!t)
    return null;
  var n = t.getBoundingClientRect(), r = n.top, i = n.left;
  return {
    x: i,
    y: r
  };
}
function ci(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function H0(e) {
  var t;
  return e.nodeName === "IMG" && (A0() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function V0(e, t, n, r) {
  var i = e ? t.width : n, o = e ? t.height : r;
  return Sp() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function B0(e, t, n, r, i) {
  var o = H0(t), l = o ? e : t, u = wp(l), a = {
    x: n.x - u.x,
    y: n.y - u.y
  }, s = e.offsetWidth, f = e.offsetHeight, p = r.anchorX, v = r.anchorY, g = V0(o, t, s, f), m = g.dragPreviewWidth, y = g.dragPreviewHeight, I = function() {
    var T = new Dc([0, 0.5, 1], [
      // Dock to the top
      a.y,
      // Align at the center
      a.y / f * y,
      // Dock to the bottom
      a.y + y - f
    ]), O = T.interpolate(v);
    return Sp() && o && (O += (window.devicePixelRatio - 1) * y), O;
  }, d = function() {
    var T = new Dc([0, 0.5, 1], [
      // Dock to the left
      a.x,
      // Align at the center
      a.x / s * m,
      // Dock to the right
      a.x + m - s
    ]);
    return T.interpolate(p);
  }, c = i.offsetX, h = i.offsetY, S = c === 0 || c, C = h === 0 || h;
  return {
    x: S ? c : d(),
    y: C ? h : I()
  };
}
var Ep = "__NATIVE_FILE__", Cp = "__NATIVE_URL__", kp = "__NATIVE_TEXT__", Tp = "__NATIVE_HTML__";
const xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Ep,
  HTML: Tp,
  TEXT: kp,
  URL: Cp
}, Symbol.toStringTag, { value: "Module" }));
function gl(e, t, n) {
  var r = t.reduce(function(i, o) {
    return i || e.getData(o);
  }, "");
  return r ?? n;
}
var hn;
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Su = (hn = {}, fi(hn, Ep, {
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
}), fi(hn, Tp, {
  exposeProperties: {
    html: function(t, n) {
      return gl(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), fi(hn, Cp, {
  exposeProperties: {
    urls: function(t, n) {
      return gl(t, n, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), fi(hn, kp, {
  exposeProperties: {
    text: function(t, n) {
      return gl(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), hn);
function W0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function K0(e, t, n) {
  return t && Q0(e.prototype, t), e;
}
function _c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var X0 = /* @__PURE__ */ function() {
  function e(t) {
    W0(this, e), _c(this, "item", void 0), _c(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return K0(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var n = this;
      Object.keys(this.config.exposeProperties).forEach(function(r) {
        Object.defineProperty(n.item, r, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(r, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(n) {
      var r = this;
      if (n) {
        var i = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          i[o] = {
            value: r.config.exposeProperties[o](n, r.config.matchesTypes),
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
    value: function(n, r) {
      return r === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function G0(e, t) {
  var n = new X0(Su[e]);
  return n.loadDataTransfer(t), n;
}
function ml(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Su).filter(function(n) {
    var r = Su[n].matchesTypes;
    return r.some(function(i) {
      return t.indexOf(i) > -1;
    });
  })[0] || null;
}
function Y0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Z0(e, t, n) {
  return t && q0(e.prototype, t), e;
}
function yl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var J0 = /* @__PURE__ */ function() {
  function e(t, n) {
    Y0(this, e), yl(this, "ownerDocument", null), yl(this, "globalContext", void 0), yl(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
  }
  return Z0(e, [{
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
      var n;
      return (n = this.globalContext) !== null && n !== void 0 && n.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var n;
      return ((n = this.optionsArgs) === null || n === void 0 ? void 0 : n.rootElement) || this.window;
    }
  }]), e;
}();
function Pc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pc(Object(n), !0).forEach(function(r) {
      A(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function eS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nS(e, t, n) {
  return t && tS(e.prototype, t), e;
}
function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rS = /* @__PURE__ */ function() {
  function e(t, n, r) {
    var i = this;
    eS(this, e), A(this, "options", void 0), A(this, "actions", void 0), A(this, "monitor", void 0), A(this, "registry", void 0), A(this, "enterLeaveCounter", void 0), A(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), A(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), A(this, "sourceNodes", /* @__PURE__ */ new Map()), A(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), A(this, "dragStartSourceIds", null), A(this, "dropTargetIds", []), A(this, "dragEnterTargetIds", []), A(this, "currentNativeSource", null), A(this, "currentNativeHandle", null), A(this, "currentDragSourceNode", null), A(this, "altKeyPressed", !1), A(this, "mouseMoveTimeoutTimer", null), A(this, "asyncEndDragFrameId", null), A(this, "dragOverTargetIds", null), A(this, "lastClientOffset", null), A(this, "hoverRafId", null), A(this, "getSourceClientOffset", function(o) {
      var l = i.sourceNodes.get(o);
      return l && wp(l) || null;
    }), A(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), A(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), A(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), A(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), A(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var l = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var u = ci(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(l || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: u
        });
        var a = o.dataTransfer, s = ml(a);
        if (i.monitor.isDragging()) {
          if (a && typeof a.setDragImage == "function") {
            var f = i.monitor.getSourceId(), p = i.sourceNodes.get(f), v = i.sourcePreviewNodes.get(f) || p;
            if (v) {
              var g = i.getCurrentSourcePreviewNodeOptions(), m = g.anchorX, y = g.anchorY, I = g.offsetX, d = g.offsetY, c = {
                anchorX: m,
                anchorY: y
              }, h = {
                offsetX: I,
                offsetY: d
              }, S = B0(p, v, u, c, h);
              a.setDragImage(v, S.x, S.y);
            }
          }
          try {
            a == null || a.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var C = i.getCurrentSourcePreviewNodeOptions(), k = C.captureDraggingState;
          k ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (s)
          i.beginDragNativeItem(s);
        else {
          if (a && !a.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), A(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), A(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var l = i.enterLeaveCounter.enter(o.target);
      if (!(!l || i.monitor.isDragging())) {
        var u = o.dataTransfer, a = ml(u);
        a && i.beginDragNativeItem(a, u);
      }
    }), A(this, "handleTopDragEnter", function(o) {
      var l = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, l.length > 0 && i.actions.hover(l, {
          clientOffset: ci(o)
        });
        var u = l.some(function(a) {
          return i.monitor.canDropOnTarget(a);
        });
        u && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), A(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), A(this, "handleTopDragOver", function(o) {
      var l = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = ci(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(l || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var u = (l || []).some(function(a) {
        return i.monitor.canDropOnTarget(a);
      });
      u ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), A(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var l = i.enterLeaveCounter.leave(o.target);
      l && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), A(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var l;
        o.preventDefault(), (l = i.currentNativeSource) === null || l === void 0 || l.loadDataTransfer(o.dataTransfer);
      } else ml(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), A(this, "handleTopDrop", function(o) {
      var l = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(l, {
        clientOffset: ci(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), A(this, "handleSelectStart", function(o) {
      var l = o.target;
      typeof l.dragDrop == "function" && (l.tagName === "INPUT" || l.tagName === "SELECT" || l.tagName === "TEXTAREA" || l.isContentEditable || (o.preventDefault(), l.dragDrop()));
    }), this.options = new J0(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new j0(this.isNodeInDocument);
  }
  return nS(e, [{
    key: "profile",
    value: function() {
      var n, r;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((n = this.dragStartSourceIds) === null || n === void 0 ? void 0 : n.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
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
      var n = this.rootElement;
      if (n !== void 0) {
        if (n.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        n.__isReactDndBackendSetUp = !0, this.addEventListeners(n);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var n = this.rootElement;
      if (n !== void 0 && (n.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var r;
        (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(n, r, i) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(n, i), this.sourcePreviewNodes.set(n, r), function() {
        o.sourcePreviewNodes.delete(n), o.sourcePreviewNodeOptions.delete(n);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(n, r, i) {
      var o = this;
      this.sourceNodes.set(n, r), this.sourceNodeOptions.set(n, i);
      var l = function(s) {
        return o.handleDragStart(s, n);
      }, u = function(s) {
        return o.handleSelectStart(s);
      };
      return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", l), r.addEventListener("selectstart", u), function() {
        o.sourceNodes.delete(n), o.sourceNodeOptions.delete(n), r.removeEventListener("dragstart", l), r.removeEventListener("selectstart", u), r.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(n, r) {
      var i = this, o = function(s) {
        return i.handleDragEnter(s, n);
      }, l = function(s) {
        return i.handleDragOver(s, n);
      }, u = function(s) {
        return i.handleDrop(s, n);
      };
      return r.addEventListener("dragenter", o), r.addEventListener("dragover", l), r.addEventListener("drop", u), function() {
        r.removeEventListener("dragenter", o), r.removeEventListener("dragover", l), r.removeEventListener("drop", u);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(n) {
      n.addEventListener && (n.addEventListener("dragstart", this.handleTopDragStart), n.addEventListener("dragstart", this.handleTopDragStartCapture, !0), n.addEventListener("dragend", this.handleTopDragEndCapture, !0), n.addEventListener("dragenter", this.handleTopDragEnter), n.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.addEventListener("dragover", this.handleTopDragOver), n.addEventListener("dragover", this.handleTopDragOverCapture, !0), n.addEventListener("drop", this.handleTopDrop), n.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(n) {
      n.removeEventListener && (n.removeEventListener("dragstart", this.handleTopDragStart), n.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), n.removeEventListener("dragend", this.handleTopDragEndCapture, !0), n.removeEventListener("dragenter", this.handleTopDragEnter), n.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.removeEventListener("dragover", this.handleTopDragOver), n.removeEventListener("dragover", this.handleTopDragOverCapture, !0), n.removeEventListener("drop", this.handleTopDrop), n.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(n);
      return Ic({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, r || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(n);
      return Ic({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, r || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var n = this.monitor.getItemType();
      return Object.keys(xc).some(function(r) {
        return xc[r] === n;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(n, r) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = G0(n, r), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(n) {
      var r = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = n;
      var i = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = r.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", r.endDragIfSourceWasRemovedFromDOM, !0);
      }, i);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var n;
          (n = this.window) === null || n === void 0 || n.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(n, r) {
      n.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
    }
  }, {
    key: "handleDragEnter",
    value: function(n, r) {
      this.dragEnterTargetIds.unshift(r);
    }
  }, {
    key: "handleDragOver",
    value: function(n, r) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
    }
  }, {
    key: "handleDrop",
    value: function(n, r) {
      this.dropTargetIds.unshift(r);
    }
  }]), e;
}(), iS = function(t, n, r) {
  return new rS(t, n, r);
}, Op = { exports: {} };
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
        var u = arguments[l];
        u && (o = i(o, r(u)));
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
      for (var u in o)
        t.call(o, u) && o[u] && (l = i(l, u));
      return l;
    }
    function i(o, l) {
      return l ? o ? o + " " + l : o + l : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Op);
var oS = Op.exports;
const Qe = /* @__PURE__ */ Un(oS);
function Me() {
  return Me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Me.apply(null, arguments);
}
function Vt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Na = /* @__PURE__ */ P.createContext({});
Na.Consumer;
Na.Provider;
function Ra(e, t) {
  var n = E.useContext(Na);
  return e || n[t] || t;
}
function lS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var l = arguments.length, u = new Array(l), a = 0; a < l; a++)
        u[a] = arguments[a];
      r.apply(this, u), i.apply(this, u);
    };
  }, null);
}
var uS = ["as", "disabled", "onKeyDown"];
function Nc(e) {
  return !e || e.trim() === "#";
}
var Ma = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, o = e.onKeyDown, l = Vt(e, uS), u = function(f) {
    var p = l.href, v = l.onClick;
    if ((i || Nc(p)) && f.preventDefault(), i) {
      f.stopPropagation();
      return;
    }
    v && v(f);
  }, a = function(f) {
    f.key === " " && (f.preventDefault(), u(f));
  };
  return Nc(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), i && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ P.createElement(r, Me({
    ref: t
  }, l, {
    onClick: u,
    onKeyDown: lS(a, o)
  }));
});
Ma.displayName = "SafeAnchor";
var aS = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], sS = {
  variant: "primary",
  active: !1,
  disabled: !1
}, La = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, o = e.active, l = e.className, u = e.block, a = e.type, s = e.as, f = Vt(e, aS), p = Ra(n, "btn"), v = Qe(l, p, o && "active", r && p + "-" + r, u && p + "-block", i && p + "-" + i);
  if (f.href)
    return /* @__PURE__ */ P.createElement(Ma, Me({}, f, {
      as: s,
      ref: t,
      className: Qe(v, f.disabled && "disabled")
    }));
  t && (f.ref = t), a ? f.type = a : s || (f.type = "button");
  var g = s || "button";
  return /* @__PURE__ */ P.createElement(g, Me({}, f, {
    className: v
  }));
});
La.displayName = "Button";
La.defaultProps = sS;
var Dp = { exports: {} }, cS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", fS = cS, dS = fS;
function xp() {
}
function _p() {
}
_p.resetWarningCache = xp;
var pS = function() {
  function e(r, i, o, l, u, a) {
    if (a !== dS) {
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
    checkPropTypes: _p,
    resetWarningCache: xp
  };
  return n.PropTypes = n, n;
};
Dp.exports = pS();
var hS = Dp.exports;
const N = /* @__PURE__ */ Un(hS);
let Rc = 0;
const vS = (e = "id") => (Rc += 1, `${e}${Rc}`);
let sr = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function gS(e, t, n) {
  class r extends P.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, l) {
      if (n[l] === void 0)
        return o[l] = this.props[l], o;
      const {
        deprType: u,
        newName: a,
        expect: s,
        transform: f,
        message: p
      } = n[l];
      switch (u) {
        case sr.MOVED:
          this.warn(`${t}: The prop '${l}' has been moved to '${a}'.`), o[a] = this.props[l];
          break;
        case sr.REMOVED:
          this.warn(`${t}: The prop '${l}' has been removed. '${p}'`);
          break;
        case sr.FORMAT:
          s(this.props[l]) ? o[l] = this.props[l] : (this.warn(`${t}: The prop '${l}' expects a new format. ${p}`), o[l] = f(this.props[l], this.props));
          break;
        case sr.MOVED_AND_FORMAT: {
          const v = this.props[l];
          let g = `${t}: The prop '${l}' has been moved to '${a}'`;
          s && !s(v) && (g += " and expects a new format"), g += p ? `. ${p}` : "", this.warn(g), o[a] = f ? f(v, this.props) : v;
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
      return /* @__PURE__ */ P.createElement(e, {
        ...l
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Ha(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function $a({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: o,
  size: l,
  ...u
}) {
  if (e) {
    const a = o["aria-label"] || o["aria-labelledby"], s = {
      ...o
    };
    return a || (s["aria-label"] = void 0, s["aria-hidden"] = !0), /* @__PURE__ */ P.createElement("span", {
      className: Qe("pgn__icon", {
        [`pgn__icon__${l}`]: !!l
      }, n),
      id: t,
      ...u
    }, /* @__PURE__ */ P.createElement(e, {
      role: "img",
      focusable: !1,
      ...s
    }), i && /* @__PURE__ */ P.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("span", {
    id: t || vS("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ P.createElement("span", {
    className: "sr-only"
  }, i));
}
$a.propTypes = {
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
$a.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const wu = gS($a, "Icon", {
  className: {
    deprType: sr.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Pp = /* @__PURE__ */ P.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, o) => /* @__PURE__ */ P.createElement(La, {
  size: r,
  ...i,
  className: Qe(i.className),
  ref: o
}, n && /* @__PURE__ */ P.createElement(wu, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ P.createElement(wu, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function Mc(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function mS(e) {
  var t = yS(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function yS(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function SS(e, t, n) {
  var r = E.useRef(e !== void 0), i = E.useState(t), o = i[0], l = i[1], u = e !== void 0, a = r.current;
  return r.current = u, !u && a && o !== t && l(t), [u ? e : o, E.useCallback(function(s) {
    for (var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
      p[v - 1] = arguments[v];
    n && n.apply(void 0, [s].concat(p)), l(s);
  }, [n])];
}
function wS(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, o = n, l = o[Mc(r)], u = o[r], a = Vt(o, [Mc(r), r].map(mS)), s = t[r], f = SS(u, l, e[s]), p = f[0], v = f[1];
    return Me({}, a, (i = {}, i[r] = p, i[s] = v, i));
  }, e);
}
function Eu(e, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Eu(e, t);
}
function ES(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Eu(e, t);
}
function CS(e) {
  return e && e.ownerDocument || document;
}
function kS(e) {
  var t = CS(e);
  return t && t.defaultView || window;
}
function TS(e, t) {
  return kS(e).getComputedStyle(e, t);
}
var OS = /([A-Z])/g;
function DS(e) {
  return e.replace(OS, "-$1").toLowerCase();
}
var xS = /^ms-/;
function di(e) {
  return DS(e).replace(xS, "-ms-");
}
var _S = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function PS(e) {
  return !!(e && _S.test(e));
}
function Ip(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(di(t)) || TS(e).getPropertyValue(di(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(di(i)) : PS(i) ? r += i + "(" + o + ") " : n += di(i) + ": " + o + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
const Lc = {
  disabled: !1
}, Np = P.createContext(null);
var IS = function(t) {
  return t.scrollTop;
}, cr = "unmounted", Kt = "exited", Ot = "entering", Xt = "entered", Cu = "exiting", wt = /* @__PURE__ */ function(e) {
  ES(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var l = i, u = l && !l.isMounting ? r.enter : r.appear, a;
    return o.appearStatus = null, r.in ? u ? (a = Kt, o.appearStatus = Ot) : a = Xt : r.unmountOnExit || r.mountOnEnter ? a = cr : a = Kt, o.state = {
      status: a
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var l = i.in;
    return l && o.status === cr ? {
      status: Kt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Ot && l !== Xt && (o = Ot) : (l === Ot || l === Xt) && (o = Cu);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, l, u;
    return o = l = u = i, i != null && typeof i != "number" && (o = i.exit, l = i.enter, u = i.appear !== void 0 ? i.appear : l), {
      exit: o,
      enter: l,
      appear: u
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Ot) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : si.findDOMNode(this);
          l && IS(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Kt && this.setState({
      status: cr
    });
  }, n.performEnter = function(i) {
    var o = this, l = this.props.enter, u = this.context ? this.context.isMounting : i, a = this.props.nodeRef ? [u] : [si.findDOMNode(this), u], s = a[0], f = a[1], p = this.getTimeouts(), v = u ? p.appear : p.enter;
    if (!i && !l || Lc.disabled) {
      this.safeSetState({
        status: Xt
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, f), this.safeSetState({
      status: Ot
    }, function() {
      o.props.onEntering(s, f), o.onTransitionEnd(v, function() {
        o.safeSetState({
          status: Xt
        }, function() {
          o.props.onEntered(s, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : si.findDOMNode(this);
    if (!o || Lc.disabled) {
      this.safeSetState({
        status: Kt
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Cu
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Kt
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, o.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var l = this.props.nodeRef ? this.props.nodeRef.current : si.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], s = a[0], f = a[1];
      this.props.addEndListener(s, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === cr)
      return null;
    var o = this.props, l = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Vt(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ P.createElement(Np.Provider, {
        value: null
      }, typeof l == "function" ? l(i, u) : P.cloneElement(P.Children.only(l), u))
    );
  }, t;
}(P.Component);
wt.contextType = Np;
wt.propTypes = {};
function vn() {
}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vn,
  onEntering: vn,
  onEntered: vn,
  onExit: vn,
  onExiting: vn,
  onExited: vn
};
wt.UNMOUNTED = cr;
wt.EXITED = Kt;
wt.ENTERING = Ot;
wt.ENTERED = Xt;
wt.EXITING = Cu;
const NS = !!(typeof window < "u" && window.document && window.document.createElement);
var ku = !1, Tu = !1;
try {
  var Sl = {
    get passive() {
      return ku = !0;
    },
    get once() {
      return Tu = ku = !0;
    }
  };
  NS && (window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, !0));
} catch {
}
function RS(e, t, n, r) {
  if (r && typeof r != "boolean" && !Tu) {
    var i = r.once, o = r.capture, l = n;
    !Tu && i && (l = n.__once || function u(a) {
      this.removeEventListener(t, u, o), n.call(this, a);
    }, n.__once = l), e.addEventListener(t, l, ku ? r : o);
  }
  e.addEventListener(t, n, r);
}
function MS(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Rp(e, t, n, r) {
  return RS(e, t, n, r), function() {
    MS(e, t, n, r);
  };
}
function LS(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function $S(e) {
  var t = Ip(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function jS(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || LS(e, "transitionend", !0);
  }, t + n), o = Rp(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function AS(e, t, n, r) {
  n == null && (n = $S(e) || 0);
  var i = jS(e, n, r), o = Rp(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function $c(e, t) {
  var n = Ip(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function zS(e, t) {
  var n = $c(e, "transitionDuration"), r = $c(e, "transitionDelay"), i = AS(e, function(o) {
    o.target === e && (i(), t(o));
  }, n + r);
}
function bS(e) {
  e.offsetHeight;
}
function FS(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function US(e) {
  const t = FS(e);
  return E.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var HS = ["className", "children"], pi, VS = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, BS = (pi = {}, pi[Ot] = "show", pi[Xt] = "show", pi), jo = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = Vt(e, HS), o = E.useCallback(function(l) {
    bS(l), i.onEnter && i.onEnter(l);
  }, [i]);
  return /* @__PURE__ */ P.createElement(wt, Me({
    ref: t,
    addEndListener: zS
  }, i, {
    onEnter: o
  }), function(l, u) {
    return /* @__PURE__ */ P.cloneElement(r, Me({}, u, {
      className: Qe("fade", n, r.props.className, BS[l])
    }));
  });
});
jo.defaultProps = VS;
jo.displayName = "Fade";
var WS = ["label", "onClick", "className"], QS = {
  label: N.string.isRequired,
  onClick: N.func
}, KS = {
  label: "Close"
}, Ao = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, o = Vt(e, WS);
  return /* @__PURE__ */ P.createElement("button", Me({
    ref: t,
    type: "button",
    className: Qe("close", i),
    onClick: r
  }, o), /* @__PURE__ */ P.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ P.createElement("span", {
    className: "sr-only"
  }, n));
});
Ao.displayName = "CloseButton";
Ao.propTypes = QS;
Ao.defaultProps = KS;
const Mp = function(e) {
  return /* @__PURE__ */ P.forwardRef(function(t, n) {
    return /* @__PURE__ */ P.createElement("div", Me({}, t, {
      ref: n,
      className: Qe(t.className, e)
    }));
  });
};
var XS = /-(.)/g;
function GS(e) {
  return e.replace(XS, function(t, n) {
    return n.toUpperCase();
  });
}
var YS = ["className", "bsPrefix", "as"], qS = function(t) {
  return t[0].toUpperCase() + GS(t).slice(1);
};
function Lp(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? qS(e) : r, o = n.Component, l = n.defaultProps, u = /* @__PURE__ */ P.forwardRef(function(a, s) {
    var f = a.className, p = a.bsPrefix, v = a.as, g = v === void 0 ? o || "div" : v, m = Vt(a, YS), y = Ra(p, e);
    return /* @__PURE__ */ P.createElement(g, Me({
      ref: s,
      className: Qe(f, y)
    }, m));
  });
  return u.defaultProps = l, u.displayName = i, u;
}
var ZS = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], $p = Mp("h4");
$p.displayName = "DivStyledAsH4";
var JS = Lp("alert-heading", {
  Component: $p
}), ew = Lp("alert-link", {
  Component: Ma
}), tw = {
  show: !0,
  transition: jo,
  closeLabel: "Close alert"
}, sn = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = wS(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, o = n.closeLabel, l = n.className, u = n.children, a = n.variant, s = n.onClose, f = n.dismissible, p = n.transition, v = Vt(n, ZS), g = Ra(r, "alert"), m = US(function(d) {
    s && s(!1, d);
  }), y = p === !0 ? jo : p, I = /* @__PURE__ */ P.createElement("div", Me({
    role: "alert"
  }, y ? void 0 : v, {
    ref: t,
    className: Qe(l, g, a && g + "-" + a, f && g + "-dismissible")
  }), f && /* @__PURE__ */ P.createElement(Ao, {
    onClick: m,
    label: o
  }), u);
  return y ? /* @__PURE__ */ P.createElement(y, Me({
    unmountOnExit: !0
  }, v, {
    ref: void 0,
    in: i
  }), I) : i ? I : null;
});
sn.displayName = "Alert";
sn.defaultProps = tw;
sn.Link = ew;
sn.Heading = JS;
var no = function() {
  return no = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, no.apply(this, arguments);
};
function ro(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Hr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function Vr(e, t) {
  var n = t && t.cache ? t.cache : uw, r = t && t.serializer ? t.serializer : lw, i = t && t.strategy ? t.strategy : iw;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function nw(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function rw(e, t, n, r) {
  var i = nw(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function jp(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function Ap(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function iw(e, t) {
  var n = e.length === 1 ? rw : jp;
  return Ap(e, this, n, t.cache.create(), t.serializer);
}
function ow(e, t) {
  return Ap(e, this, jp, t.cache.create(), t.serializer);
}
var lw = function() {
  return JSON.stringify(arguments);
};
function ja() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ja.prototype.get = function(e) {
  return this.cache[e];
};
ja.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var uw = {
  create: function() {
    return new ja();
  }
}, Br = {
  variadic: ow
};
function aw(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
Vr(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Hr([void 0], t, !1)))();
}, {
  strategy: Br.variadic
});
Vr(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Hr([void 0], t, !1)))();
}, {
  strategy: Br.variadic
});
Vr(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Hr([void 0], t, !1)))();
}, {
  strategy: Br.variadic
});
Vr(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Hr([void 0], t, !1)))();
}, {
  strategy: Br.variadic
});
Vr(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Hr([void 0], t, !1)))();
}, {
  strategy: Br.variadic
});
var sw = function(e) {
}, cw = function(e) {
}, fw = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: sw,
  onWarn: cw
};
function dw(e) {
  aw(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
no(no({}, fw), { textComponent: E.Fragment });
function jc(e, t) {
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
var Aa = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = E.createContext(null)) : E.createContext(null);
Aa.Consumer;
Aa.Provider;
var pw = Aa;
function za() {
  var e = E.useContext(pw);
  return dw(e), e;
}
var Ou;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Ou || (Ou = {}));
var Du;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Du || (Du = {}));
function zp(e) {
  var t = function(n) {
    var r = za(), i = n.value, o = n.children, l = ro(n, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, a = e === "formatDate" ? r.formatDateToParts(u, l) : r.formatTimeToParts(u, l);
    return o(a);
  };
  return t.displayName = Du[e], t;
}
function Wr(e) {
  var t = function(n) {
    var r = za(), i = n.value, o = n.children, l = ro(
      n,
      ["value", "children"]
    ), u = r[e](i, l);
    if (typeof o == "function")
      return o(u);
    var a = r.textComponent || E.Fragment;
    return E.createElement(a, null, u);
  };
  return t.displayName = Ou[e], t;
}
function hw(e, t) {
  var n = e.values, r = ro(e, ["values"]), i = t.values, o = ro(t, ["values"]);
  return jc(i, n) && jc(r, o);
}
function bp(e) {
  var t = za(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? E.Fragment : r, o = e.id, l = e.description, u = e.defaultMessage, a = e.values, s = e.children, f = e.tagName, p = f === void 0 ? i : f, v = e.ignoreTag, g = { id: o, description: l, defaultMessage: u }, m = n(g, a, {
    ignoreTag: v
  });
  return typeof s == "function" ? s(Array.isArray(m) ? m : [m]) : p ? E.createElement(p, null, E.Children.toArray(m)) : E.createElement(E.Fragment, null, m);
}
bp.displayName = "FormattedMessage";
var Fp = E.memo(bp, hw);
Fp.displayName = "MemoizedFormattedMessage";
Wr("formatDate");
Wr("formatTime");
Wr("formatNumber");
Wr("formatList");
Wr("formatDisplayName");
zp("formatDate");
zp("formatTime");
var ba = {};
ba.match = ww;
ba.parse = Up;
var vw = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, gw = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, mw = /^(?:(min|max)-)?(.+)/, yw = /(em|rem|px|cm|mm|in|pt|pc)?$/, Sw = /(dpi|dpcm|dppx)?$/;
function ww(e, t) {
  return Up(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var o = n.expressions.every(function(l) {
      var u = l.feature, a = l.modifier, s = l.value, f = t[u];
      if (!f)
        return !1;
      switch (u) {
        case "orientation":
        case "scan":
          return f.toLowerCase() === s.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          s = bc(s), f = bc(f);
          break;
        case "resolution":
          s = zc(s), f = zc(f);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          s = Ac(s), f = Ac(f);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          s = parseInt(s, 10) || 1, f = parseInt(f, 10) || 0;
          break;
      }
      switch (a) {
        case "min":
          return f >= s;
        case "max":
          return f <= s;
        default:
          return f === s;
      }
    });
    return o && !r || !o && r;
  });
}
function Up(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(vw), r = n[1], i = n[2], o = n[3] || "", l = {};
    return l.inverse = !!r && r.toLowerCase() === "not", l.type = i ? i.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], l.expressions = o.map(function(u) {
      var a = u.match(gw), s = a[1].toLowerCase().match(mw);
      return {
        modifier: s[1],
        feature: s[2],
        value: a[2]
      };
    }), l;
  });
}
function Ac(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function zc(e) {
  var t = parseFloat(e), n = String(e).match(Sw)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function bc(e) {
  var t = parseFloat(e), n = String(e).match(yw)[1];
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
var Ew = ba.match, Fc = typeof window < "u" ? window.matchMedia : null;
function Cw(e, t, n) {
  var r = this, i;
  Fc && !n && (i = Fc.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(u)) : (this.matches = Ew(e, t), this.media = e), this.addListener = o, this.removeListener = l, this.dispose = a;
  function o(s) {
    i && i.addListener(s);
  }
  function l(s) {
    i && i.removeListener(s);
  }
  function u(s) {
    r.matches = s.matches, r.media = s.media;
  }
  function a() {
    i && i.removeListener(u);
  }
}
function kw(e, t, n) {
  return new Cw(e, t, n);
}
var Tw = kw;
const Ow = /* @__PURE__ */ Un(Tw);
var Dw = /[A-Z]/g, xw = /^ms-/, wl = {};
function _w(e) {
  return "-" + e.toLowerCase();
}
function Hp(e) {
  if (wl.hasOwnProperty(e))
    return wl[e];
  var t = e.replace(Dw, _w);
  return wl[e] = xw.test(t) ? "-" + t : t;
}
function Pw(e, t) {
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
const ye = N.oneOfType([N.string, N.number]), Vp = {
  all: N.bool,
  grid: N.bool,
  aural: N.bool,
  braille: N.bool,
  handheld: N.bool,
  print: N.bool,
  projection: N.bool,
  screen: N.bool,
  tty: N.bool,
  tv: N.bool,
  embossed: N.bool
}, Iw = {
  orientation: N.oneOf(["portrait", "landscape"]),
  scan: N.oneOf(["progressive", "interlace"]),
  aspectRatio: N.string,
  deviceAspectRatio: N.string,
  height: ye,
  deviceHeight: ye,
  width: ye,
  deviceWidth: ye,
  color: N.bool,
  colorIndex: N.bool,
  monochrome: N.bool,
  resolution: ye,
  type: Object.keys(Vp)
}, { type: o1, ...Nw } = Iw, Rw = {
  minAspectRatio: N.string,
  maxAspectRatio: N.string,
  minDeviceAspectRatio: N.string,
  maxDeviceAspectRatio: N.string,
  minHeight: ye,
  maxHeight: ye,
  minDeviceHeight: ye,
  maxDeviceHeight: ye,
  minWidth: ye,
  maxWidth: ye,
  minDeviceWidth: ye,
  maxDeviceWidth: ye,
  minColor: N.number,
  maxColor: N.number,
  minColorIndex: N.number,
  maxColorIndex: N.number,
  minMonochrome: N.number,
  maxMonochrome: N.number,
  minResolution: ye,
  maxResolution: ye,
  ...Nw
}, Mw = { ...Vp, ...Rw };
var Lw = {
  all: Mw
};
const $w = (e) => `not ${e}`, jw = (e, t) => {
  const n = Hp(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? $w(n) : `(${n}: ${t})`;
}, Aw = (e) => e.join(" and "), zw = (e) => {
  const t = [];
  return Object.keys(Lw.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(jw(n, r));
  }), Aw(t);
}, bw = E.createContext(void 0), Fw = (e) => e.query || zw(e), Uc = (e) => e ? Object.keys(e).reduce((n, r) => (n[Hp(r)] = e[r], n), {}) : void 0, Bp = () => {
  const e = E.useRef(!1);
  return E.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, Uw = (e) => {
  const t = E.useContext(bw), n = () => Uc(e) || Uc(t), [r, i] = E.useState(n);
  return E.useEffect(() => {
    const o = n();
    Pw(r, o) || i(o);
  }, [e, t]), r;
}, Hw = (e) => {
  const t = () => Fw(e), [n, r] = E.useState(t);
  return E.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, Vw = (e, t) => {
  const n = () => Ow(e, t || {}, !!t), [r, i] = E.useState(n), o = Bp();
  return E.useEffect(() => {
    if (o) {
      const l = n();
      return i(l), () => {
        l && l.dispose();
      };
    }
  }, [e, t]), r;
}, Bw = (e) => {
  const [t, n] = E.useState(e.matches);
  return E.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, Ww = (e, t, n) => {
  const r = Uw(t), i = Hw(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const o = Vw(i, r), l = Bw(o);
  return Bp(), E.useEffect(() => {
  }, [l]), E.useEffect(() => () => {
    o && o.dispose();
  }, []), l;
}, Qw = "576px", Kw = {
  sm: Qw
}, {
  sm: Xw
} = Kw, Gw = {
  extraSmall: {
    maxWidth: parseFloat(Xw) || 575.98
  }
};
function xu({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ P.createElement(e, {
    ...r,
    className: Qe(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function Yw() {
  return /* @__PURE__ */ P.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
xu.Spacer = Yw;
const Fa = /* @__PURE__ */ E.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: o,
  stacked: l = !1,
  show: u = !0,
  ...a
}, s) => {
  const [f, p] = E.useState(l), v = Ww({
    maxWidth: Gw.extraSmall.maxWidth
  }), g = "sm";
  E.useEffect(() => {
    p(v ? !0 : l);
  }, [v, l]);
  const m = E.useCallback((y) => {
    const I = {
      size: g,
      key: y.props.children
    };
    return /* @__PURE__ */ E.cloneElement(y, I);
  }, []);
  return /* @__PURE__ */ P.createElement(sn, {
    ...a,
    className: Qe("alert-content", a.className),
    show: u,
    ref: s
  }, t && /* @__PURE__ */ P.createElement(wu, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ P.createElement("div", {
    className: Qe({
      "pgn__alert-message-wrapper": !f,
      "pgn__alert-message-wrapper-stacked": f
    })
  }, /* @__PURE__ */ P.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ P.createElement(xu, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ P.createElement(xu.Spacer, null), r && /* @__PURE__ */ P.createElement(Pp, {
    size: g,
    variant: "tertiary",
    onClick: i
  }, o || /* @__PURE__ */ P.createElement(Fp, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(m))));
}), Wp = Mp("h4");
Wp.displayName = "DivStyledAsH4";
function qw({
  as: e = Wp,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ P.createElement(sn.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function Zw({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ P.createElement(sn.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Fa.Heading = qw;
Fa.Link = Zw;
function Jw() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function El(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Jw()
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
const Qp = ({
  item: e,
  onRemove: t,
  showRemoveButton: n = !1,
  isCorrect: r,
  disabled: i = !1
}) => {
  const [{ isDragging: o }, l] = h0(() => ({
    type: "SORTABLE_ITEM",
    item: { id: e.id, type: "SORTABLE_ITEM", item: e },
    canDrag: !i,
    collect: (s) => ({
      isDragging: !!s.isDragging()
    })
  }), [e, i]), u = () => {
    switch (e.type) {
      case "text":
        return /* @__PURE__ */ _.jsx("span", { className: "item-text-content", children: e.content });
      case "image":
        return /* @__PURE__ */ _.jsx(
          "img",
          {
            src: e.content,
            alt: "Sortable item",
            className: "item-image-content"
          }
        );
      case "html":
        return /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "item-html-content",
            dangerouslySetInnerHTML: { __html: e.content }
          }
        );
      default:
        return /* @__PURE__ */ _.jsx("span", { children: e.content });
    }
  }, a = () => {
    const s = ["draggable-item", `item-type-${e.type}`];
    return o && s.push("dragging"), i && s.push("disabled"), r === !0 && s.push("item-correct"), r === !1 && s.push("item-incorrect"), s.join(" ");
  };
  return /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: l,
      className: a(),
      style: {
        opacity: o ? 0.5 : 1,
        cursor: i ? "not-allowed" : "move"
      },
      children: [
        /* @__PURE__ */ _.jsx("div", { className: "item-content", children: u() }),
        n && t && /* @__PURE__ */ _.jsx(
          "button",
          {
            type: "button",
            className: "item-remove-button",
            onClick: t,
            "aria-label": "Remove item from bin",
            children: "×"
          }
        ),
        r === !0 && /* @__PURE__ */ _.jsx("span", { className: "item-feedback-icon correct-icon", "aria-label": "Correct", children: "✓" }),
        r === !1 && /* @__PURE__ */ _.jsx("span", { className: "item-feedback-icon incorrect-icon", "aria-label": "Incorrect", children: "✗" })
      ]
    }
  );
}, e1 = ({
  bin: e,
  items: t,
  allItems: n,
  capacity: r,
  onItemPlacement: i,
  itemCorrectness: o,
  showAnswer: l,
  correctAnswers: u,
  disabled: a = !1
}) => {
  const [{ isOver: s, canDrop: f }, p] = I0(() => ({
    accept: "SORTABLE_ITEM",
    drop: (g) => {
      a || i(g.item.id, e.id);
    },
    canDrop: () => !r.isFull && !a,
    collect: (g) => ({
      isOver: !!g.isOver(),
      canDrop: !!g.canDrop()
    })
  }), [a, r.isFull, i, e.id]), v = () => {
    const g = ["bin-zone"];
    return s && f && g.push("bin-drag-over"), s && !f && g.push("bin-drag-over-full"), r.isFull && g.push("bin-full"), r.isNearFull && g.push("bin-near-full"), g.join(" ");
  };
  return /* @__PURE__ */ _.jsxs("div", { ref: p, className: v(), children: [
    /* @__PURE__ */ _.jsxs("div", { className: "bin-header", children: [
      /* @__PURE__ */ _.jsx("h4", { className: "bin-label", children: e.label }),
      e.description && /* @__PURE__ */ _.jsx("p", { className: "bin-description", children: e.description })
    ] }),
    /* @__PURE__ */ _.jsx("div", { className: "bin-items", children: t.length === 0 ? /* @__PURE__ */ _.jsx("div", { className: "bin-empty-state", children: s && f ? "Drop here" : "Drag items here" }) : t.map((g) => {
      const m = o[g.id];
      return /* @__PURE__ */ _.jsx(
        Qp,
        {
          item: g,
          onRemove: () => i(g.id, null),
          showRemoveButton: !a,
          isCorrect: m,
          disabled: a
        },
        g.id
      );
    }) }),
    l && u && /* @__PURE__ */ _.jsxs("div", { className: "bin-answer-indicator", children: [
      /* @__PURE__ */ _.jsx("strong", { children: "Correct answers:" }),
      Object.entries(u).filter(([g, m]) => m === e.id).map(([g]) => {
        const m = n.find((y) => y.id === g);
        return m ? /* @__PURE__ */ _.jsx("div", { className: "answer-item-label", children: m.type === "text" ? m.content : `Item ${g}` }, g) : null;
      })
    ] })
  ] });
}, t1 = ({
  items: e,
  onItemPlacement: t
}) => e.length === 0 ? null : /* @__PURE__ */ _.jsxs("div", { className: "items-source-zone", children: [
  /* @__PURE__ */ _.jsxs("div", { className: "source-header", children: [
    /* @__PURE__ */ _.jsx("h4", { className: "source-label", children: "Items to Sort" }),
    /* @__PURE__ */ _.jsx("p", { className: "source-description", children: "Drag these items into the appropriate categories" })
  ] }),
  /* @__PURE__ */ _.jsx("div", { className: "source-items", children: e.map((n) => /* @__PURE__ */ _.jsx(
    Qp,
    {
      item: n,
      showRemoveButton: !1
    },
    n.id
  )) })
] }), n1 = ({
  runtime: e,
  displayName: t,
  instructions: n,
  bins: r,
  items: i,
  studentPlacements: o,
  currentScore: l,
  maxScore: u,
  attemptsRemaining: a,
  gradingMode: s,
  showCorrectAnswers: f,
  feedbackMode: p,
  lastSubmissionResult: v,
  isGraded: g
}) => {
  const [m, y] = E.useState(o), [I, d] = E.useState(l), [c, h] = E.useState(!1), [S, C] = E.useState(
    v || null
  ), [k, T] = E.useState(!1), [O, H] = E.useState(null), [L, me] = E.useState(!1), [Bt, lt] = E.useState(null), [Qn, _e] = E.useState(null), Kn = p === "immediate" || k, Et = E.useCallback(($) => typeof $ == "string" ? $ : $.binId, []), D = E.useCallback(($) => {
    const ee = m[$];
    if (ee && typeof ee == "object" && "correct" in ee)
      return ee.correct;
  }, [m]), R = E.useCallback(($) => {
    const ee = r.find((bo) => bo.id === $);
    if (!ee) return { current: 0, max: 0, isFull: !1, isNearFull: !1 };
    const Q = Object.values(m).filter((bo) => Et(bo) === $).length, te = ee.max_capacity, st = te > 0 && Q >= te, Gp = te > 0 && Q >= te - 1;
    return { current: Q, max: te, isFull: st, isNearFull: Gp };
  }, [m, r, Et]), j = E.useCallback(($) => Object.entries(m).filter(([Q, te]) => Et(te) === $).map(([Q]) => Q).map((Q) => i.find((te) => te.id === Q)).filter((Q) => Q !== void 0), [m, i, Et]), X = E.useCallback(() => {
    const $ = Object.keys(m);
    return i.filter((ee) => !$.includes(ee.id));
  }, [m, i]), J = E.useCallback(async ($, ee) => {
    if (p === "on_submit") {
      y((Q) => {
        const te = { ...Q };
        return ee === null ? delete te[$] : te[$] = { binId: ee, correct: !1 }, te;
      }), C(null), H(null), _e(null);
      return;
    }
    h(!0), _e(null);
    try {
      const Q = await El(
        e,
        "submit_item",
        { itemId: $, binId: ee }
      );
      Q.success ? (y((te) => {
        const st = { ...te };
        return ee === null ? delete st[$] : st[$] = {
          binId: ee,
          correct: Q.correct
        }, st;
      }), d(Q.score)) : _e(Q.error || "An error occurred. Please try again.");
    } catch (Q) {
      _e("An error occurred. Please try again."), console.error("Immediate feedback error:", Q);
    } finally {
      h(!1);
    }
  }, [e, p]), cn = async () => {
    if (Object.keys(m).length < i.length) {
      _e("Please place all items into bins before submitting.");
      return;
    }
    h(!0), _e(null);
    try {
      const $ = await El(
        e,
        "submit_placements",
        { placements: m }
      );
      if ($.success) {
        const ee = {};
        Object.entries($.results).forEach(([Q, te]) => {
          ee[Q] = {
            binId: te.binId,
            correct: te.correct
          };
        }), y(ee), d($.score), T(!0), H($), C(null);
      } else
        _e($.error || "Submission failed. Please try again.");
    } catch ($) {
      _e("An error occurred while submitting. Please try again."), console.error("Submission error:", $);
    } finally {
      h(!1);
    }
  }, ut = E.useCallback(() => {
    y({}), T(!1), H(null), C(null), me(!1), lt(null), _e(null);
  }, []), Xn = E.useCallback(async () => {
    if (L) {
      me(!1), lt(null);
      return;
    }
    try {
      const $ = await El(e, "show_answer", {});
      $.success ? (lt($.correctAnswers), me(!0)) : _e($.error || "Failed to load answers.");
    } catch ($) {
      _e("An error occurred while loading answers."), console.error("Show answer error:", $);
    }
  }, [e, L]), at = a === null || a > 0, fn = Object.keys(m).length === i.length, zo = i.length, Ua = Object.values(m).filter(($) => typeof $ == "object" && "correct" in $ ? $.correct === !0 : !1).length, Kp = u > 0 ? I / u * 100 : 0, Xp = Ua === zo && zo > 0;
  return /* @__PURE__ */ _.jsx(ty, { backend: iS, children: /* @__PURE__ */ _.jsxs("div", { className: "sort-into-bins-student-view", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "problem-header", children: [
      /* @__PURE__ */ _.jsx("h3", { className: "problem-title", children: t }),
      /* @__PURE__ */ _.jsxs("div", { className: "problem-points", children: [
        u.toFixed(u % 1 === 0 ? 0 : 1),
        "/",
        u.toFixed(u % 1 === 0 ? 0 : 1),
        " point",
        u !== 1 ? "s" : "",
        " (",
        g ? "graded" : "ungraded",
        ")"
      ] })
    ] }),
    n && /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "problem-question",
        dangerouslySetInnerHTML: { __html: n }
      }
    ),
    (Qn || a === 0) && /* @__PURE__ */ _.jsx(Fa, { variant: "danger", className: "mb-3", children: Qn || (a === 0 ? "Maximum attempts exceeded" : null) }),
    p === "immediate" && /* @__PURE__ */ _.jsxs("div", { className: `score-display ${Xp ? "score-correct" : "score-incorrect"}`, children: [
      /* @__PURE__ */ _.jsx("strong", { children: "Current Score:" }),
      " ",
      I.toFixed(2),
      " / ",
      u.toFixed(2),
      " ",
      "(",
      Kp.toFixed(0),
      "% - ",
      Ua,
      " of ",
      zo,
      " correct)"
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "sorting-interface", children: [
      /* @__PURE__ */ _.jsx(
        t1,
        {
          items: X(),
          onItemPlacement: J
        }
      ),
      /* @__PURE__ */ _.jsx("div", { className: "bins-grid", children: r.map(($) => {
        const ee = R($.id), Q = j($.id), te = {};
        return Q.forEach((st) => {
          te[st.id] = Kn ? D(st.id) : void 0;
        }), /* @__PURE__ */ _.jsx(
          e1,
          {
            bin: $,
            items: Q,
            allItems: i,
            capacity: ee,
            onItemPlacement: J,
            itemCorrectness: te,
            showAnswer: L,
            correctAnswers: Bt,
            disabled: c || p === "on_submit" && k
          },
          $.id
        );
      }) })
    ] }),
    p === "on_submit" && /* @__PURE__ */ _.jsxs("div", { className: "problem-controls", children: [
      k && /* @__PURE__ */ _.jsxs("div", { className: "problem-action-buttons-wrapper", children: [
        /* @__PURE__ */ _.jsx("div", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ _.jsx(
          "button",
          {
            className: "problem-action-btn btn-link btn-small",
            onClick: ut,
            children: "Reset"
          }
        ) }),
        /* @__PURE__ */ _.jsx("div", { className: "problem-action-button-wrapper", children: /* @__PURE__ */ _.jsx(
          "button",
          {
            className: "problem-action-btn btn-link btn-small",
            onClick: Xn,
            children: L ? "Hide Answer" : "Show Answer"
          }
        ) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "submit-attempt-container", children: [
        /* @__PURE__ */ _.jsx(
          Pp,
          {
            variant: "primary",
            onClick: cn,
            disabled: !at || !fn || c || k,
            className: "submit btn-brand",
            children: c ? "Submitting..." : "Submit"
          }
        ),
        k && O && /* @__PURE__ */ _.jsxs("div", { className: "submission-feedback", children: [
          /* @__PURE__ */ _.jsxs("div", { className: `notification notification-${O.allCorrect ? "correct" : "incorrect"}`, children: [
            /* @__PURE__ */ _.jsx("div", { className: "notification-icon", children: O.allCorrect ? "✓" : "✗" }),
            /* @__PURE__ */ _.jsx("div", { className: "notification-content", children: /* @__PURE__ */ _.jsxs("p", { children: [
              O.allCorrect ? "Correct" : "Incorrect",
              "(",
              O.score.toFixed(2),
              "/",
              O.maxScore.toFixed(2),
              " point",
              O.maxScore !== 1 ? "s" : "",
              ")"
            ] }) })
          ] }),
          O.explanation && /* @__PURE__ */ _.jsxs("div", { className: "notification notification-explanation", children: [
            /* @__PURE__ */ _.jsx("div", { className: "notification-icon", children: "📋" }),
            /* @__PURE__ */ _.jsx("div", { className: "notification-content", children: /* @__PURE__ */ _.jsx("div", { dangerouslySetInnerHTML: { __html: O.explanation } }) })
          ] }),
          L && /* @__PURE__ */ _.jsxs("div", { className: "notification notification-answer", children: [
            /* @__PURE__ */ _.jsx("div", { className: "notification-icon", children: "ℹ" }),
            /* @__PURE__ */ _.jsx("div", { className: "notification-content", children: /* @__PURE__ */ _.jsx("p", { children: "Correct answers are shown below in each category" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}, l1 = (e, t) => {
  if (!e) {
    console.error("No element provided to renderBlock");
    return;
  }
  np(e).render(
    /* @__PURE__ */ _.jsx(E.StrictMode, { children: /* @__PURE__ */ _.jsx(
      n1,
      {
        runtime: t.runtime,
        displayName: t.displayName,
        instructions: t.instructions,
        bins: t.bins,
        items: t.items,
        studentPlacements: t.studentPlacements,
        currentScore: t.currentScore,
        maxScore: t.maxScore,
        attemptsRemaining: t.attemptsRemaining,
        gradingMode: t.gradingMode,
        showCorrectAnswers: t.showCorrectAnswers,
        feedbackMode: t.feedbackMode,
        lastSubmissionResult: t.lastSubmissionResult,
        isGraded: t.isGraded
      }
    ) })
  );
};
export {
  l1 as renderBlock
};
//# sourceMappingURL=student-ui.js.map
