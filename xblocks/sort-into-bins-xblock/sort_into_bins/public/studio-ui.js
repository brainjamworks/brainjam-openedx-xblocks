var kP = Object.defineProperty;
var AP = (e, t, n) => t in e ? kP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $s = (e, t, n) => AP(e, typeof t != "symbol" ? t + "" : t, n);
var zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var X1 = { exports: {} }, Uf = {}, q1 = { exports: {} }, Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl = Symbol.for("react.element"), TP = Symbol.for("react.portal"), RP = Symbol.for("react.fragment"), IP = Symbol.for("react.strict_mode"), NP = Symbol.for("react.profiler"), OP = Symbol.for("react.provider"), PP = Symbol.for("react.context"), DP = Symbol.for("react.forward_ref"), FP = Symbol.for("react.suspense"), MP = Symbol.for("react.memo"), LP = Symbol.for("react.lazy"), fx = Symbol.iterator;
function BP(e) {
  return e === null || typeof e != "object" ? null : (e = fx && e[fx] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Y1 = Object.assign, Q1 = {};
function hs(e, t, n) {
  this.props = e, this.context = t, this.refs = Q1, this.updater = n || K1;
}
hs.prototype.isReactComponent = {};
hs.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hs.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Z1() {
}
Z1.prototype = hs.prototype;
function cv(e, t, n) {
  this.props = e, this.context = t, this.refs = Q1, this.updater = n || K1;
}
var fv = cv.prototype = new Z1();
fv.constructor = cv;
Y1(fv, hs.prototype);
fv.isPureReactComponent = !0;
var dx = Array.isArray, J1 = Object.prototype.hasOwnProperty, dv = { current: null }, eC = { key: !0, ref: !0, __self: !0, __source: !0 };
function tC(e, t, n) {
  var r, i = {}, a = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (a = "" + t.key), t) J1.call(t, r) && !eC.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var c = Array(u), d = 0; d < u; d++) c[d] = arguments[d + 2];
    i.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Gl, type: e, key: a, ref: l, props: i, _owner: dv.current };
}
function HP(e, t) {
  return { $$typeof: Gl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function hv(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gl;
}
function VP(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var hx = /\/+/g;
function Xh(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? VP("" + e.key) : t.toString(36);
}
function Ic(e, t, n, r, i) {
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
        case TP:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Xh(l, 0) : r, dx(i) ? (n = "", e != null && (n = e.replace(hx, "$&/") + "/"), Ic(i, t, n, "", function(d) {
    return d;
  })) : i != null && (hv(i) && (i = HP(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(hx, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", dx(e)) for (var u = 0; u < e.length; u++) {
    a = e[u];
    var c = r + Xh(a, u);
    l += Ic(a, t, n, c, i);
  }
  else if (c = BP(e), typeof c == "function") for (e = c.call(e), u = 0; !(a = e.next()).done; ) a = a.value, c = r + Xh(a, u++), l += Ic(a, t, n, c, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ec(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ic(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function UP(e) {
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
var mn = { current: null }, Nc = { transition: null }, $P = { ReactCurrentDispatcher: mn, ReactCurrentBatchConfig: Nc, ReactCurrentOwner: dv };
function nC() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ne.Children = { map: ec, forEach: function(e, t, n) {
  ec(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ec(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ec(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!hv(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ne.Component = hs;
Ne.Fragment = RP;
Ne.Profiler = NP;
Ne.PureComponent = cv;
Ne.StrictMode = IP;
Ne.Suspense = FP;
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $P;
Ne.act = nC;
Ne.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Y1({}, e.props), i = e.key, a = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, l = dv.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) J1.call(t, c) && !eC.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Gl, type: e.type, key: i, ref: a, props: r, _owner: l };
};
Ne.createContext = function(e) {
  return e = { $$typeof: PP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: OP, _context: e }, e.Consumer = e;
};
Ne.createElement = tC;
Ne.createFactory = function(e) {
  var t = tC.bind(null, e);
  return t.type = e, t;
};
Ne.createRef = function() {
  return { current: null };
};
Ne.forwardRef = function(e) {
  return { $$typeof: DP, render: e };
};
Ne.isValidElement = hv;
Ne.lazy = function(e) {
  return { $$typeof: LP, _payload: { _status: -1, _result: e }, _init: UP };
};
Ne.memo = function(e, t) {
  return { $$typeof: MP, type: e, compare: t === void 0 ? null : t };
};
Ne.startTransition = function(e) {
  var t = Nc.transition;
  Nc.transition = {};
  try {
    e();
  } finally {
    Nc.transition = t;
  }
};
Ne.unstable_act = nC;
Ne.useCallback = function(e, t) {
  return mn.current.useCallback(e, t);
};
Ne.useContext = function(e) {
  return mn.current.useContext(e);
};
Ne.useDebugValue = function() {
};
Ne.useDeferredValue = function(e) {
  return mn.current.useDeferredValue(e);
};
Ne.useEffect = function(e, t) {
  return mn.current.useEffect(e, t);
};
Ne.useId = function() {
  return mn.current.useId();
};
Ne.useImperativeHandle = function(e, t, n) {
  return mn.current.useImperativeHandle(e, t, n);
};
Ne.useInsertionEffect = function(e, t) {
  return mn.current.useInsertionEffect(e, t);
};
Ne.useLayoutEffect = function(e, t) {
  return mn.current.useLayoutEffect(e, t);
};
Ne.useMemo = function(e, t) {
  return mn.current.useMemo(e, t);
};
Ne.useReducer = function(e, t, n) {
  return mn.current.useReducer(e, t, n);
};
Ne.useRef = function(e) {
  return mn.current.useRef(e);
};
Ne.useState = function(e) {
  return mn.current.useState(e);
};
Ne.useSyncExternalStore = function(e, t, n) {
  return mn.current.useSyncExternalStore(e, t, n);
};
Ne.useTransition = function() {
  return mn.current.useTransition();
};
Ne.version = "18.3.1";
q1.exports = Ne;
var y = q1.exports;
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
var zP = y, jP = Symbol.for("react.element"), WP = Symbol.for("react.fragment"), GP = Object.prototype.hasOwnProperty, XP = zP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qP = { key: !0, ref: !0, __self: !0, __source: !0 };
function rC(e, t, n) {
  var r, i = {}, a = null, l = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) GP.call(t, r) && !qP.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: jP, type: e, key: a, ref: l, props: i, _owner: XP.current };
}
Uf.Fragment = WP;
Uf.jsx = rC;
Uf.jsxs = rC;
X1.exports = Uf;
var D = X1.exports, iC = { exports: {} }, Wn = {}, oC = { exports: {} }, aC = {};
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
  function t(G, Y) {
    var J = G.length;
    G.push(Y);
    e: for (; 0 < J; ) {
      var se = J - 1 >>> 1, ne = G[se];
      if (0 < i(ne, Y)) G[se] = Y, G[J] = ne, J = se;
      else break e;
    }
  }
  function n(G) {
    return G.length === 0 ? null : G[0];
  }
  function r(G) {
    if (G.length === 0) return null;
    var Y = G[0], J = G.pop();
    if (J !== Y) {
      G[0] = J;
      e: for (var se = 0, ne = G.length, Ze = ne >>> 1; se < Ze; ) {
        var Ve = 2 * (se + 1) - 1, He = G[Ve], Re = Ve + 1, mt = G[Re];
        if (0 > i(He, J)) Re < ne && 0 > i(mt, He) ? (G[se] = mt, G[Re] = J, se = Re) : (G[se] = He, G[Ve] = J, se = Ve);
        else if (Re < ne && 0 > i(mt, J)) G[se] = mt, G[Re] = J, se = Re;
        else break e;
      }
    }
    return Y;
  }
  function i(G, Y) {
    var J = G.sortIndex - Y.sortIndex;
    return J !== 0 ? J : G.id - Y.id;
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
  var c = [], d = [], h = 1, m = null, v = 3, x = !1, b = !1, S = !1, R = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function A(G) {
    for (var Y = n(d); Y !== null; ) {
      if (Y.callback === null) r(d);
      else if (Y.startTime <= G) r(d), Y.sortIndex = Y.expirationTime, t(c, Y);
      else break;
      Y = n(d);
    }
  }
  function I(G) {
    if (S = !1, A(G), !b) if (n(c) !== null) b = !0, Ce(O);
    else {
      var Y = n(d);
      Y !== null && te(I, Y.startTime - G);
    }
  }
  function O(G, Y) {
    b = !1, S && (S = !1, w(H), H = -1), x = !0;
    var J = v;
    try {
      for (A(Y), m = n(c); m !== null && (!(m.expirationTime > Y) || G && !K()); ) {
        var se = m.callback;
        if (typeof se == "function") {
          m.callback = null, v = m.priorityLevel;
          var ne = se(m.expirationTime <= Y);
          Y = e.unstable_now(), typeof ne == "function" ? m.callback = ne : m === n(c) && r(c), A(Y);
        } else r(c);
        m = n(c);
      }
      if (m !== null) var Ze = !0;
      else {
        var Ve = n(d);
        Ve !== null && te(I, Ve.startTime - Y), Ze = !1;
      }
      return Ze;
    } finally {
      m = null, v = J, x = !1;
    }
  }
  var F = !1, L = null, H = -1, j = 5, W = -1;
  function K() {
    return !(e.unstable_now() - W < j);
  }
  function Q() {
    if (L !== null) {
      var G = e.unstable_now();
      W = G;
      var Y = !0;
      try {
        Y = L(!0, G);
      } finally {
        Y ? ie() : (F = !1, L = null);
      }
    } else F = !1;
  }
  var ie;
  if (typeof C == "function") ie = function() {
    C(Q);
  };
  else if (typeof MessageChannel < "u") {
    var Ee = new MessageChannel(), we = Ee.port2;
    Ee.port1.onmessage = Q, ie = function() {
      we.postMessage(null);
    };
  } else ie = function() {
    R(Q, 0);
  };
  function Ce(G) {
    L = G, F || (F = !0, ie());
  }
  function te(G, Y) {
    H = R(function() {
      G(e.unstable_now());
    }, Y);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(G) {
    G.callback = null;
  }, e.unstable_continueExecution = function() {
    b || x || (b = !0, Ce(O));
  }, e.unstable_forceFrameRate = function(G) {
    0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < G ? Math.floor(1e3 / G) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(G) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var Y = 3;
        break;
      default:
        Y = v;
    }
    var J = v;
    v = Y;
    try {
      return G();
    } finally {
      v = J;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(G, Y) {
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
    var J = v;
    v = G;
    try {
      return Y();
    } finally {
      v = J;
    }
  }, e.unstable_scheduleCallback = function(G, Y, J) {
    var se = e.unstable_now();
    switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? se + J : se) : J = se, G) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = J + ne, G = { id: h++, callback: Y, priorityLevel: G, startTime: J, expirationTime: ne, sortIndex: -1 }, J > se ? (G.sortIndex = J, t(d, G), n(c) === null && G === n(d) && (S ? (w(H), H = -1) : S = !0, te(I, J - se))) : (G.sortIndex = ne, t(c, G), b || x || (b = !0, Ce(O))), G;
  }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(G) {
    var Y = v;
    return function() {
      var J = v;
      v = Y;
      try {
        return G.apply(this, arguments);
      } finally {
        v = J;
      }
    };
  };
})(aC);
oC.exports = aC;
var KP = oC.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YP = y, zn = KP;
function q(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var sC = /* @__PURE__ */ new Set(), El = {};
function Ko(e, t) {
  Qa(e, t), Qa(e + "Capture", t);
}
function Qa(e, t) {
  for (El[e] = t, e = 0; e < t.length; e++) sC.add(t[e]);
}
var yi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), jp = Object.prototype.hasOwnProperty, QP = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, px = {}, mx = {};
function ZP(e) {
  return jp.call(mx, e) ? !0 : jp.call(px, e) ? !1 : QP.test(e) ? mx[e] = !0 : (px[e] = !0, !1);
}
function JP(e, t, n, r) {
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
function eD(e, t, n, r) {
  if (t === null || typeof t > "u" || JP(e, t, n, r)) return !0;
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
var zt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  zt[e] = new vn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  zt[t] = new vn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  zt[e] = new vn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  zt[e] = new vn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  zt[e] = new vn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  zt[e] = new vn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  zt[e] = new vn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  zt[e] = new vn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  zt[e] = new vn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pv = /[\-:]([a-z])/g;
function mv(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    pv,
    mv
  );
  zt[t] = new vn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pv, mv);
  zt[t] = new vn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pv, mv);
  zt[t] = new vn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  zt[e] = new vn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
zt.xlinkHref = new vn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  zt[e] = new vn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vv(e, t, n, r) {
  var i = zt.hasOwnProperty(t) ? zt[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (eD(t, n, i, r) && (n = null), r || i === null ? ZP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Si = YP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tc = Symbol.for("react.element"), ka = Symbol.for("react.portal"), Aa = Symbol.for("react.fragment"), gv = Symbol.for("react.strict_mode"), Wp = Symbol.for("react.profiler"), lC = Symbol.for("react.provider"), uC = Symbol.for("react.context"), yv = Symbol.for("react.forward_ref"), Gp = Symbol.for("react.suspense"), Xp = Symbol.for("react.suspense_list"), Ev = Symbol.for("react.memo"), Li = Symbol.for("react.lazy"), cC = Symbol.for("react.offscreen"), vx = Symbol.iterator;
function js(e) {
  return e === null || typeof e != "object" ? null : (e = vx && e[vx] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pt = Object.assign, qh;
function el(e) {
  if (qh === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    qh = t && t[1] || "";
  }
  return `
` + qh + e;
}
var Kh = !1;
function Yh(e, t) {
  if (!e || Kh) return "";
  Kh = !0;
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
              var c = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Kh = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? el(e) : "";
}
function tD(e) {
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
      return e = Yh(e.type, !1), e;
    case 11:
      return e = Yh(e.type.render, !1), e;
    case 1:
      return e = Yh(e.type, !0), e;
    default:
      return "";
  }
}
function qp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Aa:
      return "Fragment";
    case ka:
      return "Portal";
    case Wp:
      return "Profiler";
    case gv:
      return "StrictMode";
    case Gp:
      return "Suspense";
    case Xp:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case uC:
      return (e.displayName || "Context") + ".Consumer";
    case lC:
      return (e._context.displayName || "Context") + ".Provider";
    case yv:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ev:
      return t = e.displayName || null, t !== null ? t : qp(e.type) || "Memo";
    case Li:
      t = e._payload, e = e._init;
      try {
        return qp(e(t));
      } catch {
      }
  }
  return null;
}
function nD(e) {
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
      return qp(t);
    case 8:
      return t === gv ? "StrictMode" : "Mode";
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
function fC(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rD(e) {
  var t = fC(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function nc(e) {
  e._valueTracker || (e._valueTracker = rD(e));
}
function dC(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = fC(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Kc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kp(e, t) {
  var n = t.checked;
  return pt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function gx(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = no(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hC(e, t) {
  t = t.checked, t != null && vv(e, "checked", t, !1);
}
function Yp(e, t) {
  hC(e, t);
  var n = no(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qp(e, t.type, no(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yx(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qp(e, t, n) {
  (t !== "number" || Kc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tl = Array.isArray;
function Ua(e, t, n, r) {
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
function Zp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
  return pt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ex(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(q(92));
      if (tl(n)) {
        if (1 < n.length) throw Error(q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: no(n) };
}
function pC(e, t) {
  var n = no(t.value), r = no(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function xx(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mC(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? mC(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rc, vC = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (rc = rc || document.createElement("div"), rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = rc.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, iD = ["Webkit", "ms", "Moz", "O"];
Object.keys(ol).forEach(function(e) {
  iD.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ol[t] = ol[e];
  });
});
function gC(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ol.hasOwnProperty(e) && ol[e] ? ("" + t).trim() : t + "px";
}
function yC(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = gC(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var oD = pt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function em(e, t) {
  if (t) {
    if (oD[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(q(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(q(62));
  }
}
function tm(e, t) {
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
var nm = null;
function xv(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var rm = null, $a = null, za = null;
function wx(e) {
  if (e = Kl(e)) {
    if (typeof rm != "function") throw Error(q(280));
    var t = e.stateNode;
    t && (t = Gf(t), rm(e.stateNode, e.type, t));
  }
}
function EC(e) {
  $a ? za ? za.push(e) : za = [e] : $a = e;
}
function xC() {
  if ($a) {
    var e = $a, t = za;
    if (za = $a = null, wx(e), t) for (e = 0; e < t.length; e++) wx(t[e]);
  }
}
function wC(e, t) {
  return e(t);
}
function CC() {
}
var Qh = !1;
function _C(e, t, n) {
  if (Qh) return e(t, n);
  Qh = !0;
  try {
    return wC(e, t, n);
  } finally {
    Qh = !1, ($a !== null || za !== null) && (CC(), xC());
  }
}
function wl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gf(n);
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
  if (n && typeof n != "function") throw Error(q(231, t, typeof n));
  return n;
}
var im = !1;
if (yi) try {
  var Ws = {};
  Object.defineProperty(Ws, "passive", { get: function() {
    im = !0;
  } }), window.addEventListener("test", Ws, Ws), window.removeEventListener("test", Ws, Ws);
} catch {
  im = !1;
}
function aD(e, t, n, r, i, a, l, u, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var al = !1, Yc = null, Qc = !1, om = null, sD = { onError: function(e) {
  al = !0, Yc = e;
} };
function lD(e, t, n, r, i, a, l, u, c) {
  al = !1, Yc = null, aD.apply(sD, arguments);
}
function uD(e, t, n, r, i, a, l, u, c) {
  if (lD.apply(this, arguments), al) {
    if (al) {
      var d = Yc;
      al = !1, Yc = null;
    } else throw Error(q(198));
    Qc || (Qc = !0, om = d);
  }
}
function Yo(e) {
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
function SC(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cx(e) {
  if (Yo(e) !== e) throw Error(q(188));
}
function cD(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yo(e), t === null) throw Error(q(188));
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
        if (a === n) return Cx(i), e;
        if (a === r) return Cx(i), t;
        a = a.sibling;
      }
      throw Error(q(188));
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
        if (!l) throw Error(q(189));
      }
    }
    if (n.alternate !== r) throw Error(q(190));
  }
  if (n.tag !== 3) throw Error(q(188));
  return n.stateNode.current === n ? e : t;
}
function bC(e) {
  return e = cD(e), e !== null ? kC(e) : null;
}
function kC(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kC(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var AC = zn.unstable_scheduleCallback, _x = zn.unstable_cancelCallback, fD = zn.unstable_shouldYield, dD = zn.unstable_requestPaint, wt = zn.unstable_now, hD = zn.unstable_getCurrentPriorityLevel, wv = zn.unstable_ImmediatePriority, TC = zn.unstable_UserBlockingPriority, Zc = zn.unstable_NormalPriority, pD = zn.unstable_LowPriority, RC = zn.unstable_IdlePriority, $f = null, qr = null;
function mD(e) {
  if (qr && typeof qr.onCommitFiberRoot == "function") try {
    qr.onCommitFiberRoot($f, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Rr = Math.clz32 ? Math.clz32 : yD, vD = Math.log, gD = Math.LN2;
function yD(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vD(e) / gD | 0) | 0;
}
var ic = 64, oc = 4194304;
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
function Jc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = nl(u) : (a &= l, a !== 0 && (r = nl(a)));
  } else l = n & ~i, l !== 0 ? r = nl(l) : a !== 0 && (r = nl(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Rr(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function ED(e, t) {
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
function xD(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var l = 31 - Rr(a), u = 1 << l, c = i[l];
    c === -1 ? (!(u & n) || u & r) && (i[l] = ED(u, t)) : c <= t && (e.expiredLanes |= u), a &= ~u;
  }
}
function am(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function IC() {
  var e = ic;
  return ic <<= 1, !(ic & 4194240) && (ic = 64), e;
}
function Zh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rr(t), e[t] = n;
}
function wD(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Rr(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function Cv(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Rr(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var Xe = 0;
function NC(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var OC, _v, PC, DC, FC, sm = !1, ac = [], Xi = null, qi = null, Ki = null, Cl = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), Ui = [], CD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sx(e, t) {
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
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Kl(t), t !== null && _v(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function _D(e, t, n, r, i) {
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
function MC(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Yo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = SC(n), t !== null) {
          e.blockedOn = t, FC(e.priority, function() {
            PC(n);
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
function Oc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lm(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      nm = r, n.target.dispatchEvent(r), nm = null;
    } else return t = Kl(n), t !== null && _v(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bx(e, t, n) {
  Oc(e) && n.delete(t);
}
function SD() {
  sm = !1, Xi !== null && Oc(Xi) && (Xi = null), qi !== null && Oc(qi) && (qi = null), Ki !== null && Oc(Ki) && (Ki = null), Cl.forEach(bx), _l.forEach(bx);
}
function Xs(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sm || (sm = !0, zn.unstable_scheduleCallback(zn.unstable_NormalPriority, SD)));
}
function Sl(e) {
  function t(i) {
    return Xs(i, e);
  }
  if (0 < ac.length) {
    Xs(ac[0], e);
    for (var n = 1; n < ac.length; n++) {
      var r = ac[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xi !== null && Xs(Xi, e), qi !== null && Xs(qi, e), Ki !== null && Xs(Ki, e), Cl.forEach(t), _l.forEach(t), n = 0; n < Ui.length; n++) r = Ui[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ui.length && (n = Ui[0], n.blockedOn === null); ) MC(n), n.blockedOn === null && Ui.shift();
}
var ja = Si.ReactCurrentBatchConfig, ef = !0;
function bD(e, t, n, r) {
  var i = Xe, a = ja.transition;
  ja.transition = null;
  try {
    Xe = 1, Sv(e, t, n, r);
  } finally {
    Xe = i, ja.transition = a;
  }
}
function kD(e, t, n, r) {
  var i = Xe, a = ja.transition;
  ja.transition = null;
  try {
    Xe = 4, Sv(e, t, n, r);
  } finally {
    Xe = i, ja.transition = a;
  }
}
function Sv(e, t, n, r) {
  if (ef) {
    var i = lm(e, t, n, r);
    if (i === null) lp(e, t, r, tf, n), Sx(e, r);
    else if (_D(i, e, t, n, r)) r.stopPropagation();
    else if (Sx(e, r), t & 4 && -1 < CD.indexOf(e)) {
      for (; i !== null; ) {
        var a = Kl(i);
        if (a !== null && OC(a), a = lm(e, t, n, r), a === null && lp(e, t, r, tf, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else lp(e, t, r, null, n);
  }
}
var tf = null;
function lm(e, t, n, r) {
  if (tf = null, e = xv(r), e = Ro(e), e !== null) if (t = Yo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = SC(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return tf = e, null;
}
function LC(e) {
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
      switch (hD()) {
        case wv:
          return 1;
        case TC:
          return 4;
        case Zc:
        case pD:
          return 16;
        case RC:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ji = null, bv = null, Pc = null;
function BC() {
  if (Pc) return Pc;
  var e, t = bv, n = t.length, r, i = "value" in ji ? ji.value : ji.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[a - r]; r++) ;
  return Pc = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Dc(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sc() {
  return !0;
}
function kx() {
  return !1;
}
function Gn(e) {
  function t(n, r, i, a, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(a) : a[u]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? sc : kx, this.isPropagationStopped = kx, this;
  }
  return pt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sc);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sc);
  }, persist: function() {
  }, isPersistent: sc }), t;
}
var ps = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, kv = Gn(ps), ql = pt({}, ps, { view: 0, detail: 0 }), AD = Gn(ql), Jh, ep, qs, zf = pt({}, ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Av, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qs && (qs && e.type === "mousemove" ? (Jh = e.screenX - qs.screenX, ep = e.screenY - qs.screenY) : ep = Jh = 0, qs = e), Jh);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ep;
} }), Ax = Gn(zf), TD = pt({}, zf, { dataTransfer: 0 }), RD = Gn(TD), ID = pt({}, ql, { relatedTarget: 0 }), tp = Gn(ID), ND = pt({}, ps, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), OD = Gn(ND), PD = pt({}, ps, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), DD = Gn(PD), FD = pt({}, ps, { data: 0 }), Tx = Gn(FD), MD = {
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
}, LD = {
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
}, BD = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function HD(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = BD[e]) ? !!t[e] : !1;
}
function Av() {
  return HD;
}
var VD = pt({}, ql, { key: function(e) {
  if (e.key) {
    var t = MD[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Dc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? LD[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Av, charCode: function(e) {
  return e.type === "keypress" ? Dc(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Dc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), UD = Gn(VD), $D = pt({}, zf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rx = Gn($D), zD = pt({}, ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Av }), jD = Gn(zD), WD = pt({}, ps, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), GD = Gn(WD), XD = pt({}, zf, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), qD = Gn(XD), KD = [9, 13, 27, 32], Tv = yi && "CompositionEvent" in window, sl = null;
yi && "documentMode" in document && (sl = document.documentMode);
var YD = yi && "TextEvent" in window && !sl, HC = yi && (!Tv || sl && 8 < sl && 11 >= sl), Ix = " ", Nx = !1;
function VC(e, t) {
  switch (e) {
    case "keyup":
      return KD.indexOf(t.keyCode) !== -1;
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
function UC(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ta = !1;
function QD(e, t) {
  switch (e) {
    case "compositionend":
      return UC(t);
    case "keypress":
      return t.which !== 32 ? null : (Nx = !0, Ix);
    case "textInput":
      return e = t.data, e === Ix && Nx ? null : e;
    default:
      return null;
  }
}
function ZD(e, t) {
  if (Ta) return e === "compositionend" || !Tv && VC(e, t) ? (e = BC(), Pc = bv = ji = null, Ta = !1, e) : null;
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
      return HC && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var JD = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ox(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!JD[e.type] : t === "textarea";
}
function $C(e, t, n, r) {
  EC(r), t = nf(t, "onChange"), 0 < t.length && (n = new kv("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ll = null, bl = null;
function eF(e) {
  JC(e, 0);
}
function jf(e) {
  var t = Na(e);
  if (dC(t)) return e;
}
function tF(e, t) {
  if (e === "change") return t;
}
var zC = !1;
if (yi) {
  var np;
  if (yi) {
    var rp = "oninput" in document;
    if (!rp) {
      var Px = document.createElement("div");
      Px.setAttribute("oninput", "return;"), rp = typeof Px.oninput == "function";
    }
    np = rp;
  } else np = !1;
  zC = np && (!document.documentMode || 9 < document.documentMode);
}
function Dx() {
  ll && (ll.detachEvent("onpropertychange", jC), bl = ll = null);
}
function jC(e) {
  if (e.propertyName === "value" && jf(bl)) {
    var t = [];
    $C(t, bl, e, xv(e)), _C(eF, t);
  }
}
function nF(e, t, n) {
  e === "focusin" ? (Dx(), ll = t, bl = n, ll.attachEvent("onpropertychange", jC)) : e === "focusout" && Dx();
}
function rF(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return jf(bl);
}
function iF(e, t) {
  if (e === "click") return jf(t);
}
function oF(e, t) {
  if (e === "input" || e === "change") return jf(t);
}
function aF(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Nr = typeof Object.is == "function" ? Object.is : aF;
function kl(e, t) {
  if (Nr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!jp.call(t, i) || !Nr(e[i], t[i])) return !1;
  }
  return !0;
}
function Fx(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mx(e, t) {
  var n = Fx(e);
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
    n = Fx(n);
  }
}
function WC(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? WC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function GC() {
  for (var e = window, t = Kc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kc(e.document);
  }
  return t;
}
function Rv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function sF(e) {
  var t = GC(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && WC(n.ownerDocument.documentElement, n)) {
    if (r !== null && Rv(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Mx(n, a);
        var l = Mx(
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
var lF = yi && "documentMode" in document && 11 >= document.documentMode, Ra = null, um = null, ul = null, cm = !1;
function Lx(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cm || Ra == null || Ra !== Kc(r) || (r = Ra, "selectionStart" in r && Rv(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ul && kl(ul, r) || (ul = r, r = nf(um, "onSelect"), 0 < r.length && (t = new kv("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ra)));
}
function lc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ia = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, ip = {}, XC = {};
yi && (XC = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
function Wf(e) {
  if (ip[e]) return ip[e];
  if (!Ia[e]) return e;
  var t = Ia[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in XC) return ip[e] = t[n];
  return e;
}
var qC = Wf("animationend"), KC = Wf("animationiteration"), YC = Wf("animationstart"), QC = Wf("transitionend"), ZC = /* @__PURE__ */ new Map(), Bx = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function so(e, t) {
  ZC.set(e, t), Ko(t, [e]);
}
for (var op = 0; op < Bx.length; op++) {
  var ap = Bx[op], uF = ap.toLowerCase(), cF = ap[0].toUpperCase() + ap.slice(1);
  so(uF, "on" + cF);
}
so(qC, "onAnimationEnd");
so(KC, "onAnimationIteration");
so(YC, "onAnimationStart");
so("dblclick", "onDoubleClick");
so("focusin", "onFocus");
so("focusout", "onBlur");
so(QC, "onTransitionEnd");
Qa("onMouseEnter", ["mouseout", "mouseover"]);
Qa("onMouseLeave", ["mouseout", "mouseover"]);
Qa("onPointerEnter", ["pointerout", "pointerover"]);
Qa("onPointerLeave", ["pointerout", "pointerover"]);
Ko("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ko("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ko("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ko("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ko("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ko("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fF = new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));
function Hx(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, uD(r, t, void 0, e), e.currentTarget = null;
}
function JC(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], c = u.instance, d = u.currentTarget;
        if (u = u.listener, c !== a && i.isPropagationStopped()) break e;
        Hx(i, u, d), a = c;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], c = u.instance, d = u.currentTarget, u = u.listener, c !== a && i.isPropagationStopped()) break e;
        Hx(i, u, d), a = c;
      }
    }
  }
  if (Qc) throw e = om, Qc = !1, om = null, e;
}
function at(e, t) {
  var n = t[mm];
  n === void 0 && (n = t[mm] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (e_(t, e, 2, !1), n.add(r));
}
function sp(e, t, n) {
  var r = 0;
  t && (r |= 4), e_(n, e, r, t);
}
var uc = "_reactListening" + Math.random().toString(36).slice(2);
function Al(e) {
  if (!e[uc]) {
    e[uc] = !0, sC.forEach(function(n) {
      n !== "selectionchange" && (fF.has(n) || sp(n, !1, e), sp(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[uc] || (t[uc] = !0, sp("selectionchange", !1, t));
  }
}
function e_(e, t, n, r) {
  switch (LC(t)) {
    case 1:
      var i = bD;
      break;
    case 4:
      i = kD;
      break;
    default:
      i = Sv;
  }
  n = i.bind(null, t, n, e), i = void 0, !im || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function lp(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var c = l.tag;
        if ((c === 3 || c === 4) && (c = l.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = Ro(u), l === null) return;
        if (c = l.tag, c === 5 || c === 6) {
          r = a = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  _C(function() {
    var d = a, h = xv(n), m = [];
    e: {
      var v = ZC.get(e);
      if (v !== void 0) {
        var x = kv, b = e;
        switch (e) {
          case "keypress":
            if (Dc(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = UD;
            break;
          case "focusin":
            b = "focus", x = tp;
            break;
          case "focusout":
            b = "blur", x = tp;
            break;
          case "beforeblur":
          case "afterblur":
            x = tp;
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
            x = Ax;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = RD;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jD;
            break;
          case qC:
          case KC:
          case YC:
            x = OD;
            break;
          case QC:
            x = GD;
            break;
          case "scroll":
            x = AD;
            break;
          case "wheel":
            x = qD;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = DD;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Rx;
        }
        var S = (t & 4) !== 0, R = !S && e === "scroll", w = S ? v !== null ? v + "Capture" : null : v;
        S = [];
        for (var C = d, A; C !== null; ) {
          A = C;
          var I = A.stateNode;
          if (A.tag === 5 && I !== null && (A = I, w !== null && (I = wl(C, w), I != null && S.push(Tl(C, I, A)))), R) break;
          C = C.return;
        }
        0 < S.length && (v = new x(v, b, null, n, h), m.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== nm && (b = n.relatedTarget || n.fromElement) && (Ro(b) || b[Ei])) break e;
        if ((x || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (b = n.relatedTarget || n.toElement, x = d, b = b ? Ro(b) : null, b !== null && (R = Yo(b), b !== R || b.tag !== 5 && b.tag !== 6) && (b = null)) : (x = null, b = d), x !== b)) {
          if (S = Ax, I = "onMouseLeave", w = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (S = Rx, I = "onPointerLeave", w = "onPointerEnter", C = "pointer"), R = x == null ? v : Na(x), A = b == null ? v : Na(b), v = new S(I, C + "leave", x, n, h), v.target = R, v.relatedTarget = A, I = null, Ro(h) === d && (S = new S(w, C + "enter", b, n, h), S.target = A, S.relatedTarget = R, I = S), R = I, x && b) t: {
            for (S = x, w = b, C = 0, A = S; A; A = Ea(A)) C++;
            for (A = 0, I = w; I; I = Ea(I)) A++;
            for (; 0 < C - A; ) S = Ea(S), C--;
            for (; 0 < A - C; ) w = Ea(w), A--;
            for (; C--; ) {
              if (S === w || w !== null && S === w.alternate) break t;
              S = Ea(S), w = Ea(w);
            }
            S = null;
          }
          else S = null;
          x !== null && Vx(m, v, x, S, !1), b !== null && R !== null && Vx(m, R, b, S, !0);
        }
      }
      e: {
        if (v = d ? Na(d) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var O = tF;
        else if (Ox(v)) if (zC) O = oF;
        else {
          O = rF;
          var F = nF;
        }
        else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (O = iF);
        if (O && (O = O(e, d))) {
          $C(m, O, n, h);
          break e;
        }
        F && F(e, v, d), e === "focusout" && (F = v._wrapperState) && F.controlled && v.type === "number" && Qp(v, "number", v.value);
      }
      switch (F = d ? Na(d) : window, e) {
        case "focusin":
          (Ox(F) || F.contentEditable === "true") && (Ra = F, um = d, ul = null);
          break;
        case "focusout":
          ul = um = Ra = null;
          break;
        case "mousedown":
          cm = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          cm = !1, Lx(m, n, h);
          break;
        case "selectionchange":
          if (lF) break;
        case "keydown":
        case "keyup":
          Lx(m, n, h);
      }
      var L;
      if (Tv) e: {
        switch (e) {
          case "compositionstart":
            var H = "onCompositionStart";
            break e;
          case "compositionend":
            H = "onCompositionEnd";
            break e;
          case "compositionupdate":
            H = "onCompositionUpdate";
            break e;
        }
        H = void 0;
      }
      else Ta ? VC(e, n) && (H = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (H = "onCompositionStart");
      H && (HC && n.locale !== "ko" && (Ta || H !== "onCompositionStart" ? H === "onCompositionEnd" && Ta && (L = BC()) : (ji = h, bv = "value" in ji ? ji.value : ji.textContent, Ta = !0)), F = nf(d, H), 0 < F.length && (H = new Tx(H, e, null, n, h), m.push({ event: H, listeners: F }), L ? H.data = L : (L = UC(n), L !== null && (H.data = L)))), (L = YD ? QD(e, n) : ZD(e, n)) && (d = nf(d, "onBeforeInput"), 0 < d.length && (h = new Tx("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: d }), h.data = L));
    }
    JC(m, t);
  });
}
function Tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nf(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = wl(e, n), a != null && r.unshift(Tl(e, a, i)), a = wl(e, t), a != null && r.push(Tl(e, a, i))), e = e.return;
  }
  return r;
}
function Ea(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vx(e, t, n, r, i) {
  for (var a = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, d = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && d !== null && (u = d, i ? (c = wl(n, a), c != null && l.unshift(Tl(n, c, u))) : i || (c = wl(n, a), c != null && l.push(Tl(n, c, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var dF = /\r\n?/g, hF = /\u0000|\uFFFD/g;
function Ux(e) {
  return (typeof e == "string" ? e : "" + e).replace(dF, `
`).replace(hF, "");
}
function cc(e, t, n) {
  if (t = Ux(t), Ux(e) !== t && n) throw Error(q(425));
}
function rf() {
}
var fm = null, dm = null;
function hm(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pm = typeof setTimeout == "function" ? setTimeout : void 0, pF = typeof clearTimeout == "function" ? clearTimeout : void 0, $x = typeof Promise == "function" ? Promise : void 0, mF = typeof queueMicrotask == "function" ? queueMicrotask : typeof $x < "u" ? function(e) {
  return $x.resolve(null).then(e).catch(vF);
} : pm;
function vF(e) {
  setTimeout(function() {
    throw e;
  });
}
function up(e, t) {
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
function zx(e) {
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
var ms = Math.random().toString(36).slice(2), Gr = "__reactFiber$" + ms, Rl = "__reactProps$" + ms, Ei = "__reactContainer$" + ms, mm = "__reactEvents$" + ms, gF = "__reactListeners$" + ms, yF = "__reactHandles$" + ms;
function Ro(e) {
  var t = e[Gr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ei] || n[Gr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zx(e); e !== null; ) {
        if (n = e[Gr]) return n;
        e = zx(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kl(e) {
  return e = e[Gr] || e[Ei], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Na(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(q(33));
}
function Gf(e) {
  return e[Rl] || null;
}
var vm = [], Oa = -1;
function lo(e) {
  return { current: e };
}
function lt(e) {
  0 > Oa || (e.current = vm[Oa], vm[Oa] = null, Oa--);
}
function nt(e, t) {
  Oa++, vm[Oa] = e.current, e.current = t;
}
var ro = {}, en = lo(ro), kn = lo(!1), Vo = ro;
function Za(e, t) {
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
function of() {
  lt(kn), lt(en);
}
function jx(e, t, n) {
  if (en.current !== ro) throw Error(q(168));
  nt(en, t), nt(kn, n);
}
function t_(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(q(108, nD(e) || "Unknown", i));
  return pt({}, n, r);
}
function af(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ro, Vo = en.current, nt(en, e), nt(kn, kn.current), !0;
}
function Wx(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(q(169));
  n ? (e = t_(e, t, Vo), r.__reactInternalMemoizedMergedChildContext = e, lt(kn), lt(en), nt(en, e)) : lt(kn), nt(kn, n);
}
var di = null, Xf = !1, cp = !1;
function n_(e) {
  di === null ? di = [e] : di.push(e);
}
function EF(e) {
  Xf = !0, n_(e);
}
function uo() {
  if (!cp && di !== null) {
    cp = !0;
    var e = 0, t = Xe;
    try {
      var n = di;
      for (Xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      di = null, Xf = !1;
    } catch (i) {
      throw di !== null && (di = di.slice(e + 1)), AC(wv, uo), i;
    } finally {
      Xe = t, cp = !1;
    }
  }
  return null;
}
var Pa = [], Da = 0, sf = null, lf = 0, sr = [], lr = 0, Uo = null, mi = 1, vi = "";
function Ao(e, t) {
  Pa[Da++] = lf, Pa[Da++] = sf, sf = e, lf = t;
}
function r_(e, t, n) {
  sr[lr++] = mi, sr[lr++] = vi, sr[lr++] = Uo, Uo = e;
  var r = mi;
  e = vi;
  var i = 32 - Rr(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Rr(t) + i;
  if (30 < a) {
    var l = i - i % 5;
    a = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, mi = 1 << 32 - Rr(t) + i | n << i | r, vi = a + e;
  } else mi = 1 << a | n << i | r, vi = e;
}
function Iv(e) {
  e.return !== null && (Ao(e, 1), r_(e, 1, 0));
}
function Nv(e) {
  for (; e === sf; ) sf = Pa[--Da], Pa[Da] = null, lf = Pa[--Da], Pa[Da] = null;
  for (; e === Uo; ) Uo = sr[--lr], sr[lr] = null, vi = sr[--lr], sr[lr] = null, mi = sr[--lr], sr[lr] = null;
}
var $n = null, Un = null, ct = !1, Tr = null;
function i_(e, t) {
  var n = cr(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Gx(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $n = e, Un = Yi(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $n = e, Un = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Uo !== null ? { id: mi, overflow: vi } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = cr(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $n = e, Un = null, !0) : !1;
    default:
      return !1;
  }
}
function gm(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ym(e) {
  if (ct) {
    var t = Un;
    if (t) {
      var n = t;
      if (!Gx(e, t)) {
        if (gm(e)) throw Error(q(418));
        t = Yi(n.nextSibling);
        var r = $n;
        t && Gx(e, t) ? i_(r, n) : (e.flags = e.flags & -4097 | 2, ct = !1, $n = e);
      }
    } else {
      if (gm(e)) throw Error(q(418));
      e.flags = e.flags & -4097 | 2, ct = !1, $n = e;
    }
  }
}
function Xx(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $n = e;
}
function fc(e) {
  if (e !== $n) return !1;
  if (!ct) return Xx(e), ct = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hm(e.type, e.memoizedProps)), t && (t = Un)) {
    if (gm(e)) throw o_(), Error(q(418));
    for (; t; ) i_(e, t), t = Yi(t.nextSibling);
  }
  if (Xx(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(q(317));
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
function o_() {
  for (var e = Un; e; ) e = Yi(e.nextSibling);
}
function Ja() {
  Un = $n = null, ct = !1;
}
function Ov(e) {
  Tr === null ? Tr = [e] : Tr.push(e);
}
var xF = Si.ReactCurrentBatchConfig;
function Ks(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(q(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[a] : u[a] = l;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(q(284));
    if (!n._owner) throw Error(q(290, e));
  }
  return e;
}
function dc(e, t) {
  throw e = Object.prototype.toString.call(t), Error(q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qx(e) {
  var t = e._init;
  return t(e._payload);
}
function a_(e) {
  function t(w, C) {
    if (e) {
      var A = w.deletions;
      A === null ? (w.deletions = [C], w.flags |= 16) : A.push(C);
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
  function a(w, C, A) {
    return w.index = A, e ? (A = w.alternate, A !== null ? (A = A.index, A < C ? (w.flags |= 2, C) : A) : (w.flags |= 2, C)) : (w.flags |= 1048576, C);
  }
  function l(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function u(w, C, A, I) {
    return C === null || C.tag !== 6 ? (C = gp(A, w.mode, I), C.return = w, C) : (C = i(C, A), C.return = w, C);
  }
  function c(w, C, A, I) {
    var O = A.type;
    return O === Aa ? h(w, C, A.props.children, I, A.key) : C !== null && (C.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Li && qx(O) === C.type) ? (I = i(C, A.props), I.ref = Ks(w, C, A), I.return = w, I) : (I = Uc(A.type, A.key, A.props, null, w.mode, I), I.ref = Ks(w, C, A), I.return = w, I);
  }
  function d(w, C, A, I) {
    return C === null || C.tag !== 4 || C.stateNode.containerInfo !== A.containerInfo || C.stateNode.implementation !== A.implementation ? (C = yp(A, w.mode, I), C.return = w, C) : (C = i(C, A.children || []), C.return = w, C);
  }
  function h(w, C, A, I, O) {
    return C === null || C.tag !== 7 ? (C = Mo(A, w.mode, I, O), C.return = w, C) : (C = i(C, A), C.return = w, C);
  }
  function m(w, C, A) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return C = gp("" + C, w.mode, A), C.return = w, C;
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case tc:
          return A = Uc(C.type, C.key, C.props, null, w.mode, A), A.ref = Ks(w, null, C), A.return = w, A;
        case ka:
          return C = yp(C, w.mode, A), C.return = w, C;
        case Li:
          var I = C._init;
          return m(w, I(C._payload), A);
      }
      if (tl(C) || js(C)) return C = Mo(C, w.mode, A, null), C.return = w, C;
      dc(w, C);
    }
    return null;
  }
  function v(w, C, A, I) {
    var O = C !== null ? C.key : null;
    if (typeof A == "string" && A !== "" || typeof A == "number") return O !== null ? null : u(w, C, "" + A, I);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case tc:
          return A.key === O ? c(w, C, A, I) : null;
        case ka:
          return A.key === O ? d(w, C, A, I) : null;
        case Li:
          return O = A._init, v(
            w,
            C,
            O(A._payload),
            I
          );
      }
      if (tl(A) || js(A)) return O !== null ? null : h(w, C, A, I, null);
      dc(w, A);
    }
    return null;
  }
  function x(w, C, A, I, O) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return w = w.get(A) || null, u(C, w, "" + I, O);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case tc:
          return w = w.get(I.key === null ? A : I.key) || null, c(C, w, I, O);
        case ka:
          return w = w.get(I.key === null ? A : I.key) || null, d(C, w, I, O);
        case Li:
          var F = I._init;
          return x(w, C, A, F(I._payload), O);
      }
      if (tl(I) || js(I)) return w = w.get(A) || null, h(C, w, I, O, null);
      dc(C, I);
    }
    return null;
  }
  function b(w, C, A, I) {
    for (var O = null, F = null, L = C, H = C = 0, j = null; L !== null && H < A.length; H++) {
      L.index > H ? (j = L, L = null) : j = L.sibling;
      var W = v(w, L, A[H], I);
      if (W === null) {
        L === null && (L = j);
        break;
      }
      e && L && W.alternate === null && t(w, L), C = a(W, C, H), F === null ? O = W : F.sibling = W, F = W, L = j;
    }
    if (H === A.length) return n(w, L), ct && Ao(w, H), O;
    if (L === null) {
      for (; H < A.length; H++) L = m(w, A[H], I), L !== null && (C = a(L, C, H), F === null ? O = L : F.sibling = L, F = L);
      return ct && Ao(w, H), O;
    }
    for (L = r(w, L); H < A.length; H++) j = x(L, w, H, A[H], I), j !== null && (e && j.alternate !== null && L.delete(j.key === null ? H : j.key), C = a(j, C, H), F === null ? O = j : F.sibling = j, F = j);
    return e && L.forEach(function(K) {
      return t(w, K);
    }), ct && Ao(w, H), O;
  }
  function S(w, C, A, I) {
    var O = js(A);
    if (typeof O != "function") throw Error(q(150));
    if (A = O.call(A), A == null) throw Error(q(151));
    for (var F = O = null, L = C, H = C = 0, j = null, W = A.next(); L !== null && !W.done; H++, W = A.next()) {
      L.index > H ? (j = L, L = null) : j = L.sibling;
      var K = v(w, L, W.value, I);
      if (K === null) {
        L === null && (L = j);
        break;
      }
      e && L && K.alternate === null && t(w, L), C = a(K, C, H), F === null ? O = K : F.sibling = K, F = K, L = j;
    }
    if (W.done) return n(
      w,
      L
    ), ct && Ao(w, H), O;
    if (L === null) {
      for (; !W.done; H++, W = A.next()) W = m(w, W.value, I), W !== null && (C = a(W, C, H), F === null ? O = W : F.sibling = W, F = W);
      return ct && Ao(w, H), O;
    }
    for (L = r(w, L); !W.done; H++, W = A.next()) W = x(L, w, H, W.value, I), W !== null && (e && W.alternate !== null && L.delete(W.key === null ? H : W.key), C = a(W, C, H), F === null ? O = W : F.sibling = W, F = W);
    return e && L.forEach(function(Q) {
      return t(w, Q);
    }), ct && Ao(w, H), O;
  }
  function R(w, C, A, I) {
    if (typeof A == "object" && A !== null && A.type === Aa && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case tc:
          e: {
            for (var O = A.key, F = C; F !== null; ) {
              if (F.key === O) {
                if (O = A.type, O === Aa) {
                  if (F.tag === 7) {
                    n(w, F.sibling), C = i(F, A.props.children), C.return = w, w = C;
                    break e;
                  }
                } else if (F.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Li && qx(O) === F.type) {
                  n(w, F.sibling), C = i(F, A.props), C.ref = Ks(w, F, A), C.return = w, w = C;
                  break e;
                }
                n(w, F);
                break;
              } else t(w, F);
              F = F.sibling;
            }
            A.type === Aa ? (C = Mo(A.props.children, w.mode, I, A.key), C.return = w, w = C) : (I = Uc(A.type, A.key, A.props, null, w.mode, I), I.ref = Ks(w, C, A), I.return = w, w = I);
          }
          return l(w);
        case ka:
          e: {
            for (F = A.key; C !== null; ) {
              if (C.key === F) if (C.tag === 4 && C.stateNode.containerInfo === A.containerInfo && C.stateNode.implementation === A.implementation) {
                n(w, C.sibling), C = i(C, A.children || []), C.return = w, w = C;
                break e;
              } else {
                n(w, C);
                break;
              }
              else t(w, C);
              C = C.sibling;
            }
            C = yp(A, w.mode, I), C.return = w, w = C;
          }
          return l(w);
        case Li:
          return F = A._init, R(w, C, F(A._payload), I);
      }
      if (tl(A)) return b(w, C, A, I);
      if (js(A)) return S(w, C, A, I);
      dc(w, A);
    }
    return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, C !== null && C.tag === 6 ? (n(w, C.sibling), C = i(C, A), C.return = w, w = C) : (n(w, C), C = gp(A, w.mode, I), C.return = w, w = C), l(w)) : n(w, C);
  }
  return R;
}
var es = a_(!0), s_ = a_(!1), uf = lo(null), cf = null, Fa = null, Pv = null;
function Dv() {
  Pv = Fa = cf = null;
}
function Fv(e) {
  var t = uf.current;
  lt(uf), e._currentValue = t;
}
function Em(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Wa(e, t) {
  cf = e, Pv = Fa = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (bn = !0), e.firstContext = null);
}
function dr(e) {
  var t = e._currentValue;
  if (Pv !== e) if (e = { context: e, memoizedValue: t, next: null }, Fa === null) {
    if (cf === null) throw Error(q(308));
    Fa = e, cf.dependencies = { lanes: 0, firstContext: e };
  } else Fa = Fa.next = e;
  return t;
}
var Io = null;
function Mv(e) {
  Io === null ? Io = [e] : Io.push(e);
}
function l_(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Mv(t)) : (n.next = i.next, i.next = n), t.interleaved = n, xi(e, r);
}
function xi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bi = !1;
function Lv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function u_(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gi(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qi(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Be & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, xi(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Mv(r)) : (t.next = i.next, i.next = t), r.interleaved = t, xi(e, n);
}
function Fc(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cv(e, n);
  }
}
function Kx(e, t) {
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
function ff(e, t, n, r) {
  var i = e.updateQueue;
  Bi = !1;
  var a = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var c = u, d = c.next;
    c.next = null, l === null ? a = d : l.next = d, l = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = d : u.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var m = i.baseState;
    l = 0, h = d = c = null, u = a;
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
          var b = e, S = u;
          switch (v = t, x = n, S.tag) {
            case 1:
              if (b = S.payload, typeof b == "function") {
                m = b.call(x, m, v);
                break e;
              }
              m = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = S.payload, v = typeof b == "function" ? b.call(x, m, v) : b, v == null) break e;
              m = pt({}, m, v);
              break e;
            case 2:
              Bi = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [u] : v.push(u));
      } else x = { eventTime: x, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (d = h = x, c = m) : h = h.next = x, l |= v;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = m), i.baseState = c, i.firstBaseUpdate = d, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    zo |= l, e.lanes = l, e.memoizedState = m;
  }
}
function Yx(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(q(191, i));
      i.call(r);
    }
  }
}
var Yl = {}, Kr = lo(Yl), Il = lo(Yl), Nl = lo(Yl);
function No(e) {
  if (e === Yl) throw Error(q(174));
  return e;
}
function Bv(e, t) {
  switch (nt(Nl, t), nt(Il, e), nt(Kr, Yl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jp(t, e);
  }
  lt(Kr), nt(Kr, t);
}
function ts() {
  lt(Kr), lt(Il), lt(Nl);
}
function c_(e) {
  No(Nl.current);
  var t = No(Kr.current), n = Jp(t, e.type);
  t !== n && (nt(Il, e), nt(Kr, n));
}
function Hv(e) {
  Il.current === e && (lt(Kr), lt(Il));
}
var dt = lo(0);
function df(e) {
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
var fp = [];
function Vv() {
  for (var e = 0; e < fp.length; e++) fp[e]._workInProgressVersionPrimary = null;
  fp.length = 0;
}
var Mc = Si.ReactCurrentDispatcher, dp = Si.ReactCurrentBatchConfig, $o = 0, ht = null, Tt = null, Dt = null, hf = !1, cl = !1, Ol = 0, wF = 0;
function qt() {
  throw Error(q(321));
}
function Uv(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Nr(e[n], t[n])) return !1;
  return !0;
}
function $v(e, t, n, r, i, a) {
  if ($o = a, ht = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mc.current = e === null || e.memoizedState === null ? bF : kF, e = n(r, i), cl) {
    a = 0;
    do {
      if (cl = !1, Ol = 0, 25 <= a) throw Error(q(301));
      a += 1, Dt = Tt = null, t.updateQueue = null, Mc.current = AF, e = n(r, i);
    } while (cl);
  }
  if (Mc.current = pf, t = Tt !== null && Tt.next !== null, $o = 0, Dt = Tt = ht = null, hf = !1, t) throw Error(q(300));
  return e;
}
function zv() {
  var e = Ol !== 0;
  return Ol = 0, e;
}
function Wr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Dt === null ? ht.memoizedState = Dt = e : Dt = Dt.next = e, Dt;
}
function hr() {
  if (Tt === null) {
    var e = ht.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Tt.next;
  var t = Dt === null ? ht.memoizedState : Dt.next;
  if (t !== null) Dt = t, Tt = e;
  else {
    if (e === null) throw Error(q(310));
    Tt = e, e = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, Dt === null ? ht.memoizedState = Dt = e : Dt = Dt.next = e;
  }
  return Dt;
}
function Pl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hp(e) {
  var t = hr(), n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = Tt, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = a.next, a.next = l;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    a = i.next, r = r.baseState;
    var u = l = null, c = null, d = a;
    do {
      var h = d.lane;
      if (($o & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (u = c = m, l = r) : c = c.next = m, ht.lanes |= h, zo |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? l = r : c.next = u, Nr(r, t.memoizedState) || (bn = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, ht.lanes |= a, zo |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pp(e) {
  var t = hr(), n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      a = e(a, l.action), l = l.next;
    while (l !== i);
    Nr(a, t.memoizedState) || (bn = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function f_() {
}
function d_(e, t) {
  var n = ht, r = hr(), i = t(), a = !Nr(r.memoizedState, i);
  if (a && (r.memoizedState = i, bn = !0), r = r.queue, jv(m_.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Dt !== null && Dt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dl(9, p_.bind(null, n, r, i, t), void 0, null), Mt === null) throw Error(q(349));
    $o & 30 || h_(n, t, i);
  }
  return i;
}
function h_(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function p_(e, t, n, r) {
  t.value = n, t.getSnapshot = r, v_(t) && g_(e);
}
function m_(e, t, n) {
  return n(function() {
    v_(t) && g_(e);
  });
}
function v_(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nr(e, n);
  } catch {
    return !0;
  }
}
function g_(e) {
  var t = xi(e, 1);
  t !== null && Ir(t, e, 1, -1);
}
function Qx(e) {
  var t = Wr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: e }, t.queue = e, e = e.dispatch = SF.bind(null, ht, e), [t.memoizedState, e];
}
function Dl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ht.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ht.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function y_() {
  return hr().memoizedState;
}
function Lc(e, t, n, r) {
  var i = Wr();
  ht.flags |= e, i.memoizedState = Dl(1 | t, n, void 0, r === void 0 ? null : r);
}
function qf(e, t, n, r) {
  var i = hr();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Tt !== null) {
    var l = Tt.memoizedState;
    if (a = l.destroy, r !== null && Uv(r, l.deps)) {
      i.memoizedState = Dl(t, n, a, r);
      return;
    }
  }
  ht.flags |= e, i.memoizedState = Dl(1 | t, n, a, r);
}
function Zx(e, t) {
  return Lc(8390656, 8, e, t);
}
function jv(e, t) {
  return qf(2048, 8, e, t);
}
function E_(e, t) {
  return qf(4, 2, e, t);
}
function x_(e, t) {
  return qf(4, 4, e, t);
}
function w_(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function C_(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qf(4, 4, w_.bind(null, t, e), n);
}
function Wv() {
}
function __(e, t) {
  var n = hr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function S_(e, t) {
  var n = hr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function b_(e, t, n) {
  return $o & 21 ? (Nr(n, t) || (n = IC(), ht.lanes |= n, zo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bn = !0), e.memoizedState = n);
}
function CF(e, t) {
  var n = Xe;
  Xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = dp.transition;
  dp.transition = {};
  try {
    e(!1), t();
  } finally {
    Xe = n, dp.transition = r;
  }
}
function k_() {
  return hr().memoizedState;
}
function _F(e, t, n) {
  var r = Ji(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, A_(e)) T_(t, n);
  else if (n = l_(e, t, n, r), n !== null) {
    var i = pn();
    Ir(n, e, r, i), R_(n, t, r);
  }
}
function SF(e, t, n) {
  var r = Ji(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (A_(e)) T_(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var l = t.lastRenderedState, u = a(l, n);
      if (i.hasEagerState = !0, i.eagerState = u, Nr(u, l)) {
        var c = t.interleaved;
        c === null ? (i.next = i, Mv(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = l_(e, t, i, r), n !== null && (i = pn(), Ir(n, e, r, i), R_(n, t, r));
  }
}
function A_(e) {
  var t = e.alternate;
  return e === ht || t !== null && t === ht;
}
function T_(e, t) {
  cl = hf = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function R_(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cv(e, n);
  }
}
var pf = { readContext: dr, useCallback: qt, useContext: qt, useEffect: qt, useImperativeHandle: qt, useInsertionEffect: qt, useLayoutEffect: qt, useMemo: qt, useReducer: qt, useRef: qt, useState: qt, useDebugValue: qt, useDeferredValue: qt, useTransition: qt, useMutableSource: qt, useSyncExternalStore: qt, useId: qt, unstable_isNewReconciler: !1 }, bF = { readContext: dr, useCallback: function(e, t) {
  return Wr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dr, useEffect: Zx, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Lc(
    4194308,
    4,
    w_.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Lc(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Lc(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _F.bind(null, ht, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qx, useDebugValue: Wv, useDeferredValue: function(e) {
  return Wr().memoizedState = e;
}, useTransition: function() {
  var e = Qx(!1), t = e[0];
  return e = CF.bind(null, e[1]), Wr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ht, i = Wr();
  if (ct) {
    if (n === void 0) throw Error(q(407));
    n = n();
  } else {
    if (n = t(), Mt === null) throw Error(q(349));
    $o & 30 || h_(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, Zx(m_.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Dl(9, p_.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Wr(), t = Mt.identifierPrefix;
  if (ct) {
    var n = vi, r = mi;
    n = (r & ~(1 << 32 - Rr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ol++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = wF++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kF = {
  readContext: dr,
  useCallback: __,
  useContext: dr,
  useEffect: jv,
  useImperativeHandle: C_,
  useInsertionEffect: E_,
  useLayoutEffect: x_,
  useMemo: S_,
  useReducer: hp,
  useRef: y_,
  useState: function() {
    return hp(Pl);
  },
  useDebugValue: Wv,
  useDeferredValue: function(e) {
    var t = hr();
    return b_(t, Tt.memoizedState, e);
  },
  useTransition: function() {
    var e = hp(Pl)[0], t = hr().memoizedState;
    return [e, t];
  },
  useMutableSource: f_,
  useSyncExternalStore: d_,
  useId: k_,
  unstable_isNewReconciler: !1
}, AF = { readContext: dr, useCallback: __, useContext: dr, useEffect: jv, useImperativeHandle: C_, useInsertionEffect: E_, useLayoutEffect: x_, useMemo: S_, useReducer: pp, useRef: y_, useState: function() {
  return pp(Pl);
}, useDebugValue: Wv, useDeferredValue: function(e) {
  var t = hr();
  return Tt === null ? t.memoizedState = e : b_(t, Tt.memoizedState, e);
}, useTransition: function() {
  var e = pp(Pl)[0], t = hr().memoizedState;
  return [e, t];
}, useMutableSource: f_, useSyncExternalStore: d_, useId: k_, unstable_isNewReconciler: !1 };
function br(e, t) {
  if (e && e.defaultProps) {
    t = pt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xm(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Kf = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pn(), i = Ji(e), a = gi(r, i);
  a.payload = t, n != null && (a.callback = n), t = Qi(e, a, i), t !== null && (Ir(t, e, i, r), Fc(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pn(), i = Ji(e), a = gi(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Qi(e, a, i), t !== null && (Ir(t, e, i, r), Fc(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pn(), r = Ji(e), i = gi(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Qi(e, i, r), t !== null && (Ir(t, e, r, n), Fc(t, e, r));
} };
function Jx(e, t, n, r, i, a, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, l) : t.prototype && t.prototype.isPureReactComponent ? !kl(n, r) || !kl(i, a) : !0;
}
function I_(e, t, n) {
  var r = !1, i = ro, a = t.contextType;
  return typeof a == "object" && a !== null ? a = dr(a) : (i = An(t) ? Vo : en.current, r = t.contextTypes, a = (r = r != null) ? Za(e, i) : ro), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Kf, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function ew(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Kf.enqueueReplaceState(t, t.state, null);
}
function wm(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Lv(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = dr(a) : (a = An(t) ? Vo : en.current, i.context = Za(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (xm(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Kf.enqueueReplaceState(i, i.state, null), ff(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ns(e, t) {
  try {
    var n = "", r = t;
    do
      n += tD(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function mp(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cm(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var TF = typeof WeakMap == "function" ? WeakMap : Map;
function N_(e, t, n) {
  n = gi(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vf || (vf = !0, Om = r), Cm(e, t);
  }, n;
}
function O_(e, t, n) {
  n = gi(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Cm(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Cm(e, t), typeof r != "function" && (Zi === null ? Zi = /* @__PURE__ */ new Set([this]) : Zi.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function tw(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new TF();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = $F.bind(null, e, t, n), t.then(e, e));
}
function nw(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rw(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gi(-1, 1), t.tag = 2, Qi(n, t, 1))), n.lanes |= 1), e);
}
var RF = Si.ReactCurrentOwner, bn = !1;
function fn(e, t, n, r) {
  t.child = e === null ? s_(t, null, n, r) : es(t, e.child, n, r);
}
function iw(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return Wa(t, i), r = $v(e, t, n, r, a, i), n = zv(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wi(e, t, i)) : (ct && n && Iv(t), t.flags |= 1, fn(e, t, r, i), t.child);
}
function ow(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Jv(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, P_(e, t, a, r, i)) : (e = Uc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var l = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kl, n(l, r) && e.ref === t.ref) return wi(e, t, i);
  }
  return t.flags |= 1, e = eo(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function P_(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (kl(a, r) && e.ref === t.ref) if (bn = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (bn = !0);
    else return t.lanes = e.lanes, wi(e, t, i);
  }
  return _m(e, t, n, r, i);
}
function D_(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(La, Hn), Hn |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, nt(La, Hn), Hn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, nt(La, Hn), Hn |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, nt(La, Hn), Hn |= r;
  return fn(e, t, i, n), t.child;
}
function F_(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _m(e, t, n, r, i) {
  var a = An(n) ? Vo : en.current;
  return a = Za(t, a), Wa(t, i), n = $v(e, t, n, r, a, i), r = zv(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, wi(e, t, i)) : (ct && r && Iv(t), t.flags |= 1, fn(e, t, n, i), t.child);
}
function aw(e, t, n, r, i) {
  if (An(n)) {
    var a = !0;
    af(t);
  } else a = !1;
  if (Wa(t, i), t.stateNode === null) Bc(e, t), I_(t, n, r), wm(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var c = l.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = dr(d) : (d = An(n) ? Vo : en.current, d = Za(t, d));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || c !== d) && ew(t, l, r, d), Bi = !1;
    var v = t.memoizedState;
    l.state = v, ff(t, r, l, i), c = t.memoizedState, u !== r || v !== c || kn.current || Bi ? (typeof h == "function" && (xm(t, n, h, r), c = t.memoizedState), (u = Bi || Jx(t, n, u, r, v, c, d)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), l.props = r, l.state = c, l.context = d, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, u_(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : br(t.type, u), l.props = d, m = t.pendingProps, v = l.context, c = n.contextType, typeof c == "object" && c !== null ? c = dr(c) : (c = An(n) ? Vo : en.current, c = Za(t, c));
    var x = n.getDerivedStateFromProps;
    (h = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || v !== c) && ew(t, l, r, c), Bi = !1, v = t.memoizedState, l.state = v, ff(t, r, l, i);
    var b = t.memoizedState;
    u !== m || v !== b || kn.current || Bi ? (typeof x == "function" && (xm(t, n, x, r), b = t.memoizedState), (d = Bi || Jx(t, n, d, r, v, b, c) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, b, c), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, b, c)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), l.props = r, l.state = b, l.context = c, r = d) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sm(e, t, n, r, a, i);
}
function Sm(e, t, n, r, i, a) {
  F_(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Wx(t, n, !1), wi(e, t, a);
  r = t.stateNode, RF.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = es(t, e.child, null, a), t.child = es(t, null, u, a)) : fn(e, t, u, a), t.memoizedState = r.state, i && Wx(t, n, !0), t.child;
}
function M_(e) {
  var t = e.stateNode;
  t.pendingContext ? jx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jx(e, t.context, !1), Bv(e, t.containerInfo);
}
function sw(e, t, n, r, i) {
  return Ja(), Ov(i), t.flags |= 256, fn(e, t, n, r), t.child;
}
var bm = { dehydrated: null, treeContext: null, retryLane: 0 };
function km(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function L_(e, t, n) {
  var r = t.pendingProps, i = dt.current, a = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), nt(dt, i & 1), e === null)
    return ym(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, l = { mode: "hidden", children: l }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = Zf(l, r, 0, null), e = Mo(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = km(n), t.memoizedState = bm, e) : Gv(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return IF(e, t, l, r, u, i, n);
  if (a) {
    a = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = eo(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? a = eo(u, a) : (a = Mo(a, l, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, l = e.child.memoizedState, l = l === null ? km(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, a.memoizedState = l, a.childLanes = e.childLanes & ~n, t.memoizedState = bm, r;
  }
  return a = e.child, e = a.sibling, r = eo(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Gv(e, t) {
  return t = Zf({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function hc(e, t, n, r) {
  return r !== null && Ov(r), es(t, e.child, null, n), e = Gv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function IF(e, t, n, r, i, a, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = mp(Error(q(422))), hc(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Zf({ mode: "visible", children: r.children }, i, 0, null), a = Mo(a, i, l, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && es(t, e.child, null, l), t.child.memoizedState = km(l), t.memoizedState = bm, a);
  if (!(t.mode & 1)) return hc(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, a = Error(q(419)), r = mp(a, r, void 0), hc(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, bn || u) {
    if (r = Mt, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, xi(e, i), Ir(r, e, i, -1));
    }
    return Zv(), r = mp(Error(q(421))), hc(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zF.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Un = Yi(i.nextSibling), $n = t, ct = !0, Tr = null, e !== null && (sr[lr++] = mi, sr[lr++] = vi, sr[lr++] = Uo, mi = e.id, vi = e.overflow, Uo = t), t = Gv(t, r.children), t.flags |= 4096, t);
}
function lw(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Em(e.return, t, n);
}
function vp(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function B_(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (fn(e, t, r.children, n), r = dt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && lw(e, n, t);
      else if (e.tag === 19) lw(e, n, t);
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
  if (nt(dt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && df(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), vp(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && df(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      vp(t, !0, n, null, a);
      break;
    case "together":
      vp(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Bc(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wi(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), zo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(q(153));
  if (t.child !== null) {
    for (e = t.child, n = eo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = eo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function NF(e, t, n) {
  switch (t.tag) {
    case 3:
      M_(t), Ja();
      break;
    case 5:
      c_(t);
      break;
    case 1:
      An(t.type) && af(t);
      break;
    case 4:
      Bv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      nt(uf, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (nt(dt, dt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? L_(e, t, n) : (nt(dt, dt.current & 1), e = wi(e, t, n), e !== null ? e.sibling : null);
      nt(dt, dt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return B_(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), nt(dt, dt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, D_(e, t, n);
  }
  return wi(e, t, n);
}
var H_, Am, V_, U_;
H_ = function(e, t) {
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
Am = function() {
};
V_ = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, No(Kr.current);
    var a = null;
    switch (n) {
      case "input":
        i = Kp(e, i), r = Kp(e, r), a = [];
        break;
      case "select":
        i = pt({}, i, { value: void 0 }), r = pt({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Zp(e, i), r = Zp(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rf);
    }
    em(n, r);
    var l;
    n = null;
    for (d in i) if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null) if (d === "style") {
      var u = i[d];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (El.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (u = i != null ? i[d] : void 0, r.hasOwnProperty(d) && c !== u && (c != null || u != null)) if (d === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in c) c.hasOwnProperty(l) && u[l] !== c[l] && (n || (n = {}), n[l] = c[l]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (El.hasOwnProperty(d) ? (c != null && d === "onScroll" && at("scroll", e), a || u === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
U_ = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ys(e, t) {
  if (!ct) switch (e.tailMode) {
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
function OF(e, t, n) {
  var r = t.pendingProps;
  switch (Nv(t), t.tag) {
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
      return An(t.type) && of(), Kt(t), null;
    case 3:
      return r = t.stateNode, ts(), lt(kn), lt(en), Vv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fc(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tr !== null && (Fm(Tr), Tr = null))), Am(e, t), Kt(t), null;
    case 5:
      Hv(t);
      var i = No(Nl.current);
      if (n = t.type, e !== null && t.stateNode != null) V_(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(q(166));
          return Kt(t), null;
        }
        if (e = No(Kr.current), fc(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Gr] = t, r[Rl] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              at("cancel", r), at("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              at("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < rl.length; i++) at(rl[i], r);
              break;
            case "source":
              at("error", r);
              break;
            case "img":
            case "image":
            case "link":
              at(
                "error",
                r
              ), at("load", r);
              break;
            case "details":
              at("toggle", r);
              break;
            case "input":
              gx(r, a), at("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, at("invalid", r);
              break;
            case "textarea":
              Ex(r, a), at("invalid", r);
          }
          em(n, a), i = null;
          for (var l in a) if (a.hasOwnProperty(l)) {
            var u = a[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (a.suppressHydrationWarning !== !0 && cc(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (a.suppressHydrationWarning !== !0 && cc(
              r.textContent,
              u,
              e
            ), i = ["children", "" + u]) : El.hasOwnProperty(l) && u != null && l === "onScroll" && at("scroll", r);
          }
          switch (n) {
            case "input":
              nc(r), yx(r, a, !0);
              break;
            case "textarea":
              nc(r), xx(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = rf);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mC(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Gr] = t, e[Rl] = r, H_(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = tm(n, r), n) {
              case "dialog":
                at("cancel", e), at("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                at("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < rl.length; i++) at(rl[i], e);
                i = r;
                break;
              case "source":
                at("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                at(
                  "error",
                  e
                ), at("load", e), i = r;
                break;
              case "details":
                at("toggle", e), i = r;
                break;
              case "input":
                gx(e, r), i = Kp(e, r), at("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = pt({}, r, { value: void 0 }), at("invalid", e);
                break;
              case "textarea":
                Ex(e, r), i = Zp(e, r), at("invalid", e);
                break;
              default:
                i = r;
            }
            em(n, i), u = i;
            for (a in u) if (u.hasOwnProperty(a)) {
              var c = u[a];
              a === "style" ? yC(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && vC(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && xl(e, c) : typeof c == "number" && xl(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (El.hasOwnProperty(a) ? c != null && a === "onScroll" && at("scroll", e) : c != null && vv(e, a, c, l));
            }
            switch (n) {
              case "input":
                nc(e), yx(e, r, !1);
                break;
              case "textarea":
                nc(e), xx(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + no(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Ua(e, !!r.multiple, a, !1) : r.defaultValue != null && Ua(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = rf);
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
      if (e && t.stateNode != null) U_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
        if (n = No(Nl.current), No(Kr.current), fc(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Gr] = t, (a = r.nodeValue !== n) && (e = $n, e !== null)) switch (e.tag) {
            case 3:
              cc(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && cc(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Gr] = t, t.stateNode = r;
      }
      return Kt(t), null;
    case 13:
      if (lt(dt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ct && Un !== null && t.mode & 1 && !(t.flags & 128)) o_(), Ja(), t.flags |= 98560, a = !1;
        else if (a = fc(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(q(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(q(317));
            a[Gr] = t;
          } else Ja(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Kt(t), a = !1;
        } else Tr !== null && (Fm(Tr), Tr = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || dt.current & 1 ? It === 0 && (It = 3) : Zv())), t.updateQueue !== null && (t.flags |= 4), Kt(t), null);
    case 4:
      return ts(), Am(e, t), e === null && Al(t.stateNode.containerInfo), Kt(t), null;
    case 10:
      return Fv(t.type._context), Kt(t), null;
    case 17:
      return An(t.type) && of(), Kt(t), null;
    case 19:
      if (lt(dt), a = t.memoizedState, a === null) return Kt(t), null;
      if (r = (t.flags & 128) !== 0, l = a.rendering, l === null) if (r) Ys(a, !1);
      else {
        if (It !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = df(e), l !== null) {
            for (t.flags |= 128, Ys(a, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return nt(dt, dt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && wt() > rs && (t.flags |= 128, r = !0, Ys(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = df(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ys(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !ct) return Kt(t), null;
        } else 2 * wt() - a.renderingStartTime > rs && n !== 1073741824 && (t.flags |= 128, r = !0, Ys(a, !1), t.lanes = 4194304);
        a.isBackwards ? (l.sibling = t.child, t.child = l) : (n = a.last, n !== null ? n.sibling = l : t.child = l, a.last = l);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = wt(), t.sibling = null, n = dt.current, nt(dt, r ? n & 1 | 2 : n & 1), t) : (Kt(t), null);
    case 22:
    case 23:
      return Qv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Hn & 1073741824 && (Kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Kt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(q(156, t.tag));
}
function PF(e, t) {
  switch (Nv(t), t.tag) {
    case 1:
      return An(t.type) && of(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ts(), lt(kn), lt(en), Vv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Hv(t), null;
    case 13:
      if (lt(dt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(q(340));
        Ja();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return lt(dt), null;
    case 4:
      return ts(), null;
    case 10:
      return Fv(t.type._context), null;
    case 22:
    case 23:
      return Qv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pc = !1, Yt = !1, DF = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
function Ma(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    yt(e, t, r);
  }
  else n.current = null;
}
function Tm(e, t, n) {
  try {
    n();
  } catch (r) {
    yt(e, t, r);
  }
}
var uw = !1;
function FF(e, t) {
  if (fm = ef, e = GC(), Rv(e)) {
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
        var l = 0, u = -1, c = -1, d = 0, h = 0, m = e, v = null;
        t: for (; ; ) {
          for (var x; m !== n || i !== 0 && m.nodeType !== 3 || (u = l + i), m !== a || r !== 0 && m.nodeType !== 3 || (c = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (x = m.firstChild) !== null; )
            v = m, m = x;
          for (; ; ) {
            if (m === e) break t;
            if (v === n && ++d === i && (u = l), v === a && ++h === r && (c = l), (x = m.nextSibling) !== null) break;
            m = v, v = m.parentNode;
          }
          m = x;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (dm = { focusedElem: e, selectionRange: n }, ef = !1, ae = t; ae !== null; ) if (t = ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ae = e;
  else for (; ae !== null; ) {
    t = ae;
    try {
      var b = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (b !== null) {
            var S = b.memoizedProps, R = b.memoizedState, w = t.stateNode, C = w.getSnapshotBeforeUpdate(t.elementType === t.type ? S : br(t.type, S), R);
            w.__reactInternalSnapshotBeforeUpdate = C;
          }
          break;
        case 3:
          var A = t.stateNode.containerInfo;
          A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(q(163));
      }
    } catch (I) {
      yt(t, t.return, I);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, ae = e;
      break;
    }
    ae = t.return;
  }
  return b = uw, uw = !1, b;
}
function fl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && Tm(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Yf(e, t) {
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
function Rm(e) {
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
function $_(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $_(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Gr], delete t[Rl], delete t[mm], delete t[gF], delete t[yF])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function z_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cw(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || z_(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Im(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rf));
  else if (r !== 4 && (e = e.child, e !== null)) for (Im(e, t, n), e = e.sibling; e !== null; ) Im(e, t, n), e = e.sibling;
}
function Nm(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Nm(e, t, n), e = e.sibling; e !== null; ) Nm(e, t, n), e = e.sibling;
}
var Ut = null, kr = !1;
function Mi(e, t, n) {
  for (n = n.child; n !== null; ) j_(e, t, n), n = n.sibling;
}
function j_(e, t, n) {
  if (qr && typeof qr.onCommitFiberUnmount == "function") try {
    qr.onCommitFiberUnmount($f, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Yt || Ma(n, t);
    case 6:
      var r = Ut, i = kr;
      Ut = null, Mi(e, t, n), Ut = r, kr = i, Ut !== null && (kr ? (e = Ut, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ut.removeChild(n.stateNode));
      break;
    case 18:
      Ut !== null && (kr ? (e = Ut, n = n.stateNode, e.nodeType === 8 ? up(e.parentNode, n) : e.nodeType === 1 && up(e, n), Sl(e)) : up(Ut, n.stateNode));
      break;
    case 4:
      r = Ut, i = kr, Ut = n.stateNode.containerInfo, kr = !0, Mi(e, t, n), Ut = r, kr = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, l = a.destroy;
          a = a.tag, l !== void 0 && (a & 2 || a & 4) && Tm(n, t, l), i = i.next;
        } while (i !== r);
      }
      Mi(e, t, n);
      break;
    case 1:
      if (!Yt && (Ma(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        yt(n, t, u);
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
function fw(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new DF()), t.forEach(function(r) {
      var i = jF.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Sr(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Ut = u.stateNode, kr = !1;
            break e;
          case 3:
            Ut = u.stateNode.containerInfo, kr = !0;
            break e;
          case 4:
            Ut = u.stateNode.containerInfo, kr = !0;
            break e;
        }
        u = u.return;
      }
      if (Ut === null) throw Error(q(160));
      j_(a, l, i), Ut = null, kr = !1;
      var c = i.alternate;
      c !== null && (c.return = null), i.return = null;
    } catch (d) {
      yt(i, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) W_(t, e), t = t.sibling;
}
function W_(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Sr(t, e), jr(e), r & 4) {
        try {
          fl(3, e, e.return), Yf(3, e);
        } catch (S) {
          yt(e, e.return, S);
        }
        try {
          fl(5, e, e.return);
        } catch (S) {
          yt(e, e.return, S);
        }
      }
      break;
    case 1:
      Sr(t, e), jr(e), r & 512 && n !== null && Ma(n, n.return);
      break;
    case 5:
      if (Sr(t, e), jr(e), r & 512 && n !== null && Ma(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          xl(i, "");
        } catch (S) {
          yt(e, e.return, S);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, l = n !== null ? n.memoizedProps : a, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && a.type === "radio" && a.name != null && hC(i, a), tm(u, l);
          var d = tm(u, a);
          for (l = 0; l < c.length; l += 2) {
            var h = c[l], m = c[l + 1];
            h === "style" ? yC(i, m) : h === "dangerouslySetInnerHTML" ? vC(i, m) : h === "children" ? xl(i, m) : vv(i, h, m, d);
          }
          switch (u) {
            case "input":
              Yp(i, a);
              break;
            case "textarea":
              pC(i, a);
              break;
            case "select":
              var v = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Ua(i, !!a.multiple, x, !1) : v !== !!a.multiple && (a.defaultValue != null ? Ua(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Ua(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[Rl] = a;
        } catch (S) {
          yt(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Sr(t, e), jr(e), r & 4) {
        if (e.stateNode === null) throw Error(q(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (S) {
          yt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Sr(t, e), jr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Sl(t.containerInfo);
      } catch (S) {
        yt(e, e.return, S);
      }
      break;
    case 4:
      Sr(t, e), jr(e);
      break;
    case 13:
      Sr(t, e), jr(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Kv = wt())), r & 4 && fw(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Yt = (d = Yt) || h, Sr(t, e), Yt = d) : Sr(t, e), jr(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (ae = e, h = e.child; h !== null; ) {
          for (m = ae = h; ae !== null; ) {
            switch (v = ae, x = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                fl(4, v, v.return);
                break;
              case 1:
                Ma(v, v.return);
                var b = v.stateNode;
                if (typeof b.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                  } catch (S) {
                    yt(r, n, S);
                  }
                }
                break;
              case 5:
                Ma(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  hw(m);
                  continue;
                }
            }
            x !== null ? (x.return = v, ae = x) : hw(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                i = m.stateNode, d ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (u = m.stateNode, c = m.memoizedProps.style, l = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = gC("display", l));
              } catch (S) {
                yt(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = d ? "" : m.memoizedProps;
            } catch (S) {
              yt(e, e.return, S);
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
      Sr(t, e), jr(e), r & 4 && fw(e);
      break;
    case 21:
      break;
    default:
      Sr(
        t,
        e
      ), jr(e);
  }
}
function jr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (z_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(q(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xl(i, ""), r.flags &= -33);
          var a = cw(e);
          Nm(e, a, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = cw(e);
          Im(e, u, l);
          break;
        default:
          throw Error(q(161));
      }
    } catch (c) {
      yt(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function MF(e, t, n) {
  ae = e, G_(e);
}
function G_(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ae !== null; ) {
    var i = ae, a = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || pc;
      if (!l) {
        var u = i.alternate, c = u !== null && u.memoizedState !== null || Yt;
        u = pc;
        var d = Yt;
        if (pc = l, (Yt = c) && !d) for (ae = i; ae !== null; ) l = ae, c = l.child, l.tag === 22 && l.memoizedState !== null ? pw(i) : c !== null ? (c.return = l, ae = c) : pw(i);
        for (; a !== null; ) ae = a, G_(a), a = a.sibling;
        ae = i, pc = u, Yt = d;
      }
      dw(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, ae = a) : dw(e);
  }
}
function dw(e) {
  for (; ae !== null; ) {
    var t = ae;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Yt || Yf(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Yt) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : br(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Yx(t, a, r);
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
              Yx(t, l, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
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
            throw Error(q(163));
        }
        Yt || t.flags & 512 && Rm(t);
      } catch (v) {
        yt(t, t.return, v);
      }
    }
    if (t === e) {
      ae = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, ae = n;
      break;
    }
    ae = t.return;
  }
}
function hw(e) {
  for (; ae !== null; ) {
    var t = ae;
    if (t === e) {
      ae = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, ae = n;
      break;
    }
    ae = t.return;
  }
}
function pw(e) {
  for (; ae !== null; ) {
    var t = ae;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yf(4, t);
          } catch (c) {
            yt(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              yt(t, i, c);
            }
          }
          var a = t.return;
          try {
            Rm(t);
          } catch (c) {
            yt(t, a, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Rm(t);
          } catch (c) {
            yt(t, l, c);
          }
      }
    } catch (c) {
      yt(t, t.return, c);
    }
    if (t === e) {
      ae = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, ae = u;
      break;
    }
    ae = t.return;
  }
}
var LF = Math.ceil, mf = Si.ReactCurrentDispatcher, Xv = Si.ReactCurrentOwner, fr = Si.ReactCurrentBatchConfig, Be = 0, Mt = null, Ct = null, $t = 0, Hn = 0, La = lo(0), It = 0, Fl = null, zo = 0, Qf = 0, qv = 0, dl = null, Sn = null, Kv = 0, rs = 1 / 0, fi = null, vf = !1, Om = null, Zi = null, mc = !1, Wi = null, gf = 0, hl = 0, Pm = null, Hc = -1, Vc = 0;
function pn() {
  return Be & 6 ? wt() : Hc !== -1 ? Hc : Hc = wt();
}
function Ji(e) {
  return e.mode & 1 ? Be & 2 && $t !== 0 ? $t & -$t : xF.transition !== null ? (Vc === 0 && (Vc = IC()), Vc) : (e = Xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : LC(e.type)), e) : 1;
}
function Ir(e, t, n, r) {
  if (50 < hl) throw hl = 0, Pm = null, Error(q(185));
  Xl(e, n, r), (!(Be & 2) || e !== Mt) && (e === Mt && (!(Be & 2) && (Qf |= n), It === 4 && $i(e, $t)), Tn(e, r), n === 1 && Be === 0 && !(t.mode & 1) && (rs = wt() + 500, Xf && uo()));
}
function Tn(e, t) {
  var n = e.callbackNode;
  xD(e, t);
  var r = Jc(e, e === Mt ? $t : 0);
  if (r === 0) n !== null && _x(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _x(n), t === 1) e.tag === 0 ? EF(mw.bind(null, e)) : n_(mw.bind(null, e)), mF(function() {
      !(Be & 6) && uo();
    }), n = null;
    else {
      switch (NC(r)) {
        case 1:
          n = wv;
          break;
        case 4:
          n = TC;
          break;
        case 16:
          n = Zc;
          break;
        case 536870912:
          n = RC;
          break;
        default:
          n = Zc;
      }
      n = eS(n, X_.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function X_(e, t) {
  if (Hc = -1, Vc = 0, Be & 6) throw Error(q(327));
  var n = e.callbackNode;
  if (Ga() && e.callbackNode !== n) return null;
  var r = Jc(e, e === Mt ? $t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yf(e, r);
  else {
    t = r;
    var i = Be;
    Be |= 2;
    var a = K_();
    (Mt !== e || $t !== t) && (fi = null, rs = wt() + 500, Fo(e, t));
    do
      try {
        VF();
        break;
      } catch (u) {
        q_(e, u);
      }
    while (!0);
    Dv(), mf.current = a, Be = i, Ct !== null ? t = 0 : (Mt = null, $t = 0, t = It);
  }
  if (t !== 0) {
    if (t === 2 && (i = am(e), i !== 0 && (r = i, t = Dm(e, i))), t === 1) throw n = Fl, Fo(e, 0), $i(e, r), Tn(e, wt()), n;
    if (t === 6) $i(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !BF(i) && (t = yf(e, r), t === 2 && (a = am(e), a !== 0 && (r = a, t = Dm(e, a))), t === 1)) throw n = Fl, Fo(e, 0), $i(e, r), Tn(e, wt()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          To(e, Sn, fi);
          break;
        case 3:
          if ($i(e, r), (r & 130023424) === r && (t = Kv + 500 - wt(), 10 < t)) {
            if (Jc(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              pn(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = pm(To.bind(null, e, Sn, fi), t);
            break;
          }
          To(e, Sn, fi);
          break;
        case 4:
          if ($i(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Rr(r);
            a = 1 << l, l = t[l], l > i && (i = l), r &= ~a;
          }
          if (r = i, r = wt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * LF(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pm(To.bind(null, e, Sn, fi), r);
            break;
          }
          To(e, Sn, fi);
          break;
        case 5:
          To(e, Sn, fi);
          break;
        default:
          throw Error(q(329));
      }
    }
  }
  return Tn(e, wt()), e.callbackNode === n ? X_.bind(null, e) : null;
}
function Dm(e, t) {
  var n = dl;
  return e.current.memoizedState.isDehydrated && (Fo(e, t).flags |= 256), e = yf(e, t), e !== 2 && (t = Sn, Sn = n, t !== null && Fm(t)), e;
}
function Fm(e) {
  Sn === null ? Sn = e : Sn.push.apply(Sn, e);
}
function BF(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Nr(a(), i)) return !1;
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
  for (t &= ~qv, t &= ~Qf, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Rr(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function mw(e) {
  if (Be & 6) throw Error(q(327));
  Ga();
  var t = Jc(e, 0);
  if (!(t & 1)) return Tn(e, wt()), null;
  var n = yf(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = am(e);
    r !== 0 && (t = r, n = Dm(e, r));
  }
  if (n === 1) throw n = Fl, Fo(e, 0), $i(e, t), Tn(e, wt()), n;
  if (n === 6) throw Error(q(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, To(e, Sn, fi), Tn(e, wt()), null;
}
function Yv(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    Be = n, Be === 0 && (rs = wt() + 500, Xf && uo());
  }
}
function jo(e) {
  Wi !== null && Wi.tag === 0 && !(Be & 6) && Ga();
  var t = Be;
  Be |= 1;
  var n = fr.transition, r = Xe;
  try {
    if (fr.transition = null, Xe = 1, e) return e();
  } finally {
    Xe = r, fr.transition = n, Be = t, !(Be & 6) && uo();
  }
}
function Qv() {
  Hn = La.current, lt(La);
}
function Fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, pF(n)), Ct !== null) for (n = Ct.return; n !== null; ) {
    var r = n;
    switch (Nv(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && of();
        break;
      case 3:
        ts(), lt(kn), lt(en), Vv();
        break;
      case 5:
        Hv(r);
        break;
      case 4:
        ts();
        break;
      case 13:
        lt(dt);
        break;
      case 19:
        lt(dt);
        break;
      case 10:
        Fv(r.type._context);
        break;
      case 22:
      case 23:
        Qv();
    }
    n = n.return;
  }
  if (Mt = e, Ct = e = eo(e.current, null), $t = Hn = t, It = 0, Fl = null, qv = Qf = zo = 0, Sn = dl = null, Io !== null) {
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
function q_(e, t) {
  do {
    var n = Ct;
    try {
      if (Dv(), Mc.current = pf, hf) {
        for (var r = ht.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        hf = !1;
      }
      if ($o = 0, Dt = Tt = ht = null, cl = !1, Ol = 0, Xv.current = null, n === null || n.return === null) {
        It = 1, Fl = t, Ct = null;
        break;
      }
      e: {
        var a = e, l = n.return, u = n, c = t;
        if (t = $t, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var x = nw(l);
          if (x !== null) {
            x.flags &= -257, rw(x, l, u, a, t), x.mode & 1 && tw(a, d, t), t = x, c = d;
            var b = t.updateQueue;
            if (b === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(c), t.updateQueue = S;
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              tw(a, d, t), Zv();
              break e;
            }
            c = Error(q(426));
          }
        } else if (ct && u.mode & 1) {
          var R = nw(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), rw(R, l, u, a, t), Ov(ns(c, u));
            break e;
          }
        }
        a = c = ns(c, u), It !== 4 && (It = 2), dl === null ? dl = [a] : dl.push(a), a = l;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var w = N_(a, c, t);
              Kx(a, w);
              break e;
            case 1:
              u = c;
              var C = a.type, A = a.stateNode;
              if (!(a.flags & 128) && (typeof C.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (Zi === null || !Zi.has(A)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var I = O_(a, u, t);
                Kx(a, I);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Q_(n);
    } catch (O) {
      t = O, Ct === n && n !== null && (Ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function K_() {
  var e = mf.current;
  return mf.current = pf, e === null ? pf : e;
}
function Zv() {
  (It === 0 || It === 3 || It === 2) && (It = 4), Mt === null || !(zo & 268435455) && !(Qf & 268435455) || $i(Mt, $t);
}
function yf(e, t) {
  var n = Be;
  Be |= 2;
  var r = K_();
  (Mt !== e || $t !== t) && (fi = null, Fo(e, t));
  do
    try {
      HF();
      break;
    } catch (i) {
      q_(e, i);
    }
  while (!0);
  if (Dv(), Be = n, mf.current = r, Ct !== null) throw Error(q(261));
  return Mt = null, $t = 0, It;
}
function HF() {
  for (; Ct !== null; ) Y_(Ct);
}
function VF() {
  for (; Ct !== null && !fD(); ) Y_(Ct);
}
function Y_(e) {
  var t = J_(e.alternate, e, Hn);
  e.memoizedProps = e.pendingProps, t === null ? Q_(e) : Ct = t, Xv.current = null;
}
function Q_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = PF(n, t), n !== null) {
        n.flags &= 32767, Ct = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        It = 6, Ct = null;
        return;
      }
    } else if (n = OF(n, t, Hn), n !== null) {
      Ct = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ct = t;
      return;
    }
    Ct = t = e;
  } while (t !== null);
  It === 0 && (It = 5);
}
function To(e, t, n) {
  var r = Xe, i = fr.transition;
  try {
    fr.transition = null, Xe = 1, UF(e, t, n, r);
  } finally {
    fr.transition = i, Xe = r;
  }
  return null;
}
function UF(e, t, n, r) {
  do
    Ga();
  while (Wi !== null);
  if (Be & 6) throw Error(q(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(q(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (wD(e, a), e === Mt && (Ct = Mt = null, $t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mc || (mc = !0, eS(Zc, function() {
    return Ga(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = fr.transition, fr.transition = null;
    var l = Xe;
    Xe = 1;
    var u = Be;
    Be |= 4, Xv.current = null, FF(e, n), W_(n, e), sF(dm), ef = !!fm, dm = fm = null, e.current = n, MF(n), dD(), Be = u, Xe = l, fr.transition = a;
  } else e.current = n;
  if (mc && (mc = !1, Wi = e, gf = i), a = e.pendingLanes, a === 0 && (Zi = null), mD(n.stateNode), Tn(e, wt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (vf) throw vf = !1, e = Om, Om = null, e;
  return gf & 1 && e.tag !== 0 && Ga(), a = e.pendingLanes, a & 1 ? e === Pm ? hl++ : (hl = 0, Pm = e) : hl = 0, uo(), null;
}
function Ga() {
  if (Wi !== null) {
    var e = NC(gf), t = fr.transition, n = Xe;
    try {
      if (fr.transition = null, Xe = 16 > e ? 16 : e, Wi === null) var r = !1;
      else {
        if (e = Wi, Wi = null, gf = 0, Be & 6) throw Error(q(331));
        var i = Be;
        for (Be |= 4, ae = e.current; ae !== null; ) {
          var a = ae, l = a.child;
          if (ae.flags & 16) {
            var u = a.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                for (ae = d; ae !== null; ) {
                  var h = ae;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(8, h, a);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, ae = m;
                  else for (; ae !== null; ) {
                    h = ae;
                    var v = h.sibling, x = h.return;
                    if ($_(h), h === d) {
                      ae = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = x, ae = v;
                      break;
                    }
                    ae = x;
                  }
                }
              }
              var b = a.alternate;
              if (b !== null) {
                var S = b.child;
                if (S !== null) {
                  b.child = null;
                  do {
                    var R = S.sibling;
                    S.sibling = null, S = R;
                  } while (S !== null);
                }
              }
              ae = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) l.return = a, ae = l;
          else e: for (; ae !== null; ) {
            if (a = ae, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                fl(9, a, a.return);
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, ae = w;
              break e;
            }
            ae = a.return;
          }
        }
        var C = e.current;
        for (ae = C; ae !== null; ) {
          l = ae;
          var A = l.child;
          if (l.subtreeFlags & 2064 && A !== null) A.return = l, ae = A;
          else e: for (l = C; ae !== null; ) {
            if (u = ae, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Yf(9, u);
              }
            } catch (O) {
              yt(u, u.return, O);
            }
            if (u === l) {
              ae = null;
              break e;
            }
            var I = u.sibling;
            if (I !== null) {
              I.return = u.return, ae = I;
              break e;
            }
            ae = u.return;
          }
        }
        if (Be = i, uo(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
          qr.onPostCommitFiberRoot($f, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Xe = n, fr.transition = t;
    }
  }
  return !1;
}
function vw(e, t, n) {
  t = ns(n, t), t = N_(e, t, 1), e = Qi(e, t, 1), t = pn(), e !== null && (Xl(e, 1, t), Tn(e, t));
}
function yt(e, t, n) {
  if (e.tag === 3) vw(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      vw(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zi === null || !Zi.has(r))) {
        e = ns(n, e), e = O_(t, e, 1), t = Qi(t, e, 1), e = pn(), t !== null && (Xl(t, 1, e), Tn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $F(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pn(), e.pingedLanes |= e.suspendedLanes & n, Mt === e && ($t & n) === n && (It === 4 || It === 3 && ($t & 130023424) === $t && 500 > wt() - Kv ? Fo(e, 0) : qv |= n), Tn(e, t);
}
function Z_(e, t) {
  t === 0 && (e.mode & 1 ? (t = oc, oc <<= 1, !(oc & 130023424) && (oc = 4194304)) : t = 1);
  var n = pn();
  e = xi(e, t), e !== null && (Xl(e, t, n), Tn(e, n));
}
function zF(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Z_(e, n);
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
      throw Error(q(314));
  }
  r !== null && r.delete(t), Z_(e, n);
}
var J_;
J_ = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || kn.current) bn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return bn = !1, NF(e, t, n);
    bn = !!(e.flags & 131072);
  }
  else bn = !1, ct && t.flags & 1048576 && r_(t, lf, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Bc(e, t), e = t.pendingProps;
      var i = Za(t, en.current);
      Wa(t, n), i = $v(null, t, r, e, i, n);
      var a = zv();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, An(r) ? (a = !0, af(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Lv(t), i.updater = Kf, t.stateNode = i, i._reactInternals = t, wm(t, r, e, n), t = Sm(null, t, r, !0, a, n)) : (t.tag = 0, ct && a && Iv(t), fn(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Bc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = GF(r), e = br(r, e), i) {
          case 0:
            t = _m(null, t, r, e, n);
            break e;
          case 1:
            t = aw(null, t, r, e, n);
            break e;
          case 11:
            t = iw(null, t, r, e, n);
            break e;
          case 14:
            t = ow(null, t, r, br(r.type, e), n);
            break e;
        }
        throw Error(q(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : br(r, i), _m(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : br(r, i), aw(e, t, r, i, n);
    case 3:
      e: {
        if (M_(t), e === null) throw Error(q(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, u_(e, t), ff(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = ns(Error(q(423)), t), t = sw(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = ns(Error(q(424)), t), t = sw(e, t, r, n, i);
          break e;
        } else for (Un = Yi(t.stateNode.containerInfo.firstChild), $n = t, ct = !0, Tr = null, n = s_(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ja(), r === i) {
            t = wi(e, t, n);
            break e;
          }
          fn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return c_(t), e === null && ym(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, l = i.children, hm(r, i) ? l = null : a !== null && hm(r, a) && (t.flags |= 32), F_(e, t), fn(e, t, l, n), t.child;
    case 6:
      return e === null && ym(t), null;
    case 13:
      return L_(e, t, n);
    case 4:
      return Bv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = es(t, null, r, n) : fn(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : br(r, i), iw(e, t, r, i, n);
    case 7:
      return fn(e, t, t.pendingProps, n), t.child;
    case 8:
      return fn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, l = i.value, nt(uf, r._currentValue), r._currentValue = l, a !== null) if (Nr(a.value, l)) {
          if (a.children === i.children && !kn.current) {
            t = wi(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var u = a.dependencies;
          if (u !== null) {
            l = a.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = gi(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Em(
                  a.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (l = a.return, l === null) throw Error(q(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Em(l, n, t), l = a.sibling;
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
      return i = t.type, r = t.pendingProps.children, Wa(t, n), i = dr(i), r = r(i), t.flags |= 1, fn(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = br(r, t.pendingProps), i = br(r.type, i), ow(e, t, r, i, n);
    case 15:
      return P_(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : br(r, i), Bc(e, t), t.tag = 1, An(r) ? (e = !0, af(t)) : e = !1, Wa(t, n), I_(t, r, i), wm(t, r, i, n), Sm(null, t, r, !0, e, n);
    case 19:
      return B_(e, t, n);
    case 22:
      return D_(e, t, n);
  }
  throw Error(q(156, t.tag));
};
function eS(e, t) {
  return AC(e, t);
}
function WF(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function cr(e, t, n, r) {
  return new WF(e, t, n, r);
}
function Jv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function GF(e) {
  if (typeof e == "function") return Jv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yv) return 11;
    if (e === Ev) return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = cr(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Uc(e, t, n, r, i, a) {
  var l = 2;
  if (r = e, typeof e == "function") Jv(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Aa:
      return Mo(n.children, i, a, t);
    case gv:
      l = 8, i |= 8;
      break;
    case Wp:
      return e = cr(12, n, t, i | 2), e.elementType = Wp, e.lanes = a, e;
    case Gp:
      return e = cr(13, n, t, i), e.elementType = Gp, e.lanes = a, e;
    case Xp:
      return e = cr(19, n, t, i), e.elementType = Xp, e.lanes = a, e;
    case cC:
      return Zf(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case lC:
          l = 10;
          break e;
        case uC:
          l = 9;
          break e;
        case yv:
          l = 11;
          break e;
        case Ev:
          l = 14;
          break e;
        case Li:
          l = 16, r = null;
          break e;
      }
      throw Error(q(130, e == null ? e : typeof e, ""));
  }
  return t = cr(l, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Mo(e, t, n, r) {
  return e = cr(7, e, r, t), e.lanes = n, e;
}
function Zf(e, t, n, r) {
  return e = cr(22, e, r, t), e.elementType = cC, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function gp(e, t, n) {
  return e = cr(6, e, null, t), e.lanes = n, e;
}
function yp(e, t, n) {
  return t = cr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function XF(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zh(0), this.expirationTimes = Zh(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zh(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function eg(e, t, n, r, i, a, l, u, c) {
  return e = new XF(e, t, n, u, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = cr(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lv(a), e;
}
function qF(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ka, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tS(e) {
  if (!e) return ro;
  e = e._reactInternals;
  e: {
    if (Yo(e) !== e || e.tag !== 1) throw Error(q(170));
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
    throw Error(q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (An(n)) return t_(e, n, t);
  }
  return t;
}
function nS(e, t, n, r, i, a, l, u, c) {
  return e = eg(n, r, !0, e, i, a, l, u, c), e.context = tS(null), n = e.current, r = pn(), i = Ji(n), a = gi(r, i), a.callback = t ?? null, Qi(n, a, i), e.current.lanes = i, Xl(e, i, r), Tn(e, r), e;
}
function Jf(e, t, n, r) {
  var i = t.current, a = pn(), l = Ji(i);
  return n = tS(n), t.context === null ? t.context = n : t.pendingContext = n, t = gi(a, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qi(i, t, l), e !== null && (Ir(e, i, l, a), Fc(e, i, l)), l;
}
function Ef(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gw(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tg(e, t) {
  gw(e, t), (e = e.alternate) && gw(e, t);
}
function KF() {
  return null;
}
var rS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ng(e) {
  this._internalRoot = e;
}
ed.prototype.render = ng.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(q(409));
  Jf(e, t, null, null);
};
ed.prototype.unmount = ng.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jo(function() {
      Jf(null, e, null, null);
    }), t[Ei] = null;
  }
};
function ed(e) {
  this._internalRoot = e;
}
ed.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = DC();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ui.length && t !== 0 && t < Ui[n].priority; n++) ;
    Ui.splice(n, 0, e), n === 0 && MC(e);
  }
};
function rg(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function td(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function yw() {
}
function YF(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Ef(l);
        a.call(d);
      };
    }
    var l = nS(t, r, e, 0, null, !1, !1, "", yw);
    return e._reactRootContainer = l, e[Ei] = l.current, Al(e.nodeType === 8 ? e.parentNode : e), jo(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = Ef(c);
      u.call(d);
    };
  }
  var c = eg(e, 0, !1, null, null, !1, !1, "", yw);
  return e._reactRootContainer = c, e[Ei] = c.current, Al(e.nodeType === 8 ? e.parentNode : e), jo(function() {
    Jf(t, c, n, r);
  }), c;
}
function nd(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var c = Ef(l);
        u.call(c);
      };
    }
    Jf(t, l, e, i);
  } else l = YF(n, t, e, i, r);
  return Ef(l);
}
OC = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nl(t.pendingLanes);
        n !== 0 && (Cv(t, n | 1), Tn(t, wt()), !(Be & 6) && (rs = wt() + 500, uo()));
      }
      break;
    case 13:
      jo(function() {
        var r = xi(e, 1);
        if (r !== null) {
          var i = pn();
          Ir(r, e, 1, i);
        }
      }), tg(e, 1);
  }
};
_v = function(e) {
  if (e.tag === 13) {
    var t = xi(e, 134217728);
    if (t !== null) {
      var n = pn();
      Ir(t, e, 134217728, n);
    }
    tg(e, 134217728);
  }
};
PC = function(e) {
  if (e.tag === 13) {
    var t = Ji(e), n = xi(e, t);
    if (n !== null) {
      var r = pn();
      Ir(n, e, t, r);
    }
    tg(e, t);
  }
};
DC = function() {
  return Xe;
};
FC = function(e, t) {
  var n = Xe;
  try {
    return Xe = e, t();
  } finally {
    Xe = n;
  }
};
rm = function(e, t, n) {
  switch (t) {
    case "input":
      if (Yp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Gf(r);
            if (!i) throw Error(q(90));
            dC(r), Yp(r, i);
          }
        }
      }
      break;
    case "textarea":
      pC(e, n);
      break;
    case "select":
      t = n.value, t != null && Ua(e, !!n.multiple, t, !1);
  }
};
wC = Yv;
CC = jo;
var QF = { usingClientEntryPoint: !1, Events: [Kl, Na, Gf, EC, xC, Yv] }, Qs = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ZF = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Si.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bC(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Qs.findFiberByHostInstance || KF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vc.isDisabled && vc.supportsFiber) try {
    $f = vc.inject(ZF), qr = vc;
  } catch {
  }
}
Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QF;
Wn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rg(t)) throw Error(q(200));
  return qF(e, t, null, n);
};
Wn.createRoot = function(e, t) {
  if (!rg(e)) throw Error(q(299));
  var n = !1, r = "", i = rS;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = eg(e, 1, !1, null, null, n, !1, r, i), e[Ei] = t.current, Al(e.nodeType === 8 ? e.parentNode : e), new ng(t);
};
Wn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(q(188)) : (e = Object.keys(e).join(","), Error(q(268, e)));
  return e = bC(t), e = e === null ? null : e.stateNode, e;
};
Wn.flushSync = function(e) {
  return jo(e);
};
Wn.hydrate = function(e, t, n) {
  if (!td(t)) throw Error(q(200));
  return nd(null, e, t, !0, n);
};
Wn.hydrateRoot = function(e, t, n) {
  if (!rg(e)) throw Error(q(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", l = rS;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = nS(t, null, e, 1, n ?? null, i, !1, a, l), e[Ei] = t.current, Al(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new ed(t);
};
Wn.render = function(e, t, n) {
  if (!td(t)) throw Error(q(200));
  return nd(null, e, t, !1, n);
};
Wn.unmountComponentAtNode = function(e) {
  if (!td(e)) throw Error(q(40));
  return e._reactRootContainer ? (jo(function() {
    nd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ei] = null;
    });
  }), !0) : !1;
};
Wn.unstable_batchedUpdates = Yv;
Wn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!td(n)) throw Error(q(200));
  if (e == null || e._reactInternals === void 0) throw Error(q(38));
  return nd(e, t, n, !1, r);
};
Wn.version = "18.3.1-next-f1338f8080-20240426";
function iS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iS);
    } catch (e) {
      console.error(e);
    }
}
iS(), iC.exports = Wn;
var Gi = iC.exports;
const Oo = /* @__PURE__ */ ds(Gi);
var oS, Ew = Gi;
oS = Ew.createRoot, Ew.hydrateRoot;
var Mm = function(e, t) {
  return Mm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Mm(e, t);
};
function gr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Mm(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var re = function() {
  return re = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, re.apply(this, arguments);
};
function Zr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function JF() {
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
  var n = t && t.cache ? t.cache : oM, r = t && t.serializer ? t.serializer : iM, i = t && t.strategy ? t.strategy : nM;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function eM(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function tM(e, t, n, r) {
  var i = eM(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function aS(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function sS(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function nM(e, t) {
  var n = e.length === 1 ? tM : aS;
  return sS(e, this, n, t.cache.create(), t.serializer);
}
function rM(e, t) {
  return sS(e, this, aS, t.cache.create(), t.serializer);
}
var iM = function() {
  return JSON.stringify(arguments);
};
function ig() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ig.prototype.get = function(e) {
  return this.cache[e];
};
ig.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var oM = {
  create: function() {
    return new ig();
  }
}, hn = {
  variadic: rM
};
function lS(e, t, n) {
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
var Fe;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Fe || (Fe = {}));
var st;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(st || (st = {}));
var is;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(is || (is = {}));
function xw(e) {
  return e.type === st.literal;
}
function aM(e) {
  return e.type === st.argument;
}
function uS(e) {
  return e.type === st.number;
}
function cS(e) {
  return e.type === st.date;
}
function fS(e) {
  return e.type === st.time;
}
function dS(e) {
  return e.type === st.select;
}
function hS(e) {
  return e.type === st.plural;
}
function sM(e) {
  return e.type === st.pound;
}
function pS(e) {
  return e.type === st.tag;
}
function mS(e) {
  return !!(e && typeof e == "object" && e.type === is.number);
}
function Lm(e) {
  return !!(e && typeof e == "object" && e.type === is.dateTime);
}
var vS = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, lM = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function uM(e) {
  var t = {};
  return e.replace(lM, function(n) {
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
var cM = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function fM(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(cM).filter(function(v) {
    return v.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = l[0], c = l.slice(1), d = 0, h = c; d < h.length; d++) {
      var m = h[d];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: c });
  }
  return n;
}
function dM(e) {
  return e.replace(/^(.*?)-/, "");
}
var ww = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, gS = /^(@+)?(\+|#+)?[rs]?$/g, hM = /(\*)(0+)|(#+)(0+)|(0+)/g, yS = /^(0+)$/;
function Cw(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(gS, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function ES(e) {
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
function pM(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !yS.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function _w(e) {
  var t = {}, n = ES(e);
  return n || t;
}
function mM(e) {
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
        t.style = "unit", t.unit = dM(i.options[0]);
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
        t = re(re(re({}, t), { notation: "scientific" }), i.options.reduce(function(c, d) {
          return re(re({}, c), _w(d));
        }, {}));
        continue;
      case "engineering":
        t = re(re(re({}, t), { notation: "engineering" }), i.options.reduce(function(c, d) {
          return re(re({}, c), _w(d));
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
        i.options[0].replace(hM, function(c, d, h, m, v, x) {
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
    if (yS.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ww.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ww, function(c, d, h, m, v, x) {
        return h === "*" ? t.minimumFractionDigits = d.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : v && x ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + x.length) : (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = re(re({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = re(re({}, t), Cw(a)));
      continue;
    }
    if (gS.test(i.stem)) {
      t = re(re({}, t), Cw(i.stem));
      continue;
    }
    var l = ES(i.stem);
    l && (t = re(re({}, t), l));
    var u = pM(i.stem);
    u && (t = re(re({}, t), u));
  }
  return t;
}
var gc = {
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
function vM(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var l = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), c = "a", d = gM(t);
      for ((d == "H" || d == "k") && (u = 0); u-- > 0; )
        n += c;
      for (; l-- > 0; )
        n = d + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function gM(e) {
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
  var i = gc[r || ""] || gc[n || ""] || gc["".concat(n, "-001")] || gc["001"];
  return i[0];
}
var Ep, yM = new RegExp("^".concat(vS.source, "*")), EM = new RegExp("".concat(vS.source, "*$"));
function Le(e, t) {
  return { start: e, end: t };
}
var xM = !!String.prototype.startsWith && "_a".startsWith("a", 1), wM = !!String.fromCodePoint, CM = !!Object.fromEntries, _M = !!String.prototype.codePointAt, SM = !!String.prototype.trimStart, bM = !!String.prototype.trimEnd, kM = !!Number.isSafeInteger, AM = kM ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Bm = !0;
try {
  var TM = wS("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Bm = ((Ep = TM.exec("a")) === null || Ep === void 0 ? void 0 : Ep[0]) === "a";
} catch {
  Bm = !1;
}
var Sw = xM ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Hm = wM ? String.fromCodePoint : (
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
), bw = (
  // native
  CM ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], l = a[0], u = a[1];
        n[l] = u;
      }
      return n;
    }
  )
), xS = _M ? (
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
), RM = SM ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(yM, "");
  }
), IM = bM ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(EM, "");
  }
);
function wS(e, t) {
  return new RegExp(e, t);
}
var Vm;
if (Bm) {
  var kw = wS("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Vm = function(t, n) {
    var r;
    kw.lastIndex = n;
    var i = kw.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Vm = function(t, n) {
    for (var r = []; ; ) {
      var i = xS(t, n);
      if (i === void 0 || CS(i) || DM(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Hm.apply(void 0, r);
  };
var NM = (
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
              type: st.pound,
              location: Le(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Fe.UNMATCHED_CLOSING_TAG, Le(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Um(this.peek() || 0)) {
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
            type: st.literal,
            value: "<".concat(i, "/>"),
            location: Le(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Um(this.char()))
            return this.error(Fe.INVALID_TAG, Le(u, this.clonePosition()));
          var c = this.clonePosition(), d = this.parseTagName();
          return i !== d ? this.error(Fe.UNMATCHED_CLOSING_TAG, Le(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: st.tag,
              value: i,
              children: l,
              location: Le(r, this.clonePosition())
            },
            err: null
          } : this.error(Fe.INVALID_TAG, Le(u, this.clonePosition())));
        } else
          return this.error(Fe.UNCLOSED_TAG, Le(r, this.clonePosition()));
      } else
        return this.error(Fe.INVALID_TAG, Le(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && PM(this.char()); )
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
      var c = Le(r, this.clonePosition());
      return {
        val: { type: st.literal, value: i, location: c },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !OM(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Hm.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Hm(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE, Le(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Fe.EMPTY_ARGUMENT, Le(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Fe.MALFORMED_ARGUMENT, Le(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE, Le(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: st.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Le(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE, Le(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Fe.MALFORMED_ARGUMENT, Le(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Vm(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), l = Le(t, a);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, l = this.clonePosition(), u = this.parseIdentifierIfPossible().value, c = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Fe.EXPECT_ARGUMENT_TYPE, Le(l, c));
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
            var v = IM(m.val);
            if (v.length === 0)
              return this.error(Fe.EXPECT_ARGUMENT_STYLE, Le(this.clonePosition(), this.clonePosition()));
            var x = Le(h, this.clonePosition());
            d = { style: v, styleLocation: x };
          }
          var b = this.tryParseArgumentClose(i);
          if (b.err)
            return b;
          var S = Le(i, this.clonePosition());
          if (d && Sw(d == null ? void 0 : d.style, "::", 0)) {
            var R = RM(d.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(R, d.styleLocation);
              return m.err ? m : {
                val: { type: st.number, value: r, location: S, style: m.val },
                err: null
              };
            } else {
              if (R.length === 0)
                return this.error(Fe.EXPECT_DATE_TIME_SKELETON, S);
              var w = R;
              this.locale && (w = vM(R, this.locale));
              var v = {
                type: is.dateTime,
                pattern: w,
                location: d.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? uM(w) : {}
              }, C = u === "date" ? st.date : st.time;
              return {
                val: { type: C, value: r, location: S, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? st.number : u === "date" ? st.date : st.time,
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
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Fe.EXPECT_SELECT_ARGUMENT_OPTIONS, Le(A, re({}, A)));
          this.bumpSpace();
          var I = this.parseIdentifierIfPossible(), O = 0;
          if (u !== "select" && I.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Fe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Le(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Fe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Fe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), I = this.parseIdentifierIfPossible(), O = m.val;
          }
          var F = this.tryParsePluralOrSelectOptions(t, u, n, I);
          if (F.err)
            return F;
          var b = this.tryParseArgumentClose(i);
          if (b.err)
            return b;
          var L = Le(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: st.select,
              value: r,
              options: bw(F.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: st.plural,
              value: r,
              options: bw(F.val),
              offset: O,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: L
            },
            err: null
          };
        }
        default:
          return this.error(Fe.INVALID_ARGUMENT_TYPE, Le(l, c));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Fe.EXPECT_ARGUMENT_CLOSING_BRACE, Le(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Fe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Le(i, this.clonePosition()));
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
        r = fM(t);
      } catch {
        return this.error(Fe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: is.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? mM(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, l = !1, u = [], c = /* @__PURE__ */ new Set(), d = i.value, h = i.location; ; ) {
        if (d.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Fe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            h = Le(m, this.clonePosition()), d = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (c.has(d))
          return this.error(n === "select" ? Fe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Fe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
        d === "other" && (l = !0), this.bumpSpace();
        var x = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Fe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Le(this.clonePosition(), this.clonePosition()));
        var b = this.parseMessage(t + 1, n, r);
        if (b.err)
          return b;
        var S = this.tryParseArgumentClose(x);
        if (S.err)
          return S;
        u.push([
          d,
          {
            value: b.val,
            location: Le(x, this.clonePosition())
          }
        ]), c.add(d), this.bumpSpace(), a = this.parseIdentifierIfPossible(), d = a.value, h = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Fe.EXPECT_SELECT_ARGUMENT_SELECTOR : Fe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Le(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(Fe.MISSING_OTHER_CLAUSE, Le(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var c = Le(i, this.clonePosition());
      return a ? (l *= r, AM(l) ? { val: l, err: null } : this.error(n, c)) : this.error(t, c);
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
      var n = xS(this.message, t);
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
      if (Sw(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && CS(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Um(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function OM(e) {
  return Um(e) || e === 47;
}
function PM(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function CS(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function DM(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function $m(e) {
  e.forEach(function(t) {
    if (delete t.location, dS(t) || hS(t))
      for (var n in t.options)
        delete t.options[n].location, $m(t.options[n].value);
    else uS(t) && mS(t.style) || (cS(t) || fS(t)) && Lm(t.style) ? delete t.style.location : pS(t) && $m(t.children);
  });
}
function FM(e, t) {
  t === void 0 && (t = {}), t = re({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new NM(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Fe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || $m(n.val), n.val;
}
var Jr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Jr || (Jr = {}));
var co = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Aw = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Jr.INVALID_VALUE, a) || this;
    }
    return t;
  }(co)
), MM = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Jr.INVALID_VALUE, i) || this;
    }
    return t;
  }(co)
), LM = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Jr.MISSING_VALUE, r) || this;
    }
    return t;
  }(co)
), un;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(un || (un = {}));
function BM(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== un.literal || n.type !== un.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function _S(e) {
  return typeof e == "function";
}
function $c(e, t, n, r, i, a, l) {
  if (e.length === 1 && xw(e[0]))
    return [
      {
        type: un.literal,
        value: e[0].value
      }
    ];
  for (var u = [], c = 0, d = e; c < d.length; c++) {
    var h = d[c];
    if (xw(h)) {
      u.push({
        type: un.literal,
        value: h.value
      });
      continue;
    }
    if (sM(h)) {
      typeof a == "number" && u.push({
        type: un.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var m = h.value;
    if (!(i && m in i))
      throw new LM(m, l);
    var v = i[m];
    if (aM(h)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), u.push({
        type: typeof v == "string" ? un.literal : un.object,
        value: v
      });
      continue;
    }
    if (cS(h)) {
      var x = typeof h.style == "string" ? r.date[h.style] : Lm(h.style) ? h.style.parsedOptions : void 0;
      u.push({
        type: un.literal,
        value: n.getDateTimeFormat(t, x).format(v)
      });
      continue;
    }
    if (fS(h)) {
      var x = typeof h.style == "string" ? r.time[h.style] : Lm(h.style) ? h.style.parsedOptions : r.time.medium;
      u.push({
        type: un.literal,
        value: n.getDateTimeFormat(t, x).format(v)
      });
      continue;
    }
    if (uS(h)) {
      var x = typeof h.style == "string" ? r.number[h.style] : mS(h.style) ? h.style.parsedOptions : void 0;
      x && x.scale && (v = v * (x.scale || 1)), u.push({
        type: un.literal,
        value: n.getNumberFormat(t, x).format(v)
      });
      continue;
    }
    if (pS(h)) {
      var b = h.children, S = h.value, R = i[S];
      if (!_S(R))
        throw new MM(S, "function", l);
      var w = $c(b, t, n, r, i, a), C = R(w.map(function(O) {
        return O.value;
      }));
      Array.isArray(C) || (C = [C]), u.push.apply(u, C.map(function(O) {
        return {
          type: typeof O == "string" ? un.literal : un.object,
          value: O
        };
      }));
    }
    if (dS(h)) {
      var A = h.options[v] || h.options.other;
      if (!A)
        throw new Aw(h.value, v, Object.keys(h.options), l);
      u.push.apply(u, $c(A.value, t, n, r, i));
      continue;
    }
    if (hS(h)) {
      var A = h.options["=".concat(v)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Jr.MISSING_INTL_API, l);
        var I = n.getPluralRules(t, { type: h.pluralType }).select(v - (h.offset || 0));
        A = h.options[I] || h.options.other;
      }
      if (!A)
        throw new Aw(h.value, v, Object.keys(h.options), l);
      u.push.apply(u, $c(A.value, t, n, r, i, v - (h.offset || 0)));
      continue;
    }
  }
  return BM(u);
}
function HM(e, t) {
  return t ? re(re(re({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = re(re({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function VM(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = HM(e[r], t[r]), n;
  }, re({}, e)) : e;
}
function xp(e) {
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
function UM(e) {
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
      cache: xp(e.number),
      strategy: hn.variadic
    }),
    getDateTimeFormat: dn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Qt([void 0], n, !1)))();
    }, {
      cache: xp(e.dateTime),
      strategy: hn.variadic
    }),
    getPluralRules: dn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Qt([void 0], n, !1)))();
    }, {
      cache: xp(e.pluralRules),
      strategy: hn.variadic
    })
  };
}
var SS = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(c) {
        var d = a.formatToParts(c);
        if (d.length === 1)
          return d[0].value;
        var h = d.reduce(function(m, v) {
          return !m.length || v.type !== un.literal || typeof m[m.length - 1] != "string" ? m.push(v.value) : m[m.length - 1] += v.value, m;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(c) {
        return $c(a.ast, a.locales, a.formatters, a.formats, c, void 0, a.message);
      }, this.resolvedOptions = function() {
        var c;
        return {
          locale: ((c = a.resolvedLocale) === null || c === void 0 ? void 0 : c.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var u = Zr(l, ["formatters"]);
        this.ast = e.__parse(t, re(re({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = VM(e.formats, r), this.formatters = i && i.formatters || UM(this.formatterCache);
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
    }, e.__parse = FM, e.formats = {
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
), Wo;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Wo || (Wo = {}));
var Ql = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i) {
      var a = this, l = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(l ? `
`.concat(l.message, `
`).concat(l.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), $M = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r) {
      return e.call(this, Wo.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Ql)
), zM = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r) {
      return e.call(this, Wo.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Ql)
), Tw = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r) {
      return e.call(this, Wo.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Ql)
), yr = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i) {
      var a = e.call(this, Wo.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Ql)
), wp = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r, i, a) {
      var l = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return l.descriptor = i, l.locale = r, l;
    }
    return t;
  }(yr)
), jM = (
  /** @class */
  function(e) {
    gr(t, e);
    function t(n, r) {
      var i = e.call(this, Wo.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var l;
        return (l = a.value) !== null && l !== void 0 ? l : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Ql)
);
function Qo(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var WM = function(e) {
}, GM = function(e) {
}, bS = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: WM,
  onWarn: GM
};
function kS() {
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
function XM(e) {
  e === void 0 && (e = kS());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = dn(function() {
    for (var u, c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    return new ((u = Intl.DateTimeFormat).bind.apply(u, Qt([void 0], c, !1)))();
  }, {
    cache: ko(e.dateTime),
    strategy: hn.variadic
  }), a = dn(function() {
    for (var u, c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    return new ((u = Intl.NumberFormat).bind.apply(u, Qt([void 0], c, !1)))();
  }, {
    cache: ko(e.number),
    strategy: hn.variadic
  }), l = dn(function() {
    for (var u, c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    return new ((u = Intl.PluralRules).bind.apply(u, Qt([void 0], c, !1)))();
  }, {
    cache: ko(e.pluralRules),
    strategy: hn.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: dn(function(u, c, d, h) {
      return new SS(u, c, d, re({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: l
      } }, h || {}));
    }, {
      cache: ko(e.message),
      strategy: hn.variadic
    }),
    getRelativeTimeFormat: dn(function() {
      for (var u = [], c = 0; c < arguments.length; c++)
        u[c] = arguments[c];
      return new (t.bind.apply(t, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.relativeTime),
      strategy: hn.variadic
    }),
    getPluralRules: l,
    getListFormat: dn(function() {
      for (var u = [], c = 0; c < arguments.length; c++)
        u[c] = arguments[c];
      return new (n.bind.apply(n, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.list),
      strategy: hn.variadic
    }),
    getDisplayNames: dn(function() {
      for (var u = [], c = 0; c < arguments.length; c++)
        u[c] = arguments[c];
      return new (r.bind.apply(r, Qt([void 0], u, !1)))();
    }, {
      cache: ko(e.displayNames),
      strategy: hn.variadic
    })
  };
}
function og(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new $M("No ".concat(t, " format named: ").concat(n)));
}
function yc(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = re({ timeZone: t }, e[r]), n;
  }, {});
}
function Rw(e, t) {
  var n = Object.keys(re(re({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = re(re({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Iw(e, t) {
  if (!t)
    return e;
  var n = SS.formats;
  return re(re(re({}, n), e), { date: Rw(yc(n.date, t), yc(e.date || {}, t)), time: Rw(yc(n.time, t), yc(e.time || {}, t)) });
}
var zm = function(e, t, n, r, i) {
  var a = e.locale, l = e.formats, u = e.messages, c = e.defaultLocale, d = e.defaultFormats, h = e.fallbackOnEmptyString, m = e.onError, v = e.timeZone, x = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var b = n.id, S = n.defaultMessage;
  lS(!!b, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var R = String(b), w = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    u && Object.prototype.hasOwnProperty.call(u, R) && u[R]
  );
  if (Array.isArray(w) && w.length === 1 && w[0].type === st.literal)
    return w[0].value;
  if (!r && w && typeof w == "string" && !x)
    return w.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = re(re({}, x), r || {}), l = Iw(l, v), d = Iw(d, v), !w) {
    if (h === !1 && w === "")
      return w;
    if ((!S || a && a.toLowerCase() !== c.toLowerCase()) && m(new jM(n, a)), S)
      try {
        var C = t.getMessageFormat(S, c, d, i);
        return C.format(r);
      } catch (A) {
        return m(new wp('Error formatting default message for: "'.concat(R, '", rendering default message verbatim'), a, n, A)), typeof S == "string" ? S : R;
      }
    return R;
  }
  try {
    var C = t.getMessageFormat(w, a, l, re({ formatters: t }, i || {}));
    return C.format(r);
  } catch (A) {
    m(new wp('Error formatting message: "'.concat(R, '", using ').concat(S ? "default message" : "id", " as fallback."), a, n, A));
  }
  if (S)
    try {
      var C = t.getMessageFormat(S, c, d, i);
      return C.format(r);
    } catch (A) {
      m(new wp('Error formatting the default message for: "'.concat(R, '", rendering message verbatim'), a, n, A));
    }
  return typeof w == "string" ? w : typeof S == "string" ? S : R;
}, AS = [
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
function rd(e, t, n, r) {
  var i = e.locale, a = e.formats, l = e.onError, u = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format, d = re(re({}, u && { timeZone: u }), c && og(a, t, c, l)), h = Qo(r, AS, d);
  return t === "time" && !h.hour && !h.minute && !h.second && !h.timeStyle && !h.dateStyle && (h = re(re({}, h), { hour: "numeric", minute: "numeric" })), n(i, h);
}
function qM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return rd(e, "date", t, l).format(u);
  } catch (c) {
    e.onError(new yr("Error formatting date.", e.locale, c));
  }
  return String(u);
}
function KM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return rd(e, "time", t, l).format(u);
  } catch (c) {
    e.onError(new yr("Error formatting time.", e.locale, c));
  }
  return String(u);
}
function YM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = n[2], u = l === void 0 ? {} : l, c = e.timeZone, d = e.locale, h = e.onError, m = Qo(u, AS, c ? { timeZone: c } : {});
  try {
    return t(d, m).formatRange(i, a);
  } catch (v) {
    h(new yr("Error formatting date time range.", e.locale, v));
  }
  return String(i);
}
function QM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return rd(e, "date", t, l).formatToParts(u);
  } catch (c) {
    e.onError(new yr("Error formatting date.", e.locale, c));
  }
  return [];
}
function ZM(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], l = a === void 0 ? {} : a, u = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return rd(e, "time", t, l).formatToParts(u);
  } catch (c) {
    e.onError(new yr("Error formatting time.", e.locale, c));
  }
  return [];
}
var JM = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function eL(e, t, n, r) {
  var i = e.locale, a = e.onError, l = Intl.DisplayNames;
  l || a(new co(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Jr.MISSING_INTL_API));
  var u = Qo(r, JM);
  try {
    return t(i, u).of(n);
  } catch (c) {
    a(new yr("Error formatting display name.", i, c));
  }
}
var tL = [
  "type",
  "style"
], Nw = Date.now();
function nL(e) {
  return "".concat(Nw, "_").concat(e, "_").concat(Nw);
}
function rL(e, t, n, r) {
  r === void 0 && (r = {});
  var i = TS(e, t, n, r).reduce(function(a, l) {
    var u = l.value;
    return typeof u != "string" ? a.push(u) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += u : a.push(u), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function TS(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var l = Intl.ListFormat;
  l || a(new co(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Jr.MISSING_INTL_API));
  var u = Qo(r, tL);
  try {
    var c = {}, d = n.map(function(h, m) {
      if (typeof h == "object") {
        var v = nL(m);
        return c[v] = h, v;
      }
      return String(h);
    });
    return t(i, u).formatToParts(d).map(function(h) {
      return h.type === "literal" ? h : re(re({}, h), { value: c[h.value] || h.value });
    });
  } catch (h) {
    a(new yr("Error formatting list.", i, h));
  }
  return n;
}
var iL = ["type"];
function oL(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Jr.MISSING_INTL_API));
  var l = Qo(r, iL);
  try {
    return t(i, l).select(n);
  } catch (u) {
    a(new yr("Error formatting plural.", i, u));
  }
  return "other";
}
var aL = ["numeric", "style"];
function sL(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = !!l && og(i, "relative", l, a) || {}, c = Qo(n, aL, u);
  return t(r, c);
}
function lL(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new co(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Jr.MISSING_INTL_API));
  try {
    return sL(e, t, i).format(n, r);
  } catch (l) {
    e.onError(new yr("Error formatting relative time.", e.locale, l));
  }
  return String(n);
}
var uL = [
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
function RS(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var l = n.format, u = l && og(i, "number", l, a) || {}, c = Qo(n, uL, u);
  return t(r, c);
}
function cL(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return RS(e, t, r).format(n);
  } catch (i) {
    e.onError(new yr("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function fL(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return RS(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new yr("Error formatting number.", e.locale, i));
  }
  return [];
}
function dL(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function hL(e) {
  e.onWarn && e.defaultRichTextElements && dL(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function pL(e, t) {
  var n = XM(t), r = re(re({}, bS), e), i = r.locale, a = r.defaultLocale, l = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new Tw('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new Tw('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new zM('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), hL(r), re(re({}, r), {
    formatters: n,
    formatNumber: cL.bind(null, r, n.getNumberFormat),
    formatNumberToParts: fL.bind(null, r, n.getNumberFormat),
    formatRelativeTime: lL.bind(null, r, n.getRelativeTimeFormat),
    formatDate: qM.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: QM.bind(null, r, n.getDateTimeFormat),
    formatTime: KM.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: YM.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: ZM.bind(null, r, n.getDateTimeFormat),
    formatPlural: oL.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: zm.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: zm.bind(null, r, n),
    formatList: rL.bind(null, r, n.getListFormat),
    formatListToParts: TS.bind(null, r, n.getListFormat),
    formatDisplayName: eL.bind(null, r, n.getDisplayNames)
  });
}
function IS(e) {
  lS(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var NS = re(re({}, bS), { textComponent: y.Fragment });
function mL(e) {
  return function(t) {
    return e(y.Children.toArray(t));
  };
}
function jm(e, t) {
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
var OS = { exports: {} }, qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt = typeof Symbol == "function" && Symbol.for, ag = Lt ? Symbol.for("react.element") : 60103, sg = Lt ? Symbol.for("react.portal") : 60106, id = Lt ? Symbol.for("react.fragment") : 60107, od = Lt ? Symbol.for("react.strict_mode") : 60108, ad = Lt ? Symbol.for("react.profiler") : 60114, sd = Lt ? Symbol.for("react.provider") : 60109, ld = Lt ? Symbol.for("react.context") : 60110, lg = Lt ? Symbol.for("react.async_mode") : 60111, ud = Lt ? Symbol.for("react.concurrent_mode") : 60111, cd = Lt ? Symbol.for("react.forward_ref") : 60112, fd = Lt ? Symbol.for("react.suspense") : 60113, vL = Lt ? Symbol.for("react.suspense_list") : 60120, dd = Lt ? Symbol.for("react.memo") : 60115, hd = Lt ? Symbol.for("react.lazy") : 60116, gL = Lt ? Symbol.for("react.block") : 60121, yL = Lt ? Symbol.for("react.fundamental") : 60117, EL = Lt ? Symbol.for("react.responder") : 60118, xL = Lt ? Symbol.for("react.scope") : 60119;
function Xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ag:
        switch (e = e.type, e) {
          case lg:
          case ud:
          case id:
          case ad:
          case od:
          case fd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ld:
              case cd:
              case hd:
              case dd:
              case sd:
                return e;
              default:
                return t;
            }
        }
      case sg:
        return t;
    }
  }
}
function PS(e) {
  return Xn(e) === ud;
}
qe.AsyncMode = lg;
qe.ConcurrentMode = ud;
qe.ContextConsumer = ld;
qe.ContextProvider = sd;
qe.Element = ag;
qe.ForwardRef = cd;
qe.Fragment = id;
qe.Lazy = hd;
qe.Memo = dd;
qe.Portal = sg;
qe.Profiler = ad;
qe.StrictMode = od;
qe.Suspense = fd;
qe.isAsyncMode = function(e) {
  return PS(e) || Xn(e) === lg;
};
qe.isConcurrentMode = PS;
qe.isContextConsumer = function(e) {
  return Xn(e) === ld;
};
qe.isContextProvider = function(e) {
  return Xn(e) === sd;
};
qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ag;
};
qe.isForwardRef = function(e) {
  return Xn(e) === cd;
};
qe.isFragment = function(e) {
  return Xn(e) === id;
};
qe.isLazy = function(e) {
  return Xn(e) === hd;
};
qe.isMemo = function(e) {
  return Xn(e) === dd;
};
qe.isPortal = function(e) {
  return Xn(e) === sg;
};
qe.isProfiler = function(e) {
  return Xn(e) === ad;
};
qe.isStrictMode = function(e) {
  return Xn(e) === od;
};
qe.isSuspense = function(e) {
  return Xn(e) === fd;
};
qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === id || e === ud || e === ad || e === od || e === fd || e === vL || typeof e == "object" && e !== null && (e.$$typeof === hd || e.$$typeof === dd || e.$$typeof === sd || e.$$typeof === ld || e.$$typeof === cd || e.$$typeof === yL || e.$$typeof === EL || e.$$typeof === xL || e.$$typeof === gL);
};
qe.typeOf = Xn;
OS.exports = qe;
var wL = OS.exports, DS = wL, CL = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _L = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, FS = {};
FS[DS.ForwardRef] = CL;
FS[DS.Memo] = _L;
var ug = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = y.createContext(null)) : y.createContext(null);
ug.Consumer;
var SL = ug.Provider, bL = SL, kL = ug;
function vs() {
  var e = y.useContext(kL);
  return IS(e), e;
}
var Wm;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Wm || (Wm = {}));
var Gm;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Gm || (Gm = {}));
function MS(e) {
  var t = function(n) {
    var r = vs(), i = n.value, a = n.children, l = Zr(n, ["value", "children"]), u = typeof i == "string" ? new Date(i || 0) : i, c = e === "formatDate" ? r.formatDateToParts(u, l) : r.formatTimeToParts(u, l);
    return a(c);
  };
  return t.displayName = Gm[e], t;
}
function Zl(e) {
  var t = function(n) {
    var r = vs(), i = n.value, a = n.children, l = Zr(
      n,
      ["value", "children"]
    ), u = r[e](i, l);
    if (typeof a == "function")
      return a(u);
    var c = r.textComponent || y.Fragment;
    return y.createElement(c, null, u);
  };
  return t.displayName = Wm[e], t;
}
function LS(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = _S(r) ? mL(r) : r, t;
  }, {});
}
var Ow = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var l = LS(r), u = zm.apply(void 0, Qt([
    e,
    t,
    n,
    l
  ], i, !1));
  return Array.isArray(u) ? y.Children.toArray(u) : u;
}, Pw = function(e, t) {
  var n = e.defaultRichTextElements, r = Zr(e, ["defaultRichTextElements"]), i = LS(n), a = pL(re(re(re({}, NS), r), { defaultRichTextElements: i }), t), l = {
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
  return re(re({}, a), {
    formatMessage: Ow.bind(
      null,
      l,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Ow.bind(null, l, a.formatters)
  });
};
function Cp(e) {
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
var AL = (
  /** @class */
  function(e) {
    gr(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = kS(), n.state = {
        cache: n.cache,
        intl: Pw(Cp(n.props), n.cache),
        prevConfig: Cp(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, l = Cp(n);
      return jm(i, l) ? null : {
        intl: Pw(l, a),
        prevConfig: l
      };
    }, t.prototype.render = function() {
      return IS(this.state.intl), y.createElement(bL, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = NS, t;
  }(y.PureComponent)
);
function TL(e, t) {
  var n = e.values, r = Zr(e, ["values"]), i = t.values, a = Zr(t, ["values"]);
  return jm(i, n) && jm(r, a);
}
function BS(e) {
  var t = vs(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? y.Fragment : r, a = e.id, l = e.description, u = e.defaultMessage, c = e.values, d = e.children, h = e.tagName, m = h === void 0 ? i : h, v = e.ignoreTag, x = { id: a, description: l, defaultMessage: u }, b = n(x, c, {
    ignoreTag: v
  });
  return typeof d == "function" ? d(Array.isArray(b) ? b : [b]) : m ? y.createElement(m, null, y.Children.toArray(b)) : y.createElement(y.Fragment, null, b);
}
BS.displayName = "FormattedMessage";
var HS = y.memo(BS, TL);
HS.displayName = "MemoizedFormattedMessage";
Zl("formatDate");
Zl("formatTime");
Zl("formatNumber");
Zl("formatList");
Zl("formatDisplayName");
MS("formatDate");
MS("formatTime");
var VS = { exports: {} };
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
})(VS);
var RL = VS.exports;
const Z = /* @__PURE__ */ ds(RL);
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ce.apply(null, arguments);
}
function ze(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Dw(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function IL(e) {
  var t = NL(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function NL(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function US(e, t, n) {
  var r = y.useRef(e !== void 0), i = y.useState(t), a = i[0], l = i[1], u = e !== void 0, c = r.current;
  return r.current = u, !u && c && a !== t && l(t), [u ? e : a, y.useCallback(function(d) {
    for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
      m[v - 1] = arguments[v];
    n && n.apply(void 0, [d].concat(m)), l(d);
  }, [n])];
}
function OL(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, l = a[Dw(r)], u = a[r], c = ze(a, [Dw(r), r].map(IL)), d = t[r], h = US(u, l, e[d]), m = h[0], v = h[1];
    return ce({}, c, (i = {}, i[r] = m, i[d] = v, i));
  }, e);
}
function Xm(e, t) {
  return Xm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xm(e, t);
}
function Jl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xm(e, t);
}
var cg = /* @__PURE__ */ _.createContext({});
cg.Consumer;
cg.Provider;
function Nt(e, t) {
  var n = y.useContext(cg);
  return e || n[t] || t;
}
function fg(e) {
  return e && e.ownerDocument || document;
}
function PL(e) {
  var t = fg(e);
  return t && t.defaultView || window;
}
function DL(e, t) {
  return PL(e).getComputedStyle(e, t);
}
var FL = /([A-Z])/g;
function ML(e) {
  return e.replace(FL, "-$1").toLowerCase();
}
var LL = /^ms-/;
function Ec(e) {
  return ML(e).replace(LL, "-ms-");
}
var BL = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function HL(e) {
  return !!(e && BL.test(e));
}
function xf(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ec(t)) || DL(e).getPropertyValue(Ec(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(Ec(i)) : HL(i) ? r += i + "(" + a + ") " : n += Ec(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var $S = { exports: {} }, VL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", UL = VL, $L = UL;
function zS() {
}
function jS() {
}
jS.resetWarningCache = zS;
var zL = function() {
  function e(r, i, a, l, u, c) {
    if (c !== $L) {
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
    checkPropTypes: jS,
    resetWarningCache: zS
  };
  return n.PropTypes = n, n;
};
$S.exports = zL();
var jL = $S.exports;
const g = /* @__PURE__ */ ds(jL), Fw = {
  disabled: !1
}, wf = _.createContext(null);
var WS = function(t) {
  return t.scrollTop;
}, il = "unmounted", Hi = "exited", hi = "entering", zi = "entered", Cf = "exiting", Fr = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = i, u = l && !l.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? u ? (c = Hi, a.appearStatus = hi) : c = zi : r.unmountOnExit || r.mountOnEnter ? c = il : c = Hi, a.state = {
      status: c
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
      this.props.in ? l !== hi && l !== zi && (a = hi) : (l === hi || l === zi) && (a = Cf);
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
          l && WS(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Hi && this.setState({
      status: il
    });
  }, n.performEnter = function(i) {
    var a = this, l = this.props.enter, u = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [u] : [Oo.findDOMNode(this), u], d = c[0], h = c[1], m = this.getTimeouts(), v = u ? m.appear : m.enter;
    if (!i && !l || Fw.disabled) {
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
    if (!a || Fw.disabled) {
      this.safeSetState({
        status: Hi
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Cf
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
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = c[0], h = c[1];
      this.props.addEndListener(d, h);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === il)
      return null;
    var a = this.props, l = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var u = ze(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _.createElement(wf.Provider, {
        value: null
      }, typeof l == "function" ? l(i, u) : _.cloneElement(_.Children.only(l), u))
    );
  }, t;
}(_.Component);
Fr.contextType = wf;
Fr.propTypes = {};
function xa() {
}
Fr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: xa,
  onEntering: xa,
  onEntered: xa,
  onExit: xa,
  onExiting: xa,
  onExited: xa
};
Fr.UNMOUNTED = il;
Fr.EXITED = Hi;
Fr.ENTERING = hi;
Fr.ENTERED = zi;
Fr.EXITING = Cf;
const WL = !!(typeof window < "u" && window.document && window.document.createElement);
var qm = !1, Km = !1;
try {
  var _p = {
    get passive() {
      return qm = !0;
    },
    get once() {
      return Km = qm = !0;
    }
  };
  WL && (window.addEventListener("test", _p, _p), window.removeEventListener("test", _p, !0));
} catch {
}
function GL(e, t, n, r) {
  if (r && typeof r != "boolean" && !Km) {
    var i = r.once, a = r.capture, l = n;
    !Km && i && (l = n.__once || function u(c) {
      this.removeEventListener(t, u, a), n.call(this, c);
    }, n.__once = l), e.addEventListener(t, l, qm ? r : a);
  }
  e.addEventListener(t, n, r);
}
function XL(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Ba(e, t, n, r) {
  return GL(e, t, n, r), function() {
    XL(e, t, n, r);
  };
}
function qL(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function KL(e) {
  var t = xf(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function YL(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || qL(e, "transitionend", !0);
  }, t + n), a = Ba(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function QL(e, t, n, r) {
  n == null && (n = KL(e) || 0);
  var i = YL(e, n, r), a = Ba(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Mw(e, t) {
  var n = xf(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function GS(e, t) {
  var n = Mw(e, "transitionDuration"), r = Mw(e, "transitionDelay"), i = QL(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function ba() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, i) {
    if (typeof i != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? i : function() {
      for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
        u[c] = arguments[c];
      r.apply(this, u), i.apply(this, u);
    };
  }, null);
}
function XS(e) {
  e.offsetHeight;
}
var ZL = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], wa, JL = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function qS(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], i = JL[e];
  return r + // @ts-ignore
  parseInt(xf(t, i[0]), 10) + // @ts-ignore
  parseInt(xf(t, i[1]), 10);
}
var eB = (wa = {}, wa[Hi] = "collapse", wa[Cf] = "collapsing", wa[hi] = "collapsing", wa[zi] = "collapse show", wa), tB = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: qS
}, KS = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, i = e.onEntered, a = e.onExit, l = e.onExiting, u = e.className, c = e.children, d = e.dimension, h = d === void 0 ? "height" : d, m = e.getDimensionValue, v = m === void 0 ? qS : m, x = ze(e, ZL), b = typeof h == "function" ? h() : h, S = y.useMemo(function() {
    return ba(function(I) {
      I.style[b] = "0";
    }, n);
  }, [b, n]), R = y.useMemo(function() {
    return ba(function(I) {
      var O = "scroll" + b[0].toUpperCase() + b.slice(1);
      I.style[b] = I[O] + "px";
    }, r);
  }, [b, r]), w = y.useMemo(function() {
    return ba(function(I) {
      I.style[b] = null;
    }, i);
  }, [b, i]), C = y.useMemo(function() {
    return ba(function(I) {
      I.style[b] = v(b, I) + "px", XS(I);
    }, a);
  }, [a, v, b]), A = y.useMemo(function() {
    return ba(function(I) {
      I.style[b] = null;
    }, l);
  }, [b, l]);
  return /* @__PURE__ */ _.createElement(
    Fr,
    ce({
      ref: t,
      addEndListener: GS
    }, x, {
      "aria-expanded": x.role ? x.in : null,
      onEnter: S,
      onEntering: R,
      onEntered: w,
      onExit: C,
      onExiting: A
    }),
    function(I, O) {
      return /* @__PURE__ */ _.cloneElement(c, ce({}, O, {
        className: Z(u, c.props.className, eB[I], b === "width" && "width")
      }));
    }
  );
});
KS.defaultProps = tB;
function nB(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Ym(e) {
  const t = nB(e);
  return y.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var rB = ["className", "children"], xc, iB = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, oB = (xc = {}, xc[hi] = "show", xc[zi] = "show", xc), gs = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = ze(e, rB), a = y.useCallback(function(l) {
    XS(l), i.onEnter && i.onEnter(l);
  }, [i]);
  return /* @__PURE__ */ _.createElement(Fr, ce({
    ref: t,
    addEndListener: GS
  }, i, {
    onEnter: a
  }), function(l, u) {
    return /* @__PURE__ */ _.cloneElement(r, ce({}, u, {
      className: Z("fade", n, r.props.className, oB[l])
    }));
  });
});
gs.defaultProps = iB;
gs.displayName = "Fade";
var aB = ["label", "onClick", "className"], sB = {
  label: g.string.isRequired,
  onClick: g.func
}, lB = {
  label: "Close"
}, pd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = ze(e, aB);
  return /* @__PURE__ */ _.createElement("button", ce({
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
pd.displayName = "CloseButton";
pd.propTypes = sB;
pd.defaultProps = lB;
const YS = function(e) {
  return /* @__PURE__ */ _.forwardRef(function(t, n) {
    return /* @__PURE__ */ _.createElement("div", ce({}, t, {
      ref: n,
      className: Z(t.className, e)
    }));
  });
};
var uB = /-(.)/g;
function cB(e) {
  return e.replace(uB, function(t, n) {
    return n.toUpperCase();
  });
}
var fB = ["className", "bsPrefix", "as"], dB = function(t) {
  return t[0].toUpperCase() + cB(t).slice(1);
};
function dg(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? dB(e) : r, a = n.Component, l = n.defaultProps, u = /* @__PURE__ */ _.forwardRef(function(c, d) {
    var h = c.className, m = c.bsPrefix, v = c.as, x = v === void 0 ? a || "div" : v, b = ze(c, fB), S = Nt(m, e);
    return /* @__PURE__ */ _.createElement(x, ce({
      ref: d,
      className: Z(h, S)
    }, b));
  });
  return u.defaultProps = l, u.displayName = i, u;
}
var hB = ["as", "disabled", "onKeyDown"];
function Lw(e) {
  return !e || e.trim() === "#";
}
var hg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, l = ze(e, hB), u = function(h) {
    var m = l.href, v = l.onClick;
    if ((i || Lw(m)) && h.preventDefault(), i) {
      h.stopPropagation();
      return;
    }
    v && v(h);
  }, c = function(h) {
    h.key === " " && (h.preventDefault(), u(h));
  };
  return Lw(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), i && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ _.createElement(r, ce({
    ref: t
  }, l, {
    onClick: u,
    onKeyDown: ba(c, a)
  }));
});
hg.displayName = "SafeAnchor";
var pB = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], QS = YS("h4");
QS.displayName = "DivStyledAsH4";
var mB = dg("alert-heading", {
  Component: QS
}), vB = dg("alert-link", {
  Component: hg
}), gB = {
  show: !0,
  transition: gs,
  closeLabel: "Close alert"
}, Zo = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = OL(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, l = n.className, u = n.children, c = n.variant, d = n.onClose, h = n.dismissible, m = n.transition, v = ze(n, pB), x = Nt(r, "alert"), b = Ym(function(w) {
    d && d(!1, w);
  }), S = m === !0 ? gs : m, R = /* @__PURE__ */ _.createElement("div", ce({
    role: "alert"
  }, S ? void 0 : v, {
    ref: t,
    className: Z(l, x, c && x + "-" + c, h && x + "-dismissible")
  }), h && /* @__PURE__ */ _.createElement(pd, {
    onClick: b,
    label: a
  }), u);
  return S ? /* @__PURE__ */ _.createElement(S, ce({
    unmountOnExit: !0
  }, v, {
    ref: void 0,
    in: i
  }), R) : i ? R : null;
});
Zo.displayName = "Alert";
Zo.defaultProps = gB;
Zo.Link = vB;
Zo.Heading = mB;
var yB = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], EB = {
  variant: "primary",
  active: !1,
  disabled: !1
}, pg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, l = e.className, u = e.block, c = e.type, d = e.as, h = ze(e, yB), m = Nt(n, "btn"), v = Z(l, m, a && "active", r && m + "-" + r, u && m + "-block", i && m + "-" + i);
  if (h.href)
    return /* @__PURE__ */ _.createElement(hg, ce({}, h, {
      as: d,
      ref: t,
      className: Z(v, h.disabled && "disabled")
    }));
  t && (h.ref = t), c ? h.type = c : d || (h.type = "button");
  var x = d || "button";
  return /* @__PURE__ */ _.createElement(x, ce({}, h, {
    className: v
  }));
});
pg.displayName = "Button";
pg.defaultProps = EB;
function ZS() {
  const e = y.useRef(!0), t = y.useRef(() => e.current);
  return y.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function xB(e) {
  const t = y.useRef(e);
  return t.current = e, t;
}
function wB(e) {
  const t = xB(e);
  y.useEffect(() => () => t.current(), []);
}
const Qm = 2 ** 31 - 1;
function JS(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Qm ? setTimeout(t, r) : setTimeout(() => JS(e, t, n), Qm);
}
function CB() {
  const e = ZS(), t = y.useRef();
  return wB(() => clearTimeout(t.current)), y.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Qm ? t.current = setTimeout(i, a) : JS(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
var _B = ["bsPrefix", "className", "as"], SB = ["xl", "lg", "md", "sm", "xs"], eb = /* @__PURE__ */ _.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, l = ze(e, _B), u = Nt(n, "col"), c = [], d = [];
    return SB.forEach(function(h) {
      var m = l[h];
      delete l[h];
      var v, x, b;
      if (typeof m == "object" && m != null) {
        var S = m.span;
        v = S === void 0 ? !0 : S, x = m.offset, b = m.order;
      } else
        v = m;
      var R = h !== "xs" ? "-" + h : "";
      v && c.push(v === !0 ? "" + u + R : "" + u + R + "-" + v), b != null && d.push("order" + R + "-" + b), x != null && d.push("offset" + R + "-" + x);
    }), c.length || c.push(u), /* @__PURE__ */ _.createElement(a, ce({}, l, {
      ref: t,
      className: Z.apply(void 0, [r].concat(c, d))
    }));
  }
);
eb.displayName = "Col";
function Bw() {
  return y.useState(null);
}
function bB(e) {
  const t = ZS();
  return [e[0], y.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var Rn = "top", pr = "bottom", mr = "right", In = "left", mg = "auto", eu = [Rn, pr, mr, In], os = "start", Ml = "end", kB = "clippingParents", tb = "viewport", Zs = "popper", AB = "reference", Hw = /* @__PURE__ */ eu.reduce(function(e, t) {
  return e.concat([t + "-" + os, t + "-" + Ml]);
}, []), vg = /* @__PURE__ */ [].concat(eu, [mg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + os, t + "-" + Ml]);
}, []), TB = "beforeRead", RB = "read", IB = "afterRead", NB = "beforeMain", OB = "main", PB = "afterMain", DB = "beforeWrite", FB = "write", MB = "afterWrite", LB = [TB, RB, IB, NB, OB, PB, DB, FB, MB];
function Yr(e) {
  return e.split("-")[0];
}
function jn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Go(e) {
  var t = jn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qr(e) {
  var t = jn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = jn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Lo = Math.max, _f = Math.min, as = Math.round;
function Zm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function nb() {
  return !/^((?!chrome|android).)*safari/i.test(Zm());
}
function ss(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Qr(e) && (i = e.offsetWidth > 0 && as(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && as(r.height) / e.offsetHeight || 1);
  var l = Go(e) ? jn(e) : window, u = l.visualViewport, c = !nb() && n, d = (r.left + (c && u ? u.offsetLeft : 0)) / i, h = (r.top + (c && u ? u.offsetTop : 0)) / a, m = r.width / i, v = r.height / a;
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
function yg(e) {
  var t = ss(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function rb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gg(n)) {
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
  return jn(e).getComputedStyle(e);
}
function BB(e) {
  return ["table", "td", "th"].indexOf(io(e)) >= 0;
}
function fo(e) {
  return ((Go(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function md(e) {
  return io(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (gg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fo(e)
  );
}
function Vw(e) {
  return !Qr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ci(e).position === "fixed" ? null : e.offsetParent;
}
function HB(e) {
  var t = /firefox/i.test(Zm()), n = /Trident/i.test(Zm());
  if (n && Qr(e)) {
    var r = Ci(e);
    if (r.position === "fixed")
      return null;
  }
  var i = md(e);
  for (gg(i) && (i = i.host); Qr(i) && ["html", "body"].indexOf(io(i)) < 0; ) {
    var a = Ci(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tu(e) {
  for (var t = jn(e), n = Vw(e); n && BB(n) && Ci(n).position === "static"; )
    n = Vw(n);
  return n && (io(n) === "html" || io(n) === "body" && Ci(n).position === "static") ? t : n || HB(e) || t;
}
function Eg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pl(e, t, n) {
  return Lo(e, _f(t, n));
}
function VB(e, t, n) {
  var r = pl(e, t, n);
  return r > n ? n : r;
}
function ib() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ob(e) {
  return Object.assign({}, ib(), e);
}
function ab(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var UB = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ob(typeof t != "number" ? t : ab(t, eu));
};
function $B(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, u = Yr(n.placement), c = Eg(u), d = [In, mr].indexOf(u) >= 0, h = d ? "height" : "width";
  if (!(!a || !l)) {
    var m = UB(i.padding, n), v = yg(a), x = c === "y" ? Rn : In, b = c === "y" ? pr : mr, S = n.rects.reference[h] + n.rects.reference[c] - l[c] - n.rects.popper[h], R = l[c] - n.rects.reference[c], w = tu(a), C = w ? c === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, A = S / 2 - R / 2, I = m[x], O = C - v[h] - m[b], F = C / 2 - v[h] / 2 + A, L = pl(I, F, O), H = c;
    n.modifiersData[r] = (t = {}, t[H] = L, t.centerOffset = L - F, t);
  }
}
function zB(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || rb(t.elements.popper, i) && (t.elements.arrow = i));
}
const jB = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $B,
  effect: zB,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ls(e) {
  return e.split("-")[1];
}
var WB = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function GB(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: as(n * i) / i || 0,
    y: as(r * i) / i || 0
  };
}
function Uw(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, l = e.offsets, u = e.position, c = e.gpuAcceleration, d = e.adaptive, h = e.roundOffsets, m = e.isFixed, v = l.x, x = v === void 0 ? 0 : v, b = l.y, S = b === void 0 ? 0 : b, R = typeof h == "function" ? h({
    x,
    y: S
  }) : {
    x,
    y: S
  };
  x = R.x, S = R.y;
  var w = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), A = In, I = Rn, O = window;
  if (d) {
    var F = tu(n), L = "clientHeight", H = "clientWidth";
    if (F === jn(n) && (F = fo(n), Ci(F).position !== "static" && u === "absolute" && (L = "scrollHeight", H = "scrollWidth")), F = F, i === Rn || (i === In || i === mr) && a === Ml) {
      I = pr;
      var j = m && F === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        F[L]
      );
      S -= j - r.height, S *= c ? 1 : -1;
    }
    if (i === In || (i === Rn || i === pr) && a === Ml) {
      A = mr;
      var W = m && F === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        F[H]
      );
      x -= W - r.width, x *= c ? 1 : -1;
    }
  }
  var K = Object.assign({
    position: u
  }, d && WB), Q = h === !0 ? GB({
    x,
    y: S
  }, jn(n)) : {
    x,
    y: S
  };
  if (x = Q.x, S = Q.y, c) {
    var ie;
    return Object.assign({}, K, (ie = {}, ie[I] = C ? "0" : "", ie[A] = w ? "0" : "", ie.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + S + "px)" : "translate3d(" + x + "px, " + S + "px, 0)", ie));
  }
  return Object.assign({}, K, (t = {}, t[I] = C ? S + "px" : "", t[A] = w ? x + "px" : "", t.transform = "", t));
}
function XB(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, l = a === void 0 ? !0 : a, u = n.roundOffsets, c = u === void 0 ? !0 : u, d = {
    placement: Yr(t.placement),
    variation: ls(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Uw(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Uw(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const qB = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: XB,
  data: {}
};
var wc = {
  passive: !0
};
function KB(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, l = r.resize, u = l === void 0 ? !0 : l, c = jn(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(h) {
    h.addEventListener("scroll", n.update, wc);
  }), u && c.addEventListener("resize", n.update, wc), function() {
    a && d.forEach(function(h) {
      h.removeEventListener("scroll", n.update, wc);
    }), u && c.removeEventListener("resize", n.update, wc);
  };
}
const YB = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: KB,
  data: {}
};
var QB = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return QB[t];
  });
}
var ZB = {
  start: "end",
  end: "start"
};
function $w(e) {
  return e.replace(/start|end/g, function(t) {
    return ZB[t];
  });
}
function xg(e) {
  var t = jn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function wg(e) {
  return ss(fo(e)).left + xg(e).scrollLeft;
}
function JB(e, t) {
  var n = jn(e), r = fo(e), i = n.visualViewport, a = r.clientWidth, l = r.clientHeight, u = 0, c = 0;
  if (i) {
    a = i.width, l = i.height;
    var d = nb();
    (d || !d && t === "fixed") && (u = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: u + wg(e),
    y: c
  };
}
function e3(e) {
  var t, n = fo(e), r = xg(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Lo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Lo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + wg(e), c = -r.scrollTop;
  return Ci(i || n).direction === "rtl" && (u += Lo(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: u,
    y: c
  };
}
function Cg(e) {
  var t = Ci(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function sb(e) {
  return ["html", "body", "#document"].indexOf(io(e)) >= 0 ? e.ownerDocument.body : Qr(e) && Cg(e) ? e : sb(md(e));
}
function ml(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sb(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = jn(r), l = i ? [a].concat(a.visualViewport || [], Cg(r) ? r : []) : r, u = t.concat(l);
  return i ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(ml(md(l)))
  );
}
function Jm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function t3(e, t) {
  var n = ss(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zw(e, t, n) {
  return t === tb ? Jm(JB(e, n)) : Go(t) ? t3(t, n) : Jm(e3(fo(e)));
}
function n3(e) {
  var t = ml(md(e)), n = ["absolute", "fixed"].indexOf(Ci(e).position) >= 0, r = n && Qr(e) ? tu(e) : e;
  return Go(r) ? t.filter(function(i) {
    return Go(i) && rb(i, r) && io(i) !== "body";
  }) : [];
}
function r3(e, t, n, r) {
  var i = t === "clippingParents" ? n3(e) : [].concat(t), a = [].concat(i, [n]), l = a[0], u = a.reduce(function(c, d) {
    var h = zw(e, d, r);
    return c.top = Lo(h.top, c.top), c.right = _f(h.right, c.right), c.bottom = _f(h.bottom, c.bottom), c.left = Lo(h.left, c.left), c;
  }, zw(e, l, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function lb(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Yr(r) : null, a = r ? ls(r) : null, l = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Rn:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case pr:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case mr:
      c = {
        x: t.x + t.width,
        y: u
      };
      break;
    case In:
      c = {
        x: t.x - n.width,
        y: u
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? Eg(i) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (a) {
      case os:
        c[d] = c[d] - (t[h] / 2 - n[h] / 2);
        break;
      case Ml:
        c[d] = c[d] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return c;
}
function Ll(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, l = a === void 0 ? e.strategy : a, u = n.boundary, c = u === void 0 ? kB : u, d = n.rootBoundary, h = d === void 0 ? tb : d, m = n.elementContext, v = m === void 0 ? Zs : m, x = n.altBoundary, b = x === void 0 ? !1 : x, S = n.padding, R = S === void 0 ? 0 : S, w = ob(typeof R != "number" ? R : ab(R, eu)), C = v === Zs ? AB : Zs, A = e.rects.popper, I = e.elements[b ? C : v], O = r3(Go(I) ? I : I.contextElement || fo(e.elements.popper), c, h, l), F = ss(e.elements.reference), L = lb({
    reference: F,
    element: A,
    placement: i
  }), H = Jm(Object.assign({}, A, L)), j = v === Zs ? H : F, W = {
    top: O.top - j.top + w.top,
    bottom: j.bottom - O.bottom + w.bottom,
    left: O.left - j.left + w.left,
    right: j.right - O.right + w.right
  }, K = e.modifiersData.offset;
  if (v === Zs && K) {
    var Q = K[i];
    Object.keys(W).forEach(function(ie) {
      var Ee = [mr, pr].indexOf(ie) >= 0 ? 1 : -1, we = [Rn, pr].indexOf(ie) >= 0 ? "y" : "x";
      W[ie] += Q[we] * Ee;
    });
  }
  return W;
}
function i3(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, l = n.padding, u = n.flipVariations, c = n.allowedAutoPlacements, d = c === void 0 ? vg : c, h = ls(r), m = h ? u ? Hw : Hw.filter(function(b) {
    return ls(b) === h;
  }) : eu, v = m.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  v.length === 0 && (v = m);
  var x = v.reduce(function(b, S) {
    return b[S] = Ll(e, {
      placement: S,
      boundary: i,
      rootBoundary: a,
      padding: l
    })[Yr(S)], b;
  }, {});
  return Object.keys(x).sort(function(b, S) {
    return x[b] - x[S];
  });
}
function o3(e) {
  if (Yr(e) === mg)
    return [];
  var t = zc(e);
  return [$w(e), t, $w(t)];
}
function a3(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, l = n.altAxis, u = l === void 0 ? !0 : l, c = n.fallbackPlacements, d = n.padding, h = n.boundary, m = n.rootBoundary, v = n.altBoundary, x = n.flipVariations, b = x === void 0 ? !0 : x, S = n.allowedAutoPlacements, R = t.options.placement, w = Yr(R), C = w === R, A = c || (C || !b ? [zc(R)] : o3(R)), I = [R].concat(A).reduce(function(Ve, He) {
      return Ve.concat(Yr(He) === mg ? i3(t, {
        placement: He,
        boundary: h,
        rootBoundary: m,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: S
      }) : He);
    }, []), O = t.rects.reference, F = t.rects.popper, L = /* @__PURE__ */ new Map(), H = !0, j = I[0], W = 0; W < I.length; W++) {
      var K = I[W], Q = Yr(K), ie = ls(K) === os, Ee = [Rn, pr].indexOf(Q) >= 0, we = Ee ? "width" : "height", Ce = Ll(t, {
        placement: K,
        boundary: h,
        rootBoundary: m,
        altBoundary: v,
        padding: d
      }), te = Ee ? ie ? mr : In : ie ? pr : Rn;
      O[we] > F[we] && (te = zc(te));
      var G = zc(te), Y = [];
      if (a && Y.push(Ce[Q] <= 0), u && Y.push(Ce[te] <= 0, Ce[G] <= 0), Y.every(function(Ve) {
        return Ve;
      })) {
        j = K, H = !1;
        break;
      }
      L.set(K, Y);
    }
    if (H)
      for (var J = b ? 3 : 1, se = function(He) {
        var Re = I.find(function(mt) {
          var Ke = L.get(mt);
          if (Ke)
            return Ke.slice(0, He).every(function(Ye) {
              return Ye;
            });
        });
        if (Re)
          return j = Re, "break";
      }, ne = J; ne > 0; ne--) {
        var Ze = se(ne);
        if (Ze === "break") break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
  }
}
const s3 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: a3,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jw(e, t, n) {
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
function Ww(e) {
  return [Rn, mr, pr, In].some(function(t) {
    return e[t] >= 0;
  });
}
function l3(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, l = Ll(t, {
    elementContext: "reference"
  }), u = Ll(t, {
    altBoundary: !0
  }), c = jw(l, r), d = jw(u, i, a), h = Ww(c), m = Ww(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: h,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": m
  });
}
const u3 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: l3
};
function c3(e, t, n) {
  var r = Yr(e), i = [In, Rn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = a[0], u = a[1];
  return l = l || 0, u = (u || 0) * i, [In, mr].indexOf(r) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function f3(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, l = vg.reduce(function(h, m) {
    return h[m] = c3(m, t.rects, a), h;
  }, {}), u = l[t.placement], c = u.x, d = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = l;
}
const d3 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: f3
};
function h3(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = lb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const p3 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: h3,
  data: {}
};
function m3(e) {
  return e === "x" ? "y" : "x";
}
function v3(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, l = n.altAxis, u = l === void 0 ? !1 : l, c = n.boundary, d = n.rootBoundary, h = n.altBoundary, m = n.padding, v = n.tether, x = v === void 0 ? !0 : v, b = n.tetherOffset, S = b === void 0 ? 0 : b, R = Ll(t, {
    boundary: c,
    rootBoundary: d,
    padding: m,
    altBoundary: h
  }), w = Yr(t.placement), C = ls(t.placement), A = !C, I = Eg(w), O = m3(I), F = t.modifiersData.popperOffsets, L = t.rects.reference, H = t.rects.popper, j = typeof S == "function" ? S(Object.assign({}, t.rects, {
    placement: t.placement
  })) : S, W = typeof j == "number" ? {
    mainAxis: j,
    altAxis: j
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, j), K = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = {
    x: 0,
    y: 0
  };
  if (F) {
    if (a) {
      var ie, Ee = I === "y" ? Rn : In, we = I === "y" ? pr : mr, Ce = I === "y" ? "height" : "width", te = F[I], G = te + R[Ee], Y = te - R[we], J = x ? -H[Ce] / 2 : 0, se = C === os ? L[Ce] : H[Ce], ne = C === os ? -H[Ce] : -L[Ce], Ze = t.elements.arrow, Ve = x && Ze ? yg(Ze) : {
        width: 0,
        height: 0
      }, He = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ib(), Re = He[Ee], mt = He[we], Ke = pl(0, L[Ce], Ve[Ce]), Ye = A ? L[Ce] / 2 - J - Ke - Re - W.mainAxis : se - Ke - Re - W.mainAxis, Ae = A ? -L[Ce] / 2 + J + Ke + mt + W.mainAxis : ne + Ke + mt + W.mainAxis, vt = t.elements.arrow && tu(t.elements.arrow), rt = vt ? I === "y" ? vt.clientTop || 0 : vt.clientLeft || 0 : 0, ve = (ie = K == null ? void 0 : K[I]) != null ? ie : 0, de = te + Ye - ve - rt, Ue = te + Ae - ve, Qe = pl(x ? _f(G, de) : G, te, x ? Lo(Y, Ue) : Y);
      F[I] = Qe, Q[I] = Qe - te;
    }
    if (u) {
      var _e, Je = I === "x" ? Rn : In, We = I === "x" ? pr : mr, Oe = F[O], it = O === "y" ? "height" : "width", tn = Oe + R[Je], Nn = Oe - R[We], Lr = [Rn, In].indexOf(w) !== -1, Br = (_e = K == null ? void 0 : K[O]) != null ? _e : 0, ta = Lr ? tn : Oe - L[it] - H[it] - Br + W.altAxis, nn = Lr ? Oe + L[it] + H[it] - Br - W.altAxis : Nn, jt = x && Lr ? VB(ta, Oe, nn) : pl(x ? ta : tn, Oe, x ? nn : Nn);
      F[O] = jt, Q[O] = jt - Oe;
    }
    t.modifiersData[r] = Q;
  }
}
const g3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: v3,
  requiresIfExists: ["offset"]
};
function y3(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function E3(e) {
  return e === jn(e) || !Qr(e) ? xg(e) : y3(e);
}
function x3(e) {
  var t = e.getBoundingClientRect(), n = as(t.width) / e.offsetWidth || 1, r = as(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function w3(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qr(t), i = Qr(t) && x3(t), a = fo(t), l = ss(e, i, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((io(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Cg(a)) && (u = E3(t)), Qr(t) ? (c = ss(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = wg(a))), {
    x: l.left + u.scrollLeft - c.x,
    y: l.top + u.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function C3(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(u) {
      if (!n.has(u)) {
        var c = t.get(u);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function _3(e) {
  var t = C3(e);
  return LB.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function S3(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function b3(e) {
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
var Gw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xw() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function k3(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Gw : i;
  return function(u, c, d) {
    d === void 0 && (d = a);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gw, a),
      modifiersData: {},
      elements: {
        reference: u,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, x = {
      state: h,
      setOptions: function(w) {
        var C = typeof w == "function" ? w(h.options) : w;
        S(), h.options = Object.assign({}, a, h.options, C), h.scrollParents = {
          reference: Go(u) ? ml(u) : u.contextElement ? ml(u.contextElement) : [],
          popper: ml(c)
        };
        var A = _3(b3([].concat(r, h.options.modifiers)));
        return h.orderedModifiers = A.filter(function(I) {
          return I.enabled;
        }), b(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = h.elements, C = w.reference, A = w.popper;
          if (Xw(C, A)) {
            h.rects = {
              reference: w3(C, tu(A), h.options.strategy === "fixed"),
              popper: yg(A)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(W) {
              return h.modifiersData[W.name] = Object.assign({}, W.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var O = h.orderedModifiers[I], F = O.fn, L = O.options, H = L === void 0 ? {} : L, j = O.name;
              typeof F == "function" && (h = F({
                state: h,
                options: H,
                name: j,
                instance: x
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: S3(function() {
        return new Promise(function(R) {
          x.forceUpdate(), R(h);
        });
      }),
      destroy: function() {
        S(), v = !0;
      }
    };
    if (!Xw(u, c))
      return x;
    x.setOptions(d).then(function(R) {
      !v && d.onFirstUpdate && d.onFirstUpdate(R);
    });
    function b() {
      h.orderedModifiers.forEach(function(R) {
        var w = R.name, C = R.options, A = C === void 0 ? {} : C, I = R.effect;
        if (typeof I == "function") {
          var O = I({
            state: h,
            name: w,
            instance: x,
            options: A
          }), F = function() {
          };
          m.push(O || F);
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
var A3 = k3({
  defaultModifiers: [u3, p3, qB, YB, d3, s3, g3, jB]
}), qw = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, T3 = {
  name: "applyStyles",
  enabled: !1
}, R3 = {
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
      var c = l.getAttribute("aria-describedby");
      if (c && c.split(",").indexOf(a.id) !== -1)
        return;
      l.setAttribute("aria-describedby", c ? c + "," + a.id : a.id);
    }
  }
}, I3 = [];
function N3(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, l = r.placement, u = l === void 0 ? "bottom" : l, c = r.strategy, d = c === void 0 ? "absolute" : c, h = r.modifiers, m = h === void 0 ? I3 : h, v = ze(r, ["enabled", "placement", "strategy", "modifiers"]), x = y.useRef(), b = y.useCallback(function() {
    var I;
    (I = x.current) == null || I.update();
  }, []), S = y.useCallback(function() {
    var I;
    (I = x.current) == null || I.forceUpdate();
  }, []), R = bB(y.useState({
    placement: u,
    update: b,
    forceUpdate: S,
    attributes: {},
    styles: {
      popper: qw(d),
      arrow: {}
    }
  })), w = R[0], C = R[1], A = y.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(O) {
        var F = O.state, L = {}, H = {};
        Object.keys(F.elements).forEach(function(j) {
          L[j] = F.styles[j], H[j] = F.attributes[j];
        }), C({
          state: F,
          styles: L,
          attributes: H,
          update: b,
          forceUpdate: S,
          placement: F.placement
        });
      }
    };
  }, [b, S, C]);
  return y.useEffect(function() {
    !x.current || !a || x.current.setOptions({
      placement: u,
      strategy: d,
      modifiers: [].concat(m, [A, T3])
    });
  }, [d, u, A, a]), y.useEffect(function() {
    if (!(!a || e == null || t == null))
      return x.current = A3(e, t, ce({}, v, {
        placement: u,
        strategy: d,
        modifiers: [].concat(m, [R3, A])
      })), function() {
        x.current != null && (x.current.destroy(), x.current = void 0, C(function(I) {
          return ce({}, I, {
            attributes: {},
            styles: {
              popper: qw(d)
            }
          });
        }));
      };
  }, [a, e, t]), w;
}
function ub(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var O3 = function() {
}, P3 = O3;
const D3 = /* @__PURE__ */ ds(P3);
function Sf(e) {
  return e && "setState" in e ? Oo.findDOMNode(e) : e ?? null;
}
const F3 = function(e) {
  return fg(Sf(e));
};
var M3 = 27, Kw = function() {
};
function L3(e) {
  return e.button === 0;
}
function B3(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Yw = function(t) {
  return t && ("current" in t ? t.current : t);
};
function H3(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, l = a === void 0 ? "click" : a, u = y.useRef(!1), c = t || Kw, d = y.useCallback(function(v) {
    var x, b = Yw(e);
    D3(!!b, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), u.current = !b || B3(v) || !L3(v) || !!ub(b, (x = v.composedPath == null ? void 0 : v.composedPath()[0]) != null ? x : v.target);
  }, [e]), h = Ym(function(v) {
    u.current || c(v);
  }), m = Ym(function(v) {
    v.keyCode === M3 && c(v);
  });
  y.useEffect(function() {
    if (!(i || e == null)) {
      var v = window.event, x = F3(Yw(e)), b = Ba(x, l, d, !0), S = Ba(x, l, function(C) {
        if (C === v) {
          v = void 0;
          return;
        }
        h(C);
      }), R = Ba(x, "keyup", function(C) {
        if (C === v) {
          v = void 0;
          return;
        }
        m(C);
      }), w = [];
      return "ontouchstart" in x.documentElement && (w = [].slice.call(x.body.children).map(function(C) {
        return Ba(C, "mousemove", Kw);
      })), function() {
        b(), S(), R(), w.forEach(function(C) {
          return C();
        });
      };
    }
  }, [e, i, l, d, h, m]);
}
function V3(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function U3(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function $3(e) {
  var t, n, r, i, a = e.enabled, l = e.enableEvents, u = e.placement, c = e.flip, d = e.offset, h = e.fixed, m = e.containerPadding, v = e.arrowElement, x = e.popperConfig, b = x === void 0 ? {} : x, S = V3(b.modifiers);
  return ce({}, b, {
    placement: u,
    enabled: a,
    strategy: h ? "fixed" : b.strategy,
    modifiers: U3(ce({}, S, {
      eventListeners: {
        enabled: l
      },
      preventOverflow: ce({}, S.preventOverflow, {
        options: m ? ce({
          padding: m
        }, (t = S.preventOverflow) == null ? void 0 : t.options) : (n = S.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: ce({
          offset: d
        }, (r = S.offset) == null ? void 0 : r.options)
      },
      arrow: ce({}, S.arrow, {
        enabled: !!v,
        options: ce({}, (i = S.arrow) == null ? void 0 : i.options, {
          element: v
        })
      }),
      flip: ce({
        enabled: !!c
      }, S.flip)
    }))
  });
}
const Qw = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function z3(e, t) {
  const n = Qw(e), r = Qw(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function j3(e, t) {
  return y.useMemo(() => z3(e, t), [e, t]);
}
function jc(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Sp(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function W3() {
  var e = y.useRef(null), t = y.useRef(null), n = y.useRef(null), r = Nt(void 0, "popover"), i = Nt(void 0, "dropdown-menu"), a = y.useCallback(function(d) {
    !d || !(jc(d, r) || jc(d, i)) || (t.current = Sp(d), d.style.margin = "0", e.current = d);
  }, [r, i]), l = y.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(h) {
          var m = h.placement;
          if (!t.current) return [0, 0];
          var v = t.current, x = v.top, b = v.left, S = v.bottom, R = v.right;
          switch (m.split("-")[0]) {
            case "top":
              return [0, S];
            case "left":
              return [0, R];
            case "bottom":
              return [0, x];
            case "right":
              return [0, b];
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
  }, [n]), c = y.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(h) {
        var m = h.state;
        if (!(!e.current || !m.elements.arrow || !jc(e.current, r))) {
          if (m.modifiersData["arrow#persistent"]) {
            var v = Sp(m.elements.arrow), x = v.top, b = v.right, S = x || b;
            m.modifiersData["arrow#persistent"].padding = {
              top: S,
              left: S,
              right: S,
              bottom: S
            };
          } else
            n.current = Sp(m.elements.arrow);
          return m.elements.arrow.style.margin = "0", function() {
            m.elements.arrow && (m.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [l, u, c]];
}
var Zw = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, l, u, c, d) {
      var h = u || "<<anonymous>>", m = d || l;
      if (a[l] == null)
        return new Error("The " + c + " `" + m + "` is required to make " + ("`" + h + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var v = arguments.length, x = Array(v > 5 ? v - 5 : 0), b = 5; b < v; b++)
        x[b - 5] = arguments[b];
      return r.apply(void 0, [a, l, u, c, d].concat(x));
    };
  }
  e.exports = t.default;
})(Zw, Zw.exports);
var Jw = { exports: {} }, ev = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(l, u, c, d, h, m) {
      var v = d || "<<anonymous>>", x = m || c;
      if (u[c] == null)
        return l ? new Error("Required " + h + " `" + x + "` was not specified " + ("in `" + v + "`.")) : null;
      for (var b = arguments.length, S = Array(b > 6 ? b - 6 : 0), R = 6; R < b; R++)
        S[R - 6] = arguments[R];
      return r.apply(void 0, [u, c, v, h, x].concat(S));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(ev, ev.exports);
var G3 = ev.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = G3, r = i(n);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a() {
    for (var l = arguments.length, u = Array(l), c = 0; c < l; c++)
      u[c] = arguments[c];
    function d() {
      for (var h = arguments.length, m = Array(h), v = 0; v < h; v++)
        m[v] = arguments[v];
      var x = null;
      return u.forEach(function(b) {
        if (x == null) {
          var S = b.apply(void 0, m);
          S != null && (x = S);
        }
      }), x;
    }
    return (0, r.default)(d);
  }
  e.exports = t.default;
})(Jw, Jw.exports);
var X3 = ["as", "className", "type", "tooltip"], q3 = {
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
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, l = a === void 0 ? "valid" : a, u = e.tooltip, c = u === void 0 ? !1 : u, d = ze(e, X3);
    return /* @__PURE__ */ _.createElement(r, ce({}, d, {
      ref: t,
      className: Z(i, l + "-" + (c ? "tooltip" : "feedback"))
    }));
  }
);
nu.displayName = "Feedback";
nu.propTypes = q3;
var Or = /* @__PURE__ */ _.createContext({
  controlId: void 0
}), K3 = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], _g = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, l = e.type, u = l === void 0 ? "checkbox" : l, c = e.isValid, d = c === void 0 ? !1 : c, h = e.isInvalid, m = h === void 0 ? !1 : h, v = e.isStatic, x = e.as, b = x === void 0 ? "input" : x, S = ze(e, K3), R = y.useContext(Or), w = R.controlId, C = R.custom, A = C ? [i, "custom-control-input"] : [r, "form-check-input"], I = A[0], O = A[1];
  return r = Nt(I, O), /* @__PURE__ */ _.createElement(b, ce({}, S, {
    ref: t,
    type: u,
    id: n || w,
    className: Z(a, r, d && "is-valid", m && "is-invalid", v && "position-static")
  }));
});
_g.displayName = "FormCheckInput";
var Y3 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], Sg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, l = ze(e, Y3), u = y.useContext(Or), c = u.controlId, d = u.custom, h = d ? [r, "custom-control-label"] : [n, "form-check-label"], m = h[0], v = h[1];
  return n = Nt(m, v), /* @__PURE__ */ _.createElement("label", ce({}, l, {
    ref: t,
    htmlFor: a || c,
    className: Z(i, n)
  }));
});
Sg.displayName = "FormCheckLabel";
var Q3 = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Jo = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, l = a === void 0 ? !1 : a, u = e.disabled, c = u === void 0 ? !1 : u, d = e.isValid, h = d === void 0 ? !1 : d, m = e.isInvalid, v = m === void 0 ? !1 : m, x = e.feedbackTooltip, b = x === void 0 ? !1 : x, S = e.feedback, R = e.className, w = e.style, C = e.title, A = C === void 0 ? "" : C, I = e.type, O = I === void 0 ? "checkbox" : I, F = e.label, L = e.children, H = e.custom, j = e.as, W = j === void 0 ? "input" : j, K = ze(e, Q3), Q = O === "switch" ? !0 : H, ie = Q ? [i, "custom-control"] : [r, "form-check"], Ee = ie[0], we = ie[1];
  r = Nt(Ee, we);
  var Ce = y.useContext(Or), te = Ce.controlId, G = y.useMemo(function() {
    return {
      controlId: n || te,
      custom: Q
    };
  }, [te, Q, n]), Y = Q || F != null && F !== !1 && !L, J = /* @__PURE__ */ _.createElement(_g, ce({}, K, {
    type: O === "switch" ? "checkbox" : O,
    ref: t,
    isValid: h,
    isInvalid: v,
    isStatic: !Y,
    disabled: c,
    as: W
  }));
  return /* @__PURE__ */ _.createElement(Or.Provider, {
    value: G
  }, /* @__PURE__ */ _.createElement("div", {
    style: w,
    className: Z(R, r, Q && "custom-" + O, l && r + "-inline")
  }, L || /* @__PURE__ */ _.createElement(_.Fragment, null, J, Y && /* @__PURE__ */ _.createElement(Sg, {
    title: A
  }, F), (h || v) && /* @__PURE__ */ _.createElement(nu, {
    type: h ? "valid" : "invalid",
    tooltip: b
  }, S))));
});
Jo.displayName = "FormCheck";
Jo.Input = _g;
Jo.Label = Sg;
var Z3 = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], bg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, l = e.isValid, u = e.isInvalid, c = e.lang, d = e.as, h = d === void 0 ? "input" : d, m = ze(e, Z3), v = y.useContext(Or), x = v.controlId, b = v.custom, S = "file", R = b ? [i, "custom-file-input"] : [r, "form-control-file"], w = R[0], C = R[1];
  return r = Nt(w, C), /* @__PURE__ */ _.createElement(h, ce({}, m, {
    ref: t,
    id: n || x,
    type: S,
    lang: c,
    className: Z(a, r, l && "is-valid", u && "is-invalid")
  }));
});
bg.displayName = "FormFileInput";
var J3 = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], bf = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, l = ze(e, J3), u = y.useContext(Or), c = u.controlId, d = u.custom, h = d ? [r, "custom-file-label"] : [n, "form-file-label"], m = h[0], v = h[1];
  return n = Nt(m, v), /* @__PURE__ */ _.createElement("label", ce({}, l, {
    ref: t,
    htmlFor: a || c,
    className: Z(i, n),
    "data-browse": l["data-browse"]
  }));
});
bf.displayName = "FormFileLabel";
var e4 = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], vd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, l = a === void 0 ? !1 : a, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, h = d === void 0 ? !1 : d, m = e.feedbackTooltip, v = m === void 0 ? !1 : m, x = e.feedback, b = e.className, S = e.style, R = e.label, w = e.children, C = e.custom, A = e.lang, I = e["data-browse"], O = e.as, F = O === void 0 ? "div" : O, L = e.inputAs, H = L === void 0 ? "input" : L, j = ze(e, e4), W = C ? [i, "custom"] : [r, "form-file"], K = W[0], Q = W[1];
  r = Nt(K, Q);
  var ie = "file", Ee = y.useContext(Or), we = Ee.controlId, Ce = y.useMemo(function() {
    return {
      controlId: n || we,
      custom: C
    };
  }, [we, C, n]), te = R != null && R !== !1 && !w, G = /* @__PURE__ */ _.createElement(bg, ce({}, j, {
    ref: t,
    isValid: c,
    isInvalid: h,
    disabled: l,
    as: H,
    lang: A
  }));
  return /* @__PURE__ */ _.createElement(Or.Provider, {
    value: Ce
  }, /* @__PURE__ */ _.createElement(F, {
    style: S,
    className: Z(b, r, C && "custom-" + ie)
  }, w || /* @__PURE__ */ _.createElement(_.Fragment, null, C ? /* @__PURE__ */ _.createElement(_.Fragment, null, G, te && /* @__PURE__ */ _.createElement(bf, {
    "data-browse": I
  }, R)) : /* @__PURE__ */ _.createElement(_.Fragment, null, te && /* @__PURE__ */ _.createElement(bf, null, R), G), (c || h) && /* @__PURE__ */ _.createElement(nu, {
    type: c ? "valid" : "invalid",
    tooltip: v
  }, x))));
});
vd.displayName = "FormFile";
vd.Input = bg;
vd.Label = bf;
var t4 = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], cb = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, l = e.htmlSize, u = e.id, c = e.className, d = e.isValid, h = d === void 0 ? !1 : d, m = e.isInvalid, v = m === void 0 ? !1 : m, x = e.plaintext, b = e.readOnly, S = e.custom, R = e.as, w = R === void 0 ? "input" : R, C = ze(e, t4), A = y.useContext(Or), I = A.controlId, O = S ? [r, "custom"] : [n, "form-control"], F = O[0], L = O[1];
  n = Nt(F, L);
  var H;
  if (x) {
    var j;
    H = (j = {}, j[n + "-plaintext"] = !0, j);
  } else if (i === "file") {
    var W;
    H = (W = {}, W[n + "-file"] = !0, W);
  } else if (i === "range") {
    var K;
    H = (K = {}, K[n + "-range"] = !0, K);
  } else if (w === "select" && S) {
    var Q;
    H = (Q = {}, Q[n + "-select"] = !0, Q[n + "-select-" + a] = a, Q);
  } else {
    var ie;
    H = (ie = {}, ie[n] = !0, ie[n + "-" + a] = a, ie);
  }
  return /* @__PURE__ */ _.createElement(w, ce({}, C, {
    type: i,
    size: l,
    ref: t,
    readOnly: b,
    id: u || I,
    className: Z(c, H, h && "is-valid", v && "is-invalid")
  }));
});
cb.displayName = "FormControl";
const fb = Object.assign(cb, {
  Feedback: nu
});
var n4 = ["bsPrefix", "className", "children", "controlId", "as"], db = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, l = e.as, u = l === void 0 ? "div" : l, c = ze(e, n4);
  n = Nt(n, "form-group");
  var d = y.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ _.createElement(Or.Provider, {
    value: d
  }, /* @__PURE__ */ _.createElement(u, ce({}, c, {
    ref: t,
    className: Z(r, n)
  }), i));
});
db.displayName = "FormGroup";
var r4 = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], i4 = {
  column: !1,
  srOnly: !1
}, kg = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, l = e.srOnly, u = e.className, c = e.htmlFor, d = ze(e, r4), h = y.useContext(Or), m = h.controlId;
  i = Nt(i, "form-label");
  var v = "col-form-label";
  typeof a == "string" && (v = v + " " + v + "-" + a);
  var x = Z(u, i, l && "sr-only", a && v);
  return c = c || m, a ? /* @__PURE__ */ _.createElement(eb, ce({
    ref: t,
    as: "label",
    className: x,
    htmlFor: c
  }, d)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ _.createElement(r, ce({
      ref: t,
      className: x,
      htmlFor: c
    }, d))
  );
});
kg.displayName = "FormLabel";
kg.defaultProps = i4;
var o4 = ["bsPrefix", "className", "as", "muted"], hb = /* @__PURE__ */ _.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, l = e.muted, u = ze(e, o4);
    return n = Nt(n, "form-text"), /* @__PURE__ */ _.createElement(a, ce({}, u, {
      ref: t,
      className: Z(r, n, l && "text-muted")
    }));
  }
);
hb.displayName = "FormText";
var gd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  return /* @__PURE__ */ _.createElement(Jo, ce({}, e, {
    ref: t,
    type: "switch"
  }));
});
gd.displayName = "Switch";
gd.Input = Jo.Input;
gd.Label = Jo.Label;
var a4 = ["bsPrefix", "inline", "className", "validated", "as"], s4 = dg("form-row"), l4 = {
  inline: !1
}, Mr = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, l = e.as, u = l === void 0 ? "form" : l, c = ze(e, a4);
  return n = Nt(n, "form"), /* @__PURE__ */ _.createElement(u, ce({}, c, {
    ref: t,
    className: Z(i, a && "was-validated", r && n + "-inline")
  }));
});
Mr.displayName = "Form";
Mr.defaultProps = l4;
Mr.Row = s4;
Mr.Group = db;
Mr.Control = fb;
Mr.Check = Jo;
Mr.File = vd;
Mr.Switch = gd;
Mr.Label = kg;
Mr.Text = hb;
function u4(e, t) {
  e.classList ? e.classList.add(t) : jc(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function e1(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function c4(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = e1(e.className, t) : e.setAttribute("class", e1(e.className && e.className.baseVal || "", t));
}
var bp = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? fg().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function t1(e, t) {
  var n = y.useState(function() {
    return bp(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = bp(e);
    a && i(a);
  }
  return y.useEffect(function() {
  }, [t, r]), y.useEffect(function() {
    var l = bp(e);
    l !== r && i(l);
  }, [e, r]), r;
}
var Ag = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, l = a === void 0 ? 5 : a, u = e.popperConfig, c = u === void 0 ? {} : u, d = e.transition, h = Bw(), m = h[0], v = h[1], x = Bw(), b = x[0], S = x[1], R = j3(v, t), w = t1(e.container), C = t1(e.target), A = y.useState(!e.show), I = A[0], O = A[1], F = N3(C, m, $3({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: l || 5,
    flip: n,
    offset: r,
    arrowElement: b,
    popperConfig: c
  })), L = F.styles, H = F.attributes, j = ze(F, ["styles", "attributes"]);
  e.show ? I && O(!1) : !e.transition && !I && O(!0);
  var W = function() {
    O(!0), e.onExited && e.onExited.apply(e, arguments);
  }, K = e.show || d && !I;
  if (H3(m, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !K)
    return null;
  var Q = e.children(ce({}, j, {
    show: !!e.show,
    props: ce({}, H.popper, {
      style: L.popper,
      ref: R
    }),
    arrowProps: ce({}, H.arrow, {
      style: L.arrow,
      ref: S
    })
  }));
  if (d) {
    var ie = e.onExit, Ee = e.onExiting, we = e.onEnter, Ce = e.onEntering, te = e.onEntered;
    Q = /* @__PURE__ */ _.createElement(d, {
      in: e.show,
      appear: !0,
      onExit: ie,
      onExiting: Ee,
      onExited: W,
      onEnter: we,
      onEntering: Ce,
      onEntered: te
    }, Q);
  }
  return w ? /* @__PURE__ */ Oo.createPortal(Q, w) : null;
});
Ag.displayName = "Overlay";
Ag.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: g.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: g.oneOf(vg),
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
var f4 = ["children", "transition", "popperConfig"], d4 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], h4 = {
  transition: gs,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function p4(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(Sf(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(Sf(i));
  });
}
function pb(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = ze(e, f4), l = y.useRef({}), u = W3(), c = u[0], d = u[1], h = n === !0 ? gs : n || null;
  return /* @__PURE__ */ _.createElement(Ag, ce({}, a, {
    ref: c,
    popperConfig: ce({}, i, {
      modifiers: d.concat(i.modifiers || [])
    }),
    transition: h
  }), function(m) {
    var v, x = m.props, b = m.arrowProps, S = m.show, R = m.update;
    m.forceUpdate;
    var w = m.placement, C = m.state, A = ze(m, d4);
    p4(x, b);
    var I = Object.assign(l.current, {
      state: C,
      scheduleUpdate: R,
      placement: w,
      outOfBoundaries: (C == null || (v = C.modifiersData.hide) == null ? void 0 : v.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t(ce({}, A, x, {
      placement: w,
      show: S
    }, !n && S && {
      className: "show"
    }, {
      popper: I,
      arrowProps: b
    })) : /* @__PURE__ */ _.cloneElement(t, ce({}, A, x, {
      placement: w,
      arrowProps: b,
      popper: I,
      className: Z(t.props.className, !n && S && "show"),
      style: ce({}, t.props.style, x.style)
    }));
  });
}
pb.defaultProps = h4;
var m4 = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], v4 = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(_.Component);
function g4(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function n1(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !ub(i, a) && e.apply(void 0, t);
}
var y4 = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function mb(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, l = e.show, u = e.defaultShow, c = u === void 0 ? !1 : u, d = e.onToggle, h = e.delay, m = e.placement, v = e.flip, x = v === void 0 ? m && m.indexOf("auto") !== -1 : v, b = ze(e, m4), S = y.useRef(null), R = CB(), w = y.useRef(""), C = US(l, c, d), A = C[0], I = C[1], O = g4(h), F = typeof r != "function" ? _.Children.only(r).props : {}, L = F.onFocus, H = F.onBlur, j = F.onClick, W = y.useCallback(function() {
    return Sf(S.current);
  }, []), K = y.useCallback(function() {
    if (R.clear(), w.current = "show", !O.show) {
      I(!0);
      return;
    }
    R.set(function() {
      w.current === "show" && I(!0);
    }, O.show);
  }, [O.show, I, R]), Q = y.useCallback(function() {
    if (R.clear(), w.current = "hide", !O.hide) {
      I(!1);
      return;
    }
    R.set(function() {
      w.current === "hide" && I(!1);
    }, O.hide);
  }, [O.hide, I, R]), ie = y.useCallback(function() {
    K();
    for (var J = arguments.length, se = new Array(J), ne = 0; ne < J; ne++)
      se[ne] = arguments[ne];
    L == null || L.apply(void 0, se);
  }, [K, L]), Ee = y.useCallback(function() {
    Q();
    for (var J = arguments.length, se = new Array(J), ne = 0; ne < J; ne++)
      se[ne] = arguments[ne];
    H == null || H.apply(void 0, se);
  }, [Q, H]), we = y.useCallback(function() {
    I(!A), j && j.apply(void 0, arguments);
  }, [j, I, A]), Ce = y.useCallback(function() {
    for (var J = arguments.length, se = new Array(J), ne = 0; ne < J; ne++)
      se[ne] = arguments[ne];
    n1(K, se, "fromElement");
  }, [K]), te = y.useCallback(function() {
    for (var J = arguments.length, se = new Array(J), ne = 0; ne < J; ne++)
      se[ne] = arguments[ne];
    n1(Q, se, "toElement");
  }, [Q]), G = t == null ? [] : [].concat(t), Y = {};
  return G.indexOf("click") !== -1 && (Y.onClick = we), G.indexOf("focus") !== -1 && (Y.onFocus = ie, Y.onBlur = Ee), G.indexOf("hover") !== -1 && (Y.onMouseOver = Ce, Y.onMouseOut = te), /* @__PURE__ */ _.createElement(_.Fragment, null, typeof r == "function" ? r(ce({}, Y, {
    ref: S
  })) : /* @__PURE__ */ _.createElement(v4, {
    ref: S
  }, /* @__PURE__ */ y.cloneElement(r, Y)), /* @__PURE__ */ _.createElement(pb, ce({}, b, {
    show: A,
    onHide: Q,
    flip: x,
    placement: m,
    popperConfig: a,
    target: W
  }), n));
}
mb.defaultProps = y4;
var E4 = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], vb = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, l = e.children, u = e.as, c = u === void 0 ? "div" : u, d = e.className, h = ze(e, E4);
  n = Nt(n, "spinner");
  var m = n + "-" + i;
  return /* @__PURE__ */ _.createElement(c, ce({
    ref: t
  }, h, {
    className: Z(d, m, a && m + "-" + a, r && "text-" + r)
  }), l);
});
vb.displayName = "Spinner";
var x4 = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], w4 = {
  placement: "right"
}, yd = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, l = e.children, u = e.arrowProps;
  e.popper, e.show;
  var c = ze(e, x4);
  n = Nt(n, "tooltip");
  var d = (r == null ? void 0 : r.split("-")) || [], h = d[0];
  return /* @__PURE__ */ _.createElement("div", ce({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": h,
    className: Z(i, n, "bs-tooltip-" + h)
  }, c), /* @__PURE__ */ _.createElement("div", ce({
    className: "arrow"
  }, u)), /* @__PURE__ */ _.createElement("div", {
    className: n + "-inner"
  }, l));
});
yd.defaultProps = w4;
yd.displayName = "Tooltip";
var Tg = {};
Tg.match = A4;
Tg.parse = gb;
var C4 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, _4 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, S4 = /^(?:(min|max)-)?(.+)/, b4 = /(em|rem|px|cm|mm|in|pt|pc)?$/, k4 = /(dpi|dpcm|dppx)?$/;
function A4(e, t) {
  return gb(e).some(function(n) {
    var r = n.inverse, i = n.type === "all" || t.type === n.type;
    if (i && r || !(i || r))
      return !1;
    var a = n.expressions.every(function(l) {
      var u = l.feature, c = l.modifier, d = l.value, h = t[u];
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
          d = o1(d), h = o1(h);
          break;
        case "resolution":
          d = i1(d), h = i1(h);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          d = r1(d), h = r1(h);
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          d = parseInt(d, 10) || 1, h = parseInt(h, 10) || 0;
          break;
      }
      switch (c) {
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
function gb(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(C4), r = n[1], i = n[2], a = n[3] || "", l = {};
    return l.inverse = !!r && r.toLowerCase() === "not", l.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], l.expressions = a.map(function(u) {
      var c = u.match(_4), d = c[1].toLowerCase().match(S4);
      return {
        modifier: d[1],
        feature: d[2],
        value: c[2]
      };
    }), l;
  });
}
function r1(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function i1(e) {
  var t = parseFloat(e), n = String(e).match(k4)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function o1(e) {
  var t = parseFloat(e), n = String(e).match(b4)[1];
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
var T4 = Tg.match, a1 = typeof window < "u" ? window.matchMedia : null;
function R4(e, t, n) {
  var r = this, i;
  a1 && !n && (i = a1.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(u)) : (this.matches = T4(e, t), this.media = e), this.addListener = a, this.removeListener = l, this.dispose = c;
  function a(d) {
    i && i.addListener(d);
  }
  function l(d) {
    i && i.removeListener(d);
  }
  function u(d) {
    r.matches = d.matches, r.media = d.media;
  }
  function c() {
    i && i.removeListener(u);
  }
}
function I4(e, t, n) {
  return new R4(e, t, n);
}
var N4 = I4;
const O4 = /* @__PURE__ */ ds(N4);
var P4 = /[A-Z]/g, D4 = /^ms-/, kp = {};
function F4(e) {
  return "-" + e.toLowerCase();
}
function yb(e) {
  if (kp.hasOwnProperty(e))
    return kp[e];
  var t = e.replace(P4, F4);
  return kp[e] = D4.test(t) ? "-" + t : t;
}
function M4(e, t) {
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
const cn = g.oneOfType([g.string, g.number]), Eb = {
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
}, L4 = {
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
  type: Object.keys(Eb)
}, { type: X6, ...B4 } = L4, H4 = {
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
  ...B4
}, V4 = { ...Eb, ...H4 };
var U4 = {
  all: V4
};
const $4 = (e) => `not ${e}`, z4 = (e, t) => {
  const n = yb(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? $4(n) : `(${n}: ${t})`;
}, j4 = (e) => e.join(" and "), W4 = (e) => {
  const t = [];
  return Object.keys(U4.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(z4(n, r));
  }), j4(t);
}, G4 = y.createContext(void 0), X4 = (e) => e.query || W4(e), s1 = (e) => e ? Object.keys(e).reduce((n, r) => (n[yb(r)] = e[r], n), {}) : void 0, xb = () => {
  const e = y.useRef(!1);
  return y.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, q4 = (e) => {
  const t = y.useContext(G4), n = () => s1(e) || s1(t), [r, i] = y.useState(n);
  return y.useEffect(() => {
    const a = n();
    M4(r, a) || i(a);
  }, [e, t]), r;
}, K4 = (e) => {
  const t = () => X4(e), [n, r] = y.useState(t);
  return y.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, Y4 = (e, t) => {
  const n = () => O4(e, t || {}, !!t), [r, i] = y.useState(n), a = xb();
  return y.useEffect(() => {
    if (a) {
      const l = n();
      return i(l), () => {
        l && l.dispose();
      };
    }
  }, [e, t]), r;
}, Q4 = (e) => {
  const [t, n] = y.useState(e.matches);
  return y.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, wb = (e, t, n) => {
  const r = q4(t), i = K4(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = Y4(i, r), l = Q4(a);
  return xb(), y.useEffect(() => {
  }, [l]), y.useEffect(() => () => {
    a && a.dispose();
  }, []), l;
};
let l1 = 0;
const Rg = (e = "id") => (l1 += 1, `${e}${l1}`);
let Ha = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Cb(e, t, n) {
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
        newName: c,
        expect: d,
        transform: h,
        message: m
      } = n[l];
      switch (u) {
        case Ha.MOVED:
          this.warn(`${t}: The prop '${l}' has been moved to '${c}'.`), a[c] = this.props[l];
          break;
        case Ha.REMOVED:
          this.warn(`${t}: The prop '${l}' has been removed. '${m}'`);
          break;
        case Ha.FORMAT:
          d(this.props[l]) ? a[l] = this.props[l] : (this.warn(`${t}: The prop '${l}' expects a new format. ${m}`), a[l] = h(this.props[l], this.props));
          break;
        case Ha.MOVED_AND_FORMAT: {
          const v = this.props[l];
          let x = `${t}: The prop '${l}' has been moved to '${c}'`;
          d && !d(v) && (x += " and expects a new format"), x += m ? `. ${m}` : "", this.warn(x), a[c] = h ? h(v, this.props) : v;
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
function Ig({
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
    const c = a["aria-label"] || a["aria-labelledby"], d = {
      ...a
    };
    return c || (d["aria-label"] = void 0, d["aria-hidden"] = !0), /* @__PURE__ */ _.createElement("span", {
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
    id: t || Rg("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, i));
}
Ig.propTypes = {
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
Ig.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Ot = Cb(Ig, "Icon", {
  className: {
    deprType: Ha.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), Z4 = "576px", J4 = {
  sm: Z4
}, {
  sm: eH
} = J4, tH = {
  extraSmall: {
    maxWidth: parseFloat(eH) || 575.98
  }
}, ur = /* @__PURE__ */ _.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ _.createElement(pg, {
  size: r,
  ...i,
  className: Z(i.className),
  ref: a
}, n && /* @__PURE__ */ _.createElement(Ot, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ _.createElement(Ot, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function Xo({
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
function nH() {
  return /* @__PURE__ */ _.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Xo.Spacer = nH;
const ru = /* @__PURE__ */ y.forwardRef(({
  children: e,
  icon: t,
  actions: n,
  dismissible: r = !1,
  onClose: i = () => {
  },
  closeLabel: a,
  stacked: l = !1,
  show: u = !0,
  ...c
}, d) => {
  const [h, m] = y.useState(l), v = wb({
    maxWidth: tH.extraSmall.maxWidth
  }), x = "sm";
  y.useEffect(() => {
    m(v ? !0 : l);
  }, [v, l]);
  const b = y.useCallback((S) => {
    const R = {
      size: x,
      key: S.props.children
    };
    return /* @__PURE__ */ y.cloneElement(S, R);
  }, []);
  return /* @__PURE__ */ _.createElement(Zo, {
    ...c,
    className: Z("alert-content", c.className),
    show: u,
    ref: d
  }, t && /* @__PURE__ */ _.createElement(Ot, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ _.createElement("div", {
    className: Z({
      "pgn__alert-message-wrapper": !h,
      "pgn__alert-message-wrapper-stacked": h
    })
  }, /* @__PURE__ */ _.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ _.createElement(Xo, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ _.createElement(Xo.Spacer, null), r && /* @__PURE__ */ _.createElement(ur, {
    size: x,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ _.createElement(HS, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(b))));
}), _b = YS("h4");
_b.displayName = "DivStyledAsH4";
function rH({
  as: e = _b,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ _.createElement(Zo.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function iH({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ _.createElement(Zo.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
ru.Heading = rH;
ru.Link = iH;
var Wc = "right-scroll-bar-position", Gc = "width-before-scroll-bar", oH = "with-scroll-bars-hidden", aH = "--removed-body-scroll-bar-size";
function Ap(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function sH(e, t) {
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
var lH = typeof window < "u" ? y.useLayoutEffect : y.useEffect, u1 = /* @__PURE__ */ new WeakMap();
function Sb(e, t) {
  var n = sH(null, function(r) {
    return e.forEach(function(i) {
      return Ap(i, r);
    });
  });
  return lH(function() {
    var r = u1.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Ap(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Ap(u, l);
      });
    }
    u1.set(n, e);
  }, [e]), n;
}
function bb(e) {
  return e;
}
function kb(e, t) {
  t === void 0 && (t = bb);
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
      var c = function() {
        var h = l;
        l = [], h.forEach(a);
      }, d = function() {
        return Promise.resolve().then(c);
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
function Ng(e, t) {
  return t === void 0 && (t = bb), kb(e, t);
}
function Og(e) {
  e === void 0 && (e = {});
  var t = kb(null);
  return t.options = re({ async: !0, ssr: !1 }, e), t;
}
var Ab = function(e) {
  var t = e.sideCar, n = Zr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, re({}, n));
};
Ab.isSideCarExport = !0;
function Pg(e, t) {
  return e.useMedium(t), Ab;
}
var Tb = Og(), Tp = function() {
}, Dg = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: Tp,
    onWheelCapture: Tp,
    onTouchMoveCapture: Tp
  }), i = r[0], a = r[1], l = e.forwardProps, u = e.children, c = e.className, d = e.removeScrollBar, h = e.enabled, m = e.shards, v = e.sideCar, x = e.noRelative, b = e.noIsolation, S = e.inert, R = e.allowPinchZoom, w = e.as, C = w === void 0 ? "div" : w, A = e.gapMode, I = Zr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = v, F = Sb([n, t]), L = re(re({}, I), i);
  return y.createElement(
    y.Fragment,
    null,
    h && y.createElement(O, { sideCar: Tb, removeScrollBar: d, shards: m, noRelative: x, noIsolation: b, inert: S, setCallbacks: a, allowPinchZoom: !!R, lockRef: n, gapMode: A }),
    l ? y.cloneElement(y.Children.only(u), re(re({}, L), { ref: F })) : y.createElement(C, re({}, L, { className: c, ref: F }), u)
  );
});
Dg.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Dg.classNames = {
  fullWidth: Gc,
  zeroRight: Wc
};
var tv = "data-focus-lock", Rb = "data-focus-lock-disabled", uH = "data-no-focus-lock", cH = "data-autofocus-inside", fH = "data-no-autofocus", Rp = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Ib = Ng({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Nb = Ng(), dH = Ng(), Ob = Og({
  async: !0,
  ssr: typeof document < "u"
}), hH = /* @__PURE__ */ y.createContext(void 0), pH = [], Pb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, i = y.useState(), a = i[0], l = i[1], u = y.useRef(), c = y.useRef(!1), d = y.useRef(null), h = y.useState({}), m = h[1], v = t.children, x = t.disabled, b = x === void 0 ? !1 : x, S = t.noFocusGuards, R = S === void 0 ? !1 : S, w = t.persistentFocus, C = w === void 0 ? !1 : w, A = t.crossFrame, I = A === void 0 ? !0 : A, O = t.autoFocus, F = O === void 0 ? !0 : O;
  t.allowTextSelection;
  var L = t.group, H = t.className, j = t.whiteList, W = t.hasPositiveIndices, K = t.shards, Q = K === void 0 ? pH : K, ie = t.as, Ee = ie === void 0 ? "div" : ie, we = t.lockProps, Ce = we === void 0 ? {} : we, te = t.sideCar, G = t.returnFocus, Y = G === void 0 ? !1 : G, J = t.focusOptions, se = t.onActivation, ne = t.onDeactivation, Ze = y.useState({}), Ve = Ze[0], He = y.useCallback(function(Qe) {
    var _e = Qe.captureFocusRestore;
    if (!d.current) {
      var Je, We = (Je = document) == null ? void 0 : Je.activeElement;
      d.current = We, We !== document.body && (d.current = _e(We));
    }
    u.current && se && se(u.current), c.current = !0, m();
  }, [se]), Re = y.useCallback(function() {
    c.current = !1, ne && ne(u.current), m();
  }, [ne]), mt = y.useCallback(function(Qe) {
    var _e = d.current;
    if (_e) {
      var Je = (typeof _e == "function" ? _e() : _e) || document.body, We = typeof Y == "function" ? Y(Je) : Y;
      if (We) {
        var Oe = typeof We == "object" ? We : void 0;
        d.current = null, Qe ? Promise.resolve().then(function() {
          return Je.focus(Oe);
        }) : Je.focus(Oe);
      }
    }
  }, [Y]), Ke = y.useCallback(function(Qe) {
    c.current && Ib.useMedium(Qe);
  }, []), Ye = Nb.useMedium, Ae = y.useCallback(function(Qe) {
    u.current !== Qe && (u.current = Qe, l(Qe));
  }, []), vt = ce((r = {}, r[Rb] = b && "disabled", r[tv] = L, r), Ce), rt = R !== !0, ve = rt && R !== "tail", de = Sb([n, Ae]), Ue = y.useMemo(function() {
    return {
      observed: u,
      shards: Q,
      enabled: !b,
      active: c.current
    };
  }, [b, c.current, Q, a]);
  return /* @__PURE__ */ _.createElement(y.Fragment, null, rt && [
    /* @__PURE__ */ _.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: b ? -1 : 0,
      style: Rp
    }),
    W ? /* @__PURE__ */ _.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: b ? -1 : 1,
      style: Rp
    }) : null
  ], !b && /* @__PURE__ */ _.createElement(te, {
    id: Ve,
    sideCar: Ob,
    observed: a,
    disabled: b,
    persistentFocus: C,
    crossFrame: I,
    autoFocus: F,
    whiteList: j,
    shards: Q,
    onActivation: He,
    onDeactivation: Re,
    returnFocus: mt,
    focusOptions: J,
    noFocusGuards: R
  }), /* @__PURE__ */ _.createElement(Ee, ce({
    ref: de
  }, vt, {
    className: H,
    onBlur: Ye,
    onFocus: Ke
  }), /* @__PURE__ */ _.createElement(hH.Provider, {
    value: Ue
  }, v)), ve && /* @__PURE__ */ _.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: b ? -1 : 0,
    style: Rp
  }));
});
Pb.propTypes = {};
function Fg(e) {
  setTimeout(e, 1);
}
var mH = function(t) {
  return t && "current" in t ? t.current : t;
}, Db = Og(), Fb = "data-focus-on-hidden", vH = { preventScroll: !0 }, gH = y.forwardRef(function(e, t) {
  var n = y.useState(!1), r = n[0], i = n[1], a = e.children, l = e.autoFocus, u = e.shards, c = e.crossFrame, d = e.enabled, h = d === void 0 ? !0 : d, m = e.scrollLock, v = m === void 0 ? !0 : m, x = e.focusLock, b = x === void 0 ? !0 : x, S = e.returnFocus, R = S === void 0 ? !0 : S, w = e.inert, C = e.allowPinchZoom, A = e.sideCar, I = e.className, O = e.shouldIgnore, F = e.preventScrollOnFocus, L = e.style, H = e.as, j = e.gapMode, W = Zr(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), K = A, Q = r.onActivation, ie = r.onDeactivation, Ee = Zr(r, ["onActivation", "onDeactivation"]), we = re(re({}, Ee), {
    as: H,
    style: L,
    sideCar: A,
    shards: u,
    allowPinchZoom: C,
    gapMode: j,
    inert: w,
    enabled: h && v
  });
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(Pb, { ref: t, sideCar: A, disabled: !(r && h && b), returnFocus: R, autoFocus: l, shards: u, crossFrame: c, onActivation: Q, onDeactivation: ie, className: I, whiteList: O, lockProps: we, focusOptions: F ? vH : void 0, as: Dg }, a),
    h && y.createElement(K, re({}, W, { sideCar: Db, setLockProps: i, shards: u }))
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
function yH(e, t) {
  if (Bl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Bl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EH(e) {
  var t = yH(e, "string");
  return Bl(t) == "symbol" ? t : t + "";
}
function xH(e, t, n) {
  return (t = EH(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function wH(e, t) {
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
    var c = /* @__PURE__ */ function(d) {
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
    return xH(c, "displayName", "SideEffect(" + n(i) + ")"), c;
  };
}
var ei = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, qo = function(e) {
  return Array.isArray(e) ? e : [e];
}, Mb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, CH = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Lb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Bb = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, _H = function(e) {
  return e.hasAttribute("inert");
}, SH = function(e, t) {
  return !e || Bb(e) || !CH(e) && !_H(e) && t(Lb(e));
}, Hb = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = SH(t, Hb.bind(void 0, e));
  return e.set(t, r), r;
}, bH = function(e, t) {
  return e && !Bb(e) ? TH(e) ? t(Lb(e)) : !1 : !0;
}, Vb = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = bH(t, Vb.bind(void 0, e));
  return e.set(t, r), r;
}, Ub = function(e) {
  return e.dataset;
}, kH = function(e) {
  return e.tagName === "BUTTON";
}, $b = function(e) {
  return e.tagName === "INPUT";
}, zb = function(e) {
  return $b(e) && e.type === "radio";
}, AH = function(e) {
  return !(($b(e) || kH(e)) && (e.type === "hidden" || e.disabled));
}, TH = function(e) {
  var t = e.getAttribute(fH);
  return ![!0, "true", ""].includes(t);
}, Mg = function(e) {
  var t;
  return !!(e && (!((t = Ub(e)) === null || t === void 0) && t.focusGuard));
}, nv = function(e) {
  return !Mg(e);
}, RH = function(e) {
  return !!e;
}, IH = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, NH = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Lg = function(e, t, n) {
  return ei(e).map(function(r, i) {
    var a = NH(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(IH);
}, OH = [
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
], Bg = OH.join(","), PH = "".concat(Bg, ", [data-focus-guard]"), jb = function(e, t) {
  return ei((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? PH : Bg) ? [r] : [], jb(r));
  }, []);
}, DH = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? us([e.contentDocument.body], t) : [e];
}, us = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = jb(r, t), l = (i = []).concat.apply(i, a.map(function(u) {
      return DH(u, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      l,
      // add if node is tabbable itself
      r.parentNode ? ei(r.parentNode.querySelectorAll(Bg)).filter(function(u) {
        return u === r;
      }) : []
    );
  }, []);
}, FH = function(e) {
  var t = e.querySelectorAll("[".concat(cH, "]"));
  return ei(t).map(function(n) {
    return us([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Hg = function(e, t) {
  return ei(e).filter(function(n) {
    return Hb(t, n);
  }).filter(function(n) {
    return AH(n);
  });
}, c1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ei(e).filter(function(n) {
    return Vb(t, n);
  });
}, Vg = function(e, t, n) {
  return Lg(Hg(us(e, n), t), !0, n);
}, Hl = function(e, t) {
  return Lg(Hg(us(e), t), !1);
}, MH = function(e, t) {
  return Hg(FH(e), t);
}, Bo = function(e, t) {
  return e.shadowRoot ? Bo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ei(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? Bo(i, t) : !1;
    }
    return Bo(n, t);
  });
}, LH = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(l, u) {
    return !t.has(u);
  });
}, Wb = function(e) {
  return e.parentNode ? Wb(e.parentNode) : e;
}, Ug = function(e) {
  var t = qo(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute(tv);
    return n.push.apply(n, i ? LH(ei(Wb(r).querySelectorAll("[".concat(tv, '="').concat(i, '"]:not([').concat(Rb, '="disabled"])')))) : [r]), n;
  }, []);
}, BH = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Vl = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Vl(t.shadowRoot) : t instanceof HTMLIFrameElement && BH(function() {
      return t.contentWindow.document;
    }) ? Vl(t.contentWindow.document) : t;
  }
}, HH = function(e, t) {
  return e === t;
}, VH = function(e, t) {
  return !!ei(e.querySelectorAll("iframe")).some(function(n) {
    return HH(n, t);
  });
}, Gb = function(e, t) {
  return t === void 0 && (t = Vl(Mb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Ug(e).some(function(n) {
    return Bo(n, t) || VH(n, t);
  });
}, UH = function(e) {
  e === void 0 && (e = document);
  var t = Vl(e);
  return t ? ei(e.querySelectorAll("[".concat(uH, "]"))).some(function(n) {
    return Bo(n, t);
  }) : !1;
}, $H = function(e, t) {
  return t.filter(zb).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, $g = function(e, t) {
  return zb(e) && e.name ? $H(e, t) : e;
}, zH = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add($g(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, f1 = function(e) {
  return e[0] && e.length > 1 ? $g(e[0], e) : e[0];
}, d1 = function(e, t) {
  return e.indexOf($g(t, e));
}, rv = "NEW_FOCUS", jH = function(e, t, n, r, i) {
  var a = e.length, l = e[0], u = e[a - 1], c = Mg(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var d = r !== void 0 ? n.indexOf(r) : -1, h = i ? n.indexOf(i) : d, m = i ? e.indexOf(i) : -1;
    if (d === -1)
      return m !== -1 ? m : rv;
    if (m === -1)
      return rv;
    var v = d - h, x = n.indexOf(l), b = n.indexOf(u), S = zH(n), R = r !== void 0 ? S.indexOf(r) : -1, w = i ? S.indexOf(i) : R, C = S.filter(function(H) {
      return H.tabIndex >= 0;
    }), A = r !== void 0 ? C.indexOf(r) : -1, I = i ? C.indexOf(i) : A, O = A >= 0 && I >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      I - A
    ) : (
      // or else measure in focusable space
      w - R
    );
    if (!v && m >= 0 || t.length === 0)
      return m;
    var F = d1(e, t[0]), L = d1(e, t[t.length - 1]);
    if (d <= x && c && Math.abs(v) > 1)
      return L;
    if (d >= b && c && Math.abs(v) > 1)
      return F;
    if (v && Math.abs(O) > 1)
      return m;
    if (d <= x)
      return L;
    if (d > b)
      return F;
    if (v)
      return Math.abs(v) > 1 ? m : (a + m + v) % a;
  }
}, WH = function(e) {
  return function(t) {
    var n, r = (n = Ub(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, h1 = function(e, t, n) {
  var r = e.map(function(a) {
    var l = a.node;
    return l;
  }), i = c1(r.filter(WH(n)));
  return i && i.length ? f1(i) : f1(c1(t));
}, iv = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && iv(e.parentNode.host || e.parentNode, t), t;
}, Ip = function(e, t) {
  for (var n = iv(e), r = iv(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Xb = function(e, t, n) {
  var r = qo(e), i = qo(t), a = r[0], l = !1;
  return i.filter(Boolean).forEach(function(u) {
    l = Ip(l || u, u) || l, n.filter(Boolean).forEach(function(c) {
      var d = Ip(a, c);
      d && (!l || Bo(d, l) ? l = d : l = Ip(d, l));
    });
  }), l;
}, p1 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(MH(r, t));
  }, []);
}, GH = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(RH);
}, XH = function(e, t) {
  var n = Vl(qo(e).length > 0 ? document : Mb(e).ownerDocument), r = Ug(e).filter(nv), i = Xb(n || e, e, r), a = /* @__PURE__ */ new Map(), l = Hl(r, a), u = l.filter(function(b) {
    var S = b.node;
    return nv(S);
  });
  if (u[0]) {
    var c = Hl([i], a).map(function(b) {
      var S = b.node;
      return S;
    }), d = GH(c, u), h = d.map(function(b) {
      var S = b.node;
      return S;
    }), m = d.filter(function(b) {
      var S = b.tabIndex;
      return S >= 0;
    }).map(function(b) {
      var S = b.node;
      return S;
    }), v = jH(h, m, c, n, t);
    if (v === rv) {
      var x = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        h1(l, m, p1(r, a)) || h1(l, h, p1(r, a))
      );
      if (x)
        return { node: x };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return v === void 0 ? v : d[v];
  }
}, qH = function(e) {
  var t = Ug(e).filter(nv), n = Xb(e, e, t), r = Lg(us([n], !0), !0, !0), i = us(t, !1);
  return r.map(function(a) {
    var l = a.node, u = a.index;
    return {
      node: l,
      index: u,
      lockItem: i.indexOf(l) >= 0,
      guard: Mg(l)
    };
  });
}, zg = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Np = 0, Op = !1, qb = function(e, t, n) {
  n === void 0 && (n = {});
  var r = XH(e, t);
  if (!Op && r) {
    if (Np > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Op = !0, setTimeout(function() {
        Op = !1;
      }, 1);
      return;
    }
    Np++, zg(r.node, n.focusOptions), Np--;
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
var KH = function(e) {
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
}, YH = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var l = e.stack, u = e.ownerDocument, c = /* @__PURE__ */ new Map(), d = 0, h = l; d < h.length; d++) {
      var m = h[d], v = (t = m.parent) === null || t === void 0 ? void 0 : t.call(m);
      if (v && u.contains(v)) {
        for (var x = (n = m.left) === null || n === void 0 ? void 0 : n.call(m), b = m.current(), S = v.contains(b) ? b : void 0, R = (r = m.right) === null || r === void 0 ? void 0 : r.call(m), w = Vg([v], c), C = (
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
          for (var A = 0, I = w; A < I.length; A++) {
            var O = I[A];
            if (C != null && C.contains(O.node))
              return O.node;
          }
          C = C.nextElementSibling;
        }
        if (w.length)
          return w[0].node;
      }
    }
}, Kb = function(e) {
  var t = KH(e);
  return function() {
    return YH(t);
  };
}, QH = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = qo(t);
  if (r.every(function(l) {
    return !Bo(l, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? Vg(r, /* @__PURE__ */ new Map()) : Hl(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(l) {
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
}, ZH = function(e, t) {
  var n = t ? Vg(qo(e), /* @__PURE__ */ new Map()) : Hl(qo(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, JH = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, Yb = function(e, t, n) {
  t === void 0 && (t = {});
  var r = JH(t), i = QH(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && zg(a.node, r.focusOptions);
  }
}, eV = function(e, t) {
  t === void 0 && (t = {}), Yb(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, tV = function(e, t) {
  t === void 0 && (t = {}), Yb(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Qb = function(e, t, n) {
  var r, i = ZH(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && zg(a.node, t.focusOptions);
}, nV = function(e, t) {
  t === void 0 && (t = {}), Qb(e, t, "first");
}, rV = function(e, t) {
  t === void 0 && (t = {}), Qb(e, t, "last");
}, Zb = function() {
  return document && document.activeElement === document.body;
}, iV = function() {
  return Zb() || UH();
}, Xa = null, _n = null, m1 = function() {
  return null;
}, qa = null, Ul = !1, jg = !1, oV = function() {
  return !0;
}, aV = function(t) {
  return (Xa.whiteList || oV)(t);
}, sV = function(t, n) {
  qa = {
    observerNode: t,
    portaledElement: n
  };
}, lV = function(t) {
  return qa && qa.portaledElement === t;
};
function v1(e, t, n, r) {
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
var uV = function(t) {
  return t ? !!Ul : Ul === "meanwhile";
}, cV = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, fV = function(t, n) {
  return n.some(function(r) {
    return cV(t, r, r);
  });
}, Jb = function(t) {
  return Hl(t, /* @__PURE__ */ new Map());
}, dV = function(t) {
  return !Jb([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, kf = function() {
  var t = !1;
  if (Xa) {
    var n = Xa, r = n.observed, i = n.persistentFocus, a = n.autoFocus, l = n.shards, u = n.crossFrame, c = n.focusOptions, d = n.noFocusGuards, h = r || qa && qa.portaledElement;
    if (Zb() && _n && _n !== document.body && (!document.body.contains(_n) || dV(_n))) {
      var m = m1();
      m && m.focus();
    }
    var v = document && document.activeElement;
    if (h) {
      var x = [h].concat(l.map(mH).filter(Boolean)), b = function() {
        if (!uV(u) || !d || !_n || jg)
          return !1;
        var A = Jb(x), I = A.findIndex(function(O) {
          var F = O.node;
          return F === _n;
        });
        return I === 0 || I === A.length - 1;
      };
      if ((!v || aV(v)) && (i || b() || !iV() || !_n && a) && (h && !(Gb(x) || v && fV(v, x) || lV(v)) && (document && !_n && v && !a ? (v.blur && v.blur(), document.body.focus()) : (t = qb(x, _n, {
        focusOptions: c
      }), qa = {})), _n = document && document.activeElement, _n !== document.body && (m1 = Kb(_n)), Ul = !1), document && v !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var S = document && document.activeElement, R = qH(x), w = R.map(function(C) {
          var A = C.node;
          return A;
        }).indexOf(S);
        w > -1 && (R.filter(function(C) {
          var A = C.guard, I = C.node;
          return A && I.dataset.focusAutoGuard;
        }).forEach(function(C) {
          var A = C.node;
          return A.removeAttribute("tabIndex");
        }), v1(w, R.length, 1, R), v1(w, -1, -1, R));
      }
    }
  }
  return t;
}, ek = function(t) {
  kf() && t && (t.stopPropagation(), t.preventDefault());
}, Wg = function() {
  return Fg(kf);
}, hV = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || sV(r, n);
}, pV = function() {
  return null;
}, tk = function() {
  jg = !0;
}, nk = function() {
  jg = !1, Ul = "just", Fg(function() {
    Ul = "meanwhile";
  });
}, mV = function() {
  document.addEventListener("focusin", ek), document.addEventListener("focusout", Wg), window.addEventListener("focus", tk), window.addEventListener("blur", nk);
}, vV = function() {
  document.removeEventListener("focusin", ek), document.removeEventListener("focusout", Wg), window.removeEventListener("focus", tk), window.removeEventListener("blur", nk);
};
function gV(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var rk = {
  moveFocusInside: qb,
  focusInside: Gb,
  focusNextElement: eV,
  focusPrevElement: tV,
  focusFirstElement: nV,
  focusLastElement: rV,
  captureFocusRestore: Kb
};
function yV(e) {
  var t = e.slice(-1)[0];
  t && !Xa && mV();
  var n = Xa, r = n && t && t.id === n.id;
  Xa = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (_n = null, (!r || n.observed !== t.observed) && t.onActivation(rk), kf(), Fg(kf)) : (vV(), _n = null);
}
Ib.assignSyncMedium(hV);
Nb.assignMedium(Wg);
dH.assignMedium(function(e) {
  return e(rk);
});
const EV = wH(gV, yV)(pV);
Pg(Ob, EV);
var xV = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wV() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xV();
  return t && e.setAttribute("nonce", t), e;
}
function CV(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _V(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var SV = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = wV()) && (CV(t, n), _V(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, bV = function() {
  var e = SV();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gg = function() {
  var e = bV(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, kV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pp = function(e) {
  return parseInt(e || "", 10) || 0;
}, AV = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pp(n), Pp(r), Pp(i)];
}, TV = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kV;
  var t = AV(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, RV = Gg(), Ka = "data-scroll-locked", IV = function(e, t, n, r) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(oH, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(Ka, `] {
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
  
  .`).concat(Wc, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Gc, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Wc, " .").concat(Wc, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Gc, " .").concat(Gc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ka, `] {
    `).concat(aH, ": ").concat(u, `px;
  }
`);
}, g1 = function() {
  var e = parseInt(document.body.getAttribute(Ka) || "0", 10);
  return isFinite(e) ? e : 0;
}, NV = function() {
  y.useEffect(function() {
    return document.body.setAttribute(Ka, (g1() + 1).toString()), function() {
      var e = g1() - 1;
      e <= 0 ? document.body.removeAttribute(Ka) : document.body.setAttribute(Ka, e.toString());
    };
  }, []);
}, OV = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  NV();
  var a = y.useMemo(function() {
    return TV(i);
  }, [i]);
  return y.createElement(RV, { styles: IV(a, !t, i, n ? "" : "!important") });
}, ov = !1;
if (typeof window < "u")
  try {
    var Cc = Object.defineProperty({}, "passive", {
      get: function() {
        return ov = !0, !0;
      }
    });
    window.addEventListener("test", Cc, Cc), window.removeEventListener("test", Cc, Cc);
  } catch {
    ov = !1;
  }
var Ca = ov ? { passive: !1 } : !1, PV = function(e) {
  return e.tagName === "TEXTAREA";
}, ik = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !PV(e) && n[t] === "visible")
  );
}, DV = function(e) {
  return ik(e, "overflowY");
}, FV = function(e) {
  return ik(e, "overflowX");
}, y1 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = ok(e, r);
    if (i) {
      var a = ak(e, r), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, MV = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, LV = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ok = function(e, t) {
  return e === "v" ? DV(t) : FV(t);
}, ak = function(e, t) {
  return e === "v" ? MV(t) : LV(t);
}, BV = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, HV = function(e, t, n, r, i) {
  var a = BV(e, window.getComputedStyle(t).direction), l = a * r, u = n.target, c = t.contains(u), d = !1, h = l > 0, m = 0, v = 0;
  do {
    if (!u)
      break;
    var x = ak(e, u), b = x[0], S = x[1], R = x[2], w = S - R - a * b;
    (b || w) && ok(e, u) && (m += w, v += b);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !c && u !== document.body || // self content
    c && (t.contains(u) || t === u)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(v) < 1) && (d = !0), d;
}, _c = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, E1 = function(e) {
  return [e.deltaX, e.deltaY];
}, x1 = function(e) {
  return e && "current" in e ? e.current : e;
}, VV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, UV = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, $V = 0, _a = [];
function zV(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), i = y.useState($V++)[0], a = y.useState(Gg)[0], l = y.useRef(e);
  y.useEffect(function() {
    l.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var S = Qt([e.lockRef.current], (e.shards || []).map(x1), !0).filter(Boolean);
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
    var w = _c(S), C = n.current, A = "deltaX" in S ? S.deltaX : C[0] - w[0], I = "deltaY" in S ? S.deltaY : C[1] - w[1], O, F = S.target, L = Math.abs(A) > Math.abs(I) ? "h" : "v";
    if ("touches" in S && L === "h" && F.type === "range")
      return !1;
    var H = y1(L, F);
    if (!H)
      return !0;
    if (H ? O = L : (O = L === "v" ? "h" : "v", H = y1(L, F)), !H)
      return !1;
    if (!r.current && "changedTouches" in S && (A || I) && (r.current = O), !O)
      return !0;
    var j = r.current || O;
    return HV(j, R, S, j === "h" ? A : I);
  }, []), c = y.useCallback(function(S) {
    var R = S;
    if (!(!_a.length || _a[_a.length - 1] !== a)) {
      var w = "deltaY" in R ? E1(R) : _c(R), C = t.current.filter(function(O) {
        return O.name === R.type && (O.target === R.target || R.target === O.shadowParent) && VV(O.delta, w);
      })[0];
      if (C && C.should) {
        R.cancelable && R.preventDefault();
        return;
      }
      if (!C) {
        var A = (l.current.shards || []).map(x1).filter(Boolean).filter(function(O) {
          return O.contains(R.target);
        }), I = A.length > 0 ? u(R, A[0]) : !l.current.noIsolation;
        I && R.cancelable && R.preventDefault();
      }
    }
  }, []), d = y.useCallback(function(S, R, w, C) {
    var A = { name: S, delta: R, target: w, should: C, shadowParent: jV(w) };
    t.current.push(A), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== A;
      });
    }, 1);
  }, []), h = y.useCallback(function(S) {
    n.current = _c(S), r.current = void 0;
  }, []), m = y.useCallback(function(S) {
    d(S.type, E1(S), S.target, u(S, e.lockRef.current));
  }, []), v = y.useCallback(function(S) {
    d(S.type, _c(S), S.target, u(S, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return _a.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", c, Ca), document.addEventListener("touchmove", c, Ca), document.addEventListener("touchstart", h, Ca), function() {
      _a = _a.filter(function(S) {
        return S !== a;
      }), document.removeEventListener("wheel", c, Ca), document.removeEventListener("touchmove", c, Ca), document.removeEventListener("touchstart", h, Ca);
    };
  }, []);
  var x = e.removeScrollBar, b = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    b ? y.createElement(a, { styles: UV(i) }) : null,
    x ? y.createElement(OV, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jV(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Pg(Tb, zV);
var WV = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Sa = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), bc = {}, Dp = 0, sk = function(e) {
  return e && (e.host || sk(e.parentNode));
}, GV = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = sk(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, XV = function(e, t, n, r) {
  var i = GV(t, Array.isArray(e) ? e : [e]);
  bc[n] || (bc[n] = /* @__PURE__ */ new WeakMap());
  var a = bc[n], l = [], u = /* @__PURE__ */ new Set(), c = new Set(i), d = function(m) {
    !m || u.has(m) || (u.add(m), d(m.parentNode));
  };
  i.forEach(d);
  var h = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (u.has(v))
        h(v);
      else
        try {
          var x = v.getAttribute(r), b = x !== null && x !== "false", S = (Sa.get(v) || 0) + 1, R = (a.get(v) || 0) + 1;
          Sa.set(v, S), a.set(v, R), l.push(v), S === 1 && b && Sc.set(v, !0), R === 1 && v.setAttribute(n, "true"), b || v.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", v, w);
        }
    });
  };
  return h(t), u.clear(), Dp++, function() {
    l.forEach(function(m) {
      var v = Sa.get(m) - 1, x = a.get(m) - 1;
      Sa.set(m, v), a.set(m, x), v || (Sc.has(m) || m.removeAttribute(r), Sc.delete(m)), x || m.removeAttribute(n);
    }), Dp--, Dp || (Sa = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), bc = {});
  };
}, qV = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || WV(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), XV(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, KV = Gg(), YV = `
 [` + Fb + `] {
   pointer-events: none !important;
 }
`, QV = function() {
  return y.createElement(KV, { styles: YV });
}, w1 = function(e) {
  return "current" in e ? e.current : e;
};
function ZV(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, l = e.onDeactivation, u = e.noIsolation, c = y.useState(void 0), d = c[0], h = c[1], m = y.useRef(null), v = y.useRef(0);
  return y.useEffect(function() {
    var x = function(w) {
      w.defaultPrevented || (w.code === "Escape" || w.key === "Escape" || w.keyCode === 27) && n && n(w);
    }, b = function(w) {
      w.defaultPrevented || w.target === m.current || w instanceof MouseEvent && w.button !== 0 || i && i.map(w1).some(function(C) {
        return C && C.contains(w.target) || C === w.target;
      }) || r && r(w);
    }, S = function(w) {
      b(w), v.current = w.touches.length;
    }, R = function(w) {
      v.current = w.touches.length;
    };
    if (d)
      return d.ownerDocument.addEventListener("keydown", x), d.ownerDocument.addEventListener("mousedown", b), d.ownerDocument.addEventListener("touchstart", S), d.ownerDocument.addEventListener("touchend", R), function() {
        d.ownerDocument.removeEventListener("keydown", x), d.ownerDocument.removeEventListener("mousedown", b), d.ownerDocument.removeEventListener("touchstart", S), d.ownerDocument.removeEventListener("touchend", R);
      };
  }, [d, r, n]), y.useEffect(function() {
    if (d)
      return a && a(d), function() {
        l && l();
      };
  }, [!!d]), y.useEffect(function() {
    var x = function() {
      return null;
    }, b = !1, S = function(w) {
      u || (x = qV(JF([w], (i || []).map(w1)), w.ownerDocument.body, Fb)), h(function() {
        return w;
      });
    }, R = function() {
      x(), b || h(null);
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
      b = !0, t(!1);
    };
  }, []), y.createElement(QV, null);
}
const JV = Pg(Db, ZV);
var eU = function(e) {
  return y.createElement(JV, re({}, e));
}, tU = y.forwardRef(function(e, t) {
  return y.createElement(gH, re({}, e, { ref: t, sideCar: eU }));
});
class nU extends _.Component {
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
const lk = /* @__PURE__ */ _.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function rU({
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
  return /* @__PURE__ */ _.createElement(lk.Provider, {
    value: i
  }, r);
}
function iU({
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
function oU({
  children: e = null
}) {
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function aU({
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
  return /* @__PURE__ */ _.createElement(rU, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ _.createElement(nU, null, /* @__PURE__ */ _.createElement(tU, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: Z("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ _.createElement(oU, null, /* @__PURE__ */ _.createElement(iU, {
    onClick: a
  }), e))));
}
const Ed = /* @__PURE__ */ _.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = y.useContext(lk), a = e, l = {
    ...n,
    className: Z("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ _.createElement(a, l, t);
});
Ed.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the content of the button */
  children: g.node,
  /** Specifies class name to append to the base element */
  className: g.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: g.func
};
Ed.defaultProps = {
  as: ur,
  onClick: void 0,
  className: void 0,
  children: null
};
const Xg = /* @__PURE__ */ _.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement(e, {
  ...n,
  ref: r,
  className: Z("pgn__modal-header", n.className)
}, t));
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
  className: ""
};
function qg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-title", n.className)
  }, t);
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
  as: "h2",
  className: void 0
};
function Kg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-footer", n.className)
  }, t);
}
Kg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
Kg.defaultProps = {
  as: "div",
  className: void 0
};
const C1 = (e = !0) => {
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
function Yg({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = C1(), [a, l] = C1(), u = Z("pgn__modal-body", n.className, {
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
Yg.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** Specifies the contents of the header */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element */
  className: g.string
};
Yg.defaultProps = {
  as: "div",
  className: void 0
};
function Qg({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-hero-content", n.className)
  }, t);
}
Qg.propTypes = {
  as: g.elementType,
  children: g.node.isRequired,
  className: g.string
};
Qg.defaultProps = {
  as: "div",
  className: void 0
};
function Zg({
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
Zg.propTypes = {
  as: g.elementType,
  backgroundSrc: g.string,
  children: g.node,
  className: g.string,
  style: g.shape({})
};
Zg.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function iu({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ _.createElement(e, {
    ...n,
    className: Z("pgn__modal-hero", n.className)
  }, t);
}
iu.propTypes = {
  as: g.elementType,
  children: g.node.isRequired,
  className: g.string
};
iu.defaultProps = {
  as: "div",
  className: void 0
};
iu.Content = Qg;
iu.Background = Zg;
const uk = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], sU = ["hover", "click", "focus"];
function Jg(e) {
  return /* @__PURE__ */ _.createElement(mb, {
    ...e
  }, e.children);
}
const _1 = g.oneOf(sU);
g.node.isRequired, g.oneOfType([g.elementType, g.func]), g.func, g.func, g.func, g.func, g.func, g.func, g.func, g.oneOf(uk), g.shape({}), g.bool, g.oneOf(["click", "mousedown"]), g.bool, g.oneOfType([g.elementType, g.func]), g.oneOfType([g.object, g.bool]);
Jg.propTypes = {
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
  placement: g.oneOf(uk),
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
  trigger: g.oneOfType([_1, g.arrayOf(_1)])
};
Jg.defaultProps = {
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
const lU = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Af = /* @__PURE__ */ _.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement(yd, {
  ...n,
  className: Z({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
Af.propTypes = {
  ...yd.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: g.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: g.oneOf(lU),
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
Af.defaultProps = {
  ...Af.defaultProps,
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
  variant: c = "primary",
  iconAs: d = Ot,
  isActive: h = !1,
  children: m,
  // unused, just here because we don't want it to be part of 'attrs'
  ...v
}, x) => {
  const b = n ? "inverse-" : "", S = h ? `${c}-` : "", R = d;
  return /* @__PURE__ */ _.createElement("button", {
    "aria-label": t,
    className: Z("btn-icon", `btn-icon-${b}${c}`, `btn-icon-${u}`, {
      [`btn-icon-${b}${S}active`]: h
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
function ck({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ _.createElement(Jg, {
    placement: e,
    overlay: /* @__PURE__ */ _.createElement(Af, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ _.createElement(ys, {
    ...n
  }));
}
ys.IconButtonWithTooltip = ck;
const S1 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), uU = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), cU = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), fU = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), e0 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), dU = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  fill: "currentColor"
})), hU = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
  fill: "currentColor"
})), fk = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z",
  fill: "currentColor"
})), dk = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z",
  fill: "currentColor"
})), hk = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), pk = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), pU = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), mU = (e) => /* @__PURE__ */ y.createElement("svg", {
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
})), vU = {
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
  isFullscreenScroll: c = !1,
  className: d,
  isFullscreenOnMobile: h = !1,
  isBlocking: m = !1,
  zIndex: v,
  isOverflowVisible: x
}) {
  const b = vs(), S = u || b.formatMessage(vU.closeButtonText), R = wb({
    query: "(max-width: 767.98px)"
  }), w = h && R;
  return /* @__PURE__ */ _.createElement(aU, {
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
      "pgn__modal-scroll-fullscreen": c,
      "pgn__modal-visible-overflow": x
    }, d)
  }, l && /* @__PURE__ */ _.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ _.createElement(Ed, {
    as: ys,
    iconAs: Ot,
    invertColors: a === "dark",
    src: e0,
    alt: S
  })), e));
}
bi.Header = Xg;
bi.Title = qg;
bi.Footer = Kg;
bi.CloseButton = Ed;
bi.Body = Yg;
bi.Hero = iu;
function gU() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function yU(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": gU()
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
function b1(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function mk(e, t) {
  return Array.isArray(t) ? mk(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const fe = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function EU(e) {
  switch (e) {
    case fe.LEFT:
      return fe.FORCE_LEFT;
    case fe.RIGHT:
      return fe.FORCE_RIGHT;
    default:
      return e;
  }
}
function Fp(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Tf(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!Tf(t[i], e[i])) return !1;
    return !0;
  }
  if (n != r) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const a = t instanceof Date, l = e instanceof Date;
    if (a && l) return t.getTime() == e.getTime();
    if (a != l) return !1;
    const u = t instanceof RegExp, c = e instanceof RegExp;
    if (u && c) return t.toString() == e.toString();
    if (u != c) return !1;
    const d = Object.keys(t);
    for (i = 0; i < d.length; i++) if (!Object.prototype.hasOwnProperty.call(e, d[i])) return !1;
    for (i = 0; i < d.length; i++) if (!Tf(e[d[i]], t[d[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class xU {
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
    return !this.removedCount || this.insertedCount ? fe.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? fe.RIGHT : fe.LEFT;
  }
}
function ge(e, t) {
  return new ge.InputMask(e, t);
}
function vk(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? ge.MaskedRegExp : to(e) ? ge.MaskedPattern : e === Date ? ge.MaskedDate : e === Number ? ge.MaskedNumber : Array.isArray(e) || e === Array ? ge.MaskedDynamic : ge.Masked && e.prototype instanceof ge.Masked ? e : ge.Masked && e instanceof ge.Masked ? e.constructor : e instanceof Function ? ge.MaskedFunction : (console.warn("Mask not found for mask", e), ge.Masked);
}
function $l(e) {
  if (!e) throw new Error("Options in not defined");
  if (ge.Masked) {
    if (e.prototype instanceof ge.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof ge.Masked ? {
      mask: e
    } : b1(e) && e.mask instanceof ge.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...mk(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return b1(e) ? {
    ...e
  } : {
    mask: e
  };
}
function _i(e) {
  if (ge.Masked && e instanceof ge.Masked) return e;
  const t = $l(e), n = vk(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
ge.createMask = _i;
class t0 {
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
ge.MaskElement = t0;
const k1 = 90, wU = 89;
class xd extends t0 {
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
    if (this._handlers.redo && (t.keyCode === k1 && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === wU && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === k1 && (t.metaKey || t.ctrlKey))
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
ge.HTMLMaskElement = xd;
class CU extends xd {
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
ge.HTMLMaskElement = xd;
class gk extends xd {
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
ge.HTMLContenteditableMaskElement = gk;
class wd {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > wd.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
wd.MAX_LENGTH = 100;
class _U {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof t0 ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new gk(t) : new CU(t), this.masked = _i(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new wd(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof ge.Masked) && this.masked.constructor === vk(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof ge.Masked ? t : _i({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, fe.LEFT));
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
    const n = new xU({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : fe.NONE;
    let l = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== fe.NONE && (l = this.masked.nearestInputPos(l, fe.NONE)), this.updateControl(l), delete this._inputEvent;
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
ge.InputMask = _U;
class ke {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new ke()];
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
ge.ChangeDetails = ke;
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
    return t ? (this._value += t, new ke({
      inserted: t,
      rawInserted: t
    })) : new ke();
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
      const c = this._appendCharRaw(t, n);
      u = u.aggregate(c), c.rawInserted || u.equals(a) ? a = u : this.state = l;
    }
    if (a.inserted) {
      let l, u = this.doValidate(n) !== !1;
      if (u && r != null) {
        const c = this.state;
        if (this.overwrite === !0) {
          l = r.state;
          for (let h = 0; h < a.rawInserted.length; ++h)
            r.unshift(this.displayValue.length - a.tailShift);
        }
        let d = this.appendTail(r);
        if (u = d.rawInserted.length === r.toString().length, !(u && d.inserted) && this.overwrite === "shift") {
          this.state = c, l = r.state;
          for (let h = 0; h < a.rawInserted.length; ++h)
            r.shift();
          d = this.appendTail(r), u = d.rawInserted.length === r.toString().length;
        }
        u && d.inserted && (this.state = c);
      }
      u || (a = new ke(), this.state = i, r && l && (r.state = l));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new ke();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new ke();
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new ke();
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
    return n === void 0 && (n = {}), ke.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), ke.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = fe.NONE), a === void 0 && (a = {
      input: !0
    });
    const l = t + n, u = this.extractTail(l), c = this.eager === !0 || this.eager === "remove";
    let d;
    c && (i = EU(i), d = this.extractInput(0, l, {
      raw: !0
    }));
    let h = t;
    const m = new ke();
    if (i !== fe.NONE && (h = this.nearestInputPos(t, n > 1 && t !== 0 && !c ? fe.NONE : i), m.tailShift = h - t), m.aggregate(this.remove(h)), c && i !== fe.NONE && d === this.rawInputValue)
      if (i === fe.FORCE_LEFT) {
        let v;
        for (; d === this.rawInputValue && (v = this.displayValue.length); )
          m.aggregate(new ke({
            tailShift: -1
          })).aggregate(this.remove(v - 1));
      } else i === fe.FORCE_RIGHT && u.unshift();
    return m.aggregate(this.append(r, a, u));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !Tf(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Zt.EMPTY_VALUES.includes(t) && Zt.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new ke();
  }
}
Zt.DEFAULTS = {
  skipInvalid: !0
};
Zt.EMPTY_VALUES = [void 0, null, ""];
ge.Masked = Zt;
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
    if (!(t instanceof ge.MaskedPattern))
      return new Xr(this.toString()).appendTo(t);
    const n = new ke();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), l = i.stop;
      let u;
      if (l != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= l) && ((i instanceof Po || // for continuous block also check if stop is exist
      t._stops.indexOf(l) >= 0) && n.aggregate(t._appendPlaceholder(l)), u = i instanceof Po && t._blocks[l]), u) {
        const c = u.appendTail(i);
        n.aggregate(c);
        const d = i.toString().slice(c.rawInserted.length);
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
class SU {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, fe.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, fe.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, fe.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, fe.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, fe.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, fe.NONE), !0;
    });
  }
}
class yk {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new ke();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = fe.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case fe.LEFT:
      case fe.FORCE_LEFT:
        return r;
      case fe.NONE:
      case fe.RIGHT:
      case fe.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new ke();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, l = new ke({
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
    const t = new ke();
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
class Rf {
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
      ...c
    } = t;
    this.masked = _i(c), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new ke();
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
    if (n === void 0 && (n = {}), this.isFilled) return new ke();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new ke(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new ke() : (this.isFilled = !0, new ke({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new ke();
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
    n === void 0 && (n = fe.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case fe.LEFT:
      case fe.FORCE_LEFT:
        return this.isComplete ? a : r;
      case fe.RIGHT:
      case fe.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case fe.NONE:
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
    return new ke();
  }
}
Rf.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class bU extends Zt {
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
ge.MaskedRegExp = bU;
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
      definitions: Object.assign({}, Rf.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
            ...b
          } = $l(this.blocks[m]), S = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...b,
            repeat: x,
            parent: this
          }, R = x != null ? new ge.RepeatBlock(
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
      const c = u ? new Rf({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...$l(t[l]),
        parent: this
      }) : new yk({
        char: l,
        eager: this.eager,
        isUnmasking: r
      });
      this._blocks.push(c);
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
    const n = new ke();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new ke();
    if (!r) return i;
    for (let l = r.index, u; u = this._blocks[l]; ++l) {
      var a;
      const c = u._appendChar(t, {
        ...n,
        _beforeTailState: (a = n._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[l]
      });
      if (i.aggregate(c), c.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const r = new Po();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, l, u) => {
      const c = i.extractTail(l, u);
      c.stop = this._findStopBefore(a), c.from = this._blockStartPos(a), c instanceof Po && (c.blockIndex = a), r.extend(c);
    }), r;
  }
  extractInput(t, n, r) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), r === void 0 && (r = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (a, l, u, c) => {
      i += a.extractInput(u, c, r);
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
    const n = new ke();
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
      const a = this._mapPosToBlock(n), l = a && i.index === a.index, u = i.offset, c = a && l ? a.offset : this._blocks[i.index].displayValue.length;
      if (r(this._blocks[i.index], i.index, u, c), a && !l) {
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
    if (n === void 0 && (n = fe.NONE), !this._blocks.length) return 0;
    const r = new SU(this, t);
    if (n === fe.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === fe.LEFT || n === fe.FORCE_LEFT) {
      if (n === fe.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === fe.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === fe.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === fe.RIGHT || n === fe.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === fe.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, fe.LEFT))) : t;
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
    const n = new ke();
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
Jt.InputDefinition = Rf;
Jt.FixedDefinition = yk;
ge.MaskedPattern = Jt;
class Xc extends Jt {
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
    const u = String(this.from).padStart(this.maxLength, "0"), c = String(this.to).padStart(this.maxLength, "0");
    let d = 0;
    for (; d < c.length && c[d] === u[d]; ) ++d;
    l.mask = c.slice(0, d).replace(/0/g, "\\0") + "0".repeat(this.maxLength - d), super._update(l);
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
    const n = new ke();
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
ge.MaskedRange = Xc;
const kU = "d{.}`m{.}`Y";
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
    mask: Xc,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: Xc,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: Xc,
    from: 1900,
    to: 9999
  }
});
pi.DEFAULTS = {
  ...Jt.DEFAULTS,
  mask: Date,
  pattern: kU,
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
ge.MaskedDate = pi;
class Cd extends Zt {
  constructor(t) {
    super({
      ...Cd.DEFAULTS,
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, l = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, u = a.slice(l.length), c = this.currentMask, d = new ke(), h = c == null ? void 0 : c.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, r), this.currentMask && (this.currentMask !== c ? (this.currentMask.reset(), l && (this.currentMask.append(l, {
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
    const n = new ke();
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
    const r = new ke();
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
      return Tf(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Cd.DEFAULTS = {
  ...Zt.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((l, u) => {
      const c = t.currentMask === l, d = c ? l.displayValue.length : l.nearestInputPos(l.displayValue.length, fe.FORCE_LEFT);
      return l.rawInputValue !== i ? (l.reset(), l.append(i, {
        raw: !0
      })) : c || l.remove(d), l.append(e, t.currentMaskFlags(n)), l.appendTail(r), {
        index: u,
        weight: l.rawInputValue.length,
        totalInputPositions: l.totalInputPositions(0, Math.max(d, l.nearestInputPos(l.displayValue.length, fe.FORCE_LEFT)))
      };
    });
    return a.sort((l, u) => u.weight - l.weight || u.totalInputPositions - l.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
ge.MaskedDynamic = Cd;
class _d extends Jt {
  constructor(t) {
    super({
      ..._d.DEFAULTS,
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
    const r = Math.min(this.nearestInputPos(0, fe.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (l, u) => {
        const c = i[0][u];
        u >= this.value.length || c === l.value || (l.reset(), l._appendChar(c, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((l) => a.aggregate(super._appendCharRaw(l))), a;
    }
    return new ke({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Xr("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new ke();
    const r = Math.min(super.nearestInputPos(0, fe.FORCE_RIGHT), this.value.length);
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
_d.DEFAULTS = {
  ...Jt.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
ge.MaskedEnum = _d;
class AU extends Zt {
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
ge.MaskedFunction = AU;
var Ek;
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + Fp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Fp).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Fp(this.thousandsSeparator), "g");
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
    let u = !isNaN(l), c = !1;
    if (u) {
      let v;
      this.min != null && this.min < 0 && this.number < this.min && (v = this.min), this.max != null && this.max > 0 && this.number > this.max && (v = this.max), v != null && (this.autofix ? (this._value = this.format(v, this).replace(Vn.UNMASKED_RADIX, this.radix), c || (c = a === this._value && !n.tail)) : u = !1), u && (u = !!this._value.match(this._numberRegExp));
    }
    let d;
    u ? d = new ke({
      inserted: this._value.slice(a.length),
      rawInserted: c ? "" : t,
      skip: c
    }) : (this._value = a, d = new ke()), this._value = this._insertThousandsSeparators(this._value);
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
    return new ke({
      tailShift: (l - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case fe.NONE:
      case fe.LEFT:
      case fe.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === fe.FORCE_LEFT)
            return r;
        }
        break;
      }
      case fe.RIGHT:
      case fe.FORCE_RIGHT: {
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
Ek = Vn;
Vn.UNMASKED_RADIX = ".";
Vn.EMPTY_VALUES = [...Zt.EMPTY_VALUES, 0];
Vn.DEFAULTS = {
  ...Zt.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [Ek.UNMASKED_RADIX],
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
ge.MaskedNumber = Vn;
const av = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function xk(e, t, n) {
  t === void 0 && (t = av.MASKED), n === void 0 && (n = av.MASKED);
  const r = _i(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function TU(e, t, n, r) {
  return xk(t, n, r)(e);
}
ge.PIPE_TYPE = av;
ge.createPipe = xk;
ge.pipe = TU;
class RU extends Jt {
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
    const r = new ke();
    for (
      let c = (i = (a = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : a.index) != null ? i : Math.max(this._blocks.length - 1, 0), d, h;
      // try to get a block or
      // try to allocate a new block if not allocated already
      d = (l = this._blocks[c]) != null ? l : h = !h && this._allocateBlock(c);
      ++c
    ) {
      var i, a, l, u;
      const m = d._appendChar(t, {
        ...n,
        _beforeTailState: (u = n._beforeTailState) == null || (u = u._blocks) == null ? void 0 : u[c]
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
    for (let c = l; a <= c && !this._blocks[c].unmaskedValue; --c, ++u)
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
ge.RepeatBlock = RU;
try {
  globalThis.IMask = ge;
} catch {
}
const wk = {
  // common
  mask: g.oneOfType([g.array, g.func, g.string, g.instanceOf(RegExp), g.oneOf([Date, Number, ge.Masked]), g.instanceOf(ge.Masked)]),
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
}, Ck = Object.keys(wk).filter((e) => e !== "value"), IU = ["value", "unmask", "onAccept", "onComplete", "inputRef"], NU = Ck.filter((e) => IU.indexOf(e) < 0);
function OU(e) {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = ge(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...l
      } = a;
      return Object.keys(l).filter((u) => NU.indexOf(u) < 0).forEach((u) => {
        delete l[u];
      }), l;
    }
    _extractNonMaskProps(a) {
      const {
        ...l
      } = a;
      return Ck.forEach((u) => {
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
  return n.displayName = "IMask(" + r + ")", n.propTypes = wk, _.forwardRef((i, a) => _.createElement(n, {
    ...i,
    ref: a
  }));
}
const PU = OU((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return _.createElement("input", {
    ...n,
    ref: t
  });
}), DU = (e, t) => _.createElement(PU, {
  ...e,
  ref: t
}), FU = _.forwardRef(DU), MU = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), Ho = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, LU = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = y.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (l) => r(!!l.target.value)];
}, A1 = (e, t) => {
  const [n, r] = y.useState([]), i = (c) => (r((d) => [...d, c]), c), a = () => {
    const c = Rg(`${e}-`);
    return i(c);
  }, l = (c) => {
    r((d) => d.filter((h) => h !== c));
  };
  return [n, (c) => {
    const [d, h] = y.useState(c);
    return y.useEffect(() => (c ? i(c) : d || h(a()), () => l(d)), [d, c]), d;
  }];
}, Mp = (e) => e, BU = () => {
}, _k = /* @__PURE__ */ _.createContext({
  getControlProps: Mp,
  useSetIsControlGroupEffect: BU,
  getLabelProps: Mp,
  getDescriptorProps: Mp,
  hasFormGroupProvider: !1
}), Er = () => _.useContext(_k);
function HU(e) {
  const [t, n] = y.useState(e);
  return [t, (i) => {
    y.useEffect(() => n(i), [i]);
  }];
}
function Sd({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = y.useMemo(() => t || Rg("form-field"), [t]), [l, u] = A1(a), [c, d] = A1(a), [h, m] = HU(!1), S = {
    getControlProps: y.useCallback((R) => {
      const w = h ? c : void 0;
      return MU({
        ...R,
        "aria-describedby": Z(R["aria-describedby"], l) || void 0,
        "aria-labelledby": Z(R["aria-labelledby"], w) || void 0,
        id: a
      });
    }, [h, l, c, a]),
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
  return /* @__PURE__ */ _.createElement(_k.Provider, {
    value: S
  }, e);
}
const cs = {
  SMALL: "sm",
  LARGE: "lg"
}, Ar = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, VU = {
  [Ar.DEFAULT]: null,
  [Ar.VALID]: cU,
  [Ar.INVALID]: e0,
  [Ar.WARNING]: mU,
  [Ar.CRITERIA_EMPTY]: pU,
  [Ar.CRITERIA_VALID]: fU,
  [Ar.CRITERIA_INVALID]: uU
}, UU = ({
  isInvalid: e,
  isValid: t
}) => t ? Ar.VALID : e ? Ar.INVALID : Ar.DEFAULT;
function n0({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = VU[e];
  return n ? /* @__PURE__ */ _.createElement(Ot, {
    src: n
  }) : null;
}
n0.propTypes = {
  type: g.oneOf(Object.values(Ar)),
  customIcon: g.node
};
n0.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function bd({
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
  }, i && /* @__PURE__ */ _.createElement(n0, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ _.createElement("div", null, e));
}
const $U = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
bd.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: g.bool,
  /** Specifies text type, this affects styling. */
  type: g.oneOf($U),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: g.node,
  /** Specifies whether to show text with muted styling. */
  muted: g.bool
};
bd.defaultProps = {
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
  } = Er(), a = n(t), l = Z("pgn__form-control-description", t.className), u = t.type || UU({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ _.createElement(bd, {
    ...a,
    className: l,
    type: u
  }, e);
}
const zU = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
oo.propTypes = {
  /** Specifies contents of the component. */
  children: g.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: g.bool,
  /** Specifies feedback type, this affects styling. */
  type: g.oneOf(zU),
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
function Sk({
  children: e
}) {
  const {
    controlId: t
  } = Er();
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ _.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
Sk.propTypes = {
  children: g.node.isRequired
};
function If({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ _.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
If.propTypes = {
  children: g.node.isRequired,
  location: g.oneOf(["leading", "trailing"])
};
If.defaultProps = {
  location: "leading"
};
function r0({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const l = Er(), u = a.size || l.size;
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
  }, e, t && /* @__PURE__ */ _.createElement(If, {
    location: "leading"
  }, t), n && /* @__PURE__ */ _.createElement(If, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ _.createElement(Sk, null, r));
}
r0.propTypes = {
  children: g.node.isRequired,
  leadingElement: g.node,
  trailingElement: g.node,
  floatingLabel: g.node,
  className: g.string,
  size: g.oneOf([cs.SMALL, cs.LARGE])
};
r0.defaultProps = {
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
  inputMask: c,
  ...d
}, h) => {
  const {
    isInvalid: m,
    isValid: v,
    getControlProps: x,
    ...b
  } = Er(), S = _.useRef(), R = h || S, w = d.size || b.size, [C, A] = LU({
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
    onBlur: Ho(A, d.onBlur)
  }), F = (L) => {
    I(), u && u(L);
  };
  return /* @__PURE__ */ _.createElement(r0, {
    size: w,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ _.createElement(fb, {
    as: c ? FU : e,
    ref: R,
    size: w,
    isInvalid: m,
    isValid: v,
    className: Z(n, {
      "has-value": C
    }),
    onChange: F,
    mask: c,
    ...O
  }));
}), jU = ["sm", "lg"];
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
  size: g.oneOf(jU),
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
function i0({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = Er(), l = Z("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === cs.LARGE,
    "pgn__form-label-sm": r === cs.SMALL
  }, n.className), u = a({
    ...n,
    className: l
  }), c = i ? "p" : "label";
  return /* @__PURE__ */ _.createElement(c, u, e);
}
function WU({
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
  }, /* @__PURE__ */ _.createElement(Sd, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const GU = (e) => e, bk = /* @__PURE__ */ _.createContext({
  getRadioControlProps: GU,
  hasRadioSetProvider: !1
}), XU = () => y.useContext(bk);
function o0({
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
  return /* @__PURE__ */ _.createElement(bk.Provider, {
    value: d
  }, e);
}
o0.propTypes = {
  children: g.node.isRequired,
  name: g.string.isRequired,
  onBlur: g.func,
  onFocus: g.func,
  onChange: g.func,
  value: g.string,
  defaultValue: g.string
};
o0.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const a0 = /* @__PURE__ */ _.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = Er(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = XU();
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
a0.propTypes = {
  className: g.string
};
a0.defaultProps = {
  className: void 0
};
const s0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: l,
  ...u
}, c) => /* @__PURE__ */ _.createElement(Sd, {
  controlId: u.id,
  isInvalid: a,
  isValid: l
}, /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__form-radio", t, {
    "pgn__form-control-valid": l,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": u.disabled
  })
}, /* @__PURE__ */ _.createElement(a0, {
  ref: c,
  className: n,
  ...u
}), /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(i0, {
  className: r
}, e), i && /* @__PURE__ */ _.createElement(oo, {
  hasIcon: !1
}, i)))));
s0.propTypes = {
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
s0.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function kd({
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
kd.propTypes = {
  /** Specifies the base element */
  as: g.elementType,
  /** A class name to append to the base element. */
  className: g.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: g.bool,
  /** Specifies contents of the component. */
  children: g.node
};
kd.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function l0({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: l,
  onBlur: u,
  ...c
}) {
  const {
    getControlProps: d,
    useSetIsControlGroupEffect: h
  } = Er();
  h(!0);
  const m = d(c);
  return /* @__PURE__ */ _.createElement(o0, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: l,
    onBlur: u,
    onChange: a
  }, /* @__PURE__ */ _.createElement(kd, {
    role: "radiogroup",
    isInline: i,
    ...m
  }, e));
}
l0.propTypes = {
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
l0.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let kc;
const qU = new Uint8Array(16);
function KU() {
  if (!kc && (kc = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !kc))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return kc(qU);
}
const Vt = [];
for (let e = 0; e < 256; ++e)
  Vt.push((e + 256).toString(16).slice(1));
function YU(e, t = 0) {
  return Vt[e[t + 0]] + Vt[e[t + 1]] + Vt[e[t + 2]] + Vt[e[t + 3]] + "-" + Vt[e[t + 4]] + Vt[e[t + 5]] + "-" + Vt[e[t + 6]] + Vt[e[t + 7]] + "-" + Vt[e[t + 8]] + Vt[e[t + 9]] + "-" + Vt[e[t + 10]] + Vt[e[t + 11]] + Vt[e[t + 12]] + Vt[e[t + 13]] + Vt[e[t + 14]] + Vt[e[t + 15]];
}
const QU = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), T1 = {
  randomUUID: QU
};
function ZU(e, t, n) {
  if (T1.randomUUID && !e)
    return T1.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || KU)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, YU(r);
}
const JU = (e, t, n) => (r, i, a, ...l) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...l), e5 = (e, t) => t.every((n) => e[n] !== void 0), Lp = (e, t) => JU(
  e,
  (n) => Array.isArray(t) ? e5(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), t5 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: Z("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ _.createElement(vb, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ _.createElement("span", {
    className: "sr-only"
  }, t));
});
function n5({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function r5({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function i5({
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
  const u = Array.from(l).findIndex((c) => c === a);
  i === "Enter" && a && n5({
    event: e,
    currentIndex: u,
    activeElement: a
  }), r5({
    event: e,
    currentIndex: u,
    availableElements: l
  });
}
function o5(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = y.useRef();
  return y.useEffect(() => {
    const i = (a) => {
      i5({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const R1 = {
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
}, u0 = /* @__PURE__ */ y.forwardRef(({
  children: e,
  arrowKeyNavigationSelector: t,
  ignoredArrowKeysNames: n,
  screenReaderText: r,
  value: i,
  isLoading: a,
  isValueRequired: l,
  valueRequiredErrorMessageText: u,
  isSelectionRequired: c,
  selectionRequiredErrorMessageText: d,
  hasCustomError: h,
  customErrorMessageText: m,
  onChange: v,
  helpMessage: x,
  ...b
}, S) => {
  const R = vs(), w = y.useRef(), C = o5({
    selectors: t,
    ignoredKeys: n
  }), [A, I] = y.useState(!1), [O, F] = y.useState(!1), [L, H] = y.useState(!1), [j, W] = y.useState(!1), [K, Q] = y.useState((i == null ? void 0 : i.userProvidedText) || ""), [ie, Ee] = y.useState([]), [we, Ce] = y.useState(null), [te, G] = y.useState(!0), [Y, J] = y.useState(""), se = (_e) => {
    Ce(_e);
  }, ne = () => {
    Ee([]), I(!1), Ce(null);
  }, Ze = (_e, Je) => {
    const We = _e.currentTarget.getAttribute("data-value"), Oe = _e.currentTarget.id;
    H(!0), W(!0), Q(We), v && (!i || i && We !== i.selectionValue) && v({
      userProvidedText: We,
      selectionValue: We,
      selectionId: Oe
    }), ne(), Je && Je(_e);
  };
  function Ve(_e = "") {
    let Je = _.Children.map(e, (We) => {
      const {
        children: Oe,
        onClick: it,
        ...tn
      } = We.props, Nn = We.props.id ?? ZU();
      return /* @__PURE__ */ _.cloneElement(We, {
        ...tn,
        children: Oe,
        "data-value": Oe,
        onClick: (Lr) => Ze(Lr, it),
        id: Nn,
        onFocus: () => se(Nn)
      });
    });
    return _e.length > 0 && (Je = Je.filter((We) => We.props.children.toLowerCase().includes(_e.toLowerCase()))), Je;
  }
  const He = () => {
    Ee(Ve(K)), G(!0), J(""), I(!0);
  }, Re = () => {
    A ? ne() : He();
  }, mt = /* @__PURE__ */ _.createElement(ys, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: A ? pk : hk,
    iconAs: Ot,
    size: "sm",
    variant: "secondary",
    alt: A ? R.formatMessage(R1.iconButtonClosed) : R.formatMessage(R1.iconButtonOpened),
    onClick: Re
  }), Ke = () => {
    F(!0);
  }, Ye = () => {
    if (h) {
      G(!1), J(m);
      return;
    }
    if (l && !L) {
      G(!1), J(u);
      return;
    }
    if (L && c && !j) {
      G(!1), J(d);
      return;
    }
    G(!0), J("");
  };
  y.useImperativeHandle(S, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: Ye
  }));
  const Ae = () => {
    F(!1), ne(), Ye();
  }, vt = (_e) => {
    if (O) {
      if (_e.key === "Escape") {
        _e.preventDefault(), w && w.current.focus(), ne();
        return;
      }
      _e.key === "Tab" && Ae();
    }
  }, rt = (_e) => {
    C.current && !C.current.contains(_e.target) && O && Ae();
  };
  y.useEffect(() => (document.addEventListener("keydown", vt), document.addEventListener("click", rt, !0), () => {
    document.removeEventListener("click", rt, !0), document.removeEventListener("keydown", vt);
  })), y.useEffect(() => {
    Q(i ? i.userProvidedText ?? "" : ""), H(!!i && !!i.userProvidedText), W(!!i && !!i.selectionValue);
  }, [i]);
  const ve = () => {
    He();
  }, de = (_e) => {
    const Je = _e.target.value;
    if (!Je.length) {
      Q(""), H(!1), W(!1), Ee([]), ne(), v && v({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    H(!0);
    const We = Ve(Je);
    Ee(We);
    const Oe = We.find((it) => it.props.children.toLowerCase() === Je.toLowerCase());
    if (!Oe) {
      W(!1), Q(Je), v && v({
        userProvidedText: Je,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    W(!0), Q(Oe.props.children), v && v({
      userProvidedText: Oe.props.children,
      selectionValue: Oe.props.children,
      selectionId: Oe.props.id
    });
  }, {
    getControlProps: Ue
  } = Er(), Qe = Ue(b);
  return /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: C,
    onFocus: Ke
  }, /* @__PURE__ */ _.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${ie.length} options found`), /* @__PURE__ */ _.createElement(Sd, {
    controlId: Qe.id,
    isInvalid: !te
  }, /* @__PURE__ */ _.createElement(Es, {
    ref: w,
    "aria-expanded": (ie.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: K,
    "aria-invalid": Y,
    "aria-activedescendant": we,
    onChange: de,
    onClick: ve,
    trailingElement: mt,
    "data-testid": "autosuggest-textbox-input",
    ...Qe
  }), x && te && /* @__PURE__ */ _.createElement(oo, {
    type: "default"
  }, x), !te && /* @__PURE__ */ _.createElement(oo, {
    type: "invalid",
    "feedback-for": Qe.name
  }, Y)), /* @__PURE__ */ _.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ _.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ _.createElement(t5, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : ie.length > 0 && ie));
});
u0.defaultProps = {
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
u0.propTypes = {
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
  valueRequiredErrorMessageText: Lp(g.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: g.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: Lp(g.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: g.bool,
  /** Informs user of other errors. */
  customErrorMessageText: Lp(g.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: g.string,
  /** Selected list item is read-only. */
  readOnly: g.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: g.node,
  /** Specifies the screen reader text */
  screenReaderText: g.string
};
function a5({
  as: e = "button",
  children: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected: n = !1,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const l = Z(a.className, "pgn__menu-item");
  return /* @__PURE__ */ y.createElement(e, {
    ...a,
    className: l
  }, /* @__PURE__ */ _.createElement(_.Fragment, null, i && /* @__PURE__ */ _.createElement(Ot, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ _.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ _.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ _.createElement(Ot, {
    className: "btn-icon-after",
    src: r
  })));
}
function c0({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ _.createElement(a5, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: Z(t, "dropdown-item"),
    ...r
  }, e);
}
c0.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
c0.propTypes = {
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: g.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: g.func
};
const s5 = (e) => e, kk = /* @__PURE__ */ _.createContext({
  getCheckboxControlProps: s5,
  hasCheckboxSetProvider: !1
}), Ak = () => y.useContext(kk);
function f0({
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
  return /* @__PURE__ */ _.createElement(kk.Provider, {
    value: d
  }, e);
}
f0.propTypes = {
  children: g.node.isRequired,
  name: g.string,
  onBlur: g.func,
  onFocus: g.func,
  onChange: g.func,
  value: g.arrayOf(g.string),
  defaultValue: g.arrayOf(g.string)
};
f0.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const d0 = /* @__PURE__ */ _.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = Ak(), a = _.useRef(), l = n || a, {
    getControlProps: u
  } = Er();
  let c = u({
    ...t,
    className: Z("pgn__form-checkbox-input", t.className)
  });
  return i && (c = r(c)), _.useEffect(() => {
    l.current && (l.current.indeterminate = e);
  }, [l, e]), /* @__PURE__ */ _.createElement("input", {
    type: "checkbox",
    ...c,
    ref: l
  });
});
d0.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: g.bool,
  /** Specifies class name to append to the base element. */
  className: g.string
};
d0.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Ad = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: l,
  controlAs: u,
  floatLabelLeft: c,
  ...d
}, h) => {
  const {
    hasCheckboxSetProvider: m
  } = Ak(), {
    hasFormGroupProvider: v,
    useSetIsControlGroupEffect: x,
    getControlProps: b
  } = Er();
  x(!0);
  const R = v && !m ? {
    ...b({}),
    role: "group"
  } : {}, w = /* @__PURE__ */ _.createElement(u, {
    ...d,
    className: n,
    ref: h
  });
  return /* @__PURE__ */ _.createElement(Sd, {
    controlId: d.id,
    isInvalid: a,
    isValid: l
  }, /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__form-checkbox", t, {
      "pgn__form-control-valid": l,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": d.disabled,
      "pgn__form-control-label-left": !!c
    }),
    ...R
  }, w, /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(i0, {
    className: r
  }, e), i && /* @__PURE__ */ _.createElement(oo, {
    hasIcon: !1
  }, i))));
});
Ad.propTypes = {
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
Ad.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: d0,
  floatLabelLeft: !1,
  disabled: !1
};
const h0 = /* @__PURE__ */ _.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = _.useRef(), i = n || r, {
    getControlProps: a
  } = Er(), l = a({
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
h0.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: g.bool,
  /** Specifies class name to append to the base element. */
  className: g.string
};
h0.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const p0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ _.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ _.createElement(Ad, {
  className: Z("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: h0,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ _.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
p0.propTypes = {
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
p0.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function Td({
  children: e,
  name: t,
  value: n,
  defaultValue: r,
  isInline: i,
  onChange: a,
  onFocus: l,
  onBlur: u,
  ...c
}) {
  const {
    getControlProps: d,
    useSetIsControlGroupEffect: h
  } = Er();
  h(!0);
  const m = d(c);
  return /* @__PURE__ */ _.createElement(f0, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: l,
    onBlur: u,
    onChange: a
  }, /* @__PURE__ */ _.createElement(kd, {
    role: "group",
    isInline: i,
    ...m
  }, e));
}
Td.propTypes = {
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
Td.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const ue = Mr;
ue.Control = Es;
ue.Radio = s0;
ue.RadioSet = l0;
ue.Autosuggest = u0;
ue.AutosuggestOption = c0;
ue.Checkbox = Ad;
ue.CheckboxSet = Td;
ue.Switch = p0;
ue.SwitchSet = Td;
ue.Label = i0;
ue.Group = WU;
ue.Text = bd;
const l5 = ({
  bin: e,
  onSave: t,
  onCancel: n,
  saveRef: r
}) => {
  const [i, a] = y.useState(e.label), [l, u] = y.useState(e.description), [c, d] = y.useState(e.max_capacity), [h, m] = y.useState(null);
  y.useEffect(() => {
    r.current = v;
  }, [i, l, c]);
  const v = () => {
    if (!i.trim()) {
      m("Bin label is required");
      return;
    }
    if (c < 0) {
      m("Capacity cannot be negative");
      return;
    }
    t({
      id: e.id,
      label: i.trim(),
      description: l.trim(),
      max_capacity: c
    });
  };
  return /* @__PURE__ */ D.jsxs("div", { className: "edit-bin-view p-4", children: [
    /* @__PURE__ */ D.jsx("div", { className: "h4 mb-4", children: "Edit Bin" }),
    h && /* @__PURE__ */ D.jsx(ru, { variant: "danger", dismissible: !0, onClose: () => m(null), children: h }),
    /* @__PURE__ */ D.jsxs(ue, { children: [
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Label *" }),
        /* @__PURE__ */ D.jsx(
          ue.Control,
          {
            type: "text",
            value: i,
            onChange: (x) => a(x.target.value),
            placeholder: "e.g., Category A",
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ D.jsx(ue.Text, { children: "The name shown on the bin in the student view." })
      ] }),
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Description" }),
        /* @__PURE__ */ D.jsx(
          ue.Control,
          {
            as: "textarea",
            rows: 3,
            value: l,
            onChange: (x) => u(x.target.value),
            placeholder: "Optional description for this bin"
          }
        ),
        /* @__PURE__ */ D.jsx(ue.Text, { children: "Optional description shown below the bin label. Helps students understand what belongs in this bin." })
      ] }),
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Maximum Capacity" }),
        /* @__PURE__ */ D.jsx(
          ue.Control,
          {
            type: "number",
            min: 0,
            value: c,
            onChange: (x) => d(parseInt(x.target.value) || 0)
          }
        ),
        /* @__PURE__ */ D.jsx(ue.Text, { children: "Maximum number of items allowed in this bin. Set to 0 for unlimited capacity." })
      ] })
    ] })
  ] });
}, u5 = ({
  item: e,
  bins: t,
  onSave: n,
  onCancel: r,
  saveRef: i
}) => {
  const [a, l] = y.useState(e.type), [u, c] = y.useState(e.content), [d, h] = y.useState(e.correct_bin_id), [m, v] = y.useState(null);
  y.useEffect(() => {
    i.current = x;
  }, [a, u, d]);
  const x = () => {
    if (!u.trim()) {
      v("Content is required");
      return;
    }
    if (!d) {
      v("Please select a correct bin");
      return;
    }
    n({
      id: e.id,
      type: a,
      content: u.trim(),
      correct_bin_id: d
    });
  }, b = () => {
    switch (a) {
      case "text":
        return /* @__PURE__ */ D.jsx(
          ue.Control,
          {
            type: "text",
            value: u,
            onChange: (S) => c(S.target.value),
            placeholder: "Enter text content",
            autoFocus: !0
          }
        );
      case "image":
        return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          /* @__PURE__ */ D.jsx(
            ue.Control,
            {
              type: "text",
              value: u,
              onChange: (S) => c(S.target.value),
              placeholder: "https://example.com/image.png"
            }
          ),
          u && /* @__PURE__ */ D.jsx("div", { className: "mt-2", children: /* @__PURE__ */ D.jsx(
            "img",
            {
              src: u,
              alt: "Preview",
              style: { maxWidth: "200px", maxHeight: "150px" },
              onError: () => v("Invalid image URL")
            }
          ) })
        ] });
      case "html":
        return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          /* @__PURE__ */ D.jsx(
            ue.Control,
            {
              as: "textarea",
              rows: 6,
              value: u,
              onChange: (S) => c(S.target.value),
              placeholder: "<p>Enter HTML content...</p>"
            }
          ),
          u && /* @__PURE__ */ D.jsxs("div", { className: "mt-2 p-3 border rounded", children: [
            /* @__PURE__ */ D.jsx("div", { className: "small text-muted mb-1", children: "Preview:" }),
            /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: { __html: u } })
          ] })
        ] });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: "edit-item-view p-4", children: [
    /* @__PURE__ */ D.jsx("div", { className: "h4 mb-4", children: "Edit Item" }),
    m && /* @__PURE__ */ D.jsx(ru, { variant: "danger", dismissible: !0, onClose: () => v(null), children: m }),
    /* @__PURE__ */ D.jsxs(ue, { children: [
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Type *" }),
        /* @__PURE__ */ D.jsxs(
          ue.Control,
          {
            as: "select",
            value: a,
            onChange: (S) => l(S.target.value),
            children: [
              /* @__PURE__ */ D.jsx("option", { value: "text", children: "Text" }),
              /* @__PURE__ */ D.jsx("option", { value: "image", children: "Image URL" }),
              /* @__PURE__ */ D.jsx("option", { value: "html", children: "HTML" })
            ]
          }
        ),
        /* @__PURE__ */ D.jsxs(ue.Text, { children: [
          a === "text" && "Plain text content that will be displayed to students.",
          a === "image" && "URL to an image file that will be displayed to students.",
          a === "html" && "HTML markup that will be rendered to students. Supports formatting and styling."
        ] })
      ] }),
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Content *" }),
        b()
      ] }),
      /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
        /* @__PURE__ */ D.jsx(ue.Label, { children: "Correct Bin *" }),
        /* @__PURE__ */ D.jsxs(
          ue.Control,
          {
            as: "select",
            value: d,
            onChange: (S) => h(S.target.value),
            children: [
              t.length === 0 && /* @__PURE__ */ D.jsx("option", { value: "", children: "No bins available" }),
              t.map((S) => /* @__PURE__ */ D.jsx("option", { value: S.id, children: S.label }, S.id))
            ]
          }
        ),
        /* @__PURE__ */ D.jsx(ue.Text, { children: "The bin where this item should be placed to be marked correct." })
      ] })
    ] })
  ] });
}, Tk = 1e3, c5 = 0.01, Rk = (e) => {
  const t = document.createElement(e.tagName);
  return t.setAttribute(
    "style",
    `line-height: ${Tk}px; display: inline-block; word-break: break-word;`
  ), t;
}, Va = (e, t = !1, n = "", r = []) => {
  const a = `${t ? " " : ""}${n}`;
  if (!r.length)
    return [document.createTextNode(`${e.trim()}${a}`)];
  const l = [];
  return r.forEach((u, c) => {
    let d = e.slice(u.start, u.end);
    if (!d.length)
      return;
    if (c === r.length - 1 && n && (d = d.trimEnd()), !u.type) {
      l.push(document.createTextNode(d));
      return;
    }
    const h = document.createElement(u.type);
    Array.isArray(u.children) ? Va(d, !1, "", u.children).forEach((m) => {
      h.appendChild(m);
    }) : h.appendChild(document.createTextNode(d)), Object.keys(u.props || {}).forEach((m) => {
      m !== "children" && h.setAttribute(m, u.props[m]);
    }), l.push(h);
  }), a && l.push(document.createTextNode(a)), l;
}, Ik = (e, t) => {
  const n = Math.floor(e.length * t);
  return e.slice(0, n);
};
function Nk(e, t = []) {
  let n = "";
  return e.forEach((r) => {
    var d;
    const i = typeof r == "string", a = typeof ((d = r == null ? void 0 : r.props) == null ? void 0 : d.children) == "string", l = i || a ? null : [], u = n.length;
    i ? n += r : a ? n += r.props.children : n += Nk(
      r.props.children.constructor === Object ? [r.props.children] : r.props.children,
      l
    );
    const c = n.length;
    t.push({
      type: i ? null : r.type,
      props: r == null ? void 0 : r.props,
      start: u,
      end: c,
      children: l
    });
  }), n;
}
const f5 = (e, t, { lines: n, whiteSpace: r, ellipsis: i }) => {
  const a = Tk * Number(n), l = Rk(t), u = [], c = typeof e == "string" ? e : Nk(e, u);
  let d = c, h = 1;
  t.append(l);
  const m = Va(c, !1, "", u);
  for (let x = 0; x < m.length; x++)
    l.appendChild(m[x]);
  let v = l.scrollHeight;
  if (a >= v)
    return l.parentNode.removeChild(l), [Va(d, !1, "", u), c];
  for (; v > a; ) {
    h -= c5, d = Ik(c, h);
    const x = Va(d, r, i, u);
    l.innerHTML = "";
    for (let b = 0; b < x.length; b++)
      l.appendChild(x[b]);
    v = l.scrollHeight;
  }
  return l.parentNode.removeChild(l), [Va(d, r, i, u), c];
};
var d5 = {
  cropText: Ik,
  truncateLines: f5,
  constructChildren: Va,
  createCopyElement: Rk
};
function h5() {
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
const p5 = 1, m5 = "...", v5 = "div";
function m0({
  children: e,
  lines: t,
  ellipsis: n,
  elementType: r,
  className: i,
  whiteSpace: a,
  onTruncate: l
}) {
  const u = y.useRef(), {
    width: c
  } = h5();
  return y.useLayoutEffect(() => {
    if (u.current) {
      const [d, h] = d5.truncateLines(e, u.current, {
        ellipsis: n,
        whiteSpace: a,
        lines: t
      });
      u.current.setAttribute("title", h), u.current.setAttribute("aria-label", h), u.current.innerHTML = "", d.forEach((m) => {
        u.current.appendChild(m);
      }), l && l(d);
    }
  }, [e, n, t, l, a, c]), /* @__PURE__ */ _.createElement(r, {
    ref: u,
    className: i
  });
}
m0.propTypes = {
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
m0.defaultProps = {
  lines: p5,
  ellipsis: m5,
  whiteSpace: !1,
  elementType: v5,
  className: void 0,
  onTruncate: void 0
};
function Ok() {
  return y.useEffect(() => {
    console.log("Please use Truncate.Deprecated until a replacement is created");
  }, []), null;
}
Ok.Deprecated = m0;
const g5 = ({
  title: e,
  subtitle: t,
  onTitleChange: n
}) => {
  const [r, i] = y.useState(!1), [a, l] = y.useState(e), u = () => {
    i(!0), l(e);
  }, c = () => {
    n && a.trim() && n(a.trim()), i(!1);
  }, d = () => {
    l(e), i(!1);
  }, h = (m) => {
    m.key === "Enter" ? c() : m.key === "Escape" && d();
  };
  return r ? /* @__PURE__ */ D.jsx("div", { className: "d-flex flex-row align-items-center mt-1", children: /* @__PURE__ */ D.jsx(
    "input",
    {
      type: "text",
      className: "form-control",
      value: a,
      onChange: (m) => l(m.target.value),
      onKeyDown: h,
      onBlur: c,
      autoFocus: !0
    }
  ) }) : /* @__PURE__ */ D.jsxs("div", { className: "d-flex flex-row align-items-center mt-1", children: [
    /* @__PURE__ */ D.jsx(Ok.Deprecated, { children: e }),
    t && /* @__PURE__ */ D.jsx("span", { className: "ml-2 text-gray-500", children: t }),
    n && /* @__PURE__ */ D.jsx(
      ys,
      {
        src: hU,
        iconAs: Ot,
        alt: "Edit title",
        onClick: u,
        size: "sm",
        className: "mx-2"
      }
    )
  ] });
}, y5 = ({
  title: e,
  subtitle: t,
  onClose: n,
  onTitleChange: r
}) => /* @__PURE__ */ D.jsx(bi.Header, { className: "shadow-sm zindex-10", children: /* @__PURE__ */ D.jsxs("div", { className: "d-flex flex-row justify-content-between", children: [
  /* @__PURE__ */ D.jsx("h2", { className: "h3 col pl-0", children: /* @__PURE__ */ D.jsx(
    g5,
    {
      title: e,
      subtitle: t,
      onTitleChange: r
    }
  ) }),
  /* @__PURE__ */ D.jsx(
    ys,
    {
      src: e0,
      iconAs: Ot,
      onClick: n,
      alt: "Close"
    }
  )
] }) }), E5 = ({
  viewMode: e,
  onSave: t,
  onCancel: n,
  saveDisabled: r = !1,
  onSavePair: i,
  onBackToList: a,
  savePairDisabled: l = !1,
  editingType: u
}) => /* @__PURE__ */ D.jsx(bi.Footer, { className: "shadow-sm", children: /* @__PURE__ */ D.jsx(Xo, { children: e === "list" ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  /* @__PURE__ */ D.jsx(ur, { variant: "tertiary", onClick: n, children: "Cancel" }),
  /* @__PURE__ */ D.jsx(ur, { onClick: t, disabled: r, children: "Save Changes" })
] }) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  /* @__PURE__ */ D.jsx(ur, { variant: "tertiary", onClick: a, children: "Back to List" }),
  /* @__PURE__ */ D.jsx(ur, { onClick: i, disabled: l, children: u === "bin" ? "Save Bin" : u === "item" ? "Save Item" : "Save" })
] }) }) }), x5 = ({
  mainContent: e,
  sidebar: t
}) => /* @__PURE__ */ D.jsxs("div", { className: "editProblemView d-flex flex-row flex-nowrap justify-content-end", children: [
  /* @__PURE__ */ D.jsx("span", { className: "flex-grow-1 mb-5", children: e }),
  /* @__PURE__ */ D.jsx("span", { className: "editProblemView-settingsColumn", children: t })
] });
function w5() {
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
const Rd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function xs(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function v0(e) {
  return "nodeType" in e;
}
function gn(e) {
  var t, n;
  return e ? xs(e) ? e : v0(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function g0(e) {
  const {
    Document: t
  } = gn(e);
  return e instanceof t;
}
function ou(e) {
  return xs(e) ? !1 : e instanceof gn(e).HTMLElement;
}
function Pk(e) {
  return e instanceof gn(e).SVGElement;
}
function ws(e) {
  return e ? xs(e) ? e.document : v0(e) ? g0(e) ? e : ou(e) || Pk(e) ? e.ownerDocument : document : document : document;
}
const Pr = Rd ? y.useLayoutEffect : y.useEffect;
function Id(e) {
  const t = y.useRef(e);
  return Pr(() => {
    t.current = e;
  }), y.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function C5() {
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
  return Pr(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function au(e, t) {
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
function Nf(e) {
  const t = Id(e), n = y.useRef(null), r = y.useCallback(
    (i) => {
      i !== n.current && (t == null || t(i, n.current)), n.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Of(e) {
  const t = y.useRef();
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let Bp = {};
function su(e, t) {
  return y.useMemo(() => {
    if (t)
      return t;
    const n = Bp[e] == null ? 0 : Bp[e] + 1;
    return Bp[e] = n, e + "-" + n;
  }, [e, t]);
}
function Dk(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return r.reduce((a, l) => {
      const u = Object.entries(l);
      for (const [c, d] of u) {
        const h = a[c];
        h != null && (a[c] = h + e * d);
      }
      return a;
    }, {
      ...t
    });
  };
}
const Ya = /* @__PURE__ */ Dk(1), jl = /* @__PURE__ */ Dk(-1);
function _5(e) {
  return "clientX" in e && "clientY" in e;
}
function Nd(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = gn(e.target);
  return t && e instanceof t;
}
function S5(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = gn(e.target);
  return t && e instanceof t;
}
function Pf(e) {
  if (S5(e)) {
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
  return _5(e) ? {
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
}), I1 = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function b5(e) {
  return e.matches(I1) ? e : e.querySelector(I1);
}
const k5 = {
  display: "none"
};
function A5(e) {
  let {
    id: t,
    value: n
  } = e;
  return _.createElement("div", {
    id: t,
    style: k5
  }, n);
}
function T5(e) {
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
function R5() {
  const [e, t] = y.useState("");
  return {
    announce: y.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Fk = /* @__PURE__ */ y.createContext(null);
function I5(e) {
  const t = y.useContext(Fk);
  y.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function N5() {
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
const O5 = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, P5 = {
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
function D5(e) {
  let {
    announcements: t = P5,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = O5
  } = e;
  const {
    announce: a,
    announcement: l
  } = R5(), u = su("DndLiveRegion"), [c, d] = y.useState(!1);
  if (y.useEffect(() => {
    d(!0);
  }, []), I5(y.useMemo(() => ({
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
  }), [a, t])), !c)
    return null;
  const h = _.createElement(_.Fragment, null, _.createElement(A5, {
    id: r,
    value: i.draggable
  }), _.createElement(T5, {
    id: u,
    announcement: l
  }));
  return n ? Gi.createPortal(h, n) : h;
}
var Rt;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Rt || (Rt = {}));
function Df() {
}
function N1(e, t) {
  return y.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function F5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return y.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Dr = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function M5(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function L5(e, t) {
  const n = Pf(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function B5(e, t) {
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
function H5(e, t) {
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
function O1(e) {
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
function Mk(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const V5 = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const i = O1(t), a = [];
  for (const l of r) {
    const {
      id: u
    } = l, c = n.get(u);
    if (c) {
      const d = O1(c), h = i.reduce((v, x, b) => v + M5(d[b], x), 0), m = Number((h / 4).toFixed(4));
      a.push({
        id: u,
        data: {
          droppableContainer: l,
          value: m
        }
      });
    }
  }
  return a.sort(B5);
};
function U5(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), l = i - r, u = a - n;
  if (r < i && n < a) {
    const c = t.width * t.height, d = e.width * e.height, h = l * u, m = h / (c + d - h);
    return Number(m.toFixed(4));
  }
  return 0;
}
const $5 = (e) => {
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
      const c = U5(u, t);
      c > 0 && i.push({
        id: l,
        data: {
          droppableContainer: a,
          value: c
        }
      });
    }
  }
  return i.sort(H5);
};
function z5(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Lk(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Dr;
}
function j5(e) {
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
const W5 = /* @__PURE__ */ j5(1);
function Bk(e) {
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
function G5(e, t, n) {
  const r = Bk(t);
  if (!r)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: l,
    y: u
  } = r, c = e.left - l - (1 - i) * parseFloat(n), d = e.top - u - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), h = i ? e.width / i : e.width, m = a ? e.height / a : e.height;
  return {
    width: h,
    height: m,
    top: d,
    right: c + h,
    bottom: d + m,
    left: c
  };
}
const X5 = {
  ignoreTransform: !1
};
function Cs(e, t) {
  t === void 0 && (t = X5);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: h
    } = gn(e).getComputedStyle(e);
    d && (n = G5(n, d, h));
  }
  const {
    top: r,
    left: i,
    width: a,
    height: l,
    bottom: u,
    right: c
  } = n;
  return {
    top: r,
    left: i,
    width: a,
    height: l,
    bottom: u,
    right: c
  };
}
function P1(e) {
  return Cs(e, {
    ignoreTransform: !0
  });
}
function q5(e) {
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
function K5(e, t) {
  return t === void 0 && (t = gn(e).getComputedStyle(e)), t.position === "fixed";
}
function Y5(e, t) {
  t === void 0 && (t = gn(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function Od(e, t) {
  const n = [];
  function r(i) {
    if (t != null && n.length >= t || !i)
      return n;
    if (g0(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return n.push(i.scrollingElement), n;
    if (!ou(i) || Pk(i) || n.includes(i))
      return n;
    const a = gn(e).getComputedStyle(i);
    return i !== e && Y5(i, a) && n.push(i), K5(i, a) ? n : r(i.parentNode);
  }
  return e ? r(e) : n;
}
function Hk(e) {
  const [t] = Od(e, 1);
  return t ?? null;
}
function Hp(e) {
  return !Rd || !e ? null : xs(e) ? e : v0(e) ? g0(e) || e === ws(e).scrollingElement ? window : ou(e) ? e : null : null;
}
function Vk(e) {
  return xs(e) ? e.scrollX : e.scrollLeft;
}
function Uk(e) {
  return xs(e) ? e.scrollY : e.scrollTop;
}
function sv(e) {
  return {
    x: Vk(e),
    y: Uk(e)
  };
}
var Ft;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ft || (Ft = {}));
function $k(e) {
  return !Rd || !e ? !1 : e === document.scrollingElement;
}
function zk(e) {
  const t = {
    x: 0,
    y: 0
  }, n = $k(e) ? {
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
const Q5 = {
  x: 0.2,
  y: 0.2
};
function Z5(e, t, n, r, i) {
  let {
    top: a,
    left: l,
    right: u,
    bottom: c
  } = n;
  r === void 0 && (r = 10), i === void 0 && (i = Q5);
  const {
    isTop: d,
    isBottom: h,
    isLeft: m,
    isRight: v
  } = zk(e), x = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, S = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !d && a <= t.top + S.height ? (x.y = Ft.Backward, b.y = r * Math.abs((t.top + S.height - a) / S.height)) : !h && c >= t.bottom - S.height && (x.y = Ft.Forward, b.y = r * Math.abs((t.bottom - S.height - c) / S.height)), !v && u >= t.right - S.width ? (x.x = Ft.Forward, b.x = r * Math.abs((t.right - S.width - u) / S.width)) : !m && l <= t.left + S.width && (x.x = Ft.Backward, b.x = r * Math.abs((t.left + S.width - l) / S.width)), {
    direction: x,
    speed: b
  };
}
function J5(e) {
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
function jk(e) {
  return e.reduce((t, n) => Ya(t, sv(n)), Dr);
}
function e8(e) {
  return e.reduce((t, n) => t + Vk(n), 0);
}
function t8(e) {
  return e.reduce((t, n) => t + Uk(n), 0);
}
function Wk(e, t) {
  if (t === void 0 && (t = Cs), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: i,
    right: a
  } = t(e);
  Hk(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const n8 = [["x", ["left", "right"], e8], ["y", ["top", "bottom"], t8]];
class y0 {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Od(n), i = jk(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, l, u] of n8)
      for (const c of l)
        Object.defineProperty(this, c, {
          get: () => {
            const d = u(r), h = i[a] - d;
            return this.rect[c] + h;
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
function r8(e) {
  const {
    EventTarget: t
  } = gn(e);
  return e instanceof t ? e : ws(e);
}
function Vp(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var ar;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ar || (ar = {}));
function D1(e) {
  e.preventDefault();
}
function i8(e) {
  e.stopPropagation();
}
var Me;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Me || (Me = {}));
const Gk = {
  start: [Me.Space, Me.Enter],
  cancel: [Me.Esc],
  end: [Me.Space, Me.Enter, Me.Tab]
}, o8 = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Me.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Me.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Me.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Me.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class E0 {
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
    r && Wk(r), n(Dr);
  }
  handleKeyDown(t) {
    if (Nd(t)) {
      const {
        active: n,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: a = Gk,
        coordinateGetter: l = o8,
        scrollBehavior: u = "smooth"
      } = i, {
        code: c
      } = t;
      if (a.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: d
      } = r.current, h = d ? {
        x: d.left,
        y: d.top
      } : Dr;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const m = l(t, {
        active: n,
        context: r.current,
        currentCoordinates: h
      });
      if (m) {
        const v = jl(m, h), x = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const S of b) {
          const R = t.code, {
            isTop: w,
            isRight: C,
            isLeft: A,
            isBottom: I,
            maxScroll: O,
            minScroll: F
          } = zk(S), L = J5(S), H = {
            x: Math.min(R === Me.Right ? L.right - L.width / 2 : L.right, Math.max(R === Me.Right ? L.left : L.left + L.width / 2, m.x)),
            y: Math.min(R === Me.Down ? L.bottom - L.height / 2 : L.bottom, Math.max(R === Me.Down ? L.top : L.top + L.height / 2, m.y))
          }, j = R === Me.Right && !C || R === Me.Left && !A, W = R === Me.Down && !I || R === Me.Up && !w;
          if (j && H.x !== m.x) {
            const K = S.scrollLeft + v.x, Q = R === Me.Right && K <= O.x || R === Me.Left && K >= F.x;
            if (Q && !v.y) {
              S.scrollTo({
                left: K,
                behavior: u
              });
              return;
            }
            Q ? x.x = S.scrollLeft - K : x.x = R === Me.Right ? S.scrollLeft - O.x : S.scrollLeft - F.x, x.x && S.scrollBy({
              left: -x.x,
              behavior: u
            });
            break;
          } else if (W && H.y !== m.y) {
            const K = S.scrollTop + v.y, Q = R === Me.Down && K <= O.y || R === Me.Up && K >= F.y;
            if (Q && !v.x) {
              S.scrollTo({
                top: K,
                behavior: u
              });
              return;
            }
            Q ? x.y = S.scrollTop - K : x.y = R === Me.Down ? S.scrollTop - O.y : S.scrollTop - F.y, x.y && S.scrollBy({
              top: -x.y,
              behavior: u
            });
            break;
          }
        }
        this.handleMove(t, Ya(jl(m, this.referenceCoordinates), x));
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
E0.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Gk,
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
function F1(e) {
  return !!(e && "distance" in e);
}
function M1(e) {
  return !!(e && "delay" in e);
}
class x0 {
  constructor(t, n, r) {
    var i;
    r === void 0 && (r = r8(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: l
    } = a;
    this.props = t, this.events = n, this.document = ws(l), this.documentListeners = new vl(this.document), this.listeners = new vl(r), this.windowListeners = new vl(gn(l)), this.initialCoordinates = (i = Pf(a)) != null ? i : Dr, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(ar.Resize, this.handleCancel), this.windowListeners.add(ar.DragStart, D1), this.windowListeners.add(ar.VisibilityChange, this.handleCancel), this.windowListeners.add(ar.ContextMenu, D1), this.documentListeners.add(ar.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (M1(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (F1(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(ar.Click, i8, {
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
    const c = (n = Pf(t)) != null ? n : Dr, d = jl(i, c);
    if (!r && u) {
      if (F1(u)) {
        if (u.tolerance != null && Vp(d, u.tolerance))
          return this.handleCancel();
        if (Vp(d, u.distance))
          return this.handleStart();
      }
      if (M1(u) && Vp(d, u.tolerance))
        return this.handleCancel();
      this.handlePending(u, d);
      return;
    }
    t.cancelable && t.preventDefault(), l(c);
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
    t.code === Me.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const a8 = {
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
class w0 extends x0 {
  constructor(t) {
    const {
      event: n
    } = t, r = ws(n.target);
    super(t, a8, r);
  }
}
w0.activators = [{
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
const s8 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var lv;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(lv || (lv = {}));
class l8 extends x0 {
  constructor(t) {
    super(t, s8, ws(t.event.target));
  }
}
l8.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === lv.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Up = {
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
class u8 extends x0 {
  constructor(t) {
    super(t, Up);
  }
  static setup() {
    return window.addEventListener(Up.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Up.move.name, t);
    };
    function t() {
    }
  }
}
u8.activators = [{
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
var Ff;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ff || (Ff = {}));
function c8(e) {
  let {
    acceleration: t,
    activator: n = gl.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: a,
    interval: l = 5,
    order: u = Ff.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: d,
    scrollableAncestorRects: h,
    delta: m,
    threshold: v
  } = e;
  const x = d8({
    delta: m,
    disabled: !a
  }), [b, S] = C5(), R = y.useRef({
    x: 0,
    y: 0
  }), w = y.useRef({
    x: 0,
    y: 0
  }), C = y.useMemo(() => {
    switch (n) {
      case gl.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case gl.DraggableRect:
        return i;
    }
  }, [n, i, c]), A = y.useRef(null), I = y.useCallback(() => {
    const F = A.current;
    if (!F)
      return;
    const L = R.current.x * w.current.x, H = R.current.y * w.current.y;
    F.scrollBy(L, H);
  }, []), O = y.useMemo(() => u === Ff.TreeOrder ? [...d].reverse() : d, [u, d]);
  y.useEffect(
    () => {
      if (!a || !d.length || !C) {
        S();
        return;
      }
      for (const F of O) {
        if ((r == null ? void 0 : r(F)) === !1)
          continue;
        const L = d.indexOf(F), H = h[L];
        if (!H)
          continue;
        const {
          direction: j,
          speed: W
        } = Z5(F, H, C, t, v);
        for (const K of ["x", "y"])
          x[K][j[K]] || (W[K] = 0, j[K] = 0);
        if (W.x > 0 || W.y > 0) {
          S(), A.current = F, b(I, l), R.current = W, w.current = j;
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
      b,
      d,
      O,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const f8 = {
  x: {
    [Ft.Backward]: !1,
    [Ft.Forward]: !1
  },
  y: {
    [Ft.Backward]: !1,
    [Ft.Forward]: !1
  }
};
function d8(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Of(t);
  return au((i) => {
    if (n || !r || !i)
      return f8;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ft.Backward]: i.x[Ft.Backward] || a.x === -1,
        [Ft.Forward]: i.x[Ft.Forward] || a.x === 1
      },
      y: {
        [Ft.Backward]: i.y[Ft.Backward] || a.y === -1,
        [Ft.Forward]: i.y[Ft.Forward] || a.y === 1
      }
    };
  }, [n, t, r]);
}
function h8(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return au((i) => {
    var a;
    return t == null ? null : (a = r ?? i) != null ? a : null;
  }, [r, t]);
}
function p8(e, t) {
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
var Wl;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Wl || (Wl = {}));
var uv;
(function(e) {
  e.Optimized = "optimized";
})(uv || (uv = {}));
const L1 = /* @__PURE__ */ new Map();
function m8(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: i
  } = t;
  const [a, l] = y.useState(null), {
    frequency: u,
    measure: c,
    strategy: d
  } = i, h = y.useRef(e), m = R(), v = zl(m), x = y.useCallback(function(w) {
    w === void 0 && (w = []), !v.current && l((C) => C === null ? w : C.concat(w.filter((A) => !C.includes(A))));
  }, [v]), b = y.useRef(null), S = au((w) => {
    if (m && !n)
      return L1;
    if (!w || w === L1 || h.current !== e || a != null) {
      const C = /* @__PURE__ */ new Map();
      for (let A of e) {
        if (!A)
          continue;
        if (a && a.length > 0 && !a.includes(A.id) && A.rect.current) {
          C.set(A.id, A.rect.current);
          continue;
        }
        const I = A.node.current, O = I ? new y0(c(I), I) : null;
        A.rect.current = O, O && C.set(A.id, O);
      }
      return C;
    }
    return w;
  }, [e, a, n, m, c]);
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
      m || typeof u != "number" || b.current !== null || (b.current = setTimeout(() => {
        x(), b.current = null;
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
      case Wl.Always:
        return !1;
      case Wl.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function C0(e, t) {
  return au((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function v8(e, t) {
  return C0(e, t);
}
function g8(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Id(t), i = y.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, n]);
  return y.useEffect(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function Pd(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Id(t), i = y.useMemo(
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
function y8(e) {
  return new y0(Cs(e), e);
}
function B1(e, t, n) {
  t === void 0 && (t = y8);
  const [r, i] = y.useState(null);
  function a() {
    i((c) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var d;
        return (d = c ?? n) != null ? d : null;
      }
      const h = t(e);
      return JSON.stringify(c) === JSON.stringify(h) ? c : h;
    });
  }
  const l = g8({
    callback(c) {
      if (e)
        for (const d of c) {
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
  }), u = Pd({
    callback: a
  });
  return Pr(() => {
    a(), e ? (u == null || u.observe(e), l == null || l.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (u == null || u.disconnect(), l == null || l.disconnect());
  }, [e]), r;
}
function E8(e) {
  const t = C0(e);
  return Lk(e, t);
}
const H1 = [];
function x8(e) {
  const t = y.useRef(e), n = au((r) => e ? r && r !== H1 && e && t.current && e.parentNode === t.current.parentNode ? r : Od(e) : H1, [e]);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function w8(e) {
  const [t, n] = y.useState(null), r = y.useRef(e), i = y.useCallback((a) => {
    const l = Hp(a.target);
    l && n((u) => u ? (u.set(l, sv(l)), new Map(u)) : null);
  }, []);
  return y.useEffect(() => {
    const a = r.current;
    if (e !== a) {
      l(a);
      const u = e.map((c) => {
        const d = Hp(c);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, sv(d)]) : null;
      }).filter((c) => c != null);
      n(u.length ? new Map(u) : null), r.current = e;
    }
    return () => {
      l(e), l(a);
    };
    function l(u) {
      u.forEach((c) => {
        const d = Hp(c);
        d == null || d.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), y.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((a, l) => Ya(a, l), Dr) : jk(e) : Dr, [e, t]);
}
function V1(e, t) {
  t === void 0 && (t = []);
  const n = y.useRef(null);
  return y.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), y.useEffect(() => {
    const r = e !== Dr;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? jl(e, n.current) : Dr;
}
function C8(e) {
  y.useEffect(
    () => {
      if (!Rd)
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
function _8(e, t) {
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
function Xk(e) {
  return y.useMemo(() => e ? q5(e) : null, [e]);
}
const U1 = [];
function S8(e, t) {
  t === void 0 && (t = Cs);
  const [n] = e, r = Xk(n ? gn(n) : null), [i, a] = y.useState(U1);
  function l() {
    a(() => e.length ? e.map((c) => $k(c) ? r : new y0(t(c), c)) : U1);
  }
  const u = Pd({
    callback: l
  });
  return Pr(() => {
    u == null || u.disconnect(), l(), e.forEach((c) => u == null ? void 0 : u.observe(c));
  }, [e]), i;
}
function qk(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ou(t) ? t : e;
}
function b8(e) {
  let {
    measure: t
  } = e;
  const [n, r] = y.useState(null), i = y.useCallback((d) => {
    for (const {
      target: h
    } of d)
      if (ou(h)) {
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
  }, [t]), a = Pd({
    callback: i
  }), l = y.useCallback((d) => {
    const h = qk(d);
    a == null || a.disconnect(), h && (a == null || a.observe(h)), r(h ? t(h) : null);
  }, [t, a]), [u, c] = Nf(l);
  return y.useMemo(() => ({
    nodeRef: u,
    rect: n,
    setRef: c
  }), [n, u, c]);
}
const k8 = [{
  sensor: w0,
  options: {}
}, {
  sensor: E0,
  options: {}
}], A8 = {
  current: {}
}, qc = {
  draggable: {
    measure: P1
  },
  droppable: {
    measure: P1,
    strategy: Wl.WhileDragging,
    frequency: uv.Optimized
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
const T8 = {
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
    setRef: Df
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: qc,
  measureDroppableContainers: Df,
  windowRect: null,
  measuringScheduled: !1
}, Kk = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Df,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Df
}, lu = /* @__PURE__ */ y.createContext(Kk), Yk = /* @__PURE__ */ y.createContext(T8);
function R8() {
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
function I8(e, t) {
  switch (t.type) {
    case Rt.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Rt.DragMove:
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
    case Rt.DragEnd:
    case Rt.DragCancel:
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
    case Rt.RegisterDroppable: {
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
    case Rt.SetDroppableDisabled: {
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
    case Rt.UnregisterDroppable: {
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
function N8(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: i
  } = y.useContext(lu), a = Of(r), l = Of(n == null ? void 0 : n.id);
  return y.useEffect(() => {
    if (!t && !r && a && l != null) {
      if (!Nd(a) || document.activeElement === a.target)
        return;
      const u = i.get(l);
      if (!u)
        return;
      const {
        activatorNode: c,
        node: d
      } = u;
      if (!c.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const h of [c.current, d.current]) {
          if (!h)
            continue;
          const m = b5(h);
          if (m) {
            m.focus();
            break;
          }
        }
      });
    }
  }, [r, t, i, l, a]), null;
}
function Qk(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...r
  }), n) : n;
}
function O8(e) {
  return y.useMemo(
    () => ({
      draggable: {
        ...qc.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...qc.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...qc.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function P8(e) {
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
  Pr(() => {
    if (!l && !u || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const h = n(d), m = Lk(h, r);
    if (l || (m.x = 0), u || (m.y = 0), a.current = !0, Math.abs(m.x) > 0 || Math.abs(m.y) > 0) {
      const v = Hk(d);
      v && v.scrollBy({
        top: m.y,
        left: m.x
      });
    }
  }, [t, l, u, r, n]);
}
const Dd = /* @__PURE__ */ y.createContext({
  ...Dr,
  scaleX: 1,
  scaleY: 1
});
var Vi;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Vi || (Vi = {}));
const D8 = /* @__PURE__ */ y.memo(function(t) {
  var n, r, i, a;
  let {
    id: l,
    accessibility: u,
    autoScroll: c = !0,
    children: d,
    sensors: h = k8,
    collisionDetection: m = $5,
    measuring: v,
    modifiers: x,
    ...b
  } = t;
  const S = y.useReducer(I8, void 0, R8), [R, w] = S, [C, A] = N5(), [I, O] = y.useState(Vi.Uninitialized), F = I === Vi.Initialized, {
    draggable: {
      active: L,
      nodes: H,
      translate: j
    },
    droppable: {
      containers: W
    }
  } = R, K = L != null ? H.get(L) : null, Q = y.useRef({
    initial: null,
    translated: null
  }), ie = y.useMemo(() => {
    var St;
    return L != null ? {
      id: L,
      // It's possible for the active node to unmount while dragging
      data: (St = K == null ? void 0 : K.data) != null ? St : A8,
      rect: Q
    } : null;
  }, [L, K]), Ee = y.useRef(null), [we, Ce] = y.useState(null), [te, G] = y.useState(null), Y = zl(b, Object.values(b)), J = su("DndDescribedBy", l), se = y.useMemo(() => W.getEnabled(), [W]), ne = O8(v), {
    droppableRects: Ze,
    measureDroppableContainers: Ve,
    measuringScheduled: He
  } = m8(se, {
    dragging: F,
    dependencies: [j.x, j.y],
    config: ne.droppable
  }), Re = h8(H, L), mt = y.useMemo(() => te ? Pf(te) : null, [te]), Ke = fu(), Ye = v8(Re, ne.draggable.measure);
  P8({
    activeNode: L != null ? H.get(L) : null,
    config: Ke.layoutShiftCompensation,
    initialRect: Ye,
    measure: ne.draggable.measure
  });
  const Ae = B1(Re, ne.draggable.measure, Ye), vt = B1(Re ? Re.parentElement : null), rt = y.useRef({
    activatorEvent: null,
    active: null,
    activeNode: Re,
    collisionRect: null,
    collisions: null,
    droppableRects: Ze,
    draggableNodes: H,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: W,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ve = W.getNodeFor((n = rt.current.over) == null ? void 0 : n.id), de = b8({
    measure: ne.dragOverlay.measure
  }), Ue = (r = de.nodeRef.current) != null ? r : Re, Qe = F ? (i = de.rect) != null ? i : Ae : null, _e = !!(de.nodeRef.current && de.rect), Je = E8(_e ? null : Ae), We = Xk(Ue ? gn(Ue) : null), Oe = x8(F ? ve ?? Re : null), it = S8(Oe), tn = Qk(x, {
    transform: {
      x: j.x - Je.x,
      y: j.y - Je.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: ie,
    activeNodeRect: Ae,
    containerNodeRect: vt,
    draggingNodeRect: Qe,
    over: rt.current.over,
    overlayNodeRect: de.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: it,
    windowRect: We
  }), Nn = mt ? Ya(mt, j) : null, Lr = w8(Oe), Br = V1(Lr), ta = V1(Lr, [Ae]), nn = Ya(tn, Br), jt = Qe ? W5(Qe, tn) : null, ti = ie && jt ? m({
    active: ie,
    collisionRect: jt,
    droppableRects: Ze,
    droppableContainers: se,
    pointerCoordinates: Nn
  }) : null, na = Mk(ti, "id"), [qn, ra] = y.useState(null), _s = _e ? tn : Ya(tn, ta), Ss = z5(_s, (a = qn == null ? void 0 : qn.rect) != null ? a : null, Ae), ho = y.useRef(null), ia = y.useCallback(
    (St, rn) => {
      let {
        sensor: on,
        options: Hr
      } = rn;
      if (Ee.current == null)
        return;
      const yn = H.get(Ee.current);
      if (!yn)
        return;
      const Wt = St.nativeEvent, Kn = new on({
        active: Ee.current,
        activeNode: yn,
        event: Wt,
        options: Hr,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: rt,
        onAbort(bt) {
          if (!H.get(bt))
            return;
          const {
            onDragAbort: Qn
          } = Y.current, On = {
            id: bt
          };
          Qn == null || Qn(On), C({
            type: "onDragAbort",
            event: On
          });
        },
        onPending(bt, Yn, Qn, On) {
          if (!H.get(bt))
            return;
          const {
            onDragPending: mo
          } = Y.current, Vr = {
            id: bt,
            constraint: Yn,
            initialCoordinates: Qn,
            offset: On
          };
          mo == null || mo(Vr), C({
            type: "onDragPending",
            event: Vr
          });
        },
        onStart(bt) {
          const Yn = Ee.current;
          if (Yn == null)
            return;
          const Qn = H.get(Yn);
          if (!Qn)
            return;
          const {
            onDragStart: On
          } = Y.current, po = {
            activatorEvent: Wt,
            active: {
              id: Yn,
              data: Qn.data,
              rect: Q
            }
          };
          Gi.unstable_batchedUpdates(() => {
            On == null || On(po), O(Vi.Initializing), w({
              type: Rt.DragStart,
              initialCoordinates: bt,
              active: Yn
            }), C({
              type: "onDragStart",
              event: po
            }), Ce(ho.current), G(Wt);
          });
        },
        onMove(bt) {
          w({
            type: Rt.DragMove,
            coordinates: bt
          });
        },
        onEnd: ki(Rt.DragEnd),
        onCancel: ki(Rt.DragCancel)
      });
      ho.current = Kn;
      function ki(bt) {
        return async function() {
          const {
            active: Qn,
            collisions: On,
            over: po,
            scrollAdjustedTranslate: mo
          } = rt.current;
          let Vr = null;
          if (Qn && mo) {
            const {
              cancelDrop: vo
            } = Y.current;
            Vr = {
              activatorEvent: Wt,
              active: Qn,
              collisions: On,
              delta: mo,
              over: po
            }, bt === Rt.DragEnd && typeof vo == "function" && await Promise.resolve(vo(Vr)) && (bt = Rt.DragCancel);
          }
          Ee.current = null, Gi.unstable_batchedUpdates(() => {
            w({
              type: bt
            }), O(Vi.Uninitialized), ra(null), Ce(null), G(null), ho.current = null;
            const vo = bt === Rt.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Vr) {
              const ks = Y.current[vo];
              ks == null || ks(Vr), C({
                type: vo,
                event: Vr
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [H]
  ), bs = y.useCallback((St, rn) => (on, Hr) => {
    const yn = on.nativeEvent, Wt = H.get(Hr);
    if (
      // Another sensor is already instantiating
      Ee.current !== null || // No active draggable
      !Wt || // Event has already been captured
      yn.dndKit || yn.defaultPrevented
    )
      return;
    const Kn = {
      active: Wt
    };
    St(on, rn.options, Kn) === !0 && (yn.dndKit = {
      capturedBy: rn.sensor
    }, Ee.current = Hr, ia(on, rn));
  }, [H, ia]), cu = p8(h, bs);
  C8(h), Pr(() => {
    Ae && I === Vi.Initializing && O(Vi.Initialized);
  }, [Ae, I]), y.useEffect(
    () => {
      const {
        onDragMove: St
      } = Y.current, {
        active: rn,
        activatorEvent: on,
        collisions: Hr,
        over: yn
      } = rt.current;
      if (!rn || !on)
        return;
      const Wt = {
        active: rn,
        activatorEvent: on,
        collisions: Hr,
        delta: {
          x: nn.x,
          y: nn.y
        },
        over: yn
      };
      Gi.unstable_batchedUpdates(() => {
        St == null || St(Wt), C({
          type: "onDragMove",
          event: Wt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nn.x, nn.y]
  ), y.useEffect(
    () => {
      const {
        active: St,
        activatorEvent: rn,
        collisions: on,
        droppableContainers: Hr,
        scrollAdjustedTranslate: yn
      } = rt.current;
      if (!St || Ee.current == null || !rn || !yn)
        return;
      const {
        onDragOver: Wt
      } = Y.current, Kn = Hr.get(na), ki = Kn && Kn.rect.current ? {
        id: Kn.id,
        rect: Kn.rect.current,
        data: Kn.data,
        disabled: Kn.disabled
      } : null, bt = {
        active: St,
        activatorEvent: rn,
        collisions: on,
        delta: {
          x: yn.x,
          y: yn.y
        },
        over: ki
      };
      Gi.unstable_batchedUpdates(() => {
        ra(ki), Wt == null || Wt(bt), C({
          type: "onDragOver",
          event: bt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [na]
  ), Pr(() => {
    rt.current = {
      activatorEvent: te,
      active: ie,
      activeNode: Re,
      collisionRect: jt,
      collisions: ti,
      droppableRects: Ze,
      draggableNodes: H,
      draggingNode: Ue,
      draggingNodeRect: Qe,
      droppableContainers: W,
      over: qn,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: nn
    }, Q.current = {
      initial: Qe,
      translated: jt
    };
  }, [ie, Re, ti, jt, H, Ue, Qe, Ze, W, qn, Oe, nn]), c8({
    ...Ke,
    delta: j,
    draggingRect: jt,
    pointerCoordinates: Nn,
    scrollableAncestors: Oe,
    scrollableAncestorRects: it
  });
  const Fd = y.useMemo(() => ({
    active: ie,
    activeNode: Re,
    activeNodeRect: Ae,
    activatorEvent: te,
    collisions: ti,
    containerNodeRect: vt,
    dragOverlay: de,
    draggableNodes: H,
    droppableContainers: W,
    droppableRects: Ze,
    over: qn,
    measureDroppableContainers: Ve,
    scrollableAncestors: Oe,
    scrollableAncestorRects: it,
    measuringConfiguration: ne,
    measuringScheduled: He,
    windowRect: We
  }), [ie, Re, Ae, te, ti, vt, de, H, W, Ze, qn, Ve, Oe, it, ne, He, We]), Md = y.useMemo(() => ({
    activatorEvent: te,
    activators: cu,
    active: ie,
    activeNodeRect: Ae,
    ariaDescribedById: {
      draggable: J
    },
    dispatch: w,
    draggableNodes: H,
    over: qn,
    measureDroppableContainers: Ve
  }), [te, cu, ie, Ae, w, J, H, qn, Ve]);
  return _.createElement(Fk.Provider, {
    value: A
  }, _.createElement(lu.Provider, {
    value: Md
  }, _.createElement(Yk.Provider, {
    value: Fd
  }, _.createElement(Dd.Provider, {
    value: Ss
  }, d)), _.createElement(N8, {
    disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), _.createElement(D5, {
    ...u,
    hiddenTextDescribedById: J
  }));
  function fu() {
    const St = (we == null ? void 0 : we.autoScrollEnabled) === !1, rn = typeof c == "object" ? c.enabled === !1 : c === !1, on = F && !St && !rn;
    return typeof c == "object" ? {
      ...c,
      enabled: on
    } : {
      enabled: on
    };
  }
}), F8 = /* @__PURE__ */ y.createContext(null), $1 = "button", M8 = "Draggable";
function L8(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: i
  } = e;
  const a = su(M8), {
    activators: l,
    activatorEvent: u,
    active: c,
    activeNodeRect: d,
    ariaDescribedById: h,
    draggableNodes: m,
    over: v
  } = y.useContext(lu), {
    role: x = $1,
    roleDescription: b = "draggable",
    tabIndex: S = 0
  } = i ?? {}, R = (c == null ? void 0 : c.id) === t, w = y.useContext(R ? Dd : F8), [C, A] = Nf(), [I, O] = Nf(), F = _8(l, t), L = zl(n);
  Pr(
    () => (m.set(t, {
      id: t,
      key: a,
      node: C,
      activatorNode: I,
      data: L
    }), () => {
      const j = m.get(t);
      j && j.key === a && m.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, t]
  );
  const H = y.useMemo(() => ({
    role: x,
    tabIndex: S,
    "aria-disabled": r,
    "aria-pressed": R && x === $1 ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": h.draggable
  }), [r, x, S, R, b, h.draggable]);
  return {
    active: c,
    activatorEvent: u,
    activeNodeRect: d,
    attributes: H,
    isDragging: R,
    listeners: r ? void 0 : F,
    node: C,
    over: v,
    setNodeRef: A,
    setActivatorNodeRef: O,
    transform: w
  };
}
function Zk() {
  return y.useContext(Yk);
}
const B8 = "Droppable", H8 = {
  timeout: 25
};
function V8(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: i
  } = e;
  const a = su(B8), {
    active: l,
    dispatch: u,
    over: c,
    measureDroppableContainers: d
  } = y.useContext(lu), h = y.useRef({
    disabled: n
  }), m = y.useRef(!1), v = y.useRef(null), x = y.useRef(null), {
    disabled: b,
    updateMeasurementsFor: S,
    timeout: R
  } = {
    ...H8,
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
  ), A = Pd({
    callback: C,
    disabled: b || !l
  }), I = y.useCallback((H, j) => {
    A && (j && (A.unobserve(j), m.current = !1), H && A.observe(H));
  }, [A]), [O, F] = Nf(I), L = zl(t);
  return y.useEffect(() => {
    !A || !O.current || (A.disconnect(), m.current = !1, A.observe(O.current));
  }, [O, A]), y.useEffect(
    () => (u({
      type: Rt.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: n,
        node: O,
        rect: v,
        data: L
      }
    }), () => u({
      type: Rt.UnregisterDroppable,
      key: a,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), y.useEffect(() => {
    n !== h.current.disabled && (u({
      type: Rt.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: n
    }), h.current.disabled = n);
  }, [r, a, n, u]), {
    active: l,
    rect: v,
    isOver: (c == null ? void 0 : c.id) === r,
    node: O,
    over: c,
    setNodeRef: F
  };
}
function U8(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, i] = y.useState(null), [a, l] = y.useState(null), u = Of(n);
  return !n && !r && u && i(u), Pr(() => {
    if (!a)
      return;
    const c = r == null ? void 0 : r.key, d = r == null ? void 0 : r.props.id;
    if (c == null || d == null) {
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
const $8 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function z8(e) {
  let {
    children: t
  } = e;
  return _.createElement(lu.Provider, {
    value: Kk
  }, _.createElement(Dd.Provider, {
    value: $8
  }, t));
}
const j8 = {
  position: "fixed",
  touchAction: "none"
}, W8 = (e) => Nd(e) ? "transform 250ms ease" : void 0, G8 = /* @__PURE__ */ y.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: i,
    children: a,
    className: l,
    rect: u,
    style: c,
    transform: d,
    transition: h = W8
  } = e;
  if (!u)
    return null;
  const m = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...j8,
    width: u.width,
    height: u.height,
    top: u.top,
    left: u.left,
    transform: ao.Transform.toString(m),
    transformOrigin: i && r ? L5(r, u) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...c
  };
  return _.createElement(n, {
    className: l,
    style: v,
    ref: t
  }, a);
}), X8 = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const i = {}, {
    styles: a,
    className: l
  } = e;
  if (a != null && a.active)
    for (const [u, c] of Object.entries(a.active))
      c !== void 0 && (i[u] = n.node.style.getPropertyValue(u), n.node.style.setProperty(u, c));
  if (a != null && a.dragOverlay)
    for (const [u, c] of Object.entries(a.dragOverlay))
      c !== void 0 && r.node.style.setProperty(u, c);
  return l != null && l.active && n.node.classList.add(l.active), l != null && l.dragOverlay && r.node.classList.add(l.dragOverlay), function() {
    for (const [c, d] of Object.entries(i))
      n.node.style.setProperty(c, d);
    l != null && l.active && n.node.classList.remove(l.active);
  };
}, q8 = (e) => {
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
}, K8 = {
  duration: 250,
  easing: "ease",
  keyframes: q8,
  sideEffects: /* @__PURE__ */ X8({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Y8(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: i
  } = e;
  return Id((a, l) => {
    if (t === null)
      return;
    const u = n.get(a);
    if (!u)
      return;
    const c = u.node.current;
    if (!c)
      return;
    const d = qk(l);
    if (!d)
      return;
    const {
      transform: h
    } = gn(l).getComputedStyle(l), m = Bk(h);
    if (!m)
      return;
    const v = typeof t == "function" ? t : Q8(t);
    return Wk(c, i.draggable.measure), v({
      active: {
        id: a,
        data: u.data,
        node: c,
        rect: i.draggable.measure(c)
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
function Q8(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: i
  } = {
    ...K8,
    ...e
  };
  return (a) => {
    let {
      active: l,
      dragOverlay: u,
      transform: c,
      ...d
    } = a;
    if (!t)
      return;
    const h = {
      x: u.rect.left - l.rect.left,
      y: u.rect.top - l.rect.top
    }, m = {
      scaleX: c.scaleX !== 1 ? l.rect.width * c.scaleX / u.rect.width : 1,
      scaleY: c.scaleY !== 1 ? l.rect.height * c.scaleY / u.rect.height : 1
    }, v = {
      x: c.x - h.x,
      y: c.y - h.y,
      ...m
    }, x = i({
      ...d,
      active: l,
      dragOverlay: u,
      transform: {
        initial: c,
        final: v
      }
    }), [b] = x, S = x[x.length - 1];
    if (JSON.stringify(b) === JSON.stringify(S))
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
let z1 = 0;
function Z8(e) {
  return y.useMemo(() => {
    if (e != null)
      return z1++, z1;
  }, [e]);
}
const J8 = /* @__PURE__ */ _.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: i,
    transition: a,
    modifiers: l,
    wrapperElement: u = "div",
    className: c,
    zIndex: d = 999
  } = e;
  const {
    activatorEvent: h,
    active: m,
    activeNodeRect: v,
    containerNodeRect: x,
    draggableNodes: b,
    droppableContainers: S,
    dragOverlay: R,
    over: w,
    measuringConfiguration: C,
    scrollableAncestors: A,
    scrollableAncestorRects: I,
    windowRect: O
  } = Zk(), F = y.useContext(Dd), L = Z8(m == null ? void 0 : m.id), H = Qk(l, {
    activatorEvent: h,
    active: m,
    activeNodeRect: v,
    containerNodeRect: x,
    draggingNodeRect: R.rect,
    over: w,
    overlayNodeRect: R.rect,
    scrollableAncestors: A,
    scrollableAncestorRects: I,
    transform: F,
    windowRect: O
  }), j = C0(v), W = Y8({
    config: r,
    draggableNodes: b,
    droppableContainers: S,
    measuringConfiguration: C
  }), K = j ? R.setRef : void 0;
  return _.createElement(z8, null, _.createElement(U8, {
    animation: W
  }, m && L ? _.createElement(G8, {
    key: L,
    id: m.id,
    ref: K,
    as: u,
    activatorEvent: h,
    adjustScale: t,
    className: c,
    transition: a,
    rect: j,
    style: {
      zIndex: d,
      ...i
    },
    transform: H
  }, n) : null));
});
function _0(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function e6(e, t) {
  return e.reduce((n, r, i) => {
    const a = t.get(r);
    return a && (n[i] = a), n;
  }, Array(e.length));
}
function Ac(e) {
  return e !== null && e >= 0;
}
function t6(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function n6(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Jk = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: i
  } = e;
  const a = _0(t, r, n), l = t[i], u = a[i];
  return !u || !l ? null : {
    x: u.left - l.left,
    y: u.top - l.top,
    scaleX: u.width / l.width,
    scaleY: u.height / l.height
  };
}, Tc = {
  scaleX: 1,
  scaleY: 1
}, r6 = (e) => {
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
      ...Tc
    } : null;
  }
  const c = i6(a, i, n);
  return i > n && i <= l ? {
    x: 0,
    y: -u.height - c,
    ...Tc
  } : i < n && i >= l ? {
    x: 0,
    y: u.height + c,
    ...Tc
  } : {
    x: 0,
    y: 0,
    ...Tc
  };
};
function i6(e, t, n) {
  const r = e[t], i = e[t - 1], a = e[t + 1];
  return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
const eA = "Sortable", tA = /* @__PURE__ */ _.createContext({
  activeIndex: -1,
  containerId: eA,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Jk,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function o6(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: i = Jk,
    disabled: a = !1
  } = e;
  const {
    active: l,
    dragOverlay: u,
    droppableRects: c,
    over: d,
    measureDroppableContainers: h
  } = Zk(), m = su(eA, n), v = u.rect !== null, x = y.useMemo(() => r.map((F) => typeof F == "object" && "id" in F ? F.id : F), [r]), b = l != null, S = l ? x.indexOf(l.id) : -1, R = d ? x.indexOf(d.id) : -1, w = y.useRef(x), C = !t6(x, w.current), A = R !== -1 && S === -1 || C, I = n6(a);
  Pr(() => {
    C && b && h(x);
  }, [C, x, b, h]), y.useEffect(() => {
    w.current = x;
  }, [x]);
  const O = y.useMemo(
    () => ({
      activeIndex: S,
      containerId: m,
      disabled: I,
      disableTransforms: A,
      items: x,
      overIndex: R,
      useDragOverlay: v,
      sortedRects: e6(x, c),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S, m, I.draggable, I.droppable, A, x, R, c, v, i]
  );
  return _.createElement(tA.Provider, {
    value: O
  }, t);
}
const a6 = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: i
  } = e;
  return _0(n, r, i).indexOf(t);
}, s6 = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: i,
    items: a,
    newIndex: l,
    previousItems: u,
    previousContainerId: c,
    transition: d
  } = e;
  return !d || !r || u !== a && i === l ? !1 : n ? !0 : l !== i && t === c;
}, l6 = {
  duration: 200,
  easing: "ease"
}, nA = "transform", u6 = /* @__PURE__ */ ao.Transition.toString({
  property: nA,
  duration: 0,
  easing: "linear"
}), c6 = {
  roleDescription: "sortable"
};
function f6(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: i
  } = e;
  const [a, l] = y.useState(null), u = y.useRef(n);
  return Pr(() => {
    if (!t && n !== u.current && r.current) {
      const c = i.current;
      if (c) {
        const d = Cs(r.current, {
          ignoreTransform: !0
        }), h = {
          x: c.left - d.left,
          y: c.top - d.top,
          scaleX: c.width / d.width,
          scaleY: c.height / d.height
        };
        (h.x || h.y) && l(h);
      }
    }
    n !== u.current && (u.current = n);
  }, [t, n, r, i]), y.useEffect(() => {
    a && l(null);
  }, [a]), a;
}
function d6(e) {
  let {
    animateLayoutChanges: t = s6,
    attributes: n,
    disabled: r,
    data: i,
    getNewIndex: a = a6,
    id: l,
    strategy: u,
    resizeObserverConfig: c,
    transition: d = l6
  } = e;
  const {
    items: h,
    containerId: m,
    activeIndex: v,
    disabled: x,
    disableTransforms: b,
    sortedRects: S,
    overIndex: R,
    useDragOverlay: w,
    strategy: C
  } = y.useContext(tA), A = h6(r, x), I = h.indexOf(l), O = y.useMemo(() => ({
    sortable: {
      containerId: m,
      index: I,
      items: h
    },
    ...i
  }), [m, i, I, h]), F = y.useMemo(() => h.slice(h.indexOf(l)), [h, l]), {
    rect: L,
    node: H,
    isOver: j,
    setNodeRef: W
  } = V8({
    id: l,
    data: O,
    disabled: A.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: F,
      ...c
    }
  }), {
    active: K,
    activatorEvent: Q,
    activeNodeRect: ie,
    attributes: Ee,
    setNodeRef: we,
    listeners: Ce,
    isDragging: te,
    over: G,
    setActivatorNodeRef: Y,
    transform: J
  } = L8({
    id: l,
    data: O,
    attributes: {
      ...c6,
      ...n
    },
    disabled: A.draggable
  }), se = w5(W, we), ne = !!K, Ze = ne && !b && Ac(v) && Ac(R), Ve = !w && te, He = Ve && Ze ? J : null, mt = Ze ? He ?? (u ?? C)({
    rects: S,
    activeNodeRect: ie,
    activeIndex: v,
    overIndex: R,
    index: I
  }) : null, Ke = Ac(v) && Ac(R) ? a({
    id: l,
    items: h,
    activeIndex: v,
    overIndex: R
  }) : I, Ye = K == null ? void 0 : K.id, Ae = y.useRef({
    activeId: Ye,
    items: h,
    newIndex: Ke,
    containerId: m
  }), vt = h !== Ae.current.items, rt = t({
    active: K,
    containerId: m,
    isDragging: te,
    isSorting: ne,
    id: l,
    index: I,
    items: h,
    newIndex: Ae.current.newIndex,
    previousItems: Ae.current.items,
    previousContainerId: Ae.current.containerId,
    transition: d,
    wasDragging: Ae.current.activeId != null
  }), ve = f6({
    disabled: !rt,
    index: I,
    node: H,
    rect: L
  });
  return y.useEffect(() => {
    ne && Ae.current.newIndex !== Ke && (Ae.current.newIndex = Ke), m !== Ae.current.containerId && (Ae.current.containerId = m), h !== Ae.current.items && (Ae.current.items = h);
  }, [ne, Ke, m, h]), y.useEffect(() => {
    if (Ye === Ae.current.activeId)
      return;
    if (Ye != null && Ae.current.activeId == null) {
      Ae.current.activeId = Ye;
      return;
    }
    const Ue = setTimeout(() => {
      Ae.current.activeId = Ye;
    }, 50);
    return () => clearTimeout(Ue);
  }, [Ye]), {
    active: K,
    activeIndex: v,
    attributes: Ee,
    data: O,
    rect: L,
    index: I,
    newIndex: Ke,
    items: h,
    isOver: j,
    isSorting: ne,
    isDragging: te,
    listeners: Ce,
    node: H,
    overIndex: R,
    over: G,
    setNodeRef: se,
    setActivatorNodeRef: Y,
    setDroppableNodeRef: W,
    setDraggableNodeRef: we,
    transform: ve ?? mt,
    transition: de()
  };
  function de() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ve || // Or to prevent items jumping to back to their "new" position when items change
      vt && Ae.current.newIndex === I
    )
      return u6;
    if (!(Ve && !Nd(Q) || !d) && (ne || rt))
      return ao.Transition.toString({
        ...d,
        property: nA
      });
  }
}
function h6(e, t) {
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
function Mf(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const p6 = [Me.Down, Me.Right, Me.Up, Me.Left], m6 = (e, t) => {
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
  if (p6.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const c = [];
    a.getEnabled().forEach((m) => {
      if (!m || m != null && m.disabled)
        return;
      const v = i.get(m.id);
      if (v)
        switch (e.code) {
          case Me.Down:
            r.top < v.top && c.push(m);
            break;
          case Me.Up:
            r.top > v.top && c.push(m);
            break;
          case Me.Left:
            r.left > v.left && c.push(m);
            break;
          case Me.Right:
            r.left < v.left && c.push(m);
            break;
        }
    });
    const d = V5({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: c
    });
    let h = Mk(d, "id");
    if (h === (l == null ? void 0 : l.id) && d.length > 1 && (h = d[1].id), h != null) {
      const m = a.get(n.id), v = a.get(h), x = v ? i.get(v.id) : null, b = v == null ? void 0 : v.node.current;
      if (b && x && m && v) {
        const R = Od(b).some((F, L) => u[L] !== F), w = rA(m, v), C = v6(m, v), A = R || !w ? {
          x: 0,
          y: 0
        } : {
          x: C ? r.width - x.width : 0,
          y: C ? r.height - x.height : 0
        }, I = {
          x: x.left,
          y: x.top
        };
        return A.x && A.y ? I : jl(I, A);
      }
    }
  }
};
function rA(e, t) {
  return !Mf(e) || !Mf(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function v6(e, t) {
  return !Mf(e) || !Mf(t) || !rA(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const g6 = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
};
var Lf = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Lf.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", d = 500, h = "__lodash_placeholder__", m = 1, v = 2, x = 4, b = 1, S = 2, R = 1, w = 2, C = 4, A = 8, I = 16, O = 32, F = 64, L = 128, H = 256, j = 512, W = 30, K = "...", Q = 800, ie = 16, Ee = 1, we = 2, Ce = 3, te = 1 / 0, G = 9007199254740991, Y = 17976931348623157e292, J = NaN, se = 4294967295, ne = se - 1, Ze = se >>> 1, Ve = [
      ["ary", L],
      ["bind", R],
      ["bindKey", w],
      ["curry", A],
      ["curryRight", I],
      ["flip", j],
      ["partial", O],
      ["partialRight", F],
      ["rearg", H]
    ], He = "[object Arguments]", Re = "[object Array]", mt = "[object AsyncFunction]", Ke = "[object Boolean]", Ye = "[object Date]", Ae = "[object DOMException]", vt = "[object Error]", rt = "[object Function]", ve = "[object GeneratorFunction]", de = "[object Map]", Ue = "[object Number]", Qe = "[object Null]", _e = "[object Object]", Je = "[object Promise]", We = "[object Proxy]", Oe = "[object RegExp]", it = "[object Set]", tn = "[object String]", Nn = "[object Symbol]", Lr = "[object Undefined]", Br = "[object WeakMap]", ta = "[object WeakSet]", nn = "[object ArrayBuffer]", jt = "[object DataView]", ti = "[object Float32Array]", na = "[object Float64Array]", qn = "[object Int8Array]", ra = "[object Int16Array]", _s = "[object Int32Array]", Ss = "[object Uint8Array]", ho = "[object Uint8ClampedArray]", ia = "[object Uint16Array]", bs = "[object Uint32Array]", cu = /\b__p \+= '';/g, Fd = /\b(__p \+=) '' \+/g, Md = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fu = /&(?:amp|lt|gt|quot|#39);/g, St = /[&<>"']/g, rn = RegExp(fu.source), on = RegExp(St.source), Hr = /<%-([\s\S]+?)%>/g, yn = /<%([\s\S]+?)%>/g, Wt = /<%=([\s\S]+?)%>/g, Kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ki = /^\w*$/, bt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yn = /[\\^$.*+?()[\]{}|]/g, Qn = RegExp(Yn.source), On = /^\s+/, po = /\s/, mo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vr = /\{\n\/\* \[wrapped with (.+)\] \*/, vo = /,? & /, ks = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, uA = /[()=,{}\[\]\/\s]/, cA = /\\(\\)?/g, fA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, H0 = /\w*$/, dA = /^[-+]0x[0-9a-f]+$/i, hA = /^0b[01]+$/i, pA = /^\[object .+?Constructor\]$/, mA = /^0o[0-7]+$/i, vA = /^(?:0|[1-9]\d*)$/, gA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, du = /($^)/, yA = /['\n\r\u2028\u2029\\]/g, hu = "\\ud800-\\udfff", EA = "\\u0300-\\u036f", xA = "\\ufe20-\\ufe2f", wA = "\\u20d0-\\u20ff", V0 = EA + xA + wA, U0 = "\\u2700-\\u27bf", $0 = "a-z\\xdf-\\xf6\\xf8-\\xff", CA = "\\xac\\xb1\\xd7\\xf7", _A = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", SA = "\\u2000-\\u206f", bA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", z0 = "A-Z\\xc0-\\xd6\\xd8-\\xde", j0 = "\\ufe0e\\ufe0f", W0 = CA + _A + SA + bA, Ld = "['’]", kA = "[" + hu + "]", G0 = "[" + W0 + "]", pu = "[" + V0 + "]", X0 = "\\d+", AA = "[" + U0 + "]", q0 = "[" + $0 + "]", K0 = "[^" + hu + W0 + X0 + U0 + $0 + z0 + "]", Bd = "\\ud83c[\\udffb-\\udfff]", TA = "(?:" + pu + "|" + Bd + ")", Y0 = "[^" + hu + "]", Hd = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vd = "[\\ud800-\\udbff][\\udc00-\\udfff]", oa = "[" + z0 + "]", Q0 = "\\u200d", Z0 = "(?:" + q0 + "|" + K0 + ")", RA = "(?:" + oa + "|" + K0 + ")", J0 = "(?:" + Ld + "(?:d|ll|m|re|s|t|ve))?", ey = "(?:" + Ld + "(?:D|LL|M|RE|S|T|VE))?", ty = TA + "?", ny = "[" + j0 + "]?", IA = "(?:" + Q0 + "(?:" + [Y0, Hd, Vd].join("|") + ")" + ny + ty + ")*", NA = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", OA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ry = ny + ty + IA, PA = "(?:" + [AA, Hd, Vd].join("|") + ")" + ry, DA = "(?:" + [Y0 + pu + "?", pu, Hd, Vd, kA].join("|") + ")", FA = RegExp(Ld, "g"), MA = RegExp(pu, "g"), Ud = RegExp(Bd + "(?=" + Bd + ")|" + DA + ry, "g"), LA = RegExp([
      oa + "?" + q0 + "+" + J0 + "(?=" + [G0, oa, "$"].join("|") + ")",
      RA + "+" + ey + "(?=" + [G0, oa + Z0, "$"].join("|") + ")",
      oa + "?" + Z0 + "+" + J0,
      oa + "+" + ey,
      OA,
      NA,
      X0,
      PA
    ].join("|"), "g"), BA = RegExp("[" + Q0 + hu + V0 + j0 + "]"), HA = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, VA = [
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
    ], UA = -1, ot = {};
    ot[ti] = ot[na] = ot[qn] = ot[ra] = ot[_s] = ot[Ss] = ot[ho] = ot[ia] = ot[bs] = !0, ot[He] = ot[Re] = ot[nn] = ot[Ke] = ot[jt] = ot[Ye] = ot[vt] = ot[rt] = ot[de] = ot[Ue] = ot[_e] = ot[Oe] = ot[it] = ot[tn] = ot[Br] = !1;
    var tt = {};
    tt[He] = tt[Re] = tt[nn] = tt[jt] = tt[Ke] = tt[Ye] = tt[ti] = tt[na] = tt[qn] = tt[ra] = tt[_s] = tt[de] = tt[Ue] = tt[_e] = tt[Oe] = tt[it] = tt[tn] = tt[Nn] = tt[Ss] = tt[ho] = tt[ia] = tt[bs] = !0, tt[vt] = tt[rt] = tt[Br] = !1;
    var $A = {
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
    }, zA = {
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
    }, WA = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, GA = parseFloat, XA = parseInt, iy = typeof zs == "object" && zs && zs.Object === Object && zs, qA = typeof self == "object" && self && self.Object === Object && self, Bt = iy || qA || Function("return this")(), $d = t && !t.nodeType && t, go = $d && !0 && e && !e.nodeType && e, oy = go && go.exports === $d, zd = oy && iy.process, Zn = function() {
      try {
        var M = go && go.require && go.require("util").types;
        return M || zd && zd.binding && zd.binding("util");
      } catch {
      }
    }(), ay = Zn && Zn.isArrayBuffer, sy = Zn && Zn.isDate, ly = Zn && Zn.isMap, uy = Zn && Zn.isRegExp, cy = Zn && Zn.isSet, fy = Zn && Zn.isTypedArray;
    function Pn(M, U, V) {
      switch (V.length) {
        case 0:
          return M.call(U);
        case 1:
          return M.call(U, V[0]);
        case 2:
          return M.call(U, V[0], V[1]);
        case 3:
          return M.call(U, V[0], V[1], V[2]);
      }
      return M.apply(U, V);
    }
    function KA(M, U, V, oe) {
      for (var ye = -1, $e = M == null ? 0 : M.length; ++ye < $e; ) {
        var kt = M[ye];
        U(oe, kt, V(kt), M);
      }
      return oe;
    }
    function Jn(M, U) {
      for (var V = -1, oe = M == null ? 0 : M.length; ++V < oe && U(M[V], V, M) !== !1; )
        ;
      return M;
    }
    function YA(M, U) {
      for (var V = M == null ? 0 : M.length; V-- && U(M[V], V, M) !== !1; )
        ;
      return M;
    }
    function dy(M, U) {
      for (var V = -1, oe = M == null ? 0 : M.length; ++V < oe; )
        if (!U(M[V], V, M))
          return !1;
      return !0;
    }
    function Ai(M, U) {
      for (var V = -1, oe = M == null ? 0 : M.length, ye = 0, $e = []; ++V < oe; ) {
        var kt = M[V];
        U(kt, V, M) && ($e[ye++] = kt);
      }
      return $e;
    }
    function mu(M, U) {
      var V = M == null ? 0 : M.length;
      return !!V && aa(M, U, 0) > -1;
    }
    function jd(M, U, V) {
      for (var oe = -1, ye = M == null ? 0 : M.length; ++oe < ye; )
        if (V(U, M[oe]))
          return !0;
      return !1;
    }
    function ut(M, U) {
      for (var V = -1, oe = M == null ? 0 : M.length, ye = Array(oe); ++V < oe; )
        ye[V] = U(M[V], V, M);
      return ye;
    }
    function Ti(M, U) {
      for (var V = -1, oe = U.length, ye = M.length; ++V < oe; )
        M[ye + V] = U[V];
      return M;
    }
    function Wd(M, U, V, oe) {
      var ye = -1, $e = M == null ? 0 : M.length;
      for (oe && $e && (V = M[++ye]); ++ye < $e; )
        V = U(V, M[ye], ye, M);
      return V;
    }
    function QA(M, U, V, oe) {
      var ye = M == null ? 0 : M.length;
      for (oe && ye && (V = M[--ye]); ye--; )
        V = U(V, M[ye], ye, M);
      return V;
    }
    function Gd(M, U) {
      for (var V = -1, oe = M == null ? 0 : M.length; ++V < oe; )
        if (U(M[V], V, M))
          return !0;
      return !1;
    }
    var ZA = Xd("length");
    function JA(M) {
      return M.split("");
    }
    function eT(M) {
      return M.match(ks) || [];
    }
    function hy(M, U, V) {
      var oe;
      return V(M, function(ye, $e, kt) {
        if (U(ye, $e, kt))
          return oe = $e, !1;
      }), oe;
    }
    function vu(M, U, V, oe) {
      for (var ye = M.length, $e = V + (oe ? 1 : -1); oe ? $e-- : ++$e < ye; )
        if (U(M[$e], $e, M))
          return $e;
      return -1;
    }
    function aa(M, U, V) {
      return U === U ? dT(M, U, V) : vu(M, py, V);
    }
    function tT(M, U, V, oe) {
      for (var ye = V - 1, $e = M.length; ++ye < $e; )
        if (oe(M[ye], U))
          return ye;
      return -1;
    }
    function py(M) {
      return M !== M;
    }
    function my(M, U) {
      var V = M == null ? 0 : M.length;
      return V ? Kd(M, U) / V : J;
    }
    function Xd(M) {
      return function(U) {
        return U == null ? n : U[M];
      };
    }
    function qd(M) {
      return function(U) {
        return M == null ? n : M[U];
      };
    }
    function vy(M, U, V, oe, ye) {
      return ye(M, function($e, kt, et) {
        V = oe ? (oe = !1, $e) : U(V, $e, kt, et);
      }), V;
    }
    function nT(M, U) {
      var V = M.length;
      for (M.sort(U); V--; )
        M[V] = M[V].value;
      return M;
    }
    function Kd(M, U) {
      for (var V, oe = -1, ye = M.length; ++oe < ye; ) {
        var $e = U(M[oe]);
        $e !== n && (V = V === n ? $e : V + $e);
      }
      return V;
    }
    function Yd(M, U) {
      for (var V = -1, oe = Array(M); ++V < M; )
        oe[V] = U(V);
      return oe;
    }
    function rT(M, U) {
      return ut(U, function(V) {
        return [V, M[V]];
      });
    }
    function gy(M) {
      return M && M.slice(0, wy(M) + 1).replace(On, "");
    }
    function Dn(M) {
      return function(U) {
        return M(U);
      };
    }
    function Qd(M, U) {
      return ut(U, function(V) {
        return M[V];
      });
    }
    function As(M, U) {
      return M.has(U);
    }
    function yy(M, U) {
      for (var V = -1, oe = M.length; ++V < oe && aa(U, M[V], 0) > -1; )
        ;
      return V;
    }
    function Ey(M, U) {
      for (var V = M.length; V-- && aa(U, M[V], 0) > -1; )
        ;
      return V;
    }
    function iT(M, U) {
      for (var V = M.length, oe = 0; V--; )
        M[V] === U && ++oe;
      return oe;
    }
    var oT = qd($A), aT = qd(zA);
    function sT(M) {
      return "\\" + WA[M];
    }
    function lT(M, U) {
      return M == null ? n : M[U];
    }
    function sa(M) {
      return BA.test(M);
    }
    function uT(M) {
      return HA.test(M);
    }
    function cT(M) {
      for (var U, V = []; !(U = M.next()).done; )
        V.push(U.value);
      return V;
    }
    function Zd(M) {
      var U = -1, V = Array(M.size);
      return M.forEach(function(oe, ye) {
        V[++U] = [ye, oe];
      }), V;
    }
    function xy(M, U) {
      return function(V) {
        return M(U(V));
      };
    }
    function Ri(M, U) {
      for (var V = -1, oe = M.length, ye = 0, $e = []; ++V < oe; ) {
        var kt = M[V];
        (kt === U || kt === h) && (M[V] = h, $e[ye++] = V);
      }
      return $e;
    }
    function gu(M) {
      var U = -1, V = Array(M.size);
      return M.forEach(function(oe) {
        V[++U] = oe;
      }), V;
    }
    function fT(M) {
      var U = -1, V = Array(M.size);
      return M.forEach(function(oe) {
        V[++U] = [oe, oe];
      }), V;
    }
    function dT(M, U, V) {
      for (var oe = V - 1, ye = M.length; ++oe < ye; )
        if (M[oe] === U)
          return oe;
      return -1;
    }
    function hT(M, U, V) {
      for (var oe = V + 1; oe--; )
        if (M[oe] === U)
          return oe;
      return oe;
    }
    function la(M) {
      return sa(M) ? mT(M) : ZA(M);
    }
    function xr(M) {
      return sa(M) ? vT(M) : JA(M);
    }
    function wy(M) {
      for (var U = M.length; U-- && po.test(M.charAt(U)); )
        ;
      return U;
    }
    var pT = qd(jA);
    function mT(M) {
      for (var U = Ud.lastIndex = 0; Ud.test(M); )
        ++U;
      return U;
    }
    function vT(M) {
      return M.match(Ud) || [];
    }
    function gT(M) {
      return M.match(LA) || [];
    }
    var yT = function M(U) {
      U = U == null ? Bt : ua.defaults(Bt.Object(), U, ua.pick(Bt, VA));
      var V = U.Array, oe = U.Date, ye = U.Error, $e = U.Function, kt = U.Math, et = U.Object, Jd = U.RegExp, ET = U.String, er = U.TypeError, yu = V.prototype, xT = $e.prototype, ca = et.prototype, Eu = U["__core-js_shared__"], xu = xT.toString, Ge = ca.hasOwnProperty, wT = 0, Cy = function() {
        var o = /[^.]+$/.exec(Eu && Eu.keys && Eu.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), wu = ca.toString, CT = xu.call(et), _T = Bt._, ST = Jd(
        "^" + xu.call(Ge).replace(Yn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Cu = oy ? U.Buffer : n, Ii = U.Symbol, _u = U.Uint8Array, _y = Cu ? Cu.allocUnsafe : n, Su = xy(et.getPrototypeOf, et), Sy = et.create, by = ca.propertyIsEnumerable, bu = yu.splice, ky = Ii ? Ii.isConcatSpreadable : n, Ts = Ii ? Ii.iterator : n, yo = Ii ? Ii.toStringTag : n, ku = function() {
        try {
          var o = _o(et, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), bT = U.clearTimeout !== Bt.clearTimeout && U.clearTimeout, kT = oe && oe.now !== Bt.Date.now && oe.now, AT = U.setTimeout !== Bt.setTimeout && U.setTimeout, Au = kt.ceil, Tu = kt.floor, eh = et.getOwnPropertySymbols, TT = Cu ? Cu.isBuffer : n, Ay = U.isFinite, RT = yu.join, IT = xy(et.keys, et), At = kt.max, Gt = kt.min, NT = oe.now, OT = U.parseInt, Ty = kt.random, PT = yu.reverse, th = _o(U, "DataView"), Rs = _o(U, "Map"), nh = _o(U, "Promise"), fa = _o(U, "Set"), Is = _o(U, "WeakMap"), Ns = _o(et, "create"), Ru = Is && new Is(), da = {}, DT = So(th), FT = So(Rs), MT = So(nh), LT = So(fa), BT = So(Is), Iu = Ii ? Ii.prototype : n, Os = Iu ? Iu.valueOf : n, Ry = Iu ? Iu.toString : n;
      function k(o) {
        if (gt(o) && !xe(o) && !(o instanceof Pe)) {
          if (o instanceof tr)
            return o;
          if (Ge.call(o, "__wrapped__"))
            return IE(o);
        }
        return new tr(o);
      }
      var ha = /* @__PURE__ */ function() {
        function o() {
        }
        return function(s) {
          if (!ft(s))
            return {};
          if (Sy)
            return Sy(s);
          o.prototype = s;
          var f = new o();
          return o.prototype = n, f;
        };
      }();
      function Nu() {
      }
      function tr(o, s) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      k.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Hr,
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
        interpolate: Wt,
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
          _: k
        }
      }, k.prototype = Nu.prototype, k.prototype.constructor = k, tr.prototype = ha(Nu.prototype), tr.prototype.constructor = tr;
      function Pe(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = se, this.__views__ = [];
      }
      function HT() {
        var o = new Pe(this.__wrapped__);
        return o.__actions__ = En(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = En(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = En(this.__views__), o;
      }
      function VT() {
        if (this.__filtered__) {
          var o = new Pe(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function UT() {
        var o = this.__wrapped__.value(), s = this.__dir__, f = xe(o), p = s < 0, E = f ? o.length : 0, T = J2(0, E, this.__views__), N = T.start, P = T.end, B = P - N, $ = p ? P : N - 1, z = this.__iteratees__, X = z.length, ee = 0, le = Gt(B, this.__takeCount__);
        if (!f || !p && E == B && le == B)
          return Jy(o, this.__actions__);
        var pe = [];
        e:
          for (; B-- && ee < le; ) {
            $ += s;
            for (var be = -1, me = o[$]; ++be < X; ) {
              var Ie = z[be], De = Ie.iteratee, Ln = Ie.type, ln = De(me);
              if (Ln == we)
                me = ln;
              else if (!ln) {
                if (Ln == Ee)
                  continue e;
                break e;
              }
            }
            pe[ee++] = me;
          }
        return pe;
      }
      Pe.prototype = ha(Nu.prototype), Pe.prototype.constructor = Pe;
      function Eo(o) {
        var s = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++s < f; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function $T() {
        this.__data__ = Ns ? Ns(null) : {}, this.size = 0;
      }
      function zT(o) {
        var s = this.has(o) && delete this.__data__[o];
        return this.size -= s ? 1 : 0, s;
      }
      function jT(o) {
        var s = this.__data__;
        if (Ns) {
          var f = s[o];
          return f === c ? n : f;
        }
        return Ge.call(s, o) ? s[o] : n;
      }
      function WT(o) {
        var s = this.__data__;
        return Ns ? s[o] !== n : Ge.call(s, o);
      }
      function GT(o, s) {
        var f = this.__data__;
        return this.size += this.has(o) ? 0 : 1, f[o] = Ns && s === n ? c : s, this;
      }
      Eo.prototype.clear = $T, Eo.prototype.delete = zT, Eo.prototype.get = jT, Eo.prototype.has = WT, Eo.prototype.set = GT;
      function ni(o) {
        var s = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++s < f; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function XT() {
        this.__data__ = [], this.size = 0;
      }
      function qT(o) {
        var s = this.__data__, f = Ou(s, o);
        if (f < 0)
          return !1;
        var p = s.length - 1;
        return f == p ? s.pop() : bu.call(s, f, 1), --this.size, !0;
      }
      function KT(o) {
        var s = this.__data__, f = Ou(s, o);
        return f < 0 ? n : s[f][1];
      }
      function YT(o) {
        return Ou(this.__data__, o) > -1;
      }
      function QT(o, s) {
        var f = this.__data__, p = Ou(f, o);
        return p < 0 ? (++this.size, f.push([o, s])) : f[p][1] = s, this;
      }
      ni.prototype.clear = XT, ni.prototype.delete = qT, ni.prototype.get = KT, ni.prototype.has = YT, ni.prototype.set = QT;
      function ri(o) {
        var s = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++s < f; ) {
          var p = o[s];
          this.set(p[0], p[1]);
        }
      }
      function ZT() {
        this.size = 0, this.__data__ = {
          hash: new Eo(),
          map: new (Rs || ni)(),
          string: new Eo()
        };
      }
      function JT(o) {
        var s = ju(this, o).delete(o);
        return this.size -= s ? 1 : 0, s;
      }
      function e2(o) {
        return ju(this, o).get(o);
      }
      function t2(o) {
        return ju(this, o).has(o);
      }
      function n2(o, s) {
        var f = ju(this, o), p = f.size;
        return f.set(o, s), this.size += f.size == p ? 0 : 1, this;
      }
      ri.prototype.clear = ZT, ri.prototype.delete = JT, ri.prototype.get = e2, ri.prototype.has = t2, ri.prototype.set = n2;
      function xo(o) {
        var s = -1, f = o == null ? 0 : o.length;
        for (this.__data__ = new ri(); ++s < f; )
          this.add(o[s]);
      }
      function r2(o) {
        return this.__data__.set(o, c), this;
      }
      function i2(o) {
        return this.__data__.has(o);
      }
      xo.prototype.add = xo.prototype.push = r2, xo.prototype.has = i2;
      function wr(o) {
        var s = this.__data__ = new ni(o);
        this.size = s.size;
      }
      function o2() {
        this.__data__ = new ni(), this.size = 0;
      }
      function a2(o) {
        var s = this.__data__, f = s.delete(o);
        return this.size = s.size, f;
      }
      function s2(o) {
        return this.__data__.get(o);
      }
      function l2(o) {
        return this.__data__.has(o);
      }
      function u2(o, s) {
        var f = this.__data__;
        if (f instanceof ni) {
          var p = f.__data__;
          if (!Rs || p.length < i - 1)
            return p.push([o, s]), this.size = ++f.size, this;
          f = this.__data__ = new ri(p);
        }
        return f.set(o, s), this.size = f.size, this;
      }
      wr.prototype.clear = o2, wr.prototype.delete = a2, wr.prototype.get = s2, wr.prototype.has = l2, wr.prototype.set = u2;
      function Iy(o, s) {
        var f = xe(o), p = !f && bo(o), E = !f && !p && Fi(o), T = !f && !p && !E && ga(o), N = f || p || E || T, P = N ? Yd(o.length, ET) : [], B = P.length;
        for (var $ in o)
          (s || Ge.call(o, $)) && !(N && // Safari 9 has enumerable `arguments.length` in strict mode.
          ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          E && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
          si($, B))) && P.push($);
        return P;
      }
      function Ny(o) {
        var s = o.length;
        return s ? o[hh(0, s - 1)] : n;
      }
      function c2(o, s) {
        return Wu(En(o), wo(s, 0, o.length));
      }
      function f2(o) {
        return Wu(En(o));
      }
      function rh(o, s, f) {
        (f !== n && !Cr(o[s], f) || f === n && !(s in o)) && ii(o, s, f);
      }
      function Ps(o, s, f) {
        var p = o[s];
        (!(Ge.call(o, s) && Cr(p, f)) || f === n && !(s in o)) && ii(o, s, f);
      }
      function Ou(o, s) {
        for (var f = o.length; f--; )
          if (Cr(o[f][0], s))
            return f;
        return -1;
      }
      function d2(o, s, f, p) {
        return Ni(o, function(E, T, N) {
          s(p, E, f(E), N);
        }), p;
      }
      function Oy(o, s) {
        return o && $r(s, Pt(s), o);
      }
      function h2(o, s) {
        return o && $r(s, wn(s), o);
      }
      function ii(o, s, f) {
        s == "__proto__" && ku ? ku(o, s, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : o[s] = f;
      }
      function ih(o, s) {
        for (var f = -1, p = s.length, E = V(p), T = o == null; ++f < p; )
          E[f] = T ? n : Bh(o, s[f]);
        return E;
      }
      function wo(o, s, f) {
        return o === o && (f !== n && (o = o <= f ? o : f), s !== n && (o = o >= s ? o : s)), o;
      }
      function nr(o, s, f, p, E, T) {
        var N, P = s & m, B = s & v, $ = s & x;
        if (f && (N = E ? f(o, p, E, T) : f(o)), N !== n)
          return N;
        if (!ft(o))
          return o;
        var z = xe(o);
        if (z) {
          if (N = tR(o), !P)
            return En(o, N);
        } else {
          var X = Xt(o), ee = X == rt || X == ve;
          if (Fi(o))
            return nE(o, P);
          if (X == _e || X == He || ee && !E) {
            if (N = B || ee ? {} : wE(o), !P)
              return B ? j2(o, h2(N, o)) : z2(o, Oy(N, o));
          } else {
            if (!tt[X])
              return E ? o : {};
            N = nR(o, X, P);
          }
        }
        T || (T = new wr());
        var le = T.get(o);
        if (le)
          return le;
        T.set(o, N), YE(o) ? o.forEach(function(me) {
          N.add(nr(me, s, f, me, o, T));
        }) : qE(o) && o.forEach(function(me, Ie) {
          N.set(Ie, nr(me, s, f, Ie, o, T));
        });
        var pe = $ ? B ? Sh : _h : B ? wn : Pt, be = z ? n : pe(o);
        return Jn(be || o, function(me, Ie) {
          be && (Ie = me, me = o[Ie]), Ps(N, Ie, nr(me, s, f, Ie, o, T));
        }), N;
      }
      function p2(o) {
        var s = Pt(o);
        return function(f) {
          return Py(f, o, s);
        };
      }
      function Py(o, s, f) {
        var p = f.length;
        if (o == null)
          return !p;
        for (o = et(o); p--; ) {
          var E = f[p], T = s[E], N = o[E];
          if (N === n && !(E in o) || !T(N))
            return !1;
        }
        return !0;
      }
      function Dy(o, s, f) {
        if (typeof o != "function")
          throw new er(l);
        return Vs(function() {
          o.apply(n, f);
        }, s);
      }
      function Ds(o, s, f, p) {
        var E = -1, T = mu, N = !0, P = o.length, B = [], $ = s.length;
        if (!P)
          return B;
        f && (s = ut(s, Dn(f))), p ? (T = jd, N = !1) : s.length >= i && (T = As, N = !1, s = new xo(s));
        e:
          for (; ++E < P; ) {
            var z = o[E], X = f == null ? z : f(z);
            if (z = p || z !== 0 ? z : 0, N && X === X) {
              for (var ee = $; ee--; )
                if (s[ee] === X)
                  continue e;
              B.push(z);
            } else T(s, X, p) || B.push(z);
          }
        return B;
      }
      var Ni = sE(Ur), Fy = sE(ah, !0);
      function m2(o, s) {
        var f = !0;
        return Ni(o, function(p, E, T) {
          return f = !!s(p, E, T), f;
        }), f;
      }
      function Pu(o, s, f) {
        for (var p = -1, E = o.length; ++p < E; ) {
          var T = o[p], N = s(T);
          if (N != null && (P === n ? N === N && !Mn(N) : f(N, P)))
            var P = N, B = T;
        }
        return B;
      }
      function v2(o, s, f, p) {
        var E = o.length;
        for (f = Se(f), f < 0 && (f = -f > E ? 0 : E + f), p = p === n || p > E ? E : Se(p), p < 0 && (p += E), p = f > p ? 0 : ZE(p); f < p; )
          o[f++] = s;
        return o;
      }
      function My(o, s) {
        var f = [];
        return Ni(o, function(p, E, T) {
          s(p, E, T) && f.push(p);
        }), f;
      }
      function Ht(o, s, f, p, E) {
        var T = -1, N = o.length;
        for (f || (f = iR), E || (E = []); ++T < N; ) {
          var P = o[T];
          s > 0 && f(P) ? s > 1 ? Ht(P, s - 1, f, p, E) : Ti(E, P) : p || (E[E.length] = P);
        }
        return E;
      }
      var oh = lE(), Ly = lE(!0);
      function Ur(o, s) {
        return o && oh(o, s, Pt);
      }
      function ah(o, s) {
        return o && Ly(o, s, Pt);
      }
      function Du(o, s) {
        return Ai(s, function(f) {
          return li(o[f]);
        });
      }
      function Co(o, s) {
        s = Pi(s, o);
        for (var f = 0, p = s.length; o != null && f < p; )
          o = o[zr(s[f++])];
        return f && f == p ? o : n;
      }
      function By(o, s, f) {
        var p = s(o);
        return xe(o) ? p : Ti(p, f(o));
      }
      function an(o) {
        return o == null ? o === n ? Lr : Qe : yo && yo in et(o) ? Z2(o) : fR(o);
      }
      function sh(o, s) {
        return o > s;
      }
      function g2(o, s) {
        return o != null && Ge.call(o, s);
      }
      function y2(o, s) {
        return o != null && s in et(o);
      }
      function E2(o, s, f) {
        return o >= Gt(s, f) && o < At(s, f);
      }
      function lh(o, s, f) {
        for (var p = f ? jd : mu, E = o[0].length, T = o.length, N = T, P = V(T), B = 1 / 0, $ = []; N--; ) {
          var z = o[N];
          N && s && (z = ut(z, Dn(s))), B = Gt(z.length, B), P[N] = !f && (s || E >= 120 && z.length >= 120) ? new xo(N && z) : n;
        }
        z = o[0];
        var X = -1, ee = P[0];
        e:
          for (; ++X < E && $.length < B; ) {
            var le = z[X], pe = s ? s(le) : le;
            if (le = f || le !== 0 ? le : 0, !(ee ? As(ee, pe) : p($, pe, f))) {
              for (N = T; --N; ) {
                var be = P[N];
                if (!(be ? As(be, pe) : p(o[N], pe, f)))
                  continue e;
              }
              ee && ee.push(pe), $.push(le);
            }
          }
        return $;
      }
      function x2(o, s, f, p) {
        return Ur(o, function(E, T, N) {
          s(p, f(E), T, N);
        }), p;
      }
      function Fs(o, s, f) {
        s = Pi(s, o), o = bE(o, s);
        var p = o == null ? o : o[zr(ir(s))];
        return p == null ? n : Pn(p, o, f);
      }
      function Hy(o) {
        return gt(o) && an(o) == He;
      }
      function w2(o) {
        return gt(o) && an(o) == nn;
      }
      function C2(o) {
        return gt(o) && an(o) == Ye;
      }
      function Ms(o, s, f, p, E) {
        return o === s ? !0 : o == null || s == null || !gt(o) && !gt(s) ? o !== o && s !== s : _2(o, s, f, p, Ms, E);
      }
      function _2(o, s, f, p, E, T) {
        var N = xe(o), P = xe(s), B = N ? Re : Xt(o), $ = P ? Re : Xt(s);
        B = B == He ? _e : B, $ = $ == He ? _e : $;
        var z = B == _e, X = $ == _e, ee = B == $;
        if (ee && Fi(o)) {
          if (!Fi(s))
            return !1;
          N = !0, z = !1;
        }
        if (ee && !z)
          return T || (T = new wr()), N || ga(o) ? yE(o, s, f, p, E, T) : Y2(o, s, B, f, p, E, T);
        if (!(f & b)) {
          var le = z && Ge.call(o, "__wrapped__"), pe = X && Ge.call(s, "__wrapped__");
          if (le || pe) {
            var be = le ? o.value() : o, me = pe ? s.value() : s;
            return T || (T = new wr()), E(be, me, f, p, T);
          }
        }
        return ee ? (T || (T = new wr()), Q2(o, s, f, p, E, T)) : !1;
      }
      function S2(o) {
        return gt(o) && Xt(o) == de;
      }
      function uh(o, s, f, p) {
        var E = f.length, T = E, N = !p;
        if (o == null)
          return !T;
        for (o = et(o); E--; ) {
          var P = f[E];
          if (N && P[2] ? P[1] !== o[P[0]] : !(P[0] in o))
            return !1;
        }
        for (; ++E < T; ) {
          P = f[E];
          var B = P[0], $ = o[B], z = P[1];
          if (N && P[2]) {
            if ($ === n && !(B in o))
              return !1;
          } else {
            var X = new wr();
            if (p)
              var ee = p($, z, B, o, s, X);
            if (!(ee === n ? Ms(z, $, b | S, p, X) : ee))
              return !1;
          }
        }
        return !0;
      }
      function Vy(o) {
        if (!ft(o) || aR(o))
          return !1;
        var s = li(o) ? ST : pA;
        return s.test(So(o));
      }
      function b2(o) {
        return gt(o) && an(o) == Oe;
      }
      function k2(o) {
        return gt(o) && Xt(o) == it;
      }
      function A2(o) {
        return gt(o) && Qu(o.length) && !!ot[an(o)];
      }
      function Uy(o) {
        return typeof o == "function" ? o : o == null ? Cn : typeof o == "object" ? xe(o) ? jy(o[0], o[1]) : zy(o) : ux(o);
      }
      function ch(o) {
        if (!Hs(o))
          return IT(o);
        var s = [];
        for (var f in et(o))
          Ge.call(o, f) && f != "constructor" && s.push(f);
        return s;
      }
      function T2(o) {
        if (!ft(o))
          return cR(o);
        var s = Hs(o), f = [];
        for (var p in o)
          p == "constructor" && (s || !Ge.call(o, p)) || f.push(p);
        return f;
      }
      function fh(o, s) {
        return o < s;
      }
      function $y(o, s) {
        var f = -1, p = xn(o) ? V(o.length) : [];
        return Ni(o, function(E, T, N) {
          p[++f] = s(E, T, N);
        }), p;
      }
      function zy(o) {
        var s = kh(o);
        return s.length == 1 && s[0][2] ? _E(s[0][0], s[0][1]) : function(f) {
          return f === o || uh(f, o, s);
        };
      }
      function jy(o, s) {
        return Th(o) && CE(s) ? _E(zr(o), s) : function(f) {
          var p = Bh(f, o);
          return p === n && p === s ? Hh(f, o) : Ms(s, p, b | S);
        };
      }
      function Fu(o, s, f, p, E) {
        o !== s && oh(s, function(T, N) {
          if (E || (E = new wr()), ft(T))
            R2(o, s, N, f, Fu, p, E);
          else {
            var P = p ? p(Ih(o, N), T, N + "", o, s, E) : n;
            P === n && (P = T), rh(o, N, P);
          }
        }, wn);
      }
      function R2(o, s, f, p, E, T, N) {
        var P = Ih(o, f), B = Ih(s, f), $ = N.get(B);
        if ($) {
          rh(o, f, $);
          return;
        }
        var z = T ? T(P, B, f + "", o, s, N) : n, X = z === n;
        if (X) {
          var ee = xe(B), le = !ee && Fi(B), pe = !ee && !le && ga(B);
          z = B, ee || le || pe ? xe(P) ? z = P : Et(P) ? z = En(P) : le ? (X = !1, z = nE(B, !0)) : pe ? (X = !1, z = rE(B, !0)) : z = [] : Us(B) || bo(B) ? (z = P, bo(P) ? z = JE(P) : (!ft(P) || li(P)) && (z = wE(B))) : X = !1;
        }
        X && (N.set(B, z), E(z, B, p, T, N), N.delete(B)), rh(o, f, z);
      }
      function Wy(o, s) {
        var f = o.length;
        if (f)
          return s += s < 0 ? f : 0, si(s, f) ? o[s] : n;
      }
      function Gy(o, s, f) {
        s.length ? s = ut(s, function(T) {
          return xe(T) ? function(N) {
            return Co(N, T.length === 1 ? T[0] : T);
          } : T;
        }) : s = [Cn];
        var p = -1;
        s = ut(s, Dn(he()));
        var E = $y(o, function(T, N, P) {
          var B = ut(s, function($) {
            return $(T);
          });
          return { criteria: B, index: ++p, value: T };
        });
        return nT(E, function(T, N) {
          return $2(T, N, f);
        });
      }
      function I2(o, s) {
        return Xy(o, s, function(f, p) {
          return Hh(o, p);
        });
      }
      function Xy(o, s, f) {
        for (var p = -1, E = s.length, T = {}; ++p < E; ) {
          var N = s[p], P = Co(o, N);
          f(P, N) && Ls(T, Pi(N, o), P);
        }
        return T;
      }
      function N2(o) {
        return function(s) {
          return Co(s, o);
        };
      }
      function dh(o, s, f, p) {
        var E = p ? tT : aa, T = -1, N = s.length, P = o;
        for (o === s && (s = En(s)), f && (P = ut(o, Dn(f))); ++T < N; )
          for (var B = 0, $ = s[T], z = f ? f($) : $; (B = E(P, z, B, p)) > -1; )
            P !== o && bu.call(P, B, 1), bu.call(o, B, 1);
        return o;
      }
      function qy(o, s) {
        for (var f = o ? s.length : 0, p = f - 1; f--; ) {
          var E = s[f];
          if (f == p || E !== T) {
            var T = E;
            si(E) ? bu.call(o, E, 1) : vh(o, E);
          }
        }
        return o;
      }
      function hh(o, s) {
        return o + Tu(Ty() * (s - o + 1));
      }
      function O2(o, s, f, p) {
        for (var E = -1, T = At(Au((s - o) / (f || 1)), 0), N = V(T); T--; )
          N[p ? T : ++E] = o, o += f;
        return N;
      }
      function ph(o, s) {
        var f = "";
        if (!o || s < 1 || s > G)
          return f;
        do
          s % 2 && (f += o), s = Tu(s / 2), s && (o += o);
        while (s);
        return f;
      }
      function Te(o, s) {
        return Nh(SE(o, s, Cn), o + "");
      }
      function P2(o) {
        return Ny(ya(o));
      }
      function D2(o, s) {
        var f = ya(o);
        return Wu(f, wo(s, 0, f.length));
      }
      function Ls(o, s, f, p) {
        if (!ft(o))
          return o;
        s = Pi(s, o);
        for (var E = -1, T = s.length, N = T - 1, P = o; P != null && ++E < T; ) {
          var B = zr(s[E]), $ = f;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return o;
          if (E != N) {
            var z = P[B];
            $ = p ? p(z, B, P) : n, $ === n && ($ = ft(z) ? z : si(s[E + 1]) ? [] : {});
          }
          Ps(P, B, $), P = P[B];
        }
        return o;
      }
      var Ky = Ru ? function(o, s) {
        return Ru.set(o, s), o;
      } : Cn, F2 = ku ? function(o, s) {
        return ku(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Uh(s),
          writable: !0
        });
      } : Cn;
      function M2(o) {
        return Wu(ya(o));
      }
      function rr(o, s, f) {
        var p = -1, E = o.length;
        s < 0 && (s = -s > E ? 0 : E + s), f = f > E ? E : f, f < 0 && (f += E), E = s > f ? 0 : f - s >>> 0, s >>>= 0;
        for (var T = V(E); ++p < E; )
          T[p] = o[p + s];
        return T;
      }
      function L2(o, s) {
        var f;
        return Ni(o, function(p, E, T) {
          return f = s(p, E, T), !f;
        }), !!f;
      }
      function Mu(o, s, f) {
        var p = 0, E = o == null ? p : o.length;
        if (typeof s == "number" && s === s && E <= Ze) {
          for (; p < E; ) {
            var T = p + E >>> 1, N = o[T];
            N !== null && !Mn(N) && (f ? N <= s : N < s) ? p = T + 1 : E = T;
          }
          return E;
        }
        return mh(o, s, Cn, f);
      }
      function mh(o, s, f, p) {
        var E = 0, T = o == null ? 0 : o.length;
        if (T === 0)
          return 0;
        s = f(s);
        for (var N = s !== s, P = s === null, B = Mn(s), $ = s === n; E < T; ) {
          var z = Tu((E + T) / 2), X = f(o[z]), ee = X !== n, le = X === null, pe = X === X, be = Mn(X);
          if (N)
            var me = p || pe;
          else $ ? me = pe && (p || ee) : P ? me = pe && ee && (p || !le) : B ? me = pe && ee && !le && (p || !be) : le || be ? me = !1 : me = p ? X <= s : X < s;
          me ? E = z + 1 : T = z;
        }
        return Gt(T, ne);
      }
      function Yy(o, s) {
        for (var f = -1, p = o.length, E = 0, T = []; ++f < p; ) {
          var N = o[f], P = s ? s(N) : N;
          if (!f || !Cr(P, B)) {
            var B = P;
            T[E++] = N === 0 ? 0 : N;
          }
        }
        return T;
      }
      function Qy(o) {
        return typeof o == "number" ? o : Mn(o) ? J : +o;
      }
      function Fn(o) {
        if (typeof o == "string")
          return o;
        if (xe(o))
          return ut(o, Fn) + "";
        if (Mn(o))
          return Ry ? Ry.call(o) : "";
        var s = o + "";
        return s == "0" && 1 / o == -te ? "-0" : s;
      }
      function Oi(o, s, f) {
        var p = -1, E = mu, T = o.length, N = !0, P = [], B = P;
        if (f)
          N = !1, E = jd;
        else if (T >= i) {
          var $ = s ? null : q2(o);
          if ($)
            return gu($);
          N = !1, E = As, B = new xo();
        } else
          B = s ? [] : P;
        e:
          for (; ++p < T; ) {
            var z = o[p], X = s ? s(z) : z;
            if (z = f || z !== 0 ? z : 0, N && X === X) {
              for (var ee = B.length; ee--; )
                if (B[ee] === X)
                  continue e;
              s && B.push(X), P.push(z);
            } else E(B, X, f) || (B !== P && B.push(X), P.push(z));
          }
        return P;
      }
      function vh(o, s) {
        return s = Pi(s, o), o = bE(o, s), o == null || delete o[zr(ir(s))];
      }
      function Zy(o, s, f, p) {
        return Ls(o, s, f(Co(o, s)), p);
      }
      function Lu(o, s, f, p) {
        for (var E = o.length, T = p ? E : -1; (p ? T-- : ++T < E) && s(o[T], T, o); )
          ;
        return f ? rr(o, p ? 0 : T, p ? T + 1 : E) : rr(o, p ? T + 1 : 0, p ? E : T);
      }
      function Jy(o, s) {
        var f = o;
        return f instanceof Pe && (f = f.value()), Wd(s, function(p, E) {
          return E.func.apply(E.thisArg, Ti([p], E.args));
        }, f);
      }
      function gh(o, s, f) {
        var p = o.length;
        if (p < 2)
          return p ? Oi(o[0]) : [];
        for (var E = -1, T = V(p); ++E < p; )
          for (var N = o[E], P = -1; ++P < p; )
            P != E && (T[E] = Ds(T[E] || N, o[P], s, f));
        return Oi(Ht(T, 1), s, f);
      }
      function eE(o, s, f) {
        for (var p = -1, E = o.length, T = s.length, N = {}; ++p < E; ) {
          var P = p < T ? s[p] : n;
          f(N, o[p], P);
        }
        return N;
      }
      function yh(o) {
        return Et(o) ? o : [];
      }
      function Eh(o) {
        return typeof o == "function" ? o : Cn;
      }
      function Pi(o, s) {
        return xe(o) ? o : Th(o, s) ? [o] : RE(je(o));
      }
      var B2 = Te;
      function Di(o, s, f) {
        var p = o.length;
        return f = f === n ? p : f, !s && f >= p ? o : rr(o, s, f);
      }
      var tE = bT || function(o) {
        return Bt.clearTimeout(o);
      };
      function nE(o, s) {
        if (s)
          return o.slice();
        var f = o.length, p = _y ? _y(f) : new o.constructor(f);
        return o.copy(p), p;
      }
      function xh(o) {
        var s = new o.constructor(o.byteLength);
        return new _u(s).set(new _u(o)), s;
      }
      function H2(o, s) {
        var f = s ? xh(o.buffer) : o.buffer;
        return new o.constructor(f, o.byteOffset, o.byteLength);
      }
      function V2(o) {
        var s = new o.constructor(o.source, H0.exec(o));
        return s.lastIndex = o.lastIndex, s;
      }
      function U2(o) {
        return Os ? et(Os.call(o)) : {};
      }
      function rE(o, s) {
        var f = s ? xh(o.buffer) : o.buffer;
        return new o.constructor(f, o.byteOffset, o.length);
      }
      function iE(o, s) {
        if (o !== s) {
          var f = o !== n, p = o === null, E = o === o, T = Mn(o), N = s !== n, P = s === null, B = s === s, $ = Mn(s);
          if (!P && !$ && !T && o > s || T && N && B && !P && !$ || p && N && B || !f && B || !E)
            return 1;
          if (!p && !T && !$ && o < s || $ && f && E && !p && !T || P && f && E || !N && E || !B)
            return -1;
        }
        return 0;
      }
      function $2(o, s, f) {
        for (var p = -1, E = o.criteria, T = s.criteria, N = E.length, P = f.length; ++p < N; ) {
          var B = iE(E[p], T[p]);
          if (B) {
            if (p >= P)
              return B;
            var $ = f[p];
            return B * ($ == "desc" ? -1 : 1);
          }
        }
        return o.index - s.index;
      }
      function oE(o, s, f, p) {
        for (var E = -1, T = o.length, N = f.length, P = -1, B = s.length, $ = At(T - N, 0), z = V(B + $), X = !p; ++P < B; )
          z[P] = s[P];
        for (; ++E < N; )
          (X || E < T) && (z[f[E]] = o[E]);
        for (; $--; )
          z[P++] = o[E++];
        return z;
      }
      function aE(o, s, f, p) {
        for (var E = -1, T = o.length, N = -1, P = f.length, B = -1, $ = s.length, z = At(T - P, 0), X = V(z + $), ee = !p; ++E < z; )
          X[E] = o[E];
        for (var le = E; ++B < $; )
          X[le + B] = s[B];
        for (; ++N < P; )
          (ee || E < T) && (X[le + f[N]] = o[E++]);
        return X;
      }
      function En(o, s) {
        var f = -1, p = o.length;
        for (s || (s = V(p)); ++f < p; )
          s[f] = o[f];
        return s;
      }
      function $r(o, s, f, p) {
        var E = !f;
        f || (f = {});
        for (var T = -1, N = s.length; ++T < N; ) {
          var P = s[T], B = p ? p(f[P], o[P], P, f, o) : n;
          B === n && (B = o[P]), E ? ii(f, P, B) : Ps(f, P, B);
        }
        return f;
      }
      function z2(o, s) {
        return $r(o, Ah(o), s);
      }
      function j2(o, s) {
        return $r(o, EE(o), s);
      }
      function Bu(o, s) {
        return function(f, p) {
          var E = xe(f) ? KA : d2, T = s ? s() : {};
          return E(f, o, he(p, 2), T);
        };
      }
      function pa(o) {
        return Te(function(s, f) {
          var p = -1, E = f.length, T = E > 1 ? f[E - 1] : n, N = E > 2 ? f[2] : n;
          for (T = o.length > 3 && typeof T == "function" ? (E--, T) : n, N && sn(f[0], f[1], N) && (T = E < 3 ? n : T, E = 1), s = et(s); ++p < E; ) {
            var P = f[p];
            P && o(s, P, p, T);
          }
          return s;
        });
      }
      function sE(o, s) {
        return function(f, p) {
          if (f == null)
            return f;
          if (!xn(f))
            return o(f, p);
          for (var E = f.length, T = s ? E : -1, N = et(f); (s ? T-- : ++T < E) && p(N[T], T, N) !== !1; )
            ;
          return f;
        };
      }
      function lE(o) {
        return function(s, f, p) {
          for (var E = -1, T = et(s), N = p(s), P = N.length; P--; ) {
            var B = N[o ? P : ++E];
            if (f(T[B], B, T) === !1)
              break;
          }
          return s;
        };
      }
      function W2(o, s, f) {
        var p = s & R, E = Bs(o);
        function T() {
          var N = this && this !== Bt && this instanceof T ? E : o;
          return N.apply(p ? f : this, arguments);
        }
        return T;
      }
      function uE(o) {
        return function(s) {
          s = je(s);
          var f = sa(s) ? xr(s) : n, p = f ? f[0] : s.charAt(0), E = f ? Di(f, 1).join("") : s.slice(1);
          return p[o]() + E;
        };
      }
      function ma(o) {
        return function(s) {
          return Wd(sx(ax(s).replace(FA, "")), o, "");
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
          var f = ha(o.prototype), p = o.apply(f, s);
          return ft(p) ? p : f;
        };
      }
      function G2(o, s, f) {
        var p = Bs(o);
        function E() {
          for (var T = arguments.length, N = V(T), P = T, B = va(E); P--; )
            N[P] = arguments[P];
          var $ = T < 3 && N[0] !== B && N[T - 1] !== B ? [] : Ri(N, B);
          if (T -= $.length, T < f)
            return pE(
              o,
              s,
              Hu,
              E.placeholder,
              n,
              N,
              $,
              n,
              n,
              f - T
            );
          var z = this && this !== Bt && this instanceof E ? p : o;
          return Pn(z, this, N);
        }
        return E;
      }
      function cE(o) {
        return function(s, f, p) {
          var E = et(s);
          if (!xn(s)) {
            var T = he(f, 3);
            s = Pt(s), f = function(P) {
              return T(E[P], P, E);
            };
          }
          var N = o(s, f, p);
          return N > -1 ? E[T ? s[N] : N] : n;
        };
      }
      function fE(o) {
        return ai(function(s) {
          var f = s.length, p = f, E = tr.prototype.thru;
          for (o && s.reverse(); p--; ) {
            var T = s[p];
            if (typeof T != "function")
              throw new er(l);
            if (E && !N && zu(T) == "wrapper")
              var N = new tr([], !0);
          }
          for (p = N ? p : f; ++p < f; ) {
            T = s[p];
            var P = zu(T), B = P == "wrapper" ? bh(T) : n;
            B && Rh(B[0]) && B[1] == (L | A | O | H) && !B[4].length && B[9] == 1 ? N = N[zu(B[0])].apply(N, B[3]) : N = T.length == 1 && Rh(T) ? N[P]() : N.thru(T);
          }
          return function() {
            var $ = arguments, z = $[0];
            if (N && $.length == 1 && xe(z))
              return N.plant(z).value();
            for (var X = 0, ee = f ? s[X].apply(this, $) : z; ++X < f; )
              ee = s[X].call(this, ee);
            return ee;
          };
        });
      }
      function Hu(o, s, f, p, E, T, N, P, B, $) {
        var z = s & L, X = s & R, ee = s & w, le = s & (A | I), pe = s & j, be = ee ? n : Bs(o);
        function me() {
          for (var Ie = arguments.length, De = V(Ie), Ln = Ie; Ln--; )
            De[Ln] = arguments[Ln];
          if (le)
            var ln = va(me), Bn = iT(De, ln);
          if (p && (De = oE(De, p, E, le)), T && (De = aE(De, T, N, le)), Ie -= Bn, le && Ie < $) {
            var xt = Ri(De, ln);
            return pE(
              o,
              s,
              Hu,
              me.placeholder,
              f,
              De,
              xt,
              P,
              B,
              $ - Ie
            );
          }
          var _r = X ? f : this, ci = ee ? _r[o] : o;
          return Ie = De.length, P ? De = dR(De, P) : pe && Ie > 1 && De.reverse(), z && B < Ie && (De.length = B), this && this !== Bt && this instanceof me && (ci = be || Bs(ci)), ci.apply(_r, De);
        }
        return me;
      }
      function dE(o, s) {
        return function(f, p) {
          return x2(f, o, s(p), {});
        };
      }
      function Vu(o, s) {
        return function(f, p) {
          var E;
          if (f === n && p === n)
            return s;
          if (f !== n && (E = f), p !== n) {
            if (E === n)
              return p;
            typeof f == "string" || typeof p == "string" ? (f = Fn(f), p = Fn(p)) : (f = Qy(f), p = Qy(p)), E = o(f, p);
          }
          return E;
        };
      }
      function wh(o) {
        return ai(function(s) {
          return s = ut(s, Dn(he())), Te(function(f) {
            var p = this;
            return o(s, function(E) {
              return Pn(E, p, f);
            });
          });
        });
      }
      function Uu(o, s) {
        s = s === n ? " " : Fn(s);
        var f = s.length;
        if (f < 2)
          return f ? ph(s, o) : s;
        var p = ph(s, Au(o / la(s)));
        return sa(s) ? Di(xr(p), 0, o).join("") : p.slice(0, o);
      }
      function X2(o, s, f, p) {
        var E = s & R, T = Bs(o);
        function N() {
          for (var P = -1, B = arguments.length, $ = -1, z = p.length, X = V(z + B), ee = this && this !== Bt && this instanceof N ? T : o; ++$ < z; )
            X[$] = p[$];
          for (; B--; )
            X[$++] = arguments[++P];
          return Pn(ee, E ? f : this, X);
        }
        return N;
      }
      function hE(o) {
        return function(s, f, p) {
          return p && typeof p != "number" && sn(s, f, p) && (f = p = n), s = ui(s), f === n ? (f = s, s = 0) : f = ui(f), p = p === n ? s < f ? 1 : -1 : ui(p), O2(s, f, p, o);
        };
      }
      function $u(o) {
        return function(s, f) {
          return typeof s == "string" && typeof f == "string" || (s = or(s), f = or(f)), o(s, f);
        };
      }
      function pE(o, s, f, p, E, T, N, P, B, $) {
        var z = s & A, X = z ? N : n, ee = z ? n : N, le = z ? T : n, pe = z ? n : T;
        s |= z ? O : F, s &= ~(z ? F : O), s & C || (s &= -4);
        var be = [
          o,
          s,
          E,
          le,
          X,
          pe,
          ee,
          P,
          B,
          $
        ], me = f.apply(n, be);
        return Rh(o) && kE(me, be), me.placeholder = p, AE(me, o, s);
      }
      function Ch(o) {
        var s = kt[o];
        return function(f, p) {
          if (f = or(f), p = p == null ? 0 : Gt(Se(p), 292), p && Ay(f)) {
            var E = (je(f) + "e").split("e"), T = s(E[0] + "e" + (+E[1] + p));
            return E = (je(T) + "e").split("e"), +(E[0] + "e" + (+E[1] - p));
          }
          return s(f);
        };
      }
      var q2 = fa && 1 / gu(new fa([, -0]))[1] == te ? function(o) {
        return new fa(o);
      } : jh;
      function mE(o) {
        return function(s) {
          var f = Xt(s);
          return f == de ? Zd(s) : f == it ? fT(s) : rT(s, o(s));
        };
      }
      function oi(o, s, f, p, E, T, N, P) {
        var B = s & w;
        if (!B && typeof o != "function")
          throw new er(l);
        var $ = p ? p.length : 0;
        if ($ || (s &= -97, p = E = n), N = N === n ? N : At(Se(N), 0), P = P === n ? P : Se(P), $ -= E ? E.length : 0, s & F) {
          var z = p, X = E;
          p = E = n;
        }
        var ee = B ? n : bh(o), le = [
          o,
          s,
          f,
          p,
          E,
          z,
          X,
          T,
          N,
          P
        ];
        if (ee && uR(le, ee), o = le[0], s = le[1], f = le[2], p = le[3], E = le[4], P = le[9] = le[9] === n ? B ? 0 : o.length : At(le[9] - $, 0), !P && s & (A | I) && (s &= -25), !s || s == R)
          var pe = W2(o, s, f);
        else s == A || s == I ? pe = G2(o, s, P) : (s == O || s == (R | O)) && !E.length ? pe = X2(o, s, f, p) : pe = Hu.apply(n, le);
        var be = ee ? Ky : kE;
        return AE(be(pe, le), o, s);
      }
      function vE(o, s, f, p) {
        return o === n || Cr(o, ca[f]) && !Ge.call(p, f) ? s : o;
      }
      function gE(o, s, f, p, E, T) {
        return ft(o) && ft(s) && (T.set(s, o), Fu(o, s, n, gE, T), T.delete(s)), o;
      }
      function K2(o) {
        return Us(o) ? n : o;
      }
      function yE(o, s, f, p, E, T) {
        var N = f & b, P = o.length, B = s.length;
        if (P != B && !(N && B > P))
          return !1;
        var $ = T.get(o), z = T.get(s);
        if ($ && z)
          return $ == s && z == o;
        var X = -1, ee = !0, le = f & S ? new xo() : n;
        for (T.set(o, s), T.set(s, o); ++X < P; ) {
          var pe = o[X], be = s[X];
          if (p)
            var me = N ? p(be, pe, X, s, o, T) : p(pe, be, X, o, s, T);
          if (me !== n) {
            if (me)
              continue;
            ee = !1;
            break;
          }
          if (le) {
            if (!Gd(s, function(Ie, De) {
              if (!As(le, De) && (pe === Ie || E(pe, Ie, f, p, T)))
                return le.push(De);
            })) {
              ee = !1;
              break;
            }
          } else if (!(pe === be || E(pe, be, f, p, T))) {
            ee = !1;
            break;
          }
        }
        return T.delete(o), T.delete(s), ee;
      }
      function Y2(o, s, f, p, E, T, N) {
        switch (f) {
          case jt:
            if (o.byteLength != s.byteLength || o.byteOffset != s.byteOffset)
              return !1;
            o = o.buffer, s = s.buffer;
          case nn:
            return !(o.byteLength != s.byteLength || !T(new _u(o), new _u(s)));
          case Ke:
          case Ye:
          case Ue:
            return Cr(+o, +s);
          case vt:
            return o.name == s.name && o.message == s.message;
          case Oe:
          case tn:
            return o == s + "";
          case de:
            var P = Zd;
          case it:
            var B = p & b;
            if (P || (P = gu), o.size != s.size && !B)
              return !1;
            var $ = N.get(o);
            if ($)
              return $ == s;
            p |= S, N.set(o, s);
            var z = yE(P(o), P(s), p, E, T, N);
            return N.delete(o), z;
          case Nn:
            if (Os)
              return Os.call(o) == Os.call(s);
        }
        return !1;
      }
      function Q2(o, s, f, p, E, T) {
        var N = f & b, P = _h(o), B = P.length, $ = _h(s), z = $.length;
        if (B != z && !N)
          return !1;
        for (var X = B; X--; ) {
          var ee = P[X];
          if (!(N ? ee in s : Ge.call(s, ee)))
            return !1;
        }
        var le = T.get(o), pe = T.get(s);
        if (le && pe)
          return le == s && pe == o;
        var be = !0;
        T.set(o, s), T.set(s, o);
        for (var me = N; ++X < B; ) {
          ee = P[X];
          var Ie = o[ee], De = s[ee];
          if (p)
            var Ln = N ? p(De, Ie, ee, s, o, T) : p(Ie, De, ee, o, s, T);
          if (!(Ln === n ? Ie === De || E(Ie, De, f, p, T) : Ln)) {
            be = !1;
            break;
          }
          me || (me = ee == "constructor");
        }
        if (be && !me) {
          var ln = o.constructor, Bn = s.constructor;
          ln != Bn && "constructor" in o && "constructor" in s && !(typeof ln == "function" && ln instanceof ln && typeof Bn == "function" && Bn instanceof Bn) && (be = !1);
        }
        return T.delete(o), T.delete(s), be;
      }
      function ai(o) {
        return Nh(SE(o, n, PE), o + "");
      }
      function _h(o) {
        return By(o, Pt, Ah);
      }
      function Sh(o) {
        return By(o, wn, EE);
      }
      var bh = Ru ? function(o) {
        return Ru.get(o);
      } : jh;
      function zu(o) {
        for (var s = o.name + "", f = da[s], p = Ge.call(da, s) ? f.length : 0; p--; ) {
          var E = f[p], T = E.func;
          if (T == null || T == o)
            return E.name;
        }
        return s;
      }
      function va(o) {
        var s = Ge.call(k, "placeholder") ? k : o;
        return s.placeholder;
      }
      function he() {
        var o = k.iteratee || $h;
        return o = o === $h ? Uy : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function ju(o, s) {
        var f = o.__data__;
        return oR(s) ? f[typeof s == "string" ? "string" : "hash"] : f.map;
      }
      function kh(o) {
        for (var s = Pt(o), f = s.length; f--; ) {
          var p = s[f], E = o[p];
          s[f] = [p, E, CE(E)];
        }
        return s;
      }
      function _o(o, s) {
        var f = lT(o, s);
        return Vy(f) ? f : n;
      }
      function Z2(o) {
        var s = Ge.call(o, yo), f = o[yo];
        try {
          o[yo] = n;
          var p = !0;
        } catch {
        }
        var E = wu.call(o);
        return p && (s ? o[yo] = f : delete o[yo]), E;
      }
      var Ah = eh ? function(o) {
        return o == null ? [] : (o = et(o), Ai(eh(o), function(s) {
          return by.call(o, s);
        }));
      } : Wh, EE = eh ? function(o) {
        for (var s = []; o; )
          Ti(s, Ah(o)), o = Su(o);
        return s;
      } : Wh, Xt = an;
      (th && Xt(new th(new ArrayBuffer(1))) != jt || Rs && Xt(new Rs()) != de || nh && Xt(nh.resolve()) != Je || fa && Xt(new fa()) != it || Is && Xt(new Is()) != Br) && (Xt = function(o) {
        var s = an(o), f = s == _e ? o.constructor : n, p = f ? So(f) : "";
        if (p)
          switch (p) {
            case DT:
              return jt;
            case FT:
              return de;
            case MT:
              return Je;
            case LT:
              return it;
            case BT:
              return Br;
          }
        return s;
      });
      function J2(o, s, f) {
        for (var p = -1, E = f.length; ++p < E; ) {
          var T = f[p], N = T.size;
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
              o = At(o, s - N);
              break;
          }
        }
        return { start: o, end: s };
      }
      function eR(o) {
        var s = o.match(Vr);
        return s ? s[1].split(vo) : [];
      }
      function xE(o, s, f) {
        s = Pi(s, o);
        for (var p = -1, E = s.length, T = !1; ++p < E; ) {
          var N = zr(s[p]);
          if (!(T = o != null && f(o, N)))
            break;
          o = o[N];
        }
        return T || ++p != E ? T : (E = o == null ? 0 : o.length, !!E && Qu(E) && si(N, E) && (xe(o) || bo(o)));
      }
      function tR(o) {
        var s = o.length, f = new o.constructor(s);
        return s && typeof o[0] == "string" && Ge.call(o, "index") && (f.index = o.index, f.input = o.input), f;
      }
      function wE(o) {
        return typeof o.constructor == "function" && !Hs(o) ? ha(Su(o)) : {};
      }
      function nR(o, s, f) {
        var p = o.constructor;
        switch (s) {
          case nn:
            return xh(o);
          case Ke:
          case Ye:
            return new p(+o);
          case jt:
            return H2(o, f);
          case ti:
          case na:
          case qn:
          case ra:
          case _s:
          case Ss:
          case ho:
          case ia:
          case bs:
            return rE(o, f);
          case de:
            return new p();
          case Ue:
          case tn:
            return new p(o);
          case Oe:
            return V2(o);
          case it:
            return new p();
          case Nn:
            return U2(o);
        }
      }
      function rR(o, s) {
        var f = s.length;
        if (!f)
          return o;
        var p = f - 1;
        return s[p] = (f > 1 ? "& " : "") + s[p], s = s.join(f > 2 ? ", " : " "), o.replace(mo, `{
/* [wrapped with ` + s + `] */
`);
      }
      function iR(o) {
        return xe(o) || bo(o) || !!(ky && o && o[ky]);
      }
      function si(o, s) {
        var f = typeof o;
        return s = s ?? G, !!s && (f == "number" || f != "symbol" && vA.test(o)) && o > -1 && o % 1 == 0 && o < s;
      }
      function sn(o, s, f) {
        if (!ft(f))
          return !1;
        var p = typeof s;
        return (p == "number" ? xn(f) && si(s, f.length) : p == "string" && s in f) ? Cr(f[s], o) : !1;
      }
      function Th(o, s) {
        if (xe(o))
          return !1;
        var f = typeof o;
        return f == "number" || f == "symbol" || f == "boolean" || o == null || Mn(o) ? !0 : ki.test(o) || !Kn.test(o) || s != null && o in et(s);
      }
      function oR(o) {
        var s = typeof o;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
      }
      function Rh(o) {
        var s = zu(o), f = k[s];
        if (typeof f != "function" || !(s in Pe.prototype))
          return !1;
        if (o === f)
          return !0;
        var p = bh(f);
        return !!p && o === p[0];
      }
      function aR(o) {
        return !!Cy && Cy in o;
      }
      var sR = Eu ? li : Gh;
      function Hs(o) {
        var s = o && o.constructor, f = typeof s == "function" && s.prototype || ca;
        return o === f;
      }
      function CE(o) {
        return o === o && !ft(o);
      }
      function _E(o, s) {
        return function(f) {
          return f == null ? !1 : f[o] === s && (s !== n || o in et(f));
        };
      }
      function lR(o) {
        var s = Ku(o, function(p) {
          return f.size === d && f.clear(), p;
        }), f = s.cache;
        return s;
      }
      function uR(o, s) {
        var f = o[1], p = s[1], E = f | p, T = E < (R | w | L), N = p == L && f == A || p == L && f == H && o[7].length <= s[8] || p == (L | H) && s[7].length <= s[8] && f == A;
        if (!(T || N))
          return o;
        p & R && (o[2] = s[2], E |= f & R ? 0 : C);
        var P = s[3];
        if (P) {
          var B = o[3];
          o[3] = B ? oE(B, P, s[4]) : P, o[4] = B ? Ri(o[3], h) : s[4];
        }
        return P = s[5], P && (B = o[5], o[5] = B ? aE(B, P, s[6]) : P, o[6] = B ? Ri(o[5], h) : s[6]), P = s[7], P && (o[7] = P), p & L && (o[8] = o[8] == null ? s[8] : Gt(o[8], s[8])), o[9] == null && (o[9] = s[9]), o[0] = s[0], o[1] = E, o;
      }
      function cR(o) {
        var s = [];
        if (o != null)
          for (var f in et(o))
            s.push(f);
        return s;
      }
      function fR(o) {
        return wu.call(o);
      }
      function SE(o, s, f) {
        return s = At(s === n ? o.length - 1 : s, 0), function() {
          for (var p = arguments, E = -1, T = At(p.length - s, 0), N = V(T); ++E < T; )
            N[E] = p[s + E];
          E = -1;
          for (var P = V(s + 1); ++E < s; )
            P[E] = p[E];
          return P[s] = f(N), Pn(o, this, P);
        };
      }
      function bE(o, s) {
        return s.length < 2 ? o : Co(o, rr(s, 0, -1));
      }
      function dR(o, s) {
        for (var f = o.length, p = Gt(s.length, f), E = En(o); p--; ) {
          var T = s[p];
          o[p] = si(T, f) ? E[T] : n;
        }
        return o;
      }
      function Ih(o, s) {
        if (!(s === "constructor" && typeof o[s] == "function") && s != "__proto__")
          return o[s];
      }
      var kE = TE(Ky), Vs = AT || function(o, s) {
        return Bt.setTimeout(o, s);
      }, Nh = TE(F2);
      function AE(o, s, f) {
        var p = s + "";
        return Nh(o, rR(p, hR(eR(p), f)));
      }
      function TE(o) {
        var s = 0, f = 0;
        return function() {
          var p = NT(), E = ie - (p - f);
          if (f = p, E > 0) {
            if (++s >= Q)
              return arguments[0];
          } else
            s = 0;
          return o.apply(n, arguments);
        };
      }
      function Wu(o, s) {
        var f = -1, p = o.length, E = p - 1;
        for (s = s === n ? p : s; ++f < s; ) {
          var T = hh(f, E), N = o[T];
          o[T] = o[f], o[f] = N;
        }
        return o.length = s, o;
      }
      var RE = lR(function(o) {
        var s = [];
        return o.charCodeAt(0) === 46 && s.push(""), o.replace(bt, function(f, p, E, T) {
          s.push(E ? T.replace(cA, "$1") : p || f);
        }), s;
      });
      function zr(o) {
        if (typeof o == "string" || Mn(o))
          return o;
        var s = o + "";
        return s == "0" && 1 / o == -te ? "-0" : s;
      }
      function So(o) {
        if (o != null) {
          try {
            return xu.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function hR(o, s) {
        return Jn(Ve, function(f) {
          var p = "_." + f[0];
          s & f[1] && !mu(o, p) && o.push(p);
        }), o.sort();
      }
      function IE(o) {
        if (o instanceof Pe)
          return o.clone();
        var s = new tr(o.__wrapped__, o.__chain__);
        return s.__actions__ = En(o.__actions__), s.__index__ = o.__index__, s.__values__ = o.__values__, s;
      }
      function pR(o, s, f) {
        (f ? sn(o, s, f) : s === n) ? s = 1 : s = At(Se(s), 0);
        var p = o == null ? 0 : o.length;
        if (!p || s < 1)
          return [];
        for (var E = 0, T = 0, N = V(Au(p / s)); E < p; )
          N[T++] = rr(o, E, E += s);
        return N;
      }
      function mR(o) {
        for (var s = -1, f = o == null ? 0 : o.length, p = 0, E = []; ++s < f; ) {
          var T = o[s];
          T && (E[p++] = T);
        }
        return E;
      }
      function vR() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var s = V(o - 1), f = arguments[0], p = o; p--; )
          s[p - 1] = arguments[p];
        return Ti(xe(f) ? En(f) : [f], Ht(s, 1));
      }
      var gR = Te(function(o, s) {
        return Et(o) ? Ds(o, Ht(s, 1, Et, !0)) : [];
      }), yR = Te(function(o, s) {
        var f = ir(s);
        return Et(f) && (f = n), Et(o) ? Ds(o, Ht(s, 1, Et, !0), he(f, 2)) : [];
      }), ER = Te(function(o, s) {
        var f = ir(s);
        return Et(f) && (f = n), Et(o) ? Ds(o, Ht(s, 1, Et, !0), n, f) : [];
      });
      function xR(o, s, f) {
        var p = o == null ? 0 : o.length;
        return p ? (s = f || s === n ? 1 : Se(s), rr(o, s < 0 ? 0 : s, p)) : [];
      }
      function wR(o, s, f) {
        var p = o == null ? 0 : o.length;
        return p ? (s = f || s === n ? 1 : Se(s), s = p - s, rr(o, 0, s < 0 ? 0 : s)) : [];
      }
      function CR(o, s) {
        return o && o.length ? Lu(o, he(s, 3), !0, !0) : [];
      }
      function _R(o, s) {
        return o && o.length ? Lu(o, he(s, 3), !0) : [];
      }
      function SR(o, s, f, p) {
        var E = o == null ? 0 : o.length;
        return E ? (f && typeof f != "number" && sn(o, s, f) && (f = 0, p = E), v2(o, s, f, p)) : [];
      }
      function NE(o, s, f) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = f == null ? 0 : Se(f);
        return E < 0 && (E = At(p + E, 0)), vu(o, he(s, 3), E);
      }
      function OE(o, s, f) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = p - 1;
        return f !== n && (E = Se(f), E = f < 0 ? At(p + E, 0) : Gt(E, p - 1)), vu(o, he(s, 3), E, !0);
      }
      function PE(o) {
        var s = o == null ? 0 : o.length;
        return s ? Ht(o, 1) : [];
      }
      function bR(o) {
        var s = o == null ? 0 : o.length;
        return s ? Ht(o, te) : [];
      }
      function kR(o, s) {
        var f = o == null ? 0 : o.length;
        return f ? (s = s === n ? 1 : Se(s), Ht(o, s)) : [];
      }
      function AR(o) {
        for (var s = -1, f = o == null ? 0 : o.length, p = {}; ++s < f; ) {
          var E = o[s];
          p[E[0]] = E[1];
        }
        return p;
      }
      function DE(o) {
        return o && o.length ? o[0] : n;
      }
      function TR(o, s, f) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = f == null ? 0 : Se(f);
        return E < 0 && (E = At(p + E, 0)), aa(o, s, E);
      }
      function RR(o) {
        var s = o == null ? 0 : o.length;
        return s ? rr(o, 0, -1) : [];
      }
      var IR = Te(function(o) {
        var s = ut(o, yh);
        return s.length && s[0] === o[0] ? lh(s) : [];
      }), NR = Te(function(o) {
        var s = ir(o), f = ut(o, yh);
        return s === ir(f) ? s = n : f.pop(), f.length && f[0] === o[0] ? lh(f, he(s, 2)) : [];
      }), OR = Te(function(o) {
        var s = ir(o), f = ut(o, yh);
        return s = typeof s == "function" ? s : n, s && f.pop(), f.length && f[0] === o[0] ? lh(f, n, s) : [];
      });
      function PR(o, s) {
        return o == null ? "" : RT.call(o, s);
      }
      function ir(o) {
        var s = o == null ? 0 : o.length;
        return s ? o[s - 1] : n;
      }
      function DR(o, s, f) {
        var p = o == null ? 0 : o.length;
        if (!p)
          return -1;
        var E = p;
        return f !== n && (E = Se(f), E = E < 0 ? At(p + E, 0) : Gt(E, p - 1)), s === s ? hT(o, s, E) : vu(o, py, E, !0);
      }
      function FR(o, s) {
        return o && o.length ? Wy(o, Se(s)) : n;
      }
      var MR = Te(FE);
      function FE(o, s) {
        return o && o.length && s && s.length ? dh(o, s) : o;
      }
      function LR(o, s, f) {
        return o && o.length && s && s.length ? dh(o, s, he(f, 2)) : o;
      }
      function BR(o, s, f) {
        return o && o.length && s && s.length ? dh(o, s, n, f) : o;
      }
      var HR = ai(function(o, s) {
        var f = o == null ? 0 : o.length, p = ih(o, s);
        return qy(o, ut(s, function(E) {
          return si(E, f) ? +E : E;
        }).sort(iE)), p;
      });
      function VR(o, s) {
        var f = [];
        if (!(o && o.length))
          return f;
        var p = -1, E = [], T = o.length;
        for (s = he(s, 3); ++p < T; ) {
          var N = o[p];
          s(N, p, o) && (f.push(N), E.push(p));
        }
        return qy(o, E), f;
      }
      function Oh(o) {
        return o == null ? o : PT.call(o);
      }
      function UR(o, s, f) {
        var p = o == null ? 0 : o.length;
        return p ? (f && typeof f != "number" && sn(o, s, f) ? (s = 0, f = p) : (s = s == null ? 0 : Se(s), f = f === n ? p : Se(f)), rr(o, s, f)) : [];
      }
      function $R(o, s) {
        return Mu(o, s);
      }
      function zR(o, s, f) {
        return mh(o, s, he(f, 2));
      }
      function jR(o, s) {
        var f = o == null ? 0 : o.length;
        if (f) {
          var p = Mu(o, s);
          if (p < f && Cr(o[p], s))
            return p;
        }
        return -1;
      }
      function WR(o, s) {
        return Mu(o, s, !0);
      }
      function GR(o, s, f) {
        return mh(o, s, he(f, 2), !0);
      }
      function XR(o, s) {
        var f = o == null ? 0 : o.length;
        if (f) {
          var p = Mu(o, s, !0) - 1;
          if (Cr(o[p], s))
            return p;
        }
        return -1;
      }
      function qR(o) {
        return o && o.length ? Yy(o) : [];
      }
      function KR(o, s) {
        return o && o.length ? Yy(o, he(s, 2)) : [];
      }
      function YR(o) {
        var s = o == null ? 0 : o.length;
        return s ? rr(o, 1, s) : [];
      }
      function QR(o, s, f) {
        return o && o.length ? (s = f || s === n ? 1 : Se(s), rr(o, 0, s < 0 ? 0 : s)) : [];
      }
      function ZR(o, s, f) {
        var p = o == null ? 0 : o.length;
        return p ? (s = f || s === n ? 1 : Se(s), s = p - s, rr(o, s < 0 ? 0 : s, p)) : [];
      }
      function JR(o, s) {
        return o && o.length ? Lu(o, he(s, 3), !1, !0) : [];
      }
      function eI(o, s) {
        return o && o.length ? Lu(o, he(s, 3)) : [];
      }
      var tI = Te(function(o) {
        return Oi(Ht(o, 1, Et, !0));
      }), nI = Te(function(o) {
        var s = ir(o);
        return Et(s) && (s = n), Oi(Ht(o, 1, Et, !0), he(s, 2));
      }), rI = Te(function(o) {
        var s = ir(o);
        return s = typeof s == "function" ? s : n, Oi(Ht(o, 1, Et, !0), n, s);
      });
      function iI(o) {
        return o && o.length ? Oi(o) : [];
      }
      function oI(o, s) {
        return o && o.length ? Oi(o, he(s, 2)) : [];
      }
      function aI(o, s) {
        return s = typeof s == "function" ? s : n, o && o.length ? Oi(o, n, s) : [];
      }
      function Ph(o) {
        if (!(o && o.length))
          return [];
        var s = 0;
        return o = Ai(o, function(f) {
          if (Et(f))
            return s = At(f.length, s), !0;
        }), Yd(s, function(f) {
          return ut(o, Xd(f));
        });
      }
      function ME(o, s) {
        if (!(o && o.length))
          return [];
        var f = Ph(o);
        return s == null ? f : ut(f, function(p) {
          return Pn(s, n, p);
        });
      }
      var sI = Te(function(o, s) {
        return Et(o) ? Ds(o, s) : [];
      }), lI = Te(function(o) {
        return gh(Ai(o, Et));
      }), uI = Te(function(o) {
        var s = ir(o);
        return Et(s) && (s = n), gh(Ai(o, Et), he(s, 2));
      }), cI = Te(function(o) {
        var s = ir(o);
        return s = typeof s == "function" ? s : n, gh(Ai(o, Et), n, s);
      }), fI = Te(Ph);
      function dI(o, s) {
        return eE(o || [], s || [], Ps);
      }
      function hI(o, s) {
        return eE(o || [], s || [], Ls);
      }
      var pI = Te(function(o) {
        var s = o.length, f = s > 1 ? o[s - 1] : n;
        return f = typeof f == "function" ? (o.pop(), f) : n, ME(o, f);
      });
      function LE(o) {
        var s = k(o);
        return s.__chain__ = !0, s;
      }
      function mI(o, s) {
        return s(o), o;
      }
      function Gu(o, s) {
        return s(o);
      }
      var vI = ai(function(o) {
        var s = o.length, f = s ? o[0] : 0, p = this.__wrapped__, E = function(T) {
          return ih(T, o);
        };
        return s > 1 || this.__actions__.length || !(p instanceof Pe) || !si(f) ? this.thru(E) : (p = p.slice(f, +f + (s ? 1 : 0)), p.__actions__.push({
          func: Gu,
          args: [E],
          thisArg: n
        }), new tr(p, this.__chain__).thru(function(T) {
          return s && !T.length && T.push(n), T;
        }));
      });
      function gI() {
        return LE(this);
      }
      function yI() {
        return new tr(this.value(), this.__chain__);
      }
      function EI() {
        this.__values__ === n && (this.__values__ = QE(this.value()));
        var o = this.__index__ >= this.__values__.length, s = o ? n : this.__values__[this.__index__++];
        return { done: o, value: s };
      }
      function xI() {
        return this;
      }
      function wI(o) {
        for (var s, f = this; f instanceof Nu; ) {
          var p = IE(f);
          p.__index__ = 0, p.__values__ = n, s ? E.__wrapped__ = p : s = p;
          var E = p;
          f = f.__wrapped__;
        }
        return E.__wrapped__ = o, s;
      }
      function CI() {
        var o = this.__wrapped__;
        if (o instanceof Pe) {
          var s = o;
          return this.__actions__.length && (s = new Pe(this)), s = s.reverse(), s.__actions__.push({
            func: Gu,
            args: [Oh],
            thisArg: n
          }), new tr(s, this.__chain__);
        }
        return this.thru(Oh);
      }
      function _I() {
        return Jy(this.__wrapped__, this.__actions__);
      }
      var SI = Bu(function(o, s, f) {
        Ge.call(o, f) ? ++o[f] : ii(o, f, 1);
      });
      function bI(o, s, f) {
        var p = xe(o) ? dy : m2;
        return f && sn(o, s, f) && (s = n), p(o, he(s, 3));
      }
      function kI(o, s) {
        var f = xe(o) ? Ai : My;
        return f(o, he(s, 3));
      }
      var AI = cE(NE), TI = cE(OE);
      function RI(o, s) {
        return Ht(Xu(o, s), 1);
      }
      function II(o, s) {
        return Ht(Xu(o, s), te);
      }
      function NI(o, s, f) {
        return f = f === n ? 1 : Se(f), Ht(Xu(o, s), f);
      }
      function BE(o, s) {
        var f = xe(o) ? Jn : Ni;
        return f(o, he(s, 3));
      }
      function HE(o, s) {
        var f = xe(o) ? YA : Fy;
        return f(o, he(s, 3));
      }
      var OI = Bu(function(o, s, f) {
        Ge.call(o, f) ? o[f].push(s) : ii(o, f, [s]);
      });
      function PI(o, s, f, p) {
        o = xn(o) ? o : ya(o), f = f && !p ? Se(f) : 0;
        var E = o.length;
        return f < 0 && (f = At(E + f, 0)), Zu(o) ? f <= E && o.indexOf(s, f) > -1 : !!E && aa(o, s, f) > -1;
      }
      var DI = Te(function(o, s, f) {
        var p = -1, E = typeof s == "function", T = xn(o) ? V(o.length) : [];
        return Ni(o, function(N) {
          T[++p] = E ? Pn(s, N, f) : Fs(N, s, f);
        }), T;
      }), FI = Bu(function(o, s, f) {
        ii(o, f, s);
      });
      function Xu(o, s) {
        var f = xe(o) ? ut : $y;
        return f(o, he(s, 3));
      }
      function MI(o, s, f, p) {
        return o == null ? [] : (xe(s) || (s = s == null ? [] : [s]), f = p ? n : f, xe(f) || (f = f == null ? [] : [f]), Gy(o, s, f));
      }
      var LI = Bu(function(o, s, f) {
        o[f ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function BI(o, s, f) {
        var p = xe(o) ? Wd : vy, E = arguments.length < 3;
        return p(o, he(s, 4), f, E, Ni);
      }
      function HI(o, s, f) {
        var p = xe(o) ? QA : vy, E = arguments.length < 3;
        return p(o, he(s, 4), f, E, Fy);
      }
      function VI(o, s) {
        var f = xe(o) ? Ai : My;
        return f(o, Yu(he(s, 3)));
      }
      function UI(o) {
        var s = xe(o) ? Ny : P2;
        return s(o);
      }
      function $I(o, s, f) {
        (f ? sn(o, s, f) : s === n) ? s = 1 : s = Se(s);
        var p = xe(o) ? c2 : D2;
        return p(o, s);
      }
      function zI(o) {
        var s = xe(o) ? f2 : M2;
        return s(o);
      }
      function jI(o) {
        if (o == null)
          return 0;
        if (xn(o))
          return Zu(o) ? la(o) : o.length;
        var s = Xt(o);
        return s == de || s == it ? o.size : ch(o).length;
      }
      function WI(o, s, f) {
        var p = xe(o) ? Gd : L2;
        return f && sn(o, s, f) && (s = n), p(o, he(s, 3));
      }
      var GI = Te(function(o, s) {
        if (o == null)
          return [];
        var f = s.length;
        return f > 1 && sn(o, s[0], s[1]) ? s = [] : f > 2 && sn(s[0], s[1], s[2]) && (s = [s[0]]), Gy(o, Ht(s, 1), []);
      }), qu = kT || function() {
        return Bt.Date.now();
      };
      function XI(o, s) {
        if (typeof s != "function")
          throw new er(l);
        return o = Se(o), function() {
          if (--o < 1)
            return s.apply(this, arguments);
        };
      }
      function VE(o, s, f) {
        return s = f ? n : s, s = o && s == null ? o.length : s, oi(o, L, n, n, n, n, s);
      }
      function UE(o, s) {
        var f;
        if (typeof s != "function")
          throw new er(l);
        return o = Se(o), function() {
          return --o > 0 && (f = s.apply(this, arguments)), o <= 1 && (s = n), f;
        };
      }
      var Dh = Te(function(o, s, f) {
        var p = R;
        if (f.length) {
          var E = Ri(f, va(Dh));
          p |= O;
        }
        return oi(o, p, s, f, E);
      }), $E = Te(function(o, s, f) {
        var p = R | w;
        if (f.length) {
          var E = Ri(f, va($E));
          p |= O;
        }
        return oi(s, p, o, f, E);
      });
      function zE(o, s, f) {
        s = f ? n : s;
        var p = oi(o, A, n, n, n, n, n, s);
        return p.placeholder = zE.placeholder, p;
      }
      function jE(o, s, f) {
        s = f ? n : s;
        var p = oi(o, I, n, n, n, n, n, s);
        return p.placeholder = jE.placeholder, p;
      }
      function WE(o, s, f) {
        var p, E, T, N, P, B, $ = 0, z = !1, X = !1, ee = !0;
        if (typeof o != "function")
          throw new er(l);
        s = or(s) || 0, ft(f) && (z = !!f.leading, X = "maxWait" in f, T = X ? At(or(f.maxWait) || 0, s) : T, ee = "trailing" in f ? !!f.trailing : ee);
        function le(xt) {
          var _r = p, ci = E;
          return p = E = n, $ = xt, N = o.apply(ci, _r), N;
        }
        function pe(xt) {
          return $ = xt, P = Vs(Ie, s), z ? le(xt) : N;
        }
        function be(xt) {
          var _r = xt - B, ci = xt - $, cx = s - _r;
          return X ? Gt(cx, T - ci) : cx;
        }
        function me(xt) {
          var _r = xt - B, ci = xt - $;
          return B === n || _r >= s || _r < 0 || X && ci >= T;
        }
        function Ie() {
          var xt = qu();
          if (me(xt))
            return De(xt);
          P = Vs(Ie, be(xt));
        }
        function De(xt) {
          return P = n, ee && p ? le(xt) : (p = E = n, N);
        }
        function Ln() {
          P !== n && tE(P), $ = 0, p = B = E = P = n;
        }
        function ln() {
          return P === n ? N : De(qu());
        }
        function Bn() {
          var xt = qu(), _r = me(xt);
          if (p = arguments, E = this, B = xt, _r) {
            if (P === n)
              return pe(B);
            if (X)
              return tE(P), P = Vs(Ie, s), le(B);
          }
          return P === n && (P = Vs(Ie, s)), N;
        }
        return Bn.cancel = Ln, Bn.flush = ln, Bn;
      }
      var qI = Te(function(o, s) {
        return Dy(o, 1, s);
      }), KI = Te(function(o, s, f) {
        return Dy(o, or(s) || 0, f);
      });
      function YI(o) {
        return oi(o, j);
      }
      function Ku(o, s) {
        if (typeof o != "function" || s != null && typeof s != "function")
          throw new er(l);
        var f = function() {
          var p = arguments, E = s ? s.apply(this, p) : p[0], T = f.cache;
          if (T.has(E))
            return T.get(E);
          var N = o.apply(this, p);
          return f.cache = T.set(E, N) || T, N;
        };
        return f.cache = new (Ku.Cache || ri)(), f;
      }
      Ku.Cache = ri;
      function Yu(o) {
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
      function QI(o) {
        return UE(2, o);
      }
      var ZI = B2(function(o, s) {
        s = s.length == 1 && xe(s[0]) ? ut(s[0], Dn(he())) : ut(Ht(s, 1), Dn(he()));
        var f = s.length;
        return Te(function(p) {
          for (var E = -1, T = Gt(p.length, f); ++E < T; )
            p[E] = s[E].call(this, p[E]);
          return Pn(o, this, p);
        });
      }), Fh = Te(function(o, s) {
        var f = Ri(s, va(Fh));
        return oi(o, O, n, s, f);
      }), GE = Te(function(o, s) {
        var f = Ri(s, va(GE));
        return oi(o, F, n, s, f);
      }), JI = ai(function(o, s) {
        return oi(o, H, n, n, n, s);
      });
      function eN(o, s) {
        if (typeof o != "function")
          throw new er(l);
        return s = s === n ? s : Se(s), Te(o, s);
      }
      function tN(o, s) {
        if (typeof o != "function")
          throw new er(l);
        return s = s == null ? 0 : At(Se(s), 0), Te(function(f) {
          var p = f[s], E = Di(f, 0, s);
          return p && Ti(E, p), Pn(o, this, E);
        });
      }
      function nN(o, s, f) {
        var p = !0, E = !0;
        if (typeof o != "function")
          throw new er(l);
        return ft(f) && (p = "leading" in f ? !!f.leading : p, E = "trailing" in f ? !!f.trailing : E), WE(o, s, {
          leading: p,
          maxWait: s,
          trailing: E
        });
      }
      function rN(o) {
        return VE(o, 1);
      }
      function iN(o, s) {
        return Fh(Eh(s), o);
      }
      function oN() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return xe(o) ? o : [o];
      }
      function aN(o) {
        return nr(o, x);
      }
      function sN(o, s) {
        return s = typeof s == "function" ? s : n, nr(o, x, s);
      }
      function lN(o) {
        return nr(o, m | x);
      }
      function uN(o, s) {
        return s = typeof s == "function" ? s : n, nr(o, m | x, s);
      }
      function cN(o, s) {
        return s == null || Py(o, s, Pt(s));
      }
      function Cr(o, s) {
        return o === s || o !== o && s !== s;
      }
      var fN = $u(sh), dN = $u(function(o, s) {
        return o >= s;
      }), bo = Hy(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Hy : function(o) {
        return gt(o) && Ge.call(o, "callee") && !by.call(o, "callee");
      }, xe = V.isArray, hN = ay ? Dn(ay) : w2;
      function xn(o) {
        return o != null && Qu(o.length) && !li(o);
      }
      function Et(o) {
        return gt(o) && xn(o);
      }
      function pN(o) {
        return o === !0 || o === !1 || gt(o) && an(o) == Ke;
      }
      var Fi = TT || Gh, mN = sy ? Dn(sy) : C2;
      function vN(o) {
        return gt(o) && o.nodeType === 1 && !Us(o);
      }
      function gN(o) {
        if (o == null)
          return !0;
        if (xn(o) && (xe(o) || typeof o == "string" || typeof o.splice == "function" || Fi(o) || ga(o) || bo(o)))
          return !o.length;
        var s = Xt(o);
        if (s == de || s == it)
          return !o.size;
        if (Hs(o))
          return !ch(o).length;
        for (var f in o)
          if (Ge.call(o, f))
            return !1;
        return !0;
      }
      function yN(o, s) {
        return Ms(o, s);
      }
      function EN(o, s, f) {
        f = typeof f == "function" ? f : n;
        var p = f ? f(o, s) : n;
        return p === n ? Ms(o, s, n, f) : !!p;
      }
      function Mh(o) {
        if (!gt(o))
          return !1;
        var s = an(o);
        return s == vt || s == Ae || typeof o.message == "string" && typeof o.name == "string" && !Us(o);
      }
      function xN(o) {
        return typeof o == "number" && Ay(o);
      }
      function li(o) {
        if (!ft(o))
          return !1;
        var s = an(o);
        return s == rt || s == ve || s == mt || s == We;
      }
      function XE(o) {
        return typeof o == "number" && o == Se(o);
      }
      function Qu(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= G;
      }
      function ft(o) {
        var s = typeof o;
        return o != null && (s == "object" || s == "function");
      }
      function gt(o) {
        return o != null && typeof o == "object";
      }
      var qE = ly ? Dn(ly) : S2;
      function wN(o, s) {
        return o === s || uh(o, s, kh(s));
      }
      function CN(o, s, f) {
        return f = typeof f == "function" ? f : n, uh(o, s, kh(s), f);
      }
      function _N(o) {
        return KE(o) && o != +o;
      }
      function SN(o) {
        if (sR(o))
          throw new ye(a);
        return Vy(o);
      }
      function bN(o) {
        return o === null;
      }
      function kN(o) {
        return o == null;
      }
      function KE(o) {
        return typeof o == "number" || gt(o) && an(o) == Ue;
      }
      function Us(o) {
        if (!gt(o) || an(o) != _e)
          return !1;
        var s = Su(o);
        if (s === null)
          return !0;
        var f = Ge.call(s, "constructor") && s.constructor;
        return typeof f == "function" && f instanceof f && xu.call(f) == CT;
      }
      var Lh = uy ? Dn(uy) : b2;
      function AN(o) {
        return XE(o) && o >= -G && o <= G;
      }
      var YE = cy ? Dn(cy) : k2;
      function Zu(o) {
        return typeof o == "string" || !xe(o) && gt(o) && an(o) == tn;
      }
      function Mn(o) {
        return typeof o == "symbol" || gt(o) && an(o) == Nn;
      }
      var ga = fy ? Dn(fy) : A2;
      function TN(o) {
        return o === n;
      }
      function RN(o) {
        return gt(o) && Xt(o) == Br;
      }
      function IN(o) {
        return gt(o) && an(o) == ta;
      }
      var NN = $u(fh), ON = $u(function(o, s) {
        return o <= s;
      });
      function QE(o) {
        if (!o)
          return [];
        if (xn(o))
          return Zu(o) ? xr(o) : En(o);
        if (Ts && o[Ts])
          return cT(o[Ts]());
        var s = Xt(o), f = s == de ? Zd : s == it ? gu : ya;
        return f(o);
      }
      function ui(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = or(o), o === te || o === -te) {
          var s = o < 0 ? -1 : 1;
          return s * Y;
        }
        return o === o ? o : 0;
      }
      function Se(o) {
        var s = ui(o), f = s % 1;
        return s === s ? f ? s - f : s : 0;
      }
      function ZE(o) {
        return o ? wo(Se(o), 0, se) : 0;
      }
      function or(o) {
        if (typeof o == "number")
          return o;
        if (Mn(o))
          return J;
        if (ft(o)) {
          var s = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = ft(s) ? s + "" : s;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = gy(o);
        var f = hA.test(o);
        return f || mA.test(o) ? XA(o.slice(2), f ? 2 : 8) : dA.test(o) ? J : +o;
      }
      function JE(o) {
        return $r(o, wn(o));
      }
      function PN(o) {
        return o ? wo(Se(o), -G, G) : o === 0 ? o : 0;
      }
      function je(o) {
        return o == null ? "" : Fn(o);
      }
      var DN = pa(function(o, s) {
        if (Hs(s) || xn(s)) {
          $r(s, Pt(s), o);
          return;
        }
        for (var f in s)
          Ge.call(s, f) && Ps(o, f, s[f]);
      }), ex = pa(function(o, s) {
        $r(s, wn(s), o);
      }), Ju = pa(function(o, s, f, p) {
        $r(s, wn(s), o, p);
      }), FN = pa(function(o, s, f, p) {
        $r(s, Pt(s), o, p);
      }), MN = ai(ih);
      function LN(o, s) {
        var f = ha(o);
        return s == null ? f : Oy(f, s);
      }
      var BN = Te(function(o, s) {
        o = et(o);
        var f = -1, p = s.length, E = p > 2 ? s[2] : n;
        for (E && sn(s[0], s[1], E) && (p = 1); ++f < p; )
          for (var T = s[f], N = wn(T), P = -1, B = N.length; ++P < B; ) {
            var $ = N[P], z = o[$];
            (z === n || Cr(z, ca[$]) && !Ge.call(o, $)) && (o[$] = T[$]);
          }
        return o;
      }), HN = Te(function(o) {
        return o.push(n, gE), Pn(tx, n, o);
      });
      function VN(o, s) {
        return hy(o, he(s, 3), Ur);
      }
      function UN(o, s) {
        return hy(o, he(s, 3), ah);
      }
      function $N(o, s) {
        return o == null ? o : oh(o, he(s, 3), wn);
      }
      function zN(o, s) {
        return o == null ? o : Ly(o, he(s, 3), wn);
      }
      function jN(o, s) {
        return o && Ur(o, he(s, 3));
      }
      function WN(o, s) {
        return o && ah(o, he(s, 3));
      }
      function GN(o) {
        return o == null ? [] : Du(o, Pt(o));
      }
      function XN(o) {
        return o == null ? [] : Du(o, wn(o));
      }
      function Bh(o, s, f) {
        var p = o == null ? n : Co(o, s);
        return p === n ? f : p;
      }
      function qN(o, s) {
        return o != null && xE(o, s, g2);
      }
      function Hh(o, s) {
        return o != null && xE(o, s, y2);
      }
      var KN = dE(function(o, s, f) {
        s != null && typeof s.toString != "function" && (s = wu.call(s)), o[s] = f;
      }, Uh(Cn)), YN = dE(function(o, s, f) {
        s != null && typeof s.toString != "function" && (s = wu.call(s)), Ge.call(o, s) ? o[s].push(f) : o[s] = [f];
      }, he), QN = Te(Fs);
      function Pt(o) {
        return xn(o) ? Iy(o) : ch(o);
      }
      function wn(o) {
        return xn(o) ? Iy(o, !0) : T2(o);
      }
      function ZN(o, s) {
        var f = {};
        return s = he(s, 3), Ur(o, function(p, E, T) {
          ii(f, s(p, E, T), p);
        }), f;
      }
      function JN(o, s) {
        var f = {};
        return s = he(s, 3), Ur(o, function(p, E, T) {
          ii(f, E, s(p, E, T));
        }), f;
      }
      var eO = pa(function(o, s, f) {
        Fu(o, s, f);
      }), tx = pa(function(o, s, f, p) {
        Fu(o, s, f, p);
      }), tO = ai(function(o, s) {
        var f = {};
        if (o == null)
          return f;
        var p = !1;
        s = ut(s, function(T) {
          return T = Pi(T, o), p || (p = T.length > 1), T;
        }), $r(o, Sh(o), f), p && (f = nr(f, m | v | x, K2));
        for (var E = s.length; E--; )
          vh(f, s[E]);
        return f;
      });
      function nO(o, s) {
        return nx(o, Yu(he(s)));
      }
      var rO = ai(function(o, s) {
        return o == null ? {} : I2(o, s);
      });
      function nx(o, s) {
        if (o == null)
          return {};
        var f = ut(Sh(o), function(p) {
          return [p];
        });
        return s = he(s), Xy(o, f, function(p, E) {
          return s(p, E[0]);
        });
      }
      function iO(o, s, f) {
        s = Pi(s, o);
        var p = -1, E = s.length;
        for (E || (E = 1, o = n); ++p < E; ) {
          var T = o == null ? n : o[zr(s[p])];
          T === n && (p = E, T = f), o = li(T) ? T.call(o) : T;
        }
        return o;
      }
      function oO(o, s, f) {
        return o == null ? o : Ls(o, s, f);
      }
      function aO(o, s, f, p) {
        return p = typeof p == "function" ? p : n, o == null ? o : Ls(o, s, f, p);
      }
      var rx = mE(Pt), ix = mE(wn);
      function sO(o, s, f) {
        var p = xe(o), E = p || Fi(o) || ga(o);
        if (s = he(s, 4), f == null) {
          var T = o && o.constructor;
          E ? f = p ? new T() : [] : ft(o) ? f = li(T) ? ha(Su(o)) : {} : f = {};
        }
        return (E ? Jn : Ur)(o, function(N, P, B) {
          return s(f, N, P, B);
        }), f;
      }
      function lO(o, s) {
        return o == null ? !0 : vh(o, s);
      }
      function uO(o, s, f) {
        return o == null ? o : Zy(o, s, Eh(f));
      }
      function cO(o, s, f, p) {
        return p = typeof p == "function" ? p : n, o == null ? o : Zy(o, s, Eh(f), p);
      }
      function ya(o) {
        return o == null ? [] : Qd(o, Pt(o));
      }
      function fO(o) {
        return o == null ? [] : Qd(o, wn(o));
      }
      function dO(o, s, f) {
        return f === n && (f = s, s = n), f !== n && (f = or(f), f = f === f ? f : 0), s !== n && (s = or(s), s = s === s ? s : 0), wo(or(o), s, f);
      }
      function hO(o, s, f) {
        return s = ui(s), f === n ? (f = s, s = 0) : f = ui(f), o = or(o), E2(o, s, f);
      }
      function pO(o, s, f) {
        if (f && typeof f != "boolean" && sn(o, s, f) && (s = f = n), f === n && (typeof s == "boolean" ? (f = s, s = n) : typeof o == "boolean" && (f = o, o = n)), o === n && s === n ? (o = 0, s = 1) : (o = ui(o), s === n ? (s = o, o = 0) : s = ui(s)), o > s) {
          var p = o;
          o = s, s = p;
        }
        if (f || o % 1 || s % 1) {
          var E = Ty();
          return Gt(o + E * (s - o + GA("1e-" + ((E + "").length - 1))), s);
        }
        return hh(o, s);
      }
      var mO = ma(function(o, s, f) {
        return s = s.toLowerCase(), o + (f ? ox(s) : s);
      });
      function ox(o) {
        return Vh(je(o).toLowerCase());
      }
      function ax(o) {
        return o = je(o), o && o.replace(gA, oT).replace(MA, "");
      }
      function vO(o, s, f) {
        o = je(o), s = Fn(s);
        var p = o.length;
        f = f === n ? p : wo(Se(f), 0, p);
        var E = f;
        return f -= s.length, f >= 0 && o.slice(f, E) == s;
      }
      function gO(o) {
        return o = je(o), o && on.test(o) ? o.replace(St, aT) : o;
      }
      function yO(o) {
        return o = je(o), o && Qn.test(o) ? o.replace(Yn, "\\$&") : o;
      }
      var EO = ma(function(o, s, f) {
        return o + (f ? "-" : "") + s.toLowerCase();
      }), xO = ma(function(o, s, f) {
        return o + (f ? " " : "") + s.toLowerCase();
      }), wO = uE("toLowerCase");
      function CO(o, s, f) {
        o = je(o), s = Se(s);
        var p = s ? la(o) : 0;
        if (!s || p >= s)
          return o;
        var E = (s - p) / 2;
        return Uu(Tu(E), f) + o + Uu(Au(E), f);
      }
      function _O(o, s, f) {
        o = je(o), s = Se(s);
        var p = s ? la(o) : 0;
        return s && p < s ? o + Uu(s - p, f) : o;
      }
      function SO(o, s, f) {
        o = je(o), s = Se(s);
        var p = s ? la(o) : 0;
        return s && p < s ? Uu(s - p, f) + o : o;
      }
      function bO(o, s, f) {
        return f || s == null ? s = 0 : s && (s = +s), OT(je(o).replace(On, ""), s || 0);
      }
      function kO(o, s, f) {
        return (f ? sn(o, s, f) : s === n) ? s = 1 : s = Se(s), ph(je(o), s);
      }
      function AO() {
        var o = arguments, s = je(o[0]);
        return o.length < 3 ? s : s.replace(o[1], o[2]);
      }
      var TO = ma(function(o, s, f) {
        return o + (f ? "_" : "") + s.toLowerCase();
      });
      function RO(o, s, f) {
        return f && typeof f != "number" && sn(o, s, f) && (s = f = n), f = f === n ? se : f >>> 0, f ? (o = je(o), o && (typeof s == "string" || s != null && !Lh(s)) && (s = Fn(s), !s && sa(o)) ? Di(xr(o), 0, f) : o.split(s, f)) : [];
      }
      var IO = ma(function(o, s, f) {
        return o + (f ? " " : "") + Vh(s);
      });
      function NO(o, s, f) {
        return o = je(o), f = f == null ? 0 : wo(Se(f), 0, o.length), s = Fn(s), o.slice(f, f + s.length) == s;
      }
      function OO(o, s, f) {
        var p = k.templateSettings;
        f && sn(o, s, f) && (s = n), o = je(o), s = Ju({}, s, p, vE);
        var E = Ju({}, s.imports, p.imports, vE), T = Pt(E), N = Qd(E, T), P, B, $ = 0, z = s.interpolate || du, X = "__p += '", ee = Jd(
          (s.escape || du).source + "|" + z.source + "|" + (z === Wt ? fA : du).source + "|" + (s.evaluate || du).source + "|$",
          "g"
        ), le = "//# sourceURL=" + (Ge.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++UA + "]") + `
`;
        o.replace(ee, function(me, Ie, De, Ln, ln, Bn) {
          return De || (De = Ln), X += o.slice($, Bn).replace(yA, sT), Ie && (P = !0, X += `' +
__e(` + Ie + `) +
'`), ln && (B = !0, X += `';
` + ln + `;
__p += '`), De && (X += `' +
((__t = (` + De + `)) == null ? '' : __t) +
'`), $ = Bn + me.length, me;
        }), X += `';
`;
        var pe = Ge.call(s, "variable") && s.variable;
        if (!pe)
          X = `with (obj) {
` + X + `
}
`;
        else if (uA.test(pe))
          throw new ye(u);
        X = (B ? X.replace(cu, "") : X).replace(Fd, "$1").replace(Md, "$1;"), X = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (P ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + X + `return __p
}`;
        var be = lx(function() {
          return $e(T, le + "return " + X).apply(n, N);
        });
        if (be.source = X, Mh(be))
          throw be;
        return be;
      }
      function PO(o) {
        return je(o).toLowerCase();
      }
      function DO(o) {
        return je(o).toUpperCase();
      }
      function FO(o, s, f) {
        if (o = je(o), o && (f || s === n))
          return gy(o);
        if (!o || !(s = Fn(s)))
          return o;
        var p = xr(o), E = xr(s), T = yy(p, E), N = Ey(p, E) + 1;
        return Di(p, T, N).join("");
      }
      function MO(o, s, f) {
        if (o = je(o), o && (f || s === n))
          return o.slice(0, wy(o) + 1);
        if (!o || !(s = Fn(s)))
          return o;
        var p = xr(o), E = Ey(p, xr(s)) + 1;
        return Di(p, 0, E).join("");
      }
      function LO(o, s, f) {
        if (o = je(o), o && (f || s === n))
          return o.replace(On, "");
        if (!o || !(s = Fn(s)))
          return o;
        var p = xr(o), E = yy(p, xr(s));
        return Di(p, E).join("");
      }
      function BO(o, s) {
        var f = W, p = K;
        if (ft(s)) {
          var E = "separator" in s ? s.separator : E;
          f = "length" in s ? Se(s.length) : f, p = "omission" in s ? Fn(s.omission) : p;
        }
        o = je(o);
        var T = o.length;
        if (sa(o)) {
          var N = xr(o);
          T = N.length;
        }
        if (f >= T)
          return o;
        var P = f - la(p);
        if (P < 1)
          return p;
        var B = N ? Di(N, 0, P).join("") : o.slice(0, P);
        if (E === n)
          return B + p;
        if (N && (P += B.length - P), Lh(E)) {
          if (o.slice(P).search(E)) {
            var $, z = B;
            for (E.global || (E = Jd(E.source, je(H0.exec(E)) + "g")), E.lastIndex = 0; $ = E.exec(z); )
              var X = $.index;
            B = B.slice(0, X === n ? P : X);
          }
        } else if (o.indexOf(Fn(E), P) != P) {
          var ee = B.lastIndexOf(E);
          ee > -1 && (B = B.slice(0, ee));
        }
        return B + p;
      }
      function HO(o) {
        return o = je(o), o && rn.test(o) ? o.replace(fu, pT) : o;
      }
      var VO = ma(function(o, s, f) {
        return o + (f ? " " : "") + s.toUpperCase();
      }), Vh = uE("toUpperCase");
      function sx(o, s, f) {
        return o = je(o), s = f ? n : s, s === n ? uT(o) ? gT(o) : eT(o) : o.match(s) || [];
      }
      var lx = Te(function(o, s) {
        try {
          return Pn(o, n, s);
        } catch (f) {
          return Mh(f) ? f : new ye(f);
        }
      }), UO = ai(function(o, s) {
        return Jn(s, function(f) {
          f = zr(f), ii(o, f, Dh(o[f], o));
        }), o;
      });
      function $O(o) {
        var s = o == null ? 0 : o.length, f = he();
        return o = s ? ut(o, function(p) {
          if (typeof p[1] != "function")
            throw new er(l);
          return [f(p[0]), p[1]];
        }) : [], Te(function(p) {
          for (var E = -1; ++E < s; ) {
            var T = o[E];
            if (Pn(T[0], this, p))
              return Pn(T[1], this, p);
          }
        });
      }
      function zO(o) {
        return p2(nr(o, m));
      }
      function Uh(o) {
        return function() {
          return o;
        };
      }
      function jO(o, s) {
        return o == null || o !== o ? s : o;
      }
      var WO = fE(), GO = fE(!0);
      function Cn(o) {
        return o;
      }
      function $h(o) {
        return Uy(typeof o == "function" ? o : nr(o, m));
      }
      function XO(o) {
        return zy(nr(o, m));
      }
      function qO(o, s) {
        return jy(o, nr(s, m));
      }
      var KO = Te(function(o, s) {
        return function(f) {
          return Fs(f, o, s);
        };
      }), YO = Te(function(o, s) {
        return function(f) {
          return Fs(o, f, s);
        };
      });
      function zh(o, s, f) {
        var p = Pt(s), E = Du(s, p);
        f == null && !(ft(s) && (E.length || !p.length)) && (f = s, s = o, o = this, E = Du(s, Pt(s)));
        var T = !(ft(f) && "chain" in f) || !!f.chain, N = li(o);
        return Jn(E, function(P) {
          var B = s[P];
          o[P] = B, N && (o.prototype[P] = function() {
            var $ = this.__chain__;
            if (T || $) {
              var z = o(this.__wrapped__), X = z.__actions__ = En(this.__actions__);
              return X.push({ func: B, args: arguments, thisArg: o }), z.__chain__ = $, z;
            }
            return B.apply(o, Ti([this.value()], arguments));
          });
        }), o;
      }
      function QO() {
        return Bt._ === this && (Bt._ = _T), this;
      }
      function jh() {
      }
      function ZO(o) {
        return o = Se(o), Te(function(s) {
          return Wy(s, o);
        });
      }
      var JO = wh(ut), eP = wh(dy), tP = wh(Gd);
      function ux(o) {
        return Th(o) ? Xd(zr(o)) : N2(o);
      }
      function nP(o) {
        return function(s) {
          return o == null ? n : Co(o, s);
        };
      }
      var rP = hE(), iP = hE(!0);
      function Wh() {
        return [];
      }
      function Gh() {
        return !1;
      }
      function oP() {
        return {};
      }
      function aP() {
        return "";
      }
      function sP() {
        return !0;
      }
      function lP(o, s) {
        if (o = Se(o), o < 1 || o > G)
          return [];
        var f = se, p = Gt(o, se);
        s = he(s), o -= se;
        for (var E = Yd(p, s); ++f < o; )
          s(f);
        return E;
      }
      function uP(o) {
        return xe(o) ? ut(o, zr) : Mn(o) ? [o] : En(RE(je(o)));
      }
      function cP(o) {
        var s = ++wT;
        return je(o) + s;
      }
      var fP = Vu(function(o, s) {
        return o + s;
      }, 0), dP = Ch("ceil"), hP = Vu(function(o, s) {
        return o / s;
      }, 1), pP = Ch("floor");
      function mP(o) {
        return o && o.length ? Pu(o, Cn, sh) : n;
      }
      function vP(o, s) {
        return o && o.length ? Pu(o, he(s, 2), sh) : n;
      }
      function gP(o) {
        return my(o, Cn);
      }
      function yP(o, s) {
        return my(o, he(s, 2));
      }
      function EP(o) {
        return o && o.length ? Pu(o, Cn, fh) : n;
      }
      function xP(o, s) {
        return o && o.length ? Pu(o, he(s, 2), fh) : n;
      }
      var wP = Vu(function(o, s) {
        return o * s;
      }, 1), CP = Ch("round"), _P = Vu(function(o, s) {
        return o - s;
      }, 0);
      function SP(o) {
        return o && o.length ? Kd(o, Cn) : 0;
      }
      function bP(o, s) {
        return o && o.length ? Kd(o, he(s, 2)) : 0;
      }
      return k.after = XI, k.ary = VE, k.assign = DN, k.assignIn = ex, k.assignInWith = Ju, k.assignWith = FN, k.at = MN, k.before = UE, k.bind = Dh, k.bindAll = UO, k.bindKey = $E, k.castArray = oN, k.chain = LE, k.chunk = pR, k.compact = mR, k.concat = vR, k.cond = $O, k.conforms = zO, k.constant = Uh, k.countBy = SI, k.create = LN, k.curry = zE, k.curryRight = jE, k.debounce = WE, k.defaults = BN, k.defaultsDeep = HN, k.defer = qI, k.delay = KI, k.difference = gR, k.differenceBy = yR, k.differenceWith = ER, k.drop = xR, k.dropRight = wR, k.dropRightWhile = CR, k.dropWhile = _R, k.fill = SR, k.filter = kI, k.flatMap = RI, k.flatMapDeep = II, k.flatMapDepth = NI, k.flatten = PE, k.flattenDeep = bR, k.flattenDepth = kR, k.flip = YI, k.flow = WO, k.flowRight = GO, k.fromPairs = AR, k.functions = GN, k.functionsIn = XN, k.groupBy = OI, k.initial = RR, k.intersection = IR, k.intersectionBy = NR, k.intersectionWith = OR, k.invert = KN, k.invertBy = YN, k.invokeMap = DI, k.iteratee = $h, k.keyBy = FI, k.keys = Pt, k.keysIn = wn, k.map = Xu, k.mapKeys = ZN, k.mapValues = JN, k.matches = XO, k.matchesProperty = qO, k.memoize = Ku, k.merge = eO, k.mergeWith = tx, k.method = KO, k.methodOf = YO, k.mixin = zh, k.negate = Yu, k.nthArg = ZO, k.omit = tO, k.omitBy = nO, k.once = QI, k.orderBy = MI, k.over = JO, k.overArgs = ZI, k.overEvery = eP, k.overSome = tP, k.partial = Fh, k.partialRight = GE, k.partition = LI, k.pick = rO, k.pickBy = nx, k.property = ux, k.propertyOf = nP, k.pull = MR, k.pullAll = FE, k.pullAllBy = LR, k.pullAllWith = BR, k.pullAt = HR, k.range = rP, k.rangeRight = iP, k.rearg = JI, k.reject = VI, k.remove = VR, k.rest = eN, k.reverse = Oh, k.sampleSize = $I, k.set = oO, k.setWith = aO, k.shuffle = zI, k.slice = UR, k.sortBy = GI, k.sortedUniq = qR, k.sortedUniqBy = KR, k.split = RO, k.spread = tN, k.tail = YR, k.take = QR, k.takeRight = ZR, k.takeRightWhile = JR, k.takeWhile = eI, k.tap = mI, k.throttle = nN, k.thru = Gu, k.toArray = QE, k.toPairs = rx, k.toPairsIn = ix, k.toPath = uP, k.toPlainObject = JE, k.transform = sO, k.unary = rN, k.union = tI, k.unionBy = nI, k.unionWith = rI, k.uniq = iI, k.uniqBy = oI, k.uniqWith = aI, k.unset = lO, k.unzip = Ph, k.unzipWith = ME, k.update = uO, k.updateWith = cO, k.values = ya, k.valuesIn = fO, k.without = sI, k.words = sx, k.wrap = iN, k.xor = lI, k.xorBy = uI, k.xorWith = cI, k.zip = fI, k.zipObject = dI, k.zipObjectDeep = hI, k.zipWith = pI, k.entries = rx, k.entriesIn = ix, k.extend = ex, k.extendWith = Ju, zh(k, k), k.add = fP, k.attempt = lx, k.camelCase = mO, k.capitalize = ox, k.ceil = dP, k.clamp = dO, k.clone = aN, k.cloneDeep = lN, k.cloneDeepWith = uN, k.cloneWith = sN, k.conformsTo = cN, k.deburr = ax, k.defaultTo = jO, k.divide = hP, k.endsWith = vO, k.eq = Cr, k.escape = gO, k.escapeRegExp = yO, k.every = bI, k.find = AI, k.findIndex = NE, k.findKey = VN, k.findLast = TI, k.findLastIndex = OE, k.findLastKey = UN, k.floor = pP, k.forEach = BE, k.forEachRight = HE, k.forIn = $N, k.forInRight = zN, k.forOwn = jN, k.forOwnRight = WN, k.get = Bh, k.gt = fN, k.gte = dN, k.has = qN, k.hasIn = Hh, k.head = DE, k.identity = Cn, k.includes = PI, k.indexOf = TR, k.inRange = hO, k.invoke = QN, k.isArguments = bo, k.isArray = xe, k.isArrayBuffer = hN, k.isArrayLike = xn, k.isArrayLikeObject = Et, k.isBoolean = pN, k.isBuffer = Fi, k.isDate = mN, k.isElement = vN, k.isEmpty = gN, k.isEqual = yN, k.isEqualWith = EN, k.isError = Mh, k.isFinite = xN, k.isFunction = li, k.isInteger = XE, k.isLength = Qu, k.isMap = qE, k.isMatch = wN, k.isMatchWith = CN, k.isNaN = _N, k.isNative = SN, k.isNil = kN, k.isNull = bN, k.isNumber = KE, k.isObject = ft, k.isObjectLike = gt, k.isPlainObject = Us, k.isRegExp = Lh, k.isSafeInteger = AN, k.isSet = YE, k.isString = Zu, k.isSymbol = Mn, k.isTypedArray = ga, k.isUndefined = TN, k.isWeakMap = RN, k.isWeakSet = IN, k.join = PR, k.kebabCase = EO, k.last = ir, k.lastIndexOf = DR, k.lowerCase = xO, k.lowerFirst = wO, k.lt = NN, k.lte = ON, k.max = mP, k.maxBy = vP, k.mean = gP, k.meanBy = yP, k.min = EP, k.minBy = xP, k.stubArray = Wh, k.stubFalse = Gh, k.stubObject = oP, k.stubString = aP, k.stubTrue = sP, k.multiply = wP, k.nth = FR, k.noConflict = QO, k.noop = jh, k.now = qu, k.pad = CO, k.padEnd = _O, k.padStart = SO, k.parseInt = bO, k.random = pO, k.reduce = BI, k.reduceRight = HI, k.repeat = kO, k.replace = AO, k.result = iO, k.round = CP, k.runInContext = M, k.sample = UI, k.size = jI, k.snakeCase = TO, k.some = WI, k.sortedIndex = $R, k.sortedIndexBy = zR, k.sortedIndexOf = jR, k.sortedLastIndex = WR, k.sortedLastIndexBy = GR, k.sortedLastIndexOf = XR, k.startCase = IO, k.startsWith = NO, k.subtract = _P, k.sum = SP, k.sumBy = bP, k.template = OO, k.times = lP, k.toFinite = ui, k.toInteger = Se, k.toLength = ZE, k.toLower = PO, k.toNumber = or, k.toSafeInteger = PN, k.toString = je, k.toUpper = DO, k.trim = FO, k.trimEnd = MO, k.trimStart = LO, k.truncate = BO, k.unescape = HO, k.uniqueId = cP, k.upperCase = VO, k.upperFirst = Vh, k.each = BE, k.eachRight = HE, k.first = DE, zh(k, function() {
        var o = {};
        return Ur(k, function(s, f) {
          Ge.call(k.prototype, f) || (o[f] = s);
        }), o;
      }(), { chain: !1 }), k.VERSION = r, Jn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        k[o].placeholder = k;
      }), Jn(["drop", "take"], function(o, s) {
        Pe.prototype[o] = function(f) {
          f = f === n ? 1 : At(Se(f), 0);
          var p = this.__filtered__ && !s ? new Pe(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = Gt(f, p.__takeCount__) : p.__views__.push({
            size: Gt(f, se),
            type: o + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, Pe.prototype[o + "Right"] = function(f) {
          return this.reverse()[o](f).reverse();
        };
      }), Jn(["filter", "map", "takeWhile"], function(o, s) {
        var f = s + 1, p = f == Ee || f == Ce;
        Pe.prototype[o] = function(E) {
          var T = this.clone();
          return T.__iteratees__.push({
            iteratee: he(E, 3),
            type: f
          }), T.__filtered__ = T.__filtered__ || p, T;
        };
      }), Jn(["head", "last"], function(o, s) {
        var f = "take" + (s ? "Right" : "");
        Pe.prototype[o] = function() {
          return this[f](1).value()[0];
        };
      }), Jn(["initial", "tail"], function(o, s) {
        var f = "drop" + (s ? "" : "Right");
        Pe.prototype[o] = function() {
          return this.__filtered__ ? new Pe(this) : this[f](1);
        };
      }), Pe.prototype.compact = function() {
        return this.filter(Cn);
      }, Pe.prototype.find = function(o) {
        return this.filter(o).head();
      }, Pe.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Pe.prototype.invokeMap = Te(function(o, s) {
        return typeof o == "function" ? new Pe(this) : this.map(function(f) {
          return Fs(f, o, s);
        });
      }), Pe.prototype.reject = function(o) {
        return this.filter(Yu(he(o)));
      }, Pe.prototype.slice = function(o, s) {
        o = Se(o);
        var f = this;
        return f.__filtered__ && (o > 0 || s < 0) ? new Pe(f) : (o < 0 ? f = f.takeRight(-o) : o && (f = f.drop(o)), s !== n && (s = Se(s), f = s < 0 ? f.dropRight(-s) : f.take(s - o)), f);
      }, Pe.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Pe.prototype.toArray = function() {
        return this.take(se);
      }, Ur(Pe.prototype, function(o, s) {
        var f = /^(?:filter|find|map|reject)|While$/.test(s), p = /^(?:head|last)$/.test(s), E = k[p ? "take" + (s == "last" ? "Right" : "") : s], T = p || /^find/.test(s);
        E && (k.prototype[s] = function() {
          var N = this.__wrapped__, P = p ? [1] : arguments, B = N instanceof Pe, $ = P[0], z = B || xe(N), X = function(Ie) {
            var De = E.apply(k, Ti([Ie], P));
            return p && ee ? De[0] : De;
          };
          z && f && typeof $ == "function" && $.length != 1 && (B = z = !1);
          var ee = this.__chain__, le = !!this.__actions__.length, pe = T && !ee, be = B && !le;
          if (!T && z) {
            N = be ? N : new Pe(this);
            var me = o.apply(N, P);
            return me.__actions__.push({ func: Gu, args: [X], thisArg: n }), new tr(me, ee);
          }
          return pe && be ? o.apply(this, P) : (me = this.thru(X), pe ? p ? me.value()[0] : me.value() : me);
        });
      }), Jn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var s = yu[o], f = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(o);
        k.prototype[o] = function() {
          var E = arguments;
          if (p && !this.__chain__) {
            var T = this.value();
            return s.apply(xe(T) ? T : [], E);
          }
          return this[f](function(N) {
            return s.apply(xe(N) ? N : [], E);
          });
        };
      }), Ur(Pe.prototype, function(o, s) {
        var f = k[s];
        if (f) {
          var p = f.name + "";
          Ge.call(da, p) || (da[p] = []), da[p].push({ name: s, func: f });
        }
      }), da[Hu(n, w).name] = [{
        name: "wrapper",
        func: n
      }], Pe.prototype.clone = HT, Pe.prototype.reverse = VT, Pe.prototype.value = UT, k.prototype.at = vI, k.prototype.chain = gI, k.prototype.commit = yI, k.prototype.next = EI, k.prototype.plant = wI, k.prototype.reverse = CI, k.prototype.toJSON = k.prototype.valueOf = k.prototype.value = _I, k.prototype.first = k.prototype.head, Ts && (k.prototype[Ts] = xI), k;
    }, ua = yT();
    go ? ((go.exports = ua)._ = ua, $d._ = ua) : Bt._ = ua;
  }).call(zs);
})(Lf, Lf.exports);
var iA = Lf.exports;
const Bf = (e) => ({
  id: (e == null ? void 0 : e.id) ?? "",
  value: e
}), y6 = ({
  droppableContainers: e,
  collisionRect: t
}) => {
  const n = iA.sortBy(
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
      return [Bf(r)];
  }
  return [Bf(n[0])];
}, E6 = ({
  droppableContainers: e,
  collisionRect: t
}) => {
  const n = iA.sortBy(
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
      return [Bf(r)];
  }
  return [Bf(n[0])];
}, x6 = (e) => {
  var t, n;
  return e.collisionRect.top < (((n = (t = e.active.rect.current) == null ? void 0 : t.initial) == null ? void 0 : n.top) ?? 0) ? y6(e) : E6(e);
}, Hf = ({
  itemList: e,
  setState: t,
  updateOrder: n,
  children: r,
  renderOverlay: i,
  activeId: a,
  setActiveId: l
}) => {
  const u = F5(
    N1(w0),
    N1(E0, {
      coordinateGetter: m6
    })
  ), c = y.useCallback((m) => {
    const { active: v, over: x } = m;
    if (v.id !== x.id) {
      let b;
      t(() => {
        const [S] = e.filter((A) => A.id === v.id), [R] = e.filter((A) => A.id === x.id), w = e.indexOf(S), C = e.indexOf(R);
        return b = _0(e, w, C), b;
      }), n()(b);
    }
    l == null || l(null);
  }, [n, l]), d = y.useCallback((m) => {
    l == null || l(m.active.id);
  }, [l]), h = y.useCallback(() => {
    l == null || l(null);
  }, [l]);
  return /* @__PURE__ */ D.jsxs(
    D8,
    {
      sensors: u,
      modifiers: [g6],
      collisionDetection: x6,
      onDragStart: d,
      autoScroll: !1,
      onDragEnd: c,
      onDragCancel: h,
      children: [
        /* @__PURE__ */ D.jsx(
          o6,
          {
            items: e,
            strategy: r6,
            children: r
          }
        ),
        i && Gi.createPortal(
          /* @__PURE__ */ D.jsx(J8, { children: i(a) }),
          document.body
        )
      ]
    }
  );
};
Hf.defaultProps = {
  renderOverlay: void 0,
  activeId: null,
  setActiveId: () => {
  }
};
Hf.propTypes = {
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
const oA = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__card-body", e),
  ref: r,
  ...n
}, t)), j1 = "card", $p = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], w6 = ["white", "muted"], S0 = /* @__PURE__ */ _.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: a = !1,
  children: l,
  as: u = "div",
  ...c
}, d) => {
  const h = Z(t, e ? `${e}-${j1}` : j1, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ _.createElement(u, {
    ref: d,
    ...c,
    className: h
  }, a ? /* @__PURE__ */ _.createElement(oA, null, l) : l);
});
S0.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: g.string,
  /** Background color of the card. */
  bgColor: g.oneOf($p),
  /** Text color of the card. */
  textColor: g.oneOf([...$p, ...w6]),
  /** Border color of the card. */
  borderColor: g.oneOf($p),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: g.bool,
  /** Set a custom element for this component. */
  as: g.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: g.string,
  /** The content to render inside the card. */
  children: g.node
};
const ea = /* @__PURE__ */ y.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function C6({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ _.createElement(ea.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const _6 = _.createContext({}), aA = !0;
function S6({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: l, duration: u, enableAnimation: c = aA, customHighlightBackground: d }) {
  const h = {};
  return l === "rtl" && (h["--animation-direction"] = "reverse"), typeof u == "number" && (h["--animation-duration"] = `${u}s`), c || (h["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (h.width = n), (typeof r == "string" || typeof r == "number") && (h.height = r), (typeof i == "string" || typeof i == "number") && (h.borderRadius = i), a && (h.borderRadius = "50%"), typeof e < "u" && (h["--base-color"] = e), typeof t < "u" && (h["--highlight-color"] = t), typeof d == "string" && (h["--custom-highlight-background"] = d), h;
}
function fs({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: l, ...u }) {
  var c, d, h;
  const m = _.useContext(_6), v = { ...u };
  for (const [A, I] of Object.entries(u))
    typeof I > "u" && delete v[A];
  const x = {
    ...m,
    ...v,
    circle: a
  }, b = {
    ...l,
    ...S6(x)
  };
  let S = "react-loading-skeleton";
  n && (S += ` ${n}`);
  const R = (c = x.inline) !== null && c !== void 0 ? c : !1, w = [], C = Math.ceil(e);
  for (let A = 0; A < C; A++) {
    let I = b;
    if (C > e && A === C - 1) {
      const F = (d = I.width) !== null && d !== void 0 ? d : "100%", L = e % 1, H = typeof F == "number" ? F * L : `calc(${F} * ${L})`;
      I = { ...I, width: H };
    }
    const O = _.createElement("span", { className: S, style: I, key: A }, "‌");
    R ? w.push(O) : w.push(_.createElement(
      _.Fragment,
      { key: A },
      O,
      _.createElement("br", null)
    ));
  }
  return _.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (h = x.enableAnimation) !== null && h !== void 0 ? h : aA }, t ? w.map((A, I) => _.createElement(t, { key: I }, A)) : w);
}
const b6 = 20, b0 = /* @__PURE__ */ _.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: a,
  skeletonWidth: l
}, u) => {
  const {
    isLoading: c
  } = y.useContext(ea), d = y.useCallback((h) => {
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
  return c ? /* @__PURE__ */ _.createElement("div", {
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
b0.propTypes = {
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
b0.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: b6,
  skeletonWidth: null
};
const k6 = /* @__PURE__ */ y.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ _.createElement("div", {
  className: Z("pgn__card-divider", e),
  ref: n,
  ...t
})), A6 = 100, k0 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: a,
  skeletonWidth: l
}, u) => {
  const {
    isLoading: c
  } = y.useContext(ea);
  return c ? /* @__PURE__ */ _.createElement("div", {
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
k0.propTypes = {
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
k0.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: A6,
  skeletonWidth: void 0
};
const T6 = 18, A0 = /* @__PURE__ */ _.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: a,
  orientation: l
}, u) => {
  const {
    orientation: c,
    isLoading: d
  } = y.useContext(ea), h = l || c, m = `pgn__card-footer ${h}${n ? "-stacked" : ""}`, v = `pgn__card-footer-text ${h}${n ? "-stacked" : ""}`;
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
A0.propTypes = {
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
A0.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: T6,
  skeletonWidth: void 0
};
const sA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", R6 = 140, I6 = 41, T0 = /* @__PURE__ */ _.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: a,
  skeletonHeight: l,
  skeletonWidth: u,
  logoSkeleton: c,
  logoSkeletonHeight: d,
  logoSkeletonWidth: h,
  className: m,
  imageLoadingType: v,
  skeletonDuringImageLoad: x
}, b) => {
  const {
    orientation: S,
    isLoading: R
  } = y.useContext(ea), [w, C] = y.useState(!1), [A, I] = y.useState(!1), O = `pgn__card-wrapper-image-cap ${S}`, F = () => /* @__PURE__ */ _.createElement(fs, {
    containerClassName: "pgn__card-image-cap-loader",
    height: S === "horizontal" ? "100%" : l,
    width: u
  }), L = () => /* @__PURE__ */ _.createElement(fs, {
    containerClassName: "pgn__card-logo-cap",
    height: d,
    width: h
  });
  if (R)
    return /* @__PURE__ */ _.createElement("div", {
      className: Z(O, m),
      "data-testid": "image-loader-wrapper"
    }, F(), c && L());
  const H = (j, W, K) => {
    const {
      currentTarget: Q
    } = j;
    if (!W || Q.src.endsWith(W)) {
      K === "imageCap" ? Q.src = sA : I(!1);
      return;
    }
    Q.src = W;
  };
  return /* @__PURE__ */ _.createElement("div", {
    className: Z(m, O),
    ref: b
  }, !!e && /* @__PURE__ */ _.createElement(_.Fragment, null, x && !w && F(), /* @__PURE__ */ _.createElement("img", {
    className: Z("pgn__card-image-cap", {
      show: w
    }),
    src: e,
    onError: (j) => H(j, t, "imageCap"),
    onLoad: () => C(!0),
    alt: n,
    loading: v
  })), !!r && /* @__PURE__ */ _.createElement(_.Fragment, null, x && !A && L(), /* @__PURE__ */ _.createElement("img", {
    className: Z("pgn__card-logo-cap", {
      show: A
    }),
    src: r,
    onError: (j) => H(j, i, "logoCap"),
    onLoad: () => I(!0),
    alt: a,
    loading: v
  })));
});
T0.propTypes = {
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
  imageLoadingType: g.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: g.bool
};
T0.defaultProps = {
  src: void 0,
  fallbackSrc: sA,
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
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
const R0 = /* @__PURE__ */ _.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: a,
  ...l
}, u) => {
  const {
    isLoading: c
  } = y.useContext(ea);
  return c ? /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: u
  }, /* @__PURE__ */ _.createElement(fs, null)) : /* @__PURE__ */ _.createElement("div", {
    className: Z("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: u,
    ...l
  }, /* @__PURE__ */ _.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ _.createElement(Ot, {
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
R0.propTypes = {
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
R0.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const N6 = ["light", "dark", "muted"], I0 = /* @__PURE__ */ _.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: a,
  ...l
}, u) => {
  const c = i ? "muted" : a;
  return /* @__PURE__ */ _.createElement(C6, {
    orientation: e,
    isLoading: t,
    variant: c
  }, /* @__PURE__ */ _.createElement(S0, {
    ...l,
    className: Z(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${c}`]: c
    }),
    ref: u,
    tabIndex: r ? 0 : -1
  }));
});
I0.propTypes = {
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
I0.defaultProps = {
  ...S0.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const vr = Cb(I0, "Card", {
  muted: {
    deprType: Ha.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
vr.Status = R0;
vr.Header = b0;
vr.Divider = k6;
vr.Section = k0;
vr.Footer = A0;
vr.ImageCap = T0;
vr.Context = ea;
vr.Body = oA;
const uu = /* @__PURE__ */ _.createContext();
class N0 extends _.Component {
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
    }, /* @__PURE__ */ _.createElement(uu.Provider, {
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
N0.propTypes = {
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
N0.defaultProps = {
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
    return u4(t, r);
  });
}, zp = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return c4(t, r);
  });
}, O0 = /* @__PURE__ */ function(e) {
  Jl(t, e);
  function t() {
    for (var r, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    return r = e.call.apply(e, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, c) {
      var d = r.resolveArguments(u, c), h = d[0], m = d[1];
      r.removeClasses(h, "exit"), r.addClass(h, m ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, c);
    }, r.onEntering = function(u, c) {
      var d = r.resolveArguments(u, c), h = d[0], m = d[1], v = m ? "appear" : "enter";
      r.addClass(h, v, "active"), r.props.onEntering && r.props.onEntering(u, c);
    }, r.onEntered = function(u, c) {
      var d = r.resolveArguments(u, c), h = d[0], m = d[1], v = m ? "appear" : "enter";
      r.removeClasses(h, v), r.addClass(h, v, "done"), r.props.onEntered && r.props.onEntered(u, c);
    }, r.onExit = function(u) {
      var c = r.resolveArguments(u), d = c[0];
      r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(u);
    }, r.onExiting = function(u) {
      var c = r.resolveArguments(u), d = c[0];
      r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(u);
    }, r.onExited = function(u) {
      var c = r.resolveArguments(u), d = c[0];
      r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(u);
    }, r.resolveArguments = function(u, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, u] : [u, c];
    }, r.getClassNames = function(u) {
      var c = r.props.classNames, d = typeof c == "string", h = d && c ? c + "-" : "", m = d ? "" + h + u : c[u], v = d ? m + "-active" : c[u + "Active"], x = d ? m + "-done" : c[u + "Done"];
      return {
        baseClassName: m,
        activeClassName: v,
        doneClassName: x
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(i, a, l) {
    var u = this.getClassNames(a)[l + "ClassName"], c = this.getClassNames("enter"), d = c.doneClassName;
    a === "appear" && l === "done" && d && (u += " " + d), l === "active" && i && WS(i), u && (this.appliedClasses[a][l] = u, O6(i, u));
  }, n.removeClasses = function(i, a) {
    var l = this.appliedClasses[a], u = l.base, c = l.active, d = l.done;
    this.appliedClasses[a] = {}, u && zp(i, u), c && zp(i, c), d && zp(i, d);
  }, n.render = function() {
    var i = this.props;
    i.classNames;
    var a = ze(i, ["classNames"]);
    return /* @__PURE__ */ _.createElement(Fr, ce({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(_.Component);
O0.defaultProps = {
  classNames: ""
};
O0.propTypes = {};
function P6(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function P0(e, t) {
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
  for (var c in t) {
    if (r[c])
      for (l = 0; l < r[c].length; l++) {
        var d = r[c][l];
        u[r[c][l]] = n(d);
      }
    u[c] = n(c);
  }
  for (l = 0; l < i.length; l++)
    u[i[l]] = n(i[l]);
  return u;
}
function Do(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function F6(e, t) {
  return P0(e.children, function(n) {
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
  var r = P0(e.children), i = D6(t, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (y.isValidElement(l)) {
      var u = a in t, c = a in r, d = t[a], h = y.isValidElement(d) && !d.props.in;
      c && (!u || h) ? i[a] = y.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: Do(l, "exit", e),
        enter: Do(l, "enter", e)
      }) : !c && u && !h ? i[a] = y.cloneElement(l, {
        in: !1
      }) : c && u && y.isValidElement(d) && (i[a] = y.cloneElement(l, {
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
}, D0 = /* @__PURE__ */ function(e) {
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
    var l = a.children, u = a.handleExited, c = a.firstRender;
    return {
      children: c ? F6(i, u) : M6(i, l, u),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var l = P0(this.props.children);
    i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(u) {
      var c = ce({}, u.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, l = i.childFactory, u = ze(i, ["component", "childFactory"]), c = this.state.contextValue, d = L6(this.state.children).map(l);
    return delete u.appear, delete u.enter, delete u.exit, a === null ? /* @__PURE__ */ _.createElement(wf.Provider, {
      value: c
    }, d) : /* @__PURE__ */ _.createElement(wf.Provider, {
      value: c
    }, /* @__PURE__ */ _.createElement(a, u, d));
  }, t;
}(_.Component);
D0.propTypes = {};
D0.defaultProps = B6;
class F0 extends _.Component {
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
    return /* @__PURE__ */ _.createElement(O0, {
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
    return /* @__PURE__ */ _.createElement(D0, {
      className: Z("pgn-transition-replace-group", "position-relative", {
        "overflow-hidden": this.state.height !== null
      }, this.props.className),
      style: {
        height: this.state.height
      }
    }, _.Children.map(this.props.children, this.renderChildTransition, this));
  }
}
F0.propTypes = {
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
F0.defaultProps = {
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
function M0({
  children: e,
  transitionWrapper: t,
  tag: n,
  ...r
}) {
  const {
    isOpen: i,
    unmountOnExit: a
  } = y.useContext(uu), l = /* @__PURE__ */ _.createElement(n, {
    key: "body",
    ...r
  }, e), u = i ? l : /* @__PURE__ */ _.createElement("div", {
    key: "empty"
  });
  return t ? /* @__PURE__ */ _.cloneElement(t, {}, u) : a ? /* @__PURE__ */ _.createElement(F0, null, u) : /* @__PURE__ */ _.createElement(KS, {
    in: i
  }, l);
}
M0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies content's base element. */
  tag: g.string,
  /** Specifies transition element. */
  transitionWrapper: g.element
};
M0.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function L0({
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
    open: c,
    close: d,
    toggle: h
  } = y.useContext(uu), m = y.useCallback((b) => {
    n ? c(b) : r ? d(b) : h(b);
  }, [n, c, r, d, h]), v = y.useCallback((b) => {
    i && i(b), m(b);
  }, [i, m]), x = y.useCallback((b) => {
    a && a(b), b.key === "Enter" && m(b);
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
L0.propTypes = {
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
L0.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function B0({
  children: e,
  whenOpen: t,
  whenClosed: n
}) {
  const {
    isOpen: r
  } = y.useContext(uu);
  return r && t || !r && n ? /* @__PURE__ */ _.createElement(_.Fragment, null, e) : null;
}
B0.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: g.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: g.bool
};
B0.defaultProps = {
  children: void 0,
  whenOpen: !1,
  whenClosed: !1
};
const H6 = {
  basic: {
    iconWhenClosed: /* @__PURE__ */ _.createElement(Ot, {
      src: dk
    }),
    iconWhenOpen: /* @__PURE__ */ _.createElement(Ot, {
      src: fk
    })
  }
  // card and card-lg use the defaults specified in defaultProps
}, _t = /* @__PURE__ */ _.forwardRef((e, t) => {
  const {
    children: n,
    className: r,
    title: i,
    styling: a,
    iconWhenClosed: l,
    iconWhenOpen: u,
    ...c
  } = e, d = {
    iconWhenClosed: l,
    iconWhenOpen: u,
    ...H6[a]
  }, h = /* @__PURE__ */ _.isValidElement(i) ? i : /* @__PURE__ */ _.createElement("span", null, i);
  return /* @__PURE__ */ _.createElement(_t.Advanced, {
    ...c,
    className: Z(r, `collapsible-${a}`),
    ref: t
  }, /* @__PURE__ */ _.createElement(_t.Trigger, {
    className: "collapsible-trigger"
  }, h, /* @__PURE__ */ _.createElement("span", {
    className: "collapsible-icon"
  }, /* @__PURE__ */ _.createElement(_t.Visible, {
    whenClosed: !0
  }, d.iconWhenClosed), /* @__PURE__ */ _.createElement(_t.Visible, {
    whenOpen: !0
  }, d.iconWhenOpen))), /* @__PURE__ */ _.createElement(_t.Body, {
    className: "collapsible-body"
  }, n));
});
_t.propTypes = {
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
_t.defaultProps = {
  className: void 0,
  defaultOpen: !1,
  iconWhenClosed: /* @__PURE__ */ _.createElement(Ot, {
    src: dk
  }),
  iconWhenOpen: /* @__PURE__ */ _.createElement(Ot, {
    src: fk
  }),
  onClose: void 0,
  onOpen: void 0,
  onToggle: void 0,
  open: void 0,
  styling: "card",
  unmountOnExit: !0
};
_t.Advanced = N0;
_t.Body = M0;
_t.Trigger = L0;
_t.Visible = B0;
_t.Context = uu;
const W1 = {
  tooltipContent: {
    id: "authoring.draggableList.tooltip.content",
    defaultMessage: "Drag to reorder",
    description: "Tooltip content for drag indicator icon"
  }
}, Vf = ({
  id: e,
  componentStyle: t,
  actions: n,
  actionStyle: r,
  children: i,
  isClickable: a,
  onClick: l,
  disabled: u,
  cardClassName: c = ""
}) => {
  const d = vs(), {
    attributes: h,
    listeners: m,
    setNodeRef: v,
    transform: x,
    transition: b,
    setActivatorNodeRef: S,
    isDragging: R
  } = d6({
    id: e,
    animateLayoutChanges: () => !1,
    disabled: {
      draggable: u
    }
  }), w = {
    transform: ao.Translate.toString(x),
    zIndex: R ? 200 : void 0,
    transition: b,
    ...t
  };
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    /* @__PURE__ */ D.jsx(
      "div",
      {
        ref: v,
        onClick: l,
        children: /* @__PURE__ */ D.jsxs(
          vr,
          {
            style: w,
            className: `mx-0 ${c}`,
            isClickable: a,
            children: [
              /* @__PURE__ */ D.jsxs(Xo, { style: r, children: [
                n,
                !u && /* @__PURE__ */ D.jsx(
                  ck,
                  {
                    ref: S,
                    tooltipPlacement: "top",
                    tooltipContent: d.formatMessage(W1.tooltipContent),
                    src: dU,
                    iconAs: Ot,
                    variant: "light",
                    alt: d.formatMessage(W1.tooltipContent),
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
Vf.defaultProps = {
  componentStyle: null,
  actions: null,
  actionStyle: null,
  isClickable: !1,
  onClick: null,
  disabled: !1
};
Vf.propTypes = {
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
const Rc = (e, t = 60) => e ? e.length <= t ? e : e.substring(0, t) + "..." : "", V6 = ({
  instructions: e,
  explanation: t,
  bins: n,
  items: r,
  onInstructionsChange: i,
  onExplanationChange: a,
  onBinsReorder: l,
  onItemsReorder: u,
  onAddBin: c,
  onEditBin: d,
  onDeleteBin: h,
  onAddItem: m,
  onEditItem: v,
  onDeleteItem: x
}) => /* @__PURE__ */ D.jsxs("div", { className: "main-content-area", children: [
  /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
    /* @__PURE__ */ D.jsx("div", { className: "h4 mb-3", children: "Instructions" }),
    /* @__PURE__ */ D.jsx(
      ue.Control,
      {
        as: "textarea",
        rows: 3,
        value: e,
        onChange: (b) => i(b.target.value),
        placeholder: "Drag each item into the bin where it belongs."
      }
    ),
    /* @__PURE__ */ D.jsx(ue.Text, { children: "Supports HTML. Shown to students above the sorting interface." })
  ] }),
  /* @__PURE__ */ D.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ D.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "h4", children: [
        "Bins (",
        n.length,
        " / 10)"
      ] }),
      /* @__PURE__ */ D.jsx(
        ur,
        {
          variant: "primary",
          iconBefore: S1,
          onClick: c,
          disabled: n.length >= 10,
          children: "Add Bin"
        }
      )
    ] }),
    n.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: "text-center p-5 bg-light rounded mb-4", children: /* @__PURE__ */ D.jsx("p", { className: "mb-3", children: 'No bins yet. Click "Add Bin" to create your first bin.' }) }) : /* @__PURE__ */ D.jsx(
      Hf,
      {
        itemList: n,
        setState: l,
        updateOrder: () => l,
        children: n.map((b, S) => {
          const R = b.max_capacity === 0 ? "Unlimited capacity" : `Max ${b.max_capacity} item${b.max_capacity === 1 ? "" : "s"}`;
          return /* @__PURE__ */ D.jsx(
            Vf,
            {
              id: b.id,
              actions: /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                /* @__PURE__ */ D.jsxs("span", { className: "font-weight-bold", children: [
                  "Bin ",
                  S + 1
                ] }),
                /* @__PURE__ */ D.jsx(Xo.Spacer, {}),
                /* @__PURE__ */ D.jsx(ur, { variant: "link", onClick: () => d(S), size: "sm", children: "Edit" }),
                /* @__PURE__ */ D.jsx(
                  ur,
                  {
                    variant: "link",
                    onClick: () => h(S),
                    size: "sm",
                    className: "text-danger",
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
              children: /* @__PURE__ */ D.jsxs("div", { className: "p-3", children: [
                /* @__PURE__ */ D.jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Label:" }),
                  " ",
                  b.label || "(No label)"
                ] }),
                b.description && /* @__PURE__ */ D.jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Description:" }),
                  " ",
                  b.description
                ] }),
                /* @__PURE__ */ D.jsxs("div", { children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Capacity:" }),
                  " ",
                  R
                ] })
              ] })
            },
            b.id
          );
        })
      }
    )
  ] }),
  /* @__PURE__ */ D.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ D.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "h4", children: [
        "Items (",
        r.length,
        " / 50)"
      ] }),
      /* @__PURE__ */ D.jsx(
        ur,
        {
          variant: "primary",
          iconBefore: S1,
          onClick: m,
          disabled: r.length >= 50 || n.length === 0,
          children: "Add Item"
        }
      )
    ] }),
    n.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: "alert alert-warning", children: "Please create at least one bin before adding items." }) : r.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: "text-center p-5 bg-light rounded mb-4", children: /* @__PURE__ */ D.jsx("p", { className: "mb-3", children: 'No items yet. Click "Add Item" to create your first item.' }) }) : /* @__PURE__ */ D.jsx(
      Hf,
      {
        itemList: r,
        setState: u,
        updateOrder: () => u,
        children: r.map((b, S) => {
          const R = n.find((A) => A.id === b.correct_bin_id), w = (R == null ? void 0 : R.label) || "Unknown Bin", C = () => {
            switch (b.type) {
              case "text":
                return Rc(b.content, 100);
              case "image":
                return "Image: " + Rc(b.content, 80);
              case "html":
                const A = b.content.replace(/<[^>]*>/g, "").trim();
                return "HTML: " + Rc(A, 80);
              default:
                return Rc(b.content, 100);
            }
          };
          return /* @__PURE__ */ D.jsx(
            Vf,
            {
              id: b.id,
              actions: /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                /* @__PURE__ */ D.jsxs("span", { className: "font-weight-bold", children: [
                  "Item ",
                  S + 1
                ] }),
                /* @__PURE__ */ D.jsx(Xo.Spacer, {}),
                /* @__PURE__ */ D.jsx(ur, { variant: "link", onClick: () => v(S), size: "sm", children: "Edit" }),
                /* @__PURE__ */ D.jsx(
                  ur,
                  {
                    variant: "link",
                    onClick: () => x(S),
                    size: "sm",
                    className: "text-danger",
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
              children: /* @__PURE__ */ D.jsxs("div", { className: "p-3", children: [
                /* @__PURE__ */ D.jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Content:" }),
                  " ",
                  C()
                ] }),
                /* @__PURE__ */ D.jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Correct Bin:" }),
                  " ",
                  w
                ] }),
                /* @__PURE__ */ D.jsxs("div", { children: [
                  /* @__PURE__ */ D.jsx("strong", { children: "Type:" }),
                  " ",
                  b.type
                ] })
              ] })
            },
            b.id
          );
        })
      }
    )
  ] }),
  /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-4", children: [
    /* @__PURE__ */ D.jsx("div", { className: "h4 mb-3", children: "Explanation (Optional)" }),
    /* @__PURE__ */ D.jsx(
      ue.Control,
      {
        as: "textarea",
        rows: 3,
        value: t,
        onChange: (b) => a(b.target.value),
        placeholder: "Optional explanation shown after submission..."
      }
    ),
    /* @__PURE__ */ D.jsx(ue.Text, { children: "Supports HTML. Shown after students submit their answer." })
  ] })
] }), U6 = (e) => {
  const [t, n] = y.useState(
    e || !1
  );
  return {
    isCardCollapsibleOpen: t,
    toggleCardCollapse: () => {
      n(e ? !0 : !t);
    }
  };
}, G1 = ({
  children: e,
  none: t = !1,
  isCardCollapsibleOpen: n,
  summary: r
}) => n || r ? /* @__PURE__ */ D.jsxs(vr.Section, { className: "pt-0", children: [
  /* @__PURE__ */ D.jsx(_t.Advanced, { open: !n, children: /* @__PURE__ */ D.jsx(_t.Body, { className: "collapsible-body", children: /* @__PURE__ */ D.jsx("span", { className: `small ${t ? "text-gray-500" : "text-primary-500"}`, children: r }) }) }),
  /* @__PURE__ */ D.jsx(_t.Advanced, { open: n, children: /* @__PURE__ */ D.jsx(_t.Body, { className: "collapsible-body text-primary-500 x-small", children: e }) })
] }) : null, lA = ({
  title: e,
  className: t = "",
  extraSections: n = [],
  children: r,
  summary: i,
  hasExpandableTextArea: a = !1,
  none: l
}) => {
  const { isCardCollapsibleOpen: u, toggleCardCollapse: c } = U6(a);
  return /* @__PURE__ */ D.jsxs(vr, { className: `${t} settingsOption border border-light-700 shadow-none`, children: [
    /* @__PURE__ */ D.jsx(vr.Section, { className: "settingsCardTitleSection", children: /* @__PURE__ */ D.jsx(
      _t.Advanced,
      {
        open: u,
        onToggle: c,
        children: /* @__PURE__ */ D.jsxs(_t.Trigger, { className: "collapsible-trigger d-flex", children: [
          /* @__PURE__ */ D.jsx("span", { className: "flex-grow-1 text-primary-500 x-small", children: e }),
          /* @__PURE__ */ D.jsx(_t.Visible, { whenClosed: !0, children: /* @__PURE__ */ D.jsx(Ot, { src: hk }) }),
          /* @__PURE__ */ D.jsx(_t.Visible, { whenOpen: !0, children: /* @__PURE__ */ D.jsx(Ot, { src: pk }) })
        ] })
      }
    ) }, `settingsOption-${e}-header`),
    /* @__PURE__ */ D.jsx(
      G1,
      {
        none: l,
        isCardCollapsibleOpen: u,
        summary: i,
        children: r
      },
      `settingsOption-${e}-children`
    ),
    n.map((d, h) => /* @__PURE__ */ D.jsxs(_.Fragment, { children: [
      u && /* @__PURE__ */ D.jsx("hr", {}),
      /* @__PURE__ */ D.jsx(
        G1,
        {
          isCardCollapsibleOpen: u,
          summary: "",
          children: d.children
        }
      )
    ] }, `settingsOption-${e}-${h}`))
  ] });
}, $6 = ({
  weight: e,
  maxAttempts: t,
  unlimited: n,
  onWeightChange: r,
  onMaxAttemptsChange: i,
  onUnlimitedChange: a
}) => {
  const l = `${e} point${e === 1 ? "" : "s"} · ${n ? "Unlimited attempts" : `${t} attempt${t === 1 ? "" : "s"}`}`;
  return /* @__PURE__ */ D.jsxs(
    lA,
    {
      title: "Scoring",
      summary: l,
      className: "scoringCard",
      children: [
        /* @__PURE__ */ D.jsx("div", { className: "mb-4", children: "Specify point weight and the number of answer attempts" }),
        /* @__PURE__ */ D.jsxs(ue.Group, { children: [
          /* @__PURE__ */ D.jsx(
            ue.Control,
            {
              type: "number",
              min: 0,
              step: 0.1,
              value: e,
              onChange: (u) => r(Number(u.target.value)),
              floatingLabel: "Points"
            }
          ),
          /* @__PURE__ */ D.jsx(ue.Control.Feedback, { children: "If a value is not set, the problem is worth one point" })
        ] }),
        /* @__PURE__ */ D.jsxs(ue.Group, { children: [
          /* @__PURE__ */ D.jsx(
            ue.Control,
            {
              type: "number",
              min: 0,
              value: n ? "" : t,
              onChange: (u) => i(Number(u.target.value)),
              floatingLabel: "Attempts",
              disabled: n
            }
          ),
          /* @__PURE__ */ D.jsx(ue.Control.Feedback, { children: "If a default value is not set in advanced settings, unlimited attempts are allowed" }),
          /* @__PURE__ */ D.jsx(
            ue.Checkbox,
            {
              className: "mt-3 decoration-control-label",
              checked: n,
              onChange: (u) => a(u.target.checked),
              children: /* @__PURE__ */ D.jsx("div", { className: "x-small", children: "Unlimited attempts" })
            }
          )
        ] })
      ]
    }
  );
}, z6 = ({
  randomizeItems: e,
  feedbackMode: t,
  showCorrectAnswers: n,
  onRandomizeChange: r,
  onFeedbackModeChange: i,
  onShowCorrectAnswersChange: a
}) => {
  const c = `${e ? "Randomized" : "Sequential"} · ${t === "immediate" ? "Immediate Feedback" : "On Submit"} · Show: ${n === "never" ? "Never" : n === "after_attempts" ? "After Attempts" : "Always"}`;
  return /* @__PURE__ */ D.jsxs(
    lA,
    {
      title: "Behavior",
      summary: c,
      className: "behaviorCard",
      children: [
        /* @__PURE__ */ D.jsxs(ue.Group, { className: "mb-3", children: [
          /* @__PURE__ */ D.jsx(
            ue.Checkbox,
            {
              checked: e,
              onChange: (d) => r(d.target.checked),
              children: "Randomize item order"
            }
          ),
          /* @__PURE__ */ D.jsx(ue.Control.Feedback, { children: "Shuffle terms and descriptions for each student" })
        ] }),
        /* @__PURE__ */ D.jsx(ue.Group, { className: "mb-3", children: /* @__PURE__ */ D.jsxs(
          ue.Control,
          {
            as: "select",
            value: t,
            onChange: (d) => i(d.target.value),
            floatingLabel: "Feedback Mode",
            children: [
              /* @__PURE__ */ D.jsx("option", { value: "immediate", children: "Immediate Feedback" }),
              /* @__PURE__ */ D.jsx("option", { value: "on_submit", children: "On Submit" })
            ]
          }
        ) }),
        /* @__PURE__ */ D.jsx(ue.Group, { children: /* @__PURE__ */ D.jsxs(
          ue.Control,
          {
            as: "select",
            value: n,
            onChange: (d) => a(d.target.value),
            floatingLabel: "Show Correct Answers",
            children: [
              /* @__PURE__ */ D.jsx("option", { value: "never", children: "Never" }),
              /* @__PURE__ */ D.jsx("option", { value: "after_attempts", children: "After Max Attempts" }),
              /* @__PURE__ */ D.jsx("option", { value: "always", children: "Always" })
            ]
          }
        ) })
      ]
    }
  );
}, j6 = ({
  weight: e,
  maxAttempts: t,
  unlimited: n,
  randomizeItems: r,
  feedbackMode: i,
  showCorrectAnswers: a,
  onWeightChange: l,
  onMaxAttemptsChange: u,
  onUnlimitedChange: c,
  onRandomizeChange: d,
  onFeedbackModeChange: h,
  onShowCorrectAnswersChange: m
}) => /* @__PURE__ */ D.jsxs("div", { className: "settingsWidget ml-4", children: [
  /* @__PURE__ */ D.jsx("div", { className: "my-3", children: /* @__PURE__ */ D.jsx(
    $6,
    {
      weight: e,
      maxAttempts: t,
      unlimited: n,
      onWeightChange: l,
      onMaxAttemptsChange: u,
      onUnlimitedChange: c
    }
  ) }),
  /* @__PURE__ */ D.jsx("div", { className: "mt-3", children: /* @__PURE__ */ D.jsx(
    z6,
    {
      randomizeItems: r,
      feedbackMode: i,
      showCorrectAnswers: a,
      onRandomizeChange: d,
      onFeedbackModeChange: h,
      onShowCorrectAnswersChange: m
    }
  ) })
] }), W6 = ({
  runtime: e,
  fields: t
}) => {
  const [n, r] = y.useState(t.display_name), [i, a] = y.useState(t.instructions), [l, u] = y.useState(t.explanation), [c, d] = y.useState(t.bins), [h, m] = y.useState(t.items), [v, x] = y.useState(t.weight), [b, S] = y.useState(t.max_attempts), [R, w] = y.useState(t.max_attempts === 0), [C, A] = y.useState(t.randomize_items), [I, O] = y.useState(t.show_feedback_mode), [F, L] = y.useState(t.show_correct_answers), [H, j] = y.useState("list"), [W, K] = y.useState(null), [Q, ie] = y.useState(-1), [Ee, we] = y.useState(!1), [Ce, te] = y.useState(null), G = y.useRef(null);
  y.useEffect(() => {
    const ve = [
      "/static/studio/liverpool-dental-legacy/css/studio-main-v1.css",
      "/static/studio/liverpool-dental-legacy/css/course-unit-mfe-iframe-bundle.css"
    ];
    document.querySelectorAll('link[rel="stylesheet"]').forEach((de) => {
      ve.some((Ue) => de.href.includes(Ue)) && (de.disabled = !0);
    });
  }, []);
  const Y = () => {
    if (c.length >= 10) {
      te({ type: "error", text: "Maximum 10 bins allowed" });
      return;
    }
    const ve = {
      id: `bin_${Date.now()}`,
      label: "",
      description: "",
      max_capacity: 0
    };
    d([...c, ve]), ie(c.length), K("bin"), j("edit-bin");
  }, J = (ve) => {
    ie(ve), K("bin"), j("edit-bin");
  }, se = (ve) => {
    const de = [...c];
    de[Q] = ve, d(de), j("list"), ie(-1), K(null), te({ type: "success", text: "Bin saved" });
  }, ne = (ve) => {
    if (c.length === 1) {
      te({ type: "error", text: "At least one bin is required" });
      return;
    }
    const de = c[ve], Ue = h.filter((Qe) => Qe.correct_bin_id === de.id);
    Ue.length > 0 && !confirm(`This bin is referenced by ${Ue.length} item(s). Delete anyway?`) || (d(c.filter((Qe, _e) => _e !== ve)), te({ type: "success", text: "Bin deleted" }));
  }, Ze = (ve) => {
    d(ve);
  }, Ve = () => {
    if (h.length >= 50) {
      te({ type: "error", text: "Maximum 50 items allowed" });
      return;
    }
    if (c.length === 0) {
      te({ type: "error", text: "Please create at least one bin first" });
      return;
    }
    const ve = {
      id: `item_${Date.now()}`,
      type: "text",
      content: "",
      correct_bin_id: c[0].id
    };
    m([...h, ve]), ie(h.length), K("item"), j("edit-item");
  }, He = (ve) => {
    ie(ve), K("item"), j("edit-item");
  }, Re = (ve) => {
    const de = [...h];
    de[Q] = ve, m(de), j("list"), ie(-1), K(null), te({ type: "success", text: "Item saved" });
  }, mt = (ve) => {
    if (h.length === 1) {
      te({ type: "error", text: "At least one item is required" });
      return;
    }
    m(h.filter((de, Ue) => Ue !== ve)), te({ type: "success", text: "Item deleted" });
  }, Ke = (ve) => {
    m(ve);
  }, Ye = () => {
    if (W === "bin") {
      const ve = c[Q];
      !ve.label && !ve.description && d(c.filter((de, Ue) => Ue !== Q));
    } else W === "item" && (h[Q].content || m(h.filter((de, Ue) => Ue !== Q)));
    j("list"), ie(-1), K(null);
  }, Ae = async () => {
    we(!0), te(null);
    try {
      if (!n.trim()) {
        te({ type: "error", text: "Display name is required" }), we(!1);
        return;
      }
      if (c.length === 0) {
        te({ type: "error", text: "At least one bin is required" }), we(!1);
        return;
      }
      if (h.length === 0) {
        te({ type: "error", text: "At least one item is required" }), we(!1);
        return;
      }
      for (let de = 0; de < c.length; de++)
        if (!c[de].label.trim()) {
          te({ type: "error", text: `Bin ${de + 1}: Label is required` }), we(!1);
          return;
        }
      for (let de = 0; de < h.length; de++)
        if (!h[de].content.trim()) {
          te({ type: "error", text: `Item ${de + 1}: Content is required` }), we(!1);
          return;
        }
      e.notify && e.notify("save", { state: "start" });
      const ve = await yU(e, "save_data", {
        display_name: n,
        instructions: i,
        randomize_items: C,
        explanation: l,
        bins: c,
        items: h,
        weight: v,
        max_attempts: R ? 0 : b,
        grading_mode: "partial_credit",
        show_correct_answers: F,
        show_feedback_mode: I
      });
      ve.success ? (te({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (te({ type: "error", text: ve.error || "Failed to save changes." }), e.notify && e.notify("save", { state: "end" }));
    } catch (ve) {
      console.error("Save error:", ve), te({ type: "error", text: "An error occurred while saving." }), e.notify && e.notify("save", { state: "end" });
    } finally {
      we(!1);
    }
  }, vt = () => {
    e.notify && e.notify("cancel", {});
  }, rt = () => {
    G.current && G.current();
  };
  return /* @__PURE__ */ D.jsxs("div", { className: "modal-container-fullscreen", children: [
    /* @__PURE__ */ D.jsx(
      y5,
      {
        title: n || "Sort Into Bins",
        onClose: vt,
        onTitleChange: r
      }
    ),
    /* @__PURE__ */ D.jsxs(bi.Body, { className: "pb-0", children: [
      Ce && /* @__PURE__ */ D.jsx(
        ru,
        {
          variant: Ce.type === "success" ? "success" : "danger",
          dismissible: !0,
          onClose: () => te(null),
          children: Ce.text
        }
      ),
      H === "list" ? /* @__PURE__ */ D.jsx(
        x5,
        {
          mainContent: /* @__PURE__ */ D.jsx(
            V6,
            {
              instructions: i,
              explanation: l,
              bins: c,
              items: h,
              onInstructionsChange: a,
              onExplanationChange: u,
              onBinsReorder: Ze,
              onItemsReorder: Ke,
              onAddBin: Y,
              onEditBin: J,
              onDeleteBin: ne,
              onAddItem: Ve,
              onEditItem: He,
              onDeleteItem: mt
            }
          ),
          sidebar: /* @__PURE__ */ D.jsx(
            j6,
            {
              weight: v,
              maxAttempts: b,
              unlimited: R,
              randomizeItems: C,
              feedbackMode: I,
              showCorrectAnswers: F,
              onWeightChange: x,
              onMaxAttemptsChange: S,
              onUnlimitedChange: w,
              onRandomizeChange: A,
              onFeedbackModeChange: O,
              onShowCorrectAnswersChange: L
            }
          )
        }
      ) : H === "edit-bin" ? /* @__PURE__ */ D.jsx(
        l5,
        {
          bin: c[Q],
          onSave: se,
          onCancel: Ye,
          saveRef: G
        }
      ) : /* @__PURE__ */ D.jsx(
        u5,
        {
          item: h[Q],
          bins: c,
          onSave: Re,
          onCancel: Ye,
          saveRef: G
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx(
      E5,
      {
        viewMode: H === "list" ? "list" : "edit",
        editingType: W,
        onSave: Ae,
        onCancel: vt,
        saveDisabled: Ee || c.length === 0 || h.length === 0,
        onSavePair: rt,
        onBackToList: Ye,
        savePairDisabled: !1
      }
    )
  ] });
}, K6 = (e, t, n) => {
  if (!t) {
    console.error("No element provided to renderBlock");
    return;
  }
  e.element = t, oS(t).render(
    /* @__PURE__ */ D.jsx(y.StrictMode, { children: /* @__PURE__ */ D.jsx(AL, { locale: "en", children: /* @__PURE__ */ D.jsx(
      W6,
      {
        runtime: e,
        fields: n.fields
      }
    ) }) })
  );
};
export {
  K6 as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
