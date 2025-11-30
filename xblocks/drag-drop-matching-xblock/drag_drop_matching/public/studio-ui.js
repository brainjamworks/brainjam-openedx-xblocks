var AP = Object.defineProperty;
var TP = (e, t, n) => t in e ? AP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $s = (e, t, n) => TP(e, typeof t != "symbol" ? t + "" : t, n);
var zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kw = { exports: {} }, Lf = {}, Yw = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl = Symbol.for("react.element"), RP = Symbol.for("react.portal"), IP = Symbol.for("react.fragment"), NP = Symbol.for("react.strict_mode"), OP = Symbol.for("react.profiler"), PP = Symbol.for("react.provider"), DP = Symbol.for("react.context"), FP = Symbol.for("react.forward_ref"), MP = Symbol.for("react.suspense"), LP = Symbol.for("react.memo"), BP = Symbol.for("react.lazy"), px = Symbol.iterator;
function HP(e) {
  return e === null || typeof e != "object" ? null : (e = px && e[px] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qw = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zw = Object.assign, Jw = {};
function hs(e, t, n) {
  this.props = e, this.context = t, this.refs = Jw, this.updater = n || Qw;
}
hs.prototype.isReactComponent = {};
hs.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hs.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function eC() {
}
eC.prototype = hs.prototype;
function sv(e, t, n) {
  this.props = e, this.context = t, this.refs = Jw, this.updater = n || Qw;
}
var lv = sv.prototype = new eC();
lv.constructor = sv;
Zw(lv, hs.prototype);
lv.isPureReactComponent = !0;
var mx = Array.isArray, tC = Object.prototype.hasOwnProperty, uv = { current: null }, nC = { key: !0, ref: !0, __self: !0, __source: !0 };
function rC(e, t, n) {
  var r, i = {}, a = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (a = "" + t.key), t) tC.call(t, r) && !nC.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var f = Array(u), d = 0; d < u; d++) f[d] = arguments[d + 2];
    i.children = f;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Gl, type: e, key: a, ref: l, props: i, _owner: uv.current };
}
function VP(e, t) {
  return { $$typeof: Gl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cv(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gl;
}
function UP(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vx = /\/+/g;
function Wh(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? UP("" + e.key) : t.toString(36);
}
function Tc(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (a) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Gl:
        case RP:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Wh(l, 0) : r, mx(i) ? (n = "", e != null && (n = e.replace(vx, "$&/") + "/"), Tc(i, t, n, "", function(d) {
    return d;
  })) : i != null && (cv(i) && (i = VP(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(vx, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", mx(e)) for (var u = 0; u < e.length; u++) {
    a = e[u];
    var f = r + Wh(a, u);
    l += Tc(a, t, n, f, i);
  }
  else if (f = HP(e), typeof f == "function") for (e = f.call(e), u = 0; !(a = e.next()).done; ) a = a.value, f = r + Wh(a, u++), l += Tc(a, t, n, f, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ju(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Tc(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function $P(e) {
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
var mn = { current: null }, Rc = { transition: null }, zP = { ReactCurrentDispatcher: mn, ReactCurrentBatchConfig: Rc, ReactCurrentOwner: uv };
function iC() {
  throw Error("act(...) is not supported in production builds of React.");
}
ke.Children = { map: Ju, forEach: function(e, t, n) {
  Ju(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ju(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ju(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cv(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ke.Component = hs;
ke.Fragment = IP;
ke.Profiler = OP;
ke.PureComponent = sv;
ke.StrictMode = NP;
ke.Suspense = MP;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zP;
ke.act = iC;
ke.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zw({}, e.props), i = e.key, a = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, l = uv.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (f in t) tC.call(t, f) && !nC.hasOwnProperty(f) && (r[f] = t[f] === void 0 && u !== void 0 ? u[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    u = Array(f);
    for (var d = 0; d < f; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Gl, type: e.type, key: i, ref: a, props: r, _owner: l };
};
ke.createContext = function(e) {
  return e = { $$typeof: DP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: PP, _context: e }, e.Consumer = e;
};
ke.createElement = rC;
ke.createFactory = function(e) {
  var t = rC.bind(null, e);
  return t.type = e, t;
};
ke.createRef = function() {
  return { current: null };
};
ke.forwardRef = function(e) {
  return { $$typeof: FP, render: e };
};
ke.isValidElement = cv;
ke.lazy = function(e) {
  return { $$typeof: BP, _payload: { _status: -1, _result: e }, _init: $P };
};
ke.memo = function(e, t) {
  return { $$typeof: LP, type: e, compare: t === void 0 ? null : t };
};
ke.startTransition = function(e) {
  var t = Rc.transition;
  Rc.transition = {};
  try {
    e();
  } finally {
    Rc.transition = t;
  }
};
ke.unstable_act = iC;
ke.useCallback = function(e, t) {
  return mn.current.useCallback(e, t);
};
ke.useContext = function(e) {
  return mn.current.useContext(e);
};
ke.useDebugValue = function() {
};
ke.useDeferredValue = function(e) {
  return mn.current.useDeferredValue(e);
};
ke.useEffect = function(e, t) {
  return mn.current.useEffect(e, t);
};
ke.useId = function() {
  return mn.current.useId();
};
ke.useImperativeHandle = function(e, t, n) {
  return mn.current.useImperativeHandle(e, t, n);
};
ke.useInsertionEffect = function(e, t) {
  return mn.current.useInsertionEffect(e, t);
};
ke.useLayoutEffect = function(e, t) {
  return mn.current.useLayoutEffect(e, t);
};
ke.useMemo = function(e, t) {
  return mn.current.useMemo(e, t);
};
ke.useReducer = function(e, t, n) {
  return mn.current.useReducer(e, t, n);
};
ke.useRef = function(e) {
  return mn.current.useRef(e);
};
ke.useState = function(e) {
  return mn.current.useState(e);
};
ke.useSyncExternalStore = function(e, t, n) {
  return mn.current.useSyncExternalStore(e, t, n);
};
ke.useTransition = function() {
  return mn.current.useTransition();
};
ke.version = "18.3.1";
Yw.exports = ke;
var y = Yw.exports;
const _ = /* @__PURE__ */ ds(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WP = y, jP = Symbol.for("react.element"), GP = Symbol.for("react.fragment"), XP = Object.prototype.hasOwnProperty, qP = WP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, KP = { key: !0, ref: !0, __self: !0, __source: !0 };
function oC(e, t, n) {
  var r, i = {}, a = null, l = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) XP.call(t, r) && !KP.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: jP, type: e, key: a, ref: l, props: i, _owner: qP.current };
}
Lf.Fragment = GP;
Lf.jsx = oC;
Lf.jsxs = oC;
Kw.exports = Lf;
var V = Kw.exports, aC = { exports: {} }, jn = {}, sC = { exports: {} }, lC = {};
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
  function t(G, X) {
    var Y = G.length;
    G.push(X);
    e: for (; 0 < Y; ) {
      var re = Y - 1 >>> 1, te = G[re];
      if (0 < i(te, X)) G[re] = X, G[Y] = te, Y = re;
      else break e;
    }
  }
  function n(G) {
    return G.length === 0 ? null : G[0];
  }
  function r(G) {
    if (G.length === 0) return null;
    var X = G[0], Y = G.pop();
    if (Y !== X) {
      G[0] = Y;
      e: for (var re = 0, te = G.length, Ze = te >>> 1; re < Ze; ) {
        var Ue = 2 * (re + 1) - 1, He = G[Ue], Ie = Ue + 1, Et = G[Ie];
        if (0 > i(He, Y)) Ie < te && 0 > i(Et, He) ? (G[re] = Et, G[Ie] = Y, re = Ie) : (G[re] = He, G[Ue] = Y, re = Ue);
        else if (Ie < te && 0 > i(Et, Y)) G[re] = Et, G[Ie] = Y, re = Ie;
        else break e;
      }
    }
    return X;
  }
  function i(G, X) {
    var Y = G.sortIndex - X.sortIndex;
    return Y !== 0 ? Y : G.id - X.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var f = [], d = [], h = 1, m = null, v = 3, x = !1, A = !1, S = !1, R = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function k(G) {
    for (var X = n(d); X !== null; ) {
      if (X.callback === null) r(d);
      else if (X.startTime <= G) r(d), X.sortIndex = X.expirationTime, t(f, X);
      else break;
      X = n(d);
    }
  }
  function I(G) {
    if (S = !1, k(G), !A) if (n(f) !== null) A = !0, Ee(O);
    else {
      var X = n(d);
      X !== null && ce(I, X.startTime - G);
    }
  }
  function O(G, X) {
    A = !1, S && (S = !1, w(B), B = -1), x = !0;
    var Y = v;
    try {
      for (k(X), m = n(f); m !== null && (!(m.expirationTime > X) || G && !Q()); ) {
        var re = m.callback;
        if (typeof re == "function") {
          m.callback = null, v = m.priorityLevel;
          var te = re(m.expirationTime <= X);
          X = e.unstable_now(), typeof te == "function" ? m.callback = te : m === n(f) && r(f), k(X);
        } else r(f);
        m = n(f);
      }
      if (m !== null) var Ze = !0;
      else {
        var Ue = n(d);
        Ue !== null && ce(I, Ue.startTime - X), Ze = !1;
      }
      return Ze;
    } finally {
      m = null, v = Y, x = !1;
    }
  }
  var D = !1, F = null, B = -1, $ = 5, j = -1;
  function Q() {
    return !(e.unstable_now() - j < $);
  }
  function ne() {
    if (F !== null) {
      var G = e.unstable_now();
      j = G;
      var X = !0;
      try {
        X = F(!0, G);
      } finally {
        X ? ae() : (D = !1, F = null);
      }
    } else D = !1;
  }
  var ae;
  if (typeof C == "function") ae = function() {
    C(ne);
  };
  else if (typeof MessageChannel < "u") {
    var ve = new MessageChannel(), Re = ve.port2;
    ve.port1.onmessage = ne, ae = function() {
      Re.postMessage(null);
    };
  } else ae = function() {
    R(ne, 0);
  };
  function Ee(G) {
    F = G, D || (D = !0, ae());
  }
  function ce(G, X) {
    B = R(function() {
      G(e.unstable_now());
    }, X);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(G) {
    G.callback = null;
  }, e.unstable_continueExecution = function() {
    A || x || (A = !0, Ee(O));
  }, e.unstable_forceFrameRate = function(G) {
    0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < G ? Math.floor(1e3 / G) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(f);
  }, e.unstable_next = function(G) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var X = 3;
        break;
      default:
        X = v;
    }
    var Y = v;
    v = X;
    try {
      return G();
    } finally {
      v = Y;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(G, X) {
    switch (G) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        G = 3;
    }
    var Y = v;
    v = G;
    try {
      return X();
    } finally {
      v = Y;
    }
  }, e.unstable_scheduleCallback = function(G, X, Y) {
    var re = e.unstable_now();
    switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? re + Y : re) : Y = re, G) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = Y + te, G = { id: h++, callback: X, priorityLevel: G, startTime: Y, expirationTime: te, sortIndex: -1 }, Y > re ? (G.sortIndex = Y, t(d, G), n(f) === null && G === n(d) && (S ? (w(B), B = -1) : S = !0, ce(I, Y - re))) : (G.sortIndex = te, t(f, G), A || x || (A = !0, Ee(O))), G;
  }, e.unstable_shouldYield = Q, e.unstable_wrapCallback = function(G) {
    var X = v;
    return function() {
      var Y = v;
      v = X;
      try {
        return G.apply(this, arguments);
      } finally {
        v = Y;
      }
    };
  };
})(lC);
sC.exports = lC;
var YP = sC.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QP = y, zn = YP;
function K(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uC = /* @__PURE__ */ new Set(), El = {};
function qo(e, t) {
  Ya(e, t), Ya(e + "Capture", t);
}
function Ya(e, t) {
  for (El[e] = t, e = 0; e < t.length; e++) uC.add(t[e]);
}
var yi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Up = Object.prototype.hasOwnProperty, ZP = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gx = {}, yx = {};
function JP(e) {
  return Up.call(yx, e) ? !0 : Up.call(gx, e) ? !1 : ZP.test(e) ? yx[e] = !0 : (gx[e] = !0, !1);
}
function eD(e, t, n, r) {
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
function tD(e, t, n, r) {
  if (t === null || typeof t > "u" || eD(e, t, n, r)) return !0;
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
function vn(e, t, n, r, i, a, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = l;
}
var $t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $t[e] = new vn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $t[t] = new vn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $t[e] = new vn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $t[e] = new vn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $t[e] = new vn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $t[e] = new vn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $t[e] = new vn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $t[e] = new vn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $t[e] = new vn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fv = /[\-:]([a-z])/g;
function dv(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fv,
    dv
  );
  $t[t] = new vn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fv, dv);
  $t[t] = new vn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fv, dv);
  $t[t] = new vn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $t[e] = new vn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$t.xlinkHref = new vn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $t[e] = new vn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hv(e, t, n, r) {
  var i = $t.hasOwnProperty(t) ? $t[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tD(t, n, i, r) && (n = null), r || i === null ? JP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Si = QP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ec = Symbol.for("react.element"), ba = Symbol.for("react.portal"), ka = Symbol.for("react.fragment"), pv = Symbol.for("react.strict_mode"), $p = Symbol.for("react.profiler"), cC = Symbol.for("react.provider"), fC = Symbol.for("react.context"), mv = Symbol.for("react.forward_ref"), zp = Symbol.for("react.suspense"), Wp = Symbol.for("react.suspense_list"), vv = Symbol.for("react.memo"), Li = Symbol.for("react.lazy"), dC = Symbol.for("react.offscreen"), Ex = Symbol.iterator;
function Ws(e) {
  return e === null || typeof e != "object" ? null : (e = Ex && e[Ex] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ht = Object.assign, jh;
function el(e) {
  if (jh === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jh = t && t[1] || "";
  }
  return `
` + jh + e;
}
var Gh = !1;
function Xh(e, t) {
  if (!e || Gh) return "";
  Gh = !0;
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
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var i = d.stack.split(`
`), a = r.stack.split(`
`), l = i.length - 1, u = a.length - 1; 1 <= l && 0 <= u && i[l] !== a[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (i[l] !== a[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || i[l] !== a[u]) {
              var f = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Gh = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? el(e) : "";
}
function nD(e) {
  switch (e.tag) {
    case 5:
      return el(e.type);
    case 16:
      return el("Lazy");
    case 13:
      return el("Suspense");
    case 19:
      return el("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Xh(e.type, !1), e;
    case 11:
      return e = Xh(e.type.render, !1), e;
    case 1:
      return e = Xh(e.type, !0), e;
    default:
      return "";
  }
}
function jp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ka:
      return "Fragment";
    case ba:
      return "Portal";
    case $p:
      return "Profiler";
    case pv:
      return "StrictMode";
    case zp:
      return "Suspense";
    case Wp:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fC:
      return (e.displayName || "Context") + ".Consumer";
    case cC:
      return (e._context.displayName || "Context") + ".Provider";
    case mv:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case vv:
      return t = e.displayName || null, t !== null ? t : jp(e.type) || "Memo";
    case Li:
      t = e._payload, e = e._init;
      try {
        return jp(e(t));
      } catch {
      }
  }
  return null;
}
function rD(e) {
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
      return jp(t);
    case 8:
      return t === pv ? "StrictMode" : "Mode";
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
function no(e) {
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
function hC(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function iD(e) {
  var t = hC(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, a.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function tc(e) {
  e._valueTracker || (e._valueTracker = iD(e));
}
function pC(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hC(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gp(e, t) {
  var n = t.checked;
  return ht({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xx(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = no(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function mC(e, t) {
  t = t.checked, t != null && hv(e, "checked", t, !1);
}
function Xp(e, t) {
  mC(e, t);
  var n = no(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? qp(e, t.type, n) : t.hasOwnProperty("defaultValue") && qp(e, t.type, no(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function wx(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function qp(e, t, n) {
  (t !== "number" || Xc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tl = Array.isArray;
function Va(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + no(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return ht({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cx(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(K(92));
      if (tl(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: no(n) };
}
function vC(e, t) {
  var n = no(t.value), r = no(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _x(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gC(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gC(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var nc, yC = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nc.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function xl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ol = {
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
}, oD = ["Webkit", "ms", "Moz", "O"];
Object.keys(ol).forEach(function(e) {
  oD.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ol[t] = ol[e];
  });
});
function EC(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ol.hasOwnProperty(e) && ol[e] ? ("" + t).trim() : t + "px";
}
function xC(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = EC(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var aD = ht({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Qp(e, t) {
  if (t) {
    if (aD[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function Zp(e, t) {
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
var Jp = null;
function gv(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var em = null, Ua = null, $a = null;
function Sx(e) {
  if (e = Kl(e)) {
    if (typeof em != "function") throw Error(K(280));
    var t = e.stateNode;
    t && (t = $f(t), em(e.stateNode, e.type, t));
  }
}
function wC(e) {
  Ua ? $a ? $a.push(e) : $a = [e] : Ua = e;
}
function CC() {
  if (Ua) {
    var e = Ua, t = $a;
    if ($a = Ua = null, Sx(e), t) for (e = 0; e < t.length; e++) Sx(t[e]);
  }
}
function _C(e, t) {
  return e(t);
}
function SC() {
}
var qh = !1;
function bC(e, t, n) {
  if (qh) return e(t, n);
  qh = !0;
  try {
    return _C(e, t, n);
  } finally {
    qh = !1, (Ua !== null || $a !== null) && (SC(), CC());
  }
}
function wl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $f(n);
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
  if (n && typeof n != "function") throw Error(K(231, t, typeof n));
  return n;
}
var tm = !1;
if (yi) try {
  var js = {};
  Object.defineProperty(js, "passive", { get: function() {
    tm = !0;
  } }), window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
} catch {
  tm = !1;
}
function sD(e, t, n, r, i, a, l, u, f) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var al = !1, qc = null, Kc = !1, nm = null, lD = { onError: function(e) {
  al = !0, qc = e;
} };
function uD(e, t, n, r, i, a, l, u, f) {
  al = !1, qc = null, sD.apply(lD, arguments);
}
function cD(e, t, n, r, i, a, l, u, f) {
  if (uD.apply(this, arguments), al) {
    if (al) {
      var d = qc;
      al = !1, qc = null;
    } else throw Error(K(198));
    Kc || (Kc = !0, nm = d);
  }
}
function Ko(e) {
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
function kC(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bx(e) {
  if (Ko(e) !== e) throw Error(K(188));
}
function fD(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ko(e), t === null) throw Error(K(188));
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
        if (a === n) return bx(i), e;
        if (a === r) return bx(i), t;
        a = a.sibling;
      }
      throw Error(K(188));
    }
    if (n.return !== r.return) n = i, r = a;
    else {
      for (var l = !1, u = i.child; u; ) {
        if (u === n) {
          l = !0, n = i, r = a;
          break;
        }
        if (u === r) {
          l = !0, r = i, n = a;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = a.child; u; ) {
          if (u === n) {
            l = !0, n = a, r = i;
            break;
          }
          if (u === r) {
            l = !0, r = a, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(K(189));
      }
    }
    if (n.alternate !== r) throw Error(K(190));
  }
  if (n.tag !== 3) throw Error(K(188));
  return n.stateNode.current === n ? e : t;
}
function AC(e) {
  return e = fD(e), e !== null ? TC(e) : null;
}
function TC(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = TC(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var RC = zn.unstable_scheduleCallback, kx = zn.unstable_cancelCallback, dD = zn.unstable_shouldYield, hD = zn.unstable_requestPaint, yt = zn.unstable_now, pD = zn.unstable_getCurrentPriorityLevel, yv = zn.unstable_ImmediatePriority, IC = zn.unstable_UserBlockingPriority, Yc = zn.unstable_NormalPriority, mD = zn.unstable_LowPriority, NC = zn.unstable_IdlePriority, Bf = null, qr = null;
function vD(e) {
  if (qr && typeof qr.onCommitFiberRoot == "function") try {
    qr.onCommitFiberRoot(Bf, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Tr = Math.clz32 ? Math.clz32 : ED, gD = Math.log, yD = Math.LN2;
function ED(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gD(e) / yD | 0) | 0;
}
var rc = 64, ic = 4194304;
function nl(e) {
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
function Qc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = nl(u) : (a &= l, a !== 0 && (r = nl(a)));
  } else l = n & ~i, l !== 0 ? r = nl(l) : a !== 0 && (r = nl(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Tr(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function xD(e, t) {
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
function wD(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var l = 31 - Tr(a), u = 1 << l, f = i[l];
    f === -1 ? (!(u & n) || u & r) && (i[l] = xD(u, t)) : f <= t && (e.expiredLanes |= u), a &= ~u;
  }
}
function rm(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function OC() {
  var e = rc;
  return rc <<= 1, !(rc & 4194240) && (rc = 64), e;
}
function Kh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tr(t), e[t] = n;
}
function CD(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Tr(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function Ev(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Tr(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var We = 0;
function PC(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var DC, xv, FC, MC, LC, im = !1, oc = [], Xi = null, qi = null, Ki = null, Cl = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), Ui = [], _D = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ax(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xi = null;
      break;
    case "dragenter":
    case "dragleave":
      qi = null;
      break;
    case "mouseover":
    case "mouseout":
      Ki = null;
      break;
    case "pointerover":
    case "pointerout":
      Cl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _l.delete(t.pointerId);
  }
}
function Gs(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Kl(t), t !== null && xv(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function SD(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Xi = Gs(Xi, e, t, n, r, i), !0;
    case "dragenter":
      return qi = Gs(qi, e, t, n, r, i), !0;
    case "mouseover":
      return Ki = Gs(Ki, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return Cl.set(a, Gs(Cl.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, _l.set(a, Gs(_l.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function BC(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Ko(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = kC(n), t !== null) {
          e.blockedOn = t, LC(e.priority, function() {
            FC(n);
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
function Ic(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = om(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Jp = r, n.target.dispatchEvent(r), Jp = null;
    } else return t = Kl(n), t !== null && xv(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Tx(e, t, n) {
  Ic(e) && n.delete(t);
}
function bD() {
  im = !1, Xi !== null && Ic(Xi) && (Xi = null), qi !== null && Ic(qi) && (qi = null), Ki !== null && Ic(Ki) && (Ki = null), Cl.forEach(Tx), _l.forEach(Tx);
}
function Xs(e, t) {
  e.blockedOn === t && (e.blockedOn = null, im || (im = !0, zn.unstable_scheduleCallback(zn.unstable_NormalPriority, bD)));
}
function Sl(e) {
  function t(i) {
    return Xs(i, e);
  }
  if (0 < oc.length) {
    Xs(oc[0], e);
    for (var n = 1; n < oc.length; n++) {
      var r = oc[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xi !== null && Xs(Xi, e), qi !== null && Xs(qi, e), Ki !== null && Xs(Ki, e), Cl.forEach(t), _l.forEach(t), n = 0; n < Ui.length; n++) r = Ui[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ui.length && (n = Ui[0], n.blockedOn === null); ) BC(n), n.blockedOn === null && Ui.shift();
}
var za = Si.ReactCurrentBatchConfig, Zc = !0;
function kD(e, t, n, r) {
  var i = We, a = za.transition;
  za.transition = null;
  try {
    We = 1, wv(e, t, n, r);
  } finally {
    We = i, za.transition = a;
  }
}
function AD(e, t, n, r) {
  var i = We, a = za.transition;
  za.transition = null;
  try {
    We = 4, wv(e, t, n, r);
  } finally {
    We = i, za.transition = a;
  }
}
function wv(e, t, n, r) {
  if (Zc) {
    var i = om(e, t, n, r);
    if (i === null) op(e, t, r, Jc, n), Ax(e, r);
    else if (SD(i, e, t, n, r)) r.stopPropagation();
    else if (Ax(e, r), t & 4 && -1 < _D.indexOf(e)) {
      for (; i !== null; ) {
        var a = Kl(i);
        if (a !== null && DC(a), a = om(e, t, n, r), a === null && op(e, t, r, Jc, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else op(e, t, r, null, n);
  }
}
var Jc = null;
function om(e, t, n, r) {
  if (Jc = null, e = gv(r), e = Ro(e), e !== null) if (t = Ko(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = kC(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Jc = e, null;
}
function HC(e) {
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
      switch (pD()) {
        case yv:
          return 1;
        case IC:
          return 4;
        case Yc:
        case mD:
          return 16;
        case NC:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wi = null, Cv = null, Nc = null;
function VC() {
  if (Nc) return Nc;
  var e, t = Cv, n = t.length, r, i = "value" in Wi ? Wi.value : Wi.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[a - r]; r++) ;
  return Nc = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Oc(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ac() {
  return !0;
}
function Rx() {
  return !1;
}
function Gn(e) {
  function t(n, r, i, a, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(a) : a[u]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ac : Rx, this.isPropagationStopped = Rx, this;
  }
  return ht(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ac);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ac);
  }, persist: function() {
  }, isPersistent: ac }), t;
}
var ps = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _v = Gn(ps), ql = ht({}, ps, { view: 0, detail: 0 }), TD = Gn(ql), Yh, Qh, qs, Hf = ht({}, ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sv, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qs && (qs && e.type === "mousemove" ? (Yh = e.screenX - qs.screenX, Qh = e.screenY - qs.screenY) : Qh = Yh = 0, qs = e), Yh);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qh;
} }), Ix = Gn(Hf), RD = ht({}, Hf, { dataTransfer: 0 }), ID = Gn(RD), ND = ht({}, ql, { relatedTarget: 0 }), Zh = Gn(ND), OD = ht({}, ps, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), PD = Gn(OD), DD = ht({}, ps, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), FD = Gn(DD), MD = ht({}, ps, { data: 0 }), Nx = Gn(MD), LD = {
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
}, BD = {
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
}, HD = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function VD(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = HD[e]) ? !!t[e] : !1;
}
function Sv() {
  return VD;
}
var UD = ht({}, ql, { key: function(e) {
  if (e.key) {
    var t = LD[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Oc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? BD[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sv, charCode: function(e) {
  return e.type === "keypress" ? Oc(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Oc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $D = Gn(UD), zD = ht({}, Hf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ox = Gn(zD), WD = ht({}, ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sv }), jD = Gn(WD), GD = ht({}, ps, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), XD = Gn(GD), qD = ht({}, Hf, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), KD = Gn(qD), YD = [9, 13, 27, 32], bv = yi && "CompositionEvent" in window, sl = null;
yi && "documentMode" in document && (sl = document.documentMode);
var QD = yi && "TextEvent" in window && !sl, UC = yi && (!bv || sl && 8 < sl && 11 >= sl), Px = " ", Dx = !1;
function $C(e, t) {
  switch (e) {
    case "keyup":
      return YD.indexOf(t.keyCode) !== -1;
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
function zC(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Aa = !1;
function ZD(e, t) {
  switch (e) {
    case "compositionend":
      return zC(t);
    case "keypress":
      return t.which !== 32 ? null : (Dx = !0, Px);
    case "textInput":
      return e = t.data, e === Px && Dx ? null : e;
    default:
      return null;
  }
}
function JD(e, t) {
  if (Aa) return e === "compositionend" || !bv && $C(e, t) ? (e = VC(), Nc = Cv = Wi = null, Aa = !1, e) : null;
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
      return UC && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eF = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fx(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eF[e.type] : t === "textarea";
}
function WC(e, t, n, r) {
  wC(r), t = ef(t, "onChange"), 0 < t.length && (n = new _v("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ll = null, bl = null;
function tF(e) {
  t_(e, 0);
}
function Vf(e) {
  var t = Ia(e);
  if (pC(t)) return e;
}
function nF(e, t) {
  if (e === "change") return t;
}
var jC = !1;
if (yi) {
  var Jh;
  if (yi) {
    var ep = "oninput" in document;
    if (!ep) {
      var Mx = document.createElement("div");
      Mx.setAttribute("oninput", "return;"), ep = typeof Mx.oninput == "function";
    }
    Jh = ep;
  } else Jh = !1;
  jC = Jh && (!document.documentMode || 9 < document.documentMode);
}
function Lx() {
  ll && (ll.detachEvent("onpropertychange", GC), bl = ll = null);
}
function GC(e) {
  if (e.propertyName === "value" && Vf(bl)) {
    var t = [];
    WC(t, bl, e, gv(e)), bC(tF, t);
  }
}
function rF(e, t, n) {
  e === "focusin" ? (Lx(), ll = t, bl = n, ll.attachEvent("onpropertychange", GC)) : e === "focusout" && Lx();
}
function iF(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vf(bl);
}
function oF(e, t) {
  if (e === "click") return Vf(t);
}
function aF(e, t) {
  if (e === "input" || e === "change") return Vf(t);
}
function sF(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ir = typeof Object.is == "function" ? Object.is : sF;
function kl(e, t) {
  if (Ir(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Up.call(t, i) || !Ir(e[i], t[i])) return !1;
  }
  return !0;
}
function Bx(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hx(e, t) {
  var n = Bx(e);
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
    n = Bx(n);
  }
}
function XC(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? XC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qC() {
  for (var e = window, t = Xc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xc(e.document);
  }
  return t;
}
function kv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lF(e) {
  var t = qC(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && XC(n.ownerDocument.documentElement, n)) {
    if (r !== null && kv(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Hx(n, a);
        var l = Hx(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var uF = yi && "documentMode" in document && 11 >= document.documentMode, Ta = null, am = null, ul = null, sm = !1;
function Vx(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sm || Ta == null || Ta !== Xc(r) || (r = Ta, "selectionStart" in r && kv(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ul && kl(ul, r) || (ul = r, r = ef(am, "onSelect"), 0 < r.length && (t = new _v("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ta)));
}
function sc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ra = { animationend: sc("Animation", "AnimationEnd"), animationiteration: sc("Animation", "AnimationIteration"), animationstart: sc("Animation", "AnimationStart"), transitionend: sc("Transition", "TransitionEnd") }, tp = {}, KC = {};
yi && (KC = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
function Uf(e) {
  if (tp[e]) return tp[e];
  if (!Ra[e]) return e;
  var t = Ra[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in KC) return tp[e] = t[n];
  return e;
}
var YC = Uf("animationend"), QC = Uf("animationiteration"), ZC = Uf("animationstart"), JC = Uf("transitionend"), e_ = /* @__PURE__ */ new Map(), Ux = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function so(e, t) {
  e_.set(e, t), qo(t, [e]);
}
for (var np = 0; np < Ux.length; np++) {
  var rp = Ux[np], cF = rp.toLowerCase(), fF = rp[0].toUpperCase() + rp.slice(1);
  so(cF, "on" + fF);
}
so(YC, "onAnimationEnd");
so(QC, "onAnimationIteration");
so(ZC, "onAnimationStart");
so("dblclick", "onDoubleClick");
so("focusin", "onFocus");
so("focusout", "onBlur");
so(JC, "onTransitionEnd");
Ya("onMouseEnter", ["mouseout", "mouseover"]);
Ya("onMouseLeave", ["mouseout", "mouseover"]);
Ya("onPointerEnter", ["pointerout", "pointerover"]);
Ya("onPointerLeave", ["pointerout", "pointerover"]);
qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dF = new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));
function $x(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cD(r, t, void 0, e), e.currentTarget = null;
}
function t_(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], f = u.instance, d = u.currentTarget;
        if (u = u.listener, f !== a && i.isPropagationStopped()) break e;
        $x(i, u, d), a = f;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], f = u.instance, d = u.currentTarget, u = u.listener, f !== a && i.isPropagationStopped()) break e;
        $x(i, u, d), a = f;
      }
    }
  }
  if (Kc) throw e = nm, Kc = !1, nm = null, e;
}
function nt(e, t) {
  var n = t[dm];
  n === void 0 && (n = t[dm] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (n_(t, e, 2, !1), n.add(r));
}
function ip(e, t, n) {
  var r = 0;
  t && (r |= 4), n_(n, e, r, t);
}
var lc = "_reactListening" + Math.random().toString(36).slice(2);
function Al(e) {
  if (!e[lc]) {
    e[lc] = !0, uC.forEach(function(n) {
      n !== "selectionchange" && (dF.has(n) || ip(n, !1, e), ip(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[lc] || (t[lc] = !0, ip("selectionchange", !1, t));
  }
}
function n_(e, t, n, r) {
  switch (HC(t)) {
    case 1:
      var i = kD;
      break;
    case 4:
      i = AD;
      break;
    default:
      i = wv;
  }
  n = i.bind(null, t, n, e), i = void 0, !tm || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function op(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var f = l.tag;
        if ((f === 3 || f === 4) && (f = l.stateNode.containerInfo, f === i || f.nodeType === 8 && f.parentNode === i)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = Ro(u), l === null) return;
        if (f = l.tag, f === 5 || f === 6) {
          r = a = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  bC(function() {
    var d = a, h = gv(n), m = [];
    e: {
      var v = e_.get(e);
      if (v !== void 0) {
        var x = _v, A = e;
        switch (e) {
          case "keypress":
            if (Oc(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = $D;
            break;
          case "focusin":
            A = "focus", x = Zh;
            break;
          case "focusout":
            A = "blur", x = Zh;
            break;
          case "beforeblur":
          case "afterblur":
            x = Zh;
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
            x = Ix;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ID;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jD;
            break;
          case YC:
          case QC:
          case ZC:
            x = PD;
            break;
          case JC:
            x = XD;
            break;
          case "scroll":
            x = TD;
            break;
          case "wheel":
            x = KD;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = FD;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ox;
        }
        var S = (t & 4) !== 0, R = !S && e === "scroll", w = S ? v !== null ? v + "Capture" : null : v;
        S = [];
        for (var C = d, k; C !== null; ) {
          k = C;
          var I = k.stateNode;
          if (k.tag === 5 && I !== null && (k = I, w !== null && (I = wl(C, w), I != null && S.push(Tl(C, I, k)))), R) break;
          C = C.return;
        }
        0 < S.length && (v = new x(v, A, null, n, h), m.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== Jp && (A = n.relatedTarget || n.fromElement) && (Ro(A) || A[Ei])) break e;
        if ((x || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (A = n.relatedTarget || n.toElement, x = d, A = A ? Ro(A) : null, A !== null && (R = Ko(A), A !== R || A.tag !== 5 && A.tag !== 6) && (A = null)) : (x = null, A = d), x !== A)) {
          if (S = Ix, I = "onMouseLeave", w = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (S = Ox, I = "onPointerLeave", w = "onPointerEnter", C = "pointer"), R = x == null ? v : Ia(x), k = A == null ? v : Ia(A), v = new S(I, C + "leave", x, n, h), v.target = R, v.relatedTarget = k, I = null, Ro(h) === d && (S = new S(w, C + "enter", A, n, h), S.target = k, S.relatedTarget = R, I = S), R = I, x && A) t: {
            for (S = x, w = A, C = 0, k = S; k; k = ya(k)) C++;
            for (k = 0, I = w; I; I = ya(I)) k++;
            for (; 0 < C - k; ) S = ya(S), C--;
            for (; 0 < k - C; ) w = ya(w), k--;
            for (; C--; ) {
              if (S === w || w !== null && S === w.alternate) break t;
              S = ya(S), w = ya(w);
            }
            S = null;
          }
          else S = null;
          x !== null && zx(m, v, x, S, !1), A !== null && R !== null && zx(m, R, A, S, !0);
        }
      }
      e: {
        if (v = d ? Ia(d) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var O = nF;
        else if (Fx(v)) if (jC) O = aF;
        else {
          O = iF;
          var D = rF;
        }
        else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (O = oF);
        if (O && (O = O(e, d))) {
          WC(m, O, n, h);
          break e;
        }
        D && D(e, v, d), e === "focusout" && (D = v._wrapperState) && D.controlled && v.type === "number" && qp(v, "number", v.value);
      }
      switch (D = d ? Ia(d) : window, e) {
        case "focusin":
          (Fx(D) || D.contentEditable === "true") && (Ta = D, am = d, ul = null);
          break;
        case "focusout":
          ul = am = Ta = null;
          break;
        case "mousedown":
          sm = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sm = !1, Vx(m, n, h);
          break;
        case "selectionchange":
          if (uF) break;
        case "keydown":
        case "keyup":
          Vx(m, n, h);
      }
      var F;
      if (bv) e: {
        switch (e) {
          case "compositionstart":
            var B = "onCompositionStart";
            break e;
          case "compositionend":
            B = "onCompositionEnd";
            break e;
          case "compositionupdate":
            B = "onCompositionUpdate";
            break e;
        }
        B = void 0;
      }
      else Aa ? $C(e, n) && (B = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (B = "onCompositionStart");
      B && (UC && n.locale !== "ko" && (Aa || B !== "onCompositionStart" ? B === "onCompositionEnd" && Aa && (F = VC()) : (Wi = h, Cv = "value" in Wi ? Wi.value : Wi.textContent, Aa = !0)), D = ef(d, B), 0 < D.length && (B = new Nx(B, e, null, n, h), m.push({ event: B, listeners: D }), F ? B.data = F : (F = zC(n), F !== null && (B.data = F)))), (F = QD ? ZD(e, n) : JD(e, n)) && (d = ef(d, "onBeforeInput"), 0 < d.length && (h = new Nx("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: d }), h.data = F));
    }
    t_(m, t);
  });
}
function Tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ef(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = wl(e, n), a != null && r.unshift(Tl(e, a, i)), a = wl(e, t), a != null && r.push(Tl(e, a, i))), e = e.return;
  }
  return r;
}
function ya(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zx(e, t, n, r, i) {
  for (var a = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, f = u.alternate, d = u.stateNode;
    if (f !== null && f === r) break;
    u.tag === 5 && d !== null && (u = d, i ? (f = wl(n, a), f != null && l.unshift(Tl(n, f, u))) : i || (f = wl(n, a), f != null && l.push(Tl(n, f, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var hF = /\r\n?/g, pF = /\u0000|\uFFFD/g;
function Wx(e) {
  return (typeof e == "string" ? e : "" + e).replace(hF, `
`).replace(pF, "");
}
function uc(e, t, n) {
  if (t = Wx(t), Wx(e) !== t && n) throw Error(K(425));
}
function tf() {
}
var lm = null, um = null;
function cm(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fm = typeof setTimeout == "function" ? setTimeout : void 0, mF = typeof clearTimeout == "function" ? clearTimeout : void 0, jx = typeof Promise == "function" ? Promise : void 0, vF = typeof queueMicrotask == "function" ? queueMicrotask : typeof jx < "u" ? function(e) {
  return jx.resolve(null).then(e).catch(gF);
} : fm;
function gF(e) {
  setTimeout(function() {
    throw e;
  });
}
function ap(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Sl(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Sl(t);
}
function Yi(e) {
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
function Gx(e) {
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
var ms = Math.random().toString(36).slice(2), jr = "__reactFiber$" + ms, Rl = "__reactProps$" + ms, Ei = "__reactContainer$" + ms, dm = "__reactEvents$" + ms, yF = "__reactListeners$" + ms, EF = "__reactHandles$" + ms;
function Ro(e) {
  var t = e[jr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ei] || n[jr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gx(e); e !== null; ) {
        if (n = e[jr]) return n;
        e = Gx(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kl(e) {
  return e = e[jr] || e[Ei], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ia(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function $f(e) {
  return e[Rl] || null;
}
var hm = [], Na = -1;
function lo(e) {
  return { current: e };
}
function it(e) {
  0 > Na || (e.current = hm[Na], hm[Na] = null, Na--);
}
function Qe(e, t) {
  Na++, hm[Na] = e.current, e.current = t;
}
var ro = {}, en = lo(ro), kn = lo(!1), Vo = ro;
function Qa(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ro;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function An(e) {
  return e = e.childContextTypes, e != null;
}
function nf() {
  it(kn), it(en);
}
function Xx(e, t, n) {
  if (en.current !== ro) throw Error(K(168));
  Qe(en, t), Qe(kn, n);
}
function r_(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(K(108, rD(e) || "Unknown", i));
  return ht({}, n, r);
}
function rf(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ro, Vo = en.current, Qe(en, e), Qe(kn, kn.current), !0;
}
function qx(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n ? (e = r_(e, t, Vo), r.__reactInternalMemoizedMergedChildContext = e, it(kn), it(en), Qe(en, e)) : it(kn), Qe(kn, n);
}
var di = null, zf = !1, sp = !1;
function i_(e) {
  di === null ? di = [e] : di.push(e);
}
function xF(e) {
  zf = !0, i_(e);
}
function uo() {
  if (!sp && di !== null) {
    sp = !0;
    var e = 0, t = We;
    try {
      var n = di;
      for (We = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      di = null, zf = !1;
    } catch (i) {
      throw di !== null && (di = di.slice(e + 1)), RC(yv, uo), i;
    } finally {
      We = t, sp = !1;
    }
  }
  return null;
}
var Oa = [], Pa = 0, of = null, af = 0, sr = [], lr = 0, Uo = null, mi = 1, vi = "";
function Ao(e, t) {
  Oa[Pa++] = af, Oa[Pa++] = of, of = e, af = t;
}
function o_(e, t, n) {
  sr[lr++] = mi, sr[lr++] = vi, sr[lr++] = Uo, Uo = e;
  var r = mi;
  e = vi;
  var i = 32 - Tr(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Tr(t) + i;
  if (30 < a) {
    var l = i - i % 5;
    a = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, mi = 1 << 32 - Tr(t) + i | n << i | r, vi = a + e;
  } else mi = 1 << a | n << i | r, vi = e;
}
function Av(e) {
  e.return !== null && (Ao(e, 1), o_(e, 1, 0));
}
function Tv(e) {
  for (; e === of; ) of = Oa[--Pa], Oa[Pa] = null, af = Oa[--Pa], Oa[Pa] = null;
  for (; e === Uo; ) Uo = sr[--lr], sr[lr] = null, vi = sr[--lr], sr[lr] = null, mi = sr[--lr], sr[lr] = null;
}
var $n = null, Un = null, st = !1, Ar = null;
function a_(e, t) {
  var n = ur(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Kx(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $n = e, Un = Yi(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $n = e, Un = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Uo !== null ? { id: mi, overflow: vi } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ur(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $n = e, Un = null, !0) : !1;
    default:
      return !1;
  }
}
function pm(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mm(e) {
  if (st) {
    var t = Un;
    if (t) {
      var n = t;
      if (!Kx(e, t)) {
        if (pm(e)) throw Error(K(418));
        t = Yi(n.nextSibling);
        var r = $n;
        t && Kx(e, t) ? a_(r, n) : (e.flags = e.flags & -4097 | 2, st = !1, $n = e);
      }
    } else {
      if (pm(e)) throw Error(K(418));
      e.flags = e.flags & -4097 | 2, st = !1, $n = e;
    }
  }
}
function Yx(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $n = e;
}
function cc(e) {
  if (e !== $n) return !1;
  if (!st) return Yx(e), st = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cm(e.type, e.memoizedProps)), t && (t = Un)) {
    if (pm(e)) throw s_(), Error(K(418));
    for (; t; ) a_(e, t), t = Yi(t.nextSibling);
  }
  if (Yx(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Un = Yi(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Un = null;
    }
  } else Un = $n ? Yi(e.stateNode.nextSibling) : null;
  return !0;
}
function s_() {
  for (var e = Un; e; ) e = Yi(e.nextSibling);
}
function Za() {
  Un = $n = null, st = !1;
}
function Rv(e) {
  Ar === null ? Ar = [e] : Ar.push(e);
}
var wF = Si.ReactCurrentBatchConfig;
function Ks(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(K(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(K(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[a] : u[a] = l;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(K(284));
    if (!n._owner) throw Error(K(290, e));
  }
  return e;
}
function fc(e, t) {
  throw e = Object.prototype.toString.call(t), Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Qx(e) {
  var t = e._init;
  return t(e._payload);
}
function l_(e) {
  function t(w, C) {
    if (e) {
      var k = w.deletions;
      k === null ? (w.deletions = [C], w.flags |= 16) : k.push(C);
    }
  }
  function n(w, C) {
    if (!e) return null;
    for (; C !== null; ) t(w, C), C = C.sibling;
    return null;
  }
  function r(w, C) {
    for (w = /* @__PURE__ */ new Map(); C !== null; ) C.key !== null ? w.set(C.key, C) : w.set(C.index, C), C = C.sibling;
    return w;
  }
  function i(w, C) {
    return w = eo(w, C), w.index = 0, w.sibling = null, w;
  }
  function a(w, C, k) {
    return w.index = k, e ? (k = w.alternate, k !== null ? (k = k.index, k < C ? (w.flags |= 2, C) : k) : (w.flags |= 2, C)) : (w.flags |= 1048576, C);
  }
  function l(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function u(w, C, k, I) {
    return C === null || C.tag !== 6 ? (C = pp(k, w.mode, I), C.return = w, C) : (C = i(C, k), C.return = w, C);
  }
  function f(w, C, k, I) {
    var O = k.type;
    return O === ka ? h(w, C, k.props.children, I, k.key) : C !== null && (C.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Li && Qx(O) === C.type) ? (I = i(C, k.props), I.ref = Ks(w, C, k), I.return = w, I) : (I = Hc(k.type, k.key, k.props, null, w.mode, I), I.ref = Ks(w, C, k), I.return = w, I);
  }
  function d(w, C, k, I) {
    return C === null || C.tag !== 4 || C.stateNode.containerInfo !== k.containerInfo || C.stateNode.implementation !== k.implementation ? (C = mp(k, w.mode, I), C.return = w, C) : (C = i(C, k.children || []), C.return = w, C);
  }
  function h(w, C, k, I, O) {
    return C === null || C.tag !== 7 ? (C = Mo(k, w.mode, I, O), C.return = w, C) : (C = i(C, k), C.return = w, C);
  }
  function m(w, C, k) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return C = pp("" + C, w.mode, k), C.return = w, C;
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ec:
          return k = Hc(C.type, C.key, C.props, null, w.mode, k), k.ref = Ks(w, null, C), k.return = w, k;
        case ba:
          return C = mp(C, w.mode, k), C.return = w, C;
        case Li:
          var I = C._init;
          return m(w, I(C._payload), k);
      }
      if (tl(C) || Ws(C)) return C = Mo(C, w.mode, k, null), C.return = w, C;
      fc(w, C);
    }
    return null;
  }
  function v(w, C, k, I) {
    var O = C !== null ? C.key : null;
    if (typeof k == "string" && k !== "" || typeof k == "number") return O !== null ? null : u(w, C, "" + k, I);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ec:
          return k.key === O ? f(w, C, k, I) : null;
        case ba:
          return k.key === O ? d(w, C, k, I) : null;
        case Li:
          return O = k._init, v(
            w,
            C,
            O(k._payload),
            I
          );
      }
      if (tl(k) || Ws(k)) return O !== null ? null : h(w, C, k, I, null);
      fc(w, k);
    }
    return null;
  }
  function x(w, C, k, I, O) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return w = w.get(k) || null, u(C, w, "" + I, O);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case ec:
          return w = w.get(I.key === null ? k : I.key) || null, f(C, w, I, O);
        case ba:
          return w = w.get(I.key === null ? k : I.key) || null, d(C, w, I, O);
        case Li:
          var D = I._init;
          return x(w, C, k, D(I._payload), O);
      }
      if (tl(I) || Ws(I)) return w = w.get(k) || null, h(C, w, I, O, null);
      fc(C, I);
    }
    return null;
  }
  function A(w, C, k, I) {
    for (var O = null, D = null, F = C, B = C = 0, $ = null; F !== null && B < k.length; B++) {
      F.index > B ? ($ = F, F = null) : $ = F.sibling;
      var j = v(w, F, k[B], I);
      if (j === null) {
        F === null && (F = $);
        break;
      }
      e && F && j.alternate === null && t(w, F), C = a(j, C, B), D === null ? O = j : D.sibling = j, D = j, F = $;
    }
    if (B === k.length) return n(w, F), st && Ao(w, B), O;
    if (F === null) {
      for (; B < k.length; B++) F = m(w, k[B], I), F !== null && (C = a(F, C, B), D === null ? O = F : D.sibling = F, D = F);
      return st && Ao(w, B), O;
    }
    for (F = r(w, F); B < k.length; B++) $ = x(F, w, B, k[B], I), $ !== null && (e && $.alternate !== null && F.delete($.key === null ? B : $.key), C = a($, C, B), D === null ? O = $ : D.sibling = $, D = $);
    return e && F.forEach(function(Q) {
      return t(w, Q);
    }), st && Ao(w, B), O;
  }
  function S(w, C, k, I) {
    var O = Ws(k);
    if (typeof O != "function") throw Error(K(150));
    if (k = O.call(k), k == null) throw Error(K(151));
    for (var D = O = null, F = C, B = C = 0, $ = null, j = k.next(); F !== null && !j.done; B++, j = k.next()) {
      F.index > B ? ($ = F, F = null) : $ = F.sibling;
      var Q = v(w, F, j.value, I);
      if (Q === null) {
        F === null && (F = $);
        break;
      }
      e && F && Q.alternate === null && t(w, F), C = a(Q, C, B), D === null ? O = Q : D.sibling = Q, D = Q, F = $;
    }
    if (j.done) return n(
      w,
      F
    ), st && Ao(w, B), O;
    if (F === null) {
      for (; !j.done; B++, j = k.next()) j = m(w, j.value, I), j !== null && (C = a(j, C, B), D === null ? O = j : D.sibling = j, D = j);
      return st && Ao(w, B), O;
    }
    for (F = r(w, F); !j.done; B++, j = k.next()) j = x(F, w, B, j.value, I), j !== null && (e && j.alternate !== null && F.delete(j.key === null ? B : j.key), C = a(j, C, B), D === null ? O = j : D.sibling = j, D = j);
    return e && F.forEach(function(ne) {
      return t(w, ne);
    }), st && Ao(w, B), O;
  }
  function R(w, C, k, I) {
    if (typeof k == "object" && k !== null && k.type === ka && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ec:
          e: {
            for (var O = k.key, D = C; D !== null; ) {
              if (D.key === O) {
                if (O = k.type, O === ka) {
                  if (D.tag === 7) {
                    n(w, D.sibling), C = i(D, k.props.children), C.return = w, w = C;
                    break e;
                  }
                } else if (D.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Li && Qx(O) === D.type) {
                  n(w, D.sibling), C = i(D, k.props), C.ref = Ks(w, D, k), C.return = w, w = C;
                  break e;
                }
                n(w, D);
                break;
              } else t(w, D);
              D = D.sibling;
            }
            k.type === ka ? (C = Mo(k.props.children, w.mode, I, k.key), C.return = w, w = C) : (I = Hc(k.type, k.key, k.props, null, w.mode, I), I.ref = Ks(w, C, k), I.return = w, w = I);
          }
          return l(w);
        case ba:
          e: {
            for (D = k.key; C !== null; ) {
              if (C.key === D) if (C.tag === 4 && C.stateNode.containerInfo === k.containerInfo && C.stateNode.implementation === k.implementation) {
                n(w, C.sibling), C = i(C, k.children || []), C.return = w, w = C;
                break e;
              } else {
                n(w, C);
                break;
              }
              else t(w, C);
              C = C.sibling;
            }
            C = mp(k, w.mode, I), C.return = w, w = C;
          }
          return l(w);
        case Li:
          return D = k._init, R(w, C, D(k._payload), I);
      }
      if (tl(k)) return A(w, C, k, I);
      if (Ws(k)) return S(w, C, k, I);
      fc(w, k);
    }
    return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, C !== null && C.tag === 6 ? (n(w, C.sibling), C = i(C, k), C.return = w, w = C) : (n(w, C), C = pp(k, w.mode, I), C.return = w, w = C), l(w)) : n(w, C);
  }
  return R;
}
var Ja = l_(!0), u_ = l_(!1), sf = lo(null), lf = null, Da = null, Iv = null;
function Nv() {
  Iv = Da = lf = null;
}
function Ov(e) {
  var t = sf.current;
  it(sf), e._currentValue = t;
}
function vm(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Wa(e, t) {
  lf = e, Iv = Da = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (bn = !0), e.firstContext = null);
}
function fr(e) {
  var t = e._currentValue;
  if (Iv !== e) if (e = { context: e, memoizedValue: t, next: null }, Da === null) {
    if (lf === null) throw Error(K(308));
    Da = e, lf.dependencies = { lanes: 0, firstContext: e };
  } else Da = Da.next = e;
  return t;
}
var Io = null;
function Pv(e) {
  Io === null ? Io = [e] : Io.push(e);
}
function c_(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Pv(t)) : (n.next = i.next, i.next = n), t.interleaved = n, xi(e, r);
}
function xi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bi = !1;
function Dv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function f_(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gi(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qi(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Me & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, xi(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Pv(r)) : (t.next = i.next, i.next = t), r.interleaved = t, xi(e, n);
}
function Pc(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ev(e, n);
  }
}
function Zx(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? i = a = l : a = a.next = l, n = n.next;
      } while (n !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function uf(e, t, n, r) {
  var i = e.updateQueue;
  Bi = !1;
  var a = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var f = u, d = f.next;
    f.next = null, l === null ? a = d : l.next = d, l = f;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = d : u.next = d, h.lastBaseUpdate = f));
  }
  if (a !== null) {
    var m = i.baseState;
    l = 0, h = d = f = null, u = a;
    do {
      var v = u.lane, x = u.eventTime;
      if ((r & v) === v) {
        h !== null && (h = h.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var A = e, S = u;
          switch (v = t, x = n, S.tag) {
            case 1:
              if (A = S.payload, typeof A == "function") {
                m = A.call(x, m, v);
                break e;
              }
              m = A;
              break e;
            case 3:
              A.flags = A.flags & -65537 | 128;
            case 0:
              if (A = S.payload, v = typeof A == "function" ? A.call(x, m, v) : A, v == null) break e;
              m = ht({}, m, v);
              break e;
            case 2:
              Bi = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [u] : v.push(u));
      } else x = { eventTime: x, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (d = h = x, f = m) : h = h.next = x, l |= v;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null;
      }
    } while (!0);
    if (h === null && (f = m), i.baseState = f, i.firstBaseUpdate = d, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    zo |= l, e.lanes = l, e.memoizedState = m;
  }
}
function Jx(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(K(191, i));
      i.call(r);
    }
  }
}
var Yl = {}, Kr = lo(Yl), Il = lo(Yl), Nl = lo(Yl);
function No(e) {
  if (e === Yl) throw Error(K(174));
  return e;
}
function Fv(e, t) {
  switch (Qe(Nl, t), Qe(Il, e), Qe(Kr, Yl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yp(t, e);
  }
  it(Kr), Qe(Kr, t);
}
function es() {
  it(Kr), it(Il), it(Nl);
}
function d_(e) {
  No(Nl.current);
  var t = No(Kr.current), n = Yp(t, e.type);
  t !== n && (Qe(Il, e), Qe(Kr, n));
}
function Mv(e) {
  Il.current === e && (it(Kr), it(Il));
}
var ft = lo(0);
function cf(e) {
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
var lp = [];
function Lv() {
  for (var e = 0; e < lp.length; e++) lp[e]._workInProgressVersionPrimary = null;
  lp.length = 0;
}
var Dc = Si.ReactCurrentDispatcher, up = Si.ReactCurrentBatchConfig, $o = 0, dt = null, kt = null, Pt = null, ff = !1, cl = !1, Ol = 0, CF = 0;
function qt() {
  throw Error(K(321));
}
function Bv(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ir(e[n], t[n])) return !1;
  return !0;
}
function Hv(e, t, n, r, i, a) {
  if ($o = a, dt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dc.current = e === null || e.memoizedState === null ? kF : AF, e = n(r, i), cl) {
    a = 0;
    do {
      if (cl = !1, Ol = 0, 25 <= a) throw Error(K(301));
      a += 1, Pt = kt = null, t.updateQueue = null, Dc.current = TF, e = n(r, i);
    } while (cl);
  }
  if (Dc.current = df, t = kt !== null && kt.next !== null, $o = 0, Pt = kt = dt = null, ff = !1, t) throw Error(K(300));
  return e;
}
function Vv() {
  var e = Ol !== 0;
  return Ol = 0, e;
}
function Wr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pt === null ? dt.memoizedState = Pt = e : Pt = Pt.next = e, Pt;
}
function dr() {
  if (kt === null) {
    var e = dt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = kt.next;
  var t = Pt === null ? dt.memoizedState : Pt.next;
  if (t !== null) Pt = t, kt = e;
  else {
    if (e === null) throw Error(K(310));
    kt = e, e = { memoizedState: kt.memoizedState, baseState: kt.baseState, baseQueue: kt.baseQueue, queue: kt.queue, next: null }, Pt === null ? dt.memoizedState = Pt = e : Pt = Pt.next = e;
  }
  return Pt;
}
function Pl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cp(e) {
  var t = dr(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = kt, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = a.next, a.next = l;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    a = i.next, r = r.baseState;
    var u = l = null, f = null, d = a;
    do {
      var h = d.lane;
      if (($o & h) === h) f !== null && (f = f.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        f === null ? (u = f = m, l = r) : f = f.next = m, dt.lanes |= h, zo |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    f === null ? l = r : f.next = u, Ir(r, t.memoizedState) || (bn = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = f, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, dt.lanes |= a, zo |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fp(e) {
  var t = dr(), n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      a = e(a, l.action), l = l.next;
    while (l !== i);
    Ir(a, t.memoizedState) || (bn = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function h_() {
}
function p_(e, t) {
  var n = dt, r = dr(), i = t(), a = !Ir(r.memoizedState, i);
  if (a && (r.memoizedState = i, bn = !0), r = r.queue, Uv(g_.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Pt !== null && Pt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dl(9, v_.bind(null, n, r, i, t), void 0, null), Ft === null) throw Error(K(349));
    $o & 30 || m_(n, t, i);
  }
  return i;
}
function m_(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function v_(e, t, n, r) {
  t.value = n, t.getSnapshot = r, y_(t) && E_(e);
}
function g_(e, t, n) {
  return n(function() {
    y_(t) && E_(e);
  });
}
function y_(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ir(e, n);
  } catch {
    return !0;
  }
}
function E_(e) {
  var t = xi(e, 1);
  t !== null && Rr(t, e, 1, -1);
}
function e1(e) {
  var t = Wr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: e }, t.queue = e, e = e.dispatch = bF.bind(null, dt, e), [t.memoizedState, e];
}
function Dl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function x_() {
  return dr().memoizedState;
}
function Fc(e, t, n, r) {
  var i = Wr();
  dt.flags |= e, i.memoizedState = Dl(1 | t, n, void 0, r === void 0 ? null : r);
}
function Wf(e, t, n, r) {
  var i = dr();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (kt !== null) {
    var l = kt.memoizedState;
    if (a = l.destroy, r !== null && Bv(r, l.deps)) {
      i.memoizedState = Dl(t, n, a, r);
      return;
    }
  }
  dt.flags |= e, i.memoizedState = Dl(1 | t, n, a, r);
}
function t1(e, t) {
  return Fc(8390656, 8, e, t);
}
function Uv(e, t) {
  return Wf(2048, 8, e, t);
}
function w_(e, t) {
  return Wf(4, 2, e, t);
}
function C_(e, t) {
  return Wf(4, 4, e, t);
}
function __(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function S_(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wf(4, 4, __.bind(null, t, e), n);
}
function $v() {
}
function b_(e, t) {
  var n = dr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function k_(e, t) {
  var n = dr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function A_(e, t, n) {
  return $o & 21 ? (Ir(n, t) || (n = OC(), dt.lanes |= n, zo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bn = !0), e.memoizedState = n);
}
function _F(e, t) {
  var n = We;
  We = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = up.transition;
  up.transition = {};
  try {
    e(!1), t();
  } finally {
    We = n, up.transition = r;
  }
}
function T_() {
  return dr().memoizedState;
}
function SF(e, t, n) {
  var r = Ji(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, R_(e)) I_(t, n);
  else if (n = c_(e, t, n, r), n !== null) {
    var i = pn();
    Rr(n, e, r, i), N_(n, t, r);
  }
}
function bF(e, t, n) {
  var r = Ji(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (R_(e)) I_(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var l = t.lastRenderedState, u = a(l, n);
      if (i.hasEagerState = !0, i.eagerState = u, Ir(u, l)) {
        var f = t.interleaved;
        f === null ? (i.next = i, Pv(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = c_(e, t, i, r), n !== null && (i = pn(), Rr(n, e, r, i), N_(n, t, r));
  }
}
function R_(e) {
  var t = e.alternate;
  return e === dt || t !== null && t === dt;
}
function I_(e, t) {
  cl = ff = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function N_(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ev(e, n);
  }
}
var df = { readContext: fr, useCallback: qt, useContext: qt, useEffect: qt, useImperativeHandle: qt, useInsertionEffect: qt, useLayoutEffect: qt, useMemo: qt, useReducer: qt, useRef: qt, useState: qt, useDebugValue: qt, useDeferredValue: qt, useTransition: qt, useMutableSource: qt, useSyncExternalStore: qt, useId: qt, unstable_isNewReconciler: !1 }, kF = { readContext: fr, useCallback: function(e, t) {
  return Wr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: fr, useEffect: t1, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fc(
    4194308,
    4,
    __.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fc(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fc(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = SF.bind(null, dt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wr();
  return e = { current: e }, t.memoizedState = e;
}, useState: e1, useDebugValue: $v, useDeferredValue: function(e) {
  return Wr().memoizedState = e;
}, useTransition: function() {
  var e = e1(!1), t = e[0];
  return e = _F.bind(null, e[1]), Wr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = dt, i = Wr();
  if (st) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = t(), Ft === null) throw Error(K(349));
    $o & 30 || m_(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, t1(g_.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Dl(9, v_.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Wr(), t = Ft.identifierPrefix;
  if (st) {
    var n = vi, r = mi;
    n = (r & ~(1 << 32 - Tr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ol++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = CF++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, AF = {
  readContext: fr,
  useCallback: b_,
  useContext: fr,
  useEffect: Uv,
  useImperativeHandle: S_,
  useInsertionEffect: w_,
  useLayoutEffect: C_,
  useMemo: k_,
  useReducer: cp,
  useRef: x_,
  useState: function() {
    return cp(Pl);
  },
  useDebugValue: $v,
  useDeferredValue: function(e) {
    var t = dr();
    return A_(t, kt.memoizedState, e);
  },
  useTransition: function() {
    var e = cp(Pl)[0], t = dr().memoizedState;
    return [e, t];
  },
  useMutableSource: h_,
  useSyncExternalStore: p_,
  useId: T_,
  unstable_isNewReconciler: !1
}, TF = { readContext: fr, useCallback: b_, useContext: fr, useEffect: Uv, useImperativeHandle: S_, useInsertionEffect: w_, useLayoutEffect: C_, useMemo: k_, useReducer: fp, useRef: x_, useState: function() {
  return fp(Pl);
}, useDebugValue: $v, useDeferredValue: function(e) {
  var t = dr();
  return kt === null ? t.memoizedState = e : A_(t, kt.memoizedState, e);
}, useTransition: function() {
  var e = fp(Pl)[0], t = dr().memoizedState;
  return [e, t];
}, useMutableSource: h_, useSyncExternalStore: p_, useId: T_, unstable_isNewReconciler: !1 };
function Sr(e, t) {
  if (e && e.defaultProps) {
    t = ht({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gm(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ht({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jf = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ko(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pn(), i = Ji(e), a = gi(r, i);
  a.payload = t, n != null && (a.callback = n), t = Qi(e, a, i), t !== null && (Rr(t, e, i, r), Pc(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pn(), i = Ji(e), a = gi(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Qi(e, a, i), t !== null && (Rr(t, e, i, r), Pc(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pn(), r = Ji(e), i = gi(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Qi(e, i, r), t !== null && (Rr(t, e, r, n), Pc(t, e, r));
} };
function n1(e, t, n, r, i, a, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, l) : t.prototype && t.prototype.isPureReactComponent ? !kl(n, r) || !kl(i, a) : !0;
}
function O_(e, t, n) {
  var r = !1, i = ro, a = t.contextType;
  return typeof a == "object" && a !== null ? a = fr(a) : (i = An(t) ? Vo : en.current, r = t.contextTypes, a = (r = r != null) ? Qa(e, i) : ro), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jf, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function r1(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jf.enqueueReplaceState(t, t.state, null);
}
function ym(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Dv(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = fr(a) : (a = An(t) ? Vo : en.current, i.context = Qa(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (gm(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && jf.enqueueReplaceState(i, i.state, null), uf(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ts(e, t) {
  try {
    var n = "", r = t;
    do
      n += nD(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function dp(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Em(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var RF = typeof WeakMap == "function" ? WeakMap : Map;
function P_(e, t, n) {
  n = gi(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pf || (pf = !0, Rm = r), Em(e, t);
  }, n;
}
function D_(e, t, n) {
  n = gi(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Em(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Em(e, t), typeof r != "function" && (Zi === null ? Zi = /* @__PURE__ */ new Set([this]) : Zi.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function i1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new RF();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = zF.bind(null, e, t, n), t.then(e, e));
}
function o1(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function a1(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gi(-1, 1), t.tag = 2, Qi(n, t, 1))), n.lanes |= 1), e);
}
var IF = Si.ReactCurrentOwner, bn = !1;
function fn(e, t, n, r) {
  t.child = e === null ? u_(t, null, n, r) : Ja(t, e.child, n, r);
}
function s1(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return Wa(t, i), r = Hv(e, t, n, r, a, i), n = Vv(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wi(e, t, i)) : (st && n && Av(t), t.flags |= 1, fn(e, t, r, i), t.child);
}
function l1(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Yv(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, F_(e, t, a, r, i)) : (e = Hc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var l = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kl, n(l, r) && e.ref === t.ref) return wi(e, t, i);
  }
  return t.flags |= 1, e = eo(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function F_(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (kl(a, r) && e.ref === t.ref) if (bn = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (bn = !0);
    else return t.lanes = e.lanes, wi(e, t, i);
  }
  return xm(e, t, n, r, i);
}
function M_(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(Ma, Hn), Hn |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Qe(Ma, Hn), Hn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Qe(Ma, Hn), Hn |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Qe(Ma, Hn), Hn |= r;
  return fn(e, t, i, n), t.child;
}
function L_(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function xm(e, t, n, r, i) {
  var a = An(n) ? Vo : en.current;
  return a = Qa(t, a), Wa(t, i), n = Hv(e, t, n, r, a, i), r = Vv(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wi(e, t, i)) : (st && r && Av(t), t.flags |= 1, fn(e, t, n, i), t.child);
}
function u1(e, t, n, r, i) {
  if (An(n)) {
    var a = !0;
    rf(t);
  } else a = !1;
  if (Wa(t, i), t.stateNode === null) Mc(e, t), O_(t, n, r), ym(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var f = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = fr(d) : (d = An(n) ? Vo : en.current, d = Qa(t, d));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || f !== d) && r1(t, l, r, d), Bi = !1;
    var v = t.memoizedState;
    l.state = v, uf(t, r, l, i), f = t.memoizedState, u !== r || v !== f || kn.current || Bi ? (typeof h == "function" && (gm(t, n, h, r), f = t.memoizedState), (u = Bi || n1(t, n, u, r, v, f, d)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), l.props = r, l.state = f, l.context = d, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, f_(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Sr(t.type, u), l.props = d, m = t.pendingProps, v = l.context, f = n.contextType, typeof f == "object" && f !== null ? f = fr(f) : (f = An(n) ? Vo : en.current, f = Qa(t, f));
    var x = n.getDerivedStateFromProps;
    (h = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || v !== f) && r1(t, l, r, f), Bi = !1, v = t.memoizedState, l.state = v, uf(t, r, l, i);
    var A = t.memoizedState;
    u !== m || v !== A || kn.current || Bi ? (typeof x == "function" && (gm(t, n, x, r), A = t.memoizedState), (d = Bi || n1(t, n, d, r, v, A, f) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, A, f), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, A, f)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = A), l.props = r, l.state = A, l.context = f, r = d) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return wm(e, t, n, r, a, i);
}
function wm(e, t, n, r, i, a) {
  L_(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && qx(t, n, !1), wi(e, t, a);
  r = t.stateNode, IF.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Ja(t, e.child, null, a), t.child = Ja(t, null, u, a)) : fn(e, t, u, a), t.memoizedState = r.state, i && qx(t, n, !0), t.child;
}
function B_(e) {
  var t = e.stateNode;
  t.pendingContext ? Xx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xx(e, t.context, !1), Fv(e, t.containerInfo);
}
function c1(e, t, n, r, i) {
  return Za(), Rv(i), t.flags |= 256, fn(e, t, n, r), t.child;
}
var Cm = { dehydrated: null, treeContext: null, retryLane: 0 };
function _m(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function H_(e, t, n) {
  var r = t.pendingProps, i = ft.current, a = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Qe(ft, i & 1), e === null)
    return mm(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, l = { mode: "hidden", children: l }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = qf(l, r, 0, null), e = Mo(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = _m(n), t.memoizedState = Cm, e) : zv(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return NF(e, t, l, r, u, i, n);
  if (a) {
    a = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var f = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = eo(i, f), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? a = eo(u, a) : (a = Mo(a, l, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, l = e.child.memoizedState, l = l === null ? _m(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, a.memoizedState = l, a.childLanes = e.childLanes & ~n, t.memoizedState = Cm, r;
  }
  return a = e.child, e = a.sibling, r = eo(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function zv(e, t) {
  return t = qf({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function dc(e, t, n, r) {
  return r !== null && Rv(r), Ja(t, e.child, null, n), e = zv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function NF(e, t, n, r, i, a, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = dp(Error(K(422))), dc(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = qf({ mode: "visible", children: r.children }, i, 0, null), a = Mo(a, i, l, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Ja(t, e.child, null, l), t.child.memoizedState = _m(l), t.memoizedState = Cm, a);
  if (!(t.mode & 1)) return dc(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, a = Error(K(419)), r = dp(a, r, void 0), dc(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, bn || u) {
    if (r = Ft, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, xi(e, i), Rr(r, e, i, -1));
    }
    return Kv(), r = dp(Error(K(421))), dc(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = WF.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Un = Yi(i.nextSibling), $n = t, st = !0, Ar = null, e !== null && (sr[lr++] = mi, sr[lr++] = vi, sr[lr++] = Uo, mi = e.id, vi = e.overflow, Uo = t), t = zv(t, r.children), t.flags |= 4096, t);
}
function f1(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vm(e.return, t, n);
}
function hp(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function V_(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (fn(e, t, r.children, n), r = ft.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && f1(e, n, t);
      else if (e.tag === 19) f1(e, n, t);
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
  if (Qe(ft, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && cf(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), hp(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && cf(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      hp(t, !0, n, null, a);
      break;
    case "together":
      hp(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Mc(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wi(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), zo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (e = t.child, n = eo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = eo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function OF(e, t, n) {
  switch (t.tag) {
    case 3:
      B_(t), Za();
      break;
    case 5:
      d_(t);
      break;
    case 1:
      An(t.type) && rf(t);
      break;
    case 4:
      Fv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      Qe(sf, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Qe(ft, ft.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? H_(e, t, n) : (Qe(ft, ft.current & 1), e = wi(e, t, n), e !== null ? e.sibling : null);
      Qe(ft, ft.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return V_(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Qe(ft, ft.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, M_(e, t, n);
  }
  return wi(e, t, n);
}
var U_, Sm, $_, z_;
U_ = function(e, t) {
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
Sm = function() {
};
$_ = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, No(Kr.current);
    var a = null;
    switch (n) {
      case "input":
        i = Gp(e, i), r = Gp(e, r), a = [];
        break;
      case "select":
        i = ht({}, i, { value: void 0 }), r = ht({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Kp(e, i), r = Kp(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tf);
    }
    Qp(n, r);
    var l;
    n = null;
    for (d in i) if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null) if (d === "style") {
      var u = i[d];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (El.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var f = r[d];
      if (u = i != null ? i[d] : void 0, r.hasOwnProperty(d) && f !== u && (f != null || u != null)) if (d === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || f && f.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in f) f.hasOwnProperty(l) && u[l] !== f[l] && (n || (n = {}), n[l] = f[l]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = f;
      else d === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, u = u ? u.__html : void 0, f != null && u !== f && (a = a || []).push(d, f)) : d === "children" ? typeof f != "string" && typeof f != "number" || (a = a || []).push(d, "" + f) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (El.hasOwnProperty(d) ? (f != null && d === "onScroll" && nt("scroll", e), a || u === f || (a = [])) : (a = a || []).push(d, f));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
z_ = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ys(e, t) {
  if (!st) switch (e.tailMode) {
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
function Kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function PF(e, t, n) {
  var r = t.pendingProps;
  switch (Tv(t), t.tag) {
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
      return Kt(t), null;
    case 1:
      return An(t.type) && nf(), Kt(t), null;
    case 3:
      return r = t.stateNode, es(), it(kn), it(en), Lv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (cc(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ar !== null && (Om(Ar), Ar = null))), Sm(e, t), Kt(t), null;
    case 5:
      Mv(t);
      var i = No(Nl.current);
      if (n = t.type, e !== null && t.stateNode != null) $_(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return Kt(t), null;
        }
        if (e = No(Kr.current), cc(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[jr] = t, r[Rl] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              nt("cancel", r), nt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              nt("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < rl.length; i++) nt(rl[i], r);
              break;
            case "source":
              nt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              nt(
                "error",
                r
              ), nt("load", r);
              break;
            case "details":
              nt("toggle", r);
              break;
            case "input":
              xx(r, a), nt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, nt("invalid", r);
              break;
            case "textarea":
              Cx(r, a), nt("invalid", r);
          }
          Qp(n, a), i = null;
          for (var l in a) if (a.hasOwnProperty(l)) {
            var u = a[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (a.suppressHydrationWarning !== !0 && uc(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (a.suppressHydrationWarning !== !0 && uc(
              r.textContent,
              u,
              e
            ), i = ["children", "" + u]) : El.hasOwnProperty(l) && u != null && l === "onScroll" && nt("scroll", r);
          }
          switch (n) {
            case "input":
              tc(r), wx(r, a, !0);
              break;
            case "textarea":
              tc(r), _x(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = tf);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gC(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[jr] = t, e[Rl] = r, U_(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Zp(n, r), n) {
              case "dialog":
                nt("cancel", e), nt("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                nt("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < rl.length; i++) nt(rl[i], e);
                i = r;
                break;
              case "source":
                nt("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                nt(
                  "error",
                  e
                ), nt("load", e), i = r;
                break;
              case "details":
                nt("toggle", e), i = r;
                break;
              case "input":
                xx(e, r), i = Gp(e, r), nt("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ht({}, r, { value: void 0 }), nt("invalid", e);
                break;
              case "textarea":
                Cx(e, r), i = Kp(e, r), nt("invalid", e);
                break;
              default:
                i = r;
            }
            Qp(n, i), u = i;
            for (a in u) if (u.hasOwnProperty(a)) {
              var f = u[a];
              a === "style" ? xC(e, f) : a === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && yC(e, f)) : a === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && xl(e, f) : typeof f == "number" && xl(e, "" + f) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (El.hasOwnProperty(a) ? f != null && a === "onScroll" && nt("scroll", e) : f != null && hv(e, a, f, l));
            }
            switch (n) {
              case "input":
                tc(e), wx(e, r, !1);
                break;
              case "textarea":
                tc(e), _x(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + no(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Va(e, !!r.multiple, a, !1) : r.defaultValue != null && Va(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = tf);
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
      return Kt(t), null;
    case 6:
      if (e && t.stateNode != null) z_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (n = No(Nl.current), No(Kr.current), cc(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[jr] = t, (a = r.nodeValue !== n) && (e = $n, e !== null)) switch (e.tag) {
            case 3:
              uc(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && uc(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jr] = t, t.stateNode = r;
      }
      return Kt(t), null;
    case 13:
      if (it(ft), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (st && Un !== null && t.mode & 1 && !(t.flags & 128)) s_(), Za(), t.flags |= 98560, a = !1;
        else if (a = cc(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(K(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(K(317));
            a[jr] = t;
          } else Za(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Kt(t), a = !1;
        } else Ar !== null && (Om(Ar), Ar = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ft.current & 1 ? Tt === 0 && (Tt = 3) : Kv())), t.updateQueue !== null && (t.flags |= 4), Kt(t), null);
    case 4:
      return es(), Sm(e, t), e === null && Al(t.stateNode.containerInfo), Kt(t), null;
    case 10:
      return Ov(t.type._context), Kt(t), null;
    case 17:
      return An(t.type) && nf(), Kt(t), null;
    case 19:
      if (it(ft), a = t.memoizedState, a === null) return Kt(t), null;
      if (r = (t.flags & 128) !== 0, l = a.rendering, l === null) if (r) Ys(a, !1);
      else {
        if (Tt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = cf(e), l !== null) {
            for (t.flags |= 128, Ys(a, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Qe(ft, ft.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && yt() > ns && (t.flags |= 128, r = !0, Ys(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = cf(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ys(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !st) return Kt(t), null;
        } else 2 * yt() - a.renderingStartTime > ns && n !== 1073741824 && (t.flags |= 128, r = !0, Ys(a, !1), t.lanes = 4194304);
        a.isBackwards ? (l.sibling = t.child, t.child = l) : (n = a.last, n !== null ? n.sibling = l : t.child = l, a.last = l);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = yt(), t.sibling = null, n = ft.current, Qe(ft, r ? n & 1 | 2 : n & 1), t) : (Kt(t), null);
    case 22:
    case 23:
      return qv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Hn & 1073741824 && (Kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Kt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function DF(e, t) {
  switch (Tv(t), t.tag) {
    case 1:
      return An(t.type) && nf(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return es(), it(kn), it(en), Lv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mv(t), null;
    case 13:
      if (it(ft), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(K(340));
        Za();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return it(ft), null;
    case 4:
      return es(), null;
    case 10:
      return Ov(t.type._context), null;
    case 22:
    case 23:
      return qv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hc = !1, Yt = !1, FF = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
function Fa(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    mt(e, t, r);
  }
  else n.current = null;
}
function bm(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var d1 = !1;
function MF(e, t) {
  if (lm = Zc, e = qC(), kv(e)) {
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
        var l = 0, u = -1, f = -1, d = 0, h = 0, m = e, v = null;
        t: for (; ; ) {
          for (var x; m !== n || i !== 0 && m.nodeType !== 3 || (u = l + i), m !== a || r !== 0 && m.nodeType !== 3 || (f = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (x = m.firstChild) !== null; )
            v = m, m = x;
          for (; ; ) {
            if (m === e) break t;
            if (v === n && ++d === i && (u = l), v === a && ++h === r && (f = l), (x = m.nextSibling) !== null) break;
            m = v, v = m.parentNode;
          }
          m = x;
        }
        n = u === -1 || f === -1 ? null : { start: u, end: f };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (um = { focusedElem: e, selectionRange: n }, Zc = !1, oe = t; oe !== null; ) if (t = oe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, oe = e;
  else for (; oe !== null; ) {
    t = oe;
    try {
      var A = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (A !== null) {
            var S = A.memoizedProps, R = A.memoizedState, w = t.stateNode, C = w.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Sr(t.type, S), R);
            w.__reactInternalSnapshotBeforeUpdate = C;
          }
          break;
        case 3:
          var k = t.stateNode.containerInfo;
          k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(K(163));
      }
    } catch (I) {
      mt(t, t.return, I);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, oe = e;
      break;
    }
    oe = t.return;
  }
  return A = d1, d1 = !1, A;
}
function fl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && bm(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Gf(e, t) {
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
function km(e) {
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
function W_(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, W_(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jr], delete t[Rl], delete t[dm], delete t[yF], delete t[EF])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function j_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function h1(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || j_(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Am(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tf));
  else if (r !== 4 && (e = e.child, e !== null)) for (Am(e, t, n), e = e.sibling; e !== null; ) Am(e, t, n), e = e.sibling;
}
function Tm(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Tm(e, t, n), e = e.sibling; e !== null; ) Tm(e, t, n), e = e.sibling;
}
var Vt = null, br = !1;
function Mi(e, t, n) {
  for (n = n.child; n !== null; ) G_(e, t, n), n = n.sibling;
}
function G_(e, t, n) {
  if (qr && typeof qr.onCommitFiberUnmount == "function") try {
    qr.onCommitFiberUnmount(Bf, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Yt || Fa(n, t);
    case 6:
      var r = Vt, i = br;
      Vt = null, Mi(e, t, n), Vt = r, br = i, Vt !== null && (br ? (e = Vt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Vt.removeChild(n.stateNode));
      break;
    case 18:
      Vt !== null && (br ? (e = Vt, n = n.stateNode, e.nodeType === 8 ? ap(e.parentNode, n) : e.nodeType === 1 && ap(e, n), Sl(e)) : ap(Vt, n.stateNode));
      break;
    case 4:
      r = Vt, i = br, Vt = n.stateNode.containerInfo, br = !0, Mi(e, t, n), Vt = r, br = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, l = a.destroy;
          a = a.tag, l !== void 0 && (a & 2 || a & 4) && bm(n, t, l), i = i.next;
        } while (i !== r);
      }
      Mi(e, t, n);
      break;
    case 1:
      if (!Yt && (Fa(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        mt(n, t, u);
      }
      Mi(e, t, n);
      break;
    case 21:
      Mi(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Yt = (r = Yt) || n.memoizedState !== null, Mi(e, t, n), Yt = r) : Mi(e, t, n);
      break;
    default:
      Mi(e, t, n);
  }
}
function p1(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new FF()), t.forEach(function(r) {
      var i = jF.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function _r(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Vt = u.stateNode, br = !1;
            break e;
          case 3:
            Vt = u.stateNode.containerInfo, br = !0;
            break e;
          case 4:
            Vt = u.stateNode.containerInfo, br = !0;
            break e;
        }
        u = u.return;
      }
      if (Vt === null) throw Error(K(160));
      G_(a, l, i), Vt = null, br = !1;
      var f = i.alternate;
      f !== null && (f.return = null), i.return = null;
    } catch (d) {
      mt(i, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) X_(t, e), t = t.sibling;
}
function X_(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (_r(t, e), zr(e), r & 4) {
        try {
          fl(3, e, e.return), Gf(3, e);
        } catch (S) {
          mt(e, e.return, S);
        }
        try {
          fl(5, e, e.return);
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 1:
      _r(t, e), zr(e), r & 512 && n !== null && Fa(n, n.return);
      break;
    case 5:
      if (_r(t, e), zr(e), r & 512 && n !== null && Fa(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          xl(i, "");
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, l = n !== null ? n.memoizedProps : a, u = e.type, f = e.updateQueue;
        if (e.updateQueue = null, f !== null) try {
          u === "input" && a.type === "radio" && a.name != null && mC(i, a), Zp(u, l);
          var d = Zp(u, a);
          for (l = 0; l < f.length; l += 2) {
            var h = f[l], m = f[l + 1];
            h === "style" ? xC(i, m) : h === "dangerouslySetInnerHTML" ? yC(i, m) : h === "children" ? xl(i, m) : hv(i, h, m, d);
          }
          switch (u) {
            case "input":
              Xp(i, a);
              break;
            case "textarea":
              vC(i, a);
              break;
            case "select":
              var v = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Va(i, !!a.multiple, x, !1) : v !== !!a.multiple && (a.defaultValue != null ? Va(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Va(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[Rl] = a;
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 6:
      if (_r(t, e), zr(e), r & 4) {
        if (e.stateNode === null) throw Error(K(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (S) {
          mt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (_r(t, e), zr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Sl(t.containerInfo);
      } catch (S) {
        mt(e, e.return, S);
      }
      break;
    case 4:
      _r(t, e), zr(e);
      break;
    case 13:
      _r(t, e), zr(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Gv = yt())), r & 4 && p1(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Yt = (d = Yt) || h, _r(t, e), Yt = d) : _r(t, e), zr(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (oe = e, h = e.child; h !== null; ) {
          for (m = oe = h; oe !== null; ) {
            switch (v = oe, x = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                fl(4, v, v.return);
                break;
              case 1:
                Fa(v, v.return);
                var A = v.stateNode;
                if (typeof A.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, A.props = t.memoizedProps, A.state = t.memoizedState, A.componentWillUnmount();
                  } catch (S) {
                    mt(r, n, S);
                  }
                }
                break;
              case 5:
                Fa(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  v1(m);
                  continue;
                }
            }
            x !== null ? (x.return = v, oe = x) : v1(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                i = m.stateNode, d ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (u = m.stateNode, f = m.memoizedProps.style, l = f != null && f.hasOwnProperty("display") ? f.display : null, u.style.display = EC("display", l));
              } catch (S) {
                mt(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = d ? "" : m.memoizedProps;
            } catch (S) {
              mt(e, e.return, S);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      _r(t, e), zr(e), r & 4 && p1(e);
      break;
    case 21:
      break;
    default:
      _r(
        t,
        e
      ), zr(e);
  }
}
function zr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (j_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(K(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xl(i, ""), r.flags &= -33);
          var a = h1(e);
          Tm(e, a, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = h1(e);
          Am(e, u, l);
          break;
        default:
          throw Error(K(161));
      }
    } catch (f) {
      mt(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function LF(e, t, n) {
  oe = e, q_(e);
}
function q_(e, t, n) {
  for (var r = (e.mode & 1) !== 0; oe !== null; ) {
    var i = oe, a = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || hc;
      if (!l) {
        var u = i.alternate, f = u !== null && u.memoizedState !== null || Yt;
        u = hc;
        var d = Yt;
        if (hc = l, (Yt = f) && !d) for (oe = i; oe !== null; ) l = oe, f = l.child, l.tag === 22 && l.memoizedState !== null ? g1(i) : f !== null ? (f.return = l, oe = f) : g1(i);
        for (; a !== null; ) oe = a, q_(a), a = a.sibling;
        oe = i, hc = u, Yt = d;
      }
      m1(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, oe = a) : m1(e);
  }
}
function m1(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Yt || Gf(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Yt) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Sr(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Jx(t, a, r);
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
              Jx(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var f = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f.autoFocus && n.focus();
                  break;
                case "img":
                  f.src && (n.src = f.src);
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
              var d = t.alternate;
              if (d !== null) {
                var h = d.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Sl(m);
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
            throw Error(K(163));
        }
        Yt || t.flags & 512 && km(t);
      } catch (v) {
        mt(t, t.return, v);
      }
    }
    if (t === e) {
      oe = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, oe = n;
      break;
    }
    oe = t.return;
  }
}
function v1(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t === e) {
      oe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, oe = n;
      break;
    }
    oe = t.return;
  }
}
function g1(e) {
  for (; oe !== null; ) {
    var t = oe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gf(4, t);
          } catch (f) {
            mt(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              mt(t, i, f);
            }
          }
          var a = t.return;
          try {
            km(t);
          } catch (f) {
            mt(t, a, f);
          }
          break;
        case 5:
          var l = t.return;
          try {
            km(t);
          } catch (f) {
            mt(t, l, f);
          }
      }
    } catch (f) {
      mt(t, t.return, f);
    }
    if (t === e) {
      oe = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, oe = u;
      break;
    }
    oe = t.return;
  }
}
var BF = Math.ceil, hf = Si.ReactCurrentDispatcher, Wv = Si.ReactCurrentOwner, cr = Si.ReactCurrentBatchConfig, Me = 0, Ft = null, xt = null, Ut = 0, Hn = 0, Ma = lo(0), Tt = 0, Fl = null, zo = 0, Xf = 0, jv = 0, dl = null, Sn = null, Gv = 0, ns = 1 / 0, fi = null, pf = !1, Rm = null, Zi = null, pc = !1, ji = null, mf = 0, hl = 0, Im = null, Lc = -1, Bc = 0;
function pn() {
  return Me & 6 ? yt() : Lc !== -1 ? Lc : Lc = yt();
}
function Ji(e) {
  return e.mode & 1 ? Me & 2 && Ut !== 0 ? Ut & -Ut : wF.transition !== null ? (Bc === 0 && (Bc = OC()), Bc) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : HC(e.type)), e) : 1;
}
function Rr(e, t, n, r) {
  if (50 < hl) throw hl = 0, Im = null, Error(K(185));
  Xl(e, n, r), (!(Me & 2) || e !== Ft) && (e === Ft && (!(Me & 2) && (Xf |= n), Tt === 4 && $i(e, Ut)), Tn(e, r), n === 1 && Me === 0 && !(t.mode & 1) && (ns = yt() + 500, zf && uo()));
}
function Tn(e, t) {
  var n = e.callbackNode;
  wD(e, t);
  var r = Qc(e, e === Ft ? Ut : 0);
  if (r === 0) n !== null && kx(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && kx(n), t === 1) e.tag === 0 ? xF(y1.bind(null, e)) : i_(y1.bind(null, e)), vF(function() {
      !(Me & 6) && uo();
    }), n = null;
    else {
      switch (PC(r)) {
        case 1:
          n = yv;
          break;
        case 4:
          n = IC;
          break;
        case 16:
          n = Yc;
          break;
        case 536870912:
          n = NC;
          break;
        default:
          n = Yc;
      }
      n = nS(n, K_.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function K_(e, t) {
  if (Lc = -1, Bc = 0, Me & 6) throw Error(K(327));
  var n = e.callbackNode;
  if (ja() && e.callbackNode !== n) return null;
  var r = Qc(e, e === Ft ? Ut : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vf(e, r);
  else {
    t = r;
    var i = Me;
    Me |= 2;
    var a = Q_();
    (Ft !== e || Ut !== t) && (fi = null, ns = yt() + 500, Fo(e, t));
    do
      try {
        UF();
        break;
      } catch (u) {
        Y_(e, u);
      }
    while (!0);
    Nv(), hf.current = a, Me = i, xt !== null ? t = 0 : (Ft = null, Ut = 0, t = Tt);
  }
  if (t !== 0) {
    if (t === 2 && (i = rm(e), i !== 0 && (r = i, t = Nm(e, i))), t === 1) throw n = Fl, Fo(e, 0), $i(e, r), Tn(e, yt()), n;
    if (t === 6) $i(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !HF(i) && (t = vf(e, r), t === 2 && (a = rm(e), a !== 0 && (r = a, t = Nm(e, a))), t === 1)) throw n = Fl, Fo(e, 0), $i(e, r), Tn(e, yt()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          To(e, Sn, fi);
          break;
        case 3:
          if ($i(e, r), (r & 130023424) === r && (t = Gv + 500 - yt(), 10 < t)) {
            if (Qc(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              pn(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = fm(To.bind(null, e, Sn, fi), t);
            break;
          }
          To(e, Sn, fi);
          break;
        case 4:
          if ($i(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Tr(r);
            a = 1 << l, l = t[l], l > i && (i = l), r &= ~a;
          }
          if (r = i, r = yt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * BF(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fm(To.bind(null, e, Sn, fi), r);
            break;
          }
          To(e, Sn, fi);
          break;
        case 5:
          To(e, Sn, fi);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return Tn(e, yt()), e.callbackNode === n ? K_.bind(null, e) : null;
}
function Nm(e, t) {
  var n = dl;
  return e.current.memoizedState.isDehydrated && (Fo(e, t).flags |= 256), e = vf(e, t), e !== 2 && (t = Sn, Sn = n, t !== null && Om(t)), e;
}
function Om(e) {
  Sn === null ? Sn = e : Sn.push.apply(Sn, e);
}
function HF(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Ir(a(), i)) return !1;
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
function $i(e, t) {
  for (t &= ~jv, t &= ~Xf, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Tr(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function y1(e) {
  if (Me & 6) throw Error(K(327));
  ja();
  var t = Qc(e, 0);
  if (!(t & 1)) return Tn(e, yt()), null;
  var n = vf(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rm(e);
    r !== 0 && (t = r, n = Nm(e, r));
  }
  if (n === 1) throw n = Fl, Fo(e, 0), $i(e, t), Tn(e, yt()), n;
  if (n === 6) throw Error(K(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, To(e, Sn, fi), Tn(e, yt()), null;
}
function Xv(e, t) {
  var n = Me;
  Me |= 1;
  try {
    return e(t);
  } finally {
    Me = n, Me === 0 && (ns = yt() + 500, zf && uo());
  }
}
function Wo(e) {
  ji !== null && ji.tag === 0 && !(Me & 6) && ja();
  var t = Me;
  Me |= 1;
  var n = cr.transition, r = We;
  try {
    if (cr.transition = null, We = 1, e) return e();
  } finally {
    We = r, cr.transition = n, Me = t, !(Me & 6) && uo();
  }
}
function qv() {
  Hn = Ma.current, it(Ma);
}
function Fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, mF(n)), xt !== null) for (n = xt.return; n !== null; ) {
    var r = n;
    switch (Tv(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nf();
        break;
      case 3:
        es(), it(kn), it(en), Lv();
        break;
      case 5:
        Mv(r);
        break;
      case 4:
        es();
        break;
      case 13:
        it(ft);
        break;
      case 19:
        it(ft);
        break;
      case 10:
        Ov(r.type._context);
        break;
      case 22:
      case 23:
        qv();
    }
    n = n.return;
  }
  if (Ft = e, xt = e = eo(e.current, null), Ut = Hn = t, Tt = 0, Fl = null, jv = Xf = zo = 0, Sn = dl = null, Io !== null) {
    for (t = 0; t < Io.length; t++) if (n = Io[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var l = a.next;
        a.next = i, r.next = l;
      }
      n.pending = r;
    }
    Io = null;
  }
  return e;
}
function Y_(e, t) {
  do {
    var n = xt;
    try {
      if (Nv(), Dc.current = df, ff) {
        for (var r = dt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ff = !1;
      }
      if ($o = 0, Pt = kt = dt = null, cl = !1, Ol = 0, Wv.current = null, n === null || n.return === null) {
        Tt = 1, Fl = t, xt = null;
        break;
      }
      e: {
        var a = e, l = n.return, u = n, f = t;
        if (t = Ut, u.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
          var d = f, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var x = o1(l);
          if (x !== null) {
            x.flags &= -257, a1(x, l, u, a, t), x.mode & 1 && i1(a, d, t), t = x, f = d;
            var A = t.updateQueue;
            if (A === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(f), t.updateQueue = S;
            } else A.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              i1(a, d, t), Kv();
              break e;
            }
            f = Error(K(426));
          }
        } else if (st && u.mode & 1) {
          var R = o1(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), a1(R, l, u, a, t), Rv(ts(f, u));
            break e;
          }
        }
        a = f = ts(f, u), Tt !== 4 && (Tt = 2), dl === null ? dl = [a] : dl.push(a), a = l;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var w = P_(a, f, t);
              Zx(a, w);
              break e;
            case 1:
              u = f;
              var C = a.type, k = a.stateNode;
              if (!(a.flags & 128) && (typeof C.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Zi === null || !Zi.has(k)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var I = D_(a, u, t);
                Zx(a, I);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      J_(n);
    } catch (O) {
      t = O, xt === n && n !== null && (xt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Q_() {
  var e = hf.current;
  return hf.current = df, e === null ? df : e;
}
function Kv() {
  (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4), Ft === null || !(zo & 268435455) && !(Xf & 268435455) || $i(Ft, Ut);
}
function vf(e, t) {
  var n = Me;
  Me |= 2;
  var r = Q_();
  (Ft !== e || Ut !== t) && (fi = null, Fo(e, t));
  do
    try {
      VF();
      break;
    } catch (i) {
      Y_(e, i);
    }
  while (!0);
  if (Nv(), Me = n, hf.current = r, xt !== null) throw Error(K(261));
  return Ft = null, Ut = 0, Tt;
}
function VF() {
  for (; xt !== null; ) Z_(xt);
}
function UF() {
  for (; xt !== null && !dD(); ) Z_(xt);
}
function Z_(e) {
  var t = tS(e.alternate, e, Hn);
  e.memoizedProps = e.pendingProps, t === null ? J_(e) : xt = t, Wv.current = null;
}
function J_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = DF(n, t), n !== null) {
        n.flags &= 32767, xt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Tt = 6, xt = null;
        return;
      }
    } else if (n = PF(n, t, Hn), n !== null) {
      xt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      xt = t;
      return;
    }
    xt = t = e;
  } while (t !== null);
  Tt === 0 && (Tt = 5);
}
function To(e, t, n) {
  var r = We, i = cr.transition;
  try {
    cr.transition = null, We = 1, $F(e, t, n, r);
  } finally {
    cr.transition = i, We = r;
  }
  return null;
}
function $F(e, t, n, r) {
  do
    ja();
  while (ji !== null);
  if (Me & 6) throw Error(K(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(K(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (CD(e, a), e === Ft && (xt = Ft = null, Ut = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pc || (pc = !0, nS(Yc, function() {
    return ja(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = cr.transition, cr.transition = null;
    var l = We;
    We = 1;
    var u = Me;
    Me |= 4, Wv.current = null, MF(e, n), X_(n, e), lF(um), Zc = !!lm, um = lm = null, e.current = n, LF(n), hD(), Me = u, We = l, cr.transition = a;
  } else e.current = n;
  if (pc && (pc = !1, ji = e, mf = i), a = e.pendingLanes, a === 0 && (Zi = null), vD(n.stateNode), Tn(e, yt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (pf) throw pf = !1, e = Rm, Rm = null, e;
  return mf & 1 && e.tag !== 0 && ja(), a = e.pendingLanes, a & 1 ? e === Im ? hl++ : (hl = 0, Im = e) : hl = 0, uo(), null;
}
function ja() {
  if (ji !== null) {
    var e = PC(mf), t = cr.transition, n = We;
    try {
      if (cr.transition = null, We = 16 > e ? 16 : e, ji === null) var r = !1;
      else {
        if (e = ji, ji = null, mf = 0, Me & 6) throw Error(K(331));
        var i = Me;
        for (Me |= 4, oe = e.current; oe !== null; ) {
          var a = oe, l = a.child;
          if (oe.flags & 16) {
            var u = a.deletions;
            if (u !== null) {
              for (var f = 0; f < u.length; f++) {
                var d = u[f];
                for (oe = d; oe !== null; ) {
                  var h = oe;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(8, h, a);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, oe = m;
                  else for (; oe !== null; ) {
                    h = oe;
                    var v = h.sibling, x = h.return;
                    if (W_(h), h === d) {
                      oe = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = x, oe = v;
                      break;
                    }
                    oe = x;
                  }
                }
              }
              var A = a.alternate;
              if (A !== null) {
                var S = A.child;
                if (S !== null) {
                  A.child = null;
                  do {
                    var R = S.sibling;
                    S.sibling = null, S = R;
                  } while (S !== null);
                }
              }
              oe = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) l.return = a, oe = l;
          else e: for (; oe !== null; ) {
            if (a = oe, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                fl(9, a, a.return);
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, oe = w;
              break e;
            }
            oe = a.return;
          }
        }
        var C = e.current;
        for (oe = C; oe !== null; ) {
          l = oe;
          var k = l.child;
          if (l.subtreeFlags & 2064 && k !== null) k.return = l, oe = k;
          else e: for (l = C; oe !== null; ) {
            if (u = oe, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Gf(9, u);
              }
            } catch (O) {
              mt(u, u.return, O);
            }
            if (u === l) {
              oe = null;
              break e;
            }
            var I = u.sibling;
            if (I !== null) {
              I.return = u.return, oe = I;
              break e;
            }
            oe = u.return;
          }
        }
        if (Me = i, uo(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
          qr.onPostCommitFiberRoot(Bf, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      We = n, cr.transition = t;
    }
  }
  return !1;
}
function E1(e, t, n) {
  t = ts(n, t), t = P_(e, t, 1), e = Qi(e, t, 1), t = pn(), e !== null && (Xl(e, 1, t), Tn(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) E1(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      E1(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zi === null || !Zi.has(r))) {
        e = ts(n, e), e = D_(t, e, 1), t = Qi(t, e, 1), e = pn(), t !== null && (Xl(t, 1, e), Tn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function zF(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pn(), e.pingedLanes |= e.suspendedLanes & n, Ft === e && (Ut & n) === n && (Tt === 4 || Tt === 3 && (Ut & 130023424) === Ut && 500 > yt() - Gv ? Fo(e, 0) : jv |= n), Tn(e, t);
}
function eS(e, t) {
  t === 0 && (e.mode & 1 ? (t = ic, ic <<= 1, !(ic & 130023424) && (ic = 4194304)) : t = 1);
  var n = pn();
  e = xi(e, t), e !== null && (Xl(e, t, n), Tn(e, n));
}
function WF(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), eS(e, n);
}
function jF(e, t) {
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
      throw Error(K(314));
  }
  r !== null && r.delete(t), eS(e, n);
}
var tS;
tS = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || kn.current) bn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return bn = !1, OF(e, t, n);
    bn = !!(e.flags & 131072);
  }
  else bn = !1, st && t.flags & 1048576 && o_(t, af, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mc(e, t), e = t.pendingProps;
      var i = Qa(t, en.current);
      Wa(t, n), i = Hv(null, t, r, e, i, n);
      var a = Vv();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, An(r) ? (a = !0, rf(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Dv(t), i.updater = jf, t.stateNode = i, i._reactInternals = t, ym(t, r, e, n), t = wm(null, t, r, !0, a, n)) : (t.tag = 0, st && a && Av(t), fn(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = XF(r), e = Sr(r, e), i) {
          case 0:
            t = xm(null, t, r, e, n);
            break e;
          case 1:
            t = u1(null, t, r, e, n);
            break e;
          case 11:
            t = s1(null, t, r, e, n);
            break e;
          case 14:
            t = l1(null, t, r, Sr(r.type, e), n);
            break e;
        }
        throw Error(K(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Sr(r, i), xm(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Sr(r, i), u1(e, t, r, i, n);
    case 3:
      e: {
        if (B_(t), e === null) throw Error(K(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, f_(e, t), uf(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = ts(Error(K(423)), t), t = c1(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = ts(Error(K(424)), t), t = c1(e, t, r, n, i);
          break e;
        } else for (Un = Yi(t.stateNode.containerInfo.firstChild), $n = t, st = !0, Ar = null, n = u_(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Za(), r === i) {
            t = wi(e, t, n);
            break e;
          }
          fn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return d_(t), e === null && mm(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, l = i.children, cm(r, i) ? l = null : a !== null && cm(r, a) && (t.flags |= 32), L_(e, t), fn(e, t, l, n), t.child;
    case 6:
      return e === null && mm(t), null;
    case 13:
      return H_(e, t, n);
    case 4:
      return Fv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ja(t, null, r, n) : fn(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Sr(r, i), s1(e, t, r, i, n);
    case 7:
      return fn(e, t, t.pendingProps, n), t.child;
    case 8:
      return fn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, l = i.value, Qe(sf, r._currentValue), r._currentValue = l, a !== null) if (Ir(a.value, l)) {
          if (a.children === i.children && !kn.current) {
            t = wi(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var u = a.dependencies;
          if (u !== null) {
            l = a.child;
            for (var f = u.firstContext; f !== null; ) {
              if (f.context === r) {
                if (a.tag === 1) {
                  f = gi(-1, n & -n), f.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? f.next = f : (f.next = h.next, h.next = f), d.pending = f;
                  }
                }
                a.lanes |= n, f = a.alternate, f !== null && (f.lanes |= n), vm(
                  a.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              f = f.next;
            }
          } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (l = a.return, l === null) throw Error(K(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), vm(l, n, t), l = a.sibling;
          } else l = a.child;
          if (l !== null) l.return = a;
          else for (l = a; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (a = l.sibling, a !== null) {
              a.return = l.return, l = a;
              break;
            }
            l = l.return;
          }
          a = l;
        }
        fn(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Wa(t, n), i = fr(i), r = r(i), t.flags |= 1, fn(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Sr(r, t.pendingProps), i = Sr(r.type, i), l1(e, t, r, i, n);
    case 15:
      return F_(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Sr(r, i), Mc(e, t), t.tag = 1, An(r) ? (e = !0, rf(t)) : e = !1, Wa(t, n), O_(t, r, i), ym(t, r, i, n), wm(null, t, r, !0, e, n);
    case 19:
      return V_(e, t, n);
    case 22:
      return M_(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function nS(e, t) {
  return RC(e, t);
}
function GF(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ur(e, t, n, r) {
  return new GF(e, t, n, r);
}
function Yv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function XF(e) {
  if (typeof e == "function") return Yv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mv) return 11;
    if (e === vv) return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = ur(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hc(e, t, n, r, i, a) {
  var l = 2;
  if (r = e, typeof e == "function") Yv(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case ka:
      return Mo(n.children, i, a, t);
    case pv:
      l = 8, i |= 8;
      break;
    case $p:
      return e = ur(12, n, t, i | 2), e.elementType = $p, e.lanes = a, e;
    case zp:
      return e = ur(13, n, t, i), e.elementType = zp, e.lanes = a, e;
    case Wp:
      return e = ur(19, n, t, i), e.elementType = Wp, e.lanes = a, e;
    case dC:
      return qf(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cC:
          l = 10;
          break e;
        case fC:
          l = 9;
          break e;
        case mv:
          l = 11;
          break e;
        case vv:
          l = 14;
          break e;
        case Li:
          l = 16, r = null;
          break e;
      }
      throw Error(K(130, e == null ? e : typeof e, ""));
  }
  return t = ur(l, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Mo(e, t, n, r) {
  return e = ur(7, e, r, t), e.lanes = n, e;
}
function qf(e, t, n, r) {
  return e = ur(22, e, r, t), e.elementType = dC, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function pp(e, t, n) {
  return e = ur(6, e, null, t), e.lanes = n, e;
}
function mp(e, t, n) {
  return t = ur(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qF(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kh(0), this.expirationTimes = Kh(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kh(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Qv(e, t, n, r, i, a, l, u, f) {
  return e = new qF(e, t, n, u, f), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ur(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dv(a), e;
}
function KF(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ba, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rS(e) {
  if (!e) return ro;
  e = e._reactInternals;
  e: {
    if (Ko(e) !== e || e.tag !== 1) throw Error(K(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (An(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(K(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (An(n)) return r_(e, n, t);
  }
  return t;
}
function iS(e, t, n, r, i, a, l, u, f) {
  return e = Qv(n, r, !0, e, i, a, l, u, f), e.context = rS(null), n = e.current, r = pn(), i = Ji(n), a = gi(r, i), a.callback = t ?? null, Qi(n, a, i), e.current.lanes = i, Xl(e, i, r), Tn(e, r), e;
}
function Kf(e, t, n, r) {
  var i = t.current, a = pn(), l = Ji(i);
  return n = rS(n), t.context === null ? t.context = n : t.pendingContext = n, t = gi(a, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qi(i, t, l), e !== null && (Rr(e, i, l, a), Pc(e, i, l)), l;
}
function gf(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function x1(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zv(e, t) {
  x1(e, t), (e = e.alternate) && x1(e, t);
}
function YF() {
  return null;
}
var oS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Jv(e) {
  this._internalRoot = e;
}
Yf.prototype.render = Jv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  Kf(e, t, null, null);
};
Yf.prototype.unmount = Jv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wo(function() {
      Kf(null, e, null, null);
    }), t[Ei] = null;
  }
};
function Yf(e) {
  this._internalRoot = e;
}
Yf.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = MC();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ui.length && t !== 0 && t < Ui[n].priority; n++) ;
    Ui.splice(n, 0, e), n === 0 && BC(e);
  }
};
function eg(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Qf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function w1() {
}
function QF(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = gf(l);
        a.call(d);
      };
    }
    var l = iS(t, r, e, 0, null, !1, !1, "", w1);
    return e._reactRootContainer = l, e[Ei] = l.current, Al(e.nodeType === 8 ? e.parentNode : e), Wo(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = gf(f);
      u.call(d);
    };
  }
  var f = Qv(e, 0, !1, null, null, !1, !1, "", w1);
  return e._reactRootContainer = f, e[Ei] = f.current, Al(e.nodeType === 8 ? e.parentNode : e), Wo(function() {
    Kf(t, f, n, r);
  }), f;
}
function Zf(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var f = gf(l);
        u.call(f);
      };
    }
    Kf(t, l, e, i);
  } else l = QF(n, t, e, i, r);
  return gf(l);
}
DC = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nl(t.pendingLanes);
        n !== 0 && (Ev(t, n | 1), Tn(t, yt()), !(Me & 6) && (ns = yt() + 500, uo()));
      }
      break;
    case 13:
      Wo(function() {
        var r = xi(e, 1);
        if (r !== null) {
          var i = pn();
          Rr(r, e, 1, i);
        }
      }), Zv(e, 1);
  }
};
xv = function(e) {
  if (e.tag === 13) {
    var t = xi(e, 134217728);
    if (t !== null) {
      var n = pn();
      Rr(t, e, 134217728, n);
    }
    Zv(e, 134217728);
  }
};
FC = function(e) {
  if (e.tag === 13) {
    var t = Ji(e), n = xi(e, t);
    if (n !== null) {
      var r = pn();
      Rr(n, e, t, r);
    }
    Zv(e, t);
  }
};
MC = function() {
  return We;
};
LC = function(e, t) {
  var n = We;
  try {
    return We = e, t();
  } finally {
    We = n;
  }
};
em = function(e, t, n) {
  switch (t) {
    case "input":
      if (Xp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = $f(r);
            if (!i) throw Error(K(90));
            pC(r), Xp(r, i);
          }
        }
      }
      break;
    case "textarea":
      vC(e, n);
      break;
    case "select":
      t = n.value, t != null && Va(e, !!n.multiple, t, !1);
  }
};
_C = Xv;
SC = Wo;
var ZF = { usingClientEntryPoint: !1, Events: [Kl, Ia, $f, wC, CC, Xv] }, Qs = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, JF = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Si.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = AC(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Qs.findFiberByHostInstance || YF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mc.isDisabled && mc.supportsFiber) try {
    Bf = mc.inject(JF), qr = mc;
  } catch {
  }
}
jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ZF;
jn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eg(t)) throw Error(K(200));
  return KF(e, t, null, n);
};
jn.createRoot = function(e, t) {
  if (!eg(e)) throw Error(K(299));
  var n = !1, r = "", i = oS;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Qv(e, 1, !1, null, null, n, !1, r, i), e[Ei] = t.current, Al(e.nodeType === 8 ? e.parentNode : e), new Jv(t);
};
jn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","), Error(K(268, e)));
  return e = AC(t), e = e === null ? null : e.stateNode, e;
};
jn.flushSync = function(e) {
  return Wo(e);
};
jn.hydrate = function(e, t, n) {
  if (!Qf(t)) throw Error(K(200));
  return Zf(null, e, t, !0, n);
};
jn.hydrateRoot = function(e, t, n) {
  if (!eg(e)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", l = oS;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = iS(t, null, e, 1, n ?? null, i, !1, a, l), e[Ei] = t.current, Al(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Yf(t);
};
jn.render = function(e, t, n) {
  if (!Qf(t)) throw Error(K(200));
  return Zf(null, e, t, !1, n);
};
jn.unmountComponentAtNode = function(e) {
  if (!Qf(e)) throw Error(K(40));
  return e._reactRootContainer ? (Wo(function() {
    Zf(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ei] = null;
    });
  }), !0) : !1;
};
jn.unstable_batchedUpdates = Xv;
jn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Qf(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return Zf(e, t, n, !1, r);
};
jn.version = "18.3.1-next-f1338f8080-20240426";
function aS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aS);
    } catch (e) {
      console.error(e);
    }
}
aS(), aC.exports = jn;
var Gi = aC.exports;
const Oo = /* @__PURE__ */ ds(Gi);
var sS, C1 = Gi;
sS = C1.createRoot, C1.hydrateRoot;
var Pm = function(e, t) {
  return Pm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Pm(e, t);
};
function vr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pm(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ee = function() {
  return ee = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ee.apply(this, arguments);
};
function Zr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function eM() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], l = 0, u = a.length; l < u; l++, i++)
      r[i] = a[l];
  return r;
}
function Qt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function dn(e, t) {
  var n = t && t.cache ? t.cache : aM, r = t && t.serializer ? t.serializer : oM, i = t && t.strategy ? t.strategy : rM;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function tM(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function nM(e, t, n, r) {
  var i = tM(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function lS(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function uS(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function rM(e, t) {
  var n = e.length === 1 ? nM : lS;
  return uS(e, this, n, t.cache.create(), t.serializer);
}
function iM(e, t) {
  return uS(e, this, lS, t.cache.create(), t.serializer);
}
var oM = function() {
  return JSON.stringify(arguments);
};
function tg() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
tg.prototype.get = function(e) {
  return this.cache[e];
};
tg.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var aM = {
  create: function() {
    return new tg();
  }
}, hn = {
  variadic: iM
};
function cS(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
dn(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, Qt([void 0], t, !1)))();
}, {
  strategy: hn.variadic
});
dn(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, Qt([void 0], t, !1)))();
}, {
  strategy: hn.variadic
});
dn(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, Qt([void 0], t, !1)))();
}, {
  strategy: hn.variadic
});
dn(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, Qt([void 0], t, !1)))();
}, {
  strategy: hn.variadic
});
dn(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, Qt([void 0], t, !1)))();
}, {
  strategy: hn.variadic
});
var Oe;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Oe || (Oe = {}));
var rt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(rt || (rt = {}));
var rs;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(rs || (rs = {}));
function _1(e) {
  return e.type === rt.literal;
}
function sM(e) {
  return e.type === rt.argument;
}
function fS(e) {
  return e.type === rt.number;
}
function dS(e) {
  return e.type === rt.date;
}
function hS(e) {
  return e.type === rt.time;
}
function pS(e) {
  return e.type === rt.select;
}
function mS(e) {
  return e.type === rt.plural;
}
function lM(e) {
  return e.type === rt.pound;
}
function vS(e) {
  return e.type === rt.tag;
}
function gS(e) {
  return !!(e && typeof e == "object" && e.type === rs.number);
}
function Dm(e) {
  return !!(e && typeof e == "object" && e.type === rs.dateTime);
}
var yS = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, uM = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function cM(e) {
  var t = {};
  return e.replace(uM, function(n) {
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
var fM = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function dM(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(fM).filter(function(v) {
    return v.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = l[0], f = l.slice(1), d = 0, h = f; d < h.length; d++) {
      var m = h[d];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: f });
  }
  return n;
}
function hM(e) {
  return e.replace(/^(.*?)-/, "");
}
var S1 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ES = /^(@+)?(\+|#+)?[rs]?$/g, pM = /(\*)(0+)|(#+)(0+)|(0+)/g, xS = /^(0+)$/;
function b1(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ES, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function wS(e) {
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
function mM(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !xS.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function k1(e) {
  var t = {}, n = wS(e);
  return n || t;
}
function vM(e) {
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
        t.style = "unit", t.unit = hM(i.options[0]);
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
        t = ee(ee(ee({}, t), { notation: "scientific" }), i.options.reduce(function(f, d) {
          return ee(ee({}, f), k1(d));
        }, {}));
        continue;
      case "engineering":
        t = ee(ee(ee({}, t), { notation: "engineering" }), i.options.reduce(function(f, d) {
          return ee(ee({}, f), k1(d));
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
        i.options[0].replace(pM, function(f, d, h, m, v, x) {
          if (d)
            t.minimumIntegerDigits = h.length;
          else {
            if (m && v)
              throw new Error("We currently do not support maximum integer digits");
            if (x)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (xS.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (S1.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(S1, function(f, d, h, m, v, x) {
        return h === "*" ? t.minimumFractionDigits = d.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : v && x ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + x.length) : (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = ee(ee({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = ee(ee({}, t), b1(a)));
      continue;
    }
    if (ES.test(i.stem)) {
      t = ee(ee({}, t), b1(i.stem));
      continue;
    }
    var l = wS(i.stem);
    l && (t = ee(ee({}, t), l));
    var u = mM(i.stem);
    u && (t = ee(ee({}, t), u));
  }
  return t;
}
var vc = {
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
function gM(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var l = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), f = "a", d = yM(t);
      for ((d == "H" || d == "k") && (u = 0); u-- > 0; )
        n += f;
      for (; l-- > 0; )
        n = d + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function yM(e) {
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
  var i = vc[r || ""] || vc[n || ""] || vc["".concat(n, "-001")] || vc["001"];
  return i[0];
}
var vp, EM = new RegExp("^".concat(yS.source, "*")), xM = new RegExp("".concat(yS.source, "*$"));
function De(e, t) {
  return { start: e, end: t };
}
var wM = !!String.prototype.startsWith && "_a".startsWith("a", 1), CM = !!String.fromCodePoint, _M = !!Object.fromEntries, SM = !!String.prototype.codePointAt, bM = !!String.prototype.trimStart, kM = !!String.prototype.trimEnd, AM = !!Number.isSafeInteger, TM = AM ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Fm = !0;
try {
  var RM = _S("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Fm = ((vp = RM.exec("a")) === null || vp === void 0 ? void 0 : vp[0]) === "a";
} catch {
  Fm = !1;
}
var A1 = wM ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Mm = CM ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, a = 0, l; i > a; ) {
      if (l = t[a++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), T1 = (
  // native
  _M ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], l = a[0], u = a[1];
        n[l] = u;
      }
      return n;
    }
  )
), CS = SM ? (
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
), IM = bM ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(EM, "");
  }
), NM = kM ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(xM, "");
  }
);
function _S(e, t) {
  return new RegExp(e, t);
}
var Lm;
if (Fm) {
  var R1 = _S("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Lm = function(t, n) {
    var r;
    R1.lastIndex = n;
    var i = R1.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Lm = function(t, n) {
    for (var r = []; ; ) {
      var i = CS(t, n);
      if (i === void 0 || SS(i) || FM(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Mm.apply(void 0, r);
  };
var OM = (
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
          var l = this.parseArgument(t, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: rt.pound,
              location: De(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Oe.UNMATCHED_CLOSING_TAG, De(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Bm(this.peek() || 0)) {
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
            type: rt.literal,
            value: "<".concat(i, "/>"),
            location: De(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Bm(this.char()))
            return this.error(Oe.INVALID_TAG, De(u, this.clonePosition()));
          var f = this.clonePosition(), d = this.parseTagName();
          return i !== d ? this.error(Oe.UNMATCHED_CLOSING_TAG, De(f, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: rt.tag,
              value: i,
              children: l,
              location: De(r, this.clonePosition())
            },
            err: null
          } : this.error(Oe.INVALID_TAG, De(u, this.clonePosition())));
        } else
          return this.error(Oe.UNCLOSED_TAG, De(r, this.clonePosition()));
      } else
        return this.error(Oe.INVALID_TAG, De(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && DM(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var l = this.tryParseUnquoted(t, n);
        if (l) {
          i += l;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var f = De(r, this.clonePosition());
      return {
        val: { type: rt.literal, value: i, location: f },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !PM(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Mm.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Mm(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Oe.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Oe.EMPTY_ARGUMENT, De(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Oe.MALFORMED_ARGUMENT, De(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Oe.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: rt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: De(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Oe.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Oe.MALFORMED_ARGUMENT, De(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Lm(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), l = De(t, a);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, l = this.clonePosition(), u = this.parseIdentifierIfPossible().value, f = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Oe.EXPECT_ARGUMENT_TYPE, De(l, f));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var d = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var h = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var v = NM(m.val);
            if (v.length === 0)
              return this.error(Oe.EXPECT_ARGUMENT_STYLE, De(this.clonePosition(), this.clonePosition()));
            var x = De(h, this.clonePosition());
            d = { style: v, styleLocation: x };
          }
          var A = this.tryParseArgumentClose(i);
          if (A.err)
            return A;
          var S = De(i, this.clonePosition());
          if (d && A1(d == null ? void 0 : d.style, "::", 0)) {
            var R = IM(d.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(R, d.styleLocation);
              return m.err ? m : {
                val: { type: rt.number, value: r, location: S, style: m.val },
                err: null
              };
            } else {
              if (R.length === 0)
                return this.error(Oe.EXPECT_DATE_TIME_SKELETON, S);
              var w = R;
              this.locale && (w = gM(R, this.locale));
              var v = {
                type: rs.dateTime,
                pattern: w,
                location: d.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? cM(w) : {}
              }, C = u === "date" ? rt.date : rt.time;
              return {
                val: { type: C, value: r, location: S, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? rt.number : u === "date" ? rt.date : rt.time,
              value: r,
              location: S,
              style: (a = d == null ? void 0 : d.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var k = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Oe.EXPECT_SELECT_ARGUMENT_OPTIONS, De(k, ee({}, k)));
          this.bumpSpace();
          var I = this.parseIdentifierIfPossible(), O = 0;
          if (u !== "select" && I.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Oe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, De(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Oe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Oe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), I = this.parseIdentifierIfPossible(), O = m.val;
          }
          var D = this.tryParsePluralOrSelectOptions(t, u, n, I);
          if (D.err)
            return D;
          var A = this.tryParseArgumentClose(i);
          if (A.err)
            return A;
          var F = De(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: rt.select,
              value: r,
              options: T1(D.val),
              location: F
            },
            err: null
          } : {
            val: {
              type: rt.plural,
              value: r,
              options: T1(D.val),
              offset: O,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: F
            },
            err: null
          };
        }
        default:
          return this.error(Oe.INVALID_ARGUMENT_TYPE, De(l, f));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Oe.EXPECT_ARGUMENT_CLOSING_BRACE, De(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Oe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, De(i, this.clonePosition()));
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
        r = dM(t);
      } catch {
        return this.error(Oe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: rs.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? vM(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, l = !1, u = [], f = /* @__PURE__ */ new Set(), d = i.value, h = i.location; ; ) {
        if (d.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(Oe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Oe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            h = De(m, this.clonePosition()), d = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (f.has(d))
          return this.error(n === "select" ? Oe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Oe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
        d === "other" && (l = !0), this.bumpSpace();
        var x = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Oe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Oe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, De(this.clonePosition(), this.clonePosition()));
        var A = this.parseMessage(t + 1, n, r);
        if (A.err)
          return A;
        var S = this.tryParseArgumentClose(x);
        if (S.err)
          return S;
        u.push([
          d,
          {
            value: A.val,
            location: De(x, this.clonePosition())
          }
        ]), f.add(d), this.bumpSpace(), a = this.parseIdentifierIfPossible(), d = a.value, h = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Oe.EXPECT_SELECT_ARGUMENT_SELECTOR : Oe.EXPECT_PLURAL_ARGUMENT_SELECTOR, De(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(Oe.MISSING_OTHER_CLAUSE, De(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, l = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, l = l * 10 + (u - 48), this.bump();
        else
          break;
      }
      var f = De(i, this.clonePosition());
      return a ? (l *= r, TM(l) ? { val: l, err: null } : this.error(n, f)) : this.error(t, f);
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
      var n = CS(this.message, t);
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
      if (A1(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && SS(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Bm(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function PM(e) {
  return Bm(e) || e === 47;
}
function DM(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function SS(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function FM(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Hm(e) {
  e.forEach(function(t) {
    if (delete t.location, pS(t) || mS(t))
      for (var n in t.options)
        delete t.options[n].location, Hm(t.options[n].value);
    else fS(t) && gS(t.style) || (dS(t) || hS(t)) && Dm(t.style) ? delete t.style.location : vS(t) && Hm(t.children);
  });
}
function MM(e, t) {
  t === void 0 && (t = {}), t = ee({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new OM(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Oe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Hm(n.val), n.val;
}
var Jr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Jr || (Jr = {}));
var co = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), I1 = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Jr.INVALID_VALUE, a) || this;
    }
    return t;
  }(co)
), LM = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Jr.INVALID_VALUE, i) || this;
    }
    return t;
  }(co)
), BM = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Jr.MISSING_VALUE, r) || this;
    }
    return t;
  }(co)
), un;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(un || (un = {}));
function HM(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== un.literal || n.type !== un.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function bS(e) {
  return typeof e == "function";
}
function Vc(e, t, n, r, i, a, l) {
  if (e.length === 1 && _1(e[0]))
    return [
      {
        type: un.literal,
        value: e[0].value
      }
    ];
  for (var u = [], f = 0, d = e; f < d.length; f++) {
    var h = d[f];
    if (_1(h)) {
      u.push({
        type: un.literal,
        value: h.value
      });
      continue;
    }
    if (lM(h)) {
      typeof a == "number" && u.push({
        type: un.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var m = h.value;
    if (!(i && m in i))
      throw new BM(m, l);
    var v = i[m];
    if (sM(h)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), u.push({
        type: typeof v == "string" ? un.literal : un.object,
        value: v
      });
      continue;
    }
    if (dS(h)) {
      var x = typeof h.style == "string" ? r.date[h.style] : Dm(h.style) ? h.style.parsedOptions : void 0;
      u.push({
        type: un.literal,
        value: n.getDateTimeFormat(t, x).format(v)
      });
      continue;
    }
    if (hS(h)) {
      var x = typeof h.style == "string" ? r.time[h.style] : Dm(h.style) ? h.style.parsedOptions : r.time.medium;
      u.push({
        type: un.literal,
        value: n.getDateTimeFormat(t, x).format(v)
      });
      continue;
    }
    if (fS(h)) {
      var x = typeof h.style == "string" ? r.number[h.style] : gS(h.style) ? h.style.parsedOptions : void 0;
      x && x.scale && (v = v * (x.scale || 1)), u.push({
        type: un.literal,
        value: n.getNumberFormat(t, x).format(v)
      });
      continue;
    }
    if (vS(h)) {
      var A = h.children, S = h.value, R = i[S];
      if (!bS(R))
        throw new LM(S, "function", l);
      var w = Vc(A, t, n, r, i, a), C = R(w.map(function(O) {
        return O.value;
      }));
      Array.isArray(C) || (C = [C]), u.push.apply(u, C.map(function(O) {
        return {
          type: typeof O == "string" ? un.literal : un.object,
          value: O
        };
      }));
    }
    if (pS(h)) {
      var k = h.options[v] || h.options.other;
      if (!k)
        throw new I1(h.value, v, Object.keys(h.options), l);
      u.push.apply(u, Vc(k.value, t, n, r, i));
      continue;
    }
    if (mS(h)) {
      var k = h.options["=".concat(v)];
      if (!k) {
        if (!Intl.PluralRules)
          throw new co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Jr.MISSING_INTL_API, l);
        var I = n.getPluralRules(t, { type: h.pluralType }).select(v - (h.offset || 0));
        k = h.options[I] || h.options.other;
      }
      if (!k)
        throw new I1(h.value, v, Object.keys(h.options), l);
      u.push.apply(u, Vc(k.value, t, n, r, i, v - (h.offset || 0)));
      continue;
    }
  }
  return HM(u);
}
function VM(e, t) {
  return t ? ee(ee(ee({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = ee(ee({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function UM(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = VM(e[r], t[r]), n;
  }, ee({}, e)) : e;
}
function gp(e) {
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
function $M(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: dn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Qt([void 0], n, !1)))();
    }, {
      cache: gp(e.number),
      strategy: hn.variadic
    }),
    getDateTimeFormat: dn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Qt([void 0], n, !1)))();
    }, {
      cache: gp(e.dateTime),
      strategy: hn.variadic
    }),
    getPluralRules: dn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Qt([void 0], n, !1)))();
    }, {
      cache: gp(e.pluralRules),
      strategy: hn.variadic
    })
  };
}
var kS = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(f) {
        var d = a.formatToParts(f);
        if (d.length === 1)
          return d[0].value;
        var h = d.reduce(function(m, v) {
          return !m.length || v.type !== un.literal || typeof m[m.length - 1] != "string" ? m.push(v.value) : m[m.length - 1] += v.value, m;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(f) {
        return Vc(a.ast, a.locales, a.formatters, a.formats, f, void 0, a.message);
      }, this.resolvedOptions = function() {
        var f;
        return {
          locale: ((f = a.resolvedLocale) === null || f === void 0 ? void 0 : f.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var u = Zr(l, ["formatters"]);
        this.ast = e.__parse(t, ee(ee({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = UM(e.formats, r), this.formatters = i && i.formatters || $M(this.formatterCache);
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
    }, e.__parse = MM, e.formats = {
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
), jo;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(jo || (jo = {}));
var Ql = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i) {
      var a = this, l = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(l ? `
`.concat(l.message, `
`).concat(l.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), zM = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r) {
      return e.call(this, jo.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Ql)
), WM = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r) {
      return e.call(this, jo.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Ql)
), N1 = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r) {
      return e.call(this, jo.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Ql)
), gr = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i) {
      var a = e.call(this, jo.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Ql)
), yp = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r, i, a) {
      var l = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return l.descriptor = i, l.locale = r, l;
    }
    return t;
  }(gr)
), jM = (
  /** @class */
  function(e) {
    vr(t, e);
    function t(n, r) {
      var i = e.call(this, jo.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var l;
        return (l = a.value) !== null && l !== void 0 ? l : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Ql)
);
function Yo(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var GM = function(e) {
}, XM = function(e) {
}, AS = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: GM,
  onWarn: XM
};
function TS() {
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
function ko(e) {
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
function qM(e) {
  e === void 0 && (e = TS());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = dn(function() {
    for (var u, f = [], d = 0; d < arguments.length; d++)
      f[d] = arguments[d];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, Qt([void 0], f, !1)))();
  }, {
    cache: ko(e.dateTime),
    strategy: hn.variadic
  }), a = dn(function() {
    for (var u, f = [], d = 0; d < arguments.length; d++)
      f[d] = arguments[d];
    return new ((u = Intl.NumberFormat).bind.apply(u, Qt([void 0], f, !1)))();
  }, {
    cache: ko(e.number),
    strategy: hn.variadic
  }), l = dn(function() {
    for (var u, f = [], d = 0; d < arguments.length; d++)
      f[d] = arguments[d];
    return new ((u = Intl.PluralRules).bind.apply(u, Qt([void 0], f, !1)))();
  }, {
    cache: ko(e.pluralRules),
    strategy: hn.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: dn(function(u, f, d, h) {
      return new kS(u, f, d, ee({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: l
      } }, h || {}));
    }, {
      cache: ko(e.message),
      strategy: hn.variadic
    }),
    getRelativeTimeFormat: dn(function() {
      for (var u = [], f = 0; f < arguments.length; f++)
        u[f] = arguments[f];
      return new (t.bind.apply(t, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.relativeTime),
      strategy: hn.variadic
    }),
    getPluralRules: l,
    getListFormat: dn(function() {
      for (var u = [], f = 0; f < arguments.length; f++)
        u[f] = arguments[f];
      return new (n.bind.apply(n, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.list),
      strategy: hn.variadic
    }),
    getDisplayNames: dn(function() {
      for (var u = [], f = 0; f < arguments.length; f++)
        u[f] = arguments[f];
      return new (r.bind.apply(r, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.displayNames),
      strategy: hn.variadic
    })
  };
}
function ng(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new zM("No ".concat(t, " format named: ").concat(n)));
}
function gc(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = ee({ timeZone: t }, e[r]), n;
  }, {});
}
function O1(e, t) {
  var n = Object.keys(ee(ee({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = ee(ee({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function P1(e, t) {
  if (!t)
    return e;
  var n = kS.formats;
  return ee(ee(ee({}, n), e), { date: O1(gc(n.date, t), gc(e.date || {}, t)), time: O1(gc(n.time, t), gc(e.time || {}, t)) });
}
var Vm = function(e, t, n, r, i) {
  var a = e.locale, l = e.formats, u = e.messages, f = e.defaultLocale, d = e.defaultFormats, h = e.fallbackOnEmptyString, m = e.onError, v = e.timeZone, x = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var A = n.id, S = n.defaultMessage;
  cS(!!A, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var R = String(A), w = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, R) && u[R]
  );
  if (Array.isArray(w) && w.length === 1 && w[0].type === rt.literal)
    return w[0].value;
  if (!r && w && typeof w == "string" && !x)
    return w.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = ee(ee({}, x), r || {}), l = P1(l, v), d = P1(d, v), !w) {
    if (h === !1 && w === "")
      return w;
    if ((!S || a && a.toLowerCase() !== f.toLowerCase()) && m(new jM(n, a)), S)
      try {
        var C = t.getMessageFormat(S, f, d, i);
        return C.format(r);
      } catch (k) {
        return m(new yp('Error formatting default message for: "'.concat(R, '", rendering default message verbatim'), a, n, k)), typeof S == "string" ? S : R;
      }
    return R;
  }
  try {
    var C = t.getMessageFormat(w, a, l, ee({ formatters: t }, i || {}));
    return C.format(r);
  } catch (k) {
    m(new yp('Error formatting message: "'.concat(R, '", using ').concat(S ? "default message" : "id", " as fallback."), a, n, k));
  }
  if (S)
    try {
      var C = t.getMessageFormat(S, f, d, i);
      return C.format(r);
    } catch (k) {
      m(new yp('Error formatting the default message for: "'.concat(R, '", rendering message verbatim'), a, n, k));
    }
  return typeof w == "string" ? w : typeof S == "string" ? S : R;
}, RS = [
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
function Jf(e, t, n, r) {
  var i = e.locale, a = e.formats, l = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var f = r.format, d = ee(ee({}, u && { timeZone: u }), f && ng(a, t, f, l)), h = Yo(r, RS, d);
  return t === "time" && !h.hour && !h.minute && !h.second && !h.timeStyle && !h.dateStyle && (h = ee(ee({}, h), { hour: "numeric", minute: "numeric" })), n(i, h);
}
function KM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Jf(e, "date", t, l).format(u);
  } catch (f) {
    e.onError(new gr("Error formatting date.", e.locale, f));
  }
  return String(u);
}
function YM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Jf(e, "time", t, l).format(u);
  } catch (f) {
    e.onError(new gr("Error formatting time.", e.locale, f));
  }
  return String(u);
}
function QM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = n[2], u = l === void 0 ? {} : l, f = e.timeZone, d = e.locale, h = e.onError, m = Yo(u, RS, f ? { timeZone: f } : {});
  try {
    return t(d, m).formatRange(i, a);
  } catch (v) {
    h(new gr("Error formatting date time range.", e.locale, v));
  }
  return String(i);
}
function ZM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Jf(e, "date", t, l).formatToParts(u);
  } catch (f) {
    e.onError(new gr("Error formatting date.", e.locale, f));
  }
  return [];
}
function JM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Jf(e, "time", t, l).formatToParts(u);
  } catch (f) {
    e.onError(new gr("Error formatting time.", e.locale, f));
  }
  return [];
}
var eL = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function tL(e, t, n, r) {
  var i = e.locale, a = e.onError, l = Intl.DisplayNames;
  l || a(new co(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Jr.MISSING_INTL_API));
  var u = Yo(r, eL);
  try {
    return t(i, u).of(n);
  } catch (f) {
    a(new gr("Error formatting display name.", i, f));
  }
}
var nL = [
  "type",
  "style"
], D1 = Date.now();
function rL(e) {
  return "".concat(D1, "_").concat(e, "_").concat(D1);
}
function iL(e, t, n, r) {
  r === void 0 && (r = {});
  var i = IS(e, t, n, r).reduce(function(a, l) {
    var u = l.value;
    return typeof u != "string" ? a.push(u) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += u : a.push(u), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function IS(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || a(new co(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Jr.MISSING_INTL_API));
  var u = Yo(r, nL);
  try {
    var f = {}, d = n.map(function(h, m) {
      if (typeof h == "object") {
        var v = rL(m);
        return f[v] = h, v;
      }
      return String(h);
    });
    return t(i, u).formatToParts(d).map(function(h) {
      return h.type === "literal" ? h : ee(ee({}, h), { value: f[h.value] || h.value });
    });
  } catch (h) {
    a(new gr("Error formatting list.", i, h));
  }
  return n;
}
var oL = ["type"];
function aL(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Jr.MISSING_INTL_API));
  var l = Yo(r, oL);
  try {
    return t(i, l).select(n);
  } catch (u) {
    a(new gr("Error formatting plural.", i, u));
  }
  return "other";
}
var sL = ["numeric", "style"];
function lL(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = !!l && ng(i, "relative", l, a) || {}, f = Yo(n, sL, u);
  return t(r, f);
}
function uL(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new co(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Jr.MISSING_INTL_API));
  try {
    return lL(e, t, i).format(n, r);
  } catch (l) {
    e.onError(new gr("Error formatting relative time.", e.locale, l));
  }
  return String(n);
}
var cL = [
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
function NS(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = l && ng(i, "number", l, a) || {}, f = Yo(n, cL, u);
  return t(r, f);
}
function fL(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return NS(e, t, r).format(n);
  } catch (i) {
    e.onError(new gr("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function dL(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return NS(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new gr("Error formatting number.", e.locale, i));
  }
  return [];
}
function hL(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function pL(e) {
  e.onWarn && e.defaultRichTextElements && hL(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function mL(e, t) {
  var n = qM(t), r = ee(ee({}, AS), e), i = r.locale, a = r.defaultLocale, l = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new N1('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new N1('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new WM('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), pL(r), ee(ee({}, r), {
    formatters: n,
    formatNumber: fL.bind(null, r, n.getNumberFormat),
    formatNumberToParts: dL.bind(null, r, n.getNumberFormat),
    formatRelativeTime: uL.bind(null, r, n.getRelativeTimeFormat),
    formatDate: KM.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: ZM.bind(null, r, n.getDateTimeFormat),
    formatTime: YM.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: QM.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: JM.bind(null, r, n.getDateTimeFormat),
    formatPlural: aL.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: Vm.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: Vm.bind(null, r, n),
    formatList: iL.bind(null, r, n.getListFormat),
    formatListToParts: IS.bind(null, r, n.getListFormat),
    formatDisplayName: tL.bind(null, r, n.getDisplayNames)
  });
}
function OS(e) {
  cS(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var PS = ee(ee({}, AS), { textComponent: y.Fragment });
function vL(e) {
  return function(t) {
    return e(y.Children.toArray(t));
  };
}
function Um(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (var a = 0; a < i; a++) {
    var l = n[a];
    if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l))
      return !1;
  }
  return !0;
}
var DS = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = typeof Symbol == "function" && Symbol.for, rg = Mt ? Symbol.for("react.element") : 60103, ig = Mt ? Symbol.for("react.portal") : 60106, ed = Mt ? Symbol.for("react.fragment") : 60107, td = Mt ? Symbol.for("react.strict_mode") : 60108, nd = Mt ? Symbol.for("react.profiler") : 60114, rd = Mt ? Symbol.for("react.provider") : 60109, id = Mt ? Symbol.for("react.context") : 60110, og = Mt ? Symbol.for("react.async_mode") : 60111, od = Mt ? Symbol.for("react.concurrent_mode") : 60111, ad = Mt ? Symbol.for("react.forward_ref") : 60112, sd = Mt ? Symbol.for("react.suspense") : 60113, gL = Mt ? Symbol.for("react.suspense_list") : 60120, ld = Mt ? Symbol.for("react.memo") : 60115, ud = Mt ? Symbol.for("react.lazy") : 60116, yL = Mt ? Symbol.for("react.block") : 60121, EL = Mt ? Symbol.for("react.fundamental") : 60117, xL = Mt ? Symbol.for("react.responder") : 60118, wL = Mt ? Symbol.for("react.scope") : 60119;
function Xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rg:
        switch (e = e.type, e) {
          case og:
          case od:
          case ed:
          case nd:
          case td:
          case sd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case id:
              case ad:
              case ud:
              case ld:
              case rd:
                return e;
              default:
                return t;
            }
        }
      case ig:
        return t;
    }
  }
}
function FS(e) {
  return Xn(e) === od;
}
je.AsyncMode = og;
je.ConcurrentMode = od;
je.ContextConsumer = id;
je.ContextProvider = rd;
je.Element = rg;
je.ForwardRef = ad;
je.Fragment = ed;
je.Lazy = ud;
je.Memo = ld;
je.Portal = ig;
je.Profiler = nd;
je.StrictMode = td;
je.Suspense = sd;
je.isAsyncMode = function(e) {
  return FS(e) || Xn(e) === og;
};
je.isConcurrentMode = FS;
je.isContextConsumer = function(e) {
  return Xn(e) === id;
};
je.isContextProvider = function(e) {
  return Xn(e) === rd;
};
je.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rg;
};
je.isForwardRef = function(e) {
  return Xn(e) === ad;
};
je.isFragment = function(e) {
  return Xn(e) === ed;
};
je.isLazy = function(e) {
  return Xn(e) === ud;
};
je.isMemo = function(e) {
  return Xn(e) === ld;
};
je.isPortal = function(e) {
  return Xn(e) === ig;
};
je.isProfiler = function(e) {
  return Xn(e) === nd;
};
je.isStrictMode = function(e) {
  return Xn(e) === td;
};
je.isSuspense = function(e) {
  return Xn(e) === sd;
};
je.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ed || e === od || e === nd || e === td || e === sd || e === gL || typeof e == "object" && e !== null && (e.$$typeof === ud || e.$$typeof === ld || e.$$typeof === rd || e.$$typeof === id || e.$$typeof === ad || e.$$typeof === EL || e.$$typeof === xL || e.$$typeof === wL || e.$$typeof === yL);
};
je.typeOf = Xn;
DS.exports = je;
var CL = DS.exports, MS = CL, _L = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, SL = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, LS = {};
LS[MS.ForwardRef] = _L;
LS[MS.Memo] = SL;
var ag = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = y.createContext(null)) : y.createContext(null);
ag.Consumer;
var bL = ag.Provider, kL = bL, AL = ag;
function vs() {
  var e = y.useContext(AL);
  return OS(e), e;
}
var $m;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})($m || ($m = {}));
var zm;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(zm || (zm = {}));
function BS(e) {
  var t = function(n) {
    var r = vs(), i = n.value, a = n.children, l = Zr(n, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, f = e === "formatDate" ? r.formatDateToParts(u, l) : r.formatTimeToParts(u, l);
    return a(f);
  };
  return t.displayName = zm[e], t;
}
function Zl(e) {
  var t = function(n) {
    var r = vs(), i = n.value, a = n.children, l = Zr(
      n,
      ["value", "children"]
    ), u = r[e](i, l);
    if (typeof a == "function")
      return a(u);
    var f = r.textComponent || y.Fragment;
    return y.createElement(f, null, u);
  };
  return t.displayName = $m[e], t;
}
function HS(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = bS(r) ? vL(r) : r, t;
  }, {});
}
var F1 = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var l = HS(r), u = Vm.apply(void 0, Qt([
    e,
    t,
    n,
    l
  ], i, !1));
  return Array.isArray(u) ? y.Children.toArray(u) : u;
}, M1 = function(e, t) {
  var n = e.defaultRichTextElements, r = Zr(e, ["defaultRichTextElements"]), i = HS(n), a = mL(ee(ee(ee({}, PS), r), { defaultRichTextElements: i }), t), l = {
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
  return ee(ee({}, a), {
    formatMessage: F1.bind(
      null,
      l,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: F1.bind(null, l, a.formatters)
  });
};
function Ep(e) {
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
var TL = (
  /** @class */
  function(e) {
    vr(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = TS(), n.state = {
        cache: n.cache,
        intl: M1(Ep(n.props), n.cache),
        prevConfig: Ep(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, l = Ep(n);
      return Um(i, l) ? null : {
        intl: M1(l, a),
        prevConfig: l
      };
    }, t.prototype.render = function() {
      return OS(this.state.intl), y.createElement(kL, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = PS, t;
  }(y.PureComponent)
);
function RL(e, t) {
  var n = e.values, r = Zr(e, ["values"]), i = t.values, a = Zr(t, ["values"]);
  return Um(i, n) && Um(r, a);
}
function VS(e) {
  var t = vs(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? y.Fragment : r, a = e.id, l = e.description, u = e.defaultMessage, f = e.values, d = e.children, h = e.tagName, m = h === void 0 ? i : h, v = e.ignoreTag, x = { id: a, description: l, defaultMessage: u }, A = n(x, f, {
    ignoreTag: v
  });
  return typeof d == "function" ? d(Array.isArray(A) ? A : [A]) : m ? y.createElement(m, null, y.Children.toArray(A)) : y.createElement(y.Fragment, null, A);
}
VS.displayName = "FormattedMessage";
var US = y.memo(VS, RL);
US.displayName = "MemoizedFormattedMessage";
Zl("formatDate");
Zl("formatTime");
Zl("formatNumber");
Zl("formatList");
Zl("formatDisplayName");
BS("formatDate");
BS("formatTime");
var $S = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (a = i(a, r(u)));
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
      var l = "";
      for (var u in a)
        t.call(a, u) && a[u] && (l = i(l, u));
      return l;
    }
    function i(a, l) {
      return l ? a ? a + " " + l : a + l : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})($S);
var IL = $S.exports;
const Z = /* @__PURE__ */ ds(IL);
function le() {
  return le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, le.apply(null, arguments);
}
function Be(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function L1(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function NL(e) {
  var t = OL(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function OL(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function zS(e, t, n) {
  var r = y.useRef(e !== void 0), i = y.useState(t), a = i[0], l = i[1], u = e !== void 0, f = r.current;
  return r.current = u, !u && f && a !== t && l(t), [u ? e : a, y.useCallback(function(d) {
    for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
      m[v - 1] = arguments[v];
    n && n.apply(void 0, [d].concat(m)), l(d);
  }, [n])];
}
function PL(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, l = a[L1(r)], u = a[r], f = Be(a, [L1(r), r].map(NL)), d = t[r], h = zS(u, l, e[d]), m = h[0], v = h[1];
    return le({}, f, (i = {}, i[r] = m, i[d] = v, i));
  }, e);
}
function Wm(e, t) {
  return Wm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wm(e, t);
}
function Jl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wm(e, t);
}
var sg = /* @__PURE__ */ _.createContext({});
sg.Consumer;
sg.Provider;
function Rt(e, t) {
  var n = y.useContext(sg);
  return e || n[t] || t;
}
function lg(e) {
  return e && e.ownerDocument || document;
}
function DL(e) {
  var t = lg(e);
  return t && t.defaultView || window;
}
function FL(e, t) {
  return DL(e).getComputedStyle(e, t);
}
var ML = /([A-Z])/g;
function LL(e) {
  return e.replace(ML, "-$1").toLowerCase();
}
var BL = /^ms-/;
function yc(e) {
  return LL(e).replace(BL, "-ms-");
}
var HL = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function VL(e) {
  return !!(e && HL.test(e));
}
function yf(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(yc(t)) || FL(e).getPropertyValue(yc(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(yc(i)) : VL(i) ? r += i + "(" + a + ") " : n += yc(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var WS = { exports: {} }, UL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", $L = UL, zL = $L;
function jS() {
}
function GS() {
}
GS.resetWarningCache = jS;
var WL = function() {
  function e(r, i, a, l, u, f) {
    if (f !== zL) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw d.name = "Invariant Violation", d;
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
    checkPropTypes: GS,
    resetWarningCache: jS
  };
  return n.PropTypes = n, n;
};
WS.exports = WL();
var jL = WS.exports;
const g = /* @__PURE__ */ ds(jL), B1 = {
  disabled: !1
}, Ef = _.createContext(null);
var XS = function(t) {
  return t.scrollTop;
}, il = "unmounted", Hi = "exited", hi = "entering", zi = "entered", xf = "exiting", Dr = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = i, u = l && !l.isMounting ? r.enter : r.appear, f;
    return a.appearStatus = null, r.in ? u ? (f = Hi, a.appearStatus = hi) : f = zi : r.unmountOnExit || r.mountOnEnter ? f = il : f = Hi, a.state = {
      status: f
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var l = i.in;
    return l && a.status === il ? {
      status: Hi
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== hi && l !== zi && (a = hi) : (l === hi || l === zi) && (a = xf);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, l, u;
    return a = l = u = i, i != null && typeof i != "number" && (a = i.exit, l = i.enter, u = i.appear !== void 0 ? i.appear : l), {
      exit: a,
      enter: l,
      appear: u
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === hi) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Oo.findDOMNode(this);
          l && XS(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Hi && this.setState({
      status: il
    });
  }, n.performEnter = function(i) {
    var a = this, l = this.props.enter, u = this.context ? this.context.isMounting : i, f = this.props.nodeRef ? [u] : [Oo.findDOMNode(this), u], d = f[0], h = f[1], m = this.getTimeouts(), v = u ? m.appear : m.enter;
    if (!i && !l || B1.disabled) {
      this.safeSetState({
        status: zi
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, h), this.safeSetState({
      status: hi
    }, function() {
      a.props.onEntering(d, h), a.onTransitionEnd(v, function() {
        a.safeSetState({
          status: zi
        }, function() {
          a.props.onEntered(d, h);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Oo.findDOMNode(this);
    if (!a || B1.disabled) {
      this.safeSetState({
        status: Hi
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: xf
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Hi
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, a.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Oo.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var f = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = f[0], h = f[1];
      this.props.addEndListener(d, h);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === il)
      return null;
    var a = this.props, l = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var u = Be(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _.createElement(Ef.Provider, {
        value: null
      }, typeof l == "function" ? l(i, u) : _.cloneElement(_.Children.only(l), u))
    );
  }, t;
}(_.Component);
Dr.contextType = Ef;
Dr.propTypes = {};
function Ea() {
}
Dr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ea,
  onEntering: Ea,
  onEntered: Ea,
  onExit: Ea,
  onExiting: Ea,
  onExited: Ea
};
Dr.UNMOUNTED = il;
Dr.EXITED = Hi;
Dr.ENTERING = hi;
Dr.ENTERED = zi;
Dr.EXITING = xf;
const GL = !!(typeof window < "u" && window.document && window.document.createElement);
var jm = !1, Gm = !1;
try {
  var xp = {
    get passive() {
      return jm = !0;
    },
    get once() {
      return Gm = jm = !0;
    }
  };
  GL && (window.addEventListener("test", xp, xp), window.removeEventListener("test", xp, !0));
} catch {
}
function XL(e, t, n, r) {
  if (r && typeof r != "boolean" && !Gm) {
    var i = r.once, a = r.capture, l = n;
    !Gm && i && (l = n.__once || function u(f) {
      this.removeEventListener(t, u, a), n.call(this, f);
    }, n.__once = l), e.addEventListener(t, l, jm ? r : a);
  }
  e.addEventListener(t, n, r);
}
function qL(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function La(e, t, n, r) {
  return XL(e, t, n, r), function() {
    qL(e, t, n, r);
  };
}
function KL(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function YL(e) {
  var t = yf(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function QL(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || KL(e, "transitionend", !0);
  }, t + n), a = La(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function ZL(e, t, n, r) {
  n == null && (n = YL(e) || 0);
  var i = QL(e, n, r), a = La(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function H1(e, t) {
  var n = yf(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function qS(e, t) {
  var n = H1(e, "transitionDuration"), r = H1(e, "transitionDelay"), i = ZL(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function Sa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var l = arguments.length, u = new Array(l), f = 0; f < l; f++)
        u[f] = arguments[f];
      r.apply(this, u), i.apply(this, u);
    };
  }, null);
}
function KS(e) {
  e.offsetHeight;
}
var JL = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], xa, eB = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function YS(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], i = eB[e];
  return r + // @ts-ignore
  parseInt(yf(t, i[0]), 10) + // @ts-ignore
  parseInt(yf(t, i[1]), 10);
}
var tB = (xa = {}, xa[Hi] = "collapse", xa[xf] = "collapsing", xa[hi] = "collapsing", xa[zi] = "collapse show", xa), nB = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: YS
}, QS = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, i = e.onEntered, a = e.onExit, l = e.onExiting, u = e.className, f = e.children, d = e.dimension, h = d === void 0 ? "height" : d, m = e.getDimensionValue, v = m === void 0 ? YS : m, x = Be(e, JL), A = typeof h == "function" ? h() : h, S = y.useMemo(function() {
    return Sa(function(I) {
      I.style[A] = "0";
    }, n);
  }, [A, n]), R = y.useMemo(function() {
    return Sa(function(I) {
      var O = "scroll" + A[0].toUpperCase() + A.slice(1);
      I.style[A] = I[O] + "px";
    }, r);
  }, [A, r]), w = y.useMemo(function() {
    return Sa(function(I) {
      I.style[A] = null;
    }, i);
  }, [A, i]), C = y.useMemo(function() {
    return Sa(function(I) {
      I.style[A] = v(A, I) + "px", KS(I);
    }, a);
  }, [a, v, A]), k = y.useMemo(function() {
    return Sa(function(I) {
      I.style[A] = null;
    }, l);
  }, [A, l]);
  return /* @__PURE__ */ _.createElement(
    Dr,
    le({
      ref: t,
      addEndListener: qS
    }, x, {
      "aria-expanded": x.role ? x.in : null,
      onEnter: S,
      onEntering: R,
      onEntered: w,
      onExit: C,
      onExiting: k
    }),
    function(I, O) {
      return /* @__PURE__ */ _.cloneElement(f, le({}, O, {
        className: Z(u, f.props.className, tB[I], A === "width" && "width")
      }));
    }
  );
});
QS.defaultProps = nB;
function rB(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Xm(e) {
  const t = rB(e);
  return y.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var iB = ["className", "children"], Ec, oB = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, aB = (Ec = {}, Ec[hi] = "show", Ec[zi] = "show", Ec), gs = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = Be(e, iB), a = y.useCallback(function(l) {
    KS(l), i.onEnter && i.onEnter(l);
  }, [i]);
  return /* @__PURE__ */ _.createElement(Dr, le({
    ref: t,
    addEndListener: qS
  }, i, {
    onEnter: a
  }), function(l, u) {
    return /* @__PURE__ */ _.cloneElement(r, le({}, u, {
      className: Z("fade", n, r.props.className, aB[l])
    }));
  });
});
gs.defaultProps = oB;
gs.displayName = "Fade";
var sB = ["label", "onClick", "className"], lB = {
  label: g.string.isRequired,
  onClick: g.func
}, uB = {
  label: "Close"
}, cd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = Be(e, sB);
  return /* @__PURE__ */ _.createElement("button", le({
    ref: t,
    type: "button",
    className: Z("close", i),
    onClick: r
  }, a), /* @__PURE__ */ _.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, n));
});
cd.displayName = "CloseButton";
cd.propTypes = lB;
cd.defaultProps = uB;
const ZS = function(e) {
  return /* @__PURE__ */ _.forwardRef(function(t, n) {
    return /* @__PURE__ */ _.createElement("div", le({}, t, {
      ref: n,
      className: Z(t.className, e)
    }));
  });
};
var cB = /-(.)/g;
function fB(e) {
  return e.replace(cB, function(t, n) {
    return n.toUpperCase();
  });
}
var dB = ["className", "bsPrefix", "as"], hB = function(t) {
  return t[0].toUpperCase() + fB(t).slice(1);
};
function ug(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? hB(e) : r, a = n.Component, l = n.defaultProps, u = /* @__PURE__ */ _.forwardRef(function(f, d) {
    var h = f.className, m = f.bsPrefix, v = f.as, x = v === void 0 ? a || "div" : v, A = Be(f, dB), S = Rt(m, e);
    return /* @__PURE__ */ _.createElement(x, le({
      ref: d,
      className: Z(h, S)
    }, A));
  });
  return u.defaultProps = l, u.displayName = i, u;
}
var pB = ["as", "disabled", "onKeyDown"];
function V1(e) {
  return !e || e.trim() === "#";
}
var cg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, l = Be(e, pB), u = function(h) {
    var m = l.href, v = l.onClick;
    if ((i || V1(m)) && h.preventDefault(), i) {
      h.stopPropagation();
      return;
    }
    v && v(h);
  }, f = function(h) {
    h.key === " " && (h.preventDefault(), u(h));
  };
  return V1(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), i && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ _.createElement(r, le({
    ref: t
  }, l, {
    onClick: u,
    onKeyDown: Sa(f, a)
  }));
});
cg.displayName = "SafeAnchor";
var mB = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], JS = ZS("h4");
JS.displayName = "DivStyledAsH4";
var vB = ug("alert-heading", {
  Component: JS
}), gB = ug("alert-link", {
  Component: cg
}), yB = {
  show: !0,
  transition: gs,
  closeLabel: "Close alert"
}, Qo = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = PL(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, l = n.className, u = n.children, f = n.variant, d = n.onClose, h = n.dismissible, m = n.transition, v = Be(n, mB), x = Rt(r, "alert"), A = Xm(function(w) {
    d && d(!1, w);
  }), S = m === !0 ? gs : m, R = /* @__PURE__ */ _.createElement("div", le({
    role: "alert"
  }, S ? void 0 : v, {
    ref: t,
    className: Z(l, x, f && x + "-" + f, h && x + "-dismissible")
  }), h && /* @__PURE__ */ _.createElement(cd, {
    onClick: A,
    label: a
  }), u);
  return S ? /* @__PURE__ */ _.createElement(S, le({
    unmountOnExit: !0
  }, v, {
    ref: void 0,
    in: i
  }), R) : i ? R : null;
});
Qo.displayName = "Alert";
Qo.defaultProps = yB;
Qo.Link = gB;
Qo.Heading = vB;
var EB = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], xB = {
  variant: "primary",
  active: !1,
  disabled: !1
}, fg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, l = e.className, u = e.block, f = e.type, d = e.as, h = Be(e, EB), m = Rt(n, "btn"), v = Z(l, m, a && "active", r && m + "-" + r, u && m + "-block", i && m + "-" + i);
  if (h.href)
    return /* @__PURE__ */ _.createElement(cg, le({}, h, {
      as: d,
      ref: t,
      className: Z(v, h.disabled && "disabled")
    }));
  t && (h.ref = t), f ? h.type = f : d || (h.type = "button");
  var x = d || "button";
  return /* @__PURE__ */ _.createElement(x, le({}, h, {
    className: v
  }));
});
fg.displayName = "Button";
fg.defaultProps = xB;
function eb() {
  const e = y.useRef(!0), t = y.useRef(() => e.current);
  return y.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function wB(e) {
  const t = y.useRef(e);
  return t.current = e, t;
}
function CB(e) {
  const t = wB(e);
  y.useEffect(() => () => t.current(), []);
}
const qm = 2 ** 31 - 1;
function tb(e, t, n) {
  const r = n - Date.now();
  e.current = r <= qm ? setTimeout(t, r) : setTimeout(() => tb(e, t, n), qm);
}
function _B() {
  const e = eb(), t = y.useRef();
  return CB(() => clearTimeout(t.current)), y.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= qm ? t.current = setTimeout(i, a) : tb(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
var SB = ["bsPrefix", "className", "as"], bB = ["xl", "lg", "md", "sm", "xs"], nb = /* @__PURE__ */ _.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, l = Be(e, SB), u = Rt(n, "col"), f = [], d = [];
    return bB.forEach(function(h) {
      var m = l[h];
      delete l[h];
      var v, x, A;
      if (typeof m == "object" && m != null) {
        var S = m.span;
        v = S === void 0 ? !0 : S, x = m.offset, A = m.order;
      } else
        v = m;
      var R = h !== "xs" ? "-" + h : "";
      v && f.push(v === !0 ? "" + u + R : "" + u + R + "-" + v), A != null && d.push("order" + R + "-" + A), x != null && d.push("offset" + R + "-" + x);
    }), f.length || f.push(u), /* @__PURE__ */ _.createElement(a, le({}, l, {
      ref: t,
      className: Z.apply(void 0, [r].concat(f, d))
    }));
  }
);
nb.displayName = "Col";
function U1() {
  return y.useState(null);
}
function kB(e) {
  const t = eb();
  return [e[0], y.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Rn = "top", hr = "bottom", pr = "right", In = "left", dg = "auto", eu = [Rn, hr, pr, In], is = "start", Ml = "end", AB = "clippingParents", rb = "viewport", Zs = "popper", TB = "reference", $1 = /* @__PURE__ */ eu.reduce(function(e, t) {
  return e.concat([t + "-" + is, t + "-" + Ml]);
}, []), hg = /* @__PURE__ */ [].concat(eu, [dg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + is, t + "-" + Ml]);
}, []), RB = "beforeRead", IB = "read", NB = "afterRead", OB = "beforeMain", PB = "main", DB = "afterMain", FB = "beforeWrite", MB = "write", LB = "afterWrite", BB = [RB, IB, NB, OB, PB, DB, FB, MB, LB];
function Yr(e) {
  return e.split("-")[0];
}
function Wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Go(e) {
  var t = Wn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qr(e) {
  var t = Wn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Wn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Lo = Math.max, wf = Math.min, os = Math.round;
function Km() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ib() {
  return !/^((?!chrome|android).)*safari/i.test(Km());
}
function as(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Qr(e) && (i = e.offsetWidth > 0 && os(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && os(r.height) / e.offsetHeight || 1);
  var l = Go(e) ? Wn(e) : window, u = l.visualViewport, f = !ib() && n, d = (r.left + (f && u ? u.offsetLeft : 0)) / i, h = (r.top + (f && u ? u.offsetTop : 0)) / a, m = r.width / i, v = r.height / a;
  return {
    width: m,
    height: v,
    top: h,
    right: d + m,
    bottom: h + v,
    left: d,
    x: d,
    y: h
  };
}
function mg(e) {
  var t = as(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ob(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function io(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ci(e) {
  return Wn(e).getComputedStyle(e);
}
function HB(e) {
  return ["table", "td", "th"].indexOf(io(e)) >= 0;
}
function fo(e) {
  return ((Go(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function fd(e) {
  return io(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (pg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fo(e)
  );
}
function z1(e) {
  return !Qr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ci(e).position === "fixed" ? null : e.offsetParent;
}
function VB(e) {
  var t = /firefox/i.test(Km()), n = /Trident/i.test(Km());
  if (n && Qr(e)) {
    var r = Ci(e);
    if (r.position === "fixed")
      return null;
  }
  var i = fd(e);
  for (pg(i) && (i = i.host); Qr(i) && ["html", "body"].indexOf(io(i)) < 0; ) {
    var a = Ci(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tu(e) {
  for (var t = Wn(e), n = z1(e); n && HB(n) && Ci(n).position === "static"; )
    n = z1(n);
  return n && (io(n) === "html" || io(n) === "body" && Ci(n).position === "static") ? t : n || VB(e) || t;
}
function vg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pl(e, t, n) {
  return Lo(e, wf(t, n));
}
function UB(e, t, n) {
  var r = pl(e, t, n);
  return r > n ? n : r;
}
function ab() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sb(e) {
  return Object.assign({}, ab(), e);
}
function lb(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $B = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, sb(typeof t != "number" ? t : lb(t, eu));
};
function zB(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, u = Yr(n.placement), f = vg(u), d = [In, pr].indexOf(u) >= 0, h = d ? "height" : "width";
  if (!(!a || !l)) {
    var m = $B(i.padding, n), v = mg(a), x = f === "y" ? Rn : In, A = f === "y" ? hr : pr, S = n.rects.reference[h] + n.rects.reference[f] - l[f] - n.rects.popper[h], R = l[f] - n.rects.reference[f], w = tu(a), C = w ? f === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, k = S / 2 - R / 2, I = m[x], O = C - v[h] - m[A], D = C / 2 - v[h] / 2 + k, F = pl(I, D, O), B = f;
    n.modifiersData[r] = (t = {}, t[B] = F, t.centerOffset = F - D, t);
  }
}
function WB(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || ob(t.elements.popper, i) && (t.elements.arrow = i));
}
const jB = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: zB,
  effect: WB,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ss(e) {
  return e.split("-")[1];
}
var GB = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function XB(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: os(n * i) / i || 0,
    y: os(r * i) / i || 0
  };
}
function W1(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, l = e.offsets, u = e.position, f = e.gpuAcceleration, d = e.adaptive, h = e.roundOffsets, m = e.isFixed, v = l.x, x = v === void 0 ? 0 : v, A = l.y, S = A === void 0 ? 0 : A, R = typeof h == "function" ? h({
    x,
    y: S
  }) : {
    x,
    y: S
  };
  x = R.x, S = R.y;
  var w = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), k = In, I = Rn, O = window;
  if (d) {
    var D = tu(n), F = "clientHeight", B = "clientWidth";
    if (D === Wn(n) && (D = fo(n), Ci(D).position !== "static" && u === "absolute" && (F = "scrollHeight", B = "scrollWidth")), D = D, i === Rn || (i === In || i === pr) && a === Ml) {
      I = hr;
      var $ = m && D === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[F]
      );
      S -= $ - r.height, S *= f ? 1 : -1;
    }
    if (i === In || (i === Rn || i === hr) && a === Ml) {
      k = pr;
      var j = m && D === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[B]
      );
      x -= j - r.width, x *= f ? 1 : -1;
    }
  }
  var Q = Object.assign({
    position: u
  }, d && GB), ne = h === !0 ? XB({
    x,
    y: S
  }, Wn(n)) : {
    x,
    y: S
  };
  if (x = ne.x, S = ne.y, f) {
    var ae;
    return Object.assign({}, Q, (ae = {}, ae[I] = C ? "0" : "", ae[k] = w ? "0" : "", ae.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + S + "px)" : "translate3d(" + x + "px, " + S + "px, 0)", ae));
  }
  return Object.assign({}, Q, (t = {}, t[I] = C ? S + "px" : "", t[k] = w ? x + "px" : "", t.transform = "", t));
}
function qB(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, l = a === void 0 ? !0 : a, u = n.roundOffsets, f = u === void 0 ? !0 : u, d = {
    placement: Yr(t.placement),
    variation: ss(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, W1(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, W1(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const KB = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qB,
  data: {}
};
var xc = {
  passive: !0
};
function YB(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, l = r.resize, u = l === void 0 ? !0 : l, f = Wn(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(h) {
    h.addEventListener("scroll", n.update, xc);
  }), u && f.addEventListener("resize", n.update, xc), function() {
    a && d.forEach(function(h) {
      h.removeEventListener("scroll", n.update, xc);
    }), u && f.removeEventListener("resize", n.update, xc);
  };
}
const QB = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: YB,
  data: {}
};
var ZB = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Uc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ZB[t];
  });
}
var JB = {
  start: "end",
  end: "start"
};
function j1(e) {
  return e.replace(/start|end/g, function(t) {
    return JB[t];
  });
}
function gg(e) {
  var t = Wn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function yg(e) {
  return as(fo(e)).left + gg(e).scrollLeft;
}
function e3(e, t) {
  var n = Wn(e), r = fo(e), i = n.visualViewport, a = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    var d = ib();
    (d || !d && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: u + yg(e),
    y: f
  };
}
function t3(e) {
  var t, n = fo(e), r = gg(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Lo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Lo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + yg(e), f = -r.scrollTop;
  return Ci(i || n).direction === "rtl" && (u += Lo(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
function Eg(e) {
  var t = Ci(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ub(e) {
  return ["html", "body", "#document"].indexOf(io(e)) >= 0 ? e.ownerDocument.body : Qr(e) && Eg(e) ? e : ub(fd(e));
}
function ml(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ub(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Wn(r), l = i ? [a].concat(a.visualViewport || [], Eg(r) ? r : []) : r, u = t.concat(l);
  return i ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(ml(fd(l)))
  );
}
function Ym(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function n3(e, t) {
  var n = as(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function G1(e, t, n) {
  return t === rb ? Ym(e3(e, n)) : Go(t) ? n3(t, n) : Ym(t3(fo(e)));
}
function r3(e) {
  var t = ml(fd(e)), n = ["absolute", "fixed"].indexOf(Ci(e).position) >= 0, r = n && Qr(e) ? tu(e) : e;
  return Go(r) ? t.filter(function(i) {
    return Go(i) && ob(i, r) && io(i) !== "body";
  }) : [];
}
function i3(e, t, n, r) {
  var i = t === "clippingParents" ? r3(e) : [].concat(t), a = [].concat(i, [n]), l = a[0], u = a.reduce(function(f, d) {
    var h = G1(e, d, r);
    return f.top = Lo(h.top, f.top), f.right = wf(h.right, f.right), f.bottom = wf(h.bottom, f.bottom), f.left = Lo(h.left, f.left), f;
  }, G1(e, l, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function cb(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Yr(r) : null, a = r ? ss(r) : null, l = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, f;
  switch (i) {
    case Rn:
      f = {
        x: l,
        y: t.y - n.height
      };
      break;
    case hr:
      f = {
        x: l,
        y: t.y + t.height
      };
      break;
    case pr:
      f = {
        x: t.x + t.width,
        y: u
      };
      break;
    case In:
      f = {
        x: t.x - n.width,
        y: u
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? vg(i) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (a) {
      case is:
        f[d] = f[d] - (t[h] / 2 - n[h] / 2);
        break;
      case Ml:
        f[d] = f[d] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return f;
}
function Ll(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, l = a === void 0 ? e.strategy : a, u = n.boundary, f = u === void 0 ? AB : u, d = n.rootBoundary, h = d === void 0 ? rb : d, m = n.elementContext, v = m === void 0 ? Zs : m, x = n.altBoundary, A = x === void 0 ? !1 : x, S = n.padding, R = S === void 0 ? 0 : S, w = sb(typeof R != "number" ? R : lb(R, eu)), C = v === Zs ? TB : Zs, k = e.rects.popper, I = e.elements[A ? C : v], O = i3(Go(I) ? I : I.contextElement || fo(e.elements.popper), f, h, l), D = as(e.elements.reference), F = cb({
    reference: D,
    element: k,
    placement: i
  }), B = Ym(Object.assign({}, k, F)), $ = v === Zs ? B : D, j = {
    top: O.top - $.top + w.top,
    bottom: $.bottom - O.bottom + w.bottom,
    left: O.left - $.left + w.left,
    right: $.right - O.right + w.right
  }, Q = e.modifiersData.offset;
  if (v === Zs && Q) {
    var ne = Q[i];
    Object.keys(j).forEach(function(ae) {
      var ve = [pr, hr].indexOf(ae) >= 0 ? 1 : -1, Re = [Rn, hr].indexOf(ae) >= 0 ? "y" : "x";
      j[ae] += ne[Re] * ve;
    });
  }
  return j;
}
function o3(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, l = n.padding, u = n.flipVariations, f = n.allowedAutoPlacements, d = f === void 0 ? hg : f, h = ss(r), m = h ? u ? $1 : $1.filter(function(A) {
    return ss(A) === h;
  }) : eu, v = m.filter(function(A) {
    return d.indexOf(A) >= 0;
  });
  v.length === 0 && (v = m);
  var x = v.reduce(function(A, S) {
    return A[S] = Ll(e, {
      placement: S,
      boundary: i,
      rootBoundary: a,
      padding: l
    })[Yr(S)], A;
  }, {});
  return Object.keys(x).sort(function(A, S) {
    return x[A] - x[S];
  });
}
function a3(e) {
  if (Yr(e) === dg)
    return [];
  var t = Uc(e);
  return [j1(e), t, j1(t)];
}
function s3(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, l = n.altAxis, u = l === void 0 ? !0 : l, f = n.fallbackPlacements, d = n.padding, h = n.boundary, m = n.rootBoundary, v = n.altBoundary, x = n.flipVariations, A = x === void 0 ? !0 : x, S = n.allowedAutoPlacements, R = t.options.placement, w = Yr(R), C = w === R, k = f || (C || !A ? [Uc(R)] : a3(R)), I = [R].concat(k).reduce(function(Ue, He) {
      return Ue.concat(Yr(He) === dg ? o3(t, {
        placement: He,
        boundary: h,
        rootBoundary: m,
        padding: d,
        flipVariations: A,
        allowedAutoPlacements: S
      }) : He);
    }, []), O = t.rects.reference, D = t.rects.popper, F = /* @__PURE__ */ new Map(), B = !0, $ = I[0], j = 0; j < I.length; j++) {
      var Q = I[j], ne = Yr(Q), ae = ss(Q) === is, ve = [Rn, hr].indexOf(ne) >= 0, Re = ve ? "width" : "height", Ee = Ll(t, {
        placement: Q,
        boundary: h,
        rootBoundary: m,
        altBoundary: v,
        padding: d
      }), ce = ve ? ae ? pr : In : ae ? hr : Rn;
      O[Re] > D[Re] && (ce = Uc(ce));
      var G = Uc(ce), X = [];
      if (a && X.push(Ee[ne] <= 0), u && X.push(Ee[ce] <= 0, Ee[G] <= 0), X.every(function(Ue) {
        return Ue;
      })) {
        $ = Q, B = !1;
        break;
      }
      F.set(Q, X);
    }
    if (B)
      for (var Y = A ? 3 : 1, re = function(He) {
        var Ie = I.find(function(Et) {
          var Ke = F.get(Et);
          if (Ke)
            return Ke.slice(0, He).every(function(ot) {
              return ot;
            });
        });
        if (Ie)
          return $ = Ie, "break";
      }, te = Y; te > 0; te--) {
        var Ze = re(te);
        if (Ze === "break") break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const l3 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: s3,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function X1(e, t, n) {
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
function q1(e) {
  return [Rn, pr, hr, In].some(function(t) {
    return e[t] >= 0;
  });
}
function u3(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, l = Ll(t, {
    elementContext: "reference"
  }), u = Ll(t, {
    altBoundary: !0
  }), f = X1(l, r), d = X1(u, i, a), h = q1(f), m = q1(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: d,
    isReferenceHidden: h,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": m
  });
}
const c3 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: u3
};
function f3(e, t, n) {
  var r = Yr(e), i = [In, Rn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = a[0], u = a[1];
  return l = l || 0, u = (u || 0) * i, [In, pr].indexOf(r) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function d3(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, l = hg.reduce(function(h, m) {
    return h[m] = f3(m, t.rects, a), h;
  }, {}), u = l[t.placement], f = u.x, d = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = l;
}
const h3 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: d3
};
function p3(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = cb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const m3 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: p3,
  data: {}
};
function v3(e) {
  return e === "x" ? "y" : "x";
}
function g3(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, l = n.altAxis, u = l === void 0 ? !1 : l, f = n.boundary, d = n.rootBoundary, h = n.altBoundary, m = n.padding, v = n.tether, x = v === void 0 ? !0 : v, A = n.tetherOffset, S = A === void 0 ? 0 : A, R = Ll(t, {
    boundary: f,
    rootBoundary: d,
    padding: m,
    altBoundary: h
  }), w = Yr(t.placement), C = ss(t.placement), k = !C, I = vg(w), O = v3(I), D = t.modifiersData.popperOffsets, F = t.rects.reference, B = t.rects.popper, $ = typeof S == "function" ? S(Object.assign({}, t.rects, {
    placement: t.placement
  })) : S, j = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (D) {
    if (a) {
      var ae, ve = I === "y" ? Rn : In, Re = I === "y" ? hr : pr, Ee = I === "y" ? "height" : "width", ce = D[I], G = ce + R[ve], X = ce - R[Re], Y = x ? -B[Ee] / 2 : 0, re = C === is ? F[Ee] : B[Ee], te = C === is ? -B[Ee] : -F[Ee], Ze = t.elements.arrow, Ue = x && Ze ? mg(Ze) : {
        width: 0,
        height: 0
      }, He = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ab(), Ie = He[ve], Et = He[Re], Ke = pl(0, F[Ee], Ue[Ee]), ot = k ? F[Ee] / 2 - Y - Ke - Ie - j.mainAxis : re - Ke - Ie - j.mainAxis, Se = k ? -F[Ee] / 2 + Y + Ke + Et + j.mainAxis : te + Ke + Et + j.mainAxis, wt = t.elements.arrow && tu(t.elements.arrow), ut = wt ? I === "y" ? wt.clientTop || 0 : wt.clientLeft || 0 : 0, zt = (ae = Q == null ? void 0 : Q[I]) != null ? ae : 0, Ge = ce + ot - zt - ut, Nt = ce + Se - zt, Je = pl(x ? wf(G, Ge) : G, ce, x ? Lo(X, Nt) : X);
      D[I] = Je, ne[I] = Je - ce;
    }
    if (u) {
      var Ce, Xe = I === "x" ? Rn : In, $e = I === "x" ? hr : pr, Ae = D[O], et = O === "y" ? "height" : "width", tn = Ae + R[Xe], Nn = Ae - R[$e], Mr = [Rn, In].indexOf(w) !== -1, Lr = (Ce = Q == null ? void 0 : Q[O]) != null ? Ce : 0, ea = Mr ? tn : Ae - F[et] - B[et] - Lr + j.altAxis, nn = Mr ? Ae + F[et] + B[et] - Lr - j.altAxis : Nn, Wt = x && Mr ? UB(ea, Ae, nn) : pl(x ? ea : tn, Ae, x ? nn : Nn);
      D[O] = Wt, ne[O] = Wt - Ae;
    }
    t.modifiersData[r] = ne;
  }
}
const y3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: g3,
  requiresIfExists: ["offset"]
};
function E3(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function x3(e) {
  return e === Wn(e) || !Qr(e) ? gg(e) : E3(e);
}
function w3(e) {
  var t = e.getBoundingClientRect(), n = os(t.width) / e.offsetWidth || 1, r = os(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function C3(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qr(t), i = Qr(t) && w3(t), a = fo(t), l = as(e, i, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((io(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Eg(a)) && (u = x3(t)), Qr(t) ? (f = as(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : a && (f.x = yg(a))), {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function _3(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(u) {
      if (!n.has(u)) {
        var f = t.get(u);
        f && i(f);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function S3(e) {
  var t = _3(e);
  return BB.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function b3(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function k3(e) {
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
var K1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Y1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function A3(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? K1 : i;
  return function(u, f, d) {
    d === void 0 && (d = a);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, K1, a),
      modifiersData: {},
      elements: {
        reference: u,
        popper: f
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, x = {
      state: h,
      setOptions: function(w) {
        var C = typeof w == "function" ? w(h.options) : w;
        S(), h.options = Object.assign({}, a, h.options, C), h.scrollParents = {
          reference: Go(u) ? ml(u) : u.contextElement ? ml(u.contextElement) : [],
          popper: ml(f)
        };
        var k = S3(k3([].concat(r, h.options.modifiers)));
        return h.orderedModifiers = k.filter(function(I) {
          return I.enabled;
        }), A(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = h.elements, C = w.reference, k = w.popper;
          if (Y1(C, k)) {
            h.rects = {
              reference: C3(C, tu(k), h.options.strategy === "fixed"),
              popper: mg(k)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(j) {
              return h.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var O = h.orderedModifiers[I], D = O.fn, F = O.options, B = F === void 0 ? {} : F, $ = O.name;
              typeof D == "function" && (h = D({
                state: h,
                options: B,
                name: $,
                instance: x
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: b3(function() {
        return new Promise(function(R) {
          x.forceUpdate(), R(h);
        });
      }),
      destroy: function() {
        S(), v = !0;
      }
    };
    if (!Y1(u, f))
      return x;
    x.setOptions(d).then(function(R) {
      !v && d.onFirstUpdate && d.onFirstUpdate(R);
    });
    function A() {
      h.orderedModifiers.forEach(function(R) {
        var w = R.name, C = R.options, k = C === void 0 ? {} : C, I = R.effect;
        if (typeof I == "function") {
          var O = I({
            state: h,
            name: w,
            instance: x,
            options: k
          }), D = function() {
          };
          m.push(O || D);
        }
      });
    }
    function S() {
      m.forEach(function(R) {
        return R();
      }), m = [];
    }
    return x;
  };
}
var T3 = A3({
  defaultModifiers: [c3, m3, KB, QB, h3, l3, y3, jB]
}), Q1 = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, R3 = {
  name: "applyStyles",
  enabled: !1
}, I3 = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var n = t.state;
    return function() {
      var r = n.elements, i = r.reference, a = r.popper;
      if ("removeAttribute" in i) {
        var l = (i.getAttribute("aria-describedby") || "").split(",").filter(function(u) {
          return u.trim() !== a.id;
        });
        l.length ? i.setAttribute("aria-describedby", l.join(",")) : i.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var n, r = t.state, i = r.elements, a = i.popper, l = i.reference, u = (n = a.getAttribute("role")) == null ? void 0 : n.toLowerCase();
    if (a.id && u === "tooltip" && "setAttribute" in l) {
      var f = l.getAttribute("aria-describedby");
      if (f && f.split(",").indexOf(a.id) !== -1)
        return;
      l.setAttribute("aria-describedby", f ? f + "," + a.id : a.id);
    }
  }
}, N3 = [];
function O3(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, l = r.placement, u = l === void 0 ? "bottom" : l, f = r.strategy, d = f === void 0 ? "absolute" : f, h = r.modifiers, m = h === void 0 ? N3 : h, v = Be(r, ["enabled", "placement", "strategy", "modifiers"]), x = y.useRef(), A = y.useCallback(function() {
    var I;
    (I = x.current) == null || I.update();
  }, []), S = y.useCallback(function() {
    var I;
    (I = x.current) == null || I.forceUpdate();
  }, []), R = kB(y.useState({
    placement: u,
    update: A,
    forceUpdate: S,
    attributes: {},
    styles: {
      popper: Q1(d),
      arrow: {}
    }
  })), w = R[0], C = R[1], k = y.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(O) {
        var D = O.state, F = {}, B = {};
        Object.keys(D.elements).forEach(function($) {
          F[$] = D.styles[$], B[$] = D.attributes[$];
        }), C({
          state: D,
          styles: F,
          attributes: B,
          update: A,
          forceUpdate: S,
          placement: D.placement
        });
      }
    };
  }, [A, S, C]);
  return y.useEffect(function() {
    !x.current || !a || x.current.setOptions({
      placement: u,
      strategy: d,
      modifiers: [].concat(m, [k, R3])
    });
  }, [d, u, k, a]), y.useEffect(function() {
    if (!(!a || e == null || t == null))
      return x.current = T3(e, t, le({}, v, {
        placement: u,
        strategy: d,
        modifiers: [].concat(m, [I3, k])
      })), function() {
        x.current != null && (x.current.destroy(), x.current = void 0, C(function(I) {
          return le({}, I, {
            attributes: {},
            styles: {
              popper: Q1(d)
            }
          });
        }));
      };
  }, [a, e, t]), w;
}
function fb(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var P3 = function() {
}, D3 = P3;
const F3 = /* @__PURE__ */ ds(D3);
function Cf(e) {
  return e && "setState" in e ? Oo.findDOMNode(e) : e ?? null;
}
const M3 = function(e) {
  return lg(Cf(e));
};
var L3 = 27, Z1 = function() {
};
function B3(e) {
  return e.button === 0;
}
function H3(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var J1 = function(t) {
  return t && ("current" in t ? t.current : t);
};
function V3(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, l = a === void 0 ? "click" : a, u = y.useRef(!1), f = t || Z1, d = y.useCallback(function(v) {
    var x, A = J1(e);
    F3(!!A, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), u.current = !A || H3(v) || !B3(v) || !!fb(A, (x = v.composedPath == null ? void 0 : v.composedPath()[0]) != null ? x : v.target);
  }, [e]), h = Xm(function(v) {
    u.current || f(v);
  }), m = Xm(function(v) {
    v.keyCode === L3 && f(v);
  });
  y.useEffect(function() {
    if (!(i || e == null)) {
      var v = window.event, x = M3(J1(e)), A = La(x, l, d, !0), S = La(x, l, function(C) {
        if (C === v) {
          v = void 0;
          return;
        }
        h(C);
      }), R = La(x, "keyup", function(C) {
        if (C === v) {
          v = void 0;
          return;
        }
        m(C);
      }), w = [];
      return "ontouchstart" in x.documentElement && (w = [].slice.call(x.body.children).map(function(C) {
        return La(C, "mousemove", Z1);
      })), function() {
        A(), S(), R(), w.forEach(function(C) {
          return C();
        });
      };
    }
  }, [e, i, l, d, h, m]);
}
function U3(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function $3(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function z3(e) {
  var t, n, r, i, a = e.enabled, l = e.enableEvents, u = e.placement, f = e.flip, d = e.offset, h = e.fixed, m = e.containerPadding, v = e.arrowElement, x = e.popperConfig, A = x === void 0 ? {} : x, S = U3(A.modifiers);
  return le({}, A, {
    placement: u,
    enabled: a,
    strategy: h ? "fixed" : A.strategy,
    modifiers: $3(le({}, S, {
      eventListeners: {
        enabled: l
      },
      preventOverflow: le({}, S.preventOverflow, {
        options: m ? le({
          padding: m
        }, (t = S.preventOverflow) == null ? void 0 : t.options) : (n = S.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: le({
          offset: d
        }, (r = S.offset) == null ? void 0 : r.options)
      },
      arrow: le({}, S.arrow, {
        enabled: !!v,
        options: le({}, (i = S.arrow) == null ? void 0 : i.options, {
          element: v
        })
      }),
      flip: le({
        enabled: !!f
      }, S.flip)
    }))
  });
}
const ew = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function W3(e, t) {
  const n = ew(e), r = ew(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function j3(e, t) {
  return y.useMemo(() => W3(e, t), [e, t]);
}
function $c(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function wp(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function G3() {
  var e = y.useRef(null), t = y.useRef(null), n = y.useRef(null), r = Rt(void 0, "popover"), i = Rt(void 0, "dropdown-menu"), a = y.useCallback(function(d) {
    !d || !($c(d, r) || $c(d, i)) || (t.current = wp(d), d.style.margin = "0", e.current = d);
  }, [r, i]), l = y.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(h) {
          var m = h.placement;
          if (!t.current) return [0, 0];
          var v = t.current, x = v.top, A = v.left, S = v.bottom, R = v.right;
          switch (m.split("-")[0]) {
            case "top":
              return [0, S];
            case "left":
              return [0, R];
            case "bottom":
              return [0, x];
            case "right":
              return [0, A];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), u = y.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var h = n.current, m = h.top, v = h.right, x = m || v;
          return {
            top: x,
            left: x,
            right: x,
            bottom: x
          };
        }
      }
    };
  }, [n]), f = y.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(h) {
        var m = h.state;
        if (!(!e.current || !m.elements.arrow || !$c(e.current, r))) {
          if (m.modifiersData["arrow#persistent"]) {
            var v = wp(m.elements.arrow), x = v.top, A = v.right, S = x || A;
            m.modifiersData["arrow#persistent"].padding = {
              top: S,
              left: S,
              right: S,
              bottom: S
            };
          } else
            n.current = wp(m.elements.arrow);
          return m.elements.arrow.style.margin = "0", function() {
            m.elements.arrow && (m.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [l, u, f]];
}
var tw = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, l, u, f, d) {
      var h = u || "<<anonymous>>", m = d || l;
      if (a[l] == null)
        return new Error("The " + f + " `" + m + "` is required to make " + ("`" + h + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var v = arguments.length, x = Array(v > 5 ? v - 5 : 0), A = 5; A < v; A++)
        x[A - 5] = arguments[A];
      return r.apply(void 0, [a, l, u, f, d].concat(x));
    };
  }
  e.exports = t.default;
})(tw, tw.exports);
var nw = { exports: {} }, Qm = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(l, u, f, d, h, m) {
      var v = d || "<<anonymous>>", x = m || f;
      if (u[f] == null)
        return l ? new Error("Required " + h + " `" + x + "` was not specified " + ("in `" + v + "`.")) : null;
      for (var A = arguments.length, S = Array(A > 6 ? A - 6 : 0), R = 6; R < A; R++)
        S[R - 6] = arguments[R];
      return r.apply(void 0, [u, f, v, h, x].concat(S));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Qm, Qm.exports);
var X3 = Qm.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = X3, r = i(n);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a() {
    for (var l = arguments.length, u = Array(l), f = 0; f < l; f++)
      u[f] = arguments[f];
    function d() {
      for (var h = arguments.length, m = Array(h), v = 0; v < h; v++)
        m[v] = arguments[v];
      var x = null;
      return u.forEach(function(A) {
        if (x == null) {
          var S = A.apply(void 0, m);
          S != null && (x = S);
        }
      }), x;
    }
    return (0, r.default)(d);
  }
  e.exports = t.default;
})(nw, nw.exports);
var q3 = ["as", "className", "type", "tooltip"], K3 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: g.string,
  /** Display feedback as a tooltip. */
  tooltip: g.bool,
  as: g.elementType
}, nu = /* @__PURE__ */ _.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, l = a === void 0 ? "valid" : a, u = e.tooltip, f = u === void 0 ? !1 : u, d = Be(e, q3);
    return /* @__PURE__ */ _.createElement(r, le({}, d, {
      ref: t,
      className: Z(i, l + "-" + (f ? "tooltip" : "feedback"))
    }));
  }
);
nu.displayName = "Feedback";
nu.propTypes = K3;
var Nr = /* @__PURE__ */ _.createContext({
  controlId: void 0
}), Y3 = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], xg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, l = e.type, u = l === void 0 ? "checkbox" : l, f = e.isValid, d = f === void 0 ? !1 : f, h = e.isInvalid, m = h === void 0 ? !1 : h, v = e.isStatic, x = e.as, A = x === void 0 ? "input" : x, S = Be(e, Y3), R = y.useContext(Nr), w = R.controlId, C = R.custom, k = C ? [i, "custom-control-input"] : [r, "form-check-input"], I = k[0], O = k[1];
  return r = Rt(I, O), /* @__PURE__ */ _.createElement(A, le({}, S, {
    ref: t,
    type: u,
    id: n || w,
    className: Z(a, r, d && "is-valid", m && "is-invalid", v && "position-static")
  }));
});
xg.displayName = "FormCheckInput";
var Q3 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], wg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, l = Be(e, Q3), u = y.useContext(Nr), f = u.controlId, d = u.custom, h = d ? [r, "custom-control-label"] : [n, "form-check-label"], m = h[0], v = h[1];
  return n = Rt(m, v), /* @__PURE__ */ _.createElement("label", le({}, l, {
    ref: t,
    htmlFor: a || f,
    className: Z(i, n)
  }));
});
wg.displayName = "FormCheckLabel";
var Z3 = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Zo = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, l = a === void 0 ? !1 : a, u = e.disabled, f = u === void 0 ? !1 : u, d = e.isValid, h = d === void 0 ? !1 : d, m = e.isInvalid, v = m === void 0 ? !1 : m, x = e.feedbackTooltip, A = x === void 0 ? !1 : x, S = e.feedback, R = e.className, w = e.style, C = e.title, k = C === void 0 ? "" : C, I = e.type, O = I === void 0 ? "checkbox" : I, D = e.label, F = e.children, B = e.custom, $ = e.as, j = $ === void 0 ? "input" : $, Q = Be(e, Z3), ne = O === "switch" ? !0 : B, ae = ne ? [i, "custom-control"] : [r, "form-check"], ve = ae[0], Re = ae[1];
  r = Rt(ve, Re);
  var Ee = y.useContext(Nr), ce = Ee.controlId, G = y.useMemo(function() {
    return {
      controlId: n || ce,
      custom: ne
    };
  }, [ce, ne, n]), X = ne || D != null && D !== !1 && !F, Y = /* @__PURE__ */ _.createElement(xg, le({}, Q, {
    type: O === "switch" ? "checkbox" : O,
    ref: t,
    isValid: h,
    isInvalid: v,
    isStatic: !X,
    disabled: f,
    as: j
  }));
  return /* @__PURE__ */ _.createElement(Nr.Provider, {
    value: G
  }, /* @__PURE__ */ _.createElement("div", {
    style: w,
    className: Z(R, r, ne && "custom-" + O, l && r + "-inline")
  }, F || /* @__PURE__ */ _.createElement(_.Fragment, null, Y, X && /* @__PURE__ */ _.createElement(wg, {
    title: k
  }, D), (h || v) && /* @__PURE__ */ _.createElement(nu, {
    type: h ? "valid" : "invalid",
    tooltip: A
  }, S))));
});
Zo.displayName = "FormCheck";
Zo.Input = xg;
Zo.Label = wg;
var J3 = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], Cg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, l = e.isValid, u = e.isInvalid, f = e.lang, d = e.as, h = d === void 0 ? "input" : d, m = Be(e, J3), v = y.useContext(Nr), x = v.controlId, A = v.custom, S = "file", R = A ? [i, "custom-file-input"] : [r, "form-control-file"], w = R[0], C = R[1];
  return r = Rt(w, C), /* @__PURE__ */ _.createElement(h, le({}, m, {
    ref: t,
    id: n || x,
    type: S,
    lang: f,
    className: Z(a, r, l && "is-valid", u && "is-invalid")
  }));
});
Cg.displayName = "FormFileInput";
var e4 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], _f = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, l = Be(e, e4), u = y.useContext(Nr), f = u.controlId, d = u.custom, h = d ? [r, "custom-file-label"] : [n, "form-file-label"], m = h[0], v = h[1];
  return n = Rt(m, v), /* @__PURE__ */ _.createElement("label", le({}, l, {
    ref: t,
    htmlFor: a || f,
    className: Z(i, n),
    "data-browse": l["data-browse"]
  }));
});
_f.displayName = "FormFileLabel";
var t4 = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], dd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, l = a === void 0 ? !1 : a, u = e.isValid, f = u === void 0 ? !1 : u, d = e.isInvalid, h = d === void 0 ? !1 : d, m = e.feedbackTooltip, v = m === void 0 ? !1 : m, x = e.feedback, A = e.className, S = e.style, R = e.label, w = e.children, C = e.custom, k = e.lang, I = e["data-browse"], O = e.as, D = O === void 0 ? "div" : O, F = e.inputAs, B = F === void 0 ? "input" : F, $ = Be(e, t4), j = C ? [i, "custom"] : [r, "form-file"], Q = j[0], ne = j[1];
  r = Rt(Q, ne);
  var ae = "file", ve = y.useContext(Nr), Re = ve.controlId, Ee = y.useMemo(function() {
    return {
      controlId: n || Re,
      custom: C
    };
  }, [Re, C, n]), ce = R != null && R !== !1 && !w, G = /* @__PURE__ */ _.createElement(Cg, le({}, $, {
    ref: t,
    isValid: f,
    isInvalid: h,
    disabled: l,
    as: B,
    lang: k
  }));
  return /* @__PURE__ */ _.createElement(Nr.Provider, {
    value: Ee
  }, /* @__PURE__ */ _.createElement(D, {
    style: S,
    className: Z(A, r, C && "custom-" + ae)
  }, w || /* @__PURE__ */ _.createElement(_.Fragment, null, C ? /* @__PURE__ */ _.createElement(_.Fragment, null, G, ce && /* @__PURE__ */ _.createElement(_f, {
    "data-browse": I
  }, R)) : /* @__PURE__ */ _.createElement(_.Fragment, null, ce && /* @__PURE__ */ _.createElement(_f, null, R), G), (f || h) && /* @__PURE__ */ _.createElement(nu, {
    type: f ? "valid" : "invalid",
    tooltip: v
  }, x))));
});
dd.displayName = "FormFile";
dd.Input = Cg;
dd.Label = _f;
var n4 = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], db = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, l = e.htmlSize, u = e.id, f = e.className, d = e.isValid, h = d === void 0 ? !1 : d, m = e.isInvalid, v = m === void 0 ? !1 : m, x = e.plaintext, A = e.readOnly, S = e.custom, R = e.as, w = R === void 0 ? "input" : R, C = Be(e, n4), k = y.useContext(Nr), I = k.controlId, O = S ? [r, "custom"] : [n, "form-control"], D = O[0], F = O[1];
  n = Rt(D, F);
  var B;
  if (x) {
    var $;
    B = ($ = {}, $[n + "-plaintext"] = !0, $);
  } else if (i === "file") {
    var j;
    B = (j = {}, j[n + "-file"] = !0, j);
  } else if (i === "range") {
    var Q;
    B = (Q = {}, Q[n + "-range"] = !0, Q);
  } else if (w === "select" && S) {
    var ne;
    B = (ne = {}, ne[n + "-select"] = !0, ne[n + "-select-" + a] = a, ne);
  } else {
    var ae;
    B = (ae = {}, ae[n] = !0, ae[n + "-" + a] = a, ae);
  }
  return /* @__PURE__ */ _.createElement(w, le({}, C, {
    type: i,
    size: l,
    ref: t,
    readOnly: A,
    id: u || I,
    className: Z(f, B, h && "is-valid", v && "is-invalid")
  }));
});
db.displayName = "FormControl";
const hb = Object.assign(db, {
  Feedback: nu
});
var r4 = ["bsPrefix", "className", "children", "controlId", "as"], pb = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, l = e.as, u = l === void 0 ? "div" : l, f = Be(e, r4);
  n = Rt(n, "form-group");
  var d = y.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ _.createElement(Nr.Provider, {
    value: d
  }, /* @__PURE__ */ _.createElement(u, le({}, f, {
    ref: t,
    className: Z(r, n)
  }), i));
});
pb.displayName = "FormGroup";
var i4 = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], o4 = {
  column: !1,
  srOnly: !1
}, _g = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, l = e.srOnly, u = e.className, f = e.htmlFor, d = Be(e, i4), h = y.useContext(Nr), m = h.controlId;
  i = Rt(i, "form-label");
  var v = "col-form-label";
  typeof a == "string" && (v = v + " " + v + "-" + a);
  var x = Z(u, i, l && "sr-only", a && v);
  return f = f || m, a ? /* @__PURE__ */ _.createElement(nb, le({
    ref: t,
    as: "label",
    className: x,
    htmlFor: f
  }, d)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ _.createElement(r, le({
      ref: t,
      className: x,
      htmlFor: f
    }, d))
  );
});
_g.displayName = "FormLabel";
_g.defaultProps = o4;
var a4 = ["bsPrefix", "className", "as", "muted"], mb = /* @__PURE__ */ _.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, l = e.muted, u = Be(e, a4);
    return n = Rt(n, "form-text"), /* @__PURE__ */ _.createElement(a, le({}, u, {
      ref: t,
      className: Z(r, n, l && "text-muted")
    }));
  }
);
mb.displayName = "FormText";
var hd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  return /* @__PURE__ */ _.createElement(Zo, le({}, e, {
    ref: t,
    type: "switch"
  }));
});
hd.displayName = "Switch";
hd.Input = Zo.Input;
hd.Label = Zo.Label;
var s4 = ["bsPrefix", "inline", "className", "validated", "as"], l4 = ug("form-row"), u4 = {
  inline: !1
}, Fr = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, l = e.as, u = l === void 0 ? "form" : l, f = Be(e, s4);
  return n = Rt(n, "form"), /* @__PURE__ */ _.createElement(u, le({}, f, {
    ref: t,
    className: Z(i, a && "was-validated", r && n + "-inline")
  }));
});
Fr.displayName = "Form";
Fr.defaultProps = u4;
Fr.Row = l4;
Fr.Group = pb;
Fr.Control = hb;
Fr.Check = Zo;
Fr.File = dd;
Fr.Switch = hd;
Fr.Label = _g;
Fr.Text = mb;
function c4(e, t) {
  e.classList ? e.classList.add(t) : $c(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function rw(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function f4(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = rw(e.className, t) : e.setAttribute("class", rw(e.className && e.className.baseVal || "", t));
}
var Cp = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? lg().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function iw(e, t) {
  var n = y.useState(function() {
    return Cp(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = Cp(e);
    a && i(a);
  }
  return y.useEffect(function() {
  }, [t, r]), y.useEffect(function() {
    var l = Cp(e);
    l !== r && i(l);
  }, [e, r]), r;
}
var Sg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, l = a === void 0 ? 5 : a, u = e.popperConfig, f = u === void 0 ? {} : u, d = e.transition, h = U1(), m = h[0], v = h[1], x = U1(), A = x[0], S = x[1], R = j3(v, t), w = iw(e.container), C = iw(e.target), k = y.useState(!e.show), I = k[0], O = k[1], D = O3(C, m, z3({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: l || 5,
    flip: n,
    offset: r,
    arrowElement: A,
    popperConfig: f
  })), F = D.styles, B = D.attributes, $ = Be(D, ["styles", "attributes"]);
  e.show ? I && O(!1) : !e.transition && !I && O(!0);
  var j = function() {
    O(!0), e.onExited && e.onExited.apply(e, arguments);
  }, Q = e.show || d && !I;
  if (V3(m, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !Q)
    return null;
  var ne = e.children(le({}, $, {
    show: !!e.show,
    props: le({}, B.popper, {
      style: F.popper,
      ref: R
    }),
    arrowProps: le({}, B.arrow, {
      style: F.arrow,
      ref: S
    })
  }));
  if (d) {
    var ae = e.onExit, ve = e.onExiting, Re = e.onEnter, Ee = e.onEntering, ce = e.onEntered;
    ne = /* @__PURE__ */ _.createElement(d, {
      in: e.show,
      appear: !0,
      onExit: ae,
      onExiting: ve,
      onExited: j,
      onEnter: Re,
      onEntering: Ee,
      onEntered: ce
    }, ne);
  }
  return w ? /* @__PURE__ */ Oo.createPortal(ne, w) : null;
});
Sg.displayName = "Overlay";
Sg.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: g.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: g.oneOf(hg),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: g.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: g.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: g.bool,
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
  children: g.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: g.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: g.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: g.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: g.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: g.bool,
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
      return (a = g.func).isRequired.apply(a, [t].concat(r));
    }
    return g.func.apply(g, [t].concat(r));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: g.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: g.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: g.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: g.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: g.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: g.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: g.func
};
var d4 = ["children", "transition", "popperConfig"], h4 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], p4 = {
  transition: gs,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function m4(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Cf(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Cf(i));
  });
}
function vb(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = Be(e, d4), l = y.useRef({}), u = G3(), f = u[0], d = u[1], h = n === !0 ? gs : n || null;
  return /* @__PURE__ */ _.createElement(Sg, le({}, a, {
    ref: f,
    popperConfig: le({}, i, {
      modifiers: d.concat(i.modifiers || [])
    }),
    transition: h
  }), function(m) {
    var v, x = m.props, A = m.arrowProps, S = m.show, R = m.update;
    m.forceUpdate;
    var w = m.placement, C = m.state, k = Be(m, h4);
    m4(x, A);
    var I = Object.assign(l.current, {
      state: C,
      scheduleUpdate: R,
      placement: w,
      outOfBoundaries: (C == null || (v = C.modifiersData.hide) == null ? void 0 : v.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(le({}, k, x, {
      placement: w,
      show: S
    }, !n && S && {
      className: "show"
    }, {
      popper: I,
      arrowProps: A
    })) : /* @__PURE__ */ _.cloneElement(t, le({}, k, x, {
      placement: w,
      arrowProps: A,
      popper: I,
      className: Z(t.props.className, !n && S && "show"),
      style: le({}, t.props.style, x.style)
    }));
  });
}
vb.defaultProps = p4;
var v4 = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], g4 = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(_.Component);
function y4(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function ow(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !fb(i, a) && e.apply(void 0, t);
}
var E4 = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function gb(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, l = e.show, u = e.defaultShow, f = u === void 0 ? !1 : u, d = e.onToggle, h = e.delay, m = e.placement, v = e.flip, x = v === void 0 ? m && m.indexOf("auto") !== -1 : v, A = Be(e, v4), S = y.useRef(null), R = _B(), w = y.useRef(""), C = zS(l, f, d), k = C[0], I = C[1], O = y4(h), D = typeof r != "function" ? _.Children.only(r).props : {}, F = D.onFocus, B = D.onBlur, $ = D.onClick, j = y.useCallback(function() {
    return Cf(S.current);
  }, []), Q = y.useCallback(function() {
    if (R.clear(), w.current = "show", !O.show) {
      I(!0);
      return;
    }
    R.set(function() {
      w.current === "show" && I(!0);
    }, O.show);
  }, [O.show, I, R]), ne = y.useCallback(function() {
    if (R.clear(), w.current = "hide", !O.hide) {
      I(!1);
      return;
    }
    R.set(function() {
      w.current === "hide" && I(!1);
    }, O.hide);
  }, [O.hide, I, R]), ae = y.useCallback(function() {
    Q();
    for (var Y = arguments.length, re = new Array(Y), te = 0; te < Y; te++)
      re[te] = arguments[te];
    F == null || F.apply(void 0, re);
  }, [Q, F]), ve = y.useCallback(function() {
    ne();
    for (var Y = arguments.length, re = new Array(Y), te = 0; te < Y; te++)
      re[te] = arguments[te];
    B == null || B.apply(void 0, re);
  }, [ne, B]), Re = y.useCallback(function() {
    I(!k), $ && $.apply(void 0, arguments);
  }, [$, I, k]), Ee = y.useCallback(function() {
    for (var Y = arguments.length, re = new Array(Y), te = 0; te < Y; te++)
      re[te] = arguments[te];
    ow(Q, re, "fromElement");
  }, [Q]), ce = y.useCallback(function() {
    for (var Y = arguments.length, re = new Array(Y), te = 0; te < Y; te++)
      re[te] = arguments[te];
    ow(ne, re, "toElement");
  }, [ne]), G = t == null ? [] : [].concat(t), X = {};
  return G.indexOf("click") !== -1 && (X.onClick = Re), G.indexOf("focus") !== -1 && (X.onFocus = ae, X.onBlur = ve), G.indexOf("hover") !== -1 && (X.onMouseOver = Ee, X.onMouseOut = ce), /* @__PURE__ */ _.createElement(_.Fragment, null, typeof r == "function" ? r(le({}, X, {
    ref: S
  })) : /* @__PURE__ */ _.createElement(g4, {
    ref: S
  }, /* @__PURE__ */ y.cloneElement(r, X)), /* @__PURE__ */ _.createElement(vb, le({}, A, {
    show: k,
    onHide: ne,
    flip: x,
    placement: m,
    popperConfig: a,
    target: j
  }), n));
}
gb.defaultProps = E4;
var x4 = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], yb = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, l = e.children, u = e.as, f = u === void 0 ? "div" : u, d = e.className, h = Be(e, x4);
  n = Rt(n, "spinner");
  var m = n + "-" + i;
  return /* @__PURE__ */ _.createElement(f, le({
    ref: t
  }, h, {
    className: Z(d, m, a && m + "-" + a, r && "text-" + r)
  }), l);
});
yb.displayName = "Spinner";
var w4 = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], C4 = {
  placement: "right"
}, pd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, l = e.children, u = e.arrowProps;
  e.popper, e.show;
  var f = Be(e, w4);
  n = Rt(n, "tooltip");
  var d = (r == null ? void 0 : r.split("-")) || [], h = d[0];
  return /* @__PURE__ */ _.createElement("div", le({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": h,
    className: Z(i, n, "bs-tooltip-" + h)
  }, f), /* @__PURE__ */ _.createElement("div", le({
    className: "arrow"
  }, u)), /* @__PURE__ */ _.createElement("div", {
    className: n + "-inner"
  }, l));
});
pd.defaultProps = C4;
pd.displayName = "Tooltip";
var bg = {};
bg.match = T4;
bg.parse = Eb;
var _4 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, S4 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, b4 = /^(?:(min|max)-)?(.+)/, k4 = /(em|rem|px|cm|mm|in|pt|pc)?$/, A4 = /(dpi|dpcm|dppx)?$/;
function T4(e, t) {
  return Eb(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var a = n.expressions.every(function(l) {
      var u = l.feature, f = l.modifier, d = l.value, h = t[u];
      if (!h)
        return !1;
      switch (u) {
        case "orientation":
        case "scan":
          return h.toLowerCase() === d.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          d = lw(d), h = lw(h);
          break;
        case "resolution":
          d = sw(d), h = sw(h);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          d = aw(d), h = aw(h);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          d = parseInt(d, 10) || 1, h = parseInt(h, 10) || 0;
          break;
      }
      switch (f) {
        case "min":
          return h >= d;
        case "max":
          return h <= d;
        default:
          return h === d;
      }
    });
    return a && !r || !a && r;
  });
}
function Eb(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(_4), r = n[1], i = n[2], a = n[3] || "", l = {};
    return l.inverse = !!r && r.toLowerCase() === "not", l.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], l.expressions = a.map(function(u) {
      var f = u.match(S4), d = f[1].toLowerCase().match(b4);
      return {
        modifier: d[1],
        feature: d[2],
        value: f[2]
      };
    }), l;
  });
}
function aw(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function sw(e) {
  var t = parseFloat(e), n = String(e).match(A4)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function lw(e) {
  var t = parseFloat(e), n = String(e).match(k4)[1];
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
var R4 = bg.match, uw = typeof window < "u" ? window.matchMedia : null;
function I4(e, t, n) {
  var r = this, i;
  uw && !n && (i = uw.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(u)) : (this.matches = R4(e, t), this.media = e), this.addListener = a, this.removeListener = l, this.dispose = f;
  function a(d) {
    i && i.addListener(d);
  }
  function l(d) {
    i && i.removeListener(d);
  }
  function u(d) {
    r.matches = d.matches, r.media = d.media;
  }
  function f() {
    i && i.removeListener(u);
  }
}
function N4(e, t, n) {
  return new I4(e, t, n);
}
var O4 = N4;
const P4 = /* @__PURE__ */ ds(O4);
var D4 = /[A-Z]/g, F4 = /^ms-/, _p = {};
function M4(e) {
  return "-" + e.toLowerCase();
}
function xb(e) {
  if (_p.hasOwnProperty(e))
    return _p[e];
  var t = e.replace(D4, M4);
  return _p[e] = F4.test(t) ? "-" + t : t;
}
function L4(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  const n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i)
    return !1;
  for (let a = 0; a < i; a++) {
    const l = n[a];
    if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l))
      return !1;
  }
  return !0;
}
const cn = g.oneOfType([g.string, g.number]), wb = {
  all: g.bool,
  grid: g.bool,
  aural: g.bool,
  braille: g.bool,
  handheld: g.bool,
  print: g.bool,
  projection: g.bool,
  screen: g.bool,
  tty: g.bool,
  tv: g.bool,
  embossed: g.bool
}, B4 = {
  orientation: g.oneOf(["portrait", "landscape"]),
  scan: g.oneOf(["progressive", "interlace"]),
  aspectRatio: g.string,
  deviceAspectRatio: g.string,
  height: cn,
  deviceHeight: cn,
  width: cn,
  deviceWidth: cn,
  color: g.bool,
  colorIndex: g.bool,
  monochrome: g.bool,
  resolution: cn,
  type: Object.keys(wb)
}, { type: K6, ...H4 } = B4, V4 = {
  minAspectRatio: g.string,
  maxAspectRatio: g.string,
  minDeviceAspectRatio: g.string,
  maxDeviceAspectRatio: g.string,
  minHeight: cn,
  maxHeight: cn,
  minDeviceHeight: cn,
  maxDeviceHeight: cn,
  minWidth: cn,
  maxWidth: cn,
  minDeviceWidth: cn,
  maxDeviceWidth: cn,
  minColor: g.number,
  maxColor: g.number,
  minColorIndex: g.number,
  maxColorIndex: g.number,
  minMonochrome: g.number,
  maxMonochrome: g.number,
  minResolution: cn,
  maxResolution: cn,
  ...H4
}, U4 = { ...wb, ...V4 };
var $4 = {
  all: U4
};
const z4 = (e) => `not ${e}`, W4 = (e, t) => {
  const n = xb(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? z4(n) : `(${n}: ${t})`;
}, j4 = (e) => e.join(" and "), G4 = (e) => {
  const t = [];
  return Object.keys($4.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(W4(n, r));
  }), j4(t);
}, X4 = y.createContext(void 0), q4 = (e) => e.query || G4(e), cw = (e) => e ? Object.keys(e).reduce((n, r) => (n[xb(r)] = e[r], n), {}) : void 0, Cb = () => {
  const e = y.useRef(!1);
  return y.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, K4 = (e) => {
  const t = y.useContext(X4), n = () => cw(e) || cw(t), [r, i] = y.useState(n);
  return y.useEffect(() => {
    const a = n();
    L4(r, a) || i(a);
  }, [e, t]), r;
}, Y4 = (e) => {
  const t = () => q4(e), [n, r] = y.useState(t);
  return y.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, Q4 = (e, t) => {
  const n = () => P4(e, t || {}, !!t), [r, i] = y.useState(n), a = Cb();
  return y.useEffect(() => {
    if (a) {
      const l = n();
      return i(l), () => {
        l && l.dispose();
      };
    }
  }, [e, t]), r;
}, Z4 = (e) => {
  const [t, n] = y.useState(e.matches);
  return y.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, _b = (e, t, n) => {
  const r = K4(t), i = Y4(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = Q4(i, r), l = Z4(a);
  return Cb(), y.useEffect(() => {
  }, [l]), y.useEffect(() => () => {
    a && a.dispose();
  }, []), l;
};
let fw = 0;
const kg = (e = "id") => (fw += 1, `${e}${fw}`);
let Ba = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Sb(e, t, n) {
  class r extends _.Component {
    constructor(a) {
      super(a), this.transformProps = this.transformProps.bind(this);
    }
    warn(a) {
    }
    transformProps(a, l) {
      if (n[l] === void 0)
        return a[l] = this.props[l], a;
      const {
        deprType: u,
        newName: f,
        expect: d,
        transform: h,
        message: m
      } = n[l];
      switch (u) {
        case Ba.MOVED:
          this.warn(`${t}: The prop '${l}' has been moved to '${f}'.`), a[f] = this.props[l];
          break;
        case Ba.REMOVED:
          this.warn(`${t}: The prop '${l}' has been removed. '${m}'`);
          break;
        case Ba.FORMAT:
          d(this.props[l]) ? a[l] = this.props[l] : (this.warn(`${t}: The prop '${l}' expects a new format. ${m}`), a[l] = h(this.props[l], this.props));
          break;
        case Ba.MOVED_AND_FORMAT: {
          const v = this.props[l];
          let x = `${t}: The prop '${l}' has been moved to '${f}'`;
          d && !d(v) && (x += " and expects a new format"), x += m ? `. ${m}` : "", this.warn(x), a[f] = h ? h(v, this.props) : v;
          break;
        }
        default:
          a[l] = this.props[l];
          break;
      }
      return a;
    }
    render() {
      const {
        children: a,
        ...l
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ _.createElement(e, {
        ...l
      }, this.props.children || a);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    $s(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Ag({
  src: e,
  id: t,
  className: n,
  hidden: r,
  screenReaderText: i,
  svgAttrs: a,
  size: l,
  ...u
}) {
  if (e) {
    const f = a["aria-label"] || a["aria-labelledby"], d = {
      ...a
    };
    return f || (d["aria-label"] = void 0, d["aria-hidden"] = !0), /* @__PURE__ */ _.createElement("span", {
      className: Z("pgn__icon", {
        [`pgn__icon__${l}`]: !!l
      }, n),
      id: t,
      ...u
    }, /* @__PURE__ */ _.createElement(e, {
      role: "img",
      focusable: !1,
      ...d
    }), i && /* @__PURE__ */ _.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    id: t || kg("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, i));
}
Ag.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: g.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: g.shape({
    "aria-label": g.string,
    "aria-labelledby": g.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: g.string,
  /** The size of the icon. */
  size: g.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: g.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: g.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: g.oneOfType([g.string, g.element])
};
Ag.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const It = Sb(Ag, "Icon", {
  className: {
    deprType: Ba.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), J4 = "576px", eH = {
  sm: J4
}, {
  sm: tH
} = eH, nH = {
  extraSmall: {
    maxWidth: parseFloat(tH) || 575.98
  }
}, Gr = /* @__PURE__ */ _.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ _.createElement(fg, {
  size: r,
  ...i,
  className: Z(i.className),
  ref: a
}, n && /* @__PURE__ */ _.createElement(It, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ _.createElement(It, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function ls({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...r,
    className: Z(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function rH() {
  return /* @__PURE__ */ _.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
ls.Spacer = rH;
const Tg = /* @__PURE__ */ y.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: a,
  stacked: l = !1,
  show: u = !0,
  ...f
}, d) => {
  const [h, m] = y.useState(l), v = _b({
    maxWidth: nH.extraSmall.maxWidth
  }), x = "sm";
  y.useEffect(() => {
    m(v ? !0 : l);
  }, [v, l]);
  const A = y.useCallback((S) => {
    const R = {
      size: x,
      key: S.props.children
    };
    return /* @__PURE__ */ y.cloneElement(S, R);
  }, []);
  return /* @__PURE__ */ _.createElement(Qo, {
    ...f,
    className: Z("alert-content", f.className),
    show: u,
    ref: d
  }, t && /* @__PURE__ */ _.createElement(It, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ _.createElement("div", {
    className: Z({
      "pgn__alert-message-wrapper": !h,
      "pgn__alert-message-wrapper-stacked": h
    })
  }, /* @__PURE__ */ _.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ _.createElement(ls, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ _.createElement(ls.Spacer, null), r && /* @__PURE__ */ _.createElement(Gr, {
    size: x,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ _.createElement(US, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(A))));
}), bb = ZS("h4");
bb.displayName = "DivStyledAsH4";
function iH({
  as: e = bb,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ _.createElement(Qo.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function oH({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ _.createElement(Qo.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
Tg.Heading = iH;
Tg.Link = oH;
var zc = "right-scroll-bar-position", Wc = "width-before-scroll-bar", aH = "with-scroll-bars-hidden", sH = "--removed-body-scroll-bar-size";
function Sp(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function lH(e, t) {
  var n = y.useState(function() {
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
var uH = typeof window < "u" ? y.useLayoutEffect : y.useEffect, dw = /* @__PURE__ */ new WeakMap();
function kb(e, t) {
  var n = lH(null, function(r) {
    return e.forEach(function(i) {
      return Sp(i, r);
    });
  });
  return uH(function() {
    var r = dw.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Sp(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Sp(u, l);
      });
    }
    dw.set(n, e);
  }, [e]), n;
}
function Ab(e) {
  return e;
}
function Tb(e, t) {
  t === void 0 && (t = Ab);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var l = t(a, r);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(a);
      }
      n = {
        push: function(u) {
          return a(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(a), l = n;
      }
      var f = function() {
        var h = l;
        l = [], h.forEach(a);
      }, d = function() {
        return Promise.resolve().then(f);
      };
      d(), n = {
        push: function(h) {
          l.push(h), d();
        },
        filter: function(h) {
          return l = l.filter(h), n;
        }
      };
    }
  };
  return i;
}
function Rg(e, t) {
  return t === void 0 && (t = Ab), Tb(e, t);
}
function Ig(e) {
  e === void 0 && (e = {});
  var t = Tb(null);
  return t.options = ee({ async: !0, ssr: !1 }, e), t;
}
var Rb = function(e) {
  var t = e.sideCar, n = Zr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, ee({}, n));
};
Rb.isSideCarExport = !0;
function Ng(e, t) {
  return e.useMedium(t), Rb;
}
var Ib = Ig(), bp = function() {
}, Og = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: bp,
    onWheelCapture: bp,
    onTouchMoveCapture: bp
  }), i = r[0], a = r[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, m = e.shards, v = e.sideCar, x = e.noRelative, A = e.noIsolation, S = e.inert, R = e.allowPinchZoom, w = e.as, C = w === void 0 ? "div" : w, k = e.gapMode, I = Zr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = v, D = kb([n, t]), F = ee(ee({}, I), i);
  return y.createElement(
    y.Fragment,
    null,
    h && y.createElement(O, { sideCar: Ib, removeScrollBar: d, shards: m, noRelative: x, noIsolation: A, inert: S, setCallbacks: a, allowPinchZoom: !!R, lockRef: n, gapMode: k }),
    l ? y.cloneElement(y.Children.only(u), ee(ee({}, F), { ref: D })) : y.createElement(C, ee({}, F, { className: f, ref: D }), u)
  );
});
Og.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Og.classNames = {
  fullWidth: Wc,
  zeroRight: zc
};
var Zm = "data-focus-lock", Nb = "data-focus-lock-disabled", cH = "data-no-focus-lock", fH = "data-autofocus-inside", dH = "data-no-autofocus", kp = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Ob = Rg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Pb = Rg(), hH = Rg(), Db = Ig({
  async: !0,
  ssr: typeof document < "u"
}), pH = /* @__PURE__ */ y.createContext(void 0), mH = [], Fb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, i = y.useState(), a = i[0], l = i[1], u = y.useRef(), f = y.useRef(!1), d = y.useRef(null), h = y.useState({}), m = h[1], v = t.children, x = t.disabled, A = x === void 0 ? !1 : x, S = t.noFocusGuards, R = S === void 0 ? !1 : S, w = t.persistentFocus, C = w === void 0 ? !1 : w, k = t.crossFrame, I = k === void 0 ? !0 : k, O = t.autoFocus, D = O === void 0 ? !0 : O;
  t.allowTextSelection;
  var F = t.group, B = t.className, $ = t.whiteList, j = t.hasPositiveIndices, Q = t.shards, ne = Q === void 0 ? mH : Q, ae = t.as, ve = ae === void 0 ? "div" : ae, Re = t.lockProps, Ee = Re === void 0 ? {} : Re, ce = t.sideCar, G = t.returnFocus, X = G === void 0 ? !1 : G, Y = t.focusOptions, re = t.onActivation, te = t.onDeactivation, Ze = y.useState({}), Ue = Ze[0], He = y.useCallback(function(Je) {
    var Ce = Je.captureFocusRestore;
    if (!d.current) {
      var Xe, $e = (Xe = document) == null ? void 0 : Xe.activeElement;
      d.current = $e, $e !== document.body && (d.current = Ce($e));
    }
    u.current && re && re(u.current), f.current = !0, m();
  }, [re]), Ie = y.useCallback(function() {
    f.current = !1, te && te(u.current), m();
  }, [te]), Et = y.useCallback(function(Je) {
    var Ce = d.current;
    if (Ce) {
      var Xe = (typeof Ce == "function" ? Ce() : Ce) || document.body, $e = typeof X == "function" ? X(Xe) : X;
      if ($e) {
        var Ae = typeof $e == "object" ? $e : void 0;
        d.current = null, Je ? Promise.resolve().then(function() {
          return Xe.focus(Ae);
        }) : Xe.focus(Ae);
      }
    }
  }, [X]), Ke = y.useCallback(function(Je) {
    f.current && Ob.useMedium(Je);
  }, []), ot = Pb.useMedium, Se = y.useCallback(function(Je) {
    u.current !== Je && (u.current = Je, l(Je));
  }, []), wt = le((r = {}, r[Nb] = A && "disabled", r[Zm] = F, r), Ee), ut = R !== !0, zt = ut && R !== "tail", Ge = kb([n, Se]), Nt = y.useMemo(function() {
    return {
      observed: u,
      shards: ne,
      enabled: !A,
      active: f.current
    };
  }, [A, f.current, ne, a]);
  return /* @__PURE__ */ _.createElement(y.Fragment, null, ut && [
    /* @__PURE__ */ _.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: A ? -1 : 0,
      style: kp
    }),
    j ? /* @__PURE__ */ _.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: A ? -1 : 1,
      style: kp
    }) : null
  ], !A && /* @__PURE__ */ _.createElement(ce, {
    id: Ue,
    sideCar: Db,
    observed: a,
    disabled: A,
    persistentFocus: C,
    crossFrame: I,
    autoFocus: D,
    whiteList: $,
    shards: ne,
    onActivation: He,
    onDeactivation: Ie,
    returnFocus: Et,
    focusOptions: Y,
    noFocusGuards: R
  }), /* @__PURE__ */ _.createElement(ve, le({
    ref: Ge
  }, wt, {
    className: B,
    onBlur: ot,
    onFocus: Ke
  }), /* @__PURE__ */ _.createElement(pH.Provider, {
    value: Nt
  }, v)), zt && /* @__PURE__ */ _.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: A ? -1 : 0,
    style: kp
  }));
});
Fb.propTypes = {};
function Pg(e) {
  setTimeout(e, 1);
}
var vH = function(t) {
  return t && "current" in t ? t.current : t;
}, Mb = Ig(), Lb = "data-focus-on-hidden", gH = { preventScroll: !0 }, yH = y.forwardRef(function(e, t) {
  var n = y.useState(!1), r = n[0], i = n[1], a = e.children, l = e.autoFocus, u = e.shards, f = e.crossFrame, d = e.enabled, h = d === void 0 ? !0 : d, m = e.scrollLock, v = m === void 0 ? !0 : m, x = e.focusLock, A = x === void 0 ? !0 : x, S = e.returnFocus, R = S === void 0 ? !0 : S, w = e.inert, C = e.allowPinchZoom, k = e.sideCar, I = e.className, O = e.shouldIgnore, D = e.preventScrollOnFocus, F = e.style, B = e.as, $ = e.gapMode, j = Zr(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), Q = k, ne = r.onActivation, ae = r.onDeactivation, ve = Zr(r, ["onActivation", "onDeactivation"]), Re = ee(ee({}, ve), {
    as: B,
    style: F,
    sideCar: k,
    shards: u,
    allowPinchZoom: C,
    gapMode: $,
    inert: w,
    enabled: h && v
  });
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(Fb, { ref: t, sideCar: k, disabled: !(r && h && A), returnFocus: R, autoFocus: l, shards: u, crossFrame: f, onActivation: ne, onDeactivation: ae, className: I, whiteList: O, lockProps: Re, focusOptions: D ? gH : void 0, as: Og }, a),
    h && y.createElement(Q, ee({}, j, { sideCar: Mb, setLockProps: i, shards: u }))
  );
});
function Bl(e) {
  "@babel/helpers - typeof";
  return Bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bl(e);
}
function EH(e, t) {
  if (Bl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Bl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xH(e) {
  var t = EH(e, "string");
  return Bl(t) == "symbol" ? t : t + "";
}
function wH(e, t, n) {
  return (t = xH(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function CH(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(i) {
    var a = [], l;
    function u() {
      l = e(a.map(function(d) {
        return d.props;
      })), t(l);
    }
    var f = /* @__PURE__ */ function(d) {
      Jl(h, d);
      function h() {
        return d.apply(this, arguments) || this;
      }
      h.peek = function() {
        return l;
      };
      var m = h.prototype;
      return m.componentDidMount = function() {
        a.push(this), u();
      }, m.componentDidUpdate = function() {
        u();
      }, m.componentWillUnmount = function() {
        var x = a.indexOf(this);
        a.splice(x, 1), u();
      }, m.render = function() {
        return /* @__PURE__ */ _.createElement(i, this.props);
      }, h;
    }(y.PureComponent);
    return wH(f, "displayName", "SideEffect(" + n(i) + ")"), f;
  };
}
var ei = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Xo = function(e) {
  return Array.isArray(e) ? e : [e];
}, Bb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, _H = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Hb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Vb = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, SH = function(e) {
  return e.hasAttribute("inert");
}, bH = function(e, t) {
  return !e || Vb(e) || !_H(e) && !SH(e) && t(Hb(e));
}, Ub = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = bH(t, Ub.bind(void 0, e));
  return e.set(t, r), r;
}, kH = function(e, t) {
  return e && !Vb(e) ? RH(e) ? t(Hb(e)) : !1 : !0;
}, $b = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = kH(t, $b.bind(void 0, e));
  return e.set(t, r), r;
}, zb = function(e) {
  return e.dataset;
}, AH = function(e) {
  return e.tagName === "BUTTON";
}, Wb = function(e) {
  return e.tagName === "INPUT";
}, jb = function(e) {
  return Wb(e) && e.type === "radio";
}, TH = function(e) {
  return !((Wb(e) || AH(e)) && (e.type === "hidden" || e.disabled));
}, RH = function(e) {
  var t = e.getAttribute(dH);
  return ![!0, "true", ""].includes(t);
}, Dg = function(e) {
  var t;
  return !!(e && (!((t = zb(e)) === null || t === void 0) && t.focusGuard));
}, Jm = function(e) {
  return !Dg(e);
}, IH = function(e) {
  return !!e;
}, NH = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, OH = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Fg = function(e, t, n) {
  return ei(e).map(function(r, i) {
    var a = OH(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(NH);
}, PH = [
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
], Mg = PH.join(","), DH = "".concat(Mg, ", [data-focus-guard]"), Gb = function(e, t) {
  return ei((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? DH : Mg) ? [r] : [], Gb(r));
  }, []);
}, FH = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? us([e.contentDocument.body], t) : [e];
}, us = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = Gb(r, t), l = (i = []).concat.apply(i, a.map(function(u) {
      return FH(u, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      l,
      // add if node is tabbable itself
      r.parentNode ? ei(r.parentNode.querySelectorAll(Mg)).filter(function(u) {
        return u === r;
      }) : []
    );
  }, []);
}, MH = function(e) {
  var t = e.querySelectorAll("[".concat(fH, "]"));
  return ei(t).map(function(n) {
    return us([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Lg = function(e, t) {
  return ei(e).filter(function(n) {
    return Ub(t, n);
  }).filter(function(n) {
    return TH(n);
  });
}, hw = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ei(e).filter(function(n) {
    return $b(t, n);
  });
}, Bg = function(e, t, n) {
  return Fg(Lg(us(e, n), t), !0, n);
}, Hl = function(e, t) {
  return Fg(Lg(us(e), t), !1);
}, LH = function(e, t) {
  return Lg(MH(e), t);
}, Bo = function(e, t) {
  return e.shadowRoot ? Bo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ei(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? Bo(i, t) : !1;
    }
    return Bo(n, t);
  });
}, BH = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(l, u) {
    return !t.has(u);
  });
}, Xb = function(e) {
  return e.parentNode ? Xb(e.parentNode) : e;
}, Hg = function(e) {
  var t = Xo(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute(Zm);
    return n.push.apply(n, i ? BH(ei(Xb(r).querySelectorAll("[".concat(Zm, '="').concat(i, '"]:not([').concat(Nb, '="disabled"])')))) : [r]), n;
  }, []);
}, HH = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Vl = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Vl(t.shadowRoot) : t instanceof HTMLIFrameElement && HH(function() {
      return t.contentWindow.document;
    }) ? Vl(t.contentWindow.document) : t;
  }
}, VH = function(e, t) {
  return e === t;
}, UH = function(e, t) {
  return !!ei(e.querySelectorAll("iframe")).some(function(n) {
    return VH(n, t);
  });
}, qb = function(e, t) {
  return t === void 0 && (t = Vl(Bb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Hg(e).some(function(n) {
    return Bo(n, t) || UH(n, t);
  });
}, $H = function(e) {
  e === void 0 && (e = document);
  var t = Vl(e);
  return t ? ei(e.querySelectorAll("[".concat(cH, "]"))).some(function(n) {
    return Bo(n, t);
  }) : !1;
}, zH = function(e, t) {
  return t.filter(jb).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Vg = function(e, t) {
  return jb(e) && e.name ? zH(e, t) : e;
}, WH = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Vg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, pw = function(e) {
  return e[0] && e.length > 1 ? Vg(e[0], e) : e[0];
}, mw = function(e, t) {
  return e.indexOf(Vg(t, e));
}, ev = "NEW_FOCUS", jH = function(e, t, n, r, i) {
  var a = e.length, l = e[0], u = e[a - 1], f = Dg(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var d = r !== void 0 ? n.indexOf(r) : -1, h = i ? n.indexOf(i) : d, m = i ? e.indexOf(i) : -1;
    if (d === -1)
      return m !== -1 ? m : ev;
    if (m === -1)
      return ev;
    var v = d - h, x = n.indexOf(l), A = n.indexOf(u), S = WH(n), R = r !== void 0 ? S.indexOf(r) : -1, w = i ? S.indexOf(i) : R, C = S.filter(function(B) {
      return B.tabIndex >= 0;
    }), k = r !== void 0 ? C.indexOf(r) : -1, I = i ? C.indexOf(i) : k, O = k >= 0 && I >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      I - k
    ) : (
      // or else measure in focusable space
      w - R
    );
    if (!v && m >= 0 || t.length === 0)
      return m;
    var D = mw(e, t[0]), F = mw(e, t[t.length - 1]);
    if (d <= x && f && Math.abs(v) > 1)
      return F;
    if (d >= A && f && Math.abs(v) > 1)
      return D;
    if (v && Math.abs(O) > 1)
      return m;
    if (d <= x)
      return F;
    if (d > A)
      return D;
    if (v)
      return Math.abs(v) > 1 ? m : (a + m + v) % a;
  }
}, GH = function(e) {
  return function(t) {
    var n, r = (n = zb(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, vw = function(e, t, n) {
  var r = e.map(function(a) {
    var l = a.node;
    return l;
  }), i = hw(r.filter(GH(n)));
  return i && i.length ? pw(i) : pw(hw(t));
}, tv = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && tv(e.parentNode.host || e.parentNode, t), t;
}, Ap = function(e, t) {
  for (var n = tv(e), r = tv(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Kb = function(e, t, n) {
  var r = Xo(e), i = Xo(t), a = r[0], l = !1;
  return i.filter(Boolean).forEach(function(u) {
    l = Ap(l || u, u) || l, n.filter(Boolean).forEach(function(f) {
      var d = Ap(a, f);
      d && (!l || Bo(d, l) ? l = d : l = Ap(d, l));
    });
  }), l;
}, gw = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(LH(r, t));
  }, []);
}, XH = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(IH);
}, qH = function(e, t) {
  var n = Vl(Xo(e).length > 0 ? document : Bb(e).ownerDocument), r = Hg(e).filter(Jm), i = Kb(n || e, e, r), a = /* @__PURE__ */ new Map(), l = Hl(r, a), u = l.filter(function(A) {
    var S = A.node;
    return Jm(S);
  });
  if (u[0]) {
    var f = Hl([i], a).map(function(A) {
      var S = A.node;
      return S;
    }), d = XH(f, u), h = d.map(function(A) {
      var S = A.node;
      return S;
    }), m = d.filter(function(A) {
      var S = A.tabIndex;
      return S >= 0;
    }).map(function(A) {
      var S = A.node;
      return S;
    }), v = jH(h, m, f, n, t);
    if (v === ev) {
      var x = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        vw(l, m, gw(r, a)) || vw(l, h, gw(r, a))
      );
      if (x)
        return { node: x };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return v === void 0 ? v : d[v];
  }
}, KH = function(e) {
  var t = Hg(e).filter(Jm), n = Kb(e, e, t), r = Fg(us([n], !0), !0, !0), i = us(t, !1);
  return r.map(function(a) {
    var l = a.node, u = a.index;
    return {
      node: l,
      index: u,
      lockItem: i.indexOf(l) >= 0,
      guard: Dg(l)
    };
  });
}, Ug = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Tp = 0, Rp = !1, Yb = function(e, t, n) {
  n === void 0 && (n = {});
  var r = qH(e, t);
  if (!Rp && r) {
    if (Tp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Rp = !0, setTimeout(function() {
        Rp = !1;
      }, 1);
      return;
    }
    Tp++, Ug(r.node, n.focusOptions), Tp--;
  }
};
function Js(e) {
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
var YH = function(e) {
  if (!e)
    return null;
  for (var t = [], n = e; n && n !== document.body; )
    t.push({
      current: Js(n),
      parent: Js(n.parentElement),
      left: Js(n.previousElementSibling),
      right: Js(n.nextElementSibling)
    }), n = n.parentElement;
  return {
    element: Js(e),
    stack: t,
    ownerDocument: e.ownerDocument
  };
}, QH = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var l = e.stack, u = e.ownerDocument, f = /* @__PURE__ */ new Map(), d = 0, h = l; d < h.length; d++) {
      var m = h[d], v = (t = m.parent) === null || t === void 0 ? void 0 : t.call(m);
      if (v && u.contains(v)) {
        for (var x = (n = m.left) === null || n === void 0 ? void 0 : n.call(m), A = m.current(), S = v.contains(A) ? A : void 0, R = (r = m.right) === null || r === void 0 ? void 0 : r.call(m), w = Bg([v], f), C = (
          // that is element itself
          (a = (i = S ?? // or something in it's place
          (x == null ? void 0 : x.nextElementSibling)) !== null && i !== void 0 ? i : (
            // or somebody to the right, still close enough
            R
          )) !== null && a !== void 0 ? a : (
            // or somebody to the left, something?
            x
          )
        ); C; ) {
          for (var k = 0, I = w; k < I.length; k++) {
            var O = I[k];
            if (C != null && C.contains(O.node))
              return O.node;
          }
          C = C.nextElementSibling;
        }
        if (w.length)
          return w[0].node;
      }
    }
}, Qb = function(e) {
  var t = YH(e);
  return function() {
    return QH(t);
  };
}, ZH = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = Xo(t);
  if (r.every(function(l) {
    return !Bo(l, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? Bg(r, /* @__PURE__ */ new Map()) : Hl(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(l) {
    var u = l.node;
    return u === e;
  });
  if (a !== -1)
    return {
      prev: i[a - 1],
      next: i[a + 1],
      first: i[0],
      last: i[i.length - 1]
    };
}, JH = function(e, t) {
  var n = t ? Bg(Xo(e), /* @__PURE__ */ new Map()) : Hl(Xo(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, eV = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, Zb = function(e, t, n) {
  t === void 0 && (t = {});
  var r = eV(t), i = ZH(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && Ug(a.node, r.focusOptions);
  }
}, tV = function(e, t) {
  t === void 0 && (t = {}), Zb(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, nV = function(e, t) {
  t === void 0 && (t = {}), Zb(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Jb = function(e, t, n) {
  var r, i = JH(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && Ug(a.node, t.focusOptions);
}, rV = function(e, t) {
  t === void 0 && (t = {}), Jb(e, t, "first");
}, iV = function(e, t) {
  t === void 0 && (t = {}), Jb(e, t, "last");
}, ek = function() {
  return document && document.activeElement === document.body;
}, oV = function() {
  return ek() || $H();
}, Ga = null, _n = null, yw = function() {
  return null;
}, Xa = null, Ul = !1, $g = !1, aV = function() {
  return !0;
}, sV = function(t) {
  return (Ga.whiteList || aV)(t);
}, lV = function(t, n) {
  Xa = {
    observerNode: t,
    portaledElement: n
  };
}, uV = function(t) {
  return Xa && Xa.portaledElement === t;
};
function Ew(e, t, n, r) {
  var i = null, a = e;
  do {
    var l = r[a];
    if (l.guard)
      l.node.dataset.focusAutoGuard && (i = l);
    else if (l.lockItem) {
      if (a !== e)
        return;
      i = null;
    } else
      break;
  } while ((a += n) !== t);
  i && (i.node.tabIndex = 0);
}
var cV = function(t) {
  return t ? !!Ul : Ul === "meanwhile";
}, fV = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, dV = function(t, n) {
  return n.some(function(r) {
    return fV(t, r, r);
  });
}, tk = function(t) {
  return Hl(t, /* @__PURE__ */ new Map());
}, hV = function(t) {
  return !tk([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, Sf = function() {
  var t = !1;
  if (Ga) {
    var n = Ga, r = n.observed, i = n.persistentFocus, a = n.autoFocus, l = n.shards, u = n.crossFrame, f = n.focusOptions, d = n.noFocusGuards, h = r || Xa && Xa.portaledElement;
    if (ek() && _n && _n !== document.body && (!document.body.contains(_n) || hV(_n))) {
      var m = yw();
      m && m.focus();
    }
    var v = document && document.activeElement;
    if (h) {
      var x = [h].concat(l.map(vH).filter(Boolean)), A = function() {
        if (!cV(u) || !d || !_n || $g)
          return !1;
        var k = tk(x), I = k.findIndex(function(O) {
          var D = O.node;
          return D === _n;
        });
        return I === 0 || I === k.length - 1;
      };
      if ((!v || sV(v)) && (i || A() || !oV() || !_n && a) && (h && !(qb(x) || v && dV(v, x) || uV(v)) && (document && !_n && v && !a ? (v.blur && v.blur(), document.body.focus()) : (t = Yb(x, _n, {
        focusOptions: f
      }), Xa = {})), _n = document && document.activeElement, _n !== document.body && (yw = Qb(_n)), Ul = !1), document && v !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var S = document && document.activeElement, R = KH(x), w = R.map(function(C) {
          var k = C.node;
          return k;
        }).indexOf(S);
        w > -1 && (R.filter(function(C) {
          var k = C.guard, I = C.node;
          return k && I.dataset.focusAutoGuard;
        }).forEach(function(C) {
          var k = C.node;
          return k.removeAttribute("tabIndex");
        }), Ew(w, R.length, 1, R), Ew(w, -1, -1, R));
      }
    }
  }
  return t;
}, nk = function(t) {
  Sf() && t && (t.stopPropagation(), t.preventDefault());
}, zg = function() {
  return Pg(Sf);
}, pV = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || lV(r, n);
}, mV = function() {
  return null;
}, rk = function() {
  $g = !0;
}, ik = function() {
  $g = !1, Ul = "just", Pg(function() {
    Ul = "meanwhile";
  });
}, vV = function() {
  document.addEventListener("focusin", nk), document.addEventListener("focusout", zg), window.addEventListener("focus", rk), window.addEventListener("blur", ik);
}, gV = function() {
  document.removeEventListener("focusin", nk), document.removeEventListener("focusout", zg), window.removeEventListener("focus", rk), window.removeEventListener("blur", ik);
};
function yV(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var ok = {
  moveFocusInside: Yb,
  focusInside: qb,
  focusNextElement: tV,
  focusPrevElement: nV,
  focusFirstElement: rV,
  focusLastElement: iV,
  captureFocusRestore: Qb
};
function EV(e) {
  var t = e.slice(-1)[0];
  t && !Ga && vV();
  var n = Ga, r = n && t && t.id === n.id;
  Ga = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (_n = null, (!r || n.observed !== t.observed) && t.onActivation(ok), Sf(), Pg(Sf)) : (gV(), _n = null);
}
Ob.assignSyncMedium(pV);
Pb.assignMedium(zg);
hH.assignMedium(function(e) {
  return e(ok);
});
const xV = CH(yV, EV)(mV);
Ng(Db, xV);
var wV = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function CV() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = wV();
  return t && e.setAttribute("nonce", t), e;
}
function _V(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function SV(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bV = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = CV()) && (_V(t, n), SV(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, kV = function() {
  var e = bV();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Wg = function() {
  var e = kV(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, AV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ip = function(e) {
  return parseInt(e || "", 10) || 0;
}, TV = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ip(n), Ip(r), Ip(i)];
}, RV = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return AV;
  var t = TV(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, IV = Wg(), qa = "data-scroll-locked", NV = function(e, t, n, r) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(aH, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(qa, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(zc, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Wc, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(zc, " .").concat(zc, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Wc, " .").concat(Wc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qa, `] {
    `).concat(sH, ": ").concat(u, `px;
  }
`);
}, xw = function() {
  var e = parseInt(document.body.getAttribute(qa) || "0", 10);
  return isFinite(e) ? e : 0;
}, OV = function() {
  y.useEffect(function() {
    return document.body.setAttribute(qa, (xw() + 1).toString()), function() {
      var e = xw() - 1;
      e <= 0 ? document.body.removeAttribute(qa) : document.body.setAttribute(qa, e.toString());
    };
  }, []);
}, PV = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  OV();
  var a = y.useMemo(function() {
    return RV(i);
  }, [i]);
  return y.createElement(IV, { styles: NV(a, !t, i, n ? "" : "!important") });
}, nv = !1;
if (typeof window < "u")
  try {
    var wc = Object.defineProperty({}, "passive", {
      get: function() {
        return nv = !0, !0;
      }
    });
    window.addEventListener("test", wc, wc), window.removeEventListener("test", wc, wc);
  } catch {
    nv = !1;
  }
var wa = nv ? { passive: !1 } : !1, DV = function(e) {
  return e.tagName === "TEXTAREA";
}, ak = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !DV(e) && n[t] === "visible")
  );
}, FV = function(e) {
  return ak(e, "overflowY");
}, MV = function(e) {
  return ak(e, "overflowX");
}, ww = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = sk(e, r);
    if (i) {
      var a = lk(e, r), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, LV = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, BV = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, sk = function(e, t) {
  return e === "v" ? FV(t) : MV(t);
}, lk = function(e, t) {
  return e === "v" ? LV(t) : BV(t);
}, HV = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, VV = function(e, t, n, r, i) {
  var a = HV(e, window.getComputedStyle(t).direction), l = a * r, u = n.target, f = t.contains(u), d = !1, h = l > 0, m = 0, v = 0;
  do {
    if (!u)
      break;
    var x = lk(e, u), A = x[0], S = x[1], R = x[2], w = S - R - a * A;
    (A || w) && sk(e, u) && (m += w, v += A);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(v) < 1) && (d = !0), d;
}, Cc = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Cw = function(e) {
  return [e.deltaX, e.deltaY];
}, _w = function(e) {
  return e && "current" in e ? e.current : e;
}, UV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, $V = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, zV = 0, Ca = [];
function WV(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), i = y.useState(zV++)[0], a = y.useState(Wg)[0], l = y.useRef(e);
  y.useEffect(function() {
    l.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var S = Qt([e.lockRef.current], (e.shards || []).map(_w), !0).filter(Boolean);
      return S.forEach(function(R) {
        return R.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), S.forEach(function(R) {
          return R.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = y.useCallback(function(S, R) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var w = Cc(S), C = n.current, k = "deltaX" in S ? S.deltaX : C[0] - w[0], I = "deltaY" in S ? S.deltaY : C[1] - w[1], O, D = S.target, F = Math.abs(k) > Math.abs(I) ? "h" : "v";
    if ("touches" in S && F === "h" && D.type === "range")
      return !1;
    var B = ww(F, D);
    if (!B)
      return !0;
    if (B ? O = F : (O = F === "v" ? "h" : "v", B = ww(F, D)), !B)
      return !1;
    if (!r.current && "changedTouches" in S && (k || I) && (r.current = O), !O)
      return !0;
    var $ = r.current || O;
    return VV($, R, S, $ === "h" ? k : I);
  }, []), f = y.useCallback(function(S) {
    var R = S;
    if (!(!Ca.length || Ca[Ca.length - 1] !== a)) {
      var w = "deltaY" in R ? Cw(R) : Cc(R), C = t.current.filter(function(O) {
        return O.name === R.type && (O.target === R.target || R.target === O.shadowParent) && UV(O.delta, w);
      })[0];
      if (C && C.should) {
        R.cancelable && R.preventDefault();
        return;
      }
      if (!C) {
        var k = (l.current.shards || []).map(_w).filter(Boolean).filter(function(O) {
          return O.contains(R.target);
        }), I = k.length > 0 ? u(R, k[0]) : !l.current.noIsolation;
        I && R.cancelable && R.preventDefault();
      }
    }
  }, []), d = y.useCallback(function(S, R, w, C) {
    var k = { name: S, delta: R, target: w, should: C, shadowParent: jV(w) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== k;
      });
    }, 1);
  }, []), h = y.useCallback(function(S) {
    n.current = Cc(S), r.current = void 0;
  }, []), m = y.useCallback(function(S) {
    d(S.type, Cw(S), S.target, u(S, e.lockRef.current));
  }, []), v = y.useCallback(function(S) {
    d(S.type, Cc(S), S.target, u(S, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return Ca.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", f, wa), document.addEventListener("touchmove", f, wa), document.addEventListener("touchstart", h, wa), function() {
      Ca = Ca.filter(function(S) {
        return S !== a;
      }), document.removeEventListener("wheel", f, wa), document.removeEventListener("touchmove", f, wa), document.removeEventListener("touchstart", h, wa);
    };
  }, []);
  var x = e.removeScrollBar, A = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    A ? y.createElement(a, { styles: $V(i) }) : null,
    x ? y.createElement(PV, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jV(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Ng(Ib, WV);
var GV = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _a = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), Sc = {}, Np = 0, uk = function(e) {
  return e && (e.host || uk(e.parentNode));
}, XV = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = uk(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qV = function(e, t, n, r) {
  var i = XV(t, Array.isArray(e) ? e : [e]);
  Sc[n] || (Sc[n] = /* @__PURE__ */ new WeakMap());
  var a = Sc[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(m) {
    !m || u.has(m) || (u.add(m), d(m.parentNode));
  };
  i.forEach(d);
  var h = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (u.has(v))
        h(v);
      else
        try {
          var x = v.getAttribute(r), A = x !== null && x !== "false", S = (_a.get(v) || 0) + 1, R = (a.get(v) || 0) + 1;
          _a.set(v, S), a.set(v, R), l.push(v), S === 1 && A && _c.set(v, !0), R === 1 && v.setAttribute(n, "true"), A || v.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", v, w);
        }
    });
  };
  return h(t), u.clear(), Np++, function() {
    l.forEach(function(m) {
      var v = _a.get(m) - 1, x = a.get(m) - 1;
      _a.set(m, v), a.set(m, x), v || (_c.has(m) || m.removeAttribute(r), _c.delete(m)), x || m.removeAttribute(n);
    }), Np--, Np || (_a = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), Sc = {});
  };
}, KV = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || GV(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), qV(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, YV = Wg(), QV = `
 [` + Lb + `] {
   pointer-events: none !important;
 }
`, ZV = function() {
  return y.createElement(YV, { styles: QV });
}, Sw = function(e) {
  return "current" in e ? e.current : e;
};
function JV(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, l = e.onDeactivation, u = e.noIsolation, f = y.useState(void 0), d = f[0], h = f[1], m = y.useRef(null), v = y.useRef(0);
  return y.useEffect(function() {
    var x = function(w) {
      w.defaultPrevented || (w.code === "Escape" || w.key === "Escape" || w.keyCode === 27) && n && n(w);
    }, A = function(w) {
      w.defaultPrevented || w.target === m.current || w instanceof MouseEvent && w.button !== 0 || i && i.map(Sw).some(function(C) {
        return C && C.contains(w.target) || C === w.target;
      }) || r && r(w);
    }, S = function(w) {
      A(w), v.current = w.touches.length;
    }, R = function(w) {
      v.current = w.touches.length;
    };
    if (d)
      return d.ownerDocument.addEventListener("keydown", x), d.ownerDocument.addEventListener("mousedown", A), d.ownerDocument.addEventListener("touchstart", S), d.ownerDocument.addEventListener("touchend", R), function() {
        d.ownerDocument.removeEventListener("keydown", x), d.ownerDocument.removeEventListener("mousedown", A), d.ownerDocument.removeEventListener("touchstart", S), d.ownerDocument.removeEventListener("touchend", R);
      };
  }, [d, r, n]), y.useEffect(function() {
    if (d)
      return a && a(d), function() {
        l && l();
      };
  }, [!!d]), y.useEffect(function() {
    var x = function() {
      return null;
    }, A = !1, S = function(w) {
      u || (x = KV(eM([w], (i || []).map(Sw)), w.ownerDocument.body, Lb)), h(function() {
        return w;
      });
    }, R = function() {
      x(), A || h(null);
    };
    return t({
      onMouseDown: function(w) {
        m.current = w.target;
      },
      onTouchStart: function(w) {
        m.current = w.target;
      },
      onActivation: S,
      onDeactivation: R
    }), function() {
      A = !0, t(!1);
    };
  }, []), y.createElement(ZV, null);
}
const e5 = Ng(Mb, JV);
var t5 = function(e) {
  return y.createElement(e5, ee({}, e));
}, n5 = y.forwardRef(function(e, t) {
  return y.createElement(yH, ee({}, e, { ref: t, sideCar: t5 }));
});
class r5 extends _.Component {
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
    return this.rootElement ? /* @__PURE__ */ Oo.createPortal(this.props.children, this.rootElement) : null;
  }
}
const ck = /* @__PURE__ */ _.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function i5({
  onClose: e,
  isOpen: t,
  isBlocking: n = !1,
  children: r = null
}) {
  const i = y.useMemo(() => ({
    onClose: e,
    isOpen: t,
    isBlocking: n
  }), [e, t, n]);
  return /* @__PURE__ */ _.createElement(ck.Provider, {
    value: i
  }, r);
}
function o5({
  onClick: e
}) {
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-backdrop",
    onClick: e,
    onKeyDown: e,
    "data-testid": "modal-backdrop",
    role: "presentation"
  });
}
function a5({
  children: e = null
}) {
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function s5({
  children: e,
  onClose: t,
  isOpen: n,
  isBlocking: r = !1,
  zIndex: i
}) {
  if (y.useEffect(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
    document.body.classList.remove("pgn__hidden-scroll-padding-right");
  }), [n]), !n)
    return null;
  const a = r ? void 0 : t;
  return /* @__PURE__ */ _.createElement(i5, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ _.createElement(r5, null, /* @__PURE__ */ _.createElement(n5, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: Z("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ _.createElement(a5, null, /* @__PURE__ */ _.createElement(o5, {
    onClick: a
  }), e))));
}
const md = /* @__PURE__ */ _.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = y.useContext(ck), a = e, l = {
    ...n,
    className: Z("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ _.createElement(a, l, t);
});
md.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the content of the button */
  children: g.node,
  /** Specifies class name to append to the base element */
  className: g.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: g.func
};
md.defaultProps = {
  as: Gr,
  onClick: void 0,
  className: void 0,
  children: null
};
const jg = /* @__PURE__ */ _.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement(e, {
  ...n,
  ref: r,
  className: Z("pgn__modal-header", n.className)
}, t));
jg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
jg.defaultProps = {
  as: "div",
  className: ""
};
function Gg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-title", n.className)
  }, t);
}
Gg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
Gg.defaultProps = {
  as: "h2",
  className: void 0
};
function Xg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-footer", n.className)
  }, t);
}
Xg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
Xg.defaultProps = {
  as: "div",
  className: void 0
};
const bw = (e = !0) => {
  const t = y.useRef(null), [n, r] = y.useState(e);
  return y.useEffect(() => {
    try {
      if (t.current) {
        const i = new IntersectionObserver((a) => {
          a.forEach(({
            isIntersecting: l
          }) => {
            r(l);
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
function qg({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = bw(), [a, l] = bw(), u = Z("pgn__modal-body", n.className, {
    "pgn__modal-body-scroll-top": r,
    "pgn__modal-body-scroll-bottom": a
  });
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: u
  }, /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("div", {
    ref: i
  }), /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-body-content"
  }, t), /* @__PURE__ */ _.createElement("div", {
    ref: l
  })));
}
qg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
qg.defaultProps = {
  as: "div",
  className: void 0
};
function Kg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-hero-content", n.className)
  }, t);
}
Kg.propTypes = {
  as: g.elementType,
  children: g.node.isRequired,
  className: g.string
};
Kg.defaultProps = {
  as: "div",
  className: void 0
};
function Yg({
  as: e,
  backgroundSrc: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...r,
    className: Z("pgn__modal-hero-bg", r.className),
    style: {
      backgroundImage: t ? `url(${t})` : void 0,
      ...r.style
    }
  }, n);
}
Yg.propTypes = {
  as: g.elementType,
  backgroundSrc: g.string,
  children: g.node,
  className: g.string,
  style: g.shape({})
};
Yg.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function ru({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-hero", n.className)
  }, t);
}
ru.propTypes = {
  as: g.elementType,
  children: g.node.isRequired,
  className: g.string
};
ru.defaultProps = {
  as: "div",
  className: void 0
};
ru.Content = Kg;
ru.Background = Yg;
const fk = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], l5 = ["hover", "click", "focus"];
function Qg(e) {
  return /* @__PURE__ */ _.createElement(gb, {
    ...e
  }, e.children);
}
const kw = g.oneOf(l5);
g.node.isRequired, g.oneOfType([g.elementType, g.func]), g.func, g.func, g.func, g.func, g.func, g.func, g.func, g.oneOf(fk), g.shape({}), g.bool, g.oneOf(["click", "mousedown"]), g.bool, g.oneOfType([g.elementType, g.func]), g.oneOfType([g.object, g.bool]);
Qg.propTypes = {
  /** Specifies the content of the `OverlayTrigger`. */
  children: g.oneOfType([g.element, g.func]).isRequired,
  /** An element or text to overlay next to the target. */
  overlay: g.oneOfType([g.element, g.func]).isRequired,
  /** The initial visibility state of the `Overlay`. */
  defaultShow: g.bool,
  /** A millisecond delay amount to show and hide the `Overlay` once triggered. */
  delay: g.oneOfType([g.number, g.shape({})]),
  /** The initial flip state of the `Overlay`. */
  flip: g.bool,
  onHide: g.func,
  /**
   * A callback that fires when the user triggers a change in tooltip visibility.
   * `onToggle` is called with the desired next show, and generally should be
   * passed back to the `show` prop. `onToggle` fires after the configured `delay`.
   *
   * Controls `show`.
   */
  onToggle: g.func,
  /** The placement of the `Overlay` in relation to it's target. */
  placement: g.oneOf(fk),
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popperConfig: g.shape({}),
  /**
   * The visibility of the `Overlay`. `show` is a controlled prop so should
   * be paired with `onToggle` to avoid breaking user interactions.
   *
   * Manually toggling show does not wait for delay to change the visibility.
   *
   * Controls `onToggle`.
   */
  show: g.bool,
  target: g.instanceOf(EventTarget),
  /** Specify which action or actions trigger `Overlay` visibility. */
  trigger: g.oneOfType([kw, g.arrayOf(kw)])
};
Qg.defaultProps = {
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
const u5 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], bf = /* @__PURE__ */ _.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement(pd, {
  ...n,
  className: Z({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
bf.propTypes = {
  ...pd.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: g.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: g.oneOf(u5),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: g.shape({
    ref: g.oneOfType([g.func, g.shape({
      current: g.element
    })]),
    style: g.shape({})
  }),
  /** Whether the `Overlay` is shown. */
  show: g.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: g.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string,
  /** Specifies the content of the `Tooltip` */
  children: g.node,
  /** Specifies class name to append to the base element */
  className: g.string,
  /** The visual style of the `Tooltip` */
  variant: g.string
};
bf.defaultProps = {
  ...bf.defaultProps,
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
const ys = /* @__PURE__ */ _.forwardRef(({
  className: e,
  alt: t,
  invertColors: n = !1,
  icon: r,
  src: i,
  iconClassNames: a,
  onClick: l = () => {
  },
  size: u = "md",
  variant: f = "primary",
  iconAs: d = It,
  isActive: h = !1,
  children: m,
  // unused, just here because we don't want it to be part of 'attrs'
  ...v
}, x) => {
  const A = n ? "inverse-" : "", S = h ? `${f}-` : "", R = d;
  return /* @__PURE__ */ _.createElement("button", {
    "aria-label": t,
    className: Z("btn-icon", `btn-icon-${A}${f}`, `btn-icon-${u}`, {
      [`btn-icon-${A}${S}active`]: h
    }, e),
    onClick: l,
    type: "button",
    ref: x,
    ...v
  }, /* @__PURE__ */ _.createElement("span", {
    className: "btn-icon__icon-container"
  }, R && /* @__PURE__ */ _.createElement(R, {
    className: Z("btn-icon__icon", a),
    icon: r,
    src: i
  })));
});
function dk({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ _.createElement(Qg, {
    placement: e,
    overlay: /* @__PURE__ */ _.createElement(bf, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ _.createElement(ys, {
    ...n
  }));
}
ys.IconButtonWithTooltip = dk;
const c5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), f5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), d5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), h5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), Zg = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), p5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M6 21h12V7H6v14ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z",
  fill: "currentColor"
})), m5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  fill: "currentColor"
})), v5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54Z",
  fill: "currentColor"
})), g5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
  fill: "currentColor"
})), hk = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z",
  fill: "currentColor"
})), pk = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z",
  fill: "currentColor"
})), mk = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), vk = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), y5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), E5 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  xmlns: "http://www.w3.org/2000/svg",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  fill: "currentColor"
})), x5 = {
  closeButtonText: {
    id: "pgn.Modal.closeButon",
    defaultMessage: "Close",
    description: "Accessible name for the close button in the modal dialog"
  }
};
function bi({
  children: e,
  title: t,
  isOpen: n = !1,
  onClose: r,
  size: i = "md",
  variant: a = "default",
  hasCloseButton: l = !0,
  closeLabel: u,
  isFullscreenScroll: f = !1,
  className: d,
  isFullscreenOnMobile: h = !1,
  isBlocking: m = !1,
  zIndex: v,
  isOverflowVisible: x
}) {
  const A = vs(), S = u || A.formatMessage(x5.closeButtonText), R = _b({
    query: "(max-width: 767.98px)"
  }), w = h && R;
  return /* @__PURE__ */ _.createElement(s5, {
    isOpen: n,
    onClose: r,
    isBlocking: m,
    zIndex: v
  }, /* @__PURE__ */ _.createElement("div", {
    role: "dialog",
    "aria-label": t,
    className: Z("pgn__modal", {
      [`pgn__modal-${w ? "fullscreen" : i}`]: i,
      [`pgn__modal-${a}`]: a,
      "pgn__modal-scroll-fullscreen": f,
      "pgn__modal-visible-overflow": x
    }, d)
  }, l && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ _.createElement(md, {
    as: ys,
    iconAs: It,
    invertColors: a === "dark",
    src: Zg,
    alt: S
  })), e));
}
bi.Header = jg;
bi.Title = Gg;
bi.Footer = Xg;
bi.CloseButton = md;
bi.Body = qg;
bi.Hero = ru;
function w5() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function C5(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": w5()
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
function to(e) {
  return typeof e == "string" || e instanceof String;
}
function Aw(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function gk(e, t) {
  return Array.isArray(t) ? gk(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const ue = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function _5(e) {
  switch (e) {
    case ue.LEFT:
      return ue.FORCE_LEFT;
    case ue.RIGHT:
      return ue.FORCE_RIGHT;
    default:
      return e;
  }
}
function Op(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function kf(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!kf(t[i], e[i])) return !1;
    return !0;
  }
  if (n != r) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const a = t instanceof Date, l = e instanceof Date;
    if (a && l) return t.getTime() == e.getTime();
    if (a != l) return !1;
    const u = t instanceof RegExp, f = e instanceof RegExp;
    if (u && f) return t.toString() == e.toString();
    if (u != f) return !1;
    const d = Object.keys(t);
    for (i = 0; i < d.length; i++) if (!Object.prototype.hasOwnProperty.call(e, d[i])) return !1;
    for (i = 0; i < d.length; i++) if (!kf(e[d[i]], t[d[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class S5 {
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
    return !this.removedCount || this.insertedCount ? ue.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? ue.RIGHT : ue.LEFT;
  }
}
function pe(e, t) {
  return new pe.InputMask(e, t);
}
function yk(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? pe.MaskedRegExp : to(e) ? pe.MaskedPattern : e === Date ? pe.MaskedDate : e === Number ? pe.MaskedNumber : Array.isArray(e) || e === Array ? pe.MaskedDynamic : pe.Masked && e.prototype instanceof pe.Masked ? e : pe.Masked && e instanceof pe.Masked ? e.constructor : e instanceof Function ? pe.MaskedFunction : (console.warn("Mask not found for mask", e), pe.Masked);
}
function $l(e) {
  if (!e) throw new Error("Options in not defined");
  if (pe.Masked) {
    if (e.prototype instanceof pe.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof pe.Masked ? {
      mask: e
    } : Aw(e) && e.mask instanceof pe.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...gk(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return Aw(e) ? {
    ...e
  } : {
    mask: e
  };
}
function _i(e) {
  if (pe.Masked && e instanceof pe.Masked) return e;
  const t = $l(e), n = yk(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
pe.createMask = _i;
class Jg {
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
pe.MaskElement = Jg;
const Tw = 90, b5 = 89;
class vd extends Jg {
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
    if (this._handlers.redo && (t.keyCode === Tw && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === b5 && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Tw && (t.metaKey || t.ctrlKey))
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
pe.HTMLMaskElement = vd;
class k5 extends vd {
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
pe.HTMLMaskElement = vd;
class Ek extends vd {
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
pe.HTMLContenteditableMaskElement = Ek;
class gd {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > gd.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
gd.MAX_LENGTH = 100;
class A5 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof Jg ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Ek(t) : new k5(t), this.masked = _i(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new gd(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof pe.Masked) && this.masked.constructor === yk(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof pe.Masked ? t : _i({
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
    const n = this.masked.unmaskedValue, r = this.masked.value, i = this.masked.rawInputValue, a = this.displayValue, l = this.unmaskedValue !== n || this.value !== r || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = r, this._rawInputValue = i, this.el.value !== a && (this.el.value = a), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), l && this._fireChangeEvents(), !this._historyChanging && (l || this.history.isEmpty) && this.history.push({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, ue.LEFT));
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
    const n = new S5({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : ue.NONE;
    let l = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== ue.NONE && (l = this.masked.nearestInputPos(l, ue.NONE)), this.updateControl(l), delete this._inputEvent;
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
pe.InputMask = A5;
class we {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new we()];
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
pe.ChangeDetails = we;
class Xr {
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
class Zt {
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
      ...Zt.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Xr(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return to(t) && (t = new Xr(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new we({
      inserted: t,
      rawInserted: t
    })) : new we();
  }
  /** Appends char */
  _appendChar(t, n, r) {
    n === void 0 && (n = {});
    const i = this.state;
    let a;
    if ([t, a] = this.doPrepareChar(t, n), t && (a = a.aggregate(this._appendCharRaw(t, n)), !a.rawInserted && this.autofix === "pad")) {
      const l = this.state;
      this.state = i;
      let u = this.pad(n);
      const f = this._appendCharRaw(t, n);
      u = u.aggregate(f), f.rawInserted || u.equals(a) ? a = u : this.state = l;
    }
    if (a.inserted) {
      let l, u = this.doValidate(n) !== !1;
      if (u && r != null) {
        const f = this.state;
        if (this.overwrite === !0) {
          l = r.state;
          for (let h = 0; h < a.rawInserted.length; ++h)
            r.unshift(this.displayValue.length - a.tailShift);
        }
        let d = this.appendTail(r);
        if (u = d.rawInserted.length === r.toString().length, !(u && d.inserted) && this.overwrite === "shift") {
          this.state = f, l = r.state;
          for (let h = 0; h < a.rawInserted.length; ++h)
            r.shift();
          d = this.appendTail(r), u = d.rawInserted.length === r.toString().length;
        }
        u && d.inserted && (this.state = f);
      }
      u || (a = new we(), this.state = i, r && l && (r.state = l));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new we();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new we();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!to(t)) throw new Error("value should be string");
    const i = to(r) ? new Xr(String(r)) : r;
    n != null && n.tail && (n._beforeTailState = this.state);
    let a;
    [t, a] = this.doPrepare(t, n);
    for (let l = 0; l < t.length; ++l) {
      const u = this._appendChar(t[l], n, i);
      if (!u.rawInserted && !this.doSkipInvalid(t[l], n, i)) break;
      a.aggregate(u);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && a.aggregate(this._appendEager()), i != null && (a.tailShift += this.appendTail(i).tailShift), a;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new we();
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
    return n === void 0 && (n = {}), we.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), we.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = ue.NONE), a === void 0 && (a = {
      input: !0
    });
    const l = t + n, u = this.extractTail(l), f = this.eager === !0 || this.eager === "remove";
    let d;
    f && (i = _5(i), d = this.extractInput(0, l, {
      raw: !0
    }));
    let h = t;
    const m = new we();
    if (i !== ue.NONE && (h = this.nearestInputPos(t, n > 1 && t !== 0 && !f ? ue.NONE : i), m.tailShift = h - t), m.aggregate(this.remove(h)), f && i !== ue.NONE && d === this.rawInputValue)
      if (i === ue.FORCE_LEFT) {
        let v;
        for (; d === this.rawInputValue && (v = this.displayValue.length); )
          m.aggregate(new we({
            tailShift: -1
          })).aggregate(this.remove(v - 1));
      } else i === ue.FORCE_RIGHT && u.unshift();
    return m.aggregate(this.append(r, a, u));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !kf(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Zt.EMPTY_VALUES.includes(t) && Zt.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new we();
  }
}
Zt.DEFAULTS = {
  skipInvalid: !0
};
Zt.EMPTY_VALUES = [void 0, null, ""];
pe.Masked = Zt;
class Po {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = to(t) ? new Xr(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Xr)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof Po) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof pe.MaskedPattern))
      return new Xr(this.toString()).appendTo(t);
    const n = new we();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), l = i.stop;
      let u;
      if (l != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= l) && ((i instanceof Po || // for continuous block also check if stop is exist
      t._stops.indexOf(l) >= 0) && n.aggregate(t._appendPlaceholder(l)), u = i instanceof Po && t._blocks[l]), u) {
        const f = u.appendTail(i);
        n.aggregate(f);
        const d = i.toString().slice(f.rawInserted.length);
        d && n.aggregate(t.append(d, {
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
      const a = "chunks" in i ? new Po() : new Xr();
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
class T5 {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ue.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ue.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ue.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ue.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ue.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ue.NONE), !0;
    });
  }
}
class xk {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new we();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = ue.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case ue.LEFT:
      case ue.FORCE_LEFT:
        return r;
      case ue.NONE:
      case ue.RIGHT:
      case ue.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new we();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, l = new we({
      inserted: this.char,
      rawInserted: a ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = a && (n.raw || n.input), l;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const t = new we();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Xr("");
  }
  appendTail(t) {
    return to(t) && (t = new Xr(String(t))), t.appendTo(this);
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
class Af {
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
      lazy: l,
      eager: u,
      ...f
    } = t;
    this.masked = _i(f), Object.assign(this, {
      parent: n,
      isOptional: r,
      placeholderChar: i,
      displayChar: a,
      lazy: l,
      eager: u
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new we();
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
    if (n === void 0 && (n = {}), this.isFilled) return new we();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new we(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new we() : (this.isFilled = !0, new we({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new we();
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
    n === void 0 && (n = ue.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case ue.LEFT:
      case ue.FORCE_LEFT:
        return this.isComplete ? a : r;
      case ue.RIGHT:
      case ue.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case ue.NONE:
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
    return new we();
  }
}
Af.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class R5 extends Zt {
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
pe.MaskedRegExp = R5;
class Jt extends Zt {
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
      ...Jt.DEFAULTS,
      ...t,
      definitions: Object.assign({}, Af.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        const d = n.slice(a), h = Object.keys(this.blocks).filter((v) => d.indexOf(v) === 0);
        h.sort((v, x) => x.length - v.length);
        const m = h[0];
        if (m) {
          const {
            expose: v,
            repeat: x,
            ...A
          } = $l(this.blocks[m]), S = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...A,
            repeat: x,
            parent: this
          }, R = x != null ? new pe.RepeatBlock(
            S
            /* TODO */
          ) : _i(S);
          R && (this._blocks.push(R), v && (this.exposeBlock = R), this._maskedBlocks[m] || (this._maskedBlocks[m] = []), this._maskedBlocks[m].push(this._blocks.length - 1)), a += m.length - 1;
          continue;
        }
      }
      let l = n[a], u = l in t;
      if (l === Jt.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (l === "{" || l === "}") {
        r = !r;
        continue;
      }
      if (l === "[" || l === "]") {
        i = !i;
        continue;
      }
      if (l === Jt.ESCAPE_CHAR) {
        if (++a, l = n[a], !l) break;
        u = !1;
      }
      const f = u ? new Af({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...$l(t[l]),
        parent: this
      }) : new xk({
        char: l,
        eager: this.eager,
        isUnmasking: r
      });
      this._blocks.push(f);
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
    const n = new we();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new we();
    if (!r) return i;
    for (let l = r.index, u; u = this._blocks[l]; ++l) {
      var a;
      const f = u._appendChar(t, {
        ...n,
        _beforeTailState: (a = n._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[l]
      });
      if (i.aggregate(f), f.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = new Po();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, l, u) => {
      const f = i.extractTail(l, u);
      f.stop = this._findStopBefore(a), f.from = this._blockStartPos(a), f instanceof Po && (f.blockIndex = a), r.extend(f);
    }), r;
  }
  extractInput(t, n, r) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), r === void 0 && (r = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (a, l, u, f) => {
      i += a.extractInput(u, f, r);
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
    const n = new we();
    if (this.lazy && t == null) return n;
    const r = this._mapPosToBlock(this.displayValue.length);
    if (!r) return n;
    const i = r.index, a = t ?? this._blocks.length;
    return this._blocks.slice(i, a).forEach((l) => {
      if (!l.lazy || t != null) {
        var u;
        n.aggregate(l._appendPlaceholder((u = l._blocks) == null ? void 0 : u.length));
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
      const a = this._mapPosToBlock(n), l = a && i.index === a.index, u = i.offset, f = a && l ? a.offset : this._blocks[i.index].displayValue.length;
      if (r(this._blocks[i.index], i.index, u, f), a && !l) {
        for (let d = i.index + 1; d < a.index; ++d)
          r(this._blocks[d], d, 0, this._blocks[d].displayValue.length);
        r(this._blocks[a.index], a.index, 0, a.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (i, a, l, u) => {
      r.aggregate(i.remove(l, u));
    }), r;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = ue.NONE), !this._blocks.length) return 0;
    const r = new T5(this, t);
    if (n === ue.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === ue.LEFT || n === ue.FORCE_LEFT) {
      if (n === ue.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === ue.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === ue.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === ue.RIGHT || n === ue.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === ue.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, ue.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let r = 0;
    return this._forEachBlocksInRange(t, n, (i, a, l, u) => {
      r += i.totalInputPositions(l, u);
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
    const n = new we();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
Jt.DEFAULTS = {
  ...Zt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Jt.STOP_CHAR = "`";
Jt.ESCAPE_CHAR = "\\";
Jt.InputDefinition = Af;
Jt.FixedDefinition = xk;
pe.MaskedPattern = Jt;
class jc extends Jt {
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
      ...l
    } = t;
    this.to = n, this.from = r, this.maxLength = Math.max(String(n).length, i), this.autofix = a;
    const u = String(this.from).padStart(this.maxLength, "0"), f = String(this.to).padStart(this.maxLength, "0");
    let d = 0;
    for (; d < f.length && f[d] === u[d]; ) ++d;
    l.mask = f.slice(0, d).replace(/0/g, "\\0") + "0".repeat(this.maxLength - d), super._update(l);
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
    const r = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), [a, l] = this.boundaries(this.value + t);
    return Number(l) < this.from ? super._appendCharRaw(r[this.value.length], n) : Number(a) > this.to ? !n.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(r[this.value.length], n).aggregate(this._appendCharRaw(t, n)) : super._appendCharRaw(i[this.value.length], n) : super._appendCharRaw(t, n);
  }
  doValidate(t) {
    const n = this.value;
    if (n.search(/[^0]/) === -1 && n.length <= this._matchFrom) return !0;
    const [i, a] = this.boundaries(n);
    return this.from <= Number(a) && Number(i) <= this.to && super.doValidate(t);
  }
  pad(t) {
    const n = new we();
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
pe.MaskedRange = jc;
const I5 = "d{.}`m{.}`Y";
class pi extends Jt {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: to(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(pi.extractPatternOptions({
      ...pi.DEFAULTS,
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
      ...pi.DEFAULTS,
      ...t
    }, l = Object.assign({}, pi.GET_DEFAULT_BLOCKS());
    t.min && (l.Y.from = t.min.getFullYear()), t.max && (l.Y.to = t.max.getFullYear()), t.min && t.max && l.Y.from === l.Y.to && (l.m.from = t.min.getMonth() + 1, l.m.to = t.max.getMonth() + 1, l.m.from === l.m.to && (l.d.from = t.min.getDate(), l.d.to = t.max.getDate())), Object.assign(l, this.blocks, i), super._update({
      ...a,
      mask: to(n) ? n : r,
      blocks: l
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
    return super.optionsIsChanged(pi.extractPatternOptions(t));
  }
}
pi.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: jc,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: jc,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: jc,
    from: 1900,
    to: 9999
  }
});
pi.DEFAULTS = {
  ...Jt.DEFAULTS,
  mask: Date,
  pattern: I5,
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
pe.MaskedDate = pi;
class yd extends Zt {
  constructor(t) {
    super({
      ...yd.DEFAULTS,
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
      } = $l(n), a = _i({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, l = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, u = a.slice(l.length), f = this.currentMask, d = new we(), h = f == null ? void 0 : f.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, r), this.currentMask && (this.currentMask !== f ? (this.currentMask.reset(), l && (this.currentMask.append(l, {
      raw: !0
    }), d.tailShift = this.currentMask.value.length - i.length), u && (d.tailShift += this.currentMask.append(u, {
      raw: !0,
      tail: !0
    }).tailShift)) : h && (this.currentMask.state = h)), d;
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
    const n = new we();
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
    const r = new we();
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
    n && this.compiledMasks.forEach((l, u) => l.state = n[u]), r != null && (this.currentMask = r, this.currentMask.state = i), super.state = a;
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
      return kf(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
yd.DEFAULTS = {
  ...Zt.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((l, u) => {
      const f = t.currentMask === l, d = f ? l.displayValue.length : l.nearestInputPos(l.displayValue.length, ue.FORCE_LEFT);
      return l.rawInputValue !== i ? (l.reset(), l.append(i, {
        raw: !0
      })) : f || l.remove(d), l.append(e, t.currentMaskFlags(n)), l.appendTail(r), {
        index: u,
        weight: l.rawInputValue.length,
        totalInputPositions: l.totalInputPositions(0, Math.max(d, l.nearestInputPos(l.displayValue.length, ue.FORCE_LEFT)))
      };
    });
    return a.sort((l, u) => u.weight - l.weight || u.totalInputPositions - l.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
pe.MaskedDynamic = yd;
class Ed extends Jt {
  constructor(t) {
    super({
      ...Ed.DEFAULTS,
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
      const i = n.map((u) => u.length), a = Math.min(...i), l = Math.max(...i) - a;
      r.mask = "*".repeat(a), l && (r.mask += "[" + "*".repeat(l) + "]"), this.enum = n;
    }
    super._update(r);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = Math.min(this.nearestInputPos(0, ue.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (l, u) => {
        const f = i[0][u];
        u >= this.value.length || f === l.value || (l.reset(), l._appendChar(f, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((l) => a.aggregate(super._appendCharRaw(l))), a;
    }
    return new we({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Xr("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new we();
    const r = Math.min(super.nearestInputPos(0, ue.FORCE_RIGHT), this.value.length);
    let i;
    for (i = t; i >= 0 && !(this.enum.filter((u) => this.matchValue(u, this.value.slice(r, i), r)).length > 1); --i)
      ;
    const a = super.remove(i, n);
    return a.tailShift += i - t, a;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
Ed.DEFAULTS = {
  ...Jt.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
pe.MaskedEnum = Ed;
class N5 extends Zt {
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
pe.MaskedFunction = N5;
var wk;
class Vn extends Zt {
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
      ...Vn.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Op(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Op).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Op(this.thousandsSeparator), "g");
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
    const l = this.number;
    let u = !isNaN(l), f = !1;
    if (u) {
      let v;
      this.min != null && this.min < 0 && this.number < this.min && (v = this.min), this.max != null && this.max > 0 && this.number > this.max && (v = this.max), v != null && (this.autofix ? (this._value = this.format(v, this).replace(Vn.UNMASKED_RADIX, this.radix), f || (f = a === this._value && !n.tail)) : u = !1), u && (u = !!this._value.match(this._numberRegExp));
    }
    let d;
    u ? d = new we({
      inserted: this._value.slice(a.length),
      rawInserted: f ? "" : t,
      skip: f
    }) : (this._value = a, d = new we()), this._value = this._insertThousandsSeparators(this._value);
    const h = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, m = this._separatorsCountFromSlice(h);
    return d.tailShift += (m - i) * this.thousandsSeparator.length, d;
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
    const l = this._separatorsCountFromSlice(r);
    return new we({
      tailShift: (l - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case ue.NONE:
      case ue.LEFT:
      case ue.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === ue.FORCE_LEFT)
            return r;
        }
        break;
      }
      case ue.RIGHT:
      case ue.FORCE_RIGHT: {
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
    return n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (r, i, a, l) => i + l), t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"), n.length > 1 && (n[1] = n[1].replace(/0*$/, ""), n[1].length || (n.length = 1)), this._insertThousandsSeparators(n.join(this.radix));
  }
  _padFractionalZeros(t) {
    if (!t) return t;
    const n = t.split(this.radix);
    return n.length < 2 && n.push(""), n[1] = n[1].padEnd(this.scale, "0"), n.join(this.radix);
  }
  doSkipInvalid(t, n, r) {
    n === void 0 && (n = {});
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === Vn.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, Vn.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(Vn.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || Vn.EMPTY_VALUES.includes(t) && Vn.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
wk = Vn;
Vn.UNMASKED_RADIX = ".";
Vn.EMPTY_VALUES = [...Zt.EMPTY_VALUES, 0];
Vn.DEFAULTS = {
  ...Zt.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [wk.UNMASKED_RADIX],
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
pe.MaskedNumber = Vn;
const rv = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Ck(e, t, n) {
  t === void 0 && (t = rv.MASKED), n === void 0 && (n = rv.MASKED);
  const r = _i(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function O5(e, t, n, r) {
  return Ck(t, n, r)(e);
}
pe.PIPE_TYPE = rv;
pe.createPipe = Ck;
pe.pipe = O5;
class P5 extends Jt {
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
      ...l
    } = $l(t);
    this._blockOpts = Object.assign({}, this._blockOpts, l);
    const u = _i(this._blockOpts);
    this.repeat = (n = (r = a ?? u.repeat) != null ? r : this.repeat) != null ? n : 1 / 0, super._update({
      mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((i = this._blocks) == null ? void 0 : i.length) || 0, this.repeatFrom)),
      blocks: {
        m: u
      },
      eager: u.eager,
      overwrite: u.overwrite,
      skipInvalid: u.skipInvalid,
      lazy: u.lazy,
      placeholderChar: u.placeholderChar,
      displayChar: u.displayChar
    });
  }
  _allocateBlock(t) {
    if (t < this._blocks.length) return this._blocks[t];
    if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
      return this._blocks.push(_i(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new we();
    for (
      let f = (i = (a = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : a.index) != null ? i : Math.max(this._blocks.length - 1, 0), d, h;
      // try to get a block or
      // try to allocate a new block if not allocated already
      d = (l = this._blocks[f]) != null ? l : h = !h && this._allocateBlock(f);
      ++f
    ) {
      var i, a, l, u;
      const m = d._appendChar(t, {
        ...n,
        _beforeTailState: (u = n._beforeTailState) == null || (u = u._blocks) == null ? void 0 : u[f]
      });
      if (m.skip && h) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (r.aggregate(m), m.consumed) break;
    }
    return r;
  }
  _trimEmptyTail(t, n) {
    var r, i;
    t === void 0 && (t = 0);
    const a = Math.max(((r = this._mapPosToBlock(t)) == null ? void 0 : r.index) || 0, this.repeatFrom, 0);
    let l;
    n != null && (l = (i = this._mapPosToBlock(n)) == null ? void 0 : i.index), l == null && (l = this._blocks.length - 1);
    let u = 0;
    for (let f = l; a <= f && !this._blocks[f].unmaskedValue; --f, ++u)
      ;
    u && (this._blocks.splice(l - u + 1, u), this.mask = this.mask.slice(u));
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
pe.RepeatBlock = P5;
try {
  globalThis.IMask = pe;
} catch {
}
const _k = {
  // common
  mask: g.oneOfType([g.array, g.func, g.string, g.instanceOf(RegExp), g.oneOf([Date, Number, pe.Masked]), g.instanceOf(pe.Masked)]),
  value: g.any,
  unmask: g.oneOfType([g.bool, g.oneOf(["typed"])]),
  prepare: g.func,
  prepareChar: g.func,
  validate: g.func,
  commit: g.func,
  overwrite: g.oneOfType([g.bool, g.oneOf(["shift"])]),
  eager: g.oneOfType([g.bool, g.oneOf(["append", "remove"])]),
  skipInvalid: g.bool,
  // events
  onAccept: g.func,
  onComplete: g.func,
  // pattern
  placeholderChar: g.string,
  displayChar: g.string,
  lazy: g.bool,
  definitions: g.object,
  blocks: g.object,
  // enum
  enum: g.arrayOf(g.string),
  // range
  maxLength: g.number,
  from: g.number,
  to: g.number,
  // date
  pattern: g.string,
  format: g.func,
  parse: g.func,
  autofix: g.oneOfType([g.bool, g.oneOf(["pad"])]),
  // number
  radix: g.string,
  thousandsSeparator: g.string,
  mapToRadix: g.arrayOf(g.string),
  scale: g.number,
  normalizeZeros: g.bool,
  padFractionalZeros: g.bool,
  min: g.oneOfType([g.number, g.instanceOf(Date)]),
  max: g.oneOfType([g.number, g.instanceOf(Date)]),
  // dynamic
  dispatch: g.func,
  // ref
  inputRef: g.oneOfType([g.func, g.shape({
    current: g.object
  })])
}, Sk = Object.keys(_k).filter((e) => e !== "value"), D5 = ["value", "unmask", "onAccept", "onComplete", "inputRef"], F5 = Sk.filter((e) => D5.indexOf(e) < 0);
function M5(e) {
  var t;
  const n = (t = class extends _.Component {
    constructor(a) {
      super(a), this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      this.props.mask && this.initMask();
    }
    componentDidUpdate() {
      const a = this.props, l = this._extractMaskOptionsFromProps(a);
      if (l.mask)
        this.maskRef ? (this.maskRef.updateOptions(l), "value" in a && a.value !== void 0 && (this.maskValue = a.value)) : this.initMask(l);
      else if (this.destroyMask(), "value" in a && a.value !== void 0) {
        var u;
        (u = this.element) != null && u.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = a.value : this.element.value = a.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(a) {
      this.element = a, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = a : this.props.inputRef(a));
    }
    initMask(a) {
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = pe(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...l
      } = a;
      return Object.keys(l).filter((u) => F5.indexOf(u) < 0).forEach((u) => {
        delete l[u];
      }), l;
    }
    _extractNonMaskProps(a) {
      const {
        ...l
      } = a;
      return Sk.forEach((u) => {
        u !== "maxLength" && delete l[u];
      }), "defaultValue" in l || (l.defaultValue = a.mask ? "" : l.value), delete l.value, l;
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
      return _.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = _k, _.forwardRef((i, a) => _.createElement(n, {
    ...i,
    ref: a
  }));
}
const L5 = M5((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return _.createElement("input", {
    ...n,
    ref: t
  });
}), B5 = (e, t) => _.createElement(L5, {
  ...e,
  ref: t
}), H5 = _.forwardRef(B5), V5 = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), Ho = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, U5 = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = y.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (l) => r(!!l.target.value)];
}, Rw = (e, t) => {
  const [n, r] = y.useState([]), i = (f) => (r((d) => [...d, f]), f), a = () => {
    const f = kg(`${e}-`);
    return i(f);
  }, l = (f) => {
    r((d) => d.filter((h) => h !== f));
  };
  return [n, (f) => {
    const [d, h] = y.useState(f);
    return y.useEffect(() => (f ? i(f) : d || h(a()), () => l(d)), [d, f]), d;
  }];
}, Pp = (e) => e, $5 = () => {
}, bk = /* @__PURE__ */ _.createContext({
  getControlProps: Pp,
  useSetIsControlGroupEffect: $5,
  getLabelProps: Pp,
  getDescriptorProps: Pp,
  hasFormGroupProvider: !1
}), yr = () => _.useContext(bk);
function z5(e) {
  const [t, n] = y.useState(e);
  return [t, (i) => {
    y.useEffect(() => n(i), [i]);
  }];
}
function xd({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = y.useMemo(() => t || kg("form-field"), [t]), [l, u] = Rw(a), [f, d] = Rw(a), [h, m] = z5(!1), S = {
    getControlProps: y.useCallback((R) => {
      const w = h ? f : void 0;
      return V5({
        ...R,
        "aria-describedby": Z(R["aria-describedby"], l) || void 0,
        "aria-labelledby": Z(R["aria-labelledby"], w) || void 0,
        id: a
      });
    }, [h, l, f, a]),
    getLabelProps: (R) => {
      const w = d(R == null ? void 0 : R.id);
      return h ? {
        ...R,
        id: w
      } : {
        ...R,
        htmlFor: a
      };
    },
    getDescriptorProps: (R) => {
      const w = u(R == null ? void 0 : R.id);
      return {
        ...R,
        id: w
      };
    },
    useSetIsControlGroupEffect: m,
    isControlGroup: h,
    controlId: a,
    isInvalid: n,
    isValid: r,
    size: i,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ _.createElement(bk.Provider, {
    value: S
  }, e);
}
const cs = {
  SMALL: "sm",
  LARGE: "lg"
}, kr = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, W5 = {
  [kr.DEFAULT]: null,
  [kr.VALID]: d5,
  [kr.INVALID]: Zg,
  [kr.WARNING]: E5,
  [kr.CRITERIA_EMPTY]: y5,
  [kr.CRITERIA_VALID]: h5,
  [kr.CRITERIA_INVALID]: f5
}, j5 = ({
  isInvalid: e,
  isValid: t
}) => t ? kr.VALID : e ? kr.INVALID : kr.DEFAULT;
function e0({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = W5[e];
  return n ? /* @__PURE__ */ _.createElement(It, {
    src: n
  }) : null;
}
e0.propTypes = {
  type: g.oneOf(Object.values(kr)),
  customIcon: g.node
};
e0.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function wd({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...a
}) {
  const l = Z(a.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ _.createElement("div", {
    ...a,
    className: l
  }, i && /* @__PURE__ */ _.createElement(e0, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ _.createElement("div", null, e));
}
const G5 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
wd.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: g.bool,
  /** Specifies text type, this affects styling. */
  type: g.oneOf(G5),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: g.node,
  /** Specifies whether to show text with muted styling. */
  muted: g.bool
};
wd.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function oo({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = yr(), a = n(t), l = Z("pgn__form-control-description", t.className), u = t.type || j5({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ _.createElement(wd, {
    ...a,
    className: l,
    type: u
  }, e);
}
const X5 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
oo.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: g.bool,
  /** Specifies feedback type, this affects styling. */
  type: g.oneOf(X5),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: g.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: g.bool
};
oo.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function kk({
  children: e
}) {
  const {
    controlId: t
  } = yr();
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ _.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
kk.propTypes = {
  children: g.node.isRequired
};
function Tf({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ _.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
Tf.propTypes = {
  children: g.node.isRequired,
  location: g.oneOf(["leading", "trailing"])
};
Tf.defaultProps = {
  location: "leading"
};
function t0({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const l = yr(), u = a.size || l.size;
  return /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": u === cs.LARGE,
      "pgn__form-control-decorator-group-sm": u === cs.SMALL
    }, i),
    ...a
  }, e, t && /* @__PURE__ */ _.createElement(Tf, {
    location: "leading"
  }, t), n && /* @__PURE__ */ _.createElement(Tf, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ _.createElement(kk, null, r));
}
t0.propTypes = {
  children: g.node.isRequired,
  leadingElement: g.node,
  trailingElement: g.node,
  floatingLabel: g.node,
  className: g.string,
  size: g.oneOf([cs.SMALL, cs.LARGE])
};
t0.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Es = /* @__PURE__ */ _.forwardRef(({
  as: e,
  className: t,
  controlClassName: n,
  leadingElement: r,
  trailingElement: i,
  floatingLabel: a,
  autoResize: l,
  onChange: u,
  inputMask: f,
  ...d
}, h) => {
  const {
    isInvalid: m,
    isValid: v,
    getControlProps: x,
    ...A
  } = yr(), S = _.useRef(), R = h || S, w = d.size || A.size, [C, k] = U5({
    defaultValue: d.defaultValue,
    value: d.value
  }), I = y.useCallback(() => {
    e === "textarea" && l && (!R.current.initialHeight && !R.current.offsets && (R.current.initialHeight = R.current.offsetHeight, R.current.offsets = R.current.offsetHeight - R.current.clientHeight), R.current.style.height = `${R.current.initialHeight}px`, R.current.style.height = `${R.current.scrollHeight + R.current.offsets}px`);
  }, [e, l, R]);
  y.useEffect(() => {
    I();
  }, [I]);
  const O = x({
    ...d,
    // eslint-disable-next-line react/prop-types
    onBlur: Ho(k, d.onBlur)
  }), D = (F) => {
    I(), u && u(F);
  };
  return /* @__PURE__ */ _.createElement(t0, {
    size: w,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ _.createElement(hb, {
    as: f ? H5 : e,
    ref: R,
    size: w,
    isInvalid: m,
    isValid: v,
    className: Z(n, {
      "has-value": C
    }),
    onChange: D,
    mask: f,
    ...O
  }));
}), q5 = ["sm", "lg"];
Es.Feedback = oo;
Es.Description = oo;
Es.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies base element for the control component. */
  as: g.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: g.func,
  /** Specifies default value of the input component. */
  defaultValue: g.oneOfType([g.string, g.number]),
  /** Specifies current value of the input component. */
  value: g.oneOfType([g.string, g.number]),
  /** Specifies id of the control component. */
  id: g.string,
  /** Specifies class name for the control component. */
  controlClassName: g.string,
  /** Specifies size for the control component. */
  size: g.oneOf(q5),
  /** Specifies leading element to display for the input component. */
  leadingElement: g.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: g.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: g.node,
  /** Specifies whether to render input as plain text. */
  plaintext: g.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: g.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: g.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: g.bool,
  /** Specifies what format to use for the input mask. */
  inputMask: g.string
};
Es.defaultProps = {
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
function n0({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = yr(), l = Z("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === cs.LARGE,
    "pgn__form-label-sm": r === cs.SMALL
  }, n.className), u = a({
    ...n,
    className: l
  }), f = i ? "p" : "label";
  return /* @__PURE__ */ _.createElement(f, u, e);
}
function K5({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: a,
  ...l
}) {
  return /* @__PURE__ */ _.createElement(a ?? "div", {
    ...l,
    className: Z("pgn__form-group", l.className)
  }, /* @__PURE__ */ _.createElement(xd, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const Y5 = (e) => e, Ak = /* @__PURE__ */ _.createContext({
  getRadioControlProps: Y5,
  hasRadioSetProvider: !1
}), Q5 = () => y.useContext(Ak);
function r0({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: a,
  defaultValue: l
}) {
  const u = !l && a !== void 0, d = {
    name: t,
    value: a,
    defaultValue: l,
    getRadioControlProps: (h) => ({
      ...h,
      name: t,
      /* istanbul ignore next */
      onBlur: h.onBlur ? Ho(n, h.onBlur) : n,
      /* istanbul ignore next */
      onFocus: h.onFocus ? Ho(r, h.onFocus) : r,
      /* istanbul ignore next */
      onChange: h.onChange ? Ho(i, h.onChange) : i,
      checked: u ? a === h.value : void 0,
      defaultChecked: u ? void 0 : l === h.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ _.createElement(Ak.Provider, {
    value: d
  }, e);
}
r0.propTypes = {
  children: g.node.isRequired,
  name: g.string.isRequired,
  onBlur: g.func,
  onFocus: g.func,
  onChange: g.func,
  value: g.string,
  defaultValue: g.string
};
r0.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const i0 = /* @__PURE__ */ _.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = yr(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = Q5();
  let a = n({
    ...e,
    className: Z("pgn__form-radio-input", e.className)
  });
  return i && (a = r(a)), /* @__PURE__ */ _.createElement("input", {
    ...a,
    type: "radio",
    ref: t
  });
});
i0.propTypes = {
  className: g.string
};
i0.defaultProps = {
  className: void 0
};
const o0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: l,
  ...u
}, f) => /* @__PURE__ */ _.createElement(xd, {
  controlId: u.id,
  isInvalid: a,
  isValid: l
}, /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__form-radio", t, {
    "pgn__form-control-valid": l,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": u.disabled
  })
}, /* @__PURE__ */ _.createElement(i0, {
  ref: f,
  className: n,
  ...u
}), /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(n0, {
  className: r
}, e), i && /* @__PURE__ */ _.createElement(oo, {
  hasIcon: !1
}, i)))));
o0.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: g.string,
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies class name for control component. */
  controlClassName: g.string,
  /** Specifies class name for label component. */
  labelClassName: g.string,
  /** Specifies description to show under the radio's value. */
  description: g.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: g.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: g.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: g.bool
};
o0.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function Cd({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ _.createElement(e, {
    className: Z(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
Cd.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** A class name to append to the base element. */
  className: g.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: g.bool,
  /** Specifies contents of the component. */
  children: g.node
};
Cd.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function a0({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: l,
  onBlur: u,
  ...f
}) {
  const {
    getControlProps: d,
    useSetIsControlGroupEffect: h
  } = yr();
  h(!0);
  const m = d(f);
  return /* @__PURE__ */ _.createElement(r0, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: l,
    onBlur: u,
    onChange: a
  }, /* @__PURE__ */ _.createElement(Cd, {
    role: "radiogroup",
    isInline: i,
    ...m
  }, e));
}
a0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** A class name to append to the base element. */
  className: g.string,
  /** Specifies name for the component. */
  name: g.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: g.string,
  /** Specifies default values. */
  defaultValue: g.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: g.bool,
  /** Specifies onChange event handler. */
  onChange: g.func,
  /** Specifies onFocus event handler. */
  onFocus: g.func,
  /** Specifies onBlur event handler. */
  onBlur: g.func
};
a0.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let bc;
const Z5 = new Uint8Array(16);
function J5() {
  if (!bc && (bc = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !bc))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return bc(Z5);
}
const Ht = [];
for (let e = 0; e < 256; ++e)
  Ht.push((e + 256).toString(16).slice(1));
function eU(e, t = 0) {
  return Ht[e[t + 0]] + Ht[e[t + 1]] + Ht[e[t + 2]] + Ht[e[t + 3]] + "-" + Ht[e[t + 4]] + Ht[e[t + 5]] + "-" + Ht[e[t + 6]] + Ht[e[t + 7]] + "-" + Ht[e[t + 8]] + Ht[e[t + 9]] + "-" + Ht[e[t + 10]] + Ht[e[t + 11]] + Ht[e[t + 12]] + Ht[e[t + 13]] + Ht[e[t + 14]] + Ht[e[t + 15]];
}
const tU = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Iw = {
  randomUUID: tU
};
function nU(e, t, n) {
  if (Iw.randomUUID && !e)
    return Iw.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || J5)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, eU(r);
}
const rU = (e, t, n) => (r, i, a, ...l) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...l), iU = (e, t) => t.every((n) => e[n] !== void 0), Dp = (e, t) => rU(
  e,
  (n) => Array.isArray(t) ? iU(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), oU = /* @__PURE__ */ _.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: Z("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ _.createElement(yb, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, t));
});
function aU({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function sU({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function lU({
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
  const l = n.querySelectorAll(r);
  if (!l.length)
    return;
  const u = Array.from(l).findIndex((f) => f === a);
  i === "Enter" && a && aU({
    event: e,
    currentIndex: u,
    activeElement: a
  }), sU({
    event: e,
    currentIndex: u,
    availableElements: l
  });
}
function uU(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = y.useRef();
  return y.useEffect(() => {
    const i = (a) => {
      lU({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const Nw = {
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
}, s0 = /* @__PURE__ */ y.forwardRef(({
  children: e,
  arrowKeyNavigationSelector: t,
  ignoredArrowKeysNames: n,
  screenReaderText: r,
  value: i,
  isLoading: a,
  isValueRequired: l,
  valueRequiredErrorMessageText: u,
  isSelectionRequired: f,
  selectionRequiredErrorMessageText: d,
  hasCustomError: h,
  customErrorMessageText: m,
  onChange: v,
  helpMessage: x,
  ...A
}, S) => {
  const R = vs(), w = y.useRef(), C = uU({
    selectors: t,
    ignoredKeys: n
  }), [k, I] = y.useState(!1), [O, D] = y.useState(!1), [F, B] = y.useState(!1), [$, j] = y.useState(!1), [Q, ne] = y.useState((i == null ? void 0 : i.userProvidedText) || ""), [ae, ve] = y.useState([]), [Re, Ee] = y.useState(null), [ce, G] = y.useState(!0), [X, Y] = y.useState(""), re = (Ce) => {
    Ee(Ce);
  }, te = () => {
    ve([]), I(!1), Ee(null);
  }, Ze = (Ce, Xe) => {
    const $e = Ce.currentTarget.getAttribute("data-value"), Ae = Ce.currentTarget.id;
    B(!0), j(!0), ne($e), v && (!i || i && $e !== i.selectionValue) && v({
      userProvidedText: $e,
      selectionValue: $e,
      selectionId: Ae
    }), te(), Xe && Xe(Ce);
  };
  function Ue(Ce = "") {
    let Xe = _.Children.map(e, ($e) => {
      const {
        children: Ae,
        onClick: et,
        ...tn
      } = $e.props, Nn = $e.props.id ?? nU();
      return /* @__PURE__ */ _.cloneElement($e, {
        ...tn,
        children: Ae,
        "data-value": Ae,
        onClick: (Mr) => Ze(Mr, et),
        id: Nn,
        onFocus: () => re(Nn)
      });
    });
    return Ce.length > 0 && (Xe = Xe.filter(($e) => $e.props.children.toLowerCase().includes(Ce.toLowerCase()))), Xe;
  }
  const He = () => {
    ve(Ue(Q)), G(!0), Y(""), I(!0);
  }, Ie = () => {
    k ? te() : He();
  }, Et = /* @__PURE__ */ _.createElement(ys, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: k ? vk : mk,
    iconAs: It,
    size: "sm",
    variant: "secondary",
    alt: k ? R.formatMessage(Nw.iconButtonClosed) : R.formatMessage(Nw.iconButtonOpened),
    onClick: Ie
  }), Ke = () => {
    D(!0);
  }, ot = () => {
    if (h) {
      G(!1), Y(m);
      return;
    }
    if (l && !F) {
      G(!1), Y(u);
      return;
    }
    if (F && f && !$) {
      G(!1), Y(d);
      return;
    }
    G(!0), Y("");
  };
  y.useImperativeHandle(S, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: ot
  }));
  const Se = () => {
    D(!1), te(), ot();
  }, wt = (Ce) => {
    if (O) {
      if (Ce.key === "Escape") {
        Ce.preventDefault(), w && w.current.focus(), te();
        return;
      }
      Ce.key === "Tab" && Se();
    }
  }, ut = (Ce) => {
    C.current && !C.current.contains(Ce.target) && O && Se();
  };
  y.useEffect(() => (document.addEventListener("keydown", wt), document.addEventListener("click", ut, !0), () => {
    document.removeEventListener("click", ut, !0), document.removeEventListener("keydown", wt);
  })), y.useEffect(() => {
    ne(i ? i.userProvidedText ?? "" : ""), B(!!i && !!i.userProvidedText), j(!!i && !!i.selectionValue);
  }, [i]);
  const zt = () => {
    He();
  }, Ge = (Ce) => {
    const Xe = Ce.target.value;
    if (!Xe.length) {
      ne(""), B(!1), j(!1), ve([]), te(), v && v({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    B(!0);
    const $e = Ue(Xe);
    ve($e);
    const Ae = $e.find((et) => et.props.children.toLowerCase() === Xe.toLowerCase());
    if (!Ae) {
      j(!1), ne(Xe), v && v({
        userProvidedText: Xe,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    j(!0), ne(Ae.props.children), v && v({
      userProvidedText: Ae.props.children,
      selectionValue: Ae.props.children,
      selectionId: Ae.props.id
    });
  }, {
    getControlProps: Nt
  } = yr(), Je = Nt(A);
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: C,
    onFocus: Ke
  }, /* @__PURE__ */ _.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${ae.length} options found`), /* @__PURE__ */ _.createElement(xd, {
    controlId: Je.id,
    isInvalid: !ce
  }, /* @__PURE__ */ _.createElement(Es, {
    ref: w,
    "aria-expanded": (ae.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: Q,
    "aria-invalid": X,
    "aria-activedescendant": Re,
    onChange: Ge,
    onClick: zt,
    trailingElement: Et,
    "data-testid": "autosuggest-textbox-input",
    ...Je
  }), x && ce && /* @__PURE__ */ _.createElement(oo, {
    type: "default"
  }, x), !ce && /* @__PURE__ */ _.createElement(oo, {
    type: "invalid",
    "feedback-for": Je.name
  }, X)), /* @__PURE__ */ _.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ _.createElement(oU, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : ae.length > 0 && ae));
});
s0.defaultProps = {
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
s0.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: g.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: g.arrayOf(g.string),
  /** Specifies loading state. */
  isLoading: g.bool,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: g.string,
  /** Specifies onChange event handler. */
  onChange: g.func,
  /** Specifies help information for the user. */
  helpMessage: g.string,
  /** Specifies the placeholder text for the input. */
  placeholder: g.string,
  /** Specifies values for the input. */
  value: g.shape({
    userProvidedText: g.string,
    selectionValue: g.string,
    selectionId: g.string
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: g.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: Dp(g.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: g.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: Dp(g.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: g.bool,
  /** Informs user of other errors. */
  customErrorMessageText: Dp(g.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: g.string,
  /** Selected list item is read-only. */
  readOnly: g.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: g.node,
  /** Specifies the screen reader text */
  screenReaderText: g.string
};
function l0({
  as: e,
  children: t,
  defaultSelected: n,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const l = Z(a.className, "pgn__menu-item");
  return /* @__PURE__ */ _.createElement(e, {
    ...a,
    className: l
  }, /* @__PURE__ */ _.createElement(_.Fragment, null, i && /* @__PURE__ */ _.createElement(It, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ _.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ _.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ _.createElement(It, {
    className: "btn-icon-after",
    src: r
  })));
}
l0.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: g.bool,
  /** Specifies class name to append to the base element */
  className: g.string,
  /** Specifies the content of the ``MenuItem`` */
  children: g.node,
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: g.oneOfType([g.element, g.elementType]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: g.oneOfType([g.element, g.elementType])
};
l0.defaultProps = {
  defaultSelected: !1,
  as: "button",
  className: void 0,
  children: null,
  iconBefore: void 0,
  iconAfter: void 0
};
function u0({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ _.createElement(l0, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: Z(t, "dropdown-item"),
    ...r
  }, e);
}
u0.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
u0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: g.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: g.func
};
const cU = (e) => e, Tk = /* @__PURE__ */ _.createContext({
  getCheckboxControlProps: cU,
  hasCheckboxSetProvider: !1
}), Rk = () => y.useContext(Tk);
function c0({
  children: e,
  name: t,
  onBlur: n,
  onFocus: r,
  onChange: i,
  value: a,
  defaultValue: l
}) {
  const u = !l && Array.isArray(a), d = {
    name: t,
    value: a,
    defaultValue: l,
    getCheckboxControlProps: (h) => ({
      ...h,
      name: t,
      /* istanbul ignore next */
      onBlur: h.onBlur ? Ho(n, h.onBlur) : n,
      /* istanbul ignore next */
      onFocus: h.onFocus ? Ho(r, h.onFocus) : r,
      /* istanbul ignore next */
      onChange: h.onChange ? Ho(i, h.onChange) : i,
      checked: u ? a.includes(h.value) : void 0,
      defaultChecked: u ? void 0 : l && l.includes(h.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ _.createElement(Tk.Provider, {
    value: d
  }, e);
}
c0.propTypes = {
  children: g.node.isRequired,
  name: g.string,
  onBlur: g.func,
  onFocus: g.func,
  onChange: g.func,
  value: g.arrayOf(g.string),
  defaultValue: g.arrayOf(g.string)
};
c0.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const f0 = /* @__PURE__ */ _.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Rk(), a = _.useRef(), l = n || a, {
    getControlProps: u
  } = yr();
  let f = u({
    ...t,
    className: Z("pgn__form-checkbox-input", t.className)
  });
  return i && (f = r(f)), _.useEffect(() => {
    l.current && (l.current.indeterminate = e);
  }, [l, e]), /* @__PURE__ */ _.createElement("input", {
    type: "checkbox",
    ...f,
    ref: l
  });
});
f0.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: g.bool,
  /** Specifies class name to append to the base element. */
  className: g.string
};
f0.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const _d = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: l,
  controlAs: u,
  floatLabelLeft: f,
  ...d
}, h) => {
  const {
    hasCheckboxSetProvider: m
  } = Rk(), {
    hasFormGroupProvider: v,
    useSetIsControlGroupEffect: x,
    getControlProps: A
  } = yr();
  x(!0);
  const R = v && !m ? {
    ...A({}),
    role: "group"
  } : {}, w = /* @__PURE__ */ _.createElement(u, {
    ...d,
    className: n,
    ref: h
  });
  return /* @__PURE__ */ _.createElement(xd, {
    controlId: d.id,
    isInvalid: a,
    isValid: l
  }, /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__form-checkbox", t, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": d.disabled,
      "pgn__form-control-label-left": !!f
    }),
    ...R
  }, w, /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(n0, {
    className: r
  }, e), i && /* @__PURE__ */ _.createElement(oo, {
    hasIcon: !1
  }, i))));
});
_d.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: g.string,
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies class name for control component. */
  controlClassName: g.string,
  /** Specifies class name for label component. */
  labelClassName: g.string,
  /** Specifies description to show under the checkbox. */
  description: g.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: g.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: g.bool,
  /** Specifies control element. */
  controlAs: g.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: g.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: g.bool
};
_d.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: f0,
  floatLabelLeft: !1,
  disabled: !1
};
const d0 = /* @__PURE__ */ _.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = _.useRef(), i = n || r, {
    getControlProps: a
  } = yr(), l = a({
    ...t,
    className: Z("pgn__form-switch-input", t.className)
  });
  return _.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ _.createElement("input", {
    type: "checkbox",
    ...l,
    ref: i
  });
});
d0.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: g.bool,
  /** Specifies class name to append to the base element. */
  className: g.string
};
d0.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const h0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ _.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ _.createElement(_d, {
  className: Z("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: d0,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ _.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
h0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies class name to append to the label element. */
  labelClassName: g.string,
  /** Specifies helper text to display below the switch. */
  helperText: g.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: g.bool
};
h0.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function Sd({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: l,
  onBlur: u,
  ...f
}) {
  const {
    getControlProps: d,
    useSetIsControlGroupEffect: h
  } = yr();
  h(!0);
  const m = d(f);
  return /* @__PURE__ */ _.createElement(c0, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: l,
    onBlur: u,
    onChange: a
  }, /* @__PURE__ */ _.createElement(Cd, {
    role: "group",
    isInline: i,
    ...m
  }, e));
}
Sd.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies name for the component. */
  name: g.string.isRequired,
  /** Specifies values for the checkboxes. */
  value: g.arrayOf(g.string),
  /** Specifies default values for the checkboxes. */
  defaultValue: g.arrayOf(g.string),
  /** Specifies whether to display components with inline styling. */
  isInline: g.bool,
  /** Specifies onChange event handler. */
  onChange: g.func,
  /** Specifies onFocus event handler. */
  onFocus: g.func,
  /** Specifies onBlur event handler. */
  onBlur: g.func
};
Sd.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const Fe = Fr;
Fe.Control = Es;
Fe.Radio = o0;
Fe.RadioSet = a0;
Fe.Autosuggest = s0;
Fe.AutosuggestOption = u0;
Fe.Checkbox = _d;
Fe.CheckboxSet = Sd;
Fe.Switch = h0;
Fe.SwitchSet = Sd;
Fe.Label = n0;
Fe.Group = K5;
Fe.Text = wd;
const fU = ({
  pair: e,
  pairIndex: t,
  totalPairs: n,
  onSave: r,
  onCancel: i,
  saveRef: a
}) => {
  const [l, u] = y.useState(e.term), [f, d] = y.useState(e.description), [h, m] = y.useState({}), v = () => {
    const A = {};
    return l.trim() ? l.length > 100 && (A.term = "Term must be 100 characters or less") : A.term = "Term is required", f.trim() ? f.length > 200 && (A.description = "Description must be 200 characters or less") : A.description = "Description is required", m(A), Object.keys(A).length === 0;
  }, x = () => {
    v() && r({
      id: e.id,
      term: l.trim(),
      description: f.trim()
    });
  };
  return y.useEffect(() => {
    a && (a.current = x);
  }, [l, f, a]), /* @__PURE__ */ V.jsxs("div", { className: "drag-drop-matching-edit-view", children: [
    /* @__PURE__ */ V.jsx("div", { className: "h4 mb-3", children: /* @__PURE__ */ V.jsx("h3", { children: t === -1 ? "New Matching Pair" : `Editing Pair ${t + 1} of ${n}` }) }),
    /* @__PURE__ */ V.jsxs(Fe, { children: [
      /* @__PURE__ */ V.jsx("div", { className: "form-section mb-4", children: /* @__PURE__ */ V.jsxs(Fe.Group, { children: [
        /* @__PURE__ */ V.jsx(Fe.Label, { children: "Term *" }),
        /* @__PURE__ */ V.jsx(
          Fe.Control,
          {
            type: "text",
            value: l,
            onChange: (A) => u(A.target.value),
            placeholder: "Enter the term (e.g., Apply, Analyse, Evaluate)",
            isInvalid: !!h.term,
            maxLength: 100
          }
        ),
        h.term && /* @__PURE__ */ V.jsx("div", { className: "invalid-feedback d-block", children: h.term }),
        /* @__PURE__ */ V.jsxs(Fe.Text, { className: "text-muted", children: [
          l.length,
          " / 100 characters"
        ] })
      ] }) }),
      /* @__PURE__ */ V.jsx("div", { className: "form-section mb-5", children: /* @__PURE__ */ V.jsxs(Fe.Group, { children: [
        /* @__PURE__ */ V.jsx(Fe.Label, { children: "Description *" }),
        /* @__PURE__ */ V.jsx(
          Fe.Control,
          {
            as: "textarea",
            rows: 4,
            value: f,
            onChange: (A) => d(A.target.value),
            placeholder: "Enter the description that matches this term",
            isInvalid: !!h.description,
            maxLength: 200
          }
        ),
        h.description && /* @__PURE__ */ V.jsx("div", { className: "invalid-feedback d-block", children: h.description }),
        /* @__PURE__ */ V.jsxs(Fe.Text, { className: "text-muted", children: [
          f.length,
          " / 200 characters"
        ] })
      ] }) })
    ] })
  ] });
}, Ik = 1e3, dU = 0.01, Nk = (e) => {
  const t = document.createElement(e.tagName);
  return t.setAttribute(
    "style",
    `line-height: ${Ik}px; display: inline-block; word-break: break-word;`
  ), t;
}, Ha = (e, t = !1, n = "", r = []) => {
  const a = `${t ? " " : ""}${n}`;
  if (!r.length)
    return [document.createTextNode(`${e.trim()}${a}`)];
  const l = [];
  return r.forEach((u, f) => {
    let d = e.slice(u.start, u.end);
    if (!d.length)
      return;
    if (f === r.length - 1 && n && (d = d.trimEnd()), !u.type) {
      l.push(document.createTextNode(d));
      return;
    }
    const h = document.createElement(u.type);
    Array.isArray(u.children) ? Ha(d, !1, "", u.children).forEach((m) => {
      h.appendChild(m);
    }) : h.appendChild(document.createTextNode(d)), Object.keys(u.props || {}).forEach((m) => {
      m !== "children" && h.setAttribute(m, u.props[m]);
    }), l.push(h);
  }), a && l.push(document.createTextNode(a)), l;
}, Ok = (e, t) => {
  const n = Math.floor(e.length * t);
  return e.slice(0, n);
};
function Pk(e, t = []) {
  let n = "";
  return e.forEach((r) => {
    var d;
    const i = typeof r == "string", a = typeof ((d = r == null ? void 0 : r.props) == null ? void 0 : d.children) == "string", l = i || a ? null : [], u = n.length;
    i ? n += r : a ? n += r.props.children : n += Pk(
      r.props.children.constructor === Object ? [r.props.children] : r.props.children,
      l
    );
    const f = n.length;
    t.push({
      type: i ? null : r.type,
      props: r == null ? void 0 : r.props,
      start: u,
      end: f,
      children: l
    });
  }), n;
}
const hU = (e, t, { lines: n, whiteSpace: r, ellipsis: i }) => {
  const a = Ik * Number(n), l = Nk(t), u = [], f = typeof e == "string" ? e : Pk(e, u);
  let d = f, h = 1;
  t.append(l);
  const m = Ha(f, !1, "", u);
  for (let x = 0; x < m.length; x++)
    l.appendChild(m[x]);
  let v = l.scrollHeight;
  if (a >= v)
    return l.parentNode.removeChild(l), [Ha(d, !1, "", u), f];
  for (; v > a; ) {
    h -= dU, d = Ok(f, h);
    const x = Ha(d, r, i, u);
    l.innerHTML = "";
    for (let A = 0; A < x.length; A++)
      l.appendChild(x[A]);
    v = l.scrollHeight;
  }
  return l.parentNode.removeChild(l), [Ha(d, r, i, u), f];
};
var pU = {
  cropText: Ok,
  truncateLines: hU,
  constructChildren: Ha,
  createCopyElement: Nk
};
function mU() {
  const [e, t] = y.useState({
    width: void 0,
    height: void 0
  });
  return y.useLayoutEffect(() => {
    function n() {
      t({
        width: global.innerWidth,
        height: global.innerHeight
      });
    }
    return global.addEventListener("resize", n), n(), () => global.removeEventListener("resize", n);
  }, []), e;
}
const vU = 1, gU = "...", yU = "div";
function p0({
  children: e,
  lines: t,
  ellipsis: n,
  elementType: r,
  className: i,
  whiteSpace: a,
  onTruncate: l
}) {
  const u = y.useRef(), {
    width: f
  } = mU();
  return y.useLayoutEffect(() => {
    if (u.current) {
      const [d, h] = pU.truncateLines(e, u.current, {
        ellipsis: n,
        whiteSpace: a,
        lines: t
      });
      u.current.setAttribute("title", h), u.current.setAttribute("aria-label", h), u.current.innerHTML = "", d.forEach((m) => {
        u.current.appendChild(m);
      }), l && l(d);
    }
  }, [e, n, t, l, a, f]), /* @__PURE__ */ _.createElement(r, {
    ref: u,
    className: i
  });
}
p0.propTypes = {
  /** The expected text to which the ellipsis would be applied. */
  children: g.string.isRequired,
  /** The number of lines the text to be truncated to. */
  lines: g.oneOfType([g.string, g.number]),
  /** Text content for the ellipsis - will appear after the truncated lines. */
  ellipsis: g.oneOfType([g.string, g.number, g.node]),
  /** Adds the whitespace from before the ellipsis. */
  whiteSpace: g.bool,
  /** Custom html element for truncated text. */
  elementType: g.string,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Callback fired when a text truncating */
  onTruncate: g.func
};
p0.defaultProps = {
  lines: vU,
  ellipsis: gU,
  whiteSpace: !1,
  elementType: yU,
  className: void 0,
  onTruncate: void 0
};
function Dk() {
  return y.useEffect(() => {
    console.log("Please use Truncate.Deprecated until a replacement is created");
  }, []), null;
}
Dk.Deprecated = p0;
const EU = ({
  title: e,
  subtitle: t,
  onTitleChange: n
}) => {
  const [r, i] = y.useState(!1), [a, l] = y.useState(e), u = () => {
    i(!0), l(e);
  }, f = () => {
    n && a.trim() && n(a.trim()), i(!1);
  }, d = () => {
    l(e), i(!1);
  }, h = (m) => {
    m.key === "Enter" ? f() : m.key === "Escape" && d();
  };
  return r ? /* @__PURE__ */ V.jsx("div", { className: "d-flex flex-row align-items-center mt-1", children: /* @__PURE__ */ V.jsx(
    "input",
    {
      type: "text",
      className: "form-control",
      value: a,
      onChange: (m) => l(m.target.value),
      onKeyDown: h,
      onBlur: f,
      autoFocus: !0
    }
  ) }) : /* @__PURE__ */ V.jsxs("div", { className: "d-flex flex-row align-items-center mt-1", children: [
    /* @__PURE__ */ V.jsx(Dk.Deprecated, { children: e }),
    t && /* @__PURE__ */ V.jsx("span", { className: "ml-2 text-gray-500", children: t }),
    n && /* @__PURE__ */ V.jsx(
      ys,
      {
        src: g5,
        iconAs: It,
        alt: "Edit title",
        onClick: u,
        size: "sm",
        className: "mx-2"
      }
    )
  ] });
}, xU = ({
  title: e,
  subtitle: t,
  onClose: n,
  onTitleChange: r
}) => /* @__PURE__ */ V.jsx(bi.Header, { className: "shadow-sm zindex-10", children: /* @__PURE__ */ V.jsxs("div", { className: "d-flex flex-row justify-content-between", children: [
  /* @__PURE__ */ V.jsx("h2", { className: "h3 col pl-0", children: /* @__PURE__ */ V.jsx(
    EU,
    {
      title: e,
      subtitle: t,
      onTitleChange: r
    }
  ) }),
  /* @__PURE__ */ V.jsx(
    ys,
    {
      src: Zg,
      iconAs: It,
      onClick: n,
      alt: "Close"
    }
  )
] }) }), wU = ({
  viewMode: e,
  onSave: t,
  onCancel: n,
  saveDisabled: r = !1,
  onSavePair: i,
  onBackToList: a,
  savePairDisabled: l = !1
}) => /* @__PURE__ */ V.jsx(bi.Footer, { className: "shadow-sm", children: /* @__PURE__ */ V.jsx(ls, { children: e === "list" ? /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  /* @__PURE__ */ V.jsx(Gr, { variant: "tertiary", onClick: n, children: "Cancel" }),
  /* @__PURE__ */ V.jsx(Gr, { onClick: t, disabled: r, children: "Save Changes" })
] }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  /* @__PURE__ */ V.jsx(Gr, { variant: "tertiary", onClick: a, children: "Back to List" }),
  /* @__PURE__ */ V.jsx(Gr, { onClick: i, disabled: l, children: "Save Pair" })
] }) }) }), CU = ({
  mainContent: e,
  sidebar: t
}) => /* @__PURE__ */ V.jsxs("div", { className: "editProblemView d-flex flex-row flex-nowrap justify-content-end", children: [
  /* @__PURE__ */ V.jsx("span", { className: "flex-grow-1 mb-5", children: e }),
  /* @__PURE__ */ V.jsx("span", { className: "editProblemView-settingsColumn", children: t })
] });
function _U() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return y.useMemo(
    () => (r) => {
      t.forEach((i) => i(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const bd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function xs(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function m0(e) {
  return "nodeType" in e;
}
function gn(e) {
  var t, n;
  return e ? xs(e) ? e : m0(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function v0(e) {
  const {
    Document: t
  } = gn(e);
  return e instanceof t;
}
function iu(e) {
  return xs(e) ? !1 : e instanceof gn(e).HTMLElement;
}
function Fk(e) {
  return e instanceof gn(e).SVGElement;
}
function ws(e) {
  return e ? xs(e) ? e.document : m0(e) ? v0(e) ? e : iu(e) || Fk(e) ? e.ownerDocument : document : document : document;
}
const Or = bd ? y.useLayoutEffect : y.useEffect;
function kd(e) {
  const t = y.useRef(e);
  return Or(() => {
    t.current = e;
  }), y.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function SU() {
  const e = y.useRef(null), t = y.useCallback((r, i) => {
    e.current = setInterval(r, i);
  }, []), n = y.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function zl(e, t) {
  t === void 0 && (t = [e]);
  const n = y.useRef(e);
  return Or(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function ou(e, t) {
  const n = y.useRef();
  return y.useMemo(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Rf(e) {
  const t = kd(e), n = y.useRef(null), r = y.useCallback(
    (i) => {
      i !== n.current && (t == null || t(i, n.current)), n.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function If(e) {
  const t = y.useRef();
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let Fp = {};
function au(e, t) {
  return y.useMemo(() => {
    if (t)
      return t;
    const n = Fp[e] == null ? 0 : Fp[e] + 1;
    return Fp[e] = n, e + "-" + n;
  }, [e, t]);
}
function Mk(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return r.reduce((a, l) => {
      const u = Object.entries(l);
      for (const [f, d] of u) {
        const h = a[f];
        h != null && (a[f] = h + e * d);
      }
      return a;
    }, {
      ...t
    });
  };
}
const Ka = /* @__PURE__ */ Mk(1), Wl = /* @__PURE__ */ Mk(-1);
function bU(e) {
  return "clientX" in e && "clientY" in e;
}
function Ad(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = gn(e.target);
  return t && e instanceof t;
}
function kU(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = gn(e.target);
  return t && e instanceof t;
}
function Nf(e) {
  if (kU(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return bU(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const ao = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [ao.Translate.toString(e), ao.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Ow = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function AU(e) {
  return e.matches(Ow) ? e : e.querySelector(Ow);
}
const TU = {
  display: "none"
};
function RU(e) {
  let {
    id: t,
    value: n
  } = e;
  return _.createElement("div", {
    id: t,
    style: TU
  }, n);
}
function IU(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const i = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return _.createElement("div", {
    id: t,
    style: i,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function NU() {
  const [e, t] = y.useState("");
  return {
    announce: y.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Lk = /* @__PURE__ */ y.createContext(null);
function OU(e) {
  const t = y.useContext(Lk);
  y.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function PU() {
  const [e] = y.useState(() => /* @__PURE__ */ new Set()), t = y.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [y.useCallback((r) => {
    let {
      type: i,
      event: a
    } = r;
    e.forEach((l) => {
      var u;
      return (u = l[i]) == null ? void 0 : u.call(l, a);
    });
  }, [e]), t];
}
const DU = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, FU = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function MU(e) {
  let {
    announcements: t = FU,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = DU
  } = e;
  const {
    announce: a,
    announcement: l
  } = NU(), u = au("DndLiveRegion"), [f, d] = y.useState(!1);
  if (y.useEffect(() => {
    d(!0);
  }, []), OU(y.useMemo(() => ({
    onDragStart(m) {
      let {
        active: v
      } = m;
      a(t.onDragStart({
        active: v
      }));
    },
    onDragMove(m) {
      let {
        active: v,
        over: x
      } = m;
      t.onDragMove && a(t.onDragMove({
        active: v,
        over: x
      }));
    },
    onDragOver(m) {
      let {
        active: v,
        over: x
      } = m;
      a(t.onDragOver({
        active: v,
        over: x
      }));
    },
    onDragEnd(m) {
      let {
        active: v,
        over: x
      } = m;
      a(t.onDragEnd({
        active: v,
        over: x
      }));
    },
    onDragCancel(m) {
      let {
        active: v,
        over: x
      } = m;
      a(t.onDragCancel({
        active: v,
        over: x
      }));
    }
  }), [a, t])), !f)
    return null;
  const h = _.createElement(_.Fragment, null, _.createElement(RU, {
    id: r,
    value: i.draggable
  }), _.createElement(IU, {
    id: u,
    announcement: l
  }));
  return n ? Gi.createPortal(h, n) : h;
}
var At;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(At || (At = {}));
function Of() {
}
function Pw(e, t) {
  return y.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function LU() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return y.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Pr = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function BU(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function HU(e, t) {
  const n = Nf(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function VU(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function UU(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Dw(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: i
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + i,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + i,
    y: n + r
  }];
}
function Bk(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const $U = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const i = Dw(t), a = [];
  for (const l of r) {
    const {
      id: u
    } = l, f = n.get(u);
    if (f) {
      const d = Dw(f), h = i.reduce((v, x, A) => v + BU(d[A], x), 0), m = Number((h / 4).toFixed(4));
      a.push({
        id: u,
        data: {
          droppableContainer: l,
          value: m
        }
      });
    }
  }
  return a.sort(VU);
};
function zU(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), l = i - r, u = a - n;
  if (r < i && n < a) {
    const f = t.width * t.height, d = e.width * e.height, h = l * u, m = h / (f + d - h);
    return Number(m.toFixed(4));
  }
  return 0;
}
const WU = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const i = [];
  for (const a of r) {
    const {
      id: l
    } = a, u = n.get(l);
    if (u) {
      const f = zU(u, t);
      f > 0 && i.push({
        id: l,
        data: {
          droppableContainer: a,
          value: f
        }
      });
    }
  }
  return i.sort(UU);
};
function jU(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Hk(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Pr;
}
function GU(e) {
  return function(n) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return i.reduce((l, u) => ({
      ...l,
      top: l.top + e * u.y,
      bottom: l.bottom + e * u.y,
      left: l.left + e * u.x,
      right: l.right + e * u.x
    }), {
      ...n
    });
  };
}
const XU = /* @__PURE__ */ GU(1);
function Vk(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function qU(e, t, n) {
  const r = Vk(t);
  if (!r)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: l,
    y: u
  } = r, f = e.left - l - (1 - i) * parseFloat(n), d = e.top - u - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), h = i ? e.width / i : e.width, m = a ? e.height / a : e.height;
  return {
    width: h,
    height: m,
    top: d,
    right: f + h,
    bottom: d + m,
    left: f
  };
}
const KU = {
  ignoreTransform: !1
};
function Cs(e, t) {
  t === void 0 && (t = KU);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: h
    } = gn(e).getComputedStyle(e);
    d && (n = qU(n, d, h));
  }
  const {
    top: r,
    left: i,
    width: a,
    height: l,
    bottom: u,
    right: f
  } = n;
  return {
    top: r,
    left: i,
    width: a,
    height: l,
    bottom: u,
    right: f
  };
}
function Fw(e) {
  return Cs(e, {
    ignoreTransform: !0
  });
}
function YU(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function QU(e, t) {
  return t === void 0 && (t = gn(e).getComputedStyle(e)), t.position === "fixed";
}
function ZU(e, t) {
  t === void 0 && (t = gn(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function Td(e, t) {
  const n = [];
  function r(i) {
    if (t != null && n.length >= t || !i)
      return n;
    if (v0(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return n.push(i.scrollingElement), n;
    if (!iu(i) || Fk(i) || n.includes(i))
      return n;
    const a = gn(e).getComputedStyle(i);
    return i !== e && ZU(i, a) && n.push(i), QU(i, a) ? n : r(i.parentNode);
  }
  return e ? r(e) : n;
}
function Uk(e) {
  const [t] = Td(e, 1);
  return t ?? null;
}
function Mp(e) {
  return !bd || !e ? null : xs(e) ? e : m0(e) ? v0(e) || e === ws(e).scrollingElement ? window : iu(e) ? e : null : null;
}
function $k(e) {
  return xs(e) ? e.scrollX : e.scrollLeft;
}
function zk(e) {
  return xs(e) ? e.scrollY : e.scrollTop;
}
function iv(e) {
  return {
    x: $k(e),
    y: zk(e)
  };
}
var Dt;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Dt || (Dt = {}));
function Wk(e) {
  return !bd || !e ? !1 : e === document.scrollingElement;
}
function jk(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Wk(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, i = e.scrollTop <= t.y, a = e.scrollLeft <= t.x, l = e.scrollTop >= r.y, u = e.scrollLeft >= r.x;
  return {
    isTop: i,
    isLeft: a,
    isBottom: l,
    isRight: u,
    maxScroll: r,
    minScroll: t
  };
}
const JU = {
  x: 0.2,
  y: 0.2
};
function e8(e, t, n, r, i) {
  let {
    top: a,
    left: l,
    right: u,
    bottom: f
  } = n;
  r === void 0 && (r = 10), i === void 0 && (i = JU);
  const {
    isTop: d,
    isBottom: h,
    isLeft: m,
    isRight: v
  } = jk(e), x = {
    x: 0,
    y: 0
  }, A = {
    x: 0,
    y: 0
  }, S = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !d && a <= t.top + S.height ? (x.y = Dt.Backward, A.y = r * Math.abs((t.top + S.height - a) / S.height)) : !h && f >= t.bottom - S.height && (x.y = Dt.Forward, A.y = r * Math.abs((t.bottom - S.height - f) / S.height)), !v && u >= t.right - S.width ? (x.x = Dt.Forward, A.x = r * Math.abs((t.right - S.width - u) / S.width)) : !m && l <= t.left + S.width && (x.x = Dt.Backward, A.x = r * Math.abs((t.left + S.width - l) / S.width)), {
    direction: x,
    speed: A
  };
}
function t8(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: a,
      innerHeight: l
    } = window;
    return {
      top: 0,
      left: 0,
      right: a,
      bottom: l,
      width: a,
      height: l
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: i
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Gk(e) {
  return e.reduce((t, n) => Ka(t, iv(n)), Pr);
}
function n8(e) {
  return e.reduce((t, n) => t + $k(n), 0);
}
function r8(e) {
  return e.reduce((t, n) => t + zk(n), 0);
}
function Xk(e, t) {
  if (t === void 0 && (t = Cs), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: i,
    right: a
  } = t(e);
  Uk(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const i8 = [["x", ["left", "right"], n8], ["y", ["top", "bottom"], r8]];
class g0 {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Td(n), i = Gk(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, l, u] of i8)
      for (const f of l)
        Object.defineProperty(this, f, {
          get: () => {
            const d = u(r), h = i[a] - d;
            return this.rect[f] + h;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class vl {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var i;
    (i = this.target) == null || i.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function o8(e) {
  const {
    EventTarget: t
  } = gn(e);
  return e instanceof t ? e : ws(e);
}
function Lp(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var ar;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ar || (ar = {}));
function Mw(e) {
  e.preventDefault();
}
function a8(e) {
  e.stopPropagation();
}
var Pe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Pe || (Pe = {}));
const qk = {
  start: [Pe.Space, Pe.Enter],
  cancel: [Pe.Esc],
  end: [Pe.Space, Pe.Enter, Pe.Tab]
}, s8 = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Pe.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Pe.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Pe.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Pe.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class y0 {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new vl(ws(n)), this.windowListeners = new vl(gn(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ar.Resize, this.handleCancel), this.windowListeners.add(ar.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ar.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Xk(r), n(Pr);
  }
  handleKeyDown(t) {
    if (Ad(t)) {
      const {
        active: n,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: a = qk,
        coordinateGetter: l = s8,
        scrollBehavior: u = "smooth"
      } = i, {
        code: f
      } = t;
      if (a.end.includes(f)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(f)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: d
      } = r.current, h = d ? {
        x: d.left,
        y: d.top
      } : Pr;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const m = l(t, {
        active: n,
        context: r.current,
        currentCoordinates: h
      });
      if (m) {
        const v = Wl(m, h), x = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: A
        } = r.current;
        for (const S of A) {
          const R = t.code, {
            isTop: w,
            isRight: C,
            isLeft: k,
            isBottom: I,
            maxScroll: O,
            minScroll: D
          } = jk(S), F = t8(S), B = {
            x: Math.min(R === Pe.Right ? F.right - F.width / 2 : F.right, Math.max(R === Pe.Right ? F.left : F.left + F.width / 2, m.x)),
            y: Math.min(R === Pe.Down ? F.bottom - F.height / 2 : F.bottom, Math.max(R === Pe.Down ? F.top : F.top + F.height / 2, m.y))
          }, $ = R === Pe.Right && !C || R === Pe.Left && !k, j = R === Pe.Down && !I || R === Pe.Up && !w;
          if ($ && B.x !== m.x) {
            const Q = S.scrollLeft + v.x, ne = R === Pe.Right && Q <= O.x || R === Pe.Left && Q >= D.x;
            if (ne && !v.y) {
              S.scrollTo({
                left: Q,
                behavior: u
              });
              return;
            }
            ne ? x.x = S.scrollLeft - Q : x.x = R === Pe.Right ? S.scrollLeft - O.x : S.scrollLeft - D.x, x.x && S.scrollBy({
              left: -x.x,
              behavior: u
            });
            break;
          } else if (j && B.y !== m.y) {
            const Q = S.scrollTop + v.y, ne = R === Pe.Down && Q <= O.y || R === Pe.Up && Q >= D.y;
            if (ne && !v.x) {
              S.scrollTo({
                top: Q,
                behavior: u
              });
              return;
            }
            ne ? x.y = S.scrollTop - Q : x.y = R === Pe.Down ? S.scrollTop - O.y : S.scrollTop - D.y, x.y && S.scrollBy({
              top: -x.y,
              behavior: u
            });
            break;
          }
        }
        this.handleMove(t, Ka(Wl(m, this.referenceCoordinates), x));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
y0.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = qk,
      onActivation: i
    } = t, {
      active: a
    } = n;
    const {
      code: l
    } = e.nativeEvent;
    if (r.start.includes(l)) {
      const u = a.activatorNode.current;
      return u && e.target !== u ? !1 : (e.preventDefault(), i == null || i({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Lw(e) {
  return !!(e && "distance" in e);
}
function Bw(e) {
  return !!(e && "delay" in e);
}
class E0 {
  constructor(t, n, r) {
    var i;
    r === void 0 && (r = o8(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: l
    } = a;
    this.props = t, this.events = n, this.document = ws(l), this.documentListeners = new vl(this.document), this.listeners = new vl(r), this.windowListeners = new vl(gn(l)), this.initialCoordinates = (i = Nf(a)) != null ? i : Pr, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(ar.Resize, this.handleCancel), this.windowListeners.add(ar.DragStart, Mw), this.windowListeners.add(ar.VisibilityChange, this.handleCancel), this.windowListeners.add(ar.ContextMenu, Mw), this.documentListeners.add(ar.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Bw(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Lw(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: i
    } = this.props;
    i(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(ar.Click, a8, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ar.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: i,
      props: a
    } = this, {
      onMove: l,
      options: {
        activationConstraint: u
      }
    } = a;
    if (!i)
      return;
    const f = (n = Nf(t)) != null ? n : Pr, d = Wl(i, f);
    if (!r && u) {
      if (Lw(u)) {
        if (u.tolerance != null && Lp(d, u.tolerance))
          return this.handleCancel();
        if (Lp(d, u.distance))
          return this.handleStart();
      }
      if (Bw(u) && Lp(d, u.tolerance))
        return this.handleCancel();
      this.handlePending(u, d);
      return;
    }
    t.cancelable && t.preventDefault(), l(f);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === Pe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const l8 = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class x0 extends E0 {
  constructor(t) {
    const {
      event: n
    } = t, r = ws(n.target);
    super(t, l8, r);
  }
}
x0.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const u8 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ov;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ov || (ov = {}));
class c8 extends E0 {
  constructor(t) {
    super(t, u8, ws(t.event.target));
  }
}
c8.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ov.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Bp = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class f8 extends E0 {
  constructor(t) {
    super(t, Bp);
  }
  static setup() {
    return window.addEventListener(Bp.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Bp.move.name, t);
    };
    function t() {
    }
  }
}
f8.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: i
    } = n;
    return i.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var gl;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(gl || (gl = {}));
var Pf;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Pf || (Pf = {}));
function d8(e) {
  let {
    acceleration: t,
    activator: n = gl.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: a,
    interval: l = 5,
    order: u = Pf.TreeOrder,
    pointerCoordinates: f,
    scrollableAncestors: d,
    scrollableAncestorRects: h,
    delta: m,
    threshold: v
  } = e;
  const x = p8({
    delta: m,
    disabled: !a
  }), [A, S] = SU(), R = y.useRef({
    x: 0,
    y: 0
  }), w = y.useRef({
    x: 0,
    y: 0
  }), C = y.useMemo(() => {
    switch (n) {
      case gl.Pointer:
        return f ? {
          top: f.y,
          bottom: f.y,
          left: f.x,
          right: f.x
        } : null;
      case gl.DraggableRect:
        return i;
    }
  }, [n, i, f]), k = y.useRef(null), I = y.useCallback(() => {
    const D = k.current;
    if (!D)
      return;
    const F = R.current.x * w.current.x, B = R.current.y * w.current.y;
    D.scrollBy(F, B);
  }, []), O = y.useMemo(() => u === Pf.TreeOrder ? [...d].reverse() : d, [u, d]);
  y.useEffect(
    () => {
      if (!a || !d.length || !C) {
        S();
        return;
      }
      for (const D of O) {
        if ((r == null ? void 0 : r(D)) === !1)
          continue;
        const F = d.indexOf(D), B = h[F];
        if (!B)
          continue;
        const {
          direction: $,
          speed: j
        } = e8(D, B, C, t, v);
        for (const Q of ["x", "y"])
          x[Q][$[Q]] || (j[Q] = 0, $[Q] = 0);
        if (j.x > 0 || j.y > 0) {
          S(), k.current = D, A(I, l), R.current = j, w.current = $;
          return;
        }
      }
      R.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, S();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      I,
      r,
      S,
      a,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(C),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      A,
      d,
      O,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const h8 = {
  x: {
    [Dt.Backward]: !1,
    [Dt.Forward]: !1
  },
  y: {
    [Dt.Backward]: !1,
    [Dt.Forward]: !1
  }
};
function p8(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = If(t);
  return ou((i) => {
    if (n || !r || !i)
      return h8;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Dt.Backward]: i.x[Dt.Backward] || a.x === -1,
        [Dt.Forward]: i.x[Dt.Forward] || a.x === 1
      },
      y: {
        [Dt.Backward]: i.y[Dt.Backward] || a.y === -1,
        [Dt.Forward]: i.y[Dt.Forward] || a.y === 1
      }
    };
  }, [n, t, r]);
}
function m8(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return ou((i) => {
    var a;
    return t == null ? null : (a = r ?? i) != null ? a : null;
  }, [r, t]);
}
function v8(e, t) {
  return y.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: i
    } = r, a = i.activators.map((l) => ({
      eventName: l.eventName,
      handler: t(l.handler, r)
    }));
    return [...n, ...a];
  }, []), [e, t]);
}
var jl;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(jl || (jl = {}));
var av;
(function(e) {
  e.Optimized = "optimized";
})(av || (av = {}));
const Hw = /* @__PURE__ */ new Map();
function g8(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: i
  } = t;
  const [a, l] = y.useState(null), {
    frequency: u,
    measure: f,
    strategy: d
  } = i, h = y.useRef(e), m = R(), v = zl(m), x = y.useCallback(function(w) {
    w === void 0 && (w = []), !v.current && l((C) => C === null ? w : C.concat(w.filter((k) => !C.includes(k))));
  }, [v]), A = y.useRef(null), S = ou((w) => {
    if (m && !n)
      return Hw;
    if (!w || w === Hw || h.current !== e || a != null) {
      const C = /* @__PURE__ */ new Map();
      for (let k of e) {
        if (!k)
          continue;
        if (a && a.length > 0 && !a.includes(k.id) && k.rect.current) {
          C.set(k.id, k.rect.current);
          continue;
        }
        const I = k.node.current, O = I ? new g0(f(I), I) : null;
        k.rect.current = O, O && C.set(k.id, O);
      }
      return C;
    }
    return w;
  }, [e, a, n, m, f]);
  return y.useEffect(() => {
    h.current = e;
  }, [e]), y.useEffect(
    () => {
      m || x();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, m]
  ), y.useEffect(
    () => {
      a && a.length > 0 && l(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), y.useEffect(
    () => {
      m || typeof u != "number" || A.current !== null || (A.current = setTimeout(() => {
        x(), A.current = null;
      }, u));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, m, x, ...r]
  ), {
    droppableRects: S,
    measureDroppableContainers: x,
    measuringScheduled: a != null
  };
  function R() {
    switch (d) {
      case jl.Always:
        return !1;
      case jl.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function w0(e, t) {
  return ou((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function y8(e, t) {
  return w0(e, t);
}
function E8(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = kd(t), i = y.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, n]);
  return y.useEffect(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function Rd(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = kd(t), i = y.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return y.useEffect(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function x8(e) {
  return new g0(Cs(e), e);
}
function Vw(e, t, n) {
  t === void 0 && (t = x8);
  const [r, i] = y.useState(null);
  function a() {
    i((f) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var d;
        return (d = f ?? n) != null ? d : null;
      }
      const h = t(e);
      return JSON.stringify(f) === JSON.stringify(h) ? f : h;
    });
  }
  const l = E8({
    callback(f) {
      if (e)
        for (const d of f) {
          const {
            type: h,
            target: m
          } = d;
          if (h === "childList" && m instanceof HTMLElement && m.contains(e)) {
            a();
            break;
          }
        }
    }
  }), u = Rd({
    callback: a
  });
  return Or(() => {
    a(), e ? (u == null || u.observe(e), l == null || l.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (u == null || u.disconnect(), l == null || l.disconnect());
  }, [e]), r;
}
function w8(e) {
  const t = w0(e);
  return Hk(e, t);
}
const Uw = [];
function C8(e) {
  const t = y.useRef(e), n = ou((r) => e ? r && r !== Uw && e && t.current && e.parentNode === t.current.parentNode ? r : Td(e) : Uw, [e]);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function _8(e) {
  const [t, n] = y.useState(null), r = y.useRef(e), i = y.useCallback((a) => {
    const l = Mp(a.target);
    l && n((u) => u ? (u.set(l, iv(l)), new Map(u)) : null);
  }, []);
  return y.useEffect(() => {
    const a = r.current;
    if (e !== a) {
      l(a);
      const u = e.map((f) => {
        const d = Mp(f);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, iv(d)]) : null;
      }).filter((f) => f != null);
      n(u.length ? new Map(u) : null), r.current = e;
    }
    return () => {
      l(e), l(a);
    };
    function l(u) {
      u.forEach((f) => {
        const d = Mp(f);
        d == null || d.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), y.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((a, l) => Ka(a, l), Pr) : Gk(e) : Pr, [e, t]);
}
function $w(e, t) {
  t === void 0 && (t = []);
  const n = y.useRef(null);
  return y.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), y.useEffect(() => {
    const r = e !== Pr;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Wl(e, n.current) : Pr;
}
function S8(e) {
  y.useEffect(
    () => {
      if (!bd)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function b8(e, t) {
  return y.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: i,
      handler: a
    } = r;
    return n[i] = (l) => {
      a(l, t);
    }, n;
  }, {}), [e, t]);
}
function Kk(e) {
  return y.useMemo(() => e ? YU(e) : null, [e]);
}
const zw = [];
function k8(e, t) {
  t === void 0 && (t = Cs);
  const [n] = e, r = Kk(n ? gn(n) : null), [i, a] = y.useState(zw);
  function l() {
    a(() => e.length ? e.map((f) => Wk(f) ? r : new g0(t(f), f)) : zw);
  }
  const u = Rd({
    callback: l
  });
  return Or(() => {
    u == null || u.disconnect(), l(), e.forEach((f) => u == null ? void 0 : u.observe(f));
  }, [e]), i;
}
function Yk(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return iu(t) ? t : e;
}
function A8(e) {
  let {
    measure: t
  } = e;
  const [n, r] = y.useState(null), i = y.useCallback((d) => {
    for (const {
      target: h
    } of d)
      if (iu(h)) {
        r((m) => {
          const v = t(h);
          return m ? {
            ...m,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), a = Rd({
    callback: i
  }), l = y.useCallback((d) => {
    const h = Yk(d);
    a == null || a.disconnect(), h && (a == null || a.observe(h)), r(h ? t(h) : null);
  }, [t, a]), [u, f] = Rf(l);
  return y.useMemo(() => ({
    nodeRef: u,
    rect: n,
    setRef: f
  }), [n, u, f]);
}
const T8 = [{
  sensor: x0,
  options: {}
}, {
  sensor: y0,
  options: {}
}], R8 = {
  current: {}
}, Gc = {
  draggable: {
    measure: Fw
  },
  droppable: {
    measure: Fw,
    strategy: jl.WhileDragging,
    frequency: av.Optimized
  },
  dragOverlay: {
    measure: Cs
  }
};
class yl extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const I8 = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new yl(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Of
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Gc,
  measureDroppableContainers: Of,
  windowRect: null,
  measuringScheduled: !1
}, Qk = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Of,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Of
}, su = /* @__PURE__ */ y.createContext(Qk), Zk = /* @__PURE__ */ y.createContext(I8);
function N8() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new yl()
    }
  };
}
function O8(e, t) {
  switch (t.type) {
    case At.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case At.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case At.DragEnd:
    case At.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case At.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, i = new yl(e.droppable.containers);
      return i.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case At.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: i
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const l = new yl(e.droppable.containers);
      return l.set(n, {
        ...a,
        disabled: i
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case At.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const a = new yl(e.droppable.containers);
      return a.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    default:
      return e;
  }
}
function P8(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: i
  } = y.useContext(su), a = If(r), l = If(n == null ? void 0 : n.id);
  return y.useEffect(() => {
    if (!t && !r && a && l != null) {
      if (!Ad(a) || document.activeElement === a.target)
        return;
      const u = i.get(l);
      if (!u)
        return;
      const {
        activatorNode: f,
        node: d
      } = u;
      if (!f.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const h of [f.current, d.current]) {
          if (!h)
            continue;
          const m = AU(h);
          if (m) {
            m.focus();
            break;
          }
        }
      });
    }
  }, [r, t, i, l, a]), null;
}
function Jk(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...r
  }), n) : n;
}
function D8(e) {
  return y.useMemo(
    () => ({
      draggable: {
        ...Gc.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Gc.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Gc.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function F8(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: i = !0
  } = e;
  const a = y.useRef(!1), {
    x: l,
    y: u
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  Or(() => {
    if (!l && !u || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const h = n(d), m = Hk(h, r);
    if (l || (m.x = 0), u || (m.y = 0), a.current = !0, Math.abs(m.x) > 0 || Math.abs(m.y) > 0) {
      const v = Uk(d);
      v && v.scrollBy({
        top: m.y,
        left: m.x
      });
    }
  }, [t, l, u, r, n]);
}
const Id = /* @__PURE__ */ y.createContext({
  ...Pr,
  scaleX: 1,
  scaleY: 1
});
var Vi;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Vi || (Vi = {}));
const M8 = /* @__PURE__ */ y.memo(function(t) {
  var n, r, i, a;
  let {
    id: l,
    accessibility: u,
    autoScroll: f = !0,
    children: d,
    sensors: h = T8,
    collisionDetection: m = WU,
    measuring: v,
    modifiers: x,
    ...A
  } = t;
  const S = y.useReducer(O8, void 0, N8), [R, w] = S, [C, k] = PU(), [I, O] = y.useState(Vi.Uninitialized), D = I === Vi.Initialized, {
    draggable: {
      active: F,
      nodes: B,
      translate: $
    },
    droppable: {
      containers: j
    }
  } = R, Q = F != null ? B.get(F) : null, ne = y.useRef({
    initial: null,
    translated: null
  }), ae = y.useMemo(() => {
    var Ct;
    return F != null ? {
      id: F,
      // It's possible for the active node to unmount while dragging
      data: (Ct = Q == null ? void 0 : Q.data) != null ? Ct : R8,
      rect: ne
    } : null;
  }, [F, Q]), ve = y.useRef(null), [Re, Ee] = y.useState(null), [ce, G] = y.useState(null), X = zl(A, Object.values(A)), Y = au("DndDescribedBy", l), re = y.useMemo(() => j.getEnabled(), [j]), te = D8(v), {
    droppableRects: Ze,
    measureDroppableContainers: Ue,
    measuringScheduled: He
  } = g8(re, {
    dragging: D,
    dependencies: [$.x, $.y],
    config: te.droppable
  }), Ie = m8(B, F), Et = y.useMemo(() => ce ? Nf(ce) : null, [ce]), Ke = cu(), ot = y8(Ie, te.draggable.measure);
  F8({
    activeNode: F != null ? B.get(F) : null,
    config: Ke.layoutShiftCompensation,
    initialRect: ot,
    measure: te.draggable.measure
  });
  const Se = Vw(Ie, te.draggable.measure, ot), wt = Vw(Ie ? Ie.parentElement : null), ut = y.useRef({
    activatorEvent: null,
    active: null,
    activeNode: Ie,
    collisionRect: null,
    collisions: null,
    droppableRects: Ze,
    draggableNodes: B,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: j,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), zt = j.getNodeFor((n = ut.current.over) == null ? void 0 : n.id), Ge = A8({
    measure: te.dragOverlay.measure
  }), Nt = (r = Ge.nodeRef.current) != null ? r : Ie, Je = D ? (i = Ge.rect) != null ? i : Se : null, Ce = !!(Ge.nodeRef.current && Ge.rect), Xe = w8(Ce ? null : Se), $e = Kk(Nt ? gn(Nt) : null), Ae = C8(D ? zt ?? Ie : null), et = k8(Ae), tn = Jk(x, {
    transform: {
      x: $.x - Xe.x,
      y: $.y - Xe.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ce,
    active: ae,
    activeNodeRect: Se,
    containerNodeRect: wt,
    draggingNodeRect: Je,
    over: ut.current.over,
    overlayNodeRect: Ge.rect,
    scrollableAncestors: Ae,
    scrollableAncestorRects: et,
    windowRect: $e
  }), Nn = Et ? Ka(Et, $) : null, Mr = _8(Ae), Lr = $w(Mr), ea = $w(Mr, [Se]), nn = Ka(tn, Lr), Wt = Je ? XU(Je, tn) : null, ti = ae && Wt ? m({
    active: ae,
    collisionRect: Wt,
    droppableRects: Ze,
    droppableContainers: re,
    pointerCoordinates: Nn
  }) : null, ta = Bk(ti, "id"), [qn, na] = y.useState(null), _s = Ce ? tn : Ka(tn, ea), Ss = jU(_s, (a = qn == null ? void 0 : qn.rect) != null ? a : null, Se), ho = y.useRef(null), ra = y.useCallback(
    (Ct, rn) => {
      let {
        sensor: on,
        options: Br
      } = rn;
      if (ve.current == null)
        return;
      const yn = B.get(ve.current);
      if (!yn)
        return;
      const jt = Ct.nativeEvent, Kn = new on({
        active: ve.current,
        activeNode: yn,
        event: jt,
        options: Br,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ut,
        onAbort(_t) {
          if (!B.get(_t))
            return;
          const {
            onDragAbort: Qn
          } = X.current, On = {
            id: _t
          };
          Qn == null || Qn(On), C({
            type: "onDragAbort",
            event: On
          });
        },
        onPending(_t, Yn, Qn, On) {
          if (!B.get(_t))
            return;
          const {
            onDragPending: mo
          } = X.current, Hr = {
            id: _t,
            constraint: Yn,
            initialCoordinates: Qn,
            offset: On
          };
          mo == null || mo(Hr), C({
            type: "onDragPending",
            event: Hr
          });
        },
        onStart(_t) {
          const Yn = ve.current;
          if (Yn == null)
            return;
          const Qn = B.get(Yn);
          if (!Qn)
            return;
          const {
            onDragStart: On
          } = X.current, po = {
            activatorEvent: jt,
            active: {
              id: Yn,
              data: Qn.data,
              rect: ne
            }
          };
          Gi.unstable_batchedUpdates(() => {
            On == null || On(po), O(Vi.Initializing), w({
              type: At.DragStart,
              initialCoordinates: _t,
              active: Yn
            }), C({
              type: "onDragStart",
              event: po
            }), Ee(ho.current), G(jt);
          });
        },
        onMove(_t) {
          w({
            type: At.DragMove,
            coordinates: _t
          });
        },
        onEnd: ki(At.DragEnd),
        onCancel: ki(At.DragCancel)
      });
      ho.current = Kn;
      function ki(_t) {
        return async function() {
          const {
            active: Qn,
            collisions: On,
            over: po,
            scrollAdjustedTranslate: mo
          } = ut.current;
          let Hr = null;
          if (Qn && mo) {
            const {
              cancelDrop: vo
            } = X.current;
            Hr = {
              activatorEvent: jt,
              active: Qn,
              collisions: On,
              delta: mo,
              over: po
            }, _t === At.DragEnd && typeof vo == "function" && await Promise.resolve(vo(Hr)) && (_t = At.DragCancel);
          }
          ve.current = null, Gi.unstable_batchedUpdates(() => {
            w({
              type: _t
            }), O(Vi.Uninitialized), na(null), Ee(null), G(null), ho.current = null;
            const vo = _t === At.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Hr) {
              const ks = X.current[vo];
              ks == null || ks(Hr), C({
                type: vo,
                event: Hr
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [B]
  ), bs = y.useCallback((Ct, rn) => (on, Br) => {
    const yn = on.nativeEvent, jt = B.get(Br);
    if (
      // Another sensor is already instantiating
      ve.current !== null || // No active draggable
      !jt || // Event has already been captured
      yn.dndKit || yn.defaultPrevented
    )
      return;
    const Kn = {
      active: jt
    };
    Ct(on, rn.options, Kn) === !0 && (yn.dndKit = {
      capturedBy: rn.sensor
    }, ve.current = Br, ra(on, rn));
  }, [B, ra]), uu = v8(h, bs);
  S8(h), Or(() => {
    Se && I === Vi.Initializing && O(Vi.Initialized);
  }, [Se, I]), y.useEffect(
    () => {
      const {
        onDragMove: Ct
      } = X.current, {
        active: rn,
        activatorEvent: on,
        collisions: Br,
        over: yn
      } = ut.current;
      if (!rn || !on)
        return;
      const jt = {
        active: rn,
        activatorEvent: on,
        collisions: Br,
        delta: {
          x: nn.x,
          y: nn.y
        },
        over: yn
      };
      Gi.unstable_batchedUpdates(() => {
        Ct == null || Ct(jt), C({
          type: "onDragMove",
          event: jt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nn.x, nn.y]
  ), y.useEffect(
    () => {
      const {
        active: Ct,
        activatorEvent: rn,
        collisions: on,
        droppableContainers: Br,
        scrollAdjustedTranslate: yn
      } = ut.current;
      if (!Ct || ve.current == null || !rn || !yn)
        return;
      const {
        onDragOver: jt
      } = X.current, Kn = Br.get(ta), ki = Kn && Kn.rect.current ? {
        id: Kn.id,
        rect: Kn.rect.current,
        data: Kn.data,
        disabled: Kn.disabled
      } : null, _t = {
        active: Ct,
        activatorEvent: rn,
        collisions: on,
        delta: {
          x: yn.x,
          y: yn.y
        },
        over: ki
      };
      Gi.unstable_batchedUpdates(() => {
        na(ki), jt == null || jt(_t), C({
          type: "onDragOver",
          event: _t
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ta]
  ), Or(() => {
    ut.current = {
      activatorEvent: ce,
      active: ae,
      activeNode: Ie,
      collisionRect: Wt,
      collisions: ti,
      droppableRects: Ze,
      draggableNodes: B,
      draggingNode: Nt,
      draggingNodeRect: Je,
      droppableContainers: j,
      over: qn,
      scrollableAncestors: Ae,
      scrollAdjustedTranslate: nn
    }, ne.current = {
      initial: Je,
      translated: Wt
    };
  }, [ae, Ie, ti, Wt, B, Nt, Je, Ze, j, qn, Ae, nn]), d8({
    ...Ke,
    delta: $,
    draggingRect: Wt,
    pointerCoordinates: Nn,
    scrollableAncestors: Ae,
    scrollableAncestorRects: et
  });
  const Od = y.useMemo(() => ({
    active: ae,
    activeNode: Ie,
    activeNodeRect: Se,
    activatorEvent: ce,
    collisions: ti,
    containerNodeRect: wt,
    dragOverlay: Ge,
    draggableNodes: B,
    droppableContainers: j,
    droppableRects: Ze,
    over: qn,
    measureDroppableContainers: Ue,
    scrollableAncestors: Ae,
    scrollableAncestorRects: et,
    measuringConfiguration: te,
    measuringScheduled: He,
    windowRect: $e
  }), [ae, Ie, Se, ce, ti, wt, Ge, B, j, Ze, qn, Ue, Ae, et, te, He, $e]), Pd = y.useMemo(() => ({
    activatorEvent: ce,
    activators: uu,
    active: ae,
    activeNodeRect: Se,
    ariaDescribedById: {
      draggable: Y
    },
    dispatch: w,
    draggableNodes: B,
    over: qn,
    measureDroppableContainers: Ue
  }), [ce, uu, ae, Se, w, Y, B, qn, Ue]);
  return _.createElement(Lk.Provider, {
    value: k
  }, _.createElement(su.Provider, {
    value: Pd
  }, _.createElement(Zk.Provider, {
    value: Od
  }, _.createElement(Id.Provider, {
    value: Ss
  }, d)), _.createElement(P8, {
    disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), _.createElement(MU, {
    ...u,
    hiddenTextDescribedById: Y
  }));
  function cu() {
    const Ct = (Re == null ? void 0 : Re.autoScrollEnabled) === !1, rn = typeof f == "object" ? f.enabled === !1 : f === !1, on = D && !Ct && !rn;
    return typeof f == "object" ? {
      ...f,
      enabled: on
    } : {
      enabled: on
    };
  }
}), L8 = /* @__PURE__ */ y.createContext(null), Ww = "button", B8 = "Draggable";
function H8(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: i
  } = e;
  const a = au(B8), {
    activators: l,
    activatorEvent: u,
    active: f,
    activeNodeRect: d,
    ariaDescribedById: h,
    draggableNodes: m,
    over: v
  } = y.useContext(su), {
    role: x = Ww,
    roleDescription: A = "draggable",
    tabIndex: S = 0
  } = i ?? {}, R = (f == null ? void 0 : f.id) === t, w = y.useContext(R ? Id : L8), [C, k] = Rf(), [I, O] = Rf(), D = b8(l, t), F = zl(n);
  Or(
    () => (m.set(t, {
      id: t,
      key: a,
      node: C,
      activatorNode: I,
      data: F
    }), () => {
      const $ = m.get(t);
      $ && $.key === a && m.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, t]
  );
  const B = y.useMemo(() => ({
    role: x,
    tabIndex: S,
    "aria-disabled": r,
    "aria-pressed": R && x === Ww ? !0 : void 0,
    "aria-roledescription": A,
    "aria-describedby": h.draggable
  }), [r, x, S, R, A, h.draggable]);
  return {
    active: f,
    activatorEvent: u,
    activeNodeRect: d,
    attributes: B,
    isDragging: R,
    listeners: r ? void 0 : D,
    node: C,
    over: v,
    setNodeRef: k,
    setActivatorNodeRef: O,
    transform: w
  };
}
function eA() {
  return y.useContext(Zk);
}
const V8 = "Droppable", U8 = {
  timeout: 25
};
function $8(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: i
  } = e;
  const a = au(V8), {
    active: l,
    dispatch: u,
    over: f,
    measureDroppableContainers: d
  } = y.useContext(su), h = y.useRef({
    disabled: n
  }), m = y.useRef(!1), v = y.useRef(null), x = y.useRef(null), {
    disabled: A,
    updateMeasurementsFor: S,
    timeout: R
  } = {
    ...U8,
    ...i
  }, w = zl(S ?? r), C = y.useCallback(
    () => {
      if (!m.current) {
        m.current = !0;
        return;
      }
      x.current != null && clearTimeout(x.current), x.current = setTimeout(() => {
        d(Array.isArray(w.current) ? w.current : [w.current]), x.current = null;
      }, R);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), k = Rd({
    callback: C,
    disabled: A || !l
  }), I = y.useCallback((B, $) => {
    k && ($ && (k.unobserve($), m.current = !1), B && k.observe(B));
  }, [k]), [O, D] = Rf(I), F = zl(t);
  return y.useEffect(() => {
    !k || !O.current || (k.disconnect(), m.current = !1, k.observe(O.current));
  }, [O, k]), y.useEffect(
    () => (u({
      type: At.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: n,
        node: O,
        rect: v,
        data: F
      }
    }), () => u({
      type: At.UnregisterDroppable,
      key: a,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), y.useEffect(() => {
    n !== h.current.disabled && (u({
      type: At.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: n
    }), h.current.disabled = n);
  }, [r, a, n, u]), {
    active: l,
    rect: v,
    isOver: (f == null ? void 0 : f.id) === r,
    node: O,
    over: f,
    setNodeRef: D
  };
}
function z8(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, i] = y.useState(null), [a, l] = y.useState(null), u = If(n);
  return !n && !r && u && i(u), Or(() => {
    if (!a)
      return;
    const f = r == null ? void 0 : r.key, d = r == null ? void 0 : r.props.id;
    if (f == null || d == null) {
      i(null);
      return;
    }
    Promise.resolve(t(d, a)).then(() => {
      i(null);
    });
  }, [t, r, a]), _.createElement(_.Fragment, null, n, r ? y.cloneElement(r, {
    ref: l
  }) : null);
}
const W8 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function j8(e) {
  let {
    children: t
  } = e;
  return _.createElement(su.Provider, {
    value: Qk
  }, _.createElement(Id.Provider, {
    value: W8
  }, t));
}
const G8 = {
  position: "fixed",
  touchAction: "none"
}, X8 = (e) => Ad(e) ? "transform 250ms ease" : void 0, q8 = /* @__PURE__ */ y.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: i,
    children: a,
    className: l,
    rect: u,
    style: f,
    transform: d,
    transition: h = X8
  } = e;
  if (!u)
    return null;
  const m = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...G8,
    width: u.width,
    height: u.height,
    top: u.top,
    left: u.left,
    transform: ao.Transform.toString(m),
    transformOrigin: i && r ? HU(r, u) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...f
  };
  return _.createElement(n, {
    className: l,
    style: v,
    ref: t
  }, a);
}), K8 = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const i = {}, {
    styles: a,
    className: l
  } = e;
  if (a != null && a.active)
    for (const [u, f] of Object.entries(a.active))
      f !== void 0 && (i[u] = n.node.style.getPropertyValue(u), n.node.style.setProperty(u, f));
  if (a != null && a.dragOverlay)
    for (const [u, f] of Object.entries(a.dragOverlay))
      f !== void 0 && r.node.style.setProperty(u, f);
  return l != null && l.active && n.node.classList.add(l.active), l != null && l.dragOverlay && r.node.classList.add(l.dragOverlay), function() {
    for (const [f, d] of Object.entries(i))
      n.node.style.setProperty(f, d);
    l != null && l.active && n.node.classList.remove(l.active);
  };
}, Y8 = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: ao.Transform.toString(t)
  }, {
    transform: ao.Transform.toString(n)
  }];
}, Q8 = {
  duration: 250,
  easing: "ease",
  keyframes: Y8,
  sideEffects: /* @__PURE__ */ K8({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Z8(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: i
  } = e;
  return kd((a, l) => {
    if (t === null)
      return;
    const u = n.get(a);
    if (!u)
      return;
    const f = u.node.current;
    if (!f)
      return;
    const d = Yk(l);
    if (!d)
      return;
    const {
      transform: h
    } = gn(l).getComputedStyle(l), m = Vk(h);
    if (!m)
      return;
    const v = typeof t == "function" ? t : J8(t);
    return Xk(f, i.draggable.measure), v({
      active: {
        id: a,
        data: u.data,
        node: f,
        rect: i.draggable.measure(f)
      },
      draggableNodes: n,
      dragOverlay: {
        node: l,
        rect: i.dragOverlay.measure(d)
      },
      droppableContainers: r,
      measuringConfiguration: i,
      transform: m
    });
  });
}
function J8(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: i
  } = {
    ...Q8,
    ...e
  };
  return (a) => {
    let {
      active: l,
      dragOverlay: u,
      transform: f,
      ...d
    } = a;
    if (!t)
      return;
    const h = {
      x: u.rect.left - l.rect.left,
      y: u.rect.top - l.rect.top
    }, m = {
      scaleX: f.scaleX !== 1 ? l.rect.width * f.scaleX / u.rect.width : 1,
      scaleY: f.scaleY !== 1 ? l.rect.height * f.scaleY / u.rect.height : 1
    }, v = {
      x: f.x - h.x,
      y: f.y - h.y,
      ...m
    }, x = i({
      ...d,
      active: l,
      dragOverlay: u,
      transform: {
        initial: f,
        final: v
      }
    }), [A] = x, S = x[x.length - 1];
    if (JSON.stringify(A) === JSON.stringify(S))
      return;
    const R = r == null ? void 0 : r({
      active: l,
      dragOverlay: u,
      ...d
    }), w = u.node.animate(x, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((C) => {
      w.onfinish = () => {
        R == null || R(), C();
      };
    });
  };
}
let jw = 0;
function e6(e) {
  return y.useMemo(() => {
    if (e != null)
      return jw++, jw;
  }, [e]);
}
const t6 = /* @__PURE__ */ _.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: i,
    transition: a,
    modifiers: l,
    wrapperElement: u = "div",
    className: f,
    zIndex: d = 999
  } = e;
  const {
    activatorEvent: h,
    active: m,
    activeNodeRect: v,
    containerNodeRect: x,
    draggableNodes: A,
    droppableContainers: S,
    dragOverlay: R,
    over: w,
    measuringConfiguration: C,
    scrollableAncestors: k,
    scrollableAncestorRects: I,
    windowRect: O
  } = eA(), D = y.useContext(Id), F = e6(m == null ? void 0 : m.id), B = Jk(l, {
    activatorEvent: h,
    active: m,
    activeNodeRect: v,
    containerNodeRect: x,
    draggingNodeRect: R.rect,
    over: w,
    overlayNodeRect: R.rect,
    scrollableAncestors: k,
    scrollableAncestorRects: I,
    transform: D,
    windowRect: O
  }), $ = w0(v), j = Z8({
    config: r,
    draggableNodes: A,
    droppableContainers: S,
    measuringConfiguration: C
  }), Q = $ ? R.setRef : void 0;
  return _.createElement(j8, null, _.createElement(z8, {
    animation: j
  }, m && F ? _.createElement(q8, {
    key: F,
    id: m.id,
    ref: Q,
    as: u,
    activatorEvent: h,
    adjustScale: t,
    className: f,
    transition: a,
    rect: $,
    style: {
      zIndex: d,
      ...i
    },
    transform: B
  }, n) : null));
});
function C0(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function n6(e, t) {
  return e.reduce((n, r, i) => {
    const a = t.get(r);
    return a && (n[i] = a), n;
  }, Array(e.length));
}
function kc(e) {
  return e !== null && e >= 0;
}
function r6(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function i6(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const tA = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: i
  } = e;
  const a = C0(t, r, n), l = t[i], u = a[i];
  return !u || !l ? null : {
    x: u.left - l.left,
    y: u.top - l.top,
    scaleX: u.width / l.width,
    scaleY: u.height / l.height
  };
}, Ac = {
  scaleX: 1,
  scaleY: 1
}, o6 = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: i,
    rects: a,
    overIndex: l
  } = e;
  const u = (t = a[n]) != null ? t : r;
  if (!u)
    return null;
  if (i === n) {
    const d = a[l];
    return d ? {
      x: 0,
      y: n < l ? d.top + d.height - (u.top + u.height) : d.top - u.top,
      ...Ac
    } : null;
  }
  const f = a6(a, i, n);
  return i > n && i <= l ? {
    x: 0,
    y: -u.height - f,
    ...Ac
  } : i < n && i >= l ? {
    x: 0,
    y: u.height + f,
    ...Ac
  } : {
    x: 0,
    y: 0,
    ...Ac
  };
};
function a6(e, t, n) {
  const r = e[t], i = e[t - 1], a = e[t + 1];
  return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
const nA = "Sortable", rA = /* @__PURE__ */ _.createContext({
  activeIndex: -1,
  containerId: nA,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: tA,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function s6(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: i = tA,
    disabled: a = !1
  } = e;
  const {
    active: l,
    dragOverlay: u,
    droppableRects: f,
    over: d,
    measureDroppableContainers: h
  } = eA(), m = au(nA, n), v = u.rect !== null, x = y.useMemo(() => r.map((D) => typeof D == "object" && "id" in D ? D.id : D), [r]), A = l != null, S = l ? x.indexOf(l.id) : -1, R = d ? x.indexOf(d.id) : -1, w = y.useRef(x), C = !r6(x, w.current), k = R !== -1 && S === -1 || C, I = i6(a);
  Or(() => {
    C && A && h(x);
  }, [C, x, A, h]), y.useEffect(() => {
    w.current = x;
  }, [x]);
  const O = y.useMemo(
    () => ({
      activeIndex: S,
      containerId: m,
      disabled: I,
      disableTransforms: k,
      items: x,
      overIndex: R,
      useDragOverlay: v,
      sortedRects: n6(x, f),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S, m, I.draggable, I.droppable, k, x, R, f, v, i]
  );
  return _.createElement(rA.Provider, {
    value: O
  }, t);
}
const l6 = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: i
  } = e;
  return C0(n, r, i).indexOf(t);
}, u6 = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: i,
    items: a,
    newIndex: l,
    previousItems: u,
    previousContainerId: f,
    transition: d
  } = e;
  return !d || !r || u !== a && i === l ? !1 : n ? !0 : l !== i && t === f;
}, c6 = {
  duration: 200,
  easing: "ease"
}, iA = "transform", f6 = /* @__PURE__ */ ao.Transition.toString({
  property: iA,
  duration: 0,
  easing: "linear"
}), d6 = {
  roleDescription: "sortable"
};
function h6(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: i
  } = e;
  const [a, l] = y.useState(null), u = y.useRef(n);
  return Or(() => {
    if (!t && n !== u.current && r.current) {
      const f = i.current;
      if (f) {
        const d = Cs(r.current, {
          ignoreTransform: !0
        }), h = {
          x: f.left - d.left,
          y: f.top - d.top,
          scaleX: f.width / d.width,
          scaleY: f.height / d.height
        };
        (h.x || h.y) && l(h);
      }
    }
    n !== u.current && (u.current = n);
  }, [t, n, r, i]), y.useEffect(() => {
    a && l(null);
  }, [a]), a;
}
function p6(e) {
  let {
    animateLayoutChanges: t = u6,
    attributes: n,
    disabled: r,
    data: i,
    getNewIndex: a = l6,
    id: l,
    strategy: u,
    resizeObserverConfig: f,
    transition: d = c6
  } = e;
  const {
    items: h,
    containerId: m,
    activeIndex: v,
    disabled: x,
    disableTransforms: A,
    sortedRects: S,
    overIndex: R,
    useDragOverlay: w,
    strategy: C
  } = y.useContext(rA), k = m6(r, x), I = h.indexOf(l), O = y.useMemo(() => ({
    sortable: {
      containerId: m,
      index: I,
      items: h
    },
    ...i
  }), [m, i, I, h]), D = y.useMemo(() => h.slice(h.indexOf(l)), [h, l]), {
    rect: F,
    node: B,
    isOver: $,
    setNodeRef: j
  } = $8({
    id: l,
    data: O,
    disabled: k.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: D,
      ...f
    }
  }), {
    active: Q,
    activatorEvent: ne,
    activeNodeRect: ae,
    attributes: ve,
    setNodeRef: Re,
    listeners: Ee,
    isDragging: ce,
    over: G,
    setActivatorNodeRef: X,
    transform: Y
  } = H8({
    id: l,
    data: O,
    attributes: {
      ...d6,
      ...n
    },
    disabled: k.draggable
  }), re = _U(j, Re), te = !!Q, Ze = te && !A && kc(v) && kc(R), Ue = !w && ce, He = Ue && Ze ? Y : null, Et = Ze ? He ?? (u ?? C)({
    rects: S,
    activeNodeRect: ae,
    activeIndex: v,
    overIndex: R,
    index: I
  }) : null, Ke = kc(v) && kc(R) ? a({
    id: l,
    items: h,
    activeIndex: v,
    overIndex: R
  }) : I, ot = Q == null ? void 0 : Q.id, Se = y.useRef({
    activeId: ot,
    items: h,
    newIndex: Ke,
    containerId: m
  }), wt = h !== Se.current.items, ut = t({
    active: Q,
    containerId: m,
    isDragging: ce,
    isSorting: te,
    id: l,
    index: I,
    items: h,
    newIndex: Se.current.newIndex,
    previousItems: Se.current.items,
    previousContainerId: Se.current.containerId,
    transition: d,
    wasDragging: Se.current.activeId != null
  }), zt = h6({
    disabled: !ut,
    index: I,
    node: B,
    rect: F
  });
  return y.useEffect(() => {
    te && Se.current.newIndex !== Ke && (Se.current.newIndex = Ke), m !== Se.current.containerId && (Se.current.containerId = m), h !== Se.current.items && (Se.current.items = h);
  }, [te, Ke, m, h]), y.useEffect(() => {
    if (ot === Se.current.activeId)
      return;
    if (ot && !Se.current.activeId) {
      Se.current.activeId = ot;
      return;
    }
    const Nt = setTimeout(() => {
      Se.current.activeId = ot;
    }, 50);
    return () => clearTimeout(Nt);
  }, [ot]), {
    active: Q,
    activeIndex: v,
    attributes: ve,
    data: O,
    rect: F,
    index: I,
    newIndex: Ke,
    items: h,
    isOver: $,
    isSorting: te,
    isDragging: ce,
    listeners: Ee,
    node: B,
    overIndex: R,
    over: G,
    setNodeRef: re,
    setActivatorNodeRef: X,
    setDroppableNodeRef: j,
    setDraggableNodeRef: Re,
    transform: zt ?? Et,
    transition: Ge()
  };
  function Ge() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      zt || // Or to prevent items jumping to back to their "new" position when items change
      wt && Se.current.newIndex === I
    )
      return f6;
    if (!(Ue && !Ad(ne) || !d) && (te || ut))
      return ao.Transition.toString({
        ...d,
        property: iA
      });
  }
}
function m6(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
    droppable: (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable
  };
}
function Df(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const v6 = [Pe.Down, Pe.Right, Pe.Up, Pe.Left], g6 = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: i,
      droppableContainers: a,
      over: l,
      scrollableAncestors: u
    }
  } = t;
  if (v6.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const f = [];
    a.getEnabled().forEach((m) => {
      if (!m || m != null && m.disabled)
        return;
      const v = i.get(m.id);
      if (v)
        switch (e.code) {
          case Pe.Down:
            r.top < v.top && f.push(m);
            break;
          case Pe.Up:
            r.top > v.top && f.push(m);
            break;
          case Pe.Left:
            r.left > v.left && f.push(m);
            break;
          case Pe.Right:
            r.left < v.left && f.push(m);
            break;
        }
    });
    const d = $U({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: f
    });
    let h = Bk(d, "id");
    if (h === (l == null ? void 0 : l.id) && d.length > 1 && (h = d[1].id), h != null) {
      const m = a.get(n.id), v = a.get(h), x = v ? i.get(v.id) : null, A = v == null ? void 0 : v.node.current;
      if (A && x && m && v) {
        const R = Td(A).some((D, F) => u[F] !== D), w = oA(m, v), C = y6(m, v), k = R || !w ? {
          x: 0,
          y: 0
        } : {
          x: C ? r.width - x.width : 0,
          y: C ? r.height - x.height : 0
        }, I = {
          x: x.left,
          y: x.top
        };
        return k.x && k.y ? I : Wl(I, k);
      }
    }
  }
};
function oA(e, t) {
  return !Df(e) || !Df(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function y6(e, t) {
  return !Df(e) || !Df(t) || !oA(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const E6 = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
};
var Ff = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ff.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", d = 500, h = "__lodash_placeholder__", m = 1, v = 2, x = 4, A = 1, S = 2, R = 1, w = 2, C = 4, k = 8, I = 16, O = 32, D = 64, F = 128, B = 256, $ = 512, j = 30, Q = "...", ne = 800, ae = 16, ve = 1, Re = 2, Ee = 3, ce = 1 / 0, G = 9007199254740991, X = 17976931348623157e292, Y = NaN, re = 4294967295, te = re - 1, Ze = re >>> 1, Ue = [
      ["ary", F],
      ["bind", R],
      ["bindKey", w],
      ["curry", k],
      ["curryRight", I],
      ["flip", $],
      ["partial", O],
      ["partialRight", D],
      ["rearg", B]
    ], He = "[object Arguments]", Ie = "[object Array]", Et = "[object AsyncFunction]", Ke = "[object Boolean]", ot = "[object Date]", Se = "[object DOMException]", wt = "[object Error]", ut = "[object Function]", zt = "[object GeneratorFunction]", Ge = "[object Map]", Nt = "[object Number]", Je = "[object Null]", Ce = "[object Object]", Xe = "[object Promise]", $e = "[object Proxy]", Ae = "[object RegExp]", et = "[object Set]", tn = "[object String]", Nn = "[object Symbol]", Mr = "[object Undefined]", Lr = "[object WeakMap]", ea = "[object WeakSet]", nn = "[object ArrayBuffer]", Wt = "[object DataView]", ti = "[object Float32Array]", ta = "[object Float64Array]", qn = "[object Int8Array]", na = "[object Int16Array]", _s = "[object Int32Array]", Ss = "[object Uint8Array]", ho = "[object Uint8ClampedArray]", ra = "[object Uint16Array]", bs = "[object Uint32Array]", uu = /\b__p \+= '';/g, Od = /\b(__p \+=) '' \+/g, Pd = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cu = /&(?:amp|lt|gt|quot|#39);/g, Ct = /[&<>"']/g, rn = RegExp(cu.source), on = RegExp(Ct.source), Br = /<%-([\s\S]+?)%>/g, yn = /<%([\s\S]+?)%>/g, jt = /<%=([\s\S]+?)%>/g, Kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ki = /^\w*$/, _t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yn = /[\\^$.*+?()[\]{}|]/g, Qn = RegExp(Yn.source), On = /^\s+/, po = /\s/, mo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Hr = /\{\n\/\* \[wrapped with (.+)\] \*/, vo = /,? & /, ks = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cA = /[()=,{}\[\]\/\s]/, fA = /\\(\\)?/g, dA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $0 = /\w*$/, hA = /^[-+]0x[0-9a-f]+$/i, pA = /^0b[01]+$/i, mA = /^\[object .+?Constructor\]$/, vA = /^0o[0-7]+$/i, gA = /^(?:0|[1-9]\d*)$/, yA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fu = /($^)/, EA = /['\n\r\u2028\u2029\\]/g, du = "\\ud800-\\udfff", xA = "\\u0300-\\u036f", wA = "\\ufe20-\\ufe2f", CA = "\\u20d0-\\u20ff", z0 = xA + wA + CA, W0 = "\\u2700-\\u27bf", j0 = "a-z\\xdf-\\xf6\\xf8-\\xff", _A = "\\xac\\xb1\\xd7\\xf7", SA = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", bA = "\\u2000-\\u206f", kA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", G0 = "A-Z\\xc0-\\xd6\\xd8-\\xde", X0 = "\\ufe0e\\ufe0f", q0 = _A + SA + bA + kA, Dd = "['’]", AA = "[" + du + "]", K0 = "[" + q0 + "]", hu = "[" + z0 + "]", Y0 = "\\d+", TA = "[" + W0 + "]", Q0 = "[" + j0 + "]", Z0 = "[^" + du + q0 + Y0 + W0 + j0 + G0 + "]", Fd = "\\ud83c[\\udffb-\\udfff]", RA = "(?:" + hu + "|" + Fd + ")", J0 = "[^" + du + "]", Md = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ld = "[\\ud800-\\udbff][\\udc00-\\udfff]", ia = "[" + G0 + "]", ey = "\\u200d", ty = "(?:" + Q0 + "|" + Z0 + ")", IA = "(?:" + ia + "|" + Z0 + ")", ny = "(?:" + Dd + "(?:d|ll|m|re|s|t|ve))?", ry = "(?:" + Dd + "(?:D|LL|M|RE|S|T|VE))?", iy = RA + "?", oy = "[" + X0 + "]?", NA = "(?:" + ey + "(?:" + [J0, Md, Ld].join("|") + ")" + oy + iy + ")*", OA = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", PA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ay = oy + iy + NA, DA = "(?:" + [TA, Md, Ld].join("|") + ")" + ay, FA = "(?:" + [J0 + hu + "?", hu, Md, Ld, AA].join("|") + ")", MA = RegExp(Dd, "g"), LA = RegExp(hu, "g"), Bd = RegExp(Fd + "(?=" + Fd + ")|" + FA + ay, "g"), BA = RegExp([
      ia + "?" + Q0 + "+" + ny + "(?=" + [K0, ia, "$"].join("|") + ")",
      IA + "+" + ry + "(?=" + [K0, ia + ty, "$"].join("|") + ")",
      ia + "?" + ty + "+" + ny,
      ia + "+" + ry,
      PA,
      OA,
      Y0,
      DA
    ].join("|"), "g"), HA = RegExp("[" + ey + du + z0 + X0 + "]"), VA = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, UA = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], $A = -1, tt = {};
    tt[ti] = tt[ta] = tt[qn] = tt[na] = tt[_s] = tt[Ss] = tt[ho] = tt[ra] = tt[bs] = !0, tt[He] = tt[Ie] = tt[nn] = tt[Ke] = tt[Wt] = tt[ot] = tt[wt] = tt[ut] = tt[Ge] = tt[Nt] = tt[Ce] = tt[Ae] = tt[et] = tt[tn] = tt[Lr] = !1;
    var Ye = {};
    Ye[He] = Ye[Ie] = Ye[nn] = Ye[Wt] = Ye[Ke] = Ye[ot] = Ye[ti] = Ye[ta] = Ye[qn] = Ye[na] = Ye[_s] = Ye[Ge] = Ye[Nt] = Ye[Ce] = Ye[Ae] = Ye[et] = Ye[tn] = Ye[Nn] = Ye[Ss] = Ye[ho] = Ye[ra] = Ye[bs] = !0, Ye[wt] = Ye[ut] = Ye[Lr] = !1;
    var zA = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, WA = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, jA = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, GA = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, XA = parseFloat, qA = parseInt, sy = typeof zs == "object" && zs && zs.Object === Object && zs, KA = typeof self == "object" && self && self.Object === Object && self, Lt = sy || KA || Function("return this")(), Hd = t && !t.nodeType && t, go = Hd && !0 && e && !e.nodeType && e, ly = go && go.exports === Hd, Vd = ly && sy.process, Zn = function() {
      try {
        var M = go && go.require && go.require("util").types;
        return M || Vd && Vd.binding && Vd.binding("util");
      } catch {
      }
    }(), uy = Zn && Zn.isArrayBuffer, cy = Zn && Zn.isDate, fy = Zn && Zn.isMap, dy = Zn && Zn.isRegExp, hy = Zn && Zn.isSet, py = Zn && Zn.isTypedArray;
    function Pn(M, U, H) {
      switch (H.length) {
        case 0:
          return M.call(U);
        case 1:
          return M.call(U, H[0]);
        case 2:
          return M.call(U, H[0], H[1]);
        case 3:
          return M.call(U, H[0], H[1], H[2]);
      }
      return M.apply(U, H);
    }
    function YA(M, U, H, ie) {
      for (var me = -1, Le = M == null ? 0 : M.length; ++me < Le; ) {
        var St = M[me];
        U(ie, St, H(St), M);
      }
      return ie;
    }
    function Jn(M, U) {
      for (var H = -1, ie = M == null ? 0 : M.length; ++H < ie && U(M[H], H, M) !== !1; )
        ;
      return M;
    }
    function QA(M, U) {
      for (var H = M == null ? 0 : M.length; H-- && U(M[H], H, M) !== !1; )
        ;
      return M;
    }
    function my(M, U) {
      for (var H = -1, ie = M == null ? 0 : M.length; ++H < ie; )
        if (!U(M[H], H, M))
          return !1;
      return !0;
    }
    function Ai(M, U) {
      for (var H = -1, ie = M == null ? 0 : M.length, me = 0, Le = []; ++H < ie; ) {
        var St = M[H];
        U(St, H, M) && (Le[me++] = St);
      }
      return Le;
    }
    function pu(M, U) {
      var H = M == null ? 0 : M.length;
      return !!H && oa(M, U, 0) > -1;
    }
    function Ud(M, U, H) {
      for (var ie = -1, me = M == null ? 0 : M.length; ++ie < me; )
        if (H(U, M[ie]))
          return !0;
      return !1;
    }
    function at(M, U) {
      for (var H = -1, ie = M == null ? 0 : M.length, me = Array(ie); ++H < ie; )
        me[H] = U(M[H], H, M);
      return me;
    }
    function Ti(M, U) {
      for (var H = -1, ie = U.length, me = M.length; ++H < ie; )
        M[me + H] = U[H];
      return M;
    }
    function $d(M, U, H, ie) {
      var me = -1, Le = M == null ? 0 : M.length;
      for (ie && Le && (H = M[++me]); ++me < Le; )
        H = U(H, M[me], me, M);
      return H;
    }
    function ZA(M, U, H, ie) {
      var me = M == null ? 0 : M.length;
      for (ie && me && (H = M[--me]); me--; )
        H = U(H, M[me], me, M);
      return H;
    }
    function zd(M, U) {
      for (var H = -1, ie = M == null ? 0 : M.length; ++H < ie; )
        if (U(M[H], H, M))
          return !0;
      return !1;
    }
    var JA = Wd("length");
    function eT(M) {
      return M.split("");
    }
    function tT(M) {
      return M.match(ks) || [];
    }
    function vy(M, U, H) {
      var ie;
      return H(M, function(me, Le, St) {
        if (U(me, Le, St))
          return ie = Le, !1;
      }), ie;
    }
    function mu(M, U, H, ie) {
      for (var me = M.length, Le = H + (ie ? 1 : -1); ie ? Le-- : ++Le < me; )
        if (U(M[Le], Le, M))
          return Le;
      return -1;
    }
    function oa(M, U, H) {
      return U === U ? hT(M, U, H) : mu(M, gy, H);
    }
    function nT(M, U, H, ie) {
      for (var me = H - 1, Le = M.length; ++me < Le; )
        if (ie(M[me], U))
          return me;
      return -1;
    }
    function gy(M) {
      return M !== M;
    }
    function yy(M, U) {
      var H = M == null ? 0 : M.length;
      return H ? Gd(M, U) / H : Y;
    }
    function Wd(M) {
      return function(U) {
        return U == null ? n : U[M];
      };
    }
    function jd(M) {
      return function(U) {
        return M == null ? n : M[U];
      };
    }
    function Ey(M, U, H, ie, me) {
      return me(M, function(Le, St, qe) {
        H = ie ? (ie = !1, Le) : U(H, Le, St, qe);
      }), H;
    }
    function rT(M, U) {
      var H = M.length;
      for (M.sort(U); H--; )
        M[H] = M[H].value;
      return M;
    }
    function Gd(M, U) {
      for (var H, ie = -1, me = M.length; ++ie < me; ) {
        var Le = U(M[ie]);
        Le !== n && (H = H === n ? Le : H + Le);
      }
      return H;
    }
    function Xd(M, U) {
      for (var H = -1, ie = Array(M); ++H < M; )
        ie[H] = U(H);
      return ie;
    }
    function iT(M, U) {
      return at(U, function(H) {
        return [H, M[H]];
      });
    }
    function xy(M) {
      return M && M.slice(0, Sy(M) + 1).replace(On, "");
    }
    function Dn(M) {
      return function(U) {
        return M(U);
      };
    }
    function qd(M, U) {
      return at(U, function(H) {
        return M[H];
      });
    }
    function As(M, U) {
      return M.has(U);
    }
    function wy(M, U) {
      for (var H = -1, ie = M.length; ++H < ie && oa(U, M[H], 0) > -1; )
        ;
      return H;
    }
    function Cy(M, U) {
      for (var H = M.length; H-- && oa(U, M[H], 0) > -1; )
        ;
      return H;
    }
    function oT(M, U) {
      for (var H = M.length, ie = 0; H--; )
        M[H] === U && ++ie;
      return ie;
    }
    var aT = jd(zA), sT = jd(WA);
    function lT(M) {
      return "\\" + GA[M];
    }
    function uT(M, U) {
      return M == null ? n : M[U];
    }
    function aa(M) {
      return HA.test(M);
    }
    function cT(M) {
      return VA.test(M);
    }
    function fT(M) {
      for (var U, H = []; !(U = M.next()).done; )
        H.push(U.value);
      return H;
    }
    function Kd(M) {
      var U = -1, H = Array(M.size);
      return M.forEach(function(ie, me) {
        H[++U] = [me, ie];
      }), H;
    }
    function _y(M, U) {
      return function(H) {
        return M(U(H));
      };
    }
    function Ri(M, U) {
      for (var H = -1, ie = M.length, me = 0, Le = []; ++H < ie; ) {
        var St = M[H];
        (St === U || St === h) && (M[H] = h, Le[me++] = H);
      }
      return Le;
    }
    function vu(M) {
      var U = -1, H = Array(M.size);
      return M.forEach(function(ie) {
        H[++U] = ie;
      }), H;
    }
    function dT(M) {
      var U = -1, H = Array(M.size);
      return M.forEach(function(ie) {
        H[++U] = [ie, ie];
      }), H;
    }
    function hT(M, U, H) {
      for (var ie = H - 1, me = M.length; ++ie < me; )
        if (M[ie] === U)
          return ie;
      return -1;
    }
    function pT(M, U, H) {
      for (var ie = H + 1; ie--; )
        if (M[ie] === U)
          return ie;
      return ie;
    }
    function sa(M) {
      return aa(M) ? vT(M) : JA(M);
    }
    function Er(M) {
      return aa(M) ? gT(M) : eT(M);
    }
    function Sy(M) {
      for (var U = M.length; U-- && po.test(M.charAt(U)); )
        ;
      return U;
    }
    var mT = jd(jA);
    function vT(M) {
      for (var U = Bd.lastIndex = 0; Bd.test(M); )
        ++U;
      return U;
    }
    function gT(M) {
      return M.match(Bd) || [];
    }
    function yT(M) {
      return M.match(BA) || [];
    }
    var ET = function M(U) {
      U = U == null ? Lt : la.defaults(Lt.Object(), U, la.pick(Lt, UA));
      var H = U.Array, ie = U.Date, me = U.Error, Le = U.Function, St = U.Math, qe = U.Object, Yd = U.RegExp, xT = U.String, er = U.TypeError, gu = H.prototype, wT = Le.prototype, ua = qe.prototype, yu = U["__core-js_shared__"], Eu = wT.toString, ze = ua.hasOwnProperty, CT = 0, by = function() {
        var o = /[^.]+$/.exec(yu && yu.keys && yu.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), xu = ua.toString, _T = Eu.call(qe), ST = Lt._, bT = Yd(
        "^" + Eu.call(ze).replace(Yn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), wu = ly ? U.Buffer : n, Ii = U.Symbol, Cu = U.Uint8Array, ky = wu ? wu.allocUnsafe : n, _u = _y(qe.getPrototypeOf, qe), Ay = qe.create, Ty = ua.propertyIsEnumerable, Su = gu.splice, Ry = Ii ? Ii.isConcatSpreadable : n, Ts = Ii ? Ii.iterator : n, yo = Ii ? Ii.toStringTag : n, bu = function() {
        try {
          var o = _o(qe, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), kT = U.clearTimeout !== Lt.clearTimeout && U.clearTimeout, AT = ie && ie.now !== Lt.Date.now && ie.now, TT = U.setTimeout !== Lt.setTimeout && U.setTimeout, ku = St.ceil, Au = St.floor, Qd = qe.getOwnPropertySymbols, RT = wu ? wu.isBuffer : n, Iy = U.isFinite, IT = gu.join, NT = _y(qe.keys, qe), bt = St.max, Gt = St.min, OT = ie.now, PT = U.parseInt, Ny = St.random, DT = gu.reverse, Zd = _o(U, "DataView"), Rs = _o(U, "Map"), Jd = _o(U, "Promise"), ca = _o(U, "Set"), Is = _o(U, "WeakMap"), Ns = _o(qe, "create"), Tu = Is && new Is(), fa = {}, FT = So(Zd), MT = So(Rs), LT = So(Jd), BT = So(ca), HT = So(Is), Ru = Ii ? Ii.prototype : n, Os = Ru ? Ru.valueOf : n, Oy = Ru ? Ru.toString : n;
      function b(o) {
        if (pt(o) && !ge(o) && !(o instanceof Te)) {
          if (o instanceof tr)
            return o;
          if (ze.call(o, "__wrapped__"))
            return PE(o);
        }
        return new tr(o);
      }
      var da = /* @__PURE__ */ function() {
        function o() {
        }
        return function(s) {
          if (!ct(s))
            return {};
          if (Ay)
            return Ay(s);
          o.prototype = s;
          var c = new o();
          return o.prototype = n, c;
        };
      }();
      function Iu() {
      }
      function tr(o, s) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      b.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Br,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: yn,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: jt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: b
        }
      }, b.prototype = Iu.prototype, b.prototype.constructor = b, tr.prototype = da(Iu.prototype), tr.prototype.constructor = tr;
      function Te(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = re, this.__views__ = [];
      }
      function VT() {
        var o = new Te(this.__wrapped__);
        return o.__actions__ = En(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = En(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = En(this.__views__), o;
      }
      function UT() {
        if (this.__filtered__) {
          var o = new Te(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function $T() {
        var o = this.__wrapped__.value(), s = this.__dir__, c = ge(o), p = s < 0, E = c ? o.length : 0, T = eR(0, E, this.__views__), N = T.start, P = T.end, L = P - N, z = p ? P : N - 1, W = this.__iteratees__, q = W.length, J = 0, se = Gt(L, this.__takeCount__);
        if (!c || !p && E == L && se == L)
          return nE(o, this.__actions__);
        var de = [];
        e:
          for (; L-- && J < se; ) {
            z += s;
            for (var xe = -1, he = o[z]; ++xe < q; ) {
              var be = W[xe], Ne = be.iteratee, Ln = be.type, ln = Ne(he);
              if (Ln == Re)
                he = ln;
              else if (!ln) {
                if (Ln == ve)
                  continue e;
                break e;
              }
            }
            de[J++] = he;
          }
        return de;
      }
      Te.prototype = da(Iu.prototype), Te.prototype.constructor = Te;
      function Eo(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function zT() {
        this.__data__ = Ns ? Ns(null) : {}, this.size = 0;
      }
      function WT(o) {
        var s = this.has(o) && delete this.__data__[o];
        return this.size -= s ? 1 : 0, s;
      }
      function jT(o) {
        var s = this.__data__;
        if (Ns) {
          var c = s[o];
          return c === f ? n : c;
        }
        return ze.call(s, o) ? s[o] : n;
      }
      function GT(o) {
        var s = this.__data__;
        return Ns ? s[o] !== n : ze.call(s, o);
      }
      function XT(o, s) {
        var c = this.__data__;
        return this.size += this.has(o) ? 0 : 1, c[o] = Ns && s === n ? f : s, this;
      }
      Eo.prototype.clear = zT, Eo.prototype.delete = WT, Eo.prototype.get = jT, Eo.prototype.has = GT, Eo.prototype.set = XT;
      function ni(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function qT() {
        this.__data__ = [], this.size = 0;
      }
      function KT(o) {
        var s = this.__data__, c = Nu(s, o);
        if (c < 0)
          return !1;
        var p = s.length - 1;
        return c == p ? s.pop() : Su.call(s, c, 1), --this.size, !0;
      }
      function YT(o) {
        var s = this.__data__, c = Nu(s, o);
        return c < 0 ? n : s[c][1];
      }
      function QT(o) {
        return Nu(this.__data__, o) > -1;
      }
      function ZT(o, s) {
        var c = this.__data__, p = Nu(c, o);
        return p < 0 ? (++this.size, c.push([o, s])) : c[p][1] = s, this;
      }
      ni.prototype.clear = qT, ni.prototype.delete = KT, ni.prototype.get = YT, ni.prototype.has = QT, ni.prototype.set = ZT;
      function ri(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function JT() {
        this.size = 0, this.__data__ = {
          hash: new Eo(),
          map: new (Rs || ni)(),
          string: new Eo()
        };
      }
      function e2(o) {
        var s = zu(this, o).delete(o);
        return this.size -= s ? 1 : 0, s;
      }
      function t2(o) {
        return zu(this, o).get(o);
      }
      function n2(o) {
        return zu(this, o).has(o);
      }
      function r2(o, s) {
        var c = zu(this, o), p = c.size;
        return c.set(o, s), this.size += c.size == p ? 0 : 1, this;
      }
      ri.prototype.clear = JT, ri.prototype.delete = e2, ri.prototype.get = t2, ri.prototype.has = n2, ri.prototype.set = r2;
      function xo(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.__data__ = new ri(); ++s < c; )
          this.add(o[s]);
      }
      function i2(o) {
        return this.__data__.set(o, f), this;
      }
      function o2(o) {
        return this.__data__.has(o);
      }
      xo.prototype.add = xo.prototype.push = i2, xo.prototype.has = o2;
      function xr(o) {
        var s = this.__data__ = new ni(o);
        this.size = s.size;
      }
      function a2() {
        this.__data__ = new ni(), this.size = 0;
      }
      function s2(o) {
        var s = this.__data__, c = s.delete(o);
        return this.size = s.size, c;
      }
      function l2(o) {
        return this.__data__.get(o);
      }
      function u2(o) {
        return this.__data__.has(o);
      }
      function c2(o, s) {
        var c = this.__data__;
        if (c instanceof ni) {
          var p = c.__data__;
          if (!Rs || p.length < i - 1)
            return p.push([o, s]), this.size = ++c.size, this;
          c = this.__data__ = new ri(p);
        }
        return c.set(o, s), this.size = c.size, this;
      }
      xr.prototype.clear = a2, xr.prototype.delete = s2, xr.prototype.get = l2, xr.prototype.has = u2, xr.prototype.set = c2;
      function Py(o, s) {
        var c = ge(o), p = !c && bo(o), E = !c && !p && Fi(o), T = !c && !p && !E && va(o), N = c || p || E || T, P = N ? Xd(o.length, xT) : [], L = P.length;
        for (var z in o)
          (s || ze.call(o, z)) && !(N && // Safari 9 has enumerable `arguments.length` in strict mode.
          (z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          E && (z == "offset" || z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (z == "buffer" || z == "byteLength" || z == "byteOffset") || // Skip index properties.
          si(z, L))) && P.push(z);
        return P;
      }
      function Dy(o) {
        var s = o.length;
        return s ? o[ch(0, s - 1)] : n;
      }
      function f2(o, s) {
        return Wu(En(o), wo(s, 0, o.length));
      }
      function d2(o) {
        return Wu(En(o));
      }
      function eh(o, s, c) {
        (c !== n && !wr(o[s], c) || c === n && !(s in o)) && ii(o, s, c);
      }
      function Ps(o, s, c) {
        var p = o[s];
        (!(ze.call(o, s) && wr(p, c)) || c === n && !(s in o)) && ii(o, s, c);
      }
      function Nu(o, s) {
        for (var c = o.length; c--; )
          if (wr(o[c][0], s))
            return c;
        return -1;
      }
      function h2(o, s, c, p) {
        return Ni(o, function(E, T, N) {
          s(p, E, c(E), N);
        }), p;
      }
      function Fy(o, s) {
        return o && Ur(s, Ot(s), o);
      }
      function p2(o, s) {
        return o && Ur(s, wn(s), o);
      }
      function ii(o, s, c) {
        s == "__proto__" && bu ? bu(o, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : o[s] = c;
      }
      function th(o, s) {
        for (var c = -1, p = s.length, E = H(p), T = o == null; ++c < p; )
          E[c] = T ? n : Fh(o, s[c]);
        return E;
      }
      function wo(o, s, c) {
        return o === o && (c !== n && (o = o <= c ? o : c), s !== n && (o = o >= s ? o : s)), o;
      }
      function nr(o, s, c, p, E, T) {
        var N, P = s & m, L = s & v, z = s & x;
        if (c && (N = E ? c(o, p, E, T) : c(o)), N !== n)
          return N;
        if (!ct(o))
          return o;
        var W = ge(o);
        if (W) {
          if (N = nR(o), !P)
            return En(o, N);
        } else {
          var q = Xt(o), J = q == ut || q == zt;
          if (Fi(o))
            return oE(o, P);
          if (q == Ce || q == He || J && !E) {
            if (N = L || J ? {} : SE(o), !P)
              return L ? j2(o, p2(N, o)) : W2(o, Fy(N, o));
          } else {
            if (!Ye[q])
              return E ? o : {};
            N = rR(o, q, P);
          }
        }
        T || (T = new xr());
        var se = T.get(o);
        if (se)
          return se;
        T.set(o, N), JE(o) ? o.forEach(function(he) {
          N.add(nr(he, s, c, he, o, T));
        }) : QE(o) && o.forEach(function(he, be) {
          N.set(be, nr(he, s, c, be, o, T));
        });
        var de = z ? L ? wh : xh : L ? wn : Ot, xe = W ? n : de(o);
        return Jn(xe || o, function(he, be) {
          xe && (be = he, he = o[be]), Ps(N, be, nr(he, s, c, be, o, T));
        }), N;
      }
      function m2(o) {
        var s = Ot(o);
        return function(c) {
          return My(c, o, s);
        };
      }
      function My(o, s, c) {
        var p = c.length;
        if (o == null)
          return !p;
        for (o = qe(o); p--; ) {
          var E = c[p], T = s[E], N = o[E];
          if (N === n && !(E in o) || !T(N))
            return !1;
        }
        return !0;
      }
      function Ly(o, s, c) {
        if (typeof o != "function")
          throw new er(l);
        return Vs(function() {
          o.apply(n, c);
        }, s);
      }
      function Ds(o, s, c, p) {
        var E = -1, T = pu, N = !0, P = o.length, L = [], z = s.length;
        if (!P)
          return L;
        c && (s = at(s, Dn(c))), p ? (T = Ud, N = !1) : s.length >= i && (T = As, N = !1, s = new xo(s));
        e:
          for (; ++E < P; ) {
            var W = o[E], q = c == null ? W : c(W);
            if (W = p || W !== 0 ? W : 0, N && q === q) {
              for (var J = z; J--; )
                if (s[J] === q)
                  continue e;
              L.push(W);
            } else T(s, q, p) || L.push(W);
          }
        return L;
      }
      var Ni = cE(Vr), By = cE(rh, !0);
      function v2(o, s) {
        var c = !0;
        return Ni(o, function(p, E, T) {
          return c = !!s(p, E, T), c;
        }), c;
      }
      function Ou(o, s, c) {
        for (var p = -1, E = o.length; ++p < E; ) {
          var T = o[p], N = s(T);
          if (N != null && (P === n ? N === N && !Mn(N) : c(N, P)))
            var P = N, L = T;
        }
        return L;
      }
      function g2(o, s, c, p) {
        var E = o.length;
        for (c = ye(c), c < 0 && (c = -c > E ? 0 : E + c), p = p === n || p > E ? E : ye(p), p < 0 && (p += E), p = c > p ? 0 : tx(p); c < p; )
          o[c++] = s;
        return o;
      }
      function Hy(o, s) {
        var c = [];
        return Ni(o, function(p, E, T) {
          s(p, E, T) && c.push(p);
        }), c;
      }
      function Bt(o, s, c, p, E) {
        var T = -1, N = o.length;
        for (c || (c = oR), E || (E = []); ++T < N; ) {
          var P = o[T];
          s > 0 && c(P) ? s > 1 ? Bt(P, s - 1, c, p, E) : Ti(E, P) : p || (E[E.length] = P);
        }
        return E;
      }
      var nh = fE(), Vy = fE(!0);
      function Vr(o, s) {
        return o && nh(o, s, Ot);
      }
      function rh(o, s) {
        return o && Vy(o, s, Ot);
      }
      function Pu(o, s) {
        return Ai(s, function(c) {
          return li(o[c]);
        });
      }
      function Co(o, s) {
        s = Pi(s, o);
        for (var c = 0, p = s.length; o != null && c < p; )
          o = o[$r(s[c++])];
        return c && c == p ? o : n;
      }
      function Uy(o, s, c) {
        var p = s(o);
        return ge(o) ? p : Ti(p, c(o));
      }
      function an(o) {
        return o == null ? o === n ? Mr : Je : yo && yo in qe(o) ? J2(o) : dR(o);
      }
      function ih(o, s) {
        return o > s;
      }
      function y2(o, s) {
        return o != null && ze.call(o, s);
      }
      function E2(o, s) {
        return o != null && s in qe(o);
      }
      function x2(o, s, c) {
        return o >= Gt(s, c) && o < bt(s, c);
      }
      function oh(o, s, c) {
        for (var p = c ? Ud : pu, E = o[0].length, T = o.length, N = T, P = H(T), L = 1 / 0, z = []; N--; ) {
          var W = o[N];
          N && s && (W = at(W, Dn(s))), L = Gt(W.length, L), P[N] = !c && (s || E >= 120 && W.length >= 120) ? new xo(N && W) : n;
        }
        W = o[0];
        var q = -1, J = P[0];
        e:
          for (; ++q < E && z.length < L; ) {
            var se = W[q], de = s ? s(se) : se;
            if (se = c || se !== 0 ? se : 0, !(J ? As(J, de) : p(z, de, c))) {
              for (N = T; --N; ) {
                var xe = P[N];
                if (!(xe ? As(xe, de) : p(o[N], de, c)))
                  continue e;
              }
              J && J.push(de), z.push(se);
            }
          }
        return z;
      }
      function w2(o, s, c, p) {
        return Vr(o, function(E, T, N) {
          s(p, c(E), T, N);
        }), p;
      }
      function Fs(o, s, c) {
        s = Pi(s, o), o = TE(o, s);
        var p = o == null ? o : o[$r(ir(s))];
        return p == null ? n : Pn(p, o, c);
      }
      function $y(o) {
        return pt(o) && an(o) == He;
      }
      function C2(o) {
        return pt(o) && an(o) == nn;
      }
      function _2(o) {
        return pt(o) && an(o) == ot;
      }
      function Ms(o, s, c, p, E) {
        return o === s ? !0 : o == null || s == null || !pt(o) && !pt(s) ? o !== o && s !== s : S2(o, s, c, p, Ms, E);
      }
      function S2(o, s, c, p, E, T) {
        var N = ge(o), P = ge(s), L = N ? Ie : Xt(o), z = P ? Ie : Xt(s);
        L = L == He ? Ce : L, z = z == He ? Ce : z;
        var W = L == Ce, q = z == Ce, J = L == z;
        if (J && Fi(o)) {
          if (!Fi(s))
            return !1;
          N = !0, W = !1;
        }
        if (J && !W)
          return T || (T = new xr()), N || va(o) ? wE(o, s, c, p, E, T) : Q2(o, s, L, c, p, E, T);
        if (!(c & A)) {
          var se = W && ze.call(o, "__wrapped__"), de = q && ze.call(s, "__wrapped__");
          if (se || de) {
            var xe = se ? o.value() : o, he = de ? s.value() : s;
            return T || (T = new xr()), E(xe, he, c, p, T);
          }
        }
        return J ? (T || (T = new xr()), Z2(o, s, c, p, E, T)) : !1;
      }
      function b2(o) {
        return pt(o) && Xt(o) == Ge;
      }
      function ah(o, s, c, p) {
        var E = c.length, T = E, N = !p;
        if (o == null)
          return !T;
        for (o = qe(o); E--; ) {
          var P = c[E];
          if (N && P[2] ? P[1] !== o[P[0]] : !(P[0] in o))
            return !1;
        }
        for (; ++E < T; ) {
          P = c[E];
          var L = P[0], z = o[L], W = P[1];
          if (N && P[2]) {
            if (z === n && !(L in o))
              return !1;
          } else {
            var q = new xr();
            if (p)
              var J = p(z, W, L, o, s, q);
            if (!(J === n ? Ms(W, z, A | S, p, q) : J))
              return !1;
          }
        }
        return !0;
      }
      function zy(o) {
        if (!ct(o) || sR(o))
          return !1;
        var s = li(o) ? bT : mA;
        return s.test(So(o));
      }
      function k2(o) {
        return pt(o) && an(o) == Ae;
      }
      function A2(o) {
        return pt(o) && Xt(o) == et;
      }
      function T2(o) {
        return pt(o) && Yu(o.length) && !!tt[an(o)];
      }
      function Wy(o) {
        return typeof o == "function" ? o : o == null ? Cn : typeof o == "object" ? ge(o) ? Xy(o[0], o[1]) : Gy(o) : dx(o);
      }
      function sh(o) {
        if (!Hs(o))
          return NT(o);
        var s = [];
        for (var c in qe(o))
          ze.call(o, c) && c != "constructor" && s.push(c);
        return s;
      }
      function R2(o) {
        if (!ct(o))
          return fR(o);
        var s = Hs(o), c = [];
        for (var p in o)
          p == "constructor" && (s || !ze.call(o, p)) || c.push(p);
        return c;
      }
      function lh(o, s) {
        return o < s;
      }
      function jy(o, s) {
        var c = -1, p = xn(o) ? H(o.length) : [];
        return Ni(o, function(E, T, N) {
          p[++c] = s(E, T, N);
        }), p;
      }
      function Gy(o) {
        var s = _h(o);
        return s.length == 1 && s[0][2] ? kE(s[0][0], s[0][1]) : function(c) {
          return c === o || ah(c, o, s);
        };
      }
      function Xy(o, s) {
        return bh(o) && bE(s) ? kE($r(o), s) : function(c) {
          var p = Fh(c, o);
          return p === n && p === s ? Mh(c, o) : Ms(s, p, A | S);
        };
      }
      function Du(o, s, c, p, E) {
        o !== s && nh(s, function(T, N) {
          if (E || (E = new xr()), ct(T))
            I2(o, s, N, c, Du, p, E);
          else {
            var P = p ? p(Ah(o, N), T, N + "", o, s, E) : n;
            P === n && (P = T), eh(o, N, P);
          }
        }, wn);
      }
      function I2(o, s, c, p, E, T, N) {
        var P = Ah(o, c), L = Ah(s, c), z = N.get(L);
        if (z) {
          eh(o, c, z);
          return;
        }
        var W = T ? T(P, L, c + "", o, s, N) : n, q = W === n;
        if (q) {
          var J = ge(L), se = !J && Fi(L), de = !J && !se && va(L);
          W = L, J || se || de ? ge(P) ? W = P : vt(P) ? W = En(P) : se ? (q = !1, W = oE(L, !0)) : de ? (q = !1, W = aE(L, !0)) : W = [] : Us(L) || bo(L) ? (W = P, bo(P) ? W = nx(P) : (!ct(P) || li(P)) && (W = SE(L))) : q = !1;
        }
        q && (N.set(L, W), E(W, L, p, T, N), N.delete(L)), eh(o, c, W);
      }
      function qy(o, s) {
        var c = o.length;
        if (c)
          return s += s < 0 ? c : 0, si(s, c) ? o[s] : n;
      }
      function Ky(o, s, c) {
        s.length ? s = at(s, function(T) {
          return ge(T) ? function(N) {
            return Co(N, T.length === 1 ? T[0] : T);
          } : T;
        }) : s = [Cn];
        var p = -1;
        s = at(s, Dn(fe()));
        var E = jy(o, function(T, N, P) {
          var L = at(s, function(z) {
            return z(T);
          });
          return { criteria: L, index: ++p, value: T };
        });
        return rT(E, function(T, N) {
          return z2(T, N, c);
        });
      }
      function N2(o, s) {
        return Yy(o, s, function(c, p) {
          return Mh(o, p);
        });
      }
      function Yy(o, s, c) {
        for (var p = -1, E = s.length, T = {}; ++p < E; ) {
          var N = s[p], P = Co(o, N);
          c(P, N) && Ls(T, Pi(N, o), P);
        }
        return T;
      }
      function O2(o) {
        return function(s) {
          return Co(s, o);
        };
      }
      function uh(o, s, c, p) {
        var E = p ? nT : oa, T = -1, N = s.length, P = o;
        for (o === s && (s = En(s)), c && (P = at(o, Dn(c))); ++T < N; )
          for (var L = 0, z = s[T], W = c ? c(z) : z; (L = E(P, W, L, p)) > -1; )
            P !== o && Su.call(P, L, 1), Su.call(o, L, 1);
        return o;
      }
      function Qy(o, s) {
        for (var c = o ? s.length : 0, p = c - 1; c--; ) {
          var E = s[c];
          if (c == p || E !== T) {
            var T = E;
            si(E) ? Su.call(o, E, 1) : hh(o, E);
          }
        }
        return o;
      }
      function ch(o, s) {
        return o + Au(Ny() * (s - o + 1));
      }
      function P2(o, s, c, p) {
        for (var E = -1, T = bt(ku((s - o) / (c || 1)), 0), N = H(T); T--; )
          N[p ? T : ++E] = o, o += c;
        return N;
      }
      function fh(o, s) {
        var c = "";
        if (!o || s < 1 || s > G)
          return c;
        do
          s % 2 && (c += o), s = Au(s / 2), s && (o += o);
        while (s);
        return c;
      }
      function _e(o, s) {
        return Th(AE(o, s, Cn), o + "");
      }
      function D2(o) {
        return Dy(ga(o));
      }
      function F2(o, s) {
        var c = ga(o);
        return Wu(c, wo(s, 0, c.length));
      }
      function Ls(o, s, c, p) {
        if (!ct(o))
          return o;
        s = Pi(s, o);
        for (var E = -1, T = s.length, N = T - 1, P = o; P != null && ++E < T; ) {
          var L = $r(s[E]), z = c;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return o;
          if (E != N) {
            var W = P[L];
            z = p ? p(W, L, P) : n, z === n && (z = ct(W) ? W : si(s[E + 1]) ? [] : {});
          }
          Ps(P, L, z), P = P[L];
        }
        return o;
      }
      var Zy = Tu ? function(o, s) {
        return Tu.set(o, s), o;
      } : Cn, M2 = bu ? function(o, s) {
        return bu(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Bh(s),
          writable: !0
        });
      } : Cn;
      function L2(o) {
        return Wu(ga(o));
      }
      function rr(o, s, c) {
        var p = -1, E = o.length;
        s < 0 && (s = -s > E ? 0 : E + s), c = c > E ? E : c, c < 0 && (c += E), E = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var T = H(E); ++p < E; )
          T[p] = o[p + s];
        return T;
      }
      function B2(o, s) {
        var c;
        return Ni(o, function(p, E, T) {
          return c = s(p, E, T), !c;
        }), !!c;
      }
      function Fu(o, s, c) {
        var p = 0, E = o == null ? p : o.length;
        if (typeof s == "number" && s === s && E <= Ze) {
          for (; p < E; ) {
            var T = p + E >>> 1, N = o[T];
            N !== null && !Mn(N) && (c ? N <= s : N < s) ? p = T + 1 : E = T;
          }
          return E;
        }
        return dh(o, s, Cn, c);
      }
      function dh(o, s, c, p) {
        var E = 0, T = o == null ? 0 : o.length;
        if (T === 0)
          return 0;
        s = c(s);
        for (var N = s !== s, P = s === null, L = Mn(s), z = s === n; E < T; ) {
          var W = Au((E + T) / 2), q = c(o[W]), J = q !== n, se = q === null, de = q === q, xe = Mn(q);
          if (N)
            var he = p || de;
          else z ? he = de && (p || J) : P ? he = de && J && (p || !se) : L ? he = de && J && !se && (p || !xe) : se || xe ? he = !1 : he = p ? q <= s : q < s;
          he ? E = W + 1 : T = W;
        }
        return Gt(T, te);
      }
      function Jy(o, s) {
        for (var c = -1, p = o.length, E = 0, T = []; ++c < p; ) {
          var N = o[c], P = s ? s(N) : N;
          if (!c || !wr(P, L)) {
            var L = P;
            T[E++] = N === 0 ? 0 : N;
          }
        }
        return T;
      }
      function eE(o) {
        return typeof o == "number" ? o : Mn(o) ? Y : +o;
      }
      function Fn(o) {
        if (typeof o == "string")
          return o;
        if (ge(o))
          return at(o, Fn) + "";
        if (Mn(o))
          return Oy ? Oy.call(o) : "";
        var s = o + "";
        return s == "0" && 1 / o == -ce ? "-0" : s;
      }
      function Oi(o, s, c) {
        var p = -1, E = pu, T = o.length, N = !0, P = [], L = P;
        if (c)
          N = !1, E = Ud;
        else if (T >= i) {
          var z = s ? null : K2(o);
          if (z)
            return vu(z);
          N = !1, E = As, L = new xo();
        } else
          L = s ? [] : P;
        e:
          for (; ++p < T; ) {
            var W = o[p], q = s ? s(W) : W;
            if (W = c || W !== 0 ? W : 0, N && q === q) {
              for (var J = L.length; J--; )
                if (L[J] === q)
                  continue e;
              s && L.push(q), P.push(W);
            } else E(L, q, c) || (L !== P && L.push(q), P.push(W));
          }
        return P;
      }
      function hh(o, s) {
        return s = Pi(s, o), o = TE(o, s), o == null || delete o[$r(ir(s))];
      }
      function tE(o, s, c, p) {
        return Ls(o, s, c(Co(o, s)), p);
      }
      function Mu(o, s, c, p) {
        for (var E = o.length, T = p ? E : -1; (p ? T-- : ++T < E) && s(o[T], T, o); )
          ;
        return c ? rr(o, p ? 0 : T, p ? T + 1 : E) : rr(o, p ? T + 1 : 0, p ? E : T);
      }
      function nE(o, s) {
        var c = o;
        return c instanceof Te && (c = c.value()), $d(s, function(p, E) {
          return E.func.apply(E.thisArg, Ti([p], E.args));
        }, c);
      }
      function ph(o, s, c) {
        var p = o.length;
        if (p < 2)
          return p ? Oi(o[0]) : [];
        for (var E = -1, T = H(p); ++E < p; )
          for (var N = o[E], P = -1; ++P < p; )
            P != E && (T[E] = Ds(T[E] || N, o[P], s, c));
        return Oi(Bt(T, 1), s, c);
      }
      function rE(o, s, c) {
        for (var p = -1, E = o.length, T = s.length, N = {}; ++p < E; ) {
          var P = p < T ? s[p] : n;
          c(N, o[p], P);
        }
        return N;
      }
      function mh(o) {
        return vt(o) ? o : [];
      }
      function vh(o) {
        return typeof o == "function" ? o : Cn;
      }
      function Pi(o, s) {
        return ge(o) ? o : bh(o, s) ? [o] : OE(Ve(o));
      }
      var H2 = _e;
      function Di(o, s, c) {
        var p = o.length;
        return c = c === n ? p : c, !s && c >= p ? o : rr(o, s, c);
      }
      var iE = kT || function(o) {
        return Lt.clearTimeout(o);
      };
      function oE(o, s) {
        if (s)
          return o.slice();
        var c = o.length, p = ky ? ky(c) : new o.constructor(c);
        return o.copy(p), p;
      }
      function gh(o) {
        var s = new o.constructor(o.byteLength);
        return new Cu(s).set(new Cu(o)), s;
      }
      function V2(o, s) {
        var c = s ? gh(o.buffer) : o.buffer;
        return new o.constructor(c, o.byteOffset, o.byteLength);
      }
      function U2(o) {
        var s = new o.constructor(o.source, $0.exec(o));
        return s.lastIndex = o.lastIndex, s;
      }
      function $2(o) {
        return Os ? qe(Os.call(o)) : {};
      }
      function aE(o, s) {
        var c = s ? gh(o.buffer) : o.buffer;
        return new o.constructor(c, o.byteOffset, o.length);
      }
      function sE(o, s) {
        if (o !== s) {
          var c = o !== n, p = o === null, E = o === o, T = Mn(o), N = s !== n, P = s === null, L = s === s, z = Mn(s);
          if (!P && !z && !T && o > s || T && N && L && !P && !z || p && N && L || !c && L || !E)
            return 1;
          if (!p && !T && !z && o < s || z && c && E && !p && !T || P && c && E || !N && E || !L)
            return -1;
        }
        return 0;
      }
      function z2(o, s, c) {
        for (var p = -1, E = o.criteria, T = s.criteria, N = E.length, P = c.length; ++p < N; ) {
          var L = sE(E[p], T[p]);
          if (L) {
            if (p >= P)
              return L;
            var z = c[p];
            return L * (z == "desc" ? -1 : 1);
          }
        }
        return o.index - s.index;
      }
      function lE(o, s, c, p) {
        for (var E = -1, T = o.length, N = c.length, P = -1, L = s.length, z = bt(T - N, 0), W = H(L + z), q = !p; ++P < L; )
          W[P] = s[P];
        for (; ++E < N; )
          (q || E < T) && (W[c[E]] = o[E]);
        for (; z--; )
          W[P++] = o[E++];
        return W;
      }
      function uE(o, s, c, p) {
        for (var E = -1, T = o.length, N = -1, P = c.length, L = -1, z = s.length, W = bt(T - P, 0), q = H(W + z), J = !p; ++E < W; )
          q[E] = o[E];
        for (var se = E; ++L < z; )
          q[se + L] = s[L];
        for (; ++N < P; )
          (J || E < T) && (q[se + c[N]] = o[E++]);
        return q;
      }
      function En(o, s) {
        var c = -1, p = o.length;
        for (s || (s = H(p)); ++c < p; )
          s[c] = o[c];
        return s;
      }
      function Ur(o, s, c, p) {
        var E = !c;
        c || (c = {});
        for (var T = -1, N = s.length; ++T < N; ) {
          var P = s[T], L = p ? p(c[P], o[P], P, c, o) : n;
          L === n && (L = o[P]), E ? ii(c, P, L) : Ps(c, P, L);
        }
        return c;
      }
      function W2(o, s) {
        return Ur(o, Sh(o), s);
      }
      function j2(o, s) {
        return Ur(o, CE(o), s);
      }
      function Lu(o, s) {
        return function(c, p) {
          var E = ge(c) ? YA : h2, T = s ? s() : {};
          return E(c, o, fe(p, 2), T);
        };
      }
      function ha(o) {
        return _e(function(s, c) {
          var p = -1, E = c.length, T = E > 1 ? c[E - 1] : n, N = E > 2 ? c[2] : n;
          for (T = o.length > 3 && typeof T == "function" ? (E--, T) : n, N && sn(c[0], c[1], N) && (T = E < 3 ? n : T, E = 1), s = qe(s); ++p < E; ) {
            var P = c[p];
            P && o(s, P, p, T);
          }
          return s;
        });
      }
      function cE(o, s) {
        return function(c, p) {
          if (c == null)
            return c;
          if (!xn(c))
            return o(c, p);
          for (var E = c.length, T = s ? E : -1, N = qe(c); (s ? T-- : ++T < E) && p(N[T], T, N) !== !1; )
            ;
          return c;
        };
      }
      function fE(o) {
        return function(s, c, p) {
          for (var E = -1, T = qe(s), N = p(s), P = N.length; P--; ) {
            var L = N[o ? P : ++E];
            if (c(T[L], L, T) === !1)
              break;
          }
          return s;
        };
      }
      function G2(o, s, c) {
        var p = s & R, E = Bs(o);
        function T() {
          var N = this && this !== Lt && this instanceof T ? E : o;
          return N.apply(p ? c : this, arguments);
        }
        return T;
      }
      function dE(o) {
        return function(s) {
          s = Ve(s);
          var c = aa(s) ? Er(s) : n, p = c ? c[0] : s.charAt(0), E = c ? Di(c, 1).join("") : s.slice(1);
          return p[o]() + E;
        };
      }
      function pa(o) {
        return function(s) {
          return $d(cx(ux(s).replace(MA, "")), o, "");
        };
      }
      function Bs(o) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new o();
            case 1:
              return new o(s[0]);
            case 2:
              return new o(s[0], s[1]);
            case 3:
              return new o(s[0], s[1], s[2]);
            case 4:
              return new o(s[0], s[1], s[2], s[3]);
            case 5:
              return new o(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var c = da(o.prototype), p = o.apply(c, s);
          return ct(p) ? p : c;
        };
      }
      function X2(o, s, c) {
        var p = Bs(o);
        function E() {
          for (var T = arguments.length, N = H(T), P = T, L = ma(E); P--; )
            N[P] = arguments[P];
          var z = T < 3 && N[0] !== L && N[T - 1] !== L ? [] : Ri(N, L);
          if (T -= z.length, T < c)
            return gE(
              o,
              s,
              Bu,
              E.placeholder,
              n,
              N,
              z,
              n,
              n,
              c - T
            );
          var W = this && this !== Lt && this instanceof E ? p : o;
          return Pn(W, this, N);
        }
        return E;
      }
      function hE(o) {
        return function(s, c, p) {
          var E = qe(s);
          if (!xn(s)) {
            var T = fe(c, 3);
            s = Ot(s), c = function(P) {
              return T(E[P], P, E);
            };
          }
          var N = o(s, c, p);
          return N > -1 ? E[T ? s[N] : N] : n;
        };
      }
      function pE(o) {
        return ai(function(s) {
          var c = s.length, p = c, E = tr.prototype.thru;
          for (o && s.reverse(); p--; ) {
            var T = s[p];
            if (typeof T != "function")
              throw new er(l);
            if (E && !N && $u(T) == "wrapper")
              var N = new tr([], !0);
          }
          for (p = N ? p : c; ++p < c; ) {
            T = s[p];
            var P = $u(T), L = P == "wrapper" ? Ch(T) : n;
            L && kh(L[0]) && L[1] == (F | k | O | B) && !L[4].length && L[9] == 1 ? N = N[$u(L[0])].apply(N, L[3]) : N = T.length == 1 && kh(T) ? N[P]() : N.thru(T);
          }
          return function() {
            var z = arguments, W = z[0];
            if (N && z.length == 1 && ge(W))
              return N.plant(W).value();
            for (var q = 0, J = c ? s[q].apply(this, z) : W; ++q < c; )
              J = s[q].call(this, J);
            return J;
          };
        });
      }
      function Bu(o, s, c, p, E, T, N, P, L, z) {
        var W = s & F, q = s & R, J = s & w, se = s & (k | I), de = s & $, xe = J ? n : Bs(o);
        function he() {
          for (var be = arguments.length, Ne = H(be), Ln = be; Ln--; )
            Ne[Ln] = arguments[Ln];
          if (se)
            var ln = ma(he), Bn = oT(Ne, ln);
          if (p && (Ne = lE(Ne, p, E, se)), T && (Ne = uE(Ne, T, N, se)), be -= Bn, se && be < z) {
            var gt = Ri(Ne, ln);
            return gE(
              o,
              s,
              Bu,
              he.placeholder,
              c,
              Ne,
              gt,
              P,
              L,
              z - be
            );
          }
          var Cr = q ? c : this, ci = J ? Cr[o] : o;
          return be = Ne.length, P ? Ne = hR(Ne, P) : de && be > 1 && Ne.reverse(), W && L < be && (Ne.length = L), this && this !== Lt && this instanceof he && (ci = xe || Bs(ci)), ci.apply(Cr, Ne);
        }
        return he;
      }
      function mE(o, s) {
        return function(c, p) {
          return w2(c, o, s(p), {});
        };
      }
      function Hu(o, s) {
        return function(c, p) {
          var E;
          if (c === n && p === n)
            return s;
          if (c !== n && (E = c), p !== n) {
            if (E === n)
              return p;
            typeof c == "string" || typeof p == "string" ? (c = Fn(c), p = Fn(p)) : (c = eE(c), p = eE(p)), E = o(c, p);
          }
          return E;
        };
      }
      function yh(o) {
        return ai(function(s) {
          return s = at(s, Dn(fe())), _e(function(c) {
            var p = this;
            return o(s, function(E) {
              return Pn(E, p, c);
            });
          });
        });
      }
      function Vu(o, s) {
        s = s === n ? " " : Fn(s);
        var c = s.length;
        if (c < 2)
          return c ? fh(s, o) : s;
        var p = fh(s, ku(o / sa(s)));
        return aa(s) ? Di(Er(p), 0, o).join("") : p.slice(0, o);
      }
      function q2(o, s, c, p) {
        var E = s & R, T = Bs(o);
        function N() {
          for (var P = -1, L = arguments.length, z = -1, W = p.length, q = H(W + L), J = this && this !== Lt && this instanceof N ? T : o; ++z < W; )
            q[z] = p[z];
          for (; L--; )
            q[z++] = arguments[++P];
          return Pn(J, E ? c : this, q);
        }
        return N;
      }
      function vE(o) {
        return function(s, c, p) {
          return p && typeof p != "number" && sn(s, c, p) && (c = p = n), s = ui(s), c === n ? (c = s, s = 0) : c = ui(c), p = p === n ? s < c ? 1 : -1 : ui(p), P2(s, c, p, o);
        };
      }
      function Uu(o) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = or(s), c = or(c)), o(s, c);
        };
      }
      function gE(o, s, c, p, E, T, N, P, L, z) {
        var W = s & k, q = W ? N : n, J = W ? n : N, se = W ? T : n, de = W ? n : T;
        s |= W ? O : D, s &= ~(W ? D : O), s & C || (s &= -4);
        var xe = [
          o,
          s,
          E,
          se,
          q,
          de,
          J,
          P,
          L,
          z
        ], he = c.apply(n, xe);
        return kh(o) && RE(he, xe), he.placeholder = p, IE(he, o, s);
      }
      function Eh(o) {
        var s = St[o];
        return function(c, p) {
          if (c = or(c), p = p == null ? 0 : Gt(ye(p), 292), p && Iy(c)) {
            var E = (Ve(c) + "e").split("e"), T = s(E[0] + "e" + (+E[1] + p));
            return E = (Ve(T) + "e").split("e"), +(E[0] + "e" + (+E[1] - p));
          }
          return s(c);
        };
      }
      var K2 = ca && 1 / vu(new ca([, -0]))[1] == ce ? function(o) {
        return new ca(o);
      } : Uh;
      function yE(o) {
        return function(s) {
          var c = Xt(s);
          return c == Ge ? Kd(s) : c == et ? dT(s) : iT(s, o(s));
        };
      }
      function oi(o, s, c, p, E, T, N, P) {
        var L = s & w;
        if (!L && typeof o != "function")
          throw new er(l);
        var z = p ? p.length : 0;
        if (z || (s &= -97, p = E = n), N = N === n ? N : bt(ye(N), 0), P = P === n ? P : ye(P), z -= E ? E.length : 0, s & D) {
          var W = p, q = E;
          p = E = n;
        }
        var J = L ? n : Ch(o), se = [
          o,
          s,
          c,
          p,
          E,
          W,
          q,
          T,
          N,
          P
        ];
        if (J && cR(se, J), o = se[0], s = se[1], c = se[2], p = se[3], E = se[4], P = se[9] = se[9] === n ? L ? 0 : o.length : bt(se[9] - z, 0), !P && s & (k | I) && (s &= -25), !s || s == R)
          var de = G2(o, s, c);
        else s == k || s == I ? de = X2(o, s, P) : (s == O || s == (R | O)) && !E.length ? de = q2(o, s, c, p) : de = Bu.apply(n, se);
        var xe = J ? Zy : RE;
        return IE(xe(de, se), o, s);
      }
      function EE(o, s, c, p) {
        return o === n || wr(o, ua[c]) && !ze.call(p, c) ? s : o;
      }
      function xE(o, s, c, p, E, T) {
        return ct(o) && ct(s) && (T.set(s, o), Du(o, s, n, xE, T), T.delete(s)), o;
      }
      function Y2(o) {
        return Us(o) ? n : o;
      }
      function wE(o, s, c, p, E, T) {
        var N = c & A, P = o.length, L = s.length;
        if (P != L && !(N && L > P))
          return !1;
        var z = T.get(o), W = T.get(s);
        if (z && W)
          return z == s && W == o;
        var q = -1, J = !0, se = c & S ? new xo() : n;
        for (T.set(o, s), T.set(s, o); ++q < P; ) {
          var de = o[q], xe = s[q];
          if (p)
            var he = N ? p(xe, de, q, s, o, T) : p(de, xe, q, o, s, T);
          if (he !== n) {
            if (he)
              continue;
            J = !1;
            break;
          }
          if (se) {
            if (!zd(s, function(be, Ne) {
              if (!As(se, Ne) && (de === be || E(de, be, c, p, T)))
                return se.push(Ne);
            })) {
              J = !1;
              break;
            }
          } else if (!(de === xe || E(de, xe, c, p, T))) {
            J = !1;
            break;
          }
        }
        return T.delete(o), T.delete(s), J;
      }
      function Q2(o, s, c, p, E, T, N) {
        switch (c) {
          case Wt:
            if (o.byteLength != s.byteLength || o.byteOffset != s.byteOffset)
              return !1;
            o = o.buffer, s = s.buffer;
          case nn:
            return !(o.byteLength != s.byteLength || !T(new Cu(o), new Cu(s)));
          case Ke:
          case ot:
          case Nt:
            return wr(+o, +s);
          case wt:
            return o.name == s.name && o.message == s.message;
          case Ae:
          case tn:
            return o == s + "";
          case Ge:
            var P = Kd;
          case et:
            var L = p & A;
            if (P || (P = vu), o.size != s.size && !L)
              return !1;
            var z = N.get(o);
            if (z)
              return z == s;
            p |= S, N.set(o, s);
            var W = wE(P(o), P(s), p, E, T, N);
            return N.delete(o), W;
          case Nn:
            if (Os)
              return Os.call(o) == Os.call(s);
        }
        return !1;
      }
      function Z2(o, s, c, p, E, T) {
        var N = c & A, P = xh(o), L = P.length, z = xh(s), W = z.length;
        if (L != W && !N)
          return !1;
        for (var q = L; q--; ) {
          var J = P[q];
          if (!(N ? J in s : ze.call(s, J)))
            return !1;
        }
        var se = T.get(o), de = T.get(s);
        if (se && de)
          return se == s && de == o;
        var xe = !0;
        T.set(o, s), T.set(s, o);
        for (var he = N; ++q < L; ) {
          J = P[q];
          var be = o[J], Ne = s[J];
          if (p)
            var Ln = N ? p(Ne, be, J, s, o, T) : p(be, Ne, J, o, s, T);
          if (!(Ln === n ? be === Ne || E(be, Ne, c, p, T) : Ln)) {
            xe = !1;
            break;
          }
          he || (he = J == "constructor");
        }
        if (xe && !he) {
          var ln = o.constructor, Bn = s.constructor;
          ln != Bn && "constructor" in o && "constructor" in s && !(typeof ln == "function" && ln instanceof ln && typeof Bn == "function" && Bn instanceof Bn) && (xe = !1);
        }
        return T.delete(o), T.delete(s), xe;
      }
      function ai(o) {
        return Th(AE(o, n, ME), o + "");
      }
      function xh(o) {
        return Uy(o, Ot, Sh);
      }
      function wh(o) {
        return Uy(o, wn, CE);
      }
      var Ch = Tu ? function(o) {
        return Tu.get(o);
      } : Uh;
      function $u(o) {
        for (var s = o.name + "", c = fa[s], p = ze.call(fa, s) ? c.length : 0; p--; ) {
          var E = c[p], T = E.func;
          if (T == null || T == o)
            return E.name;
        }
        return s;
      }
      function ma(o) {
        var s = ze.call(b, "placeholder") ? b : o;
        return s.placeholder;
      }
      function fe() {
        var o = b.iteratee || Hh;
        return o = o === Hh ? Wy : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function zu(o, s) {
        var c = o.__data__;
        return aR(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function _h(o) {
        for (var s = Ot(o), c = s.length; c--; ) {
          var p = s[c], E = o[p];
          s[c] = [p, E, bE(E)];
        }
        return s;
      }
      function _o(o, s) {
        var c = uT(o, s);
        return zy(c) ? c : n;
      }
      function J2(o) {
        var s = ze.call(o, yo), c = o[yo];
        try {
          o[yo] = n;
          var p = !0;
        } catch {
        }
        var E = xu.call(o);
        return p && (s ? o[yo] = c : delete o[yo]), E;
      }
      var Sh = Qd ? function(o) {
        return o == null ? [] : (o = qe(o), Ai(Qd(o), function(s) {
          return Ty.call(o, s);
        }));
      } : $h, CE = Qd ? function(o) {
        for (var s = []; o; )
          Ti(s, Sh(o)), o = _u(o);
        return s;
      } : $h, Xt = an;
      (Zd && Xt(new Zd(new ArrayBuffer(1))) != Wt || Rs && Xt(new Rs()) != Ge || Jd && Xt(Jd.resolve()) != Xe || ca && Xt(new ca()) != et || Is && Xt(new Is()) != Lr) && (Xt = function(o) {
        var s = an(o), c = s == Ce ? o.constructor : n, p = c ? So(c) : "";
        if (p)
          switch (p) {
            case FT:
              return Wt;
            case MT:
              return Ge;
            case LT:
              return Xe;
            case BT:
              return et;
            case HT:
              return Lr;
          }
        return s;
      });
      function eR(o, s, c) {
        for (var p = -1, E = c.length; ++p < E; ) {
          var T = c[p], N = T.size;
          switch (T.type) {
            case "drop":
              o += N;
              break;
            case "dropRight":
              s -= N;
              break;
            case "take":
              s = Gt(s, o + N);
              break;
            case "takeRight":
              o = bt(o, s - N);
              break;
          }
        }
        return { start: o, end: s };
      }
      function tR(o) {
        var s = o.match(Hr);
        return s ? s[1].split(vo) : [];
      }
      function _E(o, s, c) {
        s = Pi(s, o);
        for (var p = -1, E = s.length, T = !1; ++p < E; ) {
          var N = $r(s[p]);
          if (!(T = o != null && c(o, N)))
            break;
          o = o[N];
        }
        return T || ++p != E ? T : (E = o == null ? 0 : o.length, !!E && Yu(E) && si(N, E) && (ge(o) || bo(o)));
      }
      function nR(o) {
        var s = o.length, c = new o.constructor(s);
        return s && typeof o[0] == "string" && ze.call(o, "index") && (c.index = o.index, c.input = o.input), c;
      }
      function SE(o) {
        return typeof o.constructor == "function" && !Hs(o) ? da(_u(o)) : {};
      }
      function rR(o, s, c) {
        var p = o.constructor;
        switch (s) {
          case nn:
            return gh(o);
          case Ke:
          case ot:
            return new p(+o);
          case Wt:
            return V2(o, c);
          case ti:
          case ta:
          case qn:
          case na:
          case _s:
          case Ss:
          case ho:
          case ra:
          case bs:
            return aE(o, c);
          case Ge:
            return new p();
          case Nt:
          case tn:
            return new p(o);
          case Ae:
            return U2(o);
          case et:
            return new p();
          case Nn:
            return $2(o);
        }
      }
      function iR(o, s) {
        var c = s.length;
        if (!c)
          return o;
        var p = c - 1;
        return s[p] = (c > 1 ? "& " : "") + s[p], s = s.join(c > 2 ? ", " : " "), o.replace(mo, `{
/* [wrapped with ` + s + `] */
`);
      }
      function oR(o) {
        return ge(o) || bo(o) || !!(Ry && o && o[Ry]);
      }
      function si(o, s) {
        var c = typeof o;
        return s = s ?? G, !!s && (c == "number" || c != "symbol" && gA.test(o)) && o > -1 && o % 1 == 0 && o < s;
      }
      function sn(o, s, c) {
        if (!ct(c))
          return !1;
        var p = typeof s;
        return (p == "number" ? xn(c) && si(s, c.length) : p == "string" && s in c) ? wr(c[s], o) : !1;
      }
      function bh(o, s) {
        if (ge(o))
          return !1;
        var c = typeof o;
        return c == "number" || c == "symbol" || c == "boolean" || o == null || Mn(o) ? !0 : ki.test(o) || !Kn.test(o) || s != null && o in qe(s);
      }
      function aR(o) {
        var s = typeof o;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
      }
      function kh(o) {
        var s = $u(o), c = b[s];
        if (typeof c != "function" || !(s in Te.prototype))
          return !1;
        if (o === c)
          return !0;
        var p = Ch(c);
        return !!p && o === p[0];
      }
      function sR(o) {
        return !!by && by in o;
      }
      var lR = yu ? li : zh;
      function Hs(o) {
        var s = o && o.constructor, c = typeof s == "function" && s.prototype || ua;
        return o === c;
      }
      function bE(o) {
        return o === o && !ct(o);
      }
      function kE(o, s) {
        return function(c) {
          return c == null ? !1 : c[o] === s && (s !== n || o in qe(c));
        };
      }
      function uR(o) {
        var s = qu(o, function(p) {
          return c.size === d && c.clear(), p;
        }), c = s.cache;
        return s;
      }
      function cR(o, s) {
        var c = o[1], p = s[1], E = c | p, T = E < (R | w | F), N = p == F && c == k || p == F && c == B && o[7].length <= s[8] || p == (F | B) && s[7].length <= s[8] && c == k;
        if (!(T || N))
          return o;
        p & R && (o[2] = s[2], E |= c & R ? 0 : C);
        var P = s[3];
        if (P) {
          var L = o[3];
          o[3] = L ? lE(L, P, s[4]) : P, o[4] = L ? Ri(o[3], h) : s[4];
        }
        return P = s[5], P && (L = o[5], o[5] = L ? uE(L, P, s[6]) : P, o[6] = L ? Ri(o[5], h) : s[6]), P = s[7], P && (o[7] = P), p & F && (o[8] = o[8] == null ? s[8] : Gt(o[8], s[8])), o[9] == null && (o[9] = s[9]), o[0] = s[0], o[1] = E, o;
      }
      function fR(o) {
        var s = [];
        if (o != null)
          for (var c in qe(o))
            s.push(c);
        return s;
      }
      function dR(o) {
        return xu.call(o);
      }
      function AE(o, s, c) {
        return s = bt(s === n ? o.length - 1 : s, 0), function() {
          for (var p = arguments, E = -1, T = bt(p.length - s, 0), N = H(T); ++E < T; )
            N[E] = p[s + E];
          E = -1;
          for (var P = H(s + 1); ++E < s; )
            P[E] = p[E];
          return P[s] = c(N), Pn(o, this, P);
        };
      }
      function TE(o, s) {
        return s.length < 2 ? o : Co(o, rr(s, 0, -1));
      }
      function hR(o, s) {
        for (var c = o.length, p = Gt(s.length, c), E = En(o); p--; ) {
          var T = s[p];
          o[p] = si(T, c) ? E[T] : n;
        }
        return o;
      }
      function Ah(o, s) {
        if (!(s === "constructor" && typeof o[s] == "function") && s != "__proto__")
          return o[s];
      }
      var RE = NE(Zy), Vs = TT || function(o, s) {
        return Lt.setTimeout(o, s);
      }, Th = NE(M2);
      function IE(o, s, c) {
        var p = s + "";
        return Th(o, iR(p, pR(tR(p), c)));
      }
      function NE(o) {
        var s = 0, c = 0;
        return function() {
          var p = OT(), E = ae - (p - c);
          if (c = p, E > 0) {
            if (++s >= ne)
              return arguments[0];
          } else
            s = 0;
          return o.apply(n, arguments);
        };
      }
      function Wu(o, s) {
        var c = -1, p = o.length, E = p - 1;
        for (s = s === n ? p : s; ++c < s; ) {
          var T = ch(c, E), N = o[T];
          o[T] = o[c], o[c] = N;
        }
        return o.length = s, o;
      }
      var OE = uR(function(o) {
        var s = [];
        return o.charCodeAt(0) === 46 && s.push(""), o.replace(_t, function(c, p, E, T) {
          s.push(E ? T.replace(fA, "$1") : p || c);
        }), s;
      });
      function $r(o) {
        if (typeof o == "string" || Mn(o))
          return o;
        var s = o + "";
        return s == "0" && 1 / o == -ce ? "-0" : s;
      }
      function So(o) {
        if (o != null) {
          try {
            return Eu.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function pR(o, s) {
        return Jn(Ue, function(c) {
          var p = "_." + c[0];
          s & c[1] && !pu(o, p) && o.push(p);
        }), o.sort();
      }
      function PE(o) {
        if (o instanceof Te)
          return o.clone();
        var s = new tr(o.__wrapped__, o.__chain__);
        return s.__actions__ = En(o.__actions__), s.__index__ = o.__index__, s.__values__ = o.__values__, s;
      }
      function mR(o, s, c) {
        (c ? sn(o, s, c) : s === n) ? s = 1 : s = bt(ye(s), 0);
        var p = o == null ? 0 : o.length;
        if (!p || s < 1)
          return [];
        for (var E = 0, T = 0, N = H(ku(p / s)); E < p; )
          N[T++] = rr(o, E, E += s);
        return N;
      }
      function vR(o) {
        for (var s = -1, c = o == null ? 0 : o.length, p = 0, E = []; ++s < c; ) {
          var T = o[s];
          T && (E[p++] = T);
        }
        return E;
      }
      function gR() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var s = H(o - 1), c = arguments[0], p = o; p--; )
          s[p - 1] = arguments[p];
        return Ti(ge(c) ? En(c) : [c], Bt(s, 1));
      }
      var yR = _e(function(o, s) {
        return vt(o) ? Ds(o, Bt(s, 1, vt, !0)) : [];
      }), ER = _e(function(o, s) {
        var c = ir(s);
        return vt(c) && (c = n), vt(o) ? Ds(o, Bt(s, 1, vt, !0), fe(c, 2)) : [];
      }), xR = _e(function(o, s) {
        var c = ir(s);
        return vt(c) && (c = n), vt(o) ? Ds(o, Bt(s, 1, vt, !0), n, c) : [];
      });
      function wR(o, s, c) {
        var p = o == null ? 0 : o.length;
        return p ? (s = c || s === n ? 1 : ye(s), rr(o, s < 0 ? 0 : s, p)) : [];
      }
      function CR(o, s, c) {
        var p = o == null ? 0 : o.length;
        return p ? (s = c || s === n ? 1 : ye(s), s = p - s, rr(o, 0, s < 0 ? 0 : s)) : [];
      }
      function _R(o, s) {
        return o && o.length ? Mu(o, fe(s, 3), !0, !0) : [];
      }
      function SR(o, s) {
        return o && o.length ? Mu(o, fe(s, 3), !0) : [];
      }
      function bR(o, s, c, p) {
        var E = o == null ? 0 : o.length;
        return E ? (c && typeof c != "number" && sn(o, s, c) && (c = 0, p = E), g2(o, s, c, p)) : [];
      }
      function DE(o, s, c) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = c == null ? 0 : ye(c);
        return E < 0 && (E = bt(p + E, 0)), mu(o, fe(s, 3), E);
      }
      function FE(o, s, c) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = p - 1;
        return c !== n && (E = ye(c), E = c < 0 ? bt(p + E, 0) : Gt(E, p - 1)), mu(o, fe(s, 3), E, !0);
      }
      function ME(o) {
        var s = o == null ? 0 : o.length;
        return s ? Bt(o, 1) : [];
      }
      function kR(o) {
        var s = o == null ? 0 : o.length;
        return s ? Bt(o, ce) : [];
      }
      function AR(o, s) {
        var c = o == null ? 0 : o.length;
        return c ? (s = s === n ? 1 : ye(s), Bt(o, s)) : [];
      }
      function TR(o) {
        for (var s = -1, c = o == null ? 0 : o.length, p = {}; ++s < c; ) {
          var E = o[s];
          p[E[0]] = E[1];
        }
        return p;
      }
      function LE(o) {
        return o && o.length ? o[0] : n;
      }
      function RR(o, s, c) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = c == null ? 0 : ye(c);
        return E < 0 && (E = bt(p + E, 0)), oa(o, s, E);
      }
      function IR(o) {
        var s = o == null ? 0 : o.length;
        return s ? rr(o, 0, -1) : [];
      }
      var NR = _e(function(o) {
        var s = at(o, mh);
        return s.length && s[0] === o[0] ? oh(s) : [];
      }), OR = _e(function(o) {
        var s = ir(o), c = at(o, mh);
        return s === ir(c) ? s = n : c.pop(), c.length && c[0] === o[0] ? oh(c, fe(s, 2)) : [];
      }), PR = _e(function(o) {
        var s = ir(o), c = at(o, mh);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === o[0] ? oh(c, n, s) : [];
      });
      function DR(o, s) {
        return o == null ? "" : IT.call(o, s);
      }
      function ir(o) {
        var s = o == null ? 0 : o.length;
        return s ? o[s - 1] : n;
      }
      function FR(o, s, c) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = p;
        return c !== n && (E = ye(c), E = E < 0 ? bt(p + E, 0) : Gt(E, p - 1)), s === s ? pT(o, s, E) : mu(o, gy, E, !0);
      }
      function MR(o, s) {
        return o && o.length ? qy(o, ye(s)) : n;
      }
      var LR = _e(BE);
      function BE(o, s) {
        return o && o.length && s && s.length ? uh(o, s) : o;
      }
      function BR(o, s, c) {
        return o && o.length && s && s.length ? uh(o, s, fe(c, 2)) : o;
      }
      function HR(o, s, c) {
        return o && o.length && s && s.length ? uh(o, s, n, c) : o;
      }
      var VR = ai(function(o, s) {
        var c = o == null ? 0 : o.length, p = th(o, s);
        return Qy(o, at(s, function(E) {
          return si(E, c) ? +E : E;
        }).sort(sE)), p;
      });
      function UR(o, s) {
        var c = [];
        if (!(o && o.length))
          return c;
        var p = -1, E = [], T = o.length;
        for (s = fe(s, 3); ++p < T; ) {
          var N = o[p];
          s(N, p, o) && (c.push(N), E.push(p));
        }
        return Qy(o, E), c;
      }
      function Rh(o) {
        return o == null ? o : DT.call(o);
      }
      function $R(o, s, c) {
        var p = o == null ? 0 : o.length;
        return p ? (c && typeof c != "number" && sn(o, s, c) ? (s = 0, c = p) : (s = s == null ? 0 : ye(s), c = c === n ? p : ye(c)), rr(o, s, c)) : [];
      }
      function zR(o, s) {
        return Fu(o, s);
      }
      function WR(o, s, c) {
        return dh(o, s, fe(c, 2));
      }
      function jR(o, s) {
        var c = o == null ? 0 : o.length;
        if (c) {
          var p = Fu(o, s);
          if (p < c && wr(o[p], s))
            return p;
        }
        return -1;
      }
      function GR(o, s) {
        return Fu(o, s, !0);
      }
      function XR(o, s, c) {
        return dh(o, s, fe(c, 2), !0);
      }
      function qR(o, s) {
        var c = o == null ? 0 : o.length;
        if (c) {
          var p = Fu(o, s, !0) - 1;
          if (wr(o[p], s))
            return p;
        }
        return -1;
      }
      function KR(o) {
        return o && o.length ? Jy(o) : [];
      }
      function YR(o, s) {
        return o && o.length ? Jy(o, fe(s, 2)) : [];
      }
      function QR(o) {
        var s = o == null ? 0 : o.length;
        return s ? rr(o, 1, s) : [];
      }
      function ZR(o, s, c) {
        return o && o.length ? (s = c || s === n ? 1 : ye(s), rr(o, 0, s < 0 ? 0 : s)) : [];
      }
      function JR(o, s, c) {
        var p = o == null ? 0 : o.length;
        return p ? (s = c || s === n ? 1 : ye(s), s = p - s, rr(o, s < 0 ? 0 : s, p)) : [];
      }
      function eI(o, s) {
        return o && o.length ? Mu(o, fe(s, 3), !1, !0) : [];
      }
      function tI(o, s) {
        return o && o.length ? Mu(o, fe(s, 3)) : [];
      }
      var nI = _e(function(o) {
        return Oi(Bt(o, 1, vt, !0));
      }), rI = _e(function(o) {
        var s = ir(o);
        return vt(s) && (s = n), Oi(Bt(o, 1, vt, !0), fe(s, 2));
      }), iI = _e(function(o) {
        var s = ir(o);
        return s = typeof s == "function" ? s : n, Oi(Bt(o, 1, vt, !0), n, s);
      });
      function oI(o) {
        return o && o.length ? Oi(o) : [];
      }
      function aI(o, s) {
        return o && o.length ? Oi(o, fe(s, 2)) : [];
      }
      function sI(o, s) {
        return s = typeof s == "function" ? s : n, o && o.length ? Oi(o, n, s) : [];
      }
      function Ih(o) {
        if (!(o && o.length))
          return [];
        var s = 0;
        return o = Ai(o, function(c) {
          if (vt(c))
            return s = bt(c.length, s), !0;
        }), Xd(s, function(c) {
          return at(o, Wd(c));
        });
      }
      function HE(o, s) {
        if (!(o && o.length))
          return [];
        var c = Ih(o);
        return s == null ? c : at(c, function(p) {
          return Pn(s, n, p);
        });
      }
      var lI = _e(function(o, s) {
        return vt(o) ? Ds(o, s) : [];
      }), uI = _e(function(o) {
        return ph(Ai(o, vt));
      }), cI = _e(function(o) {
        var s = ir(o);
        return vt(s) && (s = n), ph(Ai(o, vt), fe(s, 2));
      }), fI = _e(function(o) {
        var s = ir(o);
        return s = typeof s == "function" ? s : n, ph(Ai(o, vt), n, s);
      }), dI = _e(Ih);
      function hI(o, s) {
        return rE(o || [], s || [], Ps);
      }
      function pI(o, s) {
        return rE(o || [], s || [], Ls);
      }
      var mI = _e(function(o) {
        var s = o.length, c = s > 1 ? o[s - 1] : n;
        return c = typeof c == "function" ? (o.pop(), c) : n, HE(o, c);
      });
      function VE(o) {
        var s = b(o);
        return s.__chain__ = !0, s;
      }
      function vI(o, s) {
        return s(o), o;
      }
      function ju(o, s) {
        return s(o);
      }
      var gI = ai(function(o) {
        var s = o.length, c = s ? o[0] : 0, p = this.__wrapped__, E = function(T) {
          return th(T, o);
        };
        return s > 1 || this.__actions__.length || !(p instanceof Te) || !si(c) ? this.thru(E) : (p = p.slice(c, +c + (s ? 1 : 0)), p.__actions__.push({
          func: ju,
          args: [E],
          thisArg: n
        }), new tr(p, this.__chain__).thru(function(T) {
          return s && !T.length && T.push(n), T;
        }));
      });
      function yI() {
        return VE(this);
      }
      function EI() {
        return new tr(this.value(), this.__chain__);
      }
      function xI() {
        this.__values__ === n && (this.__values__ = ex(this.value()));
        var o = this.__index__ >= this.__values__.length, s = o ? n : this.__values__[this.__index__++];
        return { done: o, value: s };
      }
      function wI() {
        return this;
      }
      function CI(o) {
        for (var s, c = this; c instanceof Iu; ) {
          var p = PE(c);
          p.__index__ = 0, p.__values__ = n, s ? E.__wrapped__ = p : s = p;
          var E = p;
          c = c.__wrapped__;
        }
        return E.__wrapped__ = o, s;
      }
      function _I() {
        var o = this.__wrapped__;
        if (o instanceof Te) {
          var s = o;
          return this.__actions__.length && (s = new Te(this)), s = s.reverse(), s.__actions__.push({
            func: ju,
            args: [Rh],
            thisArg: n
          }), new tr(s, this.__chain__);
        }
        return this.thru(Rh);
      }
      function SI() {
        return nE(this.__wrapped__, this.__actions__);
      }
      var bI = Lu(function(o, s, c) {
        ze.call(o, c) ? ++o[c] : ii(o, c, 1);
      });
      function kI(o, s, c) {
        var p = ge(o) ? my : v2;
        return c && sn(o, s, c) && (s = n), p(o, fe(s, 3));
      }
      function AI(o, s) {
        var c = ge(o) ? Ai : Hy;
        return c(o, fe(s, 3));
      }
      var TI = hE(DE), RI = hE(FE);
      function II(o, s) {
        return Bt(Gu(o, s), 1);
      }
      function NI(o, s) {
        return Bt(Gu(o, s), ce);
      }
      function OI(o, s, c) {
        return c = c === n ? 1 : ye(c), Bt(Gu(o, s), c);
      }
      function UE(o, s) {
        var c = ge(o) ? Jn : Ni;
        return c(o, fe(s, 3));
      }
      function $E(o, s) {
        var c = ge(o) ? QA : By;
        return c(o, fe(s, 3));
      }
      var PI = Lu(function(o, s, c) {
        ze.call(o, c) ? o[c].push(s) : ii(o, c, [s]);
      });
      function DI(o, s, c, p) {
        o = xn(o) ? o : ga(o), c = c && !p ? ye(c) : 0;
        var E = o.length;
        return c < 0 && (c = bt(E + c, 0)), Qu(o) ? c <= E && o.indexOf(s, c) > -1 : !!E && oa(o, s, c) > -1;
      }
      var FI = _e(function(o, s, c) {
        var p = -1, E = typeof s == "function", T = xn(o) ? H(o.length) : [];
        return Ni(o, function(N) {
          T[++p] = E ? Pn(s, N, c) : Fs(N, s, c);
        }), T;
      }), MI = Lu(function(o, s, c) {
        ii(o, c, s);
      });
      function Gu(o, s) {
        var c = ge(o) ? at : jy;
        return c(o, fe(s, 3));
      }
      function LI(o, s, c, p) {
        return o == null ? [] : (ge(s) || (s = s == null ? [] : [s]), c = p ? n : c, ge(c) || (c = c == null ? [] : [c]), Ky(o, s, c));
      }
      var BI = Lu(function(o, s, c) {
        o[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function HI(o, s, c) {
        var p = ge(o) ? $d : Ey, E = arguments.length < 3;
        return p(o, fe(s, 4), c, E, Ni);
      }
      function VI(o, s, c) {
        var p = ge(o) ? ZA : Ey, E = arguments.length < 3;
        return p(o, fe(s, 4), c, E, By);
      }
      function UI(o, s) {
        var c = ge(o) ? Ai : Hy;
        return c(o, Ku(fe(s, 3)));
      }
      function $I(o) {
        var s = ge(o) ? Dy : D2;
        return s(o);
      }
      function zI(o, s, c) {
        (c ? sn(o, s, c) : s === n) ? s = 1 : s = ye(s);
        var p = ge(o) ? f2 : F2;
        return p(o, s);
      }
      function WI(o) {
        var s = ge(o) ? d2 : L2;
        return s(o);
      }
      function jI(o) {
        if (o == null)
          return 0;
        if (xn(o))
          return Qu(o) ? sa(o) : o.length;
        var s = Xt(o);
        return s == Ge || s == et ? o.size : sh(o).length;
      }
      function GI(o, s, c) {
        var p = ge(o) ? zd : B2;
        return c && sn(o, s, c) && (s = n), p(o, fe(s, 3));
      }
      var XI = _e(function(o, s) {
        if (o == null)
          return [];
        var c = s.length;
        return c > 1 && sn(o, s[0], s[1]) ? s = [] : c > 2 && sn(s[0], s[1], s[2]) && (s = [s[0]]), Ky(o, Bt(s, 1), []);
      }), Xu = AT || function() {
        return Lt.Date.now();
      };
      function qI(o, s) {
        if (typeof s != "function")
          throw new er(l);
        return o = ye(o), function() {
          if (--o < 1)
            return s.apply(this, arguments);
        };
      }
      function zE(o, s, c) {
        return s = c ? n : s, s = o && s == null ? o.length : s, oi(o, F, n, n, n, n, s);
      }
      function WE(o, s) {
        var c;
        if (typeof s != "function")
          throw new er(l);
        return o = ye(o), function() {
          return --o > 0 && (c = s.apply(this, arguments)), o <= 1 && (s = n), c;
        };
      }
      var Nh = _e(function(o, s, c) {
        var p = R;
        if (c.length) {
          var E = Ri(c, ma(Nh));
          p |= O;
        }
        return oi(o, p, s, c, E);
      }), jE = _e(function(o, s, c) {
        var p = R | w;
        if (c.length) {
          var E = Ri(c, ma(jE));
          p |= O;
        }
        return oi(s, p, o, c, E);
      });
      function GE(o, s, c) {
        s = c ? n : s;
        var p = oi(o, k, n, n, n, n, n, s);
        return p.placeholder = GE.placeholder, p;
      }
      function XE(o, s, c) {
        s = c ? n : s;
        var p = oi(o, I, n, n, n, n, n, s);
        return p.placeholder = XE.placeholder, p;
      }
      function qE(o, s, c) {
        var p, E, T, N, P, L, z = 0, W = !1, q = !1, J = !0;
        if (typeof o != "function")
          throw new er(l);
        s = or(s) || 0, ct(c) && (W = !!c.leading, q = "maxWait" in c, T = q ? bt(or(c.maxWait) || 0, s) : T, J = "trailing" in c ? !!c.trailing : J);
        function se(gt) {
          var Cr = p, ci = E;
          return p = E = n, z = gt, N = o.apply(ci, Cr), N;
        }
        function de(gt) {
          return z = gt, P = Vs(be, s), W ? se(gt) : N;
        }
        function xe(gt) {
          var Cr = gt - L, ci = gt - z, hx = s - Cr;
          return q ? Gt(hx, T - ci) : hx;
        }
        function he(gt) {
          var Cr = gt - L, ci = gt - z;
          return L === n || Cr >= s || Cr < 0 || q && ci >= T;
        }
        function be() {
          var gt = Xu();
          if (he(gt))
            return Ne(gt);
          P = Vs(be, xe(gt));
        }
        function Ne(gt) {
          return P = n, J && p ? se(gt) : (p = E = n, N);
        }
        function Ln() {
          P !== n && iE(P), z = 0, p = L = E = P = n;
        }
        function ln() {
          return P === n ? N : Ne(Xu());
        }
        function Bn() {
          var gt = Xu(), Cr = he(gt);
          if (p = arguments, E = this, L = gt, Cr) {
            if (P === n)
              return de(L);
            if (q)
              return iE(P), P = Vs(be, s), se(L);
          }
          return P === n && (P = Vs(be, s)), N;
        }
        return Bn.cancel = Ln, Bn.flush = ln, Bn;
      }
      var KI = _e(function(o, s) {
        return Ly(o, 1, s);
      }), YI = _e(function(o, s, c) {
        return Ly(o, or(s) || 0, c);
      });
      function QI(o) {
        return oi(o, $);
      }
      function qu(o, s) {
        if (typeof o != "function" || s != null && typeof s != "function")
          throw new er(l);
        var c = function() {
          var p = arguments, E = s ? s.apply(this, p) : p[0], T = c.cache;
          if (T.has(E))
            return T.get(E);
          var N = o.apply(this, p);
          return c.cache = T.set(E, N) || T, N;
        };
        return c.cache = new (qu.Cache || ri)(), c;
      }
      qu.Cache = ri;
      function Ku(o) {
        if (typeof o != "function")
          throw new er(l);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !o.call(this);
            case 1:
              return !o.call(this, s[0]);
            case 2:
              return !o.call(this, s[0], s[1]);
            case 3:
              return !o.call(this, s[0], s[1], s[2]);
          }
          return !o.apply(this, s);
        };
      }
      function ZI(o) {
        return WE(2, o);
      }
      var JI = H2(function(o, s) {
        s = s.length == 1 && ge(s[0]) ? at(s[0], Dn(fe())) : at(Bt(s, 1), Dn(fe()));
        var c = s.length;
        return _e(function(p) {
          for (var E = -1, T = Gt(p.length, c); ++E < T; )
            p[E] = s[E].call(this, p[E]);
          return Pn(o, this, p);
        });
      }), Oh = _e(function(o, s) {
        var c = Ri(s, ma(Oh));
        return oi(o, O, n, s, c);
      }), KE = _e(function(o, s) {
        var c = Ri(s, ma(KE));
        return oi(o, D, n, s, c);
      }), eN = ai(function(o, s) {
        return oi(o, B, n, n, n, s);
      });
      function tN(o, s) {
        if (typeof o != "function")
          throw new er(l);
        return s = s === n ? s : ye(s), _e(o, s);
      }
      function nN(o, s) {
        if (typeof o != "function")
          throw new er(l);
        return s = s == null ? 0 : bt(ye(s), 0), _e(function(c) {
          var p = c[s], E = Di(c, 0, s);
          return p && Ti(E, p), Pn(o, this, E);
        });
      }
      function rN(o, s, c) {
        var p = !0, E = !0;
        if (typeof o != "function")
          throw new er(l);
        return ct(c) && (p = "leading" in c ? !!c.leading : p, E = "trailing" in c ? !!c.trailing : E), qE(o, s, {
          leading: p,
          maxWait: s,
          trailing: E
        });
      }
      function iN(o) {
        return zE(o, 1);
      }
      function oN(o, s) {
        return Oh(vh(s), o);
      }
      function aN() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return ge(o) ? o : [o];
      }
      function sN(o) {
        return nr(o, x);
      }
      function lN(o, s) {
        return s = typeof s == "function" ? s : n, nr(o, x, s);
      }
      function uN(o) {
        return nr(o, m | x);
      }
      function cN(o, s) {
        return s = typeof s == "function" ? s : n, nr(o, m | x, s);
      }
      function fN(o, s) {
        return s == null || My(o, s, Ot(s));
      }
      function wr(o, s) {
        return o === s || o !== o && s !== s;
      }
      var dN = Uu(ih), hN = Uu(function(o, s) {
        return o >= s;
      }), bo = $y(/* @__PURE__ */ function() {
        return arguments;
      }()) ? $y : function(o) {
        return pt(o) && ze.call(o, "callee") && !Ty.call(o, "callee");
      }, ge = H.isArray, pN = uy ? Dn(uy) : C2;
      function xn(o) {
        return o != null && Yu(o.length) && !li(o);
      }
      function vt(o) {
        return pt(o) && xn(o);
      }
      function mN(o) {
        return o === !0 || o === !1 || pt(o) && an(o) == Ke;
      }
      var Fi = RT || zh, vN = cy ? Dn(cy) : _2;
      function gN(o) {
        return pt(o) && o.nodeType === 1 && !Us(o);
      }
      function yN(o) {
        if (o == null)
          return !0;
        if (xn(o) && (ge(o) || typeof o == "string" || typeof o.splice == "function" || Fi(o) || va(o) || bo(o)))
          return !o.length;
        var s = Xt(o);
        if (s == Ge || s == et)
          return !o.size;
        if (Hs(o))
          return !sh(o).length;
        for (var c in o)
          if (ze.call(o, c))
            return !1;
        return !0;
      }
      function EN(o, s) {
        return Ms(o, s);
      }
      function xN(o, s, c) {
        c = typeof c == "function" ? c : n;
        var p = c ? c(o, s) : n;
        return p === n ? Ms(o, s, n, c) : !!p;
      }
      function Ph(o) {
        if (!pt(o))
          return !1;
        var s = an(o);
        return s == wt || s == Se || typeof o.message == "string" && typeof o.name == "string" && !Us(o);
      }
      function wN(o) {
        return typeof o == "number" && Iy(o);
      }
      function li(o) {
        if (!ct(o))
          return !1;
        var s = an(o);
        return s == ut || s == zt || s == Et || s == $e;
      }
      function YE(o) {
        return typeof o == "number" && o == ye(o);
      }
      function Yu(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= G;
      }
      function ct(o) {
        var s = typeof o;
        return o != null && (s == "object" || s == "function");
      }
      function pt(o) {
        return o != null && typeof o == "object";
      }
      var QE = fy ? Dn(fy) : b2;
      function CN(o, s) {
        return o === s || ah(o, s, _h(s));
      }
      function _N(o, s, c) {
        return c = typeof c == "function" ? c : n, ah(o, s, _h(s), c);
      }
      function SN(o) {
        return ZE(o) && o != +o;
      }
      function bN(o) {
        if (lR(o))
          throw new me(a);
        return zy(o);
      }
      function kN(o) {
        return o === null;
      }
      function AN(o) {
        return o == null;
      }
      function ZE(o) {
        return typeof o == "number" || pt(o) && an(o) == Nt;
      }
      function Us(o) {
        if (!pt(o) || an(o) != Ce)
          return !1;
        var s = _u(o);
        if (s === null)
          return !0;
        var c = ze.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && Eu.call(c) == _T;
      }
      var Dh = dy ? Dn(dy) : k2;
      function TN(o) {
        return YE(o) && o >= -G && o <= G;
      }
      var JE = hy ? Dn(hy) : A2;
      function Qu(o) {
        return typeof o == "string" || !ge(o) && pt(o) && an(o) == tn;
      }
      function Mn(o) {
        return typeof o == "symbol" || pt(o) && an(o) == Nn;
      }
      var va = py ? Dn(py) : T2;
      function RN(o) {
        return o === n;
      }
      function IN(o) {
        return pt(o) && Xt(o) == Lr;
      }
      function NN(o) {
        return pt(o) && an(o) == ea;
      }
      var ON = Uu(lh), PN = Uu(function(o, s) {
        return o <= s;
      });
      function ex(o) {
        if (!o)
          return [];
        if (xn(o))
          return Qu(o) ? Er(o) : En(o);
        if (Ts && o[Ts])
          return fT(o[Ts]());
        var s = Xt(o), c = s == Ge ? Kd : s == et ? vu : ga;
        return c(o);
      }
      function ui(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = or(o), o === ce || o === -ce) {
          var s = o < 0 ? -1 : 1;
          return s * X;
        }
        return o === o ? o : 0;
      }
      function ye(o) {
        var s = ui(o), c = s % 1;
        return s === s ? c ? s - c : s : 0;
      }
      function tx(o) {
        return o ? wo(ye(o), 0, re) : 0;
      }
      function or(o) {
        if (typeof o == "number")
          return o;
        if (Mn(o))
          return Y;
        if (ct(o)) {
          var s = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = ct(s) ? s + "" : s;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = xy(o);
        var c = pA.test(o);
        return c || vA.test(o) ? qA(o.slice(2), c ? 2 : 8) : hA.test(o) ? Y : +o;
      }
      function nx(o) {
        return Ur(o, wn(o));
      }
      function DN(o) {
        return o ? wo(ye(o), -G, G) : o === 0 ? o : 0;
      }
      function Ve(o) {
        return o == null ? "" : Fn(o);
      }
      var FN = ha(function(o, s) {
        if (Hs(s) || xn(s)) {
          Ur(s, Ot(s), o);
          return;
        }
        for (var c in s)
          ze.call(s, c) && Ps(o, c, s[c]);
      }), rx = ha(function(o, s) {
        Ur(s, wn(s), o);
      }), Zu = ha(function(o, s, c, p) {
        Ur(s, wn(s), o, p);
      }), MN = ha(function(o, s, c, p) {
        Ur(s, Ot(s), o, p);
      }), LN = ai(th);
      function BN(o, s) {
        var c = da(o);
        return s == null ? c : Fy(c, s);
      }
      var HN = _e(function(o, s) {
        o = qe(o);
        var c = -1, p = s.length, E = p > 2 ? s[2] : n;
        for (E && sn(s[0], s[1], E) && (p = 1); ++c < p; )
          for (var T = s[c], N = wn(T), P = -1, L = N.length; ++P < L; ) {
            var z = N[P], W = o[z];
            (W === n || wr(W, ua[z]) && !ze.call(o, z)) && (o[z] = T[z]);
          }
        return o;
      }), VN = _e(function(o) {
        return o.push(n, xE), Pn(ix, n, o);
      });
      function UN(o, s) {
        return vy(o, fe(s, 3), Vr);
      }
      function $N(o, s) {
        return vy(o, fe(s, 3), rh);
      }
      function zN(o, s) {
        return o == null ? o : nh(o, fe(s, 3), wn);
      }
      function WN(o, s) {
        return o == null ? o : Vy(o, fe(s, 3), wn);
      }
      function jN(o, s) {
        return o && Vr(o, fe(s, 3));
      }
      function GN(o, s) {
        return o && rh(o, fe(s, 3));
      }
      function XN(o) {
        return o == null ? [] : Pu(o, Ot(o));
      }
      function qN(o) {
        return o == null ? [] : Pu(o, wn(o));
      }
      function Fh(o, s, c) {
        var p = o == null ? n : Co(o, s);
        return p === n ? c : p;
      }
      function KN(o, s) {
        return o != null && _E(o, s, y2);
      }
      function Mh(o, s) {
        return o != null && _E(o, s, E2);
      }
      var YN = mE(function(o, s, c) {
        s != null && typeof s.toString != "function" && (s = xu.call(s)), o[s] = c;
      }, Bh(Cn)), QN = mE(function(o, s, c) {
        s != null && typeof s.toString != "function" && (s = xu.call(s)), ze.call(o, s) ? o[s].push(c) : o[s] = [c];
      }, fe), ZN = _e(Fs);
      function Ot(o) {
        return xn(o) ? Py(o) : sh(o);
      }
      function wn(o) {
        return xn(o) ? Py(o, !0) : R2(o);
      }
      function JN(o, s) {
        var c = {};
        return s = fe(s, 3), Vr(o, function(p, E, T) {
          ii(c, s(p, E, T), p);
        }), c;
      }
      function eO(o, s) {
        var c = {};
        return s = fe(s, 3), Vr(o, function(p, E, T) {
          ii(c, E, s(p, E, T));
        }), c;
      }
      var tO = ha(function(o, s, c) {
        Du(o, s, c);
      }), ix = ha(function(o, s, c, p) {
        Du(o, s, c, p);
      }), nO = ai(function(o, s) {
        var c = {};
        if (o == null)
          return c;
        var p = !1;
        s = at(s, function(T) {
          return T = Pi(T, o), p || (p = T.length > 1), T;
        }), Ur(o, wh(o), c), p && (c = nr(c, m | v | x, Y2));
        for (var E = s.length; E--; )
          hh(c, s[E]);
        return c;
      });
      function rO(o, s) {
        return ox(o, Ku(fe(s)));
      }
      var iO = ai(function(o, s) {
        return o == null ? {} : N2(o, s);
      });
      function ox(o, s) {
        if (o == null)
          return {};
        var c = at(wh(o), function(p) {
          return [p];
        });
        return s = fe(s), Yy(o, c, function(p, E) {
          return s(p, E[0]);
        });
      }
      function oO(o, s, c) {
        s = Pi(s, o);
        var p = -1, E = s.length;
        for (E || (E = 1, o = n); ++p < E; ) {
          var T = o == null ? n : o[$r(s[p])];
          T === n && (p = E, T = c), o = li(T) ? T.call(o) : T;
        }
        return o;
      }
      function aO(o, s, c) {
        return o == null ? o : Ls(o, s, c);
      }
      function sO(o, s, c, p) {
        return p = typeof p == "function" ? p : n, o == null ? o : Ls(o, s, c, p);
      }
      var ax = yE(Ot), sx = yE(wn);
      function lO(o, s, c) {
        var p = ge(o), E = p || Fi(o) || va(o);
        if (s = fe(s, 4), c == null) {
          var T = o && o.constructor;
          E ? c = p ? new T() : [] : ct(o) ? c = li(T) ? da(_u(o)) : {} : c = {};
        }
        return (E ? Jn : Vr)(o, function(N, P, L) {
          return s(c, N, P, L);
        }), c;
      }
      function uO(o, s) {
        return o == null ? !0 : hh(o, s);
      }
      function cO(o, s, c) {
        return o == null ? o : tE(o, s, vh(c));
      }
      function fO(o, s, c, p) {
        return p = typeof p == "function" ? p : n, o == null ? o : tE(o, s, vh(c), p);
      }
      function ga(o) {
        return o == null ? [] : qd(o, Ot(o));
      }
      function dO(o) {
        return o == null ? [] : qd(o, wn(o));
      }
      function hO(o, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = or(c), c = c === c ? c : 0), s !== n && (s = or(s), s = s === s ? s : 0), wo(or(o), s, c);
      }
      function pO(o, s, c) {
        return s = ui(s), c === n ? (c = s, s = 0) : c = ui(c), o = or(o), x2(o, s, c);
      }
      function mO(o, s, c) {
        if (c && typeof c != "boolean" && sn(o, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof o == "boolean" && (c = o, o = n)), o === n && s === n ? (o = 0, s = 1) : (o = ui(o), s === n ? (s = o, o = 0) : s = ui(s)), o > s) {
          var p = o;
          o = s, s = p;
        }
        if (c || o % 1 || s % 1) {
          var E = Ny();
          return Gt(o + E * (s - o + XA("1e-" + ((E + "").length - 1))), s);
        }
        return ch(o, s);
      }
      var vO = pa(function(o, s, c) {
        return s = s.toLowerCase(), o + (c ? lx(s) : s);
      });
      function lx(o) {
        return Lh(Ve(o).toLowerCase());
      }
      function ux(o) {
        return o = Ve(o), o && o.replace(yA, aT).replace(LA, "");
      }
      function gO(o, s, c) {
        o = Ve(o), s = Fn(s);
        var p = o.length;
        c = c === n ? p : wo(ye(c), 0, p);
        var E = c;
        return c -= s.length, c >= 0 && o.slice(c, E) == s;
      }
      function yO(o) {
        return o = Ve(o), o && on.test(o) ? o.replace(Ct, sT) : o;
      }
      function EO(o) {
        return o = Ve(o), o && Qn.test(o) ? o.replace(Yn, "\\$&") : o;
      }
      var xO = pa(function(o, s, c) {
        return o + (c ? "-" : "") + s.toLowerCase();
      }), wO = pa(function(o, s, c) {
        return o + (c ? " " : "") + s.toLowerCase();
      }), CO = dE("toLowerCase");
      function _O(o, s, c) {
        o = Ve(o), s = ye(s);
        var p = s ? sa(o) : 0;
        if (!s || p >= s)
          return o;
        var E = (s - p) / 2;
        return Vu(Au(E), c) + o + Vu(ku(E), c);
      }
      function SO(o, s, c) {
        o = Ve(o), s = ye(s);
        var p = s ? sa(o) : 0;
        return s && p < s ? o + Vu(s - p, c) : o;
      }
      function bO(o, s, c) {
        o = Ve(o), s = ye(s);
        var p = s ? sa(o) : 0;
        return s && p < s ? Vu(s - p, c) + o : o;
      }
      function kO(o, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), PT(Ve(o).replace(On, ""), s || 0);
      }
      function AO(o, s, c) {
        return (c ? sn(o, s, c) : s === n) ? s = 1 : s = ye(s), fh(Ve(o), s);
      }
      function TO() {
        var o = arguments, s = Ve(o[0]);
        return o.length < 3 ? s : s.replace(o[1], o[2]);
      }
      var RO = pa(function(o, s, c) {
        return o + (c ? "_" : "") + s.toLowerCase();
      });
      function IO(o, s, c) {
        return c && typeof c != "number" && sn(o, s, c) && (s = c = n), c = c === n ? re : c >>> 0, c ? (o = Ve(o), o && (typeof s == "string" || s != null && !Dh(s)) && (s = Fn(s), !s && aa(o)) ? Di(Er(o), 0, c) : o.split(s, c)) : [];
      }
      var NO = pa(function(o, s, c) {
        return o + (c ? " " : "") + Lh(s);
      });
      function OO(o, s, c) {
        return o = Ve(o), c = c == null ? 0 : wo(ye(c), 0, o.length), s = Fn(s), o.slice(c, c + s.length) == s;
      }
      function PO(o, s, c) {
        var p = b.templateSettings;
        c && sn(o, s, c) && (s = n), o = Ve(o), s = Zu({}, s, p, EE);
        var E = Zu({}, s.imports, p.imports, EE), T = Ot(E), N = qd(E, T), P, L, z = 0, W = s.interpolate || fu, q = "__p += '", J = Yd(
          (s.escape || fu).source + "|" + W.source + "|" + (W === jt ? dA : fu).source + "|" + (s.evaluate || fu).source + "|$",
          "g"
        ), se = "//# sourceURL=" + (ze.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$A + "]") + `
`;
        o.replace(J, function(he, be, Ne, Ln, ln, Bn) {
          return Ne || (Ne = Ln), q += o.slice(z, Bn).replace(EA, lT), be && (P = !0, q += `' +
__e(` + be + `) +
'`), ln && (L = !0, q += `';
` + ln + `;
__p += '`), Ne && (q += `' +
((__t = (` + Ne + `)) == null ? '' : __t) +
'`), z = Bn + he.length, he;
        }), q += `';
`;
        var de = ze.call(s, "variable") && s.variable;
        if (!de)
          q = `with (obj) {
` + q + `
}
`;
        else if (cA.test(de))
          throw new me(u);
        q = (L ? q.replace(uu, "") : q).replace(Od, "$1").replace(Pd, "$1;"), q = "function(" + (de || "obj") + `) {
` + (de ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (P ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + q + `return __p
}`;
        var xe = fx(function() {
          return Le(T, se + "return " + q).apply(n, N);
        });
        if (xe.source = q, Ph(xe))
          throw xe;
        return xe;
      }
      function DO(o) {
        return Ve(o).toLowerCase();
      }
      function FO(o) {
        return Ve(o).toUpperCase();
      }
      function MO(o, s, c) {
        if (o = Ve(o), o && (c || s === n))
          return xy(o);
        if (!o || !(s = Fn(s)))
          return o;
        var p = Er(o), E = Er(s), T = wy(p, E), N = Cy(p, E) + 1;
        return Di(p, T, N).join("");
      }
      function LO(o, s, c) {
        if (o = Ve(o), o && (c || s === n))
          return o.slice(0, Sy(o) + 1);
        if (!o || !(s = Fn(s)))
          return o;
        var p = Er(o), E = Cy(p, Er(s)) + 1;
        return Di(p, 0, E).join("");
      }
      function BO(o, s, c) {
        if (o = Ve(o), o && (c || s === n))
          return o.replace(On, "");
        if (!o || !(s = Fn(s)))
          return o;
        var p = Er(o), E = wy(p, Er(s));
        return Di(p, E).join("");
      }
      function HO(o, s) {
        var c = j, p = Q;
        if (ct(s)) {
          var E = "separator" in s ? s.separator : E;
          c = "length" in s ? ye(s.length) : c, p = "omission" in s ? Fn(s.omission) : p;
        }
        o = Ve(o);
        var T = o.length;
        if (aa(o)) {
          var N = Er(o);
          T = N.length;
        }
        if (c >= T)
          return o;
        var P = c - sa(p);
        if (P < 1)
          return p;
        var L = N ? Di(N, 0, P).join("") : o.slice(0, P);
        if (E === n)
          return L + p;
        if (N && (P += L.length - P), Dh(E)) {
          if (o.slice(P).search(E)) {
            var z, W = L;
            for (E.global || (E = Yd(E.source, Ve($0.exec(E)) + "g")), E.lastIndex = 0; z = E.exec(W); )
              var q = z.index;
            L = L.slice(0, q === n ? P : q);
          }
        } else if (o.indexOf(Fn(E), P) != P) {
          var J = L.lastIndexOf(E);
          J > -1 && (L = L.slice(0, J));
        }
        return L + p;
      }
      function VO(o) {
        return o = Ve(o), o && rn.test(o) ? o.replace(cu, mT) : o;
      }
      var UO = pa(function(o, s, c) {
        return o + (c ? " " : "") + s.toUpperCase();
      }), Lh = dE("toUpperCase");
      function cx(o, s, c) {
        return o = Ve(o), s = c ? n : s, s === n ? cT(o) ? yT(o) : tT(o) : o.match(s) || [];
      }
      var fx = _e(function(o, s) {
        try {
          return Pn(o, n, s);
        } catch (c) {
          return Ph(c) ? c : new me(c);
        }
      }), $O = ai(function(o, s) {
        return Jn(s, function(c) {
          c = $r(c), ii(o, c, Nh(o[c], o));
        }), o;
      });
      function zO(o) {
        var s = o == null ? 0 : o.length, c = fe();
        return o = s ? at(o, function(p) {
          if (typeof p[1] != "function")
            throw new er(l);
          return [c(p[0]), p[1]];
        }) : [], _e(function(p) {
          for (var E = -1; ++E < s; ) {
            var T = o[E];
            if (Pn(T[0], this, p))
              return Pn(T[1], this, p);
          }
        });
      }
      function WO(o) {
        return m2(nr(o, m));
      }
      function Bh(o) {
        return function() {
          return o;
        };
      }
      function jO(o, s) {
        return o == null || o !== o ? s : o;
      }
      var GO = pE(), XO = pE(!0);
      function Cn(o) {
        return o;
      }
      function Hh(o) {
        return Wy(typeof o == "function" ? o : nr(o, m));
      }
      function qO(o) {
        return Gy(nr(o, m));
      }
      function KO(o, s) {
        return Xy(o, nr(s, m));
      }
      var YO = _e(function(o, s) {
        return function(c) {
          return Fs(c, o, s);
        };
      }), QO = _e(function(o, s) {
        return function(c) {
          return Fs(o, c, s);
        };
      });
      function Vh(o, s, c) {
        var p = Ot(s), E = Pu(s, p);
        c == null && !(ct(s) && (E.length || !p.length)) && (c = s, s = o, o = this, E = Pu(s, Ot(s)));
        var T = !(ct(c) && "chain" in c) || !!c.chain, N = li(o);
        return Jn(E, function(P) {
          var L = s[P];
          o[P] = L, N && (o.prototype[P] = function() {
            var z = this.__chain__;
            if (T || z) {
              var W = o(this.__wrapped__), q = W.__actions__ = En(this.__actions__);
              return q.push({ func: L, args: arguments, thisArg: o }), W.__chain__ = z, W;
            }
            return L.apply(o, Ti([this.value()], arguments));
          });
        }), o;
      }
      function ZO() {
        return Lt._ === this && (Lt._ = ST), this;
      }
      function Uh() {
      }
      function JO(o) {
        return o = ye(o), _e(function(s) {
          return qy(s, o);
        });
      }
      var eP = yh(at), tP = yh(my), nP = yh(zd);
      function dx(o) {
        return bh(o) ? Wd($r(o)) : O2(o);
      }
      function rP(o) {
        return function(s) {
          return o == null ? n : Co(o, s);
        };
      }
      var iP = vE(), oP = vE(!0);
      function $h() {
        return [];
      }
      function zh() {
        return !1;
      }
      function aP() {
        return {};
      }
      function sP() {
        return "";
      }
      function lP() {
        return !0;
      }
      function uP(o, s) {
        if (o = ye(o), o < 1 || o > G)
          return [];
        var c = re, p = Gt(o, re);
        s = fe(s), o -= re;
        for (var E = Xd(p, s); ++c < o; )
          s(c);
        return E;
      }
      function cP(o) {
        return ge(o) ? at(o, $r) : Mn(o) ? [o] : En(OE(Ve(o)));
      }
      function fP(o) {
        var s = ++CT;
        return Ve(o) + s;
      }
      var dP = Hu(function(o, s) {
        return o + s;
      }, 0), hP = Eh("ceil"), pP = Hu(function(o, s) {
        return o / s;
      }, 1), mP = Eh("floor");
      function vP(o) {
        return o && o.length ? Ou(o, Cn, ih) : n;
      }
      function gP(o, s) {
        return o && o.length ? Ou(o, fe(s, 2), ih) : n;
      }
      function yP(o) {
        return yy(o, Cn);
      }
      function EP(o, s) {
        return yy(o, fe(s, 2));
      }
      function xP(o) {
        return o && o.length ? Ou(o, Cn, lh) : n;
      }
      function wP(o, s) {
        return o && o.length ? Ou(o, fe(s, 2), lh) : n;
      }
      var CP = Hu(function(o, s) {
        return o * s;
      }, 1), _P = Eh("round"), SP = Hu(function(o, s) {
        return o - s;
      }, 0);
      function bP(o) {
        return o && o.length ? Gd(o, Cn) : 0;
      }
      function kP(o, s) {
        return o && o.length ? Gd(o, fe(s, 2)) : 0;
      }
      return b.after = qI, b.ary = zE, b.assign = FN, b.assignIn = rx, b.assignInWith = Zu, b.assignWith = MN, b.at = LN, b.before = WE, b.bind = Nh, b.bindAll = $O, b.bindKey = jE, b.castArray = aN, b.chain = VE, b.chunk = mR, b.compact = vR, b.concat = gR, b.cond = zO, b.conforms = WO, b.constant = Bh, b.countBy = bI, b.create = BN, b.curry = GE, b.curryRight = XE, b.debounce = qE, b.defaults = HN, b.defaultsDeep = VN, b.defer = KI, b.delay = YI, b.difference = yR, b.differenceBy = ER, b.differenceWith = xR, b.drop = wR, b.dropRight = CR, b.dropRightWhile = _R, b.dropWhile = SR, b.fill = bR, b.filter = AI, b.flatMap = II, b.flatMapDeep = NI, b.flatMapDepth = OI, b.flatten = ME, b.flattenDeep = kR, b.flattenDepth = AR, b.flip = QI, b.flow = GO, b.flowRight = XO, b.fromPairs = TR, b.functions = XN, b.functionsIn = qN, b.groupBy = PI, b.initial = IR, b.intersection = NR, b.intersectionBy = OR, b.intersectionWith = PR, b.invert = YN, b.invertBy = QN, b.invokeMap = FI, b.iteratee = Hh, b.keyBy = MI, b.keys = Ot, b.keysIn = wn, b.map = Gu, b.mapKeys = JN, b.mapValues = eO, b.matches = qO, b.matchesProperty = KO, b.memoize = qu, b.merge = tO, b.mergeWith = ix, b.method = YO, b.methodOf = QO, b.mixin = Vh, b.negate = Ku, b.nthArg = JO, b.omit = nO, b.omitBy = rO, b.once = ZI, b.orderBy = LI, b.over = eP, b.overArgs = JI, b.overEvery = tP, b.overSome = nP, b.partial = Oh, b.partialRight = KE, b.partition = BI, b.pick = iO, b.pickBy = ox, b.property = dx, b.propertyOf = rP, b.pull = LR, b.pullAll = BE, b.pullAllBy = BR, b.pullAllWith = HR, b.pullAt = VR, b.range = iP, b.rangeRight = oP, b.rearg = eN, b.reject = UI, b.remove = UR, b.rest = tN, b.reverse = Rh, b.sampleSize = zI, b.set = aO, b.setWith = sO, b.shuffle = WI, b.slice = $R, b.sortBy = XI, b.sortedUniq = KR, b.sortedUniqBy = YR, b.split = IO, b.spread = nN, b.tail = QR, b.take = ZR, b.takeRight = JR, b.takeRightWhile = eI, b.takeWhile = tI, b.tap = vI, b.throttle = rN, b.thru = ju, b.toArray = ex, b.toPairs = ax, b.toPairsIn = sx, b.toPath = cP, b.toPlainObject = nx, b.transform = lO, b.unary = iN, b.union = nI, b.unionBy = rI, b.unionWith = iI, b.uniq = oI, b.uniqBy = aI, b.uniqWith = sI, b.unset = uO, b.unzip = Ih, b.unzipWith = HE, b.update = cO, b.updateWith = fO, b.values = ga, b.valuesIn = dO, b.without = lI, b.words = cx, b.wrap = oN, b.xor = uI, b.xorBy = cI, b.xorWith = fI, b.zip = dI, b.zipObject = hI, b.zipObjectDeep = pI, b.zipWith = mI, b.entries = ax, b.entriesIn = sx, b.extend = rx, b.extendWith = Zu, Vh(b, b), b.add = dP, b.attempt = fx, b.camelCase = vO, b.capitalize = lx, b.ceil = hP, b.clamp = hO, b.clone = sN, b.cloneDeep = uN, b.cloneDeepWith = cN, b.cloneWith = lN, b.conformsTo = fN, b.deburr = ux, b.defaultTo = jO, b.divide = pP, b.endsWith = gO, b.eq = wr, b.escape = yO, b.escapeRegExp = EO, b.every = kI, b.find = TI, b.findIndex = DE, b.findKey = UN, b.findLast = RI, b.findLastIndex = FE, b.findLastKey = $N, b.floor = mP, b.forEach = UE, b.forEachRight = $E, b.forIn = zN, b.forInRight = WN, b.forOwn = jN, b.forOwnRight = GN, b.get = Fh, b.gt = dN, b.gte = hN, b.has = KN, b.hasIn = Mh, b.head = LE, b.identity = Cn, b.includes = DI, b.indexOf = RR, b.inRange = pO, b.invoke = ZN, b.isArguments = bo, b.isArray = ge, b.isArrayBuffer = pN, b.isArrayLike = xn, b.isArrayLikeObject = vt, b.isBoolean = mN, b.isBuffer = Fi, b.isDate = vN, b.isElement = gN, b.isEmpty = yN, b.isEqual = EN, b.isEqualWith = xN, b.isError = Ph, b.isFinite = wN, b.isFunction = li, b.isInteger = YE, b.isLength = Yu, b.isMap = QE, b.isMatch = CN, b.isMatchWith = _N, b.isNaN = SN, b.isNative = bN, b.isNil = AN, b.isNull = kN, b.isNumber = ZE, b.isObject = ct, b.isObjectLike = pt, b.isPlainObject = Us, b.isRegExp = Dh, b.isSafeInteger = TN, b.isSet = JE, b.isString = Qu, b.isSymbol = Mn, b.isTypedArray = va, b.isUndefined = RN, b.isWeakMap = IN, b.isWeakSet = NN, b.join = DR, b.kebabCase = xO, b.last = ir, b.lastIndexOf = FR, b.lowerCase = wO, b.lowerFirst = CO, b.lt = ON, b.lte = PN, b.max = vP, b.maxBy = gP, b.mean = yP, b.meanBy = EP, b.min = xP, b.minBy = wP, b.stubArray = $h, b.stubFalse = zh, b.stubObject = aP, b.stubString = sP, b.stubTrue = lP, b.multiply = CP, b.nth = MR, b.noConflict = ZO, b.noop = Uh, b.now = Xu, b.pad = _O, b.padEnd = SO, b.padStart = bO, b.parseInt = kO, b.random = mO, b.reduce = HI, b.reduceRight = VI, b.repeat = AO, b.replace = TO, b.result = oO, b.round = _P, b.runInContext = M, b.sample = $I, b.size = jI, b.snakeCase = RO, b.some = GI, b.sortedIndex = zR, b.sortedIndexBy = WR, b.sortedIndexOf = jR, b.sortedLastIndex = GR, b.sortedLastIndexBy = XR, b.sortedLastIndexOf = qR, b.startCase = NO, b.startsWith = OO, b.subtract = SP, b.sum = bP, b.sumBy = kP, b.template = PO, b.times = uP, b.toFinite = ui, b.toInteger = ye, b.toLength = tx, b.toLower = DO, b.toNumber = or, b.toSafeInteger = DN, b.toString = Ve, b.toUpper = FO, b.trim = MO, b.trimEnd = LO, b.trimStart = BO, b.truncate = HO, b.unescape = VO, b.uniqueId = fP, b.upperCase = UO, b.upperFirst = Lh, b.each = UE, b.eachRight = $E, b.first = LE, Vh(b, function() {
        var o = {};
        return Vr(b, function(s, c) {
          ze.call(b.prototype, c) || (o[c] = s);
        }), o;
      }(), { chain: !1 }), b.VERSION = r, Jn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        b[o].placeholder = b;
      }), Jn(["drop", "take"], function(o, s) {
        Te.prototype[o] = function(c) {
          c = c === n ? 1 : bt(ye(c), 0);
          var p = this.__filtered__ && !s ? new Te(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = Gt(c, p.__takeCount__) : p.__views__.push({
            size: Gt(c, re),
            type: o + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, Te.prototype[o + "Right"] = function(c) {
          return this.reverse()[o](c).reverse();
        };
      }), Jn(["filter", "map", "takeWhile"], function(o, s) {
        var c = s + 1, p = c == ve || c == Ee;
        Te.prototype[o] = function(E) {
          var T = this.clone();
          return T.__iteratees__.push({
            iteratee: fe(E, 3),
            type: c
          }), T.__filtered__ = T.__filtered__ || p, T;
        };
      }), Jn(["head", "last"], function(o, s) {
        var c = "take" + (s ? "Right" : "");
        Te.prototype[o] = function() {
          return this[c](1).value()[0];
        };
      }), Jn(["initial", "tail"], function(o, s) {
        var c = "drop" + (s ? "" : "Right");
        Te.prototype[o] = function() {
          return this.__filtered__ ? new Te(this) : this[c](1);
        };
      }), Te.prototype.compact = function() {
        return this.filter(Cn);
      }, Te.prototype.find = function(o) {
        return this.filter(o).head();
      }, Te.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Te.prototype.invokeMap = _e(function(o, s) {
        return typeof o == "function" ? new Te(this) : this.map(function(c) {
          return Fs(c, o, s);
        });
      }), Te.prototype.reject = function(o) {
        return this.filter(Ku(fe(o)));
      }, Te.prototype.slice = function(o, s) {
        o = ye(o);
        var c = this;
        return c.__filtered__ && (o > 0 || s < 0) ? new Te(c) : (o < 0 ? c = c.takeRight(-o) : o && (c = c.drop(o)), s !== n && (s = ye(s), c = s < 0 ? c.dropRight(-s) : c.take(s - o)), c);
      }, Te.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Te.prototype.toArray = function() {
        return this.take(re);
      }, Vr(Te.prototype, function(o, s) {
        var c = /^(?:filter|find|map|reject)|While$/.test(s), p = /^(?:head|last)$/.test(s), E = b[p ? "take" + (s == "last" ? "Right" : "") : s], T = p || /^find/.test(s);
        E && (b.prototype[s] = function() {
          var N = this.__wrapped__, P = p ? [1] : arguments, L = N instanceof Te, z = P[0], W = L || ge(N), q = function(be) {
            var Ne = E.apply(b, Ti([be], P));
            return p && J ? Ne[0] : Ne;
          };
          W && c && typeof z == "function" && z.length != 1 && (L = W = !1);
          var J = this.__chain__, se = !!this.__actions__.length, de = T && !J, xe = L && !se;
          if (!T && W) {
            N = xe ? N : new Te(this);
            var he = o.apply(N, P);
            return he.__actions__.push({ func: ju, args: [q], thisArg: n }), new tr(he, J);
          }
          return de && xe ? o.apply(this, P) : (he = this.thru(q), de ? p ? he.value()[0] : he.value() : he);
        });
      }), Jn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var s = gu[o], c = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(o);
        b.prototype[o] = function() {
          var E = arguments;
          if (p && !this.__chain__) {
            var T = this.value();
            return s.apply(ge(T) ? T : [], E);
          }
          return this[c](function(N) {
            return s.apply(ge(N) ? N : [], E);
          });
        };
      }), Vr(Te.prototype, function(o, s) {
        var c = b[s];
        if (c) {
          var p = c.name + "";
          ze.call(fa, p) || (fa[p] = []), fa[p].push({ name: s, func: c });
        }
      }), fa[Bu(n, w).name] = [{
        name: "wrapper",
        func: n
      }], Te.prototype.clone = VT, Te.prototype.reverse = UT, Te.prototype.value = $T, b.prototype.at = gI, b.prototype.chain = yI, b.prototype.commit = EI, b.prototype.next = xI, b.prototype.plant = CI, b.prototype.reverse = _I, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = SI, b.prototype.first = b.prototype.head, Ts && (b.prototype[Ts] = wI), b;
    }, la = ET();
    go ? ((go.exports = la)._ = la, Hd._ = la) : Lt._ = la;
  }).call(zs);
})(Ff, Ff.exports);
var aA = Ff.exports;
const Mf = (e) => ({
  id: (e == null ? void 0 : e.id) ?? "",
  value: e
}), x6 = ({
  droppableContainers: e,
  collisionRect: t
}) => {
  const n = aA.sortBy(
    e,
    (r) => {
      var i;
      return (i = r == null ? void 0 : r.rect.current) == null ? void 0 : i.top;
    }
  );
  for (const r of n) {
    const {
      rect: { current: i }
    } = r;
    if (i && (i.top + i.height - t.top) / i.height > 0.5)
      return [Mf(r)];
  }
  return [Mf(n[0])];
}, w6 = ({
  droppableContainers: e,
  collisionRect: t
}) => {
  const n = aA.sortBy(
    e,
    (r) => {
      var i;
      return (i = r == null ? void 0 : r.rect.current) == null ? void 0 : i.top;
    }
  ).reverse();
  for (const r of n) {
    const {
      rect: { current: i }
    } = r;
    if (i && (t.bottom - i.top) / i.height > 0.5)
      return [Mf(r)];
  }
  return [Mf(n[0])];
}, C6 = (e) => {
  var t, n;
  return e.collisionRect.top < (((n = (t = e.active.rect.current) == null ? void 0 : t.initial) == null ? void 0 : n.top) ?? 0) ? x6(e) : w6(e);
}, _0 = ({
  itemList: e,
  setState: t,
  updateOrder: n,
  children: r,
  renderOverlay: i,
  activeId: a,
  setActiveId: l
}) => {
  const u = LU(
    Pw(x0),
    Pw(y0, {
      coordinateGetter: g6
    })
  ), f = y.useCallback((m) => {
    const { active: v, over: x } = m;
    if (v.id !== x.id) {
      let A;
      t(() => {
        const [S] = e.filter((k) => k.id === v.id), [R] = e.filter((k) => k.id === x.id), w = e.indexOf(S), C = e.indexOf(R);
        return A = C0(e, w, C), A;
      }), n()(A);
    }
    l == null || l(null);
  }, [n, l]), d = y.useCallback((m) => {
    l == null || l(m.active.id);
  }, [l]), h = y.useCallback(() => {
    l == null || l(null);
  }, [l]);
  return /* @__PURE__ */ V.jsxs(
    M8,
    {
      sensors: u,
      modifiers: [E6],
      collisionDetection: C6,
      onDragStart: d,
      autoScroll: !1,
      onDragEnd: f,
      onDragCancel: h,
      children: [
        /* @__PURE__ */ V.jsx(
          s6,
          {
            items: e,
            strategy: o6,
            children: r
          }
        ),
        i && Gi.createPortal(
          /* @__PURE__ */ V.jsx(t6, { children: i(a) }),
          document.body
        )
      ]
    }
  );
};
_0.defaultProps = {
  renderOverlay: void 0,
  activeId: null,
  setActiveId: () => {
  }
};
_0.propTypes = {
  itemList: g.arrayOf(g.shape({
    id: g.string.isRequired
  })).isRequired,
  setState: g.func.isRequired,
  updateOrder: g.func.isRequired,
  children: g.node.isRequired,
  renderOverlay: g.func,
  activeId: g.string,
  setActiveId: g.func
};
const Nd = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__card-body", e),
  ref: r,
  ...n
}, t));
Nd.propTypes = {
  /** Specifies the content of the component. */
  children: g.node,
  /** The class to append to the base element. */
  className: g.string
};
Nd.defaultProps = {
  children: void 0,
  className: void 0
};
const Gw = "card", Hp = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], _6 = ["white", "muted"], S0 = /* @__PURE__ */ _.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: a = !1,
  children: l,
  as: u = "div",
  ...f
}, d) => {
  const h = Z(t, e ? `${e}-${Gw}` : Gw, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ _.createElement(u, {
    ref: d,
    ...f,
    className: h
  }, a ? /* @__PURE__ */ _.createElement(Nd, null, l) : l);
});
S0.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: g.string,
  /** Background color of the card. */
  bgColor: g.oneOf(Hp),
  /** Text color of the card. */
  textColor: g.oneOf([...Hp, ..._6]),
  /** Border color of the card. */
  borderColor: g.oneOf(Hp),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: g.bool,
  /** Set a custom element for this component. */
  as: g.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: g.string,
  /** The content to render inside the card. */
  children: g.node
};
const Jo = /* @__PURE__ */ y.createContext({});
function b0({
  orientation: e,
  children: t,
  isLoading: n,
  variant: r
}) {
  return /* @__PURE__ */ _.createElement(Jo.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
b0.propTypes = {
  /** Specifies which orientation to use. */
  orientation: g.oneOf(["horizontal", "vertical"]),
  /** Specifies loading state. */
  isLoading: g.bool,
  /** Specifies content of the component. */
  children: g.node,
  /** Specifies `Card` style variant */
  variant: g.oneOf(["light", "dark", "muted"])
};
b0.defaultProps = {
  orientation: "vertical",
  isLoading: !1,
  children: null,
  variant: "light"
};
const S6 = _.createContext({}), sA = !0;
function b6({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: l, duration: u, enableAnimation: f = sA, customHighlightBackground: d }) {
  const h = {};
  return l === "rtl" && (h["--animation-direction"] = "reverse"), typeof u == "number" && (h["--animation-duration"] = `${u}s`), f || (h["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (h.width = n), (typeof r == "string" || typeof r == "number") && (h.height = r), (typeof i == "string" || typeof i == "number") && (h.borderRadius = i), a && (h.borderRadius = "50%"), typeof e < "u" && (h["--base-color"] = e), typeof t < "u" && (h["--highlight-color"] = t), typeof d == "string" && (h["--custom-highlight-background"] = d), h;
}
function fs({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: l, ...u }) {
  var f, d, h;
  const m = _.useContext(S6), v = { ...u };
  for (const [k, I] of Object.entries(u))
    typeof I > "u" && delete v[k];
  const x = {
    ...m,
    ...v,
    circle: a
  }, A = {
    ...l,
    ...b6(x)
  };
  let S = "react-loading-skeleton";
  n && (S += ` ${n}`);
  const R = (f = x.inline) !== null && f !== void 0 ? f : !1, w = [], C = Math.ceil(e);
  for (let k = 0; k < C; k++) {
    let I = A;
    if (C > e && k === C - 1) {
      const D = (d = I.width) !== null && d !== void 0 ? d : "100%", F = e % 1, B = typeof D == "number" ? D * F : `calc(${D} * ${F})`;
      I = { ...I, width: B };
    }
    const O = _.createElement("span", { className: S, style: I, key: k }, "‌");
    R ? w.push(O) : w.push(_.createElement(
      _.Fragment,
      { key: k },
      O,
      _.createElement("br", null)
    ));
  }
  return _.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (h = x.enableAnimation) !== null && h !== void 0 ? h : sA }, t ? w.map((k, I) => _.createElement(t, { key: I }, k)) : w);
}
const k6 = 20, k0 = /* @__PURE__ */ _.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: a,
  skeletonWidth: l
}, u) => {
  const {
    isLoading: f
  } = y.useContext(Jo), d = y.useCallback((h) => {
    if (/* @__PURE__ */ _.isValidElement(h)) {
      const {
        children: m
      } = h.props, v = {
        size: n,
        children: Array.isArray(m) ? m.map(d) : d(m)
      };
      return /* @__PURE__ */ _.cloneElement(h, v);
    }
    return h;
  }, [n]);
  return f ? /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-header", t)
  }, /* @__PURE__ */ _.createElement(fs, {
    containerClassName: "pgn__card-header-loader",
    height: a,
    width: l
  })) : /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-header", t),
    ref: u
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-header-content"
  }, i && /* @__PURE__ */ _.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, i), r && /* @__PURE__ */ _.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? d(e) : e));
});
k0.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: g.node,
  /** The class name for the CardHeader component */
  className: g.string,
  /** The title for the CardHeader component */
  title: g.node,
  /** The size of the CardHeader component */
  size: g.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: g.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: g.number
};
k0.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: k6,
  skeletonWidth: null
};
const A0 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__card-divider", e),
  ref: n,
  ...t
}));
A0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string
};
A0.defaultProps = {
  className: void 0
};
const A6 = 100, T0 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: a,
  skeletonWidth: l
}, u) => {
  const {
    isLoading: f
  } = y.useContext(Jo);
  return f ? /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ _.createElement(fs, {
    containerClassName: "pgn__card-section-loader",
    height: a,
    width: l
  })) : /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: u
  }, n && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
T0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies title of the `Section`. */
  title: g.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: g.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: g.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: g.number
};
T0.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: A6,
  skeletonWidth: void 0
};
const T6 = 18, R0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: a,
  orientation: l
}, u) => {
  const {
    orientation: f,
    isLoading: d
  } = y.useContext(Jo), h = l || f, m = `pgn__card-footer ${h}${n ? "-stacked" : ""}`, v = `pgn__card-footer-text ${h}${n ? "-stacked" : ""}`;
  return d ? /* @__PURE__ */ _.createElement("div", {
    className: Z(t, m)
  }, /* @__PURE__ */ _.createElement(fs, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: a
  })) : /* @__PURE__ */ _.createElement("div", {
    className: Z(t, m),
    ref: u
  }, r && /* @__PURE__ */ _.createElement("div", {
    className: v
  }, r), e);
});
R0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: g.node,
  /** Specifies whether to use stacked variant. */
  isStacked: g.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: g.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: g.number
};
R0.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: T6,
  skeletonWidth: void 0
};
const lA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", R6 = 140, I6 = 41, I0 = /* @__PURE__ */ _.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: a,
  skeletonHeight: l,
  skeletonWidth: u,
  logoSkeleton: f,
  logoSkeletonHeight: d,
  logoSkeletonWidth: h,
  className: m,
  imageLoadingType: v
}, x) => {
  const {
    orientation: A,
    isLoading: S
  } = y.useContext(Jo), [R, w] = y.useState(!1), [C, k] = y.useState(!1), I = `pgn__card-wrapper-image-cap ${A}`;
  if (S)
    return /* @__PURE__ */ _.createElement("div", {
      className: Z(I, m),
      "data-testid": "image-loader-wrapper"
    }, /* @__PURE__ */ _.createElement(fs, {
      containerClassName: "pgn__card-image-cap-loader",
      height: A === "horizontal" ? "100%" : l,
      width: u
    }), f && /* @__PURE__ */ _.createElement(fs, {
      containerClassName: "pgn__card-logo-cap",
      height: d,
      width: h
    }));
  const O = (D, F, B) => {
    const {
      currentTarget: $
    } = D;
    if (!F || $.src.endsWith(F)) {
      B === "imageCap" ? $.src = lA : k(!1);
      return;
    }
    $.src = F;
  };
  return /* @__PURE__ */ _.createElement("div", {
    className: Z(m, I),
    ref: x
  }, !!e && /* @__PURE__ */ _.createElement("img", {
    className: Z("pgn__card-image-cap", {
      show: R
    }),
    src: e,
    onError: (D) => O(D, t, "imageCap"),
    onLoad: () => w(!0),
    alt: n,
    loading: v
  }), !!r && /* @__PURE__ */ _.createElement("img", {
    className: Z("pgn__card-logo-cap", {
      show: C
    }),
    src: r,
    onError: (D) => O(D, i, "logoCap"),
    onLoad: () => k(!0),
    alt: a,
    loading: v
  }));
});
I0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies image src. */
  src: g.string,
  /** Specifies fallback image src. */
  fallbackSrc: g.string,
  /** Specifies image alt text. */
  srcAlt: g.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: g.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: g.string,
  /** Specifies logo image alt text. */
  logoAlt: g.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: g.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: g.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: g.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: g.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: g.number,
  /** Specifies loading type for images */
  imageLoadingType: g.oneOf(["eager", "lazy"])
};
I0.defaultProps = {
  src: void 0,
  fallbackSrc: lA,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: R6,
  logoSkeleton: !1,
  logoSkeletonHeight: I6,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager"
};
const N0 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: a,
  ...l
}, u) => {
  const {
    isLoading: f
  } = y.useContext(Jo);
  return f ? /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: u
  }, /* @__PURE__ */ _.createElement(fs, null)) : /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: u,
    ...l
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ _.createElement(It, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__message-content"
  }, i && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__heading"
  }, i), t)), !!a && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__actions"
  }, a));
});
N0.propTypes = {
  /** Specifies the content of the component. */
  children: g.node.isRequired,
  /** The class to append to the base element. */
  className: g.string,
  /** Icon that will be shown in the top-left corner. */
  icon: g.func,
  /** Specifies variant to use. */
  variant: g.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: g.oneOfType([g.element, g.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: g.node
};
N0.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const N6 = ["light", "dark", "muted"], O0 = /* @__PURE__ */ _.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: a,
  ...l
}, u) => {
  const f = i ? "muted" : a;
  return /* @__PURE__ */ _.createElement(b0, {
    orientation: e,
    isLoading: t,
    variant: f
  }, /* @__PURE__ */ _.createElement(S0, {
    ...l,
    className: Z(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${f}`]: f
    }),
    ref: u,
    tabIndex: r ? 0 : -1
  }));
});
O0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies which orientation to use. */
  orientation: g.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: g.bool,
  /** Specifies loading state. */
  isLoading: g.bool,
  /** Specifies `Card` style variant. */
  variant: g.oneOf(N6),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: g.bool
};
O0.defaultProps = {
  ...S0.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const mr = Sb(O0, "Card", {
  muted: {
    deprType: Ba.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
mr.Status = N0;
mr.Header = k0;
mr.Divider = A0;
mr.Section = T0;
mr.Footer = R0;
mr.ImageCap = I0;
mr.Context = Jo;
mr.Body = Nd;
const lu = /* @__PURE__ */ _.createContext();
class P0 extends _.Component {
  constructor(n) {
    super(n);
    $s(this, "open", () => {
      this.setState({
        isOpen: !0
      }), this.props.onOpen && this.props.onOpen(), this.props.onToggle && this.props.onToggle(!0);
    });
    $s(this, "close", () => {
      this.setState({
        isOpen: !1
      }), this.props.onClose && this.props.onClose(), this.props.onToggle && this.props.onToggle(!1);
    });
    $s(this, "toggle", () => {
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
    return delete a.defaultOpen, delete a.onToggle, delete a.onOpen, delete a.onClose, /* @__PURE__ */ _.createElement("div", {
      ...a,
      className: Z("pgn_collapsible", r, {
        "is-open": this.state.isOpen
      })
    }, /* @__PURE__ */ _.createElement(lu.Provider, {
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
P0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies classname to append to the base element. */
  className: g.string,
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: g.bool,
  /** Specifies whether `Collapsible` is open. */
  open: g.bool,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: g.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: g.func,
  /** Callback fired when `Collapsible` closes. */
  onClose: g.func,
  /** Unmount the component (remove it from the DOM) when it is collapsed. */
  unmountOnExit: g.bool
};
P0.defaultProps = {
  children: void 0,
  className: void 0,
  defaultOpen: !1,
  open: void 0,
  onToggle: void 0,
  onOpen: void 0,
  onClose: void 0,
  unmountOnExit: !0
};
var O6 = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return c4(t, r);
  });
}, Vp = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return f4(t, r);
  });
}, D0 = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t() {
    for (var r, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    return r = e.call.apply(e, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, f) {
      var d = r.resolveArguments(u, f), h = d[0], m = d[1];
      r.removeClasses(h, "exit"), r.addClass(h, m ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, f);
    }, r.onEntering = function(u, f) {
      var d = r.resolveArguments(u, f), h = d[0], m = d[1], v = m ? "appear" : "enter";
      r.addClass(h, v, "active"), r.props.onEntering && r.props.onEntering(u, f);
    }, r.onEntered = function(u, f) {
      var d = r.resolveArguments(u, f), h = d[0], m = d[1], v = m ? "appear" : "enter";
      r.removeClasses(h, v), r.addClass(h, v, "done"), r.props.onEntered && r.props.onEntered(u, f);
    }, r.onExit = function(u) {
      var f = r.resolveArguments(u), d = f[0];
      r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(u);
    }, r.onExiting = function(u) {
      var f = r.resolveArguments(u), d = f[0];
      r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(u);
    }, r.onExited = function(u) {
      var f = r.resolveArguments(u), d = f[0];
      r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(u);
    }, r.resolveArguments = function(u, f) {
      return r.props.nodeRef ? [r.props.nodeRef.current, u] : [u, f];
    }, r.getClassNames = function(u) {
      var f = r.props.classNames, d = typeof f == "string", h = d && f ? f + "-" : "", m = d ? "" + h + u : f[u], v = d ? m + "-active" : f[u + "Active"], x = d ? m + "-done" : f[u + "Done"];
      return {
        baseClassName: m,
        activeClassName: v,
        doneClassName: x
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(i, a, l) {
    var u = this.getClassNames(a)[l + "ClassName"], f = this.getClassNames("enter"), d = f.doneClassName;
    a === "appear" && l === "done" && d && (u += " " + d), l === "active" && i && XS(i), u && (this.appliedClasses[a][l] = u, O6(i, u));
  }, n.removeClasses = function(i, a) {
    var l = this.appliedClasses[a], u = l.base, f = l.active, d = l.done;
    this.appliedClasses[a] = {}, u && Vp(i, u), f && Vp(i, f), d && Vp(i, d);
  }, n.render = function() {
    var i = this.props;
    i.classNames;
    var a = Be(i, ["classNames"]);
    return /* @__PURE__ */ _.createElement(Dr, le({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(_.Component);
D0.defaultProps = {
  classNames: ""
};
D0.propTypes = {};
function P6(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function F0(e, t) {
  var n = function(a) {
    return t && y.isValidElement(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && y.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function D6(e, t) {
  e = e || {}, t = t || {};
  function n(h) {
    return h in t ? t[h] : e[h];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var l, u = {};
  for (var f in t) {
    if (r[f])
      for (l = 0; l < r[f].length; l++) {
        var d = r[f][l];
        u[r[f][l]] = n(d);
      }
    u[f] = n(f);
  }
  for (l = 0; l < i.length; l++)
    u[i[l]] = n(i[l]);
  return u;
}
function Do(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function F6(e, t) {
  return F0(e.children, function(n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Do(n, "appear", e),
      enter: Do(n, "enter", e),
      exit: Do(n, "exit", e)
    });
  });
}
function M6(e, t, n) {
  var r = F0(e.children), i = D6(t, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (y.isValidElement(l)) {
      var u = a in t, f = a in r, d = t[a], h = y.isValidElement(d) && !d.props.in;
      f && (!u || h) ? i[a] = y.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: Do(l, "exit", e),
        enter: Do(l, "enter", e)
      }) : !f && u && !h ? i[a] = y.cloneElement(l, {
        in: !1
      }) : f && u && y.isValidElement(d) && (i[a] = y.cloneElement(l, {
        onExited: n.bind(null, l),
        in: d.props.in,
        exit: Do(l, "exit", e),
        enter: Do(l, "enter", e)
      }));
    }
  }), i;
}
var L6 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, B6 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, M0 = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = a.handleExited.bind(P6(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: l,
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
    var l = a.children, u = a.handleExited, f = a.firstRender;
    return {
      children: f ? F6(i, u) : M6(i, l, u),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var l = F0(this.props.children);
    i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(u) {
      var f = le({}, u.children);
      return delete f[i.key], {
        children: f
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, l = i.childFactory, u = Be(i, ["component", "childFactory"]), f = this.state.contextValue, d = L6(this.state.children).map(l);
    return delete u.appear, delete u.enter, delete u.exit, a === null ? /* @__PURE__ */ _.createElement(Ef.Provider, {
      value: f
    }, d) : /* @__PURE__ */ _.createElement(Ef.Provider, {
      value: f
    }, /* @__PURE__ */ _.createElement(a, u, d));
  }, t;
}(_.Component);
M0.propTypes = {};
M0.defaultProps = B6;
class L0 extends _.Component {
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
    return /* @__PURE__ */ _.createElement(D0, {
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
    }, (i) => /* @__PURE__ */ _.createElement("div", {
      style: {
        ...n,
        ...r[i],
        ...this.props.transitionStyles[i]
      }
    }, t));
  }
  render() {
    return /* @__PURE__ */ _.createElement(M0, {
      className: Z("pgn-transition-replace-group", "position-relative", {
        "overflow-hidden": this.state.height !== null
      }, this.props.className),
      style: {
        height: this.state.height
      }
    }, _.Children.map(this.props.children, this.renderChildTransition, this));
  }
}
L0.propTypes = {
  /** Specifies an additional class for the base element */
  children: g.element,
  /** Duration of the element appearance transition. */
  enterDuration: g.number,
  /** Duration of the element dismiss transition. */
  exitDuration: g.number,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter: g.func,
  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering: g.func,
  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered: g.func,
  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit: g.func,
  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting: g.func,
  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited: g.func,
  /** An object that specifies transition styles. */
  transitionStyles: g.shape({
    entering: g.shape({}),
    entered: g.shape({}),
    exiting: g.shape({}),
    exited: g.shape({})
  }),
  /** Specifies class name to append to the `Transition`. */
  transitionClassNames: g.string
};
L0.defaultProps = {
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
function B0({
  children: e,
  transitionWrapper: t,
  tag: n,
  ...r
}) {
  const {
    isOpen: i,
    unmountOnExit: a
  } = y.useContext(lu), l = /* @__PURE__ */ _.createElement(n, {
    key: "body",
    ...r
  }, e), u = i ? l : /* @__PURE__ */ _.createElement("div", {
    key: "empty"
  });
  return t ? /* @__PURE__ */ _.cloneElement(t, {}, u) : a ? /* @__PURE__ */ _.createElement(L0, null, u) : /* @__PURE__ */ _.createElement(QS, {
    in: i
  }, l);
}
B0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies content's base element. */
  tag: g.string,
  /** Specifies transition element. */
  transitionWrapper: g.element
};
B0.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function H0({
  tag: e,
  children: t,
  openOnly: n,
  closeOnly: r,
  onClick: i,
  onKeyDown: a,
  ...l
}) {
  const {
    isOpen: u,
    open: f,
    close: d,
    toggle: h
  } = y.useContext(lu), m = y.useCallback((A) => {
    n ? f(A) : r ? d(A) : h(A);
  }, [n, f, r, d, h]), v = y.useCallback((A) => {
    i && i(A), m(A);
  }, [i, m]), x = y.useCallback((A) => {
    a && a(A), A.key === "Enter" && m(A);
  }, [a, m]);
  return /* @__PURE__ */ _.createElement(e, {
    ...l,
    onClick: v,
    onKeyDown: x,
    role: "button",
    tabIndex: 0,
    "aria-expanded": u
  }, t);
}
H0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies base element. */
  tag: g.oneOfType([g.string, g.elementType]),
  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: g.bool,
  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: g.bool,
  /** Callback fired when element gets clicked. */
  onClick: g.func,
  /** Callback fired when a key is pressed. */
  onKeyDown: g.func
};
H0.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function V0({
  children: e,
  whenOpen: t,
  whenClosed: n
}) {
  const {
    isOpen: r
  } = y.useContext(lu);
  return r && t || !r && n ? /* @__PURE__ */ _.createElement(_.Fragment, null, e) : null;
}
V0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: g.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: g.bool
};
V0.defaultProps = {
  children: void 0,
  whenOpen: !1,
  whenClosed: !1
};
const H6 = {
  basic: {
    iconWhenClosed: /* @__PURE__ */ _.createElement(It, {
      src: pk
    }),
    iconWhenOpen: /* @__PURE__ */ _.createElement(It, {
      src: hk
    })
  }
  // card and card-lg use the defaults specified in defaultProps
}, lt = /* @__PURE__ */ _.forwardRef((e, t) => {
  const {
    children: n,
    className: r,
    title: i,
    styling: a,
    iconWhenClosed: l,
    iconWhenOpen: u,
    ...f
  } = e, d = {
    iconWhenClosed: l,
    iconWhenOpen: u,
    ...H6[a]
  }, h = /* @__PURE__ */ _.isValidElement(i) ? i : /* @__PURE__ */ _.createElement("span", null, i);
  return /* @__PURE__ */ _.createElement(lt.Advanced, {
    ...f,
    className: Z(r, `collapsible-${a}`),
    ref: t
  }, /* @__PURE__ */ _.createElement(lt.Trigger, {
    className: "collapsible-trigger"
  }, h, /* @__PURE__ */ _.createElement("span", {
    className: "collapsible-icon"
  }, /* @__PURE__ */ _.createElement(lt.Visible, {
    whenClosed: !0
  }, d.iconWhenClosed), /* @__PURE__ */ _.createElement(lt.Visible, {
    whenOpen: !0
  }, d.iconWhenOpen))), /* @__PURE__ */ _.createElement(lt.Body, {
    className: "collapsible-body"
  }, n));
});
lt.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen: g.bool,
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed: g.element,
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen: g.element,
  /** Callback fired when `Collapsible` closes. */
  onClose: g.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: g.func,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: g.func,
  /** Specifies whether `Collapsible` is open. */
  open: g.bool,
  /** Specifies style variant. */
  styling: g.oneOf(["basic", "card", "card-lg"]),
  /** Specifies title. */
  title: g.node.isRequired,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: g.bool
};
lt.defaultProps = {
  className: void 0,
  defaultOpen: !1,
  iconWhenClosed: /* @__PURE__ */ _.createElement(It, {
    src: pk
  }),
  iconWhenOpen: /* @__PURE__ */ _.createElement(It, {
    src: hk
  }),
  onClose: void 0,
  onOpen: void 0,
  onToggle: void 0,
  open: void 0,
  styling: "card",
  unmountOnExit: !0
};
lt.Advanced = P0;
lt.Body = B0;
lt.Trigger = H0;
lt.Visible = V0;
lt.Context = lu;
const Xw = {
  tooltipContent: {
    id: "authoring.draggableList.tooltip.content",
    defaultMessage: "Drag to reorder",
    description: "Tooltip content for drag indicator icon"
  }
}, U0 = ({
  id: e,
  componentStyle: t,
  actions: n,
  actionStyle: r,
  children: i,
  isClickable: a,
  onClick: l,
  disabled: u,
  cardClassName: f = ""
}) => {
  const d = vs(), {
    attributes: h,
    listeners: m,
    setNodeRef: v,
    transform: x,
    transition: A,
    setActivatorNodeRef: S,
    isDragging: R
  } = p6({
    id: e,
    animateLayoutChanges: () => !1,
    disabled: {
      draggable: u
    }
  }), w = {
    transform: ao.Translate.toString(x),
    zIndex: R ? 200 : void 0,
    transition: A,
    ...t
  };
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    /* @__PURE__ */ V.jsx(
      "div",
      {
        ref: v,
        onClick: l,
        children: /* @__PURE__ */ V.jsxs(
          mr,
          {
            style: w,
            className: `mx-0 ${f}`,
            isClickable: a,
            children: [
              /* @__PURE__ */ V.jsxs(ls, { style: r, children: [
                n,
                !u && /* @__PURE__ */ V.jsx(
                  dk,
                  {
                    ref: S,
                    tooltipPlacement: "top",
                    tooltipContent: d.formatMessage(Xw.tooltipContent),
                    src: m5,
                    iconAs: It,
                    variant: "light",
                    alt: d.formatMessage(Xw.tooltipContent),
                    ...h,
                    ...m
                  },
                  "drag-to-reorder-icon"
                )
              ] }),
              i
            ]
          }
        )
      }
    )
  );
};
U0.defaultProps = {
  componentStyle: null,
  actions: null,
  actionStyle: null,
  isClickable: !1,
  onClick: null,
  disabled: !1
};
U0.propTypes = {
  id: g.string.isRequired,
  children: g.node.isRequired,
  actions: g.node,
  actionStyle: g.shape({}),
  componentStyle: g.shape({}),
  isClickable: g.bool,
  onClick: g.func,
  disabled: g.bool,
  cardClassName: g.string
};
const V6 = (e, t = 60) => e ? e.length <= t ? e : e.substring(0, t) + "..." : "", U6 = ({
  questionText: e,
  pairs: t,
  onQuestionTextChange: n,
  onAddPair: r,
  onEditPair: i,
  onDeletePair: a,
  onReorder: l
}) => /* @__PURE__ */ V.jsxs("div", { className: "main-content-area", children: [
  /* @__PURE__ */ V.jsxs(Fe.Group, { className: "mb-4", children: [
    /* @__PURE__ */ V.jsx("div", { className: "h4 mb-3", children: "Instructions" }),
    /* @__PURE__ */ V.jsx(
      Fe.Control,
      {
        as: "textarea",
        rows: 3,
        value: e,
        onChange: (u) => n(u.target.value),
        placeholder: "Enter the question or instructions for students"
      }
    )
  ] }),
  /* @__PURE__ */ V.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-4", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "h4", children: [
      "Matching Pairs (",
      t.length,
      " / 20)"
    ] }),
    /* @__PURE__ */ V.jsx(
      Gr,
      {
        variant: "primary",
        iconBefore: c5,
        onClick: r,
        disabled: t.length >= 20,
        children: "Add New Pair"
      }
    )
  ] }),
  t.length === 0 && /* @__PURE__ */ V.jsx("div", { className: "text-center p-5 bg-light rounded mb-4", children: /* @__PURE__ */ V.jsx("p", { className: "mb-3", children: 'No matching pairs yet. Click "Add New Pair" to create your first pair.' }) }),
  /* @__PURE__ */ V.jsx(
    _0,
    {
      itemList: t,
      setState: l,
      updateOrder: () => l,
      children: t.map((u, f) => /* @__PURE__ */ V.jsx(
        U0,
        {
          id: u.id,
          actions: /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
            /* @__PURE__ */ V.jsxs("span", { className: "font-weight-bold", children: [
              "Pair ",
              f + 1
            ] }),
            /* @__PURE__ */ V.jsx(ls.Spacer, {}),
            /* @__PURE__ */ V.jsx(Gr, { variant: "link", size: "sm", onClick: () => i(f), iconBefore: v5, children: "Edit" }),
            /* @__PURE__ */ V.jsx(
              Gr,
              {
                variant: "outline-danger",
                onClick: () => a(f),
                disabled: t.length === 1,
                size: "sm",
                iconBefore: p5,
                children: "Delete"
              }
            )
          ] }),
          actionStyle: {
            borderRadius: "8px 8px 0 0",
            padding: "0.5rem 1rem",
            background: "#FBFAF9",
            borderBottom: "solid 1px #E1DDDB"
          },
          componentStyle: { marginBottom: "1rem" },
          children: /* @__PURE__ */ V.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ V.jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ V.jsx("strong", { children: "Term:" }),
              " ",
              u.term || "(No term)"
            ] }),
            /* @__PURE__ */ V.jsxs("div", { children: [
              /* @__PURE__ */ V.jsx("strong", { children: "Description:" }),
              " ",
              V6(u.description, 100)
            ] })
          ] })
        },
        u.id
      ))
    }
  )
] }), $6 = () => {
  const [e, t] = y.useState(!1);
  return {
    isAdvancedCardsVisible: e,
    showAdvancedCards: () => t(!0)
  };
}, z6 = (e) => {
  const [t, n] = y.useState(
    e || !1
  );
  return {
    isCardCollapsibleOpen: t,
    toggleCardCollapse: () => {
      n(e ? !0 : !t);
    }
  };
}, qw = ({
  children: e,
  none: t = !1,
  isCardCollapsibleOpen: n,
  summary: r
}) => n || r ? /* @__PURE__ */ V.jsxs(mr.Section, { className: "pt-0", children: [
  /* @__PURE__ */ V.jsx(lt.Advanced, { open: !n, children: /* @__PURE__ */ V.jsx(lt.Body, { className: "collapsible-body", children: /* @__PURE__ */ V.jsx("span", { className: `small ${t ? "text-gray-500" : "text-primary-500"}`, children: r }) }) }),
  /* @__PURE__ */ V.jsx(lt.Advanced, { open: n, children: /* @__PURE__ */ V.jsx(lt.Body, { className: "collapsible-body text-primary-500 x-small", children: e }) })
] }) : null, uA = ({
  title: e,
  className: t = "",
  extraSections: n = [],
  children: r,
  summary: i,
  hasExpandableTextArea: a = !1,
  none: l
}) => {
  const { isCardCollapsibleOpen: u, toggleCardCollapse: f } = z6(a);
  return /* @__PURE__ */ V.jsxs(mr, { className: `${t} settingsOption border border-light-700 shadow-none`, children: [
    /* @__PURE__ */ V.jsx(mr.Section, { className: "settingsCardTitleSection", children: /* @__PURE__ */ V.jsx(
      lt.Advanced,
      {
        open: u,
        onToggle: f,
        children: /* @__PURE__ */ V.jsxs(lt.Trigger, { className: "collapsible-trigger d-flex", children: [
          /* @__PURE__ */ V.jsx("span", { className: "flex-grow-1 text-primary-500 x-small", children: e }),
          /* @__PURE__ */ V.jsx(lt.Visible, { whenClosed: !0, children: /* @__PURE__ */ V.jsx(It, { src: mk }) }),
          /* @__PURE__ */ V.jsx(lt.Visible, { whenOpen: !0, children: /* @__PURE__ */ V.jsx(It, { src: vk }) })
        ] })
      }
    ) }, `settingsOption-${e}-header`),
    /* @__PURE__ */ V.jsx(
      qw,
      {
        none: l,
        isCardCollapsibleOpen: u,
        summary: i,
        children: r
      },
      `settingsOption-${e}-children`
    ),
    n.map((d, h) => /* @__PURE__ */ V.jsxs(_.Fragment, { children: [
      u && /* @__PURE__ */ V.jsx("hr", {}),
      /* @__PURE__ */ V.jsx(
        qw,
        {
          isCardCollapsibleOpen: u,
          summary: "",
          children: d.children
        }
      )
    ] }, `settingsOption-${e}-${h}`))
  ] });
}, W6 = ({
  weight: e,
  maxAttempts: t,
  unlimited: n,
  onWeightChange: r,
  onMaxAttemptsChange: i,
  onUnlimitedChange: a
}) => {
  const l = `${e} point${e === 1 ? "" : "s"} · ${n ? "Unlimited attempts" : `${t} attempt${t === 1 ? "" : "s"}`}`;
  return /* @__PURE__ */ V.jsxs(
    uA,
    {
      title: "Scoring",
      summary: l,
      className: "scoringCard",
      children: [
        /* @__PURE__ */ V.jsx("div", { className: "mb-4", children: "Specify point weight and the number of answer attempts" }),
        /* @__PURE__ */ V.jsxs(Fe.Group, { children: [
          /* @__PURE__ */ V.jsx(
            Fe.Control,
            {
              type: "number",
              min: 0,
              step: 0.1,
              value: e,
              onChange: (u) => r(Number(u.target.value)),
              floatingLabel: "Points"
            }
          ),
          /* @__PURE__ */ V.jsx(Fe.Control.Feedback, { children: "If a value is not set, the problem is worth one point" })
        ] }),
        /* @__PURE__ */ V.jsxs(Fe.Group, { children: [
          /* @__PURE__ */ V.jsx(
            Fe.Control,
            {
              type: "number",
              min: 0,
              value: n ? "" : t,
              onChange: (u) => i(Number(u.target.value)),
              floatingLabel: "Attempts",
              disabled: n
            }
          ),
          /* @__PURE__ */ V.jsx(Fe.Control.Feedback, { children: "If a default value is not set in advanced settings, unlimited attempts are allowed" }),
          /* @__PURE__ */ V.jsx(
            Fe.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: n,
              onChange: (u) => a(u.target.checked),
              children: /* @__PURE__ */ V.jsx("div", { className: "x-small", children: "Unlimited attempts" })
            }
          )
        ] })
      ]
    }
  );
}, j6 = ({
  randomizeItems: e,
  feedbackMode: t,
  onRandomizeChange: n,
  onFeedbackModeChange: r
}) => {
  const a = `${e ? "Randomized" : "Sequential"} · ${t === "immediate" ? "Immediate Feedback" : "On Submit"}`;
  return /* @__PURE__ */ V.jsxs(
    uA,
    {
      title: "Behavior",
      summary: a,
      className: "behaviorCard",
      children: [
        /* @__PURE__ */ V.jsx("div", { className: "mb-4", children: "Specify when and how feedback is shown to students" }),
        /* @__PURE__ */ V.jsxs(Fe.Group, { children: [
          /* @__PURE__ */ V.jsxs(
            Fe.Control,
            {
              as: "select",
              value: t,
              onChange: (l) => r(l.target.value),
              floatingLabel: "Feedback Mode",
              children: [
                /* @__PURE__ */ V.jsx("option", { value: "immediate", children: "Immediate Feedback" }),
                /* @__PURE__ */ V.jsx("option", { value: "on_submit", children: "On Submit" })
              ]
            }
          ),
          /* @__PURE__ */ V.jsx(Fe.Control.Feedback, { children: "When to show correctness feedback to students" }),
          /* @__PURE__ */ V.jsx(
            Fe.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: e,
              onChange: (l) => n(l.target.checked),
              children: /* @__PURE__ */ V.jsx("div", { className: "x-small", children: "Randomize item order" })
            }
          )
        ] })
      ]
    }
  );
}, G6 = ({
  randomizeItems: e,
  weight: t,
  maxAttempts: n,
  unlimited: r,
  feedbackMode: i,
  onRandomizeChange: a,
  onWeightChange: l,
  onMaxAttemptsChange: u,
  onUnlimitedChange: f,
  onFeedbackModeChange: d
}) => {
  const { isAdvancedCardsVisible: h, showAdvancedCards: m } = $6();
  return /* @__PURE__ */ V.jsxs("div", { className: "settingsWidget ml-4", children: [
    /* @__PURE__ */ V.jsx("div", { className: "my-3", children: /* @__PURE__ */ V.jsx(
      W6,
      {
        weight: t,
        maxAttempts: n,
        unlimited: r,
        onWeightChange: l,
        onMaxAttemptsChange: u,
        onUnlimitedChange: f
      }
    ) }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-3", children: /* @__PURE__ */ V.jsx(
      j6,
      {
        randomizeItems: e,
        feedbackMode: i,
        onRandomizeChange: a,
        onFeedbackModeChange: d
      }
    ) }),
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx(lt.Advanced, { open: !h, children: /* @__PURE__ */ V.jsx(lt.Body, { className: "collapsible-body small", children: /* @__PURE__ */ V.jsx(
      Gr,
      {
        className: "my-3 px-0 text-info-500",
        variant: "link",
        size: "inline",
        onClick: m,
        children: "Show Advanced Settings"
      }
    ) }) }) }),
    /* @__PURE__ */ V.jsx(lt.Advanced, { open: h, children: /* @__PURE__ */ V.jsx(lt.Body, { className: "collapsible-body" }) })
  ] });
}, X6 = ({
  runtime: e,
  fields: t
}) => {
  const [n, r] = y.useState(t.display_name), [i, a] = y.useState(t.question_text), [l, u] = y.useState(t.matching_pairs), [f, d] = y.useState(t.randomize_items), [h, m] = y.useState(t.weight), [v, x] = y.useState(t.max_attempts), [A, S] = y.useState(t.unlimited_attempts || !1), [R, w] = y.useState(t.show_feedback_mode), [C, k] = y.useState("list"), [I, O] = y.useState(-1), [D, F] = y.useState(!1), [B, $] = y.useState(null), j = y.useRef(null);
  y.useEffect(() => {
    const X = [
      "/static/studio/liverpool-dental-legacy/css/studio-main-v1.css",
      "/static/studio/liverpool-dental-legacy/css/course-unit-mfe-iframe-bundle.css"
    ];
    document.querySelectorAll('link[rel="stylesheet"]').forEach((Y) => {
      X.some((re) => Y.href.includes(re)) && (Y.disabled = !0);
    });
  }, []);
  const Q = () => {
    if (l.length >= 20) {
      $({ type: "error", text: "Maximum 20 pairs allowed" });
      return;
    }
    const X = [
      ...l,
      {
        id: `pair${Date.now()}`,
        term: "",
        description: ""
      }
    ];
    u(X), O(X.length - 1), k("edit");
  }, ne = (X) => {
    O(X), k("edit");
  }, ae = (X) => {
    if (l.length === 1) {
      $({ type: "error", text: "At least one matching pair is required" });
      return;
    }
    confirm(`Are you sure you want to delete Pair ${X + 1}?`) && (u(l.filter((Y, re) => re !== X)), $({ type: "success", text: "Pair deleted" }));
  }, ve = (X) => {
    u(X);
  }, Re = (X) => {
    const Y = [...l];
    Y[I] = X, u(Y), k("list"), O(-1), $({ type: "success", text: "Pair saved" });
  }, Ee = () => {
    const X = l[I];
    I !== -1 && !X.term && !X.description && u(l.filter((Y, re) => re !== I)), k("list"), O(-1);
  }, ce = async () => {
    F(!0), $(null);
    try {
      if (!n.trim()) {
        $({ type: "error", text: "Display name is required" }), F(!1);
        return;
      }
      if (!i.trim()) {
        $({ type: "error", text: "Question text is required" }), F(!1);
        return;
      }
      for (let Y = 0; Y < l.length; Y++) {
        const re = l[Y];
        if (!re.term.trim()) {
          $({ type: "error", text: `Pair ${Y + 1}: Term is required` }), F(!1);
          return;
        }
        if (!re.description.trim()) {
          $({ type: "error", text: `Pair ${Y + 1}: Description is required` }), F(!1);
          return;
        }
      }
      e.notify && e.notify("save", { state: "start" });
      const X = await C5(e, "save_data", {
        display_name: n,
        question_text: i,
        matching_pairs: l,
        randomize_items: f,
        explanation: "",
        // Removed explanation field
        weight: h,
        max_attempts: v,
        unlimited_attempts: A,
        show_feedback_mode: R
      });
      X.success ? ($({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : ($({ type: "error", text: X.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (X) {
      console.error("Save error:", X), $({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      F(!1);
    }
  }, G = () => {
    e.notify && e.notify("cancel", {});
  };
  return /* @__PURE__ */ V.jsxs("div", { className: "modal-container-fullscreen", children: [
    /* @__PURE__ */ V.jsx(
      xU,
      {
        title: n || "Drag and Drop Matching",
        onClose: G,
        onTitleChange: r
      }
    ),
    /* @__PURE__ */ V.jsxs(bi.Body, { className: "pb-0", children: [
      B && /* @__PURE__ */ V.jsx(
        Tg,
        {
          variant: B.type === "success" ? "success" : "danger",
          dismissible: !0,
          onClose: () => $(null),
          children: B.text
        }
      ),
      C === "list" ? /* @__PURE__ */ V.jsx(
        CU,
        {
          mainContent: /* @__PURE__ */ V.jsx(
            U6,
            {
              questionText: i,
              pairs: l,
              onQuestionTextChange: a,
              onAddPair: Q,
              onEditPair: ne,
              onDeletePair: ae,
              onReorder: ve
            }
          ),
          sidebar: /* @__PURE__ */ V.jsx(
            G6,
            {
              weight: h,
              maxAttempts: v,
              unlimited: A,
              randomizeItems: f,
              feedbackMode: R,
              onWeightChange: m,
              onMaxAttemptsChange: x,
              onUnlimitedChange: S,
              onRandomizeChange: d,
              onFeedbackModeChange: w
            }
          )
        }
      ) : /* @__PURE__ */ V.jsx(
        fU,
        {
          pair: l[I],
          pairIndex: I,
          totalPairs: l.length,
          onSave: Re,
          onCancel: Ee,
          saveRef: j
        }
      )
    ] }),
    /* @__PURE__ */ V.jsx(
      wU,
      {
        viewMode: C,
        onSave: ce,
        onCancel: G,
        saveDisabled: D || l.length === 0,
        onSavePair: () => {
          var X;
          return (X = j.current) == null ? void 0 : X.call(j);
        },
        onBackToList: Ee,
        savePairDisabled: !1
      }
    )
  ] });
}, Q6 = (e, t, n) => {
  e.element = t, sS(t).render(
    /* @__PURE__ */ V.jsx(y.StrictMode, { children: /* @__PURE__ */ V.jsx(TL, { locale: "en", children: /* @__PURE__ */ V.jsx(
      X6,
      {
        runtime: e,
        fields: n.fields
      }
    ) }) })
  );
};
export {
  Q6 as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
