var og = Object.defineProperty;
var lg = (e, t, n) => t in e ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var lf = (e, t, n) => lg(e, typeof t != "symbol" ? t + "" : t, n);
function Qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pp = { exports: {} }, Ca = {}, hp = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi = Symbol.for("react.element"), ug = Symbol.for("react.portal"), cg = Symbol.for("react.fragment"), fg = Symbol.for("react.strict_mode"), dg = Symbol.for("react.profiler"), pg = Symbol.for("react.provider"), hg = Symbol.for("react.context"), mg = Symbol.for("react.forward_ref"), vg = Symbol.for("react.suspense"), gg = Symbol.for("react.memo"), yg = Symbol.for("react.lazy"), uf = Symbol.iterator;
function Eg(e) {
  return e === null || typeof e != "object" ? null : (e = uf && e[uf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var mp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, vp = Object.assign, gp = {};
function Xr(e, t, n) {
  this.props = e, this.context = t, this.refs = gp, this.updater = n || mp;
}
Xr.prototype.isReactComponent = {};
Xr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yp() {
}
yp.prototype = Xr.prototype;
function du(e, t, n) {
  this.props = e, this.context = t, this.refs = gp, this.updater = n || mp;
}
var pu = du.prototype = new yp();
pu.constructor = du;
vp(pu, Xr.prototype);
pu.isPureReactComponent = !0;
var cf = Array.isArray, Ep = Object.prototype.hasOwnProperty, hu = { current: null }, xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wp(e, t, n) {
  var r, i = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Ep.call(t, r) && !xp.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
  return { $$typeof: Wi, type: e, key: s, ref: a, props: i, _owner: hu.current };
}
function xg(e, t) {
  return { $$typeof: Wi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wi;
}
function wg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ff = /\/+/g;
function po(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wg("" + e.key) : t.toString(36);
}
function Ns(e, t, n, r, i) {
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
        case Wi:
        case ug:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = r === "" ? "." + po(a, 0) : r, cf(i) ? (n = "", e != null && (n = e.replace(ff, "$&/") + "/"), Ns(i, t, n, "", function(u) {
    return u;
  })) : i != null && (mu(i) && (i = xg(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(ff, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", cf(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var l = r + po(s, o);
    a += Ns(s, t, n, l, i);
  }
  else if (l = Eg(e), typeof l == "function") for (e = l.call(e), o = 0; !(s = e.next()).done; ) s = s.value, l = r + po(s, o++), a += Ns(s, t, n, l, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function as(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ns(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function Cg(e) {
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
var Qe = { current: null }, bs = { transition: null }, kg = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: bs, ReactCurrentOwner: hu };
function Cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: as, forEach: function(e, t, n) {
  as(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return as(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return as(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = Xr;
K.Fragment = cg;
K.Profiler = dg;
K.PureComponent = du;
K.StrictMode = fg;
K.Suspense = vg;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg;
K.act = Cp;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = vp({}, e.props), i = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = hu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (l in t) Ep.call(t, l) && !xp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Wi, type: e.type, key: i, ref: s, props: r, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: hg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: pg, _context: e }, e.Consumer = e;
};
K.createElement = wp;
K.createFactory = function(e) {
  var t = wp.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: mg, render: e };
};
K.isValidElement = mu;
K.lazy = function(e) {
  return { $$typeof: yg, _payload: { _status: -1, _result: e }, _init: Cg };
};
K.memo = function(e, t) {
  return { $$typeof: gg, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = bs.transition;
  bs.transition = {};
  try {
    e();
  } finally {
    bs.transition = t;
  }
};
K.unstable_act = Cp;
K.useCallback = function(e, t) {
  return Qe.current.useCallback(e, t);
};
K.useContext = function(e) {
  return Qe.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return Qe.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return Qe.current.useEffect(e, t);
};
K.useId = function() {
  return Qe.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return Qe.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return Qe.current.useRef(e);
};
K.useState = function(e) {
  return Qe.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return Qe.current.useTransition();
};
K.version = "18.3.1";
hp.exports = K;
var C = hp.exports;
const v = /* @__PURE__ */ Qr(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg = C, _g = Symbol.for("react.element"), Tg = Symbol.for("react.fragment"), Ag = Object.prototype.hasOwnProperty, Ig = Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ng = { key: !0, ref: !0, __self: !0, __source: !0 };
function kp(e, t, n) {
  var r, i = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Ag.call(t, r) && !Ng.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: _g, type: e, key: s, ref: a, props: i, _owner: Ig.current };
}
Ca.Fragment = Tg;
Ca.jsx = kp;
Ca.jsxs = kp;
pp.exports = Ca;
var S = pp.exports, Sp = { exports: {} }, ft = {}, _p = { exports: {} }, Tp = {};
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
    var B = R.length;
    R.push(D);
    e: for (; 0 < B; ) {
      var Q = B - 1 >>> 1, b = R[Q];
      if (0 < i(b, D)) R[Q] = D, R[B] = b, B = Q;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var D = R[0], B = R.pop();
    if (B !== D) {
      R[0] = B;
      e: for (var Q = 0, b = R.length, oe = b >>> 1; Q < oe; ) {
        var z = 2 * (Q + 1) - 1, re = R[z], Ie = z + 1, _t = R[Ie];
        if (0 > i(re, B)) Ie < b && 0 > i(_t, re) ? (R[Q] = _t, R[Ie] = B, Q = Ie) : (R[Q] = re, R[z] = B, Q = z);
        else if (Ie < b && 0 > i(_t, B)) R[Q] = _t, R[Ie] = B, Q = Ie;
        else break e;
      }
    }
    return D;
  }
  function i(R, D) {
    var B = R.sortIndex - D.sortIndex;
    return B !== 0 ? B : R.id - D.id;
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
  var l = [], u = [], c = 1, p = null, d = 3, g = !1, x = !1, E = !1, k = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= R) r(u), D.sortIndex = D.expirationTime, t(l, D);
      else break;
      D = n(u);
    }
  }
  function w(R) {
    if (E = !1, y(R), !x) if (n(l) !== null) x = !0, ee(_);
    else {
      var D = n(u);
      D !== null && J(w, D.startTime - R);
    }
  }
  function _(R, D) {
    x = !1, E && (E = !1, m(I), I = -1), g = !0;
    var B = d;
    try {
      for (y(D), p = n(l); p !== null && (!(p.expirationTime > D) || R && !O()); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, d = p.priorityLevel;
          var b = Q(p.expirationTime <= D);
          D = e.unstable_now(), typeof b == "function" ? p.callback = b : p === n(l) && r(l), y(D);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var oe = !0;
      else {
        var z = n(u);
        z !== null && J(w, z.startTime - D), oe = !1;
      }
      return oe;
    } finally {
      p = null, d = B, g = !1;
    }
  }
  var T = !1, A = null, I = -1, F = 5, P = -1;
  function O() {
    return !(e.unstable_now() - P < F);
  }
  function U() {
    if (A !== null) {
      var R = e.unstable_now();
      P = R;
      var D = !0;
      try {
        D = A(!0, R);
      } finally {
        D ? W() : (T = !1, A = null);
      }
    } else T = !1;
  }
  var W;
  if (typeof h == "function") W = function() {
    h(U);
  };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(), me = ae.port2;
    ae.port1.onmessage = U, W = function() {
      me.postMessage(null);
    };
  } else W = function() {
    k(U, 0);
  };
  function ee(R) {
    A = R, T || (T = !0, W());
  }
  function J(R, D) {
    I = k(function() {
      R(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    x || g || (x = !0, ee(_));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < R ? Math.floor(1e3 / R) : 5;
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
    var B = d;
    d = D;
    try {
      return R();
    } finally {
      d = B;
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
    var B = d;
    d = R;
    try {
      return D();
    } finally {
      d = B;
    }
  }, e.unstable_scheduleCallback = function(R, D, B) {
    var Q = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? Q + B : Q) : B = Q, R) {
      case 1:
        var b = -1;
        break;
      case 2:
        b = 250;
        break;
      case 5:
        b = 1073741823;
        break;
      case 4:
        b = 1e4;
        break;
      default:
        b = 5e3;
    }
    return b = B + b, R = { id: c++, callback: D, priorityLevel: R, startTime: B, expirationTime: b, sortIndex: -1 }, B > Q ? (R.sortIndex = B, t(u, R), n(l) === null && R === n(u) && (E ? (m(I), I = -1) : E = !0, J(w, B - Q))) : (R.sortIndex = b, t(l, R), x || g || (x = !0, ee(_))), R;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(R) {
    var D = d;
    return function() {
      var B = d;
      d = D;
      try {
        return R.apply(this, arguments);
      } finally {
        d = B;
      }
    };
  };
})(Tp);
_p.exports = Tp;
var bg = _p.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rg = C, lt = bg;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ap = /* @__PURE__ */ new Set(), Ti = {};
function er(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (Ti[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zo = Object.prototype.hasOwnProperty, Pg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, df = {}, pf = {};
function Fg(e) {
  return Zo.call(pf, e) ? !0 : Zo.call(df, e) ? !1 : Pg.test(e) ? pf[e] = !0 : (df[e] = !0, !1);
}
function Og(e, t, n, r) {
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
function Mg(e, t, n, r) {
  if (t === null || typeof t > "u" || Og(e, t, n, r)) return !0;
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
function Xe(e, t, n, r, i, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Pe[e] = new Xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Pe[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Pe[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Pe[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Pe[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Pe[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Pe[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Pe[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Pe[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vu,
    gu
  );
  Pe[t] = new Xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vu, gu);
  Pe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vu, gu);
  Pe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var i = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Mg(t, n, i, r) && (n = null), r || i === null ? Fg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var sn = Rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, os = Symbol.for("react.element"), fr = Symbol.for("react.portal"), dr = Symbol.for("react.fragment"), Eu = Symbol.for("react.strict_mode"), Jo = Symbol.for("react.profiler"), Ip = Symbol.for("react.provider"), Np = Symbol.for("react.context"), xu = Symbol.for("react.forward_ref"), el = Symbol.for("react.suspense"), tl = Symbol.for("react.suspense_list"), wu = Symbol.for("react.memo"), un = Symbol.for("react.lazy"), bp = Symbol.for("react.offscreen"), hf = Symbol.iterator;
function ti(e) {
  return e === null || typeof e != "object" ? null : (e = hf && e[hf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, ho;
function ci(e) {
  if (ho === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ho = t && t[1] || "";
  }
  return `
` + ho + e;
}
var mo = !1;
function vo(e, t) {
  if (!e || mo) return "";
  mo = !0;
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
    mo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ci(e) : "";
}
function Lg(e) {
  switch (e.tag) {
    case 5:
      return ci(e.type);
    case 16:
      return ci("Lazy");
    case 13:
      return ci("Suspense");
    case 19:
      return ci("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vo(e.type, !1), e;
    case 11:
      return e = vo(e.type.render, !1), e;
    case 1:
      return e = vo(e.type, !0), e;
    default:
      return "";
  }
}
function nl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dr:
      return "Fragment";
    case fr:
      return "Portal";
    case Jo:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case el:
      return "Suspense";
    case tl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Np:
      return (e.displayName || "Context") + ".Consumer";
    case Ip:
      return (e._context.displayName || "Context") + ".Provider";
    case xu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case wu:
      return t = e.displayName || null, t !== null ? t : nl(e.type) || "Memo";
    case un:
      t = e._payload, e = e._init;
      try {
        return nl(e(t));
      } catch {
      }
  }
  return null;
}
function Dg(e) {
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
      return nl(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
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
function _n(e) {
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
function Rp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bg(e) {
  var t = Rp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ls(e) {
  e._valueTracker || (e._valueTracker = Bg(e));
}
function Pp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Rp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function zs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rl(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _n(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Fp(e, t) {
  t = t.checked, t != null && yu(e, "checked", t, !1);
}
function il(e, t) {
  Fp(e, t);
  var n = _n(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? sl(e, t.type, n) : t.hasOwnProperty("defaultValue") && sl(e, t.type, _n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function sl(e, t, n) {
  (t !== "number" || zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fi = Array.isArray;
function Tr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function al(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (fi(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _n(n) };
}
function Op(e, t) {
  var n = _n(t.value), r = _n(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ol(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var us, Lp = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (us = us || document.createElement("div"), us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = us.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ai(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mi = {
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
}, Hg = ["Webkit", "ms", "Moz", "O"];
Object.keys(mi).forEach(function(e) {
  Hg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), mi[t] = mi[e];
  });
});
function Dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mi.hasOwnProperty(e) && mi[e] ? ("" + t).trim() : t + "px";
}
function Bp(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Dp(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Vg = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ll(e, t) {
  if (t) {
    if (Vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ul(e, t) {
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
var cl = null;
function Cu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fl = null, Ar = null, Ir = null;
function Ef(e) {
  if (e = Ki(e)) {
    if (typeof fl != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Aa(t), fl(e.stateNode, e.type, t));
  }
}
function Hp(e) {
  Ar ? Ir ? Ir.push(e) : Ir = [e] : Ar = e;
}
function Vp() {
  if (Ar) {
    var e = Ar, t = Ir;
    if (Ir = Ar = null, Ef(e), t) for (e = 0; e < t.length; e++) Ef(t[e]);
  }
}
function jp(e, t) {
  return e(t);
}
function Up() {
}
var go = !1;
function $p(e, t, n) {
  if (go) return e(t, n);
  go = !0;
  try {
    return jp(e, t, n);
  } finally {
    go = !1, (Ar !== null || Ir !== null) && (Up(), Vp());
  }
}
function Ii(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Aa(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var dl = !1;
if (Zt) try {
  var ni = {};
  Object.defineProperty(ni, "passive", { get: function() {
    dl = !0;
  } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
} catch {
  dl = !1;
}
function jg(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vi = !1, Gs = null, Ws = !1, pl = null, Ug = { onError: function(e) {
  vi = !0, Gs = e;
} };
function $g(e, t, n, r, i, s, a, o, l) {
  vi = !1, Gs = null, jg.apply(Ug, arguments);
}
function zg(e, t, n, r, i, s, a, o, l) {
  if ($g.apply(this, arguments), vi) {
    if (vi) {
      var u = Gs;
      vi = !1, Gs = null;
    } else throw Error(N(198));
    Ws || (Ws = !0, pl = u);
  }
}
function tr(e) {
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
function zp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xf(e) {
  if (tr(e) !== e) throw Error(N(188));
}
function Gg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tr(e), t === null) throw Error(N(188));
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
        if (s === n) return xf(i), e;
        if (s === r) return xf(i), t;
        s = s.sibling;
      }
      throw Error(N(188));
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
        if (!a) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Gp(e) {
  return e = Gg(e), e !== null ? Wp(e) : null;
}
function Wp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qp = lt.unstable_scheduleCallback, wf = lt.unstable_cancelCallback, Wg = lt.unstable_shouldYield, Qg = lt.unstable_requestPaint, ge = lt.unstable_now, Xg = lt.unstable_getCurrentPriorityLevel, ku = lt.unstable_ImmediatePriority, Xp = lt.unstable_UserBlockingPriority, Qs = lt.unstable_NormalPriority, Kg = lt.unstable_LowPriority, Kp = lt.unstable_IdlePriority, ka = null, Vt = null;
function Yg(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
    Vt.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Rt = Math.clz32 ? Math.clz32 : Jg, qg = Math.log, Zg = Math.LN2;
function Jg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qg(e) / Zg | 0) | 0;
}
var cs = 64, fs = 4194304;
function di(e) {
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
function Xs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? r = di(o) : (s &= a, s !== 0 && (r = di(s)));
  } else a = n & ~i, a !== 0 ? r = di(a) : s !== 0 && (r = di(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Rt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function e0(e, t) {
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
function t0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - Rt(s), o = 1 << a, l = i[a];
    l === -1 ? (!(o & n) || o & r) && (i[a] = e0(o, t)) : l <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function hl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yp() {
  var e = cs;
  return cs <<= 1, !(cs & 4194240) && (cs = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
}
function n0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Rt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function Su(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Rt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var te = 0;
function qp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zp, _u, Jp, eh, th, ml = !1, ds = [], vn = null, gn = null, yn = null, Ni = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), dn = [], r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      gn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bi.delete(t.pointerId);
  }
}
function ri(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Ki(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function i0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return vn = ri(vn, e, t, n, r, i), !0;
    case "dragenter":
      return gn = ri(gn, e, t, n, r, i), !0;
    case "mouseover":
      return yn = ri(yn, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ni.set(s, ri(Ni.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, bi.set(s, ri(bi.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function nh(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = tr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zp(n), t !== null) {
          e.blockedOn = t, th(e.priority, function() {
            Jp(n);
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
function Rs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cl = r, n.target.dispatchEvent(r), cl = null;
    } else return t = Ki(n), t !== null && _u(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function kf(e, t, n) {
  Rs(e) && n.delete(t);
}
function s0() {
  ml = !1, vn !== null && Rs(vn) && (vn = null), gn !== null && Rs(gn) && (gn = null), yn !== null && Rs(yn) && (yn = null), Ni.forEach(kf), bi.forEach(kf);
}
function ii(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ml || (ml = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, s0)));
}
function Ri(e) {
  function t(i) {
    return ii(i, e);
  }
  if (0 < ds.length) {
    ii(ds[0], e);
    for (var n = 1; n < ds.length; n++) {
      var r = ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (vn !== null && ii(vn, e), gn !== null && ii(gn, e), yn !== null && ii(yn, e), Ni.forEach(t), bi.forEach(t), n = 0; n < dn.length; n++) r = dn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && (n = dn[0], n.blockedOn === null); ) nh(n), n.blockedOn === null && dn.shift();
}
var Nr = sn.ReactCurrentBatchConfig, Ks = !0;
function a0(e, t, n, r) {
  var i = te, s = Nr.transition;
  Nr.transition = null;
  try {
    te = 1, Tu(e, t, n, r);
  } finally {
    te = i, Nr.transition = s;
  }
}
function o0(e, t, n, r) {
  var i = te, s = Nr.transition;
  Nr.transition = null;
  try {
    te = 4, Tu(e, t, n, r);
  } finally {
    te = i, Nr.transition = s;
  }
}
function Tu(e, t, n, r) {
  if (Ks) {
    var i = vl(e, t, n, r);
    if (i === null) Io(e, t, r, Ys, n), Cf(e, r);
    else if (i0(i, e, t, n, r)) r.stopPropagation();
    else if (Cf(e, r), t & 4 && -1 < r0.indexOf(e)) {
      for (; i !== null; ) {
        var s = Ki(i);
        if (s !== null && Zp(s), s = vl(e, t, n, r), s === null && Io(e, t, r, Ys, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Io(e, t, r, null, n);
  }
}
var Ys = null;
function vl(e, t, n, r) {
  if (Ys = null, e = Cu(r), e = Hn(e), e !== null) if (t = tr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zp(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ys = e, null;
}
function rh(e) {
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
      switch (Xg()) {
        case ku:
          return 1;
        case Xp:
          return 4;
        case Qs:
        case Kg:
          return 16;
        case Kp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null, Au = null, Ps = null;
function ih() {
  if (Ps) return Ps;
  var e, t = Au, n = t.length, r, i = "value" in hn ? hn.value : hn.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++) ;
  return Ps = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Fs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ps() {
  return !0;
}
function Sf() {
  return !1;
}
function dt(e) {
  function t(n, r, i, s, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ps : Sf, this.isPropagationStopped = Sf, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ps);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ps);
  }, persist: function() {
  }, isPersistent: ps }), t;
}
var Kr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Iu = dt(Kr), Xi = he({}, Kr, { view: 0, detail: 0 }), l0 = dt(Xi), Eo, xo, si, Sa = he({}, Xi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (Eo = e.screenX - si.screenX, xo = e.screenY - si.screenY) : xo = Eo = 0, si = e), Eo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xo;
} }), _f = dt(Sa), u0 = he({}, Sa, { dataTransfer: 0 }), c0 = dt(u0), f0 = he({}, Xi, { relatedTarget: 0 }), wo = dt(f0), d0 = he({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), p0 = dt(d0), h0 = he({}, Kr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), m0 = dt(h0), v0 = he({}, Kr, { data: 0 }), Tf = dt(v0), g0 = {
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
}, y0 = {
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
}, E0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function x0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = E0[e]) ? !!t[e] : !1;
}
function Nu() {
  return x0;
}
var w0 = he({}, Xi, { key: function(e) {
  if (e.key) {
    var t = g0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nu, charCode: function(e) {
  return e.type === "keypress" ? Fs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), C0 = dt(w0), k0 = he({}, Sa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Af = dt(k0), S0 = he({}, Xi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nu }), _0 = dt(S0), T0 = he({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), A0 = dt(T0), I0 = he({}, Sa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), N0 = dt(I0), b0 = [9, 13, 27, 32], bu = Zt && "CompositionEvent" in window, gi = null;
Zt && "documentMode" in document && (gi = document.documentMode);
var R0 = Zt && "TextEvent" in window && !gi, sh = Zt && (!bu || gi && 8 < gi && 11 >= gi), If = " ", Nf = !1;
function ah(e, t) {
  switch (e) {
    case "keyup":
      return b0.indexOf(t.keyCode) !== -1;
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
function oh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function P0(e, t) {
  switch (e) {
    case "compositionend":
      return oh(t);
    case "keypress":
      return t.which !== 32 ? null : (Nf = !0, If);
    case "textInput":
      return e = t.data, e === If && Nf ? null : e;
    default:
      return null;
  }
}
function F0(e, t) {
  if (pr) return e === "compositionend" || !bu && ah(e, t) ? (e = ih(), Ps = Au = hn = null, pr = !1, e) : null;
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
      return sh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var O0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!O0[e.type] : t === "textarea";
}
function lh(e, t, n, r) {
  Hp(r), t = qs(t, "onChange"), 0 < t.length && (n = new Iu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var yi = null, Pi = null;
function M0(e) {
  Eh(e, 0);
}
function _a(e) {
  var t = vr(e);
  if (Pp(t)) return e;
}
function L0(e, t) {
  if (e === "change") return t;
}
var uh = !1;
if (Zt) {
  var Co;
  if (Zt) {
    var ko = "oninput" in document;
    if (!ko) {
      var Rf = document.createElement("div");
      Rf.setAttribute("oninput", "return;"), ko = typeof Rf.oninput == "function";
    }
    Co = ko;
  } else Co = !1;
  uh = Co && (!document.documentMode || 9 < document.documentMode);
}
function Pf() {
  yi && (yi.detachEvent("onpropertychange", ch), Pi = yi = null);
}
function ch(e) {
  if (e.propertyName === "value" && _a(Pi)) {
    var t = [];
    lh(t, Pi, e, Cu(e)), $p(M0, t);
  }
}
function D0(e, t, n) {
  e === "focusin" ? (Pf(), yi = t, Pi = n, yi.attachEvent("onpropertychange", ch)) : e === "focusout" && Pf();
}
function B0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _a(Pi);
}
function H0(e, t) {
  if (e === "click") return _a(t);
}
function V0(e, t) {
  if (e === "input" || e === "change") return _a(t);
}
function j0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ft = typeof Object.is == "function" ? Object.is : j0;
function Fi(e, t) {
  if (Ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Zo.call(t, i) || !Ft(e[i], t[i])) return !1;
  }
  return !0;
}
function Ff(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Of(e, t) {
  var n = Ff(e);
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
    n = Ff(n);
  }
}
function fh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function dh() {
  for (var e = window, t = zs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zs(e.document);
  }
  return t;
}
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function U0(e) {
  var t = dh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ru(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Of(n, s);
        var a = Of(
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
var $0 = Zt && "documentMode" in document && 11 >= document.documentMode, hr = null, gl = null, Ei = null, yl = !1;
function Mf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yl || hr == null || hr !== zs(r) || (r = hr, "selectionStart" in r && Ru(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ei && Fi(Ei, r) || (Ei = r, r = qs(gl, "onSelect"), 0 < r.length && (t = new Iu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hr)));
}
function hs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var mr = { animationend: hs("Animation", "AnimationEnd"), animationiteration: hs("Animation", "AnimationIteration"), animationstart: hs("Animation", "AnimationStart"), transitionend: hs("Transition", "TransitionEnd") }, So = {}, ph = {};
Zt && (ph = document.createElement("div").style, "AnimationEvent" in window || (delete mr.animationend.animation, delete mr.animationiteration.animation, delete mr.animationstart.animation), "TransitionEvent" in window || delete mr.transitionend.transition);
function Ta(e) {
  if (So[e]) return So[e];
  if (!mr[e]) return e;
  var t = mr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ph) return So[e] = t[n];
  return e;
}
var hh = Ta("animationend"), mh = Ta("animationiteration"), vh = Ta("animationstart"), gh = Ta("transitionend"), yh = /* @__PURE__ */ new Map(), Lf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nn(e, t) {
  yh.set(e, t), er(t, [e]);
}
for (var _o = 0; _o < Lf.length; _o++) {
  var To = Lf[_o], z0 = To.toLowerCase(), G0 = To[0].toUpperCase() + To.slice(1);
  Nn(z0, "on" + G0);
}
Nn(hh, "onAnimationEnd");
Nn(mh, "onAnimationIteration");
Nn(vh, "onAnimationStart");
Nn("dblclick", "onDoubleClick");
Nn("focusin", "onFocus");
Nn("focusout", "onBlur");
Nn(gh, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), W0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));
function Df(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zg(r, t, void 0, e), e.currentTarget = null;
}
function Eh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], l = o.instance, u = o.currentTarget;
        if (o = o.listener, l !== s && i.isPropagationStopped()) break e;
        Df(i, o, u), s = l;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], l = o.instance, u = o.currentTarget, o = o.listener, l !== s && i.isPropagationStopped()) break e;
        Df(i, o, u), s = l;
      }
    }
  }
  if (Ws) throw e = pl, Ws = !1, pl = null, e;
}
function le(e, t) {
  var n = t[kl];
  n === void 0 && (n = t[kl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (xh(t, e, 2, !1), n.add(r));
}
function Ao(e, t, n) {
  var r = 0;
  t && (r |= 4), xh(n, e, r, t);
}
var ms = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(e) {
  if (!e[ms]) {
    e[ms] = !0, Ap.forEach(function(n) {
      n !== "selectionchange" && (W0.has(n) || Ao(n, !1, e), Ao(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ms] || (t[ms] = !0, Ao("selectionchange", !1, t));
  }
}
function xh(e, t, n, r) {
  switch (rh(t)) {
    case 1:
      var i = a0;
      break;
    case 4:
      i = o0;
      break;
    default:
      i = Tu;
  }
  n = i.bind(null, t, n, e), i = void 0, !dl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Io(e, t, n, r, i) {
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
        if (a = Hn(o), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  $p(function() {
    var u = s, c = Cu(n), p = [];
    e: {
      var d = yh.get(e);
      if (d !== void 0) {
        var g = Iu, x = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = C0;
            break;
          case "focusin":
            x = "focus", g = wo;
            break;
          case "focusout":
            x = "blur", g = wo;
            break;
          case "beforeblur":
          case "afterblur":
            g = wo;
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
            g = _f;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = c0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _0;
            break;
          case hh:
          case mh:
          case vh:
            g = p0;
            break;
          case gh:
            g = A0;
            break;
          case "scroll":
            g = l0;
            break;
          case "wheel":
            g = N0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = m0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Af;
        }
        var E = (t & 4) !== 0, k = !E && e === "scroll", m = E ? d !== null ? d + "Capture" : null : d;
        E = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null && (y = w, m !== null && (w = Ii(h, m), w != null && E.push(Mi(h, w, y)))), k) break;
          h = h.return;
        }
        0 < E.length && (d = new g(d, x, null, n, c), p.push({ event: d, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== cl && (x = n.relatedTarget || n.fromElement) && (Hn(x) || x[Jt])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = u, x = x ? Hn(x) : null, x !== null && (k = tr(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = u), g !== x)) {
          if (E = _f, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (E = Af, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), k = g == null ? d : vr(g), y = x == null ? d : vr(x), d = new E(w, h + "leave", g, n, c), d.target = k, d.relatedTarget = y, w = null, Hn(c) === u && (E = new E(m, h + "enter", x, n, c), E.target = y, E.relatedTarget = k, w = E), k = w, g && x) t: {
            for (E = g, m = x, h = 0, y = E; y; y = ur(y)) h++;
            for (y = 0, w = m; w; w = ur(w)) y++;
            for (; 0 < h - y; ) E = ur(E), h--;
            for (; 0 < y - h; ) m = ur(m), y--;
            for (; h--; ) {
              if (E === m || m !== null && E === m.alternate) break t;
              E = ur(E), m = ur(m);
            }
            E = null;
          }
          else E = null;
          g !== null && Bf(p, d, g, E, !1), x !== null && k !== null && Bf(p, k, x, E, !0);
        }
      }
      e: {
        if (d = u ? vr(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var _ = L0;
        else if (bf(d)) if (uh) _ = V0;
        else {
          _ = B0;
          var T = D0;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (_ = H0);
        if (_ && (_ = _(e, u))) {
          lh(p, _, n, c);
          break e;
        }
        T && T(e, d, u), e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && sl(d, "number", d.value);
      }
      switch (T = u ? vr(u) : window, e) {
        case "focusin":
          (bf(T) || T.contentEditable === "true") && (hr = T, gl = u, Ei = null);
          break;
        case "focusout":
          Ei = gl = hr = null;
          break;
        case "mousedown":
          yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          yl = !1, Mf(p, n, c);
          break;
        case "selectionchange":
          if ($0) break;
        case "keydown":
        case "keyup":
          Mf(p, n, c);
      }
      var A;
      if (bu) e: {
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
      else pr ? ah(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (sh && n.locale !== "ko" && (pr || I !== "onCompositionStart" ? I === "onCompositionEnd" && pr && (A = ih()) : (hn = c, Au = "value" in hn ? hn.value : hn.textContent, pr = !0)), T = qs(u, I), 0 < T.length && (I = new Tf(I, e, null, n, c), p.push({ event: I, listeners: T }), A ? I.data = A : (A = oh(n), A !== null && (I.data = A)))), (A = R0 ? P0(e, n) : F0(e, n)) && (u = qs(u, "onBeforeInput"), 0 < u.length && (c = new Tf("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: u }), c.data = A));
    }
    Eh(p, t);
  });
}
function Mi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Ii(e, n), s != null && r.unshift(Mi(e, s, i)), s = Ii(e, t), s != null && r.push(Mi(e, s, i))), e = e.return;
  }
  return r;
}
function ur(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bf(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, l = o.alternate, u = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 && u !== null && (o = u, i ? (l = Ii(n, s), l != null && a.unshift(Mi(n, l, o))) : i || (l = Ii(n, s), l != null && a.push(Mi(n, l, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Q0 = /\r\n?/g, X0 = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e).replace(Q0, `
`).replace(X0, "");
}
function vs(e, t, n) {
  if (t = Hf(t), Hf(e) !== t && n) throw Error(N(425));
}
function Zs() {
}
var El = null, xl = null;
function wl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cl = typeof setTimeout == "function" ? setTimeout : void 0, K0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vf = typeof Promise == "function" ? Promise : void 0, Y0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vf < "u" ? function(e) {
  return Vf.resolve(null).then(e).catch(q0);
} : Cl;
function q0(e) {
  setTimeout(function() {
    throw e;
  });
}
function No(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Ri(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Ri(t);
}
function En(e) {
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
function jf(e) {
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
var Yr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Yr, Li = "__reactProps$" + Yr, Jt = "__reactContainer$" + Yr, kl = "__reactEvents$" + Yr, Z0 = "__reactListeners$" + Yr, J0 = "__reactHandles$" + Yr;
function Hn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Jt] || n[Bt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = jf(e); e !== null; ) {
        if (n = e[Bt]) return n;
        e = jf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ki(e) {
  return e = e[Bt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Aa(e) {
  return e[Li] || null;
}
var Sl = [], gr = -1;
function bn(e) {
  return { current: e };
}
function ce(e) {
  0 > gr || (e.current = Sl[gr], Sl[gr] = null, gr--);
}
function se(e, t) {
  gr++, Sl[gr] = e.current, e.current = t;
}
var Tn = {}, Be = bn(Tn), Ze = bn(!1), Qn = Tn;
function Fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Js() {
  ce(Ze), ce(Be);
}
function Uf(e, t, n) {
  if (Be.current !== Tn) throw Error(N(168));
  se(Be, t), se(Ze, n);
}
function wh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, Dg(e) || "Unknown", i));
  return he({}, n, r);
}
function ea(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, Qn = Be.current, se(Be, e), se(Ze, Ze.current), !0;
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = wh(e, t, Qn), r.__reactInternalMemoizedMergedChildContext = e, ce(Ze), ce(Be), se(Be, e)) : ce(Ze), se(Ze, n);
}
var Qt = null, Ia = !1, bo = !1;
function Ch(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function ey(e) {
  Ia = !0, Ch(e);
}
function Rn() {
  if (!bo && Qt !== null) {
    bo = !0;
    var e = 0, t = te;
    try {
      var n = Qt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qt = null, Ia = !1;
    } catch (i) {
      throw Qt !== null && (Qt = Qt.slice(e + 1)), Qp(ku, Rn), i;
    } finally {
      te = t, bo = !1;
    }
  }
  return null;
}
var yr = [], Er = 0, ta = null, na = 0, ht = [], mt = 0, Xn = null, Kt = 1, Yt = "";
function Mn(e, t) {
  yr[Er++] = na, yr[Er++] = ta, ta = e, na = t;
}
function kh(e, t, n) {
  ht[mt++] = Kt, ht[mt++] = Yt, ht[mt++] = Xn, Xn = e;
  var r = Kt;
  e = Yt;
  var i = 32 - Rt(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - Rt(t) + i;
  if (30 < s) {
    var a = i - i % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Kt = 1 << 32 - Rt(t) + i | n << i | r, Yt = s + e;
  } else Kt = 1 << s | n << i | r, Yt = e;
}
function Pu(e) {
  e.return !== null && (Mn(e, 1), kh(e, 1, 0));
}
function Fu(e) {
  for (; e === ta; ) ta = yr[--Er], yr[Er] = null, na = yr[--Er], yr[Er] = null;
  for (; e === Xn; ) Xn = ht[--mt], ht[mt] = null, Yt = ht[--mt], ht[mt] = null, Kt = ht[--mt], ht[mt] = null;
}
var ot = null, st = null, fe = !1, bt = null;
function Sh(e, t) {
  var n = vt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, st = En(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, st = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xn !== null ? { id: Kt, overflow: Yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = vt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, st = null, !0) : !1;
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tl(e) {
  if (fe) {
    var t = st;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (_l(e)) throw Error(N(418));
        t = En(n.nextSibling);
        var r = ot;
        t && zf(e, t) ? Sh(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, ot = e);
      }
    } else {
      if (_l(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, fe = !1, ot = e;
    }
  }
}
function Gf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ot = e;
}
function gs(e) {
  if (e !== ot) return !1;
  if (!fe) return Gf(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps)), t && (t = st)) {
    if (_l(e)) throw _h(), Error(N(418));
    for (; t; ) Sh(e, t), t = En(t.nextSibling);
  }
  if (Gf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = En(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = ot ? En(e.stateNode.nextSibling) : null;
  return !0;
}
function _h() {
  for (var e = st; e; ) e = En(e.nextSibling);
}
function Or() {
  st = ot = null, fe = !1;
}
function Ou(e) {
  bt === null ? bt = [e] : bt.push(e);
}
var ty = sn.ReactCurrentBatchConfig;
function ai(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var o = i.refs;
        a === null ? delete o[s] : o[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function ys(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Wf(e) {
  var t = e._init;
  return t(e._payload);
}
function Th(e) {
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
    return m = kn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function o(m, h, y, w) {
    return h === null || h.tag !== 6 ? (h = Do(y, m.mode, w), h.return = m, h) : (h = i(h, y), h.return = m, h);
  }
  function l(m, h, y, w) {
    var _ = y.type;
    return _ === dr ? c(m, h, y.props.children, w, y.key) : h !== null && (h.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === un && Wf(_) === h.type) ? (w = i(h, y.props), w.ref = ai(m, h, y), w.return = m, w) : (w = Vs(y.type, y.key, y.props, null, m.mode, w), w.ref = ai(m, h, y), w.return = m, w);
  }
  function u(m, h, y, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Bo(y, m.mode, w), h.return = m, h) : (h = i(h, y.children || []), h.return = m, h);
  }
  function c(m, h, y, w, _) {
    return h === null || h.tag !== 7 ? (h = zn(y, m.mode, w, _), h.return = m, h) : (h = i(h, y), h.return = m, h);
  }
  function p(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Do("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case os:
          return y = Vs(h.type, h.key, h.props, null, m.mode, y), y.ref = ai(m, null, h), y.return = m, y;
        case fr:
          return h = Bo(h, m.mode, y), h.return = m, h;
        case un:
          var w = h._init;
          return p(m, w(h._payload), y);
      }
      if (fi(h) || ti(h)) return h = zn(h, m.mode, y, null), h.return = m, h;
      ys(m, h);
    }
    return null;
  }
  function d(m, h, y, w) {
    var _ = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return _ !== null ? null : o(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case os:
          return y.key === _ ? l(m, h, y, w) : null;
        case fr:
          return y.key === _ ? u(m, h, y, w) : null;
        case un:
          return _ = y._init, d(
            m,
            h,
            _(y._payload),
            w
          );
      }
      if (fi(y) || ti(y)) return _ !== null ? null : c(m, h, y, w, null);
      ys(m, y);
    }
    return null;
  }
  function g(m, h, y, w, _) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(y) || null, o(h, m, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case os:
          return m = m.get(w.key === null ? y : w.key) || null, l(h, m, w, _);
        case fr:
          return m = m.get(w.key === null ? y : w.key) || null, u(h, m, w, _);
        case un:
          var T = w._init;
          return g(m, h, y, T(w._payload), _);
      }
      if (fi(w) || ti(w)) return m = m.get(y) || null, c(h, m, w, _, null);
      ys(h, w);
    }
    return null;
  }
  function x(m, h, y, w) {
    for (var _ = null, T = null, A = h, I = h = 0, F = null; A !== null && I < y.length; I++) {
      A.index > I ? (F = A, A = null) : F = A.sibling;
      var P = d(m, A, y[I], w);
      if (P === null) {
        A === null && (A = F);
        break;
      }
      e && A && P.alternate === null && t(m, A), h = s(P, h, I), T === null ? _ = P : T.sibling = P, T = P, A = F;
    }
    if (I === y.length) return n(m, A), fe && Mn(m, I), _;
    if (A === null) {
      for (; I < y.length; I++) A = p(m, y[I], w), A !== null && (h = s(A, h, I), T === null ? _ = A : T.sibling = A, T = A);
      return fe && Mn(m, I), _;
    }
    for (A = r(m, A); I < y.length; I++) F = g(A, m, I, y[I], w), F !== null && (e && F.alternate !== null && A.delete(F.key === null ? I : F.key), h = s(F, h, I), T === null ? _ = F : T.sibling = F, T = F);
    return e && A.forEach(function(O) {
      return t(m, O);
    }), fe && Mn(m, I), _;
  }
  function E(m, h, y, w) {
    var _ = ti(y);
    if (typeof _ != "function") throw Error(N(150));
    if (y = _.call(y), y == null) throw Error(N(151));
    for (var T = _ = null, A = h, I = h = 0, F = null, P = y.next(); A !== null && !P.done; I++, P = y.next()) {
      A.index > I ? (F = A, A = null) : F = A.sibling;
      var O = d(m, A, P.value, w);
      if (O === null) {
        A === null && (A = F);
        break;
      }
      e && A && O.alternate === null && t(m, A), h = s(O, h, I), T === null ? _ = O : T.sibling = O, T = O, A = F;
    }
    if (P.done) return n(
      m,
      A
    ), fe && Mn(m, I), _;
    if (A === null) {
      for (; !P.done; I++, P = y.next()) P = p(m, P.value, w), P !== null && (h = s(P, h, I), T === null ? _ = P : T.sibling = P, T = P);
      return fe && Mn(m, I), _;
    }
    for (A = r(m, A); !P.done; I++, P = y.next()) P = g(A, m, I, P.value, w), P !== null && (e && P.alternate !== null && A.delete(P.key === null ? I : P.key), h = s(P, h, I), T === null ? _ = P : T.sibling = P, T = P);
    return e && A.forEach(function(U) {
      return t(m, U);
    }), fe && Mn(m, I), _;
  }
  function k(m, h, y, w) {
    if (typeof y == "object" && y !== null && y.type === dr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case os:
          e: {
            for (var _ = y.key, T = h; T !== null; ) {
              if (T.key === _) {
                if (_ = y.type, _ === dr) {
                  if (T.tag === 7) {
                    n(m, T.sibling), h = i(T, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (T.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === un && Wf(_) === T.type) {
                  n(m, T.sibling), h = i(T, y.props), h.ref = ai(m, T, y), h.return = m, m = h;
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            y.type === dr ? (h = zn(y.props.children, m.mode, w, y.key), h.return = m, m = h) : (w = Vs(y.type, y.key, y.props, null, m.mode, w), w.ref = ai(m, h, y), w.return = m, m = w);
          }
          return a(m);
        case fr:
          e: {
            for (T = y.key; h !== null; ) {
              if (h.key === T) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(m, h.sibling), h = i(h, y.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Bo(y, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case un:
          return T = y._init, k(m, h, T(y._payload), w);
      }
      if (fi(y)) return x(m, h, y, w);
      if (ti(y)) return E(m, h, y, w);
      ys(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, y), h.return = m, m = h) : (n(m, h), h = Do(y, m.mode, w), h.return = m, m = h), a(m)) : n(m, h);
  }
  return k;
}
var Mr = Th(!0), Ah = Th(!1), ra = bn(null), ia = null, xr = null, Mu = null;
function Lu() {
  Mu = xr = ia = null;
}
function Du(e) {
  var t = ra.current;
  ce(ra), e._currentValue = t;
}
function Al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function br(e, t) {
  ia = e, Mu = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function yt(e) {
  var t = e._currentValue;
  if (Mu !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
    if (ia === null) throw Error(N(308));
    xr = e, ia.dependencies = { lanes: 0, firstContext: e };
  } else xr = xr.next = e;
  return t;
}
var Vn = null;
function Bu(e) {
  Vn === null ? Vn = [e] : Vn.push(e);
}
function Ih(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Bu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, en(e, r);
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var cn = !1;
function Hu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, en(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Bu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, en(e, n);
}
function Os(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
  }
}
function Qf(e, t) {
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
function sa(e, t, n, r) {
  var i = e.updateQueue;
  cn = !1;
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
      var d = o.lane, g = o.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var x = e, E = o;
          switch (d = t, g = n, E.tag) {
            case 1:
              if (x = E.payload, typeof x == "function") {
                p = x.call(g, p, d);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = E.payload, d = typeof x == "function" ? x.call(g, p, d) : x, d == null) break e;
              p = he({}, p, d);
              break e;
            case 2:
              cn = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [o] : d.push(o));
      } else g = { eventTime: g, lane: d, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, c === null ? (u = c = g, l = p) : c = c.next = g, a |= d;
      if (o = o.next, o === null) {
        if (o = i.shared.pending, o === null) break;
        d = o, o = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = p), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    Yn |= a, e.lanes = a, e.memoizedState = p;
  }
}
function Xf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(N(191, i));
      i.call(r);
    }
  }
}
var Yi = {}, jt = bn(Yi), Di = bn(Yi), Bi = bn(Yi);
function jn(e) {
  if (e === Yi) throw Error(N(174));
  return e;
}
function Vu(e, t) {
  switch (se(Bi, t), se(Di, e), se(jt, Yi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ol(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ol(t, e);
  }
  ce(jt), se(jt, t);
}
function Lr() {
  ce(jt), ce(Di), ce(Bi);
}
function bh(e) {
  jn(Bi.current);
  var t = jn(jt.current), n = ol(t, e.type);
  t !== n && (se(Di, e), se(jt, n));
}
function ju(e) {
  Di.current === e && (ce(jt), ce(Di));
}
var de = bn(0);
function aa(e) {
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
var Ro = [];
function Uu() {
  for (var e = 0; e < Ro.length; e++) Ro[e]._workInProgressVersionPrimary = null;
  Ro.length = 0;
}
var Ms = sn.ReactCurrentDispatcher, Po = sn.ReactCurrentBatchConfig, Kn = 0, pe = null, we = null, _e = null, oa = !1, xi = !1, Hi = 0, ny = 0;
function Fe() {
  throw Error(N(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, i, s) {
  if (Kn = s, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ms.current = e === null || e.memoizedState === null ? ay : oy, e = n(r, i), xi) {
    s = 0;
    do {
      if (xi = !1, Hi = 0, 25 <= s) throw Error(N(301));
      s += 1, _e = we = null, t.updateQueue = null, Ms.current = ly, e = n(r, i);
    } while (xi);
  }
  if (Ms.current = la, t = we !== null && we.next !== null, Kn = 0, _e = we = pe = null, oa = !1, t) throw Error(N(300));
  return e;
}
function Gu() {
  var e = Hi !== 0;
  return Hi = 0, e;
}
function Dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return _e === null ? pe.memoizedState = _e = e : _e = _e.next = e, _e;
}
function Et() {
  if (we === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = _e === null ? pe.memoizedState : _e.next;
  if (t !== null) _e = t, we = e;
  else {
    if (e === null) throw Error(N(310));
    we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, _e === null ? pe.memoizedState = _e = e : _e = _e.next = e;
  }
  return _e;
}
function Vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fo(e) {
  var t = Et(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = we, i = r.baseQueue, s = n.pending;
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
      if ((Kn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (o = l = p, a = r) : l = l.next = p, pe.lanes |= c, Yn |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? a = r : l.next = o, Ft(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, pe.lanes |= s, Yn |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oo(e) {
  var t = Et(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== i);
    Ft(s, t.memoizedState) || (qe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Rh() {
}
function Ph(e, t) {
  var n = pe, r = Et(), i = t(), s = !Ft(r.memoizedState, i);
  if (s && (r.memoizedState = i, qe = !0), r = r.queue, Wu(Mh.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048, ji(9, Oh.bind(null, n, r, i, t), void 0, null), Te === null) throw Error(N(349));
    Kn & 30 || Fh(n, t, i);
  }
  return i;
}
function Fh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Oh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Lh(t) && Dh(e);
}
function Mh(e, t, n) {
  return n(function() {
    Lh(t) && Dh(e);
  });
}
function Lh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ft(e, n);
  } catch {
    return !0;
  }
}
function Dh(e) {
  var t = en(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function Kf(e) {
  var t = Dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vi, lastRenderedState: e }, t.queue = e, e = e.dispatch = sy.bind(null, pe, e), [t.memoizedState, e];
}
function ji(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Bh() {
  return Et().memoizedState;
}
function Ls(e, t, n, r) {
  var i = Dt();
  pe.flags |= e, i.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r);
}
function Na(e, t, n, r) {
  var i = Et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (we !== null) {
    var a = we.memoizedState;
    if (s = a.destroy, r !== null && $u(r, a.deps)) {
      i.memoizedState = ji(t, n, s, r);
      return;
    }
  }
  pe.flags |= e, i.memoizedState = ji(1 | t, n, s, r);
}
function Yf(e, t) {
  return Ls(8390656, 8, e, t);
}
function Wu(e, t) {
  return Na(2048, 8, e, t);
}
function Hh(e, t) {
  return Na(4, 2, e, t);
}
function Vh(e, t) {
  return Na(4, 4, e, t);
}
function jh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Uh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Na(4, 4, jh.bind(null, t, e), n);
}
function Qu() {
}
function $h(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gh(e, t, n) {
  return Kn & 21 ? (Ft(n, t) || (n = Yp(), pe.lanes |= n, Yn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function ry(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Po.transition;
  Po.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, Po.transition = r;
  }
}
function Wh() {
  return Et().memoizedState;
}
function iy(e, t, n) {
  var r = Cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qh(e)) Xh(t, n);
  else if (n = Ih(e, t, n, r), n !== null) {
    var i = We();
    Pt(n, e, r, i), Kh(n, t, r);
  }
}
function sy(e, t, n) {
  var r = Cn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qh(e)) Xh(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (i.hasEagerState = !0, i.eagerState = o, Ft(o, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Bu(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Ih(e, t, i, r), n !== null && (i = We(), Pt(n, e, r, i), Kh(n, t, r));
  }
}
function Qh(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function Xh(e, t) {
  xi = oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Kh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
  }
}
var la = { readContext: yt, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, ay = { readContext: yt, useCallback: function(e, t) {
  return Dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yt, useEffect: Yf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ls(
    4194308,
    4,
    jh.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ls(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ls(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Dt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = iy.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Kf, useDebugValue: Qu, useDeferredValue: function(e) {
  return Dt().memoizedState = e;
}, useTransition: function() {
  var e = Kf(!1), t = e[0];
  return e = ry.bind(null, e[1]), Dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, i = Dt();
  if (fe) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), Te === null) throw Error(N(349));
    Kn & 30 || Fh(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, Yf(Mh.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ji(9, Oh.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Dt(), t = Te.identifierPrefix;
  if (fe) {
    var n = Yt, r = Kt;
    n = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ny++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, oy = {
  readContext: yt,
  useCallback: $h,
  useContext: yt,
  useEffect: Wu,
  useImperativeHandle: Uh,
  useInsertionEffect: Hh,
  useLayoutEffect: Vh,
  useMemo: zh,
  useReducer: Fo,
  useRef: Bh,
  useState: function() {
    return Fo(Vi);
  },
  useDebugValue: Qu,
  useDeferredValue: function(e) {
    var t = Et();
    return Gh(t, we.memoizedState, e);
  },
  useTransition: function() {
    var e = Fo(Vi)[0], t = Et().memoizedState;
    return [e, t];
  },
  useMutableSource: Rh,
  useSyncExternalStore: Ph,
  useId: Wh,
  unstable_isNewReconciler: !1
}, ly = { readContext: yt, useCallback: $h, useContext: yt, useEffect: Wu, useImperativeHandle: Uh, useInsertionEffect: Hh, useLayoutEffect: Vh, useMemo: zh, useReducer: Oo, useRef: Bh, useState: function() {
  return Oo(Vi);
}, useDebugValue: Qu, useDeferredValue: function(e) {
  var t = Et();
  return we === null ? t.memoizedState = e : Gh(t, we.memoizedState, e);
}, useTransition: function() {
  var e = Oo(Vi)[0], t = Et().memoizedState;
  return [e, t];
}, useMutableSource: Rh, useSyncExternalStore: Ph, useId: Wh, unstable_isNewReconciler: !1 };
function At(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Il(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ba = { isMounted: function(e) {
  return (e = e._reactInternals) ? tr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), i = Cn(e), s = qt(r, i);
  s.payload = t, n != null && (s.callback = n), t = xn(e, s, i), t !== null && (Pt(t, e, i, r), Os(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = We(), i = Cn(e), s = qt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = xn(e, s, i), t !== null && (Pt(t, e, i, r), Os(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = We(), r = Cn(e), i = qt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = xn(e, i, r), t !== null && (Pt(t, e, r, n), Os(t, e, r));
} };
function qf(e, t, n, r, i, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !Fi(n, r) || !Fi(i, s) : !0;
}
function Yh(e, t, n) {
  var r = !1, i = Tn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = yt(s) : (i = Je(t) ? Qn : Be.current, r = t.contextTypes, s = (r = r != null) ? Fr(e, i) : Tn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ba, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Zf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ba.enqueueReplaceState(t, t.state, null);
}
function Nl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Hu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = yt(s) : (s = Je(t) ? Qn : Be.current, i.context = Fr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Il(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ba.enqueueReplaceState(i, i.state, null), sa(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lg(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var uy = typeof WeakMap == "function" ? WeakMap : Map;
function qh(e, t, n) {
  n = qt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ca || (ca = !0, Vl = r), bl(e, t);
  }, n;
}
function Zh(e, t, n) {
  n = qt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      bl(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    bl(e, t), typeof r != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Jf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uy();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ky.bind(null, e, t, n), t.then(e, e));
}
function ed(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function td(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, xn(n, t, 1))), n.lanes |= 1), e);
}
var cy = sn.ReactCurrentOwner, qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : Mr(t, e.child, n, r);
}
function nd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return br(t, i), r = zu(e, t, n, r, s, i), n = Gu(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tn(e, t, i)) : (fe && n && Pu(t), t.flags |= 1, Ue(e, t, r, i), t.child);
}
function rd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !tc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Jh(e, t, s, r, i)) : (e = Vs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fi, n(a, r) && e.ref === t.ref) return tn(e, t, i);
  }
  return t.flags |= 1, e = kn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Jh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Fi(s, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, tn(e, t, i);
  }
  return Rl(e, t, n, r, i);
}
function em(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(Cr, rt), rt |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(Cr, rt), rt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, se(Cr, rt), rt |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, se(Cr, rt), rt |= r;
  return Ue(e, t, i, n), t.child;
}
function tm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Rl(e, t, n, r, i) {
  var s = Je(n) ? Qn : Be.current;
  return s = Fr(t, s), br(t, i), n = zu(e, t, n, r, s, i), r = Gu(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tn(e, t, i)) : (fe && r && Pu(t), t.flags |= 1, Ue(e, t, n, i), t.child);
}
function id(e, t, n, r, i) {
  if (Je(n)) {
    var s = !0;
    ea(t);
  } else s = !1;
  if (br(t, i), t.stateNode === null) Ds(e, t), Yh(t, n, r), Nl(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yt(u) : (u = Je(n) ? Qn : Be.current, u = Fr(t, u));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || l !== u) && Zf(t, a, r, u), cn = !1;
    var d = t.memoizedState;
    a.state = d, sa(t, r, a, i), l = t.memoizedState, o !== r || d !== l || Ze.current || cn ? (typeof c == "function" && (Il(t, n, c, r), l = t.memoizedState), (o = cn || qf(t, n, o, r, d, l, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Nh(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : At(t.type, o), a.props = u, p = t.pendingProps, d = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yt(l) : (l = Je(n) ? Qn : Be.current, l = Fr(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== p || d !== l) && Zf(t, a, r, l), cn = !1, d = t.memoizedState, a.state = d, sa(t, r, a, i);
    var x = t.memoizedState;
    o !== p || d !== x || Ze.current || cn ? (typeof g == "function" && (Il(t, n, g, r), x = t.memoizedState), (u = cn || qf(t, n, u, r, d, x, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), a.props = r, a.state = x, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Pl(e, t, n, r, s, i);
}
function Pl(e, t, n, r, i, s) {
  tm(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && $f(t, n, !1), tn(e, t, s);
  r = t.stateNode, cy.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Mr(t, e.child, null, s), t.child = Mr(t, null, o, s)) : Ue(e, t, o, s), t.memoizedState = r.state, i && $f(t, n, !0), t.child;
}
function nm(e) {
  var t = e.stateNode;
  t.pendingContext ? Uf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uf(e, t.context, !1), Vu(e, t.containerInfo);
}
function sd(e, t, n, r, i) {
  return Or(), Ou(i), t.flags |= 256, Ue(e, t, n, r), t.child;
}
var Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rm(e, t, n) {
  var r = t.pendingProps, i = de.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), se(de, i & 1), e === null)
    return Tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Fa(a, r, 0, null), e = zn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ol(n), t.memoizedState = Fl, e) : Xu(t, a));
  if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return fy(e, t, a, r, o, i, n);
  if (s) {
    s = r.fallback, a = t.mode, i = e.child, o = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = kn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? s = kn(o, s) : (s = zn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? Ol(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = Fl, r;
  }
  return s = e.child, e = s.sibling, r = kn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xu(e, t) {
  return t = Fa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Es(e, t, n, r) {
  return r !== null && Ou(r), Mr(t, e.child, null, n), e = Xu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fy(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Mo(Error(N(422))), Es(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Fa({ mode: "visible", children: r.children }, i, 0, null), s = zn(s, i, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Mr(t, e.child, null, a), t.child.memoizedState = Ol(a), t.memoizedState = Fl, s);
  if (!(t.mode & 1)) return Es(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(N(419)), r = Mo(s, r, void 0), Es(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, qe || o) {
    if (r = Te, r !== null) {
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
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, en(e, i), Pt(r, e, i, -1));
    }
    return ec(), r = Mo(Error(N(421))), Es(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sy.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, st = En(i.nextSibling), ot = t, fe = !0, bt = null, e !== null && (ht[mt++] = Kt, ht[mt++] = Yt, ht[mt++] = Xn, Kt = e.id, Yt = e.overflow, Xn = t), t = Xu(t, r.children), t.flags |= 4096, t);
}
function ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Al(e.return, t, n);
}
function Lo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function im(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Ue(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
      else if (e.tag === 19) ad(e, n, t);
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
  if (se(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && aa(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Lo(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && aa(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Lo(t, !0, n, null, s);
      break;
    case "together":
      Lo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ds(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dy(e, t, n) {
  switch (t.tag) {
    case 3:
      nm(t), Or();
      break;
    case 5:
      bh(t);
      break;
    case 1:
      Je(t.type) && ea(t);
      break;
    case 4:
      Vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      se(ra, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (se(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? rm(e, t, n) : (se(de, de.current & 1), e = tn(e, t, n), e !== null ? e.sibling : null);
      se(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return im(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), se(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, em(e, t, n);
  }
  return tn(e, t, n);
}
var sm, Ml, am, om;
sm = function(e, t) {
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
Ml = function() {
};
am = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, jn(jt.current);
    var s = null;
    switch (n) {
      case "input":
        i = rl(e, i), r = rl(e, r), s = [];
        break;
      case "select":
        i = he({}, i, { value: void 0 }), r = he({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = al(e, i), r = al(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zs);
    }
    ll(n, r);
    var a;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var o = i[u];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ti.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== o && (l != null || o != null)) if (u === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in l) l.hasOwnProperty(a) && o[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, o = o ? o.__html : void 0, l != null && o !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ti.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", e), s || o === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
om = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function oi(e, t) {
  if (!fe) switch (e.tailMode) {
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
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function py(e, t, n) {
  var r = t.pendingProps;
  switch (Fu(t), t.tag) {
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
      return Oe(t), null;
    case 1:
      return Je(t.type) && Js(), Oe(t), null;
    case 3:
      return r = t.stateNode, Lr(), ce(Ze), ce(Be), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, bt !== null && ($l(bt), bt = null))), Ml(e, t), Oe(t), null;
    case 5:
      ju(t);
      var i = jn(Bi.current);
      if (n = t.type, e !== null && t.stateNode != null) am(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Oe(t), null;
        }
        if (e = jn(jt.current), gs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Bt] = t, r[Li] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pi.length; i++) le(pi[i], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le(
                "error",
                r
              ), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              mf(r, s), le("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, le("invalid", r);
              break;
            case "textarea":
              gf(r, s), le("invalid", r);
          }
          ll(n, s), i = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && vs(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && vs(
              r.textContent,
              o,
              e
            ), i = ["children", "" + o]) : Ti.hasOwnProperty(a) && o != null && a === "onScroll" && le("scroll", r);
          }
          switch (n) {
            case "input":
              ls(r), vf(r, s, !0);
              break;
            case "textarea":
              ls(r), yf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Zs);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Bt] = t, e[Li] = r, sm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = ul(n, r), n) {
              case "dialog":
                le("cancel", e), le("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < pi.length; i++) le(pi[i], e);
                i = r;
                break;
              case "source":
                le("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                le(
                  "error",
                  e
                ), le("load", e), i = r;
                break;
              case "details":
                le("toggle", e), i = r;
                break;
              case "input":
                mf(e, r), i = rl(e, r), le("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = he({}, r, { value: void 0 }), le("invalid", e);
                break;
              case "textarea":
                gf(e, r), i = al(e, r), le("invalid", e);
                break;
              default:
                i = r;
            }
            ll(n, i), o = i;
            for (s in o) if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "style" ? Bp(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Lp(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ai(e, l) : typeof l == "number" && Ai(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ti.hasOwnProperty(s) ? l != null && s === "onScroll" && le("scroll", e) : l != null && yu(e, s, l, a));
            }
            switch (n) {
              case "input":
                ls(e), vf(e, r, !1);
                break;
              case "textarea":
                ls(e), yf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Tr(e, !!r.multiple, s, !1) : r.defaultValue != null && Tr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zs);
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
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) om(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = jn(Bi.current), jn(jt.current), gs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Bt] = t, (s = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
            case 3:
              vs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && vs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Bt] = t, t.stateNode = r;
      }
      return Oe(t), null;
    case 13:
      if (ce(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && st !== null && t.mode & 1 && !(t.flags & 128)) _h(), Or(), t.flags |= 98560, s = !1;
        else if (s = gs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(N(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
            s[Bt] = t;
          } else Or(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Oe(t), s = !1;
        } else bt !== null && ($l(bt), bt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? Ce === 0 && (Ce = 3) : ec())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
    case 4:
      return Lr(), Ml(e, t), e === null && Oi(t.stateNode.containerInfo), Oe(t), null;
    case 10:
      return Du(t.type._context), Oe(t), null;
    case 17:
      return Je(t.type) && Js(), Oe(t), null;
    case 19:
      if (ce(de), s = t.memoizedState, s === null) return Oe(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) oi(s, !1);
      else {
        if (Ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = aa(e), a !== null) {
            for (t.flags |= 128, oi(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return se(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && ge() > Br && (t.flags |= 128, r = !0, oi(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = aa(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), oi(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !fe) return Oe(t), null;
        } else 2 * ge() - s.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128, r = !0, oi(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ge(), t.sibling = null, n = de.current, se(de, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
    case 22:
    case 23:
      return Ju(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function hy(e, t) {
  switch (Fu(t), t.tag) {
    case 1:
      return Je(t.type) && Js(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Lr(), ce(Ze), ce(Be), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ju(t), null;
    case 13:
      if (ce(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        Or();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ce(de), null;
    case 4:
      return Lr(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1, Me = !1, my = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function wr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var od = !1;
function vy(e, t) {
  if (El = Ks, e = dh(), Ru(e)) {
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
        var a = 0, o = -1, l = -1, u = 0, c = 0, p = e, d = null;
        t: for (; ; ) {
          for (var g; p !== n || i !== 0 && p.nodeType !== 3 || (o = a + i), p !== s || r !== 0 && p.nodeType !== 3 || (l = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (g = p.firstChild) !== null; )
            d = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (d === n && ++u === i && (o = a), d === s && ++c === r && (l = a), (g = p.nextSibling) !== null) break;
            p = d, d = p.parentNode;
          }
          p = g;
        }
        n = o === -1 || l === -1 ? null : { start: o, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xl = { focusedElem: e, selectionRange: n }, Ks = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var E = x.memoizedProps, k = x.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : At(t.type, E), k);
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
          throw Error(N(163));
      }
    } catch (w) {
      ve(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return x = od, od = !1, x;
}
function wi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Ll(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ra(e, t) {
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
function Dl(e) {
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
function lm(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, lm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[Li], delete t[kl], delete t[Z0], delete t[J0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function um(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ld(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || um(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zs));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), e = e.sibling;
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), e = e.sibling;
}
var be = null, It = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) cm(e, t, n), n = n.sibling;
}
function cm(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
    Vt.onCommitFiberUnmount(ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || wr(n, t);
    case 6:
      var r = be, i = It;
      be = null, ln(e, t, n), be = r, It = i, be !== null && (It ? (e = be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null && (It ? (e = be, n = n.stateNode, e.nodeType === 8 ? No(e.parentNode, n) : e.nodeType === 1 && No(e, n), Ri(e)) : No(be, n.stateNode));
      break;
    case 4:
      r = be, i = It, be = n.stateNode.containerInfo, It = !0, ln(e, t, n), be = r, It = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && Ll(n, t, a), i = i.next;
        } while (i !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (!Me && (wr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ve(n, t, o);
      }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, ln(e, t, n), Me = r) : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function ud(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new my()), t.forEach(function(r) {
      var i = _y.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            be = o.stateNode, It = !1;
            break e;
          case 3:
            be = o.stateNode.containerInfo, It = !0;
            break e;
          case 4:
            be = o.stateNode.containerInfo, It = !0;
            break e;
        }
        o = o.return;
      }
      if (be === null) throw Error(N(160));
      cm(s, a, i), be = null, It = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      ve(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fm(t, e), t = t.sibling;
}
function fm(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tt(t, e), Lt(e), r & 4) {
        try {
          wi(3, e, e.return), Ra(3, e);
        } catch (E) {
          ve(e, e.return, E);
        }
        try {
          wi(5, e, e.return);
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      break;
    case 1:
      Tt(t, e), Lt(e), r & 512 && n !== null && wr(n, n.return);
      break;
    case 5:
      if (Tt(t, e), Lt(e), r & 512 && n !== null && wr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Ai(i, "");
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          o === "input" && s.type === "radio" && s.name != null && Fp(i, s), ul(o, a);
          var u = ul(o, s);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], p = l[a + 1];
            c === "style" ? Bp(i, p) : c === "dangerouslySetInnerHTML" ? Lp(i, p) : c === "children" ? Ai(i, p) : yu(i, c, p, u);
          }
          switch (o) {
            case "input":
              il(i, s);
              break;
            case "textarea":
              Op(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Tr(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? Tr(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Tr(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Li] = s;
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Tt(t, e), Lt(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Tt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ri(t.containerInfo);
      } catch (E) {
        ve(e, e.return, E);
      }
      break;
    case 4:
      Tt(t, e), Lt(e);
      break;
    case 13:
      Tt(t, e), Lt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (qu = ge())), r & 4 && ud(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || c, Tt(t, e), Me = u) : Tt(t, e), Lt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (p = L = c; L !== null; ) {
            switch (d = L, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                wi(4, d, d.return);
                break;
              case 1:
                wr(d, d.return);
                var x = d.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (E) {
                    ve(r, n, E);
                  }
                }
                break;
              case 5:
                wr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  fd(p);
                  continue;
                }
            }
            g !== null ? (g.return = d, L = g) : fd(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                i = p.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = p.stateNode, l = p.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, o.style.display = Dp("display", a));
              } catch (E) {
                ve(e, e.return, E);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (E) {
              ve(e, e.return, E);
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
      Tt(t, e), Lt(e), r & 4 && ud(e);
      break;
    case 21:
      break;
    default:
      Tt(
        t,
        e
      ), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (um(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ai(i, ""), r.flags &= -33);
          var s = ld(e);
          Hl(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = ld(e);
          Bl(e, o, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gy(e, t, n) {
  L = e, dm(e);
}
function dm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L, s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || xs;
      if (!a) {
        var o = i.alternate, l = o !== null && o.memoizedState !== null || Me;
        o = xs;
        var u = Me;
        if (xs = a, (Me = l) && !u) for (L = i; L !== null; ) a = L, l = a.child, a.tag === 22 && a.memoizedState !== null ? dd(i) : l !== null ? (l.return = a, L = l) : dd(i);
        for (; s !== null; ) L = s, dm(s), s = s.sibling;
        L = i, xs = o, Me = u;
      }
      cd(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, L = s) : cd(e);
  }
}
function cd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Me || Ra(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Me) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Xf(t, s, r);
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
              Xf(t, a, n);
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
                  p !== null && Ri(p);
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
            throw Error(N(163));
        }
        Me || t.flags & 512 && Dl(t);
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function fd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function dd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ra(4, t);
          } catch (l) {
            ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ve(t, i, l);
            }
          }
          var s = t.return;
          try {
            Dl(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Dl(t);
          } catch (l) {
            ve(t, a, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, L = o;
      break;
    }
    L = t.return;
  }
}
var yy = Math.ceil, ua = sn.ReactCurrentDispatcher, Ku = sn.ReactCurrentOwner, gt = sn.ReactCurrentBatchConfig, Z = 0, Te = null, Ee = null, Re = 0, rt = 0, Cr = bn(0), Ce = 0, Ui = null, Yn = 0, Pa = 0, Yu = 0, Ci = null, Ye = null, qu = 0, Br = 1 / 0, Wt = null, ca = !1, Vl = null, wn = null, ws = !1, mn = null, fa = 0, ki = 0, jl = null, Bs = -1, Hs = 0;
function We() {
  return Z & 6 ? ge() : Bs !== -1 ? Bs : Bs = ge();
}
function Cn(e) {
  return e.mode & 1 ? Z & 2 && Re !== 0 ? Re & -Re : ty.transition !== null ? (Hs === 0 && (Hs = Yp()), Hs) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rh(e.type)), e) : 1;
}
function Pt(e, t, n, r) {
  if (50 < ki) throw ki = 0, jl = null, Error(N(185));
  Qi(e, n, r), (!(Z & 2) || e !== Te) && (e === Te && (!(Z & 2) && (Pa |= n), Ce === 4 && pn(e, Re)), et(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Br = ge() + 500, Ia && Rn()));
}
function et(e, t) {
  var n = e.callbackNode;
  t0(e, t);
  var r = Xs(e, e === Te ? Re : 0);
  if (r === 0) n !== null && wf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && wf(n), t === 1) e.tag === 0 ? ey(pd.bind(null, e)) : Ch(pd.bind(null, e)), Y0(function() {
      !(Z & 6) && Rn();
    }), n = null;
    else {
      switch (qp(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = Xp;
          break;
        case 16:
          n = Qs;
          break;
        case 536870912:
          n = Kp;
          break;
        default:
          n = Qs;
      }
      n = xm(n, pm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function pm(e, t) {
  if (Bs = -1, Hs = 0, Z & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (Rr() && e.callbackNode !== n) return null;
  var r = Xs(e, e === Te ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = da(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var s = mm();
    (Te !== e || Re !== t) && (Wt = null, Br = ge() + 500, $n(e, t));
    do
      try {
        wy();
        break;
      } catch (o) {
        hm(e, o);
      }
    while (!0);
    Lu(), ua.current = s, Z = i, Ee !== null ? t = 0 : (Te = null, Re = 0, t = Ce);
  }
  if (t !== 0) {
    if (t === 2 && (i = hl(e), i !== 0 && (r = i, t = Ul(e, i))), t === 1) throw n = Ui, $n(e, 0), pn(e, r), et(e, ge()), n;
    if (t === 6) pn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Ey(i) && (t = da(e, r), t === 2 && (s = hl(e), s !== 0 && (r = s, t = Ul(e, s))), t === 1)) throw n = Ui, $n(e, 0), pn(e, r), et(e, ge()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ln(e, Ye, Wt);
          break;
        case 3:
          if (pn(e, r), (r & 130023424) === r && (t = qu + 500 - ge(), 10 < t)) {
            if (Xs(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              We(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Cl(Ln.bind(null, e, Ye, Wt), t);
            break;
          }
          Ln(e, Ye, Wt);
          break;
        case 4:
          if (pn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Rt(r);
            s = 1 << a, a = t[a], a > i && (i = a), r &= ~s;
          }
          if (r = i, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cl(Ln.bind(null, e, Ye, Wt), r);
            break;
          }
          Ln(e, Ye, Wt);
          break;
        case 5:
          Ln(e, Ye, Wt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return et(e, ge()), e.callbackNode === n ? pm.bind(null, e) : null;
}
function Ul(e, t) {
  var n = Ci;
  return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = da(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && $l(t)), e;
}
function $l(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Ey(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Ft(s(), i)) return !1;
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
function pn(e, t) {
  for (t &= ~Yu, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Rt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pd(e) {
  if (Z & 6) throw Error(N(327));
  Rr();
  var t = Xs(e, 0);
  if (!(t & 1)) return et(e, ge()), null;
  var n = da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hl(e);
    r !== 0 && (t = r, n = Ul(e, r));
  }
  if (n === 1) throw n = Ui, $n(e, 0), pn(e, t), et(e, ge()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ln(e, Ye, Wt), et(e, ge()), null;
}
function Zu(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (Br = ge() + 500, Ia && Rn());
  }
}
function qn(e) {
  mn !== null && mn.tag === 0 && !(Z & 6) && Rr();
  var t = Z;
  Z |= 1;
  var n = gt.transition, r = te;
  try {
    if (gt.transition = null, te = 1, e) return e();
  } finally {
    te = r, gt.transition = n, Z = t, !(Z & 6) && Rn();
  }
}
function Ju() {
  rt = Cr.current, ce(Cr);
}
function $n(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, K0(n)), Ee !== null) for (n = Ee.return; n !== null; ) {
    var r = n;
    switch (Fu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Js();
        break;
      case 3:
        Lr(), ce(Ze), ce(Be), Uu();
        break;
      case 5:
        ju(r);
        break;
      case 4:
        Lr();
        break;
      case 13:
        ce(de);
        break;
      case 19:
        ce(de);
        break;
      case 10:
        Du(r.type._context);
        break;
      case 22:
      case 23:
        Ju();
    }
    n = n.return;
  }
  if (Te = e, Ee = e = kn(e.current, null), Re = rt = t, Ce = 0, Ui = null, Yu = Pa = Yn = 0, Ye = Ci = null, Vn !== null) {
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
function hm(e, t) {
  do {
    var n = Ee;
    try {
      if (Lu(), Ms.current = la, oa) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        oa = !1;
      }
      if (Kn = 0, _e = we = pe = null, xi = !1, Hi = 0, Ku.current = null, n === null || n.return === null) {
        Ce = 1, Ui = t, Ee = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, l = t;
        if (t = Re, o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = o, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = ed(a);
          if (g !== null) {
            g.flags &= -257, td(g, a, o, s, t), g.mode & 1 && Jf(s, u, t), t = g, l = u;
            var x = t.updateQueue;
            if (x === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(l), t.updateQueue = E;
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Jf(s, u, t), ec();
              break e;
            }
            l = Error(N(426));
          }
        } else if (fe && o.mode & 1) {
          var k = ed(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), td(k, a, o, s, t), Ou(Dr(l, o));
            break e;
          }
        }
        s = l = Dr(l, o), Ce !== 4 && (Ce = 2), Ci === null ? Ci = [s] : Ci.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = qh(s, l, t);
              Qf(s, m);
              break e;
            case 1:
              o = l;
              var h = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (wn === null || !wn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Zh(s, o, t);
                Qf(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      gm(n);
    } catch (_) {
      t = _, Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mm() {
  var e = ua.current;
  return ua.current = la, e === null ? la : e;
}
function ec() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Te === null || !(Yn & 268435455) && !(Pa & 268435455) || pn(Te, Re);
}
function da(e, t) {
  var n = Z;
  Z |= 2;
  var r = mm();
  (Te !== e || Re !== t) && (Wt = null, $n(e, t));
  do
    try {
      xy();
      break;
    } catch (i) {
      hm(e, i);
    }
  while (!0);
  if (Lu(), Z = n, ua.current = r, Ee !== null) throw Error(N(261));
  return Te = null, Re = 0, Ce;
}
function xy() {
  for (; Ee !== null; ) vm(Ee);
}
function wy() {
  for (; Ee !== null && !Wg(); ) vm(Ee);
}
function vm(e) {
  var t = Em(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? gm(e) : Ee = t, Ku.current = null;
}
function gm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hy(n, t), n !== null) {
        n.flags &= 32767, Ee = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ce = 6, Ee = null;
        return;
      }
    } else if (n = py(n, t, rt), n !== null) {
      Ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Ln(e, t, n) {
  var r = te, i = gt.transition;
  try {
    gt.transition = null, te = 1, Cy(e, t, n, r);
  } finally {
    gt.transition = i, te = r;
  }
  return null;
}
function Cy(e, t, n, r) {
  do
    Rr();
  while (mn !== null);
  if (Z & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (n0(e, s), e === Te && (Ee = Te = null, Re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ws || (ws = !0, xm(Qs, function() {
    return Rr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = gt.transition, gt.transition = null;
    var a = te;
    te = 1;
    var o = Z;
    Z |= 4, Ku.current = null, vy(e, n), fm(n, e), U0(xl), Ks = !!El, xl = El = null, e.current = n, gy(n), Qg(), Z = o, te = a, gt.transition = s;
  } else e.current = n;
  if (ws && (ws = !1, mn = e, fa = i), s = e.pendingLanes, s === 0 && (wn = null), Yg(n.stateNode), et(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ca) throw ca = !1, e = Vl, Vl = null, e;
  return fa & 1 && e.tag !== 0 && Rr(), s = e.pendingLanes, s & 1 ? e === jl ? ki++ : (ki = 0, jl = e) : ki = 0, Rn(), null;
}
function Rr() {
  if (mn !== null) {
    var e = qp(fa), t = gt.transition, n = te;
    try {
      if (gt.transition = null, te = 16 > e ? 16 : e, mn === null) var r = !1;
      else {
        if (e = mn, mn = null, fa = 0, Z & 6) throw Error(N(331));
        var i = Z;
        for (Z |= 4, L = e.current; L !== null; ) {
          var s = L, a = s.child;
          if (L.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, L = p;
                  else for (; L !== null; ) {
                    c = L;
                    var d = c.sibling, g = c.return;
                    if (lm(c), c === u) {
                      L = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, L = d;
                      break;
                    }
                    L = g;
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
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, L = a;
          else e: for (; L !== null; ) {
            if (s = L, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                wi(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, L = m;
              break e;
            }
            L = s.return;
          }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          a = L;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) y.return = a, L = y;
          else e: for (a = h; L !== null; ) {
            if (o = L, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ra(9, o);
              }
            } catch (_) {
              ve(o, o.return, _);
            }
            if (o === a) {
              L = null;
              break e;
            }
            var w = o.sibling;
            if (w !== null) {
              w.return = o.return, L = w;
              break e;
            }
            L = o.return;
          }
        }
        if (Z = i, Rn(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
          Vt.onPostCommitFiberRoot(ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      te = n, gt.transition = t;
    }
  }
  return !1;
}
function hd(e, t, n) {
  t = Dr(n, t), t = qh(e, t, 1), e = xn(e, t, 1), t = We(), e !== null && (Qi(e, 1, t), et(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) hd(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hd(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r))) {
        e = Dr(n, e), e = Zh(t, e, 1), t = xn(t, e, 1), e = We(), t !== null && (Qi(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ky(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (Re & n) === n && (Ce === 4 || Ce === 3 && (Re & 130023424) === Re && 500 > ge() - qu ? $n(e, 0) : Yu |= n), et(e, t);
}
function ym(e, t) {
  t === 0 && (e.mode & 1 ? (t = fs, fs <<= 1, !(fs & 130023424) && (fs = 4194304)) : t = 1);
  var n = We();
  e = en(e, t), e !== null && (Qi(e, t, n), et(e, n));
}
function Sy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ym(e, n);
}
function _y(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), ym(e, n);
}
var Em;
Em = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, dy(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, fe && t.flags & 1048576 && kh(t, na, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ds(e, t), e = t.pendingProps;
      var i = Fr(t, Be.current);
      br(t, n), i = zu(null, t, r, e, i, n);
      var s = Gu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (s = !0, ea(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Hu(t), i.updater = ba, t.stateNode = i, i._reactInternals = t, Nl(t, r, e, n), t = Pl(null, t, r, !0, s, n)) : (t.tag = 0, fe && s && Pu(t), Ue(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ds(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Ay(r), e = At(r, e), i) {
          case 0:
            t = Rl(null, t, r, e, n);
            break e;
          case 1:
            t = id(null, t, r, e, n);
            break e;
          case 11:
            t = nd(null, t, r, e, n);
            break e;
          case 14:
            t = rd(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : At(r, i), Rl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : At(r, i), id(e, t, r, i, n);
    case 3:
      e: {
        if (nm(t), e === null) throw Error(N(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, Nh(e, t), sa(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Dr(Error(N(423)), t), t = sd(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Dr(Error(N(424)), t), t = sd(e, t, r, n, i);
          break e;
        } else for (st = En(t.stateNode.containerInfo.firstChild), ot = t, fe = !0, bt = null, n = Ah(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Or(), r === i) {
            t = tn(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bh(t), e === null && Tl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, wl(r, i) ? a = null : s !== null && wl(r, s) && (t.flags |= 32), tm(e, t), Ue(e, t, a, n), t.child;
    case 6:
      return e === null && Tl(t), null;
    case 13:
      return rm(e, t, n);
    case 4:
      return Vu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Mr(t, null, r, n) : Ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : At(r, i), nd(e, t, r, i, n);
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value, se(ra, r._currentValue), r._currentValue = a, s !== null) if (Ft(s.value, a)) {
          if (s.children === i.children && !Ze.current) {
            t = tn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var l = o.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = qt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Al(
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
            if (a = s.return, a === null) throw Error(N(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), Al(a, n, t), a = s.sibling;
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
        Ue(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, br(t, n), i = yt(i), r = r(i), t.flags |= 1, Ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = At(r, t.pendingProps), i = At(r.type, i), rd(e, t, r, i, n);
    case 15:
      return Jh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : At(r, i), Ds(e, t), t.tag = 1, Je(r) ? (e = !0, ea(t)) : e = !1, br(t, n), Yh(t, r, i), Nl(t, r, i, n), Pl(null, t, r, !0, e, n);
    case 19:
      return im(e, t, n);
    case 22:
      return em(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function xm(e, t) {
  return Qp(e, t);
}
function Ty(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function vt(e, t, n, r) {
  return new Ty(e, t, n, r);
}
function tc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ay(e) {
  if (typeof e == "function") return tc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xu) return 11;
    if (e === wu) return 14;
  }
  return 2;
}
function kn(e, t) {
  var n = e.alternate;
  return n === null ? (n = vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vs(e, t, n, r, i, s) {
  var a = 2;
  if (r = e, typeof e == "function") tc(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case dr:
      return zn(n.children, i, s, t);
    case Eu:
      a = 8, i |= 8;
      break;
    case Jo:
      return e = vt(12, n, t, i | 2), e.elementType = Jo, e.lanes = s, e;
    case el:
      return e = vt(13, n, t, i), e.elementType = el, e.lanes = s, e;
    case tl:
      return e = vt(19, n, t, i), e.elementType = tl, e.lanes = s, e;
    case bp:
      return Fa(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ip:
          a = 10;
          break e;
        case Np:
          a = 9;
          break e;
        case xu:
          a = 11;
          break e;
        case wu:
          a = 14;
          break e;
        case un:
          a = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = vt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function zn(e, t, n, r) {
  return e = vt(7, e, r, t), e.lanes = n, e;
}
function Fa(e, t, n, r) {
  return e = vt(22, e, r, t), e.elementType = bp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Do(e, t, n) {
  return e = vt(6, e, null, t), e.lanes = n, e;
}
function Bo(e, t, n) {
  return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Iy(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yo(0), this.expirationTimes = yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function nc(e, t, n, r, i, s, a, o, l) {
  return e = new Iy(e, t, n, o, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = vt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hu(s), e;
}
function Ny(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wm(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (tr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return wh(e, n, t);
  }
  return t;
}
function Cm(e, t, n, r, i, s, a, o, l) {
  return e = nc(n, r, !0, e, i, s, a, o, l), e.context = wm(null), n = e.current, r = We(), i = Cn(n), s = qt(r, i), s.callback = t ?? null, xn(n, s, i), e.current.lanes = i, Qi(e, i, r), et(e, r), e;
}
function Oa(e, t, n, r) {
  var i = t.current, s = We(), a = Cn(i);
  return n = wm(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xn(i, t, a), e !== null && (Pt(e, i, a, s), Os(e, i, a)), a;
}
function pa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function md(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rc(e, t) {
  md(e, t), (e = e.alternate) && md(e, t);
}
function by() {
  return null;
}
var km = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ic(e) {
  this._internalRoot = e;
}
Ma.prototype.render = ic.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Oa(e, t, null, null);
};
Ma.prototype.unmount = ic.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qn(function() {
      Oa(null, e, null, null);
    }), t[Jt] = null;
  }
};
function Ma(e) {
  this._internalRoot = e;
}
Ma.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = eh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++) ;
    dn.splice(n, 0, e), n === 0 && nh(e);
  }
};
function sc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function La(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function vd() {
}
function Ry(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = pa(a);
        s.call(u);
      };
    }
    var a = Cm(t, r, e, 0, null, !1, !1, "", vd);
    return e._reactRootContainer = a, e[Jt] = a.current, Oi(e.nodeType === 8 ? e.parentNode : e), qn(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var u = pa(l);
      o.call(u);
    };
  }
  var l = nc(e, 0, !1, null, null, !1, !1, "", vd);
  return e._reactRootContainer = l, e[Jt] = l.current, Oi(e.nodeType === 8 ? e.parentNode : e), qn(function() {
    Oa(t, l, n, r);
  }), l;
}
function Da(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function() {
        var l = pa(a);
        o.call(l);
      };
    }
    Oa(t, a, e, i);
  } else a = Ry(n, t, e, i, r);
  return pa(a);
}
Zp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = di(t.pendingLanes);
        n !== 0 && (Su(t, n | 1), et(t, ge()), !(Z & 6) && (Br = ge() + 500, Rn()));
      }
      break;
    case 13:
      qn(function() {
        var r = en(e, 1);
        if (r !== null) {
          var i = We();
          Pt(r, e, 1, i);
        }
      }), rc(e, 1);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = We();
      Pt(t, e, 134217728, n);
    }
    rc(e, 134217728);
  }
};
Jp = function(e) {
  if (e.tag === 13) {
    var t = Cn(e), n = en(e, t);
    if (n !== null) {
      var r = We();
      Pt(n, e, t, r);
    }
    rc(e, t);
  }
};
eh = function() {
  return te;
};
th = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
fl = function(e, t, n) {
  switch (t) {
    case "input":
      if (il(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Aa(r);
            if (!i) throw Error(N(90));
            Pp(r), il(r, i);
          }
        }
      }
      break;
    case "textarea":
      Op(e, n);
      break;
    case "select":
      t = n.value, t != null && Tr(e, !!n.multiple, t, !1);
  }
};
jp = Zu;
Up = qn;
var Py = { usingClientEntryPoint: !1, Events: [Ki, vr, Aa, Hp, Vp, Zu] }, li = { findFiberByHostInstance: Hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fy = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: sn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: li.findFiberByHostInstance || by, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cs.isDisabled && Cs.supportsFiber) try {
    ka = Cs.inject(Fy), Vt = Cs;
  } catch {
  }
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
ft.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sc(t)) throw Error(N(200));
  return Ny(e, t, null, n);
};
ft.createRoot = function(e, t) {
  if (!sc(e)) throw Error(N(299));
  var n = !1, r = "", i = km;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = nc(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Oi(e.nodeType === 8 ? e.parentNode : e), new ic(t);
};
ft.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Gp(t), e = e === null ? null : e.stateNode, e;
};
ft.flushSync = function(e) {
  return qn(e);
};
ft.hydrate = function(e, t, n) {
  if (!La(t)) throw Error(N(200));
  return Da(null, e, t, !0, n);
};
ft.hydrateRoot = function(e, t, n) {
  if (!sc(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", a = km;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Cm(t, null, e, 1, n ?? null, i, !1, s, a), e[Jt] = t.current, Oi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Ma(t);
};
ft.render = function(e, t, n) {
  if (!La(t)) throw Error(N(200));
  return Da(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function(e) {
  if (!La(e)) throw Error(N(40));
  return e._reactRootContainer ? (qn(function() {
    Da(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Jt] = null;
    });
  }), !0) : !1;
};
ft.unstable_batchedUpdates = Zu;
ft.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!La(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Da(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function Sm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm);
    } catch (e) {
      console.error(e);
    }
}
Sm(), Sp.exports = ft;
var _m = Sp.exports;
const kr = /* @__PURE__ */ Qr(_m);
var Tm, gd = _m;
Tm = gd.createRoot, gd.hydrateRoot;
var zl = function(e, t) {
  return zl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, zl(e, t);
};
function Ct(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  zl(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var V = function() {
  return V = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Hr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ge(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function $e(e, t) {
  var n = t && t.cache ? t.cache : Hy, r = t && t.serializer ? t.serializer : By, i = t && t.strategy ? t.strategy : Ly;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Oy(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function My(e, t, n, r) {
  var i = Oy(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function Am(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function Im(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Ly(e, t) {
  var n = e.length === 1 ? My : Am;
  return Im(e, this, n, t.cache.create(), t.serializer);
}
function Dy(e, t) {
  return Im(e, this, Am, t.cache.create(), t.serializer);
}
var By = function() {
  return JSON.stringify(arguments);
};
function ac() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ac.prototype.get = function(e) {
  return this.cache[e];
};
ac.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Hy = {
  create: function() {
    return new ac();
  }
}, ze = {
  variadic: Dy
};
function Nm(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
$e(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: ze.variadic
});
$e(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: ze.variadic
});
$e(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: ze.variadic
});
$e(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: ze.variadic
});
$e(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ge([void 0], t, !1)))();
}, {
  strategy: ze.variadic
});
var Y;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Y || (Y = {}));
var ue;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ue || (ue = {}));
var Vr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Vr || (Vr = {}));
function yd(e) {
  return e.type === ue.literal;
}
function Vy(e) {
  return e.type === ue.argument;
}
function bm(e) {
  return e.type === ue.number;
}
function Rm(e) {
  return e.type === ue.date;
}
function Pm(e) {
  return e.type === ue.time;
}
function Fm(e) {
  return e.type === ue.select;
}
function Om(e) {
  return e.type === ue.plural;
}
function jy(e) {
  return e.type === ue.pound;
}
function Mm(e) {
  return e.type === ue.tag;
}
function Lm(e) {
  return !!(e && typeof e == "object" && e.type === Vr.number);
}
function Gl(e) {
  return !!(e && typeof e == "object" && e.type === Vr.dateTime);
}
var Dm = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Uy = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $y(e) {
  var t = {};
  return e.replace(Uy, function(n) {
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
var zy = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Gy(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(zy).filter(function(d) {
    return d.length > 0;
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
function Wy(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ed = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Bm = /^(@+)?(\+|#+)?[rs]?$/g, Qy = /(\*)(0+)|(#+)(0+)|(0+)/g, Hm = /^(0+)$/;
function xd(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Bm, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Vm(e) {
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
function Xy(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Hm.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function wd(e) {
  var t = {}, n = Vm(e);
  return n || t;
}
function Ky(e) {
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
        t.style = "unit", t.unit = Wy(i.options[0]);
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
        t = V(V(V({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return V(V({}, l), wd(u));
        }, {}));
        continue;
      case "engineering":
        t = V(V(V({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return V(V({}, l), wd(u));
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
        i.options[0].replace(Qy, function(l, u, c, p, d, g) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (p && d)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Hm.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ed.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ed, function(l, u, c, p, d, g) {
        return c === "*" ? t.minimumFractionDigits = u.length : p && p[0] === "#" ? t.maximumFractionDigits = p.length : d && g ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + g.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = V(V({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = V(V({}, t), xd(s)));
      continue;
    }
    if (Bm.test(i.stem)) {
      t = V(V({}, t), xd(i.stem));
      continue;
    }
    var a = Vm(i.stem);
    a && (t = V(V({}, t), a));
    var o = Xy(i.stem);
    o && (t = V(V({}, t), o));
  }
  return t;
}
var ks = {
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
function Yy(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var a = 1 + (s & 1), o = s < 2 ? 1 : 3 + (s >> 1), l = "a", u = qy(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += l;
      for (; a-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function qy(e) {
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
  var i = ks[r || ""] || ks[n || ""] || ks["".concat(n, "-001")] || ks["001"];
  return i[0];
}
var Ho, Zy = new RegExp("^".concat(Dm.source, "*")), Jy = new RegExp("".concat(Dm.source, "*$"));
function q(e, t) {
  return { start: e, end: t };
}
var eE = !!String.prototype.startsWith && "_a".startsWith("a", 1), tE = !!String.fromCodePoint, nE = !!Object.fromEntries, rE = !!String.prototype.codePointAt, iE = !!String.prototype.trimStart, sE = !!String.prototype.trimEnd, aE = !!Number.isSafeInteger, oE = aE ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Wl = !0;
try {
  var lE = Um("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Wl = ((Ho = lE.exec("a")) === null || Ho === void 0 ? void 0 : Ho[0]) === "a";
} catch {
  Wl = !1;
}
var Cd = eE ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ql = tE ? String.fromCodePoint : (
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
), kd = (
  // native
  nE ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], a = s[0], o = s[1];
        n[a] = o;
      }
      return n;
    }
  )
), jm = rE ? (
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
), uE = iE ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Zy, "");
  }
), cE = sE ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Jy, "");
  }
);
function Um(e, t) {
  return new RegExp(e, t);
}
var Xl;
if (Wl) {
  var Sd = Um("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Xl = function(t, n) {
    var r;
    Sd.lastIndex = n;
    var i = Sd.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Xl = function(t, n) {
    for (var r = []; ; ) {
      var i = jm(t, n);
      if (i === void 0 || $m(i) || hE(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ql.apply(void 0, r);
  };
var fE = (
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
              type: ue.pound,
              location: q(o, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Y.UNMATCHED_CLOSING_TAG, q(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Kl(this.peek() || 0)) {
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
            type: ue.literal,
            value: "<".concat(i, "/>"),
            location: q(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var a = s.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Kl(this.char()))
            return this.error(Y.INVALID_TAG, q(o, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Y.UNMATCHED_CLOSING_TAG, q(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ue.tag,
              value: i,
              children: a,
              location: q(r, this.clonePosition())
            },
            err: null
          } : this.error(Y.INVALID_TAG, q(o, this.clonePosition())));
        } else
          return this.error(Y.UNCLOSED_TAG, q(r, this.clonePosition()));
      } else
        return this.error(Y.INVALID_TAG, q(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && pE(this.char()); )
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
      var l = q(r, this.clonePosition());
      return {
        val: { type: ue.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !dE(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ql.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ql(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, q(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Y.EMPTY_ARGUMENT, q(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Y.MALFORMED_ARGUMENT, q(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, q(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ue.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: q(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, q(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Y.MALFORMED_ARGUMENT, q(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Xl(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), a = q(t, s);
      return { value: r, location: a };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, a = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Y.EXPECT_ARGUMENT_TYPE, q(a, l));
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
            var d = cE(p.val);
            if (d.length === 0)
              return this.error(Y.EXPECT_ARGUMENT_STYLE, q(this.clonePosition(), this.clonePosition()));
            var g = q(c, this.clonePosition());
            u = { style: d, styleLocation: g };
          }
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var E = q(i, this.clonePosition());
          if (u && Cd(u == null ? void 0 : u.style, "::", 0)) {
            var k = uE(u.style.slice(2));
            if (o === "number") {
              var p = this.parseNumberSkeletonFromString(k, u.styleLocation);
              return p.err ? p : {
                val: { type: ue.number, value: r, location: E, style: p.val },
                err: null
              };
            } else {
              if (k.length === 0)
                return this.error(Y.EXPECT_DATE_TIME_SKELETON, E);
              var m = k;
              this.locale && (m = Yy(k, this.locale));
              var d = {
                type: Vr.dateTime,
                pattern: m,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $y(m) : {}
              }, h = o === "date" ? ue.date : ue.time;
              return {
                val: { type: h, value: r, location: E, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? ue.number : o === "date" ? ue.date : ue.time,
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
          var y = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, q(y, V({}, y)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), _ = 0;
          if (o !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, q(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var p = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (p.err)
              return p;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), _ = p.val;
          }
          var T = this.tryParsePluralOrSelectOptions(t, o, n, w);
          if (T.err)
            return T;
          var x = this.tryParseArgumentClose(i);
          if (x.err)
            return x;
          var A = q(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: ue.select,
              value: r,
              options: kd(T.val),
              location: A
            },
            err: null
          } : {
            val: {
              type: ue.plural,
              value: r,
              options: kd(T.val),
              offset: _,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: A
            },
            err: null
          };
        }
        default:
          return this.error(Y.INVALID_ARGUMENT_TYPE, q(a, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, q(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, q(i, this.clonePosition()));
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
        r = Gy(t);
      } catch {
        return this.error(Y.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Vr.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ky(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, a = !1, o = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var p = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, Y.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = q(p, this.clonePosition()), u = this.message.slice(p.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (a = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, q(this.clonePosition(), this.clonePosition()));
        var x = this.parseMessage(t + 1, n, r);
        if (x.err)
          return x;
        var E = this.tryParseArgumentClose(g);
        if (E.err)
          return E;
        o.push([
          u,
          {
            value: x.val,
            location: q(g, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, c = s.location;
      }
      return o.length === 0 ? this.error(n === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, q(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Y.MISSING_OTHER_CLAUSE, q(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
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
      var l = q(i, this.clonePosition());
      return s ? (a *= r, oE(a) ? { val: a, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = jm(this.message, t);
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
      if (Cd(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && $m(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Kl(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function dE(e) {
  return Kl(e) || e === 47;
}
function pE(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function $m(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function hE(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Yl(e) {
  e.forEach(function(t) {
    if (delete t.location, Fm(t) || Om(t))
      for (var n in t.options)
        delete t.options[n].location, Yl(t.options[n].value);
    else bm(t) && Lm(t.style) || (Rm(t) || Pm(t)) && Gl(t.style) ? delete t.style.location : Mm(t) && Yl(t.children);
  });
}
function mE(e, t) {
  t === void 0 && (t = {}), t = V({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new fE(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Y[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Yl(n.val), n.val;
}
var zt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(zt || (zt = {}));
var Pn = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), _d = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), zt.INVALID_VALUE, s) || this;
    }
    return t;
  }(Pn)
), vE = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), zt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Pn)
), gE = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), zt.MISSING_VALUE, r) || this;
    }
    return t;
  }(Pn)
), Ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ve || (Ve = {}));
function yE(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ve.literal || n.type !== Ve.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function zm(e) {
  return typeof e == "function";
}
function js(e, t, n, r, i, s, a) {
  if (e.length === 1 && yd(e[0]))
    return [
      {
        type: Ve.literal,
        value: e[0].value
      }
    ];
  for (var o = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (yd(c)) {
      o.push({
        type: Ve.literal,
        value: c.value
      });
      continue;
    }
    if (jy(c)) {
      typeof s == "number" && o.push({
        type: Ve.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var p = c.value;
    if (!(i && p in i))
      throw new gE(p, a);
    var d = i[p];
    if (Vy(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), o.push({
        type: typeof d == "string" ? Ve.literal : Ve.object,
        value: d
      });
      continue;
    }
    if (Rm(c)) {
      var g = typeof c.style == "string" ? r.date[c.style] : Gl(c.style) ? c.style.parsedOptions : void 0;
      o.push({
        type: Ve.literal,
        value: n.getDateTimeFormat(t, g).format(d)
      });
      continue;
    }
    if (Pm(c)) {
      var g = typeof c.style == "string" ? r.time[c.style] : Gl(c.style) ? c.style.parsedOptions : r.time.medium;
      o.push({
        type: Ve.literal,
        value: n.getDateTimeFormat(t, g).format(d)
      });
      continue;
    }
    if (bm(c)) {
      var g = typeof c.style == "string" ? r.number[c.style] : Lm(c.style) ? c.style.parsedOptions : void 0;
      g && g.scale && (d = d * (g.scale || 1)), o.push({
        type: Ve.literal,
        value: n.getNumberFormat(t, g).format(d)
      });
      continue;
    }
    if (Mm(c)) {
      var x = c.children, E = c.value, k = i[E];
      if (!zm(k))
        throw new vE(E, "function", a);
      var m = js(x, t, n, r, i, s), h = k(m.map(function(_) {
        return _.value;
      }));
      Array.isArray(h) || (h = [h]), o.push.apply(o, h.map(function(_) {
        return {
          type: typeof _ == "string" ? Ve.literal : Ve.object,
          value: _
        };
      }));
    }
    if (Fm(c)) {
      var y = c.options[d] || c.options.other;
      if (!y)
        throw new _d(c.value, d, Object.keys(c.options), a);
      o.push.apply(o, js(y.value, t, n, r, i));
      continue;
    }
    if (Om(c)) {
      var y = c.options["=".concat(d)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new Pn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, zt.MISSING_INTL_API, a);
        var w = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        y = c.options[w] || c.options.other;
      }
      if (!y)
        throw new _d(c.value, d, Object.keys(c.options), a);
      o.push.apply(o, js(y.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return yE(o);
}
function EE(e, t) {
  return t ? V(V(V({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = V(V({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function xE(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = EE(e[r], t[r]), n;
  }, V({}, e)) : e;
}
function Vo(e) {
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
function wE(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: $e(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: Vo(e.number),
      strategy: ze.variadic
    }),
    getDateTimeFormat: $e(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: Vo(e.dateTime),
      strategy: ze.variadic
    }),
    getPluralRules: $e(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ge([void 0], n, !1)))();
    }, {
      cache: Vo(e.pluralRules),
      strategy: ze.variadic
    })
  };
}
var Gm = (
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
        var c = u.reduce(function(p, d) {
          return !p.length || d.type !== Ve.literal || typeof p[p.length - 1] != "string" ? p.push(d.value) : p[p.length - 1] += d.value, p;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return js(s.ast, s.locales, s.formatters, s.formats, l, void 0, s.message);
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
        var o = Hr(a, ["formatters"]);
        this.ast = e.__parse(t, V(V({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = xE(e.formats, r), this.formatters = i && i.formatters || wE(this.formatterCache);
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
    }, e.__parse = mE, e.formats = {
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
), Zn;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Zn || (Zn = {}));
var qi = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i) {
      var s = this, a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return s = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(a ? `
`.concat(a.message, `
`).concat(a.stack) : "")) || this, s.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(s, t), s;
    }
    return t;
  }(Error)
), CE = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r) {
      return e.call(this, Zn.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(qi)
), kE = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r) {
      return e.call(this, Zn.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(qi)
), Td = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r) {
      return e.call(this, Zn.MISSING_DATA, n, r) || this;
    }
    return t;
  }(qi)
), kt = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i) {
      var s = e.call(this, Zn.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return s.locale = r, s;
    }
    return t;
  }(qi)
), jo = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r, i, s) {
      var a = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, s) || this;
      return a.descriptor = i, a.locale = r, a;
    }
    return t;
  }(kt)
), SE = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t(n, r) {
      var i = e.call(this, Zn.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(s) {
        var a;
        return (a = s.value) !== null && a !== void 0 ? a : JSON.stringify(s);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(qi)
);
function nr(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var _E = function(e) {
}, TE = function(e) {
}, Wm = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: _E,
  onWarn: TE
};
function Qm() {
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
function On(e) {
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
function AE(e) {
  e === void 0 && (e = Qm());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = $e(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.DateTimeFormat).bind.apply(o, Ge([void 0], l, !1)))();
  }, {
    cache: On(e.dateTime),
    strategy: ze.variadic
  }), s = $e(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.NumberFormat).bind.apply(o, Ge([void 0], l, !1)))();
  }, {
    cache: On(e.number),
    strategy: ze.variadic
  }), a = $e(function() {
    for (var o, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((o = Intl.PluralRules).bind.apply(o, Ge([void 0], l, !1)))();
  }, {
    cache: On(e.pluralRules),
    strategy: ze.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: s,
    getMessageFormat: $e(function(o, l, u, c) {
      return new Gm(o, l, u, V({ formatters: {
        getNumberFormat: s,
        getDateTimeFormat: i,
        getPluralRules: a
      } }, c || {}));
    }, {
      cache: On(e.message),
      strategy: ze.variadic
    }),
    getRelativeTimeFormat: $e(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (t.bind.apply(t, Ge([void 0], o, !1)))();
    }, {
      cache: On(e.relativeTime),
      strategy: ze.variadic
    }),
    getPluralRules: a,
    getListFormat: $e(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (n.bind.apply(n, Ge([void 0], o, !1)))();
    }, {
      cache: On(e.list),
      strategy: ze.variadic
    }),
    getDisplayNames: $e(function() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l];
      return new (r.bind.apply(r, Ge([void 0], o, !1)))();
    }, {
      cache: On(e.displayNames),
      strategy: ze.variadic
    })
  };
}
function oc(e, t, n, r) {
  var i = e && e[t], s;
  if (i && (s = i[n]), s)
    return s;
  r(new CE("No ".concat(t, " format named: ").concat(n)));
}
function Ss(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = V({ timeZone: t }, e[r]), n;
  }, {});
}
function Ad(e, t) {
  var n = Object.keys(V(V({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = V(V({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Id(e, t) {
  if (!t)
    return e;
  var n = Gm.formats;
  return V(V(V({}, n), e), { date: Ad(Ss(n.date, t), Ss(e.date || {}, t)), time: Ad(Ss(n.time, t), Ss(e.time || {}, t)) });
}
var ql = function(e, t, n, r, i) {
  var s = e.locale, a = e.formats, o = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, p = e.onError, d = e.timeZone, g = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var x = n.id, E = n.defaultMessage;
  Nm(!!x, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var k = String(x), m = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    o && Object.prototype.hasOwnProperty.call(o, k) && o[k]
  );
  if (Array.isArray(m) && m.length === 1 && m[0].type === ue.literal)
    return m[0].value;
  if (!r && m && typeof m == "string" && !g)
    return m.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = V(V({}, g), r || {}), a = Id(a, d), u = Id(u, d), !m) {
    if (c === !1 && m === "")
      return m;
    if ((!E || s && s.toLowerCase() !== l.toLowerCase()) && p(new SE(n, s)), E)
      try {
        var h = t.getMessageFormat(E, l, u, i);
        return h.format(r);
      } catch (y) {
        return p(new jo('Error formatting default message for: "'.concat(k, '", rendering default message verbatim'), s, n, y)), typeof E == "string" ? E : k;
      }
    return k;
  }
  try {
    var h = t.getMessageFormat(m, s, a, V({ formatters: t }, i || {}));
    return h.format(r);
  } catch (y) {
    p(new jo('Error formatting message: "'.concat(k, '", using ').concat(E ? "default message" : "id", " as fallback."), s, n, y));
  }
  if (E)
    try {
      var h = t.getMessageFormat(E, l, u, i);
      return h.format(r);
    } catch (y) {
      p(new jo('Error formatting the default message for: "'.concat(k, '", rendering message verbatim'), s, n, y));
    }
  return typeof m == "string" ? m : typeof E == "string" ? E : k;
}, Xm = [
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
function Ba(e, t, n, r) {
  var i = e.locale, s = e.formats, a = e.onError, o = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = V(V({}, o && { timeZone: o }), l && oc(s, t, l, a)), c = nr(r, Xm, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = V(V({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function IE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ba(e, "date", t, a).format(o);
  } catch (l) {
    e.onError(new kt("Error formatting date.", e.locale, l));
  }
  return String(o);
}
function NE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ba(e, "time", t, a).format(o);
  } catch (l) {
    e.onError(new kt("Error formatting time.", e.locale, l));
  }
  return String(o);
}
function bE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = n[2], o = a === void 0 ? {} : a, l = e.timeZone, u = e.locale, c = e.onError, p = nr(o, Xm, l ? { timeZone: l } : {});
  try {
    return t(u, p).formatRange(i, s);
  } catch (d) {
    c(new kt("Error formatting date time range.", e.locale, d));
  }
  return String(i);
}
function RE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ba(e, "date", t, a).formatToParts(o);
  } catch (l) {
    e.onError(new kt("Error formatting date.", e.locale, l));
  }
  return [];
}
function PE(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], s = n[1], a = s === void 0 ? {} : s, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Ba(e, "time", t, a).formatToParts(o);
  } catch (l) {
    e.onError(new kt("Error formatting time.", e.locale, l));
  }
  return [];
}
var FE = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function OE(e, t, n, r) {
  var i = e.locale, s = e.onError, a = Intl.DisplayNames;
  a || s(new Pn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, zt.MISSING_INTL_API));
  var o = nr(r, FE);
  try {
    return t(i, o).of(n);
  } catch (l) {
    s(new kt("Error formatting display name.", i, l));
  }
}
var ME = [
  "type",
  "style"
], Nd = Date.now();
function LE(e) {
  return "".concat(Nd, "_").concat(e, "_").concat(Nd);
}
function DE(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Km(e, t, n, r).reduce(function(s, a) {
    var o = a.value;
    return typeof o != "string" ? s.push(o) : typeof s[s.length - 1] == "string" ? s[s.length - 1] += o : s.push(o), s;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Km(e, t, n, r) {
  var i = e.locale, s = e.onError;
  r === void 0 && (r = {});
  var a = Intl.ListFormat;
  a || s(new Pn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, zt.MISSING_INTL_API));
  var o = nr(r, ME);
  try {
    var l = {}, u = n.map(function(c, p) {
      if (typeof c == "object") {
        var d = LE(p);
        return l[d] = c, d;
      }
      return String(c);
    });
    return t(i, o).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : V(V({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    s(new kt("Error formatting list.", i, c));
  }
  return n;
}
var BE = ["type"];
function HE(e, t, n, r) {
  var i = e.locale, s = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || s(new Pn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, zt.MISSING_INTL_API));
  var a = nr(r, BE);
  try {
    return t(i, a).select(n);
  } catch (o) {
    s(new kt("Error formatting plural.", i, o));
  }
  return "other";
}
var VE = ["numeric", "style"];
function jE(e, t, n) {
  var r = e.locale, i = e.formats, s = e.onError;
  n === void 0 && (n = {});
  var a = n.format, o = !!a && oc(i, "relative", a, s) || {}, l = nr(n, VE, o);
  return t(r, l);
}
function UE(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var s = Intl.RelativeTimeFormat;
  s || e.onError(new Pn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, zt.MISSING_INTL_API));
  try {
    return jE(e, t, i).format(n, r);
  } catch (a) {
    e.onError(new kt("Error formatting relative time.", e.locale, a));
  }
  return String(n);
}
var $E = [
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
function Ym(e, t, n) {
  var r = e.locale, i = e.formats, s = e.onError;
  n === void 0 && (n = {});
  var a = n.format, o = a && oc(i, "number", a, s) || {}, l = nr(n, $E, o);
  return t(r, l);
}
function zE(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Ym(e, t, r).format(n);
  } catch (i) {
    e.onError(new kt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function GE(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Ym(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new kt("Error formatting number.", e.locale, i));
  }
  return [];
}
function WE(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function QE(e) {
  e.onWarn && e.defaultRichTextElements && WE(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function XE(e, t) {
  var n = AE(t), r = V(V({}, Wm), e), i = r.locale, s = r.defaultLocale, a = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new Td('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new Td('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new kE('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), QE(r), V(V({}, r), {
    formatters: n,
    formatNumber: zE.bind(null, r, n.getNumberFormat),
    formatNumberToParts: GE.bind(null, r, n.getNumberFormat),
    formatRelativeTime: UE.bind(null, r, n.getRelativeTimeFormat),
    formatDate: IE.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: RE.bind(null, r, n.getDateTimeFormat),
    formatTime: NE.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: bE.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: PE.bind(null, r, n.getDateTimeFormat),
    formatPlural: HE.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: ql.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: ql.bind(null, r, n),
    formatList: DE.bind(null, r, n.getListFormat),
    formatListToParts: Km.bind(null, r, n.getListFormat),
    formatDisplayName: OE.bind(null, r, n.getDisplayNames)
  });
}
function qm(e) {
  Nm(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Zm = V(V({}, Wm), { textComponent: C.Fragment });
function KE(e) {
  return function(t) {
    return e(C.Children.toArray(t));
  };
}
function Zl(e, t) {
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
var Jm = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae = typeof Symbol == "function" && Symbol.for, lc = Ae ? Symbol.for("react.element") : 60103, uc = Ae ? Symbol.for("react.portal") : 60106, Ha = Ae ? Symbol.for("react.fragment") : 60107, Va = Ae ? Symbol.for("react.strict_mode") : 60108, ja = Ae ? Symbol.for("react.profiler") : 60114, Ua = Ae ? Symbol.for("react.provider") : 60109, $a = Ae ? Symbol.for("react.context") : 60110, cc = Ae ? Symbol.for("react.async_mode") : 60111, za = Ae ? Symbol.for("react.concurrent_mode") : 60111, Ga = Ae ? Symbol.for("react.forward_ref") : 60112, Wa = Ae ? Symbol.for("react.suspense") : 60113, YE = Ae ? Symbol.for("react.suspense_list") : 60120, Qa = Ae ? Symbol.for("react.memo") : 60115, Xa = Ae ? Symbol.for("react.lazy") : 60116, qE = Ae ? Symbol.for("react.block") : 60121, ZE = Ae ? Symbol.for("react.fundamental") : 60117, JE = Ae ? Symbol.for("react.responder") : 60118, ex = Ae ? Symbol.for("react.scope") : 60119;
function pt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lc:
        switch (e = e.type, e) {
          case cc:
          case za:
          case Ha:
          case ja:
          case Va:
          case Wa:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $a:
              case Ga:
              case Xa:
              case Qa:
              case Ua:
                return e;
              default:
                return t;
            }
        }
      case uc:
        return t;
    }
  }
}
function ev(e) {
  return pt(e) === za;
}
ne.AsyncMode = cc;
ne.ConcurrentMode = za;
ne.ContextConsumer = $a;
ne.ContextProvider = Ua;
ne.Element = lc;
ne.ForwardRef = Ga;
ne.Fragment = Ha;
ne.Lazy = Xa;
ne.Memo = Qa;
ne.Portal = uc;
ne.Profiler = ja;
ne.StrictMode = Va;
ne.Suspense = Wa;
ne.isAsyncMode = function(e) {
  return ev(e) || pt(e) === cc;
};
ne.isConcurrentMode = ev;
ne.isContextConsumer = function(e) {
  return pt(e) === $a;
};
ne.isContextProvider = function(e) {
  return pt(e) === Ua;
};
ne.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lc;
};
ne.isForwardRef = function(e) {
  return pt(e) === Ga;
};
ne.isFragment = function(e) {
  return pt(e) === Ha;
};
ne.isLazy = function(e) {
  return pt(e) === Xa;
};
ne.isMemo = function(e) {
  return pt(e) === Qa;
};
ne.isPortal = function(e) {
  return pt(e) === uc;
};
ne.isProfiler = function(e) {
  return pt(e) === ja;
};
ne.isStrictMode = function(e) {
  return pt(e) === Va;
};
ne.isSuspense = function(e) {
  return pt(e) === Wa;
};
ne.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ha || e === za || e === ja || e === Va || e === Wa || e === YE || typeof e == "object" && e !== null && (e.$$typeof === Xa || e.$$typeof === Qa || e.$$typeof === Ua || e.$$typeof === $a || e.$$typeof === Ga || e.$$typeof === ZE || e.$$typeof === JE || e.$$typeof === ex || e.$$typeof === qE);
};
ne.typeOf = pt;
Jm.exports = ne;
var tx = Jm.exports, tv = tx, nx = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, rx = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nv = {};
nv[tv.ForwardRef] = nx;
nv[tv.Memo] = rx;
var fc = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = C.createContext(null)) : C.createContext(null);
fc.Consumer;
var ix = fc.Provider, sx = ix, ax = fc;
function Ka() {
  var e = C.useContext(ax);
  return qm(e), e;
}
var Jl;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Jl || (Jl = {}));
var eu;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(eu || (eu = {}));
function rv(e) {
  var t = function(n) {
    var r = Ka(), i = n.value, s = n.children, a = Hr(n, ["value", "children"]), o = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(o, a) : r.formatTimeToParts(o, a);
    return s(l);
  };
  return t.displayName = eu[e], t;
}
function Zi(e) {
  var t = function(n) {
    var r = Ka(), i = n.value, s = n.children, a = Hr(
      n,
      ["value", "children"]
    ), o = r[e](i, a);
    if (typeof s == "function")
      return s(o);
    var l = r.textComponent || C.Fragment;
    return C.createElement(l, null, o);
  };
  return t.displayName = Jl[e], t;
}
function iv(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = zm(r) ? KE(r) : r, t;
  }, {});
}
var bd = function(e, t, n, r) {
  for (var i = [], s = 4; s < arguments.length; s++)
    i[s - 4] = arguments[s];
  var a = iv(r), o = ql.apply(void 0, Ge([
    e,
    t,
    n,
    a
  ], i, !1));
  return Array.isArray(o) ? C.Children.toArray(o) : o;
}, Rd = function(e, t) {
  var n = e.defaultRichTextElements, r = Hr(e, ["defaultRichTextElements"]), i = iv(n), s = XE(V(V(V({}, Zm), r), { defaultRichTextElements: i }), t), a = {
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
  return V(V({}, s), {
    formatMessage: bd.bind(
      null,
      a,
      // @ts-expect-error fix this
      s.formatters
    ),
    // @ts-expect-error fix this
    $t: bd.bind(null, a, s.formatters)
  });
};
function Uo(e) {
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
var ox = (
  /** @class */
  function(e) {
    Ct(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = Qm(), n.state = {
        cache: n.cache,
        intl: Rd(Uo(n.props), n.cache),
        prevConfig: Uo(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, s = r.cache, a = Uo(n);
      return Zl(i, a) ? null : {
        intl: Rd(a, s),
        prevConfig: a
      };
    }, t.prototype.render = function() {
      return qm(this.state.intl), C.createElement(sx, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Zm, t;
  }(C.PureComponent)
);
function lx(e, t) {
  var n = e.values, r = Hr(e, ["values"]), i = t.values, s = Hr(t, ["values"]);
  return Zl(i, n) && Zl(r, s);
}
function sv(e) {
  var t = Ka(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? C.Fragment : r, s = e.id, a = e.description, o = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, p = c === void 0 ? i : c, d = e.ignoreTag, g = { id: s, description: a, defaultMessage: o }, x = n(g, l, {
    ignoreTag: d
  });
  return typeof u == "function" ? u(Array.isArray(x) ? x : [x]) : p ? C.createElement(p, null, C.Children.toArray(x)) : C.createElement(C.Fragment, null, x);
}
sv.displayName = "FormattedMessage";
var av = C.memo(sv, lx);
av.displayName = "MemoizedFormattedMessage";
Zi("formatDate");
Zi("formatTime");
Zi("formatNumber");
Zi("formatList");
Zi("formatDisplayName");
rv("formatDate");
rv("formatTime");
var ov = { exports: {} };
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
})(ov);
var ux = ov.exports;
const H = /* @__PURE__ */ Qr(ux);
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $.apply(null, arguments);
}
function ie(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var dc = /* @__PURE__ */ v.createContext({});
dc.Consumer;
dc.Provider;
function ke(e, t) {
  var n = C.useContext(dc);
  return e || n[t] || t;
}
function cx() {
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
var fx = ["as", "disabled", "onKeyDown"];
function Pd(e) {
  return !e || e.trim() === "#";
}
var pc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, s = e.onKeyDown, a = ie(e, fx), o = function(c) {
    var p = a.href, d = a.onClick;
    if ((i || Pd(p)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    d && d(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), o(c));
  };
  return Pd(a.href) && (a.role = a.role || "button", a.href = a.href || "#"), i && (a.tabIndex = -1, a["aria-disabled"] = !0), /* @__PURE__ */ v.createElement(r, $({
    ref: t
  }, a, {
    onClick: o,
    onKeyDown: cx(l, s)
  }));
});
pc.displayName = "SafeAnchor";
var dx = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], px = {
  variant: "primary",
  active: !1,
  disabled: !1
}, hc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, s = e.active, a = e.className, o = e.block, l = e.type, u = e.as, c = ie(e, dx), p = ke(n, "btn"), d = H(a, p, s && "active", r && p + "-" + r, o && p + "-block", i && p + "-" + i);
  if (c.href)
    return /* @__PURE__ */ v.createElement(pc, $({}, c, {
      as: u,
      ref: t,
      className: H(d, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var g = u || "button";
  return /* @__PURE__ */ v.createElement(g, $({}, c, {
    className: d
  }));
});
hc.displayName = "Button";
hc.defaultProps = px;
var lv = { exports: {} }, hx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", mx = hx, vx = mx;
function uv() {
}
function cv() {
}
cv.resetWarningCache = uv;
var gx = function() {
  function e(r, i, s, a, o, l) {
    if (l !== vx) {
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
    checkPropTypes: cv,
    resetWarningCache: uv
  };
  return n.PropTypes = n, n;
};
lv.exports = gx();
var yx = lv.exports;
const f = /* @__PURE__ */ Qr(yx);
let Fd = 0;
const mc = (e = "id") => (Fd += 1, `${e}${Fd}`);
let Sr = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function fv(e, t, n) {
  class r extends v.Component {
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
        case Sr.MOVED:
          this.warn(`${t}: The prop '${a}' has been moved to '${l}'.`), s[l] = this.props[a];
          break;
        case Sr.REMOVED:
          this.warn(`${t}: The prop '${a}' has been removed. '${p}'`);
          break;
        case Sr.FORMAT:
          u(this.props[a]) ? s[a] = this.props[a] : (this.warn(`${t}: The prop '${a}' expects a new format. ${p}`), s[a] = c(this.props[a], this.props));
          break;
        case Sr.MOVED_AND_FORMAT: {
          const d = this.props[a];
          let g = `${t}: The prop '${a}' has been moved to '${l}'`;
          u && !u(d) && (g += " and expects a new format"), g += p ? `. ${p}` : "", this.warn(g), s[l] = c ? c(d, this.props) : d;
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
      return /* @__PURE__ */ v.createElement(e, {
        ...a
      }, this.props.children || s);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    lf(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function vc({
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
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ v.createElement("span", {
      className: H("pgn__icon", {
        [`pgn__icon__${a}`]: !!a
      }, n),
      id: t,
      ...o
    }, /* @__PURE__ */ v.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ v.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("span", {
    id: t || mc("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ v.createElement("span", {
    className: "sr-only"
  }, i));
}
vc.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: f.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: f.shape({
    "aria-label": f.string,
    "aria-labelledby": f.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: f.string,
  /** The size of the icon. */
  size: f.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: f.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: f.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: f.oneOfType([f.string, f.element])
};
vc.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const ut = fv(vc, "Icon", {
  className: {
    deprType: Sr.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), at = /* @__PURE__ */ v.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, s) => /* @__PURE__ */ v.createElement(hc, {
  size: r,
  ...i,
  className: H(i.className),
  ref: s
}, n && /* @__PURE__ */ v.createElement(ut, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ v.createElement(ut, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
var Od = { exports: {} }, tu = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(a, o, l, u, c, p) {
      var d = u || "<<anonymous>>", g = p || l;
      if (o[l] == null)
        return a ? new Error("Required " + c + " `" + g + "` was not specified " + ("in `" + d + "`.")) : null;
      for (var x = arguments.length, E = Array(x > 6 ? x - 6 : 0), k = 6; k < x; k++)
        E[k - 6] = arguments[k];
      return r.apply(void 0, [o, l, d, c, g].concat(E));
    }
    var s = i.bind(null, !1);
    return s.isRequired = i.bind(null, !0), s;
  }
  e.exports = t.default;
})(tu, tu.exports);
var Ex = tu.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = Ex, r = i(n);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function s() {
    for (var a = arguments.length, o = Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    function u() {
      for (var c = arguments.length, p = Array(c), d = 0; d < c; d++)
        p[d] = arguments[d];
      var g = null;
      return o.forEach(function(x) {
        if (g == null) {
          var E = x.apply(void 0, p);
          E != null && (g = E);
        }
      }), g;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Od, Od.exports);
var xx = ["as", "className", "type", "tooltip"], wx = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: f.string,
  /** Display feedback as a tooltip. */
  tooltip: f.bool,
  as: f.elementType
}, Ji = /* @__PURE__ */ v.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, s = e.type, a = s === void 0 ? "valid" : s, o = e.tooltip, l = o === void 0 ? !1 : o, u = ie(e, xx);
    return /* @__PURE__ */ v.createElement(r, $({}, u, {
      ref: t,
      className: H(i, a + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
Ji.displayName = "Feedback";
Ji.propTypes = wx;
var Ot = /* @__PURE__ */ v.createContext({
  controlId: void 0
}), Cx = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], gc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.type, o = a === void 0 ? "checkbox" : a, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, p = c === void 0 ? !1 : c, d = e.isStatic, g = e.as, x = g === void 0 ? "input" : g, E = ie(e, Cx), k = C.useContext(Ot), m = k.controlId, h = k.custom, y = h ? [i, "custom-control-input"] : [r, "form-check-input"], w = y[0], _ = y[1];
  return r = ke(w, _), /* @__PURE__ */ v.createElement(x, $({}, E, {
    ref: t,
    type: o,
    id: n || m,
    className: H(s, r, u && "is-valid", p && "is-invalid", d && "position-static")
  }));
});
gc.displayName = "FormCheckInput";
var kx = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], yc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = ie(e, kx), o = C.useContext(Ot), l = o.controlId, u = o.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], p = c[0], d = c[1];
  return n = ke(p, d), /* @__PURE__ */ v.createElement("label", $({}, a, {
    ref: t,
    htmlFor: s || l,
    className: H(i, n)
  }));
});
yc.displayName = "FormCheckLabel";
var Sx = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], rr = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.inline, a = s === void 0 ? !1 : s, o = e.disabled, l = o === void 0 ? !1 : o, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, d = p === void 0 ? !1 : p, g = e.feedbackTooltip, x = g === void 0 ? !1 : g, E = e.feedback, k = e.className, m = e.style, h = e.title, y = h === void 0 ? "" : h, w = e.type, _ = w === void 0 ? "checkbox" : w, T = e.label, A = e.children, I = e.custom, F = e.as, P = F === void 0 ? "input" : F, O = ie(e, Sx), U = _ === "switch" ? !0 : I, W = U ? [i, "custom-control"] : [r, "form-check"], ae = W[0], me = W[1];
  r = ke(ae, me);
  var ee = C.useContext(Ot), J = ee.controlId, R = C.useMemo(function() {
    return {
      controlId: n || J,
      custom: U
    };
  }, [J, U, n]), D = U || T != null && T !== !1 && !A, B = /* @__PURE__ */ v.createElement(gc, $({}, O, {
    type: _ === "switch" ? "checkbox" : _,
    ref: t,
    isValid: c,
    isInvalid: d,
    isStatic: !D,
    disabled: l,
    as: P
  }));
  return /* @__PURE__ */ v.createElement(Ot.Provider, {
    value: R
  }, /* @__PURE__ */ v.createElement("div", {
    style: m,
    className: H(k, r, U && "custom-" + _, a && r + "-inline")
  }, A || /* @__PURE__ */ v.createElement(v.Fragment, null, B, D && /* @__PURE__ */ v.createElement(yc, {
    title: y
  }, T), (c || d) && /* @__PURE__ */ v.createElement(Ji, {
    type: c ? "valid" : "invalid",
    tooltip: x
  }, E))));
});
rr.displayName = "FormCheck";
rr.Input = gc;
rr.Label = yc;
var _x = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], Ec = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.className, a = e.isValid, o = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, p = ie(e, _x), d = C.useContext(Ot), g = d.controlId, x = d.custom, E = "file", k = x ? [i, "custom-file-input"] : [r, "form-control-file"], m = k[0], h = k[1];
  return r = ke(m, h), /* @__PURE__ */ v.createElement(c, $({}, p, {
    ref: t,
    id: n || g,
    type: E,
    lang: l,
    className: H(s, r, a && "is-valid", o && "is-invalid")
  }));
});
Ec.displayName = "FormFileInput";
var Tx = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], ha = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, s = e.htmlFor, a = ie(e, Tx), o = C.useContext(Ot), l = o.controlId, u = o.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], p = c[0], d = c[1];
  return n = ke(p, d), /* @__PURE__ */ v.createElement("label", $({}, a, {
    ref: t,
    htmlFor: s || l,
    className: H(i, n),
    "data-browse": a["data-browse"]
  }));
});
ha.displayName = "FormFileLabel";
var Ax = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], Ya = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, s = e.disabled, a = s === void 0 ? !1 : s, o = e.isValid, l = o === void 0 ? !1 : o, u = e.isInvalid, c = u === void 0 ? !1 : u, p = e.feedbackTooltip, d = p === void 0 ? !1 : p, g = e.feedback, x = e.className, E = e.style, k = e.label, m = e.children, h = e.custom, y = e.lang, w = e["data-browse"], _ = e.as, T = _ === void 0 ? "div" : _, A = e.inputAs, I = A === void 0 ? "input" : A, F = ie(e, Ax), P = h ? [i, "custom"] : [r, "form-file"], O = P[0], U = P[1];
  r = ke(O, U);
  var W = "file", ae = C.useContext(Ot), me = ae.controlId, ee = C.useMemo(function() {
    return {
      controlId: n || me,
      custom: h
    };
  }, [me, h, n]), J = k != null && k !== !1 && !m, R = /* @__PURE__ */ v.createElement(Ec, $({}, F, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: a,
    as: I,
    lang: y
  }));
  return /* @__PURE__ */ v.createElement(Ot.Provider, {
    value: ee
  }, /* @__PURE__ */ v.createElement(T, {
    style: E,
    className: H(x, r, h && "custom-" + W)
  }, m || /* @__PURE__ */ v.createElement(v.Fragment, null, h ? /* @__PURE__ */ v.createElement(v.Fragment, null, R, J && /* @__PURE__ */ v.createElement(ha, {
    "data-browse": w
  }, k)) : /* @__PURE__ */ v.createElement(v.Fragment, null, J && /* @__PURE__ */ v.createElement(ha, null, k), R), (l || c) && /* @__PURE__ */ v.createElement(Ji, {
    type: l ? "valid" : "invalid",
    tooltip: d
  }, g))));
});
Ya.displayName = "FormFile";
Ya.Input = Ec;
Ya.Label = ha;
var Ix = function() {
}, Nx = Ix;
const bx = /* @__PURE__ */ Qr(Nx);
var Rx = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], dv = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, s = e.size, a = e.htmlSize, o = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, p = e.isInvalid, d = p === void 0 ? !1 : p, g = e.plaintext, x = e.readOnly, E = e.custom, k = e.as, m = k === void 0 ? "input" : k, h = ie(e, Rx), y = C.useContext(Ot), w = y.controlId, _ = E ? [r, "custom"] : [n, "form-control"], T = _[0], A = _[1];
  n = ke(T, A);
  var I;
  if (g) {
    var F;
    I = (F = {}, F[n + "-plaintext"] = !0, F);
  } else if (i === "file") {
    var P;
    I = (P = {}, P[n + "-file"] = !0, P);
  } else if (i === "range") {
    var O;
    I = (O = {}, O[n + "-range"] = !0, O);
  } else if (m === "select" && E) {
    var U;
    I = (U = {}, U[n + "-select"] = !0, U[n + "-select-" + s] = s, U);
  } else {
    var W;
    I = (W = {}, W[n] = !0, W[n + "-" + s] = s, W);
  }
  return /* @__PURE__ */ v.createElement(m, $({}, h, {
    type: i,
    size: a,
    ref: t,
    readOnly: x,
    id: o || w,
    className: H(l, I, c && "is-valid", d && "is-invalid")
  }));
});
dv.displayName = "FormControl";
const pv = Object.assign(dv, {
  Feedback: Ji
});
var Px = ["bsPrefix", "className", "children", "controlId", "as"], hv = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, s = e.controlId, a = e.as, o = a === void 0 ? "div" : a, l = ie(e, Px);
  n = ke(n, "form-group");
  var u = C.useMemo(function() {
    return {
      controlId: s
    };
  }, [s]);
  return /* @__PURE__ */ v.createElement(Ot.Provider, {
    value: u
  }, /* @__PURE__ */ v.createElement(o, $({}, l, {
    ref: t,
    className: H(r, n)
  }), i));
});
hv.displayName = "FormGroup";
var Fx = ["bsPrefix", "className", "as"], Ox = ["xl", "lg", "md", "sm", "xs"], mv = /* @__PURE__ */ v.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "div" : i, a = ie(e, Fx), o = ke(n, "col"), l = [], u = [];
    return Ox.forEach(function(c) {
      var p = a[c];
      delete a[c];
      var d, g, x;
      if (typeof p == "object" && p != null) {
        var E = p.span;
        d = E === void 0 ? !0 : E, g = p.offset, x = p.order;
      } else
        d = p;
      var k = c !== "xs" ? "-" + c : "";
      d && l.push(d === !0 ? "" + o + k : "" + o + k + "-" + d), x != null && u.push("order" + k + "-" + x), g != null && u.push("offset" + k + "-" + g);
    }), l.length || l.push(o), /* @__PURE__ */ v.createElement(s, $({}, a, {
      ref: t,
      className: H.apply(void 0, [r].concat(l, u))
    }));
  }
);
mv.displayName = "Col";
var Mx = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], Lx = {
  column: !1,
  srOnly: !1
}, xc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, s = e.column, a = e.srOnly, o = e.className, l = e.htmlFor, u = ie(e, Mx), c = C.useContext(Ot), p = c.controlId;
  i = ke(i, "form-label");
  var d = "col-form-label";
  typeof s == "string" && (d = d + " " + d + "-" + s);
  var g = H(o, i, a && "sr-only", s && d);
  return l = l || p, s ? /* @__PURE__ */ v.createElement(mv, $({
    ref: t,
    as: "label",
    className: g,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ v.createElement(r, $({
      ref: t,
      className: g,
      htmlFor: l
    }, u))
  );
});
xc.displayName = "FormLabel";
xc.defaultProps = Lx;
var Dx = ["bsPrefix", "className", "as", "muted"], vv = /* @__PURE__ */ v.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, s = i === void 0 ? "small" : i, a = e.muted, o = ie(e, Dx);
    return n = ke(n, "form-text"), /* @__PURE__ */ v.createElement(s, $({}, o, {
      ref: t,
      className: H(r, n, a && "text-muted")
    }));
  }
);
vv.displayName = "FormText";
var qa = /* @__PURE__ */ v.forwardRef(function(e, t) {
  return /* @__PURE__ */ v.createElement(rr, $({}, e, {
    ref: t,
    type: "switch"
  }));
});
qa.displayName = "Switch";
qa.Input = rr.Input;
qa.Label = rr.Label;
var Bx = /-(.)/g;
function Hx(e) {
  return e.replace(Bx, function(t, n) {
    return n.toUpperCase();
  });
}
var Vx = ["className", "bsPrefix", "as"], jx = function(t) {
  return t[0].toUpperCase() + Hx(t).slice(1);
};
function wc(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? jx(e) : r, s = n.Component, a = n.defaultProps, o = /* @__PURE__ */ v.forwardRef(function(l, u) {
    var c = l.className, p = l.bsPrefix, d = l.as, g = d === void 0 ? s || "div" : d, x = ie(l, Vx), E = ke(p, e);
    return /* @__PURE__ */ v.createElement(g, $({
      ref: u,
      className: H(c, E)
    }, x));
  });
  return o.defaultProps = a, o.displayName = i, o;
}
var Ux = ["bsPrefix", "inline", "className", "validated", "as"], $x = wc("form-row"), zx = {
  inline: !1
}, Mt = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, s = e.validated, a = e.as, o = a === void 0 ? "form" : a, l = ie(e, Ux);
  return n = ke(n, "form"), /* @__PURE__ */ v.createElement(o, $({}, l, {
    ref: t,
    className: H(i, s && "was-validated", r && n + "-inline")
  }));
});
Mt.displayName = "Form";
Mt.defaultProps = zx;
Mt.Row = $x;
Mt.Group = hv;
Mt.Control = pv;
Mt.Check = rr;
Mt.File = Ya;
Mt.Switch = qa;
Mt.Label = xc;
Mt.Text = vv;
function Sn(e) {
  return typeof e == "string" || e instanceof String;
}
function Md(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function gv(e, t) {
  return Array.isArray(t) ? gv(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, s] = r;
    return t(s, i) && (n[i] = s), n;
  }, {});
}
const j = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function Gx(e) {
  switch (e) {
    case j.LEFT:
      return j.FORCE_LEFT;
    case j.RIGHT:
      return j.FORCE_RIGHT;
    default:
      return e;
  }
}
function $o(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ma(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!ma(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!ma(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class Wx {
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
    return !this.removedCount || this.insertedCount ? j.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? j.RIGHT : j.LEFT;
  }
}
function G(e, t) {
  return new G.InputMask(e, t);
}
function yv(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? G.MaskedRegExp : Sn(e) ? G.MaskedPattern : e === Date ? G.MaskedDate : e === Number ? G.MaskedNumber : Array.isArray(e) || e === Array ? G.MaskedDynamic : G.Masked && e.prototype instanceof G.Masked ? e : G.Masked && e instanceof G.Masked ? e.constructor : e instanceof Function ? G.MaskedFunction : (console.warn("Mask not found for mask", e), G.Masked);
}
function $i(e) {
  if (!e) throw new Error("Options in not defined");
  if (G.Masked) {
    if (e.prototype instanceof G.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof G.Masked ? {
      mask: e
    } : Md(e) && e.mask instanceof G.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...gv(t, (i, s) => !s.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Md(e) ? {
    ...e
  } : {
    mask: e
  };
}
function nn(e) {
  if (G.Masked && e instanceof G.Masked) return e;
  const t = $i(e), n = yv(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
G.createMask = nn;
class Cc {
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
G.MaskElement = Cc;
const Ld = 90, Qx = 89;
class Za extends Cc {
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
    if (this._handlers.redo && (t.keyCode === Ld && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === Qx && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Ld && (t.metaKey || t.ctrlKey))
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
G.HTMLMaskElement = Za;
class Xx extends Za {
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
G.HTMLMaskElement = Za;
class Ev extends Za {
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
G.HTMLContenteditableMaskElement = Ev;
class Ja {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Ja.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
Ja.MAX_LENGTH = 100;
class Kx {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof Cc ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Ev(t) : new Xx(t), this.masked = nn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ja(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof G.Masked) && this.masked.constructor === yv(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof G.Masked ? t : nn({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, j.LEFT));
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
    const n = new Wx({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, s = r === this.masked.rawInputValue ? n.removeDirection : j.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, s);
    s !== j.NONE && (a = this.masked.nearestInputPos(a, j.NONE)), this.updateControl(a), delete this._inputEvent;
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
G.InputMask = Kx;
class X {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new X()];
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
G.ChangeDetails = X;
class Ht {
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
class Le {
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
      ...Le.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Ht(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Sn(t) && (t = new Ht(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new X({
      inserted: t,
      rawInserted: t
    })) : new X();
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
      o || (s = new X(), this.state = i, r && a && (r.state = a));
    }
    return s;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new X();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new X();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!Sn(t)) throw new Error("value should be string");
    const i = Sn(r) ? new Ht(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new X();
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
    return n === void 0 && (n = {}), X.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), X.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = j.NONE), s === void 0 && (s = {
      input: !0
    });
    const a = t + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = Gx(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let c = t;
    const p = new X();
    if (i !== j.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? j.NONE : i), p.tailShift = c - t), p.aggregate(this.remove(c)), l && i !== j.NONE && u === this.rawInputValue)
      if (i === j.FORCE_LEFT) {
        let d;
        for (; u === this.rawInputValue && (d = this.displayValue.length); )
          p.aggregate(new X({
            tailShift: -1
          })).aggregate(this.remove(d - 1));
      } else i === j.FORCE_RIGHT && o.unshift();
    return p.aggregate(this.append(r, s, o));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !ma(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Le.EMPTY_VALUES.includes(t) && Le.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new X();
  }
}
Le.DEFAULTS = {
  skipInvalid: !0
};
Le.EMPTY_VALUES = [void 0, null, ""];
G.Masked = Le;
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
    t = Sn(t) ? new Ht(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Ht)
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
    if (!(t instanceof G.MaskedPattern))
      return new Ht(this.toString()).appendTo(t);
    const n = new X();
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
      const s = "chunks" in i ? new Un() : new Ht();
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
class Yx {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, j.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, j.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, j.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, j.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, j.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, j.NONE), !0;
    });
  }
}
class xv {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new X();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = j.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case j.LEFT:
      case j.FORCE_LEFT:
        return r;
      case j.NONE:
      case j.RIGHT:
      case j.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new X();
    const r = this.eager === !0 || this.eager === "append", s = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, a = new X({
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
    const t = new X();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Ht("");
  }
  appendTail(t) {
    return Sn(t) && (t = new Ht(String(t))), t.appendTo(this);
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
class va {
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
    this.masked = nn(l), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new X();
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
    if (n === void 0 && (n = {}), this.isFilled) return new X();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new X(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new X() : (this.isFilled = !0, new X({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new X();
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
    n === void 0 && (n = j.NONE);
    const r = 0, i = this.value.length, s = Math.min(Math.max(t, r), i);
    switch (n) {
      case j.LEFT:
      case j.FORCE_LEFT:
        return this.isComplete ? s : r;
      case j.RIGHT:
      case j.FORCE_RIGHT:
        return this.isComplete ? s : i;
      case j.NONE:
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
    return new X();
  }
}
va.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class qx extends Le {
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
G.MaskedRegExp = qx;
class De extends Le {
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
      ...De.DEFAULTS,
      ...t,
      definitions: Object.assign({}, va.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        const u = n.slice(s), c = Object.keys(this.blocks).filter((d) => u.indexOf(d) === 0);
        c.sort((d, g) => g.length - d.length);
        const p = c[0];
        if (p) {
          const {
            expose: d,
            repeat: g,
            ...x
          } = $i(this.blocks[p]), E = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...x,
            repeat: g,
            parent: this
          }, k = g != null ? new G.RepeatBlock(
            E
            /* TODO */
          ) : nn(E);
          k && (this._blocks.push(k), d && (this.exposeBlock = k), this._maskedBlocks[p] || (this._maskedBlocks[p] = []), this._maskedBlocks[p].push(this._blocks.length - 1)), s += p.length - 1;
          continue;
        }
      }
      let a = n[s], o = a in t;
      if (a === De.STOP_CHAR) {
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
      if (a === De.ESCAPE_CHAR) {
        if (++s, a = n[s], !a) break;
        o = !1;
      }
      const l = o ? new va({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...$i(t[a]),
        parent: this
      }) : new xv({
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
    const n = new X();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new X();
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
    const n = new X();
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
    if (n === void 0 && (n = j.NONE), !this._blocks.length) return 0;
    const r = new Yx(this, t);
    if (n === j.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === j.LEFT || n === j.FORCE_LEFT) {
      if (n === j.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === j.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === j.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === j.RIGHT || n === j.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === j.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, j.LEFT))) : t;
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
    const n = new X();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
De.DEFAULTS = {
  ...Le.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
De.STOP_CHAR = "`";
De.ESCAPE_CHAR = "\\";
De.InputDefinition = va;
De.FixedDefinition = xv;
G.MaskedPattern = De;
class Us extends De {
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
    const n = new X();
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
G.MaskedRange = Us;
const Zx = "d{.}`m{.}`Y";
class Xt extends De {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Sn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(Xt.extractPatternOptions({
      ...Xt.DEFAULTS,
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
      ...Xt.DEFAULTS,
      ...t
    }, a = Object.assign({}, Xt.GET_DEFAULT_BLOCKS());
    t.min && (a.Y.from = t.min.getFullYear()), t.max && (a.Y.to = t.max.getFullYear()), t.min && t.max && a.Y.from === a.Y.to && (a.m.from = t.min.getMonth() + 1, a.m.to = t.max.getMonth() + 1, a.m.from === a.m.to && (a.d.from = t.min.getDate(), a.d.to = t.max.getDate())), Object.assign(a, this.blocks, i), super._update({
      ...s,
      mask: Sn(n) ? n : r,
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
    return super.optionsIsChanged(Xt.extractPatternOptions(t));
  }
}
Xt.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Us,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Us,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Us,
    from: 1900,
    to: 9999
  }
});
Xt.DEFAULTS = {
  ...De.DEFAULTS,
  mask: Date,
  pattern: Zx,
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
G.MaskedDate = Xt;
class eo extends Le {
  constructor(t) {
    super({
      ...eo.DEFAULTS,
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
      } = $i(n), s = nn({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, s = this.rawInputValue, a = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : s, o = s.slice(a.length), l = this.currentMask, u = new X(), c = l == null ? void 0 : l.state;
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
    const n = new X();
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
    const r = new X();
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
      return ma(n, s) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
eo.DEFAULTS = {
  ...Le.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, s = t.compiledMasks.map((a, o) => {
      const l = t.currentMask === a, u = l ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, j.FORCE_LEFT);
      return a.rawInputValue !== i ? (a.reset(), a.append(i, {
        raw: !0
      })) : l || a.remove(u), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
        index: o,
        weight: a.rawInputValue.length,
        totalInputPositions: a.totalInputPositions(0, Math.max(u, a.nearestInputPos(a.displayValue.length, j.FORCE_LEFT)))
      };
    });
    return s.sort((a, o) => o.weight - a.weight || o.totalInputPositions - a.totalInputPositions), t.compiledMasks[s[0].index];
  }
};
G.MaskedDynamic = eo;
class to extends De {
  constructor(t) {
    super({
      ...to.DEFAULTS,
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
    const r = Math.min(this.nearestInputPos(0, j.FORCE_RIGHT), this.value.length), i = this.enum.filter((s) => this.matchValue(s, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (a, o) => {
        const l = i[0][o];
        o >= this.value.length || l === a.value || (a.reset(), a._appendChar(l, n));
      });
      const s = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((a) => s.aggregate(super._appendCharRaw(a))), s;
    }
    return new X({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Ht("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new X();
    const r = Math.min(super.nearestInputPos(0, j.FORCE_RIGHT), this.value.length);
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
to.DEFAULTS = {
  ...De.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
G.MaskedEnum = to;
class Jx extends Le {
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
G.MaskedFunction = Jx;
var wv;
class it extends Le {
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
      ...it.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + $o(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map($o).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp($o(this.thousandsSeparator), "g");
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
      let d;
      this.min != null && this.min < 0 && this.number < this.min && (d = this.min), this.max != null && this.max > 0 && this.number > this.max && (d = this.max), d != null && (this.autofix ? (this._value = this.format(d, this).replace(it.UNMASKED_RADIX, this.radix), l || (l = s === this._value && !n.tail)) : o = !1), o && (o = !!this._value.match(this._numberRegExp));
    }
    let u;
    o ? u = new X({
      inserted: this._value.slice(s.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = s, u = new X()), this._value = this._insertThousandsSeparators(this._value);
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
    return new X({
      tailShift: (a - s) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case j.NONE:
      case j.LEFT:
      case j.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === j.FORCE_LEFT)
            return r;
        }
        break;
      }
      case j.RIGHT:
      case j.FORCE_RIGHT: {
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === it.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, it.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(it.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || it.EMPTY_VALUES.includes(t) && it.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
wv = it;
it.UNMASKED_RADIX = ".";
it.EMPTY_VALUES = [...Le.EMPTY_VALUES, 0];
it.DEFAULTS = {
  ...Le.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [wv.UNMASKED_RADIX],
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
G.MaskedNumber = it;
const nu = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Cv(e, t, n) {
  t === void 0 && (t = nu.MASKED), n === void 0 && (n = nu.MASKED);
  const r = nn(e);
  return (i) => r.runIsolated((s) => (s[t] = i, s[n]));
}
function e1(e, t, n, r) {
  return Cv(t, n, r)(e);
}
G.PIPE_TYPE = nu;
G.createPipe = Cv;
G.pipe = e1;
class t1 extends De {
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
    } = $i(t);
    this._blockOpts = Object.assign({}, this._blockOpts, a);
    const o = nn(this._blockOpts);
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
      return this._blocks.push(nn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new X();
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
G.RepeatBlock = t1;
try {
  globalThis.IMask = G;
} catch {
}
const kv = {
  // common
  mask: f.oneOfType([f.array, f.func, f.string, f.instanceOf(RegExp), f.oneOf([Date, Number, G.Masked]), f.instanceOf(G.Masked)]),
  value: f.any,
  unmask: f.oneOfType([f.bool, f.oneOf(["typed"])]),
  prepare: f.func,
  prepareChar: f.func,
  validate: f.func,
  commit: f.func,
  overwrite: f.oneOfType([f.bool, f.oneOf(["shift"])]),
  eager: f.oneOfType([f.bool, f.oneOf(["append", "remove"])]),
  skipInvalid: f.bool,
  // events
  onAccept: f.func,
  onComplete: f.func,
  // pattern
  placeholderChar: f.string,
  displayChar: f.string,
  lazy: f.bool,
  definitions: f.object,
  blocks: f.object,
  // enum
  enum: f.arrayOf(f.string),
  // range
  maxLength: f.number,
  from: f.number,
  to: f.number,
  // date
  pattern: f.string,
  format: f.func,
  parse: f.func,
  autofix: f.oneOfType([f.bool, f.oneOf(["pad"])]),
  // number
  radix: f.string,
  thousandsSeparator: f.string,
  mapToRadix: f.arrayOf(f.string),
  scale: f.number,
  normalizeZeros: f.bool,
  padFractionalZeros: f.bool,
  min: f.oneOfType([f.number, f.instanceOf(Date)]),
  max: f.oneOfType([f.number, f.instanceOf(Date)]),
  // dynamic
  dispatch: f.func,
  // ref
  inputRef: f.oneOfType([f.func, f.shape({
    current: f.object
  })])
}, Sv = Object.keys(kv).filter((e) => e !== "value"), n1 = ["value", "unmask", "onAccept", "onComplete", "inputRef"], r1 = Sv.filter((e) => n1.indexOf(e) < 0);
function i1(e) {
  var t;
  const n = (t = class extends v.Component {
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
      s === void 0 && (s = this._extractMaskOptionsFromProps(this.props)), this.maskRef = G(this.element, s).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(s) {
      const {
        ...a
      } = s;
      return Object.keys(a).filter((o) => r1.indexOf(o) < 0).forEach((o) => {
        delete a[o];
      }), a;
    }
    _extractNonMaskProps(s) {
      const {
        ...a
      } = s;
      return Sv.forEach((o) => {
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
      return v.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = kv, v.forwardRef((i, s) => v.createElement(n, {
    ...i,
    ref: s
  }));
}
const s1 = i1((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return v.createElement("input", {
    ...n,
    ref: t
  });
}), a1 = (e, t) => v.createElement(s1, {
  ...e,
  ref: t
}), o1 = v.forwardRef(a1), l1 = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), Gn = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, u1 = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = C.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (a) => r(!!a.target.value)];
}, Dd = (e, t) => {
  const [n, r] = C.useState([]), i = (l) => (r((u) => [...u, l]), l), s = () => {
    const l = mc(`${e}-`);
    return i(l);
  }, a = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = C.useState(l);
    return C.useEffect(() => (l ? i(l) : u || c(s()), () => a(u)), [u, l]), u;
  }];
}, zo = (e) => e, c1 = () => {
}, _v = /* @__PURE__ */ v.createContext({
  getControlProps: zo,
  useSetIsControlGroupEffect: c1,
  getLabelProps: zo,
  getDescriptorProps: zo,
  hasFormGroupProvider: !1
}), St = () => v.useContext(_v);
function f1(e) {
  const [t, n] = C.useState(e);
  return [t, (i) => {
    C.useEffect(() => n(i), [i]);
  }];
}
function no({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const s = C.useMemo(() => t || mc("form-field"), [t]), [a, o] = Dd(s), [l, u] = Dd(s), [c, p] = f1(!1), E = {
    getControlProps: C.useCallback((k) => {
      const m = c ? l : void 0;
      return l1({
        ...k,
        "aria-describedby": H(k["aria-describedby"], a) || void 0,
        "aria-labelledby": H(k["aria-labelledby"], m) || void 0,
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
  return /* @__PURE__ */ v.createElement(_v.Provider, {
    value: E
  }, e);
}
const Tv = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), d1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), p1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), h1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), m1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), Av = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M6 21h12V7H6v14ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z",
  fill: "currentColor"
})), ga = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  fill: "currentColor"
})), v1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), g1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), y1 = (e) => /* @__PURE__ */ C.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ C.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), E1 = (e) => /* @__PURE__ */ C.createElement("svg", {
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
})), jr = {
  SMALL: "sm",
  LARGE: "lg"
}, Nt = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, x1 = {
  [Nt.DEFAULT]: null,
  [Nt.VALID]: p1,
  [Nt.INVALID]: m1,
  [Nt.WARNING]: E1,
  [Nt.CRITERIA_EMPTY]: y1,
  [Nt.CRITERIA_VALID]: h1,
  [Nt.CRITERIA_INVALID]: d1
}, w1 = ({
  isInvalid: e,
  isValid: t
}) => t ? Nt.VALID : e ? Nt.INVALID : Nt.DEFAULT;
function kc({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = x1[e];
  return n ? /* @__PURE__ */ v.createElement(ut, {
    src: n
  }) : null;
}
kc.propTypes = {
  type: f.oneOf(Object.values(Nt)),
  customIcon: f.node
};
kc.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function ro({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...s
}) {
  const a = H(s.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ v.createElement("div", {
    ...s,
    className: a
  }, i && /* @__PURE__ */ v.createElement(kc, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ v.createElement("div", null, e));
}
const C1 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
ro.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies text type, this affects styling. */
  type: f.oneOf(C1),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show text with muted styling. */
  muted: f.bool
};
ro.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function An({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = St(), s = n(t), a = H("pgn__form-control-description", t.className), o = t.type || w1({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ v.createElement(ro, {
    ...s,
    className: a,
    type: o
  }, e);
}
const k1 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
An.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies feedback type, this affects styling. */
  type: f.oneOf(k1),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: f.bool
};
An.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function Iv({
  children: e
}) {
  const {
    controlId: t
  } = St();
  return /* @__PURE__ */ v.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ v.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ v.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
Iv.propTypes = {
  children: f.node.isRequired
};
function ya({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ v.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
ya.propTypes = {
  children: f.node.isRequired,
  location: f.oneOf(["leading", "trailing"])
};
ya.defaultProps = {
  location: "leading"
};
function Sc({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...s
}) {
  const a = St(), o = s.size || a.size;
  return /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": o === jr.LARGE,
      "pgn__form-control-decorator-group-sm": o === jr.SMALL
    }, i),
    ...s
  }, e, t && /* @__PURE__ */ v.createElement(ya, {
    location: "leading"
  }, t), n && /* @__PURE__ */ v.createElement(ya, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ v.createElement(Iv, null, r));
}
Sc.propTypes = {
  children: f.node.isRequired,
  leadingElement: f.node,
  trailingElement: f.node,
  floatingLabel: f.node,
  className: f.string,
  size: f.oneOf([jr.SMALL, jr.LARGE])
};
Sc.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const qr = /* @__PURE__ */ v.forwardRef(({
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
    isValid: d,
    getControlProps: g,
    ...x
  } = St(), E = v.useRef(), k = c || E, m = u.size || x.size, [h, y] = u1({
    defaultValue: u.defaultValue,
    value: u.value
  }), w = C.useCallback(() => {
    e === "textarea" && a && (!k.current.initialHeight && !k.current.offsets && (k.current.initialHeight = k.current.offsetHeight, k.current.offsets = k.current.offsetHeight - k.current.clientHeight), k.current.style.height = `${k.current.initialHeight}px`, k.current.style.height = `${k.current.scrollHeight + k.current.offsets}px`);
  }, [e, a, k]);
  C.useEffect(() => {
    w();
  }, [w]);
  const _ = g({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: Gn(y, u.onBlur)
  }), T = (A) => {
    w(), o && o(A);
  };
  return /* @__PURE__ */ v.createElement(Sc, {
    size: m,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: s,
    className: t
  }, /* @__PURE__ */ v.createElement(pv, {
    as: l ? o1 : e,
    ref: k,
    size: m,
    isInvalid: p,
    isValid: d,
    className: H(n, {
      "has-value": h
    }),
    onChange: T,
    mask: l,
    ..._
  }));
}), S1 = ["sm", "lg"];
qr.Feedback = An;
qr.Description = An;
qr.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies base element for the control component. */
  as: f.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: f.func,
  /** Specifies default value of the input component. */
  defaultValue: f.oneOfType([f.string, f.number]),
  /** Specifies current value of the input component. */
  value: f.oneOfType([f.string, f.number]),
  /** Specifies id of the control component. */
  id: f.string,
  /** Specifies class name for the control component. */
  controlClassName: f.string,
  /** Specifies size for the control component. */
  size: f.oneOf(S1),
  /** Specifies leading element to display for the input component. */
  leadingElement: f.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: f.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: f.node,
  /** Specifies whether to render input as plain text. */
  plaintext: f.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: f.bool,
  /** Specifies what format to use for the input mask. */
  inputMask: f.string
};
qr.defaultProps = {
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
function _c({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: s
  } = St(), a = H("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === jr.LARGE,
    "pgn__form-label-sm": r === jr.SMALL
  }, n.className), o = s({
    ...n,
    className: a
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ v.createElement(l, o, e);
}
function _1({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: s,
  ...a
}) {
  return /* @__PURE__ */ v.createElement(s ?? "div", {
    ...a,
    className: H("pgn__form-group", a.className)
  }, /* @__PURE__ */ v.createElement(no, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const T1 = (e) => e, Nv = /* @__PURE__ */ v.createContext({
  getRadioControlProps: T1,
  hasRadioSetProvider: !1
}), A1 = () => C.useContext(Nv);
function Tc({
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
      onBlur: c.onBlur ? Gn(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? Gn(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? Gn(i, c.onChange) : i,
      checked: o ? s === c.value : void 0,
      defaultChecked: o ? void 0 : a === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ v.createElement(Nv.Provider, {
    value: u
  }, e);
}
Tc.propTypes = {
  children: f.node.isRequired,
  name: f.string.isRequired,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.string,
  defaultValue: f.string
};
Tc.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Ac = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = St(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = A1();
  let s = n({
    ...e,
    className: H("pgn__form-radio-input", e.className)
  });
  return i && (s = r(s)), /* @__PURE__ */ v.createElement("input", {
    ...s,
    type: "radio",
    ref: t
  });
});
Ac.propTypes = {
  className: f.string
};
Ac.defaultProps = {
  className: void 0
};
const Ic = /* @__PURE__ */ v.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: s,
  isValid: a,
  ...o
}, l) => /* @__PURE__ */ v.createElement(no, {
  controlId: o.id,
  isInvalid: s,
  isValid: a
}, /* @__PURE__ */ v.createElement("div", {
  className: H("pgn__form-radio", t, {
    "pgn__form-control-valid": a,
    "pgn__form-control-invalid": s,
    "pgn__form-control-disabled": o.disabled
  })
}, /* @__PURE__ */ v.createElement(Ac, {
  ref: l,
  className: n,
  ...o
}), /* @__PURE__ */ v.createElement("div", null, /* @__PURE__ */ v.createElement(_c, {
  className: r
}, e), i && /* @__PURE__ */ v.createElement(An, {
  hasIcon: !1
}, i)))));
Ic.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name for control component. */
  controlClassName: f.string,
  /** Specifies class name for label component. */
  labelClassName: f.string,
  /** Specifies description to show under the radio's value. */
  description: f.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: f.bool
};
Ic.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function io({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ v.createElement(e, {
    className: H(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
io.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies contents of the component. */
  children: f.node
};
io.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function Nc({
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
  } = St();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ v.createElement(Tc, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ v.createElement(io, {
    role: "radiogroup",
    isInline: i,
    ...p
  }, e));
}
Nc.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies name for the component. */
  name: f.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: f.string,
  /** Specifies default values. */
  defaultValue: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies onFocus event handler. */
  onFocus: f.func,
  /** Specifies onBlur event handler. */
  onBlur: f.func
};
Nc.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let _s;
const I1 = new Uint8Array(16);
function N1() {
  if (!_s && (_s = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !_s))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return _s(I1);
}
const Ne = [];
for (let e = 0; e < 256; ++e)
  Ne.push((e + 256).toString(16).slice(1));
function b1(e, t = 0) {
  return Ne[e[t + 0]] + Ne[e[t + 1]] + Ne[e[t + 2]] + Ne[e[t + 3]] + "-" + Ne[e[t + 4]] + Ne[e[t + 5]] + "-" + Ne[e[t + 6]] + Ne[e[t + 7]] + "-" + Ne[e[t + 8]] + Ne[e[t + 9]] + "-" + Ne[e[t + 10]] + Ne[e[t + 11]] + Ne[e[t + 12]] + Ne[e[t + 13]] + Ne[e[t + 14]] + Ne[e[t + 15]];
}
const R1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Bd = {
  randomUUID: R1
};
function P1(e, t, n) {
  if (Bd.randomUUID && !e)
    return Bd.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || N1)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, b1(r);
}
const F1 = (e, t, n) => (r, i, s, ...a) => t(r) && r[i] === void 0 ? new Error(
  `${s}: ${i} is required when ${n}`
) : e(r, i, s, ...a), O1 = (e, t) => t.every((n) => e[n] !== void 0), Go = (e, t) => F1(
  e,
  (n) => Array.isArray(t) ? O1(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
function Hd() {
  return C.useState(null);
}
const Vd = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function M1(e, t) {
  const n = Vd(e), r = Vd(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function L1(e, t) {
  return C.useMemo(() => M1(e, t), [e, t]);
}
var tt = "top", xt = "bottom", wt = "right", nt = "left", bc = "auto", es = [tt, xt, wt, nt], Ur = "start", zi = "end", D1 = "clippingParents", bv = "viewport", ui = "popper", B1 = "reference", jd = /* @__PURE__ */ es.reduce(function(e, t) {
  return e.concat([t + "-" + Ur, t + "-" + zi]);
}, []), Rc = /* @__PURE__ */ [].concat(es, [bc]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ur, t + "-" + zi]);
}, []), H1 = "beforeRead", V1 = "read", j1 = "afterRead", U1 = "beforeMain", $1 = "main", z1 = "afterMain", G1 = "beforeWrite", W1 = "write", Q1 = "afterWrite", X1 = [H1, V1, j1, U1, $1, z1, G1, W1, Q1];
function Ut(e) {
  return e.split("-")[0];
}
function ct(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Jn(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function $t(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Wn = Math.max, Ea = Math.min, $r = Math.round;
function ru() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Rv() {
  return !/^((?!chrome|android).)*safari/i.test(ru());
}
function zr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && $t(e) && (i = e.offsetWidth > 0 && $r(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && $r(r.height) / e.offsetHeight || 1);
  var a = Jn(e) ? ct(e) : window, o = a.visualViewport, l = !Rv() && n, u = (r.left + (l && o ? o.offsetLeft : 0)) / i, c = (r.top + (l && o ? o.offsetTop : 0)) / s, p = r.width / i, d = r.height / s;
  return {
    width: p,
    height: d,
    top: c,
    right: u + p,
    bottom: c + d,
    left: u,
    x: u,
    y: c
  };
}
function Fc(e) {
  var t = zr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Pv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Pc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function In(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rn(e) {
  return ct(e).getComputedStyle(e);
}
function K1(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function Fn(e) {
  return ((Jn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function so(e) {
  return In(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Fn(e)
  );
}
function Ud(e) {
  return !$t(e) || // https://github.com/popperjs/popper-core/issues/837
  rn(e).position === "fixed" ? null : e.offsetParent;
}
function Y1(e) {
  var t = /firefox/i.test(ru()), n = /Trident/i.test(ru());
  if (n && $t(e)) {
    var r = rn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = so(e);
  for (Pc(i) && (i = i.host); $t(i) && ["html", "body"].indexOf(In(i)) < 0; ) {
    var s = rn(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ts(e) {
  for (var t = ct(e), n = Ud(e); n && K1(n) && rn(n).position === "static"; )
    n = Ud(n);
  return n && (In(n) === "html" || In(n) === "body" && rn(n).position === "static") ? t : n || Y1(e) || t;
}
function Oc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Si(e, t, n) {
  return Wn(e, Ea(t, n));
}
function q1(e, t, n) {
  var r = Si(e, t, n);
  return r > n ? n : r;
}
function Fv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ov(e) {
  return Object.assign({}, Fv(), e);
}
function Mv(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Z1 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ov(typeof t != "number" ? t : Mv(t, es));
};
function J1(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, o = Ut(n.placement), l = Oc(o), u = [nt, wt].indexOf(o) >= 0, c = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = Z1(i.padding, n), d = Fc(s), g = l === "y" ? tt : nt, x = l === "y" ? xt : wt, E = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], k = a[l] - n.rects.reference[l], m = ts(s), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = E / 2 - k / 2, w = p[g], _ = h - d[c] - p[x], T = h / 2 - d[c] / 2 + y, A = Si(w, T, _), I = l;
    n.modifiersData[r] = (t = {}, t[I] = A, t.centerOffset = A - T, t);
  }
}
function ew(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Pv(t.elements.popper, i) && (t.elements.arrow = i));
}
const tw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: J1,
  effect: ew,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Gr(e) {
  return e.split("-")[1];
}
var nw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rw(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: $r(n * i) / i || 0,
    y: $r(r * i) / i || 0
  };
}
function $d(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, d = a.x, g = d === void 0 ? 0 : d, x = a.y, E = x === void 0 ? 0 : x, k = typeof c == "function" ? c({
    x: g,
    y: E
  }) : {
    x: g,
    y: E
  };
  g = k.x, E = k.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), y = nt, w = tt, _ = window;
  if (u) {
    var T = ts(n), A = "clientHeight", I = "clientWidth";
    if (T === ct(n) && (T = Fn(n), rn(T).position !== "static" && o === "absolute" && (A = "scrollHeight", I = "scrollWidth")), T = T, i === tt || (i === nt || i === wt) && s === zi) {
      w = xt;
      var F = p && T === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[A]
      );
      E -= F - r.height, E *= l ? 1 : -1;
    }
    if (i === nt || (i === tt || i === xt) && s === zi) {
      y = wt;
      var P = p && T === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[I]
      );
      g -= P - r.width, g *= l ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: o
  }, u && nw), U = c === !0 ? rw({
    x: g,
    y: E
  }, ct(n)) : {
    x: g,
    y: E
  };
  if (g = U.x, E = U.y, l) {
    var W;
    return Object.assign({}, O, (W = {}, W[w] = h ? "0" : "", W[y] = m ? "0" : "", W.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + E + "px)" : "translate3d(" + g + "px, " + E + "px, 0)", W));
  }
  return Object.assign({}, O, (t = {}, t[w] = h ? E + "px" : "", t[y] = m ? g + "px" : "", t.transform = "", t));
}
function iw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, o = n.roundOffsets, l = o === void 0 ? !0 : o, u = {
    placement: Ut(t.placement),
    variation: Gr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $d(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $d(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iw,
  data: {}
};
var Ts = {
  passive: !0
};
function aw(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, o = a === void 0 ? !0 : a, l = ct(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ts);
  }), o && l.addEventListener("resize", n.update, Ts), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ts);
    }), o && l.removeEventListener("resize", n.update, Ts);
  };
}
const ow = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: aw,
  data: {}
};
var lw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $s(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return lw[t];
  });
}
var uw = {
  start: "end",
  end: "start"
};
function zd(e) {
  return e.replace(/start|end/g, function(t) {
    return uw[t];
  });
}
function Mc(e) {
  var t = ct(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Lc(e) {
  return zr(Fn(e)).left + Mc(e).scrollLeft;
}
function cw(e, t) {
  var n = ct(e), r = Fn(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Rv();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + Lc(e),
    y: l
  };
}
function fw(e) {
  var t, n = Fn(e), r = Mc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Wn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Wn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -r.scrollLeft + Lc(e), l = -r.scrollTop;
  return rn(i || n).direction === "rtl" && (o += Wn(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Dc(e) {
  var t = rn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Lv(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : $t(e) && Dc(e) ? e : Lv(so(e));
}
function _i(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Lv(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ct(r), a = i ? [s].concat(s.visualViewport || [], Dc(r) ? r : []) : r, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(_i(so(a)))
  );
}
function iu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dw(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gd(e, t, n) {
  return t === bv ? iu(cw(e, n)) : Jn(t) ? dw(t, n) : iu(fw(Fn(e)));
}
function pw(e) {
  var t = _i(so(e)), n = ["absolute", "fixed"].indexOf(rn(e).position) >= 0, r = n && $t(e) ? ts(e) : e;
  return Jn(r) ? t.filter(function(i) {
    return Jn(i) && Pv(i, r) && In(i) !== "body";
  }) : [];
}
function hw(e, t, n, r) {
  var i = t === "clippingParents" ? pw(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], o = s.reduce(function(l, u) {
    var c = Gd(e, u, r);
    return l.top = Wn(c.top, l.top), l.right = Ea(c.right, l.right), l.bottom = Ea(c.bottom, l.bottom), l.left = Wn(c.left, l.left), l;
  }, Gd(e, a, r));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Dv(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Ut(r) : null, s = r ? Gr(r) : null, a = t.x + t.width / 2 - n.width / 2, o = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case tt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case xt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case wt:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case nt:
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
  var u = i ? Oc(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case Ur:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case zi:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Gi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, o = n.boundary, l = o === void 0 ? D1 : o, u = n.rootBoundary, c = u === void 0 ? bv : u, p = n.elementContext, d = p === void 0 ? ui : p, g = n.altBoundary, x = g === void 0 ? !1 : g, E = n.padding, k = E === void 0 ? 0 : E, m = Ov(typeof k != "number" ? k : Mv(k, es)), h = d === ui ? B1 : ui, y = e.rects.popper, w = e.elements[x ? h : d], _ = hw(Jn(w) ? w : w.contextElement || Fn(e.elements.popper), l, c, a), T = zr(e.elements.reference), A = Dv({
    reference: T,
    element: y,
    placement: i
  }), I = iu(Object.assign({}, y, A)), F = d === ui ? I : T, P = {
    top: _.top - F.top + m.top,
    bottom: F.bottom - _.bottom + m.bottom,
    left: _.left - F.left + m.left,
    right: F.right - _.right + m.right
  }, O = e.modifiersData.offset;
  if (d === ui && O) {
    var U = O[i];
    Object.keys(P).forEach(function(W) {
      var ae = [wt, xt].indexOf(W) >= 0 ? 1 : -1, me = [tt, xt].indexOf(W) >= 0 ? "y" : "x";
      P[W] += U[me] * ae;
    });
  }
  return P;
}
function mw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, o = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Rc : l, c = Gr(r), p = c ? o ? jd : jd.filter(function(x) {
    return Gr(x) === c;
  }) : es, d = p.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  d.length === 0 && (d = p);
  var g = d.reduce(function(x, E) {
    return x[E] = Gi(e, {
      placement: E,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Ut(E)], x;
  }, {});
  return Object.keys(g).sort(function(x, E) {
    return g[x] - g[E];
  });
}
function vw(e) {
  if (Ut(e) === bc)
    return [];
  var t = $s(e);
  return [zd(e), t, zd(t)];
}
function gw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, d = n.altBoundary, g = n.flipVariations, x = g === void 0 ? !0 : g, E = n.allowedAutoPlacements, k = t.options.placement, m = Ut(k), h = m === k, y = l || (h || !x ? [$s(k)] : vw(k)), w = [k].concat(y).reduce(function(z, re) {
      return z.concat(Ut(re) === bc ? mw(t, {
        placement: re,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: E
      }) : re);
    }, []), _ = t.rects.reference, T = t.rects.popper, A = /* @__PURE__ */ new Map(), I = !0, F = w[0], P = 0; P < w.length; P++) {
      var O = w[P], U = Ut(O), W = Gr(O) === Ur, ae = [tt, xt].indexOf(U) >= 0, me = ae ? "width" : "height", ee = Gi(t, {
        placement: O,
        boundary: c,
        rootBoundary: p,
        altBoundary: d,
        padding: u
      }), J = ae ? W ? wt : nt : W ? xt : tt;
      _[me] > T[me] && (J = $s(J));
      var R = $s(J), D = [];
      if (s && D.push(ee[U] <= 0), o && D.push(ee[J] <= 0, ee[R] <= 0), D.every(function(z) {
        return z;
      })) {
        F = O, I = !1;
        break;
      }
      A.set(O, D);
    }
    if (I)
      for (var B = x ? 3 : 1, Q = function(re) {
        var Ie = w.find(function(_t) {
          var Gt = A.get(_t);
          if (Gt)
            return Gt.slice(0, re).every(function(ar) {
              return ar;
            });
        });
        if (Ie)
          return F = Ie, "break";
      }, b = B; b > 0; b--) {
        var oe = Q(b);
        if (oe === "break") break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const yw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Wd(e, t, n) {
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
function Qd(e) {
  return [tt, wt, xt, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function Ew(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Gi(t, {
    elementContext: "reference"
  }), o = Gi(t, {
    altBoundary: !0
  }), l = Wd(a, r), u = Wd(o, i, s), c = Qd(l), p = Qd(u);
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
const xw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ew
};
function ww(e, t, n) {
  var r = Ut(e), i = [nt, tt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], o = s[1];
  return a = a || 0, o = (o || 0) * i, [nt, wt].indexOf(r) >= 0 ? {
    x: o,
    y: a
  } : {
    x: a,
    y: o
  };
}
function Cw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Rc.reduce(function(c, p) {
    return c[p] = ww(p, t.rects, s), c;
  }, {}), o = a[t.placement], l = o.x, u = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const kw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cw
};
function Sw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Dv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const _w = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sw,
  data: {}
};
function Tw(e) {
  return e === "x" ? "y" : "x";
}
function Aw(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, o = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, d = n.tether, g = d === void 0 ? !0 : d, x = n.tetherOffset, E = x === void 0 ? 0 : x, k = Gi(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), m = Ut(t.placement), h = Gr(t.placement), y = !h, w = Oc(m), _ = Tw(w), T = t.modifiersData.popperOffsets, A = t.rects.reference, I = t.rects.popper, F = typeof E == "function" ? E(Object.assign({}, t.rects, {
    placement: t.placement
  })) : E, P = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (T) {
    if (s) {
      var W, ae = w === "y" ? tt : nt, me = w === "y" ? xt : wt, ee = w === "y" ? "height" : "width", J = T[w], R = J + k[ae], D = J - k[me], B = g ? -I[ee] / 2 : 0, Q = h === Ur ? A[ee] : I[ee], b = h === Ur ? -I[ee] : -A[ee], oe = t.elements.arrow, z = g && oe ? Fc(oe) : {
        width: 0,
        height: 0
      }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Fv(), Ie = re[ae], _t = re[me], Gt = Si(0, A[ee], z[ee]), ar = y ? A[ee] / 2 - B - Gt - Ie - P.mainAxis : Q - Gt - Ie - P.mainAxis, ns = y ? -A[ee] / 2 + B + Gt + _t + P.mainAxis : b + Gt + _t + P.mainAxis, or = t.elements.arrow && ts(t.elements.arrow), rs = or ? w === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, is = (W = O == null ? void 0 : O[w]) != null ? W : 0, co = J + ar - is - rs, fo = J + ns - is, lr = Si(g ? Ea(R, co) : R, J, g ? Wn(D, fo) : D);
      T[w] = lr, U[w] = lr - J;
    }
    if (o) {
      var xe, Ke = w === "x" ? tt : nt, He = w === "x" ? xt : wt, Se = T[_], on = _ === "y" ? "height" : "width", ss = Se + k[Ke], Jr = Se - k[He], ei = [tt, nt].indexOf(m) !== -1, rf = (xe = O == null ? void 0 : O[_]) != null ? xe : 0, sf = ei ? ss : Se - A[on] - I[on] - rf + P.altAxis, af = ei ? Se + A[on] + I[on] - rf - P.altAxis : Jr, of = g && ei ? q1(sf, Se, af) : Si(g ? sf : ss, Se, g ? af : Jr);
      T[_] = of, U[_] = of - Se;
    }
    t.modifiersData[r] = U;
  }
}
const Iw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Aw,
  requiresIfExists: ["offset"]
};
function Nw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bw(e) {
  return e === ct(e) || !$t(e) ? Mc(e) : Nw(e);
}
function Rw(e) {
  var t = e.getBoundingClientRect(), n = $r(t.width) / e.offsetWidth || 1, r = $r(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Pw(e, t, n) {
  n === void 0 && (n = !1);
  var r = $t(t), i = $t(t) && Rw(t), s = Fn(t), a = zr(e, i, n), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((In(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Dc(s)) && (o = bw(t)), $t(t) ? (l = zr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Lc(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Fw(e) {
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
function Ow(e) {
  var t = Fw(e);
  return X1.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Mw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Lw(e) {
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
var Xd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Dw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Xd : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xd, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], d = !1, g = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        E(), c.options = Object.assign({}, s, c.options, h), c.scrollParents = {
          reference: Jn(o) ? _i(o) : o.contextElement ? _i(o.contextElement) : [],
          popper: _i(l)
        };
        var y = Ow(Lw([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(w) {
          return w.enabled;
        }), x(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var m = c.elements, h = m.reference, y = m.popper;
          if (Kd(h, y)) {
            c.rects = {
              reference: Pw(h, ts(y), c.options.strategy === "fixed"),
              popper: Fc(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
              return c.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var _ = c.orderedModifiers[w], T = _.fn, A = _.options, I = A === void 0 ? {} : A, F = _.name;
              typeof T == "function" && (c = T({
                state: c,
                options: I,
                name: F,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mw(function() {
        return new Promise(function(k) {
          g.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        E(), d = !0;
      }
    };
    if (!Kd(o, l))
      return g;
    g.setOptions(u).then(function(k) {
      !d && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function x() {
      c.orderedModifiers.forEach(function(k) {
        var m = k.name, h = k.options, y = h === void 0 ? {} : h, w = k.effect;
        if (typeof w == "function") {
          var _ = w({
            state: c,
            name: m,
            instance: g,
            options: y
          }), T = function() {
          };
          p.push(_ || T);
        }
      });
    }
    function E() {
      p.forEach(function(k) {
        return k();
      }), p = [];
    }
    return g;
  };
}
var Bw = Dw({
  defaultModifiers: [xw, _w, sw, ow, kw, yw, Iw, tw]
});
function Bv() {
  const e = C.useRef(!0), t = C.useRef(() => e.current);
  return C.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function Hw(e) {
  const t = Bv();
  return [e[0], C.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Yd = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, Vw = {
  name: "applyStyles",
  enabled: !1
}, jw = {
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
}, Uw = [];
function $w(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, s = i === void 0 ? !0 : i, a = r.placement, o = a === void 0 ? "bottom" : a, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, p = c === void 0 ? Uw : c, d = ie(r, ["enabled", "placement", "strategy", "modifiers"]), g = C.useRef(), x = C.useCallback(function() {
    var w;
    (w = g.current) == null || w.update();
  }, []), E = C.useCallback(function() {
    var w;
    (w = g.current) == null || w.forceUpdate();
  }, []), k = Hw(C.useState({
    placement: o,
    update: x,
    forceUpdate: E,
    attributes: {},
    styles: {
      popper: Yd(u),
      arrow: {}
    }
  })), m = k[0], h = k[1], y = C.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(_) {
        var T = _.state, A = {}, I = {};
        Object.keys(T.elements).forEach(function(F) {
          A[F] = T.styles[F], I[F] = T.attributes[F];
        }), h({
          state: T,
          styles: A,
          attributes: I,
          update: x,
          forceUpdate: E,
          placement: T.placement
        });
      }
    };
  }, [x, E, h]);
  return C.useEffect(function() {
    !g.current || !s || g.current.setOptions({
      placement: o,
      strategy: u,
      modifiers: [].concat(p, [y, Vw])
    });
  }, [u, o, y, s]), C.useEffect(function() {
    if (!(!s || e == null || t == null))
      return g.current = Bw(e, t, $({}, d, {
        placement: o,
        strategy: u,
        modifiers: [].concat(p, [jw, y])
      })), function() {
        g.current != null && (g.current.destroy(), g.current = void 0, h(function(w) {
          return $({}, w, {
            attributes: {},
            styles: {
              popper: Yd(u)
            }
          });
        }));
      };
  }, [s, e, t]), m;
}
function Hv(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const zw = !!(typeof window < "u" && window.document && window.document.createElement);
var su = !1, au = !1;
try {
  var Wo = {
    get passive() {
      return su = !0;
    },
    get once() {
      return au = su = !0;
    }
  };
  zw && (window.addEventListener("test", Wo, Wo), window.removeEventListener("test", Wo, !0));
} catch {
}
function Gw(e, t, n, r) {
  if (r && typeof r != "boolean" && !au) {
    var i = r.once, s = r.capture, a = n;
    !au && i && (a = n.__once || function o(l) {
      this.removeEventListener(t, o, s), n.call(this, l);
    }, n.__once = a), e.addEventListener(t, a, su ? r : s);
  }
  e.addEventListener(t, n, r);
}
function Ww(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function _r(e, t, n, r) {
  return Gw(e, t, n, r), function() {
    Ww(e, t, n, r);
  };
}
function Qw(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function ou(e) {
  const t = Qw(e);
  return C.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function Bc(e) {
  return e && e.ownerDocument || document;
}
function xa(e) {
  return e && "setState" in e ? kr.findDOMNode(e) : e ?? null;
}
const Xw = function(e) {
  return Bc(xa(e));
};
var Kw = 27, qd = function() {
};
function Yw(e) {
  return e.button === 0;
}
function qw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Zd = function(t) {
  return t && ("current" in t ? t.current : t);
};
function Zw(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, s = r.clickTrigger, a = s === void 0 ? "click" : s, o = C.useRef(!1), l = t || qd, u = C.useCallback(function(d) {
    var g, x = Zd(e);
    bx(!!x, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), o.current = !x || qw(d) || !Yw(d) || !!Hv(x, (g = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? g : d.target);
  }, [e]), c = ou(function(d) {
    o.current || l(d);
  }), p = ou(function(d) {
    d.keyCode === Kw && l(d);
  });
  C.useEffect(function() {
    if (!(i || e == null)) {
      var d = window.event, g = Xw(Zd(e)), x = _r(g, a, u, !0), E = _r(g, a, function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        c(h);
      }), k = _r(g, "keyup", function(h) {
        if (h === d) {
          d = void 0;
          return;
        }
        p(h);
      }), m = [];
      return "ontouchstart" in g.documentElement && (m = [].slice.call(g.body.children).map(function(h) {
        return _r(h, "mousemove", qd);
      })), function() {
        x(), E(), k(), m.forEach(function(h) {
          return h();
        });
      };
    }
  }, [e, i, a, u, c, p]);
}
var Qo = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Bc().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function Jd(e, t) {
  var n = C.useState(function() {
    return Qo(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var s = Qo(e);
    s && i(s);
  }
  return C.useEffect(function() {
  }, [t, r]), C.useEffect(function() {
    var a = Qo(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function Jw(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function eC(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function tC(e) {
  var t, n, r, i, s = e.enabled, a = e.enableEvents, o = e.placement, l = e.flip, u = e.offset, c = e.fixed, p = e.containerPadding, d = e.arrowElement, g = e.popperConfig, x = g === void 0 ? {} : g, E = Jw(x.modifiers);
  return $({}, x, {
    placement: o,
    enabled: s,
    strategy: c ? "fixed" : x.strategy,
    modifiers: eC($({}, E, {
      eventListeners: {
        enabled: a
      },
      preventOverflow: $({}, E.preventOverflow, {
        options: p ? $({
          padding: p
        }, (t = E.preventOverflow) == null ? void 0 : t.options) : (n = E.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: $({
          offset: u
        }, (r = E.offset) == null ? void 0 : r.options)
      },
      arrow: $({}, E.arrow, {
        enabled: !!d,
        options: $({}, (i = E.arrow) == null ? void 0 : i.options, {
          element: d
        })
      }),
      flip: $({
        enabled: !!l
      }, E.flip)
    }))
  });
}
var Hc = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, s = e.containerPadding, a = s === void 0 ? 5 : s, o = e.popperConfig, l = o === void 0 ? {} : o, u = e.transition, c = Hd(), p = c[0], d = c[1], g = Hd(), x = g[0], E = g[1], k = L1(d, t), m = Jd(e.container), h = Jd(e.target), y = C.useState(!e.show), w = y[0], _ = y[1], T = $w(h, p, tC({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: a || 5,
    flip: n,
    offset: r,
    arrowElement: x,
    popperConfig: l
  })), A = T.styles, I = T.attributes, F = ie(T, ["styles", "attributes"]);
  e.show ? w && _(!1) : !e.transition && !w && _(!0);
  var P = function() {
    _(!0), e.onExited && e.onExited.apply(e, arguments);
  }, O = e.show || u && !w;
  if (Zw(p, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !O)
    return null;
  var U = e.children($({}, F, {
    show: !!e.show,
    props: $({}, I.popper, {
      style: A.popper,
      ref: k
    }),
    arrowProps: $({}, I.arrow, {
      style: A.arrow,
      ref: E
    })
  }));
  if (u) {
    var W = e.onExit, ae = e.onExiting, me = e.onEnter, ee = e.onEntering, J = e.onEntered;
    U = /* @__PURE__ */ v.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: W,
      onExiting: ae,
      onExited: P,
      onEnter: me,
      onEntering: ee,
      onEntered: J
    }, U);
  }
  return m ? /* @__PURE__ */ kr.createPortal(U, m) : null;
});
Hc.displayName = "Overlay";
Hc.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: f.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: f.oneOf(Rc),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: f.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: f.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: f.bool,
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
  children: f.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: f.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: f.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: f.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: f.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: f.bool,
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
      return (s = f.func).isRequired.apply(s, [t].concat(r));
    }
    return f.func.apply(f, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: f.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: f.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: f.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: f.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: f.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: f.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: f.func
};
function Xo(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Ko(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, s = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: s
  };
}
function nC() {
  var e = C.useRef(null), t = C.useRef(null), n = C.useRef(null), r = ke(void 0, "popover"), i = ke(void 0, "dropdown-menu"), s = C.useCallback(function(u) {
    !u || !(Xo(u, r) || Xo(u, i)) || (t.current = Ko(u), u.style.margin = "0", e.current = u);
  }, [r, i]), a = C.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var p = c.placement;
          if (!t.current) return [0, 0];
          var d = t.current, g = d.top, x = d.left, E = d.bottom, k = d.right;
          switch (p.split("-")[0]) {
            case "top":
              return [0, E];
            case "left":
              return [0, k];
            case "bottom":
              return [0, g];
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
          var c = n.current, p = c.top, d = c.right, g = p || d;
          return {
            top: g,
            left: g,
            right: g,
            bottom: g
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
        if (!(!e.current || !p.elements.arrow || !Xo(e.current, r))) {
          if (p.modifiersData["arrow#persistent"]) {
            var d = Ko(p.elements.arrow), g = d.top, x = d.right, E = g || x;
            p.modifiersData["arrow#persistent"].padding = {
              top: E,
              left: E,
              right: E,
              bottom: E
            };
          } else
            n.current = Ko(p.elements.arrow);
          return p.elements.arrow.style.margin = "0", function() {
            p.elements.arrow && (p.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [s, [a, o, l]];
}
function lu(e, t) {
  return lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, lu(e, t);
}
function Vv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, lu(e, t);
}
const ep = {
  disabled: !1
}, jv = v.createContext(null);
var rC = function(t) {
  return t.scrollTop;
}, hi = "unmounted", Dn = "exited", fn = "entering", Bn = "entered", uu = "exiting", an = /* @__PURE__ */ function(e) {
  Vv(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, o = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? o ? (l = Dn, s.appearStatus = fn) : l = Bn : r.unmountOnExit || r.mountOnEnter ? l = hi : l = Dn, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === hi ? {
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
      this.props.in ? a !== fn && a !== Bn && (s = fn) : (a === fn || a === Bn) && (s = uu);
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
      if (this.cancelNextCallback(), s === fn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : kr.findDOMNode(this);
          a && rC(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Dn && this.setState({
      status: hi
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, o = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [o] : [kr.findDOMNode(this), o], u = l[0], c = l[1], p = this.getTimeouts(), d = o ? p.appear : p.enter;
    if (!i && !a || ep.disabled) {
      this.safeSetState({
        status: Bn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: fn
    }, function() {
      s.props.onEntering(u, c), s.onTransitionEnd(d, function() {
        s.safeSetState({
          status: Bn
        }, function() {
          s.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), o = this.props.nodeRef ? void 0 : kr.findDOMNode(this);
    if (!s || ep.disabled) {
      this.safeSetState({
        status: Dn
      }, function() {
        i.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({
      status: uu
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : kr.findDOMNode(this), o = i == null && !this.props.addEndListener;
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
    if (i === hi)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var o = ie(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ v.createElement(jv.Provider, {
        value: null
      }, typeof a == "function" ? a(i, o) : v.cloneElement(v.Children.only(a), o))
    );
  }, t;
}(v.Component);
an.contextType = jv;
an.propTypes = {};
function cr() {
}
an.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: cr,
  onEntering: cr,
  onEntered: cr,
  onExit: cr,
  onExiting: cr,
  onExited: cr
};
an.UNMOUNTED = hi;
an.EXITED = Dn;
an.ENTERING = fn;
an.ENTERED = Bn;
an.EXITING = uu;
function iC(e) {
  var t = Bc(e);
  return t && t.defaultView || window;
}
function sC(e, t) {
  return iC(e).getComputedStyle(e, t);
}
var aC = /([A-Z])/g;
function oC(e) {
  return e.replace(aC, "-$1").toLowerCase();
}
var lC = /^ms-/;
function As(e) {
  return oC(e).replace(lC, "-ms-");
}
var uC = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function cC(e) {
  return !!(e && uC.test(e));
}
function Uv(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(As(t)) || sC(e).getPropertyValue(As(t));
  Object.keys(t).forEach(function(i) {
    var s = t[i];
    !s && s !== 0 ? e.style.removeProperty(As(i)) : cC(i) ? r += i + "(" + s + ") " : n += As(i) + ": " + s + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function fC(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function dC(e) {
  var t = Uv(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function pC(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || fC(e, "transitionend", !0);
  }, t + n), s = _r(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), s();
  };
}
function hC(e, t, n, r) {
  n == null && (n = dC(e) || 0);
  var i = pC(e, n, r), s = _r(e, "transitionend", t);
  return function() {
    i(), s();
  };
}
function tp(e, t) {
  var n = Uv(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function mC(e, t) {
  var n = tp(e, "transitionDuration"), r = tp(e, "transitionDelay"), i = hC(e, function(s) {
    s.target === e && (i(), t(s));
  }, n + r);
}
function vC(e) {
  e.offsetHeight;
}
var gC = ["className", "children"], Is, yC = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, EC = (Is = {}, Is[fn] = "show", Is[Bn] = "show", Is), Zr = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ie(e, gC), s = C.useCallback(function(a) {
    vC(a), i.onEnter && i.onEnter(a);
  }, [i]);
  return /* @__PURE__ */ v.createElement(an, $({
    ref: t,
    addEndListener: mC
  }, i, {
    onEnter: s
  }), function(a, o) {
    return /* @__PURE__ */ v.cloneElement(r, $({}, o, {
      className: H("fade", n, r.props.className, EC[a])
    }));
  });
});
Zr.defaultProps = yC;
Zr.displayName = "Fade";
var xC = ["children", "transition", "popperConfig"], wC = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], CC = {
  transition: Zr,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function kC(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(xa(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(xa(i));
  });
}
function $v(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, s = ie(e, xC), a = C.useRef({}), o = nC(), l = o[0], u = o[1], c = n === !0 ? Zr : n || null;
  return /* @__PURE__ */ v.createElement(Hc, $({}, s, {
    ref: l,
    popperConfig: $({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(p) {
    var d, g = p.props, x = p.arrowProps, E = p.show, k = p.update;
    p.forceUpdate;
    var m = p.placement, h = p.state, y = ie(p, wC);
    kC(g, x);
    var w = Object.assign(a.current, {
      state: h,
      scheduleUpdate: k,
      placement: m,
      outOfBoundaries: (h == null || (d = h.modifiersData.hide) == null ? void 0 : d.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t($({}, y, g, {
      placement: m,
      show: E
    }, !n && E && {
      className: "show"
    }, {
      popper: w,
      arrowProps: x
    })) : /* @__PURE__ */ v.cloneElement(t, $({}, y, g, {
      placement: m,
      arrowProps: x,
      popper: w,
      className: H(t.props.className, !n && E && "show"),
      style: $({}, t.props.style, g.style)
    }));
  });
}
$v.defaultProps = CC;
function SC(e) {
  const t = C.useRef(e);
  return t.current = e, t;
}
function _C(e) {
  const t = SC(e);
  C.useEffect(() => () => t.current(), []);
}
const cu = 2 ** 31 - 1;
function zv(e, t, n) {
  const r = n - Date.now();
  e.current = r <= cu ? setTimeout(t, r) : setTimeout(() => zv(e, t, n), cu);
}
function TC() {
  const e = Bv(), t = C.useRef();
  return _C(() => clearTimeout(t.current)), C.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, s = 0) {
      e() && (n(), s <= cu ? t.current = setTimeout(i, s) : zv(t, i, Date.now() + s));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function np(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function AC(e) {
  var t = IC(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function IC(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Gv(e, t, n) {
  var r = C.useRef(e !== void 0), i = C.useState(t), s = i[0], a = i[1], o = e !== void 0, l = r.current;
  return r.current = o, !o && l && s !== t && a(t), [o ? e : s, C.useCallback(function(u) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      p[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(p)), a(u);
  }, [n])];
}
function NC(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, s = n, a = s[np(r)], o = s[r], l = ie(s, [np(r), r].map(AC)), u = t[r], c = Gv(o, a, e[u]), p = c[0], d = c[1];
    return $({}, l, (i = {}, i[r] = p, i[u] = d, i));
  }, e);
}
var bC = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], RC = /* @__PURE__ */ function(e) {
  Vv(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(v.Component);
function PC(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function rp(e, t, n) {
  var r = t[0], i = r.currentTarget, s = r.relatedTarget || r.nativeEvent[n];
  (!s || s !== i) && !Hv(i, s) && e.apply(void 0, t);
}
var FC = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function Wv(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, s = i === void 0 ? {} : i, a = e.show, o = e.defaultShow, l = o === void 0 ? !1 : o, u = e.onToggle, c = e.delay, p = e.placement, d = e.flip, g = d === void 0 ? p && p.indexOf("auto") !== -1 : d, x = ie(e, bC), E = C.useRef(null), k = TC(), m = C.useRef(""), h = Gv(a, l, u), y = h[0], w = h[1], _ = PC(c), T = typeof r != "function" ? v.Children.only(r).props : {}, A = T.onFocus, I = T.onBlur, F = T.onClick, P = C.useCallback(function() {
    return xa(E.current);
  }, []), O = C.useCallback(function() {
    if (k.clear(), m.current = "show", !_.show) {
      w(!0);
      return;
    }
    k.set(function() {
      m.current === "show" && w(!0);
    }, _.show);
  }, [_.show, w, k]), U = C.useCallback(function() {
    if (k.clear(), m.current = "hide", !_.hide) {
      w(!1);
      return;
    }
    k.set(function() {
      m.current === "hide" && w(!1);
    }, _.hide);
  }, [_.hide, w, k]), W = C.useCallback(function() {
    O();
    for (var B = arguments.length, Q = new Array(B), b = 0; b < B; b++)
      Q[b] = arguments[b];
    A == null || A.apply(void 0, Q);
  }, [O, A]), ae = C.useCallback(function() {
    U();
    for (var B = arguments.length, Q = new Array(B), b = 0; b < B; b++)
      Q[b] = arguments[b];
    I == null || I.apply(void 0, Q);
  }, [U, I]), me = C.useCallback(function() {
    w(!y), F && F.apply(void 0, arguments);
  }, [F, w, y]), ee = C.useCallback(function() {
    for (var B = arguments.length, Q = new Array(B), b = 0; b < B; b++)
      Q[b] = arguments[b];
    rp(O, Q, "fromElement");
  }, [O]), J = C.useCallback(function() {
    for (var B = arguments.length, Q = new Array(B), b = 0; b < B; b++)
      Q[b] = arguments[b];
    rp(U, Q, "toElement");
  }, [U]), R = t == null ? [] : [].concat(t), D = {};
  return R.indexOf("click") !== -1 && (D.onClick = me), R.indexOf("focus") !== -1 && (D.onFocus = W, D.onBlur = ae), R.indexOf("hover") !== -1 && (D.onMouseOver = ee, D.onMouseOut = J), /* @__PURE__ */ v.createElement(v.Fragment, null, typeof r == "function" ? r($({}, D, {
    ref: E
  })) : /* @__PURE__ */ v.createElement(RC, {
    ref: E
  }, /* @__PURE__ */ C.cloneElement(r, D)), /* @__PURE__ */ v.createElement($v, $({}, x, {
    show: y,
    onHide: U,
    flip: g,
    placement: p,
    popperConfig: s,
    target: P
  }), n));
}
Wv.defaultProps = FC;
const Qv = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], OC = ["hover", "click", "focus"];
function Vc(e) {
  return /* @__PURE__ */ v.createElement(Wv, {
    ...e
  }, e.children);
}
const ip = f.oneOf(OC);
f.node.isRequired, f.oneOfType([f.elementType, f.func]), f.func, f.func, f.func, f.func, f.func, f.func, f.func, f.oneOf(Qv), f.shape({}), f.bool, f.oneOf(["click", "mousedown"]), f.bool, f.oneOfType([f.elementType, f.func]), f.oneOfType([f.object, f.bool]);
Vc.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: f.oneOfType([f.element, f.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: f.oneOfType([f.element, f.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: f.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: f.oneOfType([f.number, f.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: f.bool,
  onHide: f.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: f.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: f.oneOf(Qv),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: f.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: f.bool,
  target: f.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: f.oneOfType([ip, f.arrayOf(ip)])
};
Vc.defaultProps = {
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
var sp = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(s, a, o, l, u) {
      var c = o || "<<anonymous>>", p = u || a;
      if (s[a] == null)
        return new Error("The " + l + " `" + p + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var d = arguments.length, g = Array(d > 5 ? d - 5 : 0), x = 5; x < d; x++)
        g[x - 5] = arguments[x];
      return r.apply(void 0, [s, a, o, l, u].concat(g));
    };
  }
  e.exports = t.default;
})(sp, sp.exports);
var MC = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], LC = {
  placement: "right"
}, ao = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, s = e.style, a = e.children, o = e.arrowProps;
  e.popper, e.show;
  var l = ie(e, MC);
  n = ke(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ v.createElement("div", $({
    ref: t,
    style: s,
    role: "tooltip",
    "x-placement": c,
    className: H(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ v.createElement("div", $({
    className: "arrow"
  }, o)), /* @__PURE__ */ v.createElement("div", {
    className: n + "-inner"
  }, a));
});
ao.defaultProps = LC;
ao.displayName = "Tooltip";
const DC = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], wa = /* @__PURE__ */ v.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ v.createElement(ao, {
  ...n,
  className: H({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
wa.propTypes = {
  ...ao.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: f.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: f.oneOf(DC),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: f.shape({
    ref: f.oneOfType([f.func, f.shape({
      current: f.element
    })]),
    style: f.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: f.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: f.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string,
  /** Specifies the content of the `Tooltip` */
  children: f.node,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** The visual style of the `Tooltip` */
  variant: f.string
};
wa.defaultProps = {
  ...wa.defaultProps,
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
const jc = /* @__PURE__ */ v.forwardRef(({
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
  iconAs: u = ut,
  isActive: c = !1,
  children: p,
  // unused, just here because we don't want it to be part of 'attrs'
  ...d
}, g) => {
  const x = n ? "inverse-" : "", E = c ? `${l}-` : "", k = u;
  return /* @__PURE__ */ v.createElement("button", {
    "aria-label": t,
    className: H("btn-icon", `btn-icon-${x}${l}`, `btn-icon-${o}`, {
      [`btn-icon-${x}${E}active`]: c
    }, e),
    onClick: a,
    type: "button",
    ref: g,
    ...d
  }, /* @__PURE__ */ v.createElement("span", {
    className: "btn-icon__icon-container"
  }, k && /* @__PURE__ */ v.createElement(k, {
    className: H("btn-icon__icon", s),
    icon: r,
    src: i
  })));
});
function BC({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ v.createElement(Vc, {
    placement: e,
    overlay: /* @__PURE__ */ v.createElement(wa, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ v.createElement(jc, {
    ...n
  }));
}
jc.IconButtonWithTooltip = BC;
var HC = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], Xv = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, s = e.size, a = e.children, o = e.as, l = o === void 0 ? "div" : o, u = e.className, c = ie(e, HC);
  n = ke(n, "spinner");
  var p = n + "-" + i;
  return /* @__PURE__ */ v.createElement(l, $({
    ref: t
  }, c, {
    className: H(u, p, s && p + "-" + s, r && "text-" + r)
  }), a);
});
Xv.displayName = "Spinner";
const VC = /* @__PURE__ */ v.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: H("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ v.createElement(Xv, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ v.createElement("span", {
    className: "sr-only"
  }, t));
});
function jC({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function UC({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function $C({
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
  i === "Enter" && s && jC({
    event: e,
    currentIndex: o,
    activeElement: s
  }), UC({
    event: e,
    currentIndex: o,
    availableElements: a
  });
}
function zC(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = C.useRef();
  return C.useEffect(() => {
    const i = (s) => {
      $C({
        event: s,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const ap = {
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
}, Uc = /* @__PURE__ */ C.forwardRef(({
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
  onChange: d,
  helpMessage: g,
  ...x
}, E) => {
  const k = Ka(), m = C.useRef(), h = zC({
    selectors: t,
    ignoredKeys: n
  }), [y, w] = C.useState(!1), [_, T] = C.useState(!1), [A, I] = C.useState(!1), [F, P] = C.useState(!1), [O, U] = C.useState((i == null ? void 0 : i.userProvidedText) || ""), [W, ae] = C.useState([]), [me, ee] = C.useState(null), [J, R] = C.useState(!0), [D, B] = C.useState(""), Q = (xe) => {
    ee(xe);
  }, b = () => {
    ae([]), w(!1), ee(null);
  }, oe = (xe, Ke) => {
    const He = xe.currentTarget.getAttribute("data-value"), Se = xe.currentTarget.id;
    I(!0), P(!0), U(He), d && (!i || i && He !== i.selectionValue) && d({
      userProvidedText: He,
      selectionValue: He,
      selectionId: Se
    }), b(), Ke && Ke(xe);
  };
  function z(xe = "") {
    let Ke = v.Children.map(e, (He) => {
      const {
        children: Se,
        onClick: on,
        ...ss
      } = He.props, Jr = He.props.id ?? P1();
      return /* @__PURE__ */ v.cloneElement(He, {
        ...ss,
        children: Se,
        "data-value": Se,
        onClick: (ei) => oe(ei, on),
        id: Jr,
        onFocus: () => Q(Jr)
      });
    });
    return xe.length > 0 && (Ke = Ke.filter((He) => He.props.children.toLowerCase().includes(xe.toLowerCase()))), Ke;
  }
  const re = () => {
    ae(z(O)), R(!0), B(""), w(!0);
  }, Ie = () => {
    y ? b() : re();
  }, _t = /* @__PURE__ */ v.createElement(jc, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: y ? g1 : v1,
    iconAs: ut,
    size: "sm",
    variant: "secondary",
    alt: y ? k.formatMessage(ap.iconButtonClosed) : k.formatMessage(ap.iconButtonOpened),
    onClick: Ie
  }), Gt = () => {
    T(!0);
  }, ar = () => {
    if (c) {
      R(!1), B(p);
      return;
    }
    if (a && !A) {
      R(!1), B(o);
      return;
    }
    if (A && l && !F) {
      R(!1), B(u);
      return;
    }
    R(!0), B("");
  };
  C.useImperativeHandle(E, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: ar
  }));
  const ns = () => {
    T(!1), b(), ar();
  }, or = (xe) => {
    if (_) {
      if (xe.key === "Escape") {
        xe.preventDefault(), m && m.current.focus(), b();
        return;
      }
      xe.key === "Tab" && ns();
    }
  }, rs = (xe) => {
    h.current && !h.current.contains(xe.target) && _ && ns();
  };
  C.useEffect(() => (document.addEventListener("keydown", or), document.addEventListener("click", rs, !0), () => {
    document.removeEventListener("click", rs, !0), document.removeEventListener("keydown", or);
  })), C.useEffect(() => {
    U(i ? i.userProvidedText ?? "" : ""), I(!!i && !!i.userProvidedText), P(!!i && !!i.selectionValue);
  }, [i]);
  const is = () => {
    re();
  }, co = (xe) => {
    const Ke = xe.target.value;
    if (!Ke.length) {
      U(""), I(!1), P(!1), ae([]), b(), d && d({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    I(!0);
    const He = z(Ke);
    ae(He);
    const Se = He.find((on) => on.props.children.toLowerCase() === Ke.toLowerCase());
    if (!Se) {
      P(!1), U(Ke), d && d({
        userProvidedText: Ke,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    P(!0), U(Se.props.children), d && d({
      userProvidedText: Se.props.children,
      selectionValue: Se.props.children,
      selectionId: Se.props.id
    });
  }, {
    getControlProps: fo
  } = St(), lr = fo(x);
  return /* @__PURE__ */ v.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: h,
    onFocus: Gt
  }, /* @__PURE__ */ v.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${W.length} options found`), /* @__PURE__ */ v.createElement(no, {
    controlId: lr.id,
    isInvalid: !J
  }, /* @__PURE__ */ v.createElement(qr, {
    ref: m,
    "aria-expanded": (W.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: O,
    "aria-invalid": D,
    "aria-activedescendant": me,
    onChange: co,
    onClick: is,
    trailingElement: _t,
    "data-testid": "autosuggest-textbox-input",
    ...lr
  }), g && J && /* @__PURE__ */ v.createElement(An, {
    type: "default"
  }, g), !J && /* @__PURE__ */ v.createElement(An, {
    type: "invalid",
    "feedback-for": lr.name
  }, D)), /* @__PURE__ */ v.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ v.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ v.createElement(VC, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : W.length > 0 && W));
});
Uc.defaultProps = {
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
Uc.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: f.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: f.arrayOf(f.string),
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: f.string,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies help information for the user. */
  helpMessage: f.string,
  /** Specifies the placeholder text for the input. */
  placeholder: f.string,
  /** Specifies values for the input. */
  value: f.shape({
    userProvidedText: f.string,
    selectionValue: f.string,
    selectionId: f.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: f.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: Go(f.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: f.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: Go(f.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: f.bool,
  /** Informs user of other errors. */
  customErrorMessageText: Go(f.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: f.string,
  /** Selected list item is read-only. */
  readOnly: f.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: f.node,
  /** Specifies the screen reader text */
  screenReaderText: f.string
};
function GC({
  as: e = "button",
  children: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected: n = !1,
  iconAfter: r,
  iconBefore: i,
  ...s
}) {
  const a = H(s.className, "pgn__menu-item");
  return /* @__PURE__ */ C.createElement(e, {
    ...s,
    className: a
  }, /* @__PURE__ */ v.createElement(v.Fragment, null, i && /* @__PURE__ */ v.createElement(ut, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ v.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ v.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ v.createElement(ut, {
    className: "btn-icon-after",
    src: r
  })));
}
function $c({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ v.createElement(GC, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: H(t, "dropdown-item"),
    ...r
  }, e);
}
$c.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
$c.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: f.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: f.func
};
const WC = (e) => e, Kv = /* @__PURE__ */ v.createContext({
  getCheckboxControlProps: WC,
  hasCheckboxSetProvider: !1
}), Yv = () => C.useContext(Kv);
function zc({
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
      onBlur: c.onBlur ? Gn(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? Gn(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? Gn(i, c.onChange) : i,
      checked: o ? s.includes(c.value) : void 0,
      defaultChecked: o ? void 0 : a && a.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ v.createElement(Kv.Provider, {
    value: u
  }, e);
}
zc.propTypes = {
  children: f.node.isRequired,
  name: f.string,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.arrayOf(f.string),
  defaultValue: f.arrayOf(f.string)
};
zc.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const Gc = /* @__PURE__ */ v.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Yv(), s = v.useRef(), a = n || s, {
    getControlProps: o
  } = St();
  let l = o({
    ...t,
    className: H("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), v.useEffect(() => {
    a.current && (a.current.indeterminate = e);
  }, [a, e]), /* @__PURE__ */ v.createElement("input", {
    type: "checkbox",
    ...l,
    ref: a
  });
});
Gc.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
Gc.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const oo = /* @__PURE__ */ v.forwardRef(({
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
  } = Yv(), {
    hasFormGroupProvider: d,
    useSetIsControlGroupEffect: g,
    getControlProps: x
  } = St();
  g(!0);
  const k = d && !p ? {
    ...x({}),
    role: "group"
  } : {}, m = /* @__PURE__ */ v.createElement(o, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ v.createElement(no, {
    controlId: u.id,
    isInvalid: s,
    isValid: a
  }, /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__form-checkbox", t, {
      "pgn__form-control-valid": a,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...k
  }, m, /* @__PURE__ */ v.createElement("div", null, /* @__PURE__ */ v.createElement(_c, {
    className: r
  }, e), i && /* @__PURE__ */ v.createElement(An, {
    hasIcon: !1
  }, i))));
});
oo.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name for control component. */
  controlClassName: f.string,
  /** Specifies class name for label component. */
  labelClassName: f.string,
  /** Specifies description to show under the checkbox. */
  description: f.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies control element. */
  controlAs: f.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: f.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: f.bool
};
oo.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Gc,
  floatLabelLeft: !1,
  disabled: !1
};
const Wc = /* @__PURE__ */ v.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = v.useRef(), i = n || r, {
    getControlProps: s
  } = St(), a = s({
    ...t,
    className: H("pgn__form-switch-input", t.className)
  });
  return v.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ v.createElement("input", {
    type: "checkbox",
    ...a,
    ref: i
  });
});
Wc.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
Wc.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Qc = /* @__PURE__ */ v.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ v.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ v.createElement(oo, {
  className: H("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: Wc,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ v.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
Qc.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies class name to append to the label element. */
  labelClassName: f.string,
  /** Specifies helper text to display below the switch. */
  helperText: f.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: f.bool
};
Qc.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function lo({
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
  } = St();
  c(!0);
  const p = u(l);
  return /* @__PURE__ */ v.createElement(zc, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: a,
    onBlur: o,
    onChange: s
  }, /* @__PURE__ */ v.createElement(io, {
    role: "group",
    isInline: i,
    ...p
  }, e));
}
lo.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies name for the component. */
  name: f.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: f.arrayOf(f.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: f.arrayOf(f.string),
  /** Specifies whether to display components with inline styling. */
  isInline: f.bool,
  /** Specifies onChange event handler. */
  onChange: f.func,
  /** Specifies onFocus event handler. */
  onFocus: f.func,
  /** Specifies onBlur event handler. */
  onBlur: f.func
};
lo.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const M = Mt;
M.Control = qr;
M.Radio = Ic;
M.RadioSet = Nc;
M.Autosuggest = Uc;
M.AutosuggestOption = $c;
M.Checkbox = oo;
M.CheckboxSet = lo;
M.Switch = Qc;
M.SwitchSet = lo;
M.Label = _c;
M.Group = _1;
M.Text = ro;
var QC = ["label", "onClick", "className"], XC = {
  label: f.string.isRequired,
  onClick: f.func
}, KC = {
  label: "Close"
}, uo = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, s = ie(e, QC);
  return /* @__PURE__ */ v.createElement("button", $({
    ref: t,
    type: "button",
    className: H("close", i),
    onClick: r
  }, s), /* @__PURE__ */ v.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ v.createElement("span", {
    className: "sr-only"
  }, n));
});
uo.displayName = "CloseButton";
uo.propTypes = XC;
uo.defaultProps = KC;
const qv = function(e) {
  return /* @__PURE__ */ v.forwardRef(function(t, n) {
    return /* @__PURE__ */ v.createElement("div", $({}, t, {
      ref: n,
      className: H(t.className, e)
    }));
  });
};
var YC = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], Zv = qv("h4");
Zv.displayName = "DivStyledAsH4";
var qC = wc("alert-heading", {
  Component: Zv
}), ZC = wc("alert-link", {
  Component: pc
}), JC = {
  show: !0,
  transition: Zr,
  closeLabel: "Close alert"
}, ir = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = NC(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, s = n.closeLabel, a = n.className, o = n.children, l = n.variant, u = n.onClose, c = n.dismissible, p = n.transition, d = ie(n, YC), g = ke(r, "alert"), x = ou(function(m) {
    u && u(!1, m);
  }), E = p === !0 ? Zr : p, k = /* @__PURE__ */ v.createElement("div", $({
    role: "alert"
  }, E ? void 0 : d, {
    ref: t,
    className: H(a, g, l && g + "-" + l, c && g + "-dismissible")
  }), c && /* @__PURE__ */ v.createElement(uo, {
    onClick: x,
    label: s
  }), o);
  return E ? /* @__PURE__ */ v.createElement(E, $({
    unmountOnExit: !0
  }, d, {
    ref: void 0,
    in: i
  }), k) : i ? k : null;
});
ir.displayName = "Alert";
ir.defaultProps = JC;
ir.Link = ZC;
ir.Heading = qC;
var Xc = {};
Xc.match = sk;
Xc.parse = Jv;
var ek = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, tk = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, nk = /^(?:(min|max)-)?(.+)/, rk = /(em|rem|px|cm|mm|in|pt|pc)?$/, ik = /(dpi|dpcm|dppx)?$/;
function sk(e, t) {
  return Jv(e).some(function(n) {
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
          u = up(u), c = up(c);
          break;
        case "resolution":
          u = lp(u), c = lp(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = op(u), c = op(c);
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
function Jv(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(ek), r = n[1], i = n[2], s = n[3] || "", a = {};
    return a.inverse = !!r && r.toLowerCase() === "not", a.type = i ? i.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], a.expressions = s.map(function(o) {
      var l = o.match(tk), u = l[1].toLowerCase().match(nk);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), a;
  });
}
function op(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function lp(e) {
  var t = parseFloat(e), n = String(e).match(ik)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function up(e) {
  var t = parseFloat(e), n = String(e).match(rk)[1];
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
var ak = Xc.match, cp = typeof window < "u" ? window.matchMedia : null;
function ok(e, t, n) {
  var r = this, i;
  cp && !n && (i = cp.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(o)) : (this.matches = ak(e, t), this.media = e), this.addListener = s, this.removeListener = a, this.dispose = l;
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
function lk(e, t, n) {
  return new ok(e, t, n);
}
var uk = lk;
const ck = /* @__PURE__ */ Qr(uk);
var fk = /[A-Z]/g, dk = /^ms-/, Yo = {};
function pk(e) {
  return "-" + e.toLowerCase();
}
function eg(e) {
  if (Yo.hasOwnProperty(e))
    return Yo[e];
  var t = e.replace(fk, pk);
  return Yo[e] = dk.test(t) ? "-" + t : t;
}
function hk(e, t) {
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
const je = f.oneOfType([f.string, f.number]), tg = {
  all: f.bool,
  grid: f.bool,
  aural: f.bool,
  braille: f.bool,
  handheld: f.bool,
  print: f.bool,
  projection: f.bool,
  screen: f.bool,
  tty: f.bool,
  tv: f.bool,
  embossed: f.bool
}, mk = {
  orientation: f.oneOf(["portrait", "landscape"]),
  scan: f.oneOf(["progressive", "interlace"]),
  aspectRatio: f.string,
  deviceAspectRatio: f.string,
  height: je,
  deviceHeight: je,
  width: je,
  deviceWidth: je,
  color: f.bool,
  colorIndex: f.bool,
  monochrome: f.bool,
  resolution: je,
  type: Object.keys(tg)
}, { type: iS, ...vk } = mk, gk = {
  minAspectRatio: f.string,
  maxAspectRatio: f.string,
  minDeviceAspectRatio: f.string,
  maxDeviceAspectRatio: f.string,
  minHeight: je,
  maxHeight: je,
  minDeviceHeight: je,
  maxDeviceHeight: je,
  minWidth: je,
  maxWidth: je,
  minDeviceWidth: je,
  maxDeviceWidth: je,
  minColor: f.number,
  maxColor: f.number,
  minColorIndex: f.number,
  maxColorIndex: f.number,
  minMonochrome: f.number,
  maxMonochrome: f.number,
  minResolution: je,
  maxResolution: je,
  ...vk
}, yk = { ...tg, ...gk };
var Ek = {
  all: yk
};
const xk = (e) => `not ${e}`, wk = (e, t) => {
  const n = eg(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? xk(n) : `(${n}: ${t})`;
}, Ck = (e) => e.join(" and "), kk = (e) => {
  const t = [];
  return Object.keys(Ek.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(wk(n, r));
  }), Ck(t);
}, Sk = C.createContext(void 0), _k = (e) => e.query || kk(e), fp = (e) => e ? Object.keys(e).reduce((n, r) => (n[eg(r)] = e[r], n), {}) : void 0, ng = () => {
  const e = C.useRef(!1);
  return C.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, Tk = (e) => {
  const t = C.useContext(Sk), n = () => fp(e) || fp(t), [r, i] = C.useState(n);
  return C.useEffect(() => {
    const s = n();
    hk(r, s) || i(s);
  }, [e, t]), r;
}, Ak = (e) => {
  const t = () => _k(e), [n, r] = C.useState(t);
  return C.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, Ik = (e, t) => {
  const n = () => ck(e, t || {}, !!t), [r, i] = C.useState(n), s = ng();
  return C.useEffect(() => {
    if (s) {
      const a = n();
      return i(a), () => {
        a && a.dispose();
      };
    }
  }, [e, t]), r;
}, Nk = (e) => {
  const [t, n] = C.useState(e.matches);
  return C.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, bk = (e, t, n) => {
  const r = Tk(t), i = Ak(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const s = Ik(i, r), a = Nk(s);
  return ng(), C.useEffect(() => {
  }, [a]), C.useEffect(() => () => {
    s && s.dispose();
  }, []), a;
}, Rk = "576px", Pk = {
  sm: Rk
}, {
  sm: Fk
} = Pk, Ok = {
  extraSmall: {
    maxWidth: parseFloat(Fk) || 575.98
  }
};
function fu({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ v.createElement(e, {
    ...r,
    className: H(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function Mk() {
  return /* @__PURE__ */ v.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
fu.Spacer = Mk;
const Kc = /* @__PURE__ */ C.forwardRef(({
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
  const [c, p] = C.useState(a), d = bk({
    maxWidth: Ok.extraSmall.maxWidth
  }), g = "sm";
  C.useEffect(() => {
    p(d ? !0 : a);
  }, [d, a]);
  const x = C.useCallback((E) => {
    const k = {
      size: g,
      key: E.props.children
    };
    return /* @__PURE__ */ C.cloneElement(E, k);
  }, []);
  return /* @__PURE__ */ v.createElement(ir, {
    ...l,
    className: H("alert-content", l.className),
    show: o,
    ref: u
  }, t && /* @__PURE__ */ v.createElement(ut, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ v.createElement("div", {
    className: H({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ v.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ v.createElement(fu, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ v.createElement(fu.Spacer, null), r && /* @__PURE__ */ v.createElement(at, {
    size: g,
    variant: "tertiary",
    onClick: i
  }, s || /* @__PURE__ */ v.createElement(av, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(x))));
}), rg = qv("h4");
rg.displayName = "DivStyledAsH4";
function Lk({
  as: e = rg,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ v.createElement(ir.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function Dk({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ v.createElement(ir.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Kc.Heading = Lk;
Kc.Link = Dk;
const ig = /* @__PURE__ */ v.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ v.createElement("div", {
  className: H("pgn__card-body", e),
  ref: r,
  ...n
}, t)), dp = "card", qo = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], Bk = ["white", "muted"], Yc = /* @__PURE__ */ v.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: s = !1,
  children: a,
  as: o = "div",
  ...l
}, u) => {
  const c = H(t, e ? `${e}-${dp}` : dp, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ v.createElement(o, {
    ref: u,
    ...l,
    className: c
  }, s ? /* @__PURE__ */ v.createElement(ig, null, a) : a);
});
Yc.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: f.string,
  /** Background color of the card. */
  bgColor: f.oneOf(qo),
  /** Text color of the card. */
  textColor: f.oneOf([...qo, ...Bk]),
  /** Border color of the card. */
  borderColor: f.oneOf(qo),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: f.bool,
  /** Set a custom element for this component. */
  as: f.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: f.string,
  /** The content to render inside the card. */
  children: f.node
};
const sr = /* @__PURE__ */ C.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function Hk({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ v.createElement(sr.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const Vk = v.createContext({}), sg = !0;
function jk({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: s, direction: a, duration: o, enableAnimation: l = sg, customHighlightBackground: u }) {
  const c = {};
  return a === "rtl" && (c["--animation-direction"] = "reverse"), typeof o == "number" && (c["--animation-duration"] = `${o}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), s && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Wr({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: s = !1, style: a, ...o }) {
  var l, u, c;
  const p = v.useContext(Vk), d = { ...o };
  for (const [y, w] of Object.entries(o))
    typeof w > "u" && delete d[y];
  const g = {
    ...p,
    ...d,
    circle: s
  }, x = {
    ...a,
    ...jk(g)
  };
  let E = "react-loading-skeleton";
  n && (E += ` ${n}`);
  const k = (l = g.inline) !== null && l !== void 0 ? l : !1, m = [], h = Math.ceil(e);
  for (let y = 0; y < h; y++) {
    let w = x;
    if (h > e && y === h - 1) {
      const T = (u = w.width) !== null && u !== void 0 ? u : "100%", A = e % 1, I = typeof T == "number" ? T * A : `calc(${T} * ${A})`;
      w = { ...w, width: I };
    }
    const _ = v.createElement("span", { className: E, style: w, key: y }, "‌");
    k ? m.push(_) : m.push(v.createElement(
      v.Fragment,
      { key: y },
      _,
      v.createElement("br", null)
    ));
  }
  return v.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = g.enableAnimation) !== null && c !== void 0 ? c : sg }, t ? m.map((y, w) => v.createElement(t, { key: w }, y)) : m);
}
const Uk = 20, qc = /* @__PURE__ */ v.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: s,
  skeletonWidth: a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(sr), u = C.useCallback((c) => {
    if (/* @__PURE__ */ v.isValidElement(c)) {
      const {
        children: p
      } = c.props, d = {
        size: n,
        children: Array.isArray(p) ? p.map(u) : u(p)
      };
      return /* @__PURE__ */ v.cloneElement(c, d);
    }
    return c;
  }, [n]);
  return l ? /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-header", t)
  }, /* @__PURE__ */ v.createElement(Wr, {
    containerClassName: "pgn__card-header-loader",
    height: s,
    width: a
  })) : /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-header", t),
    ref: o
  }, /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-header-content"
  }, i && /* @__PURE__ */ v.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, i), r && /* @__PURE__ */ v.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? u(e) : e));
});
qc.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: f.node,
  /** The class name for the CardHeader component */
  className: f.string,
  /** The title for the CardHeader component */
  title: f.node,
  /** The size of the CardHeader component */
  size: f.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: f.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: f.number
};
qc.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: Uk,
  skeletonWidth: null
};
const $k = /* @__PURE__ */ C.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ v.createElement("div", {
  className: H("pgn__card-divider", e),
  ref: n,
  ...t
})), zk = 100, Zc = /* @__PURE__ */ v.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: s,
  skeletonWidth: a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(sr);
  return l ? /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ v.createElement(Wr, {
    containerClassName: "pgn__card-section-loader",
    height: s,
    width: a
  })) : /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: o
  }, n && /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
Zc.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies contents of the component. */
  children: f.node,
  /** Specifies title of the `Section`. */
  title: f.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: f.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: f.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: f.number
};
Zc.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: zk,
  skeletonWidth: void 0
};
const Gk = 18, Jc = /* @__PURE__ */ v.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: s,
  orientation: a
}, o) => {
  const {
    orientation: l,
    isLoading: u
  } = C.useContext(sr), c = a || l, p = `pgn__card-footer ${c}${n ? "-stacked" : ""}`, d = `pgn__card-footer-text ${c}${n ? "-stacked" : ""}`;
  return u ? /* @__PURE__ */ v.createElement("div", {
    className: H(t, p)
  }, /* @__PURE__ */ v.createElement(Wr, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: s
  })) : /* @__PURE__ */ v.createElement("div", {
    className: H(t, p),
    ref: o
  }, r && /* @__PURE__ */ v.createElement("div", {
    className: d
  }, r), e);
});
Jc.propTypes = {
  /** Specifies contents of the component. */
  children: f.node,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: f.node,
  /** Specifies whether to use stacked variant. */
  isStacked: f.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: f.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: f.number
};
Jc.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: Gk,
  skeletonWidth: void 0
};
const ag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", Wk = 140, Qk = 41, ef = /* @__PURE__ */ v.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: s,
  skeletonHeight: a,
  skeletonWidth: o,
  logoSkeleton: l,
  logoSkeletonHeight: u,
  logoSkeletonWidth: c,
  className: p,
  imageLoadingType: d,
  skeletonDuringImageLoad: g
}, x) => {
  const {
    orientation: E,
    isLoading: k
  } = C.useContext(sr), [m, h] = C.useState(!1), [y, w] = C.useState(!1), _ = `pgn__card-wrapper-image-cap ${E}`, T = () => /* @__PURE__ */ v.createElement(Wr, {
    containerClassName: "pgn__card-image-cap-loader",
    height: E === "horizontal" ? "100%" : a,
    width: o
  }), A = () => /* @__PURE__ */ v.createElement(Wr, {
    containerClassName: "pgn__card-logo-cap",
    height: u,
    width: c
  });
  if (k)
    return /* @__PURE__ */ v.createElement("div", {
      className: H(_, p),
      "data-testid": "image-loader-wrapper"
    }, T(), l && A());
  const I = (F, P, O) => {
    const {
      currentTarget: U
    } = F;
    if (!P || U.src.endsWith(P)) {
      O === "imageCap" ? U.src = ag : w(!1);
      return;
    }
    U.src = P;
  };
  return /* @__PURE__ */ v.createElement("div", {
    className: H(p, _),
    ref: x
  }, !!e && /* @__PURE__ */ v.createElement(v.Fragment, null, g && !m && T(), /* @__PURE__ */ v.createElement("img", {
    className: H("pgn__card-image-cap", {
      show: m
    }),
    src: e,
    onError: (F) => I(F, t, "imageCap"),
    onLoad: () => h(!0),
    alt: n,
    loading: d
  })), !!r && /* @__PURE__ */ v.createElement(v.Fragment, null, g && !y && A(), /* @__PURE__ */ v.createElement("img", {
    className: H("pgn__card-logo-cap", {
      show: y
    }),
    src: r,
    onError: (F) => I(F, i, "logoCap"),
    onLoad: () => w(!0),
    alt: s,
    loading: d
  })));
});
ef.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies image src. */
  src: f.string,
  /** Specifies fallback image src. */
  fallbackSrc: f.string,
  /** Specifies image alt text. */
  srcAlt: f.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: f.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: f.string,
  /** Specifies logo image alt text. */
  logoAlt: f.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: f.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: f.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: f.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: f.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: f.number,
  /** Specifies loading type for images */
  imageLoadingType: f.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: f.bool
};
ef.defaultProps = {
  src: void 0,
  fallbackSrc: ag,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: Wk,
  logoSkeleton: !1,
  logoSkeletonHeight: Qk,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
const tf = /* @__PURE__ */ v.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: s,
  ...a
}, o) => {
  const {
    isLoading: l
  } = C.useContext(sr);
  return l ? /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: o
  }, /* @__PURE__ */ v.createElement(Wr, null)) : /* @__PURE__ */ v.createElement("div", {
    className: H("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: o,
    ...a
  }, /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ v.createElement(ut, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-status__message-content"
  }, i && /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-status__heading"
  }, i), t)), !!s && /* @__PURE__ */ v.createElement("div", {
    className: "pgn__card-status__actions"
  }, s));
});
tf.propTypes = {
  /** Specifies the content of the component. */
  children: f.node.isRequired,
  /** The class to append to the base element. */
  className: f.string,
  /** Icon that will be shown in the top-left corner. */
  icon: f.func,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: f.oneOfType([f.element, f.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: f.node
};
tf.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const Xk = ["light", "dark", "muted"], nf = /* @__PURE__ */ v.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: s,
  ...a
}, o) => {
  const l = i ? "muted" : s;
  return /* @__PURE__ */ v.createElement(Hk, {
    orientation: e,
    isLoading: t,
    variant: l
  }, /* @__PURE__ */ v.createElement(Yc, {
    ...a,
    className: H(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${l}`]: l
    }),
    ref: o,
    tabIndex: r ? 0 : -1
  }));
});
nf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: f.bool,
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies `Card` style variant. */
  variant: f.oneOf(Xk),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: f.bool
};
nf.defaultProps = {
  ...Yc.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const ye = fv(nf, "Card", {
  muted: {
    deprType: Sr.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
ye.Status = tf;
ye.Header = qc;
ye.Divider = $k;
ye.Section = Zc;
ye.Footer = Jc;
ye.ImageCap = ef;
ye.Context = sr;
ye.Body = ig;
function Kk() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function Yk(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Kk()
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
const qk = ({ bin: e, index: t, onEdit: n, onDelete: r }) => {
  const [i, s] = C.useState(!1), [a, o] = C.useState(e.label), [l, u] = C.useState(e.description), [c, p] = C.useState(e.max_capacity), d = () => {
    n({
      id: e.id,
      label: a,
      description: l,
      max_capacity: c
    }), s(!1);
  }, g = () => {
    o(e.label), u(e.description), p(e.max_capacity), s(!1);
  };
  return i ? /* @__PURE__ */ S.jsxs("div", { className: "bin-item editing", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "bin-item-header", children: [
      /* @__PURE__ */ S.jsx(ut, { src: ga, className: "drag-handle" }),
      /* @__PURE__ */ S.jsxs("span", { className: "bin-number", children: [
        "Bin ",
        t + 1
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "bin-item-form", children: [
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Label *" }),
        /* @__PURE__ */ S.jsx(
          M.Control,
          {
            type: "text",
            value: a,
            onChange: (x) => o(x.target.value),
            placeholder: "e.g., Category A",
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Description" }),
        /* @__PURE__ */ S.jsx(
          M.Control,
          {
            as: "textarea",
            rows: 2,
            value: l,
            onChange: (x) => u(x.target.value),
            placeholder: "Optional description for this bin"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Maximum Capacity" }),
        /* @__PURE__ */ S.jsx(
          M.Control,
          {
            type: "number",
            min: 0,
            value: c,
            onChange: (x) => p(parseInt(x.target.value) || 0)
          }
        ),
        /* @__PURE__ */ S.jsx(M.Text, { children: "Maximum items allowed (0 = unlimited)" })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "bin-item-actions", children: [
        /* @__PURE__ */ S.jsx(at, { variant: "link", size: "sm", onClick: g, children: "Cancel" }),
        /* @__PURE__ */ S.jsx(at, { variant: "primary", size: "sm", onClick: d, children: "Save" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ S.jsxs("div", { className: "bin-item", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "bin-item-header", children: [
      /* @__PURE__ */ S.jsx(ut, { src: ga, className: "drag-handle" }),
      /* @__PURE__ */ S.jsxs("div", { className: "bin-item-info", children: [
        /* @__PURE__ */ S.jsx("strong", { className: "bin-label", children: e.label }),
        e.description && /* @__PURE__ */ S.jsx("span", { className: "bin-description", children: e.description }),
        /* @__PURE__ */ S.jsxs("span", { className: "bin-capacity", children: [
          "Capacity: ",
          e.max_capacity === 0 ? "Unlimited" : e.max_capacity
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "bin-item-actions", children: [
      /* @__PURE__ */ S.jsx(
        at,
        {
          variant: "link",
          size: "sm",
          onClick: () => s(!0),
          children: "Edit"
        }
      ),
      /* @__PURE__ */ S.jsx(
        at,
        {
          variant: "link",
          size: "sm",
          onClick: r,
          iconBefore: Av,
          children: "Delete"
        }
      )
    ] })
  ] });
}, Zk = ({
  bins: e,
  onAdd: t,
  onEdit: n,
  onDelete: r,
  onReorder: i
}) => /* @__PURE__ */ S.jsxs("div", { className: "bins-list", children: [
  e.length === 0 ? /* @__PURE__ */ S.jsx("div", { className: "empty-state", children: /* @__PURE__ */ S.jsx("p", { children: "No bins yet. Add your first bin to get started." }) }) : /* @__PURE__ */ S.jsx("div", { className: "bins-list-items", children: e.map((s, a) => /* @__PURE__ */ S.jsx(
    qk,
    {
      bin: s,
      index: a,
      onEdit: (o) => n(a, o),
      onDelete: () => r(a)
    },
    s.id
  )) }),
  /* @__PURE__ */ S.jsx(
    at,
    {
      variant: "outline-primary",
      size: "sm",
      onClick: t,
      iconBefore: Tv,
      className: "mt-3",
      children: "Add Bin"
    }
  )
] }), Jk = ({ item: e, index: t, bins: n, onEdit: r, onDelete: i }) => {
  const [s, a] = C.useState(!1), [o, l] = C.useState(e.type), [u, c] = C.useState(e.content), [p, d] = C.useState(e.correct_bin_id), g = () => {
    r({
      id: e.id,
      type: o,
      content: u,
      correct_bin_id: p
    }), a(!1);
  }, x = () => {
    l(e.type), c(e.content), d(e.correct_bin_id), a(!1);
  }, E = () => {
    const m = n.find((h) => h.id === e.correct_bin_id);
    return (m == null ? void 0 : m.label) || "Unknown Bin";
  }, k = () => {
    switch (e.type) {
      case "text":
        return /* @__PURE__ */ S.jsx("span", { className: "item-content-text", children: e.content });
      case "image":
        return /* @__PURE__ */ S.jsxs("div", { className: "item-content-image", children: [
          /* @__PURE__ */ S.jsx("img", { src: e.content, alt: "Item", style: { maxWidth: "100px", maxHeight: "50px" } }),
          /* @__PURE__ */ S.jsx("small", { className: "text-muted", children: e.content })
        ] });
      case "html":
        return /* @__PURE__ */ S.jsx("div", { className: "item-content-html", children: /* @__PURE__ */ S.jsxs("code", { children: [
          e.content.substring(0, 100),
          e.content.length > 100 ? "..." : ""
        ] }) });
      default:
        return /* @__PURE__ */ S.jsx("span", { children: e.content });
    }
  };
  return s ? /* @__PURE__ */ S.jsxs("div", { className: "item-item editing", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "item-item-header", children: [
      /* @__PURE__ */ S.jsx(ut, { src: ga, className: "drag-handle" }),
      /* @__PURE__ */ S.jsxs("span", { className: "item-number", children: [
        "Item ",
        t + 1
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "item-item-form", children: [
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Type *" }),
        /* @__PURE__ */ S.jsxs(
          M.Control,
          {
            as: "select",
            value: o,
            onChange: (m) => l(m.target.value),
            children: [
              /* @__PURE__ */ S.jsx("option", { value: "text", children: "Text" }),
              /* @__PURE__ */ S.jsx("option", { value: "image", children: "Image URL" }),
              /* @__PURE__ */ S.jsx("option", { value: "html", children: "HTML" })
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(M.Text, { children: [
          o === "text" && "Plain text content",
          o === "image" && "URL to an image file",
          o === "html" && "HTML markup (supports styling)"
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Content *" }),
        o === "text" || o === "image" ? /* @__PURE__ */ S.jsx(
          M.Control,
          {
            type: "text",
            value: u,
            onChange: (m) => c(m.target.value),
            placeholder: o === "text" ? "Enter text content" : "Enter image URL (e.g., https://example.com/image.png)",
            autoFocus: !0
          }
        ) : /* @__PURE__ */ S.jsx(
          M.Control,
          {
            as: "textarea",
            rows: 4,
            value: u,
            onChange: (m) => c(m.target.value),
            placeholder: "<p>Enter HTML content...</p>"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
        /* @__PURE__ */ S.jsx(M.Label, { children: "Correct Bin *" }),
        /* @__PURE__ */ S.jsx(
          M.Control,
          {
            as: "select",
            value: p,
            onChange: (m) => d(m.target.value),
            children: n.map((m) => /* @__PURE__ */ S.jsx("option", { value: m.id, children: m.label }, m.id))
          }
        ),
        /* @__PURE__ */ S.jsx(M.Text, { children: "The bin where this item should be placed" })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "item-item-actions", children: [
        /* @__PURE__ */ S.jsx(at, { variant: "link", size: "sm", onClick: x, children: "Cancel" }),
        /* @__PURE__ */ S.jsx(at, { variant: "primary", size: "sm", onClick: g, children: "Save" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ S.jsxs("div", { className: "item-item", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "item-item-header", children: [
      /* @__PURE__ */ S.jsx(ut, { src: ga, className: "drag-handle" }),
      /* @__PURE__ */ S.jsxs("div", { className: "item-item-info", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "item-meta", children: [
          /* @__PURE__ */ S.jsxs("strong", { className: "item-label", children: [
            "Item ",
            t + 1
          ] }),
          /* @__PURE__ */ S.jsx("span", { className: "item-type-badge", children: e.type }),
          /* @__PURE__ */ S.jsxs("span", { className: "item-bin", children: [
            "→ ",
            E()
          ] })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "item-content-preview", children: k() })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "item-item-actions", children: [
      /* @__PURE__ */ S.jsx(
        at,
        {
          variant: "link",
          size: "sm",
          onClick: () => a(!0),
          children: "Edit"
        }
      ),
      /* @__PURE__ */ S.jsx(
        at,
        {
          variant: "link",
          size: "sm",
          onClick: i,
          iconBefore: Av,
          children: "Delete"
        }
      )
    ] })
  ] });
}, eS = ({
  items: e,
  bins: t,
  onAdd: n,
  onEdit: r,
  onDelete: i,
  onReorder: s
}) => t.length === 0 ? /* @__PURE__ */ S.jsx("div", { className: "items-list", children: /* @__PURE__ */ S.jsx("div", { className: "empty-state warning", children: /* @__PURE__ */ S.jsx("p", { children: "Please create at least one bin before adding items." }) }) }) : /* @__PURE__ */ S.jsxs("div", { className: "items-list", children: [
  e.length === 0 ? /* @__PURE__ */ S.jsx("div", { className: "empty-state", children: /* @__PURE__ */ S.jsx("p", { children: "No items yet. Add your first item to get started." }) }) : /* @__PURE__ */ S.jsx("div", { className: "items-list-items", children: e.map((a, o) => /* @__PURE__ */ S.jsx(
    Jk,
    {
      item: a,
      index: o,
      bins: t,
      onEdit: (l) => r(o, l),
      onDelete: () => i(o)
    },
    a.id
  )) }),
  /* @__PURE__ */ S.jsx(
    at,
    {
      variant: "outline-primary",
      size: "sm",
      onClick: n,
      iconBefore: Tv,
      className: "mt-3",
      disabled: t.length === 0,
      children: "Add Item"
    }
  )
] }), tS = ({
  runtime: e,
  fields: t
}) => {
  const [n, r] = C.useState(t.display_name), [i, s] = C.useState(t.problem_title), [a, o] = C.useState(t.instructions), [l, u] = C.useState(t.explanation), [c, p] = C.useState(t.bins), [d, g] = C.useState(t.items), [x, E] = C.useState(t.weight), [k, m] = C.useState(t.max_attempts), [h, y] = C.useState(t.grading_mode), [w, _] = C.useState(t.show_correct_answers), [T, A] = C.useState(t.show_feedback_mode), [I, F] = C.useState(!1), [P, O] = C.useState(null), U = () => {
    if (c.length >= 10) {
      O({ type: "error", text: "Maximum 10 bins allowed" });
      return;
    }
    const b = {
      id: `bin_${Date.now()}`,
      label: `Bin ${c.length + 1}`,
      description: "",
      max_capacity: 0
      // 0 = unlimited
    };
    p([...c, b]), O({ type: "success", text: "Bin added" });
  }, W = (b, oe) => {
    const z = [...c];
    z[b] = oe, p(z);
  }, ae = (b) => {
    if (c.length === 1) {
      O({ type: "error", text: "At least one bin is required" });
      return;
    }
    const oe = c[b], z = d.filter((re) => re.correct_bin_id === oe.id);
    z.length > 0 && !confirm(`This bin is referenced by ${z.length} item(s). Delete anyway?`) || (p(c.filter((re, Ie) => Ie !== b)), O({ type: "success", text: "Bin deleted" }));
  }, me = (b, oe) => {
    const z = [...c], [re] = z.splice(b, 1);
    z.splice(oe, 0, re), p(z);
  }, ee = () => {
    if (d.length >= 50) {
      O({ type: "error", text: "Maximum 50 items allowed" });
      return;
    }
    if (c.length === 0) {
      O({ type: "error", text: "Please create at least one bin first" });
      return;
    }
    const b = {
      id: `item_${Date.now()}`,
      type: "text",
      content: `Item ${d.length + 1}`,
      correct_bin_id: c[0].id
      // Default to first bin
    };
    g([...d, b]), O({ type: "success", text: "Item added" });
  }, J = (b, oe) => {
    const z = [...d];
    z[b] = oe, g(z);
  }, R = (b) => {
    if (d.length === 1) {
      O({ type: "error", text: "At least one item is required" });
      return;
    }
    g(d.filter((oe, z) => z !== b)), O({ type: "success", text: "Item deleted" });
  }, D = (b, oe) => {
    const z = [...d], [re] = z.splice(b, 1);
    z.splice(oe, 0, re), g(z);
  }, B = async () => {
    F(!0), O(null);
    try {
      if (!n.trim()) {
        O({ type: "error", text: "Display name is required" }), F(!1);
        return;
      }
      if (!i.trim()) {
        O({ type: "error", text: "Problem title is required" }), F(!1);
        return;
      }
      if (c.length === 0) {
        O({ type: "error", text: "At least one bin is required" }), F(!1);
        return;
      }
      if (d.length === 0) {
        O({ type: "error", text: "At least one item is required" }), F(!1);
        return;
      }
      for (let z = 0; z < c.length; z++) {
        const re = c[z];
        if (!re.label.trim()) {
          O({ type: "error", text: `Bin ${z + 1}: Label is required` }), F(!1);
          return;
        }
        if (re.max_capacity < 0) {
          O({ type: "error", text: `Bin ${z + 1}: Capacity cannot be negative` }), F(!1);
          return;
        }
      }
      const b = new Set(c.map((z) => z.id));
      for (let z = 0; z < d.length; z++) {
        const re = d[z];
        if (!re.content.trim()) {
          O({ type: "error", text: `Item ${z + 1}: Content is required` }), F(!1);
          return;
        }
        if (!b.has(re.correct_bin_id)) {
          O({ type: "error", text: `Item ${z + 1}: Invalid bin assignment` }), F(!1);
          return;
        }
      }
      e.notify && e.notify("save", { state: "start" });
      const oe = await Yk(e, "save_data", {
        display_name: n,
        problem_title: i,
        instructions: a,
        explanation: l,
        bins: c,
        items: d,
        weight: x,
        max_attempts: k,
        grading_mode: h,
        show_correct_answers: w,
        show_feedback_mode: T
      });
      oe.success ? (O({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (O({ type: "error", text: oe.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (b) {
      console.error("Save error:", b), O({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      F(!1);
    }
  }, Q = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "sort-into-bins-studio-view", children: [
    P && /* @__PURE__ */ S.jsx(
      Kc,
      {
        variant: P.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => O(null),
        children: P.text
      }
    ),
    /* @__PURE__ */ S.jsxs(M, { children: [
      /* @__PURE__ */ S.jsxs(ye, { className: "mb-4", children: [
        /* @__PURE__ */ S.jsx(ye.Header, { title: "Basic Settings" }),
        /* @__PURE__ */ S.jsxs(ye.Section, { children: [
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Display Name *" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                type: "text",
                value: n,
                onChange: (b) => r(b.target.value),
                placeholder: "Sort Into Bins"
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "The name shown in the course outline." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Problem Title *" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                type: "text",
                value: i,
                onChange: (b) => s(b.target.value),
                placeholder: "Sort the items into the correct bins"
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Title displayed at the top of the problem." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Instructions" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                as: "textarea",
                rows: 3,
                value: a,
                onChange: (b) => o(b.target.value),
                placeholder: "Drag each item into the bin where it belongs."
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Instructions shown to students (supports HTML)." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Explanation (Optional)" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                as: "textarea",
                rows: 3,
                value: l,
                onChange: (b) => u(b.target.value),
                placeholder: "Explanation shown after submission..."
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Optional explanation shown after submission (supports HTML)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs(ye, { className: "mb-4", children: [
        /* @__PURE__ */ S.jsx(ye.Header, { title: "Bins", subtitle: `${c.length} bin(s)` }),
        /* @__PURE__ */ S.jsx(ye.Section, { children: /* @__PURE__ */ S.jsx(
          Zk,
          {
            bins: c,
            onAdd: U,
            onEdit: W,
            onDelete: ae,
            onReorder: me
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs(ye, { className: "mb-4", children: [
        /* @__PURE__ */ S.jsx(ye.Header, { title: "Items", subtitle: `${d.length} item(s)` }),
        /* @__PURE__ */ S.jsx(ye.Section, { children: /* @__PURE__ */ S.jsx(
          eS,
          {
            items: d,
            bins: c,
            onAdd: ee,
            onEdit: J,
            onDelete: R,
            onReorder: D
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs(ye, { className: "mb-4", children: [
        /* @__PURE__ */ S.jsx(ye.Header, { title: "Problem Settings" }),
        /* @__PURE__ */ S.jsxs(ye.Section, { children: [
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Weight" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                type: "number",
                min: 0,
                step: 0.1,
                value: x,
                onChange: (b) => E(parseFloat(b.target.value) || 0)
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Maximum grade for this problem (affects course grade calculation)." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Maximum Attempts" }),
            /* @__PURE__ */ S.jsx(
              M.Control,
              {
                type: "number",
                min: 0,
                value: k,
                onChange: (b) => m(parseInt(b.target.value) || 0)
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Maximum number of submission attempts (0 = unlimited)." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Grading Mode" }),
            /* @__PURE__ */ S.jsxs(
              M.Control,
              {
                as: "select",
                value: h,
                onChange: (b) => y(b.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "partial_credit", children: "Partial Credit" }),
                  /* @__PURE__ */ S.jsx("option", { value: "all_or_nothing", children: "All or Nothing" })
                ]
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "Partial Credit: Points per correct item. All or Nothing: Must be perfect." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Show Correct Answers" }),
            /* @__PURE__ */ S.jsxs(
              M.Control,
              {
                as: "select",
                value: w,
                onChange: (b) => _(b.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "never", children: "Never" }),
                  /* @__PURE__ */ S.jsx("option", { value: "after_attempts", children: "After Max Attempts" }),
                  /* @__PURE__ */ S.jsx("option", { value: "always", children: "Always" })
                ]
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "When to show correct answers to students." })
          ] }),
          /* @__PURE__ */ S.jsxs(M.Group, { className: "mb-3", children: [
            /* @__PURE__ */ S.jsx(M.Label, { children: "Feedback Mode" }),
            /* @__PURE__ */ S.jsxs(
              M.Control,
              {
                as: "select",
                value: T,
                onChange: (b) => A(b.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "on_submit", children: "On Submit" }),
                  /* @__PURE__ */ S.jsx("option", { value: "immediate", children: "Immediate" })
                ]
              }
            ),
            /* @__PURE__ */ S.jsx(M.Text, { children: "On Submit: Feedback after clicking Submit. Immediate: Instant feedback per item." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "sort-into-bins-sticky-actions d-flex justify-content-end border-top pt-3", children: [
        /* @__PURE__ */ S.jsx(
          at,
          {
            variant: "tertiary",
            onClick: Q,
            disabled: I,
            className: "mr-2",
            children: "Close Without Saving"
          }
        ),
        /* @__PURE__ */ S.jsx(
          at,
          {
            variant: "primary",
            onClick: B,
            disabled: I,
            children: I ? "Saving..." : "Save All Changes"
          }
        )
      ] })
    ] })
  ] });
}, sS = (e, t, n) => {
  if (!t) {
    console.error("No element provided to renderBlock");
    return;
  }
  e.element = t, Tm(t).render(
    /* @__PURE__ */ S.jsx(C.StrictMode, { children: /* @__PURE__ */ S.jsx(ox, { locale: "en", children: /* @__PURE__ */ S.jsx(
      tS,
      {
        runtime: e,
        fields: n.fields
      }
    ) }) })
  );
};
export {
  sS as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
