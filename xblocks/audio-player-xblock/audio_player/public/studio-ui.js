var WE = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var My = { exports: {} }, zl = {}, Ly = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo = Symbol.for("react.element"), GE = Symbol.for("react.portal"), KE = Symbol.for("react.fragment"), YE = Symbol.for("react.strict_mode"), qE = Symbol.for("react.profiler"), XE = Symbol.for("react.provider"), QE = Symbol.for("react.context"), ZE = Symbol.for("react.forward_ref"), JE = Symbol.for("react.suspense"), e1 = Symbol.for("react.memo"), t1 = Symbol.for("react.lazy"), th = Symbol.iterator;
function n1(e) {
  return e === null || typeof e != "object" ? null : (e = th && e[th] || e["@@iterator"], typeof e == "function" ? e : null);
}
var By = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $y = Object.assign, zy = {};
function Ji(e, t, n) {
  this.props = e, this.context = t, this.refs = zy, this.updater = n || By;
}
Ji.prototype.isReactComponent = {};
Ji.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ji.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hy() {
}
Hy.prototype = Ji.prototype;
function Up(e, t, n) {
  this.props = e, this.context = t, this.refs = zy, this.updater = n || By;
}
var Wp = Up.prototype = new Hy();
Wp.constructor = Up;
$y(Wp, Ji.prototype);
Wp.isPureReactComponent = !0;
var nh = Array.isArray, Vy = Object.prototype.hasOwnProperty, Gp = { current: null }, Uy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wy(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Vy.call(t, r) && !Uy.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: Fo, type: e, key: a, ref: o, props: i, _owner: Gp.current };
}
function r1(e, t) {
  return { $$typeof: Fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fo;
}
function i1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rh = /\/+/g;
function Ru(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? i1("" + e.key) : t.toString(36);
}
function ks(e, t, n, r, i) {
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
        case Fo:
        case GE:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Ru(o, 0) : r, nh(i) ? (n = "", e != null && (n = e.replace(rh, "$&/") + "/"), ks(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Kp(i) && (i = r1(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(rh, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", nh(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Ru(a, s);
    o += ks(a, t, n, l, i);
  }
  else if (l = n1(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Ru(a, s++), o += ks(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Jo(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return ks(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function a1(e) {
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
var gt = { current: null }, Cs = { transition: null }, o1 = { ReactCurrentDispatcher: gt, ReactCurrentBatchConfig: Cs, ReactCurrentOwner: Gp };
function Gy() {
  throw Error("act(...) is not supported in production builds of React.");
}
fe.Children = { map: Jo, forEach: function(e, t, n) {
  Jo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Jo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Jo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kp(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
fe.Component = Ji;
fe.Fragment = KE;
fe.Profiler = qE;
fe.PureComponent = Up;
fe.StrictMode = YE;
fe.Suspense = JE;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o1;
fe.act = Gy;
fe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = $y({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Gp.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) Vy.call(t, l) && !Uy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Fo, type: e.type, key: i, ref: a, props: r, _owner: o };
};
fe.createContext = function(e) {
  return e = { $$typeof: QE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: XE, _context: e }, e.Consumer = e;
};
fe.createElement = Wy;
fe.createFactory = function(e) {
  var t = Wy.bind(null, e);
  return t.type = e, t;
};
fe.createRef = function() {
  return { current: null };
};
fe.forwardRef = function(e) {
  return { $$typeof: ZE, render: e };
};
fe.isValidElement = Kp;
fe.lazy = function(e) {
  return { $$typeof: t1, _payload: { _status: -1, _result: e }, _init: a1 };
};
fe.memo = function(e, t) {
  return { $$typeof: e1, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function(e) {
  var t = Cs.transition;
  Cs.transition = {};
  try {
    e();
  } finally {
    Cs.transition = t;
  }
};
fe.unstable_act = Gy;
fe.useCallback = function(e, t) {
  return gt.current.useCallback(e, t);
};
fe.useContext = function(e) {
  return gt.current.useContext(e);
};
fe.useDebugValue = function() {
};
fe.useDeferredValue = function(e) {
  return gt.current.useDeferredValue(e);
};
fe.useEffect = function(e, t) {
  return gt.current.useEffect(e, t);
};
fe.useId = function() {
  return gt.current.useId();
};
fe.useImperativeHandle = function(e, t, n) {
  return gt.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function(e, t) {
  return gt.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function(e, t) {
  return gt.current.useLayoutEffect(e, t);
};
fe.useMemo = function(e, t) {
  return gt.current.useMemo(e, t);
};
fe.useReducer = function(e, t, n) {
  return gt.current.useReducer(e, t, n);
};
fe.useRef = function(e) {
  return gt.current.useRef(e);
};
fe.useState = function(e) {
  return gt.current.useState(e);
};
fe.useSyncExternalStore = function(e, t, n) {
  return gt.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function() {
  return gt.current.useTransition();
};
fe.version = "18.3.1";
Ly.exports = fe;
var k = Ly.exports;
const g = /* @__PURE__ */ Do(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1 = k, l1 = Symbol.for("react.element"), u1 = Symbol.for("react.fragment"), c1 = Object.prototype.hasOwnProperty, f1 = s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ky(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) c1.call(t, r) && !p1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: l1, type: e, key: a, ref: o, props: i, _owner: f1.current };
}
zl.Fragment = u1;
zl.jsx = Ky;
zl.jsxs = Ky;
My.exports = zl;
var ie = My.exports, Yy = { exports: {} }, Nt = {}, qy = { exports: {} }, Xy = {};
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
  function t(S, _) {
    var R = S.length;
    S.push(_);
    e: for (; 0 < R; ) {
      var C = R - 1 >>> 1, j = S[C];
      if (0 < i(j, _)) S[C] = _, S[R] = j, R = C;
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var _ = S[0], R = S.pop();
    if (R !== _) {
      S[0] = R;
      e: for (var C = 0, j = S.length, U = j >>> 1; C < U; ) {
        var W = 2 * (C + 1) - 1, Q = S[W], q = W + 1, Z = S[q];
        if (0 > i(Q, R)) q < j && 0 > i(Z, Q) ? (S[C] = Z, S[q] = R, C = q) : (S[C] = Q, S[W] = R, C = W);
        else if (q < j && 0 > i(Z, R)) S[C] = Z, S[q] = R, C = q;
        else break e;
      }
    }
    return _;
  }
  function i(S, _) {
    var R = S.sortIndex - _.sortIndex;
    return R !== 0 ? R : S.id - _.id;
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
  var l = [], u = [], c = 1, d = null, p = 3, v = !1, b = !1, x = !1, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(S) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= S) r(u), _.sortIndex = _.expirationTime, t(l, _);
      else break;
      _ = n(u);
    }
  }
  function E(S) {
    if (x = !1, y(S), !b) if (n(l) !== null) b = !0, N(O);
    else {
      var _ = n(u);
      _ !== null && P(E, _.startTime - S);
    }
  }
  function O(S, _) {
    b = !1, x && (x = !1, h(I), I = -1), v = !0;
    var R = p;
    try {
      for (y(_), d = n(l); d !== null && (!(d.expirationTime > _) || S && !G()); ) {
        var C = d.callback;
        if (typeof C == "function") {
          d.callback = null, p = d.priorityLevel;
          var j = C(d.expirationTime <= _);
          _ = e.unstable_now(), typeof j == "function" ? d.callback = j : d === n(l) && r(l), y(_);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var U = !0;
      else {
        var W = n(u);
        W !== null && P(E, W.startTime - _), U = !1;
      }
      return U;
    } finally {
      d = null, p = R, v = !1;
    }
  }
  var A = !1, T = null, I = -1, D = 5, L = -1;
  function G() {
    return !(e.unstable_now() - L < D);
  }
  function Y() {
    if (T !== null) {
      var S = e.unstable_now();
      L = S;
      var _ = !0;
      try {
        _ = T(!0, S);
      } finally {
        _ ? F() : (A = !1, T = null);
      }
    } else A = !1;
  }
  var F;
  if (typeof m == "function") F = function() {
    m(Y);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), z = M.port2;
    M.port1.onmessage = Y, F = function() {
      z.postMessage(null);
    };
  } else F = function() {
    w(Y, 0);
  };
  function N(S) {
    T = S, A || (A = !0, F());
  }
  function P(S, _) {
    I = w(function() {
      S(e.unstable_now());
    }, _);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null;
  }, e.unstable_continueExecution = function() {
    b || v || (b = !0, N(O));
  }, e.unstable_forceFrameRate = function(S) {
    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < S ? Math.floor(1e3 / S) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(S) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = p;
    }
    var R = p;
    p = _;
    try {
      return S();
    } finally {
      p = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(S, _) {
    switch (S) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        S = 3;
    }
    var R = p;
    p = S;
    try {
      return _();
    } finally {
      p = R;
    }
  }, e.unstable_scheduleCallback = function(S, _, R) {
    var C = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? C + R : C) : R = C, S) {
      case 1:
        var j = -1;
        break;
      case 2:
        j = 250;
        break;
      case 5:
        j = 1073741823;
        break;
      case 4:
        j = 1e4;
        break;
      default:
        j = 5e3;
    }
    return j = R + j, S = { id: c++, callback: _, priorityLevel: S, startTime: R, expirationTime: j, sortIndex: -1 }, R > C ? (S.sortIndex = R, t(u, S), n(l) === null && S === n(u) && (x ? (h(I), I = -1) : x = !0, P(E, R - C))) : (S.sortIndex = j, t(l, S), b || v || (b = !0, N(O))), S;
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(S) {
    var _ = p;
    return function() {
      var R = p;
      p = _;
      try {
        return S.apply(this, arguments);
      } finally {
        p = R;
      }
    };
  };
})(Xy);
qy.exports = Xy;
var d1 = qy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m1 = k, Tt = d1;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qy = /* @__PURE__ */ new Set(), Ha = {};
function ei(e, t) {
  Di(e, t), Di(e + "Capture", t);
}
function Di(e, t) {
  for (Ha[e] = t, e = 0; e < t.length; e++) Qy.add(t[e]);
}
var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cc = Object.prototype.hasOwnProperty, h1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ih = {}, ah = {};
function v1(e) {
  return Cc.call(ah, e) ? !0 : Cc.call(ih, e) ? !1 : h1.test(e) ? ah[e] = !0 : (ih[e] = !0, !1);
}
function g1(e, t, n, r) {
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
function y1(e, t, n, r) {
  if (t === null || typeof t > "u" || g1(e, t, n, r)) return !0;
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
function yt(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  et[e] = new yt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  et[t] = new yt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  et[e] = new yt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  et[e] = new yt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  et[e] = new yt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  et[e] = new yt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  et[e] = new yt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  et[e] = new yt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  et[e] = new yt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yp = /[\-:]([a-z])/g;
function qp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yp,
    qp
  );
  et[t] = new yt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yp, qp);
  et[t] = new yt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yp, qp);
  et[t] = new yt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  et[e] = new yt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  et[e] = new yt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xp(e, t, n, r) {
  var i = et.hasOwnProperty(t) ? et[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (y1(t, n, i, r) && (n = null), r || i === null ? v1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zn = m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, es = Symbol.for("react.element"), ui = Symbol.for("react.portal"), ci = Symbol.for("react.fragment"), Qp = Symbol.for("react.strict_mode"), Pc = Symbol.for("react.profiler"), Zy = Symbol.for("react.provider"), Jy = Symbol.for("react.context"), Zp = Symbol.for("react.forward_ref"), _c = Symbol.for("react.suspense"), Ac = Symbol.for("react.suspense_list"), Jp = Symbol.for("react.memo"), Xn = Symbol.for("react.lazy"), e0 = Symbol.for("react.offscreen"), oh = Symbol.iterator;
function fa(e) {
  return e === null || typeof e != "object" ? null : (e = oh && e[oh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Re = Object.assign, Du;
function wa(e) {
  if (Du === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Du = t && t[1] || "";
  }
  return `
` + Du + e;
}
var Fu = !1;
function Mu(e, t) {
  if (!e || Fu) return "";
  Fu = !0;
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
    Fu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wa(e) : "";
}
function b1(e) {
  switch (e.tag) {
    case 5:
      return wa(e.type);
    case 16:
      return wa("Lazy");
    case 13:
      return wa("Suspense");
    case 19:
      return wa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Mu(e.type, !1), e;
    case 11:
      return e = Mu(e.type.render, !1), e;
    case 1:
      return e = Mu(e.type, !0), e;
    default:
      return "";
  }
}
function Tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ci:
      return "Fragment";
    case ui:
      return "Portal";
    case Pc:
      return "Profiler";
    case Qp:
      return "StrictMode";
    case _c:
      return "Suspense";
    case Ac:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Jy:
      return (e.displayName || "Context") + ".Consumer";
    case Zy:
      return (e._context.displayName || "Context") + ".Provider";
    case Zp:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Jp:
      return t = e.displayName || null, t !== null ? t : Tc(e.type) || "Memo";
    case Xn:
      t = e._payload, e = e._init;
      try {
        return Tc(e(t));
      } catch {
      }
  }
  return null;
}
function x1(e) {
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
      return Tc(t);
    case 8:
      return t === Qp ? "StrictMode" : "Mode";
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
function mr(e) {
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
function t0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function w1(e) {
  var t = t0(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ts(e) {
  e._valueTracker || (e._valueTracker = w1(e));
}
function n0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = t0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ic(e, t) {
  var n = t.checked;
  return Re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function sh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = mr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function r0(e, t) {
  t = t.checked, t != null && Xp(e, "checked", t, !1);
}
function Nc(e, t) {
  r0(e, t);
  var n = mr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? jc(e, t.type, n) : t.hasOwnProperty("defaultValue") && jc(e, t.type, mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function jc(e, t, n) {
  (t !== "number" || Vs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ea = Array.isArray;
function Pi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function uh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (Ea(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: mr(n) };
}
function i0(e, t) {
  var n = mr(t.value), r = mr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ch(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function a0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? a0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ns, o0 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ns = ns || document.createElement("div"), ns.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ns.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Va(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Aa = {
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
}, E1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Aa).forEach(function(e) {
  E1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Aa[t] = Aa[e];
  });
});
function s0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Aa.hasOwnProperty(e) && Aa[e] ? ("" + t).trim() : t + "px";
}
function l0(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = s0(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var O1 = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fc(e, t) {
  if (t) {
    if (O1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function Mc(e, t) {
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
var Lc = null;
function ed(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bc = null, _i = null, Ai = null;
function fh(e) {
  if (e = Bo(e)) {
    if (typeof Bc != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = Gl(t), Bc(e.stateNode, e.type, t));
  }
}
function u0(e) {
  _i ? Ai ? Ai.push(e) : Ai = [e] : _i = e;
}
function c0() {
  if (_i) {
    var e = _i, t = Ai;
    if (Ai = _i = null, fh(e), t) for (e = 0; e < t.length; e++) fh(t[e]);
  }
}
function f0(e, t) {
  return e(t);
}
function p0() {
}
var Lu = !1;
function d0(e, t, n) {
  if (Lu) return e(t, n);
  Lu = !0;
  try {
    return f0(e, t, n);
  } finally {
    Lu = !1, (_i !== null || Ai !== null) && (p0(), c0());
  }
}
function Ua(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
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
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var $c = !1;
if (In) try {
  var pa = {};
  Object.defineProperty(pa, "passive", { get: function() {
    $c = !0;
  } }), window.addEventListener("test", pa, pa), window.removeEventListener("test", pa, pa);
} catch {
  $c = !1;
}
function S1(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ta = !1, Us = null, Ws = !1, zc = null, k1 = { onError: function(e) {
  Ta = !0, Us = e;
} };
function C1(e, t, n, r, i, a, o, s, l) {
  Ta = !1, Us = null, S1.apply(k1, arguments);
}
function P1(e, t, n, r, i, a, o, s, l) {
  if (C1.apply(this, arguments), Ta) {
    if (Ta) {
      var u = Us;
      Ta = !1, Us = null;
    } else throw Error($(198));
    Ws || (Ws = !0, zc = u);
  }
}
function ti(e) {
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
function m0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ph(e) {
  if (ti(e) !== e) throw Error($(188));
}
function _1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ti(e), t === null) throw Error($(188));
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
        if (a === n) return ph(i), e;
        if (a === r) return ph(i), t;
        a = a.sibling;
      }
      throw Error($(188));
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
        if (!o) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function h0(e) {
  return e = _1(e), e !== null ? v0(e) : null;
}
function v0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = v0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var g0 = Tt.unstable_scheduleCallback, dh = Tt.unstable_cancelCallback, A1 = Tt.unstable_shouldYield, T1 = Tt.unstable_requestPaint, Be = Tt.unstable_now, I1 = Tt.unstable_getCurrentPriorityLevel, td = Tt.unstable_ImmediatePriority, y0 = Tt.unstable_UserBlockingPriority, Gs = Tt.unstable_NormalPriority, N1 = Tt.unstable_LowPriority, b0 = Tt.unstable_IdlePriority, Hl = null, gn = null;
function j1(e) {
  if (gn && typeof gn.onCommitFiberRoot == "function") try {
    gn.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var rn = Math.clz32 ? Math.clz32 : F1, R1 = Math.log, D1 = Math.LN2;
function F1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (R1(e) / D1 | 0) | 0;
}
var rs = 64, is = 4194304;
function Oa(e) {
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
function Ks(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? r = Oa(s) : (a &= o, a !== 0 && (r = Oa(a)));
  } else o = n & ~i, o !== 0 ? r = Oa(o) : a !== 0 && (r = Oa(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rn(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function M1(e, t) {
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
function L1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - rn(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = M1(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Hc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function x0() {
  var e = rs;
  return rs <<= 1, !(rs & 4194240) && (rs = 64), e;
}
function Bu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rn(t), e[t] = n;
}
function B1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rn(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function nd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - rn(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var be = 0;
function w0(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var E0, rd, O0, S0, k0, Vc = !1, as = [], ar = null, or = null, sr = null, Wa = /* @__PURE__ */ new Map(), Ga = /* @__PURE__ */ new Map(), Jn = [], $1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ar = null;
      break;
    case "dragenter":
    case "dragleave":
      or = null;
      break;
    case "mouseover":
    case "mouseout":
      sr = null;
      break;
    case "pointerover":
    case "pointerout":
      Wa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ga.delete(t.pointerId);
  }
}
function da(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Bo(t), t !== null && rd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function z1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ar = da(ar, e, t, n, r, i), !0;
    case "dragenter":
      return or = da(or, e, t, n, r, i), !0;
    case "mouseover":
      return sr = da(sr, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return Wa.set(a, da(Wa.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, Ga.set(a, da(Ga.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function C0(e) {
  var t = Dr(e.target);
  if (t !== null) {
    var n = ti(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = m0(n), t !== null) {
          e.blockedOn = t, k0(e.priority, function() {
            O0(n);
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
function Ps(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Lc = r, n.target.dispatchEvent(r), Lc = null;
    } else return t = Bo(n), t !== null && rd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function hh(e, t, n) {
  Ps(e) && n.delete(t);
}
function H1() {
  Vc = !1, ar !== null && Ps(ar) && (ar = null), or !== null && Ps(or) && (or = null), sr !== null && Ps(sr) && (sr = null), Wa.forEach(hh), Ga.forEach(hh);
}
function ma(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Vc || (Vc = !0, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, H1)));
}
function Ka(e) {
  function t(i) {
    return ma(i, e);
  }
  if (0 < as.length) {
    ma(as[0], e);
    for (var n = 1; n < as.length; n++) {
      var r = as[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ar !== null && ma(ar, e), or !== null && ma(or, e), sr !== null && ma(sr, e), Wa.forEach(t), Ga.forEach(t), n = 0; n < Jn.length; n++) r = Jn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null); ) C0(n), n.blockedOn === null && Jn.shift();
}
var Ti = zn.ReactCurrentBatchConfig, Ys = !0;
function V1(e, t, n, r) {
  var i = be, a = Ti.transition;
  Ti.transition = null;
  try {
    be = 1, id(e, t, n, r);
  } finally {
    be = i, Ti.transition = a;
  }
}
function U1(e, t, n, r) {
  var i = be, a = Ti.transition;
  Ti.transition = null;
  try {
    be = 4, id(e, t, n, r);
  } finally {
    be = i, Ti.transition = a;
  }
}
function id(e, t, n, r) {
  if (Ys) {
    var i = Uc(e, t, n, r);
    if (i === null) qu(e, t, r, qs, n), mh(e, r);
    else if (z1(i, e, t, n, r)) r.stopPropagation();
    else if (mh(e, r), t & 4 && -1 < $1.indexOf(e)) {
      for (; i !== null; ) {
        var a = Bo(i);
        if (a !== null && E0(a), a = Uc(e, t, n, r), a === null && qu(e, t, r, qs, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else qu(e, t, r, null, n);
  }
}
var qs = null;
function Uc(e, t, n, r) {
  if (qs = null, e = ed(r), e = Dr(e), e !== null) if (t = ti(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = m0(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return qs = e, null;
}
function P0(e) {
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
      switch (I1()) {
        case td:
          return 1;
        case y0:
          return 4;
        case Gs:
        case N1:
          return 16;
        case b0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tr = null, ad = null, _s = null;
function _0() {
  if (_s) return _s;
  var e, t = ad, n = t.length, r, i = "value" in tr ? tr.value : tr.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return _s = i.slice(e, 1 < r ? 1 - r : void 0);
}
function As(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function os() {
  return !0;
}
function vh() {
  return !1;
}
function jt(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? os : vh, this.isPropagationStopped = vh, this;
  }
  return Re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = os);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = os);
  }, persist: function() {
  }, isPersistent: os }), t;
}
var ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, od = jt(ea), Lo = Re({}, ea, { view: 0, detail: 0 }), W1 = jt(Lo), $u, zu, ha, Vl = Re({}, Lo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ha && (ha && e.type === "mousemove" ? ($u = e.screenX - ha.screenX, zu = e.screenY - ha.screenY) : zu = $u = 0, ha = e), $u);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zu;
} }), gh = jt(Vl), G1 = Re({}, Vl, { dataTransfer: 0 }), K1 = jt(G1), Y1 = Re({}, Lo, { relatedTarget: 0 }), Hu = jt(Y1), q1 = Re({}, ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), X1 = jt(q1), Q1 = Re({}, ea, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Z1 = jt(Q1), J1 = Re({}, ea, { data: 0 }), yh = jt(J1), eO = {
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
}, tO = {
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
}, nO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nO[e]) ? !!t[e] : !1;
}
function sd() {
  return rO;
}
var iO = Re({}, Lo, { key: function(e) {
  if (e.key) {
    var t = eO[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = As(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sd, charCode: function(e) {
  return e.type === "keypress" ? As(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? As(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), aO = jt(iO), oO = Re({}, Vl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bh = jt(oO), sO = Re({}, Lo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sd }), lO = jt(sO), uO = Re({}, ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cO = jt(uO), fO = Re({}, Vl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pO = jt(fO), dO = [9, 13, 27, 32], ld = In && "CompositionEvent" in window, Ia = null;
In && "documentMode" in document && (Ia = document.documentMode);
var mO = In && "TextEvent" in window && !Ia, A0 = In && (!ld || Ia && 8 < Ia && 11 >= Ia), xh = " ", wh = !1;
function T0(e, t) {
  switch (e) {
    case "keyup":
      return dO.indexOf(t.keyCode) !== -1;
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
function I0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fi = !1;
function hO(e, t) {
  switch (e) {
    case "compositionend":
      return I0(t);
    case "keypress":
      return t.which !== 32 ? null : (wh = !0, xh);
    case "textInput":
      return e = t.data, e === xh && wh ? null : e;
    default:
      return null;
  }
}
function vO(e, t) {
  if (fi) return e === "compositionend" || !ld && T0(e, t) ? (e = _0(), _s = ad = tr = null, fi = !1, e) : null;
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
      return A0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Eh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gO[e.type] : t === "textarea";
}
function N0(e, t, n, r) {
  u0(r), t = Xs(t, "onChange"), 0 < t.length && (n = new od("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Na = null, Ya = null;
function yO(e) {
  V0(e, 0);
}
function Ul(e) {
  var t = mi(e);
  if (n0(t)) return e;
}
function bO(e, t) {
  if (e === "change") return t;
}
var j0 = !1;
if (In) {
  var Vu;
  if (In) {
    var Uu = "oninput" in document;
    if (!Uu) {
      var Oh = document.createElement("div");
      Oh.setAttribute("oninput", "return;"), Uu = typeof Oh.oninput == "function";
    }
    Vu = Uu;
  } else Vu = !1;
  j0 = Vu && (!document.documentMode || 9 < document.documentMode);
}
function Sh() {
  Na && (Na.detachEvent("onpropertychange", R0), Ya = Na = null);
}
function R0(e) {
  if (e.propertyName === "value" && Ul(Ya)) {
    var t = [];
    N0(t, Ya, e, ed(e)), d0(yO, t);
  }
}
function xO(e, t, n) {
  e === "focusin" ? (Sh(), Na = t, Ya = n, Na.attachEvent("onpropertychange", R0)) : e === "focusout" && Sh();
}
function wO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(Ya);
}
function EO(e, t) {
  if (e === "click") return Ul(t);
}
function OO(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function SO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var on = typeof Object.is == "function" ? Object.is : SO;
function qa(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Cc.call(t, i) || !on(e[i], t[i])) return !1;
  }
  return !0;
}
function kh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ch(e, t) {
  var n = kh(e);
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
    n = kh(n);
  }
}
function D0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? D0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function F0() {
  for (var e = window, t = Vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vs(e.document);
  }
  return t;
}
function ud(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kO(e) {
  var t = F0(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && D0(n.ownerDocument.documentElement, n)) {
    if (r !== null && ud(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Ch(n, a);
        var o = Ch(
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
var CO = In && "documentMode" in document && 11 >= document.documentMode, pi = null, Wc = null, ja = null, Gc = !1;
function Ph(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gc || pi == null || pi !== Vs(r) || (r = pi, "selectionStart" in r && ud(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ja && qa(ja, r) || (ja = r, r = Xs(Wc, "onSelect"), 0 < r.length && (t = new od("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pi)));
}
function ss(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var di = { animationend: ss("Animation", "AnimationEnd"), animationiteration: ss("Animation", "AnimationIteration"), animationstart: ss("Animation", "AnimationStart"), transitionend: ss("Transition", "TransitionEnd") }, Wu = {}, M0 = {};
In && (M0 = document.createElement("div").style, "AnimationEvent" in window || (delete di.animationend.animation, delete di.animationiteration.animation, delete di.animationstart.animation), "TransitionEvent" in window || delete di.transitionend.transition);
function Wl(e) {
  if (Wu[e]) return Wu[e];
  if (!di[e]) return e;
  var t = di[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in M0) return Wu[e] = t[n];
  return e;
}
var L0 = Wl("animationend"), B0 = Wl("animationiteration"), $0 = Wl("animationstart"), z0 = Wl("transitionend"), H0 = /* @__PURE__ */ new Map(), _h = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Er(e, t) {
  H0.set(e, t), ei(t, [e]);
}
for (var Gu = 0; Gu < _h.length; Gu++) {
  var Ku = _h[Gu], PO = Ku.toLowerCase(), _O = Ku[0].toUpperCase() + Ku.slice(1);
  Er(PO, "on" + _O);
}
Er(L0, "onAnimationEnd");
Er(B0, "onAnimationIteration");
Er($0, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(z0, "onTransitionEnd");
Di("onMouseEnter", ["mouseout", "mouseover"]);
Di("onMouseLeave", ["mouseout", "mouseover"]);
Di("onPointerEnter", ["pointerout", "pointerover"]);
Di("onPointerLeave", ["pointerout", "pointerover"]);
ei("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ei("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ei("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ei("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ei("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), AO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));
function Ah(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, P1(r, t, void 0, e), e.currentTarget = null;
}
function V0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Ah(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Ah(i, s, u), a = l;
      }
    }
  }
  if (Ws) throw e = zc, Ws = !1, zc = null, e;
}
function ke(e, t) {
  var n = t[Qc];
  n === void 0 && (n = t[Qc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (U0(t, e, 2, !1), n.add(r));
}
function Yu(e, t, n) {
  var r = 0;
  t && (r |= 4), U0(n, e, r, t);
}
var ls = "_reactListening" + Math.random().toString(36).slice(2);
function Xa(e) {
  if (!e[ls]) {
    e[ls] = !0, Qy.forEach(function(n) {
      n !== "selectionchange" && (AO.has(n) || Yu(n, !1, e), Yu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ls] || (t[ls] = !0, Yu("selectionchange", !1, t));
  }
}
function U0(e, t, n, r) {
  switch (P0(t)) {
    case 1:
      var i = V1;
      break;
    case 4:
      i = U1;
      break;
    default:
      i = id;
  }
  n = i.bind(null, t, n, e), i = void 0, !$c || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function qu(e, t, n, r, i) {
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
        if (o = Dr(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  d0(function() {
    var u = a, c = ed(n), d = [];
    e: {
      var p = H0.get(e);
      if (p !== void 0) {
        var v = od, b = e;
        switch (e) {
          case "keypress":
            if (As(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = aO;
            break;
          case "focusin":
            b = "focus", v = Hu;
            break;
          case "focusout":
            b = "blur", v = Hu;
            break;
          case "beforeblur":
          case "afterblur":
            v = Hu;
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
            v = gh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = K1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = lO;
            break;
          case L0:
          case B0:
          case $0:
            v = X1;
            break;
          case z0:
            v = cO;
            break;
          case "scroll":
            v = W1;
            break;
          case "wheel":
            v = pO;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Z1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = bh;
        }
        var x = (t & 4) !== 0, w = !x && e === "scroll", h = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var E = y.stateNode;
          if (y.tag === 5 && E !== null && (y = E, h !== null && (E = Ua(m, h), E != null && x.push(Qa(m, E, y)))), w) break;
          m = m.return;
        }
        0 < x.length && (p = new v(p, b, null, n, c), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Lc && (b = n.relatedTarget || n.fromElement) && (Dr(b) || b[Nn])) break e;
        if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (b = n.relatedTarget || n.toElement, v = u, b = b ? Dr(b) : null, b !== null && (w = ti(b), b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (v = null, b = u), v !== b)) {
          if (x = gh, E = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = bh, E = "onPointerLeave", h = "onPointerEnter", m = "pointer"), w = v == null ? p : mi(v), y = b == null ? p : mi(b), p = new x(E, m + "leave", v, n, c), p.target = w, p.relatedTarget = y, E = null, Dr(c) === u && (x = new x(h, m + "enter", b, n, c), x.target = y, x.relatedTarget = w, E = x), w = E, v && b) t: {
            for (x = v, h = b, m = 0, y = x; y; y = si(y)) m++;
            for (y = 0, E = h; E; E = si(E)) y++;
            for (; 0 < m - y; ) x = si(x), m--;
            for (; 0 < y - m; ) h = si(h), y--;
            for (; m--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = si(x), h = si(h);
            }
            x = null;
          }
          else x = null;
          v !== null && Th(d, p, v, x, !1), b !== null && w !== null && Th(d, w, b, x, !0);
        }
      }
      e: {
        if (p = u ? mi(u) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var O = bO;
        else if (Eh(p)) if (j0) O = OO;
        else {
          O = wO;
          var A = xO;
        }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (O = EO);
        if (O && (O = O(e, u))) {
          N0(d, O, n, c);
          break e;
        }
        A && A(e, p, u), e === "focusout" && (A = p._wrapperState) && A.controlled && p.type === "number" && jc(p, "number", p.value);
      }
      switch (A = u ? mi(u) : window, e) {
        case "focusin":
          (Eh(A) || A.contentEditable === "true") && (pi = A, Wc = u, ja = null);
          break;
        case "focusout":
          ja = Wc = pi = null;
          break;
        case "mousedown":
          Gc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gc = !1, Ph(d, n, c);
          break;
        case "selectionchange":
          if (CO) break;
        case "keydown":
        case "keyup":
          Ph(d, n, c);
      }
      var T;
      if (ld) e: {
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
      else fi ? T0(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (A0 && n.locale !== "ko" && (fi || I !== "onCompositionStart" ? I === "onCompositionEnd" && fi && (T = _0()) : (tr = c, ad = "value" in tr ? tr.value : tr.textContent, fi = !0)), A = Xs(u, I), 0 < A.length && (I = new yh(I, e, null, n, c), d.push({ event: I, listeners: A }), T ? I.data = T : (T = I0(n), T !== null && (I.data = T)))), (T = mO ? hO(e, n) : vO(e, n)) && (u = Xs(u, "onBeforeInput"), 0 < u.length && (c = new yh("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    V0(d, t);
  });
}
function Qa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = Ua(e, n), a != null && r.unshift(Qa(e, a, i)), a = Ua(e, t), a != null && r.push(Qa(e, a, i))), e = e.return;
  }
  return r;
}
function si(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Th(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = Ua(n, a), l != null && o.unshift(Qa(n, l, s))) : i || (l = Ua(n, a), l != null && o.push(Qa(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var TO = /\r\n?/g, IO = /\u0000|\uFFFD/g;
function Ih(e) {
  return (typeof e == "string" ? e : "" + e).replace(TO, `
`).replace(IO, "");
}
function us(e, t, n) {
  if (t = Ih(t), Ih(e) !== t && n) throw Error($(425));
}
function Qs() {
}
var Kc = null, Yc = null;
function qc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xc = typeof setTimeout == "function" ? setTimeout : void 0, NO = typeof clearTimeout == "function" ? clearTimeout : void 0, Nh = typeof Promise == "function" ? Promise : void 0, jO = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nh < "u" ? function(e) {
  return Nh.resolve(null).then(e).catch(RO);
} : Xc;
function RO(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xu(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Ka(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Ka(t);
}
function lr(e) {
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
function jh(e) {
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
var ta = Math.random().toString(36).slice(2), dn = "__reactFiber$" + ta, Za = "__reactProps$" + ta, Nn = "__reactContainer$" + ta, Qc = "__reactEvents$" + ta, DO = "__reactListeners$" + ta, FO = "__reactHandles$" + ta;
function Dr(e) {
  var t = e[dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nn] || n[dn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = jh(e); e !== null; ) {
        if (n = e[dn]) return n;
        e = jh(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Bo(e) {
  return e = e[dn] || e[Nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function mi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Gl(e) {
  return e[Za] || null;
}
var Zc = [], hi = -1;
function Or(e) {
  return { current: e };
}
function Pe(e) {
  0 > hi || (e.current = Zc[hi], Zc[hi] = null, hi--);
}
function Oe(e, t) {
  hi++, Zc[hi] = e.current, e.current = t;
}
var hr = {}, lt = Or(hr), wt = Or(!1), Ur = hr;
function Fi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Et(e) {
  return e = e.childContextTypes, e != null;
}
function Zs() {
  Pe(wt), Pe(lt);
}
function Rh(e, t, n) {
  if (lt.current !== hr) throw Error($(168));
  Oe(lt, t), Oe(wt, n);
}
function W0(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error($(108, x1(e) || "Unknown", i));
  return Re({}, n, r);
}
function Js(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hr, Ur = lt.current, Oe(lt, e), Oe(wt, wt.current), !0;
}
function Dh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = W0(e, t, Ur), r.__reactInternalMemoizedMergedChildContext = e, Pe(wt), Pe(lt), Oe(lt, e)) : Pe(wt), Oe(wt, n);
}
var Cn = null, Kl = !1, Qu = !1;
function G0(e) {
  Cn === null ? Cn = [e] : Cn.push(e);
}
function MO(e) {
  Kl = !0, G0(e);
}
function Sr() {
  if (!Qu && Cn !== null) {
    Qu = !0;
    var e = 0, t = be;
    try {
      var n = Cn;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cn = null, Kl = !1;
    } catch (i) {
      throw Cn !== null && (Cn = Cn.slice(e + 1)), g0(td, Sr), i;
    } finally {
      be = t, Qu = !1;
    }
  }
  return null;
}
var vi = [], gi = 0, el = null, tl = 0, Lt = [], Bt = 0, Wr = null, _n = 1, An = "";
function Tr(e, t) {
  vi[gi++] = tl, vi[gi++] = el, el = e, tl = t;
}
function K0(e, t, n) {
  Lt[Bt++] = _n, Lt[Bt++] = An, Lt[Bt++] = Wr, Wr = e;
  var r = _n;
  e = An;
  var i = 32 - rn(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - rn(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, _n = 1 << 32 - rn(t) + i | n << i | r, An = a + e;
  } else _n = 1 << a | n << i | r, An = e;
}
function cd(e) {
  e.return !== null && (Tr(e, 1), K0(e, 1, 0));
}
function fd(e) {
  for (; e === el; ) el = vi[--gi], vi[gi] = null, tl = vi[--gi], vi[gi] = null;
  for (; e === Wr; ) Wr = Lt[--Bt], Lt[Bt] = null, An = Lt[--Bt], Lt[Bt] = null, _n = Lt[--Bt], Lt[Bt] = null;
}
var At = null, _t = null, Ae = !1, nn = null;
function Y0(e, t) {
  var n = $t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, _t = lr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, _t = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wr !== null ? { id: _n, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, _t = null, !0) : !1;
    default:
      return !1;
  }
}
function Jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ef(e) {
  if (Ae) {
    var t = _t;
    if (t) {
      var n = t;
      if (!Fh(e, t)) {
        if (Jc(e)) throw Error($(418));
        t = lr(n.nextSibling);
        var r = At;
        t && Fh(e, t) ? Y0(r, n) : (e.flags = e.flags & -4097 | 2, Ae = !1, At = e);
      }
    } else {
      if (Jc(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, Ae = !1, At = e;
    }
  }
}
function Mh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  At = e;
}
function cs(e) {
  if (e !== At) return !1;
  if (!Ae) return Mh(e), Ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qc(e.type, e.memoizedProps)), t && (t = _t)) {
    if (Jc(e)) throw q0(), Error($(418));
    for (; t; ) Y0(e, t), t = lr(t.nextSibling);
  }
  if (Mh(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _t = lr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = At ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function q0() {
  for (var e = _t; e; ) e = lr(e.nextSibling);
}
function Mi() {
  _t = At = null, Ae = !1;
}
function pd(e) {
  nn === null ? nn = [e] : nn.push(e);
}
var LO = zn.ReactCurrentBatchConfig;
function va(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function fs(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Lh(e) {
  var t = e._init;
  return t(e._payload);
}
function X0(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? (h.deletions = [m], h.flags |= 16) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function i(h, m) {
    return h = pr(h, m), h.index = 0, h.sibling = null, h;
  }
  function a(h, m, y) {
    return h.index = y, e ? (y = h.alternate, y !== null ? (y = y.index, y < m ? (h.flags |= 2, m) : y) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, y, E) {
    return m === null || m.tag !== 6 ? (m = ic(y, h.mode, E), m.return = h, m) : (m = i(m, y), m.return = h, m);
  }
  function l(h, m, y, E) {
    var O = y.type;
    return O === ci ? c(h, m, y.props.children, E, y.key) : m !== null && (m.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Xn && Lh(O) === m.type) ? (E = i(m, y.props), E.ref = va(h, m, y), E.return = h, E) : (E = Fs(y.type, y.key, y.props, null, h.mode, E), E.ref = va(h, m, y), E.return = h, E);
  }
  function u(h, m, y, E) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = ac(y, h.mode, E), m.return = h, m) : (m = i(m, y.children || []), m.return = h, m);
  }
  function c(h, m, y, E, O) {
    return m === null || m.tag !== 7 ? (m = zr(y, h.mode, E, O), m.return = h, m) : (m = i(m, y), m.return = h, m);
  }
  function d(h, m, y) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = ic("" + m, h.mode, y), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case es:
          return y = Fs(m.type, m.key, m.props, null, h.mode, y), y.ref = va(h, null, m), y.return = h, y;
        case ui:
          return m = ac(m, h.mode, y), m.return = h, m;
        case Xn:
          var E = m._init;
          return d(h, E(m._payload), y);
      }
      if (Ea(m) || fa(m)) return m = zr(m, h.mode, y, null), m.return = h, m;
      fs(h, m);
    }
    return null;
  }
  function p(h, m, y, E) {
    var O = m !== null ? m.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return O !== null ? null : s(h, m, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case es:
          return y.key === O ? l(h, m, y, E) : null;
        case ui:
          return y.key === O ? u(h, m, y, E) : null;
        case Xn:
          return O = y._init, p(
            h,
            m,
            O(y._payload),
            E
          );
      }
      if (Ea(y) || fa(y)) return O !== null ? null : c(h, m, y, E, null);
      fs(h, y);
    }
    return null;
  }
  function v(h, m, y, E, O) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(y) || null, s(m, h, "" + E, O);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case es:
          return h = h.get(E.key === null ? y : E.key) || null, l(m, h, E, O);
        case ui:
          return h = h.get(E.key === null ? y : E.key) || null, u(m, h, E, O);
        case Xn:
          var A = E._init;
          return v(h, m, y, A(E._payload), O);
      }
      if (Ea(E) || fa(E)) return h = h.get(y) || null, c(m, h, E, O, null);
      fs(m, E);
    }
    return null;
  }
  function b(h, m, y, E) {
    for (var O = null, A = null, T = m, I = m = 0, D = null; T !== null && I < y.length; I++) {
      T.index > I ? (D = T, T = null) : D = T.sibling;
      var L = p(h, T, y[I], E);
      if (L === null) {
        T === null && (T = D);
        break;
      }
      e && T && L.alternate === null && t(h, T), m = a(L, m, I), A === null ? O = L : A.sibling = L, A = L, T = D;
    }
    if (I === y.length) return n(h, T), Ae && Tr(h, I), O;
    if (T === null) {
      for (; I < y.length; I++) T = d(h, y[I], E), T !== null && (m = a(T, m, I), A === null ? O = T : A.sibling = T, A = T);
      return Ae && Tr(h, I), O;
    }
    for (T = r(h, T); I < y.length; I++) D = v(T, h, I, y[I], E), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? I : D.key), m = a(D, m, I), A === null ? O = D : A.sibling = D, A = D);
    return e && T.forEach(function(G) {
      return t(h, G);
    }), Ae && Tr(h, I), O;
  }
  function x(h, m, y, E) {
    var O = fa(y);
    if (typeof O != "function") throw Error($(150));
    if (y = O.call(y), y == null) throw Error($(151));
    for (var A = O = null, T = m, I = m = 0, D = null, L = y.next(); T !== null && !L.done; I++, L = y.next()) {
      T.index > I ? (D = T, T = null) : D = T.sibling;
      var G = p(h, T, L.value, E);
      if (G === null) {
        T === null && (T = D);
        break;
      }
      e && T && G.alternate === null && t(h, T), m = a(G, m, I), A === null ? O = G : A.sibling = G, A = G, T = D;
    }
    if (L.done) return n(
      h,
      T
    ), Ae && Tr(h, I), O;
    if (T === null) {
      for (; !L.done; I++, L = y.next()) L = d(h, L.value, E), L !== null && (m = a(L, m, I), A === null ? O = L : A.sibling = L, A = L);
      return Ae && Tr(h, I), O;
    }
    for (T = r(h, T); !L.done; I++, L = y.next()) L = v(T, h, I, L.value, E), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? I : L.key), m = a(L, m, I), A === null ? O = L : A.sibling = L, A = L);
    return e && T.forEach(function(Y) {
      return t(h, Y);
    }), Ae && Tr(h, I), O;
  }
  function w(h, m, y, E) {
    if (typeof y == "object" && y !== null && y.type === ci && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case es:
          e: {
            for (var O = y.key, A = m; A !== null; ) {
              if (A.key === O) {
                if (O = y.type, O === ci) {
                  if (A.tag === 7) {
                    n(h, A.sibling), m = i(A, y.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (A.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Xn && Lh(O) === A.type) {
                  n(h, A.sibling), m = i(A, y.props), m.ref = va(h, A, y), m.return = h, h = m;
                  break e;
                }
                n(h, A);
                break;
              } else t(h, A);
              A = A.sibling;
            }
            y.type === ci ? (m = zr(y.props.children, h.mode, E, y.key), m.return = h, h = m) : (E = Fs(y.type, y.key, y.props, null, h.mode, E), E.ref = va(h, m, y), E.return = h, h = E);
          }
          return o(h);
        case ui:
          e: {
            for (A = y.key; m !== null; ) {
              if (m.key === A) if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                n(h, m.sibling), m = i(m, y.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = ac(y, h.mode, E), m.return = h, h = m;
          }
          return o(h);
        case Xn:
          return A = y._init, w(h, m, A(y._payload), E);
      }
      if (Ea(y)) return b(h, m, y, E);
      if (fa(y)) return x(h, m, y, E);
      fs(h, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, y), m.return = h, h = m) : (n(h, m), m = ic(y, h.mode, E), m.return = h, h = m), o(h)) : n(h, m);
  }
  return w;
}
var Li = X0(!0), Q0 = X0(!1), nl = Or(null), rl = null, yi = null, dd = null;
function md() {
  dd = yi = rl = null;
}
function hd(e) {
  var t = nl.current;
  Pe(nl), e._currentValue = t;
}
function tf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ii(e, t) {
  rl = e, dd = yi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xt = !0), e.firstContext = null);
}
function Ht(e) {
  var t = e._currentValue;
  if (dd !== e) if (e = { context: e, memoizedValue: t, next: null }, yi === null) {
    if (rl === null) throw Error($(308));
    yi = e, rl.dependencies = { lanes: 0, firstContext: e };
  } else yi = yi.next = e;
  return t;
}
var Fr = null;
function vd(e) {
  Fr === null ? Fr = [e] : Fr.push(e);
}
function Z0(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, vd(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jn(e, r);
}
function jn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qn = !1;
function gd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function J0(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, he & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, vd(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jn(e, n);
}
function Ts(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nd(e, n);
  }
}
function Bh(e, t) {
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
function il(e, t, n, r) {
  var i = e.updateQueue;
  Qn = !1;
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
      var p = s.lane, v = s.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var b = e, x = s;
          switch (p = t, v = n, x.tag) {
            case 1:
              if (b = x.payload, typeof b == "function") {
                d = b.call(v, d, p);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = x.payload, p = typeof b == "function" ? b.call(v, d, p) : b, p == null) break e;
              d = Re({}, d, p);
              break e;
            case 2:
              Qn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [s] : p.push(s));
      } else v = { eventTime: v, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = v, l = d) : c = c.next = v, o |= p;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    Kr |= o, e.lanes = o, e.memoizedState = d;
  }
}
function $h(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error($(191, i));
      i.call(r);
    }
  }
}
var $o = {}, yn = Or($o), Ja = Or($o), eo = Or($o);
function Mr(e) {
  if (e === $o) throw Error($(174));
  return e;
}
function yd(e, t) {
  switch (Oe(eo, t), Oe(Ja, e), Oe(yn, $o), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dc(t, e);
  }
  Pe(yn), Oe(yn, t);
}
function Bi() {
  Pe(yn), Pe(Ja), Pe(eo);
}
function eb(e) {
  Mr(eo.current);
  var t = Mr(yn.current), n = Dc(t, e.type);
  t !== n && (Oe(Ja, e), Oe(yn, n));
}
function bd(e) {
  Ja.current === e && (Pe(yn), Pe(Ja));
}
var Ne = Or(0);
function al(e) {
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
var Zu = [];
function xd() {
  for (var e = 0; e < Zu.length; e++) Zu[e]._workInProgressVersionPrimary = null;
  Zu.length = 0;
}
var Is = zn.ReactCurrentDispatcher, Ju = zn.ReactCurrentBatchConfig, Gr = 0, je = null, Ve = null, Ge = null, ol = !1, Ra = !1, to = 0, BO = 0;
function rt() {
  throw Error($(321));
}
function wd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!on(e[n], t[n])) return !1;
  return !0;
}
function Ed(e, t, n, r, i, a) {
  if (Gr = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e === null || e.memoizedState === null ? VO : UO, e = n(r, i), Ra) {
    a = 0;
    do {
      if (Ra = !1, to = 0, 25 <= a) throw Error($(301));
      a += 1, Ge = Ve = null, t.updateQueue = null, Is.current = WO, e = n(r, i);
    } while (Ra);
  }
  if (Is.current = sl, t = Ve !== null && Ve.next !== null, Gr = 0, Ge = Ve = je = null, ol = !1, t) throw Error($(300));
  return e;
}
function Od() {
  var e = to !== 0;
  return to = 0, e;
}
function fn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? je.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function Vt() {
  if (Ve === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var t = Ge === null ? je.memoizedState : Ge.next;
  if (t !== null) Ge = t, Ve = e;
  else {
    if (e === null) throw Error($(310));
    Ve = e, e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }, Ge === null ? je.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function no(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ec(e) {
  var t = Vt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Ve, i = r.baseQueue, a = n.pending;
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
      if ((Gr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, o = r) : l = l.next = d, je.lanes |= c, Kr |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = r : l.next = s, on(r, t.memoizedState) || (xt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, je.lanes |= a, Kr |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tc(e) {
  var t = Vt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    on(a, t.memoizedState) || (xt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function tb() {
}
function nb(e, t) {
  var n = je, r = Vt(), i = t(), a = !on(r.memoizedState, i);
  if (a && (r.memoizedState = i, xt = !0), r = r.queue, Sd(ab.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ge !== null && Ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, ro(9, ib.bind(null, n, r, i, t), void 0, null), Ke === null) throw Error($(349));
    Gr & 30 || rb(n, t, i);
  }
  return i;
}
function rb(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ib(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ob(t) && sb(e);
}
function ab(e, t, n) {
  return n(function() {
    ob(t) && sb(e);
  });
}
function ob(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function sb(e) {
  var t = jn(e, 1);
  t !== null && an(t, e, 1, -1);
}
function zh(e) {
  var t = fn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: no, lastRenderedState: e }, t.queue = e, e = e.dispatch = HO.bind(null, je, e), [t.memoizedState, e];
}
function ro(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function lb() {
  return Vt().memoizedState;
}
function Ns(e, t, n, r) {
  var i = fn();
  je.flags |= e, i.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r);
}
function Yl(e, t, n, r) {
  var i = Vt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ve !== null) {
    var o = Ve.memoizedState;
    if (a = o.destroy, r !== null && wd(r, o.deps)) {
      i.memoizedState = ro(t, n, a, r);
      return;
    }
  }
  je.flags |= e, i.memoizedState = ro(1 | t, n, a, r);
}
function Hh(e, t) {
  return Ns(8390656, 8, e, t);
}
function Sd(e, t) {
  return Yl(2048, 8, e, t);
}
function ub(e, t) {
  return Yl(4, 2, e, t);
}
function cb(e, t) {
  return Yl(4, 4, e, t);
}
function fb(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function pb(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yl(4, 4, fb.bind(null, t, e), n);
}
function kd() {
}
function db(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function mb(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function hb(e, t, n) {
  return Gr & 21 ? (on(n, t) || (n = x0(), je.lanes |= n, Kr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xt = !0), e.memoizedState = n);
}
function $O(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ju.transition;
  Ju.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, Ju.transition = r;
  }
}
function vb() {
  return Vt().memoizedState;
}
function zO(e, t, n) {
  var r = fr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gb(e)) yb(t, n);
  else if (n = Z0(e, t, n, r), n !== null) {
    var i = vt();
    an(n, e, r, i), bb(n, t, r);
  }
}
function HO(e, t, n) {
  var r = fr(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gb(e)) yb(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = !0, i.eagerState = s, on(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, vd(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Z0(e, t, i, r), n !== null && (i = vt(), an(n, e, r, i), bb(n, t, r));
  }
}
function gb(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function yb(e, t) {
  Ra = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bb(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nd(e, n);
  }
}
var sl = { readContext: Ht, useCallback: rt, useContext: rt, useEffect: rt, useImperativeHandle: rt, useInsertionEffect: rt, useLayoutEffect: rt, useMemo: rt, useReducer: rt, useRef: rt, useState: rt, useDebugValue: rt, useDeferredValue: rt, useTransition: rt, useMutableSource: rt, useSyncExternalStore: rt, useId: rt, unstable_isNewReconciler: !1 }, VO = { readContext: Ht, useCallback: function(e, t) {
  return fn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ht, useEffect: Hh, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ns(
    4194308,
    4,
    fb.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ns(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ns(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = fn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = fn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zO.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = fn();
  return e = { current: e }, t.memoizedState = e;
}, useState: zh, useDebugValue: kd, useDeferredValue: function(e) {
  return fn().memoizedState = e;
}, useTransition: function() {
  var e = zh(!1), t = e[0];
  return e = $O.bind(null, e[1]), fn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, i = fn();
  if (Ae) {
    if (n === void 0) throw Error($(407));
    n = n();
  } else {
    if (n = t(), Ke === null) throw Error($(349));
    Gr & 30 || rb(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, Hh(ab.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, ro(9, ib.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = fn(), t = Ke.identifierPrefix;
  if (Ae) {
    var n = An, r = _n;
    n = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = to++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = BO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, UO = {
  readContext: Ht,
  useCallback: db,
  useContext: Ht,
  useEffect: Sd,
  useImperativeHandle: pb,
  useInsertionEffect: ub,
  useLayoutEffect: cb,
  useMemo: mb,
  useReducer: ec,
  useRef: lb,
  useState: function() {
    return ec(no);
  },
  useDebugValue: kd,
  useDeferredValue: function(e) {
    var t = Vt();
    return hb(t, Ve.memoizedState, e);
  },
  useTransition: function() {
    var e = ec(no)[0], t = Vt().memoizedState;
    return [e, t];
  },
  useMutableSource: tb,
  useSyncExternalStore: nb,
  useId: vb,
  unstable_isNewReconciler: !1
}, WO = { readContext: Ht, useCallback: db, useContext: Ht, useEffect: Sd, useImperativeHandle: pb, useInsertionEffect: ub, useLayoutEffect: cb, useMemo: mb, useReducer: tc, useRef: lb, useState: function() {
  return tc(no);
}, useDebugValue: kd, useDeferredValue: function(e) {
  var t = Vt();
  return Ve === null ? t.memoizedState = e : hb(t, Ve.memoizedState, e);
}, useTransition: function() {
  var e = tc(no)[0], t = Vt().memoizedState;
  return [e, t];
}, useMutableSource: tb, useSyncExternalStore: nb, useId: vb, unstable_isNewReconciler: !1 };
function Jt(e, t) {
  if (e && e.defaultProps) {
    t = Re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = { isMounted: function(e) {
  return (e = e._reactInternals) ? ti(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = vt(), i = fr(e), a = Tn(r, i);
  a.payload = t, n != null && (a.callback = n), t = ur(e, a, i), t !== null && (an(t, e, i, r), Ts(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = vt(), i = fr(e), a = Tn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ur(e, a, i), t !== null && (an(t, e, i, r), Ts(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = vt(), r = fr(e), i = Tn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = ur(e, i, r), t !== null && (an(t, e, r, n), Ts(t, e, r));
} };
function Vh(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !qa(n, r) || !qa(i, a) : !0;
}
function xb(e, t, n) {
  var r = !1, i = hr, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Ht(a) : (i = Et(t) ? Ur : lt.current, r = t.contextTypes, a = (r = r != null) ? Fi(e, i) : hr), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Uh(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function rf(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, gd(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Ht(a) : (a = Et(t) ? Ur : lt.current, i.context = Fi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (nf(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ql.enqueueReplaceState(i, i.state, null), il(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function $i(e, t) {
  try {
    var n = "", r = t;
    do
      n += b1(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function af(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var GO = typeof WeakMap == "function" ? WeakMap : Map;
function wb(e, t, n) {
  n = Tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ul || (ul = !0, hf = r), af(e, t);
  }, n;
}
function Eb(e, t, n) {
  n = Tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      af(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    af(e, t), typeof r != "function" && (cr === null ? cr = /* @__PURE__ */ new Set([this]) : cr.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Wh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new GO();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = oS.bind(null, e, t, n), t.then(e, e));
}
function Gh(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Kh(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1), t.tag = 2, ur(n, t, 1))), n.lanes |= 1), e);
}
var KO = zn.ReactCurrentOwner, xt = !1;
function dt(e, t, n, r) {
  t.child = e === null ? Q0(t, null, n, r) : Li(t, e.child, n, r);
}
function Yh(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return Ii(t, i), r = Ed(e, t, n, r, a, i), n = Od(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (Ae && n && cd(t), t.flags |= 1, dt(e, t, r, i), t.child);
}
function qh(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !jd(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ob(e, t, a, r, i)) : (e = Fs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qa, n(o, r) && e.ref === t.ref) return Rn(e, t, i);
  }
  return t.flags |= 1, e = pr(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ob(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qa(a, r) && e.ref === t.ref) if (xt = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (xt = !0);
    else return t.lanes = e.lanes, Rn(e, t, i);
  }
  return of(e, t, n, r, i);
}
function Sb(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(xi, Ct), Ct |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Oe(xi, Ct), Ct |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Oe(xi, Ct), Ct |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Oe(xi, Ct), Ct |= r;
  return dt(e, t, i, n), t.child;
}
function kb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function of(e, t, n, r, i) {
  var a = Et(n) ? Ur : lt.current;
  return a = Fi(t, a), Ii(t, i), n = Ed(e, t, n, r, a, i), r = Od(), e !== null && !xt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : (Ae && r && cd(t), t.flags |= 1, dt(e, t, n, i), t.child);
}
function Xh(e, t, n, r, i) {
  if (Et(n)) {
    var a = !0;
    Js(t);
  } else a = !1;
  if (Ii(t, i), t.stateNode === null) js(e, t), xb(t, n, r), rf(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ht(u) : (u = Et(n) ? Ur : lt.current, u = Fi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && Uh(t, o, r, u), Qn = !1;
    var p = t.memoizedState;
    o.state = p, il(t, r, o, i), l = t.memoizedState, s !== r || p !== l || wt.current || Qn ? (typeof c == "function" && (nf(t, n, c, r), l = t.memoizedState), (s = Qn || Vh(t, n, s, r, p, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, J0(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Jt(t.type, s), o.props = u, d = t.pendingProps, p = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ht(l) : (l = Et(n) ? Ur : lt.current, l = Fi(t, l));
    var v = n.getDerivedStateFromProps;
    (c = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || p !== l) && Uh(t, o, r, l), Qn = !1, p = t.memoizedState, o.state = p, il(t, r, o, i);
    var b = t.memoizedState;
    s !== d || p !== b || wt.current || Qn ? (typeof v == "function" && (nf(t, n, v, r), b = t.memoizedState), (u = Qn || Vh(t, n, u, r, p, b, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, b, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, b, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), o.props = r, o.state = b, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return sf(e, t, n, r, a, i);
}
function sf(e, t, n, r, i, a) {
  kb(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Dh(t, n, !1), Rn(e, t, a);
  r = t.stateNode, KO.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Li(t, e.child, null, a), t.child = Li(t, null, s, a)) : dt(e, t, s, a), t.memoizedState = r.state, i && Dh(t, n, !0), t.child;
}
function Cb(e) {
  var t = e.stateNode;
  t.pendingContext ? Rh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rh(e, t.context, !1), yd(e, t.containerInfo);
}
function Qh(e, t, n, r, i) {
  return Mi(), pd(i), t.flags |= 256, dt(e, t, n, r), t.child;
}
var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
function uf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pb(e, t, n) {
  var r = t.pendingProps, i = Ne.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Oe(Ne, i & 1), e === null)
    return ef(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Zl(o, r, 0, null), e = zr(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = uf(n), t.memoizedState = lf, e) : Cd(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return YO(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = pr(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = pr(s, a) : (a = zr(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? uf(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = lf, r;
  }
  return a = e.child, e = a.sibling, r = pr(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Cd(e, t) {
  return t = Zl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ps(e, t, n, r) {
  return r !== null && pd(r), Li(t, e.child, null, n), e = Cd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function YO(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = nc(Error($(422))), ps(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Zl({ mode: "visible", children: r.children }, i, 0, null), a = zr(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Li(t, e.child, null, o), t.child.memoizedState = uf(o), t.memoizedState = lf, a);
  if (!(t.mode & 1)) return ps(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error($(419)), r = nc(a, r, void 0), ps(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, xt || s) {
    if (r = Ke, r !== null) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, jn(e, i), an(r, e, i, -1));
    }
    return Nd(), r = nc(Error($(421))), ps(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sS.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, _t = lr(i.nextSibling), At = t, Ae = !0, nn = null, e !== null && (Lt[Bt++] = _n, Lt[Bt++] = An, Lt[Bt++] = Wr, _n = e.id, An = e.overflow, Wr = t), t = Cd(t, r.children), t.flags |= 4096, t);
}
function Zh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), tf(e.return, t, n);
}
function rc(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function _b(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (dt(e, t, r.children, n), r = Ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Zh(e, n, t);
      else if (e.tag === 19) Zh(e, n, t);
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
  if (Oe(Ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && al(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), rc(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && al(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      rc(t, !0, n, null, a);
      break;
    case "together":
      rc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function js(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Kr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = pr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qO(e, t, n) {
  switch (t.tag) {
    case 3:
      Cb(t), Mi();
      break;
    case 5:
      eb(t);
      break;
    case 1:
      Et(t.type) && Js(t);
      break;
    case 4:
      yd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      Oe(nl, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Oe(Ne, Ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pb(e, t, n) : (Oe(Ne, Ne.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
      Oe(Ne, Ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return _b(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Oe(Ne, Ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sb(e, t, n);
  }
  return Rn(e, t, n);
}
var Ab, cf, Tb, Ib;
Ab = function(e, t) {
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
cf = function() {
};
Tb = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Mr(yn.current);
    var a = null;
    switch (n) {
      case "input":
        i = Ic(e, i), r = Ic(e, r), a = [];
        break;
      case "select":
        i = Re({}, i, { value: void 0 }), r = Re({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Rc(e, i), r = Rc(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qs);
    }
    Fc(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ha.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ha.hasOwnProperty(u) ? (l != null && u === "onScroll" && ke("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ib = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ga(e, t) {
  if (!Ae) switch (e.tailMode) {
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
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function XO(e, t, n) {
  var r = t.pendingProps;
  switch (fd(t), t.tag) {
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
      return it(t), null;
    case 1:
      return Et(t.type) && Zs(), it(t), null;
    case 3:
      return r = t.stateNode, Bi(), Pe(wt), Pe(lt), xd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (cs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nn !== null && (yf(nn), nn = null))), cf(e, t), it(t), null;
    case 5:
      bd(t);
      var i = Mr(eo.current);
      if (n = t.type, e !== null && t.stateNode != null) Tb(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return it(t), null;
        }
        if (e = Mr(yn.current), cs(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[dn] = t, r[Za] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Sa.length; i++) ke(Sa[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke(
                "error",
                r
              ), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              sh(r, a), ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ke("invalid", r);
              break;
            case "textarea":
              uh(r, a), ke("invalid", r);
          }
          Fc(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && us(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && us(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : Ha.hasOwnProperty(o) && s != null && o === "onScroll" && ke("scroll", r);
          }
          switch (n) {
            case "input":
              ts(r), lh(r, a, !0);
              break;
            case "textarea":
              ts(r), ch(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Qs);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = a0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[dn] = t, e[Za] = r, Ab(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Mc(n, r), n) {
              case "dialog":
                ke("cancel", e), ke("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Sa.length; i++) ke(Sa[i], e);
                i = r;
                break;
              case "source":
                ke("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  e
                ), ke("load", e), i = r;
                break;
              case "details":
                ke("toggle", e), i = r;
                break;
              case "input":
                sh(e, r), i = Ic(e, r), ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Re({}, r, { value: void 0 }), ke("invalid", e);
                break;
              case "textarea":
                uh(e, r), i = Rc(e, r), ke("invalid", e);
                break;
              default:
                i = r;
            }
            Fc(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? l0(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && o0(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Va(e, l) : typeof l == "number" && Va(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ha.hasOwnProperty(a) ? l != null && a === "onScroll" && ke("scroll", e) : l != null && Xp(e, a, l, o));
            }
            switch (n) {
              case "input":
                ts(e), lh(e, r, !1);
                break;
              case "textarea":
                ts(e), ch(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Pi(e, !!r.multiple, a, !1) : r.defaultValue != null && Pi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qs);
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
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) Ib(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = Mr(eo.current), Mr(yn.current), cs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[dn] = t, (a = r.nodeValue !== n) && (e = At, e !== null)) switch (e.tag) {
            case 3:
              us(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && us(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dn] = t, t.stateNode = r;
      }
      return it(t), null;
    case 13:
      if (Pe(Ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ae && _t !== null && t.mode & 1 && !(t.flags & 128)) q0(), Mi(), t.flags |= 98560, a = !1;
        else if (a = cs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error($(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error($(317));
            a[dn] = t;
          } else Mi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          it(t), a = !1;
        } else nn !== null && (yf(nn), nn = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ne.current & 1 ? Ue === 0 && (Ue = 3) : Nd())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
    case 4:
      return Bi(), cf(e, t), e === null && Xa(t.stateNode.containerInfo), it(t), null;
    case 10:
      return hd(t.type._context), it(t), null;
    case 17:
      return Et(t.type) && Zs(), it(t), null;
    case 19:
      if (Pe(Ne), a = t.memoizedState, a === null) return it(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) ga(a, !1);
      else {
        if (Ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = al(e), o !== null) {
            for (t.flags |= 128, ga(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Oe(Ne, Ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Be() > zi && (t.flags |= 128, r = !0, ga(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = al(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ga(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Ae) return it(t), null;
        } else 2 * Be() - a.renderingStartTime > zi && n !== 1073741824 && (t.flags |= 128, r = !0, ga(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Be(), t.sibling = null, n = Ne.current, Oe(Ne, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
    case 22:
    case 23:
      return Id(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ct & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function QO(e, t) {
  switch (fd(t), t.tag) {
    case 1:
      return Et(t.type) && Zs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Bi(), Pe(wt), Pe(lt), xd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return bd(t), null;
    case 13:
      if (Pe(Ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        Mi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Ne), null;
    case 4:
      return Bi(), null;
    case 10:
      return hd(t.type._context), null;
    case 22:
    case 23:
      return Id(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ds = !1, at = !1, ZO = typeof WeakSet == "function" ? WeakSet : Set, X = null;
function bi(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Fe(e, t, r);
  }
  else n.current = null;
}
function ff(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var Jh = !1;
function JO(e, t) {
  if (Kc = Ys, e = F0(), ud(e)) {
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
        var o = 0, s = -1, l = -1, u = 0, c = 0, d = e, p = null;
        t: for (; ; ) {
          for (var v; d !== n || i !== 0 && d.nodeType !== 3 || (s = o + i), d !== a || r !== 0 && d.nodeType !== 3 || (l = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (v = d.firstChild) !== null; )
            p = d, d = v;
          for (; ; ) {
            if (d === e) break t;
            if (p === n && ++u === i && (s = o), p === a && ++c === r && (l = o), (v = d.nextSibling) !== null) break;
            d = p, p = d.parentNode;
          }
          d = v;
        }
        n = s === -1 || l === -1 ? null : { start: s, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yc = { focusedElem: e, selectionRange: n }, Ys = !1, X = t; X !== null; ) if (t = X, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, X = e;
  else for (; X !== null; ) {
    t = X;
    try {
      var b = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (b !== null) {
            var x = b.memoizedProps, w = b.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Jt(t.type, x), w);
            h.__reactInternalSnapshotBeforeUpdate = m;
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
          throw Error($(163));
      }
    } catch (E) {
      Fe(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, X = e;
      break;
    }
    X = t.return;
  }
  return b = Jh, Jh = !1, b;
}
function Da(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && ff(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Xl(e, t) {
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
function pf(e) {
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
function Nb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dn], delete t[Za], delete t[Qc], delete t[DO], delete t[FO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ev(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || jb(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function df(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qs));
  else if (r !== 4 && (e = e.child, e !== null)) for (df(e, t, n), e = e.sibling; e !== null; ) df(e, t, n), e = e.sibling;
}
function mf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mf(e, t, n), e = e.sibling; e !== null; ) mf(e, t, n), e = e.sibling;
}
var Xe = null, en = !1;
function Kn(e, t, n) {
  for (n = n.child; n !== null; ) Rb(e, t, n), n = n.sibling;
}
function Rb(e, t, n) {
  if (gn && typeof gn.onCommitFiberUnmount == "function") try {
    gn.onCommitFiberUnmount(Hl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      at || bi(n, t);
    case 6:
      var r = Xe, i = en;
      Xe = null, Kn(e, t, n), Xe = r, en = i, Xe !== null && (en ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null && (en ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? Xu(e.parentNode, n) : e.nodeType === 1 && Xu(e, n), Ka(e)) : Xu(Xe, n.stateNode));
      break;
    case 4:
      r = Xe, i = en, Xe = n.stateNode.containerInfo, en = !0, Kn(e, t, n), Xe = r, en = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!at && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && ff(n, t, o), i = i.next;
        } while (i !== r);
      }
      Kn(e, t, n);
      break;
    case 1:
      if (!at && (bi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Fe(n, t, s);
      }
      Kn(e, t, n);
      break;
    case 21:
      Kn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (at = (r = at) || n.memoizedState !== null, Kn(e, t, n), at = r) : Kn(e, t, n);
      break;
    default:
      Kn(e, t, n);
  }
}
function tv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ZO()), t.forEach(function(r) {
      var i = lS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Zt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Xe = s.stateNode, en = !1;
            break e;
          case 3:
            Xe = s.stateNode.containerInfo, en = !0;
            break e;
          case 4:
            Xe = s.stateNode.containerInfo, en = !0;
            break e;
        }
        s = s.return;
      }
      if (Xe === null) throw Error($(160));
      Rb(a, o, i), Xe = null, en = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Fe(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Db(t, e), t = t.sibling;
}
function Db(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Zt(t, e), un(e), r & 4) {
        try {
          Da(3, e, e.return), Xl(3, e);
        } catch (x) {
          Fe(e, e.return, x);
        }
        try {
          Da(5, e, e.return);
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      break;
    case 1:
      Zt(t, e), un(e), r & 512 && n !== null && bi(n, n.return);
      break;
    case 5:
      if (Zt(t, e), un(e), r & 512 && n !== null && bi(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Va(i, "");
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && r0(i, a), Mc(s, o);
          var u = Mc(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], d = l[o + 1];
            c === "style" ? l0(i, d) : c === "dangerouslySetInnerHTML" ? o0(i, d) : c === "children" ? Va(i, d) : Xp(i, c, d, u);
          }
          switch (s) {
            case "input":
              Nc(i, a);
              break;
            case "textarea":
              i0(i, a);
              break;
            case "select":
              var p = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var v = a.value;
              v != null ? Pi(i, !!a.multiple, v, !1) : p !== !!a.multiple && (a.defaultValue != null ? Pi(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Pi(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[Za] = a;
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Zt(t, e), un(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Zt(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ka(t.containerInfo);
      } catch (x) {
        Fe(e, e.return, x);
      }
      break;
    case 4:
      Zt(t, e), un(e);
      break;
    case 13:
      Zt(t, e), un(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Ad = Be())), r & 4 && tv(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (at = (u = at) || c, Zt(t, e), at = u) : Zt(t, e), un(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (X = e, c = e.child; c !== null; ) {
          for (d = X = c; X !== null; ) {
            switch (p = X, v = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Da(4, p, p.return);
                break;
              case 1:
                bi(p, p.return);
                var b = p.stateNode;
                if (typeof b.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                  } catch (x) {
                    Fe(r, n, x);
                  }
                }
                break;
              case 5:
                bi(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  rv(d);
                  continue;
                }
            }
            v !== null ? (v.return = p, X = v) : rv(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = s0("display", o));
              } catch (x) {
                Fe(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (x) {
              Fe(e, e.return, x);
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
      Zt(t, e), un(e), r & 4 && tv(e);
      break;
    case 21:
      break;
    default:
      Zt(
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
          if (jb(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Va(i, ""), r.flags &= -33);
          var a = ev(e);
          mf(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = ev(e);
          df(e, s, o);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      Fe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function eS(e, t, n) {
  X = e, Fb(e);
}
function Fb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var i = X, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ds;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || at;
        s = ds;
        var u = at;
        if (ds = o, (at = l) && !u) for (X = i; X !== null; ) o = X, l = o.child, o.tag === 22 && o.memoizedState !== null ? iv(i) : l !== null ? (l.return = o, X = l) : iv(i);
        for (; a !== null; ) X = a, Fb(a), a = a.sibling;
        X = i, ds = s, at = u;
      }
      nv(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, X = a) : nv(e);
  }
}
function nv(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            at || Xl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !at) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Jt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && $h(t, a, r);
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
              $h(t, o, n);
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
                  d !== null && Ka(d);
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
            throw Error($(163));
        }
        at || t.flags & 512 && pf(t);
      } catch (p) {
        Fe(t, t.return, p);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function rv(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function iv(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (l) {
            Fe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Fe(t, i, l);
            }
          }
          var a = t.return;
          try {
            pf(t);
          } catch (l) {
            Fe(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            pf(t);
          } catch (l) {
            Fe(t, o, l);
          }
      }
    } catch (l) {
      Fe(t, t.return, l);
    }
    if (t === e) {
      X = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, X = s;
      break;
    }
    X = t.return;
  }
}
var tS = Math.ceil, ll = zn.ReactCurrentDispatcher, Pd = zn.ReactCurrentOwner, zt = zn.ReactCurrentBatchConfig, he = 0, Ke = null, ze = null, Je = 0, Ct = 0, xi = Or(0), Ue = 0, io = null, Kr = 0, Ql = 0, _d = 0, Fa = null, bt = null, Ad = 0, zi = 1 / 0, kn = null, ul = !1, hf = null, cr = null, ms = !1, nr = null, cl = 0, Ma = 0, vf = null, Rs = -1, Ds = 0;
function vt() {
  return he & 6 ? Be() : Rs !== -1 ? Rs : Rs = Be();
}
function fr(e) {
  return e.mode & 1 ? he & 2 && Je !== 0 ? Je & -Je : LO.transition !== null ? (Ds === 0 && (Ds = x0()), Ds) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : P0(e.type)), e) : 1;
}
function an(e, t, n, r) {
  if (50 < Ma) throw Ma = 0, vf = null, Error($(185));
  Mo(e, n, r), (!(he & 2) || e !== Ke) && (e === Ke && (!(he & 2) && (Ql |= n), Ue === 4 && er(e, Je)), Ot(e, r), n === 1 && he === 0 && !(t.mode & 1) && (zi = Be() + 500, Kl && Sr()));
}
function Ot(e, t) {
  var n = e.callbackNode;
  L1(e, t);
  var r = Ks(e, e === Ke ? Je : 0);
  if (r === 0) n !== null && dh(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && dh(n), t === 1) e.tag === 0 ? MO(av.bind(null, e)) : G0(av.bind(null, e)), jO(function() {
      !(he & 6) && Sr();
    }), n = null;
    else {
      switch (w0(r)) {
        case 1:
          n = td;
          break;
        case 4:
          n = y0;
          break;
        case 16:
          n = Gs;
          break;
        case 536870912:
          n = b0;
          break;
        default:
          n = Gs;
      }
      n = Ub(n, Mb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mb(e, t) {
  if (Rs = -1, Ds = 0, he & 6) throw Error($(327));
  var n = e.callbackNode;
  if (Ni() && e.callbackNode !== n) return null;
  var r = Ks(e, e === Ke ? Je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var i = he;
    he |= 2;
    var a = Bb();
    (Ke !== e || Je !== t) && (kn = null, zi = Be() + 500, $r(e, t));
    do
      try {
        iS();
        break;
      } catch (s) {
        Lb(e, s);
      }
    while (!0);
    md(), ll.current = a, he = i, ze !== null ? t = 0 : (Ke = null, Je = 0, t = Ue);
  }
  if (t !== 0) {
    if (t === 2 && (i = Hc(e), i !== 0 && (r = i, t = gf(e, i))), t === 1) throw n = io, $r(e, 0), er(e, r), Ot(e, Be()), n;
    if (t === 6) er(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !nS(i) && (t = fl(e, r), t === 2 && (a = Hc(e), a !== 0 && (r = a, t = gf(e, a))), t === 1)) throw n = io, $r(e, 0), er(e, r), Ot(e, Be()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Ir(e, bt, kn);
          break;
        case 3:
          if (er(e, r), (r & 130023424) === r && (t = Ad + 500 - Be(), 10 < t)) {
            if (Ks(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              vt(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Xc(Ir.bind(null, e, bt, kn), t);
            break;
          }
          Ir(e, bt, kn);
          break;
        case 4:
          if (er(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rn(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = Be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xc(Ir.bind(null, e, bt, kn), r);
            break;
          }
          Ir(e, bt, kn);
          break;
        case 5:
          Ir(e, bt, kn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Ot(e, Be()), e.callbackNode === n ? Mb.bind(null, e) : null;
}
function gf(e, t) {
  var n = Fa;
  return e.current.memoizedState.isDehydrated && ($r(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = bt, bt = n, t !== null && yf(t)), e;
}
function yf(e) {
  bt === null ? bt = e : bt.push.apply(bt, e);
}
function nS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!on(a(), i)) return !1;
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
function er(e, t) {
  for (t &= ~_d, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - rn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function av(e) {
  if (he & 6) throw Error($(327));
  Ni();
  var t = Ks(e, 0);
  if (!(t & 1)) return Ot(e, Be()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hc(e);
    r !== 0 && (t = r, n = gf(e, r));
  }
  if (n === 1) throw n = io, $r(e, 0), er(e, t), Ot(e, Be()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ir(e, bt, kn), Ot(e, Be()), null;
}
function Td(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (zi = Be() + 500, Kl && Sr());
  }
}
function Yr(e) {
  nr !== null && nr.tag === 0 && !(he & 6) && Ni();
  var t = he;
  he |= 1;
  var n = zt.transition, r = be;
  try {
    if (zt.transition = null, be = 1, e) return e();
  } finally {
    be = r, zt.transition = n, he = t, !(he & 6) && Sr();
  }
}
function Id() {
  Ct = xi.current, Pe(xi);
}
function $r(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, NO(n)), ze !== null) for (n = ze.return; n !== null; ) {
    var r = n;
    switch (fd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zs();
        break;
      case 3:
        Bi(), Pe(wt), Pe(lt), xd();
        break;
      case 5:
        bd(r);
        break;
      case 4:
        Bi();
        break;
      case 13:
        Pe(Ne);
        break;
      case 19:
        Pe(Ne);
        break;
      case 10:
        hd(r.type._context);
        break;
      case 22:
      case 23:
        Id();
    }
    n = n.return;
  }
  if (Ke = e, ze = e = pr(e.current, null), Je = Ct = t, Ue = 0, io = null, _d = Ql = Kr = 0, bt = Fa = null, Fr !== null) {
    for (t = 0; t < Fr.length; t++) if (n = Fr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, r.next = o;
      }
      n.pending = r;
    }
    Fr = null;
  }
  return e;
}
function Lb(e, t) {
  do {
    var n = ze;
    try {
      if (md(), Is.current = sl, ol) {
        for (var r = je.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ol = !1;
      }
      if (Gr = 0, Ge = Ve = je = null, Ra = !1, to = 0, Pd.current = null, n === null || n.return === null) {
        Ue = 1, io = t, ze = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = Je, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var v = Gh(o);
          if (v !== null) {
            v.flags &= -257, Kh(v, o, s, a, t), v.mode & 1 && Wh(a, u, t), t = v, l = u;
            var b = t.updateQueue;
            if (b === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Wh(a, u, t), Nd();
              break e;
            }
            l = Error($(426));
          }
        } else if (Ae && s.mode & 1) {
          var w = Gh(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Kh(w, o, s, a, t), pd($i(l, s));
            break e;
          }
        }
        a = l = $i(l, s), Ue !== 4 && (Ue = 2), Fa === null ? Fa = [a] : Fa.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var h = wb(a, l, t);
              Bh(a, h);
              break e;
            case 1:
              s = l;
              var m = a.type, y = a.stateNode;
              if (!(a.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (cr === null || !cr.has(y)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var E = Eb(a, s, t);
                Bh(a, E);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      zb(n);
    } catch (O) {
      t = O, ze === n && n !== null && (ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bb() {
  var e = ll.current;
  return ll.current = sl, e === null ? sl : e;
}
function Nd() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Ke === null || !(Kr & 268435455) && !(Ql & 268435455) || er(Ke, Je);
}
function fl(e, t) {
  var n = he;
  he |= 2;
  var r = Bb();
  (Ke !== e || Je !== t) && (kn = null, $r(e, t));
  do
    try {
      rS();
      break;
    } catch (i) {
      Lb(e, i);
    }
  while (!0);
  if (md(), he = n, ll.current = r, ze !== null) throw Error($(261));
  return Ke = null, Je = 0, Ue;
}
function rS() {
  for (; ze !== null; ) $b(ze);
}
function iS() {
  for (; ze !== null && !A1(); ) $b(ze);
}
function $b(e) {
  var t = Vb(e.alternate, e, Ct);
  e.memoizedProps = e.pendingProps, t === null ? zb(e) : ze = t, Pd.current = null;
}
function zb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = QO(n, t), n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ue = 6, ze = null;
        return;
      }
    } else if (n = XO(n, t, Ct), n !== null) {
      ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ze = t;
      return;
    }
    ze = t = e;
  } while (t !== null);
  Ue === 0 && (Ue = 5);
}
function Ir(e, t, n) {
  var r = be, i = zt.transition;
  try {
    zt.transition = null, be = 1, aS(e, t, n, r);
  } finally {
    zt.transition = i, be = r;
  }
  return null;
}
function aS(e, t, n, r) {
  do
    Ni();
  while (nr !== null);
  if (he & 6) throw Error($(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (B1(e, a), e === Ke && (ze = Ke = null, Je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ms || (ms = !0, Ub(Gs, function() {
    return Ni(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = zt.transition, zt.transition = null;
    var o = be;
    be = 1;
    var s = he;
    he |= 4, Pd.current = null, JO(e, n), Db(n, e), kO(Yc), Ys = !!Kc, Yc = Kc = null, e.current = n, eS(n), T1(), he = s, be = o, zt.transition = a;
  } else e.current = n;
  if (ms && (ms = !1, nr = e, cl = i), a = e.pendingLanes, a === 0 && (cr = null), j1(n.stateNode), Ot(e, Be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ul) throw ul = !1, e = hf, hf = null, e;
  return cl & 1 && e.tag !== 0 && Ni(), a = e.pendingLanes, a & 1 ? e === vf ? Ma++ : (Ma = 0, vf = e) : Ma = 0, Sr(), null;
}
function Ni() {
  if (nr !== null) {
    var e = w0(cl), t = zt.transition, n = be;
    try {
      if (zt.transition = null, be = 16 > e ? 16 : e, nr === null) var r = !1;
      else {
        if (e = nr, nr = null, cl = 0, he & 6) throw Error($(331));
        var i = he;
        for (he |= 4, X = e.current; X !== null; ) {
          var a = X, o = a.child;
          if (X.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (X = u; X !== null; ) {
                  var c = X;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Da(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, X = d;
                  else for (; X !== null; ) {
                    c = X;
                    var p = c.sibling, v = c.return;
                    if (Nb(c), c === u) {
                      X = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = v, X = p;
                      break;
                    }
                    X = v;
                  }
                }
              }
              var b = a.alternate;
              if (b !== null) {
                var x = b.child;
                if (x !== null) {
                  b.child = null;
                  do {
                    var w = x.sibling;
                    x.sibling = null, x = w;
                  } while (x !== null);
                }
              }
              X = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, X = o;
          else e: for (; X !== null; ) {
            if (a = X, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Da(9, a, a.return);
            }
            var h = a.sibling;
            if (h !== null) {
              h.return = a.return, X = h;
              break e;
            }
            X = a.return;
          }
        }
        var m = e.current;
        for (X = m; X !== null; ) {
          o = X;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) y.return = o, X = y;
          else e: for (o = m; X !== null; ) {
            if (s = X, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Xl(9, s);
              }
            } catch (O) {
              Fe(s, s.return, O);
            }
            if (s === o) {
              X = null;
              break e;
            }
            var E = s.sibling;
            if (E !== null) {
              E.return = s.return, X = E;
              break e;
            }
            X = s.return;
          }
        }
        if (he = i, Sr(), gn && typeof gn.onPostCommitFiberRoot == "function") try {
          gn.onPostCommitFiberRoot(Hl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      be = n, zt.transition = t;
    }
  }
  return !1;
}
function ov(e, t, n) {
  t = $i(n, t), t = wb(e, t, 1), e = ur(e, t, 1), t = vt(), e !== null && (Mo(e, 1, t), Ot(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) ov(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ov(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cr === null || !cr.has(r))) {
        e = $i(n, e), e = Eb(t, e, 1), t = ur(t, e, 1), e = vt(), t !== null && (Mo(t, 1, e), Ot(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function oS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, Ke === e && (Je & n) === n && (Ue === 4 || Ue === 3 && (Je & 130023424) === Je && 500 > Be() - Ad ? $r(e, 0) : _d |= n), Ot(e, t);
}
function Hb(e, t) {
  t === 0 && (e.mode & 1 ? (t = is, is <<= 1, !(is & 130023424) && (is = 4194304)) : t = 1);
  var n = vt();
  e = jn(e, t), e !== null && (Mo(e, t, n), Ot(e, n));
}
function sS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hb(e, n);
}
function lS(e, t) {
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
      throw Error($(314));
  }
  r !== null && r.delete(t), Hb(e, n);
}
var Vb;
Vb = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || wt.current) xt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return xt = !1, qO(e, t, n);
    xt = !!(e.flags & 131072);
  }
  else xt = !1, Ae && t.flags & 1048576 && K0(t, tl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      js(e, t), e = t.pendingProps;
      var i = Fi(t, lt.current);
      Ii(t, n), i = Ed(null, t, r, e, i, n);
      var a = Od();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Et(r) ? (a = !0, Js(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, gd(t), i.updater = ql, t.stateNode = i, i._reactInternals = t, rf(t, r, e, n), t = sf(null, t, r, !0, a, n)) : (t.tag = 0, Ae && a && cd(t), dt(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (js(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = cS(r), e = Jt(r, e), i) {
          case 0:
            t = of(null, t, r, e, n);
            break e;
          case 1:
            t = Xh(null, t, r, e, n);
            break e;
          case 11:
            t = Yh(null, t, r, e, n);
            break e;
          case 14:
            t = qh(null, t, r, Jt(r.type, e), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Jt(r, i), of(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Jt(r, i), Xh(e, t, r, i, n);
    case 3:
      e: {
        if (Cb(t), e === null) throw Error($(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, J0(e, t), il(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = $i(Error($(423)), t), t = Qh(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = $i(Error($(424)), t), t = Qh(e, t, r, n, i);
          break e;
        } else for (_t = lr(t.stateNode.containerInfo.firstChild), At = t, Ae = !0, nn = null, n = Q0(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mi(), r === i) {
            t = Rn(e, t, n);
            break e;
          }
          dt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return eb(t), e === null && ef(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, qc(r, i) ? o = null : a !== null && qc(r, a) && (t.flags |= 32), kb(e, t), dt(e, t, o, n), t.child;
    case 6:
      return e === null && ef(t), null;
    case 13:
      return Pb(e, t, n);
    case 4:
      return yd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Li(t, null, r, n) : dt(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Jt(r, i), Yh(e, t, r, i, n);
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, Oe(nl, r._currentValue), r._currentValue = o, a !== null) if (on(a.value, o)) {
          if (a.children === i.children && !wt.current) {
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
                  l = Tn(-1, n & -n), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), tf(
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
            if (o = a.return, o === null) throw Error($(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), tf(o, n, t), o = a.sibling;
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
        dt(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Ii(t, n), i = Ht(i), r = r(i), t.flags |= 1, dt(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Jt(r, t.pendingProps), i = Jt(r.type, i), qh(e, t, r, i, n);
    case 15:
      return Ob(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Jt(r, i), js(e, t), t.tag = 1, Et(r) ? (e = !0, Js(t)) : e = !1, Ii(t, n), xb(t, r, i), rf(t, r, i, n), sf(null, t, r, !0, e, n);
    case 19:
      return _b(e, t, n);
    case 22:
      return Sb(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Ub(e, t) {
  return g0(e, t);
}
function uS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $t(e, t, n, r) {
  return new uS(e, t, n, r);
}
function jd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cS(e) {
  if (typeof e == "function") return jd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zp) return 11;
    if (e === Jp) return 14;
  }
  return 2;
}
function pr(e, t) {
  var n = e.alternate;
  return n === null ? (n = $t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fs(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") jd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case ci:
      return zr(n.children, i, a, t);
    case Qp:
      o = 8, i |= 8;
      break;
    case Pc:
      return e = $t(12, n, t, i | 2), e.elementType = Pc, e.lanes = a, e;
    case _c:
      return e = $t(13, n, t, i), e.elementType = _c, e.lanes = a, e;
    case Ac:
      return e = $t(19, n, t, i), e.elementType = Ac, e.lanes = a, e;
    case e0:
      return Zl(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Zy:
          o = 10;
          break e;
        case Jy:
          o = 9;
          break e;
        case Zp:
          o = 11;
          break e;
        case Jp:
          o = 14;
          break e;
        case Xn:
          o = 16, r = null;
          break e;
      }
      throw Error($(130, e == null ? e : typeof e, ""));
  }
  return t = $t(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function zr(e, t, n, r) {
  return e = $t(7, e, r, t), e.lanes = n, e;
}
function Zl(e, t, n, r) {
  return e = $t(22, e, r, t), e.elementType = e0, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ic(e, t, n) {
  return e = $t(6, e, null, t), e.lanes = n, e;
}
function ac(e, t, n) {
  return t = $t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fS(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bu(0), this.expirationTimes = Bu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Rd(e, t, n, r, i, a, o, s, l) {
  return e = new fS(e, t, n, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = $t(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(a), e;
}
function pS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ui, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wb(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (ti(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Et(n)) return W0(e, n, t);
  }
  return t;
}
function Gb(e, t, n, r, i, a, o, s, l) {
  return e = Rd(n, r, !0, e, i, a, o, s, l), e.context = Wb(null), n = e.current, r = vt(), i = fr(n), a = Tn(r, i), a.callback = t ?? null, ur(n, a, i), e.current.lanes = i, Mo(e, i, r), Ot(e, r), e;
}
function Jl(e, t, n, r) {
  var i = t.current, a = vt(), o = fr(i);
  return n = Wb(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ur(i, t, o), e !== null && (an(e, i, o, a), Ts(e, i, o)), o;
}
function pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Dd(e, t) {
  sv(e, t), (e = e.alternate) && sv(e, t);
}
function dS() {
  return null;
}
var Kb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fd(e) {
  this._internalRoot = e;
}
eu.prototype.render = Fd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Jl(e, t, null, null);
};
eu.prototype.unmount = Fd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yr(function() {
      Jl(null, e, null, null);
    }), t[Nn] = null;
  }
};
function eu(e) {
  this._internalRoot = e;
}
eu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = S0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++) ;
    Jn.splice(n, 0, e), n === 0 && C0(e);
  }
};
function Md(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function tu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function lv() {
}
function mS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = pl(o);
        a.call(u);
      };
    }
    var o = Gb(t, r, e, 0, null, !1, !1, "", lv);
    return e._reactRootContainer = o, e[Nn] = o.current, Xa(e.nodeType === 8 ? e.parentNode : e), Yr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = pl(l);
      s.call(u);
    };
  }
  var l = Rd(e, 0, !1, null, null, !1, !1, "", lv);
  return e._reactRootContainer = l, e[Nn] = l.current, Xa(e.nodeType === 8 ? e.parentNode : e), Yr(function() {
    Jl(t, l, n, r);
  }), l;
}
function nu(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = pl(o);
        s.call(l);
      };
    }
    Jl(t, o, e, i);
  } else o = mS(n, t, e, i, r);
  return pl(o);
}
E0 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oa(t.pendingLanes);
        n !== 0 && (nd(t, n | 1), Ot(t, Be()), !(he & 6) && (zi = Be() + 500, Sr()));
      }
      break;
    case 13:
      Yr(function() {
        var r = jn(e, 1);
        if (r !== null) {
          var i = vt();
          an(r, e, 1, i);
        }
      }), Dd(e, 1);
  }
};
rd = function(e) {
  if (e.tag === 13) {
    var t = jn(e, 134217728);
    if (t !== null) {
      var n = vt();
      an(t, e, 134217728, n);
    }
    Dd(e, 134217728);
  }
};
O0 = function(e) {
  if (e.tag === 13) {
    var t = fr(e), n = jn(e, t);
    if (n !== null) {
      var r = vt();
      an(n, e, t, r);
    }
    Dd(e, t);
  }
};
S0 = function() {
  return be;
};
k0 = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
Bc = function(e, t, n) {
  switch (t) {
    case "input":
      if (Nc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Gl(r);
            if (!i) throw Error($(90));
            n0(r), Nc(r, i);
          }
        }
      }
      break;
    case "textarea":
      i0(e, n);
      break;
    case "select":
      t = n.value, t != null && Pi(e, !!n.multiple, t, !1);
  }
};
f0 = Td;
p0 = Yr;
var hS = { usingClientEntryPoint: !1, Events: [Bo, mi, Gl, u0, c0, Td] }, ya = { findFiberByHostInstance: Dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vS = { bundleType: ya.bundleType, version: ya.version, rendererPackageName: ya.rendererPackageName, rendererConfig: ya.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: zn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = h0(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ya.findFiberByHostInstance || dS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hs.isDisabled && hs.supportsFiber) try {
    Hl = hs.inject(vS), gn = hs;
  } catch {
  }
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS;
Nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Md(t)) throw Error($(200));
  return pS(e, t, null, n);
};
Nt.createRoot = function(e, t) {
  if (!Md(e)) throw Error($(299));
  var n = !1, r = "", i = Kb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Rd(e, 1, !1, null, null, n, !1, r, i), e[Nn] = t.current, Xa(e.nodeType === 8 ? e.parentNode : e), new Fd(t);
};
Nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = h0(t), e = e === null ? null : e.stateNode, e;
};
Nt.flushSync = function(e) {
  return Yr(e);
};
Nt.hydrate = function(e, t, n) {
  if (!tu(t)) throw Error($(200));
  return nu(null, e, t, !0, n);
};
Nt.hydrateRoot = function(e, t, n) {
  if (!Md(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", o = Kb;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Gb(t, null, e, 1, n ?? null, i, !1, a, o), e[Nn] = t.current, Xa(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new eu(t);
};
Nt.render = function(e, t, n) {
  if (!tu(t)) throw Error($(200));
  return nu(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function(e) {
  if (!tu(e)) throw Error($(40));
  return e._reactRootContainer ? (Yr(function() {
    nu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nn] = null;
    });
  }), !0) : !1;
};
Nt.unstable_batchedUpdates = Td;
Nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!tu(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return nu(e, t, n, !1, r);
};
Nt.version = "18.3.1-next-f1338f8080-20240426";
function Yb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yb);
    } catch (e) {
      console.error(e);
    }
}
Yb(), Yy.exports = Nt;
var qb = Yy.exports;
const wi = /* @__PURE__ */ Do(qb);
var Xb, uv = qb;
Xb = uv.createRoot, uv.hydrateRoot;
var bf = function(e, t) {
  return bf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, bf(e, t);
};
function Gt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  bf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var J = function() {
  return J = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, J.apply(this, arguments);
};
function Hi(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Rt(e, t, n, r) {
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
function na(e, t) {
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
function cv(e, t) {
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
function Ze(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function mt(e, t) {
  var n = t && t.cache ? t.cache : ES, r = t && t.serializer ? t.serializer : wS, i = t && t.strategy ? t.strategy : bS;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function gS(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function yS(e, t, n, r) {
  var i = gS(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Qb(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Zb(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function bS(e, t) {
  var n = e.length === 1 ? yS : Qb;
  return Zb(e, this, n, t.cache.create(), t.serializer);
}
function xS(e, t) {
  return Zb(e, this, Qb, t.cache.create(), t.serializer);
}
var wS = function() {
  return JSON.stringify(arguments);
};
function Ld() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Ld.prototype.get = function(e) {
  return this.cache[e];
};
Ld.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ES = {
  create: function() {
    return new Ld();
  }
}, ht = {
  variadic: xS
};
function Jb(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
mt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Ze([void 0], t, !1)))();
}, {
  strategy: ht.variadic
});
mt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Ze([void 0], t, !1)))();
}, {
  strategy: ht.variadic
});
mt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Ze([void 0], t, !1)))();
}, {
  strategy: ht.variadic
});
mt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Ze([void 0], t, !1)))();
}, {
  strategy: ht.variadic
});
mt(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Ze([void 0], t, !1)))();
}, {
  strategy: ht.variadic
});
var de;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(de || (de = {}));
var Ce;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ce || (Ce = {}));
var Vi;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Vi || (Vi = {}));
function fv(e) {
  return e.type === Ce.literal;
}
function OS(e) {
  return e.type === Ce.argument;
}
function ex(e) {
  return e.type === Ce.number;
}
function tx(e) {
  return e.type === Ce.date;
}
function nx(e) {
  return e.type === Ce.time;
}
function rx(e) {
  return e.type === Ce.select;
}
function ix(e) {
  return e.type === Ce.plural;
}
function SS(e) {
  return e.type === Ce.pound;
}
function ax(e) {
  return e.type === Ce.tag;
}
function ox(e) {
  return !!(e && typeof e == "object" && e.type === Vi.number);
}
function xf(e) {
  return !!(e && typeof e == "object" && e.type === Vi.dateTime);
}
var sx = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, kS = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function CS(e) {
  var t = {};
  return e.replace(kS, function(n) {
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
var PS = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function _S(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(PS).filter(function(p) {
    return p.length > 0;
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
function AS(e) {
  return e.replace(/^(.*?)-/, "");
}
var pv = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, lx = /^(@+)?(\+|#+)?[rs]?$/g, TS = /(\*)(0+)|(#+)(0+)|(0+)/g, ux = /^(0+)$/;
function dv(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(lx, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function cx(e) {
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
function IS(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ux.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function mv(e) {
  var t = {}, n = cx(e);
  return n || t;
}
function NS(e) {
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
        t.style = "unit", t.unit = AS(i.options[0]);
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
        t = J(J(J({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return J(J({}, l), mv(u));
        }, {}));
        continue;
      case "engineering":
        t = J(J(J({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return J(J({}, l), mv(u));
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
        i.options[0].replace(TS, function(l, u, c, d, p, v) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && p)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (ux.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (pv.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(pv, function(l, u, c, d, p, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : p && v ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = J(J({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = J(J({}, t), dv(a)));
      continue;
    }
    if (lx.test(i.stem)) {
      t = J(J({}, t), dv(i.stem));
      continue;
    }
    var o = cx(i.stem);
    o && (t = J(J({}, t), o));
    var s = IS(i.stem);
    s && (t = J(J({}, t), s));
  }
  return t;
}
var vs = {
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
function jS(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = RS(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function RS(e) {
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
  var i = vs[r || ""] || vs[n || ""] || vs["".concat(n, "-001")] || vs["001"];
  return i[0];
}
var oc, DS = new RegExp("^".concat(sx.source, "*")), FS = new RegExp("".concat(sx.source, "*$"));
function me(e, t) {
  return { start: e, end: t };
}
var MS = !!String.prototype.startsWith && "_a".startsWith("a", 1), LS = !!String.fromCodePoint, BS = !!Object.fromEntries, $S = !!String.prototype.codePointAt, zS = !!String.prototype.trimStart, HS = !!String.prototype.trimEnd, VS = !!Number.isSafeInteger, US = VS ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, wf = !0;
try {
  var WS = px("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  wf = ((oc = WS.exec("a")) === null || oc === void 0 ? void 0 : oc[0]) === "a";
} catch {
  wf = !1;
}
var hv = MS ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ef = LS ? String.fromCodePoint : (
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
), vv = (
  // native
  BS ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), fx = $S ? (
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
), GS = zS ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(DS, "");
  }
), KS = HS ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(FS, "");
  }
);
function px(e, t) {
  return new RegExp(e, t);
}
var Of;
if (wf) {
  var gv = px("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Of = function(t, n) {
    var r;
    gv.lastIndex = n;
    var i = gv.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Of = function(t, n) {
    for (var r = []; ; ) {
      var i = fx(t, n);
      if (i === void 0 || dx(i) || QS(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ef.apply(void 0, r);
  };
var YS = (
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
              type: Ce.pound,
              location: me(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(de.UNMATCHED_CLOSING_TAG, me(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Sf(this.peek() || 0)) {
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
            type: Ce.literal,
            value: "<".concat(i, "/>"),
            location: me(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Sf(this.char()))
            return this.error(de.INVALID_TAG, me(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(de.UNMATCHED_CLOSING_TAG, me(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ce.tag,
              value: i,
              children: o,
              location: me(r, this.clonePosition())
            },
            err: null
          } : this.error(de.INVALID_TAG, me(s, this.clonePosition())));
        } else
          return this.error(de.UNCLOSED_TAG, me(r, this.clonePosition()));
      } else
        return this.error(de.INVALID_TAG, me(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && XS(this.char()); )
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
      var l = me(r, this.clonePosition());
      return {
        val: { type: Ce.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !qS(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ef.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ef(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, me(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(de.EMPTY_ARGUMENT, me(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(de.MALFORMED_ARGUMENT, me(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, me(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ce.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: me(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, me(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(de.MALFORMED_ARGUMENT, me(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Of(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = me(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(de.EXPECT_ARGUMENT_TYPE, me(o, l));
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
            var p = KS(d.val);
            if (p.length === 0)
              return this.error(de.EXPECT_ARGUMENT_STYLE, me(this.clonePosition(), this.clonePosition()));
            var v = me(c, this.clonePosition());
            u = { style: p, styleLocation: v };
          }
          var b = this.tryParseArgumentClose(i);
          if (b.err)
            return b;
          var x = me(i, this.clonePosition());
          if (u && hv(u == null ? void 0 : u.style, "::", 0)) {
            var w = GS(u.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(w, u.styleLocation);
              return d.err ? d : {
                val: { type: Ce.number, value: r, location: x, style: d.val },
                err: null
              };
            } else {
              if (w.length === 0)
                return this.error(de.EXPECT_DATE_TIME_SKELETON, x);
              var h = w;
              this.locale && (h = jS(w, this.locale));
              var p = {
                type: Vi.dateTime,
                pattern: h,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? CS(h) : {}
              }, m = s === "date" ? Ce.date : Ce.time;
              return {
                val: { type: m, value: r, location: x, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? Ce.number : s === "date" ? Ce.date : Ce.time,
              value: r,
              location: x,
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
            return this.error(de.EXPECT_SELECT_ARGUMENT_OPTIONS, me(y, J({}, y)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), O = 0;
          if (s !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, me(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, de.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), O = d.val;
          }
          var A = this.tryParsePluralOrSelectOptions(t, s, n, E);
          if (A.err)
            return A;
          var b = this.tryParseArgumentClose(i);
          if (b.err)
            return b;
          var T = me(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: Ce.select,
              value: r,
              options: vv(A.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: Ce.plural,
              value: r,
              options: vv(A.val),
              offset: O,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(de.INVALID_ARGUMENT_TYPE, me(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, me(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(de.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, me(i, this.clonePosition()));
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
        r = _S(t);
      } catch {
        return this.error(de.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Vi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? NS(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var p = this.tryParseDecimalInteger(de.EXPECT_PLURAL_ARGUMENT_SELECTOR, de.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            c = me(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? de.DUPLICATE_SELECT_ARGUMENT_SELECTOR : de.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? de.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : de.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, me(this.clonePosition(), this.clonePosition()));
        var b = this.parseMessage(t + 1, n, r);
        if (b.err)
          return b;
        var x = this.tryParseArgumentClose(v);
        if (x.err)
          return x;
        s.push([
          u,
          {
            value: b.val,
            location: me(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? de.EXPECT_SELECT_ARGUMENT_SELECTOR : de.EXPECT_PLURAL_ARGUMENT_SELECTOR, me(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(de.MISSING_OTHER_CLAUSE, me(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var l = me(i, this.clonePosition());
      return a ? (o *= r, US(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = fx(this.message, t);
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
      if (hv(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && dx(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Sf(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function qS(e) {
  return Sf(e) || e === 47;
}
function XS(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function dx(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function QS(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function kf(e) {
  e.forEach(function(t) {
    if (delete t.location, rx(t) || ix(t))
      for (var n in t.options)
        delete t.options[n].location, kf(t.options[n].value);
    else ex(t) && ox(t.style) || (tx(t) || nx(t)) && xf(t.style) ? delete t.style.location : ax(t) && kf(t.children);
  });
}
function ZS(e, t) {
  t === void 0 && (t = {}), t = J({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new YS(e, t).parse();
  if (n.err) {
    var r = SyntaxError(de[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || kf(n.val), n.val;
}
var wn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(wn || (wn = {}));
var kr = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), yv = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), wn.INVALID_VALUE, a) || this;
    }
    return t;
  }(kr)
), JS = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), wn.INVALID_VALUE, i) || this;
    }
    return t;
  }(kr)
), ek = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), wn.MISSING_VALUE, r) || this;
    }
    return t;
  }(kr)
), pt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(pt || (pt = {}));
function tk(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== pt.literal || n.type !== pt.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function mx(e) {
  return typeof e == "function";
}
function Ms(e, t, n, r, i, a, o) {
  if (e.length === 1 && fv(e[0]))
    return [
      {
        type: pt.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (fv(c)) {
      s.push({
        type: pt.literal,
        value: c.value
      });
      continue;
    }
    if (SS(c)) {
      typeof a == "number" && s.push({
        type: pt.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new ek(d, o);
    var p = i[d];
    if (OS(c)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), s.push({
        type: typeof p == "string" ? pt.literal : pt.object,
        value: p
      });
      continue;
    }
    if (tx(c)) {
      var v = typeof c.style == "string" ? r.date[c.style] : xf(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: pt.literal,
        value: n.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (nx(c)) {
      var v = typeof c.style == "string" ? r.time[c.style] : xf(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: pt.literal,
        value: n.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (ex(c)) {
      var v = typeof c.style == "string" ? r.number[c.style] : ox(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (p = p * (v.scale || 1)), s.push({
        type: pt.literal,
        value: n.getNumberFormat(t, v).format(p)
      });
      continue;
    }
    if (ax(c)) {
      var b = c.children, x = c.value, w = i[x];
      if (!mx(w))
        throw new JS(x, "function", o);
      var h = Ms(b, t, n, r, i, a), m = w(h.map(function(O) {
        return O.value;
      }));
      Array.isArray(m) || (m = [m]), s.push.apply(s, m.map(function(O) {
        return {
          type: typeof O == "string" ? pt.literal : pt.object,
          value: O
        };
      }));
    }
    if (rx(c)) {
      var y = c.options[p] || c.options.other;
      if (!y)
        throw new yv(c.value, p, Object.keys(c.options), o);
      s.push.apply(s, Ms(y.value, t, n, r, i));
      continue;
    }
    if (ix(c)) {
      var y = c.options["=".concat(p)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, wn.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: c.pluralType }).select(p - (c.offset || 0));
        y = c.options[E] || c.options.other;
      }
      if (!y)
        throw new yv(c.value, p, Object.keys(c.options), o);
      s.push.apply(s, Ms(y.value, t, n, r, i, p - (c.offset || 0)));
      continue;
    }
  }
  return tk(s);
}
function nk(e, t) {
  return t ? J(J(J({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = J(J({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function rk(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = nk(e[r], t[r]), n;
  }, J({}, e)) : e;
}
function sc(e) {
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
    getNumberFormat: mt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ze([void 0], n, !1)))();
    }, {
      cache: sc(e.number),
      strategy: ht.variadic
    }),
    getDateTimeFormat: mt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ze([void 0], n, !1)))();
    }, {
      cache: sc(e.dateTime),
      strategy: ht.variadic
    }),
    getPluralRules: mt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ze([void 0], n, !1)))();
    }, {
      cache: sc(e.pluralRules),
      strategy: ht.variadic
    })
  };
}
var hx = (
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
        var c = u.reduce(function(d, p) {
          return !d.length || p.type !== pt.literal || typeof d[d.length - 1] != "string" ? d.push(p.value) : d[d.length - 1] += p.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(l) {
        return Ms(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var s = Hi(o, ["formatters"]);
        this.ast = e.__parse(t, J(J({}, s), { locale: this.resolvedLocale }));
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
    }, e.__parse = ZS, e.formats = {
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
), qr;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(qr || (qr = {}));
var zo = (
  /** @class */
  function(e) {
    Gt(t, e);
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
    Gt(t, e);
    function t(n, r) {
      return e.call(this, qr.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(zo)
), ok = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r) {
      return e.call(this, qr.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(zo)
), bv = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r) {
      return e.call(this, qr.MISSING_DATA, n, r) || this;
    }
    return t;
  }(zo)
), Kt = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r, i) {
      var a = e.call(this, qr.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(zo)
), lc = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(Kt)
), sk = (
  /** @class */
  function(e) {
    Gt(t, e);
    function t(n, r) {
      var i = e.call(this, qr.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(zo)
);
function ni(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var lk = function(e) {
}, uk = function(e) {
}, vx = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: lk,
  onWarn: uk
};
function gx() {
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
function _r(e) {
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
  e === void 0 && (e = gx());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = mt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, Ze([void 0], l, !1)))();
  }, {
    cache: _r(e.dateTime),
    strategy: ht.variadic
  }), a = mt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, Ze([void 0], l, !1)))();
  }, {
    cache: _r(e.number),
    strategy: ht.variadic
  }), o = mt(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, Ze([void 0], l, !1)))();
  }, {
    cache: _r(e.pluralRules),
    strategy: ht.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: mt(function(s, l, u, c) {
      return new hx(s, l, u, J({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: _r(e.message),
      strategy: ht.variadic
    }),
    getRelativeTimeFormat: mt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, Ze([void 0], s, !1)))();
    }, {
      cache: _r(e.relativeTime),
      strategy: ht.variadic
    }),
    getPluralRules: o,
    getListFormat: mt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, Ze([void 0], s, !1)))();
    }, {
      cache: _r(e.list),
      strategy: ht.variadic
    }),
    getDisplayNames: mt(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, Ze([void 0], s, !1)))();
    }, {
      cache: _r(e.displayNames),
      strategy: ht.variadic
    })
  };
}
function Bd(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new ak("No ".concat(t, " format named: ").concat(n)));
}
function gs(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = J({ timeZone: t }, e[r]), n;
  }, {});
}
function xv(e, t) {
  var n = Object.keys(J(J({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = J(J({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function wv(e, t) {
  if (!t)
    return e;
  var n = hx.formats;
  return J(J(J({}, n), e), { date: xv(gs(n.date, t), gs(e.date || {}, t)), time: xv(gs(n.time, t), gs(e.time || {}, t)) });
}
var Cf = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, p = e.timeZone, v = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var b = n.id, x = n.defaultMessage;
  Jb(!!b, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var w = String(b), h = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, w) && s[w]
  );
  if (Array.isArray(h) && h.length === 1 && h[0].type === Ce.literal)
    return h[0].value;
  if (!r && h && typeof h == "string" && !v)
    return h.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = J(J({}, v), r || {}), o = wv(o, p), u = wv(u, p), !h) {
    if (c === !1 && h === "")
      return h;
    if ((!x || a && a.toLowerCase() !== l.toLowerCase()) && d(new sk(n, a)), x)
      try {
        var m = t.getMessageFormat(x, l, u, i);
        return m.format(r);
      } catch (y) {
        return d(new lc('Error formatting default message for: "'.concat(w, '", rendering default message verbatim'), a, n, y)), typeof x == "string" ? x : w;
      }
    return w;
  }
  try {
    var m = t.getMessageFormat(h, a, o, J({ formatters: t }, i || {}));
    return m.format(r);
  } catch (y) {
    d(new lc('Error formatting message: "'.concat(w, '", using ').concat(x ? "default message" : "id", " as fallback."), a, n, y));
  }
  if (x)
    try {
      var m = t.getMessageFormat(x, l, u, i);
      return m.format(r);
    } catch (y) {
      d(new lc('Error formatting the default message for: "'.concat(w, '", rendering message verbatim'), a, n, y));
    }
  return typeof h == "string" ? h : typeof x == "string" ? x : w;
}, yx = [
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
function ru(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = J(J({}, s && { timeZone: s }), l && Bd(a, t, l, o)), c = ni(r, yx, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = J(J({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function fk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ru(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Kt("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function pk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ru(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Kt("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function dk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, d = ni(s, yx, l ? { timeZone: l } : {});
  try {
    return t(u, d).formatRange(i, a);
  } catch (p) {
    c(new Kt("Error formatting date time range.", e.locale, p));
  }
  return String(i);
}
function mk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ru(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Kt("Error formatting date.", e.locale, l));
  }
  return [];
}
function hk(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return ru(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Kt("Error formatting time.", e.locale, l));
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
  o || a(new kr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, wn.MISSING_INTL_API));
  var s = ni(r, vk);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new Kt("Error formatting display name.", i, l));
  }
}
var yk = [
  "type",
  "style"
], Ev = Date.now();
function bk(e) {
  return "".concat(Ev, "_").concat(e, "_").concat(Ev);
}
function xk(e, t, n, r) {
  r === void 0 && (r = {});
  var i = bx(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function bx(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new kr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, wn.MISSING_INTL_API));
  var s = ni(r, yk);
  try {
    var l = {}, u = n.map(function(c, d) {
      if (typeof c == "object") {
        var p = bk(d);
        return l[p] = c, p;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : J(J({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new Kt("Error formatting list.", i, c));
  }
  return n;
}
var wk = ["type"];
function Ek(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new kr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, wn.MISSING_INTL_API));
  var o = ni(r, wk);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new Kt("Error formatting plural.", i, s));
  }
  return "other";
}
var Ok = ["numeric", "style"];
function Sk(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && Bd(i, "relative", o, a) || {}, l = ni(n, Ok, s);
  return t(r, l);
}
function kk(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new kr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, wn.MISSING_INTL_API));
  try {
    return Sk(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new Kt("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Ck = [
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
function xx(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && Bd(i, "number", o, a) || {}, l = ni(n, Ck, s);
  return t(r, l);
}
function Pk(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return xx(e, t, r).format(n);
  } catch (i) {
    e.onError(new Kt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function _k(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return xx(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Kt("Error formatting number.", e.locale, i));
  }
  return [];
}
function Ak(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Tk(e) {
  e.onWarn && e.defaultRichTextElements && Ak(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Ik(e, t) {
  var n = ck(t), r = J(J({}, vx), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new bv('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new bv('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new ok('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Tk(r), J(J({}, r), {
    formatters: n,
    formatNumber: Pk.bind(null, r, n.getNumberFormat),
    formatNumberToParts: _k.bind(null, r, n.getNumberFormat),
    formatRelativeTime: kk.bind(null, r, n.getRelativeTimeFormat),
    formatDate: fk.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: mk.bind(null, r, n.getDateTimeFormat),
    formatTime: pk.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: dk.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: hk.bind(null, r, n.getDateTimeFormat),
    formatPlural: Ek.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Cf.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Cf.bind(null, r, n),
    formatList: xk.bind(null, r, n.getListFormat),
    formatListToParts: bx.bind(null, r, n.getListFormat),
    formatDisplayName: gk.bind(null, r, n.getDisplayNames)
  });
}
function wx(e) {
  Jb(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Ex = J(J({}, vx), { textComponent: k.Fragment });
function Nk(e) {
  return function(t) {
    return e(k.Children.toArray(t));
  };
}
function Pf(e, t) {
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
var Ox = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye = typeof Symbol == "function" && Symbol.for, $d = Ye ? Symbol.for("react.element") : 60103, zd = Ye ? Symbol.for("react.portal") : 60106, iu = Ye ? Symbol.for("react.fragment") : 60107, au = Ye ? Symbol.for("react.strict_mode") : 60108, ou = Ye ? Symbol.for("react.profiler") : 60114, su = Ye ? Symbol.for("react.provider") : 60109, lu = Ye ? Symbol.for("react.context") : 60110, Hd = Ye ? Symbol.for("react.async_mode") : 60111, uu = Ye ? Symbol.for("react.concurrent_mode") : 60111, cu = Ye ? Symbol.for("react.forward_ref") : 60112, fu = Ye ? Symbol.for("react.suspense") : 60113, jk = Ye ? Symbol.for("react.suspense_list") : 60120, pu = Ye ? Symbol.for("react.memo") : 60115, du = Ye ? Symbol.for("react.lazy") : 60116, Rk = Ye ? Symbol.for("react.block") : 60121, Dk = Ye ? Symbol.for("react.fundamental") : 60117, Fk = Ye ? Symbol.for("react.responder") : 60118, Mk = Ye ? Symbol.for("react.scope") : 60119;
function Dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $d:
        switch (e = e.type, e) {
          case Hd:
          case uu:
          case iu:
          case ou:
          case au:
          case fu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lu:
              case cu:
              case du:
              case pu:
              case su:
                return e;
              default:
                return t;
            }
        }
      case zd:
        return t;
    }
  }
}
function Sx(e) {
  return Dt(e) === uu;
}
xe.AsyncMode = Hd;
xe.ConcurrentMode = uu;
xe.ContextConsumer = lu;
xe.ContextProvider = su;
xe.Element = $d;
xe.ForwardRef = cu;
xe.Fragment = iu;
xe.Lazy = du;
xe.Memo = pu;
xe.Portal = zd;
xe.Profiler = ou;
xe.StrictMode = au;
xe.Suspense = fu;
xe.isAsyncMode = function(e) {
  return Sx(e) || Dt(e) === Hd;
};
xe.isConcurrentMode = Sx;
xe.isContextConsumer = function(e) {
  return Dt(e) === lu;
};
xe.isContextProvider = function(e) {
  return Dt(e) === su;
};
xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $d;
};
xe.isForwardRef = function(e) {
  return Dt(e) === cu;
};
xe.isFragment = function(e) {
  return Dt(e) === iu;
};
xe.isLazy = function(e) {
  return Dt(e) === du;
};
xe.isMemo = function(e) {
  return Dt(e) === pu;
};
xe.isPortal = function(e) {
  return Dt(e) === zd;
};
xe.isProfiler = function(e) {
  return Dt(e) === ou;
};
xe.isStrictMode = function(e) {
  return Dt(e) === au;
};
xe.isSuspense = function(e) {
  return Dt(e) === fu;
};
xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === iu || e === uu || e === ou || e === au || e === fu || e === jk || typeof e == "object" && e !== null && (e.$$typeof === du || e.$$typeof === pu || e.$$typeof === su || e.$$typeof === lu || e.$$typeof === cu || e.$$typeof === Dk || e.$$typeof === Fk || e.$$typeof === Mk || e.$$typeof === Rk);
};
xe.typeOf = Dt;
Ox.exports = xe;
var Lk = Ox.exports, kx = Lk, Bk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $k = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cx = {};
Cx[kx.ForwardRef] = Bk;
Cx[kx.Memo] = $k;
var Vd = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = k.createContext(null)) : k.createContext(null);
Vd.Consumer;
var zk = Vd.Provider, Hk = zk, Vk = Vd;
function ra() {
  var e = k.useContext(Vk);
  return wx(e), e;
}
var _f;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(_f || (_f = {}));
var Af;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Af || (Af = {}));
function Px(e) {
  var t = function(n) {
    var r = ra(), i = n.value, a = n.children, o = Hi(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = Af[e], t;
}
function Ho(e) {
  var t = function(n) {
    var r = ra(), i = n.value, a = n.children, o = Hi(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || k.Fragment;
    return k.createElement(l, null, s);
  };
  return t.displayName = _f[e], t;
}
function _x(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = mx(r) ? Nk(r) : r, t;
  }, {});
}
var Ov = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = _x(r), s = Cf.apply(void 0, Ze([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? k.Children.toArray(s) : s;
}, Sv = function(e, t) {
  var n = e.defaultRichTextElements, r = Hi(e, ["defaultRichTextElements"]), i = _x(n), a = Ik(J(J(J({}, Ex), r), { defaultRichTextElements: i }), t), o = {
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
  return J(J({}, a), {
    formatMessage: Ov.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Ov.bind(null, o, a.formatters)
  });
};
function uc(e) {
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
    Gt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = gx(), n.state = {
        cache: n.cache,
        intl: Sv(uc(n.props), n.cache),
        prevConfig: uc(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = uc(n);
      return Pf(i, o) ? null : {
        intl: Sv(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return wx(this.state.intl), k.createElement(Hk, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Ex, t;
  }(k.PureComponent)
);
function Wk(e, t) {
  var n = e.values, r = Hi(e, ["values"]), i = t.values, a = Hi(t, ["values"]);
  return Pf(i, n) && Pf(r, a);
}
function Ax(e) {
  var t = ra(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? k.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, d = c === void 0 ? i : c, p = e.ignoreTag, v = { id: a, description: o, defaultMessage: s }, b = n(v, l, {
    ignoreTag: p
  });
  return typeof u == "function" ? u(Array.isArray(b) ? b : [b]) : d ? k.createElement(d, null, k.Children.toArray(b)) : k.createElement(k.Fragment, null, b);
}
Ax.displayName = "FormattedMessage";
var ao = k.memo(Ax, Wk);
ao.displayName = "MemoizedFormattedMessage";
Ho("formatDate");
Ho("formatTime");
Ho("formatNumber");
Ho("formatList");
Ho("formatDisplayName");
Px("formatDate");
Px("formatTime");
var Tx = { exports: {} }, Gk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Kk = Gk, Yk = Kk;
function Ix() {
}
function Nx() {
}
Nx.resetWarningCache = Ix;
var qk = function() {
  function e(r, i, a, o, s, l) {
    if (l !== Yk) {
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
    checkPropTypes: Nx,
    resetWarningCache: Ix
  };
  return n.PropTypes = n, n;
};
Tx.exports = qk();
var Xk = Tx.exports;
const f = /* @__PURE__ */ Do(Xk);
var jx = { exports: {} };
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
})(jx);
var Qk = jx.exports;
const K = /* @__PURE__ */ Do(Qk);
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ne.apply(null, arguments);
}
function ve(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Ud = /* @__PURE__ */ g.createContext({});
Ud.Consumer;
Ud.Provider;
function Me(e, t) {
  var n = k.useContext(Ud);
  return e || n[t] || t;
}
function Zk() {
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
var Jk = ["as", "disabled", "onKeyDown"];
function kv(e) {
  return !e || e.trim() === "#";
}
var Wd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = ve(e, Jk), s = function(c) {
    var d = o.href, p = o.onClick;
    if ((i || kv(d)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    p && p(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return kv(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ g.createElement(r, ne({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: Zk(l, a)
  }));
});
Wd.displayName = "SafeAnchor";
var eC = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], tC = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Gd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = ve(e, eC), d = Me(n, "btn"), p = K(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
  if (c.href)
    return /* @__PURE__ */ g.createElement(Wd, ne({}, c, {
      as: u,
      ref: t,
      className: K(p, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var v = u || "button";
  return /* @__PURE__ */ g.createElement(v, ne({}, c, {
    className: p
  }));
});
Gd.displayName = "Button";
Gd.defaultProps = tC;
var nC = ["children"];
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
}
function rC(e, t) {
  if (e == null) return {};
  var n = iC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function aC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Fx(r.key), r);
  }
}
function sC(e, t, n) {
  return t && oC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tf(e, t);
}
function Tf(e, t) {
  return Tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Tf(e, t);
}
function uC(e) {
  var t = Dx();
  return function() {
    var r = dl(e), i;
    if (t) {
      var a = dl(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return cC(this, i);
  };
}
function cC(e, t) {
  if (t && (Ui(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Rx(e);
}
function Rx(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dx = function() {
    return !!e;
  })();
}
function dl(e) {
  return dl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dl(e);
}
function fC(e, t, n) {
  return t = Fx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fx(e) {
  var t = pC(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function pC(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ui(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rr = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Kd(e, t, n) {
  var r = /* @__PURE__ */ function(i) {
    lC(o, i);
    var a = uC(o);
    function o(s) {
      var l;
      return aC(this, o), l = a.call(this, s), l.transformProps = l.transformProps.bind(Rx(l)), l;
    }
    return sC(o, [{
      key: "warn",
      value: function(l) {
      }
    }, {
      key: "transformProps",
      value: function(l, u) {
        if (n[u] === void 0)
          return l[u] = this.props[u], l;
        var c = n[u], d = c.deprType, p = c.newName, v = c.expect, b = c.transform, x = c.message;
        switch (d) {
          case rr.MOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "'.")), l[p] = this.props[u];
            break;
          case rr.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been removed. '").concat(x, "'"));
            break;
          case rr.FORMAT:
            v(this.props[u]) ? l[u] = this.props[u] : (this.warn("".concat(t, ": The prop '").concat(u, "' expects a new format. ").concat(x)), l[u] = b(this.props[u], this.props));
            break;
          case rr.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(u, "' has been moved to '").concat(p, "' and expects a new format. ").concat(x)), l[p] = b(this.props[u], this.props);
            break;
          default:
            l[u] = this.props[u];
            break;
        }
        return l;
      }
    }, {
      key: "render",
      value: function() {
        var l = Object.keys(this.props).reduce(this.transformProps, {}), u = l.children, c = rC(l, nC);
        return /* @__PURE__ */ g.createElement(e, c, this.props.children || u);
      }
    }]), o;
  }(g.Component);
  return fC(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
var dC = ["buttonType", "className", "children", "isClose", "type", "inputRef"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, If.apply(this, arguments);
}
function mC(e, t, n) {
  return t = Mx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hC(e, t) {
  if (e == null) return {};
  var n = vC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Mx(r.key), r);
  }
}
function bC(e, t, n) {
  return t && yC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mx(e) {
  var t = xC(e, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function xC(e, t) {
  if (Wi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nf(e, t);
}
function Nf(e, t) {
  return Nf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Nf(e, t);
}
function EC(e) {
  var t = Lx();
  return function() {
    var r = ml(e), i;
    if (t) {
      var a = ml(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return OC(this, i);
  };
}
function OC(e, t) {
  if (t && (Wi(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ka(e);
}
function ka(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lx = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ml(e);
}
var Yd = /* @__PURE__ */ function(e) {
  wC(n, e);
  var t = EC(n);
  function n(r) {
    var i;
    gC(this, n), i = t.call(this, r);
    var a = r.onBlur, o = r.onKeyDown;
    return i.onBlur = a.bind(ka(i)), i.onKeyDown = o.bind(ka(i)), i.onClick = i.onClick.bind(ka(i)), i.setRefs = i.setRefs.bind(ka(i)), i;
  }
  return bC(n, [{
    key: "onClick",
    value: function(i) {
      this.buttonRef.focus(), this.props.onClick(i);
    }
    /*
      The button component needs a ref to itself to be able to force
      focus in its onClick function (buttonRef). It also needs to accept
      a callback function from parent components to give those parents
      a reference to their child button (e.g. for the modal component).
      Therefore, both have been wrapped in a function bound on the class,
      since one cannot set two ref attributes on a component.
    */
  }, {
    key: "setRefs",
    value: function(i) {
      this.buttonRef = i, this.props.inputRef(i);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.buttonType, o = i.className, s = i.children, l = i.isClose, u = i.type;
      i.inputRef;
      var c = hC(i, dC);
      return /* @__PURE__ */ g.createElement("button", If({}, c, {
        className: K(["btn", o], mC({}, "btn-".concat(a), a !== void 0), {
          close: l
        }),
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        type: u,
        ref: this.setRefs
      }), s);
    }
  }]), n;
}(g.Component), SC = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: f.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: f.string,
  /** Specifies the text that is displayed within the button. */
  children: f.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: f.oneOfType([f.func, f.shape({
    current: f.instanceOf(f.element)
  })]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: f.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: f.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: f.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: f.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light", "link", "outline-primary", "outline-secondary", "outline-success", "outline-danger", "outline-warning", "outline-info", "outline-dark", "outline-light"])
};
Yd.propTypes = SC;
Yd.defaultProps = {
  buttonType: void 0,
  className: void 0,
  inputRef: function() {
  },
  isClose: !1,
  onBlur: function() {
  },
  onKeyDown: function() {
  },
  onClick: function() {
  },
  type: "button",
  variant: "outline-primary"
};
const kC = Kd(Yd, "Button", {
  label: {
    deprType: rr.MOVED,
    newName: "children"
  },
  className: {
    deprType: rr.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
let Cv = 0;
const qd = (e = "id") => (Cv += 1, `${e}${Cv}`);
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
var CC = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function hl() {
  return hl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hl.apply(this, arguments);
}
function Pv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function PC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(n), !0).forEach(function(r) {
      Bx(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bx(e, t, n) {
  return t = _C(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _C(e) {
  var t = AC(e, "string");
  return oo(t) == "symbol" ? t : t + "";
}
function AC(e, t) {
  if (oo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (oo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TC(e, t) {
  if (e == null) return {};
  var n = IC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function IC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xd(e) {
  var t = e.src, n = e.id, r = e.className, i = e.hidden, a = e.screenReaderText, o = e.svgAttrs, s = e.size, l = TC(e, CC);
  if (t) {
    var u = o["aria-label"] || o["aria-labelledby"], c = PC({}, o);
    return u || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ g.createElement("span", hl({
      className: K("pgn__icon", Bx({}, "pgn__icon__".concat(s), !!s), r),
      id: n
    }, l), /* @__PURE__ */ g.createElement(t, hl({
      role: "img",
      focusable: !1
    }, c)), a && /* @__PURE__ */ g.createElement("span", {
      className: "sr-only"
    }, a));
  }
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("span", {
    id: n || qd("Icon"),
    className: r,
    "aria-hidden": i
  }), a && /* @__PURE__ */ g.createElement("span", {
    className: "sr-only"
  }, a));
}
Xd.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: f.oneOfType([f.element, f.elementType]),
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
Xd.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Dn = Kd(Xd, "Icon", {
  className: {
    deprType: rr.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function so(e) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
var NC = ["children", "iconAfter", "iconBefore"];
function _v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _v(Object(n), !0).forEach(function(r) {
      jC(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _v(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jC(e, t, n) {
  return t = RC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function RC(e) {
  var t = DC(e, "string");
  return so(t) == "symbol" ? t : t + "";
}
function DC(e, t) {
  if (so(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (so(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jf.apply(this, arguments);
}
function FC(e, t) {
  if (e == null) return {};
  var n = MC(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function MC(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Fn = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.iconAfter, i = e.iconBefore, a = FC(e, NC);
  return /* @__PURE__ */ g.createElement(Gd, jf({}, a, {
    className: K(a.className),
    ref: t
  }), i && /* @__PURE__ */ g.createElement(Dn, {
    className: "btn-icon-before",
    size: a.size,
    src: i
  }), n, r && /* @__PURE__ */ g.createElement(Dn, {
    className: "btn-icon-after",
    size: a.size,
    src: r
  }));
});
Fn.propTypes = vl(vl({}, Fn.propTypes), {}, {
  /** Specifies class name to apply to the button */
  className: f.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: f.bool,
  /** Specifies the text that is displayed within the button. */
  children: f.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: f.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: f.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: f.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: f.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: f.oneOfType([f.elementType, f.node]),
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: f.oneOfType([f.elementType, f.node])
});
Fn.defaultProps = vl(vl({}, Fn.defaultProps), {}, {
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
});
Fn.Deprecated = kC;
f.elementType, f.string, f.oneOf(["sm", "md", "lg"]), f.bool, f.bool, f.string;
f.string, f.string;
var Av = { exports: {} }, Rf = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, d) {
      var p = u || "<<anonymous>>", v = d || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + v + "` was not specified " + ("in `" + p + "`.")) : null;
      for (var b = arguments.length, x = Array(b > 6 ? b - 6 : 0), w = 6; w < b; w++)
        x[w - 6] = arguments[w];
      return r.apply(void 0, [s, l, p, c, v].concat(x));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Rf, Rf.exports);
var LC = Rf.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = LC, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, d = Array(c), p = 0; p < c; p++)
        d[p] = arguments[p];
      var v = null;
      return s.forEach(function(b) {
        if (v == null) {
          var x = b.apply(void 0, d);
          x != null && (v = x);
        }
      }), v;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Av, Av.exports);
var BC = ["as", "className", "type", "tooltip"], $C = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: f.string,
  /** Display feedback as a tooltip. */
  tooltip: f.bool,
  as: f.elementType
}, Vo = /* @__PURE__ */ g.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = ve(e, BC);
    return /* @__PURE__ */ g.createElement(r, ne({}, u, {
      ref: t,
      className: K(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
Vo.displayName = "Feedback";
Vo.propTypes = $C;
var sn = /* @__PURE__ */ g.createContext({
  controlId: void 0
}), zC = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], Qd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, d = c === void 0 ? !1 : c, p = e.isStatic, v = e.as, b = v === void 0 ? "input" : v, x = ve(e, zC), w = k.useContext(sn), h = w.controlId, m = w.custom, y = m ? [i, "custom-control-input"] : [r, "form-check-input"], E = y[0], O = y[1];
  return r = Me(E, O), /* @__PURE__ */ g.createElement(b, ne({}, x, {
    ref: t,
    type: s,
    id: n || h,
    className: K(a, r, u && "is-valid", d && "is-invalid", p && "position-static")
  }));
});
Qd.displayName = "FormCheckInput";
var HC = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Zd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ve(e, HC), s = k.useContext(sn), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], d = c[0], p = c[1];
  return n = Me(d, p), /* @__PURE__ */ g.createElement("label", ne({}, o, {
    ref: t,
    htmlFor: a || l,
    className: K(i, n)
  }));
});
Zd.displayName = "FormCheckLabel";
var VC = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], ri = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, p = d === void 0 ? !1 : d, v = e.feedbackTooltip, b = v === void 0 ? !1 : v, x = e.feedback, w = e.className, h = e.style, m = e.title, y = m === void 0 ? "" : m, E = e.type, O = E === void 0 ? "checkbox" : E, A = e.label, T = e.children, I = e.custom, D = e.as, L = D === void 0 ? "input" : D, G = ve(e, VC), Y = O === "switch" ? !0 : I, F = Y ? [i, "custom-control"] : [r, "form-check"], M = F[0], z = F[1];
  r = Me(M, z);
  var N = k.useContext(sn), P = N.controlId, S = k.useMemo(function() {
    return {
      controlId: n || P,
      custom: Y
    };
  }, [P, Y, n]), _ = Y || A != null && A !== !1 && !T, R = /* @__PURE__ */ g.createElement(Qd, ne({}, G, {
    type: O === "switch" ? "checkbox" : O,
    ref: t,
    isValid: c,
    isInvalid: p,
    isStatic: !_,
    disabled: l,
    as: L
  }));
  return /* @__PURE__ */ g.createElement(sn.Provider, {
    value: S
  }, /* @__PURE__ */ g.createElement("div", {
    style: h,
    className: K(w, r, Y && "custom-" + O, o && r + "-inline")
  }, T || /* @__PURE__ */ g.createElement(g.Fragment, null, R, _ && /* @__PURE__ */ g.createElement(Zd, {
    title: y
  }, A), (c || p) && /* @__PURE__ */ g.createElement(Vo, {
    type: c ? "valid" : "invalid",
    tooltip: b
  }, x))));
});
ri.displayName = "FormCheck";
ri.Input = Qd;
ri.Label = Zd;
var UC = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], Jd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, d = ve(e, UC), p = k.useContext(sn), v = p.controlId, b = p.custom, x = "file", w = b ? [i, "custom-file-input"] : [r, "form-control-file"], h = w[0], m = w[1];
  return r = Me(h, m), /* @__PURE__ */ g.createElement(c, ne({}, d, {
    ref: t,
    id: n || v,
    type: x,
    lang: l,
    className: K(a, r, o && "is-valid", s && "is-invalid")
  }));
});
Jd.displayName = "FormFileInput";
var WC = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], gl = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = ve(e, WC), s = k.useContext(sn), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], d = c[0], p = c[1];
  return n = Me(d, p), /* @__PURE__ */ g.createElement("label", ne({}, o, {
    ref: t,
    htmlFor: a || l,
    className: K(i, n),
    "data-browse": o["data-browse"]
  }));
});
gl.displayName = "FormFileLabel";
var GC = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], mu = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, d = e.feedbackTooltip, p = d === void 0 ? !1 : d, v = e.feedback, b = e.className, x = e.style, w = e.label, h = e.children, m = e.custom, y = e.lang, E = e["data-browse"], O = e.as, A = O === void 0 ? "div" : O, T = e.inputAs, I = T === void 0 ? "input" : T, D = ve(e, GC), L = m ? [i, "custom"] : [r, "form-file"], G = L[0], Y = L[1];
  r = Me(G, Y);
  var F = "file", M = k.useContext(sn), z = M.controlId, N = k.useMemo(function() {
    return {
      controlId: n || z,
      custom: m
    };
  }, [z, m, n]), P = w != null && w !== !1 && !h, S = /* @__PURE__ */ g.createElement(Jd, ne({}, D, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: I,
    lang: y
  }));
  return /* @__PURE__ */ g.createElement(sn.Provider, {
    value: N
  }, /* @__PURE__ */ g.createElement(A, {
    style: x,
    className: K(b, r, m && "custom-" + F)
  }, h || /* @__PURE__ */ g.createElement(g.Fragment, null, m ? /* @__PURE__ */ g.createElement(g.Fragment, null, S, P && /* @__PURE__ */ g.createElement(gl, {
    "data-browse": E
  }, w)) : /* @__PURE__ */ g.createElement(g.Fragment, null, P && /* @__PURE__ */ g.createElement(gl, null, w), S), (l || c) && /* @__PURE__ */ g.createElement(Vo, {
    type: l ? "valid" : "invalid",
    tooltip: p
  }, v))));
});
mu.displayName = "FormFile";
mu.Input = Jd;
mu.Label = gl;
var KC = function() {
}, YC = KC;
const qC = /* @__PURE__ */ Do(YC);
var XC = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], $x = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, p = d === void 0 ? !1 : d, v = e.plaintext, b = e.readOnly, x = e.custom, w = e.as, h = w === void 0 ? "input" : w, m = ve(e, XC), y = k.useContext(sn), E = y.controlId, O = x ? [r, "custom"] : [n, "form-control"], A = O[0], T = O[1];
  n = Me(A, T);
  var I;
  if (v) {
    var D;
    I = (D = {}, D[n + "-plaintext"] = !0, D);
  } else if (i === "file") {
    var L;
    I = (L = {}, L[n + "-file"] = !0, L);
  } else if (i === "range") {
    var G;
    I = (G = {}, G[n + "-range"] = !0, G);
  } else if (h === "select" && x) {
    var Y;
    I = (Y = {}, Y[n + "-select"] = !0, Y[n + "-select-" + a] = a, Y);
  } else {
    var F;
    I = (F = {}, F[n] = !0, F[n + "-" + a] = a, F);
  }
  return /* @__PURE__ */ g.createElement(h, ne({}, m, {
    type: i,
    size: o,
    ref: t,
    readOnly: b,
    id: s || E,
    className: K(l, I, c && "is-valid", p && "is-invalid")
  }));
});
$x.displayName = "FormControl";
const zx = Object.assign($x, {
  Feedback: Vo
});
var QC = ["bsPrefix", "className", "children", "controlId", "as"], Hx = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = ve(e, QC);
  n = Me(n, "form-group");
  var u = k.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ g.createElement(sn.Provider, {
    value: u
  }, /* @__PURE__ */ g.createElement(s, ne({}, l, {
    ref: t,
    className: K(r, n)
  }), i));
});
Hx.displayName = "FormGroup";
var ZC = ["bsPrefix", "className", "as"], JC = ["xl", "lg", "md", "sm", "xs"], Vx = /* @__PURE__ */ g.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = ve(e, ZC), s = Me(n, "col"), l = [], u = [];
    return JC.forEach(function(c) {
      var d = o[c];
      delete o[c];
      var p, v, b;
      if (typeof d == "object" && d != null) {
        var x = d.span;
        p = x === void 0 ? !0 : x, v = d.offset, b = d.order;
      } else
        p = d;
      var w = c !== "xs" ? "-" + c : "";
      p && l.push(p === !0 ? "" + s + w : "" + s + w + "-" + p), b != null && u.push("order" + w + "-" + b), v != null && u.push("offset" + w + "-" + v);
    }), l.length || l.push(s), /* @__PURE__ */ g.createElement(a, ne({}, o, {
      ref: t,
      className: K.apply(void 0, [r].concat(l, u))
    }));
  }
);
Vx.displayName = "Col";
var eP = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], tP = {
  column: !1,
  srOnly: !1
}, em = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = ve(e, eP), c = k.useContext(sn), d = c.controlId;
  i = Me(i, "form-label");
  var p = "col-form-label";
  typeof a == "string" && (p = p + " " + p + "-" + a);
  var v = K(s, i, o && "sr-only", a && p);
  return l = l || d, a ? /* @__PURE__ */ g.createElement(Vx, ne({
    ref: t,
    as: "label",
    className: v,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ g.createElement(r, ne({
      ref: t,
      className: v,
      htmlFor: l
    }, u))
  );
});
em.displayName = "FormLabel";
em.defaultProps = tP;
var nP = ["bsPrefix", "className", "as", "muted"], Ux = /* @__PURE__ */ g.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = ve(e, nP);
    return n = Me(n, "form-text"), /* @__PURE__ */ g.createElement(a, ne({}, s, {
      ref: t,
      className: K(r, n, o && "text-muted")
    }));
  }
);
Ux.displayName = "FormText";
var hu = /* @__PURE__ */ g.forwardRef(function(e, t) {
  return /* @__PURE__ */ g.createElement(ri, ne({}, e, {
    ref: t,
    type: "switch"
  }));
});
hu.displayName = "Switch";
hu.Input = ri.Input;
hu.Label = ri.Label;
var rP = /-(.)/g;
function iP(e) {
  return e.replace(rP, function(t, n) {
    return n.toUpperCase();
  });
}
var aP = ["className", "bsPrefix", "as"], oP = function(t) {
  return t[0].toUpperCase() + iP(t).slice(1);
};
function ln(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? oP(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ g.forwardRef(function(l, u) {
    var c = l.className, d = l.bsPrefix, p = l.as, v = p === void 0 ? a || "div" : p, b = ve(l, aP), x = Me(d, e);
    return /* @__PURE__ */ g.createElement(v, ne({
      ref: u,
      className: K(c, x)
    }, b));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var sP = ["bsPrefix", "inline", "className", "validated", "as"], lP = ln("form-row"), uP = {
  inline: !1
}, ae = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = ve(e, sP);
  return n = Me(n, "form"), /* @__PURE__ */ g.createElement(s, ne({}, l, {
    ref: t,
    className: K(i, a && "was-validated", r && n + "-inline")
  }));
});
ae.displayName = "Form";
ae.defaultProps = uP;
ae.Row = lP;
ae.Group = Hx;
ae.Control = zx;
ae.Check = ri;
ae.File = mu;
ae.Switch = hu;
ae.Label = em;
ae.Text = Ux;
function dr(e) {
  return typeof e == "string" || e instanceof String;
}
function Tv(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Wx(e, t) {
  return Array.isArray(t) ? Wx(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const te = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function cP(e) {
  switch (e) {
    case te.LEFT:
      return te.FORCE_LEFT;
    case te.RIGHT:
      return te.FORCE_RIGHT;
    default:
      return e;
  }
}
function cc(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function yl(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!yl(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!yl(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class fP {
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
    return !this.removedCount || this.insertedCount ? te.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? te.RIGHT : te.LEFT;
  }
}
function se(e, t) {
  return new se.InputMask(e, t);
}
function Gx(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? se.MaskedRegExp : dr(e) ? se.MaskedPattern : e === Date ? se.MaskedDate : e === Number ? se.MaskedNumber : Array.isArray(e) || e === Array ? se.MaskedDynamic : se.Masked && e.prototype instanceof se.Masked ? e : se.Masked && e instanceof se.Masked ? e.constructor : e instanceof Function ? se.MaskedFunction : (console.warn("Mask not found for mask", e), se.Masked);
}
function lo(e) {
  if (!e) throw new Error("Options in not defined");
  if (se.Masked) {
    if (e.prototype instanceof se.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof se.Masked ? {
      mask: e
    } : Tv(e) && e.mask instanceof se.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...Wx(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Tv(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Mn(e) {
  if (se.Masked && e instanceof se.Masked) return e;
  const t = lo(e), n = Gx(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
se.createMask = Mn;
class tm {
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
se.MaskElement = tm;
const Iv = 90, pP = 89;
class vu extends tm {
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
    if (this._handlers.redo && (t.keyCode === Iv && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === pP && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Iv && (t.metaKey || t.ctrlKey))
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
se.HTMLMaskElement = vu;
class dP extends vu {
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
se.HTMLMaskElement = vu;
class Kx extends vu {
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
se.HTMLContenteditableMaskElement = Kx;
class gu {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > gu.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
gu.MAX_LENGTH = 100;
class mP {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof tm ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Kx(t) : new dP(t), this.masked = Mn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new gu(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof se.Masked) && this.masked.constructor === Gx(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof se.Masked ? t : Mn({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, te.LEFT));
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
    const n = new fP({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : te.NONE;
    let o = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== te.NONE && (o = this.masked.nearestInputPos(o, te.NONE)), this.updateControl(o), delete this._inputEvent;
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
se.InputMask = mP;
class ue {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new ue()];
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
se.ChangeDetails = ue;
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
class ot {
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
      ...ot.DEFAULTS,
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
    return dr(t) && (t = new mn(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new ue({
      inserted: t,
      rawInserted: t
    })) : new ue();
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
      s || (a = new ue(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new ue();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new ue();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!dr(t)) throw new Error("value should be string");
    const i = dr(r) ? new mn(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new ue();
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
    return n === void 0 && (n = {}), ue.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), ue.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = te.NONE), a === void 0 && (a = {
      input: !0
    });
    const o = t + n, s = this.extractTail(o), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = cP(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const d = new ue();
    if (i !== te.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? te.NONE : i), d.tailShift = c - t), d.aggregate(this.remove(c)), l && i !== te.NONE && u === this.rawInputValue)
      if (i === te.FORCE_LEFT) {
        let p;
        for (; u === this.rawInputValue && (p = this.displayValue.length); )
          d.aggregate(new ue({
            tailShift: -1
          })).aggregate(this.remove(p - 1));
      } else i === te.FORCE_RIGHT && s.unshift();
    return d.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !yl(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || ot.EMPTY_VALUES.includes(t) && ot.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new ue();
  }
}
ot.DEFAULTS = {
  skipInvalid: !0
};
ot.EMPTY_VALUES = [void 0, null, ""];
se.Masked = ot;
class Lr {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = dr(t) ? new mn(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof mn)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof Lr) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof se.MaskedPattern))
      return new mn(this.toString()).appendTo(t);
    const n = new ue();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof Lr || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof Lr && t._blocks[o]), s) {
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
      const a = "chunks" in i ? new Lr() : new mn();
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
class hP {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, te.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, te.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, te.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, te.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, te.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, te.NONE), !0;
    });
  }
}
class Yx {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new ue();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = te.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case te.LEFT:
      case te.FORCE_LEFT:
        return r;
      case te.NONE:
      case te.RIGHT:
      case te.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new ue();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new ue({
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
    const t = new ue();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new mn("");
  }
  appendTail(t) {
    return dr(t) && (t = new mn(String(t))), t.appendTo(this);
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
class bl {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new ue();
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
    if (n === void 0 && (n = {}), this.isFilled) return new ue();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new ue(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new ue() : (this.isFilled = !0, new ue({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new ue();
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
    n === void 0 && (n = te.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case te.LEFT:
      case te.FORCE_LEFT:
        return this.isComplete ? a : r;
      case te.RIGHT:
      case te.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case te.NONE:
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
    return new ue();
  }
}
bl.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class vP extends ot {
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
se.MaskedRegExp = vP;
class st extends ot {
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
      ...st.DEFAULTS,
      ...t,
      definitions: Object.assign({}, bl.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        const u = n.slice(a), c = Object.keys(this.blocks).filter((p) => u.indexOf(p) === 0);
        c.sort((p, v) => v.length - p.length);
        const d = c[0];
        if (d) {
          const {
            expose: p,
            repeat: v,
            ...b
          } = lo(this.blocks[d]), x = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...b,
            repeat: v,
            parent: this
          }, w = v != null ? new se.RepeatBlock(
            x
            /* TODO */
          ) : Mn(x);
          w && (this._blocks.push(w), p && (this.exposeBlock = w), this._maskedBlocks[d] || (this._maskedBlocks[d] = []), this._maskedBlocks[d].push(this._blocks.length - 1)), a += d.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === st.STOP_CHAR) {
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
      if (o === st.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new bl({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...lo(t[o]),
        parent: this
      }) : new Yx({
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
    const n = new ue();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new ue();
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
    const r = new Lr();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof Lr && (l.blockIndex = a), r.extend(l);
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
    const n = new ue();
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
    if (n === void 0 && (n = te.NONE), !this._blocks.length) return 0;
    const r = new hP(this, t);
    if (n === te.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === te.LEFT || n === te.FORCE_LEFT) {
      if (n === te.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === te.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === te.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === te.RIGHT || n === te.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === te.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, te.LEFT))) : t;
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
    const n = new ue();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
st.DEFAULTS = {
  ...ot.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
st.STOP_CHAR = "`";
st.ESCAPE_CHAR = "\\";
st.InputDefinition = bl;
st.FixedDefinition = Yx;
se.MaskedPattern = st;
class Ls extends st {
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
    const n = new ue();
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
se.MaskedRange = Ls;
const gP = "d{.}`m{.}`Y";
class Pn extends st {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: dr(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(Pn.extractPatternOptions({
      ...Pn.DEFAULTS,
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
      ...Pn.DEFAULTS,
      ...t
    }, o = Object.assign({}, Pn.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: dr(n) ? n : r,
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
    return super.optionsIsChanged(Pn.extractPatternOptions(t));
  }
}
Pn.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: Ls,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Ls,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Ls,
    from: 1900,
    to: 9999
  }
});
Pn.DEFAULTS = {
  ...st.DEFAULTS,
  mask: Date,
  pattern: gP,
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
se.MaskedDate = Pn;
class yu extends ot {
  constructor(t) {
    super({
      ...yu.DEFAULTS,
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
      } = lo(n), a = Mn({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new ue(), c = l == null ? void 0 : l.state;
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
    const n = new ue();
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
    const r = new ue();
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
      return yl(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
yu.DEFAULTS = {
  ...ot.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((o, s) => {
      const l = t.currentMask === o, u = l ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, te.FORCE_LEFT);
      return o.rawInputValue !== i ? (o.reset(), o.append(i, {
        raw: !0
      })) : l || o.remove(u), o.append(e, t.currentMaskFlags(n)), o.appendTail(r), {
        index: s,
        weight: o.rawInputValue.length,
        totalInputPositions: o.totalInputPositions(0, Math.max(u, o.nearestInputPos(o.displayValue.length, te.FORCE_LEFT)))
      };
    });
    return a.sort((o, s) => s.weight - o.weight || s.totalInputPositions - o.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
se.MaskedDynamic = yu;
class bu extends st {
  constructor(t) {
    super({
      ...bu.DEFAULTS,
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
    const r = Math.min(this.nearestInputPos(0, te.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (o, s) => {
        const l = i[0][s];
        s >= this.value.length || l === o.value || (o.reset(), o._appendChar(l, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((o) => a.aggregate(super._appendCharRaw(o))), a;
    }
    return new ue({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new mn("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new ue();
    const r = Math.min(super.nearestInputPos(0, te.FORCE_RIGHT), this.value.length);
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
bu.DEFAULTS = {
  ...st.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
se.MaskedEnum = bu;
class yP extends ot {
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
se.MaskedFunction = yP;
var qx;
class Pt extends ot {
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
      ...Pt.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + cc(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(cc).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(cc(this.thousandsSeparator), "g");
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
      let p;
      this.min != null && this.min < 0 && this.number < this.min && (p = this.min), this.max != null && this.max > 0 && this.number > this.max && (p = this.max), p != null && (this.autofix ? (this._value = this.format(p, this).replace(Pt.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new ue({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new ue()), this._value = this._insertThousandsSeparators(this._value);
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
    return new ue({
      tailShift: (o - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case te.NONE:
      case te.LEFT:
      case te.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === te.FORCE_LEFT)
            return r;
        }
        break;
      }
      case te.RIGHT:
      case te.FORCE_RIGHT: {
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === Pt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, Pt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(Pt.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || Pt.EMPTY_VALUES.includes(t) && Pt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
qx = Pt;
Pt.UNMASKED_RADIX = ".";
Pt.EMPTY_VALUES = [...ot.EMPTY_VALUES, 0];
Pt.DEFAULTS = {
  ...ot.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [qx.UNMASKED_RADIX],
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
se.MaskedNumber = Pt;
const Df = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Xx(e, t, n) {
  t === void 0 && (t = Df.MASKED), n === void 0 && (n = Df.MASKED);
  const r = Mn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function bP(e, t, n, r) {
  return Xx(t, n, r)(e);
}
se.PIPE_TYPE = Df;
se.createPipe = Xx;
se.pipe = bP;
class xP extends st {
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
    } = lo(t);
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
    const r = new ue();
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
se.RepeatBlock = xP;
try {
  globalThis.IMask = se;
} catch {
}
const Qx = {
  // common
  mask: f.oneOfType([f.array, f.func, f.string, f.instanceOf(RegExp), f.oneOf([Date, Number, se.Masked]), f.instanceOf(se.Masked)]),
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
}, Zx = Object.keys(Qx).filter((e) => e !== "value"), wP = ["value", "unmask", "onAccept", "onComplete", "inputRef"], EP = Zx.filter((e) => wP.indexOf(e) < 0);
function OP(e) {
  var t;
  const n = (t = class extends g.Component {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = se(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => EP.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return Zx.forEach((s) => {
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
      return g.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = Qx, g.forwardRef((i, a) => g.createElement(n, {
    ...i,
    ref: a
  }));
}
const SP = OP((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return g.createElement("input", {
    ...n,
    ref: t
  });
}), kP = (e, t) => g.createElement(SP, {
  ...e,
  ref: t
}), CP = g.forwardRef(kP), PP = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), Hr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, _P = ({ defaultValue: e, value: t }) => {
  const [n, r] = k.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(o.target.value)];
}, Nv = (e, t) => {
  const [n, r] = k.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = qd(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = k.useState(l);
    return k.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, vr = {
  SMALL: "sm",
  LARGE: "lg"
}, tn = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
};
function uo(e) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e);
}
function jv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jv(Object(n), !0).forEach(function(r) {
      AP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function AP(e, t, n) {
  return t = TP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function TP(e) {
  var t = IP(e, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function IP(e, t) {
  if (uo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (uo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Bs(e, t) {
  return DP(e) || RP(e, t) || jP(e, t) || NP();
}
function NP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jP(e, t) {
  if (e) {
    if (typeof e == "string") return Rv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rv(e, t);
  }
}
function Rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function RP(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function DP(e) {
  if (Array.isArray(e)) return e;
}
var fc = function(t) {
  return t;
}, FP = function() {
}, Jx = /* @__PURE__ */ g.createContext({
  getControlProps: fc,
  useSetIsControlGroupEffect: FP,
  getLabelProps: fc,
  getDescriptorProps: fc,
  hasFormGroupProvider: !1
}), Yt = function() {
  return g.useContext(Jx);
}, MP = function(t) {
  var n = k.useState(t), r = Bs(n, 2), i = r[0], a = r[1], o = function(l) {
    k.useEffect(function() {
      return a(l);
    }, [l]);
  };
  return [i, o];
};
function ia(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = k.useMemo(function() {
    return n || qd("form-field");
  }, [n]), s = Nv(o), l = Bs(s, 2), u = l[0], c = l[1], d = Nv(o), p = Bs(d, 2), v = p[0], b = p[1], x = MP(!1), w = Bs(x, 2), h = w[0], m = w[1], y = k.useCallback(function(T) {
    var I = h ? v : void 0;
    return PP(Yn(Yn({}, T), {}, {
      "aria-describedby": K(T["aria-describedby"], u) || void 0,
      "aria-labelledby": K(T["aria-labelledby"], I) || void 0,
      id: o
    }));
  }, [h, u, v, o]), E = function(I) {
    var D = b(I == null ? void 0 : I.id);
    return h ? Yn(Yn({}, I), {}, {
      id: D
    }) : Yn(Yn({}, I), {}, {
      htmlFor: o
    });
  }, O = function(I) {
    var D = c(I == null ? void 0 : I.id);
    return Yn(Yn({}, I), {}, {
      id: D
    });
  }, A = {
    getControlProps: y,
    getLabelProps: E,
    getDescriptorProps: O,
    useSetIsControlGroupEffect: m,
    isControlGroup: h,
    controlId: o,
    isInvalid: r,
    isValid: i,
    size: a,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ g.createElement(Jx.Provider, {
    value: A
  }, t);
}
ia.propTypes = {
  children: f.node.isRequired,
  controlId: f.string,
  isInvalid: f.bool,
  isValid: f.bool,
  size: f.oneOf([vr.SMALL, vr.LARGE])
};
ia.defaultProps = {
  controlId: void 0,
  isInvalid: void 0,
  isValid: void 0,
  size: void 0
};
function Ff() {
  return Ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ff.apply(this, arguments);
}
var LP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Ff({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
    fill: "currentColor"
  }));
};
function Mf() {
  return Mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mf.apply(this, arguments);
}
var BP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Mf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
    fill: "currentColor"
  }));
};
function Lf() {
  return Lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lf.apply(this, arguments);
}
var $P = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Lf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
    fill: "currentColor"
  }));
};
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bf.apply(this, arguments);
}
var zP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Bf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
    fill: "currentColor"
  }));
};
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $f.apply(this, arguments);
}
var HP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", $f({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
    fill: "currentColor"
  }));
};
function zf() {
  return zf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zf.apply(this, arguments);
}
var VP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", zf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
    fill: "currentColor"
  }));
};
function Hf() {
  return Hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hf.apply(this, arguments);
}
var UP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Hf({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    fill: "currentColor"
  }));
};
function Vf() {
  return Vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vf.apply(this, arguments);
}
var WP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Vf({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
    fill: "currentColor"
  }));
};
function Uf() {
  return Uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Uf.apply(this, arguments);
}
var GP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Uf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
    fill: "currentColor"
  }));
};
function Wf() {
  return Wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wf.apply(this, arguments);
}
var KP = function(t) {
  return /* @__PURE__ */ k.createElement("svg", Wf({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ k.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
    fill: "currentColor"
  }));
}, YP = ["children", "type", "icon", "muted", "hasIcon"], On;
function co(e) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, co(e);
}
function Gf() {
  return Gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gf.apply(this, arguments);
}
function qP(e, t) {
  if (e == null) return {};
  var n = XP(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function XP(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ar(e, t, n) {
  return t = QP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function QP(e) {
  var t = ZP(e, "string");
  return co(t) == "symbol" ? t : t + "";
}
function ZP(e, t) {
  if (co(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JP = (On = {}, Ar(On, tn.DEFAULT, null), Ar(On, tn.VALID, BP), Ar(On, tn.INVALID, zP), Ar(On, tn.WARNING, KP), Ar(On, tn.CRITERIA_EMPTY, GP), Ar(On, tn.CRITERIA_VALID, $P), Ar(On, tn.CRITERIA_INVALID, LP), On), e_ = function(t) {
  var n = t.isInvalid, r = t.isValid;
  return r ? tn.VALID : n ? tn.INVALID : tn.DEFAULT;
};
function nm(e) {
  var t = e.type, n = e.customIcon;
  if (n)
    return n;
  var r = JP[t];
  return r ? /* @__PURE__ */ g.createElement(Dn, {
    src: r
  }) : null;
}
nm.propTypes = {
  type: f.oneOf(Object.values(tn)),
  customIcon: f.node
};
nm.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function xu(e) {
  var t = e.children, n = e.type, r = e.icon, i = e.muted, a = e.hasIcon, o = qP(e, YP), s = K(o.className, "pgn__form-text", "pgn__form-text-".concat(n), {
    "text-muted": i
  });
  return /* @__PURE__ */ g.createElement("div", Gf({}, o, {
    className: s
  }), a && /* @__PURE__ */ g.createElement(nm, {
    customIcon: r,
    type: n
  }), /* @__PURE__ */ g.createElement("div", null, t));
}
var t_ = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
xu.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies text type, this affects styling. */
  type: f.oneOf(t_),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show text with muted styling. */
  muted: f.bool
};
xu.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
var n_ = ["children"];
function Kf() {
  return Kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kf.apply(this, arguments);
}
function r_(e, t) {
  if (e == null) return {};
  var n = i_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function i_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gr(e) {
  var t = e.children, n = r_(e, n_), r = Yt(), i = r.getDescriptorProps, a = r.isInvalid, o = r.isValid, s = i(n), l = K("pgn__form-control-description", n.className), u = n.type || e_({
    isInvalid: a,
    isValid: o
  });
  return /* @__PURE__ */ g.createElement(xu, Kf({}, s, {
    className: l,
    type: u
  }), t);
}
var a_ = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
gr.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: f.bool,
  /** Specifies feedback type, this affects styling. */
  type: f.oneOf(a_),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: f.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: f.bool
};
gr.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function ew(e) {
  var t = e.children, n = Yt(), r = n.controlId;
  return /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ g.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: r
  }, t)));
}
ew.propTypes = {
  children: f.node.isRequired
};
function xl(e) {
  var t = e.children, n = e.location;
  return /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-control-decorator pgn__form-control-decorator-".concat(n)
  }, t);
}
xl.propTypes = {
  children: f.node.isRequired,
  location: f.oneOf(["leading", "trailing"])
};
xl.defaultProps = {
  location: "leading"
};
var o_ = ["children", "leadingElement", "trailingElement", "floatingLabel", "className"];
function Yf() {
  return Yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yf.apply(this, arguments);
}
function s_(e, t) {
  if (e == null) return {};
  var n = l_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function l_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rm(e) {
  var t = e.children, n = e.leadingElement, r = e.trailingElement, i = e.floatingLabel, a = e.className, o = s_(e, o_), s = Yt(), l = o.size || s.size;
  return /* @__PURE__ */ g.createElement("div", Yf({
    className: K("pgn__form-control-decorator-group", {
      "has-prepended-node": !!n,
      "has-appended-node": !!r,
      "has-leading-element": !!n,
      "has-trailing-element": !!r,
      "has-floating-label": !!i,
      "pgn__form-control-decorator-group-lg": l === vr.LARGE,
      "pgn__form-control-decorator-group-sm": l === vr.SMALL
    }, a)
  }, o), t, n && /* @__PURE__ */ g.createElement(xl, {
    location: "leading"
  }, n), r && /* @__PURE__ */ g.createElement(xl, {
    location: "trailing"
  }, r), i && /* @__PURE__ */ g.createElement(ew, null, i));
}
rm.propTypes = {
  children: f.node.isRequired,
  leadingElement: f.node,
  trailingElement: f.node,
  floatingLabel: f.node,
  className: f.string,
  size: f.oneOf([vr.SMALL, vr.LARGE])
};
rm.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
function fo(e) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e);
}
var u_ = ["as", "className", "controlClassName", "leadingElement", "trailingElement", "floatingLabel", "autoResize", "onChange", "inputMask"], c_ = ["isInvalid", "isValid", "getControlProps"];
function qf() {
  return qf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qf.apply(this, arguments);
}
function Dv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(n), !0).forEach(function(r) {
      f_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function f_(e, t, n) {
  return t = p_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function p_(e) {
  var t = d_(e, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function d_(e, t) {
  if (fo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (fo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m_(e, t) {
  return y_(e) || g_(e, t) || v_(e, t) || h_();
}
function h_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v_(e, t) {
  if (e) {
    if (typeof e == "string") return Mv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mv(e, t);
  }
}
function Mv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function g_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function y_(e) {
  if (Array.isArray(e)) return e;
}
function Lv(e, t) {
  if (e == null) return {};
  var n = b_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function b_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var aa = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.as, r = e.className, i = e.controlClassName, a = e.leadingElement, o = e.trailingElement, s = e.floatingLabel, l = e.autoResize, u = e.onChange, c = e.inputMask, d = Lv(e, u_), p = Yt(), v = p.isInvalid, b = p.isValid, x = p.getControlProps, w = Lv(p, c_), h = g.useRef(), m = t || h, y = d.size || w.size, E = _P({
    defaultValue: d.defaultValue,
    value: d.value
  }), O = m_(E, 2), A = O[0], T = O[1], I = k.useCallback(function() {
    n === "textarea" && l && (!m.current.initialHeight && !m.current.offsets && (m.current.initialHeight = m.current.offsetHeight, m.current.offsets = m.current.offsetHeight - m.current.clientHeight), m.current.style.height = "".concat(m.current.initialHeight, "px"), m.current.style.height = "".concat(m.current.scrollHeight + m.current.offsets, "px"));
  }, [n, l, m]);
  k.useEffect(function() {
    I();
  }, [I]);
  var D = x(Fv(Fv({}, d), {}, {
    // eslint-disable-next-line react/prop-types
    onBlur: Hr(T, d.onBlur)
  })), L = function(Y) {
    I(), u && u(Y);
  };
  return /* @__PURE__ */ g.createElement(rm, {
    size: y,
    leadingElement: a,
    trailingElement: o,
    floatingLabel: s,
    className: r
  }, /* @__PURE__ */ g.createElement(zx, qf({
    as: c ? CP : n,
    ref: m,
    size: y,
    isInvalid: v,
    isValid: b,
    className: K(i, {
      "has-value": A
    }),
    onChange: L,
    mask: c
  }, D)));
}), x_ = ["sm", "lg"];
aa.Feedback = gr;
aa.Description = gr;
aa.propTypes = {
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
  size: f.oneOf(x_),
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
aa.defaultProps = {
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
function po(e) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e);
}
var w_ = ["children", "isInline"];
function Bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(n), !0).forEach(function(r) {
      E_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function E_(e, t, n) {
  return t = O_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function O_(e) {
  var t = S_(e, "string");
  return po(t) == "symbol" ? t : t + "";
}
function S_(e, t) {
  if (po(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (po(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k_(e, t) {
  if (e == null) return {};
  var n = C_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function C_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Uo(e) {
  var t = e.children, n = e.isInline, r = k_(e, w_), i = Yt(), a = i.size, o = i.isControlGroup, s = i.getLabelProps, l = K("pgn__form-label", {
    "pgn__form-label-inline": n,
    "pgn__form-label-lg": a === vr.LARGE,
    "pgn__form-label-sm": a === vr.SMALL
  }, r.className), u = s($v($v({}, r), {}, {
    className: l
  })), c = o ? "p" : "label";
  return /* @__PURE__ */ g.createElement(c, u, t);
}
var P_ = ["sm", "lg"];
Uo.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies size of the component. */
  size: f.oneOf(P_)
};
Uo.defaultProps = {
  isInline: !1,
  size: void 0,
  className: void 0
};
function mo(e) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
var __ = ["children", "controlId", "isInvalid", "isValid", "size", "as"];
function zv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zv(Object(n), !0).forEach(function(r) {
      A_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function A_(e, t, n) {
  return t = T_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function T_(e) {
  var t = I_(e, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function I_(e, t) {
  if (mo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (mo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N_(e, t) {
  if (e == null) return {};
  var n = j_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function j_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function im(e) {
  var t = e.children, n = e.controlId, r = e.isInvalid, i = e.isValid, a = e.size, o = e.as, s = N_(e, __);
  return /* @__PURE__ */ g.createElement(o, Hv(Hv({}, s), {}, {
    className: K("pgn__form-group", s.className)
  }), /* @__PURE__ */ g.createElement(ia, {
    controlId: n,
    isInvalid: r,
    isValid: i,
    size: a
  }, t));
}
var R_ = ["sm", "lg"];
im.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies base element for the component. */
  as: f.elementType,
  /** Specifies id to use in the group, it will be used as `htmlFor` in `FormLabel` and as `id` in input components.
   *  Will be autogenerated if none is supplied. */
  controlId: f.string,
  /** Specifies whether to display components in invalid state, this affects styling. */
  isInvalid: f.bool,
  /** Specifies whether to display components in valid state, this affects styling. */
  isValid: f.bool,
  /** Specifies size for the component. */
  size: f.oneOf(R_)
};
im.defaultProps = {
  as: "div",
  className: void 0,
  controlId: void 0,
  isInvalid: !1,
  isValid: !1,
  size: void 0
};
function ho(e) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function Vv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Uv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(n), !0).forEach(function(r) {
      D_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function D_(e, t, n) {
  return t = F_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function F_(e) {
  var t = M_(e, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function M_(e, t) {
  if (ho(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ho(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var L_ = function(t) {
  return t;
}, tw = /* @__PURE__ */ g.createContext({
  getRadioControlProps: L_,
  hasRadioSetProvider: !1
}), B_ = function() {
  return k.useContext(tw);
};
function am(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && o !== void 0, u = function(p) {
    return Uv(Uv({}, p), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: p.onBlur ? Hr(r, p.onBlur) : r,
      /* istanbul ignore next */
      onFocus: p.onFocus ? Hr(i, p.onFocus) : i,
      /* istanbul ignore next */
      onChange: p.onChange ? Hr(a, p.onChange) : a,
      checked: l ? o === p.value : void 0,
      defaultChecked: l ? void 0 : s === p.value
    });
  }, c = {
    name: n,
    value: o,
    defaultValue: s,
    getRadioControlProps: u,
    onBlur: r,
    onFocus: i,
    onChange: a,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ g.createElement(tw.Provider, {
    value: c
  }, t);
}
am.propTypes = {
  children: f.node.isRequired,
  name: f.string.isRequired,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.string,
  defaultValue: f.string
};
am.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
var $_ = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid"];
function vo(e) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
function z_(e, t) {
  if (e == null) return {};
  var n = H_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function H_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function wl() {
  return wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wl.apply(this, arguments);
}
function Wv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Gv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wv(Object(n), !0).forEach(function(r) {
      V_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function V_(e, t, n) {
  return t = U_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function U_(e) {
  var t = W_(e, "string");
  return vo(t) == "symbol" ? t : t + "";
}
function W_(e, t) {
  if (vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var om = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = Yt(), r = n.getControlProps, i = B_(), a = i.getRadioControlProps, o = i.hasRadioSetProvider, s = r(Gv(Gv({}, e), {}, {
    className: K("pgn__form-radio-input", e.className)
  }));
  return o && (s = a(s)), /* @__PURE__ */ g.createElement("input", wl({}, s, {
    type: "radio",
    ref: t
  }));
});
om.propTypes = {
  className: f.string
};
om.defaultProps = {
  className: void 0
};
var sm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = z_(e, $_);
  return /* @__PURE__ */ g.createElement(ia, {
    controlId: u.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__form-radio", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": u.disabled
    })
  }, /* @__PURE__ */ g.createElement(om, wl({
    ref: t,
    className: i
  }, u)), /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement(Uo, {
    className: a
  }, n), o && /* @__PURE__ */ g.createElement(gr, {
    hasIcon: !1
  }, o))));
});
sm.propTypes = {
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
sm.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function go(e) {
  "@babel/helpers - typeof";
  return go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, go(e);
}
var G_ = ["as", "className", "isInline", "children"];
function Kv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kv(Object(n), !0).forEach(function(r) {
      Y_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Y_(e, t, n) {
  return t = q_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function q_(e) {
  var t = X_(e, "string");
  return go(t) == "symbol" ? t : t + "";
}
function X_(e, t) {
  if (go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q_(e, t) {
  if (e == null) return {};
  var n = Z_(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Z_(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function wu(e) {
  var t = e.as, n = e.className, r = e.isInline, i = e.children, a = Q_(e, G_);
  return /* @__PURE__ */ g.createElement(t, K_({
    className: K(n, {
      "pgn__form-control-set": !r,
      "pgn__form-control-set-inline": r
    })
  }, a), i);
}
wu.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** A class name to append to the base element. */
  className: f.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: f.bool,
  /** Specifies contents of the component. */
  children: f.node
};
wu.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
var J_ = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function Xf() {
  return Xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xf.apply(this, arguments);
}
function eA(e, t) {
  if (e == null) return {};
  var n = tA(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function tA(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lm(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = eA(e, J_), c = Yt(), d = c.getControlProps, p = c.useSetIsControlGroupEffect;
  p(!0);
  var v = d(u);
  return /* @__PURE__ */ g.createElement(am, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ g.createElement(wu, Xf({
    role: "radiogroup",
    isInline: a
  }, v), t));
}
lm.propTypes = {
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
lm.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let ys;
const nA = new Uint8Array(16);
function rA() {
  if (!ys && (ys = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ys))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ys(nA);
}
const qe = [];
for (let e = 0; e < 256; ++e)
  qe.push((e + 256).toString(16).slice(1));
function iA(e, t = 0) {
  return qe[e[t + 0]] + qe[e[t + 1]] + qe[e[t + 2]] + qe[e[t + 3]] + "-" + qe[e[t + 4]] + qe[e[t + 5]] + "-" + qe[e[t + 6]] + qe[e[t + 7]] + "-" + qe[e[t + 8]] + qe[e[t + 9]] + "-" + qe[e[t + 10]] + qe[e[t + 11]] + qe[e[t + 12]] + qe[e[t + 13]] + qe[e[t + 14]] + qe[e[t + 15]];
}
const aA = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Yv = {
  randomUUID: aA
};
function oA(e, t, n) {
  if (Yv.randomUUID && !e)
    return Yv.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || rA)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, iA(r);
}
const sA = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), lA = (e, t) => t.every((n) => e[n] !== void 0), pc = (e, t) => sA(
  e,
  (n) => Array.isArray(t) ? lA(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function uA(e, t, n) {
  return (t = fA(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(n), !0).forEach(function(r) {
      uA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cA(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fA(e) {
  var t = cA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Xv = () => {
};
let um = {}, nw = {}, rw = null, iw = {
  mark: Xv,
  measure: Xv
};
try {
  typeof window < "u" && (um = window), typeof document < "u" && (nw = document), typeof MutationObserver < "u" && (rw = MutationObserver), typeof performance < "u" && (iw = performance);
} catch {
}
const {
  userAgent: Qv = ""
} = um.navigator || {}, yr = um, _e = nw, Zv = rw, bs = iw;
yr.document;
const Hn = !!_e.documentElement && !!_e.head && typeof _e.addEventListener == "function" && typeof _e.createElement == "function", aw = ~Qv.indexOf("MSIE") || ~Qv.indexOf("Trident/");
var pA = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, dA = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ow = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, mA = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sw = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ut = "classic", Eu = "duotone", hA = "sharp", vA = "sharp-duotone", lw = [ut, Eu, hA, vA], gA = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, yA = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, bA = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), xA = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, wA = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Jv = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, EA = ["kit"], OA = {
  kit: {
    "fa-kit": "fak"
  }
}, SA = ["fak", "fakd"], kA = {
  kit: {
    fak: "fa-kit"
  }
}, eg = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, xs = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, CA = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], PA = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], _A = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, AA = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, TA = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Qf = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, IA = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Zf = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...CA, ...IA], NA = ["solid", "regular", "light", "thin", "duotone", "brands"], uw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], jA = uw.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), RA = [...Object.keys(TA), ...NA, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", xs.GROUP, xs.SWAP_OPACITY, xs.PRIMARY, xs.SECONDARY].concat(uw.map((e) => "".concat(e, "x"))).concat(jA.map((e) => "w-".concat(e))), DA = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Ln = "___FONT_AWESOME___", Jf = 16, cw = "fa", fw = "svg-inline--fa", Xr = "data-fa-i2svg", ep = "data-fa-pseudo-element", FA = "data-fa-pseudo-element-pending", cm = "data-prefix", fm = "data-icon", tg = "fontawesome-i2svg", MA = "async", LA = ["HTML", "HEAD", "STYLE", "SCRIPT"], pw = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Wo(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ut];
    }
  });
}
const dw = B({}, ow);
dw[ut] = B(B(B(B({}, {
  "fa-duotone": "duotone"
}), ow[ut]), Jv.kit), Jv["kit-duotone"]);
const BA = Wo(dw), tp = B({}, xA);
tp[ut] = B(B(B(B({}, {
  duotone: "fad"
}), tp[ut]), eg.kit), eg["kit-duotone"]);
const ng = Wo(tp), np = B({}, Qf);
np[ut] = B(B({}, np[ut]), kA.kit);
const pm = Wo(np), rp = B({}, AA);
rp[ut] = B(B({}, rp[ut]), OA.kit);
Wo(rp);
const $A = pA, mw = "fa-layers-text", zA = dA, HA = B({}, gA);
Wo(HA);
const VA = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], dc = mA, UA = [...EA, ...RA], La = yr.FontAwesomeConfig || {};
function WA(e) {
  var t = _e.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function GA(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
_e && typeof _e.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = GA(WA(n));
  i != null && (La[r] = i);
});
const hw = {
  styleDefault: "solid",
  familyDefault: ut,
  cssPrefix: cw,
  replacementClass: fw,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
La.familyPrefix && (La.cssPrefix = La.familyPrefix);
const Gi = B(B({}, hw), La);
Gi.autoReplaceSvg || (Gi.observeMutations = !1);
const ee = {};
Object.keys(hw).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      Gi[e] = t, Ba.forEach((n) => n(ee));
    },
    get: function() {
      return Gi[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Gi.cssPrefix = e, Ba.forEach((t) => t(ee));
  },
  get: function() {
    return Gi.cssPrefix;
  }
});
yr.FontAwesomeConfig = ee;
const Ba = [];
function KA(e) {
  return Ba.push(e), () => {
    Ba.splice(Ba.indexOf(e), 1);
  };
}
const qn = Jf, hn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function YA(e) {
  if (!e || !Hn)
    return;
  const t = _e.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = _e.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return _e.head.insertBefore(t, r), e;
}
const qA = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function yo() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += qA[Math.random() * 62 | 0];
  return t;
}
function oa(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function dm(e) {
  return e.classList ? oa(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function vw(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function XA(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(vw(e[n]), '" '), "").trim();
}
function Ou(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function mm(e) {
  return e.size !== hn.size || e.x !== hn.x || e.y !== hn.y || e.rotate !== hn.rotate || e.flipX || e.flipY;
}
function QA(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: u
  };
}
function ZA(e) {
  let {
    transform: t,
    width: n = Jf,
    height: r = Jf,
    startCentered: i = !1
  } = e, a = "";
  return i && aw ? a += "translate(".concat(t.x / qn - n / 2, "em, ").concat(t.y / qn - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / qn, "em), calc(-50% + ").concat(t.y / qn, "em)) ") : a += "translate(".concat(t.x / qn, "em, ").concat(t.y / qn, "em) "), a += "scale(".concat(t.size / qn * (t.flipX ? -1 : 1), ", ").concat(t.size / qn * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var JA = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function gw() {
  const e = cw, t = fw, n = ee.cssPrefix, r = ee.replacementClass;
  let i = JA;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let rg = !1;
function mc() {
  ee.autoAddCss && !rg && (YA(gw()), rg = !0);
}
var eT = {
  mixout() {
    return {
      dom: {
        css: gw,
        insertCss: mc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        mc();
      },
      beforeI2svg() {
        mc();
      }
    };
  }
};
const Bn = yr || {};
Bn[Ln] || (Bn[Ln] = {});
Bn[Ln].styles || (Bn[Ln].styles = {});
Bn[Ln].hooks || (Bn[Ln].hooks = {});
Bn[Ln].shims || (Bn[Ln].shims = []);
var vn = Bn[Ln];
const yw = [], bw = function() {
  _e.removeEventListener("DOMContentLoaded", bw), El = 1, yw.map((e) => e());
};
let El = !1;
Hn && (El = (_e.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(_e.readyState), El || _e.addEventListener("DOMContentLoaded", bw));
function tT(e) {
  Hn && (El ? setTimeout(e, 0) : yw.push(e));
}
function Go(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? vw(e) : "<".concat(t, " ").concat(XA(n), ">").concat(r.map(Go).join(""), "</").concat(t, ">");
}
function ig(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var hc = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, l, u, c;
  for (r === void 0 ? (l = 1, c = t[a[0]]) : (l = 0, c = r); l < o; l++)
    u = a[l], c = s(c, t[u], u, t);
  return c;
};
function nT(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function ip(e) {
  const t = nT(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function rT(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function ag(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ap(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = ag(t);
  typeof vn.hooks.addPack == "function" && !r ? vn.hooks.addPack(e, ag(t)) : vn.styles[e] = B(B({}, vn.styles[e] || {}), i), e === "fas" && ap("fa", t);
}
const {
  styles: bo,
  shims: iT
} = vn, xw = Object.keys(pm), aT = xw.reduce((e, t) => (e[t] = Object.keys(pm[t]), e), {});
let hm = null, ww = {}, Ew = {}, Ow = {}, Sw = {}, kw = {};
function oT(e) {
  return ~UA.indexOf(e);
}
function sT(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !oT(i) ? i : null;
}
const Cw = () => {
  const e = (r) => hc(bo, (i, a, o) => (i[o] = hc(a, r, {}), i), {});
  ww = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), Ew = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), kw = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in bo || ee.autoFetchSvg, n = hc(iT, (r, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Ow = n.names, Sw = n.unicodes, hm = Su(ee.styleDefault, {
    family: ee.familyDefault
  });
};
KA((e) => {
  hm = Su(e.styleDefault, {
    family: ee.familyDefault
  });
});
Cw();
function vm(e, t) {
  return (ww[e] || {})[t];
}
function lT(e, t) {
  return (Ew[e] || {})[t];
}
function Br(e, t) {
  return (kw[e] || {})[t];
}
function Pw(e) {
  return Ow[e] || {
    prefix: null,
    iconName: null
  };
}
function uT(e) {
  const t = Sw[e], n = vm("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function br() {
  return hm;
}
const _w = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function cT(e) {
  let t = ut;
  const n = xw.reduce((r, i) => (r[i] = "".concat(ee.cssPrefix, "-").concat(i), r), {});
  return lw.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => aT[r].includes(i))) && (t = r);
  }), t;
}
function Su(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ut
  } = t, r = BA[n][e];
  if (n === Eu && !e)
    return "fad";
  const i = ng[n][e] || ng[n][r], a = e in vn.styles ? e : null;
  return i || a || null;
}
function fT(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = sT(ee.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function og(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function ku(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = Zf.concat(PA), a = og(e.filter((d) => i.includes(d))), o = og(e.filter((d) => !Zf.includes(d))), s = a.filter((d) => (r = d, !sw.includes(d))), [l = null] = s, u = cT(a), c = B(B({}, fT(o)), {}, {
    prefix: Su(l, {
      family: u
    })
  });
  return B(B(B({}, c), hT({
    values: e,
    family: u,
    styles: bo,
    config: ee,
    canonical: c,
    givenPrefix: r
  })), pT(n, r, c));
}
function pT(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Pw(i) : {}, o = Br(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !bo.far && bo.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const dT = lw.filter((e) => e !== ut || e !== Eu), mT = Object.keys(Qf).filter((e) => e !== ut).map((e) => Object.keys(Qf[e])).flat();
function hT(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = n === Eu, l = t.includes("fa-duotone") || t.includes("fad"), u = o.familyDefault === "duotone", c = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (l || u || c) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && dT.includes(n) && (Object.keys(a).find((p) => mT.includes(p)) || o.autoFetchSvg)) {
    const p = bA.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = Br(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = br() || "fas"), r;
}
class vT {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = B(B({}, this.definitions[a] || {}), i[a]), ap(a, i[a]);
      const o = pm[ut][a];
      o && ap(o, i[a]), Cw();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: s
      } = r[i], l = s[2];
      t[a] || (t[a] = {}), l.length > 0 && l.forEach((u) => {
        typeof u == "string" && (t[a][u] = s);
      }), t[a][o] = s;
    }), t;
  }
}
let sg = [], Ei = {};
const ji = {}, gT = Object.keys(ji);
function yT(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return sg = e, Ei = {}, Object.keys(ji).forEach((r) => {
    gT.indexOf(r) === -1 && delete ji[r];
  }), sg.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Ei[o] || (Ei[o] = []), Ei[o].push(a[o]);
      });
    }
    r.provides && r.provides(ji);
  }), n;
}
function op(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Ei[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function Qr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Ei[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function xr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ji[e] ? ji[e].apply(null, t) : void 0;
}
function sp(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || br();
  if (t)
    return t = Br(n, t) || t, ig(Aw.definitions, n, t) || ig(vn.styles, n, t);
}
const Aw = new vT(), bT = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, Qr("noAuto");
}, xT = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Hn ? (Qr("beforeI2svg", e), xr("pseudoElements2svg", e), xr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, tT(() => {
      ET({
        autoReplaceSvgRoot: t
      }), Qr("watch", e);
    });
  }
}, wT = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Br(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Su(e[0]);
      return {
        prefix: n,
        iconName: Br(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match($A))) {
      const t = ku(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || br(),
        iconName: Br(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = br();
      return {
        prefix: t,
        iconName: Br(t, e) || e
      };
    }
  }
}, Ft = {
  noAuto: bT,
  config: ee,
  dom: xT,
  parse: wT,
  library: Aw,
  findIconDefinition: sp,
  toHtml: Go
}, ET = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = _e
  } = e;
  (Object.keys(vn.styles).length > 0 || ee.autoFetchSvg) && Hn && ee.autoReplaceSvg && Ft.dom.i2svg({
    node: t
  });
};
function Cu(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Go(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Hn) return;
      const n = _e.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function OT(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (mm(o) && n.found && !r.found) {
    const {
      width: s,
      height: l
    } = n, u = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = Ou(B(B({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function ST(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(ee.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: B(B({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function gm(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: a,
    symbol: o,
    title: s,
    maskId: l,
    titleId: u,
    extra: c,
    watchable: d = !1
  } = e, {
    width: p,
    height: v
  } = n.found ? n : t, b = SA.includes(r), x = [ee.replacementClass, i ? "".concat(ee.cssPrefix, "-").concat(i) : ""].filter((O) => c.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(c.classes).join(" ");
  let w = {
    children: [],
    attributes: B(B({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: x,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(v)
    })
  };
  const h = b && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(p / v * 16 * 0.0625, "em")
  } : {};
  d && (w.attributes[Xr] = ""), s && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(u || yo())
    },
    children: [s]
  }), delete w.attributes.title);
  const m = B(B({}, w), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: a,
    symbol: o,
    styles: B(B({}, h), c.styles)
  }), {
    children: y,
    attributes: E
  } = n.found && t.found ? xr("generateAbstractMask", m) || {
    children: [],
    attributes: {}
  } : xr("generateAbstractIcon", m) || {
    children: [],
    attributes: {}
  };
  return m.children = y, m.attributes = E, o ? ST(m) : OT(m);
}
function lg(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, l = B(B(B({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Xr] = "");
  const u = B({}, o.styles);
  mm(i) && (u.transform = ZA({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const c = Ou(u);
  c.length > 0 && (l.style = c);
  const d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function kT(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = B(B(B({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = Ou(r.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: vc
} = vn;
function lp(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(dc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(dc.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(dc.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const CT = {
  found: !1,
  width: 512,
  height: 512
};
function PT(e, t) {
  !pw && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function up(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = br()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Pw(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && vc[t] && vc[t][e]) {
      const a = vc[t][e];
      return r(lp(a));
    }
    PT(e, t), r(B(B({}, CT), {}, {
      icon: ee.showMissingIcons && e ? xr("missingIconAbstract") || {} : {}
    }));
  });
}
const ug = () => {
}, cp = ee.measurePerformance && bs && bs.mark && bs.measure ? bs : {
  mark: ug,
  measure: ug
}, Ca = 'FA "6.7.2"', _T = (e) => (cp.mark("".concat(Ca, " ").concat(e, " begins")), () => Tw(e)), Tw = (e) => {
  cp.mark("".concat(Ca, " ").concat(e, " ends")), cp.measure("".concat(Ca, " ").concat(e), "".concat(Ca, " ").concat(e, " begins"), "".concat(Ca, " ").concat(e, " ends"));
};
var ym = {
  begin: _T,
  end: Tw
};
const $s = () => {
};
function cg(e) {
  return typeof (e.getAttribute ? e.getAttribute(Xr) : null) == "string";
}
function AT(e) {
  const t = e.getAttribute ? e.getAttribute(cm) : null, n = e.getAttribute ? e.getAttribute(fm) : null;
  return t && n;
}
function TT(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function IT() {
  return ee.autoReplaceSvg === !0 ? zs.replace : zs[ee.autoReplaceSvg] || zs.replace;
}
function NT(e) {
  return _e.createElementNS("http://www.w3.org/2000/svg", e);
}
function jT(e) {
  return _e.createElement(e);
}
function Iw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? NT : jT
  } = t;
  if (typeof e == "string")
    return _e.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(Iw(a, {
      ceFn: n
    }));
  }), r;
}
function RT(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const zs = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Iw(n), t);
      }), t.getAttribute(Xr) === null && ee.keepOriginalSource) {
        let n = _e.createComment(RT(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~dm(t).indexOf(ee.replacementClass))
      return zs.replace(e);
    const r = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, s) => (s === ee.replacementClass || s.match(r) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => Go(a)).join(`
`);
    t.setAttribute(Xr, ""), t.innerHTML = i;
  }
};
function fg(e) {
  e();
}
function Nw(e, t) {
  const n = typeof t == "function" ? t : $s;
  if (e.length === 0)
    n();
  else {
    let r = fg;
    ee.mutateApproach === MA && (r = yr.requestAnimationFrame || fg), r(() => {
      const i = IT(), a = ym.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let bm = !1;
function jw() {
  bm = !0;
}
function fp() {
  bm = !1;
}
let Ol = null;
function pg(e) {
  if (!Zv || !ee.observeMutations)
    return;
  const {
    treeCallback: t = $s,
    nodeCallback: n = $s,
    pseudoElementsCallback: r = $s,
    observeMutationsRoot: i = _e
  } = e;
  Ol = new Zv((a) => {
    if (bm) return;
    const o = br();
    oa(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !cg(s.addedNodes[0]) && (ee.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ee.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && cg(s.target) && ~VA.indexOf(s.attributeName))
        if (s.attributeName === "class" && AT(s.target)) {
          const {
            prefix: l,
            iconName: u
          } = ku(dm(s.target));
          s.target.setAttribute(cm, l || o), u && s.target.setAttribute(fm, u);
        } else TT(s.target) && n(s.target);
    });
  }), Hn && Ol.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function DT() {
  Ol && Ol.disconnect();
}
function FT(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function MT(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = ku(dm(e));
  return i.prefix || (i.prefix = br()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = lT(i.prefix, e.innerText) || vm(i.prefix, ip(e.innerText))), !i.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function LT(e) {
  const t = oa(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || yo()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function BT() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: hn,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function dg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = MT(e), a = LT(e), o = op("parseNodeAttributes", {}, e);
  let s = t.styleParser ? FT(e) : [];
  return B({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: hn,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: a
    }
  }, o);
}
const {
  styles: $T
} = vn;
function Rw(e) {
  const t = ee.autoReplaceSvg === "nest" ? dg(e, {
    styleParser: !1
  }) : dg(e);
  return ~t.extra.classes.indexOf(mw) ? xr("generateLayersText", e, t) : xr("generateSvgReplacementMutation", e, t);
}
function zT() {
  return [...wA, ...Zf];
}
function mg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Hn) return Promise.resolve();
  const n = _e.documentElement.classList, r = (c) => n.add("".concat(tg, "-").concat(c)), i = (c) => n.remove("".concat(tg, "-").concat(c)), a = ee.autoFetchSvg ? zT() : sw.concat(Object.keys($T));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(mw, ":not([").concat(Xr, "])")].concat(a.map((c) => ".".concat(c, ":not([").concat(Xr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = oa(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const l = ym.begin("onTree"), u = s.reduce((c, d) => {
    try {
      const p = Rw(d);
      p && c.push(p);
    } catch (p) {
      pw || p.name === "MissingIcon" && console.error(p);
    }
    return c;
  }, []);
  return new Promise((c, d) => {
    Promise.all(u).then((p) => {
      Nw(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch((p) => {
      l(), d(p);
    });
  });
}
function HT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rw(e).then((n) => {
    n && Nw([n], t);
  });
}
function VT(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : sp(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : sp(i || {})), e(r, B(B({}, n), {}, {
      mask: i
    }));
  };
}
const UT = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = hn,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: s = null,
    classes: l = [],
    attributes: u = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: p,
    icon: v
  } = e;
  return Cu(B({
    type: "icon"
  }, e), () => (Qr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (o ? u["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(s || yo()) : (u["aria-hidden"] = "true", u.focusable = "false")), gm({
    icons: {
      main: lp(v),
      mask: i ? lp(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: p,
    transform: B(B({}, hn), n),
    symbol: r,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: u,
      styles: c,
      classes: l
    }
  })));
};
var WT = {
  mixout() {
    return {
      icon: VT(UT)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = mg, e.nodeCallback = HT, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = _e,
        callback: r = () => {
        }
      } = t;
      return mg(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: l,
        mask: u,
        maskId: c,
        extra: d
      } = n;
      return new Promise((p, v) => {
        Promise.all([up(r, o), u.iconName ? up(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [x, w] = b;
          p([t, gm({
            icons: {
              main: x,
              mask: w
            },
            prefix: o,
            iconName: r,
            transform: s,
            symbol: l,
            maskId: c,
            title: i,
            titleId: a,
            extra: d,
            watchable: !0
          })]);
        }).catch(v);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = Ou(o);
      s.length > 0 && (r.style = s);
      let l;
      return mm(a) && (l = xr("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(l || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, GT = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Cu({
          type: "layer"
        }, () => {
          Qr("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ee.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, KT = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return Cu({
          type: "counter",
          content: e
        }, () => (Qr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), kT({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(ee.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, YT = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = hn,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return Cu({
          type: "text",
          content: e
        }, () => (Qr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), lg({
          content: e,
          transform: B(B({}, hn), n),
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(ee.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: a
      } = n;
      let o = null, s = null;
      if (aw) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return ee.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, lg({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const qT = new RegExp('"', "ug"), hg = [1105920, 1112319], vg = B(B(B(B({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), yA), DA), _A), pp = Object.keys(vg).reduce((e, t) => (e[t.toLowerCase()] = vg[t], e), {}), XT = Object.keys(pp).reduce((e, t) => {
  const n = pp[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function QT(e) {
  const t = e.replace(qT, ""), n = rT(t, 0), r = n >= hg[0] && n <= hg[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ip(i ? t[0] : t),
    isSecondary: r || i
  };
}
function ZT(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (pp[n] || {})[i] || XT[n];
}
function gg(e, t) {
  const n = "".concat(FA).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = oa(e.children).filter((p) => p.getAttribute(ep) === t)[0], s = yr.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(zA), c = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), r();
    if (u && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let v = ZT(l, c);
      const {
        value: b,
        isSecondary: x
      } = QT(p), w = u[0].startsWith("FontAwesome");
      let h = vm(v, b), m = h;
      if (w) {
        const y = uT(b);
        y.iconName && y.prefix && (h = y.iconName, v = y.prefix);
      }
      if (h && !x && (!o || o.getAttribute(cm) !== v || o.getAttribute(fm) !== m)) {
        e.setAttribute(n, m), o && e.removeChild(o);
        const y = BT(), {
          extra: E
        } = y;
        E.attributes[ep] = t, up(h, v).then((O) => {
          const A = gm(B(B({}, y), {}, {
            icons: {
              main: O,
              mask: _w()
            },
            prefix: v,
            iconName: m,
            extra: E,
            watchable: !0
          })), T = _e.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(T, e.firstChild) : e.appendChild(T), T.outerHTML = A.map((I) => Go(I)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function JT(e) {
  return Promise.all([gg(e, "::before"), gg(e, "::after")]);
}
function e2(e) {
  return e.parentNode !== document.head && !~LA.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ep) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function yg(e) {
  if (Hn)
    return new Promise((t, n) => {
      const r = oa(e.querySelectorAll("*")).filter(e2).map(JT), i = ym.begin("searchPseudoElements");
      jw(), Promise.all(r).then(() => {
        i(), fp(), t();
      }).catch(() => {
        i(), fp(), n();
      });
    });
}
var t2 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = yg, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = _e
      } = t;
      ee.searchPseudoElements && yg(n);
    };
  }
};
let bg = !1;
var n2 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          jw(), bg = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        pg(op("mutationObserverCallbacks", {}));
      },
      noAuto() {
        DT();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        bg ? fp() : pg(op("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const xg = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return n.flipX = !0, n;
    if (a && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var r2 = {
  mixout() {
    return {
      parse: {
        transform: (e) => xg(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = xg(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(s, " ").concat(l, " ").concat(u)
      }, d = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, p = {
        outer: o,
        inner: c,
        path: d
      };
      return {
        tag: "g",
        attributes: B({}, p.outer),
        children: [{
          tag: "g",
          attributes: B({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: B(B({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const gc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function wg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function i2(e) {
  return e.tag === "g" ? e.children : [e];
}
var a2 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ku(n.split(" ").map((i) => i.trim())) : _w();
        return r.prefix || (r.prefix = br()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: a,
        maskId: o,
        transform: s
      } = t;
      const {
        width: l,
        icon: u
      } = i, {
        width: c,
        icon: d
      } = a, p = QA({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), v = {
        tag: "rect",
        attributes: B(B({}, gc), {}, {
          fill: "white"
        })
      }, b = u.children ? {
        children: u.children.map(wg)
      } : {}, x = {
        tag: "g",
        attributes: B({}, p.inner),
        children: [wg(B({
          tag: u.tag,
          attributes: B(B({}, u.attributes), p.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: B({}, p.outer),
        children: [x]
      }, h = "mask-".concat(o || yo()), m = "clip-".concat(o || yo()), y = {
        tag: "mask",
        attributes: B(B({}, gc), {}, {
          id: h,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [v, w]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: m
          },
          children: i2(d)
        }, y]
      };
      return n.push(E, {
        tag: "rect",
        attributes: B({
          fill: "currentColor",
          "clip-path": "url(#".concat(m, ")"),
          mask: "url(#".concat(h, ")")
        }, gc)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, o2 = {
  provides(e) {
    let t = !1;
    yr.matchMedia && (t = yr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: B(B({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = B(B({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: B(B({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: B(B({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: B(B({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: B(B({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: B(B({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: B(B({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: B(B({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, s2 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, l2 = [eT, WT, GT, KT, YT, t2, n2, r2, a2, o2, s2];
yT(l2, {
  mixoutsTo: Ft
});
Ft.noAuto;
Ft.config;
Ft.library;
Ft.dom;
const dp = Ft.parse;
Ft.findIconDefinition;
Ft.toHtml;
const u2 = Ft.icon;
Ft.layer;
Ft.text;
Ft.counter;
function Eg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(n), !0).forEach(function(r) {
      Oi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Sl(e) {
  "@babel/helpers - typeof";
  return Sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sl(e);
}
function Oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function c2(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Dw(e, t) {
  if (e == null) return {};
  var n = c2(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function mp(e) {
  return f2(e) || p2(e) || d2(e) || m2();
}
function f2(e) {
  if (Array.isArray(e)) return hp(e);
}
function p2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function d2(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hp(e, t);
  }
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function m2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h2(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, p = e.fixedWidth, v = e.inverse, b = e.border, x = e.listItem, w = e.flip, h = e.size, m = e.rotation, y = e.pull, E = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": v,
    "fa-border": b,
    "fa-li": x,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, Oi(t, "fa-".concat(h), typeof h < "u" && h !== null), Oi(t, "fa-rotate-".concat(m), typeof m < "u" && m !== null && m !== 0), Oi(t, "fa-pull-".concat(y), typeof y < "u" && y !== null), Oi(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(E).map(function(O) {
    return E[O] ? O : null;
  }).filter(function(O) {
    return O;
  });
}
function v2(e) {
  return e = e - 0, e === e;
}
function Fw(e) {
  return v2(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var g2 = ["style"];
function y2(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function b2(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = Fw(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[y2(i)] = a : t[i] = a, t;
  }, {});
}
function Mw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return Mw(e, l);
  }), i = Object.keys(t.attributes || {}).reduce(function(l, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        l.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = b2(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[Fw(u)] = c;
    }
    return l;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, s = Dw(n, g2);
  return i.attrs.style = ir(ir({}, i.attrs.style), o), e.apply(void 0, [t.tag, ir(ir({}, i.attrs), s)].concat(mp(r)));
}
var Lw = !1;
try {
  Lw = !0;
} catch {
}
function x2() {
  if (!Lw && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Og(e) {
  if (e && Sl(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (dp.icon)
    return dp.icon(e);
  if (e === null)
    return null;
  if (e && Sl(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function yc(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Oi({}, e, t) : {};
}
var w2 = ["forwardedRef"];
function Ko(e) {
  var t = e.forwardedRef, n = Dw(e, w2), r = n.icon, i = n.mask, a = n.symbol, o = n.className, s = n.title, l = n.titleId, u = n.maskId, c = Og(r), d = yc("classes", [].concat(mp(h2(n)), mp(o.split(" ")))), p = yc("transform", typeof n.transform == "string" ? dp.transform(n.transform) : n.transform), v = yc("mask", Og(i)), b = u2(c, ir(ir(ir(ir({}, d), p), v), {}, {
    symbol: a,
    title: s,
    titleId: l,
    maskId: u
  }));
  if (!b)
    return x2("Could not find icon", c), null;
  var x = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(h) {
    Ko.defaultProps.hasOwnProperty(h) || (w[h] = n[h]);
  }), E2(x[0], w);
}
Ko.displayName = "FontAwesomeIcon";
Ko.propTypes = {
  beat: f.bool,
  border: f.bool,
  beatFade: f.bool,
  bounce: f.bool,
  className: f.string,
  fade: f.bool,
  flash: f.bool,
  mask: f.oneOfType([f.object, f.array, f.string]),
  maskId: f.string,
  fixedWidth: f.bool,
  inverse: f.bool,
  flip: f.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: f.oneOfType([f.object, f.array, f.string]),
  listItem: f.bool,
  pull: f.oneOf(["right", "left"]),
  pulse: f.bool,
  rotation: f.oneOf([0, 90, 180, 270]),
  shake: f.bool,
  size: f.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: f.bool,
  spinPulse: f.bool,
  spinReverse: f.bool,
  symbol: f.oneOfType([f.bool, f.string]),
  title: f.string,
  titleId: f.string,
  transform: f.oneOfType([f.string, f.object]),
  swapOpacity: f.bool
};
Ko.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var E2 = Mw.bind(null, g.createElement);
function Sg() {
  return k.useState(null);
}
const kg = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function O2(e, t) {
  const n = kg(e), r = kg(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function S2(e, t) {
  return k.useMemo(() => O2(e, t), [e, t]);
}
var St = "top", Ut = "bottom", Wt = "right", kt = "left", xm = "auto", Yo = [St, Ut, Wt, kt], Ki = "start", xo = "end", k2 = "clippingParents", Bw = "viewport", ba = "popper", C2 = "reference", Cg = /* @__PURE__ */ Yo.reduce(function(e, t) {
  return e.concat([t + "-" + Ki, t + "-" + xo]);
}, []), wm = /* @__PURE__ */ [].concat(Yo, [xm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ki, t + "-" + xo]);
}, []), P2 = "beforeRead", _2 = "read", A2 = "afterRead", T2 = "beforeMain", I2 = "main", N2 = "afterMain", j2 = "beforeWrite", R2 = "write", D2 = "afterWrite", F2 = [P2, _2, A2, T2, I2, N2, j2, R2, D2];
function bn(e) {
  return e.split("-")[0];
}
function It(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zr(e) {
  var t = It(e).Element;
  return e instanceof t || e instanceof Element;
}
function xn(e) {
  var t = It(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Em(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = It(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Vr = Math.max, kl = Math.min, Yi = Math.round;
function vp() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $w() {
  return !/^((?!chrome|android).)*safari/i.test(vp());
}
function qi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && xn(e) && (i = e.offsetWidth > 0 && Yi(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Yi(r.height) / e.offsetHeight || 1);
  var o = Zr(e) ? It(e) : window, s = o.visualViewport, l = !$w() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, d = r.width / i, p = r.height / a;
  return {
    width: d,
    height: p,
    top: c,
    right: u + d,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Om(e) {
  var t = qi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Em(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function wr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $n(e) {
  return It(e).getComputedStyle(e);
}
function M2(e) {
  return ["table", "td", "th"].indexOf(wr(e)) >= 0;
}
function Cr(e) {
  return ((Zr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Pu(e) {
  return wr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Em(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Cr(e)
  );
}
function Pg(e) {
  return !xn(e) || // https://github.com/popperjs/popper-core/issues/837
  $n(e).position === "fixed" ? null : e.offsetParent;
}
function L2(e) {
  var t = /firefox/i.test(vp()), n = /Trident/i.test(vp());
  if (n && xn(e)) {
    var r = $n(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Pu(e);
  for (Em(i) && (i = i.host); xn(i) && ["html", "body"].indexOf(wr(i)) < 0; ) {
    var a = $n(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function qo(e) {
  for (var t = It(e), n = Pg(e); n && M2(n) && $n(n).position === "static"; )
    n = Pg(n);
  return n && (wr(n) === "html" || wr(n) === "body" && $n(n).position === "static") ? t : n || L2(e) || t;
}
function Sm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $a(e, t, n) {
  return Vr(e, kl(t, n));
}
function B2(e, t, n) {
  var r = $a(e, t, n);
  return r > n ? n : r;
}
function Hw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vw(e) {
  return Object.assign({}, Hw(), e);
}
function Uw(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $2 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Vw(typeof t != "number" ? t : Uw(t, Yo));
};
function z2(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = bn(n.placement), l = Sm(s), u = [kt, Wt].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var d = $2(i.padding, n), p = Om(a), v = l === "y" ? St : kt, b = l === "y" ? Ut : Wt, x = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], w = o[l] - n.rects.reference[l], h = qo(a), m = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, y = x / 2 - w / 2, E = d[v], O = m - p[c] - d[b], A = m / 2 - p[c] / 2 + y, T = $a(E, A, O), I = l;
    n.modifiersData[r] = (t = {}, t[I] = T, t.centerOffset = T - A, t);
  }
}
function H2(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || zw(t.elements.popper, i) && (t.elements.arrow = i));
}
const V2 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: z2,
  effect: H2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Xi(e) {
  return e.split("-")[1];
}
var U2 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function W2(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Yi(n * i) / i || 0,
    y: Yi(r * i) / i || 0
  };
}
function _g(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = o.x, v = p === void 0 ? 0 : p, b = o.y, x = b === void 0 ? 0 : b, w = typeof c == "function" ? c({
    x: v,
    y: x
  }) : {
    x: v,
    y: x
  };
  v = w.x, x = w.y;
  var h = o.hasOwnProperty("x"), m = o.hasOwnProperty("y"), y = kt, E = St, O = window;
  if (u) {
    var A = qo(n), T = "clientHeight", I = "clientWidth";
    if (A === It(n) && (A = Cr(n), $n(A).position !== "static" && s === "absolute" && (T = "scrollHeight", I = "scrollWidth")), A = A, i === St || (i === kt || i === Wt) && a === xo) {
      E = Ut;
      var D = d && A === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[T]
      );
      x -= D - r.height, x *= l ? 1 : -1;
    }
    if (i === kt || (i === St || i === Ut) && a === xo) {
      y = Wt;
      var L = d && A === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[I]
      );
      v -= L - r.width, v *= l ? 1 : -1;
    }
  }
  var G = Object.assign({
    position: s
  }, u && U2), Y = c === !0 ? W2({
    x: v,
    y: x
  }, It(n)) : {
    x: v,
    y: x
  };
  if (v = Y.x, x = Y.y, l) {
    var F;
    return Object.assign({}, G, (F = {}, F[E] = m ? "0" : "", F[y] = h ? "0" : "", F.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + x + "px)" : "translate3d(" + v + "px, " + x + "px, 0)", F));
  }
  return Object.assign({}, G, (t = {}, t[E] = m ? x + "px" : "", t[y] = h ? v + "px" : "", t.transform = "", t));
}
function G2(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: bn(t.placement),
    variation: Xi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, _g(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, _g(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const K2 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: G2,
  data: {}
};
var ws = {
  passive: !0
};
function Y2(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = It(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, ws);
  }), s && l.addEventListener("resize", n.update, ws), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, ws);
    }), s && l.removeEventListener("resize", n.update, ws);
  };
}
const q2 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Y2,
  data: {}
};
var X2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return X2[t];
  });
}
var Q2 = {
  start: "end",
  end: "start"
};
function Ag(e) {
  return e.replace(/start|end/g, function(t) {
    return Q2[t];
  });
}
function km(e) {
  var t = It(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Cm(e) {
  return qi(Cr(e)).left + km(e).scrollLeft;
}
function Z2(e, t) {
  var n = It(e), r = Cr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = $w();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Cm(e),
    y: l
  };
}
function J2(e) {
  var t, n = Cr(e), r = km(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Vr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Vr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + Cm(e), l = -r.scrollTop;
  return $n(i || n).direction === "rtl" && (s += Vr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Pm(e) {
  var t = $n(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Ww(e) {
  return ["html", "body", "#document"].indexOf(wr(e)) >= 0 ? e.ownerDocument.body : xn(e) && Pm(e) ? e : Ww(Pu(e));
}
function za(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ww(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = It(r), o = i ? [a].concat(a.visualViewport || [], Pm(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(za(Pu(o)))
  );
}
function gp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function eI(e, t) {
  var n = qi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Tg(e, t, n) {
  return t === Bw ? gp(Z2(e, n)) : Zr(t) ? eI(t, n) : gp(J2(Cr(e)));
}
function tI(e) {
  var t = za(Pu(e)), n = ["absolute", "fixed"].indexOf($n(e).position) >= 0, r = n && xn(e) ? qo(e) : e;
  return Zr(r) ? t.filter(function(i) {
    return Zr(i) && zw(i, r) && wr(i) !== "body";
  }) : [];
}
function nI(e, t, n, r) {
  var i = t === "clippingParents" ? tI(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = Tg(e, u, r);
    return l.top = Vr(c.top, l.top), l.right = kl(c.right, l.right), l.bottom = kl(c.bottom, l.bottom), l.left = Vr(c.left, l.left), l;
  }, Tg(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Gw(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? bn(r) : null, a = r ? Xi(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case St:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Ut:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Wt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case kt:
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
  var u = i ? Sm(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ki:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case xo:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function wo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? k2 : s, u = n.rootBoundary, c = u === void 0 ? Bw : u, d = n.elementContext, p = d === void 0 ? ba : d, v = n.altBoundary, b = v === void 0 ? !1 : v, x = n.padding, w = x === void 0 ? 0 : x, h = Vw(typeof w != "number" ? w : Uw(w, Yo)), m = p === ba ? C2 : ba, y = e.rects.popper, E = e.elements[b ? m : p], O = nI(Zr(E) ? E : E.contextElement || Cr(e.elements.popper), l, c, o), A = qi(e.elements.reference), T = Gw({
    reference: A,
    element: y,
    placement: i
  }), I = gp(Object.assign({}, y, T)), D = p === ba ? I : A, L = {
    top: O.top - D.top + h.top,
    bottom: D.bottom - O.bottom + h.bottom,
    left: O.left - D.left + h.left,
    right: D.right - O.right + h.right
  }, G = e.modifiersData.offset;
  if (p === ba && G) {
    var Y = G[i];
    Object.keys(L).forEach(function(F) {
      var M = [Wt, Ut].indexOf(F) >= 0 ? 1 : -1, z = [St, Ut].indexOf(F) >= 0 ? "y" : "x";
      L[F] += Y[z] * M;
    });
  }
  return L;
}
function rI(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? wm : l, c = Xi(r), d = c ? s ? Cg : Cg.filter(function(b) {
    return Xi(b) === c;
  }) : Yo, p = d.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  p.length === 0 && (p = d);
  var v = p.reduce(function(b, x) {
    return b[x] = wo(e, {
      placement: x,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[bn(x)], b;
  }, {});
  return Object.keys(v).sort(function(b, x) {
    return v[b] - v[x];
  });
}
function iI(e) {
  if (bn(e) === xm)
    return [];
  var t = Hs(e);
  return [Ag(e), t, Ag(t)];
}
function aI(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, b = v === void 0 ? !0 : v, x = n.allowedAutoPlacements, w = t.options.placement, h = bn(w), m = h === w, y = l || (m || !b ? [Hs(w)] : iI(w)), E = [w].concat(y).reduce(function(W, Q) {
      return W.concat(bn(Q) === xm ? rI(t, {
        placement: Q,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: x
      }) : Q);
    }, []), O = t.rects.reference, A = t.rects.popper, T = /* @__PURE__ */ new Map(), I = !0, D = E[0], L = 0; L < E.length; L++) {
      var G = E[L], Y = bn(G), F = Xi(G) === Ki, M = [St, Ut].indexOf(Y) >= 0, z = M ? "width" : "height", N = wo(t, {
        placement: G,
        boundary: c,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), P = M ? F ? Wt : kt : F ? Ut : St;
      O[z] > A[z] && (P = Hs(P));
      var S = Hs(P), _ = [];
      if (a && _.push(N[Y] <= 0), s && _.push(N[P] <= 0, N[S] <= 0), _.every(function(W) {
        return W;
      })) {
        D = G, I = !1;
        break;
      }
      T.set(G, _);
    }
    if (I)
      for (var R = b ? 3 : 1, C = function(Q) {
        var q = E.find(function(Z) {
          var oe = T.get(Z);
          if (oe)
            return oe.slice(0, Q).every(function(le) {
              return le;
            });
        });
        if (q)
          return D = q, "break";
      }, j = R; j > 0; j--) {
        var U = C(j);
        if (U === "break") break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const oI = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: aI,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ig(e, t, n) {
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
function Ng(e) {
  return [St, Wt, Ut, kt].some(function(t) {
    return e[t] >= 0;
  });
}
function sI(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = wo(t, {
    elementContext: "reference"
  }), s = wo(t, {
    altBoundary: !0
  }), l = Ig(o, r), u = Ig(s, i, a), c = Ng(l), d = Ng(u);
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
const lI = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sI
};
function uI(e, t, n) {
  var r = bn(e), i = [kt, St].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [kt, Wt].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function cI(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = wm.reduce(function(c, d) {
    return c[d] = uI(d, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const fI = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cI
};
function pI(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Gw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const dI = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pI,
  data: {}
};
function mI(e) {
  return e === "x" ? "y" : "x";
}
function hI(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, p = n.tether, v = p === void 0 ? !0 : p, b = n.tetherOffset, x = b === void 0 ? 0 : b, w = wo(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = bn(t.placement), m = Xi(t.placement), y = !m, E = Sm(h), O = mI(E), A = t.modifiersData.popperOffsets, T = t.rects.reference, I = t.rects.popper, D = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, L = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (A) {
    if (a) {
      var F, M = E === "y" ? St : kt, z = E === "y" ? Ut : Wt, N = E === "y" ? "height" : "width", P = A[E], S = P + w[M], _ = P - w[z], R = v ? -I[N] / 2 : 0, C = m === Ki ? T[N] : I[N], j = m === Ki ? -I[N] : -T[N], U = t.elements.arrow, W = v && U ? Om(U) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hw(), q = Q[M], Z = Q[z], oe = $a(0, T[N], W[N]), le = y ? T[N] / 2 - R - oe - q - L.mainAxis : C - oe - q - L.mainAxis, pe = y ? -T[N] / 2 + R + oe + Z + L.mainAxis : j + oe + Z + L.mainAxis, ce = t.elements.arrow && qo(t.elements.arrow), we = ce ? E === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, We = (F = G == null ? void 0 : G[E]) != null ? F : 0, ct = P + le - We - we, ft = P + pe - We, qt = $a(v ? kl(S, ct) : S, P, v ? Vr(_, ft) : _);
      A[E] = qt, Y[E] = qt - P;
    }
    if (s) {
      var Ee, V = E === "x" ? St : kt, ge = E === "x" ? Ut : Wt, ye = A[O], $e = O === "y" ? "height" : "width", tt = ye + w[V], Wn = ye - w[ge], H = [St, kt].indexOf(h) !== -1, re = (Ee = G == null ? void 0 : G[O]) != null ? Ee : 0, Se = H ? tt : ye - T[$e] - I[$e] - re + L.altAxis, Te = H ? ye + T[$e] + I[$e] - re - L.altAxis : Wn, He = v && H ? B2(Se, ye, Te) : $a(v ? Se : tt, ye, v ? Te : Wn);
      A[O] = He, Y[O] = He - ye;
    }
    t.modifiersData[r] = Y;
  }
}
const vI = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hI,
  requiresIfExists: ["offset"]
};
function gI(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yI(e) {
  return e === It(e) || !xn(e) ? km(e) : gI(e);
}
function bI(e) {
  var t = e.getBoundingClientRect(), n = Yi(t.width) / e.offsetWidth || 1, r = Yi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function xI(e, t, n) {
  n === void 0 && (n = !1);
  var r = xn(t), i = xn(t) && bI(t), a = Cr(t), o = qi(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((wr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Pm(a)) && (s = yI(t)), xn(t) ? (l = qi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Cm(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function wI(e) {
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
function EI(e) {
  var t = wI(e);
  return F2.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function OI(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function SI(e) {
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
var jg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Rg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function kI(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? jg : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jg, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, v = {
      state: c,
      setOptions: function(h) {
        var m = typeof h == "function" ? h(c.options) : h;
        x(), c.options = Object.assign({}, a, c.options, m), c.scrollParents = {
          reference: Zr(s) ? za(s) : s.contextElement ? za(s.contextElement) : [],
          popper: za(l)
        };
        var y = EI(SI([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(E) {
          return E.enabled;
        }), b(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var h = c.elements, m = h.reference, y = h.popper;
          if (Rg(m, y)) {
            c.rects = {
              reference: xI(m, qo(y), c.options.strategy === "fixed"),
              popper: Om(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
              return c.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var E = 0; E < c.orderedModifiers.length; E++) {
              if (c.reset === !0) {
                c.reset = !1, E = -1;
                continue;
              }
              var O = c.orderedModifiers[E], A = O.fn, T = O.options, I = T === void 0 ? {} : T, D = O.name;
              typeof A == "function" && (c = A({
                state: c,
                options: I,
                name: D,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: OI(function() {
        return new Promise(function(w) {
          v.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        x(), p = !0;
      }
    };
    if (!Rg(s, l))
      return v;
    v.setOptions(u).then(function(w) {
      !p && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function b() {
      c.orderedModifiers.forEach(function(w) {
        var h = w.name, m = w.options, y = m === void 0 ? {} : m, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: h,
            instance: v,
            options: y
          }), A = function() {
          };
          d.push(O || A);
        }
      });
    }
    function x() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return v;
  };
}
var CI = kI({
  defaultModifiers: [lI, dI, K2, q2, fI, oI, vI, V2]
});
function Kw() {
  const e = k.useRef(!0), t = k.useRef(() => e.current);
  return k.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function PI(e) {
  const t = Kw();
  return [e[0], k.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Dg = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, _I = {
  name: "applyStyles",
  enabled: !1
}, AI = {
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
}, TI = [];
function II(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, d = c === void 0 ? TI : c, p = ve(r, ["enabled", "placement", "strategy", "modifiers"]), v = k.useRef(), b = k.useCallback(function() {
    var E;
    (E = v.current) == null || E.update();
  }, []), x = k.useCallback(function() {
    var E;
    (E = v.current) == null || E.forceUpdate();
  }, []), w = PI(k.useState({
    placement: s,
    update: b,
    forceUpdate: x,
    attributes: {},
    styles: {
      popper: Dg(u),
      arrow: {}
    }
  })), h = w[0], m = w[1], y = k.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(O) {
        var A = O.state, T = {}, I = {};
        Object.keys(A.elements).forEach(function(D) {
          T[D] = A.styles[D], I[D] = A.attributes[D];
        }), m({
          state: A,
          styles: T,
          attributes: I,
          update: b,
          forceUpdate: x,
          placement: A.placement
        });
      }
    };
  }, [b, x, m]);
  return k.useEffect(function() {
    !v.current || !a || v.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(d, [y, _I])
    });
  }, [u, s, y, a]), k.useEffect(function() {
    if (!(!a || e == null || t == null))
      return v.current = CI(e, t, ne({}, p, {
        placement: s,
        strategy: u,
        modifiers: [].concat(d, [AI, y])
      })), function() {
        v.current != null && (v.current.destroy(), v.current = void 0, m(function(E) {
          return ne({}, E, {
            attributes: {},
            styles: {
              popper: Dg(u)
            }
          });
        }));
      };
  }, [a, e, t]), h;
}
function Yw(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const NI = !!(typeof window < "u" && window.document && window.document.createElement);
var yp = !1, bp = !1;
try {
  var bc = {
    get passive() {
      return yp = !0;
    },
    get once() {
      return bp = yp = !0;
    }
  };
  NI && (window.addEventListener("test", bc, bc), window.removeEventListener("test", bc, !0));
} catch {
}
function jI(e, t, n, r) {
  if (r && typeof r != "boolean" && !bp) {
    var i = r.once, a = r.capture, o = n;
    !bp && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, yp ? r : a);
  }
  e.addEventListener(t, n, r);
}
function RI(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Si(e, t, n, r) {
  return jI(e, t, n, r), function() {
    RI(e, t, n, r);
  };
}
function DI(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function xp(e) {
  const t = DI(e);
  return k.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function _m(e) {
  return e && e.ownerDocument || document;
}
function Cl(e) {
  return e && "setState" in e ? wi.findDOMNode(e) : e ?? null;
}
const FI = function(e) {
  return _m(Cl(e));
};
var MI = 27, Fg = function() {
};
function LI(e) {
  return e.button === 0;
}
function BI(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Mg = function(t) {
  return t && ("current" in t ? t.current : t);
};
function $I(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = k.useRef(!1), l = t || Fg, u = k.useCallback(function(p) {
    var v, b = Mg(e);
    qC(!!b, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !b || BI(p) || !LI(p) || !!Yw(b, (v = p.composedPath == null ? void 0 : p.composedPath()[0]) != null ? v : p.target);
  }, [e]), c = xp(function(p) {
    s.current || l(p);
  }), d = xp(function(p) {
    p.keyCode === MI && l(p);
  });
  k.useEffect(function() {
    if (!(i || e == null)) {
      var p = window.event, v = FI(Mg(e)), b = Si(v, o, u, !0), x = Si(v, o, function(m) {
        if (m === p) {
          p = void 0;
          return;
        }
        c(m);
      }), w = Si(v, "keyup", function(m) {
        if (m === p) {
          p = void 0;
          return;
        }
        d(m);
      }), h = [];
      return "ontouchstart" in v.documentElement && (h = [].slice.call(v.body.children).map(function(m) {
        return Si(m, "mousemove", Fg);
      })), function() {
        b(), x(), w(), h.forEach(function(m) {
          return m();
        });
      };
    }
  }, [e, i, o, u, c, d]);
}
var xc = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? _m().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function Lg(e, t) {
  var n = k.useState(function() {
    return xc(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = xc(e);
    a && i(a);
  }
  return k.useEffect(function() {
  }, [t, r]), k.useEffect(function() {
    var o = xc(e);
    o !== r && i(o);
  }, [e, r]), r;
}
function zI(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function HI(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function VI(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, d = e.containerPadding, p = e.arrowElement, v = e.popperConfig, b = v === void 0 ? {} : v, x = zI(b.modifiers);
  return ne({}, b, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : b.strategy,
    modifiers: HI(ne({}, x, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: ne({}, x.preventOverflow, {
        options: d ? ne({
          padding: d
        }, (t = x.preventOverflow) == null ? void 0 : t.options) : (n = x.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: ne({
          offset: u
        }, (r = x.offset) == null ? void 0 : r.options)
      },
      arrow: ne({}, x.arrow, {
        enabled: !!p,
        options: ne({}, (i = x.arrow) == null ? void 0 : i.options, {
          element: p
        })
      }),
      flip: ne({
        enabled: !!l
      }, x.flip)
    }))
  });
}
var Am = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = Sg(), d = c[0], p = c[1], v = Sg(), b = v[0], x = v[1], w = S2(p, t), h = Lg(e.container), m = Lg(e.target), y = k.useState(!e.show), E = y[0], O = y[1], A = II(m, d, VI({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: b,
    popperConfig: l
  })), T = A.styles, I = A.attributes, D = ve(A, ["styles", "attributes"]);
  e.show ? E && O(!1) : !e.transition && !E && O(!0);
  var L = function() {
    O(!0), e.onExited && e.onExited.apply(e, arguments);
  }, G = e.show || u && !E;
  if ($I(d, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !G)
    return null;
  var Y = e.children(ne({}, D, {
    show: !!e.show,
    props: ne({}, I.popper, {
      style: T.popper,
      ref: w
    }),
    arrowProps: ne({}, I.arrow, {
      style: T.arrow,
      ref: x
    })
  }));
  if (u) {
    var F = e.onExit, M = e.onExiting, z = e.onEnter, N = e.onEntering, P = e.onEntered;
    Y = /* @__PURE__ */ g.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: F,
      onExiting: M,
      onExited: L,
      onEnter: z,
      onEntering: N,
      onEntered: P
    }, Y);
  }
  return h ? /* @__PURE__ */ wi.createPortal(Y, h) : null;
});
Am.displayName = "Overlay";
Am.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: f.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: f.oneOf(wm),
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
      var a;
      return (a = f.func).isRequired.apply(a, [t].concat(r));
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
function wc(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Ec(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function UI() {
  var e = k.useRef(null), t = k.useRef(null), n = k.useRef(null), r = Me(void 0, "popover"), i = Me(void 0, "dropdown-menu"), a = k.useCallback(function(u) {
    !u || !(wc(u, r) || wc(u, i)) || (t.current = Ec(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = k.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var d = c.placement;
          if (!t.current) return [0, 0];
          var p = t.current, v = p.top, b = p.left, x = p.bottom, w = p.right;
          switch (d.split("-")[0]) {
            case "top":
              return [0, x];
            case "left":
              return [0, w];
            case "bottom":
              return [0, v];
            case "right":
              return [0, b];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = k.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, d = c.top, p = c.right, v = d || p;
          return {
            top: v,
            left: v,
            right: v,
            bottom: v
          };
        }
      }
    };
  }, [n]), l = k.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var d = c.state;
        if (!(!e.current || !d.elements.arrow || !wc(e.current, r))) {
          if (d.modifiersData["arrow#persistent"]) {
            var p = Ec(d.elements.arrow), v = p.top, b = p.right, x = v || b;
            d.modifiersData["arrow#persistent"].padding = {
              top: x,
              left: x,
              right: x,
              bottom: x
            };
          } else
            n.current = Ec(d.elements.arrow);
          return d.elements.arrow.style.margin = "0", function() {
            d.elements.arrow && (d.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
function wp(e, t) {
  return wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, wp(e, t);
}
function qw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wp(e, t);
}
const Bg = {
  disabled: !1
}, Xw = g.createContext(null);
var WI = function(t) {
  return t.scrollTop;
}, Pa = "unmounted", Nr = "exited", Zn = "entering", jr = "entered", Ep = "exiting", Vn = /* @__PURE__ */ function(e) {
  qw(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = Nr, a.appearStatus = Zn) : l = jr : r.unmountOnExit || r.mountOnEnter ? l = Pa : l = Nr, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Pa ? {
      status: Nr
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Zn && o !== jr && (a = Zn) : (o === Zn || o === jr) && (a = Ep);
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
      if (this.cancelNextCallback(), a === Zn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : wi.findDOMNode(this);
          o && WI(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Nr && this.setState({
      status: Pa
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [wi.findDOMNode(this), s], u = l[0], c = l[1], d = this.getTimeouts(), p = s ? d.appear : d.enter;
    if (!i && !o || Bg.disabled) {
      this.safeSetState({
        status: jr
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Zn
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: jr
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : wi.findDOMNode(this);
    if (!a || Bg.disabled) {
      this.safeSetState({
        status: Nr
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Ep
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: Nr
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
    var o = this.props.nodeRef ? this.props.nodeRef.current : wi.findDOMNode(this), s = i == null && !this.props.addEndListener;
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
    if (i === Pa)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = ve(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ g.createElement(Xw.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : g.cloneElement(g.Children.only(o), s))
    );
  }, t;
}(g.Component);
Vn.contextType = Xw;
Vn.propTypes = {};
function li() {
}
Vn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: li,
  onEntering: li,
  onEntered: li,
  onExit: li,
  onExiting: li,
  onExited: li
};
Vn.UNMOUNTED = Pa;
Vn.EXITED = Nr;
Vn.ENTERING = Zn;
Vn.ENTERED = jr;
Vn.EXITING = Ep;
function GI(e) {
  var t = _m(e);
  return t && t.defaultView || window;
}
function KI(e, t) {
  return GI(e).getComputedStyle(e, t);
}
var YI = /([A-Z])/g;
function qI(e) {
  return e.replace(YI, "-$1").toLowerCase();
}
var XI = /^ms-/;
function Es(e) {
  return qI(e).replace(XI, "-ms-");
}
var QI = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ZI(e) {
  return !!(e && QI.test(e));
}
function Qw(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Es(t)) || KI(e).getPropertyValue(Es(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(Es(i)) : ZI(i) ? r += i + "(" + a + ") " : n += Es(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function JI(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function eN(e) {
  var t = Qw(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function tN(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || JI(e, "transitionend", !0);
  }, t + n), a = Si(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function nN(e, t, n, r) {
  n == null && (n = eN(e) || 0);
  var i = tN(e, n, r), a = Si(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function $g(e, t) {
  var n = Qw(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function rN(e, t) {
  var n = $g(e, "transitionDuration"), r = $g(e, "transitionDelay"), i = nN(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function iN(e) {
  e.offsetHeight;
}
var aN = ["className", "children"], Os, oN = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, sN = (Os = {}, Os[Zn] = "show", Os[jr] = "show", Os), sa = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ve(e, aN), a = k.useCallback(function(o) {
    iN(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ g.createElement(Vn, ne({
    ref: t,
    addEndListener: rN
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ g.cloneElement(r, ne({}, s, {
      className: K("fade", n, r.props.className, sN[o])
    }));
  });
});
sa.defaultProps = oN;
sa.displayName = "Fade";
var lN = ["children", "transition", "popperConfig"], uN = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], cN = {
  transition: sa,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function fN(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Cl(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Cl(i));
  });
}
function Zw(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = ve(e, lN), o = k.useRef({}), s = UI(), l = s[0], u = s[1], c = n === !0 ? sa : n || null;
  return /* @__PURE__ */ g.createElement(Am, ne({}, a, {
    ref: l,
    popperConfig: ne({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(d) {
    var p, v = d.props, b = d.arrowProps, x = d.show, w = d.update;
    d.forceUpdate;
    var h = d.placement, m = d.state, y = ve(d, uN);
    fN(v, b);
    var E = Object.assign(o.current, {
      state: m,
      scheduleUpdate: w,
      placement: h,
      outOfBoundaries: (m == null || (p = m.modifiersData.hide) == null ? void 0 : p.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(ne({}, y, v, {
      placement: h,
      show: x
    }, !n && x && {
      className: "show"
    }, {
      popper: E,
      arrowProps: b
    })) : /* @__PURE__ */ g.cloneElement(t, ne({}, y, v, {
      placement: h,
      arrowProps: b,
      popper: E,
      className: K(t.props.className, !n && x && "show"),
      style: ne({}, t.props.style, v.style)
    }));
  });
}
Zw.defaultProps = cN;
function pN(e) {
  const t = k.useRef(e);
  return t.current = e, t;
}
function dN(e) {
  const t = pN(e);
  k.useEffect(() => () => t.current(), []);
}
const Op = 2 ** 31 - 1;
function Jw(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Op ? setTimeout(t, r) : setTimeout(() => Jw(e, t, n), Op);
}
function mN() {
  const e = Kw(), t = k.useRef();
  return dN(() => clearTimeout(t.current)), k.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Op ? t.current = setTimeout(i, a) : Jw(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function zg(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function hN(e) {
  var t = vN(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function vN(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function eE(e, t, n) {
  var r = k.useRef(e !== void 0), i = k.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, k.useCallback(function(u) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
      d[p - 1] = arguments[p];
    n && n.apply(void 0, [u].concat(d)), o(u);
  }, [n])];
}
function gN(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[zg(r)], s = a[r], l = ve(a, [zg(r), r].map(hN)), u = t[r], c = eE(s, o, e[u]), d = c[0], p = c[1];
    return ne({}, l, (i = {}, i[r] = d, i[u] = p, i));
  }, e);
}
var yN = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], bN = /* @__PURE__ */ function(e) {
  qw(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(g.Component);
function xN(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function Hg(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !Yw(i, a) && e.apply(void 0, t);
}
var wN = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function tE(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, d = e.placement, p = e.flip, v = p === void 0 ? d && d.indexOf("auto") !== -1 : p, b = ve(e, yN), x = k.useRef(null), w = mN(), h = k.useRef(""), m = eE(o, l, u), y = m[0], E = m[1], O = xN(c), A = typeof r != "function" ? g.Children.only(r).props : {}, T = A.onFocus, I = A.onBlur, D = A.onClick, L = k.useCallback(function() {
    return Cl(x.current);
  }, []), G = k.useCallback(function() {
    if (w.clear(), h.current = "show", !O.show) {
      E(!0);
      return;
    }
    w.set(function() {
      h.current === "show" && E(!0);
    }, O.show);
  }, [O.show, E, w]), Y = k.useCallback(function() {
    if (w.clear(), h.current = "hide", !O.hide) {
      E(!1);
      return;
    }
    w.set(function() {
      h.current === "hide" && E(!1);
    }, O.hide);
  }, [O.hide, E, w]), F = k.useCallback(function() {
    G();
    for (var R = arguments.length, C = new Array(R), j = 0; j < R; j++)
      C[j] = arguments[j];
    T == null || T.apply(void 0, C);
  }, [G, T]), M = k.useCallback(function() {
    Y();
    for (var R = arguments.length, C = new Array(R), j = 0; j < R; j++)
      C[j] = arguments[j];
    I == null || I.apply(void 0, C);
  }, [Y, I]), z = k.useCallback(function() {
    E(!y), D && D.apply(void 0, arguments);
  }, [D, E, y]), N = k.useCallback(function() {
    for (var R = arguments.length, C = new Array(R), j = 0; j < R; j++)
      C[j] = arguments[j];
    Hg(G, C, "fromElement");
  }, [G]), P = k.useCallback(function() {
    for (var R = arguments.length, C = new Array(R), j = 0; j < R; j++)
      C[j] = arguments[j];
    Hg(Y, C, "toElement");
  }, [Y]), S = t == null ? [] : [].concat(t), _ = {};
  return S.indexOf("click") !== -1 && (_.onClick = z), S.indexOf("focus") !== -1 && (_.onFocus = F, _.onBlur = M), S.indexOf("hover") !== -1 && (_.onMouseOver = N, _.onMouseOut = P), /* @__PURE__ */ g.createElement(g.Fragment, null, typeof r == "function" ? r(ne({}, _, {
    ref: x
  })) : /* @__PURE__ */ g.createElement(bN, {
    ref: x
  }, /* @__PURE__ */ k.cloneElement(r, _)), /* @__PURE__ */ g.createElement(Zw, ne({}, b, {
    show: y,
    onHide: Y,
    flip: v,
    placement: d,
    popperConfig: a,
    target: L
  }), n));
}
tE.defaultProps = wN;
var nE = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], EN = ["hover", "click", "focus"];
function Tm(e) {
  return /* @__PURE__ */ g.createElement(tE, e, e.children);
}
var Vg = f.oneOf(EN);
f.node.isRequired, f.oneOfType([f.elementType, f.func]), f.func, f.func, f.func, f.func, f.func, f.func, f.func, f.oneOf(nE), f.shape({}), f.bool, f.oneOf(["click", "mousedown"]), f.bool, f.oneOfType([f.elementType, f.func]), f.oneOfType([f.object, f.bool]);
Tm.propTypes = {
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
  placement: f.oneOf(nE),
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
  trigger: f.oneOfType([Vg, f.arrayOf(Vg)])
};
Tm.defaultProps = {
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
var Ug = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", d = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + d + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var p = arguments.length, v = Array(p > 5 ? p - 5 : 0), b = 5; b < p; b++)
        v[b - 5] = arguments[b];
      return r.apply(void 0, [a, o, s, l, u].concat(v));
    };
  }
  e.exports = t.default;
})(Ug, Ug.exports);
var ON = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], SN = {
  placement: "right"
}, _u = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = ve(e, ON);
  n = Me(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ g.createElement("div", ne({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: K(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ g.createElement("div", ne({
    className: "arrow"
  }, s)), /* @__PURE__ */ g.createElement("div", {
    className: n + "-inner"
  }, o));
});
_u.defaultProps = SN;
_u.displayName = "Tooltip";
function Eo(e) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e);
}
var kN = ["children", "variant"];
function Wg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(n), !0).forEach(function(r) {
      CN(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function CN(e, t, n) {
  return t = PN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function PN(e) {
  var t = _N(e, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function _N(e, t) {
  if (Eo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Eo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sp() {
  return Sp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sp.apply(this, arguments);
}
function AN(e, t) {
  if (e == null) return {};
  var n = TN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function TN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var IN = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], _l = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.variant, i = AN(e, kN);
  return /* @__PURE__ */ g.createElement(_u, Sp({}, i, {
    className: K({
      "tooltip-light": r === "light"
    }, i.className),
    ref: t
  }), n);
});
_l.propTypes = Pl(Pl({}, _u.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: f.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: f.oneOf(IN),
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
});
_l.defaultProps = Pl(Pl({}, _l.defaultProps), {}, {
  id: void 0,
  placement: "right",
  arrowProps: void 0,
  show: void 0,
  popper: void 0,
  children: void 0,
  className: void 0,
  variant: void 0,
  bsPrefix: "tooltip"
});
function Oo(e) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e);
}
var NN = ["className", "alt", "invertColors", "icon", "src", "iconClassNames", "onClick", "size", "variant", "iconAs", "isActive"], jN = ["tooltipPlacement", "tooltipContent", "variant", "invertColors"];
function Al() {
  return Al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Al.apply(this, arguments);
}
function RN(e, t, n) {
  return t = DN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function DN(e) {
  var t = FN(e, "string");
  return Oo(t) == "symbol" ? t : t + "";
}
function FN(e, t) {
  if (Oo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Oo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rE(e, t) {
  if (e == null) return {};
  var n = MN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function MN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Xo = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.alt, i = e.invertColors, a = e.icon, o = e.src, s = e.iconClassNames, l = e.onClick, u = e.size, c = e.variant, d = e.iconAs, p = e.isActive, v = rE(e, NN), b = i ? "inverse-" : "", x = p ? "".concat(c, "-") : "", w = d || Ko;
  return /* @__PURE__ */ g.createElement("button", Al({
    "aria-label": r,
    className: K("btn-icon", "btn-icon-".concat(b).concat(c), "btn-icon-".concat(u), RN({}, "btn-icon-".concat(b).concat(x, "active"), p), n),
    onClick: l,
    type: "button",
    ref: t
  }, v), /* @__PURE__ */ g.createElement("span", {
    className: "btn-icon__icon-container"
  }, /* @__PURE__ */ g.createElement(w, {
    className: K("btn-icon__icon", s),
    icon: a,
    src: o
  })));
});
Xo.defaultProps = {
  iconAs: void 0,
  src: null,
  icon: void 0,
  iconClassNames: void 0,
  className: void 0,
  invertColors: !1,
  variant: "primary",
  size: "md",
  onClick: function() {
  },
  isActive: !1
};
Xo.propTypes = {
  /** A custom class name. */
  className: f.string,
  /** Component that renders the icon, currently defaults to `FontAwesomeIcon`,
   *  but is going to be deprecated soon, please use Paragon's icons instead. */
  iconAs: f.elementType,
  /** An icon component to render. Example import of a Paragon icon component:
   * `import { Check } from '@openedx/paragon/dist/icon';`
   * */
  src: f.oneOfType([f.element, f.elementType]),
  /** Alt text for your icon. For best practice, avoid using alt text to describe
   * the image in the `IconButton`. Instead, we recommend describing the function
   * of the button. */
  alt: f.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: f.bool,
  /** Accepts a React fontawesome icon. */
  icon: f.shape({
    prefix: f.string,
    iconName: f.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: f.array
  }),
  /** Extra class names that will be added to the icon */
  iconClassNames: f.string,
  /** Click handler for the button */
  onClick: f.func,
  /** Type of button (uses Bootstrap options) */
  variant: f.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** size of button to render */
  size: f.oneOf(["sm", "md", "inline"]),
  /** whether to show the `IconButton` in an active state, whose styling is distinct from default state */
  isActive: f.bool
};
function Im(e) {
  var t = e.tooltipPlacement, n = e.tooltipContent, r = e.variant, i = e.invertColors, a = rE(e, jN), o = i ? "inverse-" : "";
  return /* @__PURE__ */ g.createElement(Tm, {
    placement: t,
    overlay: /* @__PURE__ */ g.createElement(_l, {
      id: "iconbutton-tooltip-".concat(t),
      variant: o ? "light" : ""
    }, n)
  }, /* @__PURE__ */ g.createElement(Xo, Al({
    variant: r,
    invertColors: i
  }, a)));
}
Im.defaultProps = {
  tooltipPlacement: "top",
  variant: "primary",
  invertColors: !1
};
Im.propTypes = {
  /** tooltip placement can be top, left, right etc, per https://popper.js.org/docs/v2/constructors/#options  */
  tooltipPlacement: f.string,
  /** any valid JSX or text to be rendered as tooltip contents */
  tooltipContent: f.node.isRequired,
  /** Type of button (uses Bootstrap options) */
  variant: f.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark", "black", "brand"]),
  /** Changes icon styles for dark background */
  invertColors: f.bool
};
Xo.IconButtonWithTooltip = Im;
var LN = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], iE = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = ve(e, LN);
  n = Me(n, "spinner");
  var d = n + "-" + i;
  return /* @__PURE__ */ g.createElement(l, ne({
    ref: t
  }, c, {
    className: K(u, d, a && d + "-" + a, r && "text-" + r)
  }), o);
});
iE.displayName = "Spinner";
function So(e) {
  "@babel/helpers - typeof";
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, So(e);
}
var BN = ["className", "screenReaderText"];
function kp() {
  return kp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kp.apply(this, arguments);
}
function Gg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(n), !0).forEach(function(r) {
      $N(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $N(e, t, n) {
  return t = zN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zN(e) {
  var t = HN(e, "string");
  return So(t) == "symbol" ? t : t + "";
}
function HN(e, t) {
  if (So(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (So(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VN(e, t) {
  if (e == null) return {};
  var n = UN(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function UN(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Au = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.screenReaderText, i = VN(e, BN), a = Kg(Kg({}, i), {}, {
    className: K("pgn__spinner", n),
    role: r ? "status" : void 0
  });
  return /* @__PURE__ */ g.createElement(iE, kp({}, a, {
    ref: t
  }), r && /* @__PURE__ */ g.createElement("span", {
    className: "sr-only"
  }, r));
});
Au.propTypes = {
  /** Specifies the class name for the component. */
  className: f.string,
  /** Specifies the screen reader content for a11y. */
  screenReaderText: f.node
};
Au.defaultProps = {
  className: void 0,
  screenReaderText: void 0
};
function WN(e, t) {
  return qN(e) || YN(e, t) || KN(e, t) || GN();
}
function GN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KN(e, t) {
  if (e) {
    if (typeof e == "string") return Yg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yg(e, t);
  }
}
function Yg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function YN(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function qN(e) {
  if (Array.isArray(e)) return e;
}
function XN(e) {
  var t = e.event, n = e.currentIndex, r = e.activeElement;
  n !== -1 && (r.click(), t.preventDefault());
}
function QN(e) {
  var t = e.event, n = e.currentIndex, r = e.availableElements;
  n === -1 && r[0].focus();
  var i;
  if ((t.key === "ArrowDown" || t.key === "ArrowRight") && (i = r[(n + 1) % r.length]), (t.key === "ArrowUp" || t.key === "ArrowLeft") && (i = n - 1 < 0 ? r[n - 1 + r.length] : r[n - 1]), t.key === "End" && (i = r[r.length - 1]), t.key === "Home") {
    var a = WN(r, 1);
    i = a[0];
  }
  i && i.focus(), t.preventDefault();
}
function ZN(e) {
  var t = e.event, n = e.ignoredKeys, r = n === void 0 ? [] : n, i = e.parentNode, a = e.selectors, o = a === void 0 ? "a,button,input" : a;
  if (i) {
    var s = t.key;
    if (!(!["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Home", "End"].includes(s) || r.includes(s))) {
      var l = document, u = l.activeElement;
      if (i.contains(u)) {
        var c = i.querySelectorAll(o);
        if (c.length) {
          var d = Array.from(c).findIndex(function(p) {
            return p === u;
          });
          s === "Enter" && XN({
            event: t,
            currentIndex: d,
            activeElement: u
          }), QN({
            event: t,
            currentIndex: d,
            availableElements: c
          });
        }
      }
    }
  }
}
function JN(e) {
  var t = e || {}, n = t.selectors, r = t.ignoredKeys, i = k.useRef();
  return k.useEffect(function() {
    var a = function(s) {
      ZN({
        event: s,
        ignoredKeys: r,
        parentNode: i.current,
        selectors: n
      });
    };
    return document.addEventListener("keydown", a), function() {
      return document.removeEventListener("keydown", a);
    };
  }, [r, n]), i;
}
const qg = {
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
};
function ko(e) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e);
}
var ej = ["children", "arrowKeyNavigationSelector", "ignoredArrowKeysNames", "screenReaderText", "value", "isLoading", "isValueRequired", "valueRequiredErrorMessageText", "isSelectionRequired", "selectionRequiredErrorMessageText", "hasCustomError", "customErrorMessageText", "onChange", "helpMessage"], tj = ["children", "onClick"];
function Cp() {
  return Cp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cp.apply(this, arguments);
}
function Xg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xg(Object(n), !0).forEach(function(r) {
      nj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nj(e, t, n) {
  return t = rj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rj(e) {
  var t = ij(e, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function ij(e, t) {
  if (ko(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ko(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sn(e, t) {
  return lj(e) || sj(e, t) || oj(e, t) || aj();
}
function aj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oj(e, t) {
  if (e) {
    if (typeof e == "string") return Zg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zg(e, t);
  }
}
function Zg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function sj(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function lj(e) {
  if (Array.isArray(e)) return e;
}
function Jg(e, t) {
  if (e == null) return {};
  var n = uj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function uj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Nm = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var n = e.children, r = e.arrowKeyNavigationSelector, i = e.ignoredArrowKeysNames, a = e.screenReaderText, o = e.value, s = e.isLoading, l = e.isValueRequired, u = e.valueRequiredErrorMessageText, c = e.isSelectionRequired, d = e.selectionRequiredErrorMessageText, p = e.hasCustomError, v = e.customErrorMessageText, b = e.onChange, x = e.helpMessage, w = Jg(e, ej), h = ra(), m = k.useRef(), y = JN({
    selectors: r,
    ignoredKeys: i
  }), E = k.useState(!1), O = Sn(E, 2), A = O[0], T = O[1], I = k.useState(!1), D = Sn(I, 2), L = D[0], G = D[1], Y = k.useState(!1), F = Sn(Y, 2), M = F[0], z = F[1], N = k.useState(!1), P = Sn(N, 2), S = P[0], _ = P[1], R = k.useState((o == null ? void 0 : o.userProvidedText) || ""), C = Sn(R, 2), j = C[0], U = C[1], W = k.useState([]), Q = Sn(W, 2), q = Q[0], Z = Q[1], oe = k.useState(null), le = Sn(oe, 2), pe = le[0], ce = le[1], we = k.useState(!0), We = Sn(we, 2), ct = We[0], ft = We[1], qt = k.useState(""), Ee = Sn(qt, 2), V = Ee[0], ge = Ee[1], ye = function(Le) {
    ce(Le);
  }, $e = function() {
    Z([]), T(!1), ce(null);
  }, tt = function(Le, nt) {
    var Xt = Le.currentTarget.getAttribute("data-value"), Qt = Le.currentTarget.id;
    z(!0), _(!0), U(Xt), b && (!o || o && Xt !== o.selectionValue) && b({
      userProvidedText: Xt,
      selectionValue: Xt,
      selectionId: Qt
    }), $e(), nt && nt(Le);
  };
  function Wn() {
    var De = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Le = g.Children.map(n, function(nt) {
      var Xt, Qt = nt.props, Zo = Qt.children, zE = Qt.onClick, HE = Jg(Qt, tj), eh = (Xt = nt.props.id) !== null && Xt !== void 0 ? Xt : oA();
      return /* @__PURE__ */ g.cloneElement(nt, Qg(Qg({}, HE), {}, {
        children: Zo,
        "data-value": Zo,
        onClick: function(UE) {
          return tt(UE, zE);
        },
        id: eh,
        onFocus: function() {
          return ye(eh);
        }
      }));
    });
    return De.length > 0 && (Le = Le.filter(function(nt) {
      return nt.props.children.toLowerCase().includes(De.toLowerCase());
    })), Le;
  }
  var H = function() {
    Z(Wn(j)), ft(!0), ge(""), T(!0);
  }, re = function() {
    A ? $e() : H();
  }, Se = /* @__PURE__ */ g.createElement(Xo, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: A ? WP : UP,
    iconAs: Dn,
    size: "sm",
    variant: "secondary",
    alt: A ? h.formatMessage(qg.iconButtonClosed) : h.formatMessage(qg.iconButtonOpened),
    onClick: re
  }), Te = function() {
    G(!0);
  }, He = function() {
    if (p) {
      ft(!1), ge(v);
      return;
    }
    if (l && !M) {
      ft(!1), ge(u);
      return;
    }
    if (M && c && !S) {
      ft(!1), ge(d);
      return;
    }
    ft(!0), ge("");
  };
  k.useImperativeHandle(t, function() {
    return {
      // expose updateErrorStateAndErrorMessage so consumers can trigger validation
      // when changing the value of the control externally
      updateErrorStateAndErrorMessage: He
    };
  });
  var Gn = function() {
    G(!1), $e(), He();
  }, En = function(Le) {
    if (L) {
      if (Le.key === "Escape") {
        Le.preventDefault(), m && m.current.focus(), $e();
        return;
      }
      Le.key === "Tab" && Gn();
    }
  }, ai = function(Le) {
    y.current && !y.current.contains(Le.target) && L && Gn();
  };
  k.useEffect(function() {
    return document.addEventListener("keydown", En), document.addEventListener("click", ai, !0), function() {
      document.removeEventListener("click", ai, !0), document.removeEventListener("keydown", En);
    };
  }), k.useEffect(function() {
    var De;
    U(o && (De = o.userProvidedText) !== null && De !== void 0 ? De : ""), z(!!o && !!o.userProvidedText), _(!!o && !!o.selectionValue);
  }, [o]);
  var la = function() {
    H();
  }, ua = function(Le) {
    var nt = Le.target.value;
    if (!nt.length) {
      U(""), z(!1), _(!1), Z([]), $e(), b && b({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    z(!0);
    var Xt = Wn(nt);
    Z(Xt);
    var Qt = Xt.find(function(Zo) {
      return Zo.props.children.toLowerCase() === nt.toLowerCase();
    });
    if (!Qt) {
      _(!1), U(nt), b && b({
        userProvidedText: nt,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    _(!0), U(Qt.props.children), b && b({
      userProvidedText: Qt.props.children,
      selectionValue: Qt.props.children,
      selectionId: Qt.props.id
    });
  }, oi = Yt(), ca = oi.getControlProps, Pr = ca(w);
  return /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: y,
    onFocus: Te
  }, /* @__PURE__ */ g.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, "".concat(q.length, " options found")), /* @__PURE__ */ g.createElement(ia, {
    controlId: Pr.id,
    isInvalid: !ct
  }, /* @__PURE__ */ g.createElement(aa, Cp({
    ref: m,
    "aria-expanded": (q.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: j,
    "aria-invalid": V,
    "aria-activedescendant": pe,
    onChange: ua,
    onClick: la,
    trailingElement: Se,
    "data-testid": "autosuggest-textbox-input"
  }, Pr)), x && ct && /* @__PURE__ */ g.createElement(gr, {
    type: "default"
  }, x), !ct && /* @__PURE__ */ g.createElement(gr, {
    type: "invalid",
    "feedback-for": Pr.name
  }, V)), /* @__PURE__ */ g.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, s ? /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ g.createElement(Au, {
    animation: "border",
    variant: "dark",
    screenReaderText: a,
    "data-testid": "autosuggest-loading-spinner"
  })) : q.length > 0 && q));
});
Nm.defaultProps = {
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
Nm.propTypes = {
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
  valueRequiredErrorMessageText: pc(f.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: f.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: pc(f.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: f.bool,
  /** Informs user of other errors. */
  customErrorMessageText: pc(f.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: f.string,
  /** Selected list item is read-only. */
  readOnly: f.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: f.node,
  /** Specifies the screen reader text */
  screenReaderText: f.string
};
function Co(e) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e);
}
var cj = ["as", "children", "defaultSelected", "iconAfter", "iconBefore"];
function ey(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ty(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(n), !0).forEach(function(r) {
      fj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ey(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fj(e, t, n) {
  return t = pj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function pj(e) {
  var t = dj(e, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function dj(e, t) {
  if (Co(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mj(e, t) {
  if (e == null) return {};
  var n = hj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function jm(e) {
  var t = e.as, n = e.children;
  e.defaultSelected;
  var r = e.iconAfter, i = e.iconBefore, a = mj(e, cj), o = K(a.className, "pgn__menu-item");
  return /* @__PURE__ */ g.createElement(t, ty(ty({}, a), {}, {
    className: o
  }), /* @__PURE__ */ g.createElement(g.Fragment, null, i && /* @__PURE__ */ g.createElement(Dn, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ g.createElement("span", {
    className: "pgn__menu-item-text"
  }, n), /* @__PURE__ */ g.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ g.createElement(Dn, {
    className: "btn-icon-after",
    src: r
  })));
}
jm.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: f.bool,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Specifies the content of the ``MenuItem`` */
  children: f.node,
  /** Specifies the base element */
  as: f.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: f.oneOfType([f.element, f.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: f.oneOfType([f.element, f.elementType])
};
jm.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
var vj = ["children", "className", "onClick"];
function Pp() {
  return Pp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pp.apply(this, arguments);
}
function gj(e, t) {
  if (e == null) return {};
  var n = yj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Rm(e) {
  var t = e.children, n = e.className, r = e.onClick, i = gj(e, vj);
  return /* @__PURE__ */ g.createElement(jm, Pp({
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: r,
    className: K(n, "dropdown-item")
  }, i), t);
}
Rm.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
Rm.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: f.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: f.func
};
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
function ny(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ry(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(n), !0).forEach(function(r) {
      bj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ny(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bj(e, t, n) {
  return t = xj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xj(e) {
  var t = wj(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function wj(e, t) {
  if (Po(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Po(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ej = function(t) {
  return t;
}, aE = /* @__PURE__ */ g.createContext({
  getCheckboxControlProps: Ej,
  hasCheckboxSetProvider: !1
}), oE = function() {
  return k.useContext(aE);
};
function Dm(e) {
  var t = e.children, n = e.name, r = e.onBlur, i = e.onFocus, a = e.onChange, o = e.value, s = e.defaultValue, l = !s && Array.isArray(o), u = function(p) {
    return ry(ry({}, p), {}, {
      name: n,
      /* istanbul ignore next */
      onBlur: p.onBlur ? Hr(r, p.onBlur) : r,
      /* istanbul ignore next */
      onFocus: p.onFocus ? Hr(i, p.onFocus) : i,
      /* istanbul ignore next */
      onChange: p.onChange ? Hr(a, p.onChange) : a,
      checked: l ? o.includes(p.value) : void 0,
      defaultChecked: l ? void 0 : s && s.includes(p.value)
    });
  }, c = {
    name: n,
    value: o,
    defaultValue: s,
    getCheckboxControlProps: u,
    onBlur: r,
    onFocus: i,
    onChange: a,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ g.createElement(aE.Provider, {
    value: c
  }, t);
}
Dm.propTypes = {
  children: f.node.isRequired,
  name: f.string,
  onBlur: f.func,
  onFocus: f.func,
  onChange: f.func,
  value: f.arrayOf(f.string),
  defaultValue: f.arrayOf(f.string)
};
Dm.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
function _o(e) {
  "@babel/helpers - typeof";
  return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _o(e);
}
var Oj = ["isIndeterminate"], Sj = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid", "controlAs", "floatLabelLeft"];
function Tl() {
  return Tl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tl.apply(this, arguments);
}
function iy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iy(Object(n), !0).forEach(function(r) {
      kj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kj(e, t, n) {
  return t = Cj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cj(e) {
  var t = Pj(e, "string");
  return _o(t) == "symbol" ? t : t + "";
}
function Pj(e, t) {
  if (_o(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sE(e, t) {
  if (e == null) return {};
  var n = _j(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function _j(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Fm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = sE(e, Oj), i = oE(), a = i.getCheckboxControlProps, o = i.hasCheckboxSetProvider, s = g.useRef(), l = t || s, u = Yt(), c = u.getControlProps, d = c(ki(ki({}, r), {}, {
    className: K("pgn__form-checkbox-input", r.className)
  }));
  return o && (d = a(d)), g.useEffect(function() {
    l.current && (l.current.indeterminate = n);
  }, [l, n]), /* @__PURE__ */ g.createElement("input", Tl({
    type: "checkbox"
  }, d, {
    ref: l
  }));
});
Fm.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
Fm.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var Tu = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.controlClassName, a = e.labelClassName, o = e.description, s = e.isInvalid, l = e.isValid, u = e.controlAs, c = e.floatLabelLeft, d = sE(e, Sj), p = oE(), v = p.hasCheckboxSetProvider, b = Yt(), x = b.hasFormGroupProvider, w = b.useSetIsControlGroupEffect, h = b.getControlProps;
  w(!0);
  var m = x && !v, y = m ? ki(ki({}, h({})), {}, {
    role: "group"
  }) : {}, E = /* @__PURE__ */ g.createElement(u, ki(ki({}, d), {}, {
    className: i,
    ref: t
  }));
  return /* @__PURE__ */ g.createElement(ia, {
    controlId: d.id,
    isInvalid: s,
    isValid: l
  }, /* @__PURE__ */ g.createElement("div", Tl({
    className: K("pgn__form-checkbox", r, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": s,
      "pgn__form-control-disabled": d.disabled,
      "pgn__form-control-label-left": !!c
    })
  }, y), E, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement(Uo, {
    className: a
  }, n), o && /* @__PURE__ */ g.createElement(gr, {
    hasIcon: !1
  }, o))));
});
Tu.propTypes = {
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
Tu.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: Fm,
  floatLabelLeft: !1,
  disabled: !1
};
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
var Aj = ["isIndeterminate"], Tj = ["children", "className", "helperText"];
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
function ay(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(n), !0).forEach(function(r) {
      Ij(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ay(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ij(e, t, n) {
  return t = Nj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Nj(e) {
  var t = jj(e, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function jj(e, t) {
  if (Ao(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ao(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lE(e, t) {
  if (e == null) return {};
  var n = Rj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Rj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Mm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.isIndeterminate, r = lE(e, Aj), i = g.useRef(), a = t || i, o = Yt(), s = o.getControlProps, l = s(oy(oy({}, r), {}, {
    className: K("pgn__form-switch-input", r.className)
  }));
  return g.useEffect(function() {
    a.current && (a.current.indeterminate = n);
  }, [a, n]), /* @__PURE__ */ g.createElement("input", Il({
    type: "checkbox"
  }, l, {
    ref: a
  }));
});
Mm.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: f.bool,
  /** Specifies class name to append to the base element. */
  className: f.string
};
Mm.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
var Lm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.helperText, a = lE(e, Tj);
  return /* @__PURE__ */ g.createElement("div", {
    className: "d-inline-flex flex-column"
  }, /* @__PURE__ */ g.createElement(Tu, Il({
    className: K("pgn__form-switch", r)
  }, a, {
    role: "switch",
    ref: t,
    controlAs: Mm,
    isValid: null,
    isInvalid: null,
    description: null
  }), n), i && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__form-switch-helper-text"
  }, i));
});
Lm.propTypes = {
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
Lm.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
var Dj = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];
function _p() {
  return _p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _p.apply(this, arguments);
}
function Fj(e, t) {
  if (e == null) return {};
  var n = Mj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Iu(e) {
  var t = e.children, n = e.name, r = e.value, i = e.defaultValue, a = e.isInline, o = e.onChange, s = e.onFocus, l = e.onBlur, u = Fj(e, Dj), c = Yt(), d = c.getControlProps, p = c.useSetIsControlGroupEffect;
  p(!0);
  var v = d(u);
  return /* @__PURE__ */ g.createElement(Dm, {
    name: n,
    value: r,
    defaultValue: i,
    onFocus: s,
    onBlur: l,
    onChange: o
  }, /* @__PURE__ */ g.createElement(wu, _p({
    role: "group",
    isInline: a
  }, v), t));
}
Iu.propTypes = {
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
Iu.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
ae.Control = aa;
ae.Radio = sm;
ae.RadioSet = lm;
ae.Autosuggest = Nm;
ae.AutosuggestOption = Rm;
ae.Checkbox = Tu;
ae.CheckboxSet = Iu;
ae.Switch = Lm;
ae.SwitchSet = Iu;
ae.Label = Uo;
ae.Group = im;
ae.Text = xu;
var Lj = ["label", "onClick", "className"], Bj = {
  label: f.string.isRequired,
  onClick: f.func
}, $j = {
  label: "Close"
}, Nu = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = ve(e, Lj);
  return /* @__PURE__ */ g.createElement("button", ne({
    ref: t,
    type: "button",
    className: K("close", i),
    onClick: r
  }, a), /* @__PURE__ */ g.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ g.createElement("span", {
    className: "sr-only"
  }, n));
});
Nu.displayName = "CloseButton";
Nu.propTypes = Bj;
Nu.defaultProps = $j;
const ju = function(e) {
  return /* @__PURE__ */ g.forwardRef(function(t, n) {
    return /* @__PURE__ */ g.createElement("div", ne({}, t, {
      ref: n,
      className: K(t.className, e)
    }));
  });
};
var zj = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], uE = ju("h4");
uE.displayName = "DivStyledAsH4";
var Hj = ln("alert-heading", {
  Component: uE
}), Vj = ln("alert-link", {
  Component: Wd
}), Uj = {
  show: !0,
  transition: sa,
  closeLabel: "Close alert"
}, Un = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = gN(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, d = n.transition, p = ve(n, zj), v = Me(r, "alert"), b = xp(function(h) {
    u && u(!1, h);
  }), x = d === !0 ? sa : d, w = /* @__PURE__ */ g.createElement("div", ne({
    role: "alert"
  }, x ? void 0 : p, {
    ref: t,
    className: K(o, v, l && v + "-" + l, c && v + "-dismissible")
  }), c && /* @__PURE__ */ g.createElement(Nu, {
    onClick: b,
    label: a
  }), s);
  return x ? /* @__PURE__ */ g.createElement(x, ne({
    unmountOnExit: !0
  }, p, {
    ref: void 0,
    in: i
  }), w) : i ? w : null;
});
Un.displayName = "Alert";
Un.defaultProps = Uj;
Un.Link = Vj;
Un.Heading = Hj;
var cE = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(k);
  })(typeof self < "u" ? self : WE, function(n) {
    return function(r) {
      function i(o) {
        if (a[o]) return a[o].exports;
        var s = a[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return r[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
      }
      var a = {};
      return i.m = r, i.c = a, i.d = function(o, s, l) {
        i.o(o, s) || Object.defineProperty(o, s, {
          configurable: !1,
          enumerable: !0,
          get: l
        });
      }, i.n = function(o) {
        var s = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return i.d(s, "a", s), s;
      }, i.o = function(o, s) {
        return Object.prototype.hasOwnProperty.call(o, s);
      }, i.p = "", i(i.s = 7);
    }([function(r, i, a) {
      function o(F, M) {
        return d(F) || c(F, M) || l(F, M) || s();
      }
      function s() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(F, M) {
        if (F) {
          if (typeof F == "string") return u(F, M);
          var z = Object.prototype.toString.call(F).slice(8, -1);
          return z === "Object" && F.constructor && (z = F.constructor.name), z === "Map" || z === "Set" ? Array.from(F) : z === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z) ? u(F, M) : void 0;
        }
      }
      function u(F, M) {
        (M == null || M > F.length) && (M = F.length);
        for (var z = 0, N = new Array(M); z < M; z++) N[z] = F[z];
        return N;
      }
      function c(F, M) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(F)) {
          var z = [], N = !0, P = !1, S = void 0;
          try {
            for (var _, R = F[Symbol.iterator](); !(N = (_ = R.next()).done) && (z.push(_.value), !M || z.length !== M); N = !0) ;
          } catch (C) {
            P = !0, S = C;
          } finally {
            try {
              N || R.return == null || R.return();
            } finally {
              if (P) throw S;
            }
          }
          return z;
        }
      }
      function d(F) {
        if (Array.isArray(F)) return F;
      }
      var p = a(1), v = a.n(p), b = a(8), x = a.n(b), w = a(2), h = a(10), m = a.n(h), y = a(3), E = a(6), O = function(F) {
        return F.query || Object(y.a)(F);
      }, A = function(F) {
        if (!F) return null;
        var M = Object.keys(F);
        return M.length === 0 ? null : M.reduce(function(z, N) {
          return z[Object(w.a)(N)] = F[N], z;
        }, {});
      }, T = function() {
        var F = v.a.useRef(!1);
        return v.a.useEffect(function() {
          F.current = !0;
        }, []), F.current;
      }, I = function(F) {
        var M = v.a.useContext(E.a), z = function() {
          return A(F) || A(M);
        }, N = v.a.useState(z), P = o(N, 2), S = P[0], _ = P[1];
        return v.a.useEffect(function() {
          var R = z();
          m()(S, R) || _(R);
        }, [F, M]), S;
      }, D = function(F) {
        var M = function() {
          return O(F);
        }, z = v.a.useState(M), N = o(z, 2), P = N[0], S = N[1];
        return v.a.useEffect(function() {
          var _ = M();
          P !== _ && S(_);
        }, [F]), P;
      }, L = function(F, M) {
        var z = function() {
          return x()(F, M || {}, !!M);
        }, N = v.a.useState(z), P = o(N, 2), S = P[0], _ = P[1], R = T();
        return v.a.useEffect(function() {
          return R && _(z()), function() {
            S.dispose();
          };
        }, [F, M]), S;
      }, G = function(F) {
        var M = v.a.useState(F.matches), z = o(M, 2), N = z[0], P = z[1];
        return v.a.useEffect(function() {
          var S = function() {
            P(F.matches);
          };
          return F.addListener(S), S(), function() {
            F.removeListener(S);
          };
        }, [F]), N;
      }, Y = function(F, M, z) {
        var N = I(M), P = D(F);
        if (!P) throw new Error("Invalid or missing MediaQuery!");
        var S = L(P, N), _ = G(S), R = T();
        return v.a.useEffect(function() {
          R && z && z(_);
        }, [_]), _;
      };
      i.a = Y;
    }, function(r, i) {
      r.exports = n;
    }, function(r, i, a) {
      function o(d) {
        return "-" + d.toLowerCase();
      }
      function s(d) {
        if (c.hasOwnProperty(d)) return c[d];
        var p = d.replace(l, o);
        return c[d] = u.test(p) ? "-" + p : p;
      }
      var l = /[A-Z]/g, u = /^ms-/, c = {};
      i.a = s;
    }, function(r, i, a) {
      var o = a(2), s = a(11), l = function(p) {
        return "not ".concat(p);
      }, u = function(p, v) {
        var b = Object(o.a)(p);
        return typeof v == "number" && (v = "".concat(v, "px")), v === !0 ? b : v === !1 ? l(b) : "(".concat(b, ": ").concat(v, ")");
      }, c = function(p) {
        return p.join(" and ");
      }, d = function(p) {
        var v = [];
        return Object.keys(s.a.all).forEach(function(b) {
          var x = p[b];
          x != null && v.push(u(b, x));
        }), c(v);
      };
      i.a = d;
    }, function(r, i, a) {
      r.exports = a(13);
    }, function(r, i, a) {
      r.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(r, i, a) {
      var o = a(1), s = a.n(o), l = s.a.createContext();
      i.a = l;
    }, function(r, i, a) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      });
      var o = a(0), s = a(17), l = a(3), u = a(6);
      a.d(i, "default", function() {
        return s.a;
      }), a.d(i, "useMediaQuery", function() {
        return o.a;
      }), a.d(i, "toQuery", function() {
        return l.a;
      }), a.d(i, "Context", function() {
        return u.a;
      });
    }, function(r, i, a) {
      function o(c, d, p) {
        function v(y) {
          m && m.addListener(y);
        }
        function b(y) {
          m && m.removeListener(y);
        }
        function x(y) {
          h.matches = y.matches, h.media = y.media;
        }
        function w() {
          m && m.removeListener(x);
        }
        var h = this;
        if (u && !p) {
          var m = u.call(window, c);
          this.matches = m.matches, this.media = m.media, m.addListener(x);
        } else this.matches = l(c, d), this.media = c;
        this.addListener = v, this.removeListener = b, this.dispose = w;
      }
      function s(c, d, p) {
        return new o(c, d, p);
      }
      var l = a(9).match, u = typeof window < "u" ? window.matchMedia : null;
      r.exports = s;
    }, function(r, i, a) {
      function o(w, h) {
        return s(w).some(function(m) {
          var y = m.inverse, E = m.type === "all" || h.type === m.type;
          if (E && y || !E && !y) return !1;
          var O = m.expressions.every(function(A) {
            var T = A.feature, I = A.modifier, D = A.value, L = h[T];
            if (!L) return !1;
            switch (T) {
              case "orientation":
              case "scan":
                return L.toLowerCase() === D.toLowerCase();
              case "width":
              case "height":
              case "device-width":
              case "device-height":
                D = c(D), L = c(L);
                break;
              case "resolution":
                D = u(D), L = u(L);
                break;
              case "aspect-ratio":
              case "device-aspect-ratio":
              case "device-pixel-ratio":
                D = l(D), L = l(L);
                break;
              case "grid":
              case "color":
              case "color-index":
              case "monochrome":
                D = parseInt(D, 10) || 1, L = parseInt(L, 10) || 0;
            }
            switch (I) {
              case "min":
                return L >= D;
              case "max":
                return L <= D;
              default:
                return L === D;
            }
          });
          return O && !y || !O && y;
        });
      }
      function s(w) {
        return w.split(",").map(function(h) {
          h = h.trim();
          var m = h.match(d), y = m[1], E = m[2], O = m[3] || "", A = {};
          return A.inverse = !!y && y.toLowerCase() === "not", A.type = E ? E.toLowerCase() : "all", O = O.match(/\([^\)]+\)/g) || [], A.expressions = O.map(function(T) {
            var I = T.match(p), D = I[1].toLowerCase().match(v);
            return {
              modifier: D[1],
              feature: D[2],
              value: I[2]
            };
          }), A;
        });
      }
      function l(w) {
        var h, m = Number(w);
        return m || (h = w.match(/^(\d+)\s*\/\s*(\d+)$/), m = h[1] / h[2]), m;
      }
      function u(w) {
        var h = parseFloat(w);
        switch (String(w).match(x)[1]) {
          case "dpcm":
            return h / 2.54;
          case "dppx":
            return 96 * h;
          default:
            return h;
        }
      }
      function c(w) {
        var h = parseFloat(w);
        switch (String(w).match(b)[1]) {
          case "em":
          case "rem":
            return 16 * h;
          case "cm":
            return 96 * h / 2.54;
          case "mm":
            return 96 * h / 2.54 / 10;
          case "in":
            return 96 * h;
          case "pt":
            return 72 * h;
          case "pc":
            return 72 * h / 12;
          default:
            return h;
        }
      }
      i.match = o, i.parse = s;
      var d = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, p = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, v = /^(?:(min|max)-)?(.+)/, b = /(em|rem|px|cm|mm|in|pt|pc)?$/, x = /(dpi|dpcm|dppx)?$/;
    }, function(r, i, a) {
      function o(s, l) {
        if (s === l) return !0;
        if (!s || !l) return !1;
        var u = Object.keys(s), c = Object.keys(l), d = u.length;
        if (c.length !== d) return !1;
        for (var p = 0; p < d; p++) {
          var v = u[p];
          if (s[v] !== l[v] || !Object.prototype.hasOwnProperty.call(l, v)) return !1;
        }
        return !0;
      }
      r.exports = o;
    }, function(r, i, a) {
      function o(w, h) {
        var m = Object.keys(w);
        if (Object.getOwnPropertySymbols) {
          var y = Object.getOwnPropertySymbols(w);
          h && (y = y.filter(function(E) {
            return Object.getOwnPropertyDescriptor(w, E).enumerable;
          })), m.push.apply(m, y);
        }
        return m;
      }
      function s(w) {
        for (var h = 1; h < arguments.length; h++) {
          var m = arguments[h] != null ? arguments[h] : {};
          h % 2 ? o(Object(m), !0).forEach(function(y) {
            l(w, y, m[y]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(m)) : o(Object(m)).forEach(function(y) {
            Object.defineProperty(w, y, Object.getOwnPropertyDescriptor(m, y));
          });
        }
        return w;
      }
      function l(w, h, m) {
        return h in w ? Object.defineProperty(w, h, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : w[h] = m, w;
      }
      var u = a(12), c = a.n(u), d = c.a.oneOfType([c.a.string, c.a.number]), p = {
        orientation: c.a.oneOf(["portrait", "landscape"]),
        scan: c.a.oneOf(["progressive", "interlace"]),
        aspectRatio: c.a.string,
        deviceAspectRatio: c.a.string,
        height: d,
        deviceHeight: d,
        width: d,
        deviceWidth: d,
        color: c.a.bool,
        colorIndex: c.a.bool,
        monochrome: c.a.bool,
        resolution: d
      }, v = s({
        minAspectRatio: c.a.string,
        maxAspectRatio: c.a.string,
        minDeviceAspectRatio: c.a.string,
        maxDeviceAspectRatio: c.a.string,
        minHeight: d,
        maxHeight: d,
        minDeviceHeight: d,
        maxDeviceHeight: d,
        minWidth: d,
        maxWidth: d,
        minDeviceWidth: d,
        maxDeviceWidth: d,
        minColor: c.a.number,
        maxColor: c.a.number,
        minColorIndex: c.a.number,
        maxColorIndex: c.a.number,
        minMonochrome: c.a.number,
        maxMonochrome: c.a.number,
        minResolution: d,
        maxResolution: d
      }, p), b = {
        all: c.a.bool,
        grid: c.a.bool,
        aural: c.a.bool,
        braille: c.a.bool,
        handheld: c.a.bool,
        print: c.a.bool,
        projection: c.a.bool,
        screen: c.a.bool,
        tty: c.a.bool,
        tv: c.a.bool,
        embossed: c.a.bool
      }, x = s(s({}, b), v);
      p.type = Object.keys(b), i.a = {
        all: x,
        types: b,
        matchers: p,
        features: v
      };
    }, function(r, i, a) {
      var o = a(4);
      r.exports = a(14)(o.isElement, !0);
    }, function(r, i, a) {
      (function() {
        function o(V) {
          return typeof V == "string" || typeof V == "function" || V === I || V === M || V === L || V === D || V === N || V === P || typeof V == "object" && V !== null && (V.$$typeof === _ || V.$$typeof === S || V.$$typeof === G || V.$$typeof === Y || V.$$typeof === z || V.$$typeof === C || V.$$typeof === j || V.$$typeof === U || V.$$typeof === R);
        }
        function s(V) {
          if (typeof V == "object" && V !== null) {
            var ge = V.$$typeof;
            switch (ge) {
              case A:
                var ye = V.type;
                switch (ye) {
                  case F:
                  case M:
                  case I:
                  case L:
                  case D:
                  case N:
                    return ye;
                  default:
                    var $e = ye && ye.$$typeof;
                    switch ($e) {
                      case Y:
                      case z:
                      case _:
                      case S:
                      case G:
                        return $e;
                      default:
                        return ge;
                    }
                }
              case T:
                return ge;
            }
          }
        }
        function l(V) {
          return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(V) || s(V) === F;
        }
        function u(V) {
          return s(V) === M;
        }
        function c(V) {
          return s(V) === Y;
        }
        function d(V) {
          return s(V) === G;
        }
        function p(V) {
          return typeof V == "object" && V !== null && V.$$typeof === A;
        }
        function v(V) {
          return s(V) === z;
        }
        function b(V) {
          return s(V) === I;
        }
        function x(V) {
          return s(V) === _;
        }
        function w(V) {
          return s(V) === S;
        }
        function h(V) {
          return s(V) === T;
        }
        function m(V) {
          return s(V) === L;
        }
        function y(V) {
          return s(V) === D;
        }
        function E(V) {
          return s(V) === N;
        }
        var O = typeof Symbol == "function" && Symbol.for, A = O ? Symbol.for("react.element") : 60103, T = O ? Symbol.for("react.portal") : 60106, I = O ? Symbol.for("react.fragment") : 60107, D = O ? Symbol.for("react.strict_mode") : 60108, L = O ? Symbol.for("react.profiler") : 60114, G = O ? Symbol.for("react.provider") : 60109, Y = O ? Symbol.for("react.context") : 60110, F = O ? Symbol.for("react.async_mode") : 60111, M = O ? Symbol.for("react.concurrent_mode") : 60111, z = O ? Symbol.for("react.forward_ref") : 60112, N = O ? Symbol.for("react.suspense") : 60113, P = O ? Symbol.for("react.suspense_list") : 60120, S = O ? Symbol.for("react.memo") : 60115, _ = O ? Symbol.for("react.lazy") : 60116, R = O ? Symbol.for("react.block") : 60121, C = O ? Symbol.for("react.fundamental") : 60117, j = O ? Symbol.for("react.responder") : 60118, U = O ? Symbol.for("react.scope") : 60119, W = F, Q = M, q = Y, Z = G, oe = A, le = z, pe = I, ce = _, we = S, We = T, ct = L, ft = D, qt = N, Ee = !1;
        i.AsyncMode = W, i.ConcurrentMode = Q, i.ContextConsumer = q, i.ContextProvider = Z, i.Element = oe, i.ForwardRef = le, i.Fragment = pe, i.Lazy = ce, i.Memo = we, i.Portal = We, i.Profiler = ct, i.StrictMode = ft, i.Suspense = qt, i.isAsyncMode = l, i.isConcurrentMode = u, i.isContextConsumer = c, i.isContextProvider = d, i.isElement = p, i.isForwardRef = v, i.isFragment = b, i.isLazy = x, i.isMemo = w, i.isPortal = h, i.isProfiler = m, i.isStrictMode = y, i.isSuspense = E, i.isValidElementType = o, i.typeOf = s;
      })();
    }, function(r, i, a) {
      function o() {
        return null;
      }
      var s = a(4), l = a(15), u = a(5), c = a(16), d = Function.call.bind(Object.prototype.hasOwnProperty), p = function() {
      };
      p = function(v) {
        var b = "Warning: " + v;
        typeof console < "u" && console.error(b);
        try {
          throw new Error(b);
        } catch {
        }
      }, r.exports = function(v, b) {
        function x(C) {
          var j = C && (P && C[P] || C[S]);
          if (typeof j == "function") return j;
        }
        function w(C, j) {
          return C === j ? C !== 0 || 1 / C == 1 / j : C !== C && j !== j;
        }
        function h(C) {
          this.message = C, this.stack = "";
        }
        function m(C) {
          function j(q, Z, oe, le, pe, ce, we) {
            if (le = le || _, ce = ce || oe, we !== u) {
              if (b) {
                var We = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                throw We.name = "Invariant Violation", We;
              }
              if (typeof console < "u") {
                var ct = le + ":" + oe;
                !U[ct] && W < 3 && (p("You are manually calling a React.PropTypes validation function for the `" + ce + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), U[ct] = !0, W++);
              }
            }
            return Z[oe] == null ? q ? new h(Z[oe] === null ? "The " + pe + " `" + ce + "` is marked as required in `" + le + "`, but its value is `null`." : "The " + pe + " `" + ce + "` is marked as required in `" + le + "`, but its value is `undefined`.") : null : C(Z, oe, le, pe, ce);
          }
          var U = {}, W = 0, Q = j.bind(null, !1);
          return Q.isRequired = j.bind(null, !0), Q;
        }
        function y(C) {
          function j(U, W, Q, q, Z, oe) {
            var le = U[W];
            return F(le) !== C ? new h("Invalid " + q + " `" + Z + "` of type `" + M(le) + "` supplied to `" + Q + "`, expected `" + C + "`.") : null;
          }
          return m(j);
        }
        function E(C) {
          function j(U, W, Q, q, Z) {
            if (typeof C != "function") return new h("Property `" + Z + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
            var oe = U[W];
            if (!Array.isArray(oe))
              return new h("Invalid " + q + " `" + Z + "` of type `" + F(oe) + "` supplied to `" + Q + "`, expected an array.");
            for (var le = 0; le < oe.length; le++) {
              var pe = C(oe, le, Q, q, Z + "[" + le + "]", u);
              if (pe instanceof Error) return pe;
            }
            return null;
          }
          return m(j);
        }
        function O(C) {
          function j(U, W, Q, q, Z) {
            if (!(U[W] instanceof C)) {
              var oe = C.name || _;
              return new h("Invalid " + q + " `" + Z + "` of type `" + N(U[W]) + "` supplied to `" + Q + "`, expected instance of `" + oe + "`.");
            }
            return null;
          }
          return m(j);
        }
        function A(C) {
          function j(U, W, Q, q, Z) {
            for (var oe = U[W], le = 0; le < C.length; le++) if (w(oe, C[le])) return null;
            var pe = JSON.stringify(C, function(ce, we) {
              return M(we) === "symbol" ? String(we) : we;
            });
            return new h("Invalid " + q + " `" + Z + "` of value `" + String(oe) + "` supplied to `" + Q + "`, expected one of " + pe + ".");
          }
          return Array.isArray(C) ? m(j) : (p(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), o);
        }
        function T(C) {
          function j(U, W, Q, q, Z) {
            if (typeof C != "function") return new h("Property `" + Z + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
            var oe = U[W], le = F(oe);
            if (le !== "object") return new h("Invalid " + q + " `" + Z + "` of type `" + le + "` supplied to `" + Q + "`, expected an object.");
            for (var pe in oe) if (d(oe, pe)) {
              var ce = C(oe, pe, Q, q, Z + "." + pe, u);
              if (ce instanceof Error) return ce;
            }
            return null;
          }
          return m(j);
        }
        function I(C) {
          function j(Q, q, Z, oe, le) {
            for (var pe = 0; pe < C.length; pe++)
              if ((0, C[pe])(Q, q, Z, oe, le, u) == null) return null;
            return new h("Invalid " + oe + " `" + le + "` supplied to `" + Z + "`.");
          }
          if (!Array.isArray(C)) return p("Invalid argument supplied to oneOfType, expected an instance of array."), o;
          for (var U = 0; U < C.length; U++) {
            var W = C[U];
            if (typeof W != "function") return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(W) + " at index " + U + "."), o;
          }
          return m(j);
        }
        function D(C) {
          function j(U, W, Q, q, Z) {
            var oe = U[W], le = F(oe);
            if (le !== "object") return new h("Invalid " + q + " `" + Z + "` of type `" + le + "` supplied to `" + Q + "`, expected `object`.");
            for (var pe in C) {
              var ce = C[pe];
              if (ce) {
                var we = ce(oe, pe, Q, q, Z + "." + pe, u);
                if (we) return we;
              }
            }
            return null;
          }
          return m(j);
        }
        function L(C) {
          function j(U, W, Q, q, Z) {
            var oe = U[W], le = F(oe);
            if (le !== "object") return new h("Invalid " + q + " `" + Z + "` of type `" + le + "` supplied to `" + Q + "`, expected `object`.");
            var pe = l({}, U[W], C);
            for (var ce in pe) {
              var we = C[ce];
              if (!we) return new h("Invalid " + q + " `" + Z + "` key `" + ce + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(U[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  "));
              var We = we(oe, ce, Q, q, Z + "." + ce, u);
              if (We) return We;
            }
            return null;
          }
          return m(j);
        }
        function G(C) {
          switch (typeof C) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !C;
            case "object":
              if (Array.isArray(C)) return C.every(G);
              if (C === null || v(C)) return !0;
              var j = x(C);
              if (!j) return !1;
              var U, W = j.call(C);
              if (j !== C.entries) {
                for (; !(U = W.next()).done; ) if (!G(U.value)) return !1;
              } else for (; !(U = W.next()).done; ) {
                var Q = U.value;
                if (Q && !G(Q[1])) return !1;
              }
              return !0;
            default:
              return !1;
          }
        }
        function Y(C, j) {
          return C === "symbol" || !!j && (j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol);
        }
        function F(C) {
          var j = typeof C;
          return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : Y(j, C) ? "symbol" : j;
        }
        function M(C) {
          if (C == null) return "" + C;
          var j = F(C);
          if (j === "object") {
            if (C instanceof Date) return "date";
            if (C instanceof RegExp) return "regexp";
          }
          return j;
        }
        function z(C) {
          var j = M(C);
          switch (j) {
            case "array":
            case "object":
              return "an " + j;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + j;
            default:
              return j;
          }
        }
        function N(C) {
          return C.constructor && C.constructor.name ? C.constructor.name : _;
        }
        var P = typeof Symbol == "function" && Symbol.iterator, S = "@@iterator", _ = "<<anonymous>>", R = {
          array: y("array"),
          bool: y("boolean"),
          func: y("function"),
          number: y("number"),
          object: y("object"),
          string: y("string"),
          symbol: y("symbol"),
          any: function() {
            return m(o);
          }(),
          arrayOf: E,
          element: function() {
            function C(j, U, W, Q, q) {
              var Z = j[U];
              return v(Z) ? null : new h("Invalid " + Q + " `" + q + "` of type `" + F(Z) + "` supplied to `" + W + "`, expected a single ReactElement.");
            }
            return m(C);
          }(),
          elementType: function() {
            function C(j, U, W, Q, q) {
              var Z = j[U];
              return s.isValidElementType(Z) ? null : new h("Invalid " + Q + " `" + q + "` of type `" + F(Z) + "` supplied to `" + W + "`, expected a single ReactElement type.");
            }
            return m(C);
          }(),
          instanceOf: O,
          node: function() {
            function C(j, U, W, Q, q) {
              return G(j[U]) ? null : new h("Invalid " + Q + " `" + q + "` supplied to `" + W + "`, expected a ReactNode.");
            }
            return m(C);
          }(),
          objectOf: T,
          oneOf: A,
          oneOfType: I,
          shape: D,
          exact: L
        };
        return h.prototype = Error.prototype, R.checkPropTypes = c, R.resetWarningCache = c.resetWarningCache, R.PropTypes = R, R;
      };
    }, function(r, i, a) {
      function o(c) {
        if (c == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(c);
      }
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      var s = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
      r.exports = function() {
        try {
          if (!Object.assign) return !1;
          var c = new String("abc");
          if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5") return !1;
          for (var d = {}, p = 0; p < 10; p++) d["_" + String.fromCharCode(p)] = p;
          if (Object.getOwnPropertyNames(d).map(function(b) {
            return d[b];
          }).join("") !== "0123456789") return !1;
          var v = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(b) {
            v[b] = b;
          }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }() ? Object.assign : function(c, d) {
        for (var p, v, b = o(c), x = 1; x < arguments.length; x++) {
          p = Object(arguments[x]);
          for (var w in p) l.call(p, w) && (b[w] = p[w]);
          if (s) {
            v = s(p);
            for (var h = 0; h < v.length; h++) u.call(p, v[h]) && (b[v[h]] = p[v[h]]);
          }
        }
        return b;
      };
    }, function(r, i, a) {
      function o(d, p, v, b, x) {
        for (var w in d) if (c(d, w)) {
          var h;
          try {
            if (typeof d[w] != "function") {
              var m = Error((b || "React class") + ": " + v + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[w] + "`.");
              throw m.name = "Invariant Violation", m;
            }
            h = d[w](p, w, b, v, null, l);
          } catch (E) {
            h = E;
          }
          if (!h || h instanceof Error || s((b || "React class") + ": type specification of " + v + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), h instanceof Error && !(h.message in u)) {
            u[h.message] = !0;
            var y = x ? x() : "";
            s("Failed " + v + " type: " + h.message + (y ?? ""));
          }
        }
      }
      var s = function() {
      }, l = a(5), u = {}, c = Function.call.bind(Object.prototype.hasOwnProperty);
      s = function(d) {
        var p = "Warning: " + d;
        typeof console < "u" && console.error(p);
        try {
          throw new Error(p);
        } catch {
        }
      }, o.resetWarningCache = function() {
        u = {};
      }, r.exports = o;
    }, function(r, i, a) {
      function o(c, d) {
        if (c == null) return {};
        var p, v, b = s(c, d);
        if (Object.getOwnPropertySymbols) {
          var x = Object.getOwnPropertySymbols(c);
          for (v = 0; v < x.length; v++) p = x[v], d.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(c, p) && (b[p] = c[p]);
        }
        return b;
      }
      function s(c, d) {
        if (c == null) return {};
        var p, v, b = {}, x = Object.keys(c);
        for (v = 0; v < x.length; v++) p = x[v], d.indexOf(p) >= 0 || (b[p] = c[p]);
        return b;
      }
      function l(c) {
        var d = c.children, p = c.device, v = c.onChange, b = o(c, ["children", "device", "onChange"]), x = Object(u.a)(b, p, v);
        return typeof d == "function" ? d(x) : x ? d : null;
      }
      i.a = l;
      var u = a(0);
    }]);
  });
})(cE);
var Wj = cE.exports;
const Gj = "576px", Kj = {
  sm: Gj
}, {
  sm: Yj
} = Kj, qj = {
  extraSmall: {
    maxWidth: parseFloat(Yj) || 575.98
  }
};
function To(e) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e);
}
var Xj = ["as", "isStacked", "children"];
function sy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ly(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sy(Object(n), !0).forEach(function(r) {
      Qj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qj(e, t, n) {
  return t = Zj(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Zj(e) {
  var t = Jj(e, "string");
  return To(t) == "symbol" ? t : t + "";
}
function Jj(e, t) {
  if (To(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (To(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eR(e, t) {
  if (e == null) return {};
  var n = tR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function tR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Io(e) {
  var t = e.as, n = e.isStacked, r = e.children, i = eR(e, Xj);
  return /* @__PURE__ */ g.createElement(t, ly(ly({}, i), {}, {
    className: K(i.className, {
      "pgn__action-row": !n,
      "pgn__action-row-stacked": n
    })
  }), r);
}
Io.propTypes = {
  /** Specifies the base element */
  as: f.elementType,
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Specifies the contents of the row */
  children: f.node,
  /** Specifies whether row should be displayed horizontally */
  isStacked: f.bool
};
Io.defaultProps = {
  as: "div",
  className: void 0,
  children: null,
  isStacked: !1
};
function nR() {
  return /* @__PURE__ */ g.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Io.Spacer = nR;
function No(e) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e);
}
var rR = ["children", "icon", "actions", "dismissible", "onClose", "closeLabel", "stacked"];
function uy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uy(Object(n), !0).forEach(function(r) {
      iR(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iR(e, t, n) {
  return t = aR(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function aR(e) {
  var t = oR(e, "string");
  return No(t) == "symbol" ? t : t + "";
}
function oR(e, t) {
  if (No(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (No(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ap() {
  return Ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ap.apply(this, arguments);
}
function sR(e, t) {
  return fR(e) || cR(e, t) || uR(e, t) || lR();
}
function lR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uR(e, t) {
  if (e) {
    if (typeof e == "string") return cy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cy(e, t);
  }
}
function cy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cR(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function fR(e) {
  if (Array.isArray(e)) return e;
}
function pR(e, t) {
  if (e == null) return {};
  var n = dR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function dR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Jr = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.icon, i = e.actions, a = e.dismissible, o = e.onClose, s = e.closeLabel, l = e.stacked, u = pR(e, rR), c = k.useState(l), d = sR(c, 2), p = d[0], v = d[1], b = Wj.useMediaQuery({
    maxWidth: qj.extraSmall.maxWidth
  }), x = "sm";
  k.useEffect(function() {
    v(b ? !0 : l);
  }, [b, l]);
  var w = k.useCallback(function(h) {
    var m = {
      size: x,
      key: h.props.children
    };
    return /* @__PURE__ */ g.cloneElement(h, m);
  }, []);
  return /* @__PURE__ */ g.createElement(Un, Ap({}, u, {
    className: K("alert-content", u.className),
    ref: t
  }), r && /* @__PURE__ */ g.createElement(Dn, {
    src: r,
    className: "alert-icon"
  }), /* @__PURE__ */ g.createElement("div", {
    className: K({
      "pgn__alert-message-wrapper": !p,
      "pgn__alert-message-wrapper-stacked": p
    })
  }, /* @__PURE__ */ g.createElement("div", {
    className: "alert-message-content"
  }, n), (a || (i == null ? void 0 : i.length) > 0) && /* @__PURE__ */ g.createElement(Io, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ g.createElement(Io.Spacer, null), a && /* @__PURE__ */ g.createElement(Fn, {
    size: x,
    variant: "tertiary",
    onClick: o
  }, s || /* @__PURE__ */ g.createElement(ao, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), i && i.map(w))));
}), fE = ju("h4");
fE.displayName = "DivStyledAsH4";
function Bm(e) {
  return /* @__PURE__ */ g.createElement(Un.Heading, e);
}
function $m(e) {
  return /* @__PURE__ */ g.createElement(Un.Link, e);
}
var pE = {
  /** Specifies the base element */
  as: f.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string
};
$m.propTypes = pE;
Bm.propTypes = pE;
$m.defaultProps = {
  as: "a",
  bsPrefix: "alert-link"
};
Bm.defaultProps = {
  as: fE,
  bsPrefix: "alert-heading"
};
Jr.propTypes = Nl(Nl({}, Un.propTypes), {}, {
  /** Specifies class name to append to the base element */
  className: f.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"]),
  /**
   * Animate the entering and exiting of the Alert. `true` will use the `<Fade>` transition,
   * more detailed customization is also provided.
   */
  transition: f.oneOfType([f.bool, f.shape({
    in: f.bool,
    appear: f.bool,
    children: f.node,
    onEnter: f.func,
    onEntered: f.func,
    onEntering: f.func,
    onExit: f.func,
    onExited: f.func,
    onExiting: f.func
  })]),
  /** Docstring for the children prop */
  children: f.node,
  /** Docstring for the icon prop... Icon that will be shown in the alert */
  icon: f.func,
  /** Whether the alert is shown. */
  show: f.bool,
  /** Whether the alert is dismissible. Defaults to true. */
  dismissible: f.bool,
  /** Optional callback function for when the alert it dismissed. */
  onClose: f.func,
  /** Optional list of action elements. May include, at most, 2 actions, or 1 if dismissible is true. */
  actions: f.arrayOf(f.element),
  /** Position of the dismiss and call-to-action buttons. Defaults to ``false``. */
  stacked: f.bool,
  /** Sets the text for alert close button, defaults to 'Dismiss'. */
  closeLabel: f.oneOfType([f.string, f.element])
});
Jr.defaultProps = Nl(Nl({}, Un.defaultProps), {}, {
  children: void 0,
  icon: void 0,
  actions: void 0,
  dismissible: !1,
  onClose: function() {
  },
  closeLabel: void 0,
  show: !0,
  stacked: !1
});
Jr.Heading = Bm;
Jr.Link = $m;
var dE = /* @__PURE__ */ g.createContext(null);
dE.displayName = "CardContext";
var mR = ["bsPrefix", "className", "variant", "as"], hR = {
  variant: null
}, zm = /* @__PURE__ */ g.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.variant, a = e.as, o = a === void 0 ? "img" : a, s = ve(e, mR), l = Me(n, "card-img");
    return /* @__PURE__ */ g.createElement(o, ne({
      ref: t,
      className: K(i ? l + "-" + i : l, r)
    }, s));
  }
);
zm.displayName = "CardImg";
zm.defaultProps = hR;
var vR = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"], gR = ju("h5"), yR = ju("h6"), mE = ln("card-body"), bR = ln("card-title", {
  Component: gR
}), xR = ln("card-subtitle", {
  Component: yR
}), wR = ln("card-link", {
  Component: "a"
}), ER = ln("card-text", {
  Component: "p"
}), OR = ln("card-header"), SR = ln("card-footer"), kR = ln("card-img-overlay"), CR = {
  body: !1
}, Mt = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.bg, a = e.text, o = e.border, s = e.body, l = e.children, u = e.as, c = u === void 0 ? "div" : u, d = ve(e, vR), p = Me(n, "card"), v = k.useMemo(function() {
    return {
      cardHeaderBsPrefix: p + "-header"
    };
  }, [p]);
  return /* @__PURE__ */ g.createElement(dE.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(c, ne({
    ref: t
  }, d, {
    className: K(r, p, i && "bg-" + i, a && "text-" + a, o && "border-" + o)
  }), s ? (
    // @ts-ignore
    /* @__PURE__ */ g.createElement(mE, null, l)
  ) : l));
});
Mt.displayName = "Card";
Mt.defaultProps = CR;
Mt.Img = zm;
Mt.Title = bR;
Mt.Subtitle = xR;
Mt.Body = mE;
Mt.Link = wR;
Mt.Text = ER;
Mt.Header = OR;
Mt.Footer = SR;
Mt.ImgOverlay = kR;
var ii = /* @__PURE__ */ k.createContext({});
function Hm(e) {
  var t = e.orientation, n = e.children, r = e.isLoading, i = e.variant;
  return /* @__PURE__ */ g.createElement(ii.Provider, {
    value: {
      orientation: t,
      isLoading: r,
      variant: i
    }
  }, n);
}
Hm.propTypes = {
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies content of the component. */
  children: f.node,
  /** Specifies `Card` style variant */
  variant: f.oneOf(["light", "dark", "muted"])
};
Hm.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const PR = g.createContext({}), hE = !0;
function _R({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = hE, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof s == "number" && (c["--animation-duration"] = `${s}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), a && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Qi({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const d = g.useContext(PR), p = { ...s };
  for (const [y, E] of Object.entries(s))
    typeof E > "u" && delete p[y];
  const v = {
    ...d,
    ...p,
    circle: a
  }, b = {
    ...o,
    ..._R(v)
  };
  let x = "react-loading-skeleton";
  n && (x += ` ${n}`);
  const w = (l = v.inline) !== null && l !== void 0 ? l : !1, h = [], m = Math.ceil(e);
  for (let y = 0; y < m; y++) {
    let E = b;
    if (m > e && y === m - 1) {
      const A = (u = E.width) !== null && u !== void 0 ? u : "100%", T = e % 1, I = typeof A == "number" ? A * T : `calc(${A} * ${T})`;
      E = { ...E, width: I };
    }
    const O = g.createElement("span", { className: x, style: E, key: y }, "‌");
    w ? h.push(O) : h.push(g.createElement(
      g.Fragment,
      { key: y },
      O,
      g.createElement("br", null)
    ));
  }
  return g.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = v.enableAnimation) !== null && c !== void 0 ? c : hE }, t ? h.map((y, E) => g.createElement(t, { key: E }, y)) : h);
}
var AR = 20, Vm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.actions, r = e.className, i = e.size, a = e.subtitle, o = e.title, s = e.skeletonHeight, l = e.skeletonWidth, u = k.useContext(ii), c = u.isLoading, d = k.useCallback(function(p) {
    if (/* @__PURE__ */ g.isValidElement(p)) {
      var v = p.props.children, b = {
        size: i,
        children: Array.isArray(v) ? v.map(d) : d(v)
      };
      return /* @__PURE__ */ g.cloneElement(p, b);
    }
    return p;
  }, [i]);
  return c ? /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__card-header", r)
  }, /* @__PURE__ */ g.createElement(Qi, {
    containerClassName: "pgn__card-header-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__card-header", r),
    ref: t
  }, /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-header-content"
  }, o && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-header-title-".concat(i)
  }, o), a && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(i)
  }, a)), n && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-header-actions"
  }, i !== "md" ? d(n) : n));
});
Vm.propTypes = {
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
Vm.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: AR,
  skeletonWidth: null
};
var TR = ["className"];
function Tp() {
  return Tp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tp.apply(this, arguments);
}
function IR(e, t) {
  if (e == null) return {};
  var n = NR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function NR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Um = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = IR(e, TR);
  return /* @__PURE__ */ g.createElement("div", Tp({
    className: K("pgn__card-divider", n),
    ref: t
  }, r));
});
Um.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string
};
Um.defaultProps = {
  className: void 0
};
var jR = 100, Wm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.title, a = e.actions, o = e.muted, s = e.skeletonHeight, l = e.skeletonWidth, u = k.useContext(ii), c = u.isLoading;
  return c ? /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__card-section", n, {
      "is-muted": o
    })
  }, /* @__PURE__ */ g.createElement(Qi, {
    containerClassName: "pgn__card-section-loader",
    height: s,
    width: l
  })) : /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__card-section", n, {
      "is-muted": o
    }),
    ref: t
  }, i && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-section-title"
  }, i), r, a && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-section-actions"
  }, a));
});
Wm.propTypes = {
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
Wm.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: jR,
  skeletonWidth: void 0
};
var RR = 18, Gm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.children, r = e.className, i = e.isStacked, a = e.textElement, o = e.skeletonHeight, s = e.skeletonWidth, l = e.orientation, u = k.useContext(ii), c = u.orientation, d = u.isLoading, p = l || c, v = "pgn__card-footer ".concat(p).concat(i ? "-stacked" : ""), b = "pgn__card-footer-text ".concat(p).concat(i ? "-stacked" : "");
  return d ? /* @__PURE__ */ g.createElement("div", {
    className: K(r, v)
  }, /* @__PURE__ */ g.createElement(Qi, {
    containerClassName: "pgn__card-footer-loader",
    height: o,
    width: s
  })) : /* @__PURE__ */ g.createElement("div", {
    className: K(r, v),
    ref: t
  }, a && /* @__PURE__ */ g.createElement("div", {
    className: b
  }, a), n);
});
Gm.propTypes = {
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
Gm.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: RR,
  skeletonWidth: void 0
};
const vE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==";
function fy(e, t) {
  return LR(e) || MR(e, t) || FR(e, t) || DR();
}
function DR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FR(e, t) {
  if (e) {
    if (typeof e == "string") return py(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return py(e, t);
  }
}
function py(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function MR(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function LR(e) {
  if (Array.isArray(e)) return e;
}
var BR = 140, $R = 41, Km = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.src, r = e.fallbackSrc, i = e.srcAlt, a = e.logoSrc, o = e.fallbackLogoSrc, s = e.logoAlt, l = e.skeletonHeight, u = e.skeletonWidth, c = e.logoSkeleton, d = e.logoSkeletonHeight, p = e.logoSkeletonWidth, v = e.className, b = e.imageLoadingType, x = k.useContext(ii), w = x.orientation, h = x.isLoading, m = k.useState(!1), y = fy(m, 2), E = y[0], O = y[1], A = k.useState(!1), T = fy(A, 2), I = T[0], D = T[1], L = "pgn__card-wrapper-image-cap ".concat(w);
  if (h)
    return /* @__PURE__ */ g.createElement("div", {
      className: K(L, v),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ g.createElement(Qi, {
      containerClassName: "pgn__card-image-cap-loader",
      height: w === "horizontal" ? "100%" : l,
      width: u
    }), c && /* @__PURE__ */ g.createElement(Qi, {
      containerClassName: "pgn__card-logo-cap",
      height: d,
      width: p
    }));
  var G = function(F, M, z) {
    var N = F.currentTarget;
    if (!M || N.src.endsWith(M)) {
      z === "imageCap" ? N.src = vE : D(!1);
      return;
    }
    N.src = M;
  };
  return /* @__PURE__ */ g.createElement("div", {
    className: K(v, L),
    ref: t
  }, !!n && /* @__PURE__ */ g.createElement("img", {
    className: K("pgn__card-image-cap", {
      show: E
    }),
    src: n,
    onError: function(F) {
      return G(F, r, "imageCap");
    },
    onLoad: function() {
      return O(!0);
    },
    alt: i,
    loading: b
  }), !!a && /* @__PURE__ */ g.createElement("img", {
    className: K("pgn__card-logo-cap", {
      show: I
    }),
    src: a,
    onError: function(F) {
      return G(F, o, "logoCap");
    },
    onLoad: function() {
      return D(!0);
    },
    alt: s,
    loading: b
  }));
});
Km.propTypes = {
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
  imageLoadingType: f.oneOf(["eager", "lazy"])
};
Km.defaultProps = {
  src: void 0,
  fallbackSrc: vE,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: BR,
  logoSkeleton: !1,
  logoSkeletonHeight: $R,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
var zR = ["className", "children"];
function Ip() {
  return Ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ip.apply(this, arguments);
}
function HR(e, t) {
  if (e == null) return {};
  var n = VR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function VR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ym = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = HR(e, zR);
  return /* @__PURE__ */ g.createElement("div", Ip({
    className: K("pgn__card-body", n),
    ref: t
  }, i), r);
});
Ym.propTypes = {
  /** Specifies the content of the component. */
  children: f.node,
  /** The class to append to the base element. */
  className: f.string
};
Ym.defaultProps = {
  children: void 0,
  className: void 0
};
var UR = ["className", "children", "variant", "icon", "title", "actions"];
function Np() {
  return Np = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Np.apply(this, arguments);
}
function WR(e, t) {
  if (e == null) return {};
  var n = GR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function GR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var qm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = e.variant, a = e.icon, o = e.title, s = e.actions, l = WR(e, UR), u = k.useContext(ii), c = u.isLoading;
  return c ? /* @__PURE__ */ g.createElement("div", {
    className: K("pgn__card-status", n),
    "data-testid": "card-status-skeleton",
    ref: t
  }, /* @__PURE__ */ g.createElement(Qi, null)) : /* @__PURE__ */ g.createElement("div", Np({
    className: K("pgn__card-status", "pgn__card-status__".concat(i), n),
    ref: t
  }, l), /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-status__content"
  }, a && /* @__PURE__ */ g.createElement(Dn, {
    className: "pgn__card-status__content-icon",
    src: a
  }), /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-status__message-content"
  }, o && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-status__heading"
  }, o), r)), !!s && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__card-status__actions"
  }, s));
});
qm.propTypes = {
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
qm.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
function jo(e) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e);
}
var KR = ["orientation", "isLoading", "className", "isClickable", "muted", "variant"];
function dy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function my(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dy(Object(n), !0).forEach(function(r) {
      gE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jp() {
  return jp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jp.apply(this, arguments);
}
function gE(e, t, n) {
  return t = YR(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function YR(e) {
  var t = qR(e, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function qR(e, t) {
  if (jo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (jo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XR(e, t) {
  if (e == null) return {};
  var n = QR(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function QR(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ZR = ["light", "dark", "muted"], Xm = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.orientation, r = e.isLoading, i = e.className, a = e.isClickable, o = e.muted, s = e.variant, l = XR(e, KR), u = o ? "muted" : s;
  return /* @__PURE__ */ g.createElement(Hm, {
    orientation: n,
    isLoading: r,
    variant: u
  }, /* @__PURE__ */ g.createElement(Mt, jp({}, l, {
    className: K(i, "pgn__card", gE({
      horizontal: n === "horizontal",
      clickable: a
    }, "pgn__card-".concat(u), u)),
    ref: t,
    tabIndex: a ? 0 : -1
  })));
});
Xm.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies which orientation to use. */
  orientation: f.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: f.bool,
  /** Specifies loading state. */
  isLoading: f.bool,
  /** Specifies `Card` style variant. */
  variant: f.oneOf(ZR),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: f.bool
};
Xm.defaultProps = my(my({}, Mt.defaultProps), {}, {
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
});
var Qe = Kd(Xm, "Card", {
  muted: {
    deprType: rr.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
Qe.Status = qm;
Qe.Header = Vm;
Qe.Divider = Um;
Qe.Section = Wm;
Qe.Footer = Gm;
Qe.ImageCap = Km;
Qe.Context = ii;
Qe.Body = Ym;
const JR = /* @__PURE__ */ new Map([
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
function Zi(e, t, n) {
  const r = eD(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && hy(r, "path", a), hy(r, "relativePath", a), r;
}
function eD(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = JR.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function hy(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const tD = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function nD(e) {
  return Rt(this, void 0, void 0, function* () {
    return jl(e) && rD(e.dataTransfer) ? sD(e.dataTransfer, e.type) : iD(e) ? aD(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? oD(e) : [];
  });
}
function rD(e) {
  return jl(e);
}
function iD(e) {
  return jl(e) && jl(e.target);
}
function jl(e) {
  return typeof e == "object" && e !== null;
}
function aD(e) {
  return Rp(e.target.files).map((t) => Zi(t));
}
function oD(e) {
  return Rt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Zi(n));
  });
}
function sD(e, t) {
  return Rt(this, void 0, void 0, function* () {
    if (e.items) {
      const n = Rp(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(lD));
      return vy(yE(r));
    }
    return vy(Rp(e.files).map((n) => Zi(n)));
  });
}
function vy(e) {
  return e.filter((t) => tD.indexOf(t.name) === -1);
}
function Rp(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function lD(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return gy(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? bE(t) : gy(e, t);
}
function yE(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? yE(n) : [n]
  ], []);
}
function gy(e, t) {
  return Rt(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Zi(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Zi(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function uD(e) {
  return Rt(this, void 0, void 0, function* () {
    return e.isDirectory ? bE(e) : cD(e);
  });
}
function bE(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => Rt(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(uD));
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
function cD(e) {
  return Rt(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Zi(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var Oc = function(e, t) {
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
function yy(e) {
  return dD(e) || pD(e) || wE(e) || fD();
}
function fD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function dD(e) {
  if (Array.isArray(e)) return Dp(e);
}
function by(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(n), !0).forEach(function(r) {
      xE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : by(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ro(e, t) {
  return vD(e) || hD(e, t) || wE(e, t) || mD();
}
function mD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wE(e, t) {
  if (e) {
    if (typeof e == "string") return Dp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dp(e, t);
  }
}
function Dp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hD(e, t) {
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
function vD(e) {
  if (Array.isArray(e)) return e;
}
var gD = typeof Oc == "function" ? Oc : Oc.default, EE = "file-invalid-type", OE = "file-too-large", SE = "file-too-small", yD = "too-many-files", Sc = {
  FileInvalidType: EE,
  FileTooLarge: OE,
  FileTooSmall: SE
}, bD = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: EE,
    message: "File type must be ".concat(r)
  };
}, wy = function(t) {
  return {
    code: OE,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Ey = function(t) {
  return {
    code: SE,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, xD = {
  code: yD,
  message: "Too many files"
};
function kE(e, t) {
  var n = e.type === "application/x-moz-file" || gD(e, t);
  return [n, n ? null : bD(t)];
}
function CE(e, t, n) {
  if (Rr(e.size))
    if (Rr(t) && Rr(n)) {
      if (e.size > n) return [!1, wy(n)];
      if (e.size < t) return [!1, Ey(t)];
    } else {
      if (Rr(t) && e.size < t) return [!1, Ey(t)];
      if (Rr(n) && e.size > n) return [!1, wy(n)];
    }
  return [!0, null];
}
function Rr(e) {
  return e != null;
}
function wD(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = kE(l, n), c = Ro(u, 1), d = c[0], p = CE(l, r, i), v = Ro(p, 1), b = v[0], x = s ? s(l) : null;
    return d && b && !x;
  });
}
function Rl(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Ss(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Oy(e) {
  e.preventDefault();
}
function ED(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function OD(e) {
  return e.indexOf("Edge/") !== -1;
}
function SD() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return ED(e) || OD(e);
}
function cn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      a[o - 1] = arguments[o];
    return t.some(function(s) {
      return !Rl(r) && s && s.apply(void 0, [r].concat(a)), Rl(r);
    });
  };
}
function kD() {
  return "showOpenFilePicker" in window;
}
function CD(e) {
  if (Rr(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Ro(n, 2), i = r[0], a = r[1], o = !0;
      return PE(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(_E)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Ro(r, 2), a = i[0], o = i[1];
      return xy(xy({}, n), {}, xE({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function PD(e) {
  if (Rr(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Ro(n, 2), i = r[0], a = r[1];
      return [].concat(yy(t), [i], yy(a));
    }, []).filter(function(t) {
      return PE(t) || _E(t);
    }).join(",");
}
function _D(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function AD(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function PE(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function _E(e) {
  return /^.*\.[\w]+$/.test(e);
}
var TD = ["children"], ID = ["open"], ND = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], jD = ["refKey", "onChange", "onClick"];
function RD(e) {
  return MD(e) || FD(e) || AE(e) || DD();
}
function DD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function MD(e) {
  if (Array.isArray(e)) return Fp(e);
}
function kc(e, t) {
  return $D(e) || BD(e, t) || AE(e, t) || LD();
}
function LD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AE(e, t) {
  if (e) {
    if (typeof e == "string") return Fp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fp(e, t);
  }
}
function Fp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function BD(e, t) {
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
function $D(e) {
  if (Array.isArray(e)) return e;
}
function Sy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sy(Object(n), !0).forEach(function(r) {
      Mp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Dl(e, t) {
  if (e == null) return {};
  var n = zD(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zD(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Qm = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var n = e.children, r = Dl(e, TD), i = IE(r), a = i.open, o = Dl(i, ID);
  return k.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ g.createElement(k.Fragment, null, n(Ie(Ie({}, o), {}, {
    open: a
  })));
});
Qm.displayName = "Dropzone";
var TE = {
  disabled: !1,
  getFilesFromEvent: nD,
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
Qm.defaultProps = TE;
Qm.propTypes = {
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
  children: f.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: f.objectOf(f.arrayOf(f.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: f.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: f.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: f.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: f.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: f.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: f.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: f.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: f.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: f.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: f.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: f.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: f.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: f.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: f.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: f.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: f.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: f.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: f.func,
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
  onDrop: f.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: f.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: f.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: f.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: f.func
};
var Lp = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function IE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Ie(Ie({}, TE), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, d = t.onDragOver, p = t.onDrop, v = t.onDropAccepted, b = t.onDropRejected, x = t.onFileDialogCancel, w = t.onFileDialogOpen, h = t.useFsAccessApi, m = t.autoFocus, y = t.preventDropOnDocument, E = t.noClick, O = t.noKeyboard, A = t.noDrag, T = t.noDragEventsBubbling, I = t.onError, D = t.validator, L = k.useMemo(function() {
    return PD(n);
  }, [n]), G = k.useMemo(function() {
    return CD(n);
  }, [n]), Y = k.useMemo(function() {
    return typeof w == "function" ? w : ky;
  }, [w]), F = k.useMemo(function() {
    return typeof x == "function" ? x : ky;
  }, [x]), M = k.useRef(null), z = k.useRef(null), N = k.useReducer(HD, Lp), P = kc(N, 2), S = P[0], _ = P[1], R = S.isFocused, C = S.isFileDialogActive, j = k.useRef(typeof window < "u" && window.isSecureContext && h && kD()), U = function() {
    !j.current && C && setTimeout(function() {
      if (z.current) {
        var re = z.current.files;
        re.length || (_({
          type: "closeDialog"
        }), F());
      }
    }, 300);
  };
  k.useEffect(function() {
    return window.addEventListener("focus", U, !1), function() {
      window.removeEventListener("focus", U, !1);
    };
  }, [z, C, F, j]);
  var W = k.useRef([]), Q = function(re) {
    M.current && M.current.contains(re.target) || (re.preventDefault(), W.current = []);
  };
  k.useEffect(function() {
    return y && (document.addEventListener("dragover", Oy, !1), document.addEventListener("drop", Q, !1)), function() {
      y && (document.removeEventListener("dragover", Oy), document.removeEventListener("drop", Q));
    };
  }, [M, y]), k.useEffect(function() {
    return !r && m && M.current && M.current.focus(), function() {
    };
  }, [M, m, r]);
  var q = k.useCallback(function(H) {
    I ? I(H) : console.error(H);
  }, [I]), Z = k.useCallback(function(H) {
    H.preventDefault(), H.persist(), ye(H), W.current = [].concat(RD(W.current), [H.target]), Ss(H) && Promise.resolve(i(H)).then(function(re) {
      if (!(Rl(H) && !T)) {
        var Se = re.length, Te = Se > 0 && wD({
          files: re,
          accept: L,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: D
        }), He = Se > 0 && !Te;
        _({
          isDragAccept: Te,
          isDragReject: He,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(H);
      }
    }).catch(function(re) {
      return q(re);
    });
  }, [i, u, q, T, L, o, a, s, l, D]), oe = k.useCallback(function(H) {
    H.preventDefault(), H.persist(), ye(H);
    var re = Ss(H);
    if (re && H.dataTransfer)
      try {
        H.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return re && d && d(H), !1;
  }, [d, T]), le = k.useCallback(function(H) {
    H.preventDefault(), H.persist(), ye(H);
    var re = W.current.filter(function(Te) {
      return M.current && M.current.contains(Te);
    }), Se = re.indexOf(H.target);
    Se !== -1 && re.splice(Se, 1), W.current = re, !(re.length > 0) && (_({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Ss(H) && c && c(H));
  }, [M, c, T]), pe = k.useCallback(function(H, re) {
    var Se = [], Te = [];
    H.forEach(function(He) {
      var Gn = kE(He, L), En = kc(Gn, 2), ai = En[0], la = En[1], ua = CE(He, o, a), oi = kc(ua, 2), ca = oi[0], Pr = oi[1], De = D ? D(He) : null;
      if (ai && ca && !De)
        Se.push(He);
      else {
        var Le = [la, Pr];
        De && (Le = Le.concat(De)), Te.push({
          file: He,
          errors: Le.filter(function(nt) {
            return nt;
          })
        });
      }
    }), (!s && Se.length > 1 || s && l >= 1 && Se.length > l) && (Se.forEach(function(He) {
      Te.push({
        file: He,
        errors: [xD]
      });
    }), Se.splice(0)), _({
      acceptedFiles: Se,
      fileRejections: Te,
      isDragReject: Te.length > 0,
      type: "setFiles"
    }), p && p(Se, Te, re), Te.length > 0 && b && b(Te, re), Se.length > 0 && v && v(Se, re);
  }, [_, s, L, o, a, l, p, v, b, D]), ce = k.useCallback(function(H) {
    H.preventDefault(), H.persist(), ye(H), W.current = [], Ss(H) && Promise.resolve(i(H)).then(function(re) {
      Rl(H) && !T || pe(re, H);
    }).catch(function(re) {
      return q(re);
    }), _({
      type: "reset"
    });
  }, [i, pe, q, T]), we = k.useCallback(function() {
    if (j.current) {
      _({
        type: "openDialog"
      }), Y();
      var H = {
        multiple: s,
        types: G
      };
      window.showOpenFilePicker(H).then(function(re) {
        return i(re);
      }).then(function(re) {
        pe(re, null), _({
          type: "closeDialog"
        });
      }).catch(function(re) {
        _D(re) ? (F(re), _({
          type: "closeDialog"
        })) : AD(re) ? (j.current = !1, z.current ? (z.current.value = null, z.current.click()) : q(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : q(re);
      });
      return;
    }
    z.current && (_({
      type: "openDialog"
    }), Y(), z.current.value = null, z.current.click());
  }, [_, Y, F, h, pe, q, G, s]), We = k.useCallback(function(H) {
    !M.current || !M.current.isEqualNode(H.target) || (H.key === " " || H.key === "Enter" || H.keyCode === 32 || H.keyCode === 13) && (H.preventDefault(), we());
  }, [M, we]), ct = k.useCallback(function() {
    _({
      type: "focus"
    });
  }, []), ft = k.useCallback(function() {
    _({
      type: "blur"
    });
  }, []), qt = k.useCallback(function() {
    E || (SD() ? setTimeout(we, 0) : we());
  }, [E, we]), Ee = function(re) {
    return r ? null : re;
  }, V = function(re) {
    return O ? null : Ee(re);
  }, ge = function(re) {
    return A ? null : Ee(re);
  }, ye = function(re) {
    T && re.stopPropagation();
  }, $e = k.useMemo(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = H.refKey, Se = re === void 0 ? "ref" : re, Te = H.role, He = H.onKeyDown, Gn = H.onFocus, En = H.onBlur, ai = H.onClick, la = H.onDragEnter, ua = H.onDragOver, oi = H.onDragLeave, ca = H.onDrop, Pr = Dl(H, ND);
      return Ie(Ie(Mp({
        onKeyDown: V(cn(He, We)),
        onFocus: V(cn(Gn, ct)),
        onBlur: V(cn(En, ft)),
        onClick: Ee(cn(ai, qt)),
        onDragEnter: ge(cn(la, Z)),
        onDragOver: ge(cn(ua, oe)),
        onDragLeave: ge(cn(oi, le)),
        onDrop: ge(cn(ca, ce)),
        role: typeof Te == "string" && Te !== "" ? Te : "presentation"
      }, Se, M), !r && !O ? {
        tabIndex: 0
      } : {}), Pr);
    };
  }, [M, We, ct, ft, qt, Z, oe, le, ce, O, A, r]), tt = k.useCallback(function(H) {
    H.stopPropagation();
  }, []), Wn = k.useMemo(function() {
    return function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = H.refKey, Se = re === void 0 ? "ref" : re, Te = H.onChange, He = H.onClick, Gn = Dl(H, jD), En = Mp({
        accept: L,
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
        onChange: Ee(cn(Te, ce)),
        onClick: Ee(cn(He, tt)),
        tabIndex: -1
      }, Se, z);
      return Ie(Ie({}, En), Gn);
    };
  }, [z, n, s, ce, r]);
  return Ie(Ie({}, S), {}, {
    isFocused: R && !r,
    getRootProps: $e,
    getInputProps: Wn,
    rootRef: M,
    inputRef: z,
    open: Ee(we)
  });
}
function HD(e, t) {
  switch (t.type) {
    case "focus":
      return Ie(Ie({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Ie(Ie({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Ie(Ie({}, Lp), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Ie(Ie({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Ie(Ie({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Ie(Ie({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Ie({}, Lp);
    default:
      return e;
  }
}
function ky() {
}
var VD = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function Qo(e, t) {
  var n = UD(e);
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
function UD(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), i = VD.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var WD = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function GD(e) {
  return Rt(this, void 0, void 0, function() {
    return na(this, function(t) {
      return Fl(e) && KD(e.dataTransfer) ? [2, QD(e.dataTransfer, e.type)] : YD(e) ? [2, qD(e)] : Array.isArray(e) && e.every(function(n) {
        return "getFile" in n && typeof n.getFile == "function";
      }) ? [2, XD(e)] : [2, []];
    });
  });
}
function KD(e) {
  return Fl(e);
}
function YD(e) {
  return Fl(e) && Fl(e.target);
}
function Fl(e) {
  return typeof e == "object" && e !== null;
}
function qD(e) {
  return Bp(e.target.files).map(function(t) {
    return Qo(t);
  });
}
function XD(e) {
  return Rt(this, void 0, void 0, function() {
    var t;
    return na(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, Promise.all(e.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return t = n.sent(), [2, t.map(function(r) {
            return Qo(r);
          })];
      }
    });
  });
}
function QD(e, t) {
  return Rt(this, void 0, void 0, function() {
    var n, r;
    return na(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (n = Bp(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(ZD))]) : [3, 2];
        case 1:
          return r = i.sent(), [2, Cy(NE(r))];
        case 2:
          return [2, Cy(Bp(e.files).map(function(a) {
            return Qo(a);
          }))];
      }
    });
  });
}
function Cy(e) {
  return e.filter(function(t) {
    return WD.indexOf(t.name) === -1;
  });
}
function Bp(e) {
  if (e === null)
    return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function ZD(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Py(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? jE(t) : Py(e);
}
function NE(e) {
  return e.reduce(function(t, n) {
    return Ze(Ze([], cv(t), !1), cv(Array.isArray(n) ? NE(n) : [n]), !1);
  }, []);
}
function Py(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var n = Qo(t);
  return Promise.resolve(n);
}
function JD(e) {
  return Rt(this, void 0, void 0, function() {
    return na(this, function(t) {
      return [2, e.isDirectory ? jE(e) : eF(e)];
    });
  });
}
function jE(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var i = [];
    function a() {
      var o = this;
      t.readEntries(function(s) {
        return Rt(o, void 0, void 0, function() {
          var l, u, c;
          return na(this, function(d) {
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
                c = Promise.all(s.map(JD)), i.push(c), a(), d.label = 6;
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
function eF(e) {
  return Rt(this, void 0, void 0, function() {
    return na(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(i) {
          var a = Qo(i, e.fullPath);
          n(a);
        }, function(i) {
          r(i);
        });
      })];
    });
  });
}
function RE(e) {
  var t = e.message;
  return /* @__PURE__ */ g.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, t);
}
RE.propTypes = {
  message: f.oneOfType([f.string, f.element]).isRequired
};
var tF = ["errorMsgs"];
function $p() {
  return $p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $p.apply(this, arguments);
}
function nF(e, t) {
  if (e == null) return {};
  var n = rF(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rF(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function DE(e) {
  var t = e.errorMsgs, n = nF(e, tF);
  return /* @__PURE__ */ g.createElement(Jr, $p({
    variant: "danger",
    icon: VP,
    className: "pgn__dropzone-generic-alert"
  }, n), t.map(function(r) {
    return /* @__PURE__ */ g.createElement("span", {
      key: r
    }, r);
  }));
}
DE.propTypes = {
  errorMsgs: f.arrayOf(f.string).isRequired
};
function iF(e, t) {
  var n = 0;
  return g.Children.map(e, function(r) {
    return /* @__PURE__ */ g.isValidElement(r) ? t(r, n++) : r;
  });
}
var aF = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], oF = ["isChild"], sF = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], _y = 1e3, lF = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function uF(e, t, n) {
  var r = (e - t) / (n - t) * 100;
  return Math.round(r * _y) / _y;
}
function Ay(e, t) {
  var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, c = e.className, d = e.style, p = e.variant, v = e.bsPrefix, b = ve(e, aF);
  return /* @__PURE__ */ g.createElement("div", ne({
    ref: t
  }, b, {
    role: "progressbar",
    className: K(c, v + "-bar", (n = {}, n["bg-" + p] = p, n[v + "-bar-animated"] = u, n[v + "-bar-striped"] = u || l, n)),
    style: ne({
      width: uF(i, r, a) + "%"
    }, d),
    "aria-valuenow": i,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), s ? /* @__PURE__ */ g.createElement("span", {
    className: "sr-only"
  }, o) : o);
}
var Ri = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.isChild, r = ve(e, oF);
  if (r.bsPrefix = Me(r.bsPrefix, "progress"), n)
    return Ay(r, t);
  var i = r.min, a = r.now, o = r.max, s = r.label, l = r.srOnly, u = r.striped, c = r.animated, d = r.bsPrefix, p = r.variant, v = r.className, b = r.children, x = ve(r, sF);
  return /* @__PURE__ */ g.createElement("div", ne({
    ref: t
  }, x, {
    className: K(v, d)
  }), b ? iF(b, function(w) {
    return /* @__PURE__ */ k.cloneElement(w, {
      isChild: !0
    });
  }) : Ay({
    min: i,
    now: a,
    max: o,
    label: s,
    srOnly: l,
    striped: u,
    animated: c,
    bsPrefix: d,
    variant: p
  }, t));
});
Ri.displayName = "ProgressBar";
Ri.defaultProps = lF;
var cF = ["className", "variant", "children", "arrowPlacement"];
function zp() {
  return zp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zp.apply(this, arguments);
}
function fF(e, t) {
  if (e == null) return {};
  var n = pF(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pF(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ml = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.variant, i = e.children, a = e.arrowPlacement, o = fF(e, cF);
  return /* @__PURE__ */ g.createElement("span", zp({
    className: K(n, "pgn__annotation", "pgn__annotation-".concat(r, "-").concat(a)),
    ref: t
  }, o), i);
});
Ml.defaultProps = {
  className: void 0,
  variant: "success",
  arrowPlacement: "bottom"
};
Ml.propTypes = {
  /** Specifies contents of the component. */
  children: f.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: f.string,
  /** Specifies variant to use. */
  variant: f.oneOf(["error", "success", "warning", "light", "dark"]),
  /** Specifies arrow position. */
  arrowPlacement: f.oneOf(["top", "right", "bottom", "left"])
};
const Ty = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
  if (!e.current || !e.current.style)
    return !1;
  const { children: i } = e.current;
  let a = 0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o].getBoundingClientRect();
    i[o].className.includes(r) ? a += s.width / 2 : a += n ? 0 : s.width;
  }
  return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, Iy = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` };
var dF = ["now", "label", "variant", "threshold", "thresholdLabel", "thresholdVariant", "progressHint", "thresholdHint"];
function Hp() {
  return Hp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hp.apply(this, arguments);
}
function mF(e, t) {
  if (e == null) return {};
  var n = hF(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hF(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ny = "pgn__annotation", jy = 50, FE = "warning", ME = "dark", Ll = ["dark", "warning", "success", "error"];
function LE(e) {
  return /* @__PURE__ */ g.createElement(Ri, e);
}
function Zm(e) {
  var t = e.now, n = e.label, r = e.variant, i = e.threshold, a = e.thresholdLabel, o = e.thresholdVariant, s = e.progressHint, l = e.thresholdHint, u = mF(e, dF), c = g.useRef(), d = g.useRef(), p = (i || 0) - (t || 0), v = t < jy, b = i < jy, x = Ll.includes(r) ? r : FE, w = Ll.includes(o) ? o : ME, h = window.getComputedStyle(document.body).getPropertyValue("direction"), m = k.useCallback(function() {
    Ty(c, h, v, Ny), Ty(d, h, b, Ny);
  }, [h, v, b]);
  k.useEffect(function() {
    m();
    var E = new ResizeObserver(function() {
      m();
    }), O = c.current;
    return E.observe(O), function() {
      return O && E.unobserve(O);
    };
  }, [m]);
  var y = function(O) {
    return /* @__PURE__ */ g.createElement("span", {
      className: "pgn__progress-hint",
      "data-testid": "progress-hint"
    }, O);
  };
  return /* @__PURE__ */ g.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!n && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__progress-info",
    style: Iy(t, h),
    ref: c
  }, !v && y(s), /* @__PURE__ */ g.createElement(Ml, {
    variant: x
  }, n), v && y(s)), /* @__PURE__ */ g.createElement(Ri, null, /* @__PURE__ */ g.createElement(Ri, Hp({}, u, {
    now: t,
    className: K("pgn__progress-bar--".concat(x), p > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  })), !!i && /* @__PURE__ */ g.createElement(Ri, {
    now: p,
    className: "pgn__progress-bar--".concat(w),
    srOnly: !0
  })), !!i && !!a && /* @__PURE__ */ g.createElement("div", {
    className: "pgn__progress-info",
    style: Iy(i, h),
    ref: d
  }, !b && y(l), /* @__PURE__ */ g.createElement(Ml, {
    arrowPlacement: "top",
    variant: w
  }, a), b && y(l)));
}
Zm.propTypes = {
  /** Current value of progress. */
  now: f.number,
  /** Show label that represents visual percentage. */
  label: f.node,
  /** The `ProgressBar` style variant to use. */
  variant: f.oneOf(Ll),
  /** Specifies an additional `className` to add to the base element. */
  className: f.string,
  /** Threshold current value. */
  threshold: f.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: f.node,
  /** Variant for threshold value. */
  thresholdVariant: f.oneOf(Ll),
  /** Text near the progress annotation. */
  progressHint: f.node,
  /** Text near the threshold annotation. */
  thresholdHint: f.node
};
Zm.defaultProps = {
  now: void 0,
  label: void 0,
  variant: FE,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: ME,
  progressHint: void 0,
  thresholdHint: void 0
};
LE.Annotated = Zm;
function BE(e) {
  var t = e.percent, n = e.variant, r = e.name, i = e.onCancel;
  return n === "spinner" ? /* @__PURE__ */ g.createElement(Au, {
    animation: "border",
    "aria-live": "polite",
    screenReaderText: "Uploading ".concat(r, ", ").concat(t, "% done."),
    "data-testid": "upload-spinner"
  }) : /* @__PURE__ */ g.createElement("div", {
    className: "w-50"
  }, /* @__PURE__ */ g.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ g.createElement(ao, {
    id: "pgn.Dropzone.UploadProgress.uploadLabel",
    defaultMessage: "Uploading {filename}.",
    description: "A text that is shown near a progress bar during file upload in Dropzone component.",
    values: {
      filename: r
    }
  })), /* @__PURE__ */ g.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100"
  }, /* @__PURE__ */ g.createElement(LE, {
    now: t,
    label: "".concat(t, "%"),
    variant: "success",
    className: "flex-grow-1",
    "data-testid": "upload-progress-bar"
  }), /* @__PURE__ */ g.createElement(Fn, {
    variant: "tertiary",
    className: "ml-3",
    onClick: i
  }, /* @__PURE__ */ g.createElement(ao, {
    id: "pgn.Dropzone.UploadProgress.cancelLabel",
    defaultMessage: "Cancel",
    description: "Label of a cancel button that is shown during file upload in Dropzone component."
  }))));
}
BE.propTypes = {
  variant: f.oneOf(["spinner", "bar"]).isRequired,
  percent: f.number.isRequired,
  name: f.string.isRequired,
  onCancel: f.func.isRequired
};
const vF = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, $E = (e) => Object.entries(e).reduce((t, n) => {
  const [r, i] = n;
  let a;
  return i.length > 0 ? a = `${i.join(", ").replaceAll(".", "").toUpperCase()}, ` : r.endsWith("/*") ? a = `${r.slice(0, -2)}, ` : a = `${r.split("/").pop().toUpperCase()}, `, t + a;
}, "").slice(0, -2), Ci = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, pn = {
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
function Bl(e) {
  var t = e.accept, n = e.minSize, r = e.maxSize, i = ra(), a = function() {
    var s, l;
    if (t) {
      var u = $E(t), c = u.lastIndexOf(",");
      s = i.formatMessage(pn.fileTypeRestriction, {
        count: c === -1 ? 1 : 2,
        firstPart: c === -1 ? u : u.slice(0, c),
        secondPart: c !== -1 && u.slice(c + 1)
      });
    }
    return n && r && Number.isFinite(r) ? l = i.formatMessage(pn.fileSizeBetween, {
      sizeMin: Ci(n),
      sizeMax: Ci(r)
    }) : r && Number.isFinite(r) ? l = i.formatMessage(pn.fileSizeMax, {
      sizeMax: Ci(r)
    }) : n && (l = i.formatMessage(pn.fileSizeMin, {
      sizeMin: Ci(n)
    })), s && l ? "".concat(s, " (").concat(l, ")") : s || l;
  };
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", {
    className: "pgn__dropzone__upload-icon-wrapper"
  }, /* @__PURE__ */ g.createElement(Dn, {
    src: HP,
    className: "pgn__dropzone__upload-icon"
  })), /* @__PURE__ */ g.createElement("p", null, /* @__PURE__ */ g.createElement(ao, {
    id: "pgn.Dropzone.DefaultContent.label",
    description: "A text that appears as a label for input of Dropzone component.",
    defaultMessage: "Drag and drop your file here or click to upload."
  })), [t, n, r].some(function(o) {
    return o;
  }) && /* @__PURE__ */ g.createElement("p", {
    className: "pgn__dropzone__upload-restriction-message"
  }, a()));
}
Bl.propTypes = {
  accept: f.objectOf(f.arrayOf(f.string)),
  maxSize: f.number,
  minSize: f.number
};
Bl.defaultProps = {
  accept: void 0,
  maxSize: void 0,
  minSize: void 0
};
function $l(e) {
  "@babel/helpers - typeof";
  return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $l(e);
}
var gF = ["className", "accept", "minSize", "maxSize", "validator", "errorMessages", "progressVariant", "inputComponent", "onProcessUpload", "onUploadProgress", "onUploadCancel"];
function Vp() {
  return Vp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vp.apply(this, arguments);
}
function _a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _a = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(N, P, S) {
    N[P] = S.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function u(N, P, S) {
    return Object.defineProperty(N, P, { value: S, enumerable: !0, configurable: !0, writable: !0 }), N[P];
  }
  try {
    u({}, "");
  } catch {
    u = function(S, _, R) {
      return S[_] = R;
    };
  }
  function c(N, P, S, _) {
    var R = P && P.prototype instanceof h ? P : h, C = Object.create(R.prototype), j = new M(_ || []);
    return i(C, "_invoke", { value: L(N, S, j) }), C;
  }
  function d(N, P, S) {
    try {
      return { type: "normal", arg: N.call(P, S) };
    } catch (_) {
      return { type: "throw", arg: _ };
    }
  }
  t.wrap = c;
  var p = "suspendedStart", v = "suspendedYield", b = "executing", x = "completed", w = {};
  function h() {
  }
  function m() {
  }
  function y() {
  }
  var E = {};
  u(E, o, function() {
    return this;
  });
  var O = Object.getPrototypeOf, A = O && O(O(z([])));
  A && A !== n && r.call(A, o) && (E = A);
  var T = y.prototype = h.prototype = Object.create(E);
  function I(N) {
    ["next", "throw", "return"].forEach(function(P) {
      u(N, P, function(S) {
        return this._invoke(P, S);
      });
    });
  }
  function D(N, P) {
    function S(R, C, j, U) {
      var W = d(N[R], N, C);
      if (W.type !== "throw") {
        var Q = W.arg, q = Q.value;
        return q && $l(q) == "object" && r.call(q, "__await") ? P.resolve(q.__await).then(function(Z) {
          S("next", Z, j, U);
        }, function(Z) {
          S("throw", Z, j, U);
        }) : P.resolve(q).then(function(Z) {
          Q.value = Z, j(Q);
        }, function(Z) {
          return S("throw", Z, j, U);
        });
      }
      U(W.arg);
    }
    var _;
    i(this, "_invoke", { value: function(C, j) {
      function U() {
        return new P(function(W, Q) {
          S(C, j, W, Q);
        });
      }
      return _ = _ ? _.then(U, U) : U();
    } });
  }
  function L(N, P, S) {
    var _ = p;
    return function(R, C) {
      if (_ === b) throw Error("Generator is already running");
      if (_ === x) {
        if (R === "throw") throw C;
        return { value: e, done: !0 };
      }
      for (S.method = R, S.arg = C; ; ) {
        var j = S.delegate;
        if (j) {
          var U = G(j, S);
          if (U) {
            if (U === w) continue;
            return U;
          }
        }
        if (S.method === "next") S.sent = S._sent = S.arg;
        else if (S.method === "throw") {
          if (_ === p) throw _ = x, S.arg;
          S.dispatchException(S.arg);
        } else S.method === "return" && S.abrupt("return", S.arg);
        _ = b;
        var W = d(N, P, S);
        if (W.type === "normal") {
          if (_ = S.done ? x : v, W.arg === w) continue;
          return { value: W.arg, done: S.done };
        }
        W.type === "throw" && (_ = x, S.method = "throw", S.arg = W.arg);
      }
    };
  }
  function G(N, P) {
    var S = P.method, _ = N.iterator[S];
    if (_ === e) return P.delegate = null, S === "throw" && N.iterator.return && (P.method = "return", P.arg = e, G(N, P), P.method === "throw") || S !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + S + "' method")), w;
    var R = d(_, N.iterator, P.arg);
    if (R.type === "throw") return P.method = "throw", P.arg = R.arg, P.delegate = null, w;
    var C = R.arg;
    return C ? C.done ? (P[N.resultName] = C.value, P.next = N.nextLoc, P.method !== "return" && (P.method = "next", P.arg = e), P.delegate = null, w) : C : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, w);
  }
  function Y(N) {
    var P = { tryLoc: N[0] };
    1 in N && (P.catchLoc = N[1]), 2 in N && (P.finallyLoc = N[2], P.afterLoc = N[3]), this.tryEntries.push(P);
  }
  function F(N) {
    var P = N.completion || {};
    P.type = "normal", delete P.arg, N.completion = P;
  }
  function M(N) {
    this.tryEntries = [{ tryLoc: "root" }], N.forEach(Y, this), this.reset(!0);
  }
  function z(N) {
    if (N || N === "") {
      var P = N[o];
      if (P) return P.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var S = -1, _ = function R() {
          for (; ++S < N.length; ) if (r.call(N, S)) return R.value = N[S], R.done = !1, R;
          return R.value = e, R.done = !0, R;
        };
        return _.next = _;
      }
    }
    throw new TypeError($l(N) + " is not iterable");
  }
  return m.prototype = y, i(T, "constructor", { value: y, configurable: !0 }), i(y, "constructor", { value: m, configurable: !0 }), m.displayName = u(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var P = typeof N == "function" && N.constructor;
    return !!P && (P === m || (P.displayName || P.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, y) : (N.__proto__ = y, u(N, l, "GeneratorFunction")), N.prototype = Object.create(T), N;
  }, t.awrap = function(N) {
    return { __await: N };
  }, I(D.prototype), u(D.prototype, s, function() {
    return this;
  }), t.AsyncIterator = D, t.async = function(N, P, S, _, R) {
    R === void 0 && (R = Promise);
    var C = new D(c(N, P, S, _), R);
    return t.isGeneratorFunction(P) ? C : C.next().then(function(j) {
      return j.done ? j.value : C.next();
    });
  }, I(T), u(T, l, "Generator"), u(T, o, function() {
    return this;
  }), u(T, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var P = Object(N), S = [];
    for (var _ in P) S.push(_);
    return S.reverse(), function R() {
      for (; S.length; ) {
        var C = S.pop();
        if (C in P) return R.value = C, R.done = !1, R;
      }
      return R.done = !0, R;
    };
  }, t.values = z, M.prototype = { constructor: M, reset: function(P) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(F), !P) for (var S in this) S.charAt(0) === "t" && r.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = e);
  }, stop: function() {
    this.done = !0;
    var P = this.tryEntries[0].completion;
    if (P.type === "throw") throw P.arg;
    return this.rval;
  }, dispatchException: function(P) {
    if (this.done) throw P;
    var S = this;
    function _(Q, q) {
      return j.type = "throw", j.arg = P, S.next = Q, q && (S.method = "next", S.arg = e), !!q;
    }
    for (var R = this.tryEntries.length - 1; R >= 0; --R) {
      var C = this.tryEntries[R], j = C.completion;
      if (C.tryLoc === "root") return _("end");
      if (C.tryLoc <= this.prev) {
        var U = r.call(C, "catchLoc"), W = r.call(C, "finallyLoc");
        if (U && W) {
          if (this.prev < C.catchLoc) return _(C.catchLoc, !0);
          if (this.prev < C.finallyLoc) return _(C.finallyLoc);
        } else if (U) {
          if (this.prev < C.catchLoc) return _(C.catchLoc, !0);
        } else {
          if (!W) throw Error("try statement without catch or finally");
          if (this.prev < C.finallyLoc) return _(C.finallyLoc);
        }
      }
    }
  }, abrupt: function(P, S) {
    for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
      var R = this.tryEntries[_];
      if (R.tryLoc <= this.prev && r.call(R, "finallyLoc") && this.prev < R.finallyLoc) {
        var C = R;
        break;
      }
    }
    C && (P === "break" || P === "continue") && C.tryLoc <= S && S <= C.finallyLoc && (C = null);
    var j = C ? C.completion : {};
    return j.type = P, j.arg = S, C ? (this.method = "next", this.next = C.finallyLoc, w) : this.complete(j);
  }, complete: function(P, S) {
    if (P.type === "throw") throw P.arg;
    return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && S && (this.next = S), w;
  }, finish: function(P) {
    for (var S = this.tryEntries.length - 1; S >= 0; --S) {
      var _ = this.tryEntries[S];
      if (_.finallyLoc === P) return this.complete(_.completion, _.afterLoc), F(_), w;
    }
  }, catch: function(P) {
    for (var S = this.tryEntries.length - 1; S >= 0; --S) {
      var _ = this.tryEntries[S];
      if (_.tryLoc === P) {
        var R = _.completion;
        if (R.type === "throw") {
          var C = R.arg;
          F(_);
        }
        return C;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(P, S, _) {
    return this.delegate = { iterator: z(P), resultName: S, nextLoc: _ }, this.method === "next" && (this.arg = e), w;
  } }, t;
}
function Ry(e, t, n, r, i, a, o) {
  try {
    var s = e[a](o), l = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i);
}
function Dy(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var a = e.apply(t, n);
      function o(l) {
        Ry(a, r, i, o, s, "next", l);
      }
      function s(l) {
        Ry(a, r, i, o, s, "throw", l);
      }
      o(void 0);
    });
  };
}
function xa(e, t) {
  return wF(e) || xF(e, t) || bF(e, t) || yF();
}
function yF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bF(e, t) {
  if (e) {
    if (typeof e == "string") return Fy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fy(e, t);
  }
}
function Fy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xF(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function wF(e) {
  if (Array.isArray(e)) return e;
}
function EF(e, t) {
  if (e == null) return {};
  var n = OF(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function OF(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Jm(e) {
  var t = e.className, n = e.accept, r = e.minSize, i = e.maxSize, a = e.validator, o = e.errorMessages, s = e.progressVariant, l = e.inputComponent, u = e.onProcessUpload, c = e.onUploadProgress, d = e.onUploadCancel, p = EF(e, gF), v = k.useState(!1), b = xa(v, 2), x = b[0], w = b[1], h = k.useState([]), m = xa(h, 2), y = m[0], E = m[1], O = k.useState(0), A = xa(O, 2), T = A[0], I = A[1], D = k.useState(void 0), L = xa(D, 2), G = L[0], Y = L[1], F = k.useState(void 0), M = xa(F, 2), z = M[0], N = M[1], P = ra(), S = o.uploadError, _ = o.invalidSizeLess, R = o.invalidSizeMore, C = o.invalidType, j = o.multipleDragged, U = /* @__PURE__ */ function() {
    var Ee = Dy(/* @__PURE__ */ _a().mark(function V(ge) {
      var ye;
      return _a().wrap(function(tt) {
        for (; ; ) switch (tt.prev = tt.next) {
          case 0:
            return y && E([]), tt.next = 3, GD(ge);
          case 3:
            ye = tt.sent, ye && ye.length > 1 && w(!0);
          case 5:
          case "end":
            return tt.stop();
        }
      }, V);
    }));
    return function(ge) {
      return Ee.apply(this, arguments);
    };
  }(), W = function() {
    x && w(!1);
  }, Q = function(V) {
    x ? w(!1) : E(V[0].errors.map(function(ge) {
      switch (ge.code) {
        case Sc.FileTooLarge:
          return R || P.formatMessage(pn.invalidSizeMore, {
            size: Ci(i)
          });
        case Sc.FileTooSmall:
          return _ || P.formatMessage(pn.invalidSizeLess, {
            size: Ci(r)
          });
        case Sc.FileInvalidType:
          return C || P.formatMessage(pn.invalidType, {
            count: vF(n) ? 2 : 1,
            typeString: $E(n)
          });
        default:
          return P.formatMessage(pn.unexpectedValidationError);
      }
    }));
  }, q = function(V) {
    var ge = Math.round(V.loaded * 100 / V.total);
    I(ge), c(ge, V);
  }, Z = function(V) {
    V.code !== "ERR_CANCELED" && (I(0), E([S || P.formatMessage(pn.uploadError)]));
  }, oe = function(V) {
    var ge = new AbortController();
    N(ge);
    var ye = {
      onUploadProgress: q,
      signal: ge.signal
    };
    u({
      fileData: V,
      requestConfig: ye,
      handleError: Z
    });
  }, le = /* @__PURE__ */ function() {
    var Ee = Dy(/* @__PURE__ */ _a().mark(function V(ge) {
      var ye, $e, tt;
      return _a().wrap(function(H) {
        for (; ; ) switch (H.prev = H.next) {
          case 0:
            if (ye = ge[0], !a) {
              H.next = 8;
              break;
            }
            return H.next = 4, a(ye);
          case 4:
            if ($e = H.sent, !$e) {
              H.next = 8;
              break;
            }
            return E([$e]), H.abrupt("return");
          case 8:
            y && E([]), tt = new FormData(), tt.append("file", ye), Y(ye.name), oe(tt);
          case 13:
          case "end":
            return H.stop();
        }
      }, V);
    }));
    return function(ge) {
      return Ee.apply(this, arguments);
    };
  }(), pe = function() {
    z.abort(), I(0), d();
  }, ce = IE({
    multiple: !1,
    maxFiles: 1,
    maxSize: i,
    minSize: r,
    onDragLeave: W,
    onDragEnter: U,
    onDropRejected: Q,
    onDropAccepted: le,
    accept: n,
    disabled: T && T !== 100
  }), we = ce.getRootProps, We = ce.getInputProps, ct = ce.isDragActive, ft = ce.isDragReject, qt = function() {
    return x ? /* @__PURE__ */ g.createElement(RE, {
      message: j || P.formatMessage(pn.multipleDragged)
    }) : y.length > 0 ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(DE, {
      errorMsgs: y
    }), l || /* @__PURE__ */ g.createElement(Bl, {
      minSize: r,
      maxSize: i,
      accept: n
    })) : T && T !== 100 ? /* @__PURE__ */ g.createElement(BE, {
      variant: s,
      percent: T,
      name: G,
      onCancel: pe
    }) : l || /* @__PURE__ */ g.createElement(Bl, {
      minSize: r,
      maxSize: i,
      accept: n
    });
  };
  return /* @__PURE__ */ g.createElement("div", Vp({
    "data-testid": "dropzone-container"
  }, we({
    className: K("pgn__dropzone", t, {
      "pgn__dropzone-validation-error": x || y.length > 0 || ft,
      "pgn__dropzone-active": ct && !ft
    })
  }), p), /* @__PURE__ */ g.createElement("input", We()), /* @__PURE__ */ g.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, qt()));
}
Jm.defaultProps = {
  className: void 0,
  accept: void 0,
  maxSize: 1 / 0,
  minSize: 0,
  onUploadProgress: function() {
  },
  onUploadCancel: function() {
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
Jm.propTypes = {
  /** Specifies class name to append to the base element. */
  className: f.string,
  /**
   * Set accepted file types.
   * This should be an object with the keys set to the
   * [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   * and the values to an array of file extensions.
   */
  accept: f.objectOf(f.arrayOf(f.string)),
  /** Maximum file size (in bytes). */
  maxSize: f.number,
  /** Minimum file size (in bytes). */
  minSize: f.number,
  /**
   * A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   */
  onUploadProgress: f.func,
  /** A callback fired upon successful upload, receives Response object as a single argument. */
  onUploadCancel: f.func,
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
  onProcessUpload: f.func.isRequired,
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
  errorMessages: f.shape({
    invalidType: f.oneOfType([f.string, f.element]),
    invalidSizeLess: f.oneOfType([f.string, f.element]),
    invalidSizeMore: f.oneOfType([f.string, f.element]),
    multipleDragged: f.oneOfType([f.string, f.element]),
    uploadError: f.oneOfType([f.string, f.element])
  }),
  /** Specifies how the upload progress should be displayed, component shows either spinner or a progress bar. */
  progressVariant: f.oneOf(["spinner", "bar"]),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: f.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: f.oneOfType([f.elementType, f.node])
};
function SF() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function kF(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": SF()
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
const CF = ({ runtime: e, fields: t }) => {
  const [n, r] = k.useState(t.display_name), [i, a] = k.useState(t.title || ""), [o, s] = k.useState(t.description || ""), [l, u] = k.useState(t.audio_url || ""), [c, d] = k.useState(t.show_controls !== !1), [p, v] = k.useState(t.autoplay === !0), [b, x] = k.useState(t.show_download !== !1), [w, h] = k.useState(!1), [m, y] = k.useState(!1), [E, O] = k.useState(!1), [A, T] = k.useState(!1), [I, D] = k.useState(null), L = () => {
    const M = "csrftoken", z = document.cookie.split(";");
    for (let N = 0; N < z.length; N++) {
      const P = z[N].trim();
      if (P.startsWith(M + "="))
        return P.substring(M.length + 1);
    }
    return "";
  }, G = async ({ fileData: M, handleError: z }) => {
    y(!0), D(null);
    try {
      const N = `/assets/${t.course_id}/`, P = await fetch(N, {
        method: "POST",
        headers: {
          "X-CSRFToken": L(),
          Accept: "application/json"
        },
        body: M
      }), S = P.headers.get("content-type");
      let _;
      if (S != null && S.includes("application/json") ? _ = await P.json() : _ = { error: await P.text() || "Upload failed" }, P.ok && _.asset)
        u(_.asset.url), O(!0), D({ type: "success", text: "Audio file uploaded successfully!" });
      else {
        const R = _.error || _.msg || "Upload failed", C = new Error(R);
        z(C), D({ type: "error", text: R });
      }
    } catch (N) {
      console.error("Audio upload error:", N);
      const P = N instanceof Error ? N.message : "Upload failed";
      z(N), D({ type: "error", text: P });
    } finally {
      y(!1);
    }
  }, Y = async () => {
    h(!0), D(null);
    try {
      if (!n.trim()) {
        D({ type: "error", text: "Display name is required" }), h(!1);
        return;
      }
      if (!l.trim()) {
        D({ type: "error", text: "Audio URL is required" }), h(!1);
        return;
      }
      if (!E || A)
        try {
          new URL(l);
        } catch {
          D({ type: "error", text: "Please enter a valid URL for the audio file" }), h(!1);
          return;
        }
      e.notify && e.notify("save", { state: "start" });
      const M = await kF(e, "save_data", {
        display_name: n,
        title: i,
        description: o,
        audio_url: l,
        show_controls: c,
        autoplay: p,
        show_download: b
      });
      M.success ? (D({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (D({ type: "error", text: M.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (M) {
      console.error("Save error:", M), D({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      h(!1);
    }
  }, F = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ ie.jsxs("div", { className: "audio-player-studio-view", children: [
    I && /* @__PURE__ */ ie.jsx(
      Jr,
      {
        variant: I.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => D(null),
        children: I.text
      }
    ),
    /* @__PURE__ */ ie.jsxs(ae, { children: [
      /* @__PURE__ */ ie.jsxs(Qe, { className: "mb-4", children: [
        /* @__PURE__ */ ie.jsx(Qe.Header, { title: "Basic Settings" }),
        /* @__PURE__ */ ie.jsxs(Qe.Section, { children: [
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Display Name *" }),
            /* @__PURE__ */ ie.jsx(
              ae.Control,
              {
                type: "text",
                value: n,
                onChange: (M) => r(M.target.value),
                placeholder: "Audio Player"
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "The name shown in the course outline." })
          ] }),
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Title (Optional)" }),
            /* @__PURE__ */ ie.jsx(
              ae.Control,
              {
                type: "text",
                value: i,
                onChange: (M) => a(M.target.value),
                placeholder: "e.g., Lecture Introduction"
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Optional heading displayed above the audio player." })
          ] }),
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Description (Optional)" }),
            /* @__PURE__ */ ie.jsx(
              ae.Control,
              {
                as: "textarea",
                rows: 4,
                value: o,
                onChange: (M) => s(M.target.value),
                placeholder: "Optional text content displayed alongside the audio..."
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Optional text content. Supports basic HTML (p, strong, em, a, ul, ol, li)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ie.jsxs(Qe, { className: "mb-4", children: [
        /* @__PURE__ */ ie.jsx(Qe.Header, { title: "Audio File" }),
        /* @__PURE__ */ ie.jsxs(Qe.Section, { children: [
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Upload Audio File" }),
            /* @__PURE__ */ ie.jsx(
              Jm,
              {
                onProcessUpload: G,
                accept: {
                  "audio/mpeg": [".mp3"],
                  "audio/mp4": [".m4a"],
                  "audio/ogg": [".ogg"],
                  "audio/wav": [".wav"],
                  "audio/webm": [".webm"]
                },
                maxSize: 50 * 1024 * 1024,
                multiple: !1
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Upload audio files (MP3, M4A, OGG, WAV, WebM). Maximum size: 50MB." })
          ] }),
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Or Enter Audio URL *" }),
            /* @__PURE__ */ ie.jsx(
              ae.Control,
              {
                type: "url",
                value: l,
                onChange: (M) => {
                  u(M.target.value), E && T(!0);
                },
                placeholder: "https://example.com/audio.mp3",
                disabled: m
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Alternatively, enter a direct URL to an audio file." })
          ] }),
          l && !m && /* @__PURE__ */ ie.jsxs("div", { className: "audio-preview mt-3", children: [
            /* @__PURE__ */ ie.jsx(ae.Label, { children: "Preview" }),
            /* @__PURE__ */ ie.jsxs("audio", { controls: !0, className: "w-100", children: [
              /* @__PURE__ */ ie.jsx("source", { src: l, type: "audio/mpeg" }),
              "Your browser does not support audio preview."
            ] }),
            /* @__PURE__ */ ie.jsx("small", { className: "text-muted d-block mt-2", children: l })
          ] }),
          m && /* @__PURE__ */ ie.jsx(Jr, { variant: "info", className: "mt-3", children: "Uploading audio file..." })
        ] })
      ] }),
      /* @__PURE__ */ ie.jsxs(Qe, { className: "mb-4", children: [
        /* @__PURE__ */ ie.jsx(Qe.Header, { title: "Playback Settings" }),
        /* @__PURE__ */ ie.jsxs(Qe.Section, { children: [
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(
              ae.Switch,
              {
                checked: c,
                onChange: (M) => d(M.target.checked),
                children: "Show Controls"
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Display play/pause, volume, and progress controls. Recommended: ON" })
          ] }),
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(
              ae.Switch,
              {
                checked: p,
                onChange: (M) => v(M.target.checked),
                children: "Auto-play"
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { className: "text-warning", children: "⚠️ Automatically start playback when page loads. Not recommended for accessibility." })
          ] }),
          /* @__PURE__ */ ie.jsxs(ae.Group, { className: "mb-3", children: [
            /* @__PURE__ */ ie.jsx(
              ae.Switch,
              {
                checked: b,
                onChange: (M) => x(M.target.checked),
                children: "Allow Download"
              }
            ),
            /* @__PURE__ */ ie.jsx(ae.Text, { children: "Display a download link for students." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ie.jsxs("div", { className: "d-flex justify-content-end", children: [
        /* @__PURE__ */ ie.jsx(Fn, { variant: "tertiary", onClick: F, disabled: w, className: "mr-2", children: "Cancel" }),
        /* @__PURE__ */ ie.jsx(Fn, { variant: "primary", onClick: Y, disabled: w, children: w ? "Saving..." : "Save" })
      ] })
    ] })
  ] });
}, _F = (e, t, n) => {
  if (!t) {
    console.error("No element provided to renderBlock");
    return;
  }
  e.element = t, Xb(t).render(
    /* @__PURE__ */ ie.jsx(k.StrictMode, { children: /* @__PURE__ */ ie.jsx(Uk, { locale: "en", children: /* @__PURE__ */ ie.jsx(CF, { runtime: e, fields: n.fields }) }) })
  );
};
export {
  _F as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
