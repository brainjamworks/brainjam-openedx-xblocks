var pw = Object.defineProperty;
var dw = (e, t, n) => t in e ? pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var df = (e, t, n) => dw(e, typeof t != "symbol" ? t + "" : t, n);
function Ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var av = { exports: {} }, As = {}, ov = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma = Symbol.for("react.element"), fw = Symbol.for("react.portal"), mw = Symbol.for("react.fragment"), hw = Symbol.for("react.strict_mode"), vw = Symbol.for("react.profiler"), gw = Symbol.for("react.provider"), xw = Symbol.for("react.context"), yw = Symbol.for("react.forward_ref"), ww = Symbol.for("react.suspense"), Ew = Symbol.for("react.memo"), kw = Symbol.for("react.lazy"), ff = Symbol.iterator;
function bw(e) {
  return e === null || typeof e != "object" ? null : (e = ff && e[ff] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sv = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lv = Object.assign, uv = {};
function Ii(e, t, n) {
  this.props = e, this.context = t, this.refs = uv, this.updater = n || sv;
}
Ii.prototype.isReactComponent = {};
Ii.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ii.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cv() {
}
cv.prototype = Ii.prototype;
function Gc(e, t, n) {
  this.props = e, this.context = t, this.refs = uv, this.updater = n || sv;
}
var Wc = Gc.prototype = new cv();
Wc.constructor = Gc;
lv(Wc, Ii.prototype);
Wc.isPureReactComponent = !0;
var mf = Array.isArray, pv = Object.prototype.hasOwnProperty, qc = { current: null }, dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function fv(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) pv.call(t, r) && !dv.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: Ma, type: e, key: a, ref: o, props: i, _owner: qc.current };
}
function Cw(e, t) {
  return { $$typeof: Ma, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ma;
}
function Sw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var hf = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sw("" + e.key) : t.toString(36);
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
        case Ma:
        case fw:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Sl(o, 0) : r, mf(i) ? (n = "", e != null && (n = e.replace(hf, "$&/") + "/"), _o(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Kc(i) && (i = Cw(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(hf, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", mf(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + Sl(a, s);
    o += _o(a, t, n, l, i);
  }
  else if (l = bw(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + Sl(a, s++), o += _o(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Ya(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return _o(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function _w(e) {
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
var it = { current: null }, Ao = { transition: null }, Aw = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Ao, ReactCurrentOwner: qc };
function mv() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = { map: Ya, forEach: function(e, t, n) {
  Ya(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ya(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ya(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Ii;
te.Fragment = mw;
te.Profiler = vw;
te.PureComponent = Gc;
te.StrictMode = hw;
te.Suspense = ww;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Aw;
te.act = mv;
te.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lv({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = qc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) pv.call(t, l) && !dv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ma, type: e.type, key: i, ref: a, props: r, _owner: o };
};
te.createContext = function(e) {
  return e = { $$typeof: xw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gw, _context: e }, e.Consumer = e;
};
te.createElement = fv;
te.createFactory = function(e) {
  var t = fv.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: yw, render: e };
};
te.isValidElement = Kc;
te.lazy = function(e) {
  return { $$typeof: kw, _payload: { _status: -1, _result: e }, _init: _w };
};
te.memo = function(e, t) {
  return { $$typeof: Ew, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
te.unstable_act = mv;
te.useCallback = function(e, t) {
  return it.current.useCallback(e, t);
};
te.useContext = function(e) {
  return it.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return it.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return it.current.useEffect(e, t);
};
te.useId = function() {
  return it.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return it.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return it.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return it.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return it.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return it.current.useRef(e);
};
te.useState = function(e) {
  return it.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return it.current.useTransition();
};
te.version = "18.3.1";
ov.exports = te;
var y = ov.exports;
const m = /* @__PURE__ */ Ni(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tw = y, Nw = Symbol.for("react.element"), Iw = Symbol.for("react.fragment"), Pw = Object.prototype.hasOwnProperty, Fw = Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rw = { key: !0, ref: !0, __self: !0, __source: !0 };
function hv(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Pw.call(t, r) && !Rw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Nw, type: e, key: a, ref: o, props: i, _owner: Fw.current };
}
As.Fragment = Iw;
As.jsx = hv;
As.jsxs = hv;
av.exports = As;
var A = av.exports, vv = { exports: {} }, bt = {}, gv = { exports: {} }, xv = {};
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
  function t(N, O) {
    var B = N.length;
    N.push(O);
    e: for (; 0 < B; ) {
      var q = B - 1 >>> 1, H = N[q];
      if (0 < i(H, O)) N[q] = O, N[B] = H, B = q;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0], B = N.pop();
    if (B !== O) {
      N[0] = B;
      e: for (var q = 0, H = N.length, Ie = H >>> 1; q < Ie; ) {
        var ce = 2 * (q + 1) - 1, re = N[ce], X = ce + 1, Se = N[X];
        if (0 > i(re, B)) X < H && 0 > i(Se, re) ? (N[q] = Se, N[X] = B, q = X) : (N[q] = re, N[ce] = B, q = ce);
        else if (X < H && 0 > i(Se, B)) N[q] = Se, N[X] = B, q = X;
        else break e;
      }
    }
    return O;
  }
  function i(N, O) {
    var B = N.sortIndex - O.sortIndex;
    return B !== 0 ? B : N.id - O.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, x = !1, E = !1, g = !1, k = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N) r(u), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(u);
    }
  }
  function b(N) {
    if (g = !1, w(N), !E) if (n(l) !== null) E = !0, Z(C);
    else {
      var O = n(u);
      O !== null && J(b, O.startTime - N);
    }
  }
  function C(N, O) {
    E = !1, g && (g = !1, h(T), T = -1), x = !0;
    var B = f;
    try {
      for (w(O), d = n(l); d !== null && (!(d.expirationTime > O) || N && !V()); ) {
        var q = d.callback;
        if (typeof q == "function") {
          d.callback = null, f = d.priorityLevel;
          var H = q(d.expirationTime <= O);
          O = e.unstable_now(), typeof H == "function" ? d.callback = H : d === n(l) && r(l), w(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ie = !0;
      else {
        var ce = n(u);
        ce !== null && J(b, ce.startTime - O), Ie = !1;
      }
      return Ie;
    } finally {
      d = null, f = B, x = !1;
    }
  }
  var S = !1, _ = null, T = -1, F = 5, P = -1;
  function V() {
    return !(e.unstable_now() - P < F);
  }
  function z() {
    if (_ !== null) {
      var N = e.unstable_now();
      P = N;
      var O = !0;
      try {
        O = _(!0, N);
      } finally {
        O ? G() : (S = !1, _ = null);
      }
    } else S = !1;
  }
  var G;
  if (typeof v == "function") G = function() {
    v(z);
  };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), K = L.port2;
    L.port1.onmessage = z, G = function() {
      K.postMessage(null);
    };
  } else G = function() {
    k(z, 0);
  };
  function Z(N) {
    _ = N, S || (S = !0, G());
  }
  function J(N, O) {
    T = k(function() {
      N(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    E || x || (E = !0, Z(C));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(N) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = f;
    }
    var B = f;
    f = O;
    try {
      return N();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, O) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var B = f;
    f = N;
    try {
      return O();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(N, O, B) {
    var q = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? q + B : q) : B = q, N) {
      case 1:
        var H = -1;
        break;
      case 2:
        H = 250;
        break;
      case 5:
        H = 1073741823;
        break;
      case 4:
        H = 1e4;
        break;
      default:
        H = 5e3;
    }
    return H = B + H, N = { id: c++, callback: O, priorityLevel: N, startTime: B, expirationTime: H, sortIndex: -1 }, B > q ? (N.sortIndex = B, t(u, N), n(l) === null && N === n(u) && (g ? (h(T), T = -1) : g = !0, J(b, B - q))) : (N.sortIndex = H, t(l, N), E || x || (E = !0, Z(C))), N;
  }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(N) {
    var O = f;
    return function() {
      var B = f;
      f = O;
      try {
        return N.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(xv);
gv.exports = xv;
var Ow = gv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dw = y, wt = Ow;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yv = /* @__PURE__ */ new Set(), ua = {};
function Tr(e, t) {
  fi(e, t), fi(e + "Capture", t);
}
function fi(e, t) {
  for (ua[e] = t, e = 0; e < t.length; e++) yv.add(t[e]);
}
var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Eu = Object.prototype.hasOwnProperty, Mw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, vf = {}, gf = {};
function Lw(e) {
  return Eu.call(gf, e) ? !0 : Eu.call(vf, e) ? !1 : Mw.test(e) ? gf[e] = !0 : (vf[e] = !0, !1);
}
function Bw(e, t, n, r) {
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
function jw(e, t, n, r) {
  if (t === null || typeof t > "u" || Bw(e, t, n, r)) return !0;
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
function at(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new at(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qc = /[\-:]([a-z])/g;
function Xc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Qc,
    Xc
  );
  $e[t] = new at(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Qc, Xc);
  $e[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Qc, Xc);
  $e[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new at("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yc(e, t, n, r) {
  var i = $e.hasOwnProperty(t) ? $e[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jw(t, n, i, r) && (n = null), r || i === null ? Lw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Za = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), Zc = Symbol.for("react.strict_mode"), ku = Symbol.for("react.profiler"), wv = Symbol.for("react.provider"), Ev = Symbol.for("react.context"), Jc = Symbol.for("react.forward_ref"), bu = Symbol.for("react.suspense"), Cu = Symbol.for("react.suspense_list"), ep = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), kv = Symbol.for("react.offscreen"), xf = Symbol.iterator;
function Li(e) {
  return e === null || typeof e != "object" ? null : (e = xf && e[xf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var be = Object.assign, _l;
function qi(e) {
  if (_l === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    _l = t && t[1] || "";
  }
  return `
` + _l + e;
}
var Al = !1;
function Tl(e, t) {
  if (!e || Al) return "";
  Al = !0;
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
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qi(e) : "";
}
function zw(e) {
  switch (e.tag) {
    case 5:
      return qi(e.type);
    case 16:
      return qi("Lazy");
    case 13:
      return qi("Suspense");
    case 19:
      return qi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Tl(e.type, !1), e;
    case 11:
      return e = Tl(e.type.render, !1), e;
    case 1:
      return e = Tl(e.type, !0), e;
    default:
      return "";
  }
}
function Su(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $r:
      return "Fragment";
    case Vr:
      return "Portal";
    case ku:
      return "Profiler";
    case Zc:
      return "StrictMode";
    case bu:
      return "Suspense";
    case Cu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ev:
      return (e.displayName || "Context") + ".Consumer";
    case wv:
      return (e._context.displayName || "Context") + ".Provider";
    case Jc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ep:
      return t = e.displayName || null, t !== null ? t : Su(e.type) || "Memo";
    case Pn:
      t = e._payload, e = e._init;
      try {
        return Su(e(t));
      } catch {
      }
  }
  return null;
}
function Hw(e) {
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
      return Su(t);
    case 8:
      return t === Zc ? "StrictMode" : "Mode";
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
function qn(e) {
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
function bv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Vw(e) {
  var t = bv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Vw(e));
}
function Cv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = bv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $o(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _u(e, t) {
  var n = t.checked;
  return be({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function yf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sv(e, t) {
  t = t.checked, t != null && Yc(e, "checked", t, !1);
}
function Au(e, t) {
  Sv(e, t);
  var n = qn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Tu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tu(e, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function wf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Tu(e, t, n) {
  (t !== "number" || $o(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ki = Array.isArray;
function ri(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Ki(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qn(n) };
}
function _v(e, t) {
  var n = qn(t.value), r = qn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Av(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Av(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var eo, Tv = function(e) {
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
function ca(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zi = {
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
}, $w = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zi).forEach(function(e) {
  $w.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zi[t] = Zi[e];
  });
});
function Nv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zi.hasOwnProperty(e) && Zi[e] ? ("" + t).trim() : t + "px";
}
function Iv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Nv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Uw = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pu(e, t) {
  if (t) {
    if (Uw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Fu(e, t) {
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
var Ru = null;
function tp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ou = null, ii = null, ai = null;
function bf(e) {
  if (e = ja(e)) {
    if (typeof Ou != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Fs(t), Ou(e.stateNode, e.type, t));
  }
}
function Pv(e) {
  ii ? ai ? ai.push(e) : ai = [e] : ii = e;
}
function Fv() {
  if (ii) {
    var e = ii, t = ai;
    if (ai = ii = null, bf(e), t) for (e = 0; e < t.length; e++) bf(t[e]);
  }
}
function Rv(e, t) {
  return e(t);
}
function Ov() {
}
var Nl = !1;
function Dv(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return Rv(e, t, n);
  } finally {
    Nl = !1, (ii !== null || ai !== null) && (Ov(), Fv());
  }
}
function pa(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
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
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Du = !1;
if (wn) try {
  var Bi = {};
  Object.defineProperty(Bi, "passive", { get: function() {
    Du = !0;
  } }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
} catch {
  Du = !1;
}
function Gw(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ji = !1, Uo = null, Go = !1, Mu = null, Ww = { onError: function(e) {
  Ji = !0, Uo = e;
} };
function qw(e, t, n, r, i, a, o, s, l) {
  Ji = !1, Uo = null, Gw.apply(Ww, arguments);
}
function Kw(e, t, n, r, i, a, o, s, l) {
  if (qw.apply(this, arguments), Ji) {
    if (Ji) {
      var u = Uo;
      Ji = !1, Uo = null;
    } else throw Error(I(198));
    Go || (Go = !0, Mu = u);
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
function Mv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cf(e) {
  if (Nr(e) !== e) throw Error(I(188));
}
function Qw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nr(e), t === null) throw Error(I(188));
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
        if (a === n) return Cf(i), e;
        if (a === r) return Cf(i), t;
        a = a.sibling;
      }
      throw Error(I(188));
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
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Lv(e) {
  return e = Qw(e), e !== null ? Bv(e) : null;
}
function Bv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jv = wt.unstable_scheduleCallback, Sf = wt.unstable_cancelCallback, Xw = wt.unstable_shouldYield, Yw = wt.unstable_requestPaint, Ae = wt.unstable_now, Zw = wt.unstable_getCurrentPriorityLevel, np = wt.unstable_ImmediatePriority, zv = wt.unstable_UserBlockingPriority, Wo = wt.unstable_NormalPriority, Jw = wt.unstable_LowPriority, Hv = wt.unstable_IdlePriority, Ts = null, an = null;
function eE(e) {
  if (an && typeof an.onCommitFiberRoot == "function") try {
    an.onCommitFiberRoot(Ts, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Wt = Math.clz32 ? Math.clz32 : rE, tE = Math.log, nE = Math.LN2;
function rE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tE(e) / nE | 0) | 0;
}
var to = 64, no = 4194304;
function Qi(e) {
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
function qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? r = Qi(s) : (a &= o, a !== 0 && (r = Qi(a)));
  } else o = n & ~i, o !== 0 ? r = Qi(o) : a !== 0 && (r = Qi(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function iE(e, t) {
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
function aE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Wt(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = iE(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function Lu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Vv() {
  var e = to;
  return to <<= 1, !(to & 4194240) && (to = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function La(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
}
function oE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Wt(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function rp(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var le = 0;
function $v(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uv, ip, Gv, Wv, qv, Bu = !1, ro = [], Bn = null, jn = null, zn = null, da = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), On = [], sE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _f(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bn = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      da.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fa.delete(t.pointerId);
  }
}
function ji(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = ja(t), t !== null && ip(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function lE(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Bn = ji(Bn, e, t, n, r, i), !0;
    case "dragenter":
      return jn = ji(jn, e, t, n, r, i), !0;
    case "mouseover":
      return zn = ji(zn, e, t, n, r, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return da.set(a, ji(da.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, fa.set(a, ji(fa.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Kv(e) {
  var t = ur(e.target);
  if (t !== null) {
    var n = Nr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Mv(n), t !== null) {
          e.blockedOn = t, qv(e.priority, function() {
            Gv(n);
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
function To(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ru = r, n.target.dispatchEvent(r), Ru = null;
    } else return t = ja(n), t !== null && ip(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Af(e, t, n) {
  To(e) && n.delete(t);
}
function uE() {
  Bu = !1, Bn !== null && To(Bn) && (Bn = null), jn !== null && To(jn) && (jn = null), zn !== null && To(zn) && (zn = null), da.forEach(Af), fa.forEach(Af);
}
function zi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bu || (Bu = !0, wt.unstable_scheduleCallback(wt.unstable_NormalPriority, uE)));
}
function ma(e) {
  function t(i) {
    return zi(i, e);
  }
  if (0 < ro.length) {
    zi(ro[0], e);
    for (var n = 1; n < ro.length; n++) {
      var r = ro[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Bn !== null && zi(Bn, e), jn !== null && zi(jn, e), zn !== null && zi(zn, e), da.forEach(t), fa.forEach(t), n = 0; n < On.length; n++) r = On[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < On.length && (n = On[0], n.blockedOn === null); ) Kv(n), n.blockedOn === null && On.shift();
}
var oi = _n.ReactCurrentBatchConfig, Ko = !0;
function cE(e, t, n, r) {
  var i = le, a = oi.transition;
  oi.transition = null;
  try {
    le = 1, ap(e, t, n, r);
  } finally {
    le = i, oi.transition = a;
  }
}
function pE(e, t, n, r) {
  var i = le, a = oi.transition;
  oi.transition = null;
  try {
    le = 4, ap(e, t, n, r);
  } finally {
    le = i, oi.transition = a;
  }
}
function ap(e, t, n, r) {
  if (Ko) {
    var i = ju(e, t, n, r);
    if (i === null) zl(e, t, r, Qo, n), _f(e, r);
    else if (lE(i, e, t, n, r)) r.stopPropagation();
    else if (_f(e, r), t & 4 && -1 < sE.indexOf(e)) {
      for (; i !== null; ) {
        var a = ja(i);
        if (a !== null && Uv(a), a = ju(e, t, n, r), a === null && zl(e, t, r, Qo, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var Qo = null;
function ju(e, t, n, r) {
  if (Qo = null, e = tp(r), e = ur(e), e !== null) if (t = Nr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Mv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Qo = e, null;
}
function Qv(e) {
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
      switch (Zw()) {
        case np:
          return 1;
        case zv:
          return 4;
        case Wo:
        case Jw:
          return 16;
        case Hv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null, op = null, No = null;
function Xv() {
  if (No) return No;
  var e, t = op, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return No = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Io(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function io() {
  return !0;
}
function Tf() {
  return !1;
}
function Ct(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? io : Tf, this.isPropagationStopped = Tf, this;
  }
  return be(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = io);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = io);
  }, persist: function() {
  }, isPersistent: io }), t;
}
var Pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sp = Ct(Pi), Ba = be({}, Pi, { view: 0, detail: 0 }), dE = Ct(Ba), Pl, Fl, Hi, Ns = be({}, Ba, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hi && (Hi && e.type === "mousemove" ? (Pl = e.screenX - Hi.screenX, Fl = e.screenY - Hi.screenY) : Fl = Pl = 0, Hi = e), Pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fl;
} }), Nf = Ct(Ns), fE = be({}, Ns, { dataTransfer: 0 }), mE = Ct(fE), hE = be({}, Ba, { relatedTarget: 0 }), Rl = Ct(hE), vE = be({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gE = Ct(vE), xE = be({}, Pi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), yE = Ct(xE), wE = be({}, Pi, { data: 0 }), If = Ct(wE), EE = {
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
}, kE = {
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
}, bE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function CE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bE[e]) ? !!t[e] : !1;
}
function lp() {
  return CE;
}
var SE = be({}, Ba, { key: function(e) {
  if (e.key) {
    var t = EE[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kE[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lp, charCode: function(e) {
  return e.type === "keypress" ? Io(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _E = Ct(SE), AE = be({}, Ns, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Pf = Ct(AE), TE = be({}, Ba, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lp }), NE = Ct(TE), IE = be({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), PE = Ct(IE), FE = be({}, Ns, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), RE = Ct(FE), OE = [9, 13, 27, 32], up = wn && "CompositionEvent" in window, ea = null;
wn && "documentMode" in document && (ea = document.documentMode);
var DE = wn && "TextEvent" in window && !ea, Yv = wn && (!up || ea && 8 < ea && 11 >= ea), Ff = " ", Rf = !1;
function Zv(e, t) {
  switch (e) {
    case "keyup":
      return OE.indexOf(t.keyCode) !== -1;
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
function Jv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function ME(e, t) {
  switch (e) {
    case "compositionend":
      return Jv(t);
    case "keypress":
      return t.which !== 32 ? null : (Rf = !0, Ff);
    case "textInput":
      return e = t.data, e === Ff && Rf ? null : e;
    default:
      return null;
  }
}
function LE(e, t) {
  if (Ur) return e === "compositionend" || !up && Zv(e, t) ? (e = Xv(), No = op = Mn = null, Ur = !1, e) : null;
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
      return Yv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var BE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!BE[e.type] : t === "textarea";
}
function eg(e, t, n, r) {
  Pv(r), t = Xo(t, "onChange"), 0 < t.length && (n = new sp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ta = null, ha = null;
function jE(e) {
  pg(e, 0);
}
function Is(e) {
  var t = qr(e);
  if (Cv(t)) return e;
}
function zE(e, t) {
  if (e === "change") return t;
}
var tg = !1;
if (wn) {
  var Ol;
  if (wn) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var Df = document.createElement("div");
      Df.setAttribute("oninput", "return;"), Dl = typeof Df.oninput == "function";
    }
    Ol = Dl;
  } else Ol = !1;
  tg = Ol && (!document.documentMode || 9 < document.documentMode);
}
function Mf() {
  ta && (ta.detachEvent("onpropertychange", ng), ha = ta = null);
}
function ng(e) {
  if (e.propertyName === "value" && Is(ha)) {
    var t = [];
    eg(t, ha, e, tp(e)), Dv(jE, t);
  }
}
function HE(e, t, n) {
  e === "focusin" ? (Mf(), ta = t, ha = n, ta.attachEvent("onpropertychange", ng)) : e === "focusout" && Mf();
}
function VE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Is(ha);
}
function $E(e, t) {
  if (e === "click") return Is(t);
}
function UE(e, t) {
  if (e === "input" || e === "change") return Is(t);
}
function GE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Kt = typeof Object.is == "function" ? Object.is : GE;
function va(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Eu.call(t, i) || !Kt(e[i], t[i])) return !1;
  }
  return !0;
}
function Lf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bf(e, t) {
  var n = Lf(e);
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
    n = Lf(n);
  }
}
function rg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ig() {
  for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $o(e.document);
  }
  return t;
}
function cp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function WE(e) {
  var t = ig(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && rg(n.ownerDocument.documentElement, n)) {
    if (r !== null && cp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Bf(n, a);
        var o = Bf(
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
var qE = wn && "documentMode" in document && 11 >= document.documentMode, Gr = null, zu = null, na = null, Hu = !1;
function jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hu || Gr == null || Gr !== $o(r) || (r = Gr, "selectionStart" in r && cp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), na && va(na, r) || (na = r, r = Xo(zu, "onSelect"), 0 < r.length && (t = new sp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gr)));
}
function ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wr = { animationend: ao("Animation", "AnimationEnd"), animationiteration: ao("Animation", "AnimationIteration"), animationstart: ao("Animation", "AnimationStart"), transitionend: ao("Transition", "TransitionEnd") }, Ml = {}, ag = {};
wn && (ag = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
function Ps(e) {
  if (Ml[e]) return Ml[e];
  if (!Wr[e]) return e;
  var t = Wr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ag) return Ml[e] = t[n];
  return e;
}
var og = Ps("animationend"), sg = Ps("animationiteration"), lg = Ps("animationstart"), ug = Ps("transitionend"), cg = /* @__PURE__ */ new Map(), zf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Yn(e, t) {
  cg.set(e, t), Tr(t, [e]);
}
for (var Ll = 0; Ll < zf.length; Ll++) {
  var Bl = zf[Ll], KE = Bl.toLowerCase(), QE = Bl[0].toUpperCase() + Bl.slice(1);
  Yn(KE, "on" + QE);
}
Yn(og, "onAnimationEnd");
Yn(sg, "onAnimationIteration");
Yn(lg, "onAnimationStart");
Yn("dblclick", "onDoubleClick");
Yn("focusin", "onFocus");
Yn("focusout", "onBlur");
Yn(ug, "onTransitionEnd");
fi("onMouseEnter", ["mouseout", "mouseover"]);
fi("onMouseLeave", ["mouseout", "mouseover"]);
fi("onPointerEnter", ["pointerout", "pointerover"]);
fi("onPointerLeave", ["pointerout", "pointerover"]);
Tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), XE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function Hf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kw(r, t, void 0, e), e.currentTarget = null;
}
function pg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Hf(i, s, u), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Hf(i, s, u), a = l;
      }
    }
  }
  if (Go) throw e = Mu, Go = !1, Mu = null, e;
}
function he(e, t) {
  var n = t[Wu];
  n === void 0 && (n = t[Wu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dg(t, e, 2, !1), n.add(r));
}
function jl(e, t, n) {
  var r = 0;
  t && (r |= 4), dg(n, e, r, t);
}
var oo = "_reactListening" + Math.random().toString(36).slice(2);
function ga(e) {
  if (!e[oo]) {
    e[oo] = !0, yv.forEach(function(n) {
      n !== "selectionchange" && (XE.has(n) || jl(n, !1, e), jl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || (t[oo] = !0, jl("selectionchange", !1, t));
  }
}
function dg(e, t, n, r) {
  switch (Qv(t)) {
    case 1:
      var i = cE;
      break;
    case 4:
      i = pE;
      break;
    default:
      i = ap;
  }
  n = i.bind(null, t, n, e), i = void 0, !Du || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, i) {
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
  Dv(function() {
    var u = a, c = tp(n), d = [];
    e: {
      var f = cg.get(e);
      if (f !== void 0) {
        var x = sp, E = e;
        switch (e) {
          case "keypress":
            if (Io(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = _E;
            break;
          case "focusin":
            E = "focus", x = Rl;
            break;
          case "focusout":
            E = "blur", x = Rl;
            break;
          case "beforeblur":
          case "afterblur":
            x = Rl;
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
            x = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = mE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = NE;
            break;
          case og:
          case sg:
          case lg:
            x = gE;
            break;
          case ug:
            x = PE;
            break;
          case "scroll":
            x = dE;
            break;
          case "wheel":
            x = RE;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = yE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Pf;
        }
        var g = (t & 4) !== 0, k = !g && e === "scroll", h = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var v = u, w; v !== null; ) {
          w = v;
          var b = w.stateNode;
          if (w.tag === 5 && b !== null && (w = b, h !== null && (b = pa(v, h), b != null && g.push(xa(v, b, w)))), k) break;
          v = v.return;
        }
        0 < g.length && (f = new x(f, E, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", f && n !== Ru && (E = n.relatedTarget || n.fromElement) && (ur(E) || E[En])) break e;
        if ((x || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, x ? (E = n.relatedTarget || n.toElement, x = u, E = E ? ur(E) : null, E !== null && (k = Nr(E), E !== k || E.tag !== 5 && E.tag !== 6) && (E = null)) : (x = null, E = u), x !== E)) {
          if (g = Nf, b = "onMouseLeave", h = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (g = Pf, b = "onPointerLeave", h = "onPointerEnter", v = "pointer"), k = x == null ? f : qr(x), w = E == null ? f : qr(E), f = new g(b, v + "leave", x, n, c), f.target = k, f.relatedTarget = w, b = null, ur(c) === u && (g = new g(h, v + "enter", E, n, c), g.target = w, g.relatedTarget = k, b = g), k = b, x && E) t: {
            for (g = x, h = E, v = 0, w = g; w; w = Lr(w)) v++;
            for (w = 0, b = h; b; b = Lr(b)) w++;
            for (; 0 < v - w; ) g = Lr(g), v--;
            for (; 0 < w - v; ) h = Lr(h), w--;
            for (; v--; ) {
              if (g === h || h !== null && g === h.alternate) break t;
              g = Lr(g), h = Lr(h);
            }
            g = null;
          }
          else g = null;
          x !== null && Vf(d, f, x, g, !1), E !== null && k !== null && Vf(d, k, E, g, !0);
        }
      }
      e: {
        if (f = u ? qr(u) : window, x = f.nodeName && f.nodeName.toLowerCase(), x === "select" || x === "input" && f.type === "file") var C = zE;
        else if (Of(f)) if (tg) C = UE;
        else {
          C = VE;
          var S = HE;
        }
        else (x = f.nodeName) && x.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = $E);
        if (C && (C = C(e, u))) {
          eg(d, C, n, c);
          break e;
        }
        S && S(e, f, u), e === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && Tu(f, "number", f.value);
      }
      switch (S = u ? qr(u) : window, e) {
        case "focusin":
          (Of(S) || S.contentEditable === "true") && (Gr = S, zu = u, na = null);
          break;
        case "focusout":
          na = zu = Gr = null;
          break;
        case "mousedown":
          Hu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hu = !1, jf(d, n, c);
          break;
        case "selectionchange":
          if (qE) break;
        case "keydown":
        case "keyup":
          jf(d, n, c);
      }
      var _;
      if (up) e: {
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
      else Ur ? Zv(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Yv && n.locale !== "ko" && (Ur || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ur && (_ = Xv()) : (Mn = c, op = "value" in Mn ? Mn.value : Mn.textContent, Ur = !0)), S = Xo(u, T), 0 < S.length && (T = new If(T, e, null, n, c), d.push({ event: T, listeners: S }), _ ? T.data = _ : (_ = Jv(n), _ !== null && (T.data = _)))), (_ = DE ? ME(e, n) : LE(e, n)) && (u = Xo(u, "onBeforeInput"), 0 < u.length && (c = new If("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    pg(d, t);
  });
}
function xa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = pa(e, n), a != null && r.unshift(xa(e, a, i)), a = pa(e, t), a != null && r.push(xa(e, a, i))), e = e.return;
  }
  return r;
}
function Lr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vf(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = pa(n, a), l != null && o.unshift(xa(n, l, s))) : i || (l = pa(n, a), l != null && o.push(xa(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var YE = /\r\n?/g, ZE = /\u0000|\uFFFD/g;
function $f(e) {
  return (typeof e == "string" ? e : "" + e).replace(YE, `
`).replace(ZE, "");
}
function so(e, t, n) {
  if (t = $f(t), $f(e) !== t && n) throw Error(I(425));
}
function Yo() {
}
var Vu = null, $u = null;
function Uu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Gu = typeof setTimeout == "function" ? setTimeout : void 0, JE = typeof clearTimeout == "function" ? clearTimeout : void 0, Uf = typeof Promise == "function" ? Promise : void 0, ek = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uf < "u" ? function(e) {
  return Uf.resolve(null).then(e).catch(tk);
} : Gu;
function tk(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), ma(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ma(t);
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
function Gf(e) {
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
var Fi = Math.random().toString(36).slice(2), nn = "__reactFiber$" + Fi, ya = "__reactProps$" + Fi, En = "__reactContainer$" + Fi, Wu = "__reactEvents$" + Fi, nk = "__reactListeners$" + Fi, rk = "__reactHandles$" + Fi;
function ur(e) {
  var t = e[nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[En] || n[nn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gf(e); e !== null; ) {
        if (n = e[nn]) return n;
        e = Gf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ja(e) {
  return e = e[nn] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Fs(e) {
  return e[ya] || null;
}
var qu = [], Kr = -1;
function Zn(e) {
  return { current: e };
}
function ge(e) {
  0 > Kr || (e.current = qu[Kr], qu[Kr] = null, Kr--);
}
function fe(e, t) {
  Kr++, qu[Kr] = e.current, e.current = t;
}
var Kn = {}, Xe = Zn(Kn), ct = Zn(!1), yr = Kn;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function pt(e) {
  return e = e.childContextTypes, e != null;
}
function Zo() {
  ge(ct), ge(Xe);
}
function Wf(e, t, n) {
  if (Xe.current !== Kn) throw Error(I(168));
  fe(Xe, t), fe(ct, n);
}
function fg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Hw(e) || "Unknown", i));
  return be({}, n, r);
}
function Jo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn, yr = Xe.current, fe(Xe, e), fe(ct, ct.current), !0;
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = fg(e, t, yr), r.__reactInternalMemoizedMergedChildContext = e, ge(ct), ge(Xe), fe(Xe, e)) : ge(ct), fe(ct, n);
}
var mn = null, Rs = !1, Vl = !1;
function mg(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function ik(e) {
  Rs = !0, mg(e);
}
function Jn() {
  if (!Vl && mn !== null) {
    Vl = !0;
    var e = 0, t = le;
    try {
      var n = mn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mn = null, Rs = !1;
    } catch (i) {
      throw mn !== null && (mn = mn.slice(e + 1)), jv(np, Jn), i;
    } finally {
      le = t, Vl = !1;
    }
  }
  return null;
}
var Qr = [], Xr = 0, es = null, ts = 0, At = [], Tt = 0, wr = null, gn = 1, xn = "";
function ir(e, t) {
  Qr[Xr++] = ts, Qr[Xr++] = es, es = e, ts = t;
}
function hg(e, t, n) {
  At[Tt++] = gn, At[Tt++] = xn, At[Tt++] = wr, wr = e;
  var r = gn;
  e = xn;
  var i = 32 - Wt(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - Wt(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, gn = 1 << 32 - Wt(t) + i | n << i | r, xn = a + e;
  } else gn = 1 << a | n << i | r, xn = e;
}
function pp(e) {
  e.return !== null && (ir(e, 1), hg(e, 1, 0));
}
function dp(e) {
  for (; e === es; ) es = Qr[--Xr], Qr[Xr] = null, ts = Qr[--Xr], Qr[Xr] = null;
  for (; e === wr; ) wr = At[--Tt], At[Tt] = null, xn = At[--Tt], At[Tt] = null, gn = At[--Tt], At[Tt] = null;
}
var yt = null, xt = null, xe = !1, Ut = null;
function vg(e, t) {
  var n = Nt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Kf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yt = e, xt = Hn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yt = e, xt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wr !== null ? { id: gn, overflow: xn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, yt = e, xt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qu(e) {
  if (xe) {
    var t = xt;
    if (t) {
      var n = t;
      if (!Kf(e, t)) {
        if (Ku(e)) throw Error(I(418));
        t = Hn(n.nextSibling);
        var r = yt;
        t && Kf(e, t) ? vg(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, yt = e);
      }
    } else {
      if (Ku(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, xe = !1, yt = e;
    }
  }
}
function Qf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  yt = e;
}
function lo(e) {
  if (e !== yt) return !1;
  if (!xe) return Qf(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps)), t && (t = xt)) {
    if (Ku(e)) throw gg(), Error(I(418));
    for (; t; ) vg(e, t), t = Hn(t.nextSibling);
  }
  if (Qf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xt = Hn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = yt ? Hn(e.stateNode.nextSibling) : null;
  return !0;
}
function gg() {
  for (var e = xt; e; ) e = Hn(e.nextSibling);
}
function hi() {
  xt = yt = null, xe = !1;
}
function fp(e) {
  Ut === null ? Ut = [e] : Ut.push(e);
}
var ak = _n.ReactCurrentBatchConfig;
function Vi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function uo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xf(e) {
  var t = e._init;
  return t(e._payload);
}
function xg(e) {
  function t(h, v) {
    if (e) {
      var w = h.deletions;
      w === null ? (h.deletions = [v], h.flags |= 16) : w.push(v);
    }
  }
  function n(h, v) {
    if (!e) return null;
    for (; v !== null; ) t(h, v), v = v.sibling;
    return null;
  }
  function r(h, v) {
    for (h = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? h.set(v.key, v) : h.set(v.index, v), v = v.sibling;
    return h;
  }
  function i(h, v) {
    return h = Gn(h, v), h.index = 0, h.sibling = null, h;
  }
  function a(h, v, w) {
    return h.index = w, e ? (w = h.alternate, w !== null ? (w = w.index, w < v ? (h.flags |= 2, v) : w) : (h.flags |= 2, v)) : (h.flags |= 1048576, v);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, v, w, b) {
    return v === null || v.tag !== 6 ? (v = Ql(w, h.mode, b), v.return = h, v) : (v = i(v, w), v.return = h, v);
  }
  function l(h, v, w, b) {
    var C = w.type;
    return C === $r ? c(h, v, w.props.children, b, w.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pn && Xf(C) === v.type) ? (b = i(v, w.props), b.ref = Vi(h, v, w), b.return = h, b) : (b = Lo(w.type, w.key, w.props, null, h.mode, b), b.ref = Vi(h, v, w), b.return = h, b);
  }
  function u(h, v, w, b) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = Xl(w, h.mode, b), v.return = h, v) : (v = i(v, w.children || []), v.return = h, v);
  }
  function c(h, v, w, b, C) {
    return v === null || v.tag !== 7 ? (v = hr(w, h.mode, b, C), v.return = h, v) : (v = i(v, w), v.return = h, v);
  }
  function d(h, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = Ql("" + v, h.mode, w), v.return = h, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Za:
          return w = Lo(v.type, v.key, v.props, null, h.mode, w), w.ref = Vi(h, null, v), w.return = h, w;
        case Vr:
          return v = Xl(v, h.mode, w), v.return = h, v;
        case Pn:
          var b = v._init;
          return d(h, b(v._payload), w);
      }
      if (Ki(v) || Li(v)) return v = hr(v, h.mode, w, null), v.return = h, v;
      uo(h, v);
    }
    return null;
  }
  function f(h, v, w, b) {
    var C = v !== null ? v.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return C !== null ? null : s(h, v, "" + w, b);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Za:
          return w.key === C ? l(h, v, w, b) : null;
        case Vr:
          return w.key === C ? u(h, v, w, b) : null;
        case Pn:
          return C = w._init, f(
            h,
            v,
            C(w._payload),
            b
          );
      }
      if (Ki(w) || Li(w)) return C !== null ? null : c(h, v, w, b, null);
      uo(h, w);
    }
    return null;
  }
  function x(h, v, w, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return h = h.get(w) || null, s(v, h, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Za:
          return h = h.get(b.key === null ? w : b.key) || null, l(v, h, b, C);
        case Vr:
          return h = h.get(b.key === null ? w : b.key) || null, u(v, h, b, C);
        case Pn:
          var S = b._init;
          return x(h, v, w, S(b._payload), C);
      }
      if (Ki(b) || Li(b)) return h = h.get(w) || null, c(v, h, b, C, null);
      uo(v, b);
    }
    return null;
  }
  function E(h, v, w, b) {
    for (var C = null, S = null, _ = v, T = v = 0, F = null; _ !== null && T < w.length; T++) {
      _.index > T ? (F = _, _ = null) : F = _.sibling;
      var P = f(h, _, w[T], b);
      if (P === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && P.alternate === null && t(h, _), v = a(P, v, T), S === null ? C = P : S.sibling = P, S = P, _ = F;
    }
    if (T === w.length) return n(h, _), xe && ir(h, T), C;
    if (_ === null) {
      for (; T < w.length; T++) _ = d(h, w[T], b), _ !== null && (v = a(_, v, T), S === null ? C = _ : S.sibling = _, S = _);
      return xe && ir(h, T), C;
    }
    for (_ = r(h, _); T < w.length; T++) F = x(_, h, T, w[T], b), F !== null && (e && F.alternate !== null && _.delete(F.key === null ? T : F.key), v = a(F, v, T), S === null ? C = F : S.sibling = F, S = F);
    return e && _.forEach(function(V) {
      return t(h, V);
    }), xe && ir(h, T), C;
  }
  function g(h, v, w, b) {
    var C = Li(w);
    if (typeof C != "function") throw Error(I(150));
    if (w = C.call(w), w == null) throw Error(I(151));
    for (var S = C = null, _ = v, T = v = 0, F = null, P = w.next(); _ !== null && !P.done; T++, P = w.next()) {
      _.index > T ? (F = _, _ = null) : F = _.sibling;
      var V = f(h, _, P.value, b);
      if (V === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && V.alternate === null && t(h, _), v = a(V, v, T), S === null ? C = V : S.sibling = V, S = V, _ = F;
    }
    if (P.done) return n(
      h,
      _
    ), xe && ir(h, T), C;
    if (_ === null) {
      for (; !P.done; T++, P = w.next()) P = d(h, P.value, b), P !== null && (v = a(P, v, T), S === null ? C = P : S.sibling = P, S = P);
      return xe && ir(h, T), C;
    }
    for (_ = r(h, _); !P.done; T++, P = w.next()) P = x(_, h, T, P.value, b), P !== null && (e && P.alternate !== null && _.delete(P.key === null ? T : P.key), v = a(P, v, T), S === null ? C = P : S.sibling = P, S = P);
    return e && _.forEach(function(z) {
      return t(h, z);
    }), xe && ir(h, T), C;
  }
  function k(h, v, w, b) {
    if (typeof w == "object" && w !== null && w.type === $r && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Za:
          e: {
            for (var C = w.key, S = v; S !== null; ) {
              if (S.key === C) {
                if (C = w.type, C === $r) {
                  if (S.tag === 7) {
                    n(h, S.sibling), v = i(S, w.props.children), v.return = h, h = v;
                    break e;
                  }
                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pn && Xf(C) === S.type) {
                  n(h, S.sibling), v = i(S, w.props), v.ref = Vi(h, S, w), v.return = h, h = v;
                  break e;
                }
                n(h, S);
                break;
              } else t(h, S);
              S = S.sibling;
            }
            w.type === $r ? (v = hr(w.props.children, h.mode, b, w.key), v.return = h, h = v) : (b = Lo(w.type, w.key, w.props, null, h.mode, b), b.ref = Vi(h, v, w), b.return = h, h = b);
          }
          return o(h);
        case Vr:
          e: {
            for (S = w.key; v !== null; ) {
              if (v.key === S) if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                n(h, v.sibling), v = i(v, w.children || []), v.return = h, h = v;
                break e;
              } else {
                n(h, v);
                break;
              }
              else t(h, v);
              v = v.sibling;
            }
            v = Xl(w, h.mode, b), v.return = h, h = v;
          }
          return o(h);
        case Pn:
          return S = w._init, k(h, v, S(w._payload), b);
      }
      if (Ki(w)) return E(h, v, w, b);
      if (Li(w)) return g(h, v, w, b);
      uo(h, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, v !== null && v.tag === 6 ? (n(h, v.sibling), v = i(v, w), v.return = h, h = v) : (n(h, v), v = Ql(w, h.mode, b), v.return = h, h = v), o(h)) : n(h, v);
  }
  return k;
}
var vi = xg(!0), yg = xg(!1), ns = Zn(null), rs = null, Yr = null, mp = null;
function hp() {
  mp = Yr = rs = null;
}
function vp(e) {
  var t = ns.current;
  ge(ns), e._currentValue = t;
}
function Xu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function si(e, t) {
  rs = e, mp = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), e.firstContext = null);
}
function Pt(e) {
  var t = e._currentValue;
  if (mp !== e) if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
    if (rs === null) throw Error(I(308));
    Yr = e, rs.dependencies = { lanes: 0, firstContext: e };
  } else Yr = Yr.next = e;
  return t;
}
var cr = null;
function gp(e) {
  cr === null ? cr = [e] : cr.push(e);
}
function wg(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, gp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, kn(e, r);
}
function kn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Fn = !1;
function xp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Eg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, oe & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, kn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, gp(r)) : (t.next = i.next, i.next = t), r.interleaved = t, kn(e, n);
}
function Po(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rp(e, n);
  }
}
function Yf(e, t) {
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
  Fn = !1;
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
      var f = s.lane, x = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: x,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var E = e, g = s;
          switch (f = t, x = n, g.tag) {
            case 1:
              if (E = g.payload, typeof E == "function") {
                d = E.call(x, d, f);
                break e;
              }
              d = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = g.payload, f = typeof E == "function" ? E.call(x, d, f) : E, f == null) break e;
              d = be({}, d, f);
              break e;
            case 2:
              Fn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
      } else x = { eventTime: x, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = x, l = d) : c = c.next = x, o |= f;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    kr |= o, e.lanes = o, e.memoizedState = d;
  }
}
function Zf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(I(191, i));
      i.call(r);
    }
  }
}
var za = {}, on = Zn(za), wa = Zn(za), Ea = Zn(za);
function pr(e) {
  if (e === za) throw Error(I(174));
  return e;
}
function yp(e, t) {
  switch (fe(Ea, t), fe(wa, e), fe(on, za), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Iu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Iu(t, e);
  }
  ge(on), fe(on, t);
}
function gi() {
  ge(on), ge(wa), ge(Ea);
}
function kg(e) {
  pr(Ea.current);
  var t = pr(on.current), n = Iu(t, e.type);
  t !== n && (fe(wa, e), fe(on, n));
}
function wp(e) {
  wa.current === e && (ge(on), ge(wa));
}
var Ee = Zn(0);
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
var $l = [];
function Ep() {
  for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Fo = _n.ReactCurrentDispatcher, Ul = _n.ReactCurrentBatchConfig, Er = 0, ke = null, Fe = null, Oe = null, os = !1, ra = !1, ka = 0, ok = 0;
function Ge() {
  throw Error(I(321));
}
function kp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function bp(e, t, n, r, i, a) {
  if (Er = a, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fo.current = e === null || e.memoizedState === null ? ck : pk, e = n(r, i), ra) {
    a = 0;
    do {
      if (ra = !1, ka = 0, 25 <= a) throw Error(I(301));
      a += 1, Oe = Fe = null, t.updateQueue = null, Fo.current = dk, e = n(r, i);
    } while (ra);
  }
  if (Fo.current = ss, t = Fe !== null && Fe.next !== null, Er = 0, Oe = Fe = ke = null, os = !1, t) throw Error(I(300));
  return e;
}
function Cp() {
  var e = ka !== 0;
  return ka = 0, e;
}
function en() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Oe === null ? ke.memoizedState = Oe = e : Oe = Oe.next = e, Oe;
}
function Ft() {
  if (Fe === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = Oe === null ? ke.memoizedState : Oe.next;
  if (t !== null) Oe = t, Fe = e;
  else {
    if (e === null) throw Error(I(310));
    Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Oe === null ? ke.memoizedState = Oe = e : Oe = Oe.next = e;
  }
  return Oe;
}
function ba(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = Ft(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Fe, i = r.baseQueue, a = n.pending;
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
      if ((Er & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, o = r) : l = l.next = d, ke.lanes |= c, kr |= c;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = r : l.next = s, Kt(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, ke.lanes |= a, kr |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Ft(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    Kt(a, t.memoizedState) || (ut = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function bg() {
}
function Cg(e, t) {
  var n = ke, r = Ft(), i = t(), a = !Kt(r.memoizedState, i);
  if (a && (r.memoizedState = i, ut = !0), r = r.queue, Sp(Ag.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Oe !== null && Oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ca(9, _g.bind(null, n, r, i, t), void 0, null), Le === null) throw Error(I(349));
    Er & 30 || Sg(n, t, i);
  }
  return i;
}
function Sg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _g(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Tg(t) && Ng(e);
}
function Ag(e, t, n) {
  return n(function() {
    Tg(t) && Ng(e);
  });
}
function Tg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function Ng(e) {
  var t = kn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function Jf(e) {
  var t = en();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ba, lastRenderedState: e }, t.queue = e, e = e.dispatch = uk.bind(null, ke, e), [t.memoizedState, e];
}
function Ca(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ig() {
  return Ft().memoizedState;
}
function Ro(e, t, n, r) {
  var i = en();
  ke.flags |= e, i.memoizedState = Ca(1 | t, n, void 0, r === void 0 ? null : r);
}
function Os(e, t, n, r) {
  var i = Ft();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Fe !== null) {
    var o = Fe.memoizedState;
    if (a = o.destroy, r !== null && kp(r, o.deps)) {
      i.memoizedState = Ca(t, n, a, r);
      return;
    }
  }
  ke.flags |= e, i.memoizedState = Ca(1 | t, n, a, r);
}
function em(e, t) {
  return Ro(8390656, 8, e, t);
}
function Sp(e, t) {
  return Os(2048, 8, e, t);
}
function Pg(e, t) {
  return Os(4, 2, e, t);
}
function Fg(e, t) {
  return Os(4, 4, e, t);
}
function Rg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Og(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Os(4, 4, Rg.bind(null, t, e), n);
}
function _p() {
}
function Dg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Mg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lg(e, t, n) {
  return Er & 21 ? (Kt(n, t) || (n = Vv(), ke.lanes |= n, kr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n);
}
function sk(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    le = n, Ul.transition = r;
  }
}
function Bg() {
  return Ft().memoizedState;
}
function lk(e, t, n) {
  var r = Un(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jg(e)) zg(t, n);
  else if (n = wg(e, t, n, r), n !== null) {
    var i = rt();
    qt(n, e, r, i), Hg(n, t, r);
  }
}
function uk(e, t, n) {
  var r = Un(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jg(e)) zg(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = !0, i.eagerState = s, Kt(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, gp(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = wg(e, t, i, r), n !== null && (i = rt(), qt(n, e, r, i), Hg(n, t, r));
  }
}
function jg(e) {
  var t = e.alternate;
  return e === ke || t !== null && t === ke;
}
function zg(e, t) {
  ra = os = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rp(e, n);
  }
}
var ss = { readContext: Pt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, ck = { readContext: Pt, useCallback: function(e, t) {
  return en().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pt, useEffect: em, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ro(
    4194308,
    4,
    Rg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ro(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ro(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = en();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = en();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lk.bind(null, ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = en();
  return e = { current: e }, t.memoizedState = e;
}, useState: Jf, useDebugValue: _p, useDeferredValue: function(e) {
  return en().memoizedState = e;
}, useTransition: function() {
  var e = Jf(!1), t = e[0];
  return e = sk.bind(null, e[1]), en().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ke, i = en();
  if (xe) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), Le === null) throw Error(I(349));
    Er & 30 || Sg(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, em(Ag.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Ca(9, _g.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = en(), t = Le.identifierPrefix;
  if (xe) {
    var n = xn, r = gn;
    n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ka++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ok++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, pk = {
  readContext: Pt,
  useCallback: Dg,
  useContext: Pt,
  useEffect: Sp,
  useImperativeHandle: Og,
  useInsertionEffect: Pg,
  useLayoutEffect: Fg,
  useMemo: Mg,
  useReducer: Gl,
  useRef: Ig,
  useState: function() {
    return Gl(ba);
  },
  useDebugValue: _p,
  useDeferredValue: function(e) {
    var t = Ft();
    return Lg(t, Fe.memoizedState, e);
  },
  useTransition: function() {
    var e = Gl(ba)[0], t = Ft().memoizedState;
    return [e, t];
  },
  useMutableSource: bg,
  useSyncExternalStore: Cg,
  useId: Bg,
  unstable_isNewReconciler: !1
}, dk = { readContext: Pt, useCallback: Dg, useContext: Pt, useEffect: Sp, useImperativeHandle: Og, useInsertionEffect: Pg, useLayoutEffect: Fg, useMemo: Mg, useReducer: Wl, useRef: Ig, useState: function() {
  return Wl(ba);
}, useDebugValue: _p, useDeferredValue: function(e) {
  var t = Ft();
  return Fe === null ? t.memoizedState = e : Lg(t, Fe.memoizedState, e);
}, useTransition: function() {
  var e = Wl(ba)[0], t = Ft().memoizedState;
  return [e, t];
}, useMutableSource: bg, useSyncExternalStore: Cg, useId: Bg, unstable_isNewReconciler: !1 };
function Ht(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ds = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = Un(e), a = yn(r, i);
  a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (qt(t, e, i, r), Po(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = Un(e), a = yn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Vn(e, a, i), t !== null && (qt(t, e, i, r), Po(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = rt(), r = Un(e), i = yn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Vn(e, i, r), t !== null && (qt(t, e, r, n), Po(t, e, r));
} };
function tm(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !va(n, r) || !va(i, a) : !0;
}
function Vg(e, t, n) {
  var r = !1, i = Kn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Pt(a) : (i = pt(t) ? yr : Xe.current, r = t.contextTypes, a = (r = r != null) ? mi(e, i) : Kn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function nm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null);
}
function Zu(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, xp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Pt(a) : (a = pt(t) ? yr : Xe.current, i.context = mi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Yu(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ds.enqueueReplaceState(i, i.state, null), is(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function xi(e, t) {
  try {
    var n = "", r = t;
    do
      n += zw(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ju(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fk = typeof WeakMap == "function" ? WeakMap : Map;
function $g(e, t, n) {
  n = yn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    us || (us = !0, uc = r), Ju(e, t);
  }, n;
}
function Ug(e, t, n) {
  n = yn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Ju(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ju(e, t), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function rm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fk();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Ak.bind(null, e, t, n), t.then(e, e));
}
function im(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function am(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yn(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e);
}
var mk = _n.ReactCurrentOwner, ut = !1;
function Je(e, t, n, r) {
  t.child = e === null ? yg(t, null, n, r) : vi(t, e.child, n, r);
}
function om(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return si(t, i), r = bp(e, t, n, r, a, i), n = Cp(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, bn(e, t, i)) : (xe && n && pp(t), t.flags |= 1, Je(e, t, r, i), t.child);
}
function sm(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Op(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Gg(e, t, a, r, i)) : (e = Lo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : va, n(o, r) && e.ref === t.ref) return bn(e, t, i);
  }
  return t.flags |= 1, e = Gn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gg(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (va(a, r) && e.ref === t.ref) if (ut = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (ut = !0);
    else return t.lanes = e.lanes, bn(e, t, i);
  }
  return ec(e, t, n, r, i);
}
function Wg(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Jr, vt), vt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Jr, vt), vt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, fe(Jr, vt), vt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, fe(Jr, vt), vt |= r;
  return Je(e, t, i, n), t.child;
}
function qg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ec(e, t, n, r, i) {
  var a = pt(n) ? yr : Xe.current;
  return a = mi(t, a), si(t, i), n = bp(e, t, n, r, a, i), r = Cp(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, bn(e, t, i)) : (xe && r && pp(t), t.flags |= 1, Je(e, t, n, i), t.child);
}
function lm(e, t, n, r, i) {
  if (pt(n)) {
    var a = !0;
    Jo(t);
  } else a = !1;
  if (si(t, i), t.stateNode === null) Oo(e, t), Vg(t, n, r), Zu(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Pt(u) : (u = pt(n) ? yr : Xe.current, u = mi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== u) && nm(t, o, r, u), Fn = !1;
    var f = t.memoizedState;
    o.state = f, is(t, r, o, i), l = t.memoizedState, s !== r || f !== l || ct.current || Fn ? (typeof c == "function" && (Yu(t, n, c, r), l = t.memoizedState), (s = Fn || tm(t, n, s, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Eg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Ht(t.type, s), o.props = u, d = t.pendingProps, f = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Pt(l) : (l = pt(n) ? yr : Xe.current, l = mi(t, l));
    var x = n.getDerivedStateFromProps;
    (c = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== l) && nm(t, o, r, l), Fn = !1, f = t.memoizedState, o.state = f, is(t, r, o, i);
    var E = t.memoizedState;
    s !== d || f !== E || ct.current || Fn ? (typeof x == "function" && (Yu(t, n, x, r), E = t.memoizedState), (u = Fn || tm(t, n, u, r, f, E, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, E, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, E, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), o.props = r, o.state = E, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return tc(e, t, n, r, a, i);
}
function tc(e, t, n, r, i, a) {
  qg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && qf(t, n, !1), bn(e, t, a);
  r = t.stateNode, mk.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = vi(t, e.child, null, a), t.child = vi(t, null, s, a)) : Je(e, t, s, a), t.memoizedState = r.state, i && qf(t, n, !0), t.child;
}
function Kg(e) {
  var t = e.stateNode;
  t.pendingContext ? Wf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wf(e, t.context, !1), yp(e, t.containerInfo);
}
function um(e, t, n, r, i) {
  return hi(), fp(i), t.flags |= 256, Je(e, t, n, r), t.child;
}
var nc = { dehydrated: null, treeContext: null, retryLane: 0 };
function rc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qg(e, t, n) {
  var r = t.pendingProps, i = Ee.current, a = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), fe(Ee, i & 1), e === null)
    return Qu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Bs(o, r, 0, null), e = hr(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = rc(n), t.memoizedState = nc, e) : Ap(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return hk(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Gn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = Gn(s, a) : (a = hr(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? rc(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = nc, r;
  }
  return a = e.child, e = a.sibling, r = Gn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ap(e, t) {
  return t = Bs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function co(e, t, n, r) {
  return r !== null && fp(r), vi(t, e.child, null, n), e = Ap(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hk(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ql(Error(I(422))), co(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Bs({ mode: "visible", children: r.children }, i, 0, null), a = hr(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && vi(t, e.child, null, o), t.child.memoizedState = rc(o), t.memoizedState = nc, a);
  if (!(t.mode & 1)) return co(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error(I(419)), r = ql(a, r, void 0), co(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, ut || s) {
    if (r = Le, r !== null) {
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, kn(e, i), qt(r, e, i, -1));
    }
    return Rp(), r = ql(Error(I(421))), co(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tk.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, xt = Hn(i.nextSibling), yt = t, xe = !0, Ut = null, e !== null && (At[Tt++] = gn, At[Tt++] = xn, At[Tt++] = wr, gn = e.id, xn = e.overflow, wr = t), t = Ap(t, r.children), t.flags |= 4096, t);
}
function cm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xu(e.return, t, n);
}
function Kl(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function Xg(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (Je(e, t, r.children, n), r = Ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && cm(e, n, t);
      else if (e.tag === 19) cm(e, n, t);
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
  if (fe(Ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && as(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Kl(t, !1, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && as(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Kl(t, !0, n, null, a);
      break;
    case "together":
      Kl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vk(e, t, n) {
  switch (t.tag) {
    case 3:
      Kg(t), hi();
      break;
    case 5:
      kg(t);
      break;
    case 1:
      pt(t.type) && Jo(t);
      break;
    case 4:
      yp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      fe(ns, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(Ee, Ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qg(e, t, n) : (fe(Ee, Ee.current & 1), e = bn(e, t, n), e !== null ? e.sibling : null);
      fe(Ee, Ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xg(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(Ee, Ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wg(e, t, n);
  }
  return bn(e, t, n);
}
var Yg, ic, Zg, Jg;
Yg = function(e, t) {
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
ic = function() {
};
Zg = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, pr(on.current);
    var a = null;
    switch (n) {
      case "input":
        i = _u(e, i), r = _u(e, r), a = [];
        break;
      case "select":
        i = be({}, i, { value: void 0 }), r = be({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Nu(e, i), r = Nu(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yo);
    }
    Pu(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ua.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ua.hasOwnProperty(u) ? (l != null && u === "onScroll" && he("scroll", e), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Jg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $i(e, t) {
  if (!xe) switch (e.tailMode) {
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
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gk(e, t, n) {
  var r = t.pendingProps;
  switch (dp(t), t.tag) {
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
      return We(t), null;
    case 1:
      return pt(t.type) && Zo(), We(t), null;
    case 3:
      return r = t.stateNode, gi(), ge(ct), ge(Xe), Ep(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (lo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ut !== null && (dc(Ut), Ut = null))), ic(e, t), We(t), null;
    case 5:
      wp(t);
      var i = pr(Ea.current);
      if (n = t.type, e !== null && t.stateNode != null) Zg(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return We(t), null;
        }
        if (e = pr(on.current), lo(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[nn] = t, r[ya] = a, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < Xi.length; i++) he(Xi[i], r);
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
              yf(r, a), he("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, he("invalid", r);
              break;
            case "textarea":
              Ef(r, a), he("invalid", r);
          }
          Pu(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && so(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && so(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : ua.hasOwnProperty(o) && s != null && o === "onScroll" && he("scroll", r);
          }
          switch (n) {
            case "input":
              Ja(r), wf(r, a, !0);
              break;
            case "textarea":
              Ja(r), kf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Yo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Av(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[nn] = t, e[ya] = r, Yg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Fu(n, r), n) {
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
                for (i = 0; i < Xi.length; i++) he(Xi[i], e);
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
                yf(e, r), i = _u(e, r), he("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = be({}, r, { value: void 0 }), he("invalid", e);
                break;
              case "textarea":
                Ef(e, r), i = Nu(e, r), he("invalid", e);
                break;
              default:
                i = r;
            }
            Pu(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? Iv(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Tv(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ca(e, l) : typeof l == "number" && ca(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ua.hasOwnProperty(a) ? l != null && a === "onScroll" && he("scroll", e) : l != null && Yc(e, a, l, o));
            }
            switch (n) {
              case "input":
                Ja(e), wf(e, r, !1);
                break;
              case "textarea":
                Ja(e), kf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? ri(e, !!r.multiple, a, !1) : r.defaultValue != null && ri(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Yo);
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
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) Jg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = pr(Ea.current), pr(on.current), lo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nn] = t, (a = r.nodeValue !== n) && (e = yt, e !== null)) switch (e.tag) {
            case 3:
              so(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && so(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nn] = t, t.stateNode = r;
      }
      return We(t), null;
    case 13:
      if (ge(Ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && xt !== null && t.mode & 1 && !(t.flags & 128)) gg(), hi(), t.flags |= 98560, a = !1;
        else if (a = lo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(I(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(I(317));
            a[nn] = t;
          } else hi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          We(t), a = !1;
        } else Ut !== null && (dc(Ut), Ut = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? Re === 0 && (Re = 3) : Rp())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
    case 4:
      return gi(), ic(e, t), e === null && ga(t.stateNode.containerInfo), We(t), null;
    case 10:
      return vp(t.type._context), We(t), null;
    case 17:
      return pt(t.type) && Zo(), We(t), null;
    case 19:
      if (ge(Ee), a = t.memoizedState, a === null) return We(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) $i(a, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = as(e), o !== null) {
            for (t.flags |= 128, $i(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(Ee, Ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ae() > yi && (t.flags |= 128, r = !0, $i(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = as(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $i(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return We(t), null;
        } else 2 * Ae() - a.renderingStartTime > yi && n !== 1073741824 && (t.flags |= 128, r = !0, $i(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ae(), t.sibling = null, n = Ee.current, fe(Ee, r ? n & 1 | 2 : n & 1), t) : (We(t), null);
    case 22:
    case 23:
      return Fp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? vt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function xk(e, t) {
  switch (dp(t), t.tag) {
    case 1:
      return pt(t.type) && Zo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gi(), ge(ct), ge(Xe), Ep(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wp(t), null;
    case 13:
      if (ge(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        hi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ge(Ee), null;
    case 4:
      return gi(), null;
    case 10:
      return vp(t.type._context), null;
    case 22:
    case 23:
      return Fp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var po = !1, qe = !1, yk = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Zr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ce(e, t, r);
  }
  else n.current = null;
}
function ac(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var pm = !1;
function wk(e, t) {
  if (Vu = Ko, e = ig(), cp(e)) {
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
        var o = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var x; d !== n || i !== 0 && d.nodeType !== 3 || (s = o + i), d !== a || r !== 0 && d.nodeType !== 3 || (l = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (x = d.firstChild) !== null; )
            f = d, d = x;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === i && (s = o), f === a && ++c === r && (l = o), (x = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = x;
        }
        n = s === -1 || l === -1 ? null : { start: s, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($u = { focusedElem: e, selectionRange: n }, Ko = !1, j = t; j !== null; ) if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
  else for (; j !== null; ) {
    t = j;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var g = E.memoizedProps, k = E.memoizedState, h = t.stateNode, v = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ht(t.type, g), k);
            h.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(I(163));
      }
    } catch (b) {
      Ce(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, j = e;
      break;
    }
    j = t.return;
  }
  return E = pm, pm = !1, E;
}
function ia(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && ac(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ms(e, t) {
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
function oc(e) {
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
function ex(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ex(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nn], delete t[ya], delete t[Wu], delete t[nk], delete t[rk])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || tx(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function sc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yo));
  else if (r !== 4 && (e = e.child, e !== null)) for (sc(e, t, n), e = e.sibling; e !== null; ) sc(e, t, n), e = e.sibling;
}
function lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (lc(e, t, n), e = e.sibling; e !== null; ) lc(e, t, n), e = e.sibling;
}
var He = null, Vt = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; ) nx(e, t, n), n = n.sibling;
}
function nx(e, t, n) {
  if (an && typeof an.onCommitFiberUnmount == "function") try {
    an.onCommitFiberUnmount(Ts, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      qe || Zr(n, t);
    case 6:
      var r = He, i = Vt;
      He = null, In(e, t, n), He = r, Vt = i, He !== null && (Vt ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null && (Vt ? (e = He, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), ma(e)) : Hl(He, n.stateNode));
      break;
    case 4:
      r = He, i = Vt, He = n.stateNode.containerInfo, Vt = !0, In(e, t, n), He = r, Vt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && ac(n, t, o), i = i.next;
        } while (i !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (!qe && (Zr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Ce(n, t, s);
      }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, In(e, t, n), qe = r) : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function fm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yk()), t.forEach(function(r) {
      var i = Nk.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function zt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            He = s.stateNode, Vt = !1;
            break e;
          case 3:
            He = s.stateNode.containerInfo, Vt = !0;
            break e;
          case 4:
            He = s.stateNode.containerInfo, Vt = !0;
            break e;
        }
        s = s.return;
      }
      if (He === null) throw Error(I(160));
      nx(a, o, i), He = null, Vt = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Ce(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rx(t, e), t = t.sibling;
}
function rx(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (zt(t, e), Zt(e), r & 4) {
        try {
          ia(3, e, e.return), Ms(3, e);
        } catch (g) {
          Ce(e, e.return, g);
        }
        try {
          ia(5, e, e.return);
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 1:
      zt(t, e), Zt(e), r & 512 && n !== null && Zr(n, n.return);
      break;
    case 5:
      if (zt(t, e), Zt(e), r & 512 && n !== null && Zr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          ca(i, "");
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && Sv(i, a), Fu(s, o);
          var u = Fu(s, a);
          for (o = 0; o < l.length; o += 2) {
            var c = l[o], d = l[o + 1];
            c === "style" ? Iv(i, d) : c === "dangerouslySetInnerHTML" ? Tv(i, d) : c === "children" ? ca(i, d) : Yc(i, c, d, u);
          }
          switch (s) {
            case "input":
              Au(i, a);
              break;
            case "textarea":
              _v(i, a);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? ri(i, !!a.multiple, x, !1) : f !== !!a.multiple && (a.defaultValue != null ? ri(
                i,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : ri(i, !!a.multiple, a.multiple ? [] : "", !1));
          }
          i[ya] = a;
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 6:
      if (zt(t, e), Zt(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (g) {
          Ce(e, e.return, g);
        }
      }
      break;
    case 3:
      if (zt(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ma(t.containerInfo);
      } catch (g) {
        Ce(e, e.return, g);
      }
      break;
    case 4:
      zt(t, e), Zt(e);
      break;
    case 13:
      zt(t, e), Zt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Ip = Ae())), r & 4 && fm(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (u = qe) || c, zt(t, e), qe = u) : zt(t, e), Zt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (j = e, c = e.child; c !== null; ) {
          for (d = j = c; j !== null; ) {
            switch (f = j, x = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ia(4, f, f.return);
                break;
              case 1:
                Zr(f, f.return);
                var E = f.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (g) {
                    Ce(r, n, g);
                  }
                }
                break;
              case 5:
                Zr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  hm(d);
                  continue;
                }
            }
            x !== null ? (x.return = f, j = x) : hm(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Nv("display", o));
              } catch (g) {
                Ce(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (g) {
              Ce(e, e.return, g);
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
      zt(t, e), Zt(e), r & 4 && fm(e);
      break;
    case 21:
      break;
    default:
      zt(
        t,
        e
      ), Zt(e);
  }
}
function Zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ca(i, ""), r.flags &= -33);
          var a = dm(e);
          lc(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = dm(e);
          sc(e, s, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ek(e, t, n) {
  j = e, ix(e);
}
function ix(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || po;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || qe;
        s = po;
        var u = qe;
        if (po = o, (qe = l) && !u) for (j = i; j !== null; ) o = j, l = o.child, o.tag === 22 && o.memoizedState !== null ? vm(i) : l !== null ? (l.return = o, j = l) : vm(i);
        for (; a !== null; ) j = a, ix(a), a = a.sibling;
        j = i, po = s, qe = u;
      }
      mm(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, j = a) : mm(e);
  }
}
function mm(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            qe || Ms(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ht(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Zf(t, a, r);
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
              Zf(t, o, n);
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
                  d !== null && ma(d);
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
            throw Error(I(163));
        }
        qe || t.flags & 512 && oc(t);
      } catch (f) {
        Ce(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function hm(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function vm(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ms(4, t);
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
            oc(t);
          } catch (l) {
            Ce(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            oc(t);
          } catch (l) {
            Ce(t, o, l);
          }
      }
    } catch (l) {
      Ce(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var kk = Math.ceil, ls = _n.ReactCurrentDispatcher, Tp = _n.ReactCurrentOwner, It = _n.ReactCurrentBatchConfig, oe = 0, Le = null, Ne = null, Ve = 0, vt = 0, Jr = Zn(0), Re = 0, Sa = null, kr = 0, Ls = 0, Np = 0, aa = null, lt = null, Ip = 0, yi = 1 / 0, fn = null, us = !1, uc = null, $n = null, fo = !1, Ln = null, cs = 0, oa = 0, cc = null, Do = -1, Mo = 0;
function rt() {
  return oe & 6 ? Ae() : Do !== -1 ? Do : Do = Ae();
}
function Un(e) {
  return e.mode & 1 ? oe & 2 && Ve !== 0 ? Ve & -Ve : ak.transition !== null ? (Mo === 0 && (Mo = Vv()), Mo) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qv(e.type)), e) : 1;
}
function qt(e, t, n, r) {
  if (50 < oa) throw oa = 0, cc = null, Error(I(185));
  La(e, n, r), (!(oe & 2) || e !== Le) && (e === Le && (!(oe & 2) && (Ls |= n), Re === 4 && Dn(e, Ve)), dt(e, r), n === 1 && oe === 0 && !(t.mode & 1) && (yi = Ae() + 500, Rs && Jn()));
}
function dt(e, t) {
  var n = e.callbackNode;
  aE(e, t);
  var r = qo(e, e === Le ? Ve : 0);
  if (r === 0) n !== null && Sf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Sf(n), t === 1) e.tag === 0 ? ik(gm.bind(null, e)) : mg(gm.bind(null, e)), ek(function() {
      !(oe & 6) && Jn();
    }), n = null;
    else {
      switch ($v(r)) {
        case 1:
          n = np;
          break;
        case 4:
          n = zv;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = Hv;
          break;
        default:
          n = Wo;
      }
      n = dx(n, ax.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ax(e, t) {
  if (Do = -1, Mo = 0, oe & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = qo(e, e === Le ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
  else {
    t = r;
    var i = oe;
    oe |= 2;
    var a = sx();
    (Le !== e || Ve !== t) && (fn = null, yi = Ae() + 500, mr(e, t));
    do
      try {
        Sk();
        break;
      } catch (s) {
        ox(e, s);
      }
    while (!0);
    hp(), ls.current = a, oe = i, Ne !== null ? t = 0 : (Le = null, Ve = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (i = Lu(e), i !== 0 && (r = i, t = pc(e, i))), t === 1) throw n = Sa, mr(e, 0), Dn(e, r), dt(e, Ae()), n;
    if (t === 6) Dn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !bk(i) && (t = ps(e, r), t === 2 && (a = Lu(e), a !== 0 && (r = a, t = pc(e, a))), t === 1)) throw n = Sa, mr(e, 0), Dn(e, r), dt(e, Ae()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          ar(e, lt, fn);
          break;
        case 3:
          if (Dn(e, r), (r & 130023424) === r && (t = Ip + 500 - Ae(), 10 < t)) {
            if (qo(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              rt(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Gu(ar.bind(null, e, lt, fn), t);
            break;
          }
          ar(e, lt, fn);
          break;
        case 4:
          if (Dn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Wt(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kk(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Gu(ar.bind(null, e, lt, fn), r);
            break;
          }
          ar(e, lt, fn);
          break;
        case 5:
          ar(e, lt, fn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return dt(e, Ae()), e.callbackNode === n ? ax.bind(null, e) : null;
}
function pc(e, t) {
  var n = aa;
  return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256), e = ps(e, t), e !== 2 && (t = lt, lt = n, t !== null && dc(t)), e;
}
function dc(e) {
  lt === null ? lt = e : lt.push.apply(lt, e);
}
function bk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!Kt(a(), i)) return !1;
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
function Dn(e, t) {
  for (t &= ~Np, t &= ~Ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function gm(e) {
  if (oe & 6) throw Error(I(327));
  li();
  var t = qo(e, 0);
  if (!(t & 1)) return dt(e, Ae()), null;
  var n = ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e);
    r !== 0 && (t = r, n = pc(e, r));
  }
  if (n === 1) throw n = Sa, mr(e, 0), Dn(e, t), dt(e, Ae()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ar(e, lt, fn), dt(e, Ae()), null;
}
function Pp(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (yi = Ae() + 500, Rs && Jn());
  }
}
function br(e) {
  Ln !== null && Ln.tag === 0 && !(oe & 6) && li();
  var t = oe;
  oe |= 1;
  var n = It.transition, r = le;
  try {
    if (It.transition = null, le = 1, e) return e();
  } finally {
    le = r, It.transition = n, oe = t, !(oe & 6) && Jn();
  }
}
function Fp() {
  vt = Jr.current, ge(Jr);
}
function mr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, JE(n)), Ne !== null) for (n = Ne.return; n !== null; ) {
    var r = n;
    switch (dp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zo();
        break;
      case 3:
        gi(), ge(ct), ge(Xe), Ep();
        break;
      case 5:
        wp(r);
        break;
      case 4:
        gi();
        break;
      case 13:
        ge(Ee);
        break;
      case 19:
        ge(Ee);
        break;
      case 10:
        vp(r.type._context);
        break;
      case 22:
      case 23:
        Fp();
    }
    n = n.return;
  }
  if (Le = e, Ne = e = Gn(e.current, null), Ve = vt = t, Re = 0, Sa = null, Np = Ls = kr = 0, lt = aa = null, cr !== null) {
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
function ox(e, t) {
  do {
    var n = Ne;
    try {
      if (hp(), Fo.current = ss, os) {
        for (var r = ke.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        os = !1;
      }
      if (Er = 0, Oe = Fe = ke = null, ra = !1, ka = 0, Tp.current = null, n === null || n.return === null) {
        Re = 1, Sa = t, Ne = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = Ve, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var x = im(o);
          if (x !== null) {
            x.flags &= -257, am(x, o, s, a, t), x.mode & 1 && rm(a, u, t), t = x, l = u;
            var E = t.updateQueue;
            if (E === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else E.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rm(a, u, t), Rp();
              break e;
            }
            l = Error(I(426));
          }
        } else if (xe && s.mode & 1) {
          var k = im(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), am(k, o, s, a, t), fp(xi(l, s));
            break e;
          }
        }
        a = l = xi(l, s), Re !== 4 && (Re = 2), aa === null ? aa = [a] : aa.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var h = $g(a, l, t);
              Yf(a, h);
              break e;
            case 1:
              s = l;
              var v = a.type, w = a.stateNode;
              if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && ($n === null || !$n.has(w)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var b = Ug(a, s, t);
                Yf(a, b);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ux(n);
    } catch (C) {
      t = C, Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sx() {
  var e = ls.current;
  return ls.current = ss, e === null ? ss : e;
}
function Rp() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Le === null || !(kr & 268435455) && !(Ls & 268435455) || Dn(Le, Ve);
}
function ps(e, t) {
  var n = oe;
  oe |= 2;
  var r = sx();
  (Le !== e || Ve !== t) && (fn = null, mr(e, t));
  do
    try {
      Ck();
      break;
    } catch (i) {
      ox(e, i);
    }
  while (!0);
  if (hp(), oe = n, ls.current = r, Ne !== null) throw Error(I(261));
  return Le = null, Ve = 0, Re;
}
function Ck() {
  for (; Ne !== null; ) lx(Ne);
}
function Sk() {
  for (; Ne !== null && !Xw(); ) lx(Ne);
}
function lx(e) {
  var t = px(e.alternate, e, vt);
  e.memoizedProps = e.pendingProps, t === null ? ux(e) : Ne = t, Tp.current = null;
}
function ux(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xk(n, t), n !== null) {
        n.flags &= 32767, Ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, Ne = null;
        return;
      }
    } else if (n = gk(n, t, vt), n !== null) {
      Ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function ar(e, t, n) {
  var r = le, i = It.transition;
  try {
    It.transition = null, le = 1, _k(e, t, n, r);
  } finally {
    It.transition = i, le = r;
  }
  return null;
}
function _k(e, t, n, r) {
  do
    li();
  while (Ln !== null);
  if (oe & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (oE(e, a), e === Le && (Ne = Le = null, Ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fo || (fo = !0, dx(Wo, function() {
    return li(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = It.transition, It.transition = null;
    var o = le;
    le = 1;
    var s = oe;
    oe |= 4, Tp.current = null, wk(e, n), rx(n, e), WE($u), Ko = !!Vu, $u = Vu = null, e.current = n, Ek(n), Yw(), oe = s, le = o, It.transition = a;
  } else e.current = n;
  if (fo && (fo = !1, Ln = e, cs = i), a = e.pendingLanes, a === 0 && ($n = null), eE(n.stateNode), dt(e, Ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (us) throw us = !1, e = uc, uc = null, e;
  return cs & 1 && e.tag !== 0 && li(), a = e.pendingLanes, a & 1 ? e === cc ? oa++ : (oa = 0, cc = e) : oa = 0, Jn(), null;
}
function li() {
  if (Ln !== null) {
    var e = $v(cs), t = It.transition, n = le;
    try {
      if (It.transition = null, le = 16 > e ? 16 : e, Ln === null) var r = !1;
      else {
        if (e = Ln, Ln = null, cs = 0, oe & 6) throw Error(I(331));
        var i = oe;
        for (oe |= 4, j = e.current; j !== null; ) {
          var a = j, o = a.child;
          if (j.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ia(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, j = d;
                  else for (; j !== null; ) {
                    c = j;
                    var f = c.sibling, x = c.return;
                    if (ex(c), c === u) {
                      j = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = x, j = f;
                      break;
                    }
                    j = x;
                  }
                }
              }
              var E = a.alternate;
              if (E !== null) {
                var g = E.child;
                if (g !== null) {
                  E.child = null;
                  do {
                    var k = g.sibling;
                    g.sibling = null, g = k;
                  } while (g !== null);
                }
              }
              j = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, j = o;
          else e: for (; j !== null; ) {
            if (a = j, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                ia(9, a, a.return);
            }
            var h = a.sibling;
            if (h !== null) {
              h.return = a.return, j = h;
              break e;
            }
            j = a.return;
          }
        }
        var v = e.current;
        for (j = v; j !== null; ) {
          o = j;
          var w = o.child;
          if (o.subtreeFlags & 2064 && w !== null) w.return = o, j = w;
          else e: for (o = v; j !== null; ) {
            if (s = j, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ms(9, s);
              }
            } catch (C) {
              Ce(s, s.return, C);
            }
            if (s === o) {
              j = null;
              break e;
            }
            var b = s.sibling;
            if (b !== null) {
              b.return = s.return, j = b;
              break e;
            }
            j = s.return;
          }
        }
        if (oe = i, Jn(), an && typeof an.onPostCommitFiberRoot == "function") try {
          an.onPostCommitFiberRoot(Ts, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      le = n, It.transition = t;
    }
  }
  return !1;
}
function xm(e, t, n) {
  t = xi(n, t), t = $g(e, t, 1), e = Vn(e, t, 1), t = rt(), e !== null && (La(e, 1, t), dt(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) xm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      xm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
        e = xi(n, e), e = Ug(t, e, 1), t = Vn(t, e, 1), e = rt(), t !== null && (La(t, 1, e), dt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ak(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Ve & n) === n && (Re === 4 || Re === 3 && (Ve & 130023424) === Ve && 500 > Ae() - Ip ? mr(e, 0) : Np |= n), dt(e, t);
}
function cx(e, t) {
  t === 0 && (e.mode & 1 ? (t = no, no <<= 1, !(no & 130023424) && (no = 4194304)) : t = 1);
  var n = rt();
  e = kn(e, t), e !== null && (La(e, t, n), dt(e, n));
}
function Tk(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cx(e, n);
}
function Nk(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), cx(e, n);
}
var px;
px = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ut = !1, vk(e, t, n);
    ut = !!(e.flags & 131072);
  }
  else ut = !1, xe && t.flags & 1048576 && hg(t, ts, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oo(e, t), e = t.pendingProps;
      var i = mi(t, Xe.current);
      si(t, n), i = bp(null, t, r, e, i, n);
      var a = Cp();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(r) ? (a = !0, Jo(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, xp(t), i.updater = Ds, t.stateNode = i, i._reactInternals = t, Zu(t, r, e, n), t = tc(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && pp(t), Je(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Pk(r), e = Ht(r, e), i) {
          case 0:
            t = ec(null, t, r, e, n);
            break e;
          case 1:
            t = lm(null, t, r, e, n);
            break e;
          case 11:
            t = om(null, t, r, e, n);
            break e;
          case 14:
            t = sm(null, t, r, Ht(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), ec(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), lm(e, t, r, i, n);
    case 3:
      e: {
        if (Kg(t), e === null) throw Error(I(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, Eg(e, t), is(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = xi(Error(I(423)), t), t = um(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = xi(Error(I(424)), t), t = um(e, t, r, n, i);
          break e;
        } else for (xt = Hn(t.stateNode.containerInfo.firstChild), yt = t, xe = !0, Ut = null, n = yg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hi(), r === i) {
            t = bn(e, t, n);
            break e;
          }
          Je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kg(t), e === null && Qu(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Uu(r, i) ? o = null : a !== null && Uu(r, a) && (t.flags |= 32), qg(e, t), Je(e, t, o, n), t.child;
    case 6:
      return e === null && Qu(t), null;
    case 13:
      return Qg(e, t, n);
    case 4:
      return yp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vi(t, null, r, n) : Je(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), om(e, t, r, i, n);
    case 7:
      return Je(e, t, t.pendingProps, n), t.child;
    case 8:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, fe(ns, r._currentValue), r._currentValue = o, a !== null) if (Kt(a.value, o)) {
          if (a.children === i.children && !ct.current) {
            t = bn(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === r) {
                if (a.tag === 1) {
                  l = yn(-1, n & -n), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Xu(
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
            if (o = a.return, o === null) throw Error(I(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Xu(o, n, t), o = a.sibling;
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
        Je(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, si(t, n), i = Pt(i), r = r(i), t.flags |= 1, Je(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ht(r, t.pendingProps), i = Ht(r.type, i), sm(e, t, r, i, n);
    case 15:
      return Gg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ht(r, i), Oo(e, t), t.tag = 1, pt(r) ? (e = !0, Jo(t)) : e = !1, si(t, n), Vg(t, r, i), Zu(t, r, i, n), tc(null, t, r, !0, e, n);
    case 19:
      return Xg(e, t, n);
    case 22:
      return Wg(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function dx(e, t) {
  return jv(e, t);
}
function Ik(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Nt(e, t, n, r) {
  return new Ik(e, t, n, r);
}
function Op(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pk(e) {
  if (typeof e == "function") return Op(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jc) return 11;
    if (e === ep) return 14;
  }
  return 2;
}
function Gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Lo(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") Op(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $r:
      return hr(n.children, i, a, t);
    case Zc:
      o = 8, i |= 8;
      break;
    case ku:
      return e = Nt(12, n, t, i | 2), e.elementType = ku, e.lanes = a, e;
    case bu:
      return e = Nt(13, n, t, i), e.elementType = bu, e.lanes = a, e;
    case Cu:
      return e = Nt(19, n, t, i), e.elementType = Cu, e.lanes = a, e;
    case kv:
      return Bs(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case wv:
          o = 10;
          break e;
        case Ev:
          o = 9;
          break e;
        case Jc:
          o = 11;
          break e;
        case ep:
          o = 14;
          break e;
        case Pn:
          o = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = Nt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function hr(e, t, n, r) {
  return e = Nt(7, e, r, t), e.lanes = n, e;
}
function Bs(e, t, n, r) {
  return e = Nt(22, e, r, t), e.elementType = kv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, t, n) {
  return e = Nt(6, e, null, t), e.lanes = n, e;
}
function Xl(e, t, n) {
  return t = Nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Fk(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Il(0), this.expirationTimes = Il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Il(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Dp(e, t, n, r, i, a, o, s, l) {
  return e = new Fk(e, t, n, s, l), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Nt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xp(a), e;
}
function Rk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fx(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pt(n)) return fg(e, n, t);
  }
  return t;
}
function mx(e, t, n, r, i, a, o, s, l) {
  return e = Dp(n, r, !0, e, i, a, o, s, l), e.context = fx(null), n = e.current, r = rt(), i = Un(n), a = yn(r, i), a.callback = t ?? null, Vn(n, a, i), e.current.lanes = i, La(e, i, r), dt(e, r), e;
}
function js(e, t, n, r) {
  var i = t.current, a = rt(), o = Un(i);
  return n = fx(n), t.context === null ? t.context = n : t.pendingContext = n, t = yn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(i, t, o), e !== null && (qt(e, i, o, a), Po(e, i, o)), o;
}
function ds(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ym(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mp(e, t) {
  ym(e, t), (e = e.alternate) && ym(e, t);
}
function Ok() {
  return null;
}
var hx = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Lp(e) {
  this._internalRoot = e;
}
zs.prototype.render = Lp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  js(e, t, null, null);
};
zs.prototype.unmount = Lp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    br(function() {
      js(null, e, null, null);
    }), t[En] = null;
  }
};
function zs(e) {
  this._internalRoot = e;
}
zs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++) ;
    On.splice(n, 0, e), n === 0 && Kv(e);
  }
};
function Bp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Hs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wm() {
}
function Dk(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = ds(o);
        a.call(u);
      };
    }
    var o = mx(t, r, e, 0, null, !1, !1, "", wm);
    return e._reactRootContainer = o, e[En] = o.current, ga(e.nodeType === 8 ? e.parentNode : e), br(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = ds(l);
      s.call(u);
    };
  }
  var l = Dp(e, 0, !1, null, null, !1, !1, "", wm);
  return e._reactRootContainer = l, e[En] = l.current, ga(e.nodeType === 8 ? e.parentNode : e), br(function() {
    js(t, l, n, r);
  }), l;
}
function Vs(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = ds(o);
        s.call(l);
      };
    }
    js(t, o, e, i);
  } else o = Dk(n, t, e, i, r);
  return ds(o);
}
Uv = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qi(t.pendingLanes);
        n !== 0 && (rp(t, n | 1), dt(t, Ae()), !(oe & 6) && (yi = Ae() + 500, Jn()));
      }
      break;
    case 13:
      br(function() {
        var r = kn(e, 1);
        if (r !== null) {
          var i = rt();
          qt(r, e, 1, i);
        }
      }), Mp(e, 1);
  }
};
ip = function(e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = rt();
      qt(t, e, 134217728, n);
    }
    Mp(e, 134217728);
  }
};
Gv = function(e) {
  if (e.tag === 13) {
    var t = Un(e), n = kn(e, t);
    if (n !== null) {
      var r = rt();
      qt(n, e, t, r);
    }
    Mp(e, t);
  }
};
Wv = function() {
  return le;
};
qv = function(e, t) {
  var n = le;
  try {
    return le = e, t();
  } finally {
    le = n;
  }
};
Ou = function(e, t, n) {
  switch (t) {
    case "input":
      if (Au(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fs(r);
            if (!i) throw Error(I(90));
            Cv(r), Au(r, i);
          }
        }
      }
      break;
    case "textarea":
      _v(e, n);
      break;
    case "select":
      t = n.value, t != null && ri(e, !!n.multiple, t, !1);
  }
};
Rv = Pp;
Ov = br;
var Mk = { usingClientEntryPoint: !1, Events: [ja, qr, Fs, Pv, Fv, Pp] }, Ui = { findFiberByHostInstance: ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Lk = { bundleType: Ui.bundleType, version: Ui.version, rendererPackageName: Ui.rendererPackageName, rendererConfig: Ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _n.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Lv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ui.findFiberByHostInstance || Ok, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mo.isDisabled && mo.supportsFiber) try {
    Ts = mo.inject(Lk), an = mo;
  } catch {
  }
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mk;
bt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bp(t)) throw Error(I(200));
  return Rk(e, t, null, n);
};
bt.createRoot = function(e, t) {
  if (!Bp(e)) throw Error(I(299));
  var n = !1, r = "", i = hx;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Dp(e, 1, !1, null, null, n, !1, r, i), e[En] = t.current, ga(e.nodeType === 8 ? e.parentNode : e), new Lp(t);
};
bt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Lv(t), e = e === null ? null : e.stateNode, e;
};
bt.flushSync = function(e) {
  return br(e);
};
bt.hydrate = function(e, t, n) {
  if (!Hs(t)) throw Error(I(200));
  return Vs(null, e, t, !0, n);
};
bt.hydrateRoot = function(e, t, n) {
  if (!Bp(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, i = !1, a = "", o = hx;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = mx(t, null, e, 1, n ?? null, i, !1, a, o), e[En] = t.current, ga(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new zs(t);
};
bt.render = function(e, t, n) {
  if (!Hs(t)) throw Error(I(200));
  return Vs(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function(e) {
  if (!Hs(e)) throw Error(I(40));
  return e._reactRootContainer ? (br(function() {
    Vs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[En] = null;
    });
  }), !0) : !1;
};
bt.unstable_batchedUpdates = Pp;
bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Hs(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Vs(e, t, n, !1, r);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function vx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vx);
    } catch (e) {
      console.error(e);
    }
}
vx(), vv.exports = bt;
var gx = vv.exports;
const dr = /* @__PURE__ */ Ni(gx);
var xx, Em = gx;
xx = Em.createRoot, Em.hydrateRoot;
var fc = function(e, t) {
  return fc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, fc(e, t);
};
function Dt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  fc(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var M = function() {
  return M = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, M.apply(this, arguments);
};
function un(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function St(e, t, n, r) {
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
function Ri(e, t) {
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
function km(e, t) {
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
function Bk() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
function De(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function et(e, t) {
  var n = t && t.cache ? t.cache : Uk, r = t && t.serializer ? t.serializer : $k, i = t && t.strategy ? t.strategy : Hk;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function jk(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function zk(e, t, n, r) {
  var i = jk(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function yx(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function wx(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Hk(e, t) {
  var n = e.length === 1 ? zk : yx;
  return wx(e, this, n, t.cache.create(), t.serializer);
}
function Vk(e, t) {
  return wx(e, this, yx, t.cache.create(), t.serializer);
}
var $k = function() {
  return JSON.stringify(arguments);
};
function jp() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
jp.prototype.get = function(e) {
  return this.cache[e];
};
jp.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Uk = {
  create: function() {
    return new jp();
  }
}, tt = {
  variadic: Vk
};
function Ex(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
et(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.NumberFormat).bind.apply(e, De([void 0], t, !1)))();
}, {
  strategy: tt.variadic
});
et(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.DateTimeFormat).bind.apply(e, De([void 0], t, !1)))();
}, {
  strategy: tt.variadic
});
et(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.PluralRules).bind.apply(e, De([void 0], t, !1)))();
}, {
  strategy: tt.variadic
});
et(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.Locale).bind.apply(e, De([void 0], t, !1)))();
}, {
  strategy: tt.variadic
});
et(function() {
  for (var e, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  return new ((e = Intl.ListFormat).bind.apply(e, De([void 0], t, !1)))();
}, {
  strategy: tt.variadic
});
var ne;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ne || (ne = {}));
var ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ve || (ve = {}));
var wi;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(wi || (wi = {}));
function bm(e) {
  return e.type === ve.literal;
}
function Gk(e) {
  return e.type === ve.argument;
}
function kx(e) {
  return e.type === ve.number;
}
function bx(e) {
  return e.type === ve.date;
}
function Cx(e) {
  return e.type === ve.time;
}
function Sx(e) {
  return e.type === ve.select;
}
function _x(e) {
  return e.type === ve.plural;
}
function Wk(e) {
  return e.type === ve.pound;
}
function Ax(e) {
  return e.type === ve.tag;
}
function Tx(e) {
  return !!(e && typeof e == "object" && e.type === wi.number);
}
function mc(e) {
  return !!(e && typeof e == "object" && e.type === wi.dateTime);
}
var Nx = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, qk = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Kk(e) {
  var t = {};
  return e.replace(qk, function(n) {
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
var Qk = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Xk(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Qk).filter(function(f) {
    return f.length > 0;
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
function Yk(e) {
  return e.replace(/^(.*?)-/, "");
}
var Cm = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ix = /^(@+)?(\+|#+)?[rs]?$/g, Zk = /(\*)(0+)|(#+)(0+)|(0+)/g, Px = /^(0+)$/;
function Sm(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ix, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Fx(e) {
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
function Jk(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Px.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function _m(e) {
  var t = {}, n = Fx(e);
  return n || t;
}
function eb(e) {
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
        t.style = "unit", t.unit = Yk(i.options[0]);
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
        t = M(M(M({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return M(M({}, l), _m(u));
        }, {}));
        continue;
      case "engineering":
        t = M(M(M({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return M(M({}, l), _m(u));
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
        i.options[0].replace(Zk, function(l, u, c, d, f, x) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && f)
              throw new Error("We currently do not support maximum integer digits");
            if (x)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Px.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Cm.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Cm, function(l, u, c, d, f, x) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : f && x ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + x.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = M(M({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = M(M({}, t), Sm(a)));
      continue;
    }
    if (Ix.test(i.stem)) {
      t = M(M({}, t), Sm(i.stem));
      continue;
    }
    var o = Fx(i.stem);
    o && (t = M(M({}, t), o));
    var s = Jk(i.stem);
    s && (t = M(M({}, t), s));
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
function tb(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = nb(t);
      for ((u == "H" || u == "k") && (s = 0); s-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function nb(e) {
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
var Yl, rb = new RegExp("^".concat(Nx.source, "*")), ib = new RegExp("".concat(Nx.source, "*$"));
function ie(e, t) {
  return { start: e, end: t };
}
var ab = !!String.prototype.startsWith && "_a".startsWith("a", 1), ob = !!String.fromCodePoint, sb = !!Object.fromEntries, lb = !!String.prototype.codePointAt, ub = !!String.prototype.trimStart, cb = !!String.prototype.trimEnd, pb = !!Number.isSafeInteger, db = pb ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, hc = !0;
try {
  var fb = Ox("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  hc = ((Yl = fb.exec("a")) === null || Yl === void 0 ? void 0 : Yl[0]) === "a";
} catch {
  hc = !1;
}
var Am = ab ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), vc = ob ? String.fromCodePoint : (
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
), Tm = (
  // native
  sb ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), Rx = lb ? (
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
), mb = ub ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(rb, "");
  }
), hb = cb ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ib, "");
  }
);
function Ox(e, t) {
  return new RegExp(e, t);
}
var gc;
if (hc) {
  var Nm = Ox("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  gc = function(t, n) {
    var r;
    Nm.lastIndex = n;
    var i = Nm.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  gc = function(t, n) {
    for (var r = []; ; ) {
      var i = Rx(t, n);
      if (i === void 0 || Dx(i) || yb(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return vc.apply(void 0, r);
  };
var vb = (
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
              location: ie(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ne.UNMATCHED_CLOSING_TAG, ie(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && xc(this.peek() || 0)) {
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
            location: ie(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !xc(this.char()))
            return this.error(ne.INVALID_TAG, ie(s, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(ne.UNMATCHED_CLOSING_TAG, ie(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ve.tag,
              value: i,
              children: o,
              location: ie(r, this.clonePosition())
            },
            err: null
          } : this.error(ne.INVALID_TAG, ie(s, this.clonePosition())));
        } else
          return this.error(ne.UNCLOSED_TAG, ie(r, this.clonePosition()));
      } else
        return this.error(ne.INVALID_TAG, ie(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && xb(this.char()); )
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
      var l = ie(r, this.clonePosition());
      return {
        val: { type: ve.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !gb(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return vc.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), vc(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ne.EMPTY_ARGUMENT, ie(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ne.MALFORMED_ARGUMENT, ie(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ve.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: ie(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, ie(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(ne.MALFORMED_ARGUMENT, ie(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = gc(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = ie(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (s) {
        case "":
          return this.error(ne.EXPECT_ARGUMENT_TYPE, ie(o, l));
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
            var f = hb(d.val);
            if (f.length === 0)
              return this.error(ne.EXPECT_ARGUMENT_STYLE, ie(this.clonePosition(), this.clonePosition()));
            var x = ie(c, this.clonePosition());
            u = { style: f, styleLocation: x };
          }
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var g = ie(i, this.clonePosition());
          if (u && Am(u == null ? void 0 : u.style, "::", 0)) {
            var k = mb(u.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(k, u.styleLocation);
              return d.err ? d : {
                val: { type: ve.number, value: r, location: g, style: d.val },
                err: null
              };
            } else {
              if (k.length === 0)
                return this.error(ne.EXPECT_DATE_TIME_SKELETON, g);
              var h = k;
              this.locale && (h = tb(k, this.locale));
              var f = {
                type: wi.dateTime,
                pattern: h,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Kk(h) : {}
              }, v = s === "date" ? ve.date : ve.time;
              return {
                val: { type: v, value: r, location: g, style: f },
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
          var w = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ne.EXPECT_SELECT_ARGUMENT_OPTIONS, ie(w, M({}, w)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), C = 0;
          if (s !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ie(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), C = d.val;
          }
          var S = this.tryParsePluralOrSelectOptions(t, s, n, b);
          if (S.err)
            return S;
          var E = this.tryParseArgumentClose(i);
          if (E.err)
            return E;
          var _ = ie(i, this.clonePosition());
          return s === "select" ? {
            val: {
              type: ve.select,
              value: r,
              options: Tm(S.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: ve.plural,
              value: r,
              options: Tm(S.val),
              offset: C,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: _
            },
            err: null
          };
        }
        default:
          return this.error(ne.INVALID_ARGUMENT_TYPE, ie(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, ie(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ie(i, this.clonePosition()));
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
        r = Xk(t);
      } catch {
        return this.error(ne.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: wi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? eb(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, s = [], l = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_SELECTOR, ne.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = ie(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var x = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ie(this.clonePosition(), this.clonePosition()));
        var E = this.parseMessage(t + 1, n, r);
        if (E.err)
          return E;
        var g = this.tryParseArgumentClose(x);
        if (g.err)
          return g;
        s.push([
          u,
          {
            value: E.val,
            location: ie(x, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? ne.EXPECT_SELECT_ARGUMENT_SELECTOR : ne.EXPECT_PLURAL_ARGUMENT_SELECTOR, ie(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ne.MISSING_OTHER_CLAUSE, ie(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var l = ie(i, this.clonePosition());
      return a ? (o *= r, db(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Rx(this.message, t);
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
      if (Am(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Dx(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function xc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function gb(e) {
  return xc(e) || e === 47;
}
function xb(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Dx(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function yb(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function yc(e) {
  e.forEach(function(t) {
    if (delete t.location, Sx(t) || _x(t))
      for (var n in t.options)
        delete t.options[n].location, yc(t.options[n].value);
    else kx(t) && Tx(t.style) || (bx(t) || Cx(t)) && mc(t.style) ? delete t.style.location : Ax(t) && yc(t.children);
  });
}
function wb(e, t) {
  t === void 0 && (t = {}), t = M({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new vb(e, t).parse();
  if (n.err) {
    var r = SyntaxError(ne[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || yc(n.val), n.val;
}
var cn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(cn || (cn = {}));
var er = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Im = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), cn.INVALID_VALUE, a) || this;
    }
    return t;
  }(er)
), Eb = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), cn.INVALID_VALUE, i) || this;
    }
    return t;
  }(er)
), kb = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), cn.MISSING_VALUE, r) || this;
    }
    return t;
  }(er)
), Ye;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ye || (Ye = {}));
function bb(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ye.literal || n.type !== Ye.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Mx(e) {
  return typeof e == "function";
}
function Bo(e, t, n, r, i, a, o) {
  if (e.length === 1 && bm(e[0]))
    return [
      {
        type: Ye.literal,
        value: e[0].value
      }
    ];
  for (var s = [], l = 0, u = e; l < u.length; l++) {
    var c = u[l];
    if (bm(c)) {
      s.push({
        type: Ye.literal,
        value: c.value
      });
      continue;
    }
    if (Wk(c)) {
      typeof a == "number" && s.push({
        type: Ye.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new kb(d, o);
    var f = i[d];
    if (Gk(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
        type: typeof f == "string" ? Ye.literal : Ye.object,
        value: f
      });
      continue;
    }
    if (bx(c)) {
      var x = typeof c.style == "string" ? r.date[c.style] : mc(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: Ye.literal,
        value: n.getDateTimeFormat(t, x).format(f)
      });
      continue;
    }
    if (Cx(c)) {
      var x = typeof c.style == "string" ? r.time[c.style] : mc(c.style) ? c.style.parsedOptions : r.time.medium;
      s.push({
        type: Ye.literal,
        value: n.getDateTimeFormat(t, x).format(f)
      });
      continue;
    }
    if (kx(c)) {
      var x = typeof c.style == "string" ? r.number[c.style] : Tx(c.style) ? c.style.parsedOptions : void 0;
      x && x.scale && (f = f * (x.scale || 1)), s.push({
        type: Ye.literal,
        value: n.getNumberFormat(t, x).format(f)
      });
      continue;
    }
    if (Ax(c)) {
      var E = c.children, g = c.value, k = i[g];
      if (!Mx(k))
        throw new Eb(g, "function", o);
      var h = Bo(E, t, n, r, i, a), v = k(h.map(function(C) {
        return C.value;
      }));
      Array.isArray(v) || (v = [v]), s.push.apply(s, v.map(function(C) {
        return {
          type: typeof C == "string" ? Ye.literal : Ye.object,
          value: C
        };
      }));
    }
    if (Sx(c)) {
      var w = c.options[f] || c.options.other;
      if (!w)
        throw new Im(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Bo(w.value, t, n, r, i));
      continue;
    }
    if (_x(c)) {
      var w = c.options["=".concat(f)];
      if (!w) {
        if (!Intl.PluralRules)
          throw new er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, cn.MISSING_INTL_API, o);
        var b = n.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        w = c.options[b] || c.options.other;
      }
      if (!w)
        throw new Im(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Bo(w.value, t, n, r, i, f - (c.offset || 0)));
      continue;
    }
  }
  return bb(s);
}
function Cb(e, t) {
  return t ? M(M(M({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = M(M({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Sb(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Cb(e[r], t[r]), n;
  }, M({}, e)) : e;
}
function Zl(e) {
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
function _b(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: et(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, De([void 0], n, !1)))();
    }, {
      cache: Zl(e.number),
      strategy: tt.variadic
    }),
    getDateTimeFormat: et(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, De([void 0], n, !1)))();
    }, {
      cache: Zl(e.dateTime),
      strategy: tt.variadic
    }),
    getPluralRules: et(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, De([void 0], n, !1)))();
    }, {
      cache: Zl(e.pluralRules),
      strategy: tt.variadic
    })
  };
}
var Lx = (
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
        var c = u.reduce(function(d, f) {
          return !d.length || f.type !== Ye.literal || typeof d[d.length - 1] != "string" ? d.push(f.value) : d[d.length - 1] += f.value, d;
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
        var s = un(o, ["formatters"]);
        this.ast = e.__parse(t, M(M({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Sb(e.formats, r), this.formatters = i && i.formatters || _b(this.formatterCache);
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
    }, e.__parse = wb, e.formats = {
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
var Ha = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i) {
      var a = this, o = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(o ? `
`.concat(o.message, `
`).concat(o.stack) : "")) || this, a.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(a, t), a;
    }
    return t;
  }(Error)
), Ab = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r) {
      return e.call(this, Cr.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }(Ha)
), Tb = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r) {
      return e.call(this, Cr.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }(Ha)
), Pm = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r) {
      return e.call(this, Cr.MISSING_DATA, n, r) || this;
    }
    return t;
  }(Ha)
), Mt = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i) {
      var a = e.call(this, Cr.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return a.locale = r, a;
    }
    return t;
  }(Ha)
), Jl = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r, i, a) {
      var o = e.call(this, "".concat(n, `
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, `
`), r, a) || this;
      return o.descriptor = i, o.locale = r, o;
    }
    return t;
  }(Mt)
), Nb = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t(n, r) {
      var i = e.call(this, Cr.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(a) {
        var o;
        return (o = a.value) !== null && o !== void 0 ? o : JSON.stringify(a);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }(Ha)
);
function Ir(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var Ib = function(e) {
}, Pb = function(e) {
}, Bx = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Ib,
  onWarn: Pb
};
function jx() {
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
function Fb(e) {
  e === void 0 && (e = jx());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = et(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.DateTimeFormat).bind.apply(s, De([void 0], l, !1)))();
  }, {
    cache: rr(e.dateTime),
    strategy: tt.variadic
  }), a = et(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.NumberFormat).bind.apply(s, De([void 0], l, !1)))();
  }, {
    cache: rr(e.number),
    strategy: tt.variadic
  }), o = et(function() {
    for (var s, l = [], u = 0; u < arguments.length; u++)
      l[u] = arguments[u];
    return new ((s = Intl.PluralRules).bind.apply(s, De([void 0], l, !1)))();
  }, {
    cache: rr(e.pluralRules),
    strategy: tt.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: et(function(s, l, u, c) {
      return new Lx(s, l, u, M({ formatters: {
        getNumberFormat: a,
        getDateTimeFormat: i,
        getPluralRules: o
      } }, c || {}));
    }, {
      cache: rr(e.message),
      strategy: tt.variadic
    }),
    getRelativeTimeFormat: et(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (t.bind.apply(t, De([void 0], s, !1)))();
    }, {
      cache: rr(e.relativeTime),
      strategy: tt.variadic
    }),
    getPluralRules: o,
    getListFormat: et(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (n.bind.apply(n, De([void 0], s, !1)))();
    }, {
      cache: rr(e.list),
      strategy: tt.variadic
    }),
    getDisplayNames: et(function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return new (r.bind.apply(r, De([void 0], s, !1)))();
    }, {
      cache: rr(e.displayNames),
      strategy: tt.variadic
    })
  };
}
function zp(e, t, n, r) {
  var i = e && e[t], a;
  if (i && (a = i[n]), a)
    return a;
  r(new Ab("No ".concat(t, " format named: ").concat(n)));
}
function vo(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = M({ timeZone: t }, e[r]), n;
  }, {});
}
function Fm(e, t) {
  var n = Object.keys(M(M({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = M(M({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Rm(e, t) {
  if (!t)
    return e;
  var n = Lx.formats;
  return M(M(M({}, n), e), { date: Fm(vo(n.date, t), vo(e.date || {}, t)), time: Fm(vo(n.time, t), vo(e.time || {}, t)) });
}
var wc = function(e, t, n, r, i) {
  var a = e.locale, o = e.formats, s = e.messages, l = e.defaultLocale, u = e.defaultFormats, c = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, x = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var E = n.id, g = n.defaultMessage;
  Ex(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var k = String(E), h = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    s && Object.prototype.hasOwnProperty.call(s, k) && s[k]
  );
  if (Array.isArray(h) && h.length === 1 && h[0].type === ve.literal)
    return h[0].value;
  if (!r && h && typeof h == "string" && !x)
    return h.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = M(M({}, x), r || {}), o = Rm(o, f), u = Rm(u, f), !h) {
    if (c === !1 && h === "")
      return h;
    if ((!g || a && a.toLowerCase() !== l.toLowerCase()) && d(new Nb(n, a)), g)
      try {
        var v = t.getMessageFormat(g, l, u, i);
        return v.format(r);
      } catch (w) {
        return d(new Jl('Error formatting default message for: "'.concat(k, '", rendering default message verbatim'), a, n, w)), typeof g == "string" ? g : k;
      }
    return k;
  }
  try {
    var v = t.getMessageFormat(h, a, o, M({ formatters: t }, i || {}));
    return v.format(r);
  } catch (w) {
    d(new Jl('Error formatting message: "'.concat(k, '", using ').concat(g ? "default message" : "id", " as fallback."), a, n, w));
  }
  if (g)
    try {
      var v = t.getMessageFormat(g, l, u, i);
      return v.format(r);
    } catch (w) {
      d(new Jl('Error formatting the default message for: "'.concat(k, '", rendering message verbatim'), a, n, w));
    }
  return typeof h == "string" ? h : typeof g == "string" ? g : k;
}, zx = [
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
function $s(e, t, n, r) {
  var i = e.locale, a = e.formats, o = e.onError, s = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, u = M(M({}, s && { timeZone: s }), l && zp(a, t, l, o)), c = Ir(r, zx, u);
  return t === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = M(M({}, c), { hour: "numeric", minute: "numeric" })), n(i, c);
}
function Rb(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $s(e, "date", t, o).format(s);
  } catch (l) {
    e.onError(new Mt("Error formatting date.", e.locale, l));
  }
  return String(s);
}
function Ob(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $s(e, "time", t, o).format(s);
  } catch (l) {
    e.onError(new Mt("Error formatting time.", e.locale, l));
  }
  return String(s);
}
function Db(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = n[2], s = o === void 0 ? {} : o, l = e.timeZone, u = e.locale, c = e.onError, d = Ir(s, zx, l ? { timeZone: l } : {});
  try {
    return t(u, d).formatRange(i, a);
  } catch (f) {
    c(new Mt("Error formatting date time range.", e.locale, f));
  }
  return String(i);
}
function Mb(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $s(e, "date", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Mt("Error formatting date.", e.locale, l));
  }
  return [];
}
function Lb(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], a = n[1], o = a === void 0 ? {} : a, s = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return $s(e, "time", t, o).formatToParts(s);
  } catch (l) {
    e.onError(new Mt("Error formatting time.", e.locale, l));
  }
  return [];
}
var Bb = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function jb(e, t, n, r) {
  var i = e.locale, a = e.onError, o = Intl.DisplayNames;
  o || a(new er(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, cn.MISSING_INTL_API));
  var s = Ir(r, Bb);
  try {
    return t(i, s).of(n);
  } catch (l) {
    a(new Mt("Error formatting display name.", i, l));
  }
}
var zb = [
  "type",
  "style"
], Om = Date.now();
function Hb(e) {
  return "".concat(Om, "_").concat(e, "_").concat(Om);
}
function Vb(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Hx(e, t, n, r).reduce(function(a, o) {
    var s = o.value;
    return typeof s != "string" ? a.push(s) : typeof a[a.length - 1] == "string" ? a[a.length - 1] += s : a.push(s), a;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function Hx(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {});
  var o = Intl.ListFormat;
  o || a(new er(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, cn.MISSING_INTL_API));
  var s = Ir(r, zb);
  try {
    var l = {}, u = n.map(function(c, d) {
      if (typeof c == "object") {
        var f = Hb(d);
        return l[f] = c, f;
      }
      return String(c);
    });
    return t(i, s).formatToParts(u).map(function(c) {
      return c.type === "literal" ? c : M(M({}, c), { value: l[c.value] || c.value });
    });
  } catch (c) {
    a(new Mt("Error formatting list.", i, c));
  }
  return n;
}
var $b = ["type"];
function Ub(e, t, n, r) {
  var i = e.locale, a = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || a(new er(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, cn.MISSING_INTL_API));
  var o = Ir(r, $b);
  try {
    return t(i, o).select(n);
  } catch (s) {
    a(new Mt("Error formatting plural.", i, s));
  }
  return "other";
}
var Gb = ["numeric", "style"];
function Wb(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = !!o && zp(i, "relative", o, a) || {}, l = Ir(n, Gb, s);
  return t(r, l);
}
function qb(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var a = Intl.RelativeTimeFormat;
  a || e.onError(new er(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, cn.MISSING_INTL_API));
  try {
    return Wb(e, t, i).format(n, r);
  } catch (o) {
    e.onError(new Mt("Error formatting relative time.", e.locale, o));
  }
  return String(n);
}
var Kb = [
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
function Vx(e, t, n) {
  var r = e.locale, i = e.formats, a = e.onError;
  n === void 0 && (n = {});
  var o = n.format, s = o && zp(i, "number", o, a) || {}, l = Ir(n, Kb, s);
  return t(r, l);
}
function Qb(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Vx(e, t, r).format(n);
  } catch (i) {
    e.onError(new Mt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function Xb(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Vx(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new Mt("Error formatting number.", e.locale, i));
  }
  return [];
}
function Yb(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Zb(e) {
  e.onWarn && e.defaultRichTextElements && Yb(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Jb(e, t) {
  var n = Fb(t), r = M(M({}, Bx), e), i = r.locale, a = r.defaultLocale, o = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Pm('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Pm('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new Tb('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Zb(r), M(M({}, r), {
    formatters: n,
    formatNumber: Qb.bind(null, r, n.getNumberFormat),
    formatNumberToParts: Xb.bind(null, r, n.getNumberFormat),
    formatRelativeTime: qb.bind(null, r, n.getRelativeTimeFormat),
    formatDate: Rb.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: Mb.bind(null, r, n.getDateTimeFormat),
    formatTime: Ob.bind(null, r, n.getDateTimeFormat),
    formatDateTimeRange: Db.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: Lb.bind(null, r, n.getDateTimeFormat),
    formatPlural: Ub.bind(null, r, n.getPluralRules),
    // @ts-expect-error TODO: will get to this later
    formatMessage: wc.bind(null, r, n),
    // @ts-expect-error TODO: will get to this later
    $t: wc.bind(null, r, n),
    formatList: Vb.bind(null, r, n.getListFormat),
    formatListToParts: Hx.bind(null, r, n.getListFormat),
    formatDisplayName: jb.bind(null, r, n.getDisplayNames)
  });
}
function $x(e) {
  Ex(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Ux = M(M({}, Bx), { textComponent: y.Fragment });
function e1(e) {
  return function(t) {
    return e(y.Children.toArray(t));
  };
}
function Ec(e, t) {
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
var Gx = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be = typeof Symbol == "function" && Symbol.for, Hp = Be ? Symbol.for("react.element") : 60103, Vp = Be ? Symbol.for("react.portal") : 60106, Us = Be ? Symbol.for("react.fragment") : 60107, Gs = Be ? Symbol.for("react.strict_mode") : 60108, Ws = Be ? Symbol.for("react.profiler") : 60114, qs = Be ? Symbol.for("react.provider") : 60109, Ks = Be ? Symbol.for("react.context") : 60110, $p = Be ? Symbol.for("react.async_mode") : 60111, Qs = Be ? Symbol.for("react.concurrent_mode") : 60111, Xs = Be ? Symbol.for("react.forward_ref") : 60112, Ys = Be ? Symbol.for("react.suspense") : 60113, t1 = Be ? Symbol.for("react.suspense_list") : 60120, Zs = Be ? Symbol.for("react.memo") : 60115, Js = Be ? Symbol.for("react.lazy") : 60116, n1 = Be ? Symbol.for("react.block") : 60121, r1 = Be ? Symbol.for("react.fundamental") : 60117, i1 = Be ? Symbol.for("react.responder") : 60118, a1 = Be ? Symbol.for("react.scope") : 60119;
function _t(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Hp:
        switch (e = e.type, e) {
          case $p:
          case Qs:
          case Us:
          case Ws:
          case Gs:
          case Ys:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ks:
              case Xs:
              case Js:
              case Zs:
              case qs:
                return e;
              default:
                return t;
            }
        }
      case Vp:
        return t;
    }
  }
}
function Wx(e) {
  return _t(e) === Qs;
}
ue.AsyncMode = $p;
ue.ConcurrentMode = Qs;
ue.ContextConsumer = Ks;
ue.ContextProvider = qs;
ue.Element = Hp;
ue.ForwardRef = Xs;
ue.Fragment = Us;
ue.Lazy = Js;
ue.Memo = Zs;
ue.Portal = Vp;
ue.Profiler = Ws;
ue.StrictMode = Gs;
ue.Suspense = Ys;
ue.isAsyncMode = function(e) {
  return Wx(e) || _t(e) === $p;
};
ue.isConcurrentMode = Wx;
ue.isContextConsumer = function(e) {
  return _t(e) === Ks;
};
ue.isContextProvider = function(e) {
  return _t(e) === qs;
};
ue.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hp;
};
ue.isForwardRef = function(e) {
  return _t(e) === Xs;
};
ue.isFragment = function(e) {
  return _t(e) === Us;
};
ue.isLazy = function(e) {
  return _t(e) === Js;
};
ue.isMemo = function(e) {
  return _t(e) === Zs;
};
ue.isPortal = function(e) {
  return _t(e) === Vp;
};
ue.isProfiler = function(e) {
  return _t(e) === Ws;
};
ue.isStrictMode = function(e) {
  return _t(e) === Gs;
};
ue.isSuspense = function(e) {
  return _t(e) === Ys;
};
ue.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Us || e === Qs || e === Ws || e === Gs || e === Ys || e === t1 || typeof e == "object" && e !== null && (e.$$typeof === Js || e.$$typeof === Zs || e.$$typeof === qs || e.$$typeof === Ks || e.$$typeof === Xs || e.$$typeof === r1 || e.$$typeof === i1 || e.$$typeof === a1 || e.$$typeof === n1);
};
ue.typeOf = _t;
Gx.exports = ue;
var o1 = Gx.exports, qx = o1, s1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, l1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Kx = {};
Kx[qx.ForwardRef] = s1;
Kx[qx.Memo] = l1;
var Up = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = y.createContext(null)) : y.createContext(null);
Up.Consumer;
var u1 = Up.Provider, c1 = u1, p1 = Up;
function Pr() {
  var e = y.useContext(p1);
  return $x(e), e;
}
var kc;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(kc || (kc = {}));
var bc;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(bc || (bc = {}));
function Qx(e) {
  var t = function(n) {
    var r = Pr(), i = n.value, a = n.children, o = un(n, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i, l = e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o);
    return a(l);
  };
  return t.displayName = bc[e], t;
}
function Va(e) {
  var t = function(n) {
    var r = Pr(), i = n.value, a = n.children, o = un(
      n,
      ["value", "children"]
    ), s = r[e](i, o);
    if (typeof a == "function")
      return a(s);
    var l = r.textComponent || y.Fragment;
    return y.createElement(l, null, s);
  };
  return t.displayName = kc[e], t;
}
function Xx(e) {
  return e && Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return t[n] = Mx(r) ? e1(r) : r, t;
  }, {});
}
var Dm = function(e, t, n, r) {
  for (var i = [], a = 4; a < arguments.length; a++)
    i[a - 4] = arguments[a];
  var o = Xx(r), s = wc.apply(void 0, De([
    e,
    t,
    n,
    o
  ], i, !1));
  return Array.isArray(s) ? y.Children.toArray(s) : s;
}, Mm = function(e, t) {
  var n = e.defaultRichTextElements, r = un(e, ["defaultRichTextElements"]), i = Xx(n), a = Jb(M(M(M({}, Ux), r), { defaultRichTextElements: i }), t), o = {
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
  return M(M({}, a), {
    formatMessage: Dm.bind(
      null,
      o,
      // @ts-expect-error fix this
      a.formatters
    ),
    // @ts-expect-error fix this
    $t: Dm.bind(null, o, a.formatters)
  });
};
function eu(e) {
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
var d1 = (
  /** @class */
  function(e) {
    Dt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cache = jx(), n.state = {
        cache: n.cache,
        intl: Mm(eu(n.props), n.cache),
        prevConfig: eu(n.props)
      }, n;
    }
    return t.getDerivedStateFromProps = function(n, r) {
      var i = r.prevConfig, a = r.cache, o = eu(n);
      return Ec(i, o) ? null : {
        intl: Mm(o, a),
        prevConfig: o
      };
    }, t.prototype.render = function() {
      return $x(this.state.intl), y.createElement(c1, { value: this.state.intl }, this.props.children);
    }, t.displayName = "IntlProvider", t.defaultProps = Ux, t;
  }(y.PureComponent)
);
function f1(e, t) {
  var n = e.values, r = un(e, ["values"]), i = t.values, a = un(t, ["values"]);
  return Ec(i, n) && Ec(r, a);
}
function Yx(e) {
  var t = Pr(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? y.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, l = e.values, u = e.children, c = e.tagName, d = c === void 0 ? i : c, f = e.ignoreTag, x = { id: a, description: o, defaultMessage: s }, E = n(x, l, {
    ignoreTag: f
  });
  return typeof u == "function" ? u(Array.isArray(E) ? E : [E]) : d ? y.createElement(d, null, y.Children.toArray(E)) : y.createElement(y.Fragment, null, E);
}
Yx.displayName = "FormattedMessage";
var _a = y.memo(Yx, f1);
_a.displayName = "MemoizedFormattedMessage";
Va("formatDate");
Va("formatTime");
Va("formatNumber");
Va("formatList");
Va("formatDisplayName");
Qx("formatDate");
Qx("formatTime");
var Zx = { exports: {} };
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
})(Zx);
var m1 = Zx.exports;
const R = /* @__PURE__ */ Ni(m1);
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $.apply(null, arguments);
}
function se(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Gp = /* @__PURE__ */ m.createContext({});
Gp.Consumer;
Gp.Provider;
function Te(e, t) {
  var n = y.useContext(Gp);
  return e || n[t] || t;
}
function h1() {
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
var v1 = ["as", "disabled", "onKeyDown"];
function Lm(e) {
  return !e || e.trim() === "#";
}
var Wp = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = se(e, v1), s = function(c) {
    var d = o.href, f = o.onClick;
    if ((i || Lm(d)) && c.preventDefault(), i) {
      c.stopPropagation();
      return;
    }
    f && f(c);
  }, l = function(c) {
    c.key === " " && (c.preventDefault(), s(c));
  };
  return Lm(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ m.createElement(r, $({
    ref: t
  }, o, {
    onClick: s,
    onKeyDown: h1(l, a)
  }));
});
Wp.displayName = "SafeAnchor";
var g1 = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], x1 = {
  variant: "primary",
  active: !1,
  disabled: !1
}, qp = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, l = e.type, u = e.as, c = se(e, g1), d = Te(n, "btn"), f = R(o, d, a && "active", r && d + "-" + r, s && d + "-block", i && d + "-" + i);
  if (c.href)
    return /* @__PURE__ */ m.createElement(Wp, $({}, c, {
      as: u,
      ref: t,
      className: R(f, c.disabled && "disabled")
    }));
  t && (c.ref = t), l ? c.type = l : u || (c.type = "button");
  var x = u || "button";
  return /* @__PURE__ */ m.createElement(x, $({}, c, {
    className: f
  }));
});
qp.displayName = "Button";
qp.defaultProps = x1;
var Jx = { exports: {} }, y1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", w1 = y1, E1 = w1;
function e0() {
}
function t0() {
}
t0.resetWarningCache = e0;
var k1 = function() {
  function e(r, i, a, o, s, l) {
    if (l !== E1) {
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
    checkPropTypes: t0,
    resetWarningCache: e0
  };
  return n.PropTypes = n, n;
};
Jx.exports = k1();
var b1 = Jx.exports;
const p = /* @__PURE__ */ Ni(b1);
let Bm = 0;
const Kp = (e = "id") => (Bm += 1, `${e}${Bm}`);
let ei = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function n0(e, t, n) {
  class r extends m.Component {
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
        message: d
      } = n[o];
      switch (s) {
        case ei.MOVED:
          this.warn(`${t}: The prop '${o}' has been moved to '${l}'.`), a[l] = this.props[o];
          break;
        case ei.REMOVED:
          this.warn(`${t}: The prop '${o}' has been removed. '${d}'`);
          break;
        case ei.FORMAT:
          u(this.props[o]) ? a[o] = this.props[o] : (this.warn(`${t}: The prop '${o}' expects a new format. ${d}`), a[o] = c(this.props[o], this.props));
          break;
        case ei.MOVED_AND_FORMAT: {
          const f = this.props[o];
          let x = `${t}: The prop '${o}' has been moved to '${l}'`;
          u && !u(f) && (x += " and expects a new format"), x += d ? `. ${d}` : "", this.warn(x), a[l] = c ? c(f, this.props) : f;
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
      return /* @__PURE__ */ m.createElement(e, {
        ...o
      }, this.props.children || a);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    df(r, "displayName", `withDeprecatedProps(${t})`), r
  );
}
function Qp({
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
    return l || (u["aria-label"] = void 0, u["aria-hidden"] = !0), /* @__PURE__ */ m.createElement("span", {
      className: R("pgn__icon", {
        [`pgn__icon__${o}`]: !!o
      }, n),
      id: t,
      ...s
    }, /* @__PURE__ */ m.createElement(e, {
      role: "img",
      focusable: !1,
      ...u
    }), i && /* @__PURE__ */ m.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("span", {
    id: t || Kp("Icon"),
    className: n,
    "aria-hidden": r
  }), i && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, i));
}
Qp.propTypes = {
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
Qp.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Et = n0(Qp, "Icon", {
  className: {
    deprType: ei.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), nt = /* @__PURE__ */ m.forwardRef(({
  children: e,
  iconAfter: t,
  iconBefore: n,
  size: r,
  ...i
}, a) => /* @__PURE__ */ m.createElement(qp, {
  size: r,
  ...i,
  className: R(i.className),
  ref: a
}, n && /* @__PURE__ */ m.createElement(Et, {
  className: "btn-icon-before",
  size: r,
  src: n
}), e, t && /* @__PURE__ */ m.createElement(Et, {
  className: "btn-icon-after",
  size: r,
  src: t
})));
function Aa({
  as: e = "div",
  isStacked: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: R(r.className, {
      "pgn__action-row": !t,
      "pgn__action-row-stacked": t
    })
  }, n);
}
function C1() {
  return /* @__PURE__ */ m.createElement("span", {
    className: "pgn__action-row-spacer"
  });
}
Aa.Spacer = C1;
function jm(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function S1(e) {
  var t = _1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function _1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function r0(e, t, n) {
  var r = y.useRef(e !== void 0), i = y.useState(t), a = i[0], o = i[1], s = e !== void 0, l = r.current;
  return r.current = s, !s && l && a !== t && o(t), [s ? e : a, y.useCallback(function(u) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      d[f - 1] = arguments[f];
    n && n.apply(void 0, [u].concat(d)), o(u);
  }, [n])];
}
function A1(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[jm(r)], s = a[r], l = se(a, [jm(r), r].map(S1)), u = t[r], c = r0(s, o, e[u]), d = c[0], f = c[1];
    return $({}, l, (i = {}, i[r] = d, i[u] = f, i));
  }, e);
}
function Cc(e, t) {
  return Cc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Cc(e, t);
}
function Xp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cc(e, t);
}
function Yp(e) {
  return e && e.ownerDocument || document;
}
function T1(e) {
  var t = Yp(e);
  return t && t.defaultView || window;
}
function N1(e, t) {
  return T1(e).getComputedStyle(e, t);
}
var I1 = /([A-Z])/g;
function P1(e) {
  return e.replace(I1, "-$1").toLowerCase();
}
var F1 = /^ms-/;
function go(e) {
  return P1(e).replace(F1, "-ms-");
}
var R1 = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function O1(e) {
  return !!(e && R1.test(e));
}
function i0(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(go(t)) || N1(e).getPropertyValue(go(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(go(i)) : O1(i) ? r += i + "(" + a + ") " : n += go(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
const zm = {
  disabled: !1
}, a0 = m.createContext(null);
var D1 = function(t) {
  return t.scrollTop;
}, Yi = "unmounted", or = "exited", Rn = "entering", sr = "entered", Sc = "exiting", An = /* @__PURE__ */ function(e) {
  Xp(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, l;
    return a.appearStatus = null, r.in ? s ? (l = or, a.appearStatus = Rn) : l = sr : r.unmountOnExit || r.mountOnEnter ? l = Yi : l = or, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Yi ? {
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
      this.props.in ? o !== Rn && o !== sr && (a = Rn) : (o === Rn || o === sr) && (a = Sc);
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
          var o = this.props.nodeRef ? this.props.nodeRef.current : dr.findDOMNode(this);
          o && D1(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === or && this.setState({
      status: Yi
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [dr.findDOMNode(this), s], u = l[0], c = l[1], d = this.getTimeouts(), f = s ? d.appear : d.enter;
    if (!i && !o || zm.disabled) {
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
      a.props.onEntering(u, c), a.onTransitionEnd(f, function() {
        a.safeSetState({
          status: sr
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : dr.findDOMNode(this);
    if (!a || zm.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Sc
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
    var o = this.props.nodeRef ? this.props.nodeRef.current : dr.findDOMNode(this), s = i == null && !this.props.addEndListener;
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
    if (i === Yi)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = se(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ m.createElement(a0.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : m.cloneElement(m.Children.only(o), s))
    );
  }, t;
}(m.Component);
An.contextType = a0;
An.propTypes = {};
function Br() {
}
An.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Br,
  onEntering: Br,
  onEntered: Br,
  onExit: Br,
  onExiting: Br,
  onExited: Br
};
An.UNMOUNTED = Yi;
An.EXITED = or;
An.ENTERING = Rn;
An.ENTERED = sr;
An.EXITING = Sc;
const M1 = !!(typeof window < "u" && window.document && window.document.createElement);
var _c = !1, Ac = !1;
try {
  var tu = {
    get passive() {
      return _c = !0;
    },
    get once() {
      return Ac = _c = !0;
    }
  };
  M1 && (window.addEventListener("test", tu, tu), window.removeEventListener("test", tu, !0));
} catch {
}
function L1(e, t, n, r) {
  if (r && typeof r != "boolean" && !Ac) {
    var i = r.once, a = r.capture, o = n;
    !Ac && i && (o = n.__once || function s(l) {
      this.removeEventListener(t, s, a), n.call(this, l);
    }, n.__once = o), e.addEventListener(t, o, _c ? r : a);
  }
  e.addEventListener(t, n, r);
}
function B1(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function ti(e, t, n, r) {
  return L1(e, t, n, r), function() {
    B1(e, t, n, r);
  };
}
function j1(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function z1(e) {
  var t = i0(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function H1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || j1(e, "transitionend", !0);
  }, t + n), a = ti(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function V1(e, t, n, r) {
  n == null && (n = z1(e) || 0);
  var i = H1(e, n, r), a = ti(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Hm(e, t) {
  var n = i0(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function $1(e, t) {
  var n = Hm(e, "transitionDuration"), r = Hm(e, "transitionDelay"), i = V1(e, function(a) {
    a.target === e && (i(), t(a));
  }, n + r);
}
function U1(e) {
  e.offsetHeight;
}
function G1(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Tc(e) {
  const t = G1(e);
  return y.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
var W1 = ["className", "children"], xo, q1 = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, K1 = (xo = {}, xo[Rn] = "show", xo[sr] = "show", xo), Oi = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.className, r = e.children, i = se(e, W1), a = y.useCallback(function(o) {
    U1(o), i.onEnter && i.onEnter(o);
  }, [i]);
  return /* @__PURE__ */ m.createElement(An, $({
    ref: t,
    addEndListener: $1
  }, i, {
    onEnter: a
  }), function(o, s) {
    return /* @__PURE__ */ m.cloneElement(r, $({}, s, {
      className: R("fade", n, r.props.className, K1[o])
    }));
  });
});
Oi.defaultProps = q1;
Oi.displayName = "Fade";
var Q1 = ["label", "onClick", "className"], X1 = {
  label: p.string.isRequired,
  onClick: p.func
}, Y1 = {
  label: "Close"
}, el = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.label, r = e.onClick, i = e.className, a = se(e, Q1);
  return /* @__PURE__ */ m.createElement("button", $({
    ref: t,
    type: "button",
    className: R("close", i),
    onClick: r
  }, a), /* @__PURE__ */ m.createElement("span", {
    "aria-hidden": "true"
  }, "×"), /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, n));
});
el.displayName = "CloseButton";
el.propTypes = X1;
el.defaultProps = Y1;
const o0 = function(e) {
  return /* @__PURE__ */ m.forwardRef(function(t, n) {
    return /* @__PURE__ */ m.createElement("div", $({}, t, {
      ref: n,
      className: R(t.className, e)
    }));
  });
};
var Z1 = /-(.)/g;
function J1(e) {
  return e.replace(Z1, function(t, n) {
    return n.toUpperCase();
  });
}
var eC = ["className", "bsPrefix", "as"], tC = function(t) {
  return t[0].toUpperCase() + J1(t).slice(1);
};
function Zp(e, t) {
  var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? tC(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ m.forwardRef(function(l, u) {
    var c = l.className, d = l.bsPrefix, f = l.as, x = f === void 0 ? a || "div" : f, E = se(l, eC), g = Te(d, e);
    return /* @__PURE__ */ m.createElement(x, $({
      ref: u,
      className: R(c, g)
    }, E));
  });
  return s.defaultProps = o, s.displayName = i, s;
}
var nC = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"], s0 = o0("h4");
s0.displayName = "DivStyledAsH4";
var rC = Zp("alert-heading", {
  Component: s0
}), iC = Zp("alert-link", {
  Component: Wp
}), aC = {
  show: !0,
  transition: Oi,
  closeLabel: "Close alert"
}, Fr = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = A1(e, {
    show: "onClose"
  }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, l = n.variant, u = n.onClose, c = n.dismissible, d = n.transition, f = se(n, nC), x = Te(r, "alert"), E = Tc(function(h) {
    u && u(!1, h);
  }), g = d === !0 ? Oi : d, k = /* @__PURE__ */ m.createElement("div", $({
    role: "alert"
  }, g ? void 0 : f, {
    ref: t,
    className: R(o, x, l && x + "-" + l, c && x + "-dismissible")
  }), c && /* @__PURE__ */ m.createElement(el, {
    onClick: E,
    label: a
  }), s);
  return g ? /* @__PURE__ */ m.createElement(g, $({
    unmountOnExit: !0
  }, f, {
    ref: void 0,
    in: i
  }), k) : i ? k : null;
});
Fr.displayName = "Alert";
Fr.defaultProps = aC;
Fr.Link = iC;
Fr.Heading = rC;
var oC = ["bsPrefix", "variant", "pill", "className", "as"], sC = {
  pill: !1
}, Jp = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.pill, a = e.className, o = e.as, s = o === void 0 ? "span" : o, l = se(e, oC), u = Te(n, "badge");
  return /* @__PURE__ */ m.createElement(s, $({
    ref: t
  }, l, {
    className: R(a, u, i && u + "-pill", r && u + "-" + r)
  }));
});
Jp.displayName = "Badge";
Jp.defaultProps = sC;
function l0() {
  const e = y.useRef(!0), t = y.useRef(() => e.current);
  return y.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function lC(e) {
  const t = y.useRef(e);
  return t.current = e, t;
}
function uC(e) {
  const t = lC(e);
  y.useEffect(() => () => t.current(), []);
}
const Nc = 2 ** 31 - 1;
function u0(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Nc ? setTimeout(t, r) : setTimeout(() => u0(e, t, n), Nc);
}
function cC() {
  const e = l0(), t = y.useRef();
  return uC(() => clearTimeout(t.current)), y.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(i, a = 0) {
      e() && (n(), a <= Nc ? t.current = setTimeout(i, a) : u0(t, i, Date.now() + a));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
function pC(e, t) {
  var n = 0;
  return m.Children.map(e, function(r) {
    return /* @__PURE__ */ m.isValidElement(r) ? t(r, n++) : r;
  });
}
var dC = ["bsPrefix", "className", "as"], fC = ["xl", "lg", "md", "sm", "xs"], c0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = se(e, dC), s = Te(n, "col"), l = [], u = [];
    return fC.forEach(function(c) {
      var d = o[c];
      delete o[c];
      var f, x, E;
      if (typeof d == "object" && d != null) {
        var g = d.span;
        f = g === void 0 ? !0 : g, x = d.offset, E = d.order;
      } else
        f = d;
      var k = c !== "xs" ? "-" + c : "";
      f && l.push(f === !0 ? "" + s + k : "" + s + k + "-" + f), E != null && u.push("order" + k + "-" + E), x != null && u.push("offset" + k + "-" + x);
    }), l.length || l.push(s), /* @__PURE__ */ m.createElement(a, $({}, o, {
      ref: t,
      className: R.apply(void 0, [r].concat(l, u))
    }));
  }
);
c0.displayName = "Col";
function Vm() {
  return y.useState(null);
}
function mC(e) {
  const t = l0();
  return [e[0], y.useCallback((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var ft = "top", Rt = "bottom", Ot = "right", mt = "left", ed = "auto", $a = [ft, Rt, Ot, mt], Ei = "start", Ta = "end", hC = "clippingParents", p0 = "viewport", Gi = "popper", vC = "reference", $m = /* @__PURE__ */ $a.reduce(function(e, t) {
  return e.concat([t + "-" + Ei, t + "-" + Ta]);
}, []), td = /* @__PURE__ */ [].concat($a, [ed]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ei, t + "-" + Ta]);
}, []), gC = "beforeRead", xC = "read", yC = "afterRead", wC = "beforeMain", EC = "main", kC = "afterMain", bC = "beforeWrite", CC = "write", SC = "afterWrite", _C = [gC, xC, yC, wC, EC, kC, bC, CC, SC];
function sn(e) {
  return e.split("-")[0];
}
function kt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Sr(e) {
  var t = kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ln(e) {
  var t = kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var vr = Math.max, fs = Math.min, ki = Math.round;
function Ic() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function d0() {
  return !/^((?!chrome|android).)*safari/i.test(Ic());
}
function bi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && ln(e) && (i = e.offsetWidth > 0 && ki(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ki(r.height) / e.offsetHeight || 1);
  var o = Sr(e) ? kt(e) : window, s = o.visualViewport, l = !d0() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / i, c = (r.top + (l && s ? s.offsetTop : 0)) / a, d = r.width / i, f = r.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function rd(e) {
  var t = bi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function f0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && nd(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cn(e) {
  return kt(e).getComputedStyle(e);
}
function AC(e) {
  return ["table", "td", "th"].indexOf(Qn(e)) >= 0;
}
function tr(e) {
  return ((Sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function tl(e) {
  return Qn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (nd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    tr(e)
  );
}
function Um(e) {
  return !ln(e) || // https://github.com/popperjs/popper-core/issues/837
  Cn(e).position === "fixed" ? null : e.offsetParent;
}
function TC(e) {
  var t = /firefox/i.test(Ic()), n = /Trident/i.test(Ic());
  if (n && ln(e)) {
    var r = Cn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = tl(e);
  for (nd(i) && (i = i.host); ln(i) && ["html", "body"].indexOf(Qn(i)) < 0; ) {
    var a = Cn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ua(e) {
  for (var t = kt(e), n = Um(e); n && AC(n) && Cn(n).position === "static"; )
    n = Um(n);
  return n && (Qn(n) === "html" || Qn(n) === "body" && Cn(n).position === "static") ? t : n || TC(e) || t;
}
function id(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sa(e, t, n) {
  return vr(e, fs(t, n));
}
function NC(e, t, n) {
  var r = sa(e, t, n);
  return r > n ? n : r;
}
function m0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function h0(e) {
  return Object.assign({}, m0(), e);
}
function v0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var IC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, h0(typeof t != "number" ? t : v0(t, $a));
};
function PC(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = sn(n.placement), l = id(s), u = [mt, Ot].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var d = IC(i.padding, n), f = rd(a), x = l === "y" ? ft : mt, E = l === "y" ? Rt : Ot, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], k = o[l] - n.rects.reference[l], h = Ua(a), v = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, w = g / 2 - k / 2, b = d[x], C = v - f[c] - d[E], S = v / 2 - f[c] / 2 + w, _ = sa(b, S, C), T = l;
    n.modifiersData[r] = (t = {}, t[T] = _, t.centerOffset = _ - S, t);
  }
}
function FC(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || f0(t.elements.popper, i) && (t.elements.arrow = i));
}
const RC = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: PC,
  effect: FC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ci(e) {
  return e.split("-")[1];
}
var OC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function DC(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: ki(n * i) / i || 0,
    y: ki(r * i) / i || 0
  };
}
function Gm(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = o.x, x = f === void 0 ? 0 : f, E = o.y, g = E === void 0 ? 0 : E, k = typeof c == "function" ? c({
    x,
    y: g
  }) : {
    x,
    y: g
  };
  x = k.x, g = k.y;
  var h = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), w = mt, b = ft, C = window;
  if (u) {
    var S = Ua(n), _ = "clientHeight", T = "clientWidth";
    if (S === kt(n) && (S = tr(n), Cn(S).position !== "static" && s === "absolute" && (_ = "scrollHeight", T = "scrollWidth")), S = S, i === ft || (i === mt || i === Ot) && a === Ta) {
      b = Rt;
      var F = d && S === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[_]
      );
      g -= F - r.height, g *= l ? 1 : -1;
    }
    if (i === mt || (i === ft || i === Rt) && a === Ta) {
      w = Ot;
      var P = d && S === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[T]
      );
      x -= P - r.width, x *= l ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: s
  }, u && OC), z = c === !0 ? DC({
    x,
    y: g
  }, kt(n)) : {
    x,
    y: g
  };
  if (x = z.x, g = z.y, l) {
    var G;
    return Object.assign({}, V, (G = {}, G[b] = v ? "0" : "", G[w] = h ? "0" : "", G.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + g + "px)" : "translate3d(" + x + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, V, (t = {}, t[b] = v ? g + "px" : "", t[w] = h ? x + "px" : "", t.transform = "", t));
}
function MC(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: sn(t.placement),
    variation: Ci(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Gm(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Gm(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const LC = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: MC,
  data: {}
};
var yo = {
  passive: !0
};
function BC(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, l = kt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, yo);
  }), s && l.addEventListener("resize", n.update, yo), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, yo);
    }), s && l.removeEventListener("resize", n.update, yo);
  };
}
const jC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: BC,
  data: {}
};
var zC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zC[t];
  });
}
var HC = {
  start: "end",
  end: "start"
};
function Wm(e) {
  return e.replace(/start|end/g, function(t) {
    return HC[t];
  });
}
function ad(e) {
  var t = kt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function od(e) {
  return bi(tr(e)).left + ad(e).scrollLeft;
}
function VC(e, t) {
  var n = kt(e), r = tr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = d0();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + od(e),
    y: l
  };
}
function $C(e) {
  var t, n = tr(e), r = ad(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = vr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = vr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + od(e), l = -r.scrollTop;
  return Cn(i || n).direction === "rtl" && (s += vr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function sd(e) {
  var t = Cn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function g0(e) {
  return ["html", "body", "#document"].indexOf(Qn(e)) >= 0 ? e.ownerDocument.body : ln(e) && sd(e) ? e : g0(tl(e));
}
function la(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = g0(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r), o = i ? [a].concat(a.visualViewport || [], sd(r) ? r : []) : r, s = t.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(la(tl(o)))
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
function UC(e, t) {
  var n = bi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qm(e, t, n) {
  return t === p0 ? Pc(VC(e, n)) : Sr(t) ? UC(t, n) : Pc($C(tr(e)));
}
function GC(e) {
  var t = la(tl(e)), n = ["absolute", "fixed"].indexOf(Cn(e).position) >= 0, r = n && ln(e) ? Ua(e) : e;
  return Sr(r) ? t.filter(function(i) {
    return Sr(i) && f0(i, r) && Qn(i) !== "body";
  }) : [];
}
function WC(e, t, n, r) {
  var i = t === "clippingParents" ? GC(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(l, u) {
    var c = qm(e, u, r);
    return l.top = vr(c.top, l.top), l.right = fs(c.right, l.right), l.bottom = fs(c.bottom, l.bottom), l.left = vr(c.left, l.left), l;
  }, qm(e, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function x0(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? sn(r) : null, a = r ? Ci(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case ft:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Rt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Ot:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case mt:
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
  var u = i ? id(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ei:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ta:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Na(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? hC : s, u = n.rootBoundary, c = u === void 0 ? p0 : u, d = n.elementContext, f = d === void 0 ? Gi : d, x = n.altBoundary, E = x === void 0 ? !1 : x, g = n.padding, k = g === void 0 ? 0 : g, h = h0(typeof k != "number" ? k : v0(k, $a)), v = f === Gi ? vC : Gi, w = e.rects.popper, b = e.elements[E ? v : f], C = WC(Sr(b) ? b : b.contextElement || tr(e.elements.popper), l, c, o), S = bi(e.elements.reference), _ = x0({
    reference: S,
    element: w,
    placement: i
  }), T = Pc(Object.assign({}, w, _)), F = f === Gi ? T : S, P = {
    top: C.top - F.top + h.top,
    bottom: F.bottom - C.bottom + h.bottom,
    left: C.left - F.left + h.left,
    right: F.right - C.right + h.right
  }, V = e.modifiersData.offset;
  if (f === Gi && V) {
    var z = V[i];
    Object.keys(P).forEach(function(G) {
      var L = [Ot, Rt].indexOf(G) >= 0 ? 1 : -1, K = [ft, Rt].indexOf(G) >= 0 ? "y" : "x";
      P[G] += z[K] * L;
    });
  }
  return P;
}
function qC(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? td : l, c = Ci(r), d = c ? s ? $m : $m.filter(function(E) {
    return Ci(E) === c;
  }) : $a, f = d.filter(function(E) {
    return u.indexOf(E) >= 0;
  });
  f.length === 0 && (f = d);
  var x = f.reduce(function(E, g) {
    return E[g] = Na(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[sn(g)], E;
  }, {});
  return Object.keys(x).sort(function(E, g) {
    return x[E] - x[g];
  });
}
function KC(e) {
  if (sn(e) === ed)
    return [];
  var t = jo(e);
  return [Wm(e), t, Wm(t)];
}
function QC(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, x = n.flipVariations, E = x === void 0 ? !0 : x, g = n.allowedAutoPlacements, k = t.options.placement, h = sn(k), v = h === k, w = l || (v || !E ? [jo(k)] : KC(k)), b = [k].concat(w).reduce(function(ce, re) {
      return ce.concat(sn(re) === ed ? qC(t, {
        placement: re,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: E,
        allowedAutoPlacements: g
      }) : re);
    }, []), C = t.rects.reference, S = t.rects.popper, _ = /* @__PURE__ */ new Map(), T = !0, F = b[0], P = 0; P < b.length; P++) {
      var V = b[P], z = sn(V), G = Ci(V) === Ei, L = [ft, Rt].indexOf(z) >= 0, K = L ? "width" : "height", Z = Na(t, {
        placement: V,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), J = L ? G ? Ot : mt : G ? Rt : ft;
      C[K] > S[K] && (J = jo(J));
      var N = jo(J), O = [];
      if (a && O.push(Z[z] <= 0), s && O.push(Z[J] <= 0, Z[N] <= 0), O.every(function(ce) {
        return ce;
      })) {
        F = V, T = !1;
        break;
      }
      _.set(V, O);
    }
    if (T)
      for (var B = E ? 3 : 1, q = function(re) {
        var X = b.find(function(Se) {
          var je = _.get(Se);
          if (je)
            return je.slice(0, re).every(function(Bt) {
              return Bt;
            });
        });
        if (X)
          return F = X, "break";
      }, H = B; H > 0; H--) {
        var Ie = q(H);
        if (Ie === "break") break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const XC = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: QC,
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
function Qm(e) {
  return [ft, Ot, Rt, mt].some(function(t) {
    return e[t] >= 0;
  });
}
function YC(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Na(t, {
    elementContext: "reference"
  }), s = Na(t, {
    altBoundary: !0
  }), l = Km(o, r), u = Km(s, i, a), c = Qm(l), d = Qm(u);
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
const ZC = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: YC
};
function JC(e, t, n) {
  var r = sn(e), i = [mt, ft].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [mt, Ot].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function eS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = td.reduce(function(c, d) {
    return c[d] = JC(d, t.rects, a), c;
  }, {}), s = o[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const tS = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eS
};
function nS(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = x0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const rS = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nS,
  data: {}
};
function iS(e) {
  return e === "x" ? "y" : "x";
}
function aS(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, x = f === void 0 ? !0 : f, E = n.tetherOffset, g = E === void 0 ? 0 : E, k = Na(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = sn(t.placement), v = Ci(t.placement), w = !v, b = id(h), C = iS(b), S = t.modifiersData.popperOffsets, _ = t.rects.reference, T = t.rects.popper, F = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, P = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (S) {
    if (a) {
      var G, L = b === "y" ? ft : mt, K = b === "y" ? Rt : Ot, Z = b === "y" ? "height" : "width", J = S[b], N = J + k[L], O = J - k[K], B = x ? -T[Z] / 2 : 0, q = v === Ei ? _[Z] : T[Z], H = v === Ei ? -T[Z] : -_[Z], Ie = t.elements.arrow, ce = x && Ie ? rd(Ie) : {
        width: 0,
        height: 0
      }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : m0(), X = re[L], Se = re[K], je = sa(0, _[Z], ce[Z]), Bt = w ? _[Z] / 2 - B - je - X - P.mainAxis : q - je - X - P.mainAxis, jt = w ? -_[Z] / 2 + B + je + Se + P.mainAxis : H + je + Se + P.mainAxis, ht = t.elements.arrow && Ua(t.elements.arrow), ot = ht ? b === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, dn = (G = V == null ? void 0 : V[b]) != null ? G : 0, Tn = J + Bt - dn - ot, Nn = J + jt - dn, Pe = sa(x ? fs(N, Tn) : N, J, x ? vr(O, Nn) : O);
      S[b] = Pe, z[b] = Pe - J;
    }
    if (s) {
      var ae, me = b === "x" ? ft : mt, pe = b === "x" ? Rt : Ot, de = S[C], Yt = C === "y" ? "height" : "width", Dr = de + k[me], nr = de - k[pe], D = [ft, mt].indexOf(h) !== -1, W = (ae = V == null ? void 0 : V[C]) != null ? ae : 0, ye = D ? Dr : de - _[Yt] - T[Yt] - W + P.altAxis, _e = D ? de + _[Yt] + T[Yt] - W - P.altAxis : nr, Ue = x && D ? NC(ye, de, _e) : sa(x ? ye : Dr, de, x ? _e : nr);
      S[C] = Ue, z[C] = Ue - de;
    }
    t.modifiersData[r] = z;
  }
}
const oS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: aS,
  requiresIfExists: ["offset"]
};
function sS(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lS(e) {
  return e === kt(e) || !ln(e) ? ad(e) : sS(e);
}
function uS(e) {
  var t = e.getBoundingClientRect(), n = ki(t.width) / e.offsetWidth || 1, r = ki(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cS(e, t, n) {
  n === void 0 && (n = !1);
  var r = ln(t), i = ln(t) && uS(t), a = tr(t), o = bi(e, i, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Qn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  sd(a)) && (s = lS(t)), ln(t) ? (l = bi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = od(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function pS(e) {
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
function dS(e) {
  var t = pS(e);
  return _C.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function fS(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function mS(e) {
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
function hS(e) {
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
    }, d = [], f = !1, x = {
      state: c,
      setOptions: function(h) {
        var v = typeof h == "function" ? h(c.options) : h;
        g(), c.options = Object.assign({}, a, c.options, v), c.scrollParents = {
          reference: Sr(s) ? la(s) : s.contextElement ? la(s.contextElement) : [],
          popper: la(l)
        };
        var w = dS(mS([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), E(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var h = c.elements, v = h.reference, w = h.popper;
          if (Ym(v, w)) {
            c.rects = {
              reference: cS(v, Ua(w), c.options.strategy === "fixed"),
              popper: rd(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
              return c.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var b = 0; b < c.orderedModifiers.length; b++) {
              if (c.reset === !0) {
                c.reset = !1, b = -1;
                continue;
              }
              var C = c.orderedModifiers[b], S = C.fn, _ = C.options, T = _ === void 0 ? {} : _, F = C.name;
              typeof S == "function" && (c = S({
                state: c,
                options: T,
                name: F,
                instance: x
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: fS(function() {
        return new Promise(function(k) {
          x.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Ym(s, l))
      return x;
    x.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function E() {
      c.orderedModifiers.forEach(function(k) {
        var h = k.name, v = k.options, w = v === void 0 ? {} : v, b = k.effect;
        if (typeof b == "function") {
          var C = b({
            state: c,
            name: h,
            instance: x,
            options: w
          }), S = function() {
          };
          d.push(C || S);
        }
      });
    }
    function g() {
      d.forEach(function(k) {
        return k();
      }), d = [];
    }
    return x;
  };
}
var vS = hS({
  defaultModifiers: [ZC, rS, LC, jC, tS, XC, oS, RC]
}), Zm = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, gS = {
  name: "applyStyles",
  enabled: !1
}, xS = {
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
}, yS = [];
function wS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, l = r.strategy, u = l === void 0 ? "absolute" : l, c = r.modifiers, d = c === void 0 ? yS : c, f = se(r, ["enabled", "placement", "strategy", "modifiers"]), x = y.useRef(), E = y.useCallback(function() {
    var b;
    (b = x.current) == null || b.update();
  }, []), g = y.useCallback(function() {
    var b;
    (b = x.current) == null || b.forceUpdate();
  }, []), k = mC(y.useState({
    placement: s,
    update: E,
    forceUpdate: g,
    attributes: {},
    styles: {
      popper: Zm(u),
      arrow: {}
    }
  })), h = k[0], v = k[1], w = y.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(C) {
        var S = C.state, _ = {}, T = {};
        Object.keys(S.elements).forEach(function(F) {
          _[F] = S.styles[F], T[F] = S.attributes[F];
        }), v({
          state: S,
          styles: _,
          attributes: T,
          update: E,
          forceUpdate: g,
          placement: S.placement
        });
      }
    };
  }, [E, g, v]);
  return y.useEffect(function() {
    !x.current || !a || x.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(d, [w, gS])
    });
  }, [u, s, w, a]), y.useEffect(function() {
    if (!(!a || e == null || t == null))
      return x.current = vS(e, t, $({}, f, {
        placement: s,
        strategy: u,
        modifiers: [].concat(d, [xS, w])
      })), function() {
        x.current != null && (x.current.destroy(), x.current = void 0, v(function(b) {
          return $({}, b, {
            attributes: {},
            styles: {
              popper: Zm(u)
            }
          });
        }));
      };
  }, [a, e, t]), h;
}
function y0(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var ES = function() {
}, kS = ES;
const bS = /* @__PURE__ */ Ni(kS);
function ms(e) {
  return e && "setState" in e ? dr.findDOMNode(e) : e ?? null;
}
const CS = function(e) {
  return Yp(ms(e));
};
var SS = 27, Jm = function() {
};
function _S(e) {
  return e.button === 0;
}
function AS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var eh = function(t) {
  return t && ("current" in t ? t.current : t);
};
function TS(e, t, n) {
  var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = y.useRef(!1), l = t || Jm, u = y.useCallback(function(f) {
    var x, E = eh(e);
    bS(!!E, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !E || AS(f) || !_S(f) || !!y0(E, (x = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? x : f.target);
  }, [e]), c = Tc(function(f) {
    s.current || l(f);
  }), d = Tc(function(f) {
    f.keyCode === SS && l(f);
  });
  y.useEffect(function() {
    if (!(i || e == null)) {
      var f = window.event, x = CS(eh(e)), E = ti(x, o, u, !0), g = ti(x, o, function(v) {
        if (v === f) {
          f = void 0;
          return;
        }
        c(v);
      }), k = ti(x, "keyup", function(v) {
        if (v === f) {
          f = void 0;
          return;
        }
        d(v);
      }), h = [];
      return "ontouchstart" in x.documentElement && (h = [].slice.call(x.body.children).map(function(v) {
        return ti(v, "mousemove", Jm);
      })), function() {
        E(), g(), k(), h.forEach(function(v) {
          return v();
        });
      };
    }
  }, [e, i, o, u, c, d]);
}
function NS(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(n) {
    t[n.name] = n;
  }), t) : e || t;
}
function IS(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function PS(e) {
  var t, n, r, i, a = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, c = e.fixed, d = e.containerPadding, f = e.arrowElement, x = e.popperConfig, E = x === void 0 ? {} : x, g = NS(E.modifiers);
  return $({}, E, {
    placement: s,
    enabled: a,
    strategy: c ? "fixed" : E.strategy,
    modifiers: IS($({}, g, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: $({}, g.preventOverflow, {
        options: d ? $({
          padding: d
        }, (t = g.preventOverflow) == null ? void 0 : t.options) : (n = g.preventOverflow) == null ? void 0 : n.options
      }),
      offset: {
        options: $({
          offset: u
        }, (r = g.offset) == null ? void 0 : r.options)
      },
      arrow: $({}, g.arrow, {
        enabled: !!f,
        options: $({}, (i = g.arrow) == null ? void 0 : i.options, {
          element: f
        })
      }),
      flip: $({
        enabled: !!l
      }, g.flip)
    }))
  });
}
const th = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function FS(e, t) {
  const n = th(e), r = th(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function RS(e, t) {
  return y.useMemo(() => FS(e, t), [e, t]);
}
function nu(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function ru(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) || 0, r = parseFloat(t.marginRight) || 0, i = parseFloat(t.marginBottom) || 0, a = parseFloat(t.marginLeft) || 0;
  return {
    top: n,
    right: r,
    bottom: i,
    left: a
  };
}
function OS() {
  var e = y.useRef(null), t = y.useRef(null), n = y.useRef(null), r = Te(void 0, "popover"), i = Te(void 0, "dropdown-menu"), a = y.useCallback(function(u) {
    !u || !(nu(u, r) || nu(u, i)) || (t.current = ru(u), u.style.margin = "0", e.current = u);
  }, [r, i]), o = y.useMemo(function() {
    return {
      name: "offset",
      options: {
        offset: function(c) {
          var d = c.placement;
          if (!t.current) return [0, 0];
          var f = t.current, x = f.top, E = f.left, g = f.bottom, k = f.right;
          switch (d.split("-")[0]) {
            case "top":
              return [0, g];
            case "left":
              return [0, k];
            case "bottom":
              return [0, x];
            case "right":
              return [0, E];
            default:
              return [0, 0];
          }
        }
      }
    };
  }, [t]), s = y.useMemo(function() {
    return {
      name: "arrow",
      options: {
        padding: function() {
          if (!n.current)
            return 0;
          var c = n.current, d = c.top, f = c.right, x = d || f;
          return {
            top: x,
            left: x,
            right: x,
            bottom: x
          };
        }
      }
    };
  }, [n]), l = y.useMemo(function() {
    return {
      name: "popoverArrowMargins",
      enabled: !0,
      phase: "main",
      fn: function() {
      },
      requiresIfExists: ["arrow"],
      effect: function(c) {
        var d = c.state;
        if (!(!e.current || !d.elements.arrow || !nu(e.current, r))) {
          if (d.modifiersData["arrow#persistent"]) {
            var f = ru(d.elements.arrow), x = f.top, E = f.right, g = x || E;
            d.modifiersData["arrow#persistent"].padding = {
              top: g,
              left: g,
              right: g,
              bottom: g
            };
          } else
            n.current = ru(d.elements.arrow);
          return d.elements.arrow.style.margin = "0", function() {
            d.elements.arrow && (d.elements.arrow.style.margin = "");
          };
        }
      }
    };
  }, [r]);
  return [a, [o, s, l]];
}
var nh = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, o, s, l, u) {
      var c = s || "<<anonymous>>", d = u || o;
      if (a[o] == null)
        return new Error("The " + l + " `" + d + "` is required to make " + ("`" + c + "` accessible for users of assistive ") + "technologies such as screen readers.");
      for (var f = arguments.length, x = Array(f > 5 ? f - 5 : 0), E = 5; E < f; E++)
        x[E - 5] = arguments[E];
      return r.apply(void 0, [a, o, s, l, u].concat(x));
    };
  }
  e.exports = t.default;
})(nh, nh.exports);
var rh = { exports: {} }, Fc = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    function i(o, s, l, u, c, d) {
      var f = u || "<<anonymous>>", x = d || l;
      if (s[l] == null)
        return o ? new Error("Required " + c + " `" + x + "` was not specified " + ("in `" + f + "`.")) : null;
      for (var E = arguments.length, g = Array(E > 6 ? E - 6 : 0), k = 6; k < E; k++)
        g[k - 6] = arguments[k];
      return r.apply(void 0, [s, l, f, c, x].concat(g));
    }
    var a = i.bind(null, !1);
    return a.isRequired = i.bind(null, !0), a;
  }
  e.exports = t.default;
})(Fc, Fc.exports);
var DS = Fc.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = DS, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a() {
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, d = Array(c), f = 0; f < c; f++)
        d[f] = arguments[f];
      var x = null;
      return s.forEach(function(E) {
        if (x == null) {
          var g = E.apply(void 0, d);
          g != null && (x = g);
        }
      }), x;
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(rh, rh.exports);
var MS = ["as", "className", "type", "tooltip"], LS = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: p.string,
  /** Display feedback as a tooltip. */
  tooltip: p.bool,
  as: p.elementType
}, Ga = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, l = s === void 0 ? !1 : s, u = se(e, MS);
    return /* @__PURE__ */ m.createElement(r, $({}, u, {
      ref: t,
      className: R(i, o + "-" + (l ? "tooltip" : "feedback"))
    }));
  }
);
Ga.displayName = "Feedback";
Ga.propTypes = LS;
var Qt = /* @__PURE__ */ m.createContext({
  controlId: void 0
}), BS = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"], ld = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, l = e.isValid, u = l === void 0 ? !1 : l, c = e.isInvalid, d = c === void 0 ? !1 : c, f = e.isStatic, x = e.as, E = x === void 0 ? "input" : x, g = se(e, BS), k = y.useContext(Qt), h = k.controlId, v = k.custom, w = v ? [i, "custom-control-input"] : [r, "form-check-input"], b = w[0], C = w[1];
  return r = Te(b, C), /* @__PURE__ */ m.createElement(E, $({}, g, {
    ref: t,
    type: s,
    id: n || h,
    className: R(a, r, u && "is-valid", d && "is-invalid", f && "position-static")
  }));
});
ld.displayName = "FormCheckInput";
var jS = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], ud = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = se(e, jS), s = y.useContext(Qt), l = s.controlId, u = s.custom, c = u ? [r, "custom-control-label"] : [n, "form-check-label"], d = c[0], f = c[1];
  return n = Te(d, f), /* @__PURE__ */ m.createElement("label", $({}, o, {
    ref: t,
    htmlFor: a || l,
    className: R(i, n)
  }));
});
ud.displayName = "FormCheckLabel";
var zS = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"], Rr = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, l = s === void 0 ? !1 : s, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, f = d === void 0 ? !1 : d, x = e.feedbackTooltip, E = x === void 0 ? !1 : x, g = e.feedback, k = e.className, h = e.style, v = e.title, w = v === void 0 ? "" : v, b = e.type, C = b === void 0 ? "checkbox" : b, S = e.label, _ = e.children, T = e.custom, F = e.as, P = F === void 0 ? "input" : F, V = se(e, zS), z = C === "switch" ? !0 : T, G = z ? [i, "custom-control"] : [r, "form-check"], L = G[0], K = G[1];
  r = Te(L, K);
  var Z = y.useContext(Qt), J = Z.controlId, N = y.useMemo(function() {
    return {
      controlId: n || J,
      custom: z
    };
  }, [J, z, n]), O = z || S != null && S !== !1 && !_, B = /* @__PURE__ */ m.createElement(ld, $({}, V, {
    type: C === "switch" ? "checkbox" : C,
    ref: t,
    isValid: c,
    isInvalid: f,
    isStatic: !O,
    disabled: l,
    as: P
  }));
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: N
  }, /* @__PURE__ */ m.createElement("div", {
    style: h,
    className: R(k, r, z && "custom-" + C, o && r + "-inline")
  }, _ || /* @__PURE__ */ m.createElement(m.Fragment, null, B, O && /* @__PURE__ */ m.createElement(ud, {
    title: w
  }, S), (c || f) && /* @__PURE__ */ m.createElement(Ga, {
    type: c ? "valid" : "invalid",
    tooltip: E
  }, g))));
});
Rr.displayName = "FormCheck";
Rr.Input = ld;
Rr.Label = ud;
var HS = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"], cd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, l = e.lang, u = e.as, c = u === void 0 ? "input" : u, d = se(e, HS), f = y.useContext(Qt), x = f.controlId, E = f.custom, g = "file", k = E ? [i, "custom-file-input"] : [r, "form-control-file"], h = k[0], v = k[1];
  return r = Te(h, v), /* @__PURE__ */ m.createElement(c, $({}, d, {
    ref: t,
    id: n || x,
    type: g,
    lang: l,
    className: R(a, r, o && "is-valid", s && "is-invalid")
  }));
});
cd.displayName = "FormFileInput";
var VS = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"], hs = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = se(e, VS), s = y.useContext(Qt), l = s.controlId, u = s.custom, c = u ? [r, "custom-file-label"] : [n, "form-file-label"], d = c[0], f = c[1];
  return n = Te(d, f), /* @__PURE__ */ m.createElement("label", $({}, o, {
    ref: t,
    htmlFor: a || l,
    className: R(i, n),
    "data-browse": o["data-browse"]
  }));
});
hs.displayName = "FormFileLabel";
var $S = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"], nl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, l = s === void 0 ? !1 : s, u = e.isInvalid, c = u === void 0 ? !1 : u, d = e.feedbackTooltip, f = d === void 0 ? !1 : d, x = e.feedback, E = e.className, g = e.style, k = e.label, h = e.children, v = e.custom, w = e.lang, b = e["data-browse"], C = e.as, S = C === void 0 ? "div" : C, _ = e.inputAs, T = _ === void 0 ? "input" : _, F = se(e, $S), P = v ? [i, "custom"] : [r, "form-file"], V = P[0], z = P[1];
  r = Te(V, z);
  var G = "file", L = y.useContext(Qt), K = L.controlId, Z = y.useMemo(function() {
    return {
      controlId: n || K,
      custom: v
    };
  }, [K, v, n]), J = k != null && k !== !1 && !h, N = /* @__PURE__ */ m.createElement(cd, $({}, F, {
    ref: t,
    isValid: l,
    isInvalid: c,
    disabled: o,
    as: T,
    lang: w
  }));
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: Z
  }, /* @__PURE__ */ m.createElement(S, {
    style: g,
    className: R(E, r, v && "custom-" + G)
  }, h || /* @__PURE__ */ m.createElement(m.Fragment, null, v ? /* @__PURE__ */ m.createElement(m.Fragment, null, N, J && /* @__PURE__ */ m.createElement(hs, {
    "data-browse": b
  }, k)) : /* @__PURE__ */ m.createElement(m.Fragment, null, J && /* @__PURE__ */ m.createElement(hs, null, k), N), (l || c) && /* @__PURE__ */ m.createElement(Ga, {
    type: l ? "valid" : "invalid",
    tooltip: f
  }, x))));
});
nl.displayName = "FormFile";
nl.Input = cd;
nl.Label = hs;
var US = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"], w0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, l = e.className, u = e.isValid, c = u === void 0 ? !1 : u, d = e.isInvalid, f = d === void 0 ? !1 : d, x = e.plaintext, E = e.readOnly, g = e.custom, k = e.as, h = k === void 0 ? "input" : k, v = se(e, US), w = y.useContext(Qt), b = w.controlId, C = g ? [r, "custom"] : [n, "form-control"], S = C[0], _ = C[1];
  n = Te(S, _);
  var T;
  if (x) {
    var F;
    T = (F = {}, F[n + "-plaintext"] = !0, F);
  } else if (i === "file") {
    var P;
    T = (P = {}, P[n + "-file"] = !0, P);
  } else if (i === "range") {
    var V;
    T = (V = {}, V[n + "-range"] = !0, V);
  } else if (h === "select" && g) {
    var z;
    T = (z = {}, z[n + "-select"] = !0, z[n + "-select-" + a] = a, z);
  } else {
    var G;
    T = (G = {}, G[n] = !0, G[n + "-" + a] = a, G);
  }
  return /* @__PURE__ */ m.createElement(h, $({}, v, {
    type: i,
    size: o,
    ref: t,
    readOnly: E,
    id: s || b,
    className: R(l, T, c && "is-valid", f && "is-invalid")
  }));
});
w0.displayName = "FormControl";
const E0 = Object.assign(w0, {
  Feedback: Ga
});
var GS = ["bsPrefix", "className", "children", "controlId", "as"], k0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, l = se(e, GS);
  n = Te(n, "form-group");
  var u = y.useMemo(function() {
    return {
      controlId: a
    };
  }, [a]);
  return /* @__PURE__ */ m.createElement(Qt.Provider, {
    value: u
  }, /* @__PURE__ */ m.createElement(s, $({}, l, {
    ref: t,
    className: R(r, n)
  }), i));
});
k0.displayName = "FormGroup";
var WS = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"], qS = {
  column: !1,
  srOnly: !1
}, pd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, l = e.htmlFor, u = se(e, WS), c = y.useContext(Qt), d = c.controlId;
  i = Te(i, "form-label");
  var f = "col-form-label";
  typeof a == "string" && (f = f + " " + f + "-" + a);
  var x = R(s, i, o && "sr-only", a && f);
  return l = l || d, a ? /* @__PURE__ */ m.createElement(c0, $({
    ref: t,
    as: "label",
    className: x,
    htmlFor: l
  }, u)) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ m.createElement(r, $({
      ref: t,
      className: x,
      htmlFor: l
    }, u))
  );
});
pd.displayName = "FormLabel";
pd.defaultProps = qS;
var KS = ["bsPrefix", "className", "as", "muted"], b0 = /* @__PURE__ */ m.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  function(e, t) {
    var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = se(e, KS);
    return n = Te(n, "form-text"), /* @__PURE__ */ m.createElement(a, $({}, s, {
      ref: t,
      className: R(r, n, o && "text-muted")
    }));
  }
);
b0.displayName = "FormText";
var rl = /* @__PURE__ */ m.forwardRef(function(e, t) {
  return /* @__PURE__ */ m.createElement(Rr, $({}, e, {
    ref: t,
    type: "switch"
  }));
});
rl.displayName = "Switch";
rl.Input = Rr.Input;
rl.Label = Rr.Label;
var QS = ["bsPrefix", "inline", "className", "validated", "as"], XS = Zp("form-row"), YS = {
  inline: !1
}, Xt = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, l = se(e, QS);
  return n = Te(n, "form"), /* @__PURE__ */ m.createElement(s, $({}, l, {
    ref: t,
    className: R(i, a && "was-validated", r && n + "-inline")
  }));
});
Xt.displayName = "Form";
Xt.defaultProps = YS;
Xt.Row = XS;
Xt.Group = k0;
Xt.Control = E0;
Xt.Check = Rr;
Xt.File = nl;
Xt.Switch = rl;
Xt.Label = pd;
Xt.Text = b0;
var iu = function(t) {
  var n;
  return typeof document > "u" ? null : t == null ? Yp().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (n = t) != null && n.nodeType && t || null);
};
function ih(e, t) {
  var n = y.useState(function() {
    return iu(e);
  }), r = n[0], i = n[1];
  if (!r) {
    var a = iu(e);
    a && i(a);
  }
  return y.useEffect(function() {
  }, [t, r]), y.useEffect(function() {
    var o = iu(e);
    o !== r && i(o);
  }, [e, r]), r;
}
var dd = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, c = Vm(), d = c[0], f = c[1], x = Vm(), E = x[0], g = x[1], k = RS(f, t), h = ih(e.container), v = ih(e.target), w = y.useState(!e.show), b = w[0], C = w[1], S = wS(v, d, PS({
    placement: i,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: n,
    offset: r,
    arrowElement: E,
    popperConfig: l
  })), _ = S.styles, T = S.attributes, F = se(S, ["styles", "attributes"]);
  e.show ? b && C(!1) : !e.transition && !b && C(!0);
  var P = function() {
    C(!0), e.onExited && e.onExited.apply(e, arguments);
  }, V = e.show || u && !b;
  if (TS(d, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !V)
    return null;
  var z = e.children($({}, F, {
    show: !!e.show,
    props: $({}, T.popper, {
      style: _.popper,
      ref: k
    }),
    arrowProps: $({}, T.arrow, {
      style: _.arrow,
      ref: g
    })
  }));
  if (u) {
    var G = e.onExit, L = e.onExiting, K = e.onEnter, Z = e.onEntering, J = e.onEntered;
    z = /* @__PURE__ */ m.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: G,
      onExiting: L,
      onExited: P,
      onEnter: K,
      onEntering: Z,
      onEntered: J
    }, z);
  }
  return h ? /* @__PURE__ */ dr.createPortal(z, h) : null;
});
dd.displayName = "Overlay";
dd.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: p.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: p.oneOf(td),
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
var ZS = ["children", "transition", "popperConfig"], JS = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"], e_ = {
  transition: Oi,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function t_(e, t) {
  var n = e.ref, r = t.ref;
  e.ref = n.__wrapped || (n.__wrapped = function(i) {
    return n(ms(i));
  }), t.ref = r.__wrapped || (r.__wrapped = function(i) {
    return r(ms(i));
  });
}
function C0(e) {
  var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = se(e, ZS), o = y.useRef({}), s = OS(), l = s[0], u = s[1], c = n === !0 ? Oi : n || null;
  return /* @__PURE__ */ m.createElement(dd, $({}, a, {
    ref: l,
    popperConfig: $({}, i, {
      modifiers: u.concat(i.modifiers || [])
    }),
    transition: c
  }), function(d) {
    var f, x = d.props, E = d.arrowProps, g = d.show, k = d.update;
    d.forceUpdate;
    var h = d.placement, v = d.state, w = se(d, JS);
    t_(x, E);
    var b = Object.assign(o.current, {
      state: v,
      scheduleUpdate: k,
      placement: h,
      outOfBoundaries: (v == null || (f = v.modifiersData.hide) == null ? void 0 : f.isReferenceHidden) || !1
    });
    return typeof t == "function" ? t($({}, w, x, {
      placement: h,
      show: g
    }, !n && g && {
      className: "show"
    }, {
      popper: b,
      arrowProps: E
    })) : /* @__PURE__ */ m.cloneElement(t, $({}, w, x, {
      placement: h,
      arrowProps: E,
      popper: b,
      className: R(t.props.className, !n && g && "show"),
      style: $({}, t.props.style, x.style)
    }));
  });
}
C0.defaultProps = e_;
var n_ = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"], r_ = /* @__PURE__ */ function(e) {
  Xp(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    return this.props.children;
  }, t;
}(m.Component);
function i_(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function ah(e, t, n) {
  var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
  (!a || a !== i) && !y0(i, a) && e.apply(void 0, t);
}
var a_ = {
  defaultShow: !1,
  trigger: ["hover", "focus"]
};
function S0(e) {
  var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, l = s === void 0 ? !1 : s, u = e.onToggle, c = e.delay, d = e.placement, f = e.flip, x = f === void 0 ? d && d.indexOf("auto") !== -1 : f, E = se(e, n_), g = y.useRef(null), k = cC(), h = y.useRef(""), v = r0(o, l, u), w = v[0], b = v[1], C = i_(c), S = typeof r != "function" ? m.Children.only(r).props : {}, _ = S.onFocus, T = S.onBlur, F = S.onClick, P = y.useCallback(function() {
    return ms(g.current);
  }, []), V = y.useCallback(function() {
    if (k.clear(), h.current = "show", !C.show) {
      b(!0);
      return;
    }
    k.set(function() {
      h.current === "show" && b(!0);
    }, C.show);
  }, [C.show, b, k]), z = y.useCallback(function() {
    if (k.clear(), h.current = "hide", !C.hide) {
      b(!1);
      return;
    }
    k.set(function() {
      h.current === "hide" && b(!1);
    }, C.hide);
  }, [C.hide, b, k]), G = y.useCallback(function() {
    V();
    for (var B = arguments.length, q = new Array(B), H = 0; H < B; H++)
      q[H] = arguments[H];
    _ == null || _.apply(void 0, q);
  }, [V, _]), L = y.useCallback(function() {
    z();
    for (var B = arguments.length, q = new Array(B), H = 0; H < B; H++)
      q[H] = arguments[H];
    T == null || T.apply(void 0, q);
  }, [z, T]), K = y.useCallback(function() {
    b(!w), F && F.apply(void 0, arguments);
  }, [F, b, w]), Z = y.useCallback(function() {
    for (var B = arguments.length, q = new Array(B), H = 0; H < B; H++)
      q[H] = arguments[H];
    ah(V, q, "fromElement");
  }, [V]), J = y.useCallback(function() {
    for (var B = arguments.length, q = new Array(B), H = 0; H < B; H++)
      q[H] = arguments[H];
    ah(z, q, "toElement");
  }, [z]), N = t == null ? [] : [].concat(t), O = {};
  return N.indexOf("click") !== -1 && (O.onClick = K), N.indexOf("focus") !== -1 && (O.onFocus = G, O.onBlur = L), N.indexOf("hover") !== -1 && (O.onMouseOver = Z, O.onMouseOut = J), /* @__PURE__ */ m.createElement(m.Fragment, null, typeof r == "function" ? r($({}, O, {
    ref: g
  })) : /* @__PURE__ */ m.createElement(r_, {
    ref: g
  }, /* @__PURE__ */ y.cloneElement(r, O)), /* @__PURE__ */ m.createElement(C0, $({}, E, {
    show: w,
    onHide: z,
    flip: x,
    placement: d,
    popperConfig: a,
    target: P
  }), n));
}
S0.defaultProps = a_;
var o_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"], s_ = ["isChild"], l_ = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"], oh = 1e3, u_ = {
  min: 0,
  max: 100,
  animated: !1,
  isChild: !1,
  srOnly: !1,
  striped: !1
};
function c_(e, t, n) {
  var r = (e - t) / (n - t) * 100;
  return Math.round(r * oh) / oh;
}
function sh(e, t) {
  var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, l = e.striped, u = e.animated, c = e.className, d = e.style, f = e.variant, x = e.bsPrefix, E = se(e, o_);
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t
  }, E, {
    role: "progressbar",
    className: R(c, x + "-bar", (n = {}, n["bg-" + f] = f, n[x + "-bar-animated"] = u, n[x + "-bar-striped"] = u || l, n)),
    style: $({
      width: c_(i, r, a) + "%"
    }, d),
    "aria-valuenow": i,
    "aria-valuemin": r,
    "aria-valuemax": a
  }), s ? /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, o) : o);
}
var ui = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.isChild, r = se(e, s_);
  if (r.bsPrefix = Te(r.bsPrefix, "progress"), n)
    return sh(r, t);
  var i = r.min, a = r.now, o = r.max, s = r.label, l = r.srOnly, u = r.striped, c = r.animated, d = r.bsPrefix, f = r.variant, x = r.className, E = r.children, g = se(r, l_);
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t
  }, g, {
    className: R(x, d)
  }), E ? pC(E, function(k) {
    return /* @__PURE__ */ y.cloneElement(k, {
      isChild: !0
    });
  }) : sh({
    min: i,
    now: a,
    max: o,
    label: s,
    srOnly: l,
    striped: u,
    animated: c,
    bsPrefix: d,
    variant: f
  }, t));
});
ui.displayName = "ProgressBar";
ui.defaultProps = u_;
var p_ = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"], _0 = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, l = s === void 0 ? "div" : s, u = e.className, c = se(e, p_);
  n = Te(n, "spinner");
  var d = n + "-" + i;
  return /* @__PURE__ */ m.createElement(l, $({
    ref: t
  }, c, {
    className: R(u, d, a && d + "-" + a, r && "text-" + r)
  }), o);
});
_0.displayName = "Spinner";
var d_ = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"], f_ = {
  placement: "right"
}, il = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
  e.popper, e.show;
  var l = se(e, d_);
  n = Te(n, "tooltip");
  var u = (r == null ? void 0 : r.split("-")) || [], c = u[0];
  return /* @__PURE__ */ m.createElement("div", $({
    ref: t,
    style: a,
    role: "tooltip",
    "x-placement": c,
    className: R(i, n, "bs-tooltip-" + c)
  }, l), /* @__PURE__ */ m.createElement("div", $({
    className: "arrow"
  }, s)), /* @__PURE__ */ m.createElement("div", {
    className: n + "-inner"
  }, o));
});
il.defaultProps = f_;
il.displayName = "Tooltip";
var fd = {};
fd.match = y_;
fd.parse = A0;
var m_ = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, h_ = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, v_ = /^(?:(min|max)-)?(.+)/, g_ = /(em|rem|px|cm|mm|in|pt|pc)?$/, x_ = /(dpi|dpcm|dppx)?$/;
function y_(e, t) {
  return A0(e).some(function(n) {
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
          u = ch(u), c = ch(c);
          break;
        case "resolution":
          u = uh(u), c = uh(c);
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case /* Deprecated */
        "device-pixel-ratio":
          u = lh(u), c = lh(c);
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
function A0(e) {
  return e.split(",").map(function(t) {
    t = t.trim();
    var n = t.match(m_), r = n[1], i = n[2], a = n[3] || "", o = {};
    return o.inverse = !!r && r.toLowerCase() === "not", o.type = i ? i.toLowerCase() : "all", a = a.match(/\([^\)]+\)/g) || [], o.expressions = a.map(function(s) {
      var l = s.match(h_), u = l[1].toLowerCase().match(v_);
      return {
        modifier: u[1],
        feature: u[2],
        value: l[2]
      };
    }), o;
  });
}
function lh(e) {
  var t = Number(e), n;
  return t || (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), t = n[1] / n[2]), t;
}
function uh(e) {
  var t = parseFloat(e), n = String(e).match(x_)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function ch(e) {
  var t = parseFloat(e), n = String(e).match(g_)[1];
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
var w_ = fd.match, ph = typeof window < "u" ? window.matchMedia : null;
function E_(e, t, n) {
  var r = this, i;
  ph && !n && (i = ph.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(s)) : (this.matches = w_(e, t), this.media = e), this.addListener = a, this.removeListener = o, this.dispose = l;
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
function k_(e, t, n) {
  return new E_(e, t, n);
}
var b_ = k_;
const C_ = /* @__PURE__ */ Ni(b_);
var S_ = /[A-Z]/g, __ = /^ms-/, au = {};
function A_(e) {
  return "-" + e.toLowerCase();
}
function T0(e) {
  if (au.hasOwnProperty(e))
    return au[e];
  var t = e.replace(S_, A_);
  return au[e] = __.test(t) ? "-" + t : t;
}
function T_(e, t) {
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
const Ze = p.oneOfType([p.string, p.number]), N0 = {
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
}, N_ = {
  orientation: p.oneOf(["portrait", "landscape"]),
  scan: p.oneOf(["progressive", "interlace"]),
  aspectRatio: p.string,
  deviceAspectRatio: p.string,
  height: Ze,
  deviceHeight: Ze,
  width: Ze,
  deviceWidth: Ze,
  color: p.bool,
  colorIndex: p.bool,
  monochrome: p.bool,
  resolution: Ze,
  type: Object.keys(N0)
}, { type: FI, ...I_ } = N_, P_ = {
  minAspectRatio: p.string,
  maxAspectRatio: p.string,
  minDeviceAspectRatio: p.string,
  maxDeviceAspectRatio: p.string,
  minHeight: Ze,
  maxHeight: Ze,
  minDeviceHeight: Ze,
  maxDeviceHeight: Ze,
  minWidth: Ze,
  maxWidth: Ze,
  minDeviceWidth: Ze,
  maxDeviceWidth: Ze,
  minColor: p.number,
  maxColor: p.number,
  minColorIndex: p.number,
  maxColorIndex: p.number,
  minMonochrome: p.number,
  maxMonochrome: p.number,
  minResolution: Ze,
  maxResolution: Ze,
  ...I_
}, F_ = { ...N0, ...P_ };
var R_ = {
  all: F_
};
const O_ = (e) => `not ${e}`, D_ = (e, t) => {
  const n = T0(e);
  return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? O_(n) : `(${n}: ${t})`;
}, M_ = (e) => e.join(" and "), L_ = (e) => {
  const t = [];
  return Object.keys(R_.all).forEach((n) => {
    const r = e[n];
    r != null && t.push(D_(n, r));
  }), M_(t);
}, B_ = y.createContext(void 0), j_ = (e) => e.query || L_(e), dh = (e) => e ? Object.keys(e).reduce((n, r) => (n[T0(r)] = e[r], n), {}) : void 0, I0 = () => {
  const e = y.useRef(!1);
  return y.useEffect(() => {
    e.current = !0;
  }, []), e.current;
}, z_ = (e) => {
  const t = y.useContext(B_), n = () => dh(e) || dh(t), [r, i] = y.useState(n);
  return y.useEffect(() => {
    const a = n();
    T_(r, a) || i(a);
  }, [e, t]), r;
}, H_ = (e) => {
  const t = () => j_(e), [n, r] = y.useState(t);
  return y.useEffect(() => {
    const i = t();
    n !== i && r(i);
  }, [e]), n;
}, V_ = (e, t) => {
  const n = () => C_(e, t || {}, !!t), [r, i] = y.useState(n), a = I0();
  return y.useEffect(() => {
    if (a) {
      const o = n();
      return i(o), () => {
        o && o.dispose();
      };
    }
  }, [e, t]), r;
}, $_ = (e) => {
  const [t, n] = y.useState(e.matches);
  return y.useEffect(() => {
    const r = (i) => {
      n(i.matches);
    };
    return e.addListener(r), n(e.matches), () => {
      e.removeListener(r);
    };
  }, [e]), t;
}, P0 = (e, t, n) => {
  const r = z_(t), i = H_(e);
  if (!i)
    throw new Error("Invalid or missing MediaQuery!");
  const a = V_(i, r), o = $_(a);
  return I0(), y.useEffect(() => {
  }, [o]), y.useEffect(() => () => {
    a && a.dispose();
  }, []), o;
}, U_ = "576px", G_ = "768px", W_ = "992px", q_ = "1200px", K_ = "1400px", Q_ = {
  sm: U_,
  md: G_,
  lg: W_,
  xl: q_,
  xxl: K_
}, {
  sm: fh,
  md: mh,
  lg: hh,
  xl: vh,
  xxl: gh
} = Q_, F0 = {
  extraSmall: {
    maxWidth: parseFloat(fh) || 575.98
  },
  small: {
    minWidth: parseFloat(fh) || 576,
    maxWidth: parseFloat(mh) || 767.98
  },
  medium: {
    minWidth: parseFloat(mh) || 768,
    maxWidth: parseFloat(hh) || 991.98
  },
  large: {
    minWidth: parseFloat(hh) || 992,
    maxWidth: parseFloat(vh) || 1199.98
  },
  extraLarge: {
    minWidth: parseFloat(vh) || 1200,
    maxWidth: parseFloat(gh) || 1399.98
  },
  extraExtraLarge: {
    minWidth: parseFloat(gh) || 1400
  }
}, X_ = Object.freeze({
  xs: "extraSmall",
  sm: "small",
  md: "medium",
  lg: "large",
  xl: "extraLarge",
  xxl: "extraExtraLarge"
}), _r = /* @__PURE__ */ y.forwardRef(({
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
  const [c, d] = y.useState(o), f = P0({
    maxWidth: F0.extraSmall.maxWidth
  }), x = "sm";
  y.useEffect(() => {
    d(f ? !0 : o);
  }, [f, o]);
  const E = y.useCallback((g) => {
    const k = {
      size: x,
      key: g.props.children
    };
    return /* @__PURE__ */ y.cloneElement(g, k);
  }, []);
  return /* @__PURE__ */ m.createElement(Fr, {
    ...l,
    className: R("alert-content", l.className),
    show: s,
    ref: u
  }, t && /* @__PURE__ */ m.createElement(Et, {
    src: t,
    className: "alert-icon"
  }), /* @__PURE__ */ m.createElement("div", {
    className: R({
      "pgn__alert-message-wrapper": !c,
      "pgn__alert-message-wrapper-stacked": c
    })
  }, /* @__PURE__ */ m.createElement("div", {
    className: "alert-message-content"
  }, e), (r || n && n.length > 0) && /* @__PURE__ */ m.createElement(Aa, {
    className: "pgn__alert-actions"
  }, /* @__PURE__ */ m.createElement(Aa.Spacer, null), r && /* @__PURE__ */ m.createElement(nt, {
    size: x,
    variant: "tertiary",
    onClick: i
  }, a || /* @__PURE__ */ m.createElement(_a, {
    id: "pgn.Alert.closeLabel",
    defaultMessage: "Dismiss",
    description: "Label of a close button on Alert component"
  })), n && n.map(E))));
}), R0 = o0("h4");
R0.displayName = "DivStyledAsH4";
function Y_({
  as: e = R0,
  bsPrefix: t = "alert-heading",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Fr.Heading, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
function Z_({
  as: e = "a",
  bsPrefix: t = "alert-link",
  ...n
}) {
  return /* @__PURE__ */ m.createElement(Fr.Link, {
    as: e,
    bsPrefix: t,
    ...n
  });
}
_r.Heading = Y_;
_r.Link = Z_;
const xh = /* @__PURE__ */ m.forwardRef(({
  className: e,
  variant: t = "success",
  children: n,
  arrowPlacement: r = "bottom",
  ...i
}, a) => /* @__PURE__ */ m.createElement("span", {
  className: R(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
  ref: a,
  ...i
}, n)), yh = /* @__PURE__ */ m.forwardRef(({
  variant: e = "primary",
  className: t,
  children: n = null,
  disabled: r = !1,
  expandable: i = !1,
  ...a
}, o) => /* @__PURE__ */ m.createElement("div", {
  ref: o,
  className: R("pgn__bubble", `pgn__bubble-${e}`, t, {
    disabled: r,
    expandable: i
  }),
  ...a
}, n)), O0 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], J_ = ["hover", "click", "focus"];
function md(e) {
  return /* @__PURE__ */ m.createElement(S0, {
    ...e
  }, e.children);
}
const wh = p.oneOf(J_);
p.node.isRequired, p.oneOfType([p.elementType, p.func]), p.func, p.func, p.func, p.func, p.func, p.func, p.func, p.oneOf(O0), p.shape({}), p.bool, p.oneOf(["click", "mousedown"]), p.bool, p.oneOfType([p.elementType, p.func]), p.oneOfType([p.object, p.bool]);
md.propTypes = {
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
  placement: p.oneOf(O0),
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
  trigger: p.oneOfType([wh, p.arrayOf(wh)])
};
md.defaultProps = {
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
const e2 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], vs = /* @__PURE__ */ m.forwardRef(({
  children: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(il, {
  ...n,
  className: R({
    "tooltip-light": t === "light"
  }, n.className),
  ref: r
}, e));
vs.propTypes = {
  ...il.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: p.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: p.oneOf(e2),
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
vs.defaultProps = {
  ...vs.defaultProps,
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
const al = /* @__PURE__ */ m.forwardRef(({
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
  iconAs: u = Et,
  isActive: c = !1,
  children: d,
  // unused, just here because we don't want it to be part of 'attrs'
  ...f
}, x) => {
  const E = n ? "inverse-" : "", g = c ? `${l}-` : "", k = u;
  return /* @__PURE__ */ m.createElement("button", {
    "aria-label": t,
    className: R("btn-icon", `btn-icon-${E}${l}`, `btn-icon-${s}`, {
      [`btn-icon-${E}${g}active`]: c
    }, e),
    onClick: o,
    type: "button",
    ref: x,
    ...f
  }, /* @__PURE__ */ m.createElement("span", {
    className: "btn-icon__icon-container"
  }, k && /* @__PURE__ */ m.createElement(k, {
    className: R("btn-icon__icon", a),
    icon: r,
    src: i
  })));
});
function t2({
  tooltipPlacement: e = "top",
  tooltipContent: t,
  ...n
}) {
  const r = n.invertColors ? "inverse-" : "";
  return /* @__PURE__ */ m.createElement(md, {
    placement: e,
    overlay: /* @__PURE__ */ m.createElement(vs, {
      id: `iconbutton-tooltip-${e}`,
      variant: r ? "light" : void 0
    }, t)
  }, /* @__PURE__ */ m.createElement(al, {
    ...n
  }));
}
al.IconButtonWithTooltip = t2;
const Eh = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
  fill: "currentColor"
})), n2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
  fill: "currentColor"
})), D0 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
  fill: "currentColor"
})), r2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
  fill: "currentColor"
})), M0 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), i2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z",
  fill: "currentColor"
})), a2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
  fill: "currentColor"
})), o2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
  fill: "currentColor"
})), s2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  fill: "currentColor"
})), l2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
  fill: "currentColor"
})), u2 = (e) => /* @__PURE__ */ y.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
  fill: "currentColor"
})), c2 = (e) => /* @__PURE__ */ y.createElement("svg", {
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
}));
function Wn(e) {
  return typeof e == "string" || e instanceof String;
}
function kh(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function L0(e, t) {
  return Array.isArray(t) ? L0(e, (n, r) => t.includes(r)) : Object.entries(e).reduce((n, r) => {
    let [i, a] = r;
    return t(a, i) && (n[i] = a), n;
  }, {});
}
const U = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function p2(e) {
  switch (e) {
    case U.LEFT:
      return U.FORCE_LEFT;
    case U.RIGHT:
      return U.FORCE_RIGHT;
    default:
      return e;
  }
}
function ou(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function gs(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), r = Array.isArray(e);
  let i;
  if (n && r) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!gs(t[i], e[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!gs(e[u[i]], t[u[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class d2 {
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
    return !this.removedCount || this.insertedCount ? U.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? U.RIGHT : U.LEFT;
  }
}
function Q(e, t) {
  return new Q.InputMask(e, t);
}
function B0(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? Q.MaskedRegExp : Wn(e) ? Q.MaskedPattern : e === Date ? Q.MaskedDate : e === Number ? Q.MaskedNumber : Array.isArray(e) || e === Array ? Q.MaskedDynamic : Q.Masked && e.prototype instanceof Q.Masked ? e : Q.Masked && e instanceof Q.Masked ? e.constructor : e instanceof Function ? Q.MaskedFunction : (console.warn("Mask not found for mask", e), Q.Masked);
}
function Ia(e) {
  if (!e) throw new Error("Options in not defined");
  if (Q.Masked) {
    if (e.prototype instanceof Q.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof Q.Masked ? {
      mask: e
    } : kh(e) && e.mask instanceof Q.Masked ? e : {};
    if (t) {
      const r = t.mask;
      return {
        ...L0(t, (i, a) => !a.startsWith("_")),
        mask: t.constructor,
        _mask: r,
        ...n
      };
    }
  }
  return kh(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Sn(e) {
  if (Q.Masked && e instanceof Q.Masked) return e;
  const t = Ia(e), n = B0(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
Q.createMask = Sn;
class hd {
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
Q.MaskElement = hd;
const bh = 90, f2 = 89;
class ol extends hd {
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
    if (this._handlers.redo && (t.keyCode === bh && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === f2 && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === bh && (t.metaKey || t.ctrlKey))
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
Q.HTMLMaskElement = ol;
class m2 extends ol {
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
Q.HTMLMaskElement = ol;
class j0 extends ol {
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
Q.HTMLContenteditableMaskElement = j0;
class sl {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > sl.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
sl.MAX_LENGTH = 100;
class h2 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof hd ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new j0(t) : new m2(t), this.masked = Sn(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new sl(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(t instanceof Q.Masked) && this.masked.constructor === B0(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof Q.Masked ? t : Sn({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, U.LEFT));
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
    const n = new d2({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), r = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, a = r === this.masked.rawInputValue ? n.removeDirection : U.NONE;
    let o = this.masked.nearestInputPos(n.startChangePos + i, a);
    a !== U.NONE && (o = this.masked.nearestInputPos(o, U.NONE)), this.updateControl(o), delete this._inputEvent;
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
Q.InputMask = h2;
class Y {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new Y()];
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
Q.ChangeDetails = Y;
class rn {
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
class Ke {
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
      ...Ke.DEFAULTS,
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new rn(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Wn(t) && (t = new rn(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new Y({
      inserted: t,
      rawInserted: t
    })) : new Y();
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
      s || (a = new Y(), this.state = i, r && o && (r.state = o));
    }
    return a;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Y();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Y();
  }
  /** Appends symbols considering flags */
  append(t, n, r) {
    if (!Wn(t)) throw new Error("value should be string");
    const i = Wn(r) ? new rn(String(r)) : r;
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new Y();
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
    return n === void 0 && (n = {}), Y.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), Y.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
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
    r === void 0 && (r = ""), i === void 0 && (i = U.NONE), a === void 0 && (a = {
      input: !0
    });
    const o = t + n, s = this.extractTail(o), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = p2(i), u = this.extractInput(0, o, {
      raw: !0
    }));
    let c = t;
    const d = new Y();
    if (i !== U.NONE && (c = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? U.NONE : i), d.tailShift = c - t), d.aggregate(this.remove(c)), l && i !== U.NONE && u === this.rawInputValue)
      if (i === U.FORCE_LEFT) {
        let f;
        for (; u === this.rawInputValue && (f = this.displayValue.length); )
          d.aggregate(new Y({
            tailShift: -1
          })).aggregate(this.remove(f - 1));
      } else i === U.FORCE_RIGHT && s.unshift();
    return d.aggregate(this.append(r, a, s));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !gs(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Ke.EMPTY_VALUES.includes(t) && Ke.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new Y();
  }
}
Ke.DEFAULTS = {
  skipInvalid: !0
};
Ke.EMPTY_VALUES = [void 0, null, ""];
Q.Masked = Ke;
class fr {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Wn(t) ? new rn(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], r = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof rn)
      r ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof fr) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof Q.MaskedPattern))
      return new rn(this.toString()).appendTo(t);
    const n = new Y();
    for (let r = 0; r < this.chunks.length; ++r) {
      const i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let s;
      if (o != null && // if block not found or stop is behind lastBlock
      (!a || a.index <= o) && ((i instanceof fr || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof fr && t._blocks[o]), s) {
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
      const a = "chunks" in i ? new fr() : new rn();
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
class v2 {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
    });
  }
}
class z0 {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new Y();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = U.NONE);
    const r = 0, i = this._value.length;
    switch (n) {
      case U.LEFT:
      case U.FORCE_LEFT:
        return r;
      case U.NONE:
      case U.RIGHT:
      case U.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new Y();
    const r = this.eager === !0 || this.eager === "append", a = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !r) && !n.tail, o = new Y({
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
    const t = new Y();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new rn("");
  }
  appendTail(t) {
    return Wn(t) && (t = new rn(String(t))), t.appendTo(this);
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
class xs {
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
    this.masked = Sn(l), Object.assign(this, {
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
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new Y();
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
    if (n === void 0 && (n = {}), this.isFilled) return new Y();
    const r = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Y(), this.masked.state = r), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, r) {
    return this.masked.append(t, this.currentMaskFlags(n), r);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Y() : (this.isFilled = !0, new Y({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Y();
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
    n === void 0 && (n = U.NONE);
    const r = 0, i = this.value.length, a = Math.min(Math.max(t, r), i);
    switch (n) {
      case U.LEFT:
      case U.FORCE_LEFT:
        return this.isComplete ? a : r;
      case U.RIGHT:
      case U.FORCE_RIGHT:
        return this.isComplete ? a : i;
      case U.NONE:
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
    return new Y();
  }
}
xs.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class g2 extends Ke {
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
Q.MaskedRegExp = g2;
class Qe extends Ke {
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
      ...Qe.DEFAULTS,
      ...t,
      definitions: Object.assign({}, xs.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
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
        const u = n.slice(a), c = Object.keys(this.blocks).filter((f) => u.indexOf(f) === 0);
        c.sort((f, x) => x.length - f.length);
        const d = c[0];
        if (d) {
          const {
            expose: f,
            repeat: x,
            ...E
          } = Ia(this.blocks[d]), g = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...E,
            repeat: x,
            parent: this
          }, k = x != null ? new Q.RepeatBlock(
            g
            /* TODO */
          ) : Sn(g);
          k && (this._blocks.push(k), f && (this.exposeBlock = k), this._maskedBlocks[d] || (this._maskedBlocks[d] = []), this._maskedBlocks[d].push(this._blocks.length - 1)), a += d.length - 1;
          continue;
        }
      }
      let o = n[a], s = o in t;
      if (o === Qe.STOP_CHAR) {
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
      if (o === Qe.ESCAPE_CHAR) {
        if (++a, o = n[a], !o) break;
        s = !1;
      }
      const l = s ? new xs({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ia(t[o]),
        parent: this
      }) : new z0({
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
    const n = new Y();
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
    const r = this._mapPosToBlock(this.displayValue.length), i = new Y();
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
    const r = new fr();
    return t === n || this._forEachBlocksInRange(t, n, (i, a, o, s) => {
      const l = i.extractTail(o, s);
      l.stop = this._findStopBefore(a), l.from = this._blockStartPos(a), l instanceof fr && (l.blockIndex = a), r.extend(l);
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
    const n = new Y();
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
    if (n === void 0 && (n = U.NONE), !this._blocks.length) return 0;
    const r = new v2(this, t);
    if (n === U.NONE)
      return r.pushRightBeforeInput() || (r.popState(), r.pushLeftBeforeInput()) ? r.pos : this.displayValue.length;
    if (n === U.LEFT || n === U.FORCE_LEFT) {
      if (n === U.LEFT) {
        if (r.pushRightBeforeFilled(), r.ok && r.pos === t) return t;
        r.popState();
      }
      if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), n === U.LEFT) {
        if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= t || (r.popState(), r.ok && r.pos <= t)) return r.pos;
        r.popState();
      }
      return r.ok ? r.pos : n === U.FORCE_LEFT ? 0 : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : 0);
    }
    return n === U.RIGHT || n === U.FORCE_RIGHT ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : n === U.FORCE_RIGHT ? this.displayValue.length : (r.popState(), r.ok || (r.popState(), r.ok) ? r.pos : this.nearestInputPos(t, U.LEFT))) : t;
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
    const n = new Y();
    return this._forEachBlocksInRange(0, this.displayValue.length, (r) => n.aggregate(r.pad(t))), n;
  }
}
Qe.DEFAULTS = {
  ...Ke.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Qe.STOP_CHAR = "`";
Qe.ESCAPE_CHAR = "\\";
Qe.InputDefinition = xs;
Qe.FixedDefinition = z0;
Q.MaskedPattern = Qe;
class zo extends Qe {
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
    const n = new Y();
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
Q.MaskedRange = zo;
const x2 = "d{.}`m{.}`Y";
class hn extends Qe {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: r,
      ...i
    } = t;
    return {
      ...i,
      mask: Wn(n) ? n : r
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(hn.extractPatternOptions({
      ...hn.DEFAULTS,
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
      ...hn.DEFAULTS,
      ...t
    }, o = Object.assign({}, hn.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...a,
      mask: Wn(n) ? n : r,
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
    return super.optionsIsChanged(hn.extractPatternOptions(t));
  }
}
hn.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: zo,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: zo,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: zo,
    from: 1900,
    to: 9999
  }
});
hn.DEFAULTS = {
  ...Qe.DEFAULTS,
  mask: Date,
  pattern: x2,
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
Q.MaskedDate = hn;
class ll extends Ke {
  constructor(t) {
    super({
      ...ll.DEFAULTS,
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
      } = Ia(n), a = Sn({
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
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, a = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : a, s = a.slice(o.length), l = this.currentMask, u = new Y(), c = l == null ? void 0 : l.state;
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
    const n = new Y();
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
    const r = new Y();
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
      return gs(n, a) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
ll.DEFAULTS = {
  ...Ke.DEFAULTS,
  dispatch: (e, t, n, r) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, a = t.compiledMasks.map((o, s) => {
      const l = t.currentMask === o, u = l ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, U.FORCE_LEFT);
      return o.rawInputValue !== i ? (o.reset(), o.append(i, {
        raw: !0
      })) : l || o.remove(u), o.append(e, t.currentMaskFlags(n)), o.appendTail(r), {
        index: s,
        weight: o.rawInputValue.length,
        totalInputPositions: o.totalInputPositions(0, Math.max(u, o.nearestInputPos(o.displayValue.length, U.FORCE_LEFT)))
      };
    });
    return a.sort((o, s) => s.weight - o.weight || s.totalInputPositions - o.totalInputPositions), t.compiledMasks[a[0].index];
  }
};
Q.MaskedDynamic = ll;
class ul extends Qe {
  constructor(t) {
    super({
      ...ul.DEFAULTS,
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
    const r = Math.min(this.nearestInputPos(0, U.FORCE_RIGHT), this.value.length), i = this.enum.filter((a) => this.matchValue(a, this.unmaskedValue + t, r));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (o, s) => {
        const l = i[0][s];
        s >= this.value.length || l === o.value || (o.reset(), o._appendChar(l, n));
      });
      const a = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((o) => a.aggregate(super._appendCharRaw(o))), a;
    }
    return new Y({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new rn("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new Y();
    const r = Math.min(super.nearestInputPos(0, U.FORCE_RIGHT), this.value.length);
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
ul.DEFAULTS = {
  ...Qe.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
Q.MaskedEnum = ul;
class y2 extends Ke {
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
Q.MaskedFunction = y2;
var H0;
class gt extends Ke {
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
      ...gt.DEFAULTS,
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
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", r = (this.scale ? "(" + ou(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + r), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(ou).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ou(this.thousandsSeparator), "g");
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
      let f;
      this.min != null && this.min < 0 && this.number < this.min && (f = this.min), this.max != null && this.max > 0 && this.number > this.max && (f = this.max), f != null && (this.autofix ? (this._value = this.format(f, this).replace(gt.UNMASKED_RADIX, this.radix), l || (l = a === this._value && !n.tail)) : s = !1), s && (s = !!this._value.match(this._numberRegExp));
    }
    let u;
    s ? u = new Y({
      inserted: this._value.slice(a.length),
      rawInserted: l ? "" : t,
      skip: l
    }) : (this._value = a, u = new Y()), this._value = this._insertThousandsSeparators(this._value);
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
    return new Y({
      tailShift: (o - a) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case U.NONE:
      case U.LEFT:
      case U.FORCE_LEFT: {
        const r = this._findSeparatorAround(t - 1);
        if (r >= 0) {
          const i = r + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === U.FORCE_LEFT)
            return r;
        }
        break;
      }
      case U.RIGHT:
      case U.FORCE_RIGHT: {
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
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === gt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, r) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, gt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(gt.UNMASKED_RADIX, this.radix);
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
    return (super.typedValueEquals(t) || gt.EMPTY_VALUES.includes(t) && gt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
H0 = gt;
gt.UNMASKED_RADIX = ".";
gt.EMPTY_VALUES = [...Ke.EMPTY_VALUES, 0];
gt.DEFAULTS = {
  ...Ke.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [H0.UNMASKED_RADIX],
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
Q.MaskedNumber = gt;
const Rc = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function V0(e, t, n) {
  t === void 0 && (t = Rc.MASKED), n === void 0 && (n = Rc.MASKED);
  const r = Sn(e);
  return (i) => r.runIsolated((a) => (a[t] = i, a[n]));
}
function w2(e, t, n, r) {
  return V0(t, n, r)(e);
}
Q.PIPE_TYPE = Rc;
Q.createPipe = V0;
Q.pipe = w2;
class E2 extends Qe {
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
    } = Ia(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const s = Sn(this._blockOpts);
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
      return this._blocks.push(Sn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const r = new Y();
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
Q.RepeatBlock = E2;
try {
  globalThis.IMask = Q;
} catch {
}
const $0 = {
  // common
  mask: p.oneOfType([p.array, p.func, p.string, p.instanceOf(RegExp), p.oneOf([Date, Number, Q.Masked]), p.instanceOf(Q.Masked)]),
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
}, U0 = Object.keys($0).filter((e) => e !== "value"), k2 = ["value", "unmask", "onAccept", "onComplete", "inputRef"], b2 = U0.filter((e) => k2.indexOf(e) < 0);
function C2(e) {
  var t;
  const n = (t = class extends m.Component {
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
      a === void 0 && (a = this._extractMaskOptionsFromProps(this.props)), this.maskRef = Q(this.element, a).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(a) {
      const {
        ...o
      } = a;
      return Object.keys(o).filter((s) => b2.indexOf(s) < 0).forEach((s) => {
        delete o[s];
      }), o;
    }
    _extractNonMaskProps(a) {
      const {
        ...o
      } = a;
      return U0.forEach((s) => {
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
      return m.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), r = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + r + ")", n.propTypes = $0, m.forwardRef((i, a) => m.createElement(n, {
    ...i,
    ref: a
  }));
}
const S2 = C2((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return m.createElement("input", {
    ...n,
    ref: t
  });
}), _2 = (e, t) => m.createElement(S2, {
  ...e,
  ref: t
}), A2 = m.forwardRef(_2), T2 = (e = {}) => Object.entries(e).reduce((t, [n, r]) => (r !== void 0 && (t[n] = r), t), {}), gr = (...e) => (n) => {
  e.filter((r) => typeof r == "function").forEach((r) => r(n));
}, N2 = ({
  defaultValue: e,
  value: t
}) => {
  const [n, r] = y.useState(!!e || e === 0);
  return [!!t || t === 0 || n, (o) => r(!!o.target.value)];
}, Ch = (e, t) => {
  const [n, r] = y.useState([]), i = (l) => (r((u) => [...u, l]), l), a = () => {
    const l = Kp(`${e}-`);
    return i(l);
  }, o = (l) => {
    r((u) => u.filter((c) => c !== l));
  };
  return [n, (l) => {
    const [u, c] = y.useState(l);
    return y.useEffect(() => (l ? i(l) : u || c(a()), () => o(u)), [u, l]), u;
  }];
}, su = (e) => e, I2 = () => {
}, G0 = /* @__PURE__ */ m.createContext({
  getControlProps: su,
  useSetIsControlGroupEffect: I2,
  getLabelProps: su,
  getDescriptorProps: su,
  hasFormGroupProvider: !1
}), Lt = () => m.useContext(G0);
function P2(e) {
  const [t, n] = y.useState(e);
  return [t, (i) => {
    y.useEffect(() => n(i), [i]);
  }];
}
function cl({
  children: e,
  controlId: t,
  isInvalid: n,
  isValid: r,
  size: i
}) {
  const a = y.useMemo(() => t || Kp("form-field"), [t]), [o, s] = Ch(a), [l, u] = Ch(a), [c, d] = P2(!1), g = {
    getControlProps: y.useCallback((k) => {
      const h = c ? l : void 0;
      return T2({
        ...k,
        "aria-describedby": R(k["aria-describedby"], o) || void 0,
        "aria-labelledby": R(k["aria-labelledby"], h) || void 0,
        id: a
      });
    }, [c, o, l, a]),
    getLabelProps: (k) => {
      const h = u(k == null ? void 0 : k.id);
      return c ? {
        ...k,
        id: h
      } : {
        ...k,
        htmlFor: a
      };
    },
    getDescriptorProps: (k) => {
      const h = s(k == null ? void 0 : k.id);
      return {
        ...k,
        id: h
      };
    },
    useSetIsControlGroupEffect: d,
    isControlGroup: c,
    controlId: a,
    isInvalid: n,
    isValid: r,
    size: i,
    hasFormGroupProvider: !0
  };
  return /* @__PURE__ */ m.createElement(G0.Provider, {
    value: g
  }, e);
}
const Si = {
  SMALL: "sm",
  LARGE: "lg"
}, $t = {
  DEFAULT: "default",
  VALID: "valid",
  INVALID: "invalid",
  WARNING: "warning",
  CRITERIA_EMPTY: "criteria-empty",
  CRITERIA_VALID: "criteria-valid",
  CRITERIA_INVALID: "criteria-invalid"
}, F2 = {
  [$t.DEFAULT]: null,
  [$t.VALID]: D0,
  [$t.INVALID]: M0,
  [$t.WARNING]: c2,
  [$t.CRITERIA_EMPTY]: u2,
  [$t.CRITERIA_VALID]: r2,
  [$t.CRITERIA_INVALID]: n2
}, R2 = ({
  isInvalid: e,
  isValid: t
}) => t ? $t.VALID : e ? $t.INVALID : $t.DEFAULT;
function vd({
  type: e,
  customIcon: t
}) {
  if (t)
    return t;
  const n = F2[e];
  return n ? /* @__PURE__ */ m.createElement(Et, {
    src: n
  }) : null;
}
vd.propTypes = {
  type: p.oneOf(Object.values($t)),
  customIcon: p.node
};
vd.defaultProps = {
  type: void 0,
  customIcon: void 0
};
function pl({
  children: e,
  type: t,
  icon: n,
  muted: r,
  hasIcon: i,
  ...a
}) {
  const o = R(a.className, "pgn__form-text", `pgn__form-text-${t}`, {
    "text-muted": r
  });
  return /* @__PURE__ */ m.createElement("div", {
    ...a,
    className: o
  }, i && /* @__PURE__ */ m.createElement(vd, {
    customIcon: n,
    type: t
  }), /* @__PURE__ */ m.createElement("div", null, e));
}
const O2 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
pl.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies text type, this affects styling. */
  type: p.oneOf(O2),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show text with muted styling. */
  muted: p.bool
};
pl.defaultProps = {
  hasIcon: !0,
  type: "default",
  icon: void 0,
  className: void 0,
  muted: !1
};
function Xn({
  children: e,
  ...t
}) {
  const {
    getDescriptorProps: n,
    isInvalid: r,
    isValid: i
  } = Lt(), a = n(t), o = R("pgn__form-control-description", t.className), s = t.type || R2({
    isInvalid: r,
    isValid: i
  });
  return /* @__PURE__ */ m.createElement(pl, {
    ...a,
    className: o,
    type: s
  }, e);
}
const D2 = ["default", "valid", "invalid", "warning", "criteria-empty", "criteria-valid", "criteria-invalid"];
Xn.propTypes = {
  /** Specifies contents of the component. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: p.bool,
  /** Specifies feedback type, this affects styling. */
  type: p.oneOf(D2),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: p.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: p.bool
};
Xn.defaultProps = {
  hasIcon: !0,
  type: void 0,
  icon: void 0,
  className: void 0,
  muted: !1
};
function W0({
  children: e
}) {
  const {
    controlId: t
  } = Lt();
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-control-floating-label-content"
  }, /* @__PURE__ */ m.createElement("label", {
    className: "pgn__form-control-floating-label-text",
    htmlFor: t
  }, e)));
}
W0.propTypes = {
  children: p.node.isRequired
};
function ys({
  children: e,
  location: t
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: `pgn__form-control-decorator pgn__form-control-decorator-${t}`
  }, e);
}
ys.propTypes = {
  children: p.node.isRequired,
  location: p.oneOf(["leading", "trailing"])
};
ys.defaultProps = {
  location: "leading"
};
function gd({
  children: e,
  leadingElement: t,
  trailingElement: n,
  floatingLabel: r,
  className: i,
  ...a
}) {
  const o = Lt(), s = a.size || o.size;
  return /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__form-control-decorator-group", {
      "has-prepended-node": !!t,
      "has-appended-node": !!n,
      "has-leading-element": !!t,
      "has-trailing-element": !!n,
      "has-floating-label": !!r,
      "pgn__form-control-decorator-group-lg": s === Si.LARGE,
      "pgn__form-control-decorator-group-sm": s === Si.SMALL
    }, i),
    ...a
  }, e, t && /* @__PURE__ */ m.createElement(ys, {
    location: "leading"
  }, t), n && /* @__PURE__ */ m.createElement(ys, {
    location: "trailing"
  }, n), r && /* @__PURE__ */ m.createElement(W0, null, r));
}
gd.propTypes = {
  children: p.node.isRequired,
  leadingElement: p.node,
  trailingElement: p.node,
  floatingLabel: p.node,
  className: p.string,
  size: p.oneOf([Si.SMALL, Si.LARGE])
};
gd.defaultProps = {
  leadingElement: void 0,
  trailingElement: void 0,
  floatingLabel: void 0,
  className: void 0,
  size: void 0
};
const Di = /* @__PURE__ */ m.forwardRef(({
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
    isInvalid: d,
    isValid: f,
    getControlProps: x,
    ...E
  } = Lt(), g = m.useRef(), k = c || g, h = u.size || E.size, [v, w] = N2({
    defaultValue: u.defaultValue,
    value: u.value
  }), b = y.useCallback(() => {
    e === "textarea" && o && (!k.current.initialHeight && !k.current.offsets && (k.current.initialHeight = k.current.offsetHeight, k.current.offsets = k.current.offsetHeight - k.current.clientHeight), k.current.style.height = `${k.current.initialHeight}px`, k.current.style.height = `${k.current.scrollHeight + k.current.offsets}px`);
  }, [e, o, k]);
  y.useEffect(() => {
    b();
  }, [b]);
  const C = x({
    ...u,
    // eslint-disable-next-line react/prop-types
    onBlur: gr(w, u.onBlur)
  }), S = (_) => {
    b(), s && s(_);
  };
  return /* @__PURE__ */ m.createElement(gd, {
    size: h,
    leadingElement: r,
    trailingElement: i,
    floatingLabel: a,
    className: t
  }, /* @__PURE__ */ m.createElement(E0, {
    as: l ? A2 : e,
    ref: k,
    size: h,
    isInvalid: d,
    isValid: f,
    className: R(n, {
      "has-value": v
    }),
    onChange: S,
    mask: l,
    ...C
  }));
}), M2 = ["sm", "lg"];
Di.Feedback = Xn;
Di.Description = Xn;
Di.propTypes = {
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
  size: p.oneOf(M2),
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
Di.defaultProps = {
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
function xd({
  children: e,
  isInline: t = !1,
  ...n
}) {
  const {
    size: r,
    isControlGroup: i,
    getLabelProps: a
  } = Lt(), o = R("pgn__form-label", {
    "pgn__form-label-inline": t,
    "pgn__form-label-lg": r === Si.LARGE,
    "pgn__form-label-sm": r === Si.SMALL
  }, n.className), s = a({
    ...n,
    className: o
  }), l = i ? "p" : "label";
  return /* @__PURE__ */ m.createElement(l, s, e);
}
function L2({
  children: e,
  controlId: t,
  isInvalid: n = !1,
  isValid: r = !1,
  size: i,
  as: a,
  ...o
}) {
  return /* @__PURE__ */ m.createElement(a ?? "div", {
    ...o,
    className: R("pgn__form-group", o.className)
  }, /* @__PURE__ */ m.createElement(cl, {
    controlId: t,
    isInvalid: n,
    isValid: r,
    size: i
  }, e));
}
const B2 = (e) => e, q0 = /* @__PURE__ */ m.createContext({
  getRadioControlProps: B2,
  hasRadioSetProvider: !1
}), j2 = () => y.useContext(q0);
function yd({
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
      onBlur: c.onBlur ? gr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? gr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? gr(i, c.onChange) : i,
      checked: s ? a === c.value : void 0,
      defaultChecked: s ? void 0 : o === c.value
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasRadioSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(q0.Provider, {
    value: u
  }, e);
}
yd.propTypes = {
  children: p.node.isRequired,
  name: p.string.isRequired,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.string,
  defaultValue: p.string
};
yd.defaultProps = {
  onBlur: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const wd = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    getControlProps: n
  } = Lt(), {
    getRadioControlProps: r,
    hasRadioSetProvider: i
  } = j2();
  let a = n({
    ...e,
    className: R("pgn__form-radio-input", e.className)
  });
  return i && (a = r(a)), /* @__PURE__ */ m.createElement("input", {
    ...a,
    type: "radio",
    ref: t
  });
});
wd.propTypes = {
  className: p.string
};
wd.defaultProps = {
  className: void 0
};
const Ed = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  controlClassName: n,
  labelClassName: r,
  description: i,
  isInvalid: a,
  isValid: o,
  ...s
}, l) => /* @__PURE__ */ m.createElement(cl, {
  controlId: s.id,
  isInvalid: a,
  isValid: o
}, /* @__PURE__ */ m.createElement("div", {
  className: R("pgn__form-radio", t, {
    "pgn__form-control-valid": o,
    "pgn__form-control-invalid": a,
    "pgn__form-control-disabled": s.disabled
  })
}, /* @__PURE__ */ m.createElement(wd, {
  ref: l,
  className: n,
  ...s
}), /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(xd, {
  className: r
}, e), i && /* @__PURE__ */ m.createElement(Xn, {
  hasIcon: !1
}, i)))));
Ed.propTypes = {
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
Ed.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  disabled: !1
};
function dl({
  as: e,
  className: t,
  isInline: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(e, {
    className: R(t, {
      "pgn__form-control-set": !n,
      "pgn__form-control-set-inline": n
    }),
    ...i
  }, r);
}
dl.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** A class name to append to the base element. */
  className: p.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: p.bool,
  /** Specifies contents of the component. */
  children: p.node
};
dl.defaultProps = {
  as: "div",
  className: void 0,
  isInline: !1,
  children: null
};
function kd({
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
  } = Lt();
  c(!0);
  const d = u(l);
  return /* @__PURE__ */ m.createElement(yd, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(dl, {
    role: "radiogroup",
    isInline: i,
    ...d
  }, e));
}
kd.propTypes = {
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
kd.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
let wo;
const z2 = new Uint8Array(16);
function H2() {
  if (!wo && (wo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return wo(z2);
}
const ze = [];
for (let e = 0; e < 256; ++e)
  ze.push((e + 256).toString(16).slice(1));
function V2(e, t = 0) {
  return ze[e[t + 0]] + ze[e[t + 1]] + ze[e[t + 2]] + ze[e[t + 3]] + "-" + ze[e[t + 4]] + ze[e[t + 5]] + "-" + ze[e[t + 6]] + ze[e[t + 7]] + "-" + ze[e[t + 8]] + ze[e[t + 9]] + "-" + ze[e[t + 10]] + ze[e[t + 11]] + ze[e[t + 12]] + ze[e[t + 13]] + ze[e[t + 14]] + ze[e[t + 15]];
}
const $2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Sh = {
  randomUUID: $2
};
function U2(e, t, n) {
  if (Sh.randomUUID && !e)
    return Sh.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || H2)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, V2(r);
}
const G2 = (e, t, n) => (r, i, a, ...o) => t(r) && r[i] === void 0 ? new Error(
  `${a}: ${i} is required when ${n}`
) : e(r, i, a, ...o), W2 = (e, t) => t.every((n) => e[n] !== void 0), lu = (e, t) => G2(
  e,
  (n) => Array.isArray(t) ? W2(n, t) : n[t] === !0,
  `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`
), K0 = /* @__PURE__ */ m.forwardRef(({
  className: e,
  screenReaderText: t,
  ...n
}, r) => {
  const i = {
    ...n,
    className: R("pgn__spinner", e),
    role: t ? "status" : void 0
  };
  return /* @__PURE__ */ m.createElement(_0, {
    ...i,
    ref: r
  }, t && /* @__PURE__ */ m.createElement("span", {
    className: "sr-only"
  }, t));
});
function q2({
  event: e,
  currentIndex: t,
  activeElement: n
}) {
  t !== -1 && (n.click(), e.preventDefault());
}
function K2({
  event: e,
  currentIndex: t,
  availableElements: n
}) {
  t === -1 && n[0].focus();
  let r;
  (e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r == null || r.focus(), e.preventDefault();
}
function Q2({
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
  i === "Enter" && a && q2({
    event: e,
    currentIndex: s,
    activeElement: a
  }), K2({
    event: e,
    currentIndex: s,
    availableElements: o
  });
}
function X2(e = {}) {
  const {
    selectors: t,
    ignoredKeys: n
  } = e, r = y.useRef();
  return y.useEffect(() => {
    const i = (a) => {
      Q2({
        event: a,
        ignoredKeys: n,
        parentNode: r.current,
        selectors: t
      });
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, t]), r;
}
const _h = {
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
}, bd = /* @__PURE__ */ y.forwardRef(({
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
  customErrorMessageText: d,
  onChange: f,
  helpMessage: x,
  ...E
}, g) => {
  const k = Pr(), h = y.useRef(), v = X2({
    selectors: t,
    ignoredKeys: n
  }), [w, b] = y.useState(!1), [C, S] = y.useState(!1), [_, T] = y.useState(!1), [F, P] = y.useState(!1), [V, z] = y.useState((i == null ? void 0 : i.userProvidedText) || ""), [G, L] = y.useState([]), [K, Z] = y.useState(null), [J, N] = y.useState(!0), [O, B] = y.useState(""), q = (ae) => {
    Z(ae);
  }, H = () => {
    L([]), b(!1), Z(null);
  }, Ie = (ae, me) => {
    const pe = ae.currentTarget.getAttribute("data-value"), de = ae.currentTarget.id;
    T(!0), P(!0), z(pe), f && (!i || i && pe !== i.selectionValue) && f({
      userProvidedText: pe,
      selectionValue: pe,
      selectionId: de
    }), H(), me && me(ae);
  };
  function ce(ae = "") {
    let me = m.Children.map(e, (pe) => {
      const {
        children: de,
        onClick: Yt,
        ...Dr
      } = pe.props, nr = pe.props.id ?? U2();
      return /* @__PURE__ */ m.cloneElement(pe, {
        ...Dr,
        children: de,
        "data-value": de,
        onClick: (D) => Ie(D, Yt),
        id: nr,
        onFocus: () => q(nr)
      });
    });
    return ae.length > 0 && (me = me.filter((pe) => pe.props.children.toLowerCase().includes(ae.toLowerCase()))), me;
  }
  const re = () => {
    L(ce(V)), N(!0), B(""), b(!0);
  }, X = () => {
    w ? H() : re();
  }, Se = /* @__PURE__ */ m.createElement(al, {
    className: "pgn__form-autosuggest__icon-button",
    "data-testid": "autosuggest-iconbutton",
    tabIndex: "-1",
    src: w ? l2 : s2,
    iconAs: Et,
    size: "sm",
    variant: "secondary",
    alt: w ? k.formatMessage(_h.iconButtonClosed) : k.formatMessage(_h.iconButtonOpened),
    onClick: X
  }), je = () => {
    S(!0);
  }, Bt = () => {
    if (c) {
      N(!1), B(d);
      return;
    }
    if (o && !_) {
      N(!1), B(s);
      return;
    }
    if (_ && l && !F) {
      N(!1), B(u);
      return;
    }
    N(!0), B("");
  };
  y.useImperativeHandle(g, () => ({
    // expose updateErrorStateAndErrorMessage so consumers can trigger validation
    // when changing the value of the control externally
    updateErrorStateAndErrorMessage: Bt
  }));
  const jt = () => {
    S(!1), H(), Bt();
  }, ht = (ae) => {
    if (C) {
      if (ae.key === "Escape") {
        ae.preventDefault(), h && h.current.focus(), H();
        return;
      }
      ae.key === "Tab" && jt();
    }
  }, ot = (ae) => {
    v.current && !v.current.contains(ae.target) && C && jt();
  };
  y.useEffect(() => (document.addEventListener("keydown", ht), document.addEventListener("click", ot, !0), () => {
    document.removeEventListener("click", ot, !0), document.removeEventListener("keydown", ht);
  })), y.useEffect(() => {
    z(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), P(!!i && !!i.selectionValue);
  }, [i]);
  const dn = () => {
    re();
  }, Tn = (ae) => {
    const me = ae.target.value;
    if (!me.length) {
      z(""), T(!1), P(!1), L([]), H(), f && f({
        userProvidedText: "",
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    T(!0);
    const pe = ce(me);
    L(pe);
    const de = pe.find((Yt) => Yt.props.children.toLowerCase() === me.toLowerCase());
    if (!de) {
      P(!1), z(me), f && f({
        userProvidedText: me,
        selectionValue: "",
        selectionId: ""
      });
      return;
    }
    P(!0), z(de.props.children), f && f({
      userProvidedText: de.props.children,
      selectionValue: de.props.children,
      selectionId: de.props.id
    });
  }, {
    getControlProps: Nn
  } = Lt(), Pe = Nn(E);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__wrapper",
    ref: v,
    onFocus: je
  }, /* @__PURE__ */ m.createElement("div", {
    "aria-live": "assertive",
    className: "sr-only",
    "data-testid": "autosuggest-screen-reader-options-count"
  }, `${G.length} options found`), /* @__PURE__ */ m.createElement(cl, {
    controlId: Pe.id,
    isInvalid: !J
  }, /* @__PURE__ */ m.createElement(Di, {
    ref: h,
    "aria-expanded": (G.length > 0).toString(),
    "aria-owns": "pgn__form-autosuggest__dropdown-box",
    role: "combobox",
    "aria-autocomplete": "list",
    autoComplete: "off",
    value: V,
    "aria-invalid": O,
    "aria-activedescendant": K,
    onChange: Tn,
    onClick: dn,
    trailingElement: Se,
    "data-testid": "autosuggest-textbox-input",
    ...Pe
  }), x && J && /* @__PURE__ */ m.createElement(Xn, {
    type: "default"
  }, x), !J && /* @__PURE__ */ m.createElement(Xn, {
    type: "invalid",
    "feedback-for": Pe.name
  }, O)), /* @__PURE__ */ m.createElement("ul", {
    id: "pgn__form-autosuggest__dropdown-box",
    className: "pgn__form-autosuggest__dropdown",
    role: "listbox"
  }, a ? /* @__PURE__ */ m.createElement("div", {
    className: "pgn__form-autosuggest__dropdown-loading"
  }, /* @__PURE__ */ m.createElement(K0, {
    animation: "border",
    variant: "dark",
    screenReaderText: r,
    "data-testid": "autosuggest-loading-spinner"
  })) : G.length > 0 && G));
});
bd.defaultProps = {
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
bd.propTypes = {
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
  valueRequiredErrorMessageText: lu(p.string, "isValueRequired"),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: p.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: lu(p.string, "isSelectionRequired"),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: p.bool,
  /** Informs user of other errors. */
  customErrorMessageText: lu(p.string, "hasCustomError"),
  /** Specifies the name of the base input element. */
  name: p.string,
  /** Selected list item is read-only. */
  readOnly: p.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: p.node,
  /** Specifies the screen reader text */
  screenReaderText: p.string
};
function Y2({
  as: e = "button",
  children: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected: n = !1,
  iconAfter: r,
  iconBefore: i,
  ...a
}) {
  const o = R(a.className, "pgn__menu-item");
  return /* @__PURE__ */ y.createElement(e, {
    ...a,
    className: o
  }, /* @__PURE__ */ m.createElement(m.Fragment, null, i && /* @__PURE__ */ m.createElement(Et, {
    className: "btn-icon-before",
    src: i
  }), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-text"
  }, t), /* @__PURE__ */ m.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), r && /* @__PURE__ */ m.createElement(Et, {
    className: "btn-icon-after",
    src: r
  })));
}
function Cd({
  children: e,
  className: t,
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(Y2, {
    as: "li",
    "data-testid": "autosuggest-optionitem",
    role: "option",
    tabIndex: "-1",
    onClick: n,
    className: R(t, "dropdown-item"),
    ...r
  }, e);
}
Cd.defaultProps = {
  className: null,
  children: null,
  onClick: null
};
Cd.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: p.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: p.func
};
const Z2 = (e) => e, Q0 = /* @__PURE__ */ m.createContext({
  getCheckboxControlProps: Z2,
  hasCheckboxSetProvider: !1
}), X0 = () => y.useContext(Q0);
function Sd({
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
      onBlur: c.onBlur ? gr(n, c.onBlur) : n,
      /* istanbul ignore next */
      onFocus: c.onFocus ? gr(r, c.onFocus) : r,
      /* istanbul ignore next */
      onChange: c.onChange ? gr(i, c.onChange) : i,
      checked: s ? a.includes(c.value) : void 0,
      defaultChecked: s ? void 0 : o && o.includes(c.value)
    }),
    onBlur: n,
    onFocus: r,
    onChange: i,
    hasCheckboxSetProvider: !0
  };
  return /* @__PURE__ */ m.createElement(Q0.Provider, {
    value: u
  }, e);
}
Sd.propTypes = {
  children: p.node.isRequired,
  name: p.string,
  onBlur: p.func,
  onFocus: p.func,
  onChange: p.func,
  value: p.arrayOf(p.string),
  defaultValue: p.arrayOf(p.string)
};
Sd.defaultProps = {
  onBlur: void 0,
  name: void 0,
  onFocus: void 0,
  onChange: void 0,
  value: void 0,
  defaultValue: void 0
};
const _d = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const {
    getCheckboxControlProps: r,
    hasCheckboxSetProvider: i
  } = X0(), a = m.useRef(), o = n || a, {
    getControlProps: s
  } = Lt();
  let l = s({
    ...t,
    className: R("pgn__form-checkbox-input", t.className)
  });
  return i && (l = r(l)), m.useEffect(() => {
    o.current && (o.current.indeterminate = e);
  }, [o, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...l,
    ref: o
  });
});
_d.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
_d.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const fl = /* @__PURE__ */ m.forwardRef(({
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
    hasCheckboxSetProvider: d
  } = X0(), {
    hasFormGroupProvider: f,
    useSetIsControlGroupEffect: x,
    getControlProps: E
  } = Lt();
  x(!0);
  const k = f && !d ? {
    ...E({}),
    role: "group"
  } : {}, h = /* @__PURE__ */ m.createElement(s, {
    ...u,
    className: n,
    ref: c
  });
  return /* @__PURE__ */ m.createElement(cl, {
    controlId: u.id,
    isInvalid: a,
    isValid: o
  }, /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__form-checkbox", t, {
      "pgn__form-control-valid": o,
      "pgn__form-control-invalid": a,
      "pgn__form-control-disabled": u.disabled,
      "pgn__form-control-label-left": !!l
    }),
    ...k
  }, h, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(xd, {
    className: r
  }, e), i && /* @__PURE__ */ m.createElement(Xn, {
    hasIcon: !1
  }, i))));
});
fl.propTypes = {
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
fl.defaultProps = {
  id: void 0,
  className: void 0,
  controlClassName: void 0,
  labelClassName: void 0,
  description: void 0,
  isInvalid: !1,
  isValid: !1,
  controlAs: _d,
  floatLabelLeft: !1,
  disabled: !1
};
const Ad = /* @__PURE__ */ m.forwardRef(({
  isIndeterminate: e,
  ...t
}, n) => {
  const r = m.useRef(), i = n || r, {
    getControlProps: a
  } = Lt(), o = a({
    ...t,
    className: R("pgn__form-switch-input", t.className)
  });
  return m.useEffect(() => {
    i.current && (i.current.indeterminate = e);
  }, [i, e]), /* @__PURE__ */ m.createElement("input", {
    type: "checkbox",
    ...o,
    ref: i
  });
});
Ad.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: p.bool,
  /** Specifies class name to append to the base element. */
  className: p.string
};
Ad.defaultProps = {
  isIndeterminate: !1,
  className: void 0
};
const Td = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  helperText: n,
  ...r
}, i) => /* @__PURE__ */ m.createElement("div", {
  className: "d-inline-flex flex-column"
}, /* @__PURE__ */ m.createElement(fl, {
  className: R("pgn__form-switch", t),
  ...r,
  role: "switch",
  ref: i,
  controlAs: Ad,
  isValid: null,
  isInvalid: null,
  description: null
}, e), n && /* @__PURE__ */ m.createElement("div", {
  className: "pgn__form-switch-helper-text"
}, n)));
Td.propTypes = {
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
Td.defaultProps = {
  className: void 0,
  labelClassName: void 0,
  helperText: void 0,
  floatLabelLeft: !1
};
function ml({
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
  } = Lt();
  c(!0);
  const d = u(l);
  return /* @__PURE__ */ m.createElement(Sd, {
    name: t,
    value: n,
    defaultValue: r,
    onFocus: o,
    onBlur: s,
    onChange: a
  }, /* @__PURE__ */ m.createElement(dl, {
    role: "group",
    isInline: i,
    ...d
  }, e));
}
ml.propTypes = {
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
ml.defaultProps = {
  className: void 0,
  value: void 0,
  defaultValue: void 0,
  isInline: !1,
  onChange: void 0,
  onFocus: void 0,
  onBlur: void 0
};
const ee = Xt;
ee.Control = Di;
ee.Radio = Ed;
ee.RadioSet = kd;
ee.Autosuggest = bd;
ee.AutosuggestOption = Cd;
ee.Checkbox = fl;
ee.CheckboxSet = ml;
ee.Switch = Td;
ee.SwitchSet = ml;
ee.Label = xd;
ee.Group = L2;
ee.Text = pl;
const Y0 = /* @__PURE__ */ m.createContext({
  onClose: () => {
  },
  isOpen: !1,
  isBlocking: !1
});
function J2({
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
  return /* @__PURE__ */ m.createElement(Y0.Provider, {
    value: i
  }, r);
}
var Ho = "right-scroll-bar-position", Vo = "width-before-scroll-bar", eA = "with-scroll-bars-hidden", tA = "--removed-body-scroll-bar-size";
function uu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nA(e, t) {
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
var rA = typeof window < "u" ? y.useLayoutEffect : y.useEffect, Ah = /* @__PURE__ */ new WeakMap();
function Z0(e, t) {
  var n = nA(null, function(r) {
    return e.forEach(function(i) {
      return uu(i, r);
    });
  });
  return rA(function() {
    var r = Ah.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), o = n.current;
      i.forEach(function(s) {
        a.has(s) || uu(s, null);
      }), a.forEach(function(s) {
        i.has(s) || uu(s, o);
      });
    }
    Ah.set(n, e);
  }, [e]), n;
}
function J0(e) {
  return e;
}
function ey(e, t) {
  t === void 0 && (t = J0);
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
function Nd(e, t) {
  return t === void 0 && (t = J0), ey(e, t);
}
function Id(e) {
  e === void 0 && (e = {});
  var t = ey(null);
  return t.options = M({ async: !0, ssr: !1 }, e), t;
}
var ty = function(e) {
  var t = e.sideCar, n = un(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, M({}, n));
};
ty.isSideCarExport = !0;
function Pd(e, t) {
  return e.useMedium(t), ty;
}
var ny = Id(), cu = function() {
}, Fd = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: cu,
    onWheelCapture: cu,
    onTouchMoveCapture: cu
  }), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, x = e.noRelative, E = e.noIsolation, g = e.inert, k = e.allowPinchZoom, h = e.as, v = h === void 0 ? "div" : h, w = e.gapMode, b = un(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, S = Z0([n, t]), _ = M(M({}, b), i);
  return y.createElement(
    y.Fragment,
    null,
    c && y.createElement(C, { sideCar: ny, removeScrollBar: u, shards: d, noRelative: x, noIsolation: E, inert: g, setCallbacks: a, allowPinchZoom: !!k, lockRef: n, gapMode: w }),
    o ? y.cloneElement(y.Children.only(s), M(M({}, _), { ref: S })) : y.createElement(v, M({}, _, { className: l, ref: S }), s)
  );
});
Fd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fd.classNames = {
  fullWidth: Vo,
  zeroRight: Ho
};
var Oc = "data-focus-lock", ry = "data-focus-lock-disabled", iA = "data-no-focus-lock", aA = "data-autofocus-inside", oA = "data-no-autofocus", pu = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, iy = Nd({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), ay = Nd(), sA = Nd(), oy = Id({
  async: !0,
  ssr: typeof document < "u"
}), lA = /* @__PURE__ */ y.createContext(void 0), uA = [], sy = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, i = y.useState(), a = i[0], o = i[1], s = y.useRef(), l = y.useRef(!1), u = y.useRef(null), c = y.useState({}), d = c[1], f = t.children, x = t.disabled, E = x === void 0 ? !1 : x, g = t.noFocusGuards, k = g === void 0 ? !1 : g, h = t.persistentFocus, v = h === void 0 ? !1 : h, w = t.crossFrame, b = w === void 0 ? !0 : w, C = t.autoFocus, S = C === void 0 ? !0 : C;
  t.allowTextSelection;
  var _ = t.group, T = t.className, F = t.whiteList, P = t.hasPositiveIndices, V = t.shards, z = V === void 0 ? uA : V, G = t.as, L = G === void 0 ? "div" : G, K = t.lockProps, Z = K === void 0 ? {} : K, J = t.sideCar, N = t.returnFocus, O = N === void 0 ? !1 : N, B = t.focusOptions, q = t.onActivation, H = t.onDeactivation, Ie = y.useState({}), ce = Ie[0], re = y.useCallback(function(Pe) {
    var ae = Pe.captureFocusRestore;
    if (!u.current) {
      var me, pe = (me = document) == null ? void 0 : me.activeElement;
      u.current = pe, pe !== document.body && (u.current = ae(pe));
    }
    s.current && q && q(s.current), l.current = !0, d();
  }, [q]), X = y.useCallback(function() {
    l.current = !1, H && H(s.current), d();
  }, [H]), Se = y.useCallback(function(Pe) {
    var ae = u.current;
    if (ae) {
      var me = (typeof ae == "function" ? ae() : ae) || document.body, pe = typeof O == "function" ? O(me) : O;
      if (pe) {
        var de = typeof pe == "object" ? pe : void 0;
        u.current = null, Pe ? Promise.resolve().then(function() {
          return me.focus(de);
        }) : me.focus(de);
      }
    }
  }, [O]), je = y.useCallback(function(Pe) {
    l.current && iy.useMedium(Pe);
  }, []), Bt = ay.useMedium, jt = y.useCallback(function(Pe) {
    s.current !== Pe && (s.current = Pe, o(Pe));
  }, []), ht = $((r = {}, r[ry] = E && "disabled", r[Oc] = _, r), Z), ot = k !== !0, dn = ot && k !== "tail", Tn = Z0([n, jt]), Nn = y.useMemo(function() {
    return {
      observed: s,
      shards: z,
      enabled: !E,
      active: l.current
    };
  }, [E, l.current, z, a]);
  return /* @__PURE__ */ m.createElement(y.Fragment, null, ot && [
    /* @__PURE__ */ m.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: E ? -1 : 0,
      style: pu
    }),
    P ? /* @__PURE__ */ m.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: E ? -1 : 1,
      style: pu
    }) : null
  ], !E && /* @__PURE__ */ m.createElement(J, {
    id: ce,
    sideCar: oy,
    observed: a,
    disabled: E,
    persistentFocus: v,
    crossFrame: b,
    autoFocus: S,
    whiteList: F,
    shards: z,
    onActivation: re,
    onDeactivation: X,
    returnFocus: Se,
    focusOptions: B,
    noFocusGuards: k
  }), /* @__PURE__ */ m.createElement(L, $({
    ref: Tn
  }, ht, {
    className: T,
    onBlur: Bt,
    onFocus: je
  }), /* @__PURE__ */ m.createElement(lA.Provider, {
    value: Nn
  }, f)), dn && /* @__PURE__ */ m.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: E ? -1 : 0,
    style: pu
  }));
});
sy.propTypes = {};
function Rd(e) {
  setTimeout(e, 1);
}
var cA = function(t) {
  return t && "current" in t ? t.current : t;
}, ly = Id(), uy = "data-focus-on-hidden", pA = { preventScroll: !0 }, dA = y.forwardRef(function(e, t) {
  var n = y.useState(!1), r = n[0], i = n[1], a = e.children, o = e.autoFocus, s = e.shards, l = e.crossFrame, u = e.enabled, c = u === void 0 ? !0 : u, d = e.scrollLock, f = d === void 0 ? !0 : d, x = e.focusLock, E = x === void 0 ? !0 : x, g = e.returnFocus, k = g === void 0 ? !0 : g, h = e.inert, v = e.allowPinchZoom, w = e.sideCar, b = e.className, C = e.shouldIgnore, S = e.preventScrollOnFocus, _ = e.style, T = e.as, F = e.gapMode, P = un(e, ["children", "autoFocus", "shards", "crossFrame", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "preventScrollOnFocus", "style", "as", "gapMode"]), V = w, z = r.onActivation, G = r.onDeactivation, L = un(r, ["onActivation", "onDeactivation"]), K = M(M({}, L), {
    as: T,
    style: _,
    sideCar: w,
    shards: s,
    allowPinchZoom: v,
    gapMode: F,
    inert: h,
    enabled: c && f
  });
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(sy, { ref: t, sideCar: w, disabled: !(r && c && E), returnFocus: k, autoFocus: o, shards: s, crossFrame: l, onActivation: z, onDeactivation: G, className: b, whiteList: C, lockProps: K, focusOptions: S ? pA : void 0, as: Fd }, a),
    c && y.createElement(V, M({}, P, { sideCar: ly, setLockProps: i, shards: s }))
  );
});
function Pa(e) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(e);
}
function fA(e, t) {
  if (Pa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mA(e) {
  var t = fA(e, "string");
  return Pa(t) == "symbol" ? t : t + "";
}
function hA(e, t, n) {
  return (t = mA(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vA(e, t) {
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
      Xp(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return o;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var x = a.indexOf(this);
        a.splice(x, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ m.createElement(i, this.props);
      }, c;
    }(y.PureComponent);
    return hA(l, "displayName", "SideEffect(" + n(i) + ")"), l;
  };
}
var pn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Ar = function(e) {
  return Array.isArray(e) ? e : [e];
}, cy = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, gA = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, py = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, dy = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, xA = function(e) {
  return e.hasAttribute("inert");
}, yA = function(e, t) {
  return !e || dy(e) || !gA(e) && !xA(e) && t(py(e));
}, fy = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = yA(t, fy.bind(void 0, e));
  return e.set(t, r), r;
}, wA = function(e, t) {
  return e && !dy(e) ? bA(e) ? t(py(e)) : !1 : !0;
}, my = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = wA(t, my.bind(void 0, e));
  return e.set(t, r), r;
}, hy = function(e) {
  return e.dataset;
}, EA = function(e) {
  return e.tagName === "BUTTON";
}, vy = function(e) {
  return e.tagName === "INPUT";
}, gy = function(e) {
  return vy(e) && e.type === "radio";
}, kA = function(e) {
  return !((vy(e) || EA(e)) && (e.type === "hidden" || e.disabled));
}, bA = function(e) {
  var t = e.getAttribute(oA);
  return ![!0, "true", ""].includes(t);
}, Od = function(e) {
  var t;
  return !!(e && (!((t = hy(e)) === null || t === void 0) && t.focusGuard));
}, Dc = function(e) {
  return !Od(e);
}, CA = function(e) {
  return !!e;
}, SA = function(e, t) {
  var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
  if (i) {
    if (!n)
      return 1;
    if (!r)
      return -1;
  }
  return i || a;
}, _A = function(e) {
  return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Dd = function(e, t, n) {
  return pn(e).map(function(r, i) {
    var a = _A(r);
    return {
      node: r,
      index: i,
      tabIndex: n && a === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : a
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(SA);
}, AA = [
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
], Md = AA.join(","), TA = "".concat(Md, ", [data-focus-guard]"), xy = function(e, t) {
  return pn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? TA : Md) ? [r] : [], xy(r));
  }, []);
}, NA = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? _i([e.contentDocument.body], t) : [e];
}, _i = function(e, t) {
  return e.reduce(function(n, r) {
    var i, a = xy(r, t), o = (i = []).concat.apply(i, a.map(function(s) {
      return NA(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      o,
      // add if node is tabbable itself
      r.parentNode ? pn(r.parentNode.querySelectorAll(Md)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, IA = function(e) {
  var t = e.querySelectorAll("[".concat(aA, "]"));
  return pn(t).map(function(n) {
    return _i([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Ld = function(e, t) {
  return pn(e).filter(function(n) {
    return fy(t, n);
  }).filter(function(n) {
    return kA(n);
  });
}, Th = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), pn(e).filter(function(n) {
    return my(t, n);
  });
}, Bd = function(e, t, n) {
  return Dd(Ld(_i(e, n), t), !0, n);
}, Fa = function(e, t) {
  return Dd(Ld(_i(e), t), !1);
}, PA = function(e, t) {
  return Ld(IA(e), t);
}, xr = function(e, t) {
  return e.shadowRoot ? xr(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : pn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var i = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return i ? xr(i, t) : !1;
    }
    return xr(n, t);
  });
}, FA = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var i = r + 1; i < n; i += 1) {
      var a = e[r].compareDocumentPosition(e[i]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(o, s) {
    return !t.has(s);
  });
}, yy = function(e) {
  return e.parentNode ? yy(e.parentNode) : e;
}, jd = function(e) {
  var t = Ar(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var i = r.getAttribute(Oc);
    return n.push.apply(n, i ? FA(pn(yy(r).querySelectorAll("[".concat(Oc, '="').concat(i, '"]:not([').concat(ry, '="disabled"])')))) : [r]), n;
  }, []);
}, RA = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ra = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ra(t.shadowRoot) : t instanceof HTMLIFrameElement && RA(function() {
      return t.contentWindow.document;
    }) ? Ra(t.contentWindow.document) : t;
  }
}, OA = function(e, t) {
  return e === t;
}, DA = function(e, t) {
  return !!pn(e.querySelectorAll("iframe")).some(function(n) {
    return OA(n, t);
  });
}, wy = function(e, t) {
  return t === void 0 && (t = Ra(cy(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : jd(e).some(function(n) {
    return xr(n, t) || DA(n, t);
  });
}, MA = function(e) {
  e === void 0 && (e = document);
  var t = Ra(e);
  return t ? pn(e.querySelectorAll("[".concat(iA, "]"))).some(function(n) {
    return xr(n, t);
  }) : !1;
}, LA = function(e, t) {
  return t.filter(gy).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, zd = function(e, t) {
  return gy(e) && e.name ? LA(e, t) : e;
}, BA = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(zd(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Nh = function(e) {
  return e[0] && e.length > 1 ? zd(e[0], e) : e[0];
}, Ih = function(e, t) {
  return e.indexOf(zd(t, e));
}, Mc = "NEW_FOCUS", jA = function(e, t, n, r, i) {
  var a = e.length, o = e[0], s = e[a - 1], l = Od(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var u = r !== void 0 ? n.indexOf(r) : -1, c = i ? n.indexOf(i) : u, d = i ? e.indexOf(i) : -1;
    if (u === -1)
      return d !== -1 ? d : Mc;
    if (d === -1)
      return Mc;
    var f = u - c, x = n.indexOf(o), E = n.indexOf(s), g = BA(n), k = r !== void 0 ? g.indexOf(r) : -1, h = i ? g.indexOf(i) : k, v = g.filter(function(T) {
      return T.tabIndex >= 0;
    }), w = r !== void 0 ? v.indexOf(r) : -1, b = i ? v.indexOf(i) : w, C = w >= 0 && b >= 0 ? (
      // old/new are tabbables, measure distance in tabbable space
      b - w
    ) : (
      // or else measure in focusable space
      h - k
    );
    if (!f && d >= 0 || t.length === 0)
      return d;
    var S = Ih(e, t[0]), _ = Ih(e, t[t.length - 1]);
    if (u <= x && l && Math.abs(f) > 1)
      return _;
    if (u >= E && l && Math.abs(f) > 1)
      return S;
    if (f && Math.abs(C) > 1)
      return d;
    if (u <= x)
      return _;
    if (u > E)
      return S;
    if (f)
      return Math.abs(f) > 1 ? d : (a + d + f) % a;
  }
}, zA = function(e) {
  return function(t) {
    var n, r = (n = hy(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Ph = function(e, t, n) {
  var r = e.map(function(a) {
    var o = a.node;
    return o;
  }), i = Th(r.filter(zA(n)));
  return i && i.length ? Nh(i) : Nh(Th(t));
}, Lc = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Lc(e.parentNode.host || e.parentNode, t), t;
}, du = function(e, t) {
  for (var n = Lc(e), r = Lc(t), i = 0; i < n.length; i += 1) {
    var a = n[i];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Ey = function(e, t, n) {
  var r = Ar(e), i = Ar(t), a = r[0], o = !1;
  return i.filter(Boolean).forEach(function(s) {
    o = du(o || s, s) || o, n.filter(Boolean).forEach(function(l) {
      var u = du(a, l);
      u && (!o || xr(u, o) ? o = u : o = du(u, o));
    });
  }), o;
}, Fh = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(PA(r, t));
  }, []);
}, HA = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(CA);
}, VA = function(e, t) {
  var n = Ra(Ar(e).length > 0 ? document : cy(e).ownerDocument), r = jd(e).filter(Dc), i = Ey(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Fa(r, a), s = o.filter(function(E) {
    var g = E.node;
    return Dc(g);
  });
  if (s[0]) {
    var l = Fa([i], a).map(function(E) {
      var g = E.node;
      return g;
    }), u = HA(l, s), c = u.map(function(E) {
      var g = E.node;
      return g;
    }), d = u.filter(function(E) {
      var g = E.tabIndex;
      return g >= 0;
    }).map(function(E) {
      var g = E.node;
      return g;
    }), f = jA(c, d, l, n, t);
    if (f === Mc) {
      var x = (
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        Ph(o, d, Fh(r, a)) || Ph(o, c, Fh(r, a))
      );
      if (x)
        return { node: x };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : u[f];
  }
}, $A = function(e) {
  var t = jd(e).filter(Dc), n = Ey(e, e, t), r = Dd(_i([n], !0), !0, !0), i = _i(t, !1);
  return r.map(function(a) {
    var o = a.node, s = a.index;
    return {
      node: o,
      index: s,
      lockItem: i.indexOf(o) >= 0,
      guard: Od(o)
    };
  });
}, Hd = function(e, t) {
  e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, fu = 0, mu = !1, ky = function(e, t, n) {
  n === void 0 && (n = {});
  var r = VA(e, t);
  if (!mu && r) {
    if (fu > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), mu = !0, setTimeout(function() {
        mu = !1;
      }, 1);
      return;
    }
    fu++, Hd(r.node, n.focusOptions), fu--;
  }
};
function Wi(e) {
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
var UA = function(e) {
  if (!e)
    return null;
  for (var t = [], n = e; n && n !== document.body; )
    t.push({
      current: Wi(n),
      parent: Wi(n.parentElement),
      left: Wi(n.previousElementSibling),
      right: Wi(n.nextElementSibling)
    }), n = n.parentElement;
  return {
    element: Wi(e),
    stack: t,
    ownerDocument: e.ownerDocument
  };
}, GA = function(e) {
  var t, n, r, i, a;
  if (e)
    for (var o = e.stack, s = e.ownerDocument, l = /* @__PURE__ */ new Map(), u = 0, c = o; u < c.length; u++) {
      var d = c[u], f = (t = d.parent) === null || t === void 0 ? void 0 : t.call(d);
      if (f && s.contains(f)) {
        for (var x = (n = d.left) === null || n === void 0 ? void 0 : n.call(d), E = d.current(), g = f.contains(E) ? E : void 0, k = (r = d.right) === null || r === void 0 ? void 0 : r.call(d), h = Bd([f], l), v = (
          // that is element itself
          (a = (i = g ?? // or something in it's place
          (x == null ? void 0 : x.nextElementSibling)) !== null && i !== void 0 ? i : (
            // or somebody to the right, still close enough
            k
          )) !== null && a !== void 0 ? a : (
            // or somebody to the left, something?
            x
          )
        ); v; ) {
          for (var w = 0, b = h; w < b.length; w++) {
            var C = b[w];
            if (v != null && v.contains(C.node))
              return C.node;
          }
          v = v.nextElementSibling;
        }
        if (h.length)
          return h[0].node;
      }
    }
}, by = function(e) {
  var t = UA(e);
  return function() {
    return GA(t);
  };
}, WA = function(e, t, n) {
  if (!e || !t)
    return console.error("no element or scope given"), {};
  var r = Ar(t);
  if (r.every(function(o) {
    return !xr(o, e);
  }))
    return console.error("Active element is not contained in the scope"), {};
  var i = n ? Bd(r, /* @__PURE__ */ new Map()) : Fa(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(o) {
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
}, qA = function(e, t) {
  var n = t ? Bd(Ar(e), /* @__PURE__ */ new Map()) : Fa(Ar(e), /* @__PURE__ */ new Map());
  return {
    first: n[0],
    last: n[n.length - 1]
  };
}, KA = function(e) {
  return Object.assign({
    scope: document.body,
    cycle: !0,
    onlyTabbable: !0
  }, e);
}, Cy = function(e, t, n) {
  t === void 0 && (t = {});
  var r = KA(t), i = WA(e, r.scope, r.onlyTabbable);
  if (i) {
    var a = n(i, r.cycle);
    a && Hd(a.node, r.focusOptions);
  }
}, QA = function(e, t) {
  t === void 0 && (t = {}), Cy(e, t, function(n, r) {
    var i = n.next, a = n.first;
    return i || r && a;
  });
}, XA = function(e, t) {
  t === void 0 && (t = {}), Cy(e, t, function(n, r) {
    var i = n.prev, a = n.last;
    return i || r && a;
  });
}, Sy = function(e, t, n) {
  var r, i = qA(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0), a = i[n];
  a && Hd(a.node, t.focusOptions);
}, YA = function(e, t) {
  t === void 0 && (t = {}), Sy(e, t, "first");
}, ZA = function(e, t) {
  t === void 0 && (t = {}), Sy(e, t, "last");
}, _y = function() {
  return document && document.activeElement === document.body;
}, JA = function() {
  return _y() || MA();
}, ci = null, st = null, Rh = function() {
  return null;
}, pi = null, Oa = !1, Vd = !1, eT = function() {
  return !0;
}, tT = function(t) {
  return (ci.whiteList || eT)(t);
}, nT = function(t, n) {
  pi = {
    observerNode: t,
    portaledElement: n
  };
}, rT = function(t) {
  return pi && pi.portaledElement === t;
};
function Oh(e, t, n, r) {
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
var iT = function(t) {
  return t ? !!Oa : Oa === "meanwhile";
}, aT = function e(t, n, r) {
  return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, oT = function(t, n) {
  return n.some(function(r) {
    return aT(t, r, r);
  });
}, Ay = function(t) {
  return Fa(t, /* @__PURE__ */ new Map());
}, sT = function(t) {
  return !Ay([t.parentNode]).some(function(n) {
    return n.node === t;
  });
}, ws = function() {
  var t = !1;
  if (ci) {
    var n = ci, r = n.observed, i = n.persistentFocus, a = n.autoFocus, o = n.shards, s = n.crossFrame, l = n.focusOptions, u = n.noFocusGuards, c = r || pi && pi.portaledElement;
    if (_y() && st && st !== document.body && (!document.body.contains(st) || sT(st))) {
      var d = Rh();
      d && d.focus();
    }
    var f = document && document.activeElement;
    if (c) {
      var x = [c].concat(o.map(cA).filter(Boolean)), E = function() {
        if (!iT(s) || !u || !st || Vd)
          return !1;
        var w = Ay(x), b = w.findIndex(function(C) {
          var S = C.node;
          return S === st;
        });
        return b === 0 || b === w.length - 1;
      };
      if ((!f || tT(f)) && (i || E() || !JA() || !st && a) && (c && !(wy(x) || f && oT(f, x) || rT(f)) && (document && !st && f && !a ? (f.blur && f.blur(), document.body.focus()) : (t = ky(x, st, {
        focusOptions: l
      }), pi = {})), st = document && document.activeElement, st !== document.body && (Rh = by(st)), Oa = !1), document && f !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var g = document && document.activeElement, k = $A(x), h = k.map(function(v) {
          var w = v.node;
          return w;
        }).indexOf(g);
        h > -1 && (k.filter(function(v) {
          var w = v.guard, b = v.node;
          return w && b.dataset.focusAutoGuard;
        }).forEach(function(v) {
          var w = v.node;
          return w.removeAttribute("tabIndex");
        }), Oh(h, k.length, 1, k), Oh(h, -1, -1, k));
      }
    }
  }
  return t;
}, Ty = function(t) {
  ws() && t && (t.stopPropagation(), t.preventDefault());
}, $d = function() {
  return Rd(ws);
}, lT = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || nT(r, n);
}, uT = function() {
  return null;
}, Ny = function() {
  Vd = !0;
}, Iy = function() {
  Vd = !1, Oa = "just", Rd(function() {
    Oa = "meanwhile";
  });
}, cT = function() {
  document.addEventListener("focusin", Ty), document.addEventListener("focusout", $d), window.addEventListener("focus", Ny), window.addEventListener("blur", Iy);
}, pT = function() {
  document.removeEventListener("focusin", Ty), document.removeEventListener("focusout", $d), window.removeEventListener("focus", Ny), window.removeEventListener("blur", Iy);
};
function dT(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
var Py = {
  moveFocusInside: ky,
  focusInside: wy,
  focusNextElement: QA,
  focusPrevElement: XA,
  focusFirstElement: YA,
  focusLastElement: ZA,
  captureFocusRestore: by
};
function fT(e) {
  var t = e.slice(-1)[0];
  t && !ci && cT();
  var n = ci, r = n && t && t.id === n.id;
  ci = t, n && !r && (n.onDeactivation(), e.filter(function(i) {
    var a = i.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (st = null, (!r || n.observed !== t.observed) && t.onActivation(Py), ws(), Rd(ws)) : (pT(), st = null);
}
iy.assignSyncMedium(lT);
ay.assignMedium($d);
sA.assignMedium(function(e) {
  return e(Py);
});
const mT = vA(dT, fT)(uT);
Pd(oy, mT);
var hT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function vT() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hT();
  return t && e.setAttribute("nonce", t), e;
}
function gT(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yT = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = vT()) && (gT(t, n), xT(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wT = function() {
  var e = yT();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ud = function() {
  var e = wT(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, ET = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, hu = function(e) {
  return parseInt(e || "", 10) || 0;
}, kT = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [hu(n), hu(r), hu(i)];
}, bT = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ET;
  var t = kT(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, CT = Ud(), di = "data-scroll-locked", ST = function(e, t, n, r) {
  var i = e.left, a = e.top, o = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(eA, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(di, `] {
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
  
  .`).concat(Ho, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Vo, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ho, " .").concat(Ho, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(di, `] {
    `).concat(tA, ": ").concat(s, `px;
  }
`);
}, Dh = function() {
  var e = parseInt(document.body.getAttribute(di) || "0", 10);
  return isFinite(e) ? e : 0;
}, _T = function() {
  y.useEffect(function() {
    return document.body.setAttribute(di, (Dh() + 1).toString()), function() {
      var e = Dh() - 1;
      e <= 0 ? document.body.removeAttribute(di) : document.body.setAttribute(di, e.toString());
    };
  }, []);
}, AT = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  _T();
  var a = y.useMemo(function() {
    return bT(i);
  }, [i]);
  return y.createElement(CT, { styles: ST(a, !t, i, n ? "" : "!important") });
}, Bc = !1;
if (typeof window < "u")
  try {
    var Eo = Object.defineProperty({}, "passive", {
      get: function() {
        return Bc = !0, !0;
      }
    });
    window.addEventListener("test", Eo, Eo), window.removeEventListener("test", Eo, Eo);
  } catch {
    Bc = !1;
  }
var jr = Bc ? { passive: !1 } : !1, TT = function(e) {
  return e.tagName === "TEXTAREA";
}, Fy = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !TT(e) && n[t] === "visible")
  );
}, NT = function(e) {
  return Fy(e, "overflowY");
}, IT = function(e) {
  return Fy(e, "overflowX");
}, Mh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Ry(e, r);
    if (i) {
      var a = Oy(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, PT = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, FT = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ry = function(e, t) {
  return e === "v" ? NT(t) : IT(t);
}, Oy = function(e, t) {
  return e === "v" ? PT(t) : FT(t);
}, RT = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, OT = function(e, t, n, r, i) {
  var a = RT(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, l = t.contains(s), u = !1, c = o > 0, d = 0, f = 0;
  do {
    if (!s)
      break;
    var x = Oy(e, s), E = x[0], g = x[1], k = x[2], h = g - k - a * E;
    (E || h) && Ry(e, s) && (d += h, f += E);
    var v = s.parentNode;
    s = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, ko = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lh = function(e) {
  return [e.deltaX, e.deltaY];
}, Bh = function(e) {
  return e && "current" in e ? e.current : e;
}, DT = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, MT = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, LT = 0, zr = [];
function BT(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), i = y.useState(LT++)[0], a = y.useState(Ud)[0], o = y.useRef(e);
  y.useEffect(function() {
    o.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var g = De([e.lockRef.current], (e.shards || []).map(Bh), !0).filter(Boolean);
      return g.forEach(function(k) {
        return k.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), g.forEach(function(k) {
          return k.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = y.useCallback(function(g, k) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !o.current.allowPinchZoom;
    var h = ko(g), v = n.current, w = "deltaX" in g ? g.deltaX : v[0] - h[0], b = "deltaY" in g ? g.deltaY : v[1] - h[1], C, S = g.target, _ = Math.abs(w) > Math.abs(b) ? "h" : "v";
    if ("touches" in g && _ === "h" && S.type === "range")
      return !1;
    var T = Mh(_, S);
    if (!T)
      return !0;
    if (T ? C = _ : (C = _ === "v" ? "h" : "v", T = Mh(_, S)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (w || b) && (r.current = C), !C)
      return !0;
    var F = r.current || C;
    return OT(F, k, g, F === "h" ? w : b);
  }, []), l = y.useCallback(function(g) {
    var k = g;
    if (!(!zr.length || zr[zr.length - 1] !== a)) {
      var h = "deltaY" in k ? Lh(k) : ko(k), v = t.current.filter(function(C) {
        return C.name === k.type && (C.target === k.target || k.target === C.shadowParent) && DT(C.delta, h);
      })[0];
      if (v && v.should) {
        k.cancelable && k.preventDefault();
        return;
      }
      if (!v) {
        var w = (o.current.shards || []).map(Bh).filter(Boolean).filter(function(C) {
          return C.contains(k.target);
        }), b = w.length > 0 ? s(k, w[0]) : !o.current.noIsolation;
        b && k.cancelable && k.preventDefault();
      }
    }
  }, []), u = y.useCallback(function(g, k, h, v) {
    var w = { name: g, delta: k, target: h, should: v, shadowParent: jT(h) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== w;
      });
    }, 1);
  }, []), c = y.useCallback(function(g) {
    n.current = ko(g), r.current = void 0;
  }, []), d = y.useCallback(function(g) {
    u(g.type, Lh(g), g.target, s(g, e.lockRef.current));
  }, []), f = y.useCallback(function(g) {
    u(g.type, ko(g), g.target, s(g, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return zr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, jr), document.addEventListener("touchmove", l, jr), document.addEventListener("touchstart", c, jr), function() {
      zr = zr.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, jr), document.removeEventListener("touchmove", l, jr), document.removeEventListener("touchstart", c, jr);
    };
  }, []);
  var x = e.removeScrollBar, E = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    E ? y.createElement(a, { styles: MT(i) }) : null,
    x ? y.createElement(AT, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jT(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
Pd(ny, BT);
var zT = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Hr = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), Co = {}, vu = 0, Dy = function(e) {
  return e && (e.host || Dy(e.parentNode));
}, HT = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Dy(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, VT = function(e, t, n, r) {
  var i = HT(t, Array.isArray(e) ? e : [e]);
  Co[n] || (Co[n] = /* @__PURE__ */ new WeakMap());
  var a = Co[n], o = [], s = /* @__PURE__ */ new Set(), l = new Set(i), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  i.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else
        try {
          var x = f.getAttribute(r), E = x !== null && x !== "false", g = (Hr.get(f) || 0) + 1, k = (a.get(f) || 0) + 1;
          Hr.set(f, g), a.set(f, k), o.push(f), g === 1 && E && bo.set(f, !0), k === 1 && f.setAttribute(n, "true"), E || f.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", f, h);
        }
    });
  };
  return c(t), s.clear(), vu++, function() {
    o.forEach(function(d) {
      var f = Hr.get(d) - 1, x = a.get(d) - 1;
      Hr.set(d, f), a.set(d, x), f || (bo.has(d) || d.removeAttribute(r), bo.delete(d)), x || d.removeAttribute(n);
    }), vu--, vu || (Hr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), Co = {});
  };
}, $T = function(e, t, n) {
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || zT(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), VT(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, UT = Ud(), GT = `
 [` + uy + `] {
   pointer-events: none !important;
 }
`, WT = function() {
  return y.createElement(UT, { styles: GT });
}, jh = function(e) {
  return "current" in e ? e.current : e;
};
function qT(e) {
  var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, l = y.useState(void 0), u = l[0], c = l[1], d = y.useRef(null), f = y.useRef(0);
  return y.useEffect(function() {
    var x = function(h) {
      h.defaultPrevented || (h.code === "Escape" || h.key === "Escape" || h.keyCode === 27) && n && n(h);
    }, E = function(h) {
      h.defaultPrevented || h.target === d.current || h instanceof MouseEvent && h.button !== 0 || i && i.map(jh).some(function(v) {
        return v && v.contains(h.target) || v === h.target;
      }) || r && r(h);
    }, g = function(h) {
      E(h), f.current = h.touches.length;
    }, k = function(h) {
      f.current = h.touches.length;
    };
    if (u)
      return u.ownerDocument.addEventListener("keydown", x), u.ownerDocument.addEventListener("mousedown", E), u.ownerDocument.addEventListener("touchstart", g), u.ownerDocument.addEventListener("touchend", k), function() {
        u.ownerDocument.removeEventListener("keydown", x), u.ownerDocument.removeEventListener("mousedown", E), u.ownerDocument.removeEventListener("touchstart", g), u.ownerDocument.removeEventListener("touchend", k);
      };
  }, [u, r, n]), y.useEffect(function() {
    if (u)
      return a && a(u), function() {
        o && o();
      };
  }, [!!u]), y.useEffect(function() {
    var x = function() {
      return null;
    }, E = !1, g = function(h) {
      s || (x = $T(Bk([h], (i || []).map(jh)), h.ownerDocument.body, uy)), c(function() {
        return h;
      });
    }, k = function() {
      x(), E || c(null);
    };
    return t({
      onMouseDown: function(h) {
        d.current = h.target;
      },
      onTouchStart: function(h) {
        d.current = h.target;
      },
      onActivation: g,
      onDeactivation: k
    }), function() {
      E = !0, t(!1);
    };
  }, []), y.createElement(WT, null);
}
const KT = Pd(ly, qT);
var QT = function(e) {
  return y.createElement(KT, M({}, e));
}, XT = y.forwardRef(function(e, t) {
  return y.createElement(dA, M({}, e, { ref: t, sideCar: QT }));
});
class YT extends m.Component {
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
    return this.rootElement ? /* @__PURE__ */ dr.createPortal(this.props.children, this.rootElement) : null;
  }
}
function ZT({
  onClick: e
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-backdrop",
    onClick: e,
    onKeyDown: e,
    "data-testid": "modal-backdrop",
    role: "presentation"
  });
}
function JT({
  children: e = null
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-content-container"
  }, e);
}
function eN({
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
  return /* @__PURE__ */ m.createElement(J2, {
    onClose: t,
    isOpen: n,
    isBlocking: r
  }, /* @__PURE__ */ m.createElement(YT, null, /* @__PURE__ */ m.createElement(XT, {
    allowPinchZoom: !0,
    scrollLock: !0,
    enabled: n,
    onEscapeKey: a,
    onClickOutside: a,
    className: R("pgn__modal-layer", i ? `zindex-${i}` : "")
  }, /* @__PURE__ */ m.createElement(JT, null, /* @__PURE__ */ m.createElement(ZT, {
    onClick: a
  }), e))));
}
const hl = /* @__PURE__ */ m.forwardRef(({
  as: e,
  children: t,
  ...n
}, r) => {
  const {
    onClose: i
  } = y.useContext(Y0), a = e, o = {
    ...n,
    className: R("pgn__modal-close-button", n.className),
    onClick: () => {
      i(), n.onClick && n.onClick();
    },
    ref: r
  };
  return /* @__PURE__ */ m.createElement(a, o, t);
});
hl.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the content of the button */
  children: p.node,
  /** Specifies class name to append to the base element */
  className: p.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: p.func
};
hl.defaultProps = {
  as: nt,
  onClick: void 0,
  className: void 0,
  children: null
};
const Gd = /* @__PURE__ */ m.forwardRef(({
  as: e = "div",
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement(e, {
  ...n,
  ref: r,
  className: R("pgn__modal-header", n.className)
}, t));
Gd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Gd.defaultProps = {
  as: "div",
  className: ""
};
function Wd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: R("pgn__modal-title", n.className)
  }, t);
}
Wd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Wd.defaultProps = {
  as: "h2",
  className: void 0
};
function qd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: R("pgn__modal-footer", n.className)
  }, t);
}
qd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
qd.defaultProps = {
  as: "div",
  className: void 0
};
const zh = (e = !0) => {
  const t = y.useRef(null), [n, r] = y.useState(e);
  return y.useEffect(() => {
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
function Kd({
  as: e,
  children: t,
  ...n
}) {
  const [r, i] = zh(), [a, o] = zh(), s = R("pgn__modal-body", n.className, {
    "pgn__modal-body-scroll-top": r,
    "pgn__modal-body-scroll-bottom": a
  });
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: s
  }, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", {
    ref: i
  }), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-body-content"
  }, t), /* @__PURE__ */ m.createElement("div", {
    ref: o
  })));
}
Kd.propTypes = {
  /** Specifies the base element */
  as: p.elementType,
  /** Specifies the contents of the header */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string
};
Kd.defaultProps = {
  as: "div",
  className: void 0
};
function Qd({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: R("pgn__modal-hero-content", n.className)
  }, t);
}
Qd.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
Qd.defaultProps = {
  as: "div",
  className: void 0
};
function Xd({
  as: e,
  backgroundSrc: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...r,
    className: R("pgn__modal-hero-bg", r.className),
    style: {
      backgroundImage: t ? `url(${t})` : void 0,
      ...r.style
    }
  }, n);
}
Xd.propTypes = {
  as: p.elementType,
  backgroundSrc: p.string,
  children: p.node,
  className: p.string,
  style: p.shape({})
};
Xd.defaultProps = {
  as: "div",
  backgroundSrc: void 0,
  children: null,
  className: void 0,
  style: {}
};
function Wa({
  as: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.createElement(e, {
    ...n,
    className: R("pgn__modal-hero", n.className)
  }, t);
}
Wa.propTypes = {
  as: p.elementType,
  children: p.node.isRequired,
  className: p.string
};
Wa.defaultProps = {
  as: "div",
  className: void 0
};
Wa.Content = Qd;
Wa.Background = Xd;
const tN = {
  closeButtonText: {
    id: "pgn.Modal.closeButon",
    defaultMessage: "Close",
    description: "Accessible name for the close button in the modal dialog"
  }
};
function Gt({
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
  isBlocking: d = !1,
  zIndex: f,
  isOverflowVisible: x
}) {
  const E = Pr(), g = s || E.formatMessage(tN.closeButtonText), k = P0({
    query: "(max-width: 767.98px)"
  }), h = c && k;
  return /* @__PURE__ */ m.createElement(eN, {
    isOpen: n,
    onClose: r,
    isBlocking: d,
    zIndex: f
  }, /* @__PURE__ */ m.createElement("div", {
    role: "dialog",
    "aria-label": t,
    className: R("pgn__modal", {
      [`pgn__modal-${h ? "fullscreen" : i}`]: i,
      [`pgn__modal-${a}`]: a,
      "pgn__modal-scroll-fullscreen": l,
      "pgn__modal-visible-overflow": x
    }, u)
  }, o && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__modal-close-container"
  }, /* @__PURE__ */ m.createElement(hl, {
    as: al,
    iconAs: Et,
    invertColors: a === "dark",
    src: M0,
    alt: g
  })), e));
}
Gt.Header = Gd;
Gt.Title = Wd;
Gt.Footer = qd;
Gt.CloseButton = hl;
Gt.Body = Kd;
Gt.Hero = Wa;
function nN() {
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
const Yd = /* @__PURE__ */ m.forwardRef((e, t) => /* @__PURE__ */ m.createElement(Jp, {
  ...e,
  ref: t
})), rN = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
Yd.propTypes = {
  /** Specifies element type for this component */
  as: p.elementType,
  /** Visual style of the badge */
  variant: p.oneOf(rN),
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill: p.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: p.string
};
Yd.defaultProps = {
  as: "span",
  variant: "primary",
  pill: !1,
  bsPrefix: "badge"
};
const My = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => /* @__PURE__ */ m.createElement("div", {
  className: R("pgn__card-body", e),
  ref: r,
  ...n
}, t)), Hh = "card", gu = ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"], iN = ["white", "muted"], Zd = /* @__PURE__ */ m.forwardRef(({
  prefix: e,
  className: t,
  bgColor: n,
  textColor: r,
  borderColor: i,
  hasBody: a = !1,
  children: o,
  as: s = "div",
  ...l
}, u) => {
  const c = R(t, e ? `${e}-${Hh}` : Hh, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
  return /* @__PURE__ */ m.createElement(s, {
    ref: u,
    ...l,
    className: c
  }, a ? /* @__PURE__ */ m.createElement(My, null, o) : o);
});
Zd.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: p.string,
  /** Background color of the card. */
  bgColor: p.oneOf(gu),
  /** Text color of the card. */
  textColor: p.oneOf([...gu, ...iN]),
  /** Border color of the card. */
  borderColor: p.oneOf(gu),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: p.bool,
  /** Set a custom element for this component. */
  as: p.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: p.string,
  /** The content to render inside the card. */
  children: p.node
};
const Or = /* @__PURE__ */ y.createContext({
  orientation: "vertical",
  isLoading: !1,
  variant: "light"
});
function aN({
  orientation: e = "vertical",
  children: t,
  isLoading: n = !1,
  variant: r = "light"
}) {
  return /* @__PURE__ */ m.createElement(Or.Provider, {
    value: {
      orientation: e,
      isLoading: n,
      variant: r
    }
  }, t);
}
const oN = m.createContext({}), Ly = !0;
function sN({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: l = Ly, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof s == "number" && (c["--animation-duration"] = `${s}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof i == "string" || typeof i == "number") && (c.borderRadius = i), a && (c.borderRadius = "50%"), typeof e < "u" && (c["--base-color"] = e), typeof t < "u" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Ai({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
  var l, u, c;
  const d = m.useContext(oN), f = { ...s };
  for (const [w, b] of Object.entries(s))
    typeof b > "u" && delete f[w];
  const x = {
    ...d,
    ...f,
    circle: a
  }, E = {
    ...o,
    ...sN(x)
  };
  let g = "react-loading-skeleton";
  n && (g += ` ${n}`);
  const k = (l = x.inline) !== null && l !== void 0 ? l : !1, h = [], v = Math.ceil(e);
  for (let w = 0; w < v; w++) {
    let b = E;
    if (v > e && w === v - 1) {
      const S = (u = b.width) !== null && u !== void 0 ? u : "100%", _ = e % 1, T = typeof S == "number" ? S * _ : `calc(${S} * ${_})`;
      b = { ...b, width: T };
    }
    const C = m.createElement("span", { className: g, style: b, key: w }, "‌");
    k ? h.push(C) : h.push(m.createElement(
      m.Fragment,
      { key: w },
      C,
      m.createElement("br", null)
    ));
  }
  return m.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (c = x.enableAnimation) !== null && c !== void 0 ? c : Ly }, t ? h.map((w, b) => m.createElement(t, { key: b }, w)) : h);
}
const lN = 20, Jd = /* @__PURE__ */ m.forwardRef(({
  actions: e,
  className: t,
  size: n,
  subtitle: r,
  title: i,
  skeletonHeight: a,
  skeletonWidth: o
}, s) => {
  const {
    isLoading: l
  } = y.useContext(Or), u = y.useCallback((c) => {
    if (/* @__PURE__ */ m.isValidElement(c)) {
      const {
        children: d
      } = c.props, f = {
        size: n,
        children: Array.isArray(d) ? d.map(u) : u(d)
      };
      return /* @__PURE__ */ m.cloneElement(c, f);
    }
    return c;
  }, [n]);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-header", t)
  }, /* @__PURE__ */ m.createElement(Ai, {
    containerClassName: "pgn__card-header-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-header", t),
    ref: s
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-header-content"
  }, i && /* @__PURE__ */ m.createElement("div", {
    className: `pgn__card-header-title-${n}`
  }, i), r && /* @__PURE__ */ m.createElement("div", {
    className: `pgn__card-header-subtitle-${n}`
  }, r)), e && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-header-actions"
  }, n !== "md" ? u(e) : e));
});
Jd.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: p.node,
  /** The class name for the CardHeader component */
  className: p.string,
  /** The title for the CardHeader component */
  title: p.node,
  /** The size of the CardHeader component */
  size: p.oneOf(["sm", "md"]),
  /** The subtitle of the CardHeader component */
  subtitle: p.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: p.number
};
Jd.defaultProps = {
  actions: null,
  className: null,
  size: "md",
  title: null,
  subtitle: null,
  skeletonHeight: lN,
  skeletonWidth: null
};
const uN = /* @__PURE__ */ y.forwardRef(({
  className: e,
  ...t
}, n) => /* @__PURE__ */ m.createElement("div", {
  className: R("pgn__card-divider", e),
  ref: n,
  ...t
})), cN = 100, ef = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  title: n,
  actions: r,
  muted: i,
  skeletonHeight: a,
  skeletonWidth: o
}, s) => {
  const {
    isLoading: l
  } = y.useContext(Or);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-section", e, {
      "is-muted": i
    })
  }, /* @__PURE__ */ m.createElement(Ai, {
    containerClassName: "pgn__card-section-loader",
    height: a,
    width: o
  })) : /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-section", e, {
      "is-muted": i
    }),
    ref: s
  }, n && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-title"
  }, n), t, r && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-section-actions"
  }, r));
});
ef.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies title of the `Section`. */
  title: p.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: p.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: p.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: p.number
};
ef.defaultProps = {
  children: null,
  className: void 0,
  title: void 0,
  actions: void 0,
  muted: !1,
  skeletonHeight: cN,
  skeletonWidth: void 0
};
const pN = 18, tf = /* @__PURE__ */ m.forwardRef(({
  children: e,
  className: t,
  isStacked: n,
  textElement: r,
  skeletonHeight: i,
  skeletonWidth: a,
  orientation: o
}, s) => {
  const {
    orientation: l,
    isLoading: u
  } = y.useContext(Or), c = o || l, d = `pgn__card-footer ${c}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${c}${n ? "-stacked" : ""}`;
  return u ? /* @__PURE__ */ m.createElement("div", {
    className: R(t, d)
  }, /* @__PURE__ */ m.createElement(Ai, {
    containerClassName: "pgn__card-footer-loader",
    height: i,
    width: a
  })) : /* @__PURE__ */ m.createElement("div", {
    className: R(t, d),
    ref: s
  }, r && /* @__PURE__ */ m.createElement("div", {
    className: f
  }, r), e);
});
tf.propTypes = {
  /** Specifies contents of the component. */
  children: p.node,
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: p.node,
  /** Specifies whether to use stacked variant. */
  isStacked: p.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: p.oneOf(["horizontal", "vertical"]),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: p.number
};
tf.defaultProps = {
  children: null,
  className: void 0,
  textElement: void 0,
  isStacked: !1,
  orientation: void 0,
  skeletonHeight: pN,
  skeletonWidth: void 0
};
const By = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", dN = 140, fN = 41, nf = /* @__PURE__ */ m.forwardRef(({
  src: e,
  fallbackSrc: t,
  srcAlt: n,
  logoSrc: r,
  fallbackLogoSrc: i,
  logoAlt: a,
  skeletonHeight: o,
  skeletonWidth: s,
  logoSkeleton: l,
  logoSkeletonHeight: u,
  logoSkeletonWidth: c,
  className: d,
  imageLoadingType: f,
  skeletonDuringImageLoad: x
}, E) => {
  const {
    orientation: g,
    isLoading: k
  } = y.useContext(Or), [h, v] = y.useState(!1), [w, b] = y.useState(!1), C = `pgn__card-wrapper-image-cap ${g}`, S = () => /* @__PURE__ */ m.createElement(Ai, {
    containerClassName: "pgn__card-image-cap-loader",
    height: g === "horizontal" ? "100%" : o,
    width: s
  }), _ = () => /* @__PURE__ */ m.createElement(Ai, {
    containerClassName: "pgn__card-logo-cap",
    height: u,
    width: c
  });
  if (k)
    return /* @__PURE__ */ m.createElement("div", {
      className: R(C, d),
      "data-testid": "image-loader-wrapper"
    }, S(), l && _());
  const T = (F, P, V) => {
    const {
      currentTarget: z
    } = F;
    if (!P || z.src.endsWith(P)) {
      V === "imageCap" ? z.src = By : b(!1);
      return;
    }
    z.src = P;
  };
  return /* @__PURE__ */ m.createElement("div", {
    className: R(d, C),
    ref: E
  }, !!e && /* @__PURE__ */ m.createElement(m.Fragment, null, x && !h && S(), /* @__PURE__ */ m.createElement("img", {
    className: R("pgn__card-image-cap", {
      show: h
    }),
    src: e,
    onError: (F) => T(F, t, "imageCap"),
    onLoad: () => v(!0),
    alt: n,
    loading: f
  })), !!r && /* @__PURE__ */ m.createElement(m.Fragment, null, x && !w && _(), /* @__PURE__ */ m.createElement("img", {
    className: R("pgn__card-logo-cap", {
      show: w
    }),
    src: r,
    onError: (F) => T(F, i, "logoCap"),
    onLoad: () => b(!0),
    alt: a,
    loading: f
  })));
});
nf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies image src. */
  src: p.string,
  /** Specifies fallback image src. */
  fallbackSrc: p.string,
  /** Specifies image alt text. */
  srcAlt: p.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: p.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: p.string,
  /** Specifies logo image alt text. */
  logoAlt: p.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: p.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: p.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: p.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: p.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: p.number,
  /** Specifies loading type for images */
  imageLoadingType: p.oneOf(["eager", "lazy"]),
  /** Render the loading skeleton when the image is loading in
   *  addition to when the whole card is in `isLoading` state */
  skeletonDuringImageLoad: p.bool
};
nf.defaultProps = {
  src: void 0,
  fallbackSrc: By,
  logoSrc: void 0,
  fallbackLogoSrc: void 0,
  className: void 0,
  srcAlt: void 0,
  logoAlt: void 0,
  skeletonHeight: dN,
  logoSkeleton: !1,
  logoSkeletonHeight: fN,
  skeletonWidth: void 0,
  logoSkeletonWidth: void 0,
  imageLoadingType: "eager",
  skeletonDuringImageLoad: !1
};
const rf = /* @__PURE__ */ m.forwardRef(({
  className: e,
  children: t,
  variant: n,
  icon: r,
  title: i,
  actions: a,
  ...o
}, s) => {
  const {
    isLoading: l
  } = y.useContext(Or);
  return l ? /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-status", e),
    "data-testid": "card-status-skeleton",
    ref: s
  }, /* @__PURE__ */ m.createElement(Ai, null)) : /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__card-status", `pgn__card-status__${n}`, e),
    ref: s,
    ...o
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__content"
  }, r && /* @__PURE__ */ m.createElement(Et, {
    className: "pgn__card-status__content-icon",
    src: r
  }), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__message-content"
  }, i && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__heading"
  }, i), t)), !!a && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__card-status__actions"
  }, a));
});
rf.propTypes = {
  /** Specifies the content of the component. */
  children: p.node.isRequired,
  /** The class to append to the base element. */
  className: p.string,
  /** Icon that will be shown in the top-left corner. */
  icon: p.func,
  /** Specifies variant to use. */
  variant: p.oneOf(["primary", "success", "danger", "warning"]),
  /** Specifies title for the `Card.Status`. */
  title: p.oneOfType([p.element, p.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: p.node
};
rf.defaultProps = {
  className: void 0,
  icon: void 0,
  variant: "warning",
  title: void 0,
  actions: void 0
};
const mN = ["light", "dark", "muted"], af = /* @__PURE__ */ m.forwardRef(({
  orientation: e,
  isLoading: t,
  className: n,
  isClickable: r,
  muted: i,
  variant: a,
  ...o
}, s) => {
  const l = i ? "muted" : a;
  return /* @__PURE__ */ m.createElement(aN, {
    orientation: e,
    isLoading: t,
    variant: l
  }, /* @__PURE__ */ m.createElement(Zd, {
    ...o,
    className: R(n, "pgn__card", {
      horizontal: e === "horizontal",
      clickable: r,
      [`pgn__card-${l}`]: l
    }),
    ref: s,
    tabIndex: r ? 0 : -1
  }));
});
af.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** Specifies which orientation to use. */
  orientation: p.oneOf(["vertical", "horizontal"]),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: p.bool,
  /** Specifies loading state. */
  isLoading: p.bool,
  /** Specifies `Card` style variant. */
  variant: p.oneOf(mN),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: p.bool
};
af.defaultProps = {
  ...Zd.defaultProps,
  className: void 0,
  orientation: "vertical",
  isClickable: !1,
  variant: "light",
  isLoading: !1
};
const Me = n0(af, "Card", {
  muted: {
    deprType: ei.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"'
  }
});
Me.Status = rf;
Me.Header = Jd;
Me.Divider = uN;
Me.Section = ef;
Me.Footer = tf;
Me.ImageCap = nf;
Me.Context = Or;
Me.Body = My;
const hN = "Close";
function of({
  children: e,
  footerNode: t,
  beforeBodyNode: n,
  afterBodyNode: r,
  ...i
}) {
  return /* @__PURE__ */ m.createElement(Gt, {
    ...i
  }, /* @__PURE__ */ m.createElement(Gt.Header, null, /* @__PURE__ */ m.createElement(Gt.Title, null, i.title)), n, /* @__PURE__ */ m.createElement(Gt.Body, null, e), r, t && /* @__PURE__ */ m.createElement(Gt.Footer, null, t));
}
of.propTypes = {
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
of.defaultProps = {
  isOpen: !1,
  hasCloseButton: !0,
  size: "md",
  variant: "default",
  closeLabel: hN,
  className: void 0,
  isFullscreenScroll: !1,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null
};
const Vh = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
  if (!e.current || !e.current.style)
    return !1;
  const { children: i } = e.current;
  let a = 0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o].getBoundingClientRect();
    i[o].className.includes(r) ? a += s.width / 2 : a += n ? 0 : s.width;
  }
  return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, $h = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, Uh = "pgn__annotation", Gh = 50, jy = "warning", zy = "dark", Es = ["dark", "warning", "success", "error"];
function Hy(e) {
  return /* @__PURE__ */ m.createElement(ui, {
    ...e
  });
}
function sf({
  now: e,
  label: t,
  variant: n,
  threshold: r,
  thresholdLabel: i,
  thresholdVariant: a,
  progressHint: o,
  thresholdHint: s,
  ...l
}) {
  const u = m.useRef(), c = m.useRef(), d = (r || 0) - (e || 0), f = e < Gh, x = r < Gh, E = Es.includes(n) ? n : jy, g = Es.includes(a) ? a : zy, k = window.getComputedStyle(document.body).getPropertyValue("direction"), h = y.useCallback(() => {
    Vh(u, k, f, Uh), Vh(c, k, x, Uh);
  }, [k, f, x]);
  y.useEffect(() => {
    h();
    const w = new ResizeObserver(() => {
      h();
    }), b = u.current;
    return w.observe(b), () => b && w.unobserve(b);
  }, [h]);
  const v = (w) => /* @__PURE__ */ m.createElement("span", {
    className: "pgn__progress-hint",
    "data-testid": "progress-hint"
  }, w);
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-annotated"
  }, !!t && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: $h(e, k),
    ref: u
  }, !f && v(o), /* @__PURE__ */ m.createElement(xh, {
    variant: E
  }, t), f && v(o)), /* @__PURE__ */ m.createElement(ui, null, /* @__PURE__ */ m.createElement(ui, {
    ...l,
    now: e,
    className: R(`pgn__progress-bar--${E}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
    srOnly: !0
  }), !!r && /* @__PURE__ */ m.createElement(ui, {
    now: d,
    className: `pgn__progress-bar--${g}`,
    srOnly: !0
  })), !!r && !!i && /* @__PURE__ */ m.createElement("div", {
    className: "pgn__progress-info",
    style: $h(r, k),
    ref: c
  }, !x && v(s), /* @__PURE__ */ m.createElement(xh, {
    arrowPlacement: "top",
    variant: g
  }, i), x && v(s)));
}
sf.propTypes = {
  /** Current value of progress. */
  now: p.number,
  /** Show label that represents visual percentage. */
  label: p.node,
  /** The `ProgressBar` style variant to use. */
  variant: p.oneOf(Es),
  /** Specifies an additional `className` to add to the base element. */
  className: p.string,
  /** Threshold current value. */
  threshold: p.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: p.node,
  /** Variant for threshold value. */
  thresholdVariant: p.oneOf(Es),
  /** Text near the progress annotation. */
  progressHint: p.node,
  /** Text near the threshold annotation. */
  thresholdHint: p.node
};
sf.defaultProps = {
  now: void 0,
  label: void 0,
  variant: jy,
  className: void 0,
  threshold: void 0,
  thresholdLabel: void 0,
  thresholdVariant: zy,
  progressHint: void 0,
  thresholdHint: void 0
};
Hy.Annotated = sf;
const qa = /* @__PURE__ */ m.createContext({
  activeKey: ""
}), vN = (e, t) => {
  let n = [];
  switch (t.type) {
    case "remove":
      return e.filter((r) => r.eventKey !== t.eventKey);
    case "register":
    default:
      return e.some((r) => r.eventKey === t.step.eventKey) ? n = e.map((r) => r.eventKey === t.step.eventKey ? t.step : r) : n = [...e, t.step], e.some((r) => r.index) ? n.sort((r, i) => r.index > i.index ? 1 : -1) : n;
  }
};
function Vy({
  children: e,
  activeKey: t
}) {
  const [n, r] = y.useReducer(vN, []), [i, a] = y.useState(0), o = y.useCallback((u) => r({
    step: u,
    type: "register"
  }), []), s = y.useCallback((u) => r({
    eventKey: u,
    type: "remove"
  }), []), l = (u) => u <= i;
  return y.useEffect(() => {
    const u = n.findIndex((c) => c.eventKey === t);
    a((c) => u >= c ? u : c);
  }, [t, n]), /* @__PURE__ */ m.createElement(qa.Provider, {
    value: {
      activeKey: t,
      registerStep: o,
      steps: n,
      removeStep: s,
      getIsViewed: l
    }
  }, e);
}
Vy.propTypes = {
  /** Specifies the content of the `ContextProvider`. */
  children: p.node.isRequired,
  /** Specifies the current step of the `Stepper`. */
  activeKey: p.node.isRequired
};
function lf({
  children: e,
  eventKey: t,
  className: n,
  title: r,
  index: i,
  description: a,
  hasError: o,
  onClick: s
}) {
  const {
    activeKey: l,
    registerStep: u,
    removeStep: c
  } = y.useContext(qa);
  return y.useEffect(() => (u({
    title: r,
    index: i,
    eventKey: t,
    description: a,
    hasError: o,
    onClick: s
  }), () => c(t)), [r, t, a, o, i, u, c, s]), l === t ? /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__stepper-step", n)
  }, e) : null;
}
lf.propTypes = {
  /** Specifies the content of the `Step`. */
  children: p.node.isRequired,
  /** Specifies class name to append to the base element */
  className: p.string,
  /**
   * An identifier of the `Step`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `Step` will be displayed.
   */
  eventKey: p.string.isRequired,
  /** A text of the `Step`. */
  title: p.string.isRequired,
  /** A text under the `title`. */
  description: p.string,
  /** Informs user if this `Step` has errors. */
  hasError: p.bool,
  /**
   * Position of the `Step`, only required if adding error state
   * or conditionally rendering steps.
   * */
  index: p.number,
  /**
   * Click handler for the `Step`. Takes effect only after the `Step` has been visited, making it clickable
   * and invoking this function on click. Should be used to provide navigation between steps.
   */
  onClick: p.func
};
lf.defaultProps = {
  className: void 0,
  description: void 0,
  hasError: !1,
  index: void 0,
  onClick: void 0
};
function Ka({
  title: e,
  isActive: t,
  hasError: n,
  description: r,
  index: i,
  onClick: a
}) {
  const {
    getIsViewed: o
  } = y.useContext(qa), s = o(i + 1), l = o(i), u = s ? /* @__PURE__ */ m.createElement(Et, {
    src: D0
  }) : /* @__PURE__ */ m.createElement("span", null, i + 1), c = /* @__PURE__ */ m.createElement(Et, {
    src: i2,
    "data-testid": "step-error"
  });
  return a && l && !t ? /* @__PURE__ */ m.createElement("button", {
    type: "button",
    "aria-label": `${e} step`,
    className: R("pgn__stepper-header-step", {
      "pgn__stepper-header-step-has-error": n,
      "pgn__stepper-header-step-complete": s
    }),
    onClick: a,
    onKeyPress: a
  }, /* @__PURE__ */ m.createElement(yh, {
    variant: n ? "error" : "primary",
    disabled: !0
  }, n ? c : u), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, e), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, r))) : /* @__PURE__ */ m.createElement("li", {
    className: R("pgn__stepper-header-step", {
      "pgn__stepper-header-step-active": t,
      "pgn__stepper-header-step-has-error": n,
      "pgn__stepper-header-step-complete": s
    }),
    "data-testid": "step"
  }, /* @__PURE__ */ m.createElement(yh, {
    variant: n ? "error" : "primary",
    disabled: !t
  }, n ? c : u), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title-description"
  }, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-title"
  }, e), /* @__PURE__ */ m.createElement("div", {
    className: "pgn__stepper-header-step-description"
  }, r)));
}
Ka.propTypes = {
  /** A number that will be display in the icon of the `HeaderStep`. */
  index: p.number.isRequired,
  /** A text of the `HeaderStep`. */
  title: p.string.isRequired,
  /** Specifies that this `HeaderStep` is active. */
  isActive: p.bool,
  /** Informs user if this `Step` has errors. */
  hasError: p.bool,
  /** A text under the `title`. */
  description: p.string,
  /** Callback fired when element gets clicked. */
  onClick: p.func
};
Ka.defaultProps = {
  isActive: !1,
  hasError: !1,
  description: void 0,
  onClick: void 0
};
function gN() {
  return /* @__PURE__ */ m.createElement("li", {
    "aria-hidden": "true",
    className: "pgn__stepper-header-line"
  });
}
function uf({
  steps: e,
  activeKey: t
}) {
  return /* @__PURE__ */ m.createElement("ul", {
    className: "pgn__stepper-header-step-list"
  }, e.map(({
    label: n,
    ...r
  }, i) => /* @__PURE__ */ m.createElement(m.Fragment, {
    key: r.eventKey
  }, i !== 0 && /* @__PURE__ */ m.createElement(gN, null), /* @__PURE__ */ m.createElement(Ka, {
    ...r,
    index: i,
    isActive: t === r.eventKey
  }, n))));
}
const xN = ({
  activeStepIndex: e,
  totalSteps: t
}) => `Step ${e + 1} of ${t}`;
function vl({
  className: e,
  PageCountComponent: t,
  compactWidth: n
}) {
  const {
    steps: r,
    activeKey: i
  } = y.useContext(qa), a = nN(), o = X_[n] || "small", s = F0[o].maxWidth || 1 / 0;
  if (a.width < s) {
    const u = r.findIndex((d) => d.eventKey === i), c = r[u];
    return /* @__PURE__ */ m.createElement("div", {
      className: R("pgn__stepper-header", e)
    }, /* @__PURE__ */ m.createElement(Ka, {
      ...c,
      index: u,
      isActive: !0
    }), /* @__PURE__ */ m.createElement("div", {
      className: "flex-grow-1"
    }), /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement(t, {
      activeStepIndex: u,
      totalSteps: r.length
    })));
  }
  return /* @__PURE__ */ m.createElement("div", {
    className: R("pgn__stepper-header", e)
  }, /* @__PURE__ */ m.createElement(uf, {
    steps: r,
    activeKey: i
  }));
}
vl.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: p.elementType,
  /** The max width in which the compact view of the header will switch to display the step number that is
   * currently in progress. Options include 'xs', 'sm', 'md', 'lg', 'xl', and 'xxl'.
   */
  compactWidth: p.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"])
};
vl.defaultProps = {
  className: null,
  PageCountComponent: xN,
  compactWidth: "sm"
};
uf.propTypes = {
  steps: p.arrayOf(p.shape({
    eventKey: p.string,
    title: p.string,
    description: p.string,
    hasError: p.bool
  })),
  activeKey: p.string.isRequired
};
uf.defaultProps = {
  steps: []
};
vl.Step = Ka;
function gl({
  as: e,
  children: t,
  eventKey: n,
  ...r
}) {
  const {
    activeKey: i
  } = y.useContext(qa);
  return i === n ? /* @__PURE__ */ m.createElement(e, r, t) : null;
}
gl.propTypes = {
  /** Specifies the content of the `ActionRow`. */
  children: p.node.isRequired,
  /**
   * An identifier of the `ActionRow`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `ActionRow` will be displayed.
   */
  eventKey: p.string.isRequired,
  /** Specifies the base element */
  as: p.elementType
};
gl.defaultProps = {
  as: Aa
};
gl.Spacer = Aa.Spacer;
function vn({
  children: e,
  activeKey: t
}) {
  return /* @__PURE__ */ m.createElement(Vy, {
    activeKey: t
  }, e);
}
vn.propTypes = {
  /**
   * Specifies the content of the `Stepper`.
   */
  children: p.node.isRequired,
  /**
   * The eventKey of the step to display.
   */
  activeKey: p.string.isRequired
};
vn.Step = lf;
vn.Header = vl;
vn.ActionRow = gl;
const yN = /* @__PURE__ */ new Map([
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
function Ti(e, t, n) {
  const r = wN(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
  return typeof r.path != "string" && Wh(r, "path", a), Wh(r, "relativePath", a), r;
}
function wN(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), i = yN.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Wh(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const EN = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function kN(e) {
  return St(this, void 0, void 0, function* () {
    return ks(e) && bN(e.dataTransfer) ? AN(e.dataTransfer, e.type) : CN(e) ? SN(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? _N(e) : [];
  });
}
function bN(e) {
  return ks(e);
}
function CN(e) {
  return ks(e) && ks(e.target);
}
function ks(e) {
  return typeof e == "object" && e !== null;
}
function SN(e) {
  return jc(e.target.files).map((t) => Ti(t));
}
function _N(e) {
  return St(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Ti(n));
  });
}
function AN(e, t) {
  return St(this, void 0, void 0, function* () {
    if (e.items) {
      const n = jc(e.items).filter((i) => i.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(TN));
      return qh($y(r));
    }
    return qh(jc(e.files).map((n) => Ti(n)));
  });
}
function qh(e) {
  return e.filter((t) => EN.indexOf(t.name) === -1);
}
function jc(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function TN(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Kh(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Uy(t) : Kh(e, t);
}
function $y(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? $y(n) : [n]
  ], []);
}
function Kh(e, t) {
  return St(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const o = yield a.getFile();
        return o.handle = a, Ti(o);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Ti(r, (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function NN(e) {
  return St(this, void 0, void 0, function* () {
    return e.isDirectory ? Uy(e) : IN(e);
  });
}
function Uy(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function a() {
      t.readEntries((o) => St(this, void 0, void 0, function* () {
        if (o.length) {
          const s = Promise.all(o.map(NN));
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
function IN(e) {
  return St(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const i = Ti(r, e.fullPath);
        t(i);
      }, (r) => {
        n(r);
      });
    });
  });
}
var xu = function(e, t) {
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
function Qh(e) {
  return RN(e) || FN(e) || Wy(e) || PN();
}
function PN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RN(e) {
  if (Array.isArray(e)) return zc(e);
}
function Xh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(n), !0).forEach(function(r) {
      Gy(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Da(e, t) {
  return MN(e) || DN(e, t) || Wy(e, t) || ON();
}
function ON() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wy(e, t) {
  if (e) {
    if (typeof e == "string") return zc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zc(e, t);
  }
}
function zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function DN(e, t) {
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
function MN(e) {
  if (Array.isArray(e)) return e;
}
var LN = typeof xu == "function" ? xu : xu.default, qy = "file-invalid-type", Ky = "file-too-large", Qy = "file-too-small", BN = "too-many-files", yu = {
  FileInvalidType: qy,
  FileTooLarge: Ky,
  FileTooSmall: Qy
}, jN = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: qy,
    message: "File type must be ".concat(r)
  };
}, Zh = function(t) {
  return {
    code: Ky,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Jh = function(t) {
  return {
    code: Qy,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, zN = {
  code: BN,
  message: "Too many files"
};
function Xy(e, t) {
  var n = e.type === "application/x-moz-file" || LN(e, t);
  return [n, n ? null : jN(t)];
}
function Yy(e, t, n) {
  if (lr(e.size))
    if (lr(t) && lr(n)) {
      if (e.size > n) return [!1, Zh(n)];
      if (e.size < t) return [!1, Jh(t)];
    } else {
      if (lr(t) && e.size < t) return [!1, Jh(t)];
      if (lr(n) && e.size > n) return [!1, Zh(n)];
    }
  return [!0, null];
}
function lr(e) {
  return e != null;
}
function HN(e) {
  var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(l) {
    var u = Xy(l, n), c = Da(u, 1), d = c[0], f = Yy(l, r, i), x = Da(f, 1), E = x[0], g = s ? s(l) : null;
    return d && E && !g;
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
function ev(e) {
  e.preventDefault();
}
function VN(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function $N(e) {
  return e.indexOf("Edge/") !== -1;
}
function UN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return VN(e) || $N(e);
}
function Jt() {
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
function GN() {
  return "showOpenFilePicker" in window;
}
function WN(e) {
  if (lr(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Da(n, 2), i = r[0], a = r[1], o = !0;
      return Zy(i) || (console.warn('Skipped "'.concat(i, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), (!Array.isArray(a) || !a.every(Jy)) && (console.warn('Skipped "'.concat(i, '" because an invalid file extension was provided.')), o = !1), o;
    }).reduce(function(n, r) {
      var i = Da(r, 2), a = i[0], o = i[1];
      return Yh(Yh({}, n), {}, Gy({}, a, o));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function qN(e) {
  if (lr(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Da(n, 2), i = r[0], a = r[1];
      return [].concat(Qh(t), [i], Qh(a));
    }, []).filter(function(t) {
      return Zy(t) || Jy(t);
    }).join(",");
}
function KN(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function QN(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Zy(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Jy(e) {
  return /^.*\.[\w]+$/.test(e);
}
var XN = ["children"], YN = ["open"], ZN = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], JN = ["refKey", "onChange", "onClick"];
function eI(e) {
  return rI(e) || nI(e) || ew(e) || tI();
}
function tI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rI(e) {
  if (Array.isArray(e)) return Hc(e);
}
function wu(e, t) {
  return oI(e) || aI(e, t) || ew(e, t) || iI();
}
function iI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ew(e, t) {
  if (e) {
    if (typeof e == "string") return Hc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hc(e, t);
  }
}
function Hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function aI(e, t) {
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
function oI(e) {
  if (Array.isArray(e)) return e;
}
function tv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(n), !0).forEach(function(r) {
      Vc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cs(e, t) {
  if (e == null) return {};
  var n = sI(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var cf = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = e.children, r = Cs(e, XN), i = nw(r), a = i.open, o = Cs(i, YN);
  return y.useImperativeHandle(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ m.createElement(y.Fragment, null, n(we(we({}, o), {}, {
    open: a
  })));
});
cf.displayName = "Dropzone";
var tw = {
  disabled: !1,
  getFilesFromEvent: kN,
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
cf.defaultProps = tw;
cf.propTypes = {
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
var $c = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function nw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = we(we({}, tw), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, l = t.maxFiles, u = t.onDragEnter, c = t.onDragLeave, d = t.onDragOver, f = t.onDrop, x = t.onDropAccepted, E = t.onDropRejected, g = t.onFileDialogCancel, k = t.onFileDialogOpen, h = t.useFsAccessApi, v = t.autoFocus, w = t.preventDropOnDocument, b = t.noClick, C = t.noKeyboard, S = t.noDrag, _ = t.noDragEventsBubbling, T = t.onError, F = t.validator, P = y.useMemo(function() {
    return qN(n);
  }, [n]), V = y.useMemo(function() {
    return WN(n);
  }, [n]), z = y.useMemo(function() {
    return typeof k == "function" ? k : nv;
  }, [k]), G = y.useMemo(function() {
    return typeof g == "function" ? g : nv;
  }, [g]), L = y.useRef(null), K = y.useRef(null), Z = y.useReducer(lI, $c), J = wu(Z, 2), N = J[0], O = J[1], B = N.isFocused, q = N.isFileDialogActive, H = y.useRef(typeof window < "u" && window.isSecureContext && h && GN()), Ie = function() {
    !H.current && q && setTimeout(function() {
      if (K.current) {
        var W = K.current.files;
        W.length || (O({
          type: "closeDialog"
        }), G());
      }
    }, 300);
  };
  y.useEffect(function() {
    return window.addEventListener("focus", Ie, !1), function() {
      window.removeEventListener("focus", Ie, !1);
    };
  }, [K, q, G, H]);
  var ce = y.useRef([]), re = function(W) {
    L.current && L.current.contains(W.target) || (W.preventDefault(), ce.current = []);
  };
  y.useEffect(function() {
    return w && (document.addEventListener("dragover", ev, !1), document.addEventListener("drop", re, !1)), function() {
      w && (document.removeEventListener("dragover", ev), document.removeEventListener("drop", re));
    };
  }, [L, w]), y.useEffect(function() {
    return !r && v && L.current && L.current.focus(), function() {
    };
  }, [L, v, r]);
  var X = y.useCallback(function(D) {
    T ? T(D) : console.error(D);
  }, [T]), Se = y.useCallback(function(D) {
    D.preventDefault(), D.persist(), de(D), ce.current = [].concat(eI(ce.current), [D.target]), So(D) && Promise.resolve(i(D)).then(function(W) {
      if (!(bs(D) && !_)) {
        var ye = W.length, _e = ye > 0 && HN({
          files: W,
          accept: P,
          minSize: o,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: F
        }), Ue = ye > 0 && !_e;
        O({
          isDragAccept: _e,
          isDragReject: Ue,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(D);
      }
    }).catch(function(W) {
      return X(W);
    });
  }, [i, u, X, _, P, o, a, s, l, F]), je = y.useCallback(function(D) {
    D.preventDefault(), D.persist(), de(D);
    var W = So(D);
    if (W && D.dataTransfer)
      try {
        D.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return W && d && d(D), !1;
  }, [d, _]), Bt = y.useCallback(function(D) {
    D.preventDefault(), D.persist(), de(D);
    var W = ce.current.filter(function(_e) {
      return L.current && L.current.contains(_e);
    }), ye = W.indexOf(D.target);
    ye !== -1 && W.splice(ye, 1), ce.current = W, !(W.length > 0) && (O({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), So(D) && c && c(D));
  }, [L, c, _]), jt = y.useCallback(function(D, W) {
    var ye = [], _e = [];
    D.forEach(function(Ue) {
      var Mi = Xy(Ue, P), Mr = wu(Mi, 2), xl = Mr[0], yl = Mr[1], wl = Yy(Ue, o, a), Xa = wu(wl, 2), El = Xa[0], kl = Xa[1], bl = F ? F(Ue) : null;
      if (xl && El && !bl)
        ye.push(Ue);
      else {
        var Cl = [yl, kl];
        bl && (Cl = Cl.concat(bl)), _e.push({
          file: Ue,
          errors: Cl.filter(function(cw) {
            return cw;
          })
        });
      }
    }), (!s && ye.length > 1 || s && l >= 1 && ye.length > l) && (ye.forEach(function(Ue) {
      _e.push({
        file: Ue,
        errors: [zN]
      });
    }), ye.splice(0)), O({
      acceptedFiles: ye,
      fileRejections: _e,
      isDragReject: _e.length > 0,
      type: "setFiles"
    }), f && f(ye, _e, W), _e.length > 0 && E && E(_e, W), ye.length > 0 && x && x(ye, W);
  }, [O, s, P, o, a, l, f, x, E, F]), ht = y.useCallback(function(D) {
    D.preventDefault(), D.persist(), de(D), ce.current = [], So(D) && Promise.resolve(i(D)).then(function(W) {
      bs(D) && !_ || jt(W, D);
    }).catch(function(W) {
      return X(W);
    }), O({
      type: "reset"
    });
  }, [i, jt, X, _]), ot = y.useCallback(function() {
    if (H.current) {
      O({
        type: "openDialog"
      }), z();
      var D = {
        multiple: s,
        types: V
      };
      window.showOpenFilePicker(D).then(function(W) {
        return i(W);
      }).then(function(W) {
        jt(W, null), O({
          type: "closeDialog"
        });
      }).catch(function(W) {
        KN(W) ? (G(W), O({
          type: "closeDialog"
        })) : QN(W) ? (H.current = !1, K.current ? (K.current.value = null, K.current.click()) : X(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : X(W);
      });
      return;
    }
    K.current && (O({
      type: "openDialog"
    }), z(), K.current.value = null, K.current.click());
  }, [O, z, G, h, jt, X, V, s]), dn = y.useCallback(function(D) {
    !L.current || !L.current.isEqualNode(D.target) || (D.key === " " || D.key === "Enter" || D.keyCode === 32 || D.keyCode === 13) && (D.preventDefault(), ot());
  }, [L, ot]), Tn = y.useCallback(function() {
    O({
      type: "focus"
    });
  }, []), Nn = y.useCallback(function() {
    O({
      type: "blur"
    });
  }, []), Pe = y.useCallback(function() {
    b || (UN() ? setTimeout(ot, 0) : ot());
  }, [b, ot]), ae = function(W) {
    return r ? null : W;
  }, me = function(W) {
    return C ? null : ae(W);
  }, pe = function(W) {
    return S ? null : ae(W);
  }, de = function(W) {
    _ && W.stopPropagation();
  }, Yt = y.useMemo(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, W = D.refKey, ye = W === void 0 ? "ref" : W, _e = D.role, Ue = D.onKeyDown, Mi = D.onFocus, Mr = D.onBlur, xl = D.onClick, yl = D.onDragEnter, wl = D.onDragOver, Xa = D.onDragLeave, El = D.onDrop, kl = Cs(D, ZN);
      return we(we(Vc({
        onKeyDown: me(Jt(Ue, dn)),
        onFocus: me(Jt(Mi, Tn)),
        onBlur: me(Jt(Mr, Nn)),
        onClick: ae(Jt(xl, Pe)),
        onDragEnter: pe(Jt(yl, Se)),
        onDragOver: pe(Jt(wl, je)),
        onDragLeave: pe(Jt(Xa, Bt)),
        onDrop: pe(Jt(El, ht)),
        role: typeof _e == "string" && _e !== "" ? _e : "presentation"
      }, ye, L), !r && !C ? {
        tabIndex: 0
      } : {}), kl);
    };
  }, [L, dn, Tn, Nn, Pe, Se, je, Bt, ht, C, S, r]), Dr = y.useCallback(function(D) {
    D.stopPropagation();
  }, []), nr = y.useMemo(function() {
    return function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, W = D.refKey, ye = W === void 0 ? "ref" : W, _e = D.onChange, Ue = D.onClick, Mi = Cs(D, JN), Mr = Vc({
        accept: P,
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
        onChange: ae(Jt(_e, ht)),
        onClick: ae(Jt(Ue, Dr)),
        tabIndex: -1
      }, ye, K);
      return we(we({}, Mr), Mi);
    };
  }, [K, n, s, ht, r]);
  return we(we({}, N), {}, {
    isFocused: B && !r,
    getRootProps: Yt,
    getInputProps: nr,
    rootRef: L,
    inputRef: K,
    open: ae(ot)
  });
}
function lI(e, t) {
  switch (t.type) {
    case "focus":
      return we(we({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return we(we({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return we(we({}, $c), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return we(we({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return we(we({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return we(we({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return we({}, $c);
    default:
      return e;
  }
}
function nv() {
}
var uI = /* @__PURE__ */ new Map([
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
function Qa(e, t) {
  var n = cI(e);
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
function cI(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), i = uI.get(r);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var pI = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function dI(e) {
  return St(this, void 0, void 0, function() {
    return Ri(this, function(t) {
      return Ss(e) && fI(e.dataTransfer) ? [2, gI(e.dataTransfer, e.type)] : mI(e) ? [2, hI(e)] : Array.isArray(e) && e.every(function(n) {
        return "getFile" in n && typeof n.getFile == "function";
      }) ? [2, vI(e)] : [2, []];
    });
  });
}
function fI(e) {
  return Ss(e);
}
function mI(e) {
  return Ss(e) && Ss(e.target);
}
function Ss(e) {
  return typeof e == "object" && e !== null;
}
function hI(e) {
  return Uc(e.target.files).map(function(t) {
    return Qa(t);
  });
}
function vI(e) {
  return St(this, void 0, void 0, function() {
    var t;
    return Ri(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, Promise.all(e.map(function(r) {
            return r.getFile();
          }))];
        case 1:
          return t = n.sent(), [2, t.map(function(r) {
            return Qa(r);
          })];
      }
    });
  });
}
function gI(e, t) {
  return St(this, void 0, void 0, function() {
    var n, r;
    return Ri(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (n = Uc(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(xI))]) : [3, 2];
        case 1:
          return r = i.sent(), [2, rv(rw(r))];
        case 2:
          return [2, rv(Uc(e.files).map(function(a) {
            return Qa(a);
          }))];
      }
    });
  });
}
function rv(e) {
  return e.filter(function(t) {
    return pI.indexOf(t.name) === -1;
  });
}
function Uc(e) {
  if (e === null)
    return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function xI(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return iv(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? iw(t) : iv(e);
}
function rw(e) {
  return e.reduce(function(t, n) {
    return De(De([], km(t), !1), km(Array.isArray(n) ? rw(n) : [n]), !1);
  }, []);
}
function iv(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject("".concat(e, " is not a File"));
  var n = Qa(t);
  return Promise.resolve(n);
}
function yI(e) {
  return St(this, void 0, void 0, function() {
    return Ri(this, function(t) {
      return [2, e.isDirectory ? iw(e) : wI(e)];
    });
  });
}
function iw(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var i = [];
    function a() {
      var o = this;
      t.readEntries(function(s) {
        return St(o, void 0, void 0, function() {
          var l, u, c;
          return Ri(this, function(d) {
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
                c = Promise.all(s.map(yI)), i.push(c), a(), d.label = 6;
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
function wI(e) {
  return St(this, void 0, void 0, function() {
    return Ri(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(i) {
          var a = Qa(i, e.fullPath);
          n(a);
        }, function(i) {
          r(i);
        });
      })];
    });
  });
}
function aw({
  message: e
}) {
  return /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone-error-wrapper"
  }, e);
}
aw.propTypes = {
  message: p.oneOfType([p.string, p.element]).isRequired
};
function ow({
  errorMsgs: e,
  ...t
}) {
  return /* @__PURE__ */ m.createElement(_r, {
    variant: "danger",
    icon: o2,
    className: "pgn__dropzone-generic-alert",
    ...t
  }, e.map((n) => /* @__PURE__ */ m.createElement("span", {
    key: n
  }, n)));
}
ow.propTypes = {
  errorMsgs: p.arrayOf(p.string).isRequired
};
function sw({
  percent: e,
  variant: t,
  name: n,
  onCancel: r
}) {
  return t === "spinner" ? /* @__PURE__ */ m.createElement(K0, {
    animation: "border",
    "aria-live": "polite",
    screenReaderText: `Uploading ${n}, ${e}% done.`,
    "data-testid": "upload-spinner"
  }) : /* @__PURE__ */ m.createElement("div", {
    className: "w-50"
  }, /* @__PURE__ */ m.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ m.createElement(_a, {
    id: "pgn.Dropzone.UploadProgress.uploadLabel",
    defaultMessage: "Uploading {filename}.",
    description: "A text that is shown near a progress bar during file upload in Dropzone component.",
    values: {
      filename: n
    }
  })), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100"
  }, /* @__PURE__ */ m.createElement(Hy, {
    now: e,
    label: `${e}%`,
    variant: "success",
    className: "flex-grow-1",
    "data-testid": "upload-progress-bar"
  }), /* @__PURE__ */ m.createElement(nt, {
    variant: "tertiary",
    className: "ml-3",
    onClick: r
  }, /* @__PURE__ */ m.createElement(_a, {
    id: "pgn.Dropzone.UploadProgress.cancelLabel",
    defaultMessage: "Cancel",
    description: "Label of a cancel button that is shown during file upload in Dropzone component."
  }))));
}
sw.propTypes = {
  variant: p.oneOf(["spinner", "bar"]).isRequired,
  percent: p.number.isRequired,
  name: p.string.isRequired,
  onCancel: p.func.isRequired
};
const EI = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, lw = (e) => Object.entries(e).reduce((t, n) => {
  const [r, i] = n;
  let a;
  return i.length > 0 ? a = `${i.join(", ").replaceAll(".", "").toUpperCase()}, ` : r.endsWith("/*") ? a = `${r.slice(0, -2)}, ` : a = `${r.split("/").pop().toUpperCase()}, `, t + a;
}, "").slice(0, -2), ni = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / t ** r).toFixed(2))}${n[r]}`;
}, tn = {
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
function _s({
  accept: e,
  minSize: t,
  maxSize: n
}) {
  const r = Pr(), i = () => {
    let a, o;
    if (e) {
      const s = lw(e), l = s.lastIndexOf(",");
      a = r.formatMessage(tn.fileTypeRestriction, {
        count: l === -1 ? 1 : 2,
        firstPart: l === -1 ? s : s.slice(0, l),
        secondPart: l !== -1 && s.slice(l + 1)
      });
    }
    return t && n && Number.isFinite(n) ? o = r.formatMessage(tn.fileSizeBetween, {
      sizeMin: ni(t),
      sizeMax: ni(n)
    }) : n && Number.isFinite(n) ? o = r.formatMessage(tn.fileSizeMax, {
      sizeMax: ni(n)
    }) : t && (o = r.formatMessage(tn.fileSizeMin, {
      sizeMin: ni(t)
    })), a && o ? `${a} (${o})` : a || o;
  };
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", {
    className: "pgn__dropzone__upload-icon-wrapper"
  }, /* @__PURE__ */ m.createElement(Et, {
    src: a2,
    className: "pgn__dropzone__upload-icon"
  })), /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement(_a, {
    id: "pgn.Dropzone.DefaultContent.label",
    description: "A text that appears as a label for input of Dropzone component.",
    defaultMessage: "Drag and drop your file here or click to upload."
  })), [e, t, n].some((a) => a) && /* @__PURE__ */ m.createElement("p", {
    className: "pgn__dropzone__upload-restriction-message"
  }, i()));
}
_s.propTypes = {
  accept: p.objectOf(p.arrayOf(p.string)),
  maxSize: p.number,
  minSize: p.number
};
_s.defaultProps = {
  accept: void 0,
  maxSize: void 0,
  minSize: void 0
};
function pf({
  className: e,
  accept: t,
  minSize: n,
  maxSize: r,
  validator: i,
  errorMessages: a,
  progressVariant: o,
  inputComponent: s,
  onProcessUpload: l,
  onUploadProgress: u,
  onUploadCancel: c,
  ...d
}) {
  const [f, x] = y.useState(!1), [E, g] = y.useState([]), [k, h] = y.useState(0), [v, w] = y.useState(void 0), [b, C] = y.useState(void 0), S = Pr(), {
    uploadError: _,
    invalidSizeLess: T,
    invalidSizeMore: F,
    invalidType: P,
    multipleDragged: V
  } = a, z = async (re) => {
    E && g([]);
    const X = await dI(re);
    X && X.length > 1 && x(!0);
  }, G = () => {
    f && x(!1);
  }, L = (re) => {
    f ? x(!1) : g(re[0].errors.map((X) => {
      switch (X.code) {
        case yu.FileTooLarge:
          return F || S.formatMessage(tn.invalidSizeMore, {
            size: ni(r)
          });
        case yu.FileTooSmall:
          return T || S.formatMessage(tn.invalidSizeLess, {
            size: ni(n)
          });
        case yu.FileInvalidType:
          return P || S.formatMessage(tn.invalidType, {
            count: EI(t) ? 2 : 1,
            typeString: lw(t)
          });
        default:
          return S.formatMessage(tn.unexpectedValidationError);
      }
    }));
  }, K = (re) => {
    const X = Math.round(re.loaded * 100 / re.total);
    h(X), u(X, re);
  }, Z = (re) => {
    re.code !== "ERR_CANCELED" && (h(0), g([_ || S.formatMessage(tn.uploadError)]));
  }, J = (re) => {
    const X = new AbortController();
    C(X);
    const Se = {
      onUploadProgress: K,
      signal: X.signal
    };
    l({
      fileData: re,
      requestConfig: Se,
      handleError: Z
    });
  }, N = async (re) => {
    const X = re[0];
    if (i) {
      const je = await i(X);
      if (je) {
        g([je]);
        return;
      }
    }
    E && g([]);
    const Se = new FormData();
    Se.append("file", X), w(X.name), J(Se);
  }, O = () => {
    b.abort(), h(0), c();
  }, {
    getRootProps: B,
    getInputProps: q,
    isDragActive: H,
    isDragReject: Ie
  } = nw({
    multiple: !1,
    maxFiles: 1,
    maxSize: r,
    minSize: n,
    onDragLeave: G,
    onDragEnter: z,
    onDropRejected: L,
    onDropAccepted: N,
    accept: t,
    disabled: k && k !== 100
  }), ce = () => f ? /* @__PURE__ */ m.createElement(aw, {
    message: V || S.formatMessage(tn.multipleDragged)
  }) : E.length > 0 ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ow, {
    errorMsgs: E
  }), s || /* @__PURE__ */ m.createElement(_s, {
    minSize: n,
    maxSize: r,
    accept: t
  })) : k && k !== 100 ? /* @__PURE__ */ m.createElement(sw, {
    variant: o,
    percent: k,
    name: v,
    onCancel: O
  }) : s || /* @__PURE__ */ m.createElement(_s, {
    minSize: n,
    maxSize: r,
    accept: t
  });
  return /* @__PURE__ */ m.createElement("div", {
    "data-testid": "dropzone-container",
    ...B({
      className: R("pgn__dropzone", e, {
        "pgn__dropzone-validation-error": f || E.length > 0 || Ie,
        "pgn__dropzone-active": H && !Ie
      })
    }),
    ...d
  }, /* @__PURE__ */ m.createElement("input", {
    ...q()
  }), /* @__PURE__ */ m.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, ce()));
}
pf.defaultProps = {
  className: void 0,
  accept: void 0,
  maxSize: 1 / 0,
  minSize: 0,
  onUploadProgress: () => {
  },
  onUploadCancel: () => {
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
pf.propTypes = {
  /** Specifies class name to append to the base element. */
  className: p.string,
  /**
   * Set accepted file types.
   * This should be an object with the keys set to the
   * [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   * and the values to an array of file extensions.
   */
  accept: p.objectOf(p.arrayOf(p.string)),
  /** Maximum file size (in bytes). */
  maxSize: p.number,
  /** Minimum file size (in bytes). */
  minSize: p.number,
  /**
   * A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   */
  onUploadProgress: p.func,
  /** A callback fired upon successful upload, receives Response object as a single argument. */
  onUploadCancel: p.func,
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
  onProcessUpload: p.func.isRequired,
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
  errorMessages: p.shape({
    invalidType: p.oneOfType([p.string, p.element]),
    invalidSizeLess: p.oneOfType([p.string, p.element]),
    invalidSizeMore: p.oneOfType([p.string, p.element]),
    multipleDragged: p.oneOfType([p.string, p.element]),
    uploadError: p.oneOfType([p.string, p.element])
  }),
  /** Specifies how the upload progress should be displayed, component shows either spinner or a progress bar. */
  progressVariant: p.oneOf(["spinner", "bar"]),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: p.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: p.oneOfType([p.elementType, p.node])
};
function kI() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let r = 0; r < t.length; r++) {
    const i = t[r].trim();
    if (i.startsWith(e + "="))
      return i.substring(e.length + 1);
  }
  const n = document.querySelector('meta[name="csrf-token"]');
  return n ? n.getAttribute("content") || "" : (console.warn("CSRF token not found"), "");
}
async function uw(e, t, n = {}) {
  const r = e.handlerUrl(e.element, t);
  try {
    const i = await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": kI()
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
const bI = ({
  displayName: e,
  onDisplayNameChange: t
}) => /* @__PURE__ */ A.jsx("div", { className: "wizard-step-content", children: /* @__PURE__ */ A.jsxs(Me, { className: "mb-3", children: [
  /* @__PURE__ */ A.jsx(Me.Header, { children: /* @__PURE__ */ A.jsx("h4", { className: "h6 mb-0", children: "Content Information" }) }),
  /* @__PURE__ */ A.jsx(Me.Section, { children: /* @__PURE__ */ A.jsxs(ee.Group, { children: [
    /* @__PURE__ */ A.jsx(ee.Label, { children: "Display Name *" }),
    /* @__PURE__ */ A.jsx(
      ee.Control,
      {
        type: "text",
        value: e,
        onChange: (n) => t(n.target.value),
        placeholder: "e.g., Exam Transcript Commentary",
        required: !0
      }
    ),
    /* @__PURE__ */ A.jsx(ee.Text, { className: "text-muted", children: "Internal name shown in Studio (not visible to students)" })
  ] }) })
] }) }), CI = ({
  imageUrl: e,
  uploading: t,
  onImageUpload: n,
  onOpenAssetPicker: r
}) => /* @__PURE__ */ A.jsxs("div", { className: "wizard-step-content", children: [
  /* @__PURE__ */ A.jsxs(Me, { className: "mb-3", children: [
    /* @__PURE__ */ A.jsx(Me.Header, { children: /* @__PURE__ */ A.jsx("h4", { className: "h6 mb-0", children: "Select Image for Commentary" }) }),
    /* @__PURE__ */ A.jsxs(Me.Section, { children: [
      e ? /* @__PURE__ */ A.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Current Image" }),
        /* @__PURE__ */ A.jsx("div", { className: "image-preview-container", children: /* @__PURE__ */ A.jsx(
          "img",
          {
            src: e,
            alt: "Commentary image",
            className: "image-preview"
          }
        ) }),
        /* @__PURE__ */ A.jsx("small", { className: "text-muted d-block mt-2", children: e })
      ] }) : /* @__PURE__ */ A.jsxs(_r, { variant: "warning", className: "mb-4", children: [
        /* @__PURE__ */ A.jsx("strong", { children: "No image selected." }),
        " Please upload or select an image to continue."
      ] }),
      /* @__PURE__ */ A.jsxs(ee.Group, { className: "mb-4", children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Upload New Image" }),
        /* @__PURE__ */ A.jsx(
          pf,
          {
            onProcessUpload: n,
            accept: {
              "image/jpeg": [".jpg", ".jpeg"],
              "image/png": [".png"],
              "image/gif": [".gif"],
              "image/webp": [".webp"]
            },
            maxSize: 5 * 1024 * 1024
          }
        ),
        /* @__PURE__ */ A.jsx(ee.Text, { className: "text-muted", children: "Maximum file size: 5MB. Supported formats: JPG, PNG, GIF, WebP" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Or Choose Existing Image" }),
        /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsx(
          nt,
          {
            variant: "outline-primary",
            onClick: r,
            disabled: t,
            children: "Choose from Course Images"
          }
        ) }),
        /* @__PURE__ */ A.jsx(ee.Text, { className: "text-muted", children: "Browse images already uploaded to this course" })
      ] })
    ] })
  ] }),
  !e && /* @__PURE__ */ A.jsxs(_r, { variant: "info", children: [
    /* @__PURE__ */ A.jsx("strong", { children: "Next Step:" }),
    " After selecting an image, you'll add commentary markers to it."
  ] })
] }), SI = ({
  imageUrl: e,
  coordinates: t,
  markerType: n,
  onChange: r
}) => {
  const i = y.useRef(null), [a, o] = y.useState(!1), s = (u) => `preview-${u}`, l = (u) => {
    if (!i.current) return;
    const c = i.current.getBoundingClientRect(), d = (u.clientX - c.left) / c.width * 100, f = (u.clientY - c.top) / c.height * 100, x = Math.max(0, Math.min(100, d)), E = Math.max(0, Math.min(100, f));
    r([x, E]);
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: i,
      className: "marker-canvas",
      onClick: l,
      children: [
        /* @__PURE__ */ A.jsx(
          "img",
          {
            src: e,
            alt: "Click to position marker",
            onLoad: () => o(!0)
          }
        ),
        a && /* @__PURE__ */ A.jsx(
          "div",
          {
            className: `marker-preview ${s(n)}`,
            style: {
              left: `${t[0]}%`,
              top: `${t[1]}%`
            },
            children: "?"
          }
        )
      ]
    }
  );
}, _I = ({
  marker: e,
  markerIndex: t,
  totalMarkers: n,
  imageUrl: r,
  onSave: i,
  onCancel: a,
  saveRef: o
}) => {
  const [s, l] = y.useState(e.label), [u, c] = y.useState(e.commentary), [d, f] = y.useState(e.type), [x, E] = y.useState([e.x, e.y]), [g, k] = y.useState({}), h = t === n - 1 && !e.label, v = () => {
    const C = {};
    return s.trim() ? s.length > 100 && (C.label = "Label must be 100 characters or less") : C.label = "Marker label is required", u.length > 500 && (C.commentary = "Commentary must be 500 characters or less"), k(C), Object.keys(C).length === 0;
  }, w = () => {
    v() && i({
      ...e,
      label: s.trim(),
      commentary: u.trim(),
      type: d,
      x: x[0],
      y: x[1]
    });
  };
  y.useEffect(() => (o && (o.current = w), () => {
    o && (o.current = null);
  }), [o, s, u, d, x]);
  const b = (C) => {
    E(C);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "marker-inline-editor", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "inline-editor-header mb-3", children: [
      /* @__PURE__ */ A.jsx("h5", { className: "mb-1", children: h ? "New Marker" : `Editing Marker ${t + 1}` }),
      /* @__PURE__ */ A.jsx("p", { className: "text-muted small mb-0", children: "Click on the image to position the marker, then configure its properties below." })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "visual-editor-section mb-3", children: [
      /* @__PURE__ */ A.jsxs(_r, { variant: "info", className: "tip-alert", children: [
        /* @__PURE__ */ A.jsx("strong", { children: "Tip:" }),
        " Click on the image to ",
        h ? "place" : "reposition",
        " the marker."
      ] }),
      /* @__PURE__ */ A.jsx(
        SI,
        {
          imageUrl: r,
          coordinates: x,
          markerType: d,
          onChange: b
        }
      )
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "marker-properties-section", children: [
      /* @__PURE__ */ A.jsxs(ee.Group, { className: "mb-3", children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Label *" }),
        /* @__PURE__ */ A.jsx(
          ee.Control,
          {
            type: "text",
            value: s,
            onChange: (C) => {
              l(C.target.value), g.label && k({ ...g, label: "" });
            },
            placeholder: "e.g., Key structure, Important note",
            maxLength: 100,
            isInvalid: !!g.label
          }
        ),
        g.label ? /* @__PURE__ */ A.jsx(ee.Control.Feedback, { type: "invalid", children: g.label }) : /* @__PURE__ */ A.jsxs(ee.Text, { className: "text-muted", children: [
          s.length,
          " / 100 characters"
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs(ee.Group, { className: "mb-3", children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Commentary" }),
        /* @__PURE__ */ A.jsx(
          ee.Control,
          {
            as: "textarea",
            rows: 4,
            value: u,
            onChange: (C) => {
              c(C.target.value), g.commentary && k({ ...g, commentary: "" });
            },
            placeholder: "Detailed commentary that will appear in the popover...",
            maxLength: 500,
            isInvalid: !!g.commentary
          }
        ),
        g.commentary ? /* @__PURE__ */ A.jsx(ee.Control.Feedback, { type: "invalid", children: g.commentary }) : /* @__PURE__ */ A.jsxs(ee.Text, { className: "text-muted", children: [
          u.length,
          " / 500 characters"
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs(ee.Group, { children: [
        /* @__PURE__ */ A.jsx(ee.Label, { children: "Type" }),
        /* @__PURE__ */ A.jsxs("div", { children: [
          /* @__PURE__ */ A.jsx(
            ee.Check,
            {
              type: "radio",
              id: "type-info",
              label: "Info (Blue) - General information",
              checked: d === "info",
              onChange: () => f("info"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ee.Check,
            {
              type: "radio",
              id: "type-warning",
              label: "Warning (Orange) - Important notes",
              checked: d === "warning",
              onChange: () => f("warning"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ee.Check,
            {
              type: "radio",
              id: "type-success",
              label: "Success (Green) - Positive feedback",
              checked: d === "success",
              onChange: () => f("success"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ee.Check,
            {
              type: "radio",
              id: "type-danger",
              label: "Danger (Red) - Critical points",
              checked: d === "danger",
              onChange: () => f("danger")
            }
          )
        ] })
      ] })
    ] })
  ] });
}, AI = ({
  imageUrl: e,
  markers: t,
  onMarkersChange: n,
  editingIndex: r,
  onEditingIndexChange: i,
  onSaveMarker: a,
  onCancelEdit: o,
  saveMarkerRef: s
}) => {
  const l = r !== -1, u = () => {
    const E = {
      id: `marker_${Date.now()}`,
      x: 50,
      y: 50,
      label: "",
      commentary: "",
      type: "info"
    }, g = [...t, E];
    n(g), i(g.length - 1);
  }, c = (E) => {
    i(E);
  }, d = (E) => {
    confirm(`Are you sure you want to delete "${t[E].label || "Marker " + (E + 1)}"?`) && n(t.filter((g, k) => k !== E));
  }, f = (E) => {
    switch (E) {
      case "info":
        return "info";
      case "warning":
        return "warning";
      case "success":
        return "success";
      case "danger":
        return "danger";
      default:
        return "info";
    }
  }, x = (E, g = 100) => E ? E.length <= g ? E : E.substring(0, g) + "..." : "";
  return /* @__PURE__ */ A.jsx("div", { className: "wizard-step-content", children: l ? /* @__PURE__ */ A.jsx(Me, { children: /* @__PURE__ */ A.jsx(Me.Section, { children: /* @__PURE__ */ A.jsx(
    _I,
    {
      marker: t[r],
      markerIndex: r,
      totalMarkers: t.length,
      imageUrl: e,
      onSave: a,
      onCancel: o,
      saveRef: s
    }
  ) }) }) : (
    /* Show list view if not editing */
    /* @__PURE__ */ A.jsx(Me, { children: /* @__PURE__ */ A.jsxs(Me.Section, { children: [
      /* @__PURE__ */ A.jsxs("div", { className: "marker-list-header", children: [
        /* @__PURE__ */ A.jsxs("h4", { className: "marker-list-title", children: [
          "Markers (",
          t.length,
          ")"
        ] }),
        /* @__PURE__ */ A.jsx(
          nt,
          {
            variant: "primary",
            iconBefore: Eh,
            onClick: u,
            size: "lg",
            children: "Add Marker"
          }
        )
      ] }),
      e && /* @__PURE__ */ A.jsx("div", { className: "mb-3 p-2 bg-light rounded", children: /* @__PURE__ */ A.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
        /* @__PURE__ */ A.jsx(
          "img",
          {
            src: e,
            alt: "Commentary image thumbnail",
            className: "image-thumbnail"
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "flex-grow-1", children: [
          /* @__PURE__ */ A.jsx("small", { className: "text-muted d-block", children: "Selected Image" }),
          /* @__PURE__ */ A.jsx("small", { className: "text-muted image-url-preview", children: x(e, 60) })
        ] })
      ] }) }),
      t.length === 0 ? /* @__PURE__ */ A.jsxs("div", { className: "text-center py-5", children: [
        /* @__PURE__ */ A.jsx("p", { className: "text-muted mb-3 empty-state-title", children: "No markers defined yet." }),
        /* @__PURE__ */ A.jsx("p", { className: "text-muted small mb-4", children: "Create commentary markers to annotate different parts of your image." }),
        /* @__PURE__ */ A.jsx(
          nt,
          {
            variant: "primary",
            iconBefore: Eh,
            onClick: u,
            size: "lg",
            children: "Add Your First Marker"
          }
        )
      ] }) : /* @__PURE__ */ A.jsx("div", { className: "marker-list", children: t.map((E, g) => /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "marker-card",
          children: /* @__PURE__ */ A.jsxs("div", { className: "d-flex align-items-start justify-content-between", children: [
            /* @__PURE__ */ A.jsxs("div", { className: "flex-grow-1", children: [
              /* @__PURE__ */ A.jsxs("div", { className: "d-flex align-items-center mb-2", children: [
                /* @__PURE__ */ A.jsxs("span", { className: "marker-card-title", children: [
                  g + 1,
                  ". ",
                  E.label || "(Unlabeled)"
                ] }),
                /* @__PURE__ */ A.jsx(
                  Yd,
                  {
                    variant: f(E.type),
                    className: "marker-type-badge",
                    children: E.type
                  }
                )
              ] }),
              E.commentary && /* @__PURE__ */ A.jsxs("div", { className: "marker-commentary-preview", children: [
                '"',
                x(E.commentary, 120),
                '"'
              ] }),
              /* @__PURE__ */ A.jsxs("div", { className: "marker-position-info", children: [
                "Position: (",
                E.x.toFixed(1),
                "%, ",
                E.y.toFixed(1),
                "%)"
              ] })
            ] }),
            /* @__PURE__ */ A.jsxs("div", { className: "d-flex gap-2 marker-actions", children: [
              /* @__PURE__ */ A.jsx(
                nt,
                {
                  variant: "link",
                  size: "sm",
                  onClick: () => c(g),
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ A.jsx(
                nt,
                {
                  variant: "link",
                  size: "sm",
                  onClick: () => d(g),
                  className: "text-danger",
                  children: "Delete"
                }
              )
            ] })
          ] })
        },
        E.id
      )) })
    ] }) })
  ) });
}, TI = ({
  runtime: e,
  fields: t,
  imageUrl: n,
  uploading: r,
  onImageUpload: i,
  onOpenAssetPicker: a
}) => {
  const [o, s] = y.useState(t.display_name), [l, u] = y.useState(t.markers), [c, d] = y.useState("step1"), [f, x] = y.useState(/* @__PURE__ */ new Set(["step1"])), [E, g] = y.useState(!1), [k, h] = y.useState(null), [v, w] = y.useState(-1), b = y.useRef(null), C = () => {
    const L = [];
    return o.trim() || L.push("Display name is required"), { valid: L.length === 0, errors: L };
  }, S = () => {
    const L = [];
    return n || L.push("Please select an image"), { valid: L.length === 0, errors: L };
  }, _ = () => {
    let L = { valid: !0, errors: [] };
    c === "step1" ? (L = C(), L.valid && (d("step2"), x(/* @__PURE__ */ new Set([...f, "step2"])))) : c === "step2" && (L = S(), L.valid && (d("step3"), x(/* @__PURE__ */ new Set([...f, "step3"])))), L.valid ? h(null) : (h({ type: "error", text: L.errors.join(". ") }), setTimeout(() => h(null), 5e3));
  }, T = () => {
    h(null), c === "step2" ? d("step1") : c === "step3" && d("step2");
  }, F = (L) => {
    f.has(L) && (d(L), h(null));
  }, P = async () => {
    g(!0), h(null);
    try {
      const L = C(), K = S();
      if (!L.valid || !K.valid) {
        const J = [...L.errors, ...K.errors];
        h({ type: "error", text: J.join(". ") }), g(!1);
        return;
      }
      e.notify && e.notify("save", { state: "start" });
      const Z = await uw(e, "save_data", {
        display_name: o.trim(),
        image_url: n,
        markers: l,
        course_id: t.course_id
      });
      Z.success ? (h({ type: "success", text: "Changes saved successfully!" }), e.notify && e.notify("save", { state: "end" })) : (h({ type: "error", text: Z.error || "Failed to save" }), e.notify && e.notify("save", { state: "end" }));
    } catch (L) {
      console.error("Save error:", L), h({ type: "error", text: "An error occurred while saving" }), e.notify && e.notify("save", { state: "end" });
    } finally {
      g(!1);
    }
  }, V = () => {
    e.notify && e.notify("cancel", {});
  }, z = (L) => {
    const K = [...l];
    K[v] = L, u(K), w(-1);
  }, G = () => {
    const L = l[v];
    v !== -1 && !L.label && u(l.filter((K, Z) => Z !== v)), w(-1);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "image-commentary-wizard-view", children: [
    k && /* @__PURE__ */ A.jsx(
      _r,
      {
        variant: k.type === "success" ? "success" : "danger",
        dismissible: !0,
        onClose: () => h(null),
        className: "mb-3",
        children: k.text
      }
    ),
    /* @__PURE__ */ A.jsxs(vn, { activeKey: c, children: [
      /* @__PURE__ */ A.jsx(vn.Header, {}),
      /* @__PURE__ */ A.jsx(
        vn.Step,
        {
          eventKey: "step1",
          title: "Basic Settings",
          description: "Configure display name",
          index: 0,
          onClick: f.has("step1") ? () => F("step1") : void 0,
          children: /* @__PURE__ */ A.jsx(
            bI,
            {
              displayName: o,
              onDisplayNameChange: s
            }
          )
        }
      ),
      /* @__PURE__ */ A.jsx(
        vn.Step,
        {
          eventKey: "step2",
          title: "Select Image",
          description: "Upload or choose an image",
          index: 1,
          onClick: f.has("step2") ? () => F("step2") : void 0,
          children: /* @__PURE__ */ A.jsx(
            CI,
            {
              imageUrl: n,
              uploading: r,
              onImageUpload: i,
              onOpenAssetPicker: a
            }
          )
        }
      ),
      /* @__PURE__ */ A.jsx(
        vn.Step,
        {
          eventKey: "step3",
          title: "Add Markers",
          description: "Create commentary markers",
          index: 2,
          onClick: f.has("step3") ? () => F("step3") : void 0,
          children: /* @__PURE__ */ A.jsx(
            AI,
            {
              imageUrl: n,
              markers: l,
              onMarkersChange: u,
              editingIndex: v,
              onEditingIndexChange: w,
              onSaveMarker: z,
              onCancelEdit: G,
              saveMarkerRef: b
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "image-commentary-sticky-actions d-flex justify-content-end", children: v !== -1 ? (
      /* Show Save/Cancel when editing marker */
      /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx(nt, { variant: "tertiary", onClick: G, className: "mr-2", children: "Cancel" }),
        /* @__PURE__ */ A.jsx(nt, { variant: "primary", onClick: () => {
          b.current && b.current();
        }, children: "Save Marker" })
      ] })
    ) : (
      /* Show navigation buttons when not editing */
      /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        c !== "step1" && /* @__PURE__ */ A.jsx(nt, { variant: "outline-primary", onClick: T, disabled: E, className: "mr-2", children: "Back" }),
        /* @__PURE__ */ A.jsx("div", { style: { flexGrow: 1 } }),
        /* @__PURE__ */ A.jsx(nt, { variant: "tertiary", onClick: V, disabled: E, className: "mr-2", children: "Cancel" }),
        c !== "step3" ? /* @__PURE__ */ A.jsx(nt, { variant: "primary", onClick: _, disabled: E || r, children: "Next" }) : /* @__PURE__ */ A.jsx(nt, { variant: "primary", onClick: P, disabled: E, children: E ? "Saving..." : "Save All Changes" })
      ] })
    ) })
  ] });
};
function NI() {
  const e = "csrftoken", t = document.cookie.split(";");
  for (let n = 0; n < t.length; n++) {
    const r = t[n].trim();
    if (r.startsWith(e + "="))
      return r.substring(e.length + 1);
  }
  return "";
}
const II = ({ runtime: e, fields: t }) => {
  const [n, r] = y.useState(t.image_url), [i, a] = y.useState(!1), [o, s] = y.useState(!1), [l, u] = y.useState(!1), [c, d] = y.useState([]), f = async ({ fileData: g, requestConfig: k, handleError: h }) => {
    a(!0);
    try {
      const v = `/assets/${t.course_id}/`, w = await fetch(v, {
        method: "POST",
        headers: {
          "X-CSRFToken": NI(),
          Accept: "application/json"
        },
        body: g
      });
      let b;
      const C = w.headers.get("content-type");
      if (C && C.includes("application/json"))
        b = await w.json();
      else {
        const S = await w.text();
        console.log("Non-JSON response:", S), b = { error: S || "Upload failed" };
      }
      if (w.ok && b.asset)
        r(b.asset.url);
      else {
        const S = b.error || b.message || JSON.stringify(b) || "Upload failed", _ = new Error(S);
        h(_);
      }
    } catch (v) {
      console.error("Upload error:", v), h(v);
    } finally {
      a(!1);
    }
  }, x = async () => {
    s(!0), u(!0);
    try {
      const g = await uw(e, "list_course_assets", {});
      g.success && g.assets && d(g.assets);
    } catch (g) {
      console.error("Asset list error:", g);
    } finally {
      u(!1);
    }
  }, E = (g) => {
    r(g.url), s(!1);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "image-commentary-studio-view", children: [
    /* @__PURE__ */ A.jsx(
      TI,
      {
        runtime: e,
        fields: t,
        imageUrl: n,
        uploading: i,
        onImageUpload: f,
        onOpenAssetPicker: x
      }
    ),
    /* @__PURE__ */ A.jsx(
      of,
      {
        title: "Choose Course Image",
        isOpen: o,
        onClose: () => s(!1),
        size: "lg",
        isOverflowVisible: !1,
        footerNode: /* @__PURE__ */ A.jsx(nt, { variant: "tertiary", onClick: () => s(!1), children: "Close" }),
        children: l ? /* @__PURE__ */ A.jsx("p", { children: "Loading images..." }) : c.length === 0 ? /* @__PURE__ */ A.jsx("p", { children: "No images found in course. Upload an image first." }) : /* @__PURE__ */ A.jsx("div", { className: "asset-picker-grid", children: c.map((g) => /* @__PURE__ */ A.jsxs(
          "div",
          {
            onClick: () => E(g),
            className: `asset-picker-item ${n === g.url ? "selected" : ""}`,
            children: [
              /* @__PURE__ */ A.jsx(
                "img",
                {
                  src: g.thumbnail_url,
                  alt: g.filename,
                  className: "asset-picker-thumbnail"
                }
              ),
              /* @__PURE__ */ A.jsx("small", { className: "asset-picker-filename", children: g.filename })
            ]
          },
          g.url
        )) })
      }
    )
  ] });
}, OI = (e, t, n) => {
  e.element = t, xx(t).render(
    /* @__PURE__ */ A.jsxs(y.StrictMode, { children: [
      /* @__PURE__ */ A.jsx(d1, { locale: "en", children: /* @__PURE__ */ A.jsx(
        II,
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
  OI as renderBlock
};
//# sourceMappingURL=studio-ui.js.map
