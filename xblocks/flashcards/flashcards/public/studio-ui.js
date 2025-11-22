var zx = Object.defineProperty;
var Ux = (e, t, n) => t in e ? zx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cp = (e, t, n) => Ux(e, typeof t != "symbol" ? t + "" : t, n);
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uh = { exports: {} }, Cs = {}, Gh = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa = Symbol.for("react.element"), Gx = Symbol.for("react.portal"), Wx = Symbol.for("react.fragment"), Kx = Symbol.for("react.strict_mode"), qx = Symbol.for("react.profiler"), Xx = Symbol.for("react.provider"), Yx = Symbol.for("react.context"), Qx = Symbol.for("react.forward_ref"), Zx = Symbol.for("react.suspense"), Jx = Symbol.for("react.memo"), eE = Symbol.for("react.lazy"), dp = Symbol.iterator;
function tE(e) {
  return e === null || typeof e != "object" ? null : (e = dp && e[dp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Kh = Object.assign, qh = {};
function _i(e, t, n) {
  this.props = e, this.context = t, this.refs = qh, this.updater = n || Wh;
}
_i.prototype.isReactComponent = {};
_i.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_i.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xh() {
}
Xh.prototype = _i.prototype;
function Xc(e, t, n) {
  this.props = e, this.context = t, this.refs = qh, this.updater = n || Wh;
}
var Yc = Xc.prototype = new Xh();
Yc.constructor = Xc;
Kh(Yc, _i.prototype);
Yc.isPureReactComponent = !0;
var fp = Array.isArray, Yh = Object.prototype.hasOwnProperty, Qc = { current: null }, Qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zh(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Yh.call(t, r) && !Qh.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: Fa, type: e, key: a, ref: o, props: i, _owner: Qc.current };
}
function nE(e, t) {
  return { $$typeof: Fa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fa;
}
function rE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pp = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rE("" + e.key) : t.toString(36);
}
function _o(e, t, n, r, i) {
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
        case Fa:
        case Gx:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Al(o, 0) : r, fp(i) ? (n = "", e != null && (n = e.replace(pp, "$&/") + "/"), _o(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Zc(i) && (i = nE(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(pp, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", fp(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Al(a, s);
    o += _o(a, t, n, l, i);
  }
  else if (l = tE(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Al(a, s++), o += _o(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Qa(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return _o(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function iE(e) {
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
var tt = { current: null }, To = { transition: null }, aE = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: To, ReactCurrentOwner: Qc };
function Jh() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = { map: Qa, forEach: function(e, t, n) {
  Qa(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qa(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qa(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ee.Component = _i;
ee.Fragment = Wx;
ee.Profiler = qx;
ee.PureComponent = Xc;
ee.StrictMode = Kx;
ee.Suspense = Zx;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aE;
ee.act = Jh;
ee.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Kh({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Qc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) Yh.call(t, l) && !Qh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Fa, type: e.type, key: i, ref: a, props: r, _owner: o };
};
ee.createContext = function(e) {
  return e = { $$typeof: Yx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Xx, _context: e }, e.Consumer = e;
};
ee.createElement = Zh;
ee.createFactory = function(e) {
  var t = Zh.bind(null, e);
  return t.type = e, t;
};
ee.createRef = function() {
  return { current: null };
};
ee.forwardRef = function(e) {
  return { $$typeof: Qx, render: e };
};
ee.isValidElement = Zc;
ee.lazy = function(e) {
  return { $$typeof: eE, _payload: { _status: -1, _result: e }, _init: iE };
};
ee.memo = function(e, t) {
  return { $$typeof: Jx, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function(e) {
  var t = To.transition;
  To.transition = {};
  try {
    e();
  } finally {
    To.transition = t;
  }
};
ee.unstable_act = Jh;
ee.useCallback = function(e, t) {
  return tt.current.useCallback(e, t);
};
ee.useContext = function(e) {
  return tt.current.useContext(e);
};
ee.useDebugValue = function() {
};
ee.useDeferredValue = function(e) {
  return tt.current.useDeferredValue(e);
};
ee.useEffect = function(e, t) {
  return tt.current.useEffect(e, t);
};
ee.useId = function() {
  return tt.current.useId();
};
ee.useImperativeHandle = function(e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function(e, t) {
  return tt.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function(e, t) {
  return tt.current.useLayoutEffect(e, t);
};
ee.useMemo = function(e, t) {
  return tt.current.useMemo(e, t);
};
ee.useReducer = function(e, t, n) {
  return tt.current.useReducer(e, t, n);
};
ee.useRef = function(e) {
  return tt.current.useRef(e);
};
ee.useState = function(e) {
  return tt.current.useState(e);
};
ee.useSyncExternalStore = function(e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function() {
  return tt.current.useTransition();
};
ee.version = "18.3.1";
Gh.exports = ee;
var E = Gh.exports;
const x = /* @__PURE__ */ Si(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oE = E, sE = Symbol.for("react.element"), lE = Symbol.for("react.fragment"), uE = Object.prototype.hasOwnProperty, cE = oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dE = { key: !0, ref: !0, __self: !0, __source: !0 };
function ev(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) uE.call(t, r) && !dE.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: sE, type: e, key: a, ref: o, props: i, _owner: cE.current };
}
Cs.Fragment = lE;
Cs.jsx = ev;
Cs.jsxs = ev;
Uh.exports = Cs;
var F = Uh.exports, tv = { exports: {} }, wt = {}, nv = { exports: {} }, rv = {};
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
  function t(R, D) {
    var $ = R.length;
    R.push(D);
    e: for (; 0 < $; ) {
      var q = $ - 1 >>> 1, U = R[q];
      if (0 < i(U, D)) R[q] = D, R[$] = U, $ = q;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var D = R[0], $ = R.pop();
    if ($ !== D) {
      R[0] = $;
      e: for (var q = 0, U = R.length, Te = U >>> 1; q < Te; ) {
        var oe = 2 * (q + 1) - 1, Ne = R[oe], pe = oe + 1, He = R[pe];
        if (0 > i(Ne, $)) pe < U && 0 > i(He, Ne) ? (R[q] = He, R[pe] = $, q = pe) : (R[q] = Ne, R[oe] = $, q = oe);
        else if (pe < U && 0 > i(He, $)) R[q] = He, R[pe] = $, q = pe;
        else break e;
      }
    }
    return D;
  }
  function i(R, D) {
    var $ = R.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : R.id - D.id;
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
  var l = [], u = [], c = 1, f = null, d = 3, v = !1, w = !1, g = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= R) r(u), D.sortIndex = D.expirationTime, t(l, D);
      else break;
      D = n(u);
    }
  }
  function k(R) {
    if (g = !1, y(R), !w) if (n(l) !== null) w = !0, Z(C);
    else {
      var D = n(u);
      D !== null && Y(k, D.startTime - R);
    }
  }
  function C(R, D) {
    w = !1, g && (g = !1, m(T), T = -1), v = !0;
    var $ = d;
    try {
      for (y(D), f = n(l); f !== null && (!(f.expirationTime > D) || R && !B()); ) {
        var q = f.callback;
        if (typeof q == "function") {
          f.callback = null, d = f.priorityLevel;
          var U = q(f.expirationTime <= D);
          D = e.unstable_now(), typeof U == "function" ? f.callback = U : f === n(l) && r(l), y(D);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Te = !0;
      else {
        var oe = n(u);
        oe !== null && Y(k, oe.startTime - D), Te = !1;
      }
      return Te;
    } finally {
      f = null, d = $, v = !1;
    }
  }
  var S = !1, _ = null, T = -1, P = 5, N = -1;
  function B() {
    return !(e.unstable_now() - N < P);
  }
  function A() {
    if (_ !== null) {
      var R = e.unstable_now();
      N = R;
      var D = !0;
      try {
        D = _(!0, R);
      } finally {
        D ? I() : (S = !1, _ = null);
      }
    } else S = !1;
  }
  var I;
  if (typeof h == "function") I = function() {
    h(A);
  };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(), W = V.port2;
    V.port1.onmessage = A, I = function() {
      W.postMessage(null);
    };
  } else I = function() {
    b(A, 0);
  };
  function Z(R) {
    _ = R, S || (S = !0, I());
  }
  function Y(R, D) {
    T = b(function() {
      R(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    w || v || (w = !0, Z(C));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = d;
    }
    var $ = d;
    d = D;
    try {
      return R();
    } finally {
      d = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, D) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var $ = d;
    d = R;
    try {
      return D();
    } finally {
      d = $;
    }
  }, e.unstable_scheduleCallback = function(R, D, $) {
    var q = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? q + $ : q) : $ = q, R) {
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
    return U = $ + U, R = { id: c++, callback: D, priorityLevel: R, startTime: $, expirationTime: U, sortIndex: -1 }, $ > q ? (R.sortIndex = $, t(u, R), n(l) === null && R === n(u) && (g ? (m(T), T = -1) : g = !0, Y(k, $ - q))) : (R.sortIndex = U, t(l, R), w || v || (w = !0, Z(C))), R;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(R) {
    var D = d;
    return function() {
      var $ = d;
      d = D;
      try {
        return R.apply(this, arguments);
      } finally {
        d = $;
      }
    };
  };
})(rv);
nv.exports = rv;
var fE = nv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pE = E, xt = fE;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var iv = /* @__PURE__ */ new Set(), oa = {};
function Tr(e, t) {
  ui(e, t), ui(e + "Capture", t);
}
function ui(e, t) {
  for (oa[e] = t, e = 0; e < t.length; e++) iv.add(t[e]);
}
var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cu = Object.prototype.hasOwnProperty, mE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mp = {}, hp = {};
function hE(e) {
  return Cu.call(hp, e) ? !0 : Cu.call(mp, e) ? !1 : mE.test(e) ? hp[e] = !0 : (mp[e] = !0, !1);
}
function vE(e, t, n, r) {
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
function gE(e, t, n, r) {
  if (t === null || typeof t > "u" || vE(e, t, n, r)) return !0;
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
function nt(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new nt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jc = /[\-:]([a-z])/g;
function ed(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jc,
    ed
  );
  je[t] = new nt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jc, ed);
  je[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jc, ed);
  je[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function td(e, t, n, r) {
  var i = je.hasOwnProperty(t) ? je[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gE(t, n, i, r) && (n = null), r || i === null ? hE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = pE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Za = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), Su = Symbol.for("react.profiler"), av = Symbol.for("react.provider"), ov = Symbol.for("react.context"), rd = Symbol.for("react.forward_ref"), _u = Symbol.for("react.suspense"), Tu = Symbol.for("react.suspense_list"), id = Symbol.for("react.memo"), In = Symbol.for("react.lazy"), sv = Symbol.for("react.offscreen"), vp = Symbol.iterator;
function Ri(e) {
  return e === null || typeof e != "object" ? null : (e = vp && e[vp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ke = Object.assign, Il;
function zi(e) {
  if (Il === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Il = t && t[1] || "";
  }
  return `
` + Il + e;
}
var Pl = !1;
function Rl(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
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
    Pl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zi(e) : "";
}
function yE(e) {
  switch (e.tag) {
    case 5:
      return zi(e.type);
    case 16:
      return zi("Lazy");
    case 13:
      return zi("Suspense");
    case 19:
      return zi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rl(e.type, !1), e;
    case 11:
      return e = Rl(e.type.render, !1), e;
    case 1:
      return e = Rl(e.type, !0), e;
    default:
      return "";
  }
}
function Nu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $r:
      return "Fragment";
    case Vr:
      return "Portal";
    case Su:
      return "Profiler";
    case nd:
      return "StrictMode";
    case _u:
      return "Suspense";
    case Tu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ov:
      return (e.displayName || "Context") + ".Consumer";
    case av:
      return (e._context.displayName || "Context") + ".Provider";
    case rd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case id:
      return t = e.displayName || null, t !== null ? t : Nu(e.type) || "Memo";
    case In:
      t = e._payload, e = e._init;
      try {
        return Nu(e(t));
      } catch {
      }
  }
  return null;
}
function xE(e) {
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
      return Nu(t);
    case 8:
      return t === nd ? "StrictMode" : "Mode";
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
function Wn(e) {
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
function lv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function EE(e) {
  var t = lv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ja(e) {
  e._valueTracker || (e._valueTracker = EE(e));
}
function uv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = lv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function zo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Au(e, t) {
  var n = t.checked;
  return ke({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function gp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function cv(e, t) {
  t = t.checked, t != null && td(e, "checked", t, !1);
}
function Iu(e, t) {
  cv(e, t);
  var n = Wn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pu(e, t.type, Wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Pu(e, t, n) {
  (t !== "number" || zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ui = Array.isArray;
function ei(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (Ui(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wn(n) };
}
function dv(e, t) {
  var n = Wn(t.value), r = Wn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ep(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fv(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var eo, pv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (eo = eo || document.createElement("div"), eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = eo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function sa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xi = {
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
}, wE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xi).forEach(function(e) {
  wE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Xi[t] = Xi[e];
  });
});
function mv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xi.hasOwnProperty(e) && Xi[e] ? ("" + t).trim() : t + "px";
}
function hv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = mv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var bE = ke({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ou(e, t) {
  if (t) {
    if (bE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Du(e, t) {
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
var Mu = null;
function ad(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Lu = null, ti = null, ni = null;
function wp(e) {
  if (e = Ma(e)) {
    if (typeof Lu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = As(t), Lu(e.stateNode, e.type, t));
  }
}
function vv(e) {
  ti ? ni ? ni.push(e) : ni = [e] : ti = e;
}
function gv() {
  if (ti) {
    var e = ti, t = ni;
    if (ni = ti = null, wp(e), t) for (e = 0; e < t.length; e++) wp(t[e]);
  }
}
function yv(e, t) {
  return e(t);
}
function xv() {
}
var Fl = !1;
function Ev(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return yv(e, t, n);
  } finally {
    Fl = !1, (ti !== null || ni !== null) && (xv(), gv());
  }
}
function la(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = As(n);
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
var Bu = !1;
if (yn) try {
  var Fi = {};
  Object.defineProperty(Fi, "passive", { get: function() {
    Bu = !0;
  } }), window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
} catch {
  Bu = !1;
}
function kE(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yi = !1, Uo = null, Go = !1, ju = null, CE = { onError: function(e) {
  Yi = !0, Uo = e;
} };
function SE(e, t, n, r, i, a, o, s, l) {
  Yi = !1, Uo = null, kE.apply(CE, arguments);
}
function _E(e, t, n, r, i, a, o, s, l) {
  if (SE.apply(this, arguments), Yi) {
    if (Yi) {
      var u = Uo;
      Yi = !1, Uo = null;
    } else throw Error(O(198));
    Go || (Go = !0, ju = u);
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
function wv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bp(e) {
  if (Nr(e) !== e) throw Error(O(188));
}
function TE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nr(e), t === null) throw Error(O(188));
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
        if (a === n) return bp(i), e;
        if (a === r) return bp(i), t;
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
function bv(e) {
  return e = TE(e), e !== null ? kv(e) : null;
}
function kv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cv = xt.unstable_scheduleCallback, kp = xt.unstable_cancelCallback, NE = xt.unstable_shouldYield, AE = xt.unstable_requestPaint, _e = xt.unstable_now, IE = xt.unstable_getCurrentPriorityLevel, od = xt.unstable_ImmediatePriority, Sv = xt.unstable_UserBlockingPriority, Wo = xt.unstable_NormalPriority, PE = xt.unstable_LowPriority, _v = xt.unstable_IdlePriority, Ss = null, nn = null;
function RE(e) {
  if (nn && typeof nn.onCommitFiberRoot == "function") try {
    nn.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ut = Math.clz32 ? Math.clz32 : DE, FE = Math.log, OE = Math.LN2;
function DE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (FE(e) / OE | 0) | 0;
}
var to = 64, no = 4194304;
function Gi(e) {
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
    s !== 0 ? r = Gi(s) : (a &= o, a !== 0 && (r = Gi(a)));
  } else o = n & ~i, o !== 0 ? r = Gi(o) : a !== 0 && (r = Gi(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ut(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function ME(e, t) {
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
function LE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Ut(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = ME(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Hu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Tv() {
  var e = to;
  return to <<= 1, !(to & 4194240) && (to = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Oa(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ut(t), e[t] = n;
}
function BE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ut(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function sd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ut(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var se = 0;
function Nv(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Av, ld, Iv, Pv, Rv, Vu = !1, ro = [], Ln = null, Bn = null, jn = null, ua = /* @__PURE__ */ new Map(), ca = /* @__PURE__ */ new Map(), Fn = [], jE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ln = null;
      break;
    case "dragenter":
    case "dragleave":
      Bn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      ua.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ca.delete(t.pointerId);
  }
}
function Oi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Ma(t), t !== null && ld(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function HE(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ln = Oi(Ln, e, t, n, r, i), !0;
    case "dragenter":
      return Bn = Oi(Bn, e, t, n, r, i), !0;
    case "mouseover":
      return jn = Oi(jn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return ua.set(a, Oi(ua.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, ca.set(a, Oi(ca.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Fv(e) {
  var t = ur(e.target);
  if (t !== null) {
    var n = Nr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wv(n), t !== null) {
          e.blockedOn = t, Rv(e.priority, function() {
            Iv(n);
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
    var n = $u(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Mu = r, n.target.dispatchEvent(r), Mu = null;
    } else return t = Ma(n), t !== null && ld(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sp(e, t, n) {
  No(e) && n.delete(t);
}
function VE() {
  Vu = !1, Ln !== null && No(Ln) && (Ln = null), Bn !== null && No(Bn) && (Bn = null), jn !== null && No(jn) && (jn = null), ua.forEach(Sp), ca.forEach(Sp);
}
function Di(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Vu || (Vu = !0, xt.unstable_scheduleCallback(xt.unstable_NormalPriority, VE)));
}
function da(e) {
  function t(i) {
    return Di(i, e);
  }
  if (0 < ro.length) {
    Di(ro[0], e);
    for (var n = 1; n < ro.length; n++) {
      var r = ro[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ln !== null && Di(Ln, e), Bn !== null && Di(Bn, e), jn !== null && Di(jn, e), ua.forEach(t), ca.forEach(t), n = 0; n < Fn.length; n++) r = Fn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fn.length && (n = Fn[0], n.blockedOn === null); ) Fv(n), n.blockedOn === null && Fn.shift();
}
var ri = Sn.ReactCurrentBatchConfig, qo = !0;
function $E(e, t, n, r) {
  var i = se, a = ri.transition;
  ri.transition = null;
  try {
    se = 1, ud(e, t, n, r);
  } finally {
    se = i, ri.transition = a;
  }
}
function zE(e, t, n, r) {
  var i = se, a = ri.transition;
  ri.transition = null;
  try {
    se = 4, ud(e, t, n, r);
  } finally {
    se = i, ri.transition = a;
  }
}
function ud(e, t, n, r) {
  if (qo) {
    var i = $u(e, t, n, r);
    if (i === null) Ul(e, t, r, Xo, n), Cp(e, r);
    else if (HE(i, e, t, n, r)) r.stopPropagation();
    else if (Cp(e, r), t & 4 && -1 < jE.indexOf(e)) {
      for (; i !== null; ) {
        var a = Ma(i);
        if (a !== null && Av(a), a = $u(e, t, n, r), a === null && Ul(e, t, r, Xo, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Xo = null;
function $u(e, t, n, r) {
  if (Xo = null, e = ad(r), e = ur(e), e !== null) if (t = Nr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = wv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xo = e, null;
}
function Ov(e) {
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
      switch (IE()) {
        case od:
          return 1;
        case Sv:
          return 4;
        case Wo:
        case PE:
          return 16;
        case _v:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dn = null, cd = null, Ao = null;
function Dv() {
  if (Ao) return Ao;
  var e, t = cd, n = t.length, r, i = "value" in Dn ? Dn.value : Dn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return Ao = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Io(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function io() {
  return !0;
}
function _p() {
  return !1;
}
function bt(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? io : _p, this.isPropagationStopped = _p, this;
  }
  return ke(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = io);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = io);
  }, persist: function() {
  }, isPersistent: io }), t;
}
var Ti = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, dd = bt(Ti), Da = ke({}, Ti, { view: 0, detail: 0 }), UE = bt(Da), Dl, Ml, Mi, _s = ke({}, Da, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Dl = e.screenX - Mi.screenX, Ml = e.screenY - Mi.screenY) : Ml = Dl = 0, Mi = e), Dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ml;
} }), Tp = bt(_s), GE = ke({}, _s, { dataTransfer: 0 }), WE = bt(GE), KE = ke({}, Da, { relatedTarget: 0 }), Ll = bt(KE), qE = ke({}, Ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), XE = bt(qE), YE = ke({}, Ti, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), QE = bt(YE), ZE = ke({}, Ti, { data: 0 }), Np = bt(ZE), JE = {
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
}, ew = {
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
}, tw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tw[e]) ? !!t[e] : !1;
}
function fd() {
  return nw;
}
var rw = ke({}, Da, { key: function(e) {
  if (e.key) {
    var t = JE[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ew[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fd, charCode: function(e) {
  return e.type === "keypress" ? Io(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), iw = bt(rw), aw = ke({}, _s, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ap = bt(aw), ow = ke({}, Da, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fd }), sw = bt(ow), lw = ke({}, Ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uw = bt(lw), cw = ke({}, _s, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), dw = bt(cw), fw = [9, 13, 27, 32], pd = yn && "CompositionEvent" in window, Qi = null;
yn && "documentMode" in document && (Qi = document.documentMode);
var pw = yn && "TextEvent" in window && !Qi, Mv = yn && (!pd || Qi && 8 < Qi && 11 >= Qi), Ip = " ", Pp = !1;
function Lv(e, t) {
  switch (e) {
    case "keyup":
      return fw.indexOf(t.keyCode) !== -1;
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
function Bv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zr = !1;
function mw(e, t) {
  switch (e) {
    case "compositionend":
      return Bv(t);
    case "keypress":
      return t.which !== 32 ? null : (Pp = !0, Ip);
    case "textInput":
      return e = t.data, e === Ip && Pp ? null : e;
    default:
      return null;
  }
}
function hw(e, t) {
  if (zr) return e === "compositionend" || !pd && Lv(e, t) ? (e = Dv(), Ao = cd = Dn = null, zr = !1, e) : null;
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
      return Mv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vw[e.type] : t === "textarea";
}
function jv(e, t, n, r) {
  vv(r), t = Yo(t, "onChange"), 0 < t.length && (n = new dd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Zi = null, fa = null;
function gw(e) {
  Yv(e, 0);
}
function Ts(e) {
  var t = Wr(e);
  if (uv(t)) return e;
}
function yw(e, t) {
  if (e === "change") return t;
}
var Hv = !1;
if (yn) {
  var Bl;
  if (yn) {
    var jl = "oninput" in document;
    if (!jl) {
      var Fp = document.createElement("div");
      Fp.setAttribute("oninput", "return;"), jl = typeof Fp.oninput == "function";
    }
    Bl = jl;
  } else Bl = !1;
  Hv = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Op() {
  Zi && (Zi.detachEvent("onpropertychange", Vv), fa = Zi = null);
}
function Vv(e) {
  if (e.propertyName === "value" && Ts(fa)) {
    var t = [];
    jv(t, fa, e, ad(e)), Ev(gw, t);
  }
}
function xw(e, t, n) {
  e === "focusin" ? (Op(), Zi = t, fa = n, Zi.attachEvent("onpropertychange", Vv)) : e === "focusout" && Op();
}
function Ew(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ts(fa);
}
function ww(e, t) {
  if (e === "click") return Ts(t);
}
function bw(e, t) {
  if (e === "input" || e === "change") return Ts(t);
}
function kw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Wt = typeof Object.is == "function" ? Object.is : kw;
function pa(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Cu.call(t, i) || !Wt(e[i], t[i])) return !1;
  }
  return !0;
}
function Dp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mp(e, t) {
  var n = Dp(e);
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
    n = Dp(n);
  }
}
function $v(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $v(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function zv() {
  for (var e = window, t = zo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zo(e.document);
  }
  return t;
}
function md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Cw(e) {
  var t = zv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $v(n.ownerDocument.documentElement, n)) {
    if (r !== null && md(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Mp(n, a);
        var o = Mp(
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
var Sw = yn && "documentMode" in document && 11 >= document.documentMode, Ur = null, zu = null, Ji = null, Uu = !1;
function Lp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uu || Ur == null || Ur !== zo(r) || (r = Ur, "selectionStart" in r && md(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ji && pa(Ji, r) || (Ji = r, r = Yo(zu, "onSelect"), 0 < r.length && (t = new dd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ur)));
}
function ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Gr = { animationend: ao("Animation", "AnimationEnd"), animationiteration: ao("Animation", "AnimationIteration"), animationstart: ao("Animation", "AnimationStart"), transitionend: ao("Transition", "TransitionEnd") }, Hl = {}, Uv = {};
yn && (Uv = document.createElement("div").style, "AnimationEvent" in window || (delete Gr.animationend.animation, delete Gr.animationiteration.animation, delete Gr.animationstart.animation), "TransitionEvent" in window || delete Gr.transitionend.transition);
function Ns(e) {
  if (Hl[e]) return Hl[e];
  if (!Gr[e]) return e;
  var t = Gr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uv) return Hl[e] = t[n];
  return e;
}
var Gv = Ns("animationend"), Wv = Ns("animationiteration"), Kv = Ns("animationstart"), qv = Ns("transitionend"), Xv = /* @__PURE__ */ new Map(), Bp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qn(e, t) {
  Xv.set(e, t), Tr(t, [e]);
}
for (var Vl = 0; Vl < Bp.length; Vl++) {
  var $l = Bp[Vl], _w = $l.toLowerCase(), Tw = $l[0].toUpperCase() + $l.slice(1);
  Qn(_w, "on" + Tw);
}
Qn(Gv, "onAnimationEnd");
Qn(Wv, "onAnimationIteration");
Qn(Kv, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(qv, "onTransitionEnd");
ui("onMouseEnter", ["mouseout", "mouseover"]);
ui("onMouseLeave", ["mouseout", "mouseover"]);
ui("onPointerEnter", ["pointerout", "pointerover"]);
ui("onPointerLeave", ["pointerout", "pointerover"]);
Tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
function jp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _E(r, t, void 0, e), e.currentTarget = null;
}
function Yv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        jp(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        jp(i, s, u), a = l;
      }
    }
  }
  if (Go) throw e = ju, Go = !1, ju = null, e;
}
function he(e, t) {
  var n = t[Xu];
  n === void 0 && (n = t[Xu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Qv(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Qv(n, e, r, t);
}
var oo = "_reactListening" + Math.random().toString(36).slice(2);
function ma(e) {
  if (!e[oo]) {
    e[oo] = !0, iv.forEach(function(n) {
      n !== "selectionchange" && (Nw.has(n) || zl(n, !1, e), zl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || (t[oo] = !0, zl("selectionchange", !1, t));
  }
}
function Qv(e, t, n, r) {
  switch (Ov(t)) {
    case 1:
      var i = $E;
      break;
    case 4:
      i = zE;
      break;
    default:
      i = ud;
  }
  n = i.bind(null, t, n, e), i = void 0, !Bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, i) {
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
        if (o = ur(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Ev(function() {
    var u = a, c = ad(n), f = [];
    e: {
      var d = Xv.get(e);
      if (d !== void 0) {
        var v = dd, w = e;
        switch (e) {
          case "keypress":
            if (Io(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = iw;
            break;
          case "focusin":
            w = "focus", v = Ll;
            break;
          case "focusout":
            w = "blur", v = Ll;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ll;
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
            v = Tp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = WE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sw;
            break;
          case Gv:
          case Wv:
          case Kv:
            v = XE;
            break;
          case qv:
            v = uw;
            break;
          case "scroll":
            v = UE;
            break;
          case "wheel":
            v = dw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = QE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ap;
        }
        var g = (t & 4) !== 0, b = !g && e === "scroll", m = g ? d !== null ? d + "Capture" : null : d;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var k = y.stateNode;
          if (y.tag === 5 && k !== null && (y = k, m !== null && (k = la(h, m), k != null && g.push(ha(h, k, y)))), b) break;
          h = h.return;
        }
        0 < g.length && (d = new v(d, w, null, n, c), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", d && n !== Mu && (w = n.relatedTarget || n.fromElement) && (ur(w) || w[xn])) break e;
        if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (w = n.relatedTarget || n.toElement, v = u, w = w ? ur(w) : null, w !== null && (b = Nr(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (v = null, w = u), v !== w)) {
          if (g = Tp, k = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ap, k = "onPointerLeave", m = "onPointerEnter", h = "pointer"), b = v == null ? d : Wr(v), y = w == null ? d : Wr(w), d = new g(k, h + "leave", v, n, c), d.target = b, d.relatedTarget = y, k = null, ur(c) === u && (g = new g(m, h + "enter", w, n, c), g.target = y, g.relatedTarget = b, k = g), b = k, v && w) t: {
            for (g = v, m = w, h = 0, y = g; y; y = Mr(y)) h++;
            for (y = 0, k = m; k; k = Mr(k)) y++;
            for (; 0 < h - y; ) g = Mr(g), h--;
            for (; 0 < y - h; ) m = Mr(m), y--;
            for (; h--; ) {
              if (g === m || m !== null && g === m.alternate) break t;
              g = Mr(g), m = Mr(m);
            }
            g = null;
          }
          else g = null;
          v !== null && Hp(f, d, v, g, !1), w !== null && b !== null && Hp(f, b, w, g, !0);
        }
      }
      e: {
        if (d = u ? Wr(u) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file") var C = yw;
        else if (Rp(d)) if (Hv) C = bw;
        else {
          C = Ew;
          var S = xw;
        }
        else (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = ww);
        if (C && (C = C(e, u))) {
          jv(f, C, n, c);
          break e;
        }
        S && S(e, d, u), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Pu(d, "number", d.value);
      }
      switch (S = u ? Wr(u) : window, e) {
        case "focusin":
          (Rp(S) || S.contentEditable === "true") && (Ur = S, zu = u, Ji = null);
          break;
        case "focusout":
          Ji = zu = Ur = null;
          break;
        case "mousedown":
          Uu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Uu = !1, Lp(f, n, c);
          break;
        case "selectionchange":
          if (Sw) break;
        case "keydown":
        case "keyup":
          Lp(f, n, c);
      }
      var _;
      if (pd) e: {
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
      else zr ? Lv(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Mv && n.locale !== "ko" && (zr || T !== "onCompositionStart" ? T === "onCompositionEnd" && zr && (_ = Dv()) : (Dn = c, cd = "value" in Dn ? Dn.value : Dn.textContent, zr = !0)), S = Yo(u, T), 0 < S.length && (T = new Np(T, e, null, n, c), f.push({ event: T, listeners: S }), _ ? T.data = _ : (_ = Bv(n), _ !== null && (T.data = _)))), (_ = pw ? mw(e, n) : hw(e, n)) && (u = Yo(u, "onBeforeInput"), 0 < u.length && (c = new Np("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = _));
    }
    Yv(f, t);
  });
}
function ha(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = la(e, n), a != null && r.unshift(ha(e, a, i)), a = la(e, t), a != null && r.push(ha(e, a, i))), e = e.return;
  }
  return r;
}
function Mr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hp(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = la(n, a), l != null && o.unshift(ha(n, l, s))) : i || (l = la(n, a), l != null && o.push(ha(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Aw = /\r\n?/g, Iw = /\u0000|\uFFFD/g;
function Vp(e) {
  return (typeof e == "string" ? e : "" + e).replace(Aw, `
`).replace(Iw, "");
}
function so(e, t, n) {
  if (t = Vp(t), Vp(e) !== t && n) throw Error(O(425));
}
function Qo() {
}
var Gu = null, Wu = null;
function Ku(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qu = typeof setTimeout == "function" ? setTimeout : void 0, Pw = typeof clearTimeout == "function" ? clearTimeout : void 0, $p = typeof Promise == "function" ? Promise : void 0, Rw = typeof queueMicrotask == "function" ? queueMicrotask : typeof $p < "u" ? function(e) {
  return $p.resolve(null).then(e).catch(Fw);
} : qu;
function Fw(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), da(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  da(t);
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
function zp(e) {
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
var Ni = Math.random().toString(36).slice(2), en = "__reactFiber$" + Ni, va = "__reactProps$" + Ni, xn = "__reactContainer$" + Ni, Xu = "__reactEvents$" + Ni, Ow = "__reactListeners$" + Ni, Dw = "__reactHandles$" + Ni;
function ur(e) {
  var t = e[en];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[xn] || n[en]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zp(e); e !== null; ) {
        if (n = e[en]) return n;
        e = zp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ma(e) {
  return e = e[en] || e[xn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function As(e) {
  return e[va] || null;
}
var Yu = [], Kr = -1;
function Zn(e) {
  return { current: e };
}
function ge(e) {
  0 > Kr || (e.current = Yu[Kr], Yu[Kr] = null, Kr--);
}
function fe(e, t) {
  Kr++, Yu[Kr] = e.current, e.current = t;
}
var Kn = {}, qe = Zn(Kn), lt = Zn(!1), xr = Kn;
function ci(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ut(e) {
  return e = e.childContextTypes, e != null;
}
function Zo() {
  ge(lt), ge(qe);
}
function Up(e, t, n) {
  if (qe.current !== Kn) throw Error(O(168));
  fe(qe, t), fe(lt, n);
}
function Zv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, xE(e) || "Unknown", i));
  return ke({}, n, r);
}
function Jo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn, xr = qe.current, fe(qe, e), fe(lt, lt.current), !0;
}
function Gp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = Zv(e, t, xr), r.__reactInternalMemoizedMergedChildContext = e, ge(lt), ge(qe), fe(qe, e)) : ge(lt), fe(lt, n);
}
var pn = null, Is = !1, Wl = !1;
function Jv(e) {
  pn === null ? pn = [e] : pn.push(e);
}
function Mw(e) {
  Is = !0, Jv(e);
}
function Jn() {
  if (!Wl && pn !== null) {
    Wl = !0;
    var e = 0, t = se;
    try {
      var n = pn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pn = null, Is = !1;
    } catch (i) {
      throw pn !== null && (pn = pn.slice(e + 1)), Cv(od, Jn), i;
    } finally {
      se = t, Wl = !1;
    }
  }
  return null;
}
var qr = [], Xr = 0, es = null, ts = 0, Ct = [], St = 0, Er = null, hn = 1, vn = "";
function ir(e, t) {
  qr[Xr++] = ts, qr[Xr++] = es, es = e, ts = t;
}
function eg(e, t, n) {
  Ct[St++] = hn, Ct[St++] = vn, Ct[St++] = Er, Er = e;
  var r = hn;
  e = vn;
  var i = 32 - Ut(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Ut(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, hn = 1 << 32 - Ut(t) + i | n << i | r, vn = a + e;
  } else hn = 1 << a | n << i | r, vn = e;
}
function hd(e) {
  e.return !== null && (ir(e, 1), eg(e, 1, 0));
}
function vd(e) {
  for (; e === es; ) es = qr[--Xr], qr[Xr] = null, ts = qr[--Xr], qr[Xr] = null;
  for (; e === Er; ) Er = Ct[--St], Ct[St] = null, vn = Ct[--St], Ct[St] = null, hn = Ct[--St], Ct[St] = null;
}
var yt = null, vt = null, ye = !1, $t = null;
function tg(e, t) {
  var n = _t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Wp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yt = e, vt = Hn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yt = e, vt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Er !== null ? { id: hn, overflow: vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, yt = e, vt = null, !0) : !1;
    default:
      return !1;
  }
}
function Qu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zu(e) {
  if (ye) {
    var t = vt;
    if (t) {
      var n = t;
      if (!Wp(e, t)) {
        if (Qu(e)) throw Error(O(418));
        t = Hn(n.nextSibling);
        var r = yt;
        t && Wp(e, t) ? tg(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, yt = e);
      }
    } else {
      if (Qu(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, ye = !1, yt = e;
    }
  }
}
function Kp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  yt = e;
}
function lo(e) {
  if (e !== yt) return !1;
  if (!ye) return Kp(e), ye = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ku(e.type, e.memoizedProps)), t && (t = vt)) {
    if (Qu(e)) throw ng(), Error(O(418));
    for (; t; ) tg(e, t), t = Hn(t.nextSibling);
  }
  if (Kp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              vt = Hn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      vt = null;
    }
  } else vt = yt ? Hn(e.stateNode.nextSibling) : null;
  return !0;
}
function ng() {
  for (var e = vt; e; ) e = Hn(e.nextSibling);
}
function di() {
  vt = yt = null, ye = !1;
}
function gd(e) {
  $t === null ? $t = [e] : $t.push(e);
}
var Lw = Sn.ReactCurrentBatchConfig;
function Li(e, t, n) {
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
function uo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qp(e) {
  var t = e._init;
  return t(e._payload);
}
function rg(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [h], m.flags |= 16) : y.push(h);
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
    return m = Un(m, h), m.index = 0, m.sibling = null, m;
  }
  function a(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, k) {
    return h === null || h.tag !== 6 ? (h = Jl(y, m.mode, k), h.return = m, h) : (h = i(h, y), h.return = m, h);
  }
  function l(m, h, y, k) {
    var C = y.type;
    return C === $r ? c(m, h, y.props.children, k, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === In && qp(C) === h.type) ? (k = i(h, y.props), k.ref = Li(m, h, y), k.return = m, k) : (k = Lo(y.type, y.key, y.props, null, m.mode, k), k.ref = Li(m, h, y), k.return = m, k);
  }
  function u(m, h, y, k) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = eu(y, m.mode, k), h.return = m, h) : (h = i(h, y.children || []), h.return = m, h);
  }
  function c(m, h, y, k, C) {
    return h === null || h.tag !== 7 ? (h = hr(y, m.mode, k, C), h.return = m, h) : (h = i(h, y), h.return = m, h);
  }
  function f(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Jl("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Za:
          return y = Lo(h.type, h.key, h.props, null, m.mode, y), y.ref = Li(m, null, h), y.return = m, y;
        case Vr:
          return h = eu(h, m.mode, y), h.return = m, h;
        case In:
          var k = h._init;
          return f(m, k(h._payload), y);
      }
      if (Ui(h) || Ri(h)) return h = hr(h, m.mode, y, null), h.return = m, h;
      uo(m, h);
    }
    return null;
  }
  function d(m, h, y, k) {
    var C = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : s(m, h, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Za:
          return y.key === C ? l(m, h, y, k) : null;
        case Vr:
          return y.key === C ? u(m, h, y, k) : null;
        case In:
          return C = y._init, d(
            m,
            h,
            C(y._payload),
            k
          );
      }
      if (Ui(y) || Ri(y)) return C !== null ? null : c(m, h, y, k, null);
      uo(m, y);
    }
    return null;
  }
  function v(m, h, y, k, C) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return m = m.get(y) || null, s(h, m, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Za:
          return m = m.get(k.key === null ? y : k.key) || null, l(h, m, k, C);
        case Vr:
          return m = m.get(k.key === null ? y : k.key) || null, u(h, m, k, C);
        case In:
          var S = k._init;
          return v(m, h, y, S(k._payload), C);
      }
      if (Ui(k) || Ri(k)) return m = m.get(y) || null, c(h, m, k, C, null);
      uo(h, k);
    }
    return null;
  }
  function w(m, h, y, k) {
    for (var C = null, S = null, _ = h, T = h = 0, P = null; _ !== null && T < y.length; T++) {
      _.index > T ? (P = _, _ = null) : P = _.sibling;
      var N = d(m, _, y[T], k);
      if (N === null) {
        _ === null && (_ = P);
        break;
      }
      e && _ && N.alternate === null && t(m, _), h = a(N, h, T), S === null ? C = N : S.sibling = N, S = N, _ = P;
    }
    if (T === y.length) return n(m, _), ye && ir(m, T), C;
    if (_ === null) {
      for (; T < y.length; T++) _ = f(m, y[T], k), _ !== null && (h = a(_, h, T), S === null ? C = _ : S.sibling = _, S = _);
      return ye && ir(m, T), C;
    }
    for (_ = r(m, _); T < y.length; T++) P = v(_, m, T, y[T], k), P !== null && (e && P.alternate !== null && _.delete(P.key === null ? T : P.key), h = a(P, h, T), S === null ? C = P : S.sibling = P, S = P);
    return e && _.forEach(function(B) {
      return t(m, B);
    }), ye && ir(m, T), C;
  }
  function g(m, h, y, k) {
    var C = Ri(y);
    if (typeof C != "function") throw Error(O(150));
    if (y = C.call(y), y == null) throw Error(O(151));
    for (var S = C = null, _ = h, T = h = 0, P = null, N = y.next(); _ !== null && !N.done; T++, N = y.next()) {
      _.index > T ? (P = _, _ = null) : P = _.sibling;
      var B = d(m, _, N.value, k);
      if (B === null) {
        _ === null && (_ = P);
        break;
      }
      e && _ && B.alternate === null && t(m, _), h = a(B, h, T), S === null ? C = B : S.sibling = B, S = B, _ = P;
    }
    if (N.done) return n(
      m,
      _
    ), ye && ir(m, T), C;
    if (_ === null) {
      for (; !N.done; T++, N = y.next()) N = f(m, N.value, k), N !== null && (h = a(N, h, T), S === null ? C = N : S.sibling = N, S = N);
      return ye && ir(m, T), C;
    }
    for (_ = r(m, _); !N.done; T++, N = y.next()) N = v(_, m, T, N.value, k), N !== null && (e && N.alternate !== null && _.delete(N.key === null ? T : N.key), h = a(N, h, T), S === null ? C = N : S.sibling = N, S = N);
    return e && _.forEach(function(A) {
      return t(m, A);
    }), ye && ir(m, T), C;
  }
  function b(m, h, y, k) {
    if (typeof y == "object" && y !== null && y.type === $r && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Za:
          e: {
            for (var C = y.key, S = h; S !== null; ) {
              if (S.key === C) {
                if (C = y.type, C === $r) {
                  if (S.tag === 7) {
                    n(m, S.sibling), h = i(S, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === In && qp(C) === S.type) {
                  n(m, S.sibling), h = i(S, y.props), h.ref = Li(m, S, y), h.return = m, m = h;
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            y.type === $r ? (h = hr(y.props.children, m.mode, k, y.key), h.return = m, m = h) : (k = Lo(y.type, y.key, y.props, null, m.mode, k), k.ref = Li(m, h, y), k.return = m, m = k);
          }
          return o(m);
        case Vr:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(m, h.sibling), h = i(h, y.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = eu(y, m.mode, k), h.return = m, m = h;
          }
          return o(m);
        case In:
          return S = y._init, b(m, h, S(y._payload), k);
      }
      if (Ui(y)) return w(m, h, y, k);
      if (Ri(y)) return g(m, h, y, k);
      uo(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, y), h.return = m, m = h) : (n(m, h), h = Jl(y, m.mode, k), h.return = m, m = h), o(m)) : n(m, h);
  }
  return b;
}
var fi = rg(!0), ig = rg(!1), ns = Zn(null), rs = null, Yr = null, yd = null;
function xd() {
  yd = Yr = rs = null;
}
function Ed(e) {
  var t = ns.current;
  ge(ns), e._currentValue = t;
}
function Ju(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ii(e, t) {
  rs = e, yd = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (st = !0), e.firstContext = null);
}
function At(e) {
  var t = e._currentValue;
  if (yd !== e) if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
    if (rs === null) throw Error(O(308));
    Yr = e, rs.dependencies = { lanes: 0, firstContext: e };
  } else Yr = Yr.next = e;
  return t;
}
var cr = null;
function wd(e) {
  cr === null ? cr = [e] : cr.push(e);
}
function ag(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, wd(t)) : (n.next = i.next, i.next = n), t.interleaved = n, En(e, r);
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pn = !1;
function bd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function og(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, En(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, wd(r)) : (t.next = i.next, i.next = t), r.interleaved = t, En(e, n);
}
function Po(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sd(e, n);
  }
}
function Xp(e, t) {
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
function is(e, t, n, r) {
  var i = e.updateQueue;
  Pn = !1;
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
          var w = e, g = s;
          switch (d = t, v = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                f = w.call(v, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, d = typeof w == "function" ? w.call(v, f, d) : w, d == null) break e;
              f = ke({}, f, d);
              break e;
            case 2:
              Pn = !0;
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
    br |= o, e.lanes = o, e.memoizedState = f;
  }
}
function Yp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(O(191, i));
      i.call(r);
    }
  }
}
var La = {}, rn = Zn(La), ga = Zn(La), ya = Zn(La);
function dr(e) {
  if (e === La) throw Error(O(174));
  return e;
}
function kd(e, t) {
  switch (fe(ya, t), fe(ga, e), fe(rn, La), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fu(t, e);
  }
  ge(rn), fe(rn, t);
}
function pi() {
  ge(rn), ge(ga), ge(ya);
}
function sg(e) {
  dr(ya.current);
  var t = dr(rn.current), n = Fu(t, e.type);
  t !== n && (fe(ga, e), fe(rn, n));
}
function Cd(e) {
  ga.current === e && (ge(rn), ge(ga));
}
var we = Zn(0);
function as(e) {
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
var Kl = [];
function Sd() {
  for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Ro = Sn.ReactCurrentDispatcher, ql = Sn.ReactCurrentBatchConfig, wr = 0, be = null, Pe = null, Fe = null, os = !1, ea = !1, xa = 0, Bw = 0;
function $e() {
  throw Error(O(321));
}
function _d(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function Td(e, t, n, r, i, a) {
  if (wr = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = e === null || e.memoizedState === null ? $w : zw, e = n(r, i), ea) {
    a = 0;
    do {
      if (ea = !1, xa = 0, 25 <= a) throw Error(O(301));
      a += 1, Fe = Pe = null, t.updateQueue = null, Ro.current = Uw, e = n(r, i);
    } while (ea);
  }
  if (Ro.current = ss, t = Pe !== null && Pe.next !== null, wr = 0, Fe = Pe = be = null, os = !1, t) throw Error(O(300));
  return e;
}
function Nd() {
  var e = xa !== 0;
  return xa = 0, e;
}
function Jt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Fe === null ? be.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
}
function It() {
  if (Pe === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Fe === null ? be.memoizedState : Fe.next;
  if (t !== null) Fe = t, Pe = e;
  else {
    if (e === null) throw Error(O(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, Fe === null ? be.memoizedState = Fe = e : Fe = Fe.next = e;
  }
  return Fe;
}
function Ea(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = It(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Pe, i = r.baseQueue, a = n.pending;
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
      if ((wr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = f, o = r) : l = l.next = f, be.lanes |= c, br |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = r : l.next = s, Wt(r, t.memoizedState) || (st = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, be.lanes |= a, br |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = It(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    Wt(a, t.memoizedState) || (st = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function lg() {
}
function ug(e, t) {
  var n = be, r = It(), i = t(), a = !Wt(r.memoizedState, i);
  if (a && (r.memoizedState = i, st = !0), r = r.queue, Ad(fg.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Fe !== null && Fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, wa(9, dg.bind(null, n, r, i, t), void 0, null), Oe === null) throw Error(O(349));
    wr & 30 || cg(n, t, i);
  }
  return i;
}
function cg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function dg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, pg(t) && mg(e);
}
function fg(e, t, n) {
  return n(function() {
    pg(t) && mg(e);
  });
}
function pg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function mg(e) {
  var t = En(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function Qp(e) {
  var t = Jt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ea, lastRenderedState: e }, t.queue = e, e = e.dispatch = Vw.bind(null, be, e), [t.memoizedState, e];
}
function wa(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hg() {
  return It().memoizedState;
}
function Fo(e, t, n, r) {
  var i = Jt();
  be.flags |= e, i.memoizedState = wa(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ps(e, t, n, r) {
  var i = It();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Pe !== null) {
    var o = Pe.memoizedState;
    if (a = o.destroy, r !== null && _d(r, o.deps)) {
      i.memoizedState = wa(t, n, a, r);
      return;
    }
  }
  be.flags |= e, i.memoizedState = wa(1 | t, n, a, r);
}
function Zp(e, t) {
  return Fo(8390656, 8, e, t);
}
function Ad(e, t) {
  return Ps(2048, 8, e, t);
}
function vg(e, t) {
  return Ps(4, 2, e, t);
}
function gg(e, t) {
  return Ps(4, 4, e, t);
}
function yg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function xg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ps(4, 4, yg.bind(null, t, e), n);
}
function Id() {
}
function Eg(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function wg(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bg(e, t, n) {
  return wr & 21 ? (Wt(n, t) || (n = Tv(), be.lanes |= n, br |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, st = !0), e.memoizedState = n);
}
function jw(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, ql.transition = r;
  }
}
function kg() {
  return It().memoizedState;
}
function Hw(e, t, n) {
  var r = zn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cg(e)) Sg(t, n);
  else if (n = ag(e, t, n, r), n !== null) {
    var i = et();
    Gt(n, e, r, i), _g(n, t, r);
  }
}
function Vw(e, t, n) {
  var r = zn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cg(e)) Sg(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = !0, i.eagerState = s, Wt(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, wd(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = ag(e, t, i, r), n !== null && (i = et(), Gt(n, e, r, i), _g(n, t, r));
  }
}
function Cg(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function Sg(e, t) {
  ea = os = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _g(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sd(e, n);
  }
}
var ss = { readContext: At, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, $w = { readContext: At, useCallback: function(e, t) {
  return Jt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: At, useEffect: Zp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fo(
    4194308,
    4,
    yg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Jt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Jt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hw.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Jt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qp, useDebugValue: Id, useDeferredValue: function(e) {
  return Jt().memoizedState = e;
}, useTransition: function() {
  var e = Qp(!1), t = e[0];
  return e = jw.bind(null, e[1]), Jt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, i = Jt();
  if (ye) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(O(349));
    wr & 30 || cg(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, Zp(fg.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, wa(9, dg.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Jt(), t = Oe.identifierPrefix;
  if (ye) {
    var n = vn, r = hn;
    n = (r & ~(1 << 32 - Ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xa++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Bw++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, zw = {
  readContext: At,
  useCallback: Eg,
  useContext: At,
  useEffect: Ad,
  useImperativeHandle: xg,
  useInsertionEffect: vg,
  useLayoutEffect: gg,
  useMemo: wg,
  useReducer: Xl,
  useRef: hg,
  useState: function() {
    return Xl(Ea);
  },
  useDebugValue: Id,
  useDeferredValue: function(e) {
    var t = It();
    return bg(t, Pe.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Ea)[0], t = It().memoizedState;
    return [e, t];
  },
  useMutableSource: lg,
  useSyncExternalStore: ug,
  useId: kg,
  unstable_isNewReconciler: !1
}, Uw = { readContext: At, useCallback: Eg, useContext: At, useEffect: Ad, useImperativeHandle: xg, useInsertionEffect: vg, useLayoutEffect: gg, useMemo: wg, useReducer: Yl, useRef: hg, useState: function() {
  return Yl(Ea);
}, useDebugValue: Id, useDeferredValue: function(e) {
  var t = It();
  return Pe === null ? t.memoizedState = e : bg(t, Pe.memoizedState, e);
}, useTransition: function() {
  var e = Yl(Ea)[0], t = It().memoizedState;
  return [e, t];
}, useMutableSource: lg, useSyncExternalStore: ug, useId: kg, unstable_isNewReconciler: !1 };
function jt(e, t) {
  if (e && e.defaultProps) {
    t = ke({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ec(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), i = zn(e), a = gn(r, i);
  a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (Gt(t, e, i, r), Po(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), i = zn(e), a = gn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (Gt(t, e, i, r), Po(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = et(), r = zn(e), i = gn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Vn(e, i, r), t !== null && (Gt(t, e, r, n), Po(t, e, r));
} };
function Jp(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !pa(n, r) || !pa(i, a) : !0;
}
function Tg(e, t, n) {
  var r = !1, i = Kn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = At(a) : (i = ut(t) ? xr : qe.current, r = t.contextTypes, a = (r = r != null) ? ci(e, i) : Kn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function em(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}
function tc(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, bd(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = At(a) : (a = ut(t) ? xr : qe.current, i.context = ci(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ec(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Rs.enqueueReplaceState(i, i.state, null), is(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function mi(e, t) {
  try {
    var n = "", r = t;
    do
      n += yE(r), r = r.return;
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
function nc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Gw = typeof WeakMap == "function" ? WeakMap : Map;
function Ng(e, t, n) {
  n = gn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    us || (us = !0, fc = r), nc(e, t);
  }, n;
}
function Ag(e, t, n) {
  n = gn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      nc(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    nc(e, t), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function tm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gw();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ab.bind(null, e, t, n), t.then(e, e));
}
function nm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rm(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gn(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e);
}
var Ww = Sn.ReactCurrentOwner, st = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? ig(t, null, n, r) : fi(t, e.child, n, r);
}
function im(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return ii(t, i), r = Td(e, t, n, r, a, i), n = Nd(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wn(e, t, i)) : (ye && n && hd(t), t.flags |= 1, Qe(e, t, r, i), t.child);
}
function am(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Bd(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ig(e, t, a, r, i)) : (e = Lo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : pa, n(o, r) && e.ref === t.ref) return wn(e, t, i);
  }
  return t.flags |= 1, e = Un(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ig(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (pa(a, r) && e.ref === t.ref) if (st = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (st = !0);
    else return t.lanes = e.lanes, wn(e, t, i);
  }
  return rc(e, t, n, r, i);
}
function Pg(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Zr, mt), mt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Zr, mt), mt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, fe(Zr, mt), mt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, fe(Zr, mt), mt |= r;
  return Qe(e, t, i, n), t.child;
}
function Rg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function rc(e, t, n, r, i) {
  var a = ut(n) ? xr : qe.current;
  return a = ci(t, a), ii(t, i), n = Td(e, t, n, r, a, i), r = Nd(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wn(e, t, i)) : (ye && r && hd(t), t.flags |= 1, Qe(e, t, n, i), t.child);
}
function om(e, t, n, r, i) {
  if (ut(n)) {
    var a = !0;
    Jo(t);
  } else a = !1;
  if (ii(t, i), t.stateNode === null) Oo(e, t), Tg(t, n, r), tc(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = At(u) : (u = ut(n) ? xr : qe.current, u = ci(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && em(t, o, r, u), Pn = !1;
    var d = t.memoizedState;
    o.state = d, is(t, r, o, i), l = t.memoizedState, s !== r || d !== l || lt.current || Pn ? (typeof c == "function" && (ec(t, n, c, r), l = t.memoizedState), (s = Pn || Jp(t, n, s, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, og(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : jt(t.type, s), o.props = u, f = t.pendingProps, d = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = At(l) : (l = ut(n) ? xr : qe.current, l = ci(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || d !== l) && em(t, o, r, l), Pn = !1, d = t.memoizedState, o.state = d, is(t, r, o, i);
    var w = t.memoizedState;
    s !== f || d !== w || lt.current || Pn ? (typeof v == "function" && (ec(t, n, v, r), w = t.memoizedState), (u = Pn || Jp(t, n, u, r, d, w, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ic(e, t, n, r, a, i);
}
function ic(e, t, n, r, i, a) {
  Rg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Gp(t, n, !1), wn(e, t, a);
  r = t.stateNode, Ww.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = fi(t, e.child, null, a), t.child = fi(t, null, s, a)) : Qe(e, t, s, a), t.memoizedState = r.state, i && Gp(t, n, !0), t.child;
}
function Fg(e) {
  var t = e.stateNode;
  t.pendingContext ? Up(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Up(e, t.context, !1), kd(e, t.containerInfo);
}
function sm(e, t, n, r, i) {
  return di(), gd(i), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function oc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Og(e, t, n) {
  var r = t.pendingProps, i = we.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), fe(we, i & 1), e === null)
    return Zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ds(o, r, 0, null), e = hr(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = oc(n), t.memoizedState = ac, e) : Pd(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Kw(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Un(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = Un(s, a) : (a = hr(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? oc(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = ac, r;
  }
  return a = e.child, e = a.sibling, r = Un(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pd(e, t) {
  return t = Ds({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function co(e, t, n, r) {
  return r !== null && gd(r), fi(t, e.child, null, n), e = Pd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kw(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ql(Error(O(422))), co(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Ds({ mode: "visible", children: r.children }, i, 0, null), a = hr(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && fi(t, e.child, null, o), t.child.memoizedState = oc(o), t.memoizedState = ac, a);
  if (!(t.mode & 1)) return co(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error(O(419)), r = Ql(a, r, void 0), co(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, st || s) {
    if (r = Oe, r !== null) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, En(e, i), Gt(r, e, i, -1));
    }
    return Ld(), r = Ql(Error(O(421))), co(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ob.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, vt = Hn(i.nextSibling), yt = t, ye = !0, $t = null, e !== null && (Ct[St++] = hn, Ct[St++] = vn, Ct[St++] = Er, hn = e.id, vn = e.overflow, Er = t), t = Pd(t, r.children), t.flags |= 4096, t);
}
function lm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ju(e.return, t, n);
}
function Zl(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function Dg(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = we.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && lm(e, n, t);
      else if (e.tag === 19) lm(e, n, t);
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
  if (fe(we, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && as(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zl(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && as(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Zl(t, !0, n, null, a);
      break;
    case "together":
      Zl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), br |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Un(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qw(e, t, n) {
  switch (t.tag) {
    case 3:
      Fg(t), di();
      break;
    case 5:
      sg(t);
      break;
    case 1:
      ut(t.type) && Jo(t);
      break;
    case 4:
      kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      fe(ns, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(we, we.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Og(e, t, n) : (fe(we, we.current & 1), e = wn(e, t, n), e !== null ? e.sibling : null);
      fe(we, we.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Dg(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(we, we.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Pg(e, t, n);
  }
  return wn(e, t, n);
}
var Mg, sc, Lg, Bg;
Mg = function(e, t) {
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
sc = function() {
};
Lg = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, dr(rn.current);
    var a = null;
    switch (n) {
      case "input":
        i = Au(e, i), r = Au(e, r), a = [];
        break;
      case "select":
        i = ke({}, i, { value: void 0 }), r = ke({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Ru(e, i), r = Ru(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qo);
    }
    Ou(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (oa.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (oa.hasOwnProperty(u) ? (l != null && u === "onScroll" && he("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bi(e, t) {
  if (!ye) switch (e.tailMode) {
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
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Xw(e, t, n) {
  var r = t.pendingProps;
  switch (vd(t), t.tag) {
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
      return ze(t), null;
    case 1:
      return ut(t.type) && Zo(), ze(t), null;
    case 3:
      return r = t.stateNode, pi(), ge(lt), ge(qe), Sd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (lo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $t !== null && (hc($t), $t = null))), sc(e, t), ze(t), null;
    case 5:
      Cd(t);
      var i = dr(ya.current);
      if (n = t.type, e !== null && t.stateNode != null) Lg(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return ze(t), null;
        }
        if (e = dr(rn.current), lo(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[en] = t, r[va] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Wi.length; i++) he(Wi[i], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he(
                "error",
                r
              ), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              gp(r, a), he("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, he("invalid", r);
              break;
            case "textarea":
              xp(r, a), he("invalid", r);
          }
          Ou(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && so(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && so(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : oa.hasOwnProperty(o) && s != null && o === "onScroll" && he("scroll", r);
          }
          switch (n) {
            case "input":
              Ja(r), yp(r, a, !0);
              break;
            case "textarea":
              Ja(r), Ep(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Qo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[en] = t, e[va] = r, Mg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Du(n, r), n) {
              case "dialog":
                he("cancel", e), he("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wi.length; i++) he(Wi[i], e);
                i = r;
                break;
              case "source":
                he("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                he(
                  "error",
                  e
                ), he("load", e), i = r;
                break;
              case "details":
                he("toggle", e), i = r;
                break;
              case "input":
                gp(e, r), i = Au(e, r), he("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ke({}, r, { value: void 0 }), he("invalid", e);
                break;
              case "textarea":
                xp(e, r), i = Ru(e, r), he("invalid", e);
                break;
              default:
                i = r;
            }
            Ou(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? hv(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && pv(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && sa(e, l) : typeof l == "number" && sa(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (oa.hasOwnProperty(a) ? l != null && a === "onScroll" && he("scroll", e) : l != null && td(e, a, l, o));
            }
            switch (n) {
              case "input":
                Ja(e), yp(e, r, !1);
                break;
              case "textarea":
                Ja(e), Ep(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? ei(e, !!r.multiple, a, !1) : r.defaultValue != null && ei(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qo);
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
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Bg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = dr(ya.current), dr(rn.current), lo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[en] = t, (a = r.nodeValue !== n) && (e = yt, e !== null)) switch (e.tag) {
            case 3:
              so(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && so(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[en] = t, t.stateNode = r;
      }
      return ze(t), null;
    case 13:
      if (ge(we), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ye && vt !== null && t.mode & 1 && !(t.flags & 128)) ng(), di(), t.flags |= 98560, a = !1;
        else if (a = lo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(O(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(O(317));
            a[en] = t;
          } else di(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ze(t), a = !1;
        } else $t !== null && (hc($t), $t = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || we.current & 1 ? Re === 0 && (Re = 3) : Ld())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
    case 4:
      return pi(), sc(e, t), e === null && ma(t.stateNode.containerInfo), ze(t), null;
    case 10:
      return Ed(t.type._context), ze(t), null;
    case 17:
      return ut(t.type) && Zo(), ze(t), null;
    case 19:
      if (ge(we), a = t.memoizedState, a === null) return ze(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Bi(a, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = as(e), o !== null) {
            for (t.flags |= 128, Bi(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(we, we.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && _e() > hi && (t.flags |= 128, r = !0, Bi(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = as(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Bi(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !ye) return ze(t), null;
        } else 2 * _e() - a.renderingStartTime > hi && n !== 1073741824 && (t.flags |= 128, r = !0, Bi(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = _e(), t.sibling = null, n = we.current, fe(we, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
    case 22:
    case 23:
      return Md(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? mt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Yw(e, t) {
  switch (vd(t), t.tag) {
    case 1:
      return ut(t.type) && Zo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return pi(), ge(lt), ge(qe), Sd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cd(t), null;
    case 13:
      if (ge(we), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        di();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ge(we), null;
    case 4:
      return pi(), null;
    case 10:
      return Ed(t.type._context), null;
    case 22:
    case 23:
      return Md(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fo = !1, Ue = !1, Qw = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function Qr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ce(e, t, r);
  }
  else n.current = null;
}
function lc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var um = !1;
function Zw(e, t) {
  if (Gu = qo, e = zv(), md(e)) {
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
  for (Wu = { focusedElem: e, selectionRange: n }, qo = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var g = w.memoizedProps, b = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : jt(t.type, g), b);
            m.__reactInternalSnapshotBeforeUpdate = h;
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
          throw Error(O(163));
      }
    } catch (k) {
      Ce(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return w = um, um = !1, w;
}
function ta(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && lc(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fs(e, t) {
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
function uc(e) {
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
function jg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[en], delete t[va], delete t[Xu], delete t[Ow], delete t[Dw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Hg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qo));
  else if (r !== 4 && (e = e.child, e !== null)) for (cc(e, t, n), e = e.sibling; e !== null; ) cc(e, t, n), e = e.sibling;
}
function dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (dc(e, t, n), e = e.sibling; e !== null; ) dc(e, t, n), e = e.sibling;
}
var Le = null, Ht = !1;
function An(e, t, n) {
  for (n = n.child; n !== null; ) Vg(e, t, n), n = n.sibling;
}
function Vg(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function") try {
    nn.onCommitFiberUnmount(Ss, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Qr(n, t);
    case 6:
      var r = Le, i = Ht;
      Le = null, An(e, t, n), Le = r, Ht = i, Le !== null && (Ht ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null && (Ht ? (e = Le, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), da(e)) : Gl(Le, n.stateNode));
      break;
    case 4:
      r = Le, i = Ht, Le = n.stateNode.containerInfo, Ht = !0, An(e, t, n), Le = r, Ht = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && lc(n, t, o), i = i.next;
        } while (i !== r);
      }
      An(e, t, n);
      break;
    case 1:
      if (!Ue && (Qr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Ce(n, t, s);
      }
      An(e, t, n);
      break;
    case 21:
      An(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, An(e, t, n), Ue = r) : An(e, t, n);
      break;
    default:
      An(e, t, n);
  }
}
function dm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qw()), t.forEach(function(r) {
      var i = sb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Bt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Le = s.stateNode, Ht = !1;
            break e;
          case 3:
            Le = s.stateNode.containerInfo, Ht = !0;
            break e;
          case 4:
            Le = s.stateNode.containerInfo, Ht = !0;
            break e;
        }
        s = s.return;
      }
      if (Le === null) throw Error(O(160));
      Vg(a, o, i), Le = null, Ht = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Ce(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $g(t, e), t = t.sibling;
}
function $g(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Bt(t, e), Qt(e), r & 4) {
        try {
          ta(3, e, e.return), Fs(3, e);
        } catch (g) {
          Ce(e, e.return, g);
        }
        try {
          ta(5, e, e.return);
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 1:
      Bt(t, e), Qt(e), r & 512 && n !== null && Qr(n, n.return);
      break;
    case 5:
      if (Bt(t, e), Qt(e), r & 512 && n !== null && Qr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          sa(i, "");
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && cv(i, a), Du(s, o);
          var u = Du(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], f = l[o + 1];
            c === "style" ? hv(i, f) : c === "dangerouslySetInnerHTML" ? pv(i, f) : c === "children" ? sa(i, f) : td(i, c, f, u);
          }
          switch (s) {
            case "input":
              Iu(i, a);
              break;
            case "textarea":
              dv(i, a);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var v = a.value;
              v != null ? ei(i, !!a.multiple, v, !1) : d !== !!a.multiple && (a.defaultValue != null ? ei(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : ei(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[va] = a;
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Bt(t, e), Qt(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Bt(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        da(t.containerInfo);
      } catch (g) {
        Ce(e, e.return, g);
      }
      break;
    case 4:
      Bt(t, e), Qt(e);
      break;
    case 13:
      Bt(t, e), Qt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Od = _e())), r & 4 && dm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (u = Ue) || c, Bt(t, e), Ue = u) : Bt(t, e), Qt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (z = e, c = e.child; c !== null; ) {
          for (f = z = c; z !== null; ) {
            switch (d = z, v = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ta(4, d, d.return);
                break;
              case 1:
                Qr(d, d.return);
                var w = d.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (g) {
                    Ce(r, n, g);
                  }
                }
                break;
              case 5:
                Qr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  pm(f);
                  continue;
                }
            }
            v !== null ? (v.return = d, z = v) : pm(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = mv("display", o));
              } catch (g) {
                Ce(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (g) {
              Ce(e, e.return, g);
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
      Bt(t, e), Qt(e), r & 4 && dm(e);
      break;
    case 21:
      break;
    default:
      Bt(
        t,
        e
      ), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hg(n)) {
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
          r.flags & 32 && (sa(i, ""), r.flags &= -33);
          var a = cm(e);
          dc(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = cm(e);
          cc(e, s, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      Ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jw(e, t, n) {
  z = e, zg(e);
}
function zg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || fo;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || Ue;
        s = fo;
        var u = Ue;
        if (fo = o, (Ue = l) && !u) for (z = i; z !== null; ) o = z, l = o.child, o.tag === 22 && o.memoizedState !== null ? mm(i) : l !== null ? (l.return = o, z = l) : mm(i);
        for (; a !== null; ) z = a, zg(a), a = a.sibling;
        z = i, fo = s, Ue = u;
      }
      fm(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, z = a) : fm(e);
  }
}
function fm(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || Fs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Yp(t, a, r);
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
              Yp(t, o, n);
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
                  f !== null && da(f);
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
        Ue || t.flags & 512 && uc(t);
      } catch (d) {
        Ce(t, t.return, d);
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
function pm(e) {
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
function mm(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fs(4, t);
          } catch (l) {
            Ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ce(t, i, l);
            }
          }
          var a = t.return;
          try {
            uc(t);
          } catch (l) {
            Ce(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uc(t);
          } catch (l) {
            Ce(t, o, l);
          }
      }
    } catch (l) {
      Ce(t, t.return, l);
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
var eb = Math.ceil, ls = Sn.ReactCurrentDispatcher, Rd = Sn.ReactCurrentOwner, Tt = Sn.ReactCurrentBatchConfig, ie = 0, Oe = null, Ae = null, Be = 0, mt = 0, Zr = Zn(0), Re = 0, ba = null, br = 0, Os = 0, Fd = 0, na = null, ot = null, Od = 0, hi = 1 / 0, fn = null, us = !1, fc = null, $n = null, po = !1, Mn = null, cs = 0, ra = 0, pc = null, Do = -1, Mo = 0;
function et() {
  return ie & 6 ? _e() : Do !== -1 ? Do : Do = _e();
}
function zn(e) {
  return e.mode & 1 ? ie & 2 && Be !== 0 ? Be & -Be : Lw.transition !== null ? (Mo === 0 && (Mo = Tv()), Mo) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ov(e.type)), e) : 1;
}
function Gt(e, t, n, r) {
  if (50 < ra) throw ra = 0, pc = null, Error(O(185));
  Oa(e, n, r), (!(ie & 2) || e !== Oe) && (e === Oe && (!(ie & 2) && (Os |= n), Re === 4 && On(e, Be)), ct(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (hi = _e() + 500, Is && Jn()));
}
function ct(e, t) {
  var n = e.callbackNode;
  LE(e, t);
  var r = Ko(e, e === Oe ? Be : 0);
  if (r === 0) n !== null && kp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && kp(n), t === 1) e.tag === 0 ? Mw(hm.bind(null, e)) : Jv(hm.bind(null, e)), Rw(function() {
      !(ie & 6) && Jn();
    }), n = null;
    else {
      switch (Nv(r)) {
        case 1:
          n = od;
          break;
        case 4:
          n = Sv;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = _v;
          break;
        default:
          n = Wo;
      }
      n = Qg(n, Ug.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ug(e, t) {
  if (Do = -1, Mo = 0, ie & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (ai() && e.callbackNode !== n) return null;
  var r = Ko(e, e === Oe ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ds(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var a = Wg();
    (Oe !== e || Be !== t) && (fn = null, hi = _e() + 500, mr(e, t));
    do
      try {
        rb();
        break;
      } catch (s) {
        Gg(e, s);
      }
    while (!0);
    xd(), ls.current = a, ie = i, Ae !== null ? t = 0 : (Oe = null, Be = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (i = Hu(e), i !== 0 && (r = i, t = mc(e, i))), t === 1) throw n = ba, mr(e, 0), On(e, r), ct(e, _e()), n;
    if (t === 6) On(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !tb(i) && (t = ds(e, r), t === 2 && (a = Hu(e), a !== 0 && (r = a, t = mc(e, a))), t === 1)) throw n = ba, mr(e, 0), On(e, r), ct(e, _e()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          ar(e, ot, fn);
          break;
        case 3:
          if (On(e, r), (r & 130023424) === r && (t = Od + 500 - _e(), 10 < t)) {
            if (Ko(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              et(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = qu(ar.bind(null, e, ot, fn), t);
            break;
          }
          ar(e, ot, fn);
          break;
        case 4:
          if (On(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ut(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * eb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qu(ar.bind(null, e, ot, fn), r);
            break;
          }
          ar(e, ot, fn);
          break;
        case 5:
          ar(e, ot, fn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ct(e, _e()), e.callbackNode === n ? Ug.bind(null, e) : null;
}
function mc(e, t) {
  var n = na;
  return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256), e = ds(e, t), e !== 2 && (t = ot, ot = n, t !== null && hc(t)), e;
}
function hc(e) {
  ot === null ? ot = e : ot.push.apply(ot, e);
}
function tb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Wt(a(), i)) return !1;
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
function On(e, t) {
  for (t &= ~Fd, t &= ~Os, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hm(e) {
  if (ie & 6) throw Error(O(327));
  ai();
  var t = Ko(e, 0);
  if (!(t & 1)) return ct(e, _e()), null;
  var n = ds(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && (t = r, n = mc(e, r));
  }
  if (n === 1) throw n = ba, mr(e, 0), On(e, t), ct(e, _e()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ar(e, ot, fn), ct(e, _e()), null;
}
function Dd(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (hi = _e() + 500, Is && Jn());
  }
}
function kr(e) {
  Mn !== null && Mn.tag === 0 && !(ie & 6) && ai();
  var t = ie;
  ie |= 1;
  var n = Tt.transition, r = se;
  try {
    if (Tt.transition = null, se = 1, e) return e();
  } finally {
    se = r, Tt.transition = n, ie = t, !(ie & 6) && Jn();
  }
}
function Md() {
  mt = Zr.current, ge(Zr);
}
function mr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pw(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
    var r = n;
    switch (vd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zo();
        break;
      case 3:
        pi(), ge(lt), ge(qe), Sd();
        break;
      case 5:
        Cd(r);
        break;
      case 4:
        pi();
        break;
      case 13:
        ge(we);
        break;
      case 19:
        ge(we);
        break;
      case 10:
        Ed(r.type._context);
        break;
      case 22:
      case 23:
        Md();
    }
    n = n.return;
  }
  if (Oe = e, Ae = e = Un(e.current, null), Be = mt = t, Re = 0, ba = null, Fd = Os = br = 0, ot = na = null, cr !== null) {
    for (t = 0; t < cr.length; t++) if (n = cr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, r.next = o;
      }
      n.pending = r;
    }
    cr = null;
  }
  return e;
}
function Gg(e, t) {
  do {
    var n = Ae;
    try {
      if (xd(), Ro.current = ss, os) {
        for (var r = be.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        os = !1;
      }
      if (wr = 0, Fe = Pe = be = null, ea = !1, xa = 0, Rd.current = null, n === null || n.return === null) {
        Re = 1, ba = t, Ae = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = Be, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = nm(o);
          if (v !== null) {
            v.flags &= -257, rm(v, o, s, a, t), v.mode & 1 && tm(a, u, t), t = v, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              tm(a, u, t), Ld();
              break e;
            }
            l = Error(O(426));
          }
        } else if (ye && s.mode & 1) {
          var b = nm(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), rm(b, o, s, a, t), gd(mi(l, s));
            break e;
          }
        }
        a = l = mi(l, s), Re !== 4 && (Re = 2), na === null ? na = [a] : na.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var m = Ng(a, l, t);
              Xp(a, m);
              break e;
            case 1:
              s = l;
              var h = a.type, y = a.stateNode;
              if (!(a.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && ($n === null || !$n.has(y)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var k = Ag(a, s, t);
                Xp(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      qg(n);
    } catch (C) {
      t = C, Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wg() {
  var e = ls.current;
  return ls.current = ss, e === null ? ss : e;
}
function Ld() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Oe === null || !(br & 268435455) && !(Os & 268435455) || On(Oe, Be);
}
function ds(e, t) {
  var n = ie;
  ie |= 2;
  var r = Wg();
  (Oe !== e || Be !== t) && (fn = null, mr(e, t));
  do
    try {
      nb();
      break;
    } catch (i) {
      Gg(e, i);
    }
  while (!0);
  if (xd(), ie = n, ls.current = r, Ae !== null) throw Error(O(261));
  return Oe = null, Be = 0, Re;
}
function nb() {
  for (; Ae !== null; ) Kg(Ae);
}
function rb() {
  for (; Ae !== null && !NE(); ) Kg(Ae);
}
function Kg(e) {
  var t = Yg(e.alternate, e, mt);
  e.memoizedProps = e.pendingProps, t === null ? qg(e) : Ae = t, Rd.current = null;
}
function qg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Yw(n, t), n !== null) {
        n.flags &= 32767, Ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, Ae = null;
        return;
      }
    } else if (n = Xw(n, t, mt), n !== null) {
      Ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function ar(e, t, n) {
  var r = se, i = Tt.transition;
  try {
    Tt.transition = null, se = 1, ib(e, t, n, r);
  } finally {
    Tt.transition = i, se = r;
  }
  return null;
}
function ib(e, t, n, r) {
  do
    ai();
  while (Mn !== null);
  if (ie & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (BE(e, a), e === Oe && (Ae = Oe = null, Be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, Qg(Wo, function() {
    return ai(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = Tt.transition, Tt.transition = null;
    var o = se;
    se = 1;
    var s = ie;
    ie |= 4, Rd.current = null, Zw(e, n), $g(n, e), Cw(Wu), qo = !!Gu, Wu = Gu = null, e.current = n, Jw(n), AE(), ie = s, se = o, Tt.transition = a;
  } else e.current = n;
  if (po && (po = !1, Mn = e, cs = i), a = e.pendingLanes, a === 0 && ($n = null), RE(n.stateNode), ct(e, _e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (us) throw us = !1, e = fc, fc = null, e;
  return cs & 1 && e.tag !== 0 && ai(), a = e.pendingLanes, a & 1 ? e === pc ? ra++ : (ra = 0, pc = e) : ra = 0, Jn(), null;
}
function ai() {
  if (Mn !== null) {
    var e = Nv(cs), t = Tt.transition, n = se;
    try {
      if (Tt.transition = null, se = 16 > e ? 16 : e, Mn === null) var r = !1;
      else {
        if (e = Mn, Mn = null, cs = 0, ie & 6) throw Error(O(331));
        var i = ie;
        for (ie |= 4, z = e.current; z !== null; ) {
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
                      ta(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, z = f;
                  else for (; z !== null; ) {
                    c = z;
                    var d = c.sibling, v = c.return;
                    if (jg(c), c === u) {
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
              var w = a.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var b = g.sibling;
                    g.sibling = null, g = b;
                  } while (g !== null);
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
                ta(9, a, a.return);
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, z = m;
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
                  Fs(9, s);
              }
            } catch (C) {
              Ce(s, s.return, C);
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
        if (ie = i, Jn(), nn && typeof nn.onPostCommitFiberRoot == "function") try {
          nn.onPostCommitFiberRoot(Ss, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, Tt.transition = t;
    }
  }
  return !1;
}
function vm(e, t, n) {
  t = mi(n, t), t = Ng(e, t, 1), e = Vn(e, t, 1), t = et(), e !== null && (Oa(e, 1, t), ct(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) vm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      vm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
        e = mi(n, e), e = Ag(t, e, 1), t = Vn(t, e, 1), e = et(), t !== null && (Oa(t, 1, e), ct(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ab(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Be & n) === n && (Re === 4 || Re === 3 && (Be & 130023424) === Be && 500 > _e() - Od ? mr(e, 0) : Fd |= n), ct(e, t);
}
function Xg(e, t) {
  t === 0 && (e.mode & 1 ? (t = no, no <<= 1, !(no & 130023424) && (no = 4194304)) : t = 1);
  var n = et();
  e = En(e, t), e !== null && (Oa(e, t, n), ct(e, n));
}
function ob(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Xg(e, n);
}
function sb(e, t) {
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
  r !== null && r.delete(t), Xg(e, n);
}
var Yg;
Yg = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || lt.current) st = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return st = !1, qw(e, t, n);
    st = !!(e.flags & 131072);
  }
  else st = !1, ye && t.flags & 1048576 && eg(t, ts, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oo(e, t), e = t.pendingProps;
      var i = ci(t, qe.current);
      ii(t, n), i = Td(null, t, r, e, i, n);
      var a = Nd();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ut(r) ? (a = !0, Jo(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, bd(t), i.updater = Rs, t.stateNode = i, i._reactInternals = t, tc(t, r, e, n), t = ic(null, t, r, !0, a, n)) : (t.tag = 0, ye && a && hd(t), Qe(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = ub(r), e = jt(r, e), i) {
          case 0:
            t = rc(null, t, r, e, n);
            break e;
          case 1:
            t = om(null, t, r, e, n);
            break e;
          case 11:
            t = im(null, t, r, e, n);
            break e;
          case 14:
            t = am(null, t, r, jt(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), rc(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), om(e, t, r, i, n);
    case 3:
      e: {
        if (Fg(t), e === null) throw Error(O(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, og(e, t), is(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = mi(Error(O(423)), t), t = sm(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = mi(Error(O(424)), t), t = sm(e, t, r, n, i);
          break e;
        } else for (vt = Hn(t.stateNode.containerInfo.firstChild), yt = t, ye = !0, $t = null, n = ig(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (di(), r === i) {
            t = wn(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return sg(t), e === null && Zu(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Ku(r, i) ? o = null : a !== null && Ku(r, a) && (t.flags |= 32), Rg(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Zu(t), null;
    case 13:
      return Og(e, t, n);
    case 4:
      return kd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fi(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), im(e, t, r, i, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, fe(ns, r._currentValue), r._currentValue = o, a !== null) if (Wt(a.value, o)) {
          if (a.children === i.children && !lt.current) {
            t = wn(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === r) {
                if (a.tag === 1) {
                  l = gn(-1, n & -n), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Ju(
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
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ju(o, n, t), o = a.sibling;
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
        Qe(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, ii(t, n), i = At(i), r = r(i), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = jt(r, t.pendingProps), i = jt(r.type, i), am(e, t, r, i, n);
    case 15:
      return Ig(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : jt(r, i), Oo(e, t), t.tag = 1, ut(r) ? (e = !0, Jo(t)) : e = !1, ii(t, n), Tg(t, r, i), tc(t, r, i, n), ic(null, t, r, !0, e, n);
    case 19:
      return Dg(e, t, n);
    case 22:
      return Pg(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Qg(e, t) {
  return Cv(e, t);
}
function lb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _t(e, t, n, r) {
  return new lb(e, t, n, r);
}
function Bd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ub(e) {
  if (typeof e == "function") return Bd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === rd) return 11;
    if (e === id) return 14;
  }
  return 2;
}
function Un(e, t) {
  var n = e.alternate;
  return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Lo(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") Bd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $r:
      return hr(n.children, i, a, t);
    case nd:
      o = 8, i |= 8;
      break;
    case Su:
      return e = _t(12, n, t, i | 2), e.elementType = Su, e.lanes = a, e;
    case _u:
      return e = _t(13, n, t, i), e.elementType = _u, e.lanes = a, e;
    case Tu:
      return e = _t(19, n, t, i), e.elementType = Tu, e.lanes = a, e;
    case sv:
      return Ds(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case av:
          o = 10;
          break e;
        case ov:
          o = 9;
          break e;
        case rd:
          o = 11;
          break e;
        case id:
          o = 14;
          break e;
        case In:
          o = 16, r = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = _t(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function hr(e, t, n, r) {
  return e = _t(7, e, r, t), e.lanes = n, e;
}
function Ds(e, t, n, r) {
  return e = _t(22, e, r, t), e.elementType = sv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, t, n) {
  return e = _t(6, e, null, t), e.lanes = n, e;
}
function eu(e, t, n) {
  return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cb(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function jd(e, t, n, r, i, a, o, s, l) {
  return e = new cb(e, t, n, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = _t(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bd(a), e;
}
function db(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Zg(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
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
    if (ut(n)) return Zv(e, n, t);
  }
  return t;
}
function Jg(e, t, n, r, i, a, o, s, l) {
  return e = jd(n, r, !0, e, i, a, o, s, l), e.context = Zg(null), n = e.current, r = et(), i = zn(n), a = gn(r, i), a.callback = t ?? null, Vn(n, a, i), e.current.lanes = i, Oa(e, i, r), ct(e, r), e;
}
function Ms(e, t, n, r) {
  var i = t.current, a = et(), o = zn(i);
  return n = Zg(n), t.context === null ? t.context = n : t.pendingContext = n, t = gn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(i, t, o), e !== null && (Gt(e, i, o, a), Po(e, i, o)), o;
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
function gm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hd(e, t) {
  gm(e, t), (e = e.alternate) && gm(e, t);
}
function fb() {
  return null;
}
var e0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vd(e) {
  this._internalRoot = e;
}
Ls.prototype.render = Vd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ms(e, t, null, null);
};
Ls.prototype.unmount = Vd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kr(function() {
      Ms(null, e, null, null);
    }), t[xn] = null;
  }
};
function Ls(e) {
  this._internalRoot = e;
}
Ls.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Pv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++) ;
    Fn.splice(n, 0, e), n === 0 && Fv(e);
  }
};
function $d(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ym() {
}
function pb(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = fs(o);
        a.call(u);
      };
    }
    var o = Jg(t, r, e, 0, null, !1, !1, "", ym);
    return e._reactRootContainer = o, e[xn] = o.current, ma(e.nodeType === 8 ? e.parentNode : e), kr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = fs(l);
      s.call(u);
    };
  }
  var l = jd(e, 0, !1, null, null, !1, !1, "", ym);
  return e._reactRootContainer = l, e[xn] = l.current, ma(e.nodeType === 8 ? e.parentNode : e), kr(function() {
    Ms(t, l, n, r);
  }), l;
}
function js(e, t, n, r, i) {
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
    Ms(t, o, e, i);
  } else o = pb(n, t, e, i, r);
  return fs(o);
}
Av = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gi(t.pendingLanes);
        n !== 0 && (sd(t, n | 1), ct(t, _e()), !(ie & 6) && (hi = _e() + 500, Jn()));
      }
      break;
    case 13:
      kr(function() {
        var r = En(e, 1);
        if (r !== null) {
          var i = et();
          Gt(r, e, 1, i);
        }
      }), Hd(e, 1);
  }
};
ld = function(e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = et();
      Gt(t, e, 134217728, n);
    }
    Hd(e, 134217728);
  }
};
Iv = function(e) {
  if (e.tag === 13) {
    var t = zn(e), n = En(e, t);
    if (n !== null) {
      var r = et();
      Gt(n, e, t, r);
    }
    Hd(e, t);
  }
};
Pv = function() {
  return se;
};
Rv = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Lu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Iu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = As(r);
            if (!i) throw Error(O(90));
            uv(r), Iu(r, i);
          }
        }
      }
      break;
    case "textarea":
      dv(e, n);
      break;
    case "select":
      t = n.value, t != null && ei(e, !!n.multiple, t, !1);
  }
};
yv = Dd;
xv = kr;
var mb = { usingClientEntryPoint: !1, Events: [Ma, Wr, As, vv, gv, Dd] }, ji = { findFiberByHostInstance: ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hb = { bundleType: ji.bundleType, version: ji.version, rendererPackageName: ji.rendererPackageName, rendererConfig: ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Sn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ji.findFiberByHostInstance || fb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mo.isDisabled && mo.supportsFiber) try {
    Ss = mo.inject(hb), nn = mo;
  } catch {
  }
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mb;
wt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$d(t)) throw Error(O(200));
  return db(e, t, null, n);
};
wt.createRoot = function(e, t) {
  if (!$d(e)) throw Error(O(299));
  var n = !1, r = "", i = e0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = jd(e, 1, !1, null, null, n, !1, r, i), e[xn] = t.current, ma(e.nodeType === 8 ? e.parentNode : e), new Vd(t);
};
wt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = bv(t), e = e === null ? null : e.stateNode, e;
};
wt.flushSync = function(e) {
  return kr(e);
};
wt.hydrate = function(e, t, n) {
  if (!Bs(t)) throw Error(O(200));
  return js(null, e, t, !0, n);
};
wt.hydrateRoot = function(e, t, n) {
  if (!$d(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", o = e0;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Jg(t, null, e, 1, n ?? null, i, !1, a, o), e[xn] = t.current, ma(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Ls(t);
};
wt.render = function(e, t, n) {
  if (!Bs(t)) throw Error(O(200));
  return js(null, e, t, !1, n);
};
wt.unmountComponentAtNode = function(e) {
  if (!Bs(e)) throw Error(O(40));
  return e._reactRootContainer ? (kr(function() {
    js(null, null, e, !1, function() {
      e._reactRootContainer = null, e[xn] = null;
    });
  }), !0) : !1;
};
wt.unstable_batchedUpdates = Dd;
wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Bs(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return js(e, t, n, !1, r);
};
wt.version = "18.3.1-next-f1338f8080-20240426";
function t0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0);
    } catch (e) {
      console.error(e);
    }
}
t0(), tv.exports = wt;
var n0 = tv.exports;
const fr = /* @__PURE__ */ Si(n0);
var r0, xm = n0;
r0 = xm.createRoot, xm.hydrateRoot;
var vc = function(e, t) {
  return vc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, vc(e, t);
};
function Ft(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  vc(e, t);
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
function sn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ar(e, t, n, r) {
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
function vb() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function Ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ze(e, t) {
  var n = t && t.cache ? t.cache : bb, r = t && t.serializer ? t.serializer : wb, i = t && t.strategy ? t.strategy : xb;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function gb(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function yb(e, t, n, r) {
  var i = gb(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function i0(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function a0(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function xb(e, t) {
  var n = e.length === 1 ? yb : i0;
  return a0(e, this, n, t.cache.create(), t.serializer);
}
function Eb(e, t) {
  return a0(e, this, i0, t.cache.create(), t.serializer);
}
var wb = function() {
  return JSON.stringify(arguments);
};
function zd() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
zd.prototype.get = function(e) {
  return this.cache[e];
};
zd.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var bb = {
  create: function() {
    return new zd();
  }
}, Je = {
  variadic: Eb
};
function o0(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
Ze(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: Je.variadic
});
Ze(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: Je.variadic
});
Ze(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: Je.variadic
});
Ze(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: Je.variadic
});
Ze(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: Je.variadic
});
var te;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(te || (te = {}));
var ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ve || (ve = {}));
var vi;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(vi || (vi = {}));
function Em(e) {
  return e.type === ve.literal;
}
function kb(e) {
  return e.type === ve.argument;
}
function s0(e) {
  return e.type === ve.number;
}
function l0(e) {
  return e.type === ve.date;
}
function u0(e) {
  return e.type === ve.time;
}
function c0(e) {
  return e.type === ve.select;
}
function d0(e) {
  return e.type === ve.plural;
}
function Cb(e) {
  return e.type === ve.pound;
}
function f0(e) {
  return e.type === ve.tag;
}
function p0(e) {
  return !!(e && typeof e == "object" && e.type === vi.number);
}
function gc(e) {
  return !!(e && typeof e == "object" && e.type === vi.dateTime);
}
var m0 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sb = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function _b(e) {
  var t = {};
  return e.replace(Sb, function(n) {
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
var Tb = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Nb(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Tb).filter(function(d) {
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
function Ab(e) {
  return e.replace(/^(.*?)-/, "");
}
var wm = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, h0 = /^(@+)?(\+|#+)?[rs]?$/g, Ib = /(\*)(0+)|(#+)(0+)|(0+)/g, v0 = /^(0+)$/;
function bm(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(h0, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function g0(e) {
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
function Pb(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !v0.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function km(e) {
  var t = {}, n = g0(e);
  return n || t;
}
function Rb(e) {
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
        t.style = "unit", t.unit = Ab(i.options[0]);
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
          return j(j({}, l), km(u));
        }, {}));
        continue;
      case "engineering":
        t = j(j(j({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return j(j({}, l), km(u));
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
        i.options[0].replace(Ib, function(l, u, c, f, d, v) {
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
    if (v0.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (wm.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(wm, function(l, u, c, f, d, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : d && v ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = j(j({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = j(j({}, t), bm(a)));
      continue;
    }
    if (h0.test(i.stem)) {
      t = j(j({}, t), bm(i.stem));
      continue;
    }
    var o = g0(i.stem);
    o && (t = j(j({}, t), o));
    var s = Pb(i.stem);
    s && (t = j(j({}, t), s));
  }
  return t;
}
var ho = {
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
function Fb(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Ob(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Ob(e) {
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
  var i = ho[r || ""] || ho[n || ""] || ho["".concat(n, "-001")] || ho["001"];
  return i[0];
}
var tu, Db = new RegExp("^".concat(m0.source, "*")), Mb = new RegExp("".concat(m0.source, "*$"));
function ne(e, t) {
  return { start: e, end: t };
}
var Lb = !!String.prototype.startsWith && "_a".startsWith("a", 1), Bb = !!String.fromCodePoint, jb = !!Object.fromEntries, Hb = !!String.prototype.codePointAt, Vb = !!String.prototype.trimStart, $b = !!String.prototype.trimEnd, zb = !!Number.isSafeInteger, Ub = zb ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, yc = !0;
try {
  var Gb = x0("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  yc = ((tu = Gb.exec("a")) === null || tu === void 0 ? void 0 : tu[0]) === "a";
} catch {
  yc = !1;
}
var Cm = Lb ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), xc = Bb ? String.fromCodePoint : (
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
), Sm = (
  // native
  jb ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), y0 = Hb ? (
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
), Wb = Vb ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Db, "");
  }
), Kb = $b ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Mb, "");
  }
);
function x0(e, t) {
  return new RegExp(e, t);
}
var Ec;
if (yc) {
  var _m = x0("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ec = function(t, n) {
    var r;
    _m.lastIndex = n;
    var i = _m.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ec = function(t, n) {
    for (var r = []; ; ) {
      var i = y0(t, n);
      if (i === void 0 || E0(i) || Qb(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return xc.apply(void 0, r);
  };
var qb = (
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
              type: ve.pound,
              location: ne(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(te.UNMATCHED_CLOSING_TAG, ne(this.clonePosition(), this.clonePosition()));
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
            type: ve.literal,
            value: "<".concat(i, "/>"),
            location: ne(r, this.clonePosition())
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
            return this.error(te.INVALID_TAG, ne(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(te.UNMATCHED_CLOSING_TAG, ne(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ve.tag,
              value: i,
              children: o,
              location: ne(r, this.clonePosition())
            },
            err: null
          } : this.error(te.INVALID_TAG, ne(s, this.clonePosition())));
        } else
          return this.error(te.UNCLOSED_TAG, ne(r, this.clonePosition()));
      } else
        return this.error(te.INVALID_TAG, ne(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Yb(this.char()); )
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
      var l = ne(r, this.clonePosition());
      return {
        val: { type: ve.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Xb(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        return this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ne(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(te.EMPTY_ARGUMENT, ne(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(te.MALFORMED_ARGUMENT, ne(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ne(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ve.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: ne(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ne(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(te.MALFORMED_ARGUMENT, ne(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Ec(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = ne(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(te.EXPECT_ARGUMENT_TYPE, ne(o, l));
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
            var d = Kb(f.val);
            if (d.length === 0)
              return this.error(te.EXPECT_ARGUMENT_STYLE, ne(this.clonePosition(), this.clonePosition()));
            var v = ne(c, this.clonePosition());
            u = { style: d, styleLocation: v };
          }
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var g = ne(i, this.clonePosition());
          if (u && Cm(u == null ? void 0 : u.style, "::", 0)) {
            var b = Wb(u.style.slice(2));
            if (s === "number") {
              var f = this.parseNumberSkeletonFromString(b, u.styleLocation);
              return f.err ? f : {
                val: { type: ve.number, value: r, location: g, style: f.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(te.EXPECT_DATE_TIME_SKELETON, g);
              var m = b;
              this.locale && (m = Fb(b, this.locale));
              var d = {
                type: vi.dateTime,
                pattern: m,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? _b(m) : {}
              }, h = s === "date" ? ve.date : ve.time;
              return {
                val: { type: h, value: r, location: g, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? ve.number : s === "date" ? ve.date : ve.time,
              value: r,
              location: g,
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
            return this.error(te.EXPECT_SELECT_ARGUMENT_OPTIONS, ne(y, j({}, y)));
          this.bumpSpace();
          var k = this.parseIdentifierIfPossible(), C = 0;
          if (s !== "select" && k.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(te.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ne(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(te.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, te.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), k = this.parseIdentifierIfPossible(), C = f.val;
          }
          var S = this.tryParsePluralOrSelectOptions(t, s, n, k);
          if (S.err)
            return S;
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var _ = ne(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: ve.select,
              value: r,
              options: Sm(S.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: ve.plural,
              value: r,
              options: Sm(S.val),
              offset: C,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: _
            },
            err: null
          };
        }
        default:
          return this.error(te.INVALID_ARGUMENT_TYPE, ne(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(te.EXPECT_ARGUMENT_CLOSING_BRACE, ne(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(te.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ne(i, this.clonePosition()));
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
        r = Nb(t);
      } catch {
        return this.error(te.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: vi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Rb(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(te.EXPECT_PLURAL_ARGUMENT_SELECTOR, te.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = ne(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? te.DUPLICATE_SELECT_ARGUMENT_SELECTOR : te.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? te.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : te.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ne(this.clonePosition(), this.clonePosition()));
        var w = this.parseMessage(t + 1, n, r);
        if (w.err)
          return w;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        s.push([
          u,
          {
            value: w.val,
            location: ne(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? te.EXPECT_SELECT_ARGUMENT_SELECTOR : te.EXPECT_PLURAL_ARGUMENT_SELECTOR, ne(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(te.MISSING_OTHER_CLAUSE, ne(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var l = ne(i, this.clonePosition());
      return a ? (o *= r, Ub(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = y0(this.message, t);
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
      if (Cm(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && E0(this.char()); )
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
function Xb(e) {
  return wc(e) || e === 47;
}
function Yb(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function E0(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Qb(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function bc(e) {
  e.forEach(function(t) {
    if (delete t.location, c0(t) || d0(t))
      for (var n in t.options)
        delete t.options[n].location, bc(t.options[n].value);
    else s0(t) && p0(t.style) || (l0(t) || u0(t)) && gc(t.style) ? delete t.style.location : f0(t) && bc(t.children);
  });
}
function Zb(e, t) {
  t === void 0 && (t = {}), t = j({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new qb(e, t).parse();
  if (n.err) {
    var r = SyntaxError(te[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || bc(n.val), n.val;
}
var ln;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ln || (ln = {}));
var er = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Tm = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ln.INVALID_VALUE, a) || this;
    }
    return t;
  }(er)
), Jb = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ln.INVALID_VALUE, i) || this;
    }
    return t;
  }(er)
), ek = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ln.MISSING_VALUE, r) || this;
    }
    return t;
  }(er)
), Xe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Xe || (Xe = {}));
function tk(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Xe.literal || n.type !== Xe.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function w0(e) {
  return typeof e == "function";
}
function Bo(e, t, n, r, i, a, o) {
  if (e.length === 1 && Em(e[0]))
    return [
      {
        type: Xe.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (Em(c)) {
      s.push({
        type: Xe.literal,
        value: c.value
      });
      continue;
    }
    if (Cb(c)) {
      typeof a == "number" && s.push({
        type: Xe.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new ek(f, o);
    var d = i[f];
    if (kb(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), s.push({
        type: typeof d == "string" ? Xe.literal : Xe.object,
        value: d
      });
      continue;
    }
    if (l0(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : gc(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: Xe.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (u0(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : gc(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: Xe.literal,
        value: n.getDateTimeFormat(t, v).format(d)
      });
      continue;
    }
    if (s0(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : p0(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (d = d * (v.scale || 1)), s.push({
        type: Xe.literal,
        value: n.getNumberFormat(t, v).format(d)
      });
      continue;
    }
    if (f0(c)) {
      var w = c.children, g = c.value, b = i[g];
      if (!w0(b))
        throw new Jb(g, "function", o);
      var m = Bo(w, t, n, r, i, a), h = b(m.map(function(C) {
        return C.value;
      }));
      Array.isArray(h) || (h = [h]), s.push.apply(s, h.map(function(C) {
        return {
          type: typeof C == "string" ? Xe.literal : Xe.object,
          value: C
        };
      }));
    }
    if (c0(c)) {
      var y = c.options[d] || c.options.other;
      if (!y)
        throw new Tm(c.value, d, Object.keys(c.options), o);
      s.push.apply(s, Bo(y.value, t, n, r, i));
      continue;
    }
    if (d0(c)) {
      var y = c.options["=".concat(d)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ln.MISSING_INTL_API, o);
        var k = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        y = c.options[k] || c.options.other;
      }
      if (!y)
        throw new Tm(c.value, d, Object.keys(c.options), o);
      s.push.apply(s, Bo(y.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return tk(s);
}
function nk(e, t) {
  return t ? j(j(j({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = j(j({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function rk(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = nk(e[r], t[r]), n;
  }, j({}, e)) : e;
}
function nu(e) {
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
function ik(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ze(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: nu(e.number),
      strategy: Je.variadic
    }),
    getDateTimeFormat: Ze(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: nu(e.dateTime),
      strategy: Je.variadic
    }),
    getPluralRules: Ze(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: nu(e.pluralRules),
      strategy: Je.variadic
    })
  };
}
var b0 = (
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
          return !f.length || d.type !== Xe.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
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
        var s = sn(o, ["formatters"]);
        this.ast = e.__parse(t, j(j({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = rk(e.formats, r), this.formatters = i && i.formatters || ik(this.formatterCache);
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
    }, e.__parse = Zb, e.formats = {
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
), Cr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Cr || (Cr = {}));
var Ba = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i) {
      var a = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), ak = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r) {
      return e.call(this, Cr.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Ba)
), ok = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r) {
      return e.call(this, Cr.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Ba)
), Nm = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r) {
      return e.call(this, Cr.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Ba)
), Ot = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i) {
      var a = e.call(this, Cr.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Ba)
), ru = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(Ot)
), sk = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t(n, r) {
      var i = e.call(this, Cr.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Ba)
);
function Ir(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var lk = function(e) {
}, uk = function(e) {
}, k0 = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: lk,
  onWarn: uk
};
function C0() {
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
function rr(e) {
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
function ck(e) {
  e === void 0 && (e = C0());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = Ze(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, Ge([void 0], l, !1)))();
  }, {
    cache: rr(e.dateTime),
    strategy: Je.variadic
  }), a = Ze(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, Ge([void 0], l, !1)))();
  }, {
    cache: rr(e.number),
    strategy: Je.variadic
  }), o = Ze(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, Ge([void 0], l, !1)))();
  }, {
    cache: rr(e.pluralRules),
    strategy: Je.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: Ze(function(s, l, u, c) {
      return new b0(s, l, u, j({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: rr(e.message),
      strategy: Je.variadic
    }),
    getRelativeTimeFormat: Ze(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, Ge([void 0], s, !1)))();
    }, {
      cache: rr(e.relativeTime),
      strategy: Je.variadic
    }),
    getPluralRules: o,
    getListFormat: Ze(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, Ge([void 0], s, !1)))();
    }, {
      cache: rr(e.list),
      strategy: Je.variadic
    }),
    getDisplayNames: Ze(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, Ge([void 0], s, !1)))();
    }, {
      cache: rr(e.displayNames),
      strategy: Je.variadic
    })
  };
}
function Ud(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new ak("No ".concat(t, " format named: ").concat(n)));
}
function vo(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = j({ timeZone: t }, e[r]), n;
  }, {});
}
function Am(e, t) {
  var n = Object.keys(j(j({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = j(j({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Im(e, t) {
  if (!t)
    return e;
  var n = b0.formats;
  return j(j(j({}, n), e), { date: Am(vo(n.date, t), vo(e.date || {}, t)), time: Am(vo(n.time, t), vo(e.time || {}, t)) });
}
var kc = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, f = e.onError, d = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var w = n.id, g = n.defaultMessage;
  o0(!!w, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var b = String(w), m = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, b) && s[b]
  );
  if (Array.isArray(m) && m.length === 1 && m[0].type === ve.literal)
    return m[0].value;
  if (!r && m && typeof m == "string" && !v)
    return m.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = j(j({}, v), r || {}), o = Im(o, d), u = Im(u, d), !m) {
    if (c === !1 && m === "")
      return m;
    if ((!g || a && a.toLowerCase() !== l.toLowerCase()) && f(new sk(n, a)), g)
      try {
        var h = t.getMessageFormat(g, l, u, i);
        return h.format(r);
      } catch (y) {
        return f(new ru('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), a, n, y)), typeof g == "string" ? g : b;
      }
    return b;
  }
  try {
    var h = t.getMessageFormat(m, a, o, j({ formatters: t }, i || {}));
    return h.format(r);
  } catch (y) {
    f(new ru('Error formatting message: "'.concat(b, '", using ').concat(g ? "default message" : "id", " as fallback."), a, n, y));
  }
  if (g)
    try {
      var h = t.getMessageFormat(g, l, u, i);
      return h.format(r);
    } catch (y) {
      f(new ru('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), a, n, y));
    }
  return typeof m == "string" ? m : typeof g == "string" ? g : b;
}, S0 = [
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
function Hs(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = j(j({}, s && { timeZone: s }), l && Ud(a, t, l, o)), c = Ir(r, S0, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = j(j({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function dk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Hs(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Ot("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function fk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Hs(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Ot("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function pk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, f = Ir(s, S0, l ? { timeZone: l } : {});
  try {
    return t(u, f).formatRange(i, a);
  } catch (d) {
    c(new Ot("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function mk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Hs(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Ot("Error formatting date.", e.locale, l));
  }
  return [];
}
function hk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Hs(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Ot("Error formatting time.", e.locale, l));
  }
  return [];
}
var vk = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function gk(e, t, n, r) {
  var i = e.locale, a = e.onError, o = Intl.DisplayNames;
  o || a(new er(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ln.MISSING_INTL_API));
  var s = Ir(r, vk);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new Ot("Error formatting display name.", i, l));
  }
}
var yk = [
  "type",
  "style"
], Pm = Date.now();
function xk(e) {
  return "".concat(Pm, "_").concat(e, "_").concat(Pm);
}
function Ek(e, t, n, r) {
  r === void 0 && (r = {});
  var i = _0(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function _0(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new er(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ln.MISSING_INTL_API));
  var s = Ir(r, yk);
  try {
    var l = {}, u = n.map(function(c, f) {
      if (typeof c == "object") {
        var d = xk(f);
        return l[d] = c, d;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : j(j({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new Ot("Error formatting list.", i, c));
  }
  return n;
}
var wk = ["type"];
function bk(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ln.MISSING_INTL_API));
  var o = Ir(r, wk);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new Ot("Error formatting plural.", i, s));
  }
  return "other";
}
var kk = ["numeric", "style"];
function Ck(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && Ud(i, "relative", o, a) || {}, l = Ir(n, kk, s);
  return t(r, l);
}
function Sk(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new er(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ln.MISSING_INTL_API));
  try {
    return Ck(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new Ot("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var _k = [
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
function T0(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && Ud(i, "number", o, a) || {}, l = Ir(n, _k, s);
  return t(r, l);
}
function Tk(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return T0(e, t, r).format(n);
  } catch (i) {
    e.onError(new Ot("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function Nk(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return T0(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Ot("Error formatting number.", e.locale, i));
  }
  return [];
}
function Ak(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Ik(e) {
  e.onWarn && e.defaultRichTextElements && Ak(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Pk(e, t) {
  var n = ck(t), r = j(j({}, k0), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Nm('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Nm('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new ok('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Ik(r), j(j({}, r), {
    formatters: n,
    formatNumber: Tk.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Nk.bind(null, r, n.getNumberFormat),
    formatRelativeTime: Sk.bind(null, r, n.getRelativeTimeFormat),
    formatDate: dk.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: mk.bind(null, r, n.getDateTimeFormat),
    formatTime: fk.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: pk.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: hk.bind(null, r, n.getDateTimeFormat),
    formatPlural: bk.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: kc.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: kc.bind(null, r, n),
    formatList: Ek.bind(null, r, n.getListFormat),
    formatListToParts: _0.bind(null, r, n.getListFormat),
    formatDisplayName: gk.bind(null, r, n.getDisplayNames)
  });
}
function N0(e) {
  o0(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var A0 = j(j({}, k0), { textComponent: E.Fragment });
function Rk(e) {
  return function(t) {
    return e(E.Children.toArray(t));
  };
}
function Cc(e, t) {
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
var I0 = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De = typeof Symbol == "function" && Symbol.for, Gd = De ? Symbol.for("react.element") : 60103, Wd = De ? Symbol.for("react.portal") : 60106, Vs = De ? Symbol.for("react.fragment") : 60107, $s = De ? Symbol.for("react.strict_mode") : 60108, zs = De ? Symbol.for("react.profiler") : 60114, Us = De ? Symbol.for("react.provider") : 60109, Gs = De ? Symbol.for("react.context") : 60110, Kd = De ? Symbol.for("react.async_mode") : 60111, Ws = De ? Symbol.for("react.concurrent_mode") : 60111, Ks = De ? Symbol.for("react.forward_ref") : 60112, qs = De ? Symbol.for("react.suspense") : 60113, Fk = De ? Symbol.for("react.suspense_list") : 60120, Xs = De ? Symbol.for("react.memo") : 60115, Ys = De ? Symbol.for("react.lazy") : 60116, Ok = De ? Symbol.for("react.block") : 60121, Dk = De ? Symbol.for("react.fundamental") : 60117, Mk = De ? Symbol.for("react.responder") : 60118, Lk = De ? Symbol.for("react.scope") : 60119;
function kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Gd:
        switch (e = e.type, e) {
          case Kd:
          case Ws:
          case Vs:
          case zs:
          case $s:
          case qs:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Gs:
              case Ks:
              case Ys:
              case Xs:
              case Us:
                return e;
              default:
                return t;
            }
        }
      case Wd:
        return t;
    }
  }
}
function P0(e) {
  return kt(e) === Ws;
}
le.AsyncMode = Kd;
le.ConcurrentMode = Ws;
le.ContextConsumer = Gs;
le.ContextProvider = Us;
le.Element = Gd;
le.ForwardRef = Ks;
le.Fragment = Vs;
le.Lazy = Ys;
le.Memo = Xs;
le.Portal = Wd;
le.Profiler = zs;
le.StrictMode = $s;
le.Suspense = qs;
le.isAsyncMode = function(e) {
  return P0(e) || kt(e) === Kd;
};
le.isConcurrentMode = P0;
le.isContextConsumer = function(e) {
  return kt(e) === Gs;
};
le.isContextProvider = function(e) {
  return kt(e) === Us;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gd;
};
le.isForwardRef = function(e) {
  return kt(e) === Ks;
};
le.isFragment = function(e) {
  return kt(e) === Vs;
};
le.isLazy = function(e) {
  return kt(e) === Ys;
};
le.isMemo = function(e) {
  return kt(e) === Xs;
};
le.isPortal = function(e) {
  return kt(e) === Wd;
};
le.isProfiler = function(e) {
  return kt(e) === zs;
};
le.isStrictMode = function(e) {
  return kt(e) === $s;
};
le.isSuspense = function(e) {
  return kt(e) === qs;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Vs || e === Ws || e === zs || e === $s || e === qs || e === Fk || typeof e == "object" && e !== null && (e.$$typeof === Ys || e.$$typeof === Xs || e.$$typeof === Us || e.$$typeof === Gs || e.$$typeof === Ks || e.$$typeof === Dk || e.$$typeof === Mk || e.$$typeof === Lk || e.$$typeof === Ok);
};
le.typeOf = kt;
I0.exports = le;
var Bk = I0.exports, R0 = Bk, jk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, F0 = {};
F0[R0.ForwardRef] = jk;
F0[R0.Memo] = Hk;
var qd = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = E.createContext(null)) : E.createContext(null);
qd.Consumer;
var Vk = qd.Provider, $k = Vk, zk = qd;
function ja() {
  var e = E.useContext(zk);
  return N0(e), e;
}
var Sc;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Sc || (Sc = {}));
var _c;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(_c || (_c = {}));
function O0(e) {
  var t = function(n) {
    var r = ja(), i = n.value, a = n.children, o = sn(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = _c[e], t;
}
function Ha(e) {
  var t = function(n) {
    var r = ja(), i = n.value, a = n.children, o = sn(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || E.Fragment;
    return E.createElement(l, null, s);
  };
  return t.displayName = Sc[e], t;
}
function D0(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = w0(r) ? Rk(r) : r, t;
  }, {});
}
var Rm = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = D0(r), s = kc.apply(void 0, Ge([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? E.Children.toArray(s) : s;
}, Fm = function(e, t) {
  var n = e.defaultRichTextElements, r = sn(e, ["defaultRichTextElements"]), i = D0(n), a = Pk(j(j(j({}, A0), r), { defaultRichTextElements: i }), t), o = {
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
    formatMessage: Rm.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Rm.bind(null, o, a.formatters)
  });
};
function iu(e) {
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
var Uk = (
  /** @class */
  function(e) {
    Ft(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = C0(), n.state = {
        cache: n.cache,
        intl: Fm(iu(n.props), n.cache),
        prevConfig: iu(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = iu(n);
      return Cc(i, o) ? null : {
        intl: Fm(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return N0(this.state.intl), E.createElement($k, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = A0, t;
  }(E.PureComponent)
);
function Gk(e, t) {
  var n = e.values, r = sn(e, ["values"]), i = t.values, a = sn(t, ["values"]);
  return Cc(i, n) && Cc(r, a);
}
function M0(e) {
  var t = ja(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? E.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, f = c === void 0 ? i : c, d = e.ignoreTag, v = { id: a, description: o, defaultMessage: s }, w = n(v, l, {
    ignoreTag: d
  });
  return typeof u == "function" ? u(Array.isArray(w) ? w : [w]) : f ? E.createElement(f, null, E.Children.toArray(w)) : E.createElement(E.Fragment, null, w);
}
M0.displayName = "FormattedMessage";
var L0 = E.memo(M0, Gk);
L0.displayName = "MemoizedFormattedMessage";
Ha("formatDate");
Ha("formatTime");
Ha("formatNumber");
Ha("formatList");
Ha("formatDisplayName");
O0("formatDate");
O0("formatTime");
var B0 = { exports: {} };
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
})(B0);
var Wk = B0.exports;
const L = /* @__PURE__ */ Si(Wk);
function H() {
  return H = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, H.apply(null, arguments);
}
function Q(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Xd = /* @__PURE__ */ x.createContext({});
Xd.Consumer;
Xd.Provider;
function ce(e, t) {
  var n = E.useContext(Xd);
  return e || n[t] || t;
}
function Kk() {
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
var qk = ["as", "disabled", "onKeyDown"];
function Om(e) {
  return !e || e.trim() === "#";
}
var Va = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = Q(e, qk), s = function(c) {
    var f = o.href, d = o.onClick;
    if ((i || Om(f)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return Om(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ x.createElement(r, H({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: Kk(l, a)
  }));
});
Va.displayName = "SafeAnchor";
var Xk = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], Yk = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Qs = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = Q(e, Xk), f = ce(n, "btn"), d = L(o, f, a && "active", r && f + "-" + r, s && f + "-block", i && f + "-" + i);
  if (c.href)
    return /* @__PURE__ */ x.createElement(Va, H({}, c, {
      as: u,
      ref: t,
      className: L(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var v = u || "button";
  return /* @__PURE__ */ x.createElement(v, H({}, c, {
    className: d
  }));
});
Qs.displayName = "Button";
Qs.defaultProps = Yk;
var j0 = { exports: {} }, Qk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Zk = Qk, Jk = Zk;
function H0() {
}
function V0() {
}
V0.resetWarningCache = H0;
var e1 = function() {
  function e(r, i, a, o, s, l) {
    if (l !== Jk) {
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
    checkPropTypes: V0,
    resetWarningCache: H0
  };
  return n.PropTypes = n, n;
};
j0.exports = e1();
var t1 = j0.exports;
const p = /* @__PURE__ */ Si(t1);
let Dm = 0;
const Yd = (e = "id") => (Dm += 1, `${e}${Dm}`);
let Ki = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function n1(e, t, n) {
  class r extends x.Component {
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
        case Ki.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${l}'.`), a[l] = this.props[o];
          break;
        case Ki.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${f}'`);
          break;
        case Ki.FORMAT:
          u(this.props[o]) ? a[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${f}`), a[o] = c(this.props[o], this.props));
          break;
        case Ki.MOVED_AND_FORMAT: {
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
      return /* @__PURE__ */ x.createElement(e, {
        ...o
      }, this.props.children || a);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    cp(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Qd({
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
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ x.createElement("span", {
      className: L("pgn__icon", {
        [`pgn__icon__${o}`]: !!o
      }, n),
      id: t,
      ...s
    }, /* @__PURE__ */ x.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ x.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("span", {
    id: t || Yd("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ x.createElement("span", {
    className: "sr-only"
  }, i));
}
Qd.propTypes = {
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
Qd.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const bn = n1(Qd, "Icon", {
  className: {
    deprType: Ki.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Nt = /* @__PURE__ */ x.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ x.createElement(Qs, {
  size: r,
  ...i,
  className: L(i.className),
  ref: a
}, n && /* @__PURE__ */ x.createElement(bn, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ x.createElement(bn, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
var Mm = { exports: {} }, Tc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, f) {
      var d = u || "<<anonymous>>", v = f || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + v + "` was not specified " + ("in `" + d + "`.")) : null;
      for (var w = arguments.length, g = Array(w > 6 ? w - 6 : 0), b = 6; b < w; b++)
        g[b - 6] = arguments[b];
      return r.apply(void 0, [s, l, d, c, v].concat(g));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Tc, Tc.exports);
var r1 = Tc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r1, r = i(n);
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
      return s.forEach(function(w) {
        if (v == null) {
          var g = w.apply(void 0, f);
          g != null && (v = g);
        }
      }), v;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Mm, Mm.exports);
var i1 = ["as", "className", "type", "tooltip"], a1 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: p.string,
  /** Display feedback as a tooltip. */
  tooltip: p.bool,
  as: p.elementType
}, $a = /* @__PURE__ */ x.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = Q(e, i1);
    return /* @__PURE__ */ x.createElement(r, H({}, u, {
      ref: t,
      className: L(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
$a.displayName = "Feedback";
$a.propTypes = a1;
var Kt = /* @__PURE__ */ x.createContext({
  controlId: void 0
}), o1 = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], Zd = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, f = c === void 0 ? !1 : c, d = e.isStatic, v = e.as, w = v === void 0 ? "input" : v, g = Q(e, o1), b = E.useContext(Kt), m = b.controlId, h = b.custom, y = h ? [i, "custom-control-input"] : [r, "form-check-input"], k = y[0], C = y[1];
  return r = ce(k, C), /* @__PURE__ */ x.createElement(w, H({}, g, {
    ref: t,
    type: s,
    id: n || m,
    className: L(a, r, u && "is-valid", f && "is-invalid", d && "position-static")
  }));
});
Zd.displayName = "FormCheckInput";
var s1 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Jd = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = Q(e, s1), s = E.useContext(Kt), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], f = c[0], d = c[1];
  return n = ce(f, d), /* @__PURE__ */ x.createElement("label", H({}, o, {
    ref: t,
    htmlFor: a || l,
    className: L(i, n)
  }));
});
Jd.displayName = "FormCheckLabel";
var l1 = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Pr = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, f = e.isInvalid, d = f === void 0 ? !1 : f, v = e.feedbackTooltip, w = v === void 0 ? !1 : v, g = e.feedback, b = e.className, m = e.style, h = e.title, y = h === void 0 ? "" : h, k = e.type, C = k === void 0 ? "checkbox" : k, S = e.label, _ = e.children, T = e.custom, P = e.as, N = P === void 0 ? "input" : P, B = Q(e, l1), A = C === "switch" ? !0 : T, I = A ? [i, "custom-control"] : [r, "form-check"], V = I[0], W = I[1];
  r = ce(V, W);
  var Z = E.useContext(Kt), Y = Z.controlId, R = E.useMemo(function() {
    return {
      controlId: n || Y,
      custom: A
    };
  }, [Y, A, n]), D = A || S != null && S !== !1 && !_, $ = /* @__PURE__ */ x.createElement(Zd, H({}, B, {
    type: C === "switch" ? "checkbox" : C,
    ref: t,
    isValid: c,
    isInvalid: d,
    isStatic: !D,
    disabled: l,
    as: N
  }));
  return /* @__PURE__ */ x.createElement(Kt.Provider, {
    value: R
  }, /* @__PURE__ */ x.createElement("div", {
    style: m,
    className: L(b, r, A && "custom-" + C, o && r + "-inline")
  }, _ || /* @__PURE__ */ x.createElement(x.Fragment, null, $, D && /* @__PURE__ */ x.createElement(Jd, {
    title: y
  }, S), (c || d) && /* @__PURE__ */ x.createElement($a, {
    type: c ? "valid" : "invalid",
    tooltip: w
  }, g))));
});
Pr.displayName = "FormCheck";
Pr.Input = Zd;
Pr.Label = Jd;
var u1 = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], ef = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, f = Q(e, u1), d = E.useContext(Kt), v = d.controlId, w = d.custom, g = "file", b = w ? [i, "custom-file-input"] : [r, "form-control-file"], m = b[0], h = b[1];
  return r = ce(m, h), /* @__PURE__ */ x.createElement(c, H({}, f, {
    ref: t,
    id: n || v,
    type: g,
    lang: l,
    className: L(a, r, o && "is-valid", s && "is-invalid")
  }));
});
ef.displayName = "FormFileInput";
var c1 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], ps = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = Q(e, c1), s = E.useContext(Kt), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], f = c[0], d = c[1];
  return n = ce(f, d), /* @__PURE__ */ x.createElement("label", H({}, o, {
    ref: t,
    htmlFor: a || l,
    className: L(i, n),
    "data-browse": o["data-browse"]
  }));
});
ps.displayName = "FormFileLabel";
var d1 = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Zs = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, f = e.feedbackTooltip, d = f === void 0 ? !1 : f, v = e.feedback, w = e.className, g = e.style, b = e.label, m = e.children, h = e.custom, y = e.lang, k = e["data-browse"], C = e.as, S = C === void 0 ? "div" : C, _ = e.inputAs, T = _ === void 0 ? "input" : _, P = Q(e, d1), N = h ? [i, "custom"] : [r, "form-file"], B = N[0], A = N[1];
  r = ce(B, A);
  var I = "file", V = E.useContext(Kt), W = V.controlId, Z = E.useMemo(function() {
    return {
      controlId: n || W,
      custom: h
    };
  }, [W, h, n]), Y = b != null && b !== !1 && !m, R = /* @__PURE__ */ x.createElement(ef, H({}, P, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: T,
    lang: y
  }));
  return /* @__PURE__ */ x.createElement(Kt.Provider, {
    value: Z
  }, /* @__PURE__ */ x.createElement(S, {
    style: g,
    className: L(w, r, h && "custom-" + I)
  }, m || /* @__PURE__ */ x.createElement(x.Fragment, null, h ? /* @__PURE__ */ x.createElement(x.Fragment, null, R, Y && /* @__PURE__ */ x.createElement(ps, {
    "data-browse": k
  }, b)) : /* @__PURE__ */ x.createElement(x.Fragment, null, Y && /* @__PURE__ */ x.createElement(ps, null, b), R), (l || c) && /* @__PURE__ */ x.createElement($a, {
    type: l ? "valid" : "invalid",
    tooltip: d
  }, v))));
});
Zs.displayName = "FormFile";
Zs.Input = ef;
Zs.Label = ps;
var f1 = function() {
}, p1 = f1;
const m1 = /* @__PURE__ */ Si(p1);
var h1 = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], $0 = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, f = e.isInvalid, d = f === void 0 ? !1 : f, v = e.plaintext, w = e.readOnly, g = e.custom, b = e.as, m = b === void 0 ? "input" : b, h = Q(e, h1), y = E.useContext(Kt), k = y.controlId, C = g ? [r, "custom"] : [n, "form-control"], S = C[0], _ = C[1];
  n = ce(S, _);
  var T;
  if (v) {
    var P;
    T = (P = {}, P[n + "-plaintext"] = !0, P);
  } else if (i === "file") {
    var N;
    T = (N = {}, N[n + "-file"] = !0, N);
  } else if (i === "range") {
    var B;
    T = (B = {}, B[n + "-range"] = !0, B);
  } else if (m === "select" && g) {
    var A;
    T = (A = {}, A[n + "-select"] = !0, A[n + "-select-" + a] = a, A);
  } else {
    var I;
    T = (I = {}, I[n] = !0, I[n + "-" + a] = a, I);
  }
  return /* @__PURE__ */ x.createElement(m, H({}, h, {
    type: i,
    size: o,
    ref: t,
    readOnly: w,
    id: s || k,
    className: L(l, T, c && "is-valid", d && "is-invalid")
  }));
});
$0.displayName = "FormControl";
const z0 = Object.assign($0, {
  Feedback: $a
});
var v1 = ["bsPrefix", "className", "children", "controlId", "as"], U0 = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = Q(e, v1);
  n = ce(n, "form-group");
  var u = E.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ x.createElement(Kt.Provider, {
    value: u
  }, /* @__PURE__ */ x.createElement(s, H({}, l, {
    ref: t,
    className: L(r, n)
  }), i));
});
U0.displayName = "FormGroup";
var g1 = ["bsPrefix", "className", "as"], y1 = ["xl", "lg", "md", "sm", "xs"], G0 = /* @__PURE__ */ x.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = Q(e, g1), s = ce(n, "col"), l = [], u = [];
    return y1.forEach(function(c) {
      var f = o[c];
      delete o[c];
      var d, v, w;
      if (typeof f == "object" && f != null) {
        var g = f.span;
        d = g === void 0 ? !0 : g, v = f.offset, w = f.order;
      } else
        d = f;
      var b = c !== "xs" ? "-" + c : "";
      d && l.push(d === !0 ? "" + s + b : "" + s + b + "-" + d), w != null && u.push("order" + b + "-" + w), v != null && u.push("offset" + b + "-" + v);
    }), l.length || l.push(s), /* @__PURE__ */ x.createElement(a, H({}, o, {
      ref: t,
      className: L.apply(void 0, [r].concat(l, u))
    }));
  }
);
G0.displayName = "Col";
var x1 = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], E1 = {
  column: !1,
  srOnly: !1
}, tf = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = Q(e, x1), c = E.useContext(Kt), f = c.controlId;
  i = ce(i, "form-label");
  var d = "col-form-label";
  typeof a == "string" && (d = d + " " + d + "-" + a);
  var v = L(s, i, o && "sr-only", a && d);
  return l = l || f, a ? /* @__PURE__ */ x.createElement(G0, H({
    ref: t,
    as: "label",
    className: v,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ x.createElement(r, H({
      ref: t,
      className: v,
      htmlFor: l
    }, u))
  );
});
tf.displayName = "FormLabel";
tf.defaultProps = E1;
var w1 = ["bsPrefix", "className", "as", "muted"], W0 = /* @__PURE__ */ x.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = Q(e, w1);
    return n = ce(n, "form-text"), /* @__PURE__ */ x.createElement(a, H({}, s, {
      ref: t,
      className: L(r, n, o && "text-muted")
    }));
  }
);
W0.displayName = "FormText";
var Js = /* @__PURE__ */ x.forwardRef(function(e, t) {
  return /* @__PURE__ */ x.createElement(Pr, H({}, e, {
    ref: t,
    type: "switch"
  }));
});
Js.displayName = "Switch";
Js.Input = Pr.Input;
Js.Label = Pr.Label;
var b1 = /-(.)/g;
function k1(e) {
  return e.replace(b1, function(t, n) {
    return n.toUpperCase();
  });
}
var C1 = ["className", "bsPrefix", "as"], S1 = function(t) {
  return t[0].toUpperCase() + k1(t).slice(1);
};
function Ai(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? S1(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ x.forwardRef(function(l, u) {
    var c = l.className, f = l.bsPrefix, d = l.as, v = d === void 0 ? a || "div" : d, w = Q(l, C1), g = ce(f, e);
    return /* @__PURE__ */ x.createElement(v, H({
      ref: u,
      className: L(c, g)
    }, w));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var _1 = ["bsPrefix", "inline", "className", "validated", "as"], T1 = Ai("form-row"), N1 = {
  inline: !1
}, qt = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = Q(e, _1);
  return n = ce(n, "form"), /* @__PURE__ */ x.createElement(s, H({}, l, {
    ref: t,
    className: L(i, a && "was-validated", r && n + "-inline")
  }));
});
qt.displayName = "Form";
qt.defaultProps = N1;
qt.Row = T1;
qt.Group = U0;
qt.Control = z0;
qt.Check = Pr;
qt.File = Zs;
qt.Switch = Js;
qt.Label = tf;
qt.Text = W0;
function Gn(e) {
  return typeof e == "string" || e instanceof String;
}
function Lm(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function K0(e, t) {
  return Array.isArray(t) ? K0(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
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
function A1(e) {
  switch (e) {
    case G.LEFT:
      return G.FORCE_LEFT;
    case G.RIGHT:
      return G.FORCE_RIGHT;
    default:
      return e;
  }
}
function au(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ms(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!ms(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!ms(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class I1 {
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
function X(e, t) {
  return new X.InputMask(e, t);
}
function q0(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? X.MaskedRegExp : Gn(e) ? X.MaskedPattern : e === Date ? X.MaskedDate : e === Number ? X.MaskedNumber : Array.isArray(e) || e === Array ? X.MaskedDynamic : X.Masked && e.prototype instanceof X.Masked ? e : X.Masked && e instanceof X.Masked ? e.constructor : e instanceof Function ? X.MaskedFunction : (console.warn("Mask not found for mask", e), X.Masked);
}
function ka(e) {
  if (!e) throw new Error("Options in not defined");
  if (X.Masked) {
    if (e.prototype instanceof X.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof X.Masked ? {
      mask: e
    } : Lm(e) && e.mask instanceof X.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...K0(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Lm(e) ? {
    ...e
  } : {
    mask: e
  };
}
function kn(e) {
  if (X.Masked && e instanceof X.Masked) return e;
  const t = ka(e), n = q0(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
X.createMask = kn;
class nf {
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
X.MaskElement = nf;
const Bm = 90, P1 = 89;
class el extends nf {
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
    if (this._handlers.redo && (t.keyCode === Bm && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === P1 && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Bm && (t.metaKey || t.ctrlKey))
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
X.HTMLMaskElement = el;
class R1 extends el {
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
X.HTMLMaskElement = el;
class X0 extends el {
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
X.HTMLContenteditableMaskElement = X0;
class tl {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > tl.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
tl.MAX_LENGTH = 100;
class F1 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof nf ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new X0(t) : new R1(t), this.masked = kn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new tl(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof X.Masked) && this.masked.constructor === q0(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof X.Masked ? t : kn({
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
    const n = new I1({
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
X.InputMask = F1;
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
X.ChangeDetails = J;
class tn {
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
class We {
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
      ...We.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new tn(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Gn(t) && (t = new tn(String(t))), t.appendTo(this);
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
    if (!Gn(t)) throw new Error("value should be string");
    const i = Gn(r) ? new tn(String(r)) : r;
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
    l && (i = A1(i), u = this.extractInput(0, o, {
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
    return !ms(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || We.EMPTY_VALUES.includes(t) && We.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new J();
  }
}
We.DEFAULTS = {
  skipInvalid: !0
};
We.EMPTY_VALUES = [void 0, null, ""];
X.Masked = We;
class pr {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Gn(t) ? new tn(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof tn)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof pr) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof X.MaskedPattern))
      return new tn(this.toString()).appendTo(t);
    const n = new J();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof pr || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof pr && t._blocks[o]), s) {
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
      const a = "chunks" in i ? new pr() : new tn();
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
class O1 {
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
class Y0 {
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
    return new tn("");
  }
  appendTail(t) {
    return Gn(t) && (t = new tn(String(t))), t.appendTo(this);
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
class hs {
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
    this.masked = kn(l), Object.assign(this, {
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
hs.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class D1 extends We {
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
X.MaskedRegExp = D1;
class Ke extends We {
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
      ...Ke.DEFAULTS,
      ...t,
      definitions: Object.assign({}, hs.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
            ...w
          } = ka(this.blocks[f]), g = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...w,
            repeat: v,
            parent: this
          }, b = v != null ? new X.RepeatBlock(
            g
            /* TODO */
          ) : kn(g);
          b && (this._blocks.push(b), d && (this.exposeBlock = b), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), a += f.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === Ke.STOP_CHAR) {
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
      if (o === Ke.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new hs({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...ka(t[o]),
        parent: this
      }) : new Y0({
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
    const r = new pr();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof pr && (l.blockIndex = a), r.extend(l);
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
    const r = new O1(this, t);
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
Ke.DEFAULTS = {
  ...We.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Ke.STOP_CHAR = "`";
Ke.ESCAPE_CHAR = "\\";
Ke.InputDefinition = hs;
Ke.FixedDefinition = Y0;
X.MaskedPattern = Ke;
class jo extends Ke {
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
X.MaskedRange = jo;
const M1 = "d{.}`m{.}`Y";
class mn extends Ke {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Gn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(mn.extractPatternOptions({
      ...mn.DEFAULTS,
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
      ...mn.DEFAULTS,
      ...t
    }, o = Object.assign({}, mn.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: Gn(n) ? n : r,
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
    return super.optionsIsChanged(mn.extractPatternOptions(t));
  }
}
mn.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: jo,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: jo,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: jo,
    from: 1900,
    to: 9999
  }
});
mn.DEFAULTS = {
  ...Ke.DEFAULTS,
  mask: Date,
  pattern: M1,
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
X.MaskedDate = mn;
class nl extends We {
  constructor(t) {
    super({
      ...nl.DEFAULTS,
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
      } = ka(n), a = kn({
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
      return ms(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
nl.DEFAULTS = {
  ...We.DEFAULTS,
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
X.MaskedDynamic = nl;
class rl extends Ke {
  constructor(t) {
    super({
      ...rl.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new tn("", t);
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
rl.DEFAULTS = {
  ...Ke.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
X.MaskedEnum = rl;
class L1 extends We {
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
X.MaskedFunction = L1;
var Q0;
class ht extends We {
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
      ...ht.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + au(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(au).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(au(this.thousandsSeparator), "g");
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
      this.min != null && this.min < 0 && this.number < this.min && (d = this.min), this.max != null && this.max > 0 && this.number > this.max && (d = this.max), d != null && (this.autofix ? (this._value = this.format(d, this).replace(ht.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === ht.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ht.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(ht.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || ht.EMPTY_VALUES.includes(t) && ht.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
Q0 = ht;
ht.UNMASKED_RADIX = ".";
ht.EMPTY_VALUES = [...We.EMPTY_VALUES, 0];
ht.DEFAULTS = {
  ...We.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [Q0.UNMASKED_RADIX],
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
X.MaskedNumber = ht;
const Nc = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Z0(e, t, n) {
  t === void 0 && (t = Nc.MASKED), n === void 0 && (n = Nc.MASKED);
  const r = kn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function B1(e, t, n, r) {
  return Z0(t, n, r)(e);
}
X.PIPE_TYPE = Nc;
X.createPipe = Z0;
X.pipe = B1;
class j1 extends Ke {
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
    } = ka(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = kn(this._blockOpts);
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
      return this._blocks.push(kn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
X.RepeatBlock = j1;
try {
  globalThis.IMask = X;
} catch {
}
const J0 = {
  // common
  mask: p.oneOfType([p.array, p.func, p.string, p.instanceOf(RegExp), p.oneOf([Date, Number, X.Masked]), p.instanceOf(X.Masked)]),
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
}, ey = Object.keys(J0).filter((e) => e !== "value"), H1 = ["value", "unmask", "onAccept", "onComplete", "inputRef"], V1 = ey.filter((e) => H1.indexOf(e) < 0);
function $1(e) {
  var t;
  const n = (t = class extends x.Component {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = X(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => V1.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return ey.forEach((s) => {
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
      return x.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = J0, x.forwardRef((i, a) => x.createElement(n, {
    ...i,
    ref: a
  }));
}
const z1 = $1((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return x.createElement("input", {
    ...n,
    ref: t
  });
}), U1 = (e, t) => x.createElement(z1, {
  ...e,
  ref: t
}), G1 = x.forwardRef(U1), W1 = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), vr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, K1 = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = E.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(!!o.target.value)];
}, jm = (e, t) => {
  const [n, r] = E.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = Yd(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = E.useState(l);
    return E.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, ou = (e) => e, q1 = () => {
}, ty = /* @__PURE__ */ x.createContext({
  getControlProps: ou,
  useSetIsControlGroupEffect: q1,
  getLabelProps: ou,
  getDescriptorProps: ou,
  hasFormGroupProvider: !1
}), Dt = () => x.useContext(ty);
function X1(e) {
  const [t, n] = E.useState(e);
  return [t, (i) => {
    E.useEffect(() => n(i), [i]);
  }];
}
function il({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = E.useMemo(() => t || Yd("form-field"), [t]), [o, s] = jm(a), [l, u] = jm(a), [c, f] = X1(!1), g = {
    getControlProps: E.useCallback((b) => {
      const m = c ? l : void 0;
      return W1({
        ...b,
        "aria-describedby": L(b["aria-describedby"], o) || void 0,
        "aria-labelledby": L(b["aria-labelledby"], m) || void 0,
        id: a
      });
    }, [c, o, l, a]),
    getLabelProps: (b) => {
      const m = u(b == null ? void 0 : b.id);
      return c ? {
        ...b,
        id: m
      } : {
        ...b,
        htmlFor: a
      };
    },
    getDescriptorProps: (b) => {
      const m = s(b == null ? void 0 : b.id);
      return {
        ...b,
        id: m
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
  return /* @__PURE__ */ x.createElement(ty.Provider, {
    value: g
  }, e);
}
const Y1 = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), Q1 = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), Z1 = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), J1 = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), ny = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), eC = (e) => /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  fill: "currentColor"
})), tC = (e) => /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), nC = (e) => /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), rC = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), iC = (e) => /* @__PURE__ */ E.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ E.createElement("path", {
  xmlns: "http://www.w3.org/2000/svg",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  fill: "currentColor"
})), gi = {
  SMALL: "sm",
  LARGE: "lg"
}, Vt = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, aC = {
  [Vt.DEFAULT]: null,
  [Vt.VALID]: Z1,
  [Vt.INVALID]: ny,
  [Vt.WARNING]: iC,
  [Vt.CRITERIA_EMPTY]: rC,
  [Vt.CRITERIA_VALID]: J1,
  [Vt.CRITERIA_INVALID]: Q1
}, oC = ({
  isInvalid: e,
  isValid: t
}) => t ? Vt.VALID : e ? Vt.INVALID : Vt.DEFAULT;
function rf({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = aC[e];
  return n ? /* @__PURE__ */ x.createElement(bn, {
    src: n
  }) : null;
}
rf.propTypes = {
  type: p.oneOf(Object.values(Vt)),
  customIcon: p.node
};
rf.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function al({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...a
}) {
  const o = L(a.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ x.createElement("div", {
    ...a,
    className: o
  }, i && /* @__PURE__ */ x.createElement(rf, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ x.createElement("div", null, e));
}
const sC = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
al.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies text type, this affects styling. */
  type: p.oneOf(sC),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show text with muted styling. */
  muted: p.bool
};
al.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function qn({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = Dt(), a = n(t), o = L("pgn__form-control-description", t.className), s = t.type || oC({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ x.createElement(al, {
    ...a,
    className: o,
    type: s
  }, e);
}
const lC = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
qn.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies feedback type, this affects styling. */
  type: p.oneOf(lC),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: p.bool
};
qn.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function ry({
  children: e
}) {
  const {
    controlId: t
  } = Dt();
  return /* @__PURE__ */ x.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ x.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ x.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
ry.propTypes = {
  children: p.node.isRequired
};
function vs({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ x.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
vs.propTypes = {
  children: p.node.isRequired,
  location: p.oneOf(["leading", "trailing"])
};
vs.defaultProps = {
  location: "leading"
};
function af({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const o = Dt(), s = a.size || o.size;
  return /* @__PURE__ */ x.createElement("div", {
    className: L("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": s === gi.LARGE,
      "pgn__form-control-decorator-group-sm": s === gi.SMALL
    }, i),
    ...a
  }, e, t && /* @__PURE__ */ x.createElement(vs, {
    location: "leading"
  }, t), n && /* @__PURE__ */ x.createElement(vs, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ x.createElement(ry, null, r));
}
af.propTypes = {
  children: p.node.isRequired,
  leadingElement: p.node,
  trailingElement: p.node,
  floatingLabel: p.node,
  className: p.string,
  size: p.oneOf([gi.SMALL, gi.LARGE])
};
af.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Ii = /* @__PURE__ */ x.forwardRef(({
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
    ...w
  } = Dt(), g = x.useRef(), b = c || g, m = u.size || w.size, [h, y] = K1({
    defaultValue: u.defaultValue,
    value: u.value
  }), k = E.useCallback(() => {
    e === "textarea" && o && (!b.current.initialHeight && !b.current.offsets && (b.current.initialHeight = b.current.offsetHeight, b.current.offsets = b.current.offsetHeight - b.current.clientHeight), b.current.style.height = `${b.current.initialHeight}px`, b.current.style.height = `${b.current.scrollHeight + b.current.offsets}px`);
  }, [e, o, b]);
  E.useEffect(() => {
    k();
  }, [k]);
  const C = v({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: vr(y, u.onBlur)
  }), S = (_) => {
    k(), s && s(_);
  };
  return /* @__PURE__ */ x.createElement(af, {
    size: m,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ x.createElement(z0, {
    as: l ? G1 : e,
    ref: b,
    size: m,
    isInvalid: f,
    isValid: d,
    className: L(n, {
      "has-value": h
    }),
    onChange: S,
    mask: l,
    ...C
  }));
}), uC = ["sm", "lg"];
Ii.Feedback = qn;
Ii.Description = qn;
Ii.propTypes = {
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
  size: p.oneOf(uC),
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
Ii.defaultProps = {
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
function of({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = Dt(), o = L("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === gi.LARGE,
    "pgn__form-label-sm": r === gi.SMALL
  }, n.className), s = a({
    ...n,
    className: o
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ x.createElement(l, s, e);
}
function cC({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: a,
  ...o
}) {
  return /* @__PURE__ */ x.createElement(a ?? "div", {
    ...o,
    className: L("pgn__form-group", o.className)
  }, /* @__PURE__ */ x.createElement(il, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const dC = (e) => e, iy = /* @__PURE__ */ x.createContext({
  getRadioControlProps: dC,
  hasRadioSetProvider: !1
}), fC = () => E.useContext(iy);
function sf({
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
      onBlur: c.onBlur ? vr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? vr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? vr(i, c.onChange) : i,
      checked: s ? a === c.value : void 0,
      defaultChecked: s ? void 0 : o === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ x.createElement(iy.Provider, {
    value: u
  }, e);
}
sf.propTypes = {
  children: p.node.isRequired,
  name: p.string.isRequired,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.string,
  defaultValue: p.string
};
sf.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const lf = /* @__PURE__ */ x.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = Dt(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = fC();
  let a = n({
    ...e,
    className: L("pgn__form-radio-input", e.className)
  });
  return i && (a = r(a)), /* @__PURE__ */ x.createElement("input", {
    ...a,
    type: "radio",
    ref: t
  });
});
lf.propTypes = {
  className: p.string
};
lf.defaultProps = {
  className: void 0
};
const uf = /* @__PURE__ */ x.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: o,
  ...s
}, l) => /* @__PURE__ */ x.createElement(il, {
  controlId: s.id,
  isInvalid: a,
  isValid: o
}, /* @__PURE__ */ x.createElement("div", {
  className: L("pgn__form-radio", t, {
    "pgn__form-control-valid": o,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": s.disabled
  })
}, /* @__PURE__ */ x.createElement(lf, {
  ref: l,
  className: n,
  ...s
}), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement(of, {
  className: r
}, e), i && /* @__PURE__ */ x.createElement(qn, {
  hasIcon: !1
}, i)))));
uf.propTypes = {
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
uf.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function ol({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ x.createElement(e, {
    className: L(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
ol.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** A class name to append to the base element. */
  className: p.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: p.bool,
  /** Specifies contents of the component. */
  children: p.node
};
ol.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function cf({
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
  } = Dt();
  c(!0);
  const f = u(l);
  return /* @__PURE__ */ x.createElement(sf, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ x.createElement(ol, {
    role: "radiogroup",
    isInline: i,
    ...f
  }, e));
}
cf.propTypes = {
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
cf.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let go;
const pC = new Uint8Array(16);
function mC() {
  if (!go && (go = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !go))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return go(pC);
}
const Me = [];
for (let e = 0; e < 256; ++e)
  Me.push((e + 256).toString(16).slice(1));
function hC(e, t = 0) {
  return Me[e[t + 0]] + Me[e[t + 1]] + Me[e[t + 2]] + Me[e[t + 3]] + "-" + Me[e[t + 4]] + Me[e[t + 5]] + "-" + Me[e[t + 6]] + Me[e[t + 7]] + "-" + Me[e[t + 8]] + Me[e[t + 9]] + "-" + Me[e[t + 10]] + Me[e[t + 11]] + Me[e[t + 12]] + Me[e[t + 13]] + Me[e[t + 14]] + Me[e[t + 15]];
}
const vC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Hm = {
  randomUUID: vC
};
function gC(e, t, n) {
  if (Hm.randomUUID && !e)
    return Hm.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || mC)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, hC(r);
}
const yC = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), xC = (e, t) => t.every((n) => e[n] !== void 0), su = (e, t) => yC(
  e,
  (n) => Array.isArray(t) ? xC(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
function Ac() {
  return E.useState(null);
}
const Vm = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function EC(e, t) {
  const n = Vm(e), r = Vm(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function Ca(e, t) {
  return E.useMemo(() => EC(e, t), [e, t]);
}
var dt = "top", Pt = "bottom", Rt = "right", ft = "left", df = "auto", za = [dt, Pt, Rt, ft], yi = "start", Sa = "end", wC = "clippingParents", ay = "viewport", Hi = "popper", bC = "reference", $m = /* @__PURE__ */ za.reduce(function(e, t) {
  return e.concat([t + "-" + yi, t + "-" + Sa]);
}, []), ff = /* @__PURE__ */ [].concat(za, [df]).reduce(function(e, t) {
  return e.concat([t, t + "-" + yi, t + "-" + Sa]);
}, []), kC = "beforeRead", CC = "read", SC = "afterRead", _C = "beforeMain", TC = "main", NC = "afterMain", AC = "beforeWrite", IC = "write", PC = "afterWrite", RC = [kC, CC, SC, _C, TC, NC, AC, IC, PC];
function an(e) {
  return e.split("-")[0];
}
function Et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Sr(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function on(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var gr = Math.max, gs = Math.min, xi = Math.round;
function Ic() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function oy() {
  return !/^((?!chrome|android).)*safari/i.test(Ic());
}
function Ei(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && on(e) && (i = e.offsetWidth > 0 && xi(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && xi(r.height) / e.offsetHeight || 1);
  var o = Sr(e) ? Et(e) : window, s = o.visualViewport, l = !oy() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, f = r.width / i, d = r.height / a;
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
function mf(e) {
  var t = Ei(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function sy(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pf(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cn(e) {
  return Et(e).getComputedStyle(e);
}
function FC(e) {
  return ["table", "td", "th"].indexOf(Xn(e)) >= 0;
}
function tr(e) {
  return ((Sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sl(e) {
  return Xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (pf(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    tr(e)
  );
}
function zm(e) {
  return !on(e) || // https://github.com/popperjs/popper-core/issues/837
  Cn(e).position === "fixed" ? null : e.offsetParent;
}
function OC(e) {
  var t = /firefox/i.test(Ic()), n = /Trident/i.test(Ic());
  if (n && on(e)) {
    var r = Cn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = sl(e);
  for (pf(i) && (i = i.host); on(i) && ["html", "body"].indexOf(Xn(i)) < 0; ) {
    var a = Cn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ua(e) {
  for (var t = Et(e), n = zm(e); n && FC(n) && Cn(n).position === "static"; )
    n = zm(n);
  return n && (Xn(n) === "html" || Xn(n) === "body" && Cn(n).position === "static") ? t : n || OC(e) || t;
}
function hf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ia(e, t, n) {
  return gr(e, gs(t, n));
}
function DC(e, t, n) {
  var r = ia(e, t, n);
  return r > n ? n : r;
}
function ly() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function uy(e) {
  return Object.assign({}, ly(), e);
}
function cy(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var MC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, uy(typeof t != "number" ? t : cy(t, za));
};
function LC(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = an(n.placement), l = hf(s), u = [ft, Rt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var f = MC(i.padding, n), d = mf(a), v = l === "y" ? dt : ft, w = l === "y" ? Pt : Rt, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], b = o[l] - n.rects.reference[l], m = Ua(a), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = g / 2 - b / 2, k = f[v], C = h - d[c] - f[w], S = h / 2 - d[c] / 2 + y, _ = ia(k, S, C), T = l;
    n.modifiersData[r] = (t = {}, t[T] = _, t.centerOffset = _ - S, t);
  }
}
function BC(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || sy(t.elements.popper, i) && (t.elements.arrow = i));
}
const jC = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: LC,
  effect: BC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wi(e) {
  return e.split("-")[1];
}
var HC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function VC(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: xi(n * i) / i || 0,
    y: xi(r * i) / i || 0
  };
}
function Um(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, d = o.x, v = d === void 0 ? 0 : d, w = o.y, g = w === void 0 ? 0 : w, b = typeof c == "function" ? c({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  v = b.x, g = b.y;
  var m = o.hasOwnProperty("x"), h = o.hasOwnProperty("y"), y = ft, k = dt, C = window;
  if (u) {
    var S = Ua(n), _ = "clientHeight", T = "clientWidth";
    if (S === Et(n) && (S = tr(n), Cn(S).position !== "static" && s === "absolute" && (_ = "scrollHeight", T = "scrollWidth")), S = S, i === dt || (i === ft || i === Rt) && a === Sa) {
      k = Pt;
      var P = f && S === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[_]
      );
      g -= P - r.height, g *= l ? 1 : -1;
    }
    if (i === ft || (i === dt || i === Pt) && a === Sa) {
      y = Rt;
      var N = f && S === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[T]
      );
      v -= N - r.width, v *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, u && HC), A = c === !0 ? VC({
    x: v,
    y: g
  }, Et(n)) : {
    x: v,
    y: g
  };
  if (v = A.x, g = A.y, l) {
    var I;
    return Object.assign({}, B, (I = {}, I[k] = h ? "0" : "", I[y] = m ? "0" : "", I.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", I));
  }
  return Object.assign({}, B, (t = {}, t[k] = h ? g + "px" : "", t[y] = m ? v + "px" : "", t.transform = "", t));
}
function $C(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: an(t.placement),
    variation: wi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Um(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Um(Object.assign({}, u, {
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
  fn: $C,
  data: {}
};
var yo = {
  passive: !0
};
function UC(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, yo);
  }), s && l.addEventListener("resize", n.update, yo), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, yo);
    }), s && l.removeEventListener("resize", n.update, yo);
  };
}
const GC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: UC,
  data: {}
};
var WC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ho(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return WC[t];
  });
}
var KC = {
  start: "end",
  end: "start"
};
function Gm(e) {
  return e.replace(/start|end/g, function(t) {
    return KC[t];
  });
}
function vf(e) {
  var t = Et(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function gf(e) {
  return Ei(tr(e)).left + vf(e).scrollLeft;
}
function qC(e, t) {
  var n = Et(e), r = tr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = oy();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + gf(e),
    y: l
  };
}
function XC(e) {
  var t, n = tr(e), r = vf(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = gr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = gr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + gf(e), l = -r.scrollTop;
  return Cn(i || n).direction === "rtl" && (s += gr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function yf(e) {
  var t = Cn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function dy(e) {
  return ["html", "body", "#document"].indexOf(Xn(e)) >= 0 ? e.ownerDocument.body : on(e) && yf(e) ? e : dy(sl(e));
}
function aa(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = dy(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Et(r), o = i ? [a].concat(a.visualViewport || [], yf(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(aa(sl(o)))
  );
}
function Pc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function YC(e, t) {
  var n = Ei(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Wm(e, t, n) {
  return t === ay ? Pc(qC(e, n)) : Sr(t) ? YC(t, n) : Pc(XC(tr(e)));
}
function QC(e) {
  var t = aa(sl(e)), n = ["absolute", "fixed"].indexOf(Cn(e).position) >= 0, r = n && on(e) ? Ua(e) : e;
  return Sr(r) ? t.filter(function(i) {
    return Sr(i) && sy(i, r) && Xn(i) !== "body";
  }) : [];
}
function ZC(e, t, n, r) {
  var i = t === "clippingParents" ? QC(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = Wm(e, u, r);
    return l.top = gr(c.top, l.top), l.right = gs(c.right, l.right), l.bottom = gs(c.bottom, l.bottom), l.left = gr(c.left, l.left), l;
  }, Wm(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function fy(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? an(r) : null, a = r ? wi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case dt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Pt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Rt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ft:
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
  var u = i ? hf(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case yi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Sa:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function _a(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? wC : s, u = n.rootBoundary, c = u === void 0 ? ay : u, f = n.elementContext, d = f === void 0 ? Hi : f, v = n.altBoundary, w = v === void 0 ? !1 : v, g = n.padding, b = g === void 0 ? 0 : g, m = uy(typeof b != "number" ? b : cy(b, za)), h = d === Hi ? bC : Hi, y = e.rects.popper, k = e.elements[w ? h : d], C = ZC(Sr(k) ? k : k.contextElement || tr(e.elements.popper), l, c, o), S = Ei(e.elements.reference), _ = fy({
    reference: S,
    element: y,
    placement: i
  }), T = Pc(Object.assign({}, y, _)), P = d === Hi ? T : S, N = {
    top: C.top - P.top + m.top,
    bottom: P.bottom - C.bottom + m.bottom,
    left: C.left - P.left + m.left,
    right: P.right - C.right + m.right
  }, B = e.modifiersData.offset;
  if (d === Hi && B) {
    var A = B[i];
    Object.keys(N).forEach(function(I) {
      var V = [Rt, Pt].indexOf(I) >= 0 ? 1 : -1, W = [dt, Pt].indexOf(I) >= 0 ? "y" : "x";
      N[I] += A[W] * V;
    });
  }
  return N;
}
function JC(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ff : l, c = wi(r), f = c ? s ? $m : $m.filter(function(w) {
    return wi(w) === c;
  }) : za, d = f.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  d.length === 0 && (d = f);
  var v = d.reduce(function(w, g) {
    return w[g] = _a(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[an(g)], w;
  }, {});
  return Object.keys(v).sort(function(w, g) {
    return v[w] - v[g];
  });
}
function eS(e) {
  if (an(e) === df)
    return [];
  var t = Ho(e);
  return [Gm(e), t, Gm(t)];
}
function tS(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, w = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, b = t.options.placement, m = an(b), h = m === b, y = l || (h || !w ? [Ho(b)] : eS(b)), k = [b].concat(y).reduce(function(oe, Ne) {
      return oe.concat(an(Ne) === df ? JC(t, {
        placement: Ne,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: g
      }) : Ne);
    }, []), C = t.rects.reference, S = t.rects.popper, _ = /* @__PURE__ */ new Map(), T = !0, P = k[0], N = 0; N < k.length; N++) {
      var B = k[N], A = an(B), I = wi(B) === yi, V = [dt, Pt].indexOf(A) >= 0, W = V ? "width" : "height", Z = _a(t, {
        placement: B,
        boundary: c,
        rootBoundary: f,
        altBoundary: d,
        padding: u
      }), Y = V ? I ? Rt : ft : I ? Pt : dt;
      C[W] > S[W] && (Y = Ho(Y));
      var R = Ho(Y), D = [];
      if (a && D.push(Z[A] <= 0), s && D.push(Z[Y] <= 0, Z[R] <= 0), D.every(function(oe) {
        return oe;
      })) {
        P = B, T = !1;
        break;
      }
      _.set(B, D);
    }
    if (T)
      for (var $ = w ? 3 : 1, q = function(Ne) {
        var pe = k.find(function(He) {
          var rt = _.get(He);
          if (rt)
            return rt.slice(0, Ne).every(function(Mt) {
              return Mt;
            });
        });
        if (pe)
          return P = pe, "break";
      }, U = $; U > 0; U--) {
        var Te = q(U);
        if (Te === "break") break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const nS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: tS,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Km(e, t, n) {
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
function qm(e) {
  return [dt, Rt, Pt, ft].some(function(t) {
    return e[t] >= 0;
  });
}
function rS(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = _a(t, {
    elementContext: "reference"
  }), s = _a(t, {
    altBoundary: !0
  }), l = Km(o, r), u = Km(s, i, a), c = qm(l), f = qm(u);
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
const iS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rS
};
function aS(e, t, n) {
  var r = an(e), i = [ft, dt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [ft, Rt].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function oS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = ff.reduce(function(c, f) {
    return c[f] = aS(f, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const sS = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: oS
};
function lS(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fy({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const uS = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: lS,
  data: {}
};
function cS(e) {
  return e === "x" ? "y" : "x";
}
function dS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, d = n.tether, v = d === void 0 ? !0 : d, w = n.tetherOffset, g = w === void 0 ? 0 : w, b = _a(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), m = an(t.placement), h = wi(t.placement), y = !h, k = hf(m), C = cS(k), S = t.modifiersData.popperOffsets, _ = t.rects.reference, T = t.rects.popper, P = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, N = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (S) {
    if (a) {
      var I, V = k === "y" ? dt : ft, W = k === "y" ? Pt : Rt, Z = k === "y" ? "height" : "width", Y = S[k], R = Y + b[V], D = Y - b[W], $ = v ? -T[Z] / 2 : 0, q = h === yi ? _[Z] : T[Z], U = h === yi ? -T[Z] : -_[Z], Te = t.elements.arrow, oe = v && Te ? mf(Te) : {
        width: 0,
        height: 0
      }, Ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ly(), pe = Ne[V], He = Ne[W], rt = ia(0, _[Z], oe[Z]), Mt = y ? _[Z] / 2 - $ - rt - pe - N.mainAxis : q - rt - pe - N.mainAxis, Lt = y ? -_[Z] / 2 + $ + rt + He + N.mainAxis : U + rt + He + N.mainAxis, pt = t.elements.arrow && Ua(t.elements.arrow), it = pt ? k === "y" ? pt.clientTop || 0 : pt.clientLeft || 0 : 0, dn = (I = B == null ? void 0 : B[k]) != null ? I : 0, Tn = Y + Mt - dn - it, Nn = Y + Lt - dn, Ie = ia(v ? gs(R, Tn) : R, Y, v ? gr(D, Nn) : D);
      S[k] = Ie, A[k] = Ie - Y;
    }
    if (s) {
      var re, me = k === "x" ? dt : ft, ue = k === "x" ? Pt : Rt, de = S[C], Yt = C === "y" ? "height" : "width", Or = de + b[me], nr = de - b[ue], M = [dt, ft].indexOf(m) !== -1, K = (re = B == null ? void 0 : B[C]) != null ? re : 0, xe = M ? Or : de - _[Yt] - T[Yt] - K + N.altAxis, Se = M ? de + _[Yt] + T[Yt] - K - N.altAxis : nr, Ve = v && M ? DC(xe, de, Se) : ia(v ? xe : Or, de, v ? Se : nr);
      S[C] = Ve, A[C] = Ve - de;
    }
    t.modifiersData[r] = A;
  }
}
const fS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dS,
  requiresIfExists: ["offset"]
};
function pS(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mS(e) {
  return e === Et(e) || !on(e) ? vf(e) : pS(e);
}
function hS(e) {
  var t = e.getBoundingClientRect(), n = xi(t.width) / e.offsetWidth || 1, r = xi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function vS(e, t, n) {
  n === void 0 && (n = !1);
  var r = on(t), i = on(t) && hS(t), a = tr(t), o = Ei(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  yf(a)) && (s = mS(t)), on(t) ? (l = Ei(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = gf(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function gS(e) {
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
function yS(e) {
  var t = gS(e);
  return RC.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function xS(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ES(e) {
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
var Xm = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ym() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function wS(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Xm : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xm, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, v = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        g(), c.options = Object.assign({}, a, c.options, h), c.scrollParents = {
          reference: Sr(s) ? aa(s) : s.contextElement ? aa(s.contextElement) : [],
          popper: aa(l)
        };
        var y = yS(ES([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(k) {
          return k.enabled;
        }), w(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var m = c.elements, h = m.reference, y = m.popper;
          if (Ym(h, y)) {
            c.rects = {
              reference: vS(h, Ua(y), c.options.strategy === "fixed"),
              popper: mf(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(N) {
              return c.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var k = 0; k < c.orderedModifiers.length; k++) {
              if (c.reset === !0) {
                c.reset = !1, k = -1;
                continue;
              }
              var C = c.orderedModifiers[k], S = C.fn, _ = C.options, T = _ === void 0 ? {} : _, P = C.name;
              typeof S == "function" && (c = S({
                state: c,
                options: T,
                name: P,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xS(function() {
        return new Promise(function(b) {
          v.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        g(), d = !0;
      }
    };
    if (!Ym(s, l))
      return v;
    v.setOptions(u).then(function(b) {
      !d && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function w() {
      c.orderedModifiers.forEach(function(b) {
        var m = b.name, h = b.options, y = h === void 0 ? {} : h, k = b.effect;
        if (typeof k == "function") {
          var C = k({
            state: c,
            name: m,
            instance: v,
            options: y
          }), S = function() {
          };
          f.push(C || S);
        }
      });
    }
    function g() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return v;
  };
}
var bS = wS({
  defaultModifiers: [iS, uS, zC, GC, sS, nS, fS, jC]
});
function py() {
  const e = E.useRef(!0), t = E.useRef(() => e.current);
  return E.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function kS(e) {
  const t = py();
  return [e[0], E.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Qm = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, CS = {
  name: "applyStyles",
  enabled: !1
}, SS = {
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
}, _S = [];
function my(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, f = c === void 0 ? _S : c, d = Q(r, ["enabled", "placement", "strategy", "modifiers"]), v = E.useRef(), w = E.useCallback(function() {
    var k;
    (k = v.current) == null || k.update();
  }, []), g = E.useCallback(function() {
    var k;
    (k = v.current) == null || k.forceUpdate();
  }, []), b = kS(E.useState({
    placement: s,
    update: w,
    forceUpdate: g,
    attributes: {},
    styles: {
      popper: Qm(u),
      arrow: {}
    }
  })), m = b[0], h = b[1], y = E.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(C) {
        var S = C.state, _ = {}, T = {};
        Object.keys(S.elements).forEach(function(P) {
          _[P] = S.styles[P], T[P] = S.attributes[P];
        }), h({
          state: S,
          styles: _,
          attributes: T,
          update: w,
          forceUpdate: g,
          placement: S.placement
        });
      }
    };
  }, [w, g, h]);
  return E.useEffect(function() {
    !v.current || !a || v.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(f, [y, CS])
    });
  }, [u, s, y, a]), E.useEffect(function() {
    if (!(!a || e == null || t == null))
      return v.current = bS(e, t, H({}, d, {
        placement: s,
        strategy: u,
        modifiers: [].concat(f, [SS, y])
      })), function() {
        v.current != null && (v.current.destroy(), v.current = void 0, h(function(k) {
          return H({}, k, {
            attributes: {},
            styles: {
              popper: Qm(u)
            }
          });
        }));
      };
  }, [a, e, t]), m;
}
function hy(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const TS = !!(typeof window < "u" && window.document && window.document.createElement);
var Rc = !1, Fc = !1;
try {
  var lu = {
    get passive() {
      return Rc = !0;
    },
    get once() {
      return Fc = Rc = !0;
    }
  };
  TS && (window.addEventListener("test", lu, lu), window.removeEventListener("test", lu, !0));
} catch {
}
function vy(e, t, n, r) {
  if (r && typeof r != "boolean" && !Fc) {
    var i = r.once, a = r.capture, o = n;
    !Fc && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, Rc ? r : a);
  }
  e.addEventListener(t, n, r);
}
function NS(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Jr(e, t, n, r) {
  return vy(e, t, n, r), function() {
    NS(e, t, n, r);
  };
}
function AS(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function un(e) {
  const t = AS(e);
  return E.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function xf(e) {
  return e && e.ownerDocument || document;
}
function ys(e) {
  return e && "setState" in e ? fr.findDOMNode(e) : e ?? null;
}
const IS = function(e) {
  return xf(ys(e));
};
var PS = 27, Zm = function() {
};
function RS(e) {
  return e.button === 0;
}
function FS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Jm = function(t) {
  return t && ("current" in t ? t.current : t);
};
function gy(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = E.useRef(!1), l = t || Zm, u = E.useCallback(function(d) {
    var v, w = Jm(e);
    m1(!!w, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !w || FS(d) || !RS(d) || !!hy(w, (v = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? v : d.target);
  }, [e]), c = un(function(d) {
    s.current || l(d);
  }), f = un(function(d) {
    d.keyCode === PS && l(d);
  });
  E.useEffect(function() {
    if (!(i || e == null)) {
      var d = window.event, v = IS(Jm(e)), w = Jr(v, o, u, !0), g = Jr(v, o, function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        c(h);
      }), b = Jr(v, "keyup", function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        f(h);
      }), m = [];
      return "ontouchstart" in v.documentElement && (m = [].slice.call(v.body.children).map(function(h) {
        return Jr(h, "mousemove", Zm);
      })), function() {
        w(), g(), b(), m.forEach(function(h) {
          return h();
        });
      };
    }
  }, [e, i, o, u, c, f]);
}
var uu = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? xf().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function eh(e, t) {
  var n = E.useState(function() {
    return uu(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = uu(e);
    a && i(a);
  }
  return E.useEffect(function() {
  }, [t, r]), E.useEffect(function() {
    var o = uu(e);
    o !== r && i(o);
  }, [e, r]), r;
}
function OS(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function DS(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function yy(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, f = e.containerPadding, d = e.arrowElement, v = e.popperConfig, w = v === void 0 ? {} : v, g = OS(w.modifiers);
  return H({}, w, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : w.strategy,
    modifiers: DS(H({}, g, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: H({}, g.preventOverflow, {
        options: f ? H({
          padding: f
        }, (t = g.preventOverflow) == null ? void 0 : t.options) : (n = g.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: H({
          offset: u
        }, (r = g.offset) == null ? void 0 : r.options)
      },
      arrow: H({}, g.arrow, {
        enabled: !!d,
        options: H({}, (i = g.arrow) == null ? void 0 : i.options, {
          element: d
        })
      }),
      flip: H({
        enabled: !!l
      }, g.flip)
    }))
  });
}
var Ef = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = Ac(), f = c[0], d = c[1], v = Ac(), w = v[0], g = v[1], b = Ca(d, t), m = eh(e.container), h = eh(e.target), y = E.useState(!e.show), k = y[0], C = y[1], S = my(h, f, yy({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: w,
    popperConfig: l
  })), _ = S.styles, T = S.attributes, P = Q(S, ["styles", "attributes"]);
  e.show ? k && C(!1) : !e.transition && !k && C(!0);
  var N = function() {
    C(!0), e.onExited && e.onExited.apply(e, arguments);
  }, B = e.show || u && !k;
  if (gy(f, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !B)
    return null;
  var A = e.children(H({}, P, {
    show: !!e.show,
    props: H({}, T.popper, {
      style: _.popper,
      ref: b
    }),
    arrowProps: H({}, T.arrow, {
      style: _.arrow,
      ref: g
    })
  }));
  if (u) {
    var I = e.onExit, V = e.onExiting, W = e.onEnter, Z = e.onEntering, Y = e.onEntered;
    A = /* @__PURE__ */ x.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: I,
      onExiting: V,
      onExited: N,
      onEnter: W,
      onEntering: Z,
      onEntered: Y
    }, A);
  }
  return m ? /* @__PURE__ */ fr.createPortal(A, m) : null;
});
Ef.displayName = "Overlay";
Ef.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: p.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: p.oneOf(ff),
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
function cu(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function du(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function xy() {
  var e = E.useRef(null), t = E.useRef(null), n = E.useRef(null), r = ce(void 0, "popover"), i = ce(void 0, "dropdown-menu"), a = E.useCallback(function(u) {
    !u || !(cu(u, r) || cu(u, i)) || (t.current = du(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = E.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var f = c.placement;
          if (!t.current) return [0, 0];
          var d = t.current, v = d.top, w = d.left, g = d.bottom, b = d.right;
          switch (f.split("-")[0]) {
            case "top":
              return [0, g];
            case "left":
              return [0, b];
            case "bottom":
              return [0, v];
            case "right":
              return [0, w];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = E.useMemo(function() {
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
  }, [n]), l = E.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var f = c.state;
        if (!(!e.current || !f.elements.arrow || !cu(e.current, r))) {
          if (f.modifiersData["arrow#persistent"]) {
            var d = du(f.elements.arrow), v = d.top, w = d.right, g = v || w;
            f.modifiersData["arrow#persistent"].padding = {
              top: g,
              left: g,
              right: g,
              bottom: g
            };
          } else
            n.current = du(f.elements.arrow);
          return f.elements.arrow.style.margin = "0", function() {
            f.elements.arrow && (f.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
function Oc(e, t) {
  return Oc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Oc(e, t);
}
function ll(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Oc(e, t);
}
const th = {
  disabled: !1
}, Ey = x.createContext(null);
var MS = function(t) {
  return t.scrollTop;
}, qi = "unmounted", or = "exited", Rn = "entering", sr = "entered", Dc = "exiting", _n = /* @__PURE__ */ function(e) {
  ll(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = or, a.appearStatus = Rn) : l = sr : r.unmountOnExit || r.mountOnEnter ? l = qi : l = or, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === qi ? {
      status: or
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Rn && o !== sr && (a = Rn) : (o === Rn || o === sr) && (a = Dc);
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
          o && MS(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === or && this.setState({
      status: qi
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [fr.findDOMNode(this), s], u = l[0], c = l[1], f = this.getTimeouts(), d = s ? f.appear : f.enter;
    if (!i && !o || th.disabled) {
      this.safeSetState({
        status: sr
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
          status: sr
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : fr.findDOMNode(this);
    if (!a || th.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Dc
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: or
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
    if (i === qi)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = Q(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ x.createElement(Ey.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : x.cloneElement(x.Children.only(o), s))
    );
  }, t;
}(x.Component);
_n.contextType = Ey;
_n.propTypes = {};
function Lr() {
}
_n.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Lr,
  onEntering: Lr,
  onEntered: Lr,
  onExit: Lr,
  onExiting: Lr,
  onExited: Lr
};
_n.UNMOUNTED = qi;
_n.EXITED = or;
_n.ENTERING = Rn;
_n.ENTERED = sr;
_n.EXITING = Dc;
function LS(e) {
  var t = xf(e);
  return t && t.defaultView || window;
}
function BS(e, t) {
  return LS(e).getComputedStyle(e, t);
}
var jS = /([A-Z])/g;
function HS(e) {
  return e.replace(jS, "-$1").toLowerCase();
}
var VS = /^ms-/;
function xo(e) {
  return HS(e).replace(VS, "-ms-");
}
var $S = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function zS(e) {
  return !!(e && $S.test(e));
}
function wy(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(xo(t)) || BS(e).getPropertyValue(xo(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(xo(i)) : zS(i) ? r += i + "(" + a + ") " : n += xo(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function US(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function GS(e) {
  var t = wy(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function WS(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || US(e, "transitionend", !0);
  }, t + n), a = Jr(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function KS(e, t, n, r) {
  n == null && (n = GS(e) || 0);
  var i = WS(e, n, r), a = Jr(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function nh(e, t) {
  var n = wy(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function qS(e, t) {
  var n = nh(e, "transitionDuration"), r = nh(e, "transitionDelay"), i = KS(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function XS(e) {
  e.offsetHeight;
}
var YS = ["className", "children"], Eo, QS = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, ZS = (Eo = {}, Eo[Rn] = "show", Eo[sr] = "show", Eo), Rr = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = Q(e, YS), a = E.useCallback(function(o) {
    XS(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ x.createElement(_n, H({
    ref: t,
    addEndListener: qS
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ x.cloneElement(r, H({}, s, {
      className: L("fade", n, r.props.className, ZS[o])
    }));
  });
});
Rr.defaultProps = QS;
Rr.displayName = "Fade";
var JS = ["children", "transition", "popperConfig"], e_ = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], t_ = {
  transition: Rr,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function n_(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(ys(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(ys(i));
  });
}
function by(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Q(e, JS), o = E.useRef({}), s = xy(), l = s[0], u = s[1], c = n === !0 ? Rr : n || null;
  return /* @__PURE__ */ x.createElement(Ef, H({}, a, {
    ref: l,
    popperConfig: H({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(f) {
    var d, v = f.props, w = f.arrowProps, g = f.show, b = f.update;
    f.forceUpdate;
    var m = f.placement, h = f.state, y = Q(f, e_);
    n_(v, w);
    var k = Object.assign(o.current, {
      state: h,
      scheduleUpdate: b,
      placement: m,
      outOfBoundaries: (h == null || (d = h.modifiersData.hide) == null ? void 0 : d.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(H({}, y, v, {
      placement: m,
      show: g
    }, !n && g && {
      className: "show"
    }, {
      popper: k,
      arrowProps: w
    })) : /* @__PURE__ */ x.cloneElement(t, H({}, y, v, {
      placement: m,
      arrowProps: w,
      popper: k,
      className: L(t.props.className, !n && g && "show"),
      style: H({}, t.props.style, v.style)
    }));
  });
}
by.defaultProps = t_;
function r_(e) {
  const t = E.useRef(e);
  return t.current = e, t;
}
function i_(e) {
  const t = r_(e);
  E.useEffect(() => () => t.current(), []);
}
const Mc = 2 ** 31 - 1;
function ky(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Mc ? setTimeout(t, r) : setTimeout(() => ky(e, t, n), Mc);
}
function a_() {
  const e = py(), t = E.useRef();
  return i_(() => clearTimeout(t.current)), E.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Mc ? t.current = setTimeout(i, a) : ky(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function rh(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function o_(e) {
  var t = s_(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function s_(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wf(e, t, n) {
  var r = E.useRef(e !== void 0), i = E.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, E.useCallback(function(u) {
    for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      f[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(f)), o(u);
  }, [n])];
}
function Ga(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[rh(r)], s = a[r], l = Q(a, [rh(r), r].map(o_)), u = t[r], c = wf(s, o, e[u]), f = c[0], d = c[1];
    return H({}, l, (i = {}, i[r] = f, i[u] = d, i));
  }, e);
}
var l_ = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], u_ = /* @__PURE__ */ function(e) {
  ll(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(x.Component);
function c_(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function ih(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !hy(i, a) && e.apply(void 0, t);
}
var d_ = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function Cy(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, f = e.placement, d = e.flip, v = d === void 0 ? f && f.indexOf("auto") !== -1 : d, w = Q(e, l_), g = E.useRef(null), b = a_(), m = E.useRef(""), h = wf(o, l, u), y = h[0], k = h[1], C = c_(c), S = typeof r != "function" ? x.Children.only(r).props : {}, _ = S.onFocus, T = S.onBlur, P = S.onClick, N = E.useCallback(function() {
    return ys(g.current);
  }, []), B = E.useCallback(function() {
    if (b.clear(), m.current = "show", !C.show) {
      k(!0);
      return;
    }
    b.set(function() {
      m.current === "show" && k(!0);
    }, C.show);
  }, [C.show, k, b]), A = E.useCallback(function() {
    if (b.clear(), m.current = "hide", !C.hide) {
      k(!1);
      return;
    }
    b.set(function() {
      m.current === "hide" && k(!1);
    }, C.hide);
  }, [C.hide, k, b]), I = E.useCallback(function() {
    B();
    for (var $ = arguments.length, q = new Array($), U = 0; U < $; U++)
      q[U] = arguments[U];
    _ == null || _.apply(void 0, q);
  }, [B, _]), V = E.useCallback(function() {
    A();
    for (var $ = arguments.length, q = new Array($), U = 0; U < $; U++)
      q[U] = arguments[U];
    T == null || T.apply(void 0, q);
  }, [A, T]), W = E.useCallback(function() {
    k(!y), P && P.apply(void 0, arguments);
  }, [P, k, y]), Z = E.useCallback(function() {
    for (var $ = arguments.length, q = new Array($), U = 0; U < $; U++)
      q[U] = arguments[U];
    ih(B, q, "fromElement");
  }, [B]), Y = E.useCallback(function() {
    for (var $ = arguments.length, q = new Array($), U = 0; U < $; U++)
      q[U] = arguments[U];
    ih(A, q, "toElement");
  }, [A]), R = t == null ? [] : [].concat(t), D = {};
  return R.indexOf("click") !== -1 && (D.onClick = W), R.indexOf("focus") !== -1 && (D.onFocus = I, D.onBlur = V), R.indexOf("hover") !== -1 && (D.onMouseOver = Z, D.onMouseOut = Y), /* @__PURE__ */ x.createElement(x.Fragment, null, typeof r == "function" ? r(H({}, D, {
    ref: g
  })) : /* @__PURE__ */ x.createElement(u_, {
    ref: g
  }, /* @__PURE__ */ E.cloneElement(r, D)), /* @__PURE__ */ x.createElement(by, H({}, w, {
    show: y,
    onHide: A,
    flip: v,
    placement: f,
    popperConfig: a,
    target: N
  }), n));
}
Cy.defaultProps = d_;
const Sy = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], f_ = ["hover", "click", "focus"];
function bf(e) {
  return /* @__PURE__ */ x.createElement(Cy, {
    ...e
  }, e.children);
}
const ah = p.oneOf(f_);
p.node.isRequired, p.oneOfType([p.elementType, p.func]), p.func, p.func, p.func, p.func, p.func, p.func, p.func, p.oneOf(Sy), p.shape({}), p.bool, p.oneOf(["click", "mousedown"]), p.bool, p.oneOfType([p.elementType, p.func]), p.oneOfType([p.object, p.bool]);
bf.propTypes = {
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
  placement: p.oneOf(Sy),
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
  trigger: p.oneOfType([ah, p.arrayOf(ah)])
};
bf.defaultProps = {
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
      for (var d = arguments.length, v = Array(d > 5 ? d - 5 : 0), w = 5; w < d; w++)
        v[w - 5] = arguments[w];
      return r.apply(void 0, [a, o, s, l, u].concat(v));
    };
  }
  e.exports = t.default;
})(oh, oh.exports);
var p_ = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], m_ = {
  placement: "right"
}, ul = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = Q(e, p_);
  n = ce(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ x.createElement("div", H({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: L(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ x.createElement("div", H({
    className: "arrow"
  }, s)), /* @__PURE__ */ x.createElement("div", {
    className: n + "-inner"
  }, o));
});
ul.defaultProps = m_;
ul.displayName = "Tooltip";
const h_ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], xs = /* @__PURE__ */ x.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ x.createElement(ul, {
  ...n,
  className: L({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
xs.propTypes = {
  ...ul.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: p.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: p.oneOf(h_),
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
xs.defaultProps = {
  ...xs.defaultProps,
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
const Wa = /* @__PURE__ */ x.forwardRef(({
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
  iconAs: u = bn,
  isActive: c = !1,
  children: f,
  // unused, just here because we don't want it to be part of 'attrs'
  ...d
}, v) => {
  const w = n ? "inverse-" : "", g = c ? `${l}-` : "", b = u;
  return /* @__PURE__ */ x.createElement("button", {
    "aria-label": t,
    className: L("btn-icon", `btn-icon-${w}${l}`, `btn-icon-${s}`, {
      [`btn-icon-${w}${g}active`]: c
    }, e),
    onClick: o,
    type: "button",
    ref: v,
    ...d
  }, /* @__PURE__ */ x.createElement("span", {
    className: "btn-icon__icon-container"
  }, b && /* @__PURE__ */ x.createElement(b, {
    className: L("btn-icon__icon", a),
    icon: r,
    src: i
  })));
});
function v_({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ x.createElement(bf, {
    placement: e,
    overlay: /* @__PURE__ */ x.createElement(xs, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ x.createElement(Wa, {
    ...n
  }));
}
Wa.IconButtonWithTooltip = v_;
var g_ = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], _y = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = Q(e, g_);
  n = ce(n, "spinner");
  var f = n + "-" + i;
  return /* @__PURE__ */ x.createElement(l, H({
    ref: t
  }, c, {
    className: L(u, f, a && f + "-" + a, r && "text-" + r)
  }), o);
});
_y.displayName = "Spinner";
const y_ = /* @__PURE__ */ x.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: L("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ x.createElement(_y, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ x.createElement("span", {
    className: "sr-only"
  }, t));
});
function x_({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function E_({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function w_({
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
  i === "Enter" && a && x_({
    event: e,
    currentIndex: s,
    activeElement: a
  }), E_({
    event: e,
    currentIndex: s,
    availableElements: o
  });
}
function b_(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = E.useRef();
  return E.useEffect(() => {
    const i = (a) => {
      w_({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const sh = {
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
}, kf = /* @__PURE__ */ E.forwardRef(({
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
  ...w
}, g) => {
  const b = ja(), m = E.useRef(), h = b_({
    selectors: t,
    ignoredKeys: n
  }), [y, k] = E.useState(!1), [C, S] = E.useState(!1), [_, T] = E.useState(!1), [P, N] = E.useState(!1), [B, A] = E.useState((i == null ? void 0 : i.userProvidedText) || ""), [I, V] = E.useState([]), [W, Z] = E.useState(null), [Y, R] = E.useState(!0), [D, $] = E.useState(""), q = (re) => {
    Z(re);
  }, U = () => {
    V([]), k(!1), Z(null);
  }, Te = (re, me) => {
    const ue = re.currentTarget.getAttribute("data-value"), de = re.currentTarget.id;
    T(!0), N(!0), A(ue), d && (!i || i && ue !== i.selectionValue) && d({
      userProvidedText: ue,
      selectionValue: ue,
      selectionId: de
    }), U(), me && me(re);
  };
  function oe(re = "") {
    let me = x.Children.map(e, (ue) => {
      const {
        children: de,
        onClick: Yt,
        ...Or
      } = ue.props, nr = ue.props.id ?? gC();
      return /* @__PURE__ */ x.cloneElement(ue, {
        ...Or,
        children: de,
        "data-value": de,
        onClick: (M) => Te(M, Yt),
        id: nr,
        onFocus: () => q(nr)
      });
    });
    return re.length > 0 && (me = me.filter((ue) => ue.props.children.toLowerCase().includes(re.toLowerCase()))), me;
  }
  const Ne = () => {
    V(oe(B)), R(!0), $(""), k(!0);
  }, pe = () => {
    y ? U() : Ne();
  }, He = /* @__PURE__ */ x.createElement(Wa, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: y ? nC : tC,
    iconAs: bn,
    size: "sm",
    variant: "secondary",
    alt: y ? b.formatMessage(sh.iconButtonClosed) : b.formatMessage(sh.iconButtonOpened),
    onClick: pe
  }), rt = () => {
    S(!0);
  }, Mt = () => {
    if (c) {
      R(!1), $(f);
      return;
    }
    if (o && !_) {
      R(!1), $(s);
      return;
    }
    if (_ && l && !P) {
      R(!1), $(u);
      return;
    }
    R(!0), $("");
  };
  E.useImperativeHandle(g, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: Mt
  }));
  const Lt = () => {
    S(!1), U(), Mt();
  }, pt = (re) => {
    if (C) {
      if (re.key === "Escape") {
        re.preventDefault(), m && m.current.focus(), U();
        return;
      }
      re.key === "Tab" && Lt();
    }
  }, it = (re) => {
    h.current && !h.current.contains(re.target) && C && Lt();
  };
  E.useEffect(() => (document.addEventListener("keydown", pt), document.addEventListener("click", it, !0), () => {
    document.removeEventListener("click", it, !0), document.removeEventListener("keydown", pt);
  })), E.useEffect(() => {
    A(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), N(!!i && !!i.selectionValue);
  }, [i]);
  const dn = () => {
    Ne();
  }, Tn = (re) => {
    const me = re.target.value;
    if (!me.length) {
      A(""), T(!1), N(!1), V([]), U(), d && d({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    T(!0);
    const ue = oe(me);
    V(ue);
    const de = ue.find((Yt) => Yt.props.children.toLowerCase() === me.toLowerCase());
    if (!de) {
      N(!1), A(me), d && d({
        userProvidedText: me,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    N(!0), A(de.props.children), d && d({
      userProvidedText: de.props.children,
      selectionValue: de.props.children,
      selectionId: de.props.id
    });
  }, {
    getControlProps: Nn
  } = Dt(), Ie = Nn(w);
  return /* @__PURE__ */ x.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: h,
    onFocus: rt
  }, /* @__PURE__ */ x.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${I.length} options found`), /* @__PURE__ */ x.createElement(il, {
    controlId: Ie.id,
    isInvalid: !Y
  }, /* @__PURE__ */ x.createElement(Ii, {
    ref: m,
    "aria-expanded": (I.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: B,
    "aria-invalid": D,
    "aria-activedescendant": W,
    onChange: Tn,
    onClick: dn,
    trailingElement: He,
    "data-testid": "autosuggest-textbox-input",
    ...Ie
  }), v && Y && /* @__PURE__ */ x.createElement(qn, {
    type: "default"
  }, v), !Y && /* @__PURE__ */ x.createElement(qn, {
    type: "invalid",
    "feedback-for": Ie.name
  }, D)), /* @__PURE__ */ x.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ x.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ x.createElement(y_, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : I.length > 0 && I));
});
kf.defaultProps = {
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
kf.propTypes = {
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
  valueRequiredErrorMessageText: su(p.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: p.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: su(p.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: p.bool,
  /** Informs user of other errors. */
  customErrorMessageText: su(p.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: p.string,
  /** Selected list item is read-only. */
  readOnly: p.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: p.node,
  /** Specifies the screen reader text */
  screenReaderText: p.string
};
function Cf({
  as: e,
  children: t,
  defaultSelected: n,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const o = L(a.className, "pgn__menu-item");
  return /* @__PURE__ */ x.createElement(e, {
    ...a,
    className: o
  }, /* @__PURE__ */ x.createElement(x.Fragment, null, i && /* @__PURE__ */ x.createElement(bn, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ x.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ x.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ x.createElement(bn, {
    className: "btn-icon-after",
    src: r
  })));
}
Cf.propTypes = {
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
Cf.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
function Sf({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ x.createElement(Cf, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: L(t, "dropdown-item"),
    ...r
  }, e);
}
Sf.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
Sf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: p.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: p.func
};
const k_ = (e) => e, Ty = /* @__PURE__ */ x.createContext({
  getCheckboxControlProps: k_,
  hasCheckboxSetProvider: !1
}), Ny = () => E.useContext(Ty);
function _f({
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
      onBlur: c.onBlur ? vr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? vr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? vr(i, c.onChange) : i,
      checked: s ? a.includes(c.value) : void 0,
      defaultChecked: s ? void 0 : o && o.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ x.createElement(Ty.Provider, {
    value: u
  }, e);
}
_f.propTypes = {
  children: p.node.isRequired,
  name: p.string,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.arrayOf(p.string),
  defaultValue: p.arrayOf(p.string)
};
_f.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Tf = /* @__PURE__ */ x.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Ny(), a = x.useRef(), o = n || a, {
    getControlProps: s
  } = Dt();
  let l = s({
    ...t,
    className: L("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), x.useEffect(() => {
    o.current && (o.current.indeterminate = e);
  }, [o, e]), /* @__PURE__ */ x.createElement("input", {
    type: "checkbox",
    ...l,
    ref: o
  });
});
Tf.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
Tf.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const cl = /* @__PURE__ */ x.forwardRef(({
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
  } = Ny(), {
    hasFormGroupProvider: d,
    useSetIsControlGroupEffect: v,
    getControlProps: w
  } = Dt();
  v(!0);
  const b = d && !f ? {
    ...w({}),
    role: "group"
  } : {}, m = /* @__PURE__ */ x.createElement(s, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ x.createElement(il, {
    controlId: u.id,
    isInvalid: a,
    isValid: o
  }, /* @__PURE__ */ x.createElement("div", {
    className: L("pgn__form-checkbox", t, {
      "pgn__form-control-valid": o,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...b
  }, m, /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement(of, {
    className: r
  }, e), i && /* @__PURE__ */ x.createElement(qn, {
    hasIcon: !1
  }, i))));
});
cl.propTypes = {
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
cl.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Tf,
  floatLabelLeft: !1,
  disabled: !1
};
const Nf = /* @__PURE__ */ x.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = x.useRef(), i = n || r, {
    getControlProps: a
  } = Dt(), o = a({
    ...t,
    className: L("pgn__form-switch-input", t.className)
  });
  return x.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ x.createElement("input", {
    type: "checkbox",
    ...o,
    ref: i
  });
});
Nf.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
Nf.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Af = /* @__PURE__ */ x.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ x.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ x.createElement(cl, {
  className: L("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: Nf,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ x.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
Af.propTypes = {
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
Af.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function dl({
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
  } = Dt();
  c(!0);
  const f = u(l);
  return /* @__PURE__ */ x.createElement(_f, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ x.createElement(ol, {
    role: "group",
    isInline: i,
    ...f
  }, e));
}
dl.propTypes = {
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
dl.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const ae = qt;
ae.Control = Ii;
ae.Radio = uf;
ae.RadioSet = cf;
ae.Autosuggest = kf;
ae.AutosuggestOption = Sf;
ae.Checkbox = cl;
ae.CheckboxSet = dl;
ae.Switch = Af;
ae.SwitchSet = dl;
ae.Label = of;
ae.Group = cC;
ae.Text = al;
var Yn = /* @__PURE__ */ x.createContext(null), bi = function(t, n) {
  return n === void 0 && (n = null), t != null ? String(t) : n || null;
}, C_ = ["label", "onClick", "className"], S_ = {
  label: p.string.isRequired,
  onClick: p.func
}, __ = {
  label: "Close"
}, fl = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = Q(e, C_);
  return /* @__PURE__ */ x.createElement("button", H({
    ref: t,
    type: "button",
    className: L("close", i),
    onClick: r
  }, a), /* @__PURE__ */ x.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ x.createElement("span", {
    className: "sr-only"
  }, n));
});
fl.displayName = "CloseButton";
fl.propTypes = S_;
fl.defaultProps = __;
const Ay = function(e) {
  return /* @__PURE__ */ x.forwardRef(function(t, n) {
    return /* @__PURE__ */ x.createElement("div", H({}, t, {
      ref: n,
      className: L(t.className, e)
    }));
  });
};
var T_ = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Iy = Ay("h4");
Iy.displayName = "DivStyledAsH4";
var N_ = Ai("alert-heading", {
  Component: Iy
}), A_ = Ai("alert-link", {
  Component: Va
}), I_ = {
  show: !0,
  transition: Rr,
  closeLabel: "Close alert"
}, Fr = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = Ga(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, f = n.transition, d = Q(n, T_), v = ce(r, "alert"), w = un(function(m) {
    u && u(!1, m);
  }), g = f === !0 ? Rr : f, b = /* @__PURE__ */ x.createElement("div", H({
    role: "alert"
  }, g ? void 0 : d, {
    ref: t,
    className: L(o, v, l && v + "-" + l, c && v + "-dismissible")
  }), c && /* @__PURE__ */ x.createElement(fl, {
    onClick: w,
    label: a
  }), s);
  return g ? /* @__PURE__ */ x.createElement(g, H({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), b) : i ? b : null;
});
Fr.displayName = "Alert";
Fr.defaultProps = I_;
Fr.Link = A_;
Fr.Heading = N_;
var Py = /* @__PURE__ */ x.createContext(null);
Py.displayName = "CardContext";
function lh(e, t) {
  var n = 0;
  return x.Children.map(e, function(r) {
    return /* @__PURE__ */ x.isValidElement(r) ? t(r, n++) : r;
  });
}
function P_(e, t) {
  var n = 0;
  x.Children.forEach(e, function(r) {
    /* @__PURE__ */ x.isValidElement(r) && t(r, n++);
  });
}
var fu;
function R_(e, t) {
  if (!fu) {
    var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
    fu = function(a, o) {
      return r.call(a, o);
    };
  }
  return fu(e, t);
}
var F_ = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Lc(e, t) {
  return F_(e.querySelectorAll(t));
}
function O_(e) {
  const t = E.useRef(null);
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
}
function Ry() {
  const [, e] = E.useReducer((t) => !t, !1);
  return e;
}
function D_(e, t, n, r = !1) {
  const i = un(n);
  E.useEffect(() => {
    const a = typeof e == "function" ? e() : e;
    return a.addEventListener(t, i, r), () => a.removeEventListener(t, i, r);
  }, [e]);
}
function M_(e, t, n = !1) {
  const r = E.useCallback(() => document, []);
  return D_(r, e, t, n);
}
var If = /* @__PURE__ */ x.createContext(null), L_ = function() {
};
function Fy(e) {
  e === void 0 && (e = {});
  var t = E.useContext(If), n = Ac(), r = n[0], i = n[1], a = E.useRef(!1), o = e, s = o.flip, l = o.offset, u = o.rootCloseEvent, c = o.fixed, f = c === void 0 ? !1 : c, d = o.popperConfig, v = d === void 0 ? {} : d, w = o.usePopper, g = w === void 0 ? !!t : w, b = (t == null ? void 0 : t.show) == null ? !!e.show : t.show, m = (t == null ? void 0 : t.alignEnd) == null ? e.alignEnd : t.alignEnd;
  b && !a.current && (a.current = !0);
  var h = function(I) {
    t == null || t.toggle(!1, I);
  }, y = t || {}, k = y.drop, C = y.setMenu, S = y.menuElement, _ = y.toggleElement, T = m ? "bottom-end" : "bottom-start";
  k === "up" ? T = m ? "top-end" : "top-start" : k === "right" ? T = m ? "right-end" : "right-start" : k === "left" && (T = m ? "left-end" : "left-start");
  var P = my(_, S, yy({
    placement: T,
    enabled: !!(g && b),
    enableEvents: b,
    offset: l,
    flip: s,
    fixed: f,
    arrowElement: r,
    popperConfig: v
  })), N = H({
    ref: C || L_,
    "aria-labelledby": _ == null ? void 0 : _.id
  }, P.attributes.popper, {
    style: P.styles.popper
  }), B = {
    show: b,
    alignEnd: m,
    hasShown: a.current,
    toggle: t == null ? void 0 : t.toggle,
    popper: g ? P : null,
    arrowProps: g ? H({
      ref: i
    }, P.attributes.arrow, {
      style: P.styles.arrow
    }) : {}
  };
  return gy(S, h, {
    clickTrigger: u,
    disabled: !b
  }), [N, B];
}
var B_ = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: p.func.isRequired,
  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: p.bool,
  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: p.bool,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: p.bool,
  usePopper: p.oneOf([!0, !1]),
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: p.object,
  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: p.string
}, j_ = {
  usePopper: !0
};
function pl(e) {
  var t = e.children, n = Q(e, ["children"]), r = Fy(n), i = r[0], a = r[1];
  return /* @__PURE__ */ x.createElement(x.Fragment, null, a.hasShown ? t(i, a) : null);
}
pl.displayName = "ReactOverlaysDropdownMenu";
pl.propTypes = B_;
pl.defaultProps = j_;
var uh = function() {
};
function Oy() {
  var e = E.useContext(If) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? uh : r, a = e.setToggle, o = E.useCallback(function(s) {
    i(!n, s);
  }, [n, i]);
  return [{
    ref: a || uh,
    onClick: o,
    "aria-haspopup": !0,
    "aria-expanded": !!n
  }, {
    show: n,
    toggle: i
  }];
}
var H_ = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: p.func.isRequired
};
function Pf(e) {
  var t = e.children, n = Oy(), r = n[0], i = n[1];
  return /* @__PURE__ */ x.createElement(x.Fragment, null, t(r, i));
}
Pf.displayName = "ReactOverlaysDropdownToggle";
Pf.propTypes = H_;
var V_ = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: p.node,
  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: p.oneOf(["up", "left", "right", "down"]),
  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: p.oneOf([!1, !0, "keyboard"]),
  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: p.string,
  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: p.bool,
  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: p.bool,
  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: p.bool,
  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: p.func
};
function ch() {
  var e = Ry(), t = E.useRef(null), n = E.useCallback(function(r) {
    t.current = r, e();
  }, [e]);
  return [t, n];
}
function Ka(e) {
  var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, l = e.focusFirstItemOnShow, u = e.children, c = wf(i, r, a), f = c[0], d = c[1], v = ch(), w = v[0], g = v[1], b = w.current, m = ch(), h = m[0], y = m[1], k = h.current, C = O_(f), S = E.useRef(null), _ = E.useRef(!1), T = E.useCallback(function(I, V) {
    d(I, V);
  }, [d]), P = E.useMemo(function() {
    return {
      toggle: T,
      drop: t,
      show: f,
      alignEnd: n,
      menuElement: b,
      toggleElement: k,
      setMenu: g,
      setToggle: y
    };
  }, [T, t, f, n, b, k, g, y]);
  b && C && !f && (_.current = b.contains(document.activeElement));
  var N = un(function() {
    k && k.focus && k.focus();
  }), B = un(function() {
    var I = S.current, V = l;
    if (V == null && (V = w.current && R_(w.current, "[role=menu]") ? "keyboard" : !1), !(V === !1 || V === "keyboard" && !/^key.+$/.test(I))) {
      var W = Lc(w.current, s)[0];
      W && W.focus && W.focus();
    }
  });
  E.useEffect(function() {
    f ? B() : _.current && (_.current = !1, N());
  }, [f, _, N, B]), E.useEffect(function() {
    S.current = null;
  });
  var A = function(V, W) {
    if (!w.current) return null;
    var Z = Lc(w.current, s), Y = Z.indexOf(V) + W;
    return Y = Math.max(0, Math.min(Y, Z.length)), Z[Y];
  };
  return M_("keydown", function(I) {
    var V, W, Z = I.key, Y = I.target, R = (V = w.current) == null ? void 0 : V.contains(Y), D = (W = h.current) == null ? void 0 : W.contains(Y), $ = /input|textarea/i.test(Y.tagName);
    if (!($ && (Z === " " || Z !== "Escape" && R)) && !(!R && !D) && !(!w.current && Z === "Tab"))
      switch (S.current = I.type, Z) {
        case "ArrowUp": {
          var q = A(Y, -1);
          q && q.focus && q.focus(), I.preventDefault();
          return;
        }
        case "ArrowDown":
          if (I.preventDefault(), !f)
            d(!0, I);
          else {
            var U = A(Y, 1);
            U && U.focus && U.focus();
          }
          return;
        case "Tab":
          vy(document, "keyup", function(Te) {
            var oe;
            (Te.key === "Tab" && !Te.target || !((oe = w.current) != null && oe.contains(Te.target))) && d(!1, I);
          }, {
            once: !0
          });
          break;
        case "Escape":
          I.preventDefault(), I.stopPropagation(), d(!1, I);
          break;
      }
  }), /* @__PURE__ */ x.createElement(If.Provider, {
    value: P
  }, u);
}
Ka.displayName = "ReactOverlaysDropdown";
Ka.propTypes = V_;
Ka.Menu = pl;
Ka.Toggle = Pf;
var ml = /* @__PURE__ */ x.createContext(null);
ml.displayName = "NavContext";
var $_ = ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"], z_ = {
  as: Va,
  disabled: !1
}, hl = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, o = e.disabled, s = e.href, l = e.onClick, u = e.onSelect, c = e.active, f = e.as, d = Q(e, $_), v = ce(n, "dropdown-item"), w = E.useContext(Yn), g = E.useContext(ml), b = g || {}, m = b.activeKey, h = bi(a, s), y = c == null && h != null ? bi(m) === h : c, k = un(function(C) {
    o || (l && l(C), w && w(h, C), u && u(h, C));
  });
  return (
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    /* @__PURE__ */ x.createElement(f, H({}, d, {
      ref: t,
      href: s,
      disabled: o,
      className: L(r, v, y && "active", o && "disabled"),
      onClick: k
    }), i)
  );
});
hl.displayName = "DropdownItem";
hl.defaultProps = z_;
var Rf = /* @__PURE__ */ x.createContext(null);
Rf.displayName = "NavbarContext";
function Dy(e, t) {
  return e;
}
var U_ = ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"], Vi = p.oneOf(["left", "right"]);
p.oneOfType([Vi, p.shape({
  sm: Vi
}), p.shape({
  md: Vi
}), p.shape({
  lg: Vi
}), p.shape({
  xl: Vi
})]);
var G_ = {
  align: "left",
  alignRight: !1,
  flip: !0
}, vl = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, s = e.flip, l = e.show, u = e.renderOnMount, c = e.as, f = c === void 0 ? "div" : c, d = e.popperConfig, v = Q(e, U_), w = E.useContext(Rf), g = ce(n, "dropdown-menu"), b = xy(), m = b[0], h = b[1], y = [];
  if (i)
    if (typeof i == "object") {
      var k = Object.keys(i);
      if (k.length) {
        var C = k[0], S = i[C];
        a = S === "left", y.push(g + "-" + C + "-" + S);
      }
    } else i === "right" && (a = !0);
  var _ = Fy({
    flip: s,
    rootCloseEvent: o,
    show: l,
    alignEnd: a,
    usePopper: !w && y.length === 0,
    popperConfig: H({}, d, {
      modifiers: h.concat((d == null ? void 0 : d.modifiers) || [])
    })
  }), T = _[0], P = _[1], N = P.hasShown, B = P.popper, A = P.show, I = P.alignEnd, V = P.toggle;
  if (T.ref = Ca(m, Ca(Dy(t), T.ref)), !N && !u) return null;
  typeof f != "string" && (T.show = A, T.close = function() {
    return V == null ? void 0 : V(!1);
  }, T.alignRight = I);
  var W = v.style;
  return B != null && B.placement && (W = H({}, v.style, T.style), v["x-placement"] = B.placement), /* @__PURE__ */ x.createElement(f, H({}, v, T, {
    style: W,
    className: L.apply(void 0, [r, g, A && "show", I && g + "-right"].concat(y))
  }));
});
vl.displayName = "DropdownMenu";
vl.defaultProps = G_;
var W_ = ["bsPrefix", "split", "className", "childBsPrefix", "as"], Ff = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.split, i = e.className, a = e.childBsPrefix, o = e.as, s = o === void 0 ? Qs : o, l = Q(e, W_), u = ce(n, "dropdown-toggle");
  a !== void 0 && (l.bsPrefix = a);
  var c = Oy(), f = c[0];
  return f.ref = Ca(f.ref, Dy(t)), /* @__PURE__ */ x.createElement(s, H({
    className: L(i, u, r && u + "-split")
  }, f, l));
});
Ff.displayName = "DropdownToggle";
var K_ = ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"], q_ = Ai("dropdown-header", {
  defaultProps: {
    role: "heading"
  }
}), X_ = Ai("dropdown-divider", {
  defaultProps: {
    role: "separator"
  }
}), Y_ = Ai("dropdown-item-text", {
  Component: "span"
}), Q_ = {
  navbar: !1
}, Xt = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = Ga(e, {
    show: "onToggle"
  }), r = n.bsPrefix, i = n.drop, a = n.show, o = n.className, s = n.alignRight, l = n.onSelect, u = n.onToggle, c = n.focusFirstItemOnShow, f = n.as, d = f === void 0 ? "div" : f;
  n.navbar;
  var v = Q(n, K_), w = E.useContext(Yn), g = ce(r, "dropdown"), b = un(function(h, y, k) {
    k === void 0 && (k = y.type), y.currentTarget === document && (k !== "keydown" || y.key === "Escape") && (k = "rootClose"), u && u(h, y, {
      source: k
    });
  }), m = un(function(h, y) {
    w && w(h, y), l && l(h, y), b(!1, y, "select");
  });
  return /* @__PURE__ */ x.createElement(Yn.Provider, {
    value: m
  }, /* @__PURE__ */ x.createElement(Ka, {
    drop: i,
    show: a,
    alignEnd: s,
    onToggle: b,
    focusFirstItemOnShow: c,
    itemSelector: "." + g + "-item:not(.disabled):not(:disabled)"
  }, /* @__PURE__ */ x.createElement(d, H({}, v, {
    ref: t,
    className: L(o, a && "show", (!i || i === "down") && g, i === "up" && "dropup", i === "right" && "dropright", i === "left" && "dropleft")
  }))));
});
Xt.displayName = "Dropdown";
Xt.defaultProps = Q_;
Xt.Divider = X_;
Xt.Header = q_;
Xt.Item = hl;
Xt.ItemText = Y_;
Xt.Menu = vl;
Xt.Toggle = Ff;
var gl = /* @__PURE__ */ x.createContext(null), Z_ = ["as", "onSelect", "activeKey", "role", "onKeyDown"], dh = function() {
}, J_ = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, s = e.onKeyDown, l = Q(e, Z_), u = Ry(), c = E.useRef(!1), f = E.useContext(Yn), d = E.useContext(gl), v, w;
  d && (o = o || "tablist", a = d.activeKey, v = d.getControlledId, w = d.getControllerId);
  var g = E.useRef(null), b = function(C) {
    var S = g.current;
    if (!S) return null;
    var _ = Lc(S, "[data-rb-event-key]:not(.disabled)"), T = S.querySelector(".active");
    if (!T) return null;
    var P = _.indexOf(T);
    if (P === -1) return null;
    var N = P + C;
    return N >= _.length && (N = 0), N < 0 && (N = _.length - 1), _[N];
  }, m = function(C, S) {
    C != null && (i && i(C, S), f && f(C, S));
  }, h = function(C) {
    s && s(C);
    var S;
    switch (C.key) {
      case "ArrowLeft":
      case "ArrowUp":
        S = b(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        S = b(1);
        break;
      default:
        return;
    }
    S && (C.preventDefault(), m(S.dataset.rbEventKey, C), c.current = !0, u());
  };
  E.useEffect(function() {
    if (g.current && c.current) {
      var k = g.current.querySelector("[data-rb-event-key].active");
      k && k.focus();
    }
    c.current = !1;
  });
  var y = Ca(t, g);
  return /* @__PURE__ */ x.createElement(Yn.Provider, {
    value: m
  }, /* @__PURE__ */ x.createElement(ml.Provider, {
    value: {
      role: o,
      // used by NavLink to determine it's role
      activeKey: bi(a),
      getControlledId: v || dh,
      getControllerId: w || dh
    }
  }, /* @__PURE__ */ x.createElement(r, H({}, l, {
    onKeyDown: h,
    ref: y,
    role: o
  }))));
}), eT = ["active", "className", "eventKey", "onSelect", "onClick", "as"], tT = {
  disabled: !1
}, My = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, o = e.onClick, s = e.as, l = Q(e, eT), u = bi(i, l.href), c = E.useContext(Yn), f = E.useContext(ml), d = n;
  if (f) {
    !l.role && f.role === "tablist" && (l.role = "tab");
    var v = f.getControllerId(u), w = f.getControlledId(u);
    l["data-rb-event-key"] = u, l.id = v || l.id, l["aria-controls"] = w || l["aria-controls"], d = n == null && u != null ? f.activeKey === u : n;
  }
  l.role === "tab" && (l.disabled && (l.tabIndex = -1, l["aria-disabled"] = !0), l["aria-selected"] = d);
  var g = un(function(b) {
    o && o(b), u != null && (a && a(u, b), c && c(u, b));
  });
  return /* @__PURE__ */ x.createElement(s, H({}, l, {
    ref: t,
    onClick: g,
    className: L(r, d && "active")
  }));
});
My.defaultProps = tT;
var nT = ["bsPrefix", "className", "children", "as"], Of = /* @__PURE__ */ x.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, s = Q(e, nT);
    return n = ce(n, "nav-item"), /* @__PURE__ */ x.createElement(o, H({}, s, {
      ref: t,
      className: L(r, n)
    }), i);
  }
);
Of.displayName = "NavItem";
var rT = ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"], iT = {
  disabled: !1,
  as: Va
}, yl = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, s = e.onSelect, l = e.as, u = Q(e, rT);
  return n = ce(n, "nav-link"), /* @__PURE__ */ x.createElement(My, H({}, u, {
    href: a,
    ref: t,
    eventKey: o,
    as: l,
    disabled: r,
    onSelect: s,
    className: L(i, n, r && "disabled")
  }));
});
yl.displayName = "NavLink";
yl.defaultProps = iT;
var aT = ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "navbarScroll", "className", "children", "activeKey"], oT = {
  justify: !1,
  fill: !1
}, qa = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n, r = Ga(e, {
    activeKey: "onSelect"
  }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, s = r.variant, l = r.fill, u = r.justify, c = r.navbar, f = r.navbarScroll, d = r.className, v = r.children, w = r.activeKey, g = Q(r, aT), b = ce(o, "nav"), m, h, y = !1, k = E.useContext(Rf), C = E.useContext(Py);
  return k ? (m = k.bsPrefix, y = c ?? !0) : C && (h = C.cardHeaderBsPrefix), /* @__PURE__ */ x.createElement(J_, H({
    as: a,
    ref: t,
    activeKey: w,
    className: L(d, (n = {}, n[b] = !y, n[m + "-nav"] = y, n[m + "-nav-scroll"] = y && f, n[h + "-" + s] = !!h, n[b + "-" + s] = !!s, n[b + "-fill"] = l, n[b + "-justified"] = u, n))
  }, g), v);
});
qa.displayName = "Nav";
qa.defaultProps = oT;
qa.Item = Of;
qa.Link = yl;
var Ly = function(t) {
  var n = Ga(t, {
    activeKey: "onSelect"
  }), r = n.id, i = n.generateChildId, a = n.onSelect, o = n.activeKey, s = n.transition, l = n.mountOnEnter, u = n.unmountOnExit, c = n.children, f = E.useMemo(function() {
    return i || function(v, w) {
      return r ? r + "-" + w + "-" + v : null;
    };
  }, [r, i]), d = E.useMemo(function() {
    return {
      onSelect: a,
      activeKey: o,
      transition: s,
      mountOnEnter: l || !1,
      unmountOnExit: u || !1,
      getControlledId: function(w) {
        return f(w, "tabpane");
      },
      getControllerId: function(w) {
        return f(w, "tab");
      }
    };
  }, [a, o, s, l, u, f]);
  return /* @__PURE__ */ x.createElement(gl.Provider, {
    value: d
  }, /* @__PURE__ */ x.createElement(Yn.Provider, {
    value: a || null
  }, c));
}, sT = ["bsPrefix", "as", "className"], By = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = Q(e, sT), s = ce(n, "tab-content");
  return /* @__PURE__ */ x.createElement(i, H({
    ref: t
  }, o, {
    className: L(a, s)
  }));
}), lT = ["activeKey", "getControlledId", "getControllerId"], uT = ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"];
function cT(e) {
  var t = E.useContext(gl);
  if (!t) return e;
  var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = Q(t, lT), o = e.transition !== !1 && a.transition !== !1, s = bi(e.eventKey);
  return H({}, e, {
    active: e.active == null && s != null ? bi(n) === s : e.active,
    id: r(e.eventKey),
    "aria-labelledby": i(e.eventKey),
    transition: o && (e.transition || a.transition || Rr),
    mountOnEnter: e.mountOnEnter != null ? e.mountOnEnter : a.mountOnEnter,
    unmountOnExit: e.unmountOnExit != null ? e.unmountOnExit : a.unmountOnExit
  });
}
var Df = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var n = cT(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, s = n.onEntering, l = n.onEntered, u = n.onExit, c = n.onExiting, f = n.onExited, d = n.mountOnEnter, v = n.unmountOnExit, w = n.transition, g = n.as, b = g === void 0 ? "div" : g;
  n.eventKey;
  var m = Q(n, uT), h = ce(r, "tab-pane");
  if (!a && !w && v) return null;
  var y = /* @__PURE__ */ x.createElement(b, H({}, m, {
    ref: t,
    role: "tabpanel",
    "aria-hidden": !a,
    className: L(i, h, {
      active: a
    })
  }));
  return w && (y = /* @__PURE__ */ x.createElement(w, {
    in: a,
    onEnter: o,
    onEntering: s,
    onEntered: l,
    onExit: u,
    onExiting: c,
    onExited: f,
    mountOnEnter: d,
    unmountOnExit: v
  }, y)), /* @__PURE__ */ x.createElement(gl.Provider, {
    value: null
  }, /* @__PURE__ */ x.createElement(Yn.Provider, {
    value: null
  }, y));
});
Df.displayName = "TabPane";
var xl = /* @__PURE__ */ function(e) {
  ll(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
  }, t;
}(x.Component);
xl.Container = Ly;
xl.Content = By;
xl.Pane = Df;
var dT = ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"], fT = {
  variant: "tabs",
  mountOnEnter: !1,
  unmountOnExit: !1
};
function pT(e) {
  var t;
  return P_(e, function(n) {
    t == null && (t = n.props.eventKey);
  }), t;
}
function mT(e) {
  var t = e.props, n = t.title, r = t.eventKey, i = t.disabled, a = t.tabClassName, o = t.id;
  return n == null ? null : /* @__PURE__ */ x.createElement(Of, {
    as: yl,
    eventKey: r,
    disabled: i,
    id: o,
    className: a
  }, n);
}
var Mf = function(t) {
  var n = Ga(t, {
    activeKey: "onSelect"
  }), r = n.id, i = n.onSelect, a = n.transition, o = n.mountOnEnter, s = n.unmountOnExit, l = n.children, u = n.activeKey, c = u === void 0 ? pT(l) : u, f = Q(n, dT);
  return /* @__PURE__ */ x.createElement(Ly, {
    id: r,
    activeKey: c,
    onSelect: i,
    transition: a,
    mountOnEnter: o,
    unmountOnExit: s
  }, /* @__PURE__ */ x.createElement(qa, H({}, f, {
    role: "tablist",
    as: "nav"
  }), lh(l, mT)), /* @__PURE__ */ x.createElement(By, null, lh(l, function(d) {
    var v = H({}, d.props);
    return delete v.title, delete v.disabled, delete v.tabClassName, /* @__PURE__ */ x.createElement(Df, v);
  })));
};
Mf.defaultProps = fT;
Mf.displayName = "Tabs";
var Lf = {};
Lf.match = ET;
Lf.parse = jy;
var hT = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, vT = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, gT = /^(?:(min|max)-)?(.+)/, yT = /(em|rem|px|cm|mm|in|pt|pc)?$/, xT = /(dpi|dpcm|dppx)?$/;
function ET(e, t) {
  return jy(e).some(function(n) {
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
          u = ph(u), c = ph(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = fh(u), c = fh(c);
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
function jy(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(hT), r = n[1], i = n[2], a = n[3] || "", o = {};
    return o.inverse = !!r && r.toLowerCase() === "not", o.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], o.expressions = a.map(function(s) {
      var l = s.match(vT), u = l[1].toLowerCase().match(gT);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), o;
  });
}
function fh(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function ph(e) {
  var t = parseFloat(e), n = String(e).match(xT)[1];
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
  var t = parseFloat(e), n = String(e).match(yT)[1];
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
var wT = Lf.match, hh = typeof window < "u" ? window.matchMedia : null;
function bT(e, t, n) {
  var r = this, i;
  hh && !n && (i = hh.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(s)) : (this.matches = wT(e, t), this.media = e), this.addListener = a, this.removeListener = o, this.dispose = l;
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
function kT(e, t, n) {
  return new bT(e, t, n);
}
var CT = kT;
const ST = /* @__PURE__ */ Si(CT);
var _T = /[A-Z]/g, TT = /^ms-/, pu = {};
function NT(e) {
  return "-" + e.toLowerCase();
}
function Hy(e) {
  if (pu.hasOwnProperty(e))
    return pu[e];
  var t = e.replace(_T, NT);
  return pu[e] = TT.test(t) ? "-" + t : t;
}
function AT(e, t) {
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
const Ye = p.oneOfType([p.string, p.number]), Vy = {
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
}, IT = {
  orientation: p.oneOf(["portrait", "landscape"]),
  scan: p.oneOf(["progressive", "interlace"]),
  aspectRatio: p.string,
  deviceAspectRatio: p.string,
  height: Ye,
  deviceHeight: Ye,
  width: Ye,
  deviceWidth: Ye,
  color: p.bool,
  colorIndex: p.bool,
  monochrome: p.bool,
  resolution: Ye,
  type: Object.keys(Vy)
}, { type: dI, ...PT } = IT, RT = {
  minAspectRatio: p.string,
  maxAspectRatio: p.string,
  minDeviceAspectRatio: p.string,
  maxDeviceAspectRatio: p.string,
  minHeight: Ye,
  maxHeight: Ye,
  minDeviceHeight: Ye,
  maxDeviceHeight: Ye,
  minWidth: Ye,
  maxWidth: Ye,
  minDeviceWidth: Ye,
  maxDeviceWidth: Ye,
  minColor: p.number,
  maxColor: p.number,
  minColorIndex: p.number,
  maxColorIndex: p.number,
  minMonochrome: p.number,
  maxMonochrome: p.number,
  minResolution: Ye,
  maxResolution: Ye,
  ...PT
}, FT = { ...Vy, ...RT };
var OT = {
  all: FT
};
const DT = (e) => `not ${e}`, MT = (e, t) => {
  const n = Hy(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? DT(n) : `(${n}: ${t})`;
}, LT = (e) => e.join(" and "), BT = (e) => {
  const t = [];
  return Object.keys(OT.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(MT(n, r));
  }), LT(t);
}, jT = E.createContext(void 0), HT = (e) => e.query || BT(e), vh = (e) => e ? Object.keys(e).reduce((n, r) => (n[Hy(r)] = e[r], n), {}) : void 0, $y = () => {
  const e = E.useRef(!1);
  return E.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, VT = (e) => {
  const t = E.useContext(jT), n = () => vh(e) || vh(t), [r, i] = E.useState(n);
  return E.useEffect(() => {
    const a = n();
    AT(r, a) || i(a);
  }, [e, t]), r;
}, $T = (e) => {
  const t = () => HT(e), [n, r] = E.useState(t);
  return E.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, zT = (e, t) => {
  const n = () => ST(e, t || {}, !!t), [r, i] = E.useState(n), a = $y();
  return E.useEffect(() => {
    if (a) {
      const o = n();
      return i(o), () => {
        o && o.dispose();
      };
    }
  }, [e, t]), r;
}, UT = (e) => {
  const [t, n] = E.useState(e.matches);
  return E.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, zy = (e, t, n) => {
  const r = VT(t), i = $T(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = zT(i, r), o = UT(a);
  return $y(), E.useEffect(() => {
  }, [o]), E.useEffect(() => () => {
    a && a.dispose();
  }, []), o;
}, GT = "576px", WT = {
  sm: GT
}, {
  sm: KT
} = WT, qT = {
  extraSmall: {
    maxWidth: parseFloat(KT) || 575.98
  }
};
function Bc({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...r,
    className: L(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function XT() {
  return /* @__PURE__ */ x.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Bc.Spacer = XT;
const Bf = /* @__PURE__ */ E.forwardRef(({
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
  const [c, f] = E.useState(o), d = zy({
    maxWidth: qT.extraSmall.maxWidth
  }), v = "sm";
  E.useEffect(() => {
    f(d ? !0 : o);
  }, [d, o]);
  const w = E.useCallback((g) => {
    const b = {
      size: v,
      key: g.props.children
    };
    return /* @__PURE__ */ E.cloneElement(g, b);
  }, []);
  return /* @__PURE__ */ x.createElement(Fr, {
    ...l,
    className: L("alert-content", l.className),
    show: s,
    ref: u
  }, t && /* @__PURE__ */ x.createElement(bn, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ x.createElement("div", {
    className: L({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ x.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ x.createElement(Bc, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ x.createElement(Bc.Spacer, null), r && /* @__PURE__ */ x.createElement(Nt, {
    size: v,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ x.createElement(L0, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(w))));
}), Uy = Ay("h4");
Uy.displayName = "DivStyledAsH4";
function YT({
  as: e = Uy,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ x.createElement(Fr.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function QT({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ x.createElement(Fr.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Bf.Heading = YT;
Bf.Link = QT;
function ZT() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function Gy(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": ZT()
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
const gh = (e, t = 60) => e ? e.length <= t ? e : e.substring(0, t) + "..." : "", JT = (e) => e.replace(/<[^>]*>/g, ""), e2 = ({
  cards: e,
  onAddCard: t,
  onEditCard: n,
  onDeleteCard: r,
  onMoveUp: i,
  onMoveDown: a,
  onReorder: o
}) => {
  const [s, l] = E.useState(null), [u, c] = E.useState(null), f = (g) => {
    l(g);
  }, d = (g, b) => {
    g.preventDefault(), c(b);
  }, v = (g, b) => {
    g.preventDefault(), s !== null && s !== b && o(s, b), l(null), c(null);
  }, w = () => {
    l(null), c(null);
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "flashcards-list-view", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-4", children: [
      /* @__PURE__ */ F.jsxs("h3", { children: [
        "Flashcards (",
        e.length,
        " / 100)"
      ] }),
      /* @__PURE__ */ F.jsx(
        Nt,
        {
          variant: "primary",
          iconBefore: Y1,
          onClick: t,
          disabled: e.length >= 100,
          children: "Add New Card"
        }
      )
    ] }),
    e.length === 0 && /* @__PURE__ */ F.jsx("div", { className: "text-center p-5 bg-light rounded", children: /* @__PURE__ */ F.jsx("p", { className: "mb-3", children: 'No flashcards yet. Click "Add New Card" to create your first card.' }) }),
    /* @__PURE__ */ F.jsx("div", { className: "card-list", children: e.map((g, b) => /* @__PURE__ */ F.jsxs(
      "div",
      {
        className: `card-list-item ${s === b ? "dragging" : ""} ${u === b ? "drag-over" : ""}`,
        draggable: !0,
        onDragStart: () => f(b),
        onDragOver: (m) => d(m, b),
        onDrop: (m) => v(m, b),
        onDragEnd: w,
        children: [
          /* @__PURE__ */ F.jsx("div", { className: "card-drag-handle", children: /* @__PURE__ */ F.jsx(eC, {}) }),
          /* @__PURE__ */ F.jsxs("div", { className: "card-content", children: [
            /* @__PURE__ */ F.jsxs("div", { className: "card-main", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "card-label", children: [
                "Card ",
                b + 1,
                ":"
              ] }),
              /* @__PURE__ */ F.jsx("span", { className: "card-title", children: g.front_title || "(Untitled)" })
            ] }),
            g.front_subtitle && /* @__PURE__ */ F.jsx("div", { className: "card-subtitle", children: gh(g.front_subtitle, 100) }),
            /* @__PURE__ */ F.jsx("div", { className: "card-back-preview", children: gh(JT(g.back_text), 120) })
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ F.jsx(
              Nt,
              {
                variant: "link",
                onClick: () => n(b),
                size: "sm",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ F.jsx(
              Nt,
              {
                variant: "link",
                onClick: () => r(b),
                disabled: e.length === 1,
                size: "sm",
                className: "text-danger",
                children: "Delete"
              }
            )
          ] })
        ]
      },
      b
    )) })
  ] });
}, yh = /* @__PURE__ */ x.forwardRef(({
  variant: e = "primary",
  className: t,
  children: n = null,
  disabled: r = !1,
  expandable: i = !1,
  ...a
}, o) => /* @__PURE__ */ x.createElement("div", {
  ref: o,
  className: L("pgn__bubble", `pgn__bubble-${e}`, t, {
    disabled: r,
    expandable: i
  }),
  ...a
}, n)), Wy = /* @__PURE__ */ x.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function t2({
  onClose: e,
  isOpen: t,
  isBlocking: n = !1,
  children: r = null
}) {
  const i = E.useMemo(() => ({
    onClose: e,
    isOpen: t,
    isBlocking: n
  }), [e, t, n]);
  return /* @__PURE__ */ x.createElement(Wy.Provider, {
    value: i
  }, r);
}
var Vo = "right-scroll-bar-position", $o = "width-before-scroll-bar", n2 = "with-scroll-bars-hidden", r2 = "--removed-body-scroll-bar-size";
function mu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function i2(e, t) {
  var n = E.useState(function() {
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
var a2 = typeof window < "u" ? E.useLayoutEffect : E.useEffect, xh = /* @__PURE__ */ new WeakMap();
function Ky(e, t) {
  var n = i2(null, function(r) {
    return e.forEach(function(i) {
      return mu(i, r);
    });
  });
  return a2(function() {
    var r = xh.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), o = n.current;
      i.forEach(function(s) {
        a.has(s) || mu(s, null);
      }), a.forEach(function(s) {
        i.has(s) || mu(s, o);
      });
    }
    xh.set(n, e);
  }, [e]), n;
}
function qy(e) {
  return e;
}
function Xy(e, t) {
  t === void 0 && (t = qy);
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
function jf(e, t) {
  return t === void 0 && (t = qy), Xy(e, t);
}
function Hf(e) {
  e === void 0 && (e = {});
  var t = Xy(null);
  return t.options = j({ async: !0, ssr: !1 }, e), t;
}
var Yy = function(e) {
  var t = e.sideCar, n = sn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return E.createElement(r, j({}, n));
};
Yy.isSideCarExport = !0;
function Vf(e, t) {
  return e.useMedium(t), Yy;
}
var Qy = Hf(), hu = function() {
}, $f = E.forwardRef(function(e, t) {
  var n = E.useRef(null), r = E.useState({
    onScrollCapture: hu,
    onWheelCapture: hu,
    onTouchMoveCapture: hu
  }), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, v = e.noRelative, w = e.noIsolation, g = e.inert, b = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, y = e.gapMode, k = sn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = d, S = Ky([n, t]), _ = j(j({}, k), i);
  return E.createElement(
    E.Fragment,
    null,
    c && E.createElement(C, { sideCar: Qy, removeScrollBar: u, shards: f, noRelative: v, noIsolation: w, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    o ? E.cloneElement(E.Children.only(s), j(j({}, _), { ref: S })) : E.createElement(h, j({}, _, { className: l, ref: S }), s)
  );
});
$f.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
$f.classNames = {
  fullWidth: $o,
  zeroRight: Vo
};
var jc = "data-focus-lock", Zy = "data-focus-lock-disabled", o2 = "data-no-focus-lock", s2 = "data-autofocus-inside", l2 = "data-no-autofocus", vu = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Jy = jf({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), ex = jf(), u2 = jf(), tx = Hf({
  async: !0,
  ssr: typeof document < "u"
}), c2 = /* @__PURE__ */ E.createContext(void 0), d2 = [], nx = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, i = E.useState(), a = i[0], o = i[1], s = E.useRef(), l = E.useRef(!1), u = E.useRef(null), c = E.useState({}), f = c[1], d = t.children, v = t.disabled, w = v === void 0 ? !1 : v, g = t.noFocusGuards, b = g === void 0 ? !1 : g, m = t.persistentFocus, h = m === void 0 ? !1 : m, y = t.crossFrame, k = y === void 0 ? !0 : y, C = t.autoFocus, S = C === void 0 ? !0 : C;
  t.allowTextSelection;
  var _ = t.group, T = t.className, P = t.whiteList, N = t.hasPositiveIndices, B = t.shards, A = B === void 0 ? d2 : B, I = t.as, V = I === void 0 ? "div" : I, W = t.lockProps, Z = W === void 0 ? {} : W, Y = t.sideCar, R = t.returnFocus, D = R === void 0 ? !1 : R, $ = t.focusOptions, q = t.onActivation, U = t.onDeactivation, Te = E.useState({}), oe = Te[0], Ne = E.useCallback(function(Ie) {
    var re = Ie.captureFocusRestore;
    if (!u.current) {
      var me, ue = (me = document) == null ? void 0 : me.activeElement;
      u.current = ue, ue !== document.body && (u.current = re(ue));
    }
    s.current && q && q(s.current), l.current = !0, f();
  }, [q]), pe = E.useCallback(function() {
    l.current = !1, U && U(s.current), f();
  }, [U]), He = E.useCallback(function(Ie) {
    var re = u.current;
    if (re) {
      var me = (typeof re == "function" ? re() : re) || document.body, ue = typeof D == "function" ? D(me) : D;
      if (ue) {
        var de = typeof ue == "object" ? ue : void 0;
        u.current = null, Ie ? Promise.resolve().then(function() {
          return me.focus(de);
        }) : me.focus(de);
      }
    }
  }, [D]), rt = E.useCallback(function(Ie) {
    l.current && Jy.useMedium(Ie);
  }, []), Mt = ex.useMedium, Lt = E.useCallback(function(Ie) {
    s.current !== Ie && (s.current = Ie, o(Ie));
  }, []), pt = H((r = {}, r[Zy] = w && "disabled", r[jc] = _, r), Z), it = b !== !0, dn = it && b !== "tail", Tn = Ky([n, Lt]), Nn = E.useMemo(function() {
    return {
      observed: s,
      shards: A,
      enabled: !w,
      active: l.current
    };
  }, [w, l.current, A, a]);
  return /* @__PURE__ */ x.createElement(E.Fragment, null, it && [
    /* @__PURE__ */ x.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: w ? -1 : 0,
      style: vu
    }),
    N ? /* @__PURE__ */ x.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: w ? -1 : 1,
      style: vu
    }) : null
  ], !w && /* @__PURE__ */ x.createElement(Y, {
    id: oe,
    sideCar: tx,
    observed: a,
    disabled: w,
    persistentFocus: h,
    crossFrame: k,
    autoFocus: S,
    whiteList: P,
    shards: A,
    onActivation: Ne,
    onDeactivation: pe,
    returnFocus: He,
    focusOptions: $,
    noFocusGuards: b
  }), /* @__PURE__ */ x.createElement(V, H({
    ref: Tn
  }, pt, {
    className: T,
    onBlur: Mt,
    onFocus: rt
  }), /* @__PURE__ */ x.createElement(c2.Provider, {
    value: Nn
  }, d)), dn && /* @__PURE__ */ x.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: w ? -1 : 0,
    style: vu
  }));
});
nx.propTypes = {};
function zf(e) {
  setTimeout(e, 1);
}
var f2 = function(t) {
  return t && "current" in t ? t.current : t;
}, rx = Hf(), ix = "data-focus-on-hidden", p2 = { preventScroll: !0 }, m2 = E.forwardRef(function(e, t) {
  var n = E.useState(!1), r = n[0], i = n[1], a = e.children, o = e.autoFocus, s = e.shards, l = e.crossFrame, u = e.enabled, c = u === void 0 ? !0 : u, f = e.scrollLock, d = f === void 0 ? !0 : f, v = e.focusLock, w = v === void 0 ? !0 : v, g = e.returnFocus, b = g === void 0 ? !0 : g, m = e.inert, h = e.allowPinchZoom, y = e.sideCar, k = e.className, C = e.shouldIgnore, S = e.preventScrollOnFocus, _ = e.style, T = e.as, P = e.gapMode, N = sn(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), B = y, A = r.onActivation, I = r.onDeactivation, V = sn(r, ["onActivation", "onDeactivation"]), W = j(j({}, V), {
    as: T,
    style: _,
    sideCar: y,
    shards: s,
    allowPinchZoom: h,
    gapMode: P,
    inert: m,
    enabled: c && d
  });
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(nx, { ref: t, sideCar: y, disabled: !(r && c && w), returnFocus: b, autoFocus: o, shards: s, crossFrame: l, onActivation: A, onDeactivation: I, className: k, whiteList: C, lockProps: W, focusOptions: S ? p2 : void 0, as: $f }, a),
    c && E.createElement(B, j({}, N, { sideCar: rx, setLockProps: i, shards: s }))
  );
});
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function h2(e, t) {
  if (Ta(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ta(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v2(e) {
  var t = h2(e, "string");
  return Ta(t) == "symbol" ? t : t + "";
}
function g2(e, t, n) {
  return (t = v2(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function y2(e, t) {
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
      ll(c, u);
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
        return /* @__PURE__ */ x.createElement(i, this.props);
      }, c;
    }(E.PureComponent);
    return g2(l, "displayName", "SideEffect(" + n(i) + ")"), l;
  };
}
var cn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, _r = function(e) {
  return Array.isArray(e) ? e : [e];
}, ax = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, x2 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, ox = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, sx = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, E2 = function(e) {
  return e.hasAttribute("inert");
}, w2 = function(e, t) {
  return !e || sx(e) || !x2(e) && !E2(e) && t(ox(e));
}, lx = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = w2(t, lx.bind(void 0, e));
  return e.set(t, r), r;
}, b2 = function(e, t) {
  return e && !sx(e) ? S2(e) ? t(ox(e)) : !1 : !0;
}, ux = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = b2(t, ux.bind(void 0, e));
  return e.set(t, r), r;
}, cx = function(e) {
  return e.dataset;
}, k2 = function(e) {
  return e.tagName === "BUTTON";
}, dx = function(e) {
  return e.tagName === "INPUT";
}, fx = function(e) {
  return dx(e) && e.type === "radio";
}, C2 = function(e) {
  return !((dx(e) || k2(e)) && (e.type === "hidden" || e.disabled));
}, S2 = function(e) {
  var t = e.getAttribute(l2);
  return ![!0, "true", ""].includes(t);
}, Uf = function(e) {
  var t;
  return !!(e && (!((t = cx(e)) === null || t === void 0) && t.focusGuard));
}, Hc = function(e) {
  return !Uf(e);
}, _2 = function(e) {
  return !!e;
}, T2 = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, N2 = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Gf = function(e, t, n) {
  return cn(e).map(function(r, i) {
    var a = N2(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(T2);
}, A2 = [
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
], Wf = A2.join(","), I2 = "".concat(Wf, ", [data-focus-guard]"), px = function(e, t) {
  return cn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? I2 : Wf) ? [r] : [], px(r));
  }, []);
}, P2 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? ki([e.contentDocument.body], t) : [e];
}, ki = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = px(r, t), o = (i = []).concat.apply(i, a.map(function(s) {
      return P2(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      o,
      // add if node is tabbable itself
      r.parentNode ? cn(r.parentNode.querySelectorAll(Wf)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, R2 = function(e) {
  var t = e.querySelectorAll("[".concat(s2, "]"));
  return cn(t).map(function(n) {
    return ki([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Kf = function(e, t) {
  return cn(e).filter(function(n) {
    return lx(t, n);
  }).filter(function(n) {
    return C2(n);
  });
}, Eh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), cn(e).filter(function(n) {
    return ux(t, n);
  });
}, qf = function(e, t, n) {
  return Gf(Kf(ki(e, n), t), !0, n);
}, Na = function(e, t) {
  return Gf(Kf(ki(e), t), !1);
}, F2 = function(e, t) {
  return Kf(R2(e), t);
}, yr = function(e, t) {
  return e.shadowRoot ? yr(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : cn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? yr(i, t) : !1;
    }
    return yr(n, t);
  });
}, O2 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(o, s) {
    return !t.has(s);
  });
}, mx = function(e) {
  return e.parentNode ? mx(e.parentNode) : e;
}, Xf = function(e) {
  var t = _r(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute(jc);
    return n.push.apply(n, i ? O2(cn(mx(r).querySelectorAll("[".concat(jc, '="').concat(i, '"]:not([').concat(Zy, '="disabled"])')))) : [r]), n;
  }, []);
}, D2 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Aa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Aa(t.shadowRoot) : t instanceof HTMLIFrameElement && D2(function() {
      return t.contentWindow.document;
    }) ? Aa(t.contentWindow.document) : t;
  }
}, M2 = function(e, t) {
  return e === t;
}, L2 = function(e, t) {
  return !!cn(e.querySelectorAll("iframe")).some(function(n) {
    return M2(n, t);
  });
}, hx = function(e, t) {
  return t === void 0 && (t = Aa(ax(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Xf(e).some(function(n) {
    return yr(n, t) || L2(n, t);
  });
}, B2 = function(e) {
  e === void 0 && (e = document);
  var t = Aa(e);
  return t ? cn(e.querySelectorAll("[".concat(o2, "]"))).some(function(n) {
    return yr(n, t);
  }) : !1;
}, j2 = function(e, t) {
  return t.filter(fx).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Yf = function(e, t) {
  return fx(e) && e.name ? j2(e, t) : e;
}, H2 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Yf(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, wh = function(e) {
  return e[0] && e.length > 1 ? Yf(e[0], e) : e[0];
}, bh = function(e, t) {
  return e.indexOf(Yf(t, e));
}, Vc = "NEW_FOCUS", V2 = function(e, t, n, r, i) {
  var a = e.length, o = e[0], s = e[a - 1], l = Uf(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var u = r !== void 0 ? n.indexOf(r) : -1, c = i ? n.indexOf(i) : u, f = i ? e.indexOf(i) : -1;
    if (u === -1)
      return f !== -1 ? f : Vc;
    if (f === -1)
      return Vc;
    var d = u - c, v = n.indexOf(o), w = n.indexOf(s), g = H2(n), b = r !== void 0 ? g.indexOf(r) : -1, m = i ? g.indexOf(i) : b, h = g.filter(function(T) {
      return T.tabIndex >= 0;
    }), y = r !== void 0 ? h.indexOf(r) : -1, k = i ? h.indexOf(i) : y, C = y >= 0 && k >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      k - y
    ) : (
      // or else measure in focusable space
      m - b
    );
    if (!d && f >= 0 || t.length === 0)
      return f;
    var S = bh(e, t[0]), _ = bh(e, t[t.length - 1]);
    if (u <= v && l && Math.abs(d) > 1)
      return _;
    if (u >= w && l && Math.abs(d) > 1)
      return S;
    if (d && Math.abs(C) > 1)
      return f;
    if (u <= v)
      return _;
    if (u > w)
      return S;
    if (d)
      return Math.abs(d) > 1 ? f : (a + f + d) % a;
  }
}, $2 = function(e) {
  return function(t) {
    var n, r = (n = cx(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, kh = function(e, t, n) {
  var r = e.map(function(a) {
    var o = a.node;
    return o;
  }), i = Eh(r.filter($2(n)));
  return i && i.length ? wh(i) : wh(Eh(t));
}, $c = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && $c(e.parentNode.host || e.parentNode, t), t;
}, gu = function(e, t) {
  for (var n = $c(e), r = $c(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, vx = function(e, t, n) {
  var r = _r(e), i = _r(t), a = r[0], o = !1;
  return i.filter(Boolean).forEach(function(s) {
    o = gu(o || s, s) || o, n.filter(Boolean).forEach(function(l) {
      var u = gu(a, l);
      u && (!o || yr(u, o) ? o = u : o = gu(u, o));
    });
  }), o;
}, Ch = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(F2(r, t));
  }, []);
}, z2 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(_2);
}, U2 = function(e, t) {
  var n = Aa(_r(e).length > 0 ? document : ax(e).ownerDocument), r = Xf(e).filter(Hc), i = vx(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Na(r, a), s = o.filter(function(w) {
    var g = w.node;
    return Hc(g);
  });
  if (s[0]) {
    var l = Na([i], a).map(function(w) {
      var g = w.node;
      return g;
    }), u = z2(l, s), c = u.map(function(w) {
      var g = w.node;
      return g;
    }), f = u.filter(function(w) {
      var g = w.tabIndex;
      return g >= 0;
    }).map(function(w) {
      var g = w.node;
      return g;
    }), d = V2(c, f, l, n, t);
    if (d === Vc) {
      var v = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        kh(o, f, Ch(r, a)) || kh(o, c, Ch(r, a))
      );
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, G2 = function(e) {
  var t = Xf(e).filter(Hc), n = vx(e, e, t), r = Gf(ki([n], !0), !0, !0), i = ki(t, !1);
  return r.map(function(a) {
    var o = a.node, s = a.index;
    return {
      node: o,
      index: s,
      lockItem: i.indexOf(o) >= 0,
      guard: Uf(o)
    };
  });
}, Qf = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, yu = 0, xu = !1, gx = function(e, t, n) {
  n === void 0 && (n = {});
  var r = U2(e, t);
  if (!xu && r) {
    if (yu > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), xu = !0, setTimeout(function() {
        xu = !1;
      }, 1);
      return;
    }
    yu++, Qf(r.node, n.focusOptions), yu--;
  }
};
function $i(e) {
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
var W2 = function(e) {
  if (!e)
    return null;
  for (var t = [], n = e; n && n !== document.body; )
    t.push({
      current: $i(n),
      parent: $i(n.parentElement),
      left: $i(n.previousElementSibling),
      right: $i(n.nextElementSibling)
    }), n = n.parentElement;
  return {
    element: $i(e),
    stack: t,
    ownerDocument: e.ownerDocument
  };
}, K2 = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var o = e.stack, s = e.ownerDocument, l = /* @__PURE__ */ new Map(), u = 0, c = o; u < c.length; u++) {
      var f = c[u], d = (t = f.parent) === null || t === void 0 ? void 0 : t.call(f);
      if (d && s.contains(d)) {
        for (var v = (n = f.left) === null || n === void 0 ? void 0 : n.call(f), w = f.current(), g = d.contains(w) ? w : void 0, b = (r = f.right) === null || r === void 0 ? void 0 : r.call(f), m = qf([d], l), h = (
          // that is element itself
          (a = (i = g ?? // or something in it's place
          (v == null ? void 0 : v.nextElementSibling)) !== null && i !== void 0 ? i : (
            // or somebody to the right, still close enough
            b
          )) !== null && a !== void 0 ? a : (
            // or somebody to the left, something?
            v
          )
        ); h; ) {
          for (var y = 0, k = m; y < k.length; y++) {
            var C = k[y];
            if (h != null && h.contains(C.node))
              return C.node;
          }
          h = h.nextElementSibling;
        }
        if (m.length)
          return m[0].node;
      }
    }
}, yx = function(e) {
  var t = W2(e);
  return function() {
    return K2(t);
  };
}, q2 = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = _r(t);
  if (r.every(function(o) {
    return !yr(o, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? qf(r, /* @__PURE__ */ new Map()) : Na(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(o) {
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
}, X2 = function(e, t) {
  var n = t ? qf(_r(e), /* @__PURE__ */ new Map()) : Na(_r(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, Y2 = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, xx = function(e, t, n) {
  t === void 0 && (t = {});
  var r = Y2(t), i = q2(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && Qf(a.node, r.focusOptions);
  }
}, Q2 = function(e, t) {
  t === void 0 && (t = {}), xx(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, Z2 = function(e, t) {
  t === void 0 && (t = {}), xx(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Ex = function(e, t, n) {
  var r, i = X2(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && Qf(a.node, t.focusOptions);
}, J2 = function(e, t) {
  t === void 0 && (t = {}), Ex(e, t, "first");
}, eN = function(e, t) {
  t === void 0 && (t = {}), Ex(e, t, "last");
}, wx = function() {
  return document && document.activeElement === document.body;
}, tN = function() {
  return wx() || B2();
}, oi = null, at = null, Sh = function() {
  return null;
}, si = null, Ia = !1, Zf = !1, nN = function() {
  return !0;
}, rN = function(t) {
  return (oi.whiteList || nN)(t);
}, iN = function(t, n) {
  si = {
    observerNode: t,
    portaledElement: n
  };
}, aN = function(t) {
  return si && si.portaledElement === t;
};
function _h(e, t, n, r) {
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
var oN = function(t) {
  return t ? !!Ia : Ia === "meanwhile";
}, sN = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, lN = function(t, n) {
  return n.some(function(r) {
    return sN(t, r, r);
  });
}, bx = function(t) {
  return Na(t, /* @__PURE__ */ new Map());
}, uN = function(t) {
  return !bx([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, Es = function() {
  var t = !1;
  if (oi) {
    var n = oi, r = n.observed, i = n.persistentFocus, a = n.autoFocus, o = n.shards, s = n.crossFrame, l = n.focusOptions, u = n.noFocusGuards, c = r || si && si.portaledElement;
    if (wx() && at && at !== document.body && (!document.body.contains(at) || uN(at))) {
      var f = Sh();
      f && f.focus();
    }
    var d = document && document.activeElement;
    if (c) {
      var v = [c].concat(o.map(f2).filter(Boolean)), w = function() {
        if (!oN(s) || !u || !at || Zf)
          return !1;
        var y = bx(v), k = y.findIndex(function(C) {
          var S = C.node;
          return S === at;
        });
        return k === 0 || k === y.length - 1;
      };
      if ((!d || rN(d)) && (i || w() || !tN() || !at && a) && (c && !(hx(v) || d && lN(d, v) || aN(d)) && (document && !at && d && !a ? (d.blur && d.blur(), document.body.focus()) : (t = gx(v, at, {
        focusOptions: l
      }), si = {})), at = document && document.activeElement, at !== document.body && (Sh = yx(at)), Ia = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var g = document && document.activeElement, b = G2(v), m = b.map(function(h) {
          var y = h.node;
          return y;
        }).indexOf(g);
        m > -1 && (b.filter(function(h) {
          var y = h.guard, k = h.node;
          return y && k.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var y = h.node;
          return y.removeAttribute("tabIndex");
        }), _h(m, b.length, 1, b), _h(m, -1, -1, b));
      }
    }
  }
  return t;
}, kx = function(t) {
  Es() && t && (t.stopPropagation(), t.preventDefault());
}, Jf = function() {
  return zf(Es);
}, cN = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || iN(r, n);
}, dN = function() {
  return null;
}, Cx = function() {
  Zf = !0;
}, Sx = function() {
  Zf = !1, Ia = "just", zf(function() {
    Ia = "meanwhile";
  });
}, fN = function() {
  document.addEventListener("focusin", kx), document.addEventListener("focusout", Jf), window.addEventListener("focus", Cx), window.addEventListener("blur", Sx);
}, pN = function() {
  document.removeEventListener("focusin", kx), document.removeEventListener("focusout", Jf), window.removeEventListener("focus", Cx), window.removeEventListener("blur", Sx);
};
function mN(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var _x = {
  moveFocusInside: gx,
  focusInside: hx,
  focusNextElement: Q2,
  focusPrevElement: Z2,
  focusFirstElement: J2,
  focusLastElement: eN,
  captureFocusRestore: yx
};
function hN(e) {
  var t = e.slice(-1)[0];
  t && !oi && fN();
  var n = oi, r = n && t && t.id === n.id;
  oi = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (at = null, (!r || n.observed !== t.observed) && t.onActivation(_x), Es(), zf(Es)) : (pN(), at = null);
}
Jy.assignSyncMedium(cN);
ex.assignMedium(Jf);
u2.assignMedium(function(e) {
  return e(_x);
});
const vN = y2(mN, hN)(dN);
Vf(tx, vN);
var gN = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gN();
  return t && e.setAttribute("nonce", t), e;
}
function xN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function EN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wN = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = yN()) && (xN(t, n), EN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, bN = function() {
  var e = wN();
  return function(t, n) {
    E.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ep = function() {
  var e = bN(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, kN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Eu = function(e) {
  return parseInt(e || "", 10) || 0;
}, CN = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Eu(n), Eu(r), Eu(i)];
}, SN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kN;
  var t = CN(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _N = ep(), li = "data-scroll-locked", TN = function(e, t, n, r) {
  var i = e.left, a = e.top, o = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(n2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(li, `] {
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
  
  body[`).concat(li, `] {
    `).concat(r2, ": ").concat(s, `px;
  }
`);
}, Th = function() {
  var e = parseInt(document.body.getAttribute(li) || "0", 10);
  return isFinite(e) ? e : 0;
}, NN = function() {
  E.useEffect(function() {
    return document.body.setAttribute(li, (Th() + 1).toString()), function() {
      var e = Th() - 1;
      e <= 0 ? document.body.removeAttribute(li) : document.body.setAttribute(li, e.toString());
    };
  }, []);
}, AN = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  NN();
  var a = E.useMemo(function() {
    return SN(i);
  }, [i]);
  return E.createElement(_N, { styles: TN(a, !t, i, n ? "" : "!important") });
}, zc = !1;
if (typeof window < "u")
  try {
    var wo = Object.defineProperty({}, "passive", {
      get: function() {
        return zc = !0, !0;
      }
    });
    window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
  } catch {
    zc = !1;
  }
var Br = zc ? { passive: !1 } : !1, IN = function(e) {
  return e.tagName === "TEXTAREA";
}, Tx = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !IN(e) && n[t] === "visible")
  );
}, PN = function(e) {
  return Tx(e, "overflowY");
}, RN = function(e) {
  return Tx(e, "overflowX");
}, Nh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Nx(e, r);
    if (i) {
      var a = Ax(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, FN = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ON = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Nx = function(e, t) {
  return e === "v" ? PN(t) : RN(t);
}, Ax = function(e, t) {
  return e === "v" ? FN(t) : ON(t);
}, DN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, MN = function(e, t, n, r, i) {
  var a = DN(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, l = t.contains(s), u = !1, c = o > 0, f = 0, d = 0;
  do {
    if (!s)
      break;
    var v = Ax(e, s), w = v[0], g = v[1], b = v[2], m = g - b - a * w;
    (w || m) && Nx(e, s) && (f += m, d += w);
    var h = s.parentNode;
    s = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && Math.abs(f) < 1 || !c && Math.abs(d) < 1) && (u = !0), u;
}, bo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ah = function(e) {
  return [e.deltaX, e.deltaY];
}, Ih = function(e) {
  return e && "current" in e ? e.current : e;
}, LN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, BN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, jN = 0, jr = [];
function HN(e) {
  var t = E.useRef([]), n = E.useRef([0, 0]), r = E.useRef(), i = E.useState(jN++)[0], a = E.useState(ep)[0], o = E.useRef(e);
  E.useEffect(function() {
    o.current = e;
  }, [e]), E.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var g = Ge([e.lockRef.current], (e.shards || []).map(Ih), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = E.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !o.current.allowPinchZoom;
    var m = bo(g), h = n.current, y = "deltaX" in g ? g.deltaX : h[0] - m[0], k = "deltaY" in g ? g.deltaY : h[1] - m[1], C, S = g.target, _ = Math.abs(y) > Math.abs(k) ? "h" : "v";
    if ("touches" in g && _ === "h" && S.type === "range")
      return !1;
    var T = Nh(_, S);
    if (!T)
      return !0;
    if (T ? C = _ : (C = _ === "v" ? "h" : "v", T = Nh(_, S)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (y || k) && (r.current = C), !C)
      return !0;
    var P = r.current || C;
    return MN(P, b, g, P === "h" ? y : k);
  }, []), l = E.useCallback(function(g) {
    var b = g;
    if (!(!jr.length || jr[jr.length - 1] !== a)) {
      var m = "deltaY" in b ? Ah(b) : bo(b), h = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && LN(C.delta, m);
      })[0];
      if (h && h.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!h) {
        var y = (o.current.shards || []).map(Ih).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), k = y.length > 0 ? s(b, y[0]) : !o.current.noIsolation;
        k && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = E.useCallback(function(g, b, m, h) {
    var y = { name: g, delta: b, target: m, should: h, shadowParent: VN(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== y;
      });
    }, 1);
  }, []), c = E.useCallback(function(g) {
    n.current = bo(g), r.current = void 0;
  }, []), f = E.useCallback(function(g) {
    u(g.type, Ah(g), g.target, s(g, e.lockRef.current));
  }, []), d = E.useCallback(function(g) {
    u(g.type, bo(g), g.target, s(g, e.lockRef.current));
  }, []);
  E.useEffect(function() {
    return jr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, Br), document.addEventListener("touchmove", l, Br), document.addEventListener("touchstart", c, Br), function() {
      jr = jr.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, Br), document.removeEventListener("touchmove", l, Br), document.removeEventListener("touchstart", c, Br);
    };
  }, []);
  var v = e.removeScrollBar, w = e.inert;
  return E.createElement(
    E.Fragment,
    null,
    w ? E.createElement(a, { styles: BN(i) }) : null,
    v ? E.createElement(AN, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function VN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Vf(Qy, HN);
var $N = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Hr = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Co = {}, wu = 0, Ix = function(e) {
  return e && (e.host || Ix(e.parentNode));
}, zN = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ix(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, UN = function(e, t, n, r) {
  var i = zN(t, Array.isArray(e) ? e : [e]);
  Co[n] || (Co[n] = /* @__PURE__ */ new WeakMap());
  var a = Co[n], o = [], s = /* @__PURE__ */ new Set(), l = new Set(i), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  i.forEach(u);
  var c = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        c(d);
      else
        try {
          var v = d.getAttribute(r), w = v !== null && v !== "false", g = (Hr.get(d) || 0) + 1, b = (a.get(d) || 0) + 1;
          Hr.set(d, g), a.set(d, b), o.push(d), g === 1 && w && ko.set(d, !0), b === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", d, m);
        }
    });
  };
  return c(t), s.clear(), wu++, function() {
    o.forEach(function(f) {
      var d = Hr.get(f) - 1, v = a.get(f) - 1;
      Hr.set(f, d), a.set(f, v), d || (ko.has(f) || f.removeAttribute(r), ko.delete(f)), v || f.removeAttribute(n);
    }), wu--, wu || (Hr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Co = {});
  };
}, GN = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || $N(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), UN(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, WN = ep(), KN = `
 [` + ix + `] {
   pointer-events: none !important;
 }
`, qN = function() {
  return E.createElement(WN, { styles: KN });
}, Ph = function(e) {
  return "current" in e ? e.current : e;
};
function XN(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, l = E.useState(void 0), u = l[0], c = l[1], f = E.useRef(null), d = E.useRef(0);
  return E.useEffect(function() {
    var v = function(m) {
      m.defaultPrevented || (m.code === "Escape" || m.key === "Escape" || m.keyCode === 27) && n && n(m);
    }, w = function(m) {
      m.defaultPrevented || m.target === f.current || m instanceof MouseEvent && m.button !== 0 || i && i.map(Ph).some(function(h) {
        return h && h.contains(m.target) || h === m.target;
      }) || r && r(m);
    }, g = function(m) {
      w(m), d.current = m.touches.length;
    }, b = function(m) {
      d.current = m.touches.length;
    };
    if (u)
      return u.ownerDocument.addEventListener("keydown", v), u.ownerDocument.addEventListener("mousedown", w), u.ownerDocument.addEventListener("touchstart", g), u.ownerDocument.addEventListener("touchend", b), function() {
        u.ownerDocument.removeEventListener("keydown", v), u.ownerDocument.removeEventListener("mousedown", w), u.ownerDocument.removeEventListener("touchstart", g), u.ownerDocument.removeEventListener("touchend", b);
      };
  }, [u, r, n]), E.useEffect(function() {
    if (u)
      return a && a(u), function() {
        o && o();
      };
  }, [!!u]), E.useEffect(function() {
    var v = function() {
      return null;
    }, w = !1, g = function(m) {
      s || (v = GN(vb([m], (i || []).map(Ph)), m.ownerDocument.body, ix)), c(function() {
        return m;
      });
    }, b = function() {
      v(), w || c(null);
    };
    return t({
      onMouseDown: function(m) {
        f.current = m.target;
      },
      onTouchStart: function(m) {
        f.current = m.target;
      },
      onActivation: g,
      onDeactivation: b
    }), function() {
      w = !0, t(!1);
    };
  }, []), E.createElement(qN, null);
}
const YN = Vf(rx, XN);
var QN = function(e) {
  return E.createElement(YN, j({}, e));
}, ZN = E.forwardRef(function(e, t) {
  return E.createElement(m2, j({}, e, { ref: t, sideCar: QN }));
});
class JN extends x.Component {
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
function eA({
  onClick: e
}) {
  return /* @__PURE__ */ x.createElement("div", {
    className: "pgn__modal-backdrop",
    onClick: e,
    onKeyDown: e,
    "data-testid": "modal-backdrop",
    role: "presentation"
  });
}
function tA({
  children: e = null
}) {
  return /* @__PURE__ */ x.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function nA({
  children: e,
  onClose: t,
  isOpen: n,
  isBlocking: r = !1,
  zIndex: i
}) {
  if (E.useEffect(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
    document.body.classList.remove("pgn__hidden-scroll-padding-right");
  }), [n]), !n)
    return null;
  const a = r ? void 0 : t;
  return /* @__PURE__ */ x.createElement(t2, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ x.createElement(JN, null, /* @__PURE__ */ x.createElement(ZN, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: L("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ x.createElement(tA, null, /* @__PURE__ */ x.createElement(eA, {
    onClick: a
  }), e))));
}
const El = /* @__PURE__ */ x.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = E.useContext(Wy), a = e, o = {
    ...n,
    className: L("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ x.createElement(a, o, t);
});
El.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the content of the button */
  children: p.node,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: p.func
};
El.defaultProps = {
  as: Nt,
  onClick: void 0,
  className: void 0,
  children: null
};
const tp = /* @__PURE__ */ x.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ x.createElement(e, {
  ...n,
  ref: r,
  className: L("pgn__modal-header", n.className)
}, t));
tp.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
tp.defaultProps = {
  as: "div",
  className: ""
};
function np({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...n,
    className: L("pgn__modal-title", n.className)
  }, t);
}
np.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
np.defaultProps = {
  as: "h2",
  className: void 0
};
function rp({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...n,
    className: L("pgn__modal-footer", n.className)
  }, t);
}
rp.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
rp.defaultProps = {
  as: "div",
  className: void 0
};
const Rh = (e = !0) => {
  const t = E.useRef(null), [n, r] = E.useState(e);
  return E.useEffect(() => {
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
function ip({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = Rh(), [a, o] = Rh(), s = L("pgn__modal-body", n.className, {
    "pgn__modal-body-scroll-top": r,
    "pgn__modal-body-scroll-bottom": a
  });
  return /* @__PURE__ */ x.createElement(e, {
    ...n,
    className: s
  }, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("div", {
    ref: i
  }), /* @__PURE__ */ x.createElement("div", {
    className: "pgn__modal-body-content"
  }, t), /* @__PURE__ */ x.createElement("div", {
    ref: o
  })));
}
ip.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
ip.defaultProps = {
  as: "div",
  className: void 0
};
function ap({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...n,
    className: L("pgn__modal-hero-content", n.className)
  }, t);
}
ap.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
ap.defaultProps = {
  as: "div",
  className: void 0
};
function op({
  as: e,
  backgroundSrc: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...r,
    className: L("pgn__modal-hero-bg", r.className),
    style: {
      backgroundImage: t ? `url(${t})` : void 0,
      ...r.style
    }
  }, n);
}
op.propTypes = {
  as: p.elementType,
  backgroundSrc: p.string,
  children: p.node,
  className: p.string,
  style: p.shape({})
};
op.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function Xa({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ x.createElement(e, {
    ...n,
    className: L("pgn__modal-hero", n.className)
  }, t);
}
Xa.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
Xa.defaultProps = {
  as: "div",
  className: void 0
};
Xa.Content = ap;
Xa.Background = op;
const rA = {
  closeButtonText: {
    id: "pgn.Modal.closeButon",
    defaultMessage: "Close",
    description: "Accessible name for the close button in the modal dialog"
  }
};
function zt({
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
  const w = ja(), g = s || w.formatMessage(rA.closeButtonText), b = zy({
    query: "(max-width: 767.98px)"
  }), m = c && b;
  return /* @__PURE__ */ x.createElement(nA, {
    isOpen: n,
    onClose: r,
    isBlocking: f,
    zIndex: d
  }, /* @__PURE__ */ x.createElement("div", {
    role: "dialog",
    "aria-label": t,
    className: L("pgn__modal", {
      [`pgn__modal-${m ? "fullscreen" : i}`]: i,
      [`pgn__modal-${a}`]: a,
      "pgn__modal-scroll-fullscreen": l,
      "pgn__modal-visible-overflow": v
    }, u)
  }, o && /* @__PURE__ */ x.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ x.createElement(El, {
    as: Wa,
    iconAs: bn,
    invertColors: a === "dark",
    src: ny,
    alt: g
  })), e));
}
zt.Header = tp;
zt.Title = np;
zt.Footer = rp;
zt.CloseButton = El;
zt.Body = ip;
zt.Hero = Xa;
const iA = (e, t) => {
  const [n, r] = E.useState(-1);
  return E.useLayoutEffect(() => {
    if (!e)
      return;
    function i() {
      const o = Array.prototype.slice.call(e.children), {
        nextIndexOfLastVisibleChild: s
      } = o.filter((l) => l !== t).reduce((l, u, c) => (l.sumWidth += u.getBoundingClientRect().width, l.sumWidth <= e.getBoundingClientRect().width && (l.nextIndexOfLastVisibleChild = c), l), {
        // Include the overflow element's width to begin with. Doing this means
        // sometimes we'll show a dropdown with one item in it when it would fit,
        // but allowing this case dramatically simplifies the calculations we need
        // to do above.
        sumWidth: (t == null ? void 0 : t.getBoundingClientRect().width) ?? 0,
        nextIndexOfLastVisibleChild: -1
      });
      r(s);
    }
    i();
    const a = new ResizeObserver(() => i());
    return a.observe(e), () => a.disconnect();
  }, [e, t]), n;
}, gt = /* @__PURE__ */ x.forwardRef(({
  show: e,
  autoClose: t,
  onToggle: n,
  variant: r,
  className: i,
  ...a
}, o) => {
  const [s, l] = x.useState(e), u = (f) => t === !1 ? f === "click" : t === "inside" ? f !== "rootClose" : t === "outside" ? f !== "select" : !0, c = (f, d, v) => {
    if (f) {
      l(!0), n == null || n(f, d, v);
      return;
    }
    let {
      source: w
    } = {
      ...v
    };
    d.currentTarget === document && (w !== "keydown" || d.key === "Escape") && (w = "rootClose"), u(w) && (l(!1), n == null || n(f, d, v));
  };
  return /* @__PURE__ */ x.createElement(Xt, {
    className: L("pgn__dropdown", `pgn__dropdown-${r}`, i),
    "data-testid": "dropdown",
    onToggle: c,
    ref: o,
    show: s,
    ...a
  });
});
gt.propTypes = {
  autoClose: p.oneOfType([p.string, p.bool]),
  className: p.string,
  onToggle: p.func,
  show: p.bool,
  variant: p.oneOf(["light", "dark"])
};
gt.defaultProps = {
  autoClose: !0,
  className: "",
  onToggle: void 0,
  show: !1,
  variant: "light"
};
const sp = /* @__PURE__ */ x.forwardRef(({
  as: e,
  bsPrefix: t,
  ...n
}, r) => {
  const i = e === Wa ? "pgn__dropdown-toggle-iconbutton" : t;
  return /* @__PURE__ */ x.createElement(Ff, {
    ...n,
    as: e,
    bsPrefix: i,
    ref: r
  });
});
sp.propTypes = {
  /** Specifies the base element. */
  as: p.elementType,
  /** Overrides underlying component base CSS class name. */
  bsPrefix: p.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers. */
  id: p.oneOfType([p.string, p.number]).isRequired
};
sp.defaultProps = {
  as: Nt,
  bsPrefix: "dropdown-toggle"
};
gt.Item = /* @__PURE__ */ x.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ x.createElement(hl, {
  className: L(e, "pgn__dropdown-item"),
  ref: n,
  ...t
}));
gt.Item.propTypes = {
  className: p.string
};
gt.Item.defaultProps = {
  className: void 0
};
gt.Toggle = sp;
gt.Menu = vl;
gt.Header = Xt.Header;
gt.Divider = Xt.Divider;
const aA = "Close";
function lp({
  children: e,
  footerNode: t,
  beforeBodyNode: n,
  afterBodyNode: r,
  ...i
}) {
  return /* @__PURE__ */ x.createElement(zt, {
    ...i
  }, /* @__PURE__ */ x.createElement(zt.Header, null, /* @__PURE__ */ x.createElement(zt.Title, null, i.title)), n, /* @__PURE__ */ x.createElement(zt.Body, null, e), r, t && /* @__PURE__ */ x.createElement(zt.Footer, null, t));
}
lp.propTypes = {
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
lp.defaultProps = {
  isOpen: !1,
  hasCloseButton: !0,
  size: "md",
  variant: "default",
  closeLabel: aA,
  className: void 0,
  isFullscreenScroll: !1,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
function Pa(e) {
  return /* @__PURE__ */ x.createElement(xl, {
    ...e
  });
}
Pa.propTypes = {
  /** Specifies the `Tab` navigation title. */
  title: p.node.isRequired,
  /** Specifies notification bubble content. It appears on the top right of the `Tab`. */
  notification: p.node,
  /** Specifies whether `Tab` is disabled. */
  disabled: p.bool,
  /**
   * A unique identifier for the Component, the `eventKey` makes it distinguishable
   * from others in a set. Similar to React's `key` prop, in that it only needs to be
   * unique amongst the Components siblings, not globally.
   */
  eventKey: p.oneOfType([p.string, p.number]),
  /** Specifies class name to append to the base element. */
  tabClassName: p.string
};
Pa.defaultProps = {
  notification: void 0,
  disabled: void 0,
  eventKey: void 0,
  tabClassName: void 0
};
const Px = "More...";
function up({
  children: e,
  className: t,
  moreTabText: n = Px,
  defaultActiveKey: r,
  activeKey: i,
  ...a
}) {
  var d, v;
  const [o, s] = E.useState(null), l = E.useRef(null), u = iA(o == null ? void 0 : o.firstChild, (d = l.current) == null ? void 0 : d.parentNode);
  E.useEffect(() => {
    if (o) {
      const w = new MutationObserver((g) => {
        g.forEach((b) => {
          const m = b.target.getAttribute("data-rb-event-key"), h = b.target.getAttribute("aria-selected") === "true", y = o.querySelector(`[datakey='${m}']`), k = o.querySelector(".pgn__tab_more");
          h ? (y == null || y.classList.add("active"), y ? k.classList.add("active") : k.classList.remove("active")) : y == null || y.classList.remove("active");
        });
      });
      return w.observe(o, {
        attributes: !0,
        subtree: !0,
        attributeFilter: ["aria-selected"]
      }), () => w.disconnect();
    }
  }, [o]), E.useEffect(() => {
    var w;
    (w = l.current) != null && w.parentNode && (l.current.parentNode.tabIndex = -1);
  }, [(v = l.current) == null ? void 0 : v.parentNode]);
  const c = E.useCallback((w) => {
    o.querySelector(`[data-rb-event-key='${w}']`).click();
  }, [o]), f = E.useMemo(() => {
    const w = u + 1, g = (y, k) => {
      y.key === "Enter" && c(k);
    }, b = x.Children.map(e, (y, k) => {
      var A;
      if ((A = y == null ? void 0 : y.type) == null || A.name, !/* @__PURE__ */ x.isValidElement(y))
        return y;
      const {
        title: C,
        notification: S,
        tabClassName: _,
        ...T
      } = y.props;
      let P;
      S ? P = /* @__PURE__ */ x.createElement(x.Fragment, null, C, /* @__PURE__ */ x.createElement(yh, {
        variant: "error",
        role: "status",
        className: "pgn__tab-notification",
        "aria-live": "polite",
        expandable: !0
      }, S)) : P = C;
      const N = k > u ? "pgn__tab_invisible" : "";
      return /* @__PURE__ */ x.cloneElement(y, {
        ...T,
        title: P,
        tabClassName: L(N, _)
      });
    });
    let m = !1;
    const h = b.slice(w).map((y) => (!m && y.props.notification && (m = !0), /* @__PURE__ */ x.createElement(gt.Item, {
      as: "li",
      tabIndex: "0",
      key: `${y.props.eventKey}overflow`,
      onClick: () => c(y.props.eventKey),
      onKeyPress: (k) => g(k, y.props.eventKey),
      disabled: y.props.disabled,
      datakey: y.props.eventKey,
      className: L({
        active: y.props.eventKey === r || y.props.eventKey === i
      }, "pgn__tabs__dropdown-item")
    }, y.props.title)));
    return b.splice(w, 0, /* @__PURE__ */ x.createElement(Pa, {
      key: "moreTabKey",
      tabClassName: L(!h.length && "pgn__tab_invisible", "pgn__tab_more"),
      title: /* @__PURE__ */ x.createElement(gt, {
        ref: l
      }, /* @__PURE__ */ x.createElement(gt.Toggle, {
        variant: "link",
        className: "nav-link",
        id: "pgn__tab-toggle"
      }, n, m && /* @__PURE__ */ x.createElement(yh, {
        variant: "error",
        role: "status",
        className: "pgn__tab-notification"
      })), /* @__PURE__ */ x.createElement(gt.Menu, {
        as: "ul",
        className: "dropdown-menu-right"
      }, h))
    })), b;
  }, [i, e, r, u, n, c]);
  return /* @__PURE__ */ x.createElement("div", {
    ref: s
  }, /* @__PURE__ */ x.createElement(Mf, {
    defaultActiveKey: r,
    activeKey: i,
    ...a,
    className: L(t, "pgn__tabs")
  }, f));
}
up.propTypes = {
  /** Specifies variant to use. */
  variant: p.oneOf(["tabs", "pills", "inverse-tabs", "inverse-pills", "button-group"]),
  /** Specifies elements that is processed to create tabs. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies text for the 'More' tab. */
  moreTabText: p.string,
  /** Specifies default active tab (uncontrolled usage). */
  defaultActiveKey: p.string,
  /** Specifies active tab (controlled usage). */
  activeKey: p.string
};
up.defaultProps = {
  variant: "tabs",
  className: void 0,
  moreTabText: Px,
  defaultActiveKey: void 0,
  activeKey: void 0
};
const oA = /* @__PURE__ */ new Map([
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
function Ci(e, t, n) {
  const r = sA(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && Fh(r, "path", a), Fh(r, "relativePath", a), r;
}
function sA(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = oA.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Fh(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const lA = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function uA(e) {
  return Ar(this, void 0, void 0, function* () {
    return ws(e) && cA(e.dataTransfer) ? mA(e.dataTransfer, e.type) : dA(e) ? fA(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? pA(e) : [];
  });
}
function cA(e) {
  return ws(e);
}
function dA(e) {
  return ws(e) && ws(e.target);
}
function ws(e) {
  return typeof e == "object" && e !== null;
}
function fA(e) {
  return Uc(e.target.files).map((t) => Ci(t));
}
function pA(e) {
  return Ar(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Ci(n));
  });
}
function mA(e, t) {
  return Ar(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Uc(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(hA));
      return Oh(Rx(r));
    }
    return Oh(Uc(e.files).map((n) => Ci(n)));
  });
}
function Oh(e) {
  return e.filter((t) => lA.indexOf(t.name) === -1);
}
function Uc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function hA(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Dh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Fx(t) : Dh(e, t);
}
function Rx(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Rx(n) : [n]
  ], []);
}
function Dh(e, t) {
  return Ar(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Ci(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Ci(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function vA(e) {
  return Ar(this, void 0, void 0, function* () {
    return e.isDirectory ? Fx(e) : gA(e);
  });
}
function Fx(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => Ar(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(vA));
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
function gA(e) {
  return Ar(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Ci(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var bu = function(e, t) {
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
function Mh(e) {
  return EA(e) || xA(e) || Dx(e) || yA();
}
function yA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xA(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EA(e) {
  if (Array.isArray(e)) return Gc(e);
}
function Lh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lh(Object(n), !0).forEach(function(r) {
      Ox(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ox(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ra(e, t) {
  return kA(e) || bA(e, t) || Dx(e, t) || wA();
}
function wA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dx(e, t) {
  if (e) {
    if (typeof e == "string") return Gc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gc(e, t);
  }
}
function Gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function bA(e, t) {
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
function kA(e) {
  if (Array.isArray(e)) return e;
}
var CA = typeof bu == "function" ? bu : bu.default, SA = "file-invalid-type", _A = "file-too-large", TA = "file-too-small", NA = "too-many-files", AA = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: SA,
    message: "File type must be ".concat(r)
  };
}, jh = function(t) {
  return {
    code: _A,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Hh = function(t) {
  return {
    code: TA,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, IA = {
  code: NA,
  message: "Too many files"
};
function Mx(e, t) {
  var n = e.type === "application/x-moz-file" || CA(e, t);
  return [n, n ? null : AA(t)];
}
function Lx(e, t, n) {
  if (lr(e.size))
    if (lr(t) && lr(n)) {
      if (e.size > n) return [!1, jh(n)];
      if (e.size < t) return [!1, Hh(t)];
    } else {
      if (lr(t) && e.size < t) return [!1, Hh(t)];
      if (lr(n) && e.size > n) return [!1, jh(n)];
    }
  return [!0, null];
}
function lr(e) {
  return e != null;
}
function PA(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = Mx(l, n), c = Ra(u, 1), f = c[0], d = Lx(l, r, i), v = Ra(d, 1), w = v[0], g = s ? s(l) : null;
    return f && w && !g;
  });
}
function bs(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function So(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Vh(e) {
  e.preventDefault();
}
function RA(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function FA(e) {
  return e.indexOf("Edge/") !== -1;
}
function OA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return RA(e) || FA(e);
}
function Zt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    return t.some(function(s) {
      return !bs(r) && s && s.apply(void 0, [r].concat(a)), bs(r);
    });
  };
}
function DA() {
  return "showOpenFilePicker" in window;
}
function MA(e) {
  if (lr(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Ra(n, 2), i = r[0], a = r[1], o = !0;
      return Bx(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(jx)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Ra(r, 2), a = i[0], o = i[1];
      return Bh(Bh({}, n), {}, Ox({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function LA(e) {
  if (lr(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Ra(n, 2), i = r[0], a = r[1];
      return [].concat(Mh(t), [i], Mh(a));
    }, []).filter(function(t) {
      return Bx(t) || jx(t);
    }).join(",");
}
function BA(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function jA(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Bx(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function jx(e) {
  return /^.*\.[\w]+$/.test(e);
}
var HA = ["children"], VA = ["open"], $A = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], zA = ["refKey", "onChange", "onClick"];
function UA(e) {
  return KA(e) || WA(e) || Hx(e) || GA();
}
function GA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WA(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function KA(e) {
  if (Array.isArray(e)) return Wc(e);
}
function ku(e, t) {
  return YA(e) || XA(e, t) || Hx(e, t) || qA();
}
function qA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hx(e, t) {
  if (e) {
    if (typeof e == "string") return Wc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wc(e, t);
  }
}
function Wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function XA(e, t) {
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
function YA(e) {
  if (Array.isArray(e)) return e;
}
function $h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $h(Object(n), !0).forEach(function(r) {
      Kc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $h(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Kc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ks(e, t) {
  if (e == null) return {};
  var n = QA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function QA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var wl = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var n = e.children, r = ks(e, HA), i = ZA(r), a = i.open, o = ks(i, VA);
  return E.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ x.createElement(E.Fragment, null, n(Ee(Ee({}, o), {}, {
    open: a
  })));
});
wl.displayName = "Dropzone";
var Vx = {
  disabled: !1,
  getFilesFromEvent: uA,
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
wl.defaultProps = Vx;
wl.propTypes = {
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
var qc = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function ZA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ee(Ee({}, Vx), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, f = t.onDragOver, d = t.onDrop, v = t.onDropAccepted, w = t.onDropRejected, g = t.onFileDialogCancel, b = t.onFileDialogOpen, m = t.useFsAccessApi, h = t.autoFocus, y = t.preventDropOnDocument, k = t.noClick, C = t.noKeyboard, S = t.noDrag, _ = t.noDragEventsBubbling, T = t.onError, P = t.validator, N = E.useMemo(function() {
    return LA(n);
  }, [n]), B = E.useMemo(function() {
    return MA(n);
  }, [n]), A = E.useMemo(function() {
    return typeof b == "function" ? b : zh;
  }, [b]), I = E.useMemo(function() {
    return typeof g == "function" ? g : zh;
  }, [g]), V = E.useRef(null), W = E.useRef(null), Z = E.useReducer(JA, qc), Y = ku(Z, 2), R = Y[0], D = Y[1], $ = R.isFocused, q = R.isFileDialogActive, U = E.useRef(typeof window < "u" && window.isSecureContext && m && DA()), Te = function() {
    !U.current && q && setTimeout(function() {
      if (W.current) {
        var K = W.current.files;
        K.length || (D({
          type: "closeDialog"
        }), I());
      }
    }, 300);
  };
  E.useEffect(function() {
    return window.addEventListener("focus", Te, !1), function() {
      window.removeEventListener("focus", Te, !1);
    };
  }, [W, q, I, U]);
  var oe = E.useRef([]), Ne = function(K) {
    V.current && V.current.contains(K.target) || (K.preventDefault(), oe.current = []);
  };
  E.useEffect(function() {
    return y && (document.addEventListener("dragover", Vh, !1), document.addEventListener("drop", Ne, !1)), function() {
      y && (document.removeEventListener("dragover", Vh), document.removeEventListener("drop", Ne));
    };
  }, [V, y]), E.useEffect(function() {
    return !r && h && V.current && V.current.focus(), function() {
    };
  }, [V, h, r]);
  var pe = E.useCallback(function(M) {
    T ? T(M) : console.error(M);
  }, [T]), He = E.useCallback(function(M) {
    M.preventDefault(), M.persist(), de(M), oe.current = [].concat(UA(oe.current), [M.target]), So(M) && Promise.resolve(i(M)).then(function(K) {
      if (!(bs(M) && !_)) {
        var xe = K.length, Se = xe > 0 && PA({
          files: K,
          accept: N,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: P
        }), Ve = xe > 0 && !Se;
        D({
          isDragAccept: Se,
          isDragReject: Ve,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(M);
      }
    }).catch(function(K) {
      return pe(K);
    });
  }, [i, u, pe, _, N, o, a, s, l, P]), rt = E.useCallback(function(M) {
    M.preventDefault(), M.persist(), de(M);
    var K = So(M);
    if (K && M.dataTransfer)
      try {
        M.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return K && f && f(M), !1;
  }, [f, _]), Mt = E.useCallback(function(M) {
    M.preventDefault(), M.persist(), de(M);
    var K = oe.current.filter(function(Se) {
      return V.current && V.current.contains(Se);
    }), xe = K.indexOf(M.target);
    xe !== -1 && K.splice(xe, 1), oe.current = K, !(K.length > 0) && (D({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), So(M) && c && c(M));
  }, [V, c, _]), Lt = E.useCallback(function(M, K) {
    var xe = [], Se = [];
    M.forEach(function(Ve) {
      var Pi = Mx(Ve, N), Dr = ku(Pi, 2), bl = Dr[0], kl = Dr[1], Cl = Lx(Ve, o, a), Ya = ku(Cl, 2), Sl = Ya[0], _l = Ya[1], Tl = P ? P(Ve) : null;
      if (bl && Sl && !Tl)
        xe.push(Ve);
      else {
        var Nl = [kl, _l];
        Tl && (Nl = Nl.concat(Tl)), Se.push({
          file: Ve,
          errors: Nl.filter(function($x) {
            return $x;
          })
        });
      }
    }), (!s && xe.length > 1 || s && l >= 1 && xe.length > l) && (xe.forEach(function(Ve) {
      Se.push({
        file: Ve,
        errors: [IA]
      });
    }), xe.splice(0)), D({
      acceptedFiles: xe,
      fileRejections: Se,
      isDragReject: Se.length > 0,
      type: "setFiles"
    }), d && d(xe, Se, K), Se.length > 0 && w && w(Se, K), xe.length > 0 && v && v(xe, K);
  }, [D, s, N, o, a, l, d, v, w, P]), pt = E.useCallback(function(M) {
    M.preventDefault(), M.persist(), de(M), oe.current = [], So(M) && Promise.resolve(i(M)).then(function(K) {
      bs(M) && !_ || Lt(K, M);
    }).catch(function(K) {
      return pe(K);
    }), D({
      type: "reset"
    });
  }, [i, Lt, pe, _]), it = E.useCallback(function() {
    if (U.current) {
      D({
        type: "openDialog"
      }), A();
      var M = {
        multiple: s,
        types: B
      };
      window.showOpenFilePicker(M).then(function(K) {
        return i(K);
      }).then(function(K) {
        Lt(K, null), D({
          type: "closeDialog"
        });
      }).catch(function(K) {
        BA(K) ? (I(K), D({
          type: "closeDialog"
        })) : jA(K) ? (U.current = !1, W.current ? (W.current.value = null, W.current.click()) : pe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : pe(K);
      });
      return;
    }
    W.current && (D({
      type: "openDialog"
    }), A(), W.current.value = null, W.current.click());
  }, [D, A, I, m, Lt, pe, B, s]), dn = E.useCallback(function(M) {
    !V.current || !V.current.isEqualNode(M.target) || (M.key === " " || M.key === "Enter" || M.keyCode === 32 || M.keyCode === 13) && (M.preventDefault(), it());
  }, [V, it]), Tn = E.useCallback(function() {
    D({
      type: "focus"
    });
  }, []), Nn = E.useCallback(function() {
    D({
      type: "blur"
    });
  }, []), Ie = E.useCallback(function() {
    k || (OA() ? setTimeout(it, 0) : it());
  }, [k, it]), re = function(K) {
    return r ? null : K;
  }, me = function(K) {
    return C ? null : re(K);
  }, ue = function(K) {
    return S ? null : re(K);
  }, de = function(K) {
    _ && K.stopPropagation();
  }, Yt = E.useMemo(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, K = M.refKey, xe = K === void 0 ? "ref" : K, Se = M.role, Ve = M.onKeyDown, Pi = M.onFocus, Dr = M.onBlur, bl = M.onClick, kl = M.onDragEnter, Cl = M.onDragOver, Ya = M.onDragLeave, Sl = M.onDrop, _l = ks(M, $A);
      return Ee(Ee(Kc({
        onKeyDown: me(Zt(Ve, dn)),
        onFocus: me(Zt(Pi, Tn)),
        onBlur: me(Zt(Dr, Nn)),
        onClick: re(Zt(bl, Ie)),
        onDragEnter: ue(Zt(kl, He)),
        onDragOver: ue(Zt(Cl, rt)),
        onDragLeave: ue(Zt(Ya, Mt)),
        onDrop: ue(Zt(Sl, pt)),
        role: typeof Se == "string" && Se !== "" ? Se : "presentation"
      }, xe, V), !r && !C ? {
        tabIndex: 0
      } : {}), _l);
    };
  }, [V, dn, Tn, Nn, Ie, He, rt, Mt, pt, C, S, r]), Or = E.useCallback(function(M) {
    M.stopPropagation();
  }, []), nr = E.useMemo(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, K = M.refKey, xe = K === void 0 ? "ref" : K, Se = M.onChange, Ve = M.onClick, Pi = ks(M, zA), Dr = Kc({
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
        onChange: re(Zt(Se, pt)),
        onClick: re(Zt(Ve, Or)),
        tabIndex: -1
      }, xe, W);
      return Ee(Ee({}, Dr), Pi);
    };
  }, [W, n, s, pt, r]);
  return Ee(Ee({}, R), {}, {
    isFocused: $ && !r,
    getRootProps: Yt,
    getInputProps: nr,
    rootRef: V,
    inputRef: W,
    open: re(it)
  });
}
function JA(e, t) {
  switch (t.type) {
    case "focus":
      return Ee(Ee({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Ee(Ee({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Ee(Ee({}, qc), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Ee(Ee({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Ee(Ee({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Ee(Ee({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Ee({}, qc);
    default:
      return e;
  }
}
function zh() {
}
function eI() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const r = t[n].trim();
    if (r.startsWith(e + "="))
      return r.substring(e.length + 1);
  }
  return "";
}
const tI = ({
  runtime: e,
  courseId: t,
  isOpen: n,
  onClose: r,
  onSelectImage: i
}) => {
  const [a, o] = E.useState("upload"), [s, l] = E.useState(!1), [u, c] = E.useState(null), [f, d] = E.useState(!1), [v, w] = E.useState([]), [g, b] = E.useState(null);
  E.useEffect(() => {
    n && a === "browse" && h();
  }, [n, a]);
  const m = async (S) => {
    if (S.length === 0) return;
    const _ = S[0];
    l(!0), c(null);
    try {
      const T = new FormData();
      T.append("file", _);
      const P = `/assets/${t}/`, N = await fetch(P, {
        method: "POST",
        headers: {
          "X-CSRFToken": eI(),
          Accept: "application/json"
        },
        body: T
      });
      let B;
      const A = N.headers.get("content-type");
      if (A && A.includes("application/json"))
        B = await N.json();
      else {
        const I = await N.text();
        console.error("Non-JSON response:", I), B = { error: I || "Upload failed" };
      }
      if (N.ok && B.asset)
        i(B.asset.url), r();
      else {
        const I = B.error || B.message || "Upload failed";
        c(I);
      }
    } catch (T) {
      console.error("Upload error:", T), c(T instanceof Error ? T.message : "Upload failed");
    } finally {
      l(!1);
    }
  }, h = async () => {
    d(!0);
    try {
      const S = await Gy(e, "list_course_assets", {});
      S.success && S.assets ? w(S.assets) : console.error("Failed to load assets:", S.error);
    } catch (S) {
      console.error("Asset list error:", S);
    } finally {
      d(!1);
    }
  }, y = (S) => {
    b(S.url);
  }, k = () => {
    g && (i(g), r());
  }, C = () => {
    c(null), b(null), r();
  };
  return /* @__PURE__ */ F.jsx(
    lp,
    {
      title: "Insert Image",
      isOpen: n,
      onClose: C,
      size: "lg",
      isOverflowVisible: !1,
      footerNode: /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
        /* @__PURE__ */ F.jsx(Nt, { variant: "tertiary", onClick: C, children: "Cancel" }),
        a === "browse" && g && /* @__PURE__ */ F.jsx(Nt, { variant: "primary", onClick: k, children: "Insert Selected Image" })
      ] }),
      children: /* @__PURE__ */ F.jsxs(
        up,
        {
          activeKey: a,
          onSelect: (S) => o(S),
          id: "image-picker-tabs",
          children: [
            /* @__PURE__ */ F.jsx(Pa, { eventKey: "upload", title: "Upload New Image", children: /* @__PURE__ */ F.jsxs("div", { style: { padding: "1rem 0" }, children: [
              /* @__PURE__ */ F.jsx(
                wl,
                {
                  onDrop: m,
                  accept: {
                    "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]
                  },
                  multiple: !1,
                  disabled: s,
                  children: ({ getRootProps: S, getInputProps: _, isDragActive: T }) => /* @__PURE__ */ F.jsxs(
                    "div",
                    {
                      ...S(),
                      style: {
                        border: "2px dashed #ccc",
                        borderRadius: "4px",
                        padding: "2rem",
                        textAlign: "center",
                        cursor: s ? "not-allowed" : "pointer",
                        backgroundColor: T ? "#f0f8ff" : "#fafafa",
                        transition: "background-color 0.2s"
                      },
                      children: [
                        /* @__PURE__ */ F.jsx("input", { ..._() }),
                        s ? /* @__PURE__ */ F.jsx("p", { children: "Uploading..." }) : T ? /* @__PURE__ */ F.jsx("p", { children: "Drop image here..." }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
                          /* @__PURE__ */ F.jsx("p", { children: "Drag and drop an image here, or click to select" }),
                          /* @__PURE__ */ F.jsx("small", { style: { color: "#666" }, children: "Supported formats: PNG, JPG, GIF, WebP, SVG" })
                        ] })
                      ]
                    }
                  )
                }
              ),
              u && /* @__PURE__ */ F.jsxs(
                "div",
                {
                  style: {
                    marginTop: "1rem",
                    padding: "0.75rem",
                    backgroundColor: "#fee",
                    border: "1px solid #fcc",
                    borderRadius: "4px",
                    color: "#c00"
                  },
                  children: [
                    /* @__PURE__ */ F.jsx("strong", { children: "Upload Error:" }),
                    " ",
                    u
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ F.jsx(Pa, { eventKey: "browse", title: "Choose Existing Image", children: /* @__PURE__ */ F.jsx("div", { style: { padding: "1rem 0" }, children: f ? /* @__PURE__ */ F.jsx("p", { children: "Loading images..." }) : v.length === 0 ? /* @__PURE__ */ F.jsx("p", { children: "No images found in course. Upload an image first." }) : /* @__PURE__ */ F.jsx(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: "1rem",
                  maxHeight: "400px",
                  overflowY: "auto"
                },
                children: v.map((S) => /* @__PURE__ */ F.jsxs(
                  "div",
                  {
                    onClick: () => y(S),
                    style: {
                      cursor: "pointer",
                      border: g === S.url ? "3px solid #0075b4" : "1px solid #ccc",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      transition: "border-color 0.2s",
                      backgroundColor: g === S.url ? "#f0f8ff" : "white"
                    },
                    children: [
                      /* @__PURE__ */ F.jsx(
                        "img",
                        {
                          src: S.thumbnail_url,
                          alt: S.filename,
                          style: {
                            width: "100%",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "2px"
                          }
                        }
                      ),
                      /* @__PURE__ */ F.jsx(
                        "small",
                        {
                          style: {
                            display: "block",
                            marginTop: "0.5rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          },
                          title: S.filename,
                          children: S.filename
                        }
                      )
                    ]
                  },
                  S.url
                ))
              }
            ) }) })
          ]
        }
      )
    }
  );
}, nI = [
  {
    title: "📝 Simple Text",
    description: "Heading with paragraph - clean and simple",
    content: `
      <div class="fc-simple-text">
        <h4>Your Heading</h4>
        <p>Your explanation or definition goes here. Keep it concise and focused on one concept.</p>
      </div>
    `
  },
  {
    title: "✓✗ True/False",
    description: "Statement with colored verdict",
    content: `
      <div class="fc-truefalse-card">
        <p class="fc-statement">Statement to evaluate</p>
        <div class="fc-verdict-badge fc-false">FALSE</div>
        <p class="fc-why"><strong>Why:</strong> Brief explanation</p>
      </div>
    `
  },
  {
    title: "🖼️ Image + Note",
    description: "Large image with brief caption",
    content: `
      <figure class="content-figure fc-compact">
        <img src="https://via.placeholder.com/250x180/006272/ffffff?text=Your+Image" alt="Image description">
        <figcaption>Brief caption or key point about the image</figcaption>
      </figure>
    `
  },
  {
    title: "⚖️ Compare Two",
    description: "Side-by-side comparison",
    content: `
      <div class="fc-compare-boxes">
        <div class="fc-compare-item fc-item-a">
          <div class="fc-compare-label">Option A</div>
          <p>Key characteristic</p>
        </div>
        <div class="fc-compare-vs">vs</div>
        <div class="fc-compare-item fc-item-b">
          <div class="fc-compare-label">Option B</div>
          <p>Key characteristic</p>
        </div>
      </div>
    `
  }
];
function rI(e, t, n) {
  if (n === null)
    return e;
  function r(o) {
    return o === t ? n : o;
  }
  const i = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), a = new RegExp(
    "(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}([-a-zA-Z0-9@:%_\\+.~#?&//=]*)?)?" + i,
    "g"
  );
  return e.replace(a, r);
}
function iI() {
  return "Default='Open Sans', Verdana, Arial, Helvetica, sans-serif;" + "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats";
}
function aI() {
  const e = window.gettext || ((t) => t);
  return `${e("Paragraph")}=p;${e("Preformatted")}=pre;${e("Heading 3")}=h3;${e("Heading 4")}=h4;${e("Heading 5")}=h5;${e("Heading 6")}=h6`;
}
const oI = ({
  value: e,
  onChange: t,
  placeholder: n = "Enter content...",
  height: r = "400px",
  baseAssetUrl: i = null,
  runtime: a,
  courseId: o
}) => {
  const s = E.useRef(null), l = E.useRef(null), u = E.useRef(""), [c, f] = E.useState(!1);
  E.useEffect(() => {
    var k;
    if (!s.current || !window.tinyMCE || !window.$) {
      console.error("TinyMCE or jQuery not available");
      return;
    }
    const w = window.$, g = window.gettext || ((C) => C);
    window.baseUrl && (window.tinyMCE.baseURL = window.baseUrl + "js/vendor/tinymce/js/tinymce"), window.tinyMCE.suffix = ".min";
    const b = [];
    document.querySelectorAll("link[rel=stylesheet][href*='tinymce']").forEach((C) => {
      const S = C.getAttribute("href");
      S && S.includes("content") && b.push(S);
    });
    const m = (C) => {
      C.ui.registry.addButton("wrapAsCode", {
        tooltip: g("Code block"),
        icon: "code-sample",
        onAction: () => {
          C.formatter.toggle("code");
        }
      }), C.ui.registry.addButton("customImage", {
        tooltip: g("Insert/Edit Image"),
        icon: "image",
        onAction: () => {
          f(!0);
        }
      }), l.current = C, C.on("change keyup", () => {
        const S = C.getContent();
        t(S);
      });
    }, h = (C) => {
      const S = rI(
        C.getContent({ no_events: 1 }),
        "/static/",
        i
      );
      C.setContent(S), u.current = C.getContent({ format: "raw", no_events: 1 }), C.focus();
    }, y = {
      script_url: window.baseUrl + "js/vendor/tinymce/js/tinymce/tinymce.full.min.js",
      font_formats: iI(),
      theme: "silver",
      skin: "studio-tmce5",
      schema: "html5",
      entity_encoding: "raw",
      // Preserve relative URLs
      convert_urls: !1,
      // Directionality from parent
      directionality: ((k = document.querySelector(".wrapper-view, .window-wrap")) == null ? void 0 : k.getAttribute("dir")) || "ltr",
      // Content CSS
      content_css: b.join(", "),
      // Inline code format
      formats: {
        code: { inline: "code" }
      },
      // Disable visual aid
      visual: !1,
      // Plugins - include CodeMirror and template
      plugins: "lists, link, codemirror, template",
      // CodeMirror configuration
      codemirror: {
        path: window.baseUrl + "js/vendor",
        disableFilesMerge: !0,
        jsFiles: ["codemirror-compressed.js"],
        cssFiles: ["CodeMirror/codemirror.css"]
      },
      // Template configuration - flashcard-specific templates only
      templates: nI,
      // Toolbar - with custom image button and template button
      toolbar: "formatselect fontselect bold italic underline forecolor wrapAsCode alignleft aligncenter alignright alignjustify bullist numlist outdent indent blockquote link unlink customImage template code",
      // Block formats
      block_formats: aI(),
      // Size
      width: "100%",
      height: r,
      // No menubar or statusbar
      menubar: !1,
      statusbar: !1,
      // Allow any elements including iframes
      valid_children: "+body[style]",
      valid_elements: "*[*]",
      extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align|id|title|allow|allowfullscreen]",
      invalid_elements: "",
      // Callbacks
      setup: m,
      init_instance_callback: h,
      // Spellcheck
      browser_spellcheck: !0
    };
    return w(s.current).tinymce(y), () => {
      if (l.current)
        try {
          l.current.remove();
        } catch (C) {
          console.warn("Error removing TinyMCE instance:", C);
        }
    };
  }, []), E.useEffect(() => {
    l.current && l.current.getContent() !== e && l.current.setContent(e || "");
  }, [e]);
  const d = (w) => {
    l.current && l.current.insertContent(`<img src="${w}" alt="" />`);
  }, v = () => {
    f(!1);
  };
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx("div", { className: "tinymce-wrapper", children: /* @__PURE__ */ F.jsx(
      "textarea",
      {
        ref: s,
        className: "tiny-mce",
        placeholder: n,
        defaultValue: e
      }
    ) }),
    /* @__PURE__ */ F.jsx(
      tI,
      {
        runtime: a,
        courseId: o,
        isOpen: c,
        onClose: v,
        onSelectImage: d
      }
    )
  ] });
}, sI = ({
  card: e,
  cardIndex: t,
  totalCards: n,
  onSave: r,
  onCancel: i,
  runtime: a,
  courseId: o,
  baseAssetUrl: s
}) => {
  const [l, u] = E.useState(e.front_title), [c, f] = E.useState(e.front_subtitle), [d, v] = E.useState(e.back_text), [w, g] = E.useState({}), b = () => {
    const h = {};
    return l.trim() ? l.length > 100 && (h.frontTitle = "Front title must be 100 characters or less") : h.frontTitle = "Front title is required", c.length > 100 && (h.frontSubtitle = "Front subtitle must be 100 characters or less"), d.trim() || (h.backText = "Back content is required"), g(h), Object.keys(h).length === 0;
  }, m = () => {
    b() && r({
      front_title: l,
      front_subtitle: c,
      back_text: d
    });
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "flashcards-edit-view", children: [
    /* @__PURE__ */ F.jsx("div", { className: "edit-header mb-4", children: /* @__PURE__ */ F.jsx("h3", { children: t === -1 ? "New Card" : `Editing Card ${t + 1} of ${n}` }) }),
    /* @__PURE__ */ F.jsxs(ae, { children: [
      /* @__PURE__ */ F.jsxs("div", { className: "form-section mb-5", children: [
        /* @__PURE__ */ F.jsx("h4", { className: "section-label mb-3", children: "Front of Card" }),
        /* @__PURE__ */ F.jsxs(ae.Group, { className: "mb-4", children: [
          /* @__PURE__ */ F.jsx(ae.Label, { children: "Title *" }),
          /* @__PURE__ */ F.jsx(
            ae.Control,
            {
              type: "text",
              value: l,
              onChange: (h) => u(h.target.value),
              placeholder: "Enter the main title",
              isInvalid: !!w.frontTitle,
              maxLength: 100
            }
          ),
          w.frontTitle && /* @__PURE__ */ F.jsx("div", { className: "invalid-feedback d-block", children: w.frontTitle }),
          /* @__PURE__ */ F.jsxs(ae.Text, { className: "text-muted", children: [
            l.length,
            " / 100 characters"
          ] })
        ] }),
        /* @__PURE__ */ F.jsxs(ae.Group, { children: [
          /* @__PURE__ */ F.jsx(ae.Label, { children: "Subtitle (optional)" }),
          /* @__PURE__ */ F.jsx(
            ae.Control,
            {
              type: "text",
              value: c,
              onChange: (h) => f(h.target.value),
              placeholder: "Enter optional subtitle",
              isInvalid: !!w.frontSubtitle,
              maxLength: 100
            }
          ),
          w.frontSubtitle && /* @__PURE__ */ F.jsx("div", { className: "invalid-feedback d-block", children: w.frontSubtitle }),
          /* @__PURE__ */ F.jsxs(ae.Text, { className: "text-muted", children: [
            c.length,
            " / 100 characters"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "form-section mb-5", children: [
        /* @__PURE__ */ F.jsx("h4", { className: "section-label mb-3", children: "Back of Card" }),
        /* @__PURE__ */ F.jsxs(ae.Group, { children: [
          /* @__PURE__ */ F.jsx(ae.Label, { children: "Content *" }),
          /* @__PURE__ */ F.jsx(
            oI,
            {
              value: d,
              onChange: v,
              placeholder: "Enter the content for the back of the card",
              height: "400px",
              runtime: a,
              courseId: o,
              baseAssetUrl: s
            }
          ),
          w.backText && /* @__PURE__ */ F.jsx("div", { className: "invalid-feedback d-block mt-2", children: w.backText })
        ] })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "flashcards-sticky-actions d-flex justify-content-end", children: [
        /* @__PURE__ */ F.jsx(
          Nt,
          {
            variant: "tertiary",
            onClick: i,
            className: "mr-2",
            children: "Back to List"
          }
        ),
        /* @__PURE__ */ F.jsx(
          Nt,
          {
            variant: "primary",
            onClick: m,
            children: "Save Card"
          }
        )
      ] })
    ] })
  ] });
}, lI = ({
  runtime: e,
  fields: t,
  baseAssetUrl: n,
  courseId: r
}) => {
  const [i, a] = E.useState(t.display_name), [o, s] = E.useState(t.title || ""), [l, u] = E.useState(t.cards), [c, f] = E.useState("list"), [d, v] = E.useState(-1), [w, g] = E.useState(!1), [b, m] = E.useState(null), h = () => {
    if (l.length >= 100) {
      m({ type: "error", text: "Maximum 100 cards allowed" });
      return;
    }
    const A = [
      ...l,
      {
        front_title: "",
        front_subtitle: "",
        back_text: ""
      }
    ];
    u(A), v(A.length - 1), f("edit");
  }, y = (A) => {
    v(A), f("edit");
  }, k = (A) => {
    if (l.length === 1) {
      m({ type: "error", text: "At least one card is required" });
      return;
    }
    confirm(`Are you sure you want to delete Card ${A + 1}?`) && (u(l.filter((I, V) => V !== A)), m({ type: "success", text: "Card deleted" }));
  }, C = (A) => {
    if (A === 0) return;
    const I = [...l];
    [I[A - 1], I[A]] = [I[A], I[A - 1]], u(I);
  }, S = (A) => {
    if (A === l.length - 1) return;
    const I = [...l];
    [I[A], I[A + 1]] = [I[A + 1], I[A]], u(I);
  }, _ = (A, I) => {
    const V = [...l], [W] = V.splice(A, 1);
    V.splice(I, 0, W), u(V);
  }, T = (A) => {
    const I = [...l];
    I[d] = A, u(I), f("list"), v(-1), m({ type: "success", text: "Card saved" });
  }, P = () => {
    const A = l[d];
    d !== -1 && !A.front_title && !A.front_subtitle && !A.back_text && u(l.filter((I, V) => V !== d)), f("list"), v(-1);
  }, N = async () => {
    g(!0), m(null);
    try {
      if (!i.trim()) {
        m({ type: "error", text: "Display name is required" }), g(!1);
        return;
      }
      for (let I = 0; I < l.length; I++) {
        const V = l[I];
        if (!V.front_title.trim()) {
          m({ type: "error", text: `Card ${I + 1}: Front title is required` }), g(!1);
          return;
        }
        if (!V.back_text.trim()) {
          m({ type: "error", text: `Card ${I + 1}: Back content is required` }), g(!1);
          return;
        }
      }
      e.notify && e.notify("save", { state: "start" });
      const A = await Gy(e, "save_data", {
        display_name: i,
        title: o,
        cards: l
      });
      A.success ? (m({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (m({ type: "error", text: A.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (A) {
      console.error("Save error:", A), m({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      g(!1);
    }
  }, B = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "flashcards-studio-view", children: [
    b && /* @__PURE__ */ F.jsx(
      Bf,
      {
        variant: b.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => m(null),
        children: b.text
      }
    ),
    /* @__PURE__ */ F.jsxs(ae, { children: [
      /* @__PURE__ */ F.jsxs(ae.Group, { className: "mb-4", children: [
        /* @__PURE__ */ F.jsx(ae.Label, { children: "Display Name" }),
        /* @__PURE__ */ F.jsx(
          ae.Control,
          {
            type: "text",
            value: i,
            onChange: (A) => a(A.target.value),
            placeholder: "Enter display name"
          }
        )
      ] }),
      /* @__PURE__ */ F.jsxs(ae.Group, { className: "mb-4", children: [
        /* @__PURE__ */ F.jsx(ae.Label, { children: "Title (Optional)" }),
        /* @__PURE__ */ F.jsx(
          ae.Control,
          {
            type: "text",
            value: o,
            onChange: (A) => s(A.target.value),
            placeholder: "Optional H3 heading displayed above flashcards"
          }
        ),
        /* @__PURE__ */ F.jsx(ae.Text, { className: "text-muted", children: "Leave empty to hide the title." })
      ] }),
      c === "list" ? /* @__PURE__ */ F.jsx(
        e2,
        {
          cards: l,
          onAddCard: h,
          onEditCard: y,
          onDeleteCard: k,
          onMoveUp: C,
          onMoveDown: S,
          onReorder: _
        }
      ) : /* @__PURE__ */ F.jsx(
        sI,
        {
          card: l[d],
          cardIndex: d,
          totalCards: l.length,
          onSave: T,
          onCancel: P,
          runtime: e,
          courseId: r || "",
          baseAssetUrl: n
        }
      ),
      c === "list" && /* @__PURE__ */ F.jsxs("div", { className: "flashcards-sticky-actions d-flex justify-content-end border-top", children: [
        /* @__PURE__ */ F.jsx(
          Nt,
          {
            variant: "tertiary",
            onClick: B,
            disabled: w,
            className: "mr-2",
            children: "Close Without Saving"
          }
        ),
        /* @__PURE__ */ F.jsx(
          Nt,
          {
            variant: "primary",
            onClick: N,
            disabled: w,
            children: w ? "Saving..." : "Save All Changes"
          }
        )
      ] })
    ] })
  ] });
}, fI = (e, t, n) => {
  e.element = t, r0(t).render(
    /* @__PURE__ */ F.jsxs(E.StrictMode, { children: [
      /* @__PURE__ */ F.jsx(Uk, { locale: "en", children: /* @__PURE__ */ F.jsx(
        lI,
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
  fI as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
